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
//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[0]= "1)  El Diccionario de Datos es utilizado por:";
 choices[0]= new Array();
 choices[0][0] = "El administrador de la base de datos y los programadores";
 choices[0][1] = "Los analistas y los programadores";
 choices[0][2] = "Los usuarios finales de las aplicaciones";
 choices[0][3] = "Los usuarios remotos";
 answers[0] = 0;
 units[0] = ['60', '85', '86'];
 blocks[0] = ['B2', 'B3'];
 comments[0] = "Id Pregunta: 3777. ";
 preguntaids[0] = 3777


//  Id pregunta: 5313 Año de creación de pregunta: 2006
 questions[1]= "2)  La red geogr&aacute;ficamente dispersa se llama";
 choices[1]= new Array();
 choices[1][0] = "WAN";
 choices[1][1] = "LAN";
 choices[1][2] = "SAN";
 choices[1][3] = "PAN";
 answers[1] = 0;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5313. ";
 preguntaids[1] = 5313


//  Id pregunta: 9963 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;En cu&aacute;l de los siguientes pueden participar actores del sector privado?";
 choices[2]= new Array();
 choices[2][0] = "El Consejo de Seguridad Nacional.";
 choices[2][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[2][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[2][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[2] = 1;
 units[2] = ['46'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9963. ";
 preguntaids[2] = 9963


//  Id pregunta: 10688 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;En qu&eacute; casos puede sustituirse el requisito de solvencia por el de clasifiaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "Contratos de obras cuyo valor estimado sea igual o superior a 500.000 &euro;.";
 choices[3][1] = "Contratos de servicios cuyo valor estimado sea igual o superior a 200.000 &euro;.";
 choices[3][2] = "En los 2 casos anteriores.";
 choices[3][3] = "En ninguno de los casos anteriores.";
 answers[3] = 2;
 units[3] = ['37'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 10688. ";
 preguntaids[3] = 10688


//  Id pregunta: 5206 Año de creación de pregunta: 2006
 questions[4]= "5)  Sobre FDDI:";
 choices[4]= new Array();
 choices[4][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[4][1] = "Se conoce como X3T9.3";
 choices[4][2] = "Su equivalente en cobre es CDDI";
 choices[4][3] = "Todas son verdaderas";
 answers[4] = 2;
 units[4] = ['112'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5206. ";
 preguntaids[4] = 5206


//  Id pregunta: 1663 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale c&oacute;mo se denomina el proceso que administra el almacenamiento en un sistema de directorio electr&oacute;nico:";
 choices[5]= new Array();
 choices[5][0] = "DSA";
 choices[5][1] = "UPN";
 choices[5][2] = "DSE";
 choices[5][3] = "DAP";
 answers[5] = 0;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1663. ";
 preguntaids[5] = 1663


//  Id pregunta: 5230 Año de creación de pregunta: 2006
 questions[6]= "7)  Con respecto a la tecnolog&iacute;a VDSL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 52 Mbit/s en sentido descendente y 6,4 Mbit/s en sentido ascendente.";
 choices[6][1] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 54 Mbit/s en sentido descendente y 8,2 Mbit/s en sentido ascendente.";
 choices[6][2] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 30 Mbit/s.";
 choices[6][3] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 25 Mbit/s.";
 answers[6] = 0;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5230. ";
 preguntaids[6] = 5230


//  Id pregunta: 10542 Año de creación de pregunta: 2015
 questions[7]= "8)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[7]= new Array();
 choices[7][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[7][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[7][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[7][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[7] = 0;
 units[7] = ['35'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10542. ";
 preguntaids[7] = 10542


//  Id pregunta: 4991 Año de creación de pregunta: 2002
 questions[8]= "9)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[8][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[8][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[8][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[8] = 3;
 units[8] = ['121'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4991. ";
 preguntaids[8] = 4991


//  Id pregunta: 8817 Año de creación de pregunta: 2013
 questions[9]= "10)  En una red metropolitana Ethernet basada en MPLS";
 choices[9]= new Array();
 choices[9][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[9][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[9][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[9][3] = "Ninguna de las respuestas es correcta.";
 answers[9] = 1;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8817. ";
 preguntaids[9] = 8817


//  Id pregunta: 10742 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n M&eacute;trica v3, las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Reingenier&iacute;a de sistemas.";
 choices[10][1] = "Mantenimiento Perfectivo.";
 choices[10][2] = "Reestructuraci&oacute;n del Software.";
 choices[10][3] = "Mantenimiento Preventivo.";
 answers[10] = 1;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10742. ";
 preguntaids[10] = 10742


//  Id pregunta: 2325 Año de creación de pregunta: 2002
 questions[11]= "12)  La serie V de estandarizaci&oacute;n de la ITU-T trata sobre:";
 choices[11]= new Array();
 choices[11][0] = "Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[11][1] = "Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[11][2] = "Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[11][3] = "Red digital de servicios integrados";
 answers[11] = 2;
 units[11] = ['48'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2325. A: SERIE X; B: SERIE G; D: SERIE I";
 preguntaids[11] = 2325


//  Id pregunta: 4928 Año de creación de pregunta: 2002
 questions[12]= "13)  UDDI:";
 choices[12]= new Array();
 choices[12][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[12][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[12][2] = "Significa User Definition Domain  Interface";
 choices[12][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[12] = 3;
 units[12] = ['74'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 4928. ";
 preguntaids[12] = 4928


//  Id pregunta: 8870 Año de creación de pregunta: 2013
 questions[13]= "14)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros:";
 choices[13]= new Array();
 choices[13][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[13][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[13][2] = "Puede ser de cualquier nacionalidad";
 choices[13][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[13] = 3;
 units[13] = ['121'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8870. ";
 preguntaids[13] = 8870


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[14]= new Array();
 choices[14][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[14][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[14][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[14][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[14] = 0;
 units[14] = ['4', '7', '8', '9'];
 blocks[14] = ['A1', 'A2'];
 comments[14] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[14] = 993


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[15]= new Array();
 choices[15][0] = "El Consejo Europeo.";
 choices[15][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[15][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[15][3] = "El Parlamento Europeo.";
 answers[15] = 0;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[15] = 133


//  Id pregunta: 7694 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato raster?";
 choices[16]= new Array();
 choices[16][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[16][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[16][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[16][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[16] = 2;
 units[16] = ['71'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7694. Map 2007";
 preguntaids[16] = 7694


//  Id pregunta: 6241 Año de creación de pregunta: 2003
 questions[17]= "18)  &iquest;Cu&aacute;l no es, seg&uacute;n Pressman, en el modelo de especificaciones de requisitos software, uno de los objetivos a cumplir?";
 choices[17]= new Array();
 choices[17][0] = "Describir lo que el cliente quiere.";
 choices[17][1] = "Determinar, junto con el cliente, la tecnolog&iacute;a a utilizar";
 choices[17][2] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o de software";
 choices[17][3] = "Definir un conjunto de requisitos que una vez el sistema construido se puedan validar";
 answers[17] = 1;
 units[17] = ['84'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6241. ";
 preguntaids[17] = 6241


//  Id pregunta: 2220 Año de creación de pregunta: 2002
 questions[18]= "19)  La directiva 91/250/CEE, modificada por la 93/98/CEE, del Consejo, relativa a la protecci&oacute;n jur&iacute;dica de programas de ordenador:";
 choices[18]= new Array();
 choices[18][0] = "Excluye expl&iacute;citamente aquellos desarrollos sobre plataformas Linux, shareware o software libre";
 choices[18][1] = "Establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre protecci&oacute;n de obras literarias y art&iacute;sticas";
 choices[18][2] = "Regula aquellos aspectos del comercio electr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[18][3] = "Crea un nuevo t&iacute;tulo de propiedad industrial &quot;patente comunitaria&quot; para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[18] = 1;
 units[18] = ['41'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2220. ";
 preguntaids[18] = 2220


//  Id pregunta: 6557 Año de creación de pregunta: 2003
 questions[19]= "20)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[19]= new Array();
 choices[19][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[19][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[19][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[19][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[19] = 2;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6557. ";
 preguntaids[19] = 6557


//  Id pregunta: 8174 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[20]= new Array();
 choices[20][0] = "SOLAP.";
 choices[20][1] = "DOLAP.";
 choices[20][2] = "WOLAP.";
 choices[20][3] = "RTOLAP.";
 answers[20] = 2;
 units[20] = ['72'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8174. Examen TIC A2 2010 interna";
 preguntaids[20] = 8174


//  Id pregunta: 4774 Año de creación de pregunta: 2002
 questions[21]= "22)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[21]= new Array();
 choices[21][0] = "AAL 1";
 choices[21][1] = "AAL 2";
 choices[21][2] = "AAL 3/4";
 choices[21][3] = "AAL 5";
 answers[21] = 3;
 units[21] = ['107'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4774. ";
 preguntaids[21] = 4774


//  Id pregunta: 9432 Año de creación de pregunta: 2014
 questions[22]= "23)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[22]= new Array();
 choices[22][0] = "M&uacute;ltiples";
 choices[22][1] = "Trunk";
 choices[22][2] = "VLAN- Link";
 choices[22][3] = "Data-Link";
 answers[22] = 1;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9432. ";
 preguntaids[22] = 9432


//  Id pregunta: 1822 Año de creación de pregunta: 2016
 questions[23]= "24)  Entre las distintas fases de la ingenier&iacute;a de requisitos, indique cu&aacute;l es la opci&oacute;n correcta que refleja la fase en la que se comprueba que los requisitos implementados se corresponden con los que inicialmente se pretend&iacute;an:";
 choices[23]= new Array();
 choices[23][0] = "Implementar requisitos";
 choices[23][1] = "Verificar requisitos";
 choices[23][2] = "Analizar requisitos";
 choices[23][3] = "Validar requisitos";
 answers[23] = 3;
 units[23] = ['84'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 1822. ";
 preguntaids[23] = 1822


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[24]= "25)  El Sistema de Informacion Administrativa (SIA) es una aplicaci&oacute;n cuya funci&oacute;n b&aacute;sica es la de actuar como:";
 choices[24]= new Array();
 choices[24][0] = "Repositorio de informaci&oacute;n relevante en lo concerniente a la relaci&oacute;n entre Administraci&oacute;n y ciudadano, integra los procedimientos administrativos y servicios electr&oacute;nicos existentes en el conjunto de las Administraciones P&uacute;blicas.";
 choices[24][1] = "Punto de acceso a la Administraci&oacute;n espa&ntilde;ola para ciudadanos y empresas, que facilita la informaci&oacute;n administrativa sobre la actividad, la organizaci&oacute;n y el funcionamiento de las Administraciones.";
 choices[24][2] = "Portal que recoge toda la normativa del &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, as&iacute; como las soluciones tecnol&oacute;gicas que comparten las diferentes Administraciones.";
 choices[24][3] = "Portal web que permite acceder a las diferentes sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado.";
 answers[24] = 0;
 units[24] = ['47'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 623. AGE A2 2015";
 preguntaids[24] = 623


//  Id pregunta: 2585 Año de creación de pregunta: 2009
 questions[25]= "26)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[25]= new Array();
 choices[25][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[25][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[25][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[25][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[25] = 0;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 2585. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";
 preguntaids[25] = 2585


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[26]= new Array();
 choices[26][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado";
 choices[26][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[26][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[26][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[26] = 2;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 244. Ley 39/2015";
 preguntaids[26] = 244


//  Id pregunta: 989 Año de creación de pregunta: 2016
 questions[27]= "28)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[27]= new Array();
 choices[27][0] = "los Ministros y los Secretarios de Estado";
 choices[27][1] = "los Subsecretarios y Secretarios generales";
 choices[27][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[27][3] = "los Directores generales";
 answers[27] = 2;
 units[27] = ['4', '7', '8', '9'];
 blocks[27] = ['A1', 'A2'];
 comments[27] = "Id Pregunta: 989. Ley 40/2015";
 preguntaids[27] = 989


//  Id pregunta: 3020 Año de creación de pregunta: 2002
 questions[28]= "29)  RSA es:";
 choices[28]= new Array();
 choices[28][0] = "un algoritmo de clave privada";
 choices[28][1] = "un algoritmo de clave p&uacute;blica";
 choices[28][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[28][3] = "una infraestructura de clave p&uacute;blica";
 answers[28] = 1;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3020. ";
 preguntaids[28] = 3020


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[29]= "30)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[29]= new Array();
 choices[29][0] = "Enero de 2015.";
 choices[29][1] = "Enero de 2016.";
 choices[29][2] = "Diciembre de 2016.";
 choices[29][3] = "Diciembre de 2015.";
 answers[29] = 0;
 units[29] = ['10'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[29] = 10125


//  Id pregunta: 7886 Año de creación de pregunta: 2011
 questions[30]= "31)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[30]= new Array();
 choices[30][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[30][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[30][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[30][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[30] = 1;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7886. Examen TIC A1 2010";
 preguntaids[30] = 7886


//  Id pregunta: 2473 Año de creación de pregunta: 2002
 questions[31]= "32)  De acuerdo con la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, la prestaci&oacute;n de servicios de la sociedad de la informaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[31][1] = "No estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[31][2] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la salud";
 choices[31][3] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la juventud y la infancia";
 answers[31] = 1;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 2473. Ley 34/2002, art&iacute;culo 6";
 preguntaids[31] = 2473


//  Id pregunta: 8139 Año de creación de pregunta: 2011
 questions[32]= "33)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[32]= new Array();
 choices[32][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[32][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[32][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[32][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[32] = 3;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8139. Examen TIC A2 2010 interna";
 preguntaids[32] = 8139


//  Id pregunta: 7432 Año de creación de pregunta: 2010
 questions[33]= "34)  La plataforma de servicios de validaci&oacute;n y firma electr&oacute;nica con la que las Administraciones P&uacute;blicas disponen de los instrumentos necesarios para implementar la autenticaci&oacute;n y firma electr&oacute;nica avanzada se denomina:";
 choices[33]= new Array();
 choices[33][0] = "SVF";
 choices[33][1] = "@Firma";
 choices[33][2] = "ValidaFirma";
 choices[33][3] = "VerificaFirma";
 answers[33] = 1;
 units[33] = ['47'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 7432. ";
 preguntaids[33] = 7432


//  Id pregunta: 9251 Año de creación de pregunta: 2014
 questions[34]= "35)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[34]= new Array();
 choices[34][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[34][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[34][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[34][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[34] = 1;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 9251. Examen TIC A2 2013";
 preguntaids[34] = 9251


//  Id pregunta: 5662 Año de creación de pregunta: 2007
 questions[35]= "36)  &iquest;C&oacute;mo define la Norma UNE ISO IEC 27002 la seguridad de la informaci&oacute;n?";
 choices[35]= new Array();
 choices[35][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[35][1] = "La preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[35][2] = "La obtenci&oacute;n de la autenticaci&oacute;n y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[35][3] = "La obtenci&oacute;n de la autenticaci&oacute;n y el no repudio y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 answers[35] = 1;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5662. ";
 preguntaids[35] = 5662


//  Id pregunta: 1281 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la legislaci&oacute;n vigente de protecci&oacute;n de datos de car&aacute;cter personal, la transferencia internacional de datos de car&aacute;cter personal resultante de la aplicaci&oacute;n de tratados o convenios en los que sea parte Espa&ntilde;a:";
 choices[36]= new Array();
 choices[36][0] = "Requieren la autorizaci&oacute;n del director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos (AEPD).";
 choices[36][1] = "Requieren la autorizaci&oacute;n del director de la AEPD, y posteriormente se hace necesaria la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[36][2] = "No requiere la autorizaci&oacute;n del director de la AEPD pero se hace necesaria publicaci&oacute;n en el diario oficial correspondiente donde se indique clara mente origen, destino, cantidad de datos transferidos y el convenio o tratado al que hace referencia.";
 choices[36][3] = "No requiere la autorizaci&oacute;n del director de la AEPD.";
 answers[36] = 3;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 1281. ";
 preguntaids[36] = 1281


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[37]= new Array();
 choices[37][0] = "&lt;canvas&gt;";
 choices[37][1] = "&lt;applet&gt;";
 choices[37][2] = "&lt;keygen&gt;";
 choices[37][3] = "&lt;audio&gt;";
 answers[37] = 1;
 units[37] = ['74'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9675. ";
 preguntaids[37] = 9675


//  Id pregunta: 10293 Año de creación de pregunta: 2015
 questions[38]= "39)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[38]= new Array();
 choices[38][0] = "Nivel b&aacute;sico";
 choices[38][1] = "Nivel medio";
 choices[38][2] = "Nivel alto";
 choices[38][3] = "Nivel muy alto";
 answers[38] = 1;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 10293. ";
 preguntaids[38] = 10293


//  Id pregunta: 1514 Año de creación de pregunta: 2016
 questions[39]= "40)  En relaci&oacute;n al software criptogr&aacute;fico GPG, es cierto que:";
 choices[39]= new Array();
 choices[39][0] = "Son las siglas de Great Privacy Group.";
 choices[39][1] = "Es una versi&oacute;n propietaria de PGP.";
 choices[39][2] = "Cifra los mensajes usando pares de claves individuales asim&eacute;tricas generadas por los usuarios.";
 choices[39][3] = "Usa tres algoritmos: IDEA, AES y 3DES.";
 answers[39] = 2;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1514. ";
 preguntaids[39] = 1514


//  Id pregunta: 5963 Año de creación de pregunta: 2007
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[40]= new Array();
 choices[40][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[40][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[40][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[40][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[40] = 2;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5963. ";
 preguntaids[40] = 5963


//  Id pregunta: 5134 Año de creación de pregunta: 2003
 questions[41]= "42)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[41]= new Array();
 choices[41][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[41][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[41][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[41][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[41] = 0;
 units[41] = ['120'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5134. Junta Andaluc&iacute;a";
 preguntaids[41] = 5134


//  Id pregunta: 8809 Año de creación de pregunta: 2013
 questions[42]= "43)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[42]= new Array();
 choices[42][0] = "5000 bits";
 choices[42][1] = "10000 bits";
 choices[42][2] = "1250 bytes";
 choices[42][3] = "1000 bits";
 answers[42] = 0;
 units[42] = ['112'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8809. ";
 preguntaids[42] = 8809


//  Id pregunta: 3139 Año de creación de pregunta: 2002
 questions[43]= "44)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[43]= new Array();
 choices[43][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[43][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[43][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[43][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[43] = 3;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3139. ";
 preguntaids[43] = 3139


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[44]= "45)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[44]= new Array();
 choices[44][0] = "Cabr&aacute; recurso de alzada";
 choices[44][1] = "Cabr&aacute; el nuevo protesto";
 choices[44][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[44][3] = "No cabr&aacute; recurso alguno";
 answers[44] = 3;
 units[44] = ['4', '7', '8', '9'];
 blocks[44] = ['A1', 'A2'];
 comments[44] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[44] = 1028


//  Id pregunta: 7199 Año de creación de pregunta: 2010
 questions[45]= "46)  Respecto a las mejoras de la TDT (DVB-T), sobre la televisi&oacute;n anal&oacute;gica, se&ntilde;ale la afirmaci&oacute;n INCORRECTA";
 choices[45]= new Array();
 choices[45][0] = "TDT permite un mayor aprovechamiento del espectro";
 choices[45][1] = "TDT permite mayor calidad de imagen";
 choices[45][2] = "TDT permite interactividad";
 choices[45][3] = "TDT permite la visualizaci&oacute;n degradada ante un nivel de se&ntilde;al d&eacute;bil";
 answers[45] = 3;
 units[45] = ['115'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7199. Castilla La Mancha 2009";
 preguntaids[45] = 7199


//  Id pregunta: 10531 Año de creación de pregunta: 2015
 questions[46]= "47)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[46]= new Array();
 choices[46][0] = "Empotrado";
 choices[46][1] = "Org&aacute;nico";
 choices[46][2] = "Semiacoplado";
 choices[46][3] = "Semiempotrado";
 answers[46] = 3;
 units[46] = ['94'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 10531. ";
 preguntaids[46] = 10531


//  Id pregunta: 7578 Año de creación de pregunta: 2010
 questions[47]= "48)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &laquo;Responsable del fichero o tratamiento&raquo;?";
 choices[47]= new Array();
 choices[47][0] = "Persona f&iacute;sica que decide sobre la finalidad, contenido, cesi&oacute;n y uso del tratamiento.";
 choices[47][1] = "Persona f&iacute;sica u &oacute;rgano administrativo, que decide sobre la finalidad, contenido, cesi&oacute;n y uso del tratamiento.";
 choices[47][2] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decide sobre la finalidad, contenido y uso del tratamiento.";
 choices[47][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica, servicio o cualquier otro organismo que, solo o conjuntamente con otros, trate datos personales.";
 answers[47] = 2;
 units[47] = ['35'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 7578. Map 2006";
 preguntaids[47] = 7578


//  Id pregunta: 9555 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[48]= new Array();
 choices[48][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica";
 choices[48][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial";
 choices[48][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional";
 choices[48][3] = "En los tres casos anteriores";
 answers[48] = 3;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9555. Art&iacute;culo 34 de la Ley Org&aacute;nica 15/1999";
 preguntaids[48] = 9555


//  Id pregunta: 2935 Año de creación de pregunta: 2002
 questions[49]= "50)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[49]= new Array();
 choices[49][0] = "El boot-strap";
 choices[49][1] = "El dispatcher";
 choices[49][2] = "El scheduler";
 choices[49][3] = "Ninguno de los anteriores";
 answers[49] = 2;
 units[49] = ['56'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2935. ";
 preguntaids[49] = 2935


//  Id pregunta: 1699 Año de creación de pregunta: 2016
 questions[50]= "51)  En relaci&oacute;n con los grafos, indique la respuesta FALSA:";
 choices[50]= new Array();
 choices[50][0] = "Orden de un grafo: Es el n&uacute;mero de nodos (v&eacute;rtices del grafo).";
 choices[50][1] = "Grado de un nodo: Es el n&uacute;mero de ejes (arcos) que inciden sobre el nodo.";
 choices[50][2] = "Longitud del camino: Es el n&uacute;mero de nodos que componen el camino.";
 choices[50][3] = "Grafo euleriano: Es un grafo que tiene un camino euleriano cerrado.";
 answers[50] = 2;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1699. ";
 preguntaids[50] = 1699


//  Id pregunta: 1261 Año de creación de pregunta: 2016
 questions[51]= "52)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan:";
 choices[51]= new Array();
 choices[51][0] = "Consultores.";
 choices[51][1] = "Expertos.";
 choices[51][2] = "Analistas.";
 choices[51][3] = "Jefes de Proyecto.";
 answers[51] = 0;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 1261. ";
 preguntaids[51] = 1261


//  Id pregunta: 10120 Año de creación de pregunta: 2015
 questions[52]= "53)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[52]= new Array();
 choices[52][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[52][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[52][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[52][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[52] = 2;
 units[52] = ['47'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 10120. Examen TIC A1 2014";
 preguntaids[52] = 10120


//  Id pregunta: 8389 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;A qui&eacute;n NO est&aacute; dirigido ITIL?";
 choices[53]= new Array();
 choices[53][0] = "Proveedores de servicios de TI";
 choices[53][1] = "Usuarios de servicios de TI";
 choices[53][2] = "Directores y gestores de TI";
 choices[53][3] = "Chief Information Officers";
 answers[53] = 1;
 units[53] = ['101'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 8389. ";
 preguntaids[53] = 8389


//  Id pregunta: 4994 Año de creación de pregunta: 2002
 questions[54]= "55)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[54]= new Array();
 choices[54][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[54][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[54][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[54][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[54] = 1;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4994. ";
 preguntaids[54] = 4994


//  Id pregunta: 953 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[55]= new Array();
 choices[55][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[55][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[55][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[55][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[55] = 1;
 units[55] = ['34', '84'];
 blocks[55] = ['B1', 'B3'];
 comments[55] = "Id Pregunta: 953. Metodologias &aacute;giles";
 preguntaids[55] = 953


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[56]= "57)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[56][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[56][2] = "Ninguna es correcta.";
 choices[56][3] = "A y B son correctas.";
 answers[56] = 0;
 units[56] = ['14'];
 blocks[56] = ['A3'];
 comments[56] = "Id Pregunta: 404. Pol&iacute;ticas de igualdad";
 preguntaids[56] = 404


//  Id pregunta: 6776 Año de creación de pregunta: 2010
 questions[57]= "58)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de la calidad";
 choices[57][1] = "Norma de la calidad";
 choices[57][2] = "Pol&iacute;tica de la calidad";
 choices[57][3] = "Direcci&oacute;n de la calidad";
 answers[57] = 2;
 units[57] = ['92'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6776. Castilla La Mancha 2009";
 preguntaids[57] = 6776


//  Id pregunta: 3590 Año de creación de pregunta: 2002
 questions[58]= "59)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[58]= new Array();
 choices[58][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[58][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[58][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[58][3] = "Todas son falsas";
 answers[58] = 3;
 units[58] = ['84', '86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3590. ";
 preguntaids[58] = 3590


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[59]= "60)  El Factor de Sostenibilidad de la pensi&oacute;n de jubilaci&oacute;n, regulado en el art&iacute;culo 211 del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social:";
 choices[59]= new Array();
 choices[59][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[59][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[59][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[59][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[59] = 2;
 units[59] = ['14'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 359. Estado del Bienestar";
 preguntaids[59] = 359


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[60]= "61)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[60]= new Array();
 choices[60][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[60][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[60][2] = "Cinco a&ntilde;os.";
 choices[60][3] = "Ninguna es correcta.";
 answers[60] = 2;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[60] = 166


//  Id pregunta: 10006 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[61]= new Array();
 choices[61][0] = "Request.";
 choices[61][1] = "Invoke.";
 choices[61][2] = "Response.";
 choices[61][3] = "Confirmation.";
 answers[61] = 1;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10006. Examen TIC A2 2014";
 preguntaids[61] = 10006


//  Id pregunta: 7406 Año de creación de pregunta: 2010
 questions[62]= "63)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[62]= new Array();
 choices[62][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[62][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[62][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[62][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[62] = 3;
 units[62] = ['120'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7406. Examen TIC B 2009";
 preguntaids[62] = 7406


//  Id pregunta: 3908 Año de creación de pregunta: 2002
 questions[63]= "64)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[63]= new Array();
 choices[63][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[63][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[63][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[63][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[63] = 1;
 units[63] = ['85', '89'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3908. ";
 preguntaids[63] = 3908


//  Id pregunta: 9180 Año de creación de pregunta: 2014
 questions[64]= "65)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[64]= new Array();
 choices[64][0] = "Ley ordinaria.";
 choices[64][1] = "Orden Ministerial.";
 choices[64][2] = "Ley org&aacute;nica.";
 choices[64][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[64] = 1;
 units[64] = ['7'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 9180. Examen TIC A2 2013";
 preguntaids[64] = 9180


//  Id pregunta: 9225 Año de creación de pregunta: 2014
 questions[65]= "66)  El protocolo SET (Secure Electronic Transaction)";
 choices[65]= new Array();
 choices[65][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[65][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[65][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[65][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[65] = 1;
 units[65] = ['75'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9225. Examen TIC A1 2013";
 preguntaids[65] = 9225


//  Id pregunta: 3198 Año de creación de pregunta: 2003
 questions[66]= "67)  El Real Decreto 209/2003:";
 choices[66]= new Array();
 choices[66][0] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[66][1] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[66][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[66][3] = "Todas las anteriores son ciertas";
 answers[66] = 1;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 3198. ";
 preguntaids[66] = 3198


//  Id pregunta: 10310 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Estar conectado a Red SARA.";
 choices[67][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[67][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[67][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[67] = 1;
 units[67] = ['46'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 10310. ";
 preguntaids[67] = 10310


//  Id pregunta: 10645 Año de creación de pregunta: 2015
 questions[68]= "69)  Seg&uacute;n la Ley 9/2014, cu&aacute;les de las siguientes son facultades del Gobierno para la administraci&oacute;n del espectro:";
 choices[68]= new Array();
 choices[68][0] = "La regulaci&oacute;n del procedimiento para la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[68][1] = "La regulaci&oacute;n del procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencias para alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico.";
 choices[68][2] = "La regulaci&oacute;n del uso del espectro radioel&eacute;ctrico para controlar el uso de los operadores.";
 choices[68][3] = "a y b son correctas.";
 answers[68] = 3;
 units[68] = ['121'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10645. ";
 preguntaids[68] = 10645


//  Id pregunta: 9416 Año de creación de pregunta: 2014
 questions[69]= "70)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD distingue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[69]= new Array();
 choices[69][0] = "Moderador (l&iacute;der Jad)";
 choices[69][1] = "Desarrolladores";
 choices[69][2] = "Usuarios";
 choices[69][3] = "Analistas";
 answers[69] = 3;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 9416. ";
 preguntaids[69] = 9416


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[70]= "71)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[70]= new Array();
 choices[70][0] = "l Consejo General del Poder Judicial";
 choices[70][1] = "El pleno de Tribunal Constitucional";
 choices[70][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[70][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[70] = 3;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 9. Constituci&oacute;n de 1978";
 preguntaids[70] = 9


//  Id pregunta: 6277 Año de creación de pregunta: 2007
 questions[71]= "72)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[71]= new Array();
 choices[71][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[71][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[71][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[71][3] = "Especificaciones de Implantaci&oacute;n";
 answers[71] = 2;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6277. ";
 preguntaids[71] = 6277


//  Id pregunta: 3432 Año de creación de pregunta: 2006
 questions[72]= "73)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-means?";
 choices[72]= new Array();
 choices[72][0] = "Clustering.";
 choices[72][1] = "Categorizaci&oacute;n.";
 choices[72][2] = "Predicci&oacute;n.";
 choices[72][3] = "Detecci&oacute;n de fraude.";
 answers[72] = 0;
 units[72] = ['72'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3432. ";
 preguntaids[72] = 3432


//  Id pregunta: 1327 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[73]= new Array();
 choices[73][0] = "S&iacute;, mediante un flujo de datos.";
 choices[73][1] = "S&iacute;, mediante un flujo de control.";
 choices[73][2] = "Si, mediante un proceso iterativo.";
 choices[73][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[73] = 1;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1327. ";
 preguntaids[73] = 1327


//  Id pregunta: 3437 Año de creación de pregunta: 2006
 questions[74]= "75)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Modelo en estrella.";
 choices[74][1] = "El modelo de copo de nieve.";
 choices[74][2] = "Modelo constelaci&oacute;n.";
 choices[74][3] = "Todos los anteriores son correctos.";
 answers[74] = 3;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3437. ";
 preguntaids[74] = 3437


