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
//  Id pregunta: 9112 Año de creación de pregunta: 2014
 questions[0]= "1)  Indique la sentencia correcta respecto al an&aacute;lisis del factor dolor (Pain Value Analysis), es una t&eacute;cnica:";
 choices[0]= new Array();
 choices[0][0] = "Para ayudar a identificar el impacto en el negocio de uno o m&aacute;s problemas.";
 choices[0][1] = "Para calcular el l&iacute;mite m&aacute;ximo de usuarios que el sistema es capaz de gestionar, teniendo en cuenta la capacidad del hardware y el n&uacute;mero de peticiones de cada usuario.";
 choices[0][2] = "Para la asignaci&oacute;n de prioridades a diferentes actividades, dice que el 80% del valor de una actividad es generado por el 20% del esfuerzo.";
 choices[0][3] = "Acu&ntilde;ada en los a&ntilde;os 80, cuya finalidad era calcular la capacidad f&iacute;sica de los usuarios del sistema inform&aacute;tico.";
 answers[0] = 0;
 units[0] = ['36'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 9112. Examen TIC A2 2013";
 preguntaids[0] = 9112


//  Id pregunta: 9135 Año de creación de pregunta: 2014
 questions[1]= "2)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "CONECTA-PATRIMONIO";
 choices[1][1] = "PITER";
 choices[1][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[1][3] = "No existe tal aplicaci&oacute;n";
 answers[1] = 2;
 units[1] = ['37'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 9135. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";
 preguntaids[1] = 9135


//  Id pregunta: 9140 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[2]= new Array();
 choices[2][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[2][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[2][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[2][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[2] = 0;
 units[2] = ['101'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 9140. ";
 preguntaids[2] = 9140


//  Id pregunta: 9076 Año de creación de pregunta: 2014
 questions[3]= "4)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[3]= new Array();
 choices[3][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[3][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[3][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[3][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[3] = 3;
 units[3] = ['71'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9076. ";
 preguntaids[3] = 9076


//  Id pregunta: 9131 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[4]= new Array();
 choices[4][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[4][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[4][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[4][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[4] = 1;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 9131. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";
 preguntaids[4] = 9131


//  Id pregunta: 9111 Año de creación de pregunta: 2014
 questions[5]= "6)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[5]= new Array();
 choices[5][0] = "MTBF";
 choices[5][1] = "MTBR";
 choices[5][2] = "MTTR";
 choices[5][3] = "MTTF";
 answers[5] = 2;
 units[5] = ['45'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 9111. Examen TIC A2 2013";
 preguntaids[5] = 9111


//  Id pregunta: 9077 Año de creación de pregunta: 2014
 questions[6]= "7)  Un almac&eacute;n de datos almacena:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[6][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[6][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[6][3] = "B y C son correctas.";
 answers[6] = 3;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9077. ";
 preguntaids[6] = 9077


//  Id pregunta: 9141 Año de creación de pregunta: 2014
 questions[7]= "8)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[7]= new Array();
 choices[7][0] = "Beast Attack";
 choices[7][1] = "Crime";
 choices[7][2] = "Breach";
 choices[7][3] = "No existe dicho ataque";
 answers[7] = 2;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9141. ";
 preguntaids[7] = 9141


//  Id pregunta: 9136 Año de creación de pregunta: 2014
 questions[8]= "9)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[8]= new Array();
 choices[8][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[8][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[8][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[8][3] = "Ninguna de las anteriores.";
 answers[8] = 1;
 units[8] = ['37'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9136. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";
 preguntaids[8] = 9136


//  Id pregunta: 9124 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[9]= new Array();
 choices[9][0] = "Ley 30/92";
 choices[9][1] = "Ley 27/2007";
 choices[9][2] = "Ley 11/2007";
 choices[9][3] = "Ley 34/2002";
 answers[9] = 1;
 units[9] = ['42'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 9124. Examen TIC A2 2013";
 preguntaids[9] = 9124


//  Id pregunta: 9115 Año de creación de pregunta: 2014
 questions[10]= "11)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[10]= new Array();
 choices[10][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[10][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[10][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[10][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[10] = 0;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9115. Examen TIC A2 2013";
 preguntaids[10] = 9115


//  Id pregunta: 9110 Año de creación de pregunta: 2014
 questions[11]= "12)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[11]= new Array();
 choices[11][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[11][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[11][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[11][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[11] = 2;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 9110. Examen TIC A2 2013";
 preguntaids[11] = 9110


//  Id pregunta: 9109 Año de creación de pregunta: 2014
 questions[12]= "13)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Top-down.";
 choices[12][1] = "Sandwich.";
 choices[12][2] = "Big-Bang";
 choices[12][3] = "Bottom-up.";
 answers[12] = 2;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9109. Examen TIC A2 2013";
 preguntaids[12] = 9109


//  Id pregunta: 9095 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[13]= new Array();
 choices[13][0] = "CORBA es un tipo de middleware.";
 choices[13][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[13][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[13][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[13] = 0;
 units[13] = ['55'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9095. Examen TIC-A1 2013";
 preguntaids[13] = 9095


//  Id pregunta: 9104 Año de creación de pregunta: 2014
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[14]= new Array();
 choices[14][0] = "Bird.";
 choices[14][1] = "Hibernate.";
 choices[14][2] = "Maverick.";
 choices[14][3] = "Spring.";
 answers[14] = 0;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9104. Examen TIC-A1 2013";
 preguntaids[14] = 9104


//  Id pregunta: 9072 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[15]= new Array();
 choices[15][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[15][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[15][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[15][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[15] = 3;
 units[15] = ['71'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9072. ";
 preguntaids[15] = 9072


//  Id pregunta: 9100 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[16]= new Array();
 choices[16][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[16][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[16][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[16][3] = "Todas las respuestas anteriores son ciertas.";
 answers[16] = 3;
 units[16] = ['52'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9100. Examen TIC-A1 2013";
 preguntaids[16] = 9100


//  Id pregunta: 9090 Año de creación de pregunta: 2014
 questions[17]= "18)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[17]= new Array();
 choices[17][0] = "MD5 genera un hash de 128 bits.";
 choices[17][1] = "SHA-1 genera un hash de 160 bits.";
 choices[17][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[17][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[17] = 3;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9090. Examen TIC-A1 2013";
 preguntaids[17] = 9090


//  Id pregunta: 9121 Año de creación de pregunta: 2014
 questions[18]= "19)  COCOMO II est&aacute; formado por tres modelos o submodelos. &iquest;Cu&aacute;l de los siguientes NO es un modelo de COCOMO II?";
 choices[18]= new Array();
 choices[18][0] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n.";
 choices[18][1] = "Modelo de Reutilizaci&oacute;n de Objetos.";
 choices[18][2] = "Modelo de Dise&ntilde;o Preliminar.";
 choices[18][3] = "Modelo Post-Arquitectura.";
 answers[18] = 1;
 units[18] = ['94'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 9121. Examen TIC A2 2013";
 preguntaids[18] = 9121


//  Id pregunta: 9101 Año de creación de pregunta: 2014
 questions[19]= "20)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[19]= new Array();
 choices[19][0] = "RAID 1";
 choices[19][1] = "RAID 3";
 choices[19][2] = "RAID 4";
 choices[19][3] = "RAID 6";
 answers[19] = 2;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9101. Examen TIC-A1 2013";
 preguntaids[19] = 9101


//  Id pregunta: 9103 Año de creación de pregunta: 2014
 questions[20]= "21)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[20]= new Array();
 choices[20][0] = "son desarrollados por muchos fabricantes.";
 choices[20][1] = "usan memoria distribuida y no compartida.";
 choices[20][2] = "son soluciones altamente propietarias.";
 choices[20][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[20] = 2;
 units[20] = ['50'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9103. Examen TIC-A1 2013";
 preguntaids[20] = 9103


//  Id pregunta: 9106 Año de creación de pregunta: 2014
 questions[21]= "22)  ANSI/ISO SQL define ciertos niveles de aislamiento en transacciones en funci&oacute;n de qu&eacute; fen&oacute;menos puede que ocurran. Indique la respuesta correcta respecto al fen&oacute;meno &quot;lectura fantasma&quot;:";
 choices[21]= new Array();
 choices[21][0] = "Se permite en read uncommitted, read committed y repeatable read, pero no se permite en serializable.";
 choices[21][1] = "Se permite en read uncommitted y read committed, pero no se permite en repeatable read ni en serializable.";
 choices[21][2] = "Se permite en read uncommitted y repeatable read, pero no se permite en read committed ni en serializable.";
 choices[21][3] = "Se permite en read uncommitted, pero no se permite en read committed, repeatable read ni en serializable.";
 answers[21] = 0;
 units[21] = ['60'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9106. Examen TIC A2 2013";
 preguntaids[21] = 9106


//  Id pregunta: 9083 Año de creación de pregunta: 2014
 questions[22]= "23)  El protocolo TCP es un protocolo";
 choices[22]= new Array();
 choices[22][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[22][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[22][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[22][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[22] = 1;
 units[22] = ['109'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9083. Examen TIC-A1 2013";
 preguntaids[22] = 9083


//  Id pregunta: 9108 Año de creación de pregunta: 2014
 questions[23]= "24)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[23]= new Array();
 choices[23][0] = "ISO/IEC 26514";
 choices[23][1] = "ISO 7816.";
 choices[23][2] = "ISO/IEC 12207.";
 choices[23][3] = "ISO 8859.";
 answers[23] = 0;
 units[23] = ['82'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 9108. Examen TIC A2 2013";
 preguntaids[23] = 9108


//  Id pregunta: 9082 Año de creación de pregunta: 2014
 questions[24]= "25)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[24]= new Array();
 choices[24][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[24][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[24][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[24][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[24] = 1;
 units[24] = ['105'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9082. ";
 preguntaids[24] = 9082


//  Id pregunta: 9096 Año de creación de pregunta: 2014
 questions[25]= "26)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[25]= new Array();
 choices[25][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[25][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[25][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[25][3] = "las opciones a, b y c son ciertas.";
 answers[25] = 3;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9096. Examen TIC-A1 2013";
 preguntaids[25] = 9096


//  Id pregunta: 9123 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[26]= new Array();
 choices[26][0] = "Alternativas textuales.";
 choices[26][1] = "Distinguible.";
 choices[26][2] = "Predecible.";
 choices[26][3] = "Compatible.";
 answers[26] = 2;
 units[26] = ['42'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 9123. Examen TIC A2 2013";
 preguntaids[26] = 9123


//  Id pregunta: 9128 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[27]= new Array();
 choices[27][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[27][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[27][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[27][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[27] = 0;
 units[27] = ['72'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9128. Examen TIC A2 2013";
 preguntaids[27] = 9128


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[28]= "29)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[28]= new Array();
 choices[28][0] = "Reponen";
 choices[28][1] = "Reajustan";
 choices[28][2] = "Devuelven o cancelan";
 choices[28][3] = "Todas las anteriores";
 answers[28] = 3;
 units[28] = ['10'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[28] = 9134


//  Id pregunta: 9117 Año de creación de pregunta: 2014
 questions[29]= "30)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[29]= new Array();
 choices[29][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[29][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[29][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[29][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[29] = 3;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9117. Examen TIC A2 2013";
 preguntaids[29] = 9117


//  Id pregunta: 9113 Año de creación de pregunta: 2014
 questions[30]= "31)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[30]= new Array();
 choices[30][0] = "Intrastructure e Hiperstructure.";
 choices[30][1] = "Basic y Complex.";
 choices[30][2] = "Infrastructure y Superstructure.";
 choices[30][3] = "Infrastructure y Substructure.";
 answers[30] = 2;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 9113. Examen TIC A2 2013";
 preguntaids[30] = 9113


//  Id pregunta: 9137 Año de creación de pregunta: 2014
 questions[31]= "32)  Un contradto de regulaci&oacute;n armonizada ser&aacute; nulo si:";
 choices[31]= new Array();
 choices[31][0] = "No se publica en DOUE";
 choices[31][1] = "Si se incumplen las normas de adjudicaci&oacute;n del acuerdo marco.";
 choices[31][2] = "Si hay sistema din&aacute;mino de contrataci&oacute;n y se incumplen las normas de adjudicaci&oacute;n.";
 choices[31][3] = "Todas las anteriores.";
 answers[31] = 3;
 units[31] = ['37'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 9137. Art. 37. RD Legislativo 3/2011.";
 preguntaids[31] = 9137


//  Id pregunta: 9087 Año de creación de pregunta: 2014
 questions[32]= "33)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[32]= new Array();
 choices[32][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[32][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[32][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[32][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[32] = 0;
 units[32] = ['71'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9087. Examen TIC-A1 2013";
 preguntaids[32] = 9087


//  Id pregunta: 9119 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[33]= new Array();
 choices[33][0] = "Model View Controller.";
 choices[33][1] = "Multiple Views Canvas.";
 choices[33][2] = "Mobile Video Compatible.";
 choices[33][3] = "Mobile View Connector.";
 answers[33] = 0;
 units[33] = ['113'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9119. Examen TIC A2 2013";
 preguntaids[33] = 9119


//  Id pregunta: 9093 Año de creación de pregunta: 2014
 questions[34]= "35)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[34]= new Array();
 choices[34][0] = "SIR.";
 choices[34][1] = "ORVE.";
 choices[34][2] = "SICRES 3.0.";
 choices[34][3] = "SVDR.";
 answers[34] = 1;
 units[34] = ['47'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9093. Examen TIC-A1 2013";
 preguntaids[34] = 9093


//  Id pregunta: 9125 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[35]= new Array();
 choices[35][0] = "Citrix";
 choices[35][1] = "Oracle";
 choices[35][2] = "MySql Extend";
 choices[35][3] = "Cassandra";
 answers[35] = 3;
 units[35] = ['73'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9125. Examen TIC A2 2013";
 preguntaids[35] = 9125


//  Id pregunta: 9139 Año de creación de pregunta: 2014
 questions[36]= "37)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[36]= new Array();
 choices[36][0] = "Directivo";
 choices[36][1] = "Jefe de Proyecto";
 choices[36][2] = "Consultor";
 choices[36][3] = "Usuario experto";
 answers[36] = 3;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9139. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";
 preguntaids[36] = 9139


//  Id pregunta: 9084 Año de creación de pregunta: 2014
 questions[37]= "38)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[37]= new Array();
 choices[37][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[37][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[37][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[37][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[37] = 3;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 9084. Examen TIC-A1 2013";
 preguntaids[37] = 9084


//  Id pregunta: 9091 Año de creación de pregunta: 2014
 questions[38]= "39)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[38]= new Array();
 choices[38][0] = "A, B, C, D.";
 choices[38][1] = "E, F, G, H.";
 choices[38][2] = "S, T, U, V.";
 choices[38][3] = "W, X, Y, Z.";
 answers[38] = 2;
 units[38] = ['114'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9091. Examen TIC-A1 2013";
 preguntaids[38] = 9091


//  Id pregunta: 9116 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[39]= new Array();
 choices[39][0] = "Contexts and Dependency Injection.";
 choices[39][1] = "Common Display Interface.";
 choices[39][2] = "Context-Dependent Interface.";
 choices[39][3] = "Case-Driven Implementation.";
 answers[39] = 0;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9116. Examen TIC A2 2013";
 preguntaids[39] = 9116


//  Id pregunta: 9127 Año de creación de pregunta: 2014
 questions[40]= "41)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[40]= new Array();
 choices[40][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[40][1] = "Algoritmos de regresi&oacute;n.";
 choices[40][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[40][3] = "Algoritmos de asociaci&oacute;n.";
 answers[40] = 0;
 units[40] = ['72'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9127. Examen TIC A2 2013";
 preguntaids[40] = 9127


//  Id pregunta: 9092 Año de creación de pregunta: 2014
 questions[41]= "42)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[41]= new Array();
 choices[41][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[41][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[41][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[41][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[41] = 2;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9092. Examen TIC-A1 2013";
 preguntaids[41] = 9092


//  Id pregunta: 9107 Año de creación de pregunta: 2014
 questions[42]= "43)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[42]= new Array();
 choices[42][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[42][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[42][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[42][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[42] = 1;
 units[42] = ['89'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 9107. Examen TIC A2 2013";
 preguntaids[42] = 9107


//  Id pregunta: 9118 Año de creación de pregunta: 2014
 questions[43]= "44)  Se&ntilde;ale, entre los siguientes, cu&aacute;l es un cliente WebDAV de l&iacute;nea de comandos para entornos Unix:";
 choices[43]= new Array();
 choices[43][0] = "cadaver";
 choices[43][1] = "audacity";
 choices[43][2] = "mahout";
 choices[43][3] = "CalDAV";
 answers[43] = 0;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9118. Examen TIC A2 2013";
 preguntaids[43] = 9118


//  Id pregunta: 9132 Año de creación de pregunta: 2014
 questions[44]= "45)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[44]= new Array();
 choices[44][0] = "ASI";
 choices[44][1] = "DSI";
 choices[44][2] = "CSI";
 choices[44][3] = "MSI";
 answers[44] = 3;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 9132. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";
 preguntaids[44] = 9132


//  Id pregunta: 9079 Año de creación de pregunta: 2014
 questions[45]= "46)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[45][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[45][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[45][3] = "A es falsa.";
 answers[45] = 0;
 units[45] = ['72'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9079. ";
 preguntaids[45] = 9079


//  Id pregunta: 9098 Año de creación de pregunta: 2014
 questions[46]= "47)  La t&eacute;cnica de protecci&oacute;n de software conocida como marca de agua digital consiste en";
 choices[46]= new Array();
 choices[46][0] = "la inserci&oacute;n de un mensaje en el interior de un objeto digital que contiene informaci&oacute;n sobre el autor o propietario digital de dicho objeto.";
 choices[46][1] = "la generaci&oacute;n de un c&oacute;digo de activaci&oacute;n sin el cual no se puede utilizar una aplicaci&oacute;n.";
 choices[46][2] = "una etiqueta hologr&aacute;fica que ayuda a identificar que el software es original.";
 choices[46][3] = "la gesti&oacute;n de derechos de uso de contenido en formato digital que comprende medidas t&eacute;cnicas y organizativas.";
 answers[46] = 0;
 units[46] = ['41'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9098. Examen TIC-A1 2013";
 preguntaids[46] = 9098


//  Id pregunta: 9088 Año de creación de pregunta: 2014
 questions[47]= "48)  La Norma ISO 9004:2009 establece una escala para evaluar la madurez del sistema de gesti&oacute;n de calidad para cada cap&iacute;tulo principal de la misma. Un nivel 3 de madurez se corresponde con un nivel de desempe&ntilde;o de,";
 choices[47]= new Array();
 choices[47][0] = "Aproximaci&oacute;n reactiva.";
 choices[47][1] = "&Eacute;nfasis en la mejora continua.";
 choices[47][2] = "Aproximaci&oacute;n del sistema formal estable.";
 choices[47][3] = "&quot;Desempe&ntilde;o de &quot;mejor de su clase&quot;.";
 answers[47] = 2;
 units[47] = ['98'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 9088. Examen TIC-A1 2013";
 preguntaids[47] = 9088


//  Id pregunta: 9122 Año de creación de pregunta: 2014
 questions[48]= "49)  Indique en qu&eacute; consiste el m&eacute;todo QSOS:";
 choices[48]= new Array();
 choices[48][0] = "Est&aacute; destinado a representar la interacci&oacute;n entre los componentes de un sistema.";
 choices[48][1] = "Permite calificar, seleccionar y comparar software Open Source de una manera objetiva.";
 choices[48][2] = "Permite representar a trav&eacute;s de objetos la informaci&oacute;n que contiene una base de datos.";
 choices[48][3] = "Es un modelo matem&aacute;tico que permite calcular las futuras desviaciones en un proyecto software.";
 answers[48] = 1;
 units[48] = ['66'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9122. Examen TIC A2 2013";
 preguntaids[48] = 9122


//  Id pregunta: 9126 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[49]= new Array();
 choices[49][0] = "SELECT";
 choices[49][1] = "DRILL";
 choices[49][2] = "CUBE";
 choices[49][3] = "MEMBER";
 answers[49] = 1;
 units[49] = ['60'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9126. Examen TIC A2 2013";
 preguntaids[49] = 9126


//  Id pregunta: 9114 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[50]= new Array();
 choices[50][0] = "Actors.";
 choices[50][1] = "Use cases.";
 choices[50][2] = "Subject.";
 choices[50][3] = "Scenario.";
 answers[50] = 3;
 units[50] = ['85'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 9114. Examen TIC A2 2013";
 preguntaids[50] = 9114


//  Id pregunta: 9120 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[51]= new Array();
 choices[51][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, s&oacute;lo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[51][1] = "Es uno del los ejes del modelo EFQM.";
 choices[51][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[51][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[51] = 2;
 units[51] = ['98'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 9120. Examen TIC A2 2013";
 preguntaids[51] = 9120


//  Id pregunta: 9073 Año de creación de pregunta: 2014
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes opciones representa tipolog&iacute;as de sistemas SIG?";
 choices[52]= new Array();
 choices[52][0] = "SIG empresarial, SIG de sobremesa, Visualizadores SIG y WebSIG.";
 choices[52][1] = "SIG de componentes, Gesti&oacute;n Catastral y Servicios Posicionales.";
 choices[52][2] = "Ninguna es correcta.";
 choices[52][3] = "Son correctas a y b.";
 answers[52] = 2;
 units[52] = ['71'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9073. ";
 preguntaids[52] = 9073


//  Id pregunta: 9105 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[53]= new Array();
 choices[53][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[53][1] = "impide la ingenier&iacute;a inversa.";
 choices[53][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[53][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[53] = 1;
 units[53] = ['97'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9105. Examen TIC-A1 2013";
 preguntaids[53] = 9105


//  Id pregunta: 9138 Año de creación de pregunta: 2014
 questions[54]= "55)  Seg&uacute;n la orden EHA/1049/2008, se declaran de contrataci&oacute;n centralizada los contratos de servicios:";
 choices[54]= new Array();
 choices[54][0] = "Los contratos de servicios dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica cuyo presupuesto de licitaci&oacute;n no supere 862.000 euros, I.V.A. excluido.";
 choices[54][1] = "Los contratos de servicios de telecomunicaciones.";
 choices[54][2] = "A y B son correctas.";
 choices[54][3] = "A y B son incorrectas.";
 answers[54] = 2;
 units[54] = ['37'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9138. ";
 preguntaids[54] = 9138


//  Id pregunta: 9133 Año de creación de pregunta: 2014
 questions[55]= "56)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[55]= new Array();
 choices[55][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[55][1] = "Es obligatoria.";
 choices[55][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[55][3] = "No existe.";
 answers[55] = 2;
 units[55] = ['10'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 9133. Art. 98 RD Legislativo 3/2011";
 preguntaids[55] = 9133


//  Id pregunta: 9143 Año de creación de pregunta: 2014
 questions[56]= "57)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[56]= new Array();
 choices[56][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[56][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[56][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[56][3] = "La ausencia de cita de la fuente.";
 answers[56] = 2;
 units[56] = ['27'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9143. ";
 preguntaids[56] = 9143


//  Id pregunta: 9130 Año de creación de pregunta: 2014
 questions[57]= "58)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[57]= new Array();
 choices[57][0] = "ASI";
 choices[57][1] = "DSI";
 choices[57][2] = "IAS";
 choices[57][3] = "ASI y DSI";
 answers[57] = 1;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 9130. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";
 preguntaids[57] = 9130


//  Id pregunta: 9086 Año de creación de pregunta: 2014
 questions[58]= "59)  La programaci&oacute;n funcional limita el uso de";
 choices[58]= new Array();
 choices[58][0] = "estados mutables.";
 choices[58][1] = "expresiones lambda.";
 choices[58][2] = "procedimientos como par&aacute;metros.";
 choices[58][3] = "lenguajes como Erlang, F# o Scala.";
 answers[58] = 0;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9086. Examen TIC-A1 2013";
 preguntaids[58] = 9086


//  Id pregunta: 9080 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[59]= new Array();
 choices[59][0] = "Modelo en estrella.";
 choices[59][1] = "Modelo Copo de nieve.";
 choices[59][2] = "Constelaciones.";
 choices[59][3] = "Todos son modelos dimensionales.";
 answers[59] = 3;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9080. ";
 preguntaids[59] = 9080


//  Id pregunta: 9078 Año de creación de pregunta: 2014
 questions[60]= "61)  Un Datamart:";
 choices[60]= new Array();
 choices[60][0] = "Es una Base de Datos.";
 choices[60][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[60][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[60][3] = "Todas son falsas.";
 answers[60] = 2;
 units[60] = ['72'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9078. ";
 preguntaids[60] = 9078


//  Id pregunta: 9069 Año de creación de pregunta: 2014
 questions[61]= "62)  En relaci&oacute;n con las t&eacute;cnicas de compresi&oacute;n y organizaci&oacute;n en SIG raster, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[61]= new Array();
 choices[61][0] = "RLE (Run Length Encode) se basa en estructuras de datos orientadas a la indexaci&oacute;n espacial en las que se procede a la divisi&oacute;n recursiva de la informaci&oacute;n de partida en bloques (cuadrantes).";
 choices[61][1] = "Las t&eacute;cnicas 'Quadtrees' son m&aacute;s complejas que las RLE pero m&aacute;s eficientes.";
 choices[61][2] = "Wavelets se basa en la compresi&oacute;n de patrones y hace factible la transmisi&oacute;n a trav&eacute;s de Internet con tiempos de respuesta muy aceptables.";
 choices[61][3] = "La t&eacute;cnica m&aacute;s elemental es almacenar secuencialmente los valores del atributo en las sucesivas celdas de acuerdo a la secuencia de barrido de la imagen.";
 answers[61] = 0;
 units[61] = ['71'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9069. ";
 preguntaids[61] = 9069


//  Id pregunta: 9129 Año de creación de pregunta: 2014
 questions[62]= "63)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[62]= new Array();
 choices[62][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[62][1] = "Dise&ntilde;o de clases en DSI";
 choices[62][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[62][3] = "A y B son correctas";
 answers[62] = 3;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 9129. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";
 preguntaids[62] = 9129


//  Id pregunta: 9075 Año de creación de pregunta: 2014
 questions[63]= "64)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[63]= new Array();
 choices[63][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[63][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[63][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[63][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[63] = 2;
 units[63] = ['71'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9075. ";
 preguntaids[63] = 9075


//  Id pregunta: 9070 Año de creación de pregunta: 2014
 questions[64]= "65)  KML:";
 choices[64]= new Array();
 choices[64][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[64][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[64][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[64][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[64] = 0;
 units[64] = ['71'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9070. ";
 preguntaids[64] = 9070


//  Id pregunta: 9085 Año de creación de pregunta: 2014
 questions[65]= "66)  De acuerdo con la definiciones dadas por el grupo de trabajo del IEEE Computer Society, la reestructuraci&oacute;n software (restructuring) es";
 choices[65]= new Array();
 choices[65][0] = "el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos.";
 choices[65][1] = "el examen y la modificaci&oacute;n de un sistema para ser reconstruido de una forma nueva y realizar la implantaci&oacute;n derivada de esta nueva forma.";
 choices[65][2] = "la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero sin modificar el comportamiento externo del sistema.";
 choices[65][3] = "un proceso completo que va desde una alto nivel de abstracci&oacute;n, hasta la propia implementaci&oacute;n f&iacute;sica del sistema.";
 answers[65] = 2;
 units[65] = ['97'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 9085. Examen TIC-A1 2013";
 preguntaids[65] = 9085


//  Id pregunta: 9074 Año de creación de pregunta: 2014
 questions[66]= "67)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[66]= new Array();
 choices[66][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[66][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[66][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple.";
 choices[66][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica.";
 answers[66] = 2;
 units[66] = ['71'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9074. ";
 preguntaids[66] = 9074


//  Id pregunta: 9099 Año de creación de pregunta: 2014
 questions[67]= "68)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[67]= new Array();
 choices[67][0] = "48 meses.";
 choices[67][1] = "24 meses.";
 choices[67][2] = "12 meses.";
 choices[67][3] = "6 meses.";
 answers[67] = 2;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 9099. Examen TIC-A1 2013";
 preguntaids[67] = 9099


//  Id pregunta: 9102 Año de creación de pregunta: 2014
 questions[68]= "69)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[68]= new Array();
 choices[68][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[68][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[68][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[68][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[68] = 3;
 units[68] = ['45'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 9102. Examen TIC-A1 2013";
 preguntaids[68] = 9102


//  Id pregunta: 9094 Año de creación de pregunta: 2014
 questions[69]= "70)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[69]= new Array();
 choices[69][0] = "El protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol)";
 choices[69][1] = "El lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[69][2] = "Se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos";
 choices[69][3] = "Es una propuesta del Object Management Group.";
 answers[69] = 1;
 units[69] = ['55'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9094. Examen TIC-A1 2013";
 preguntaids[69] = 9094


//  Id pregunta: 9081 Año de creación de pregunta: 2014
 questions[70]= "71)  Un problema del modelo dimensional es:";
 choices[70]= new Array();
 choices[70][0] = "Data Expression.";
 choices[70][1] = "Data Complexity.";
 choices[70][2] = "Data Sparsity.";
 choices[70][3] = "Data Compression.";
 answers[70] = 2;
 units[70] = ['72'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9081. ";
 preguntaids[70] = 9081


//  Id pregunta: 9089 Año de creación de pregunta: 2014
 questions[71]= "72)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[71]= new Array();
 choices[71][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[71][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[71][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[71][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[71] = 0;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9089. Examen TIC-A1 2013";
 preguntaids[71] = 9089


//  Id pregunta: 9068 Año de creación de pregunta: 2014
 questions[72]= "73)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[72][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[72][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[72][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[72] = 2;
 units[72] = ['71'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9068. ";
 preguntaids[72] = 9068


//  Id pregunta: 9071 Año de creación de pregunta: 2014
 questions[73]= "74)  Son tipos de mapas:";
 choices[73]= new Array();
 choices[73][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[73][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[73][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano.";
 choices[73][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[73] = 2;
 units[73] = ['71'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9071. ";
 preguntaids[73] = 9071


//  Id pregunta: 9097 Año de creación de pregunta: 2014
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[74]= new Array();
 choices[74][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[74][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[74][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[74][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[74] = 2;
 units[74] = ['77'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9097. Examen TIC-A1 2013";
 preguntaids[74] = 9097


