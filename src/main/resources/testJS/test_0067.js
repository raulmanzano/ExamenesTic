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
//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[0]= "1)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[0]= new Array();
 choices[0][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[0][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[0][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[0][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[0] = 3;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 25. Constituci&oacute;n de 1978";
 preguntaids[0] = 25


//  Id pregunta: 4116 Año de creación de pregunta: 2003
 questions[1]= "2)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[1]= new Array();
 choices[1][0] = "HTTP.";
 choices[1][1] = "CCS.";
 choices[1][2] = "Excel.";
 choices[1][3] = "XML.";
 answers[1] = 3;
 units[1] = ['99'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4116. ";
 preguntaids[1] = 4116


//  Id pregunta: 5466 Año de creación de pregunta: 2007
 questions[2]= "3)  &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca de las diferentes notaciones que se pueden emplear para la especificaci&oacute;n de requisitos del software?:";
 choices[2]= new Array();
 choices[2][0] = "El pseudoc&oacute;digo es una notaci&oacute;n especialmente indicada para describir los requisitos funcionales.";
 choices[2][1] = "El diccionario de datos es la manera m&aacute;s adecuada de describir las transformaciones ocurridas en los datos.";
 choices[2][2] = "El diagrama de flujo de datos se emplea para realizar la especificaci&oacute;n del comportamiento del sistema.";
 choices[2][3] = "El modelo E-R es una notaci&oacute;n gr&aacute;fica en la que se representan los flujos de datos y sus estados.";
 answers[2] = 2;
 units[2] = ['84'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 5466. ";
 preguntaids[2] = 5466


//  Id pregunta: 3918 Año de creación de pregunta: 2002
 questions[3]= "4)  Las metodolog&iacute;as:";
 choices[3]= new Array();
 choices[3][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[3][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[3][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[3][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[3] = 3;
 units[3] = ['84'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3918. ";
 preguntaids[3] = 3918


//  Id pregunta: 909 Año de creación de pregunta: 2016
 questions[4]= "5)  El conjunto de protocolos est&aacute;ndares adoptados por el Internet Architecture Board (IAB), para proporcionar seguridad al correo electr&oacute;nico sobre Internet se denomina:";
 choices[4]= new Array();
 choices[4][0] = "PEM";
 choices[4][1] = "CMS";
 choices[4][2] = "PGP";
 choices[4][3] = "S/MIME";
 answers[4] = 0;
 units[4] = ['116'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 909. AGE A2 2015";
 preguntaids[4] = 909


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[5]= new Array();
 choices[5][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[5][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[5][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[5][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[5] = 1;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[5] = 452


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[6]= "7)  En un modelo de datos jer&aacute;rquico:";
 choices[6]= new Array();
 choices[6][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[6][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[6][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[6][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[6] = 1;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[6] = 3261


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[7]= "8)  Respecto al protocolo OCSP, es FALSO que:";
 choices[7]= new Array();
 choices[7][0] = "Los mensajes OCSP son codificados en ASN.1.";
 choices[7][1] = "Est&aacute; definido en el RFC 2560.";
 choices[7][2] = "Tanto la petici&oacute;n como la respuesta deben ir firmadas.";
 choices[7][3] = "Puede usar SMTP como mecanismo de transporte.";
 answers[7] = 2;
 units[7] = ['78'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 796. AGE A2 2015";
 preguntaids[7] = 796


//  Id pregunta: 7812 Año de creación de pregunta: 2010
 questions[8]= "9)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[8]= new Array();
 choices[8][0] = "16";
 choices[8][1] = "24";
 choices[8][2] = "32";
 choices[8][3] = "64";
 answers[8] = 0;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7812. ";
 preguntaids[8] = 7812


//  Id pregunta: 1024 Año de creación de pregunta: 2016
 questions[9]= "10)  La recusaci&oacute;n pueden promoverla...";
 choices[9]= new Array();
 choices[9][0] = "Cualquier &oacute;rgano";
 choices[9][1] = "El interesado";
 choices[9][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[9][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[9] = 1;
 units[9] = ['4', '7', '8', '9'];
 blocks[9] = ['A1', 'A2'];
 comments[9] = "Id Pregunta: 1024. Ley 40/2015";
 preguntaids[9] = 1024


//  Id pregunta: 2051 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Qu&eacute; se entiende por outsourcing?:";
 choices[10]= new Array();
 choices[10][0] = "Cuando se ve agotada la capacidad del sistema";
 choices[10][1] = "Cuando las fuentes de informaci&oacute;n del sistema son externas al mismo";
 choices[10][2] = "Cuando la provisi&oacute;n de equipos o servicios del sistema es realizada por terceros";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[10] = 2;
 units[10] = ['39'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2051. ";
 preguntaids[10] = 2051


//  Id pregunta: 8298 Año de creación de pregunta: 2011
 questions[11]= "12)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[11]= new Array();
 choices[11][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[11][1] = "En el Registro Civil.";
 choices[11][2] = "En el Registro Mercantil.";
 choices[11][3] = "En el Registro General del Ministerio de Justicia.";
 answers[11] = 0;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 8298. Examen UPM A2 2011";
 preguntaids[11] = 8298


//  Id pregunta: 988 Año de creación de pregunta: 2016
 questions[12]= "13)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[12]= new Array();
 choices[12][0] = "Subsecretario";
 choices[12][1] = "Subdirector general";
 choices[12][2] = "Secretario de Estado";
 choices[12][3] = "ninguna es correcta";
 answers[12] = 1;
 units[12] = ['4', '7', '8', '9'];
 blocks[12] = ['A1', 'A2'];
 comments[12] = "Id Pregunta: 988. Ley 40/2015";
 preguntaids[12] = 988


//  Id pregunta: 5307 Año de creación de pregunta: 2006
 questions[13]= "14)  Wikipedia es:";
 choices[13]= new Array();
 choices[13][0] = "Un diccionario de pago.";
 choices[13][1] = "Un diccionario libre con licencia GFDL.";
 choices[13][2] = "Una enciclopedia de pago publicada en varios idiomas.";
 choices[13][3] = "Una enciclopedia libre escrita por voluntarios.";
 answers[13] = 3;
 units[13] = ['103'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5307. ";
 preguntaids[13] = 5307


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[14]= "15)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[14]= new Array();
 choices[14][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[14][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[14][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[14][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[14] = 2;
 units[14] = ['5'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[14] = 160


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[15]= new Array();
 choices[15][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[15][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[15][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[15][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[15] = 1;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 236. Ley 39/2015";
 preguntaids[15] = 236


//  Id pregunta: 5938 Año de creación de pregunta: 2007
 questions[16]= "17)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtualde 2^20 (2 elevado a 20) p&aacute;ginas y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos dep&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[16]= new Array();
 choices[16][0] = "32 kB";
 choices[16][1] = "4 MB";
 choices[16][2] = "1 MB";
 choices[16][3] = "8 kB";
 answers[16] = 0;
 units[16] = ['100'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 5938. ";
 preguntaids[16] = 5938


//  Id pregunta: 3242 Año de creación de pregunta: 2003
 questions[17]= "18)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[17]= new Array();
 choices[17][0] = "zx81.";
 choices[17][1] = "IBM XT.";
 choices[17][2] = "APPLE.";
 choices[17][3] = "Amstrad CPC 128.";
 answers[17] = 2;
 units[17] = ['56'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3242. Junta Andaluc&iacute;a";
 preguntaids[17] = 3242


//  Id pregunta: 2078 Año de creación de pregunta: 2002
 questions[18]= "19)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[18]= new Array();
 choices[18][0] = "CEN";
 choices[18][1] = "CENELEC";
 choices[18][2] = "ETSI";
 choices[18][3] = "ECMA";
 answers[18] = 2;
 units[18] = ['48'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2078. ";
 preguntaids[18] = 2078


//  Id pregunta: 1005 Año de creación de pregunta: 2016
 questions[19]= "20)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[19]= new Array();
 choices[19][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[19][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[19][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[19][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[19] = 0;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 1005. Ley 40/2015";
 preguntaids[19] = 1005


//  Id pregunta: 9689 Año de creación de pregunta: 2014
 questions[20]= "21)  En una PKI:";
 choices[20]= new Array();
 choices[20][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[20][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[20][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado.";
 choices[20][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[20] = 3;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9689. ";
 preguntaids[20] = 9689


//  Id pregunta: 9856 Año de creación de pregunta: 2015
 questions[21]= "22)  En un modelo Entidad / Relaci&oacute;n extendido, las relaciones pueden ser:";
 choices[21]= new Array();
 choices[21][0] = "Regular o d&eacute;bil.";
 choices[21][1] = "De dependencia en existencia o de dependencia en identificaci&oacute;n.";
 choices[21][2] = "Exclusivas o no exclusivas.";
 choices[21][3] = "Todas las anteriores.";
 answers[21] = 3;
 units[21] = ['85'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 9856. ";
 preguntaids[21] = 9856


//  Id pregunta: 9718 Año de creación de pregunta: 2014
 questions[22]= "23)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[22]= new Array();
 choices[22][0] = "ISO/IEC 11801";
 choices[22][1] = "EN 50173";
 choices[22][2] = "ISO/IEC 18101";
 choices[22][3] = "EN 50137";
 answers[22] = 0;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9718. ";
 preguntaids[22] = 9718


//  Id pregunta: 9123 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[23]= new Array();
 choices[23][0] = "Alternativas textuales.";
 choices[23][1] = "Distinguible.";
 choices[23][2] = "Predecible.";
 choices[23][3] = "Compatible.";
 answers[23] = 2;
 units[23] = ['42'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 9123. Examen TIC A2 2013";
 preguntaids[23] = 9123


//  Id pregunta: 5888 Año de creación de pregunta: 2007
 questions[24]= "25)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[24]= new Array();
 choices[24][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[24][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[24][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[24][3] = "Todas las anteriores son ciertas";
 answers[24] = 3;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 5888. Ley 56/2007";
 preguntaids[24] = 5888


//  Id pregunta: 6874 Año de creación de pregunta: 2010
 questions[25]= "26)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v3:";
 choices[25]= new Array();
 choices[25][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos derivados del uso de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones (TIC).";
 choices[25][1] = "Ayudar a descubrir y planificar el tratamiento oportuno para mantener los riesgos bajo control.";
 choices[25][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[25][3] = "Preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n, seg&uacute;n corresponda en cada caso.";
 answers[25] = 2;
 units[25] = ['45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 6874. TIC A 2009";
 preguntaids[25] = 6874


//  Id pregunta: 2647 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[26]= new Array();
 choices[26][0] = "Conocimiento del sistema superior al del experto";
 choices[26][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[26][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[26][3] = "Todas las anteriores";
 answers[26] = 1;
 units[26] = ['68'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2647. ";
 preguntaids[26] = 2647


//  Id pregunta: 5426 Año de creación de pregunta: 2007
 questions[27]= "28)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[27]= new Array();
 choices[27][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[27][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[27][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[27][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[27] = 2;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 5426. ";
 preguntaids[27] = 5426


//  Id pregunta: 1530 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; banda de frecuencias tiene asignada la tecnolog&iacute;a DECT 6.0 com&uacute;nmente en Europa?";
 choices[28]= new Array();
 choices[28][0] = "900MHz.";
 choices[28][1] = "1880-1900MHz.";
 choices[28][2] = "1920-1930MHz.";
 choices[28][3] = "2,4GHz - 5,8GHz.";
 answers[28] = 1;
 units[28] = ['117'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1530. ";
 preguntaids[28] = 1530


//  Id pregunta: 4296 Año de creación de pregunta: 2002
 questions[29]= "30)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[29]= new Array();
 choices[29][0] = "Amenazas";
 choices[29][1] = "Vulnerabilidad";
 choices[29][2] = "Impacto";
 choices[29][3] = "Riesgo";
 answers[29] = 2;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 4296. ";
 preguntaids[29] = 4296


//  Id pregunta: 7209 Año de creación de pregunta: 2010
 questions[30]= "31)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[30]= new Array();
 choices[30][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[30][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[30][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[30][3] = "Siempre que no aparezca el DNI";
 answers[30] = 1;
 units[30] = ['35'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 7209. Castilla La Mancha 2009";
 preguntaids[30] = 7209


//  Id pregunta: 10272 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[31]= new Array();
 choices[31][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[31][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[31][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[31][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[31] = 0;
 units[31] = ['101'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10272. Acuerdos internos (OLA) se realizan entre grupos de una misma organizaci&oacute;n";
 preguntaids[31] = 10272


//  Id pregunta: 3292 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[32]= new Array();
 choices[32][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[32][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[32][2] = "Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[32][3] = "Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[32] = 1;
 units[32] = ['86'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3292. ";
 preguntaids[32] = 3292


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[33]= "34)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[33]= new Array();
 choices[33][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[33][1] = "Programa de cartas de servicios";
 choices[33][2] = "Programa para la mejora continua de las organizaciones.";
 choices[33][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[33] = 2;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 454. Direcci&oacute;n p&uacute;blica";
 preguntaids[33] = 454


//  Id pregunta: 6235 Año de creación de pregunta: 2003
 questions[34]= "35)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[34]= new Array();
 choices[34][0] = "MPLS sobre UDP";
 choices[34][1] = "RVSP";
 choices[34][2] = "RTP sobre TCP";
 choices[34][3] = "RTP sobre UDP";
 answers[34] = 3;
 units[34] = ['110'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 6235. Examen TIC A Castilla La Mancha 2007";
 preguntaids[34] = 6235


//  Id pregunta: 10936 Año de creación de pregunta: 2015
 questions[35]= "36)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[35]= new Array();
 choices[35][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[35][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[35][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[35][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[35] = 3;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 10936. ";
 preguntaids[35] = 10936


//  Id pregunta: 8325 Año de creación de pregunta: 2011
 questions[36]= "37)  Las extensiones del Data Mining son:";
 choices[36]= new Array();
 choices[36][0] = "Web Mining y Text Mining.";
 choices[36][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[36][2] = "Text Mining e Hipertext Mining.";
 choices[36][3] = "Web Mining e Hipertext Mining.";
 answers[36] = 0;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8325. Examen UPM A2 2011";
 preguntaids[36] = 8325


//  Id pregunta: 2457 Año de creación de pregunta: 2006
 questions[37]= "38)  El est&aacute;ndar  de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es";
 choices[37]= new Array();
 choices[37][0] = "X.600";
 choices[37][1] = "Open LDAP";
 choices[37][2] = "X.400";
 choices[37][3] = "X.500";
 answers[37] = 3;
 units[37] = ['43'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2457. ";
 preguntaids[37] = 2457


//  Id pregunta: 5864 Año de creación de pregunta: 2009
 questions[38]= "39)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[38]= new Array();
 choices[38][0] = "Frame Relay";
 choices[38][1] = "ATM";
 choices[38][2] = "VPLS";
 choices[38][3] = "Cualquiera";
 answers[38] = 1;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5864. ";
 preguntaids[38] = 5864


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[39]= new Array();
 choices[39][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[39][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[39][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[39][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[39] = 2;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 295. Presupuestos generales";
 preguntaids[39] = 295


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[40]= new Array();
 choices[40][0] = "Quince miembros.";
 choices[40][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[40][2] = "Los miembros que determine el Consejo.";
 choices[40][3] = "Un Presidente y quince miembros.";
 answers[40] = 1;
 units[40] = ['5'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 414. Uni&oacute;n Europea";
 preguntaids[40] = 414


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[41]= "42)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[41]= new Array();
 choices[41][0] = "Dividir la red en subredes";
 choices[41][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[41][2] = "Dividir la red en VLANs";
 choices[41][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[41] = 3;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1902. ";
 preguntaids[41] = 1902


//  Id pregunta: 922 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[42]= new Array();
 choices[42][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[42][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[42][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[42][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[42] = 3;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 922. Junta de Extremadura A1 2015";
 preguntaids[42] = 922


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[43]= new Array();
 choices[43][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[43][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[43][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[43][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[43] = 2;
 units[43] = ['43'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 593. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[43] = 593


//  Id pregunta: 2441 Año de creación de pregunta: 2006
 questions[44]= "45)  Cu&aacute;l de las siguientes afirmaciones sobre normalizaci&oacute;n europea es incorrecta:";
 choices[44]= new Array();
 choices[44][0] = "El Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI) elabora Especificaciones t&eacute;cnicas (TS), Informes t&eacute;cnicos (TR), Normas ETSI (ES) y Normas Europeas (EN).";
 choices[44][1] = "Los &Oacute;rganismos Nacionales de Normalizaci&oacute;n tienen la obligaci&oacute;n de adoptar &iacute;ntegramente las Normas Europeas (EN) elaboradas por CEN/CENELEC o ETSI.";
 choices[44][2] = "Las normas europeas (EN) elaboradas por CEN/CENELEC o ETSI son de obligado cumplimiento por los Estados Miembros.";
 choices[44][3] = "CEN/CENELEC elaboran Normas Europeas (EN) y Normas Experimentales Europeas (ENVs).";
 answers[44] = 2;
 units[44] = ['48'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2441. Las normas EN son de obligada transposici&oacute;n";
 preguntaids[44] = 2441


//  Id pregunta: 2787 Año de creación de pregunta: 2002
 questions[45]= "46)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[45]= new Array();
 choices[45][0] = "En todo caso es falso";
 choices[45][1] = "Siempre es cierto";
 choices[45][2] = "Depende de la carga de trabajo de la CPU";
 choices[45][3] = "Depende del 'throughput'";
 answers[45] = 1;
 units[45] = ['56'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2787. ";
 preguntaids[45] = 2787


//  Id pregunta: 6777 Año de creación de pregunta: 2010
 questions[46]= "47)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Verificaci&oacute;n";
 choices[46][1] = "Validaci&oacute;n";
 choices[46][2] = "Gesti&oacute;n de requisitos";
 choices[46][3] = "Desarrollo de requisitos";
 answers[46] = 3;
 units[46] = ['92'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6777. Castilla La Mancha 2009";
 preguntaids[46] = 6777


//  Id pregunta: 3454 Año de creación de pregunta: 2006
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes algoritmos no sirve de base para la definici&oacute;n de algoritmos de criptograf&iacute;a asim&eacute;trica?";
 choices[47]= new Array();
 choices[47][0] = "Problema de sustituci&oacute;n af&iacute;n";
 choices[47][1] = "Problema de factorizaci&oacute;n entera";
 choices[47][2] = "Problema de logaritmo discreto";
 choices[47][3] = "Problema de logaritmo discreto el&iacute;ptico";
 answers[47] = 0;
 units[47] = ['76'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3454. ";
 preguntaids[47] = 3454


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[48]= "49)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[48][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[48][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[48][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[48] = 2;
 units[48] = ['1'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 0. Constituci&oacute;n de 1978";
 preguntaids[48] = 0


//  Id pregunta: 871 Año de creación de pregunta: 2016
 questions[49]= "50)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[49]= new Array();
 choices[49][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[49][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[49][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[49][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[49] = 0;
 units[49] = ['101'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 871. Junta de Extremadura A1 2015";
 preguntaids[49] = 871


//  Id pregunta: 1690 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la afirmaci&oacute;n FALSA. Las caracter&iacute;sticas de una sesi&oacute;n de trabajo tipo JAD (Joint Application Design), seg&uacute;n M&eacute;trica versi&oacute;n 3, se pueden resumir en:";
 choices[50]= new Array();
 choices[50][0] = "Se establece un equipo de trabajo cuyos componentes y responsabilidades est&aacute;n perfectamente identificados y su fin es conseguir el consenso entre las necesidades de los usuarios y los servicios del sistema en producci&oacute;n.";
 choices[50][1] = "Se llevan a cabo pocas reuniones, de larga duraci&oacute;n y muy bien preparadas.";
 choices[50][2] = "Durante la propia sesi&oacute;n se elaboran los modelos empleando diagramas f&aacute;ciles de entender y mantener, directamente sobre herramientas CASE.";
 choices[50][3] = "Se realiza un cronograma con las actuaciones a desarrollar.";
 answers[50] = 3;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 1690. ";
 preguntaids[50] = 1690


//  Id pregunta: 1390 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[51]= new Array();
 choices[51][0] = "No es v&aacute;lida";
 choices[51][1] = "Multicast.";
 choices[51][2] = "Unicast.";
 choices[51][3] = "Loopback.";
 answers[51] = 2;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1390. ";
 preguntaids[51] = 1390


//  Id pregunta: 10399 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[52]= new Array();
 choices[52][0] = "Confianza Digital";
 choices[52][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[52][2] = "Impulsar i+d TIC";
 choices[52][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 10399. ";
 preguntaids[52] = 10399


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[53]= "54)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[53]= new Array();
 choices[53][0] = "Estrasburgo.";
 choices[53][1] = "Bruselas.";
 choices[53][2] = "Luxemburgo.";
 choices[53][3] = "Holanda.";
 answers[53] = 0;
 units[53] = ['5'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 115. Uni&oacute;n Europea";
 preguntaids[53] = 115


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[54][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[54][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[54][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[54] = 1;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 251. Ley 39/2015";
 preguntaids[54] = 251


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[55]= "56)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[55]= new Array();
 choices[55][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[55][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[55][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[55][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[55] = 3;
 units[55] = ['14'];
 blocks[55] = ['A3'];
 comments[55] = "Id Pregunta: 363. Pol&iacute;ticas de igualdad";
 preguntaids[55] = 363


//  Id pregunta: 1462 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale c&oacute;mo se clasifica la situaci&oacute;n de dependencia conforme a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[56]= new Array();
 choices[56][0] = "En dos grados, cada uno dividido en dos niveles.";
 choices[56][1] = "En dos grados, cada uno dividido en tres niveles.";
 choices[56][2] = "En tres grados, cada uno dividido en dos niveles.";
 choices[56][3] = "En tres grados, cada uno dividido en tres niveles.";
 answers[56] = 2;
 units[56] = ['14'];
 blocks[56] = ['A3'];
 comments[56] = "Id Pregunta: 1462. ";
 preguntaids[56] = 1462


//  Id pregunta: 9901 Año de creación de pregunta: 2015
 questions[57]= "58)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[57]= new Array();
 choices[57][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[57][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[57][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[57][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local, Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[57] = 2;
 units[57] = ['7', '19'];
 blocks[57] = ['A2', 'A4'];
 comments[57] = "Id Pregunta: 9901. ";
 preguntaids[57] = 9901


//  Id pregunta: 4146 Año de creación de pregunta: 2003
 questions[58]= "59)  Una de las principales caracter&iacute;sticas de un sistema gestor de contenidos es:";
 choices[58]= new Array();
 choices[58][0] = "Desaconseja el uso de metadatos.";
 choices[58][1] = "No hay roles en el proceso.";
 choices[58][2] = "Se separa el contenido de su presentaci&oacute;n.";
 choices[58][3] = "Las p&aacute;ginas se construyen de manera no din&aacute;mica.";
 answers[58] = 2;
 units[58] = ['99'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4146. ";
 preguntaids[58] = 4146


//  Id pregunta: 8690 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu tv?";
 choices[59]= new Array();
 choices[59][0] = "No existe.";
 choices[59][1] = "Usa una versi&oacute;n adaptada de la interfaz Unity.";
 choices[59][2] = "Va instalado de serie en la mayor&iacute;a de los tv comerciales.";
 choices[59][3] = "Ninguna es correcta.";
 answers[59] = 1;
 units[59] = ['57'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8690. ";
 preguntaids[59] = 8690


//  Id pregunta: 8813 Año de creación de pregunta: 2013
 questions[60]= "61)  Resilient Packet Ring";
 choices[60]= new Array();
 choices[60][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[60][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[60][2] = "Es incompatible con Ethernet.";
 choices[60][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[60] = 3;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8813. ";
 preguntaids[60] = 8813


//  Id pregunta: 4073 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;ntas variables explicativas adicionales (o drivers) existen en cocomo II?";
 choices[61]= new Array();
 choices[61][0] = "15";
 choices[61][1] = "17";
 choices[61][2] = "22";
 choices[61][3] = "10";
 answers[61] = 1;
 units[61] = ['94'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4073. ";
 preguntaids[61] = 4073


//  Id pregunta: 6244 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;les son los requisitos, seg&uacute;n Dorfman, que debe cumplir una Metodolog&iacute;a?";
 choices[62]= new Array();
 choices[62][0] = "Documentada, Repetitiva, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[62][1] = "Documentada, Repetible, Ense&ntilde;able, Flexible, Validada y Apropiada";
 choices[62][2] = "Documentada, Repetible, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[62][3] = "Documentada, Repetible, Extensa, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 answers[62] = 2;
 units[62] = ['84'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6244. ";
 preguntaids[62] = 6244


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[63]= new Array();
 choices[63][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[63][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[63][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[63][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[63] = 0;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[63] = 996


//  Id pregunta: 10627 Año de creación de pregunta: 2015
 questions[64]= "65)  Seg&uacute;n el art&iacute;culo 47 de la ley 9/2014, se regular&aacute; mediante Real Decreto (seleccione la INCORRECTA):";
 choices[64]= new Array();
 choices[64][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[64][1] = "Derecho a figurar en las gu&iacute;as de abonado.";
 choices[64][2] = "Derecho al cambio de operador.";
 choices[64][3] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 answers[64] = 1;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10627. ";
 preguntaids[64] = 10627


//  Id pregunta: 939 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto al concepto de Web m&oacute;vil, se&ntilde;ale la respuesta falsa:";
 choices[65]= new Array();
 choices[65][0] = "En general se deben desarrollar sitios web espec&iacute;ficos para dispositivos m&oacute;viles con informaci&oacute;n y con servicios y aplicaciones web espec&iacute;ficas.";
 choices[65][1] = "El dise&ntilde;o de un sitio debe contemplar este tipo de plataformas para crear un sitio accesible y usable que se adapte din&aacute;micamente a las necesidades del usuario, a las capacidades del dispositivo y a las condiciones del entorno.";
 choices[65][2] = "Para ello, es necesaria una infraestructura global basada en est&aacute;ndares que permitan la interoperabilidad y aprovechar las capacidades de la movilidad y de la web 2.0.&nbsp;&nbsp;";
 choices[65][3] = "Poner a disposici&oacute;n la versi&oacute;n Web M&oacute;vil para los principales sistemas operativos y navegadores:Chrome y Safari.";
 answers[65] = 3;
 units[65] = ['125'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 939. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[65] = 939


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[66]= new Array();
 choices[66][0] = "La CETIC";
 choices[66][1] = "Los Ministerios";
 choices[66][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[66][3] = "Ninguno de los anteriores";
 answers[66] = 1;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 471. Estrategia TIC";
 preguntaids[66] = 471


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[67]= "68)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[67][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[67][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = 3;
 units[67] = ['8'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 262. Ley 39/2015";
 preguntaids[67] = 262


//  Id pregunta: 10238 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[68]= new Array();
 choices[68][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[68][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[68][2] = "Los 2 respuestas anteriores son correctas";
 choices[68][3] = "Ninguna de las anteriores es correcta";
 answers[68] = 2;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10238. ";
 preguntaids[68] = 10238


//  Id pregunta: 10015 Año de creación de pregunta: 2015
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[69]= new Array();
 choices[69][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[69][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[69][2] = "Libertad de distribuir copias.";
 choices[69][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[69] = 0;
 units[69] = ['66'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 10015. Examen TIC A2 2014";
 preguntaids[69] = 10015


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[70]= "71)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[70]= new Array();
 choices[70][0] = "La Comisi&oacute;n Europea.";
 choices[70][1] = "El Consejo Europeo.";
 choices[70][2] = "El Consejo de Europa.";
 choices[70][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[70] = 0;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[70] = 130


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[71]= new Array();
 choices[71][0] = "Art. 13, L.O.3/2007.";
 choices[71][1] = "Art. 14, L.O.3/2007.";
 choices[71][2] = "Art. 11, L.O.3/2007.";
 choices[71][3] = "Ninguna es correcta.";
 answers[71] = 2;
 units[71] = ['14'];
 blocks[71] = ['A3'];
 comments[71] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[71] = 378


//  Id pregunta: 10704 Año de creación de pregunta: 2015
 questions[72]= "73)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[72]= new Array();
 choices[72][0] = "MD5";
 choices[72][1] = "TDEA";
 choices[72][2] = "AES";
 choices[72][3] = "RSA";
 answers[72] = 0;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 10704. ";
 preguntaids[72] = 10704


//  Id pregunta: 8148 Año de creación de pregunta: 2011
 questions[73]= "74)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[73]= new Array();
 choices[73][0] = "10,8 Mbps te&oacute;ricos.";
 choices[73][1] = "14 Mbps";
 choices[73][2] = "2 Mbps";
 choices[73][3] = "384 Kbps";
 answers[73] = 1;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 8148. Examen TIC A2 2010 interna";
 preguntaids[73] = 8148


//  Id pregunta: 3774 Año de creación de pregunta: 2002
 questions[74]= "75)  El diagrama de contexto de un DFD contiene:";
 choices[74]= new Array();
 choices[74][0] = "Un &uacute;nico proceso";
 choices[74][1] = "Exclusivamente una entidad de procedencia y otra de destino";
 choices[74][2] = "Procesos diferentes cuando tiene que representar funciones diferentes";
 choices[74][3] = "Un &uacute;nico fichero de datos";
 answers[74] = 0;
 units[74] = ['85', '86'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3774. ";
 preguntaids[74] = 3774


