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
//  Id pregunta: 10294 Año de creación de pregunta: 2015
 questions[0]= "1)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[0]= new Array();
 choices[0][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[0][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[0][2] = "Las respuestas a) y b) son falsas";
 choices[0][3] = "Las respuestas a) y b) son verdaderas";
 answers[0] = 0;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 10294. ";
 preguntaids[0] = 10294


//  Id pregunta: 10178 Año de creación de pregunta: 2015
 questions[1]= "2)  En relaci&oacute;n con el Registro Electr&oacute;nico de Apoderamientos (REA), se&ntilde;ale la respuesta correcta:";
 choices[1]= new Array();
 choices[1][0] = "Un departamento ministerial puede adherirse al REA mediante la firma electr&oacute;nica de un acuerdo de adhesi&oacute;n con el Ministerio de Hacienda y Administraciones P&uacute;blicas, de forma simult&aacute;nea con el alta electr&oacute;nica de sus tr&aacute;mites en dicho Registro.";
 choices[1][1] = "Si un departamento ministerial ya est&aacute; adherido al REA y desea incorporar nuevos tr&aacute;mites al mismo, deber&aacute; hacerlo electr&oacute;nicamente en dicho Registro y publicar una Resoluci&oacute;n oficial modificando o ampliando la relaci&oacute;n inicial de tr&aacute;mites.";
 choices[1][2] = "Los departamentos ministeriales u organismos p&uacute;blicos que gestionen un Registro de apoderamientos propio, deber&aacute;n dar de alta &eacute;stos tambi&eacute;n en el REA para garantizar la interoperabilidad de ambos registros";
 choices[1][3] = "El periodo m&aacute;ximo de vigencia de los apoderamientos para los tr&aacute;mites incorporados en el REA no podr&aacute; superar los dos a&ntilde;os.";
 answers[1] = 1;
 units[1] = ['47'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 10178. Examen TIC A1 2014";
 preguntaids[1] = 10178


//  Id pregunta: 10193 Año de creación de pregunta: 2015
 questions[2]= "3)  Una de las competencias que debe poseer actualmente un directivo TIC es la de liderazgo. El liderazgo autocr&aacute;tico se caracteriza por:";
 choices[2]= new Array();
 choices[2][0] = "Permitir y formentar la participaci&oacute;n de su equipo en la adopci&oacute;n de decisiones.";
 choices[2][1] = "Limitar su intervenci&oacute;n a comunicar el objetivo final del trabajo que ha de realizar su equipo.";
 choices[2][2] = "Utilizar poco el poder y conceder al equipo un alto grado de independencia en sus tareas.";
 choices[2][3] = "Adoptar decisiones de manera unilateral, limitando o excluyendo a los subordinados.";
 answers[2] = 3;
 units[2] = ['26'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 10193. Examen TIC A1 2014";
 preguntaids[2] = 10193


//  Id pregunta: 10301 Año de creación de pregunta: 2015
 questions[3]= "4)  Seleccione la respuesta verdadera sobre los t&eacute;rminos empleados para definir la estrategia de continuidad y recuperaci&oacute;n en un sistema de informaci&oacute;n.";
 choices[3]= new Array();
 choices[3][0] = "El objetivo de Punto de recuperaci&oacute;n RPO determina la p&eacute;rdida aceptable de datos en caso de interrupci&oacute;n.";
 choices[3][1] = "El objetivo de Tiempo de Recuperaci&oacute;n RTO es el tiempo m&aacute;ximo que el sistema puede estar interrumpido.";
 choices[3][2] = "Cuanto m&aacute;s bajo es el RTO m&aacute;s baja es la tolerancia al desastre y m&aacute;s elevado ser&aacute; el coste de las estrategias de recuperaci&oacute;n.";
 choices[3][3] = "Todas las anteriores son verdaderas";
 answers[3] = 0;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 10301. [&Uacute;ltimo backup] &lt;- RPO -&gt; [Contingencia] &lt;- RTO -&gt; [Datos restaurados]";
 preguntaids[3] = 10301


//  Id pregunta: 10011 Año de creación de pregunta: 2015
 questions[4]= "5)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[4]= new Array();
 choices[4][0] = "Sesiones de trabajo.";
 choices[4][1] = "Valoraciones Delphi.";
 choices[4][2] = "Histogramas.";
 choices[4][3] = "&Aacute;rboles de ataque.";
 answers[4] = 3;
 units[4] = ['45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 10011. Examen TIC A2 2014";
 preguntaids[4] = 10011


//  Id pregunta: 10209 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Cu&aacute;l es el portal nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica de la Administraci&oacute;n General del Estado?";
 choices[5]= new Array();
 choices[5][0] = "www.datos.gob.es";
 choices[5][1] = "www.rediris.es";
 choices[5][2] = "www.pae.es";
 choices[5][3] = "administracionelectronica.gob.es";
 answers[5] = 0;
 units[5] = ['27'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 10209. Cat&aacute;logo datos abiertos";
 preguntaids[5] = 10209


//  Id pregunta: 10288 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;les son las 4 fases de la evoluci&oacute;n de la inversi&oacute;n en sistemas de informaci&oacute;n en el tiempo de acuerdo con el modelo de Gibson y Nolan?";
 choices[6]= new Array();
 choices[6][0] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n, madurez";
 choices[6][1] = "Iniciaci&oacute;n, control, integraci&oacute;n, madurez";
 choices[6][2] = "Iniciaci&oacute;n, dise&ntilde;o, implementaci&oacute;n, transici&oacute;n";
 choices[6][3] = "Iniciaci&oacute;n, control, administraci&oacute;n, madurez";
 answers[6] = 0;
 units[6] = ['24'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10288. ";
 preguntaids[6] = 10288


//  Id pregunta: 10212 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?";
 choices[7]= new Array();
 choices[7][0] = "8";
 choices[7][1] = "10";
 choices[7][2] = "11";
 choices[7][3] = "12";
 answers[7] = 3;
 units[7] = ['43'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10212. ";
 preguntaids[7] = 10212


//  Id pregunta: 10216 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes es una es una metodolog&iacute;a de gesti&oacute;n de software que ayuda a definir e implementar procesos para optimizar la inversi&oacute;n en software cumpliendo con la legislaci&oacute;n aplicable?";
 choices[8]= new Array();
 choices[8][0] = "BSA";
 choices[8][1] = "SAM";
 choices[8][2] = "Copyleft";
 choices[8][3] = "Copyright";
 answers[8] = 1;
 units[8] = ['41'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 10216. SAM (Gesti&oacute;n de Activos de Software)";
 preguntaids[8] = 10216


//  Id pregunta: 10297 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[9]= new Array();
 choices[9][0] = "La interoperabilidad como cualidad integral";
 choices[9][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[9][2] = "Enfoque de soluciones multilaterales";
 choices[9][3] = "Todos los anteriores";
 answers[9] = 3;
 units[9] = ['42'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 10297. ";
 preguntaids[9] = 10297


//  Id pregunta: 10204 Año de creación de pregunta: 2015
 questions[10]= "11)  El proyecto SCSP, del Ministerio de Hacienda y Administraciones P&uacute;blicas:";
 choices[10]= new Array();
 choices[10][0] = "Es un conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel.";
 choices[10][1] = "Es un cat&aacute;logo de interfaces de interoperabilidad para el consumo de datos del Directorio Com&uacute;n de Organismos y Oficinas.";
 choices[10][2] = "Permite la conexi&oacute;n en tiempo real de m&uacute;ltiples salas de videconferencia.";
 choices[10][3] = "Es un diagramador de procedimientos administrativos, para su integraci&oacute;n en las sedes electr&oacute;nicas.";
 answers[10] = 0;
 units[10] = ['47'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10204. Examen TIC A1 2014";
 preguntaids[10] = 10204


//  Id pregunta: 10198 Año de creación de pregunta: 2015
 questions[11]= "12)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[11]= new Array();
 choices[11][0] = ".xls, .xlsx, .doc, .docx";
 choices[11][1] = ".rar, .zip, .gz";
 choices[11][2] = ".jpg, .gif, .png, .tiff";
 choices[11][3] = ".mp3, .ogg, .mp4";
 answers[11] = 3;
 units[11] = ['43'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 10198. Examen TIC A1 2014";
 preguntaids[11] = 10198


//  Id pregunta: 10120 Año de creación de pregunta: 2015
 questions[12]= "13)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[12]= new Array();
 choices[12][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[12][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[12][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[12][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[12] = 2;
 units[12] = ['47'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 10120. Examen TIC A1 2014";
 preguntaids[12] = 10120


//  Id pregunta: 10299 Año de creación de pregunta: 2015
 questions[13]= "14)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[13]= new Array();
 choices[13][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[13][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[13][2] = "Las respuestas a) y b) son falsas";
 choices[13][3] = "Las respuestas a) y b) son verdaderas";
 answers[13] = 3;
 units[13] = ['46'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 10299. ";
 preguntaids[13] = 10299


//  Id pregunta: 10303 Año de creación de pregunta: 2015
 questions[14]= "15)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[14]= new Array();
 choices[14][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[14][1] = "Respeto a la integridad de la obra";
 choices[14][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[14][3] = "Todas las anteriores";
 answers[14] = 3;
 units[14] = ['41'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 10303. ";
 preguntaids[14] = 10303


//  Id pregunta: 10161 Año de creación de pregunta: 2015
 questions[15]= "16)  En relaci&oacute;n con el modelo de gobernanza en el &aacute;mbito de las TIC de la Administraci&oacute;n General del Estado, y respecto a los medios y servicios de uso compartido es correcto que:";
 choices[15]= new Array();
 choices[15][0] = "Los medios y servicios TIC ser&aacute;n declarados de uso compartido cuando, en raz&oacute;n de su naturaleza o del inter&eacute;s com&uacute;n, respondan a necesidades transversales de los ciudadanos.";
 choices[15][1] = "La utilizaci&oacute;n de los medios y servicios compartidos ser&aacute; de car&aacute;cter obligatorio y sustitutivo respecto a los medios y servicios particulares empleados por las distintas unidades.";
 choices[15][2] = "Las Comisiones Ministeriales de Administraci&oacute;n Digital (CMAD) velar&aacute;n por el uso de los medios y servicios compartidos. En este sentido, cuando las necesidades puedan ser comunes a varias unidades, se escoger&aacute; la alternativa que permita independizar el servicio entre los Departamentos, solo en caso de que las unidades pertenezcan al mismo Ministerio.";
 choices[15][3] = "Los activos TIC afectos a la prestaci&oacute;n de servicios sectoriales deber&aacute;n migrarse a los medios y servicios compartidos.";
 answers[15] = 1;
 units[15] = ['47'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 10161. Examen TIC A1 2014";
 preguntaids[15] = 10161


//  Id pregunta: 10010 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[16]= new Array();
 choices[16][0] = "Auditor&iacute;a.";
 choices[16][1] = "Acreditaci&oacute;n.";
 choices[16][2] = "Certificaci&oacute;n.";
 choices[16][3] = "Evaluaci&oacute;n.";
 answers[16] = 1;
 units[16] = ['45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 10010. Examen TIC A2 2014";
 preguntaids[16] = 10010


//  Id pregunta: 10293 Año de creación de pregunta: 2015
 questions[17]= "18)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[17]= new Array();
 choices[17][0] = "Nivel b&aacute;sico";
 choices[17][1] = "Nivel medio";
 choices[17][2] = "Nivel alto";
 choices[17][3] = "Nivel muy alto";
 answers[17] = 1;
 units[17] = ['35'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 10293. ";
 preguntaids[17] = 10293


//  Id pregunta: 10222 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[18]= new Array();
 choices[18][0] = "ISO/TC 1";
 choices[18][1] = "ISO/TC 2";
 choices[18][2] = "ISO/IEC JTC 1";
 choices[18][3] = "ISO/IEC JPC 2";
 answers[18] = 2;
 units[18] = ['48'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 10222. ";
 preguntaids[18] = 10222


//  Id pregunta: 10127 Año de creación de pregunta: 2015
 questions[19]= "20)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[19]= new Array();
 choices[19][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[19][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[19][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[19][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[19] = 2;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 10127. Examen TIC A1 2014";
 preguntaids[19] = 10127


//  Id pregunta: 10220 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[20]= new Array();
 choices[20][0] = "Cumplimiento de las WCAG 1.0";
 choices[20][1] = "Cumplimiento de las WCAG 2.0";
 choices[20][2] = "Escaso esfuerzo f&iacute;sico";
 choices[20][3] = "Ensayo prueba-error";
 answers[20] = 2;
 units[20] = ['42'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 10220. ";
 preguntaids[20] = 10220


//  Id pregunta: 10252 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica general de Scrum?";
 choices[21]= new Array();
 choices[21][0] = "Durante cada sprint el equipo crea un incremento de software potencialmente entregable";
 choices[21][1] = "Cada sprint dura de media entre 6 y 12 meses";
 choices[21][2] = "Los elementos del Product Backlog que forman parte del sprint se determinan durante la reuni&oacute;n de Sprint Planning";
 choices[21][3] = "Todas son caracter&iacute;sticas generales de Scrum";
 answers[21] = 1;
 units[21] = ['34'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 10252. Cada sprint suele durar de 15 a 30 d&iacute;as";
 preguntaids[21] = 10252


//  Id pregunta: 10156 Año de creación de pregunta: 2015
 questions[22]= "23)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[22][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital.";
 choices[22][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[22][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[22] = 1;
 units[22] = ['47'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 10156. Examen TIC A1 2014";
 preguntaids[22] = 10156


//  Id pregunta: 10300 Año de creación de pregunta: 2015
 questions[23]= "24)  Seleccione la respuesta falsa respecto al ciclo de Deming";
 choices[23]= new Array();
 choices[23][0] = "En la fase de Plan, se detallan las especificaciones de los resultados esperados";
 choices[23][1] = "En la fase de Act, se asignan recursos y recopilan los datos para verificarlos.";
 choices[23][2] = "En la fase de Do se ejecuta el plan estrat&eacute;gico";
 choices[23][3] = "En la fase de Check, se eval&uacute;a si se ha producido la mejora esperada";
 answers[23] = 1;
 units[23] = ['36'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 10300. PDCA";
 preguntaids[23] = 10300


//  Id pregunta: 10211 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[24]= new Array();
 choices[24][0] = "Servicio unificado de radiocomunicaciones";
 choices[24][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[24][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[24][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[24] = 0;
 units[24] = ['26'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 10211. El servicio incluido es el unificado de telecomunicaciones";
 preguntaids[24] = 10211


//  Id pregunta: 10295 Año de creación de pregunta: 2015
 questions[25]= "26)  Seleccione la respuesta verdadera sobre la Agencia de Protecci&oacute;n de Datos";
 choices[25]= new Array();
 choices[25][0] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Interior";
 choices[25][1] = "Est&aacute; adscrita a la Ley General Presupuestaria pero no tiene dotaci&oacute;n presupuestaria propia.";
 choices[25][2] = "El Director de la AEPD es nombrado por un periodo de cuatro a&ntilde;os";
 choices[25][3] = "Est&aacute; sometida &uacute;nicamente al control interno por el Tribunal de Cuentas.";
 answers[25] = 2;
 units[25] = ['35'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 10295. ";
 preguntaids[25] = 10295


//  Id pregunta: 10024 Año de creación de pregunta: 2015
 questions[26]= "27)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[26]= new Array();
 choices[26][0] = "Es siempre cero.";
 choices[26][1] = "Es igual a su tiempo early.";
 choices[26][2] = "Es mayor que su tiempo early.";
 choices[26][3] = "Es menor que su tiempo early.";
 answers[26] = 1;
 units[26] = ['31'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10024. Examen TIC A2 2014";
 preguntaids[26] = 10024


//  Id pregunta: 10289 Año de creación de pregunta: 2015
 questions[27]= "28)  En una estructura de tres niveles de un CAU, seleccione la opci&oacute;n verdadera.";
 choices[27]= new Array();
 choices[27][0] = "El nivel 2 deber&aacute; tener acceso a la base de incidencias ya que la incidencia reportada puede haberse producido anteriormente.";
 choices[27][1] = "Todas las incidencias deben estar documentadas una vez resueltas.";
 choices[27][2] = "Todas las incidencias comienzan por una recepci&oacute;n y finalizan con un cierre.";
 choices[27][3] = "Todas las anteriores son verdaderas";
 answers[27] = 3;
 units[27] = ['30'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 10289. ";
 preguntaids[27] = 10289


//  Id pregunta: 10215 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano especializado en el control de la Administraci&oacute;n P&uacute;blica?";
 choices[28]= new Array();
 choices[28][0] = "Tribunal de Cuentas";
 choices[28][1] = "IGAE";
 choices[28][2] = "Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 choices[28][3] = "Todos lo son";
 answers[28] = 3;
 units[28] = ['36'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 10215. ";
 preguntaids[28] = 10215


//  Id pregunta: 10192 Año de creación de pregunta: 2015
 questions[29]= "30)  En el caso de un fichero de datos relativo a la comisi&oacute;n de infracciones administrativas o penales, indique los niveles de seguridad que deber&aacute;n implantarse:";
 choices[29]= new Array();
 choices[29][0] = "S&oacute;lo las medidas de seguridad de nivel b&aacute;sico.";
 choices[29][1] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio y alto.";
 choices[29][2] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio.";
 choices[29][3] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel alto.";
 answers[29] = 2;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 10192. Examen TIC A1 2014";
 preguntaids[29] = 10192


//  Id pregunta: 10223 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[30]= new Array();
 choices[30][0] = "ETSI";
 choices[30][1] = "CECUA";
 choices[30][2] = "ECMA";
 choices[30][3] = "ECTA";
 answers[30] = 2;
 units[30] = ['48'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 10223. European Computer Manufacturing Association";
 preguntaids[30] = 10223


//  Id pregunta: 10292 Año de creación de pregunta: 2015
 questions[31]= "32)  Las dependencias entre actividades en gesti&oacute;n de proyectos pueden ser (Seleccione la verdadera):";
 choices[31]= new Array();
 choices[31][0] = "Obligatorias y discrecionales";
 choices[31][1] = "Obligatorias, discrecionales y externas";
 choices[31][2] = "Obligatorias, discrecionales, externas e internas";
 choices[31][3] = "Obligatorias, discrecionales, externas, internas y sincronizadas.";
 answers[31] = 1;
 units[31] = ['31'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 10292. ";
 preguntaids[31] = 10292


//  Id pregunta: 10129 Año de creación de pregunta: 2015
 questions[32]= "33)  Las entidades locales adheridas al servicio com&uacute;n denominado &ldquo;Emprende en 3&rdquo;:";
 choices[32]= new Array();
 choices[32][0] = "Aceptar&aacute;n y utilizar&aacute;n el modelo tipo de declaraci&oacute;n responsable de conformidad con la normativa que regula el proyecto.";
 choices[32][1] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[32][2] = "No podr&aacute;n sancionar a la empresa a posteriori, si &eacute;sta present&oacute; la declaraci&oacute;n responsable";
 choices[32][3] = "La tramitaci&oacute;n de las declaraciones responsables recibidas por &ldquo;Emprende en 3&rdquo; debe ser finalizada antes de los 5 d&iacute;as h&aacute;biles desde su presentaci&oacute;n.";
 answers[32] = 0;
 units[32] = ['47'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 10129. Examen TIC A1 2014";
 preguntaids[32] = 10129


//  Id pregunta: 10302 Año de creación de pregunta: 2015
 questions[33]= "34)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[33]= new Array();
 choices[33][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[33][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[33][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[33][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[33] = 1;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 10302. ";
 preguntaids[33] = 10302


//  Id pregunta: 10100 Año de creación de pregunta: 2015
 questions[34]= "35)  En el contexto de la web sem&aacute;ntica, se&ntilde;ale la definici&oacute;n correcta de ontolog&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "Es una especificaci&oacute;n expl&iacute;cita de una conceptualizaci&oacute;n.";
 choices[34][1] = "Es un sistema de clasificaci&oacute;n abierto y/o colaborativo basado en etiquetas.";
 choices[34][2] = "Es un conjunto de nombres en el cual todos los nombres son &uacute;nicos.";
 choices[34][3] = "Es un sistema de clasificaci&oacute;n que permite agrupar un conjunto de elementos dentro de unas categor&iacute;as predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera.";
 answers[34] = 0;
 units[34] = ['42'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 10100. Examen TIC A2 2014";
 preguntaids[34] = 10100


//  Id pregunta: 9982 Año de creación de pregunta: 2015
 questions[35]= "36)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[35]= new Array();
 choices[35][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[35][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[35][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[35][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[35] = 3;
 units[35] = ['35'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 9982. Examen TIC A2 2014";
 preguntaids[35] = 9982


//  Id pregunta: 10296 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[36]= new Array();
 choices[36][0] = "Proporcionalidad";
 choices[36][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[36][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[36][3] = "Gesti&oacute;n de riesgos";
 answers[36] = 3;
 units[36] = ['43'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 10296. ";
 preguntaids[36] = 10296


//  Id pregunta: 10305 Año de creación de pregunta: 2015
 questions[37]= "38)  Seleccione la respuesta verdadera:";
 choices[37]= new Array();
 choices[37][0] = "Un Valor Actual Neto mayor que 0 indica que la inversi&oacute;n es rentable";
 choices[37][1] = "Un Valor Actual Neto mayor que 0 indica que la TIR es inferior al coste del capital";
 choices[37][2] = "Las respuestas a) y b) son falsas";
 choices[37][3] = "Las respuestas a) y b) son verdaderas";
 answers[37] = 0;
 units[37] = ['40'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 10305. ";
 preguntaids[37] = 10305


//  Id pregunta: 10213 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[38]= new Array();
 choices[38][0] = "Ninguno";
 choices[38][1] = "1";
 choices[38][2] = "2";
 choices[38][3] = "5";
 answers[38] = 3;
 units[38] = ['46'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 10213. ";
 preguntaids[38] = 10213


//  Id pregunta: 9983 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[39]= new Array();
 choices[39][0] = "6 meses.";
 choices[39][1] = "1 a&ntilde;o.";
 choices[39][2] = "2 a&ntilde;os.";
 choices[39][3] = "5 a&ntilde;os.";
 answers[39] = 1;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 9983. Examen TIC A2 2014";
 preguntaids[39] = 9983


//  Id pregunta: 10210 Año de creación de pregunta: 2015
 questions[40]= "41)  &iquest;Cu&aacute;ntos servicios se incluyen en la primera Declaracion de Servicios Compartidos por parte de la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[40]= new Array();
 choices[40][0] = "12";
 choices[40][1] = "14";
 choices[40][2] = "16";
 choices[40][3] = "10";
 answers[40] = 1;
 units[40] = ['26'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 10210. Declaraci&oacute;n de la CETIC";
 preguntaids[40] = 10210


//  Id pregunta: 9986 Año de creación de pregunta: 2015
 questions[41]= "42)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[41]= new Array();
 choices[41][0] = "Confidencialidad.";
 choices[41][1] = "Integridad.";
 choices[41][2] = "Autenticidad.";
 choices[41][3] = "Trazabilidad.";
 answers[41] = 3;
 units[41] = ['46'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 9986. Examen TIC A2 2014";
 preguntaids[41] = 9986


//  Id pregunta: 10165 Año de creación de pregunta: 2015
 questions[42]= "43)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[42]= new Array();
 choices[42][0] = "Correo electr&oacute;nico multidominio.";
 choices[42][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[42][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[42][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[42] = 0;
 units[42] = ['47'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 10165. Examen TIC A1 2014";
 preguntaids[42] = 10165


//  Id pregunta: 10251 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes NO es una Metodolog&iacute;a &Aacute;gil?";
 choices[43]= new Array();
 choices[43][0] = "XP";
 choices[43][1] = "Kanban";
 choices[43][2] = "FDD";
 choices[43][3] = "Todas son metodolog&iacute;as &aacute;giles";
 answers[43] = 3;
 units[43] = ['34'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 10251. eXtream Programming, Feature Driven Development";
 preguntaids[43] = 10251


//  Id pregunta: 10131 Año de creación de pregunta: 2015
 questions[44]= "45)  En relaci&oacute;n con la contrataci&oacute;n en materia TIC, es competencia de la Secretar&iacute;a General de Administraci&oacute;n Digital de la AGE:";
 choices[44]= new Array();
 choices[44][0] = "Informar con car&aacute;cter facultativo la declaraci&oacute;n de contrataci&oacute;n centralizada de los contratos de suministros, obras y servicios en materia TIC.";
 choices[44][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[44][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[44][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[44] = 3;
 units[44] = ['37'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 10131. Examen TIC A1 2014";
 preguntaids[44] = 10131


//  Id pregunta: 9988 Año de creación de pregunta: 2015
 questions[45]= "46)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[45][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[45][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[45][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[45] = 3;
 units[45] = ['47'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 9988. Examen TIC A2 2014";
 preguntaids[45] = 9988


//  Id pregunta: 10218 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0?";
 choices[46]= new Array();
 choices[46][0] = "Alternativas textuales";
 choices[46][1] = "Accesible a trav&eacute;s de teclado";
 choices[46][2] = "Compatible";
 choices[46][3] = "Ayuda a la entrada de datos";
 answers[46] = 2;
 units[46] = ['42'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 10218. ";
 preguntaids[46] = 10218


//  Id pregunta: 10224 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[47]= new Array();
 choices[47][0] = "ORVE";
 choices[47][1] = "GEISER";
 choices[47][2] = "Las 2 anteriores";
 choices[47][3] = "Ambas son soluciones, pero no en la nube";
 answers[47] = 2;
 units[47] = ['47'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 10224. ";
 preguntaids[47] = 10224


//  Id pregunta: 10206 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;C&oacute;mo se llaman los &oacute;rganos colegiados de &aacute;mbito departamental responsables del impulso y de la coordinaci&oacute;n interna en cada departamento en materia de Administraci&oacute;n digital?";
 choices[48]= new Array();
 choices[48][0] = "Comisiones Ministeriales de Administraci&oacute;n Electr&oacute;nica";
 choices[48][1] = "Comisiones Ministeriales de Administraci&oacute;n Digital";
 choices[48][2] = "Subdirecciones TIC";
 choices[48][3] = "Direcci&oacute;n TIC";
 answers[48] = 1;
 units[48] = ['26'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 10206. CMAD";
 preguntaids[48] = 10206


//  Id pregunta: 10150 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;C&uacute;al de las siguientes opciones NO es un sistema de control de versiones?";
 choices[49]= new Array();
 choices[49][0] = "Subversion.";
 choices[49][1] = "Git";
 choices[49][2] = "Ruby.";
 choices[49][3] = "SourceSafe.";
 answers[49] = 2;
 units[49] = ['31'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 10150. Examen TIC A1 2014";
 preguntaids[49] = 10150


//  Id pregunta: 10124 Año de creación de pregunta: 2015
 questions[50]= "51)  Respecto a la Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, se&ntilde;ale la respuesta correcta:";
 choices[50]= new Array();
 choices[50][0] = "Las personas jur&iacute;dicas son las &uacute;nicas que pueden hacer uso de los datos generados y custodiados por los organismos del sector p&uacute;blico.";
 choices[50][1] = "La reutilizaci&oacute;n supone actividades como la copia, difusi&oacute;n, reordenaci&oacute;n y combinaci&oacute;n de la informaci&oacute;n siempre que sea con fines no comerciales.";
 choices[50][2] = "El sitio web datos.gob.es es el portal de car&aacute;cter nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica del Sector P&uacute;blico.";
 choices[50][3] = "Los documentos y recursos de informaci&oacute;n reutilizables puestos a disposici&oacute;n p&uacute;blica utilizar&aacute;n est&aacute;ndares abiertos y est&aacute;ndares propietarios indistintamente.";
 answers[50] = 2;
 units[50] = ['27'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 10124. Examen TIC A1 2014";
 preguntaids[50] = 10124


//  Id pregunta: 10291 Año de creación de pregunta: 2015
 questions[51]= "52)  Seleccione la respuesta falsa respecto al m&eacute;todo de Diagramaci&oacute;n con Flechas (ADM)";
 choices[51]= new Array();
 choices[51][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma de un proyecto";
 choices[51][1] = "Utiliza Flechas para representar las actividades que se conectan en nodos";
 choices[51][2] = "Todas las actividades tienen que tener un valor de duraci&oacute;n mayor que cero";
 choices[51][3] = "Permite planificar qu&eacute; actividades dependen de la finalizaci&oacute;n de otras en un proyecto.";
 answers[51] = 2;
 units[51] = ['31'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 10291. ";
 preguntaids[51] = 10291


//  Id pregunta: 10221 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Es AENOR un miembro de ISO?";
 choices[52]= new Array();
 choices[52][0] = "No";
 choices[52][1] = "S&iacute;, es miembro nato";
 choices[52][2] = "Si, es miembro suscrito";
 choices[52][3] = "No, pero tiene previsto incorporarse en 2017";
 answers[52] = 1;
 units[52] = ['48'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 10221. ";
 preguntaids[52] = 10221


//  Id pregunta: 10075 Año de creación de pregunta: 2015
 questions[53]= "54)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[53]= new Array();
 choices[53][0] = "TortoiseCVS";
 choices[53][1] = "Subversive";
 choices[53][2] = "Sventon";
 choices[53][3] = "Subclipse";
 answers[53] = 0;
 units[53] = ['31'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 10075. Examen TIC A2 2014";
 preguntaids[53] = 10075


//  Id pregunta: 10304 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no se utiliza para el control de la legalidad del software?";
 choices[54]= new Array();
 choices[54][0] = "Watermarking";
 choices[54][1] = "Huella digital";
 choices[54][2] = "Kerberos";
 choices[54][3] = "Windows Media Right Manager System";
 answers[54] = 2;
 units[54] = ['41'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 10304. Kerberos es un sistema de federaci&oacute;n de identidades";
 preguntaids[54] = 10304


//  Id pregunta: 10123 Año de creación de pregunta: 2015
 questions[55]= "56)  En el &aacute;mbito de los Contratos del Sector P&uacute;blico y, en particular, en los contratos de servicios &iquest;cu&aacute;l es la cuant&iacute;a m&aacute;xima, IVA excluido, del presupuesto de licitaci&oacute;n de los contratos dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica que se declaran de contrataci&oacute;n centralizada?";
 choices[55]= new Array();
 choices[55][0] = "862.000 euros.";
 choices[55][1] = "300.000 euros.";
 choices[55][2] = "500.000 euros.";
 choices[55][3] = "1.152.000 euros.";
 answers[55] = 0;
 units[55] = ['37'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 10123. Examen TIC A1 2014";
 preguntaids[55] = 10123


//  Id pregunta: 10208 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza el secreto de las comunicaciones?";
 choices[56]= new Array();
 choices[56][0] = "Art&iacute;culo 15";
 choices[56][1] = "Art&iacute;culo 17";
 choices[56][2] = "Art&iacute;culo 18";
 choices[56][3] = "Art&iacute;culo 19";
 answers[56] = 2;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 10208. Derecho honor, intimidad personal";
 preguntaids[56] = 10208


//  Id pregunta: 10253 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Qu&eacute; rol de Scrum NO est&aacute; incluido dentro de los roles 'Cerdo'?";
 choices[57]= new Array();
 choices[57][0] = "ScrumMaster";
 choices[57][1] = "Product Owner";
 choices[57][2] = "ScrumTeam";
 choices[57][3] = "Stakeholders";
 answers[57] = 3;
 units[57] = ['34'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 10253. Los Stakeholders se encuentran dentro del tipo de rol 'Gallina'. Resumiendo la f&aacute;bula, el cerdo pone m&aacute;s &quot;carne&quot; en el asador, mientras q la gallina s&oacute;lo rompe los huevos para hacer un desayuno.";
 preguntaids[57] = 10253


//  Id pregunta: 10217 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[58]= new Array();
 choices[58][0] = "Est&aacute;n organizadas en 4 principios";
 choices[58][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[58][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[58][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[58] = 3;
 units[58] = ['42'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 10217. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";
 preguntaids[58] = 10217


//  Id pregunta: 10061 Año de creación de pregunta: 2015
 questions[59]= "60)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[59]= new Array();
 choices[59][0] = "Operable.";
 choices[59][1] = "Perceptible.";
 choices[59][2] = "Robustez.";
 choices[59][3] = "Comprensible.";
 answers[59] = 2;
 units[59] = ['42'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 10061. Examen TIC A2 2014";
 preguntaids[59] = 10061


//  Id pregunta: 10167 Año de creación de pregunta: 2015
 questions[60]= "61)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[60]= new Array();
 choices[60][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[60][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[60][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[60][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[60] = 1;
 units[60] = ['43'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 10167. Examen TIC A1 2014";
 preguntaids[60] = 10167


//  Id pregunta: 10298 Año de creación de pregunta: 2015
 questions[61]= "62)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[61]= new Array();
 choices[61][0] = "200 p&iacute;xeles por pulgada";
 choices[61][1] = "125 p&iacute;xeles por pulgada";
 choices[61][2] = "256 p&iacute;xeles por pulgada";
 choices[61][3] = "80 p&iacute;xeles por pulgada";
 answers[61] = 0;
 units[61] = ['43'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 10298. ";
 preguntaids[61] = 10298


//  Id pregunta: 10142 Año de creación de pregunta: 2015
 questions[62]= "63)  La Entidad AENOR:";
 choices[62]= new Array();
 choices[62][0] = "Es una entidad p&uacute;blica que elabora normas t&eacute;cnicas espa&ntilde;olas, impulsando la aportaci&oacute;n nacional en la elaboraci&oacute;n de normas europeas e internacionales.";
 choices[62][1] = "Desarrolla actividades de normalizaci&oacute;n y certificaci&oacute;n (N+C) exclusivamente en el &aacute;mbito del sector p&uacute;blico.";
 choices[62][2] = "Es una entidad espa&ntilde;ola, privada, independiente, sin &aacute;nimo de lucro, que certifica productos, servicios y empresas (sistemas).";
 choices[62][3] = "Es la entidad p&uacute;blica internacional responsable de la elaboraci&oacute;n de los est&aacute;ndares ISO/IEC.";
 answers[62] = 2;
 units[62] = ['48'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 10142. Examen TIC A1 2014";
 preguntaids[62] = 10142


//  Id pregunta: 9981 Año de creación de pregunta: 2015
 questions[63]= "64)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[63]= new Array();
 choices[63][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[63][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[63][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[63][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[63] = 1;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 9981. Examen TIC A2 2014";
 preguntaids[63] = 9981


//  Id pregunta: 10169 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?";
 choices[64]= new Array();
 choices[64][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[64][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[64][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[64][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[64] = 2;
 units[64] = ['43'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 10169. Examen TIC A1 2014";
 preguntaids[64] = 10169


//  Id pregunta: 10012 Año de creación de pregunta: 2015
 questions[65]= "66)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[65]= new Array();
 choices[65][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[65][1] = "Estructura de respuesta a incidentes.";
 choices[65][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[65][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[65] = 1;
 units[65] = ['36', '45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 10012. Examen TIC A2 2014";
 preguntaids[65] = 10012


//  Id pregunta: 10214 Año de creación de pregunta: 2015
 questions[66]= "67)  &iquest;C&oacute;mo se llaman a las auditor&iacute;as especializadas en descubrir fraudes y delitos, en obtener evidencias v&aacute;lidas para su uso por las autoridades competente, policiales o judiciales?";
 choices[66]= new Array();
 choices[66][0] = "Auditor&iacute;as de regularidad";
 choices[66][1] = "Auditor&iacute;as operativas o de gesti&oacute;n";
 choices[66][2] = "Auditor&iacute;as forenses";
 choices[66][3] = "Auditor&iacute;as de los sistemas de informaci&oacute;n";
 answers[66] = 2;
 units[66] = ['36'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 10214. ";
 preguntaids[66] = 10214


//  Id pregunta: 10207 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Qu&eacute; niveles de Complemento de Destino engloban los puestos del grupo A1?";
 choices[67]= new Array();
 choices[67][0] = "18 a 28";
 choices[67][1] = "18 a 30";
 choices[67][2] = "20 a 30";
 choices[67][3] = "26 a 30";
 answers[67] = 2;
 units[67] = ['26'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 10207. ";
 preguntaids[67] = 10207


//  Id pregunta: 10026 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[68]= new Array();
 choices[68][0] = "Regla del 80-20.";
 choices[68][1] = "Regla del 30-40-30.";
 choices[68][2] = "Regla del 40-20-40.";
 choices[68][3] = "Regla del 20-60-20.";
 answers[68] = 2;
 units[68] = ['31', '94'];
 blocks[68] = ['B1', 'B3'];
 comments[68] = "Id Pregunta: 10026. Examen TIC A2 2014";
 preguntaids[68] = 10026


//  Id pregunta: 10177 Año de creación de pregunta: 2015
 questions[69]= "70)  De la Red SARA (Sistemas de Aplicaciones y Redes para las Administraciones) podemos afirmar que:";
 choices[69]= new Array();
 choices[69][0] = "Permite acceder a la plataforma de validaci&oacute;n de firma electr&oacute;nica @firma.";
 choices[69][1] = "No admite IPv6. Tampoco admite tr&aacute;fico cifrado.";
 choices[69][2] = "Su implantaci&oacute;n se establece como una recomendaci&oacute;n en el art&iacute;culo 155 de la Ley 40/2015";
 choices[69][3] = "A&uacute;n se encuentra en fase beta y no se encuentra afectada por el ENS (Esquema Nacional de Seguridad).";
 answers[69] = 0;
 units[69] = ['47'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 10177. Examen TIC A1 2014";
 preguntaids[69] = 10177


//  Id pregunta: 10147 Año de creación de pregunta: 2015
 questions[70]= "71)  Respecto a los requisitos a cumplir en la digitalizaci&oacute;n de documentos establecidos por la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos es correcto que:";
 choices[70]= new Array();
 choices[70][0] = "El nivel de resoluci&oacute;n m&aacute;ximo para im&aacute;genes electr&oacute;nicas ser&aacute; de 200 p&iacute;xeles por pulgada, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[70][1] = "La imagen electr&oacute;nica se podr&aacute; optimizar para garantizar su legibilidad, de modo que todo contenido del documento origen pueda apreciarse y sea v&aacute;lido para su gesti&oacute;n.";
 choices[70][2] = "La imagen electr&oacute;nica podr&aacute; contener caracteres o gr&aacute;ficos, siempre que sean incorporados por el funcionario responsable del expediente y adecuadamente identificados mediante sello oficial.";
 choices[70][3] = "La digitalizaci&oacute;n de un documento implicar&aacute;, en todos los casos, la asignaci&oacute;n de los metadatos m&iacute;nimos obligatorios definidos en la Norma T&eacute;cnica de Interoperabilidad de Documento Electr&oacute;nico y la firma de la imagen electr&oacute;nica.";
 answers[70] = 1;
 units[70] = ['44'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 10147. Examen TIC A1 2014";
 preguntaids[70] = 10147


//  Id pregunta: 10219 Año de creación de pregunta: 2015
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[71]= new Array();
 choices[71][0] = "Navegable";
 choices[71][1] = "Legible y entendible";
 choices[71][2] = "Predecible";
 choices[71][3] = "Ayuda a la entrada de datos";
 answers[71] = 0;
 units[71] = ['42'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 10219. La pauta 'Navegable' pertenece al principio de Operabilidad";
 preguntaids[71] = 10219


//  Id pregunta: 10290 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[72]= new Array();
 choices[72][0] = "Repetible";
 choices[72][1] = "Verificado";
 choices[72][2] = "Gestionado";
 choices[72][3] = "Optimizado";
 answers[72] = 1;
 units[72] = ['31'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 10290. ";
 preguntaids[72] = 10290


//  Id pregunta: 10254 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Qu&eacute; rol de la metodolog&iacute;a FDD es responsable del dise&ntilde;o global del sistema y de la ejecuci&oacute;n de todas las etapas del dise&ntilde;o?";
 choices[73]= new Array();
 choices[73][0] = "Product Manager";
 choices[73][1] = "Chief architect";
 choices[73][2] = "Chief programmer";
 choices[73][3] = "System administrator";
 answers[73] = 1;
 units[73] = ['34'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 10254. ";
 preguntaids[73] = 10254


//  Id pregunta: 10132 Año de creación de pregunta: 2015
 questions[74]= "75)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[74]= new Array();
 choices[74][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[74][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[74][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[74][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[74] = 0;
 units[74] = ['44'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 10132. Examen TIC A1 2014";
 preguntaids[74] = 10132


