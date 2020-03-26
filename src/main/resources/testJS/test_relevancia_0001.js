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
//  Id pregunta: 3390 Año de creación de pregunta: 2006
 questions[0]= "1)  En el entorno Microsoft.NET:";
 choices[0]= new Array();
 choices[0][0] = "MS SQL Server Compact es una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[0][1] = "MS Web Deploy 3.5 es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[0][2] = "BizTalk Server es un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[0][3] = "Todas son correctas";
 answers[0] = 3;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3390. ";
 preguntaids[0] = 3390


//  Id pregunta: 4218 Año de creación de pregunta: 2006
 questions[1]= "2)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[1]= new Array();
 choices[1][0] = "Plan de proyectos";
 choices[1][1] = "Modelo de informaci&oacute;n";
 choices[1][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[1][3] = "Modelo de arquitectura";
 answers[1] = 3;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4218. ";
 preguntaids[1] = 4218


//  Id pregunta: 7289 Año de creación de pregunta: 2010
 questions[2]= "3)  El documento de seguridad";
 choices[2]= new Array();
 choices[2][0] = "debe mantenerse siempre actualizado";
 choices[2][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[2][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[2][3] = "Todas las respuestas anteriores son correctas";
 answers[2] = 3;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 7289. ";
 preguntaids[2] = 7289


//  Id pregunta: 5936 Año de creación de pregunta: 2007
 questions[3]= "4)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[3]= new Array();
 choices[3][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[3][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[3][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[3][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[3] = 2;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5936. ";
 preguntaids[3] = 5936


//  Id pregunta: 2659 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Para qu&eacute; sirve el objeto BindingCollection de Visual Basic?";
 choices[4]= new Array();
 choices[4][0] = "Es falso que Visual Basic incluya dicho objeto.";
 choices[4][1] = "Es un recolector de memoria que libera la memoria que ha sido usada por objetos que ya no existen.";
 choices[4][2] = "Enlaza clases como or&iacute;genes de datos a controles orientados a datos.";
 choices[4][3] = "Todas las respuestas son falsas.";
 answers[4] = 2;
 units[4] = ['58'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2659. ";
 preguntaids[4] = 2659


//  Id pregunta: 5959 Año de creación de pregunta: 2007
 questions[5]= "6)  Los certificados de clave p&uacute;blica:";
 choices[5]= new Array();
 choices[5][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[5][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[5][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[5][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[5] = 0;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5959. ";
 preguntaids[5] = 5959


//  Id pregunta: 1323 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as agiles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[6]= new Array();
 choices[6][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[6][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[6][2] = "EI software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[6][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[6] = 2;
 units[6] = ['84'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1323. ";
 preguntaids[6] = 1323


//  Id pregunta: 8550 Año de creación de pregunta: 2013
 questions[7]= "8)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[7]= new Array();
 choices[7][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[7][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[7][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[7][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[7] = 3;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 8550. ";
 preguntaids[7] = 8550


//  Id pregunta: 6555 Año de creación de pregunta: 2003
 questions[8]= "9)  En una arquitectura Java EE, &iquest;d&oacute;nde situar&iacute;a un JSP?";
 choices[8]= new Array();
 choices[8][0] = "En el servidor web";
 choices[8][1] = "En el contenedor web";
 choices[8][2] = "En el contenedor de EJBs";
 choices[8][3] = "En el navegador Web";
 answers[8] = 1;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6555. ";
 preguntaids[8] = 6555


//  Id pregunta: 8370 Año de creación de pregunta: 2011
 questions[9]= "10)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[9]= new Array();
 choices[9][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[9][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[9][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[9][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[9] = 0;
 units[9] = ['82'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8370. Analista Ayto. Madrid 2010";
 preguntaids[9] = 8370


//  Id pregunta: 894 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; t&eacute;rmino NO aparece el RFC 3775 'Mobility Support in IPv6'?";
 choices[10]= new Array();
 choices[10][0] = "Correspondent node.";
 choices[10][1] = "L3 handover.";
 choices[10][2] = "Home agent.";
 choices[10][3] = "Care-of registration.";
 answers[10] = 3;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 894. AGE A2 2015";
 preguntaids[10] = 894


//  Id pregunta: 5141 Año de creación de pregunta: 2004
 questions[11]= "12)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[11]= new Array();
 choices[11][0] = "Uso excesivo de CPU";
 choices[11][1] = "Acceso no autorizado a datos";
 choices[11][2] = "a) y b)";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 1;
 units[11] = ['119'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5141. ";
 preguntaids[11] = 5141


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[12]= new Array();
 choices[12][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[12][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[12][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[12][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[12] = 0;
 units[12] = ['26'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 529. Gobernanza TIC";
 preguntaids[12] = 529


//  Id pregunta: 7387 Año de creación de pregunta: 2010
 questions[13]= "14)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[13]= new Array();
 choices[13][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[13][1] = "Tiempo de vida (8 bits)";
 choices[13][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[13][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 7387. Examen TIC B 2009";
 preguntaids[13] = 7387


//  Id pregunta: 1615 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de los siguientes controles es el m&aacute;s cr&iacute;tico sobre las actividades de administraci&oacute;n de bases de datos:";
 choices[14]= new Array();
 choices[14][0] = "Aprobaci&oacute;n de las actividades de Administrador de bases de datos";
 choices[14][1] = "Segregaci&oacute;n de tareas";
 choices[14][2] = "Revisi&oacute;n de logs de acceso y actividades";
 choices[14][3] = "Revisi&oacute;n del uso de las herramientas del Sistema Gestor de Base de Datos (SGBD)";
 answers[14] = 1;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1615. ";
 preguntaids[14] = 1615


//  Id pregunta: 6376 Año de creación de pregunta: 2003
 questions[15]= "16)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque";
 choices[15]= new Array();
 choices[15][0] = "el lenguaje Java se deriva de C++.";
 choices[15][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[15][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[15][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[15] = 1;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6376. Examen 2006 JCYL";
 preguntaids[15] = 6376


//  Id pregunta: 10632 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[16]= new Array();
 choices[16][0] = "Siempre que se mantenga el mismo operador.";
 choices[16][1] = "Sin ning&uacute;n requisito previo.";
 choices[16][2] = "Previa solicitud.";
 choices[16][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[16] = 2;
 units[16] = ['121'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 10632. Articulo 21";
 preguntaids[16] = 10632


//  Id pregunta: 8784 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[17]= new Array();
 choices[17][0] = "1000BASE-SX";
 choices[17][1] = "1000BASE-LX";
 choices[17][2] = "1000BASE-TX";
 choices[17][3] = "1000BASE-CX";
 answers[17] = 1;
 units[17] = ['106'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8784. Examen TIC A2 2011";
 preguntaids[17] = 8784


//  Id pregunta: 6824 Año de creación de pregunta: 2010
 questions[18]= "19)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[18]= new Array();
 choices[18][0] = "UIT-T";
 choices[18][1] = "IETF";
 choices[18][2] = "ISO/IEC";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[18] = 1;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6824. ";
 preguntaids[18] = 6824


//  Id pregunta: 2808 Año de creación de pregunta: 2002
 questions[19]= "20)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[19]= new Array();
 choices[19][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[19][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[19][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[19][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[19] = 3;
 units[19] = ['60'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2808. ";
 preguntaids[19] = 2808


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[20]= new Array();
 choices[20][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[20] = 1;
 units[20] = ['14'];
 blocks[20] = ['A3'];
 comments[20] = "Id Pregunta: 355. Estado del Bienestar";
 preguntaids[20] = 355


//  Id pregunta: 5092 Año de creación de pregunta: 2003
 questions[21]= "22)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[21]= new Array();
 choices[21][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[21][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[21][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[21][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[21] = 2;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5092. ";
 preguntaids[21] = 5092


//  Id pregunta: 7811 Año de creación de pregunta: 2010
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[22]= new Array();
 choices[22][0] = "Interrupci&oacute;n.";
 choices[22][1] = "Interceptaci&oacute;n.";
 choices[22][2] = "Modificaci&oacute;n.";
 choices[22][3] = "Generaci&oacute;n.";
 answers[22] = 1;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7811. ";
 preguntaids[22] = 7811


//  Id pregunta: 1513 Año de creación de pregunta: 2016
 questions[23]= "24)  Si accedemos a un sitio https y recibimos un aviso de que la autoridad de certificaci&oacute;n que ha emitido el certificado de servidor no es reconocida por nosotros, y aun as&iacute; aceptamos establecer comunicaci&oacute;n con ese servidor, &iquest;la comunicaci&oacute;n entre cliente y servidor ser&aacute; cifrada?";
 choices[23]= new Array();
 choices[23][0] = "No, puesto que el certificado no es v&aacute;lido.";
 choices[23][1] = "S&iacute;, puesto que el certificado permite cifrar esa comunicaci&oacute;n, aunque haya sido emitido por una autoridad en la que no confiamos.";
 choices[23][2] = "No, puesto que aunque hayamos aceptado ese certificado no podemos utilizarlo para hacer el cifrado de informaci&oacute;n.";
 choices[23][3] = "S&iacute;, porque al aceptar el cifrado se va a realizar con un certificado de cliente.";
 answers[23] = 1;
 units[23] = ['120'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1513. ";
 preguntaids[23] = 1513


//  Id pregunta: 10336 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l es de las siguientes aplicaciones ofim&aacute;ticas permite crear gr&aacute;ficos y diagramas?";
 choices[24]= new Array();
 choices[24][0] = "Draw";
 choices[24][1] = "Impress";
 choices[24][2] = "Base";
 choices[24][3] = "Picture";
 answers[24] = 0;
 units[24] = ['66'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10336. ";
 preguntaids[24] = 10336


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[25]= "26)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[25]= new Array();
 choices[25][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[25][1] = "Static &amp; Active process for REsolution Bank.";
 choices[25][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[25][3] = "Super Active REsponse for Banks";
 answers[25] = 0;
 units[25] = ['12'];
 blocks[25] = ['A3'];
 comments[25] = "Id Pregunta: 337. Modelo econ&oacute;mico";
 preguntaids[25] = 337


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[26]= "27)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[26]= new Array();
 choices[26][0] = "Carta de servicios electr&oacute;nicos";
 choices[26][1] = "Carta de servicios";
 choices[26][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[26][3] = "Debe disponer de todos los anteriores";
 answers[26] = 3;
 units[26] = ['2'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 8431. ";
 preguntaids[26] = 8431


//  Id pregunta: 6782 Año de creación de pregunta: 2010
 questions[27]= "28)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[27]= new Array();
 choices[27][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[27][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[27][2] = "Todos los datos relativos a una persona";
 choices[27][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[27] = 3;
 units[27] = ['35'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6782. Castilla La Mancha 2009";
 preguntaids[27] = 6782


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[28]= "29)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[28]= new Array();
 choices[28][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[28][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[28][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[28][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[28] = 1;
 units[28] = ['1'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 66. Constituci&oacute;n de 1978";
 preguntaids[28] = 66


//  Id pregunta: 1036 Año de creación de pregunta: 2016
 questions[29]= "30)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[29]= new Array();
 choices[29][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[29][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[29][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[29][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[29] = 1;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1036. Ley 40/2015";
 preguntaids[29] = 1036


//  Id pregunta: 8458 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[30]= new Array();
 choices[30][0] = "Singleton";
 choices[30][1] = "Observer";
 choices[30][2] = "Proxy";
 choices[30][3] = "Prototype";
 answers[30] = 1;
 units[30] = ['89'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 8458. ";
 preguntaids[30] = 8458


//  Id pregunta: 6595 Año de creación de pregunta: 2009
 questions[31]= "32)  Elija la opci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[31][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[31][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[31][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[31] = 2;
 units[31] = ['74'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6595. MAP 2008 A2";
 preguntaids[31] = 6595


//  Id pregunta: 4069 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de 11 aristas y 9 nodos?";
 choices[32]= new Array();
 choices[32][0] = "6";
 choices[32][1] = "12";
 choices[32][2] = "8";
 choices[32][3] = "4";
 answers[32] = 3;
 units[32] = ['93'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4069. ";
 preguntaids[32] = 4069


//  Id pregunta: 7643 Año de creación de pregunta: 2010
 questions[33]= "34)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NO garantiza:";
 choices[33]= new Array();
 choices[33][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadores registrados a nivel nacional.";
 choices[33][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red p&uacute;blica de comunicaciones electr&oacute;nicas desde una ubicaci&oacute;n fija siempre que sus solicitudes se consideren razonables en los t&eacute;rminos que mediante real decreto se determinen y que, incluir&aacute;n, entre otros factores, el coste de su provisi&oacute;n.";
 choices[33][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, que se actualice, como m&iacute;nimo, una vez al a&ntilde;o.";
 choices[33][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[33] = 0;
 units[33] = ['121'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7643. Similar a Map 2006";
 preguntaids[33] = 7643


//  Id pregunta: 8099 Año de creación de pregunta: 2011
 questions[34]= "35)  La regla 2 de Codd es la del:";
 choices[34]= new Array();
 choices[34][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[34][1] = "Acceso garantizado";
 choices[34][2] = "Actualizaci&oacute;n de vistas";
 choices[34][3] = "Integridad referencial";
 answers[34] = 1;
 units[34] = ['60', '61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8099. Analista Ayto. Madrid 2010";
 preguntaids[34] = 8099


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[35]= "36)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[35]= new Array();
 choices[35][0] = "El presidente de las Cortes Generales.";
 choices[35][1] = "El Presidente del Gobierno.";
 choices[35][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[35][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[35] = 3;
 units[35] = ['11'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 318. Presupuestos generales";
 preguntaids[35] = 318


//  Id pregunta: 4076 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;En q&uacute;e proceso de M&eacute;trica V3 se llevaria a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procesamientos de migraci&oacute;n y carga inicial de datos?";
 choices[36]= new Array();
 choices[36][0] = "CSI.";
 choices[36][1] = "DSI";
 choices[36][2] = "IAS.";
 choices[36][3] = "DCS.";
 answers[36] = 0;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 4076. EXAMEN CASTILLA LA MANCHA";
 preguntaids[36] = 4076


//  Id pregunta: 8242 Año de creación de pregunta: 2011
 questions[37]= "38)  El permiso de Unix 500 pemiite:";
 choices[37]= new Array();
 choices[37][0] = "Lectura y escritura para el propietario del archivo";
 choices[37][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[37][2] = "Lectura y escritura para todos los usuarios";
 choices[37][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[37] = 1;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8242. Examen UPM A2 2011";
 preguntaids[37] = 8242


//  Id pregunta: 8708 Año de creación de pregunta: 2013
 questions[38]= "39)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y, adem&aacute;s, puede acceder a las memorias de otros procesadores se conoce como:";
 choices[38]= new Array();
 choices[38][0] = "SMP";
 choices[38][1] = "Grid";
 choices[38][2] = "NUMA";
 choices[38][3] = "Cluster";
 answers[38] = 2;
 units[38] = ['49'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8708. Examen TICA2-2011";
 preguntaids[38] = 8708


//  Id pregunta: 10886 Año de creación de pregunta: 2015
 questions[39]= "40)  Una WAN ATM est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[39]= new Array();
 choices[39][0] = "Punto a punto";
 choices[39][1] = "Broadcast multi-acceso";
 choices[39][2] = "No broadcast multi-acceso";
 choices[39][3] = "Broadcast punto a multipunto";
 answers[39] = 2;
 units[39] = ['107'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10886. ";
 preguntaids[39] = 10886


//  Id pregunta: 4953 Año de creación de pregunta: 2002
 questions[40]= "41)  Una transmisi&oacute;n de datos que consiste en un &uacute;nico paquete de datos se env&iacute;a a un subconjunto espec&iacute;fico de los nodos de una red se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Broadcast";
 choices[40][1] = "Multicast";
 choices[40][2] = "Subnetcast";
 choices[40][3] = "Unicast";
 answers[40] = 1;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4953. ";
 preguntaids[40] = 4953


//  Id pregunta: 5483 Año de creación de pregunta: 2007
 questions[41]= "42)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[41]= new Array();
 choices[41][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[41][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[41][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[41][3] = "Halon en lugar de agua.";
 answers[41] = 0;
 units[41] = ['45'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 5483. ";
 preguntaids[41] = 5483


//  Id pregunta: 9553 Año de creación de pregunta: 2014
 questions[42]= "43)  Las infracciones leves de la Ley Org&aacute;nica 15/1999:";
 choices[42]= new Array();
 choices[42][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[42][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[42][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[42][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[42] = 1;
 units[42] = ['35'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 9553. Art&iacute;culos 45.1 y 47.1 de la Ley Org&aacute;nica 15/1999";
 preguntaids[42] = 9553


//  Id pregunta: 3958 Año de creación de pregunta: 2002
 questions[43]= "44)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[43]= new Array();
 choices[43][0] = "El dominio de la informaci&oacute;n";
 choices[43][1] = "La subdivisi&oacute;n del problema";
 choices[43][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[43][3] = "Los tres anteriores";
 answers[43] = 3;
 units[43] = ['84', '85', '86'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3958. ";
 preguntaids[43] = 3958


//  Id pregunta: 9850 Año de creación de pregunta: 2015
 questions[44]= "45)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[44][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[44][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[44][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[44] = 0;
 units[44] = ['82'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 9850. ";
 preguntaids[44] = 9850


//  Id pregunta: 8322 Año de creación de pregunta: 2011
 questions[45]= "46)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[45]= new Array();
 choices[45][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[45][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[45][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[45][3] = "Todas las anteriores son falsas";
 answers[45] = 0;
 units[45] = ['63'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8322. Examen UPM A2 2011";
 preguntaids[45] = 8322


//  Id pregunta: 2677 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Qu&eacute; es JDBC?:";
 choices[46]= new Array();
 choices[46][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[46][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[46][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[46][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[46] = 1;
 units[46] = ['60', '61', '64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2677. ";
 preguntaids[46] = 2677


//  Id pregunta: 2702 Año de creación de pregunta: 2002
 questions[47]= "48)  Con el comando kill de Unix es posible enviar se&ntilde;ales a otros procesos. &iquest;Qu&eacute; se&ntilde;al no puede capturar ni ignorar un proceso, y provoca la terminaci&oacute;n del mismo?:";
 choices[47]= new Array();
 choices[47][0] = "8";
 choices[47][1] = "2";
 choices[47][2] = "15";
 choices[47][3] = "9";
 answers[47] = 3;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2702. ";
 preguntaids[47] = 2702


//  Id pregunta: 1760 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale c&oacute;mo se denomina el protocolo sucesor de SSL (Secure Sockets Layer), estandarizado por el IETF:";
 choices[48]= new Array();
 choices[48][0] = "TSL";
 choices[48][1] = "TLS";
 choices[48][2] = "IPSEC";
 choices[48][3] = "SECIP";
 answers[48] = 1;
 units[48] = ['120'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1760. ";
 preguntaids[48] = 1760


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[49]= "50)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[49]= new Array();
 choices[49][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[49][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[49][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[49][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[49] = 1;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[49] = 215


//  Id pregunta: 9387 Año de creación de pregunta: 2014
 questions[50]= "51)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[50]= new Array();
 choices[50][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[50][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[50][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[50][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[50] = 0;
 units[50] = ['107'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9387. Examen TIC A2  2013";
 preguntaids[50] = 9387


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[51]= new Array();
 choices[51][0] = "Por Real Decreto.";
 choices[51][1] = "Por Orden del Ministerio del Interior.";
 choices[51][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[51][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[51] = 2;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 60. Constituci&oacute;n de 1978";
 preguntaids[51] = 60


//  Id pregunta: 10348 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[52]= new Array();
 choices[52][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[52][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[52][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[52][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[52] = 0;
 units[52] = ['78'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 10348. ";
 preguntaids[52] = 10348


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[53]= "54)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[53]= new Array();
 choices[53][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[53][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[53][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = 2;
 units[53] = ['2'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 8433. ";
 preguntaids[53] = 8433


//  Id pregunta: 8080 Año de creación de pregunta: 2011
 questions[54]= "55)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[54]= new Array();
 choices[54][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[54][1] = "Varios Usuarios comparten la misma banda";
 choices[54][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[54][3] = "Ninguna de las anteriores.";
 answers[54] = 1;
 units[54] = ['101'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 8080. Analista Ayto. Madrid 2010";
 preguntaids[54] = 8080


//  Id pregunta: 1595 Año de creación de pregunta: 2016
 questions[55]= "56)  El modelo de datos se compone de tres piezas de informaci&oacute;n interrelacionadas: el objeto de datos, los atributos y la relaci&oacute;n que conecta objetos de datos entre s&iacute;. Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al objeto de datos:";
 choices[55]= new Array();
 choices[55][0] = "Solamente encapsula datos, no hay referencia dentro de un objeto de datos a operaciones que act&uacute;an en el dato.";
 choices[55][1] = "Se usa para nombrar una ocurrencia de un atributo.";
 choices[55][2] = "Proporciona una indicaci&oacute;n de c&oacute;mo se transforman los datos a medida que se avanza en el sistema.";
 choices[55][3] = "Nunca puede ser una entidad externa.";
 answers[55] = 0;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1595. ";
 preguntaids[55] = 1595


//  Id pregunta: 9439 Año de creación de pregunta: 2014
 questions[56]= "57)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[56]= new Array();
 choices[56][0] = "Fault Mangement";
 choices[56][1] = "Configuration Management";
 choices[56][2] = "Accounting Management";
 choices[56][3] = "Improvement Management";
 answers[56] = 3;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9439. ";
 preguntaids[56] = 9439


//  Id pregunta: 1221 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta correcta. En una comunicaci&oacute;n HTTPS, &iquest;qu&eacute; tipo de cifrado se utiliza?";
 choices[57]= new Array();
 choices[57][0] = "Sim&eacute;trico exclusivamente.";
 choices[57][1] = "Asim&eacute;trico exclusivamente.";
 choices[57][2] = "No se utiliza ning&uacute;n cifrado.";
 choices[57][3] = "Tanto el sim&eacute;trico como el asim&eacute;trico.";
 answers[57] = 3;
 units[57] = ['120'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1221. ";
 preguntaids[57] = 1221


//  Id pregunta: 5445 Año de creación de pregunta: 2007
 questions[58]= "59)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[58]= new Array();
 choices[58][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[58][1] = "Mediante un trigger.";
 choices[58][2] = "Mediante una constraint de tipo CHECK.";
 choices[58][3] = "No se pueden definir restricciones de ese tipo.";
 answers[58] = 1;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 5445. ";
 preguntaids[58] = 5445


//  Id pregunta: 9218 Año de creación de pregunta: 2014
 questions[59]= "60)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[59]= new Array();
 choices[59][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[59][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[59][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[59][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[59] = 1;
 units[59] = ['46'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 9218. Examen TIC A1 2013";
 preguntaids[59] = 9218


//  Id pregunta: 9433 Año de creación de pregunta: 2014
 questions[60]= "61)  En el encaminamiento por vector-distancia cada router:";
 choices[60]= new Array();
 choices[60][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[60][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[60][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[60][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[60] = 0;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9433. ";
 preguntaids[60] = 9433


//  Id pregunta: 4234 Año de creación de pregunta: 2006
 questions[61]= "62)  Las Pruebas modulares en SW se pueden realizar";
 choices[61]= new Array();
 choices[61][0] = "Top-down, o de arriba abajo";
 choices[61][1] = "Bottom-up, o de abajo a arriba";
 choices[61][2] = "a) y b) son correctas";
 choices[61][3] = "Ninguna de las anteriores definiciones es correcta";
 answers[61] = 3;
 units[61] = ['93'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4234. ";
 preguntaids[61] = 4234


//  Id pregunta: 981 Año de creación de pregunta: 2016
 questions[62]= "63)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n segun la ley 40/2015 a:";
 choices[62]= new Array();
 choices[62][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[62][1] = "el Consejo de Estado";
 choices[62][2] = "el Congreso";
 choices[62][3] = "las Cortes Generales";
 answers[62] = 0;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 981. Ley 40/2015";
 preguntaids[62] = 981


//  Id pregunta: 5327 Año de creación de pregunta: 2006
 questions[63]= "64)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[63]= new Array();
 choices[63][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[63][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[63][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[63][3] = "Barrido ICMP (ICMP Scanning)";
 answers[63] = 2;
 units[63] = ['113'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5327. ";
 preguntaids[63] = 5327


//  Id pregunta: 3187 Año de creación de pregunta: 2003
 questions[64]= "65)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[64]= new Array();
 choices[64][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[64][1] = "Puede incluir un subdirectorio META-INF";
 choices[64][2] = "Puede incluir un fichero MANIFEST.MF";
 choices[64][3] = "Puede incluir clases e im&aacute;genes pero no sonidos";
 answers[64] = 3;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3187. ";
 preguntaids[64] = 3187


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[65]= new Array();
 choices[65][0] = "Cifrado de las comunicaciones";
 choices[65][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[65][2] = "Registro de los accesos";
 choices[65][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[65] = 1;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 561. AGE A1 2015";
 preguntaids[65] = 561


//  Id pregunta: 6964 Año de creación de pregunta: 2010
 questions[66]= "67)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[66]= new Array();
 choices[66][0] = "Diagrama de Componentes";
 choices[66][1] = "Diagrama de Descomposici&oacute;n";
 choices[66][2] = "Diagrama de Despliegue";
 choices[66][3] = "Diagrama de Estructura";
 answers[66] = 2;
 units[66] = ['85'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 6964. TIC-B 2009 bloque desarrollo";
 preguntaids[66] = 6964


//  Id pregunta: 7954 Año de creación de pregunta: 2011
 questions[67]= "68)  Un documento firmado digitalmente incluye la huella digital:";
 choices[67]= new Array();
 choices[67][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[67][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[67][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[67][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[67] = 2;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7954. Examen TIC A2 2010";
 preguntaids[67] = 7954


//  Id pregunta: 1618 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n correcta. Los procedimientos de control de cambios ayudan a mantener la integridad de la informaci&oacute;n del sistema asegurando que:";
 choices[68]= new Array();
 choices[68][0] = "El c&oacute;digo pasado a producci&oacute;n est&aacute; autorizado.";
 choices[68][1] = "El c&oacute;digo de producci&oacute;n est&aacute; libre de errores.";
 choices[68][2] = "Los datos activos son peri&oacute;dicamente auditados.";
 choices[68][3] = "Los datos activos son actualizados peri&oacute;dicamente.";
 answers[68] = 0;
 units[68] = ['96'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 1618. ";
 preguntaids[68] = 1618


//  Id pregunta: 9368 Año de creación de pregunta: 2014
 questions[69]= "70)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "RSVP";
 choices[69][1] = "ARP";
 choices[69][2] = "802.1ar";
 choices[69][3] = "H.264";
 answers[69] = 0;
 units[69] = ['107'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9368. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[69] = 9368


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[70]= "71)  La soberan&iacute;a nacional reside en:";
 choices[70]= new Array();
 choices[70][0] = "el Parlamento nacional.";
 choices[70][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[70][2] = "el pueblo espa&ntilde;ol.";
 choices[70][3] = "el Congreso y el Senado.";
 answers[70] = 2;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[70] = 82


//  Id pregunta: 7233 Año de creación de pregunta: 2010
 questions[71]= "72)  &iquest;Cu&aacute;les son los objetivos de la gesti&oacute;n de Servicios TI?";
 choices[71]= new Array();
 choices[71][0] = "Alinear las necesidades de las tecnolog&iacute;as de la informaci&oacute;n a las del negocio, y los clientes, tanto actuales como futuras";
 choices[71][1] = "Mejorar la calidad de los servicios de las tecnolog&iacute;as de la informaci&oacute;n";
 choices[71][2] = "Reducci&oacute;n del coste de los servicios de las tecnolog&iacute;as de la informaci&oacute;n prestados, a largo plazo";
 choices[71][3] = "Todas las respuestas anteriores son correctas";
 answers[71] = 3;
 units[71] = ['101'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 7233. ";
 preguntaids[71] = 7233


//  Id pregunta: 8339 Año de creación de pregunta: 2011
 questions[72]= "73)  En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[72]= new Array();
 choices[72][0] = "Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[72][1] = "Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[72][2] = "Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[72][3] = "Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[72] = 1;
 units[72] = ['62'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8339. Examen UC3M 2010";
 preguntaids[72] = 8339


//  Id pregunta: 5722 Año de creación de pregunta: 2007
 questions[73]= "74)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[73]= new Array();
 choices[73][0] = "2";
 choices[73][1] = "3";
 choices[73][2] = "4";
 choices[73][3] = "tantos como SGBD's";
 answers[73] = 2;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 5722. ";
 preguntaids[73] = 5722


//  Id pregunta: 5338 Año de creación de pregunta: 2006
 questions[74]= "75)  M&eacute;todo seguro de autorizaci&oacute;n de acceso a un servicio en una red desarrollado en el proyecto Athena del MIT";
 choices[74]= new Array();
 choices[74][0] = "Carnivore";
 choices[74][1] = "Internet Key Exchange (IKE)";
 choices[74][2] = "Kerberos";
 choices[74][3] = "SSL";
 answers[74] = 2;
 units[74] = ['120'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5338. ";
 preguntaids[74] = 5338


