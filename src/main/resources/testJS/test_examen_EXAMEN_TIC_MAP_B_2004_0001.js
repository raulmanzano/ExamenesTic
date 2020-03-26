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
//  Id pregunta: 4327 Año de creación de pregunta: 2004
 questions[0]= "1)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[0]= new Array();
 choices[0][0] = "10.2.40.64";
 choices[0][1] = "10.2.41.45";
 choices[0][2] = "10.2.40.63";
 choices[0][3] = "10.2.40.1";
 answers[0] = 3;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4327. Examen TIC MAP B 2004";
 preguntaids[0] = 4327


//  Id pregunta: 4321 Año de creación de pregunta: 2004
 questions[1]= "2)  &iquest;Qu&eacute; organismo trabaj&oacute; en la estandarizaci&oacute;n de las redes de cable?";
 choices[1]= new Array();
 choices[1][0] = "El IEEE 802.11";
 choices[1][1] = "El IEEE 802.14";
 choices[1][2] = "El ATU-C";
 choices[1][3] = "El UIT-T E.164";
 answers[1] = 1;
 units[1] = ['115'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4321. Examen TIC MAP B 2004";
 preguntaids[1] = 4321


//  Id pregunta: 4320 Año de creación de pregunta: 2004
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "DNS: Sistema de nombres de dominio";
 choices[2][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[2][2] = "FTP: Protocolo de transferencia de archivos";
 choices[2][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[2] = 3;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4320. Examen TIC MAP B 2004";
 preguntaids[2] = 4320


//  Id pregunta: 4319 Año de creación de pregunta: 2004
 questions[3]= "4)  Los Bridges:";
 choices[3]= new Array();
 choices[3][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[3][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[3][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[3][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[3] = 3;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4319. Examen TIC MAP B 2004";
 preguntaids[3] = 4319


//  Id pregunta: 3559 Año de creación de pregunta: 2004
 questions[4]= "5)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[4]= new Array();
 choices[4][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[4][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[4][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[4][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[4] = 0;
 units[4] = ['85', '89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3559. TIC MAP B 2004";
 preguntaids[4] = 3559


//  Id pregunta: 2499 Año de creación de pregunta: 2004
 questions[5]= "6)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[5]= new Array();
 choices[5][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[5][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[5][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[5][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[5] = 1;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2499. Examen TIC MAP B 2004";
 preguntaids[5] = 2499


//  Id pregunta: 2511 Año de creación de pregunta: 2004
 questions[6]= "7)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[6]= new Array();
 choices[6][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[6][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[6][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[6][3] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[6] = 2;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2511. Examen TIC MAP B 2004";
 preguntaids[6] = 2511


//  Id pregunta: 2142 Año de creación de pregunta: 2004
 questions[7]= "8)  La seguridad f&iacute;sica de los sitemas de informaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Debido a la segregaci&oacute;n de tareas, es labor exclusiva de los guardias de seguridad";
 choices[7][1] = "Debe alcanzar tambi&eacute;n a los equipos que est&eacute;n fuera de los locales de la Organizaci&oacute;n (equipos en teletrabajo, port&aacute;tiles, PDAs, etc.)";
 choices[7][2] = "Es una preocupaci&oacute;n que se evita al externalizar las funciones de explotaci&oacute;n del sistema de informaci&oacute;n";
 choices[7][3] = "Es notablemente superior en aquellas Organizaciones que disponen de s&oacute;tanos bunkerizados";
 answers[7] = 1;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2142. Examen TIC MAP B 2004";
 preguntaids[7] = 2142


//  Id pregunta: 2135 Año de creación de pregunta: 2004
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[8]= new Array();
 choices[8][0] = "Alto grado de modularidad";
 choices[8][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[8][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[8][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[8] = 2;
 units[8] = ['24'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2135. Examen TIC MAP B 2004";
 preguntaids[8] = 2135


//  Id pregunta: 2510 Año de creación de pregunta: 2004
 questions[9]= "10)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[9]= new Array();
 choices[9][0] = "Perceptron";
 choices[9][1] = "Adaline";
 choices[9][2] = "Art";
 choices[9][3] = "Madaline";
 answers[9] = 2;
 units[9] = ['68'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2510. Examen TIC MAP B 2004";
 preguntaids[9] = 2510


//  Id pregunta: 2136 Año de creación de pregunta: 2004
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[10]= new Array();
 choices[10][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[10][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[10][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[10][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[10] = 2;
 units[10] = ['33'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2136. Examen TIC MAP B 2004";
 preguntaids[10] = 2136


//  Id pregunta: 2526 Año de creación de pregunta: 2004
 questions[11]= "12)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[11]= new Array();
 choices[11][0] = "Secuencia de registros de longitud fija";
 choices[11][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[11][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[11][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[11] = 1;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2526. Examen TIC MAP B 2004";
 preguntaids[11] = 2526


//  Id pregunta: 2509 Año de creación de pregunta: 2004
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[12]= new Array();
 choices[12][0] = "RAID 1";
 choices[12][1] = "RAID 0";
 choices[12][2] = "RAID 2";
 choices[12][3] = "RAID 5";
 answers[12] = 0;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2509. Examen TIC MAP B 2004";
 preguntaids[12] = 2509


//  Id pregunta: 3553 Año de creación de pregunta: 2004
 questions[13]= "14)  Con objeto de optimizar el modelo f&iacute;sico de datos y satisfacer los requisitos de rendimiento establecidos, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas no deber&iacute;a utilizarse?";
 choices[13]= new Array();
 choices[13][0] = "Dividir entidades.";
 choices[13][1] = "Evitar el uso de encriptaci&oacute;n de datos.";
 choices[13][2] = "Combinar entidades si los accesos son frecuentes dentro de la misma transacci&oacute;n.";
 choices[13][3] = "Definir &iacute;ndices para permitir caminos de acceso alternativos.";
 answers[13] = 1;
 units[13] = ['89'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3553. TIC MAP B 2004";
 preguntaids[13] = 3553


//  Id pregunta: 2507 Año de creación de pregunta: 2004
 questions[14]= "15)  En una base de datos las vistas";
 choices[14]= new Array();
 choices[14][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[14][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[14][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[14][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[14] = 1;
 units[14] = ['60'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2507. Examen TIC MAP B 2004";
 preguntaids[14] = 2507


//  Id pregunta: 2497 Año de creación de pregunta: 2004
 questions[15]= "16)  En relaci&oacute;n a la definici&oacute;n y caracter&iacute;sticas de una base de datos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[15]= new Array();
 choices[15][0] = "En una base de datos se admite la redundancia controlada";
 choices[15][1] = "En una base de datos no debe darse la redundancia l&oacute;gica";
 choices[15][2] = "En una base de datos puede existir la redundancia f&iacute;sica";
 choices[15][3] = "En una base de datos puede admitirse la redundancia l&oacute;gica pero no f&iacute;sica";
 answers[15] = 3;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2497. Examen TIC MAP B 2004";
 preguntaids[15] = 2497


//  Id pregunta: 2502 Año de creación de pregunta: 2004
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes denominaciones no se corresponde con ninguno de los tipos de Shell est&aacute;ndar en los sistemas operativos UNIX?";
 choices[16]= new Array();
 choices[16][0] = "Bourne Shell";
 choices[16][1] = "C Shell";
 choices[16][2] = "Xenix Shell";
 choices[16][3] = "Korn Shell";
 answers[16] = 2;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2502. Examen TIC MAP B 2004";
 preguntaids[16] = 2502


//  Id pregunta: 3548 Año de creación de pregunta: 2004
 questions[17]= "18)  Si la fecha l&iacute;mite para la entrega de un sistema de informaci&oacute;n est&aacute; tan cerca que no va a ser posible con los recursos asignados, entregar un sistema que satisfaga todos los requisitos, la estrategia (modelo) a seguir deber&iacute;a ser:";
 choices[17]= new Array();
 choices[17][0] = "El modelo de prototipaci&oacute;n";
 choices[17][1] = "El modelo en cascada";
 choices[17][2] = "El modelo incremental";
 choices[17][3] = "El modelo de espiral WINWIN";
 answers[17] = 2;
 units[17] = ['82'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3548. TIC MAP B 2004";
 preguntaids[17] = 3548


//  Id pregunta: 2373 Año de creación de pregunta: 2004
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una tarea t&iacute;pica de la auditor&iacute;a inform&aacute;tica?";
 choices[18]= new Array();
 choices[18][0] = "Reorganizaci&oacute;n de los recursos humanos del Departamento de Sistemas de Informaci&oacute;n";
 choices[18][1] = "Revisi&oacute;n de aplicaciones";
 choices[18][2] = "Revisi&oacute;n de instalaciones inform&aacute;ticas";
 choices[18][3] = "Revisi&oacute;n de sistemas bajo desarrollo";
 answers[18] = 0;
 units[18] = ['36'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2373. MAP-B 2004";
 preguntaids[18] = 2373


//  Id pregunta: 2496 Año de creación de pregunta: 2004
 questions[19]= "20)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[19]= new Array();
 choices[19][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[19][1] = "Lo que en otros entornos de programaci&oacute;n se llama depurador o debugger";
 choices[19][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[19][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[19] = 0;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2496. Examen TIC MAP B 2004";
 preguntaids[19] = 2496


//  Id pregunta: 4360 Año de creación de pregunta: 2004
 questions[20]= "21)  Indique la afirmaci&oacute;n falsa. De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el servicio universal debe garantizar:";
 choices[20]= new Array();
 choices[20][0] = "La puesta a disposici&oacute;n de los abonados de una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y que se actualice, como m&iacute;nimo, una vez al a&ntilde;o";
 choices[20][1] = "La obtenci&oacute;n por todos los usuarios finales de una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija as&iacute; como el acceso a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico debiendo incluir entre otros el acceso funcional a internet.";
 choices[20][2] = "La existencia de una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago";
 choices[20][3] = "La obtenci&oacute;n por todos los usuarios finales de telefon&iacute;a m&oacute;vil en condiciones de igualdad y no discriminaci&oacute;n, con una calidad determinada que ser&aacute; fijada reglamentariamente y a un precio asequible.";
 answers[20] = 3;
 units[20] = ['121'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4360. Examen TIC MAP B 2004";
 preguntaids[20] = 4360


//  Id pregunta: 2498 Año de creación de pregunta: 2004
 questions[21]= "22)  Entre los distintos niveles de abstracci&oacute;n de una base de datos &iquest;con cu&aacute;l de los siguientes conceptos se identifica el &quot;usuario final&quot;?";
 choices[21]= new Array();
 choices[21][0] = "Esquema externo";
 choices[21][1] = "Esquema conceptual";
 choices[21][2] = "Esquema interno";
 choices[21][3] = "Esquema global";
 answers[21] = 0;
 units[21] = ['60'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2498. Examen TIC MAP B 2004";
 preguntaids[21] = 2498


//  Id pregunta: 2141 Año de creación de pregunta: 2004
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[22][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[22][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[22][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[22] = 2;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2141. Examen TIC MAP B 2004";
 preguntaids[22] = 2141


//  Id pregunta: 2500 Año de creación de pregunta: 2004
 questions[23]= "24)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[23]= new Array();
 choices[23][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[23][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[23][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[23][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[23] = 1;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2500. Examen TIC MAP B 2004";
 preguntaids[23] = 2500


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[24]= "25)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[24]= new Array();
 choices[24][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[24][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[24][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[24][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[24] = 3;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[24] = 2514


//  Id pregunta: 2503 Año de creación de pregunta: 2004
 questions[25]= "26)  En la evoluci&oacute;n del Sistema Operativo Unix, a partir de los a&ntilde;os 70, surgieron diferentes variantes. &iquest;Cu&aacute;l de los siguientes sistemas no se corresponde con una de esas variantes?";
 choices[25]= new Array();
 choices[25][0] = "BSD";
 choices[25][1] = "MULTICS";
 choices[25][2] = "XENIX";
 choices[25][3] = "Sun OS";
 answers[25] = 1;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2503. Examen TIC MAP B 2004";
 preguntaids[25] = 2503


//  Id pregunta: 2504 Año de creación de pregunta: 2004
 questions[26]= "27)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[26]= new Array();
 choices[26][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[26][1] = "De clase y de objeto";
 choices[26][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[26][3] = "De flujo de control y de flujo de datos";
 answers[26] = 0;
 units[26] = ['60'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2504. Examen TIC MAP B 2004";
 preguntaids[26] = 2504


//  Id pregunta: 3555 Año de creación de pregunta: 2004
 questions[27]= "28)  En relaci&oacute;n con la &quot;reingenier&iacute;a de sistemas&quot; indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[27]= new Array();
 choices[27][0] = "La reingenier&iacute;a es la mejora de los sistemas existentes de modo que la inversi&oacute;n resulte muy rentable, independientemente de que dicha mejora pueda ser obtenida con un nuevo desarrollo.";
 choices[27][1] = "La reingenier&iacute;a debe tener bajo coste, hacerse en poco tiempo, tener poco riesgo y dar un valor a&ntilde;adido.";
 choices[27][2] = "La reingener&iacute;a trabaja todos los niveles de abstracci&oacute;n, desde la implementaci&oacute;n hasta el dise&ntilde;o.";
 choices[27][3] = "La reingenier&iacute;a que s&oacute;lo requiere el conocimiento de los interfaces de sistema se llama ingenier&iacute;a inversa o modernizaci&oacute;n de caja blanca.";
 answers[27] = 3;
 units[27] = ['97'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3555. TIC MAP B 2004";
 preguntaids[27] = 3555


//  Id pregunta: 3556 Año de creación de pregunta: 2004
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[28]= new Array();
 choices[28][0] = "Un objeto es parte de la herencia de una clase";
 choices[28][1] = "Un objeto es una instancia de una clase";
 choices[28][2] = "Un objeto es una instancia de una metaclase";
 choices[28][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[28] = 1;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3556. TIC MAP B 2004";
 preguntaids[28] = 3556


//  Id pregunta: 2506 Año de creación de pregunta: 2004
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes conceptos se clasifica dentro de la tipolog&iacute;a de &quot;Estructuras de datos no lineales&quot;?";
 choices[29]= new Array();
 choices[29][0] = "Pilas";
 choices[29][1] = "Listas";
 choices[29][2] = "Colas";
 choices[29][3] = "&Aacute;rboles";
 answers[29] = 3;
 units[29] = ['60'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2506. Examen TIC MAP B 2004";
 preguntaids[29] = 2506


//  Id pregunta: 4328 Año de creación de pregunta: 2,000.00
 questions[30]= "31)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred";
 choices[30]= new Array();
 choices[30][0] = "00001010.00000001.10000001.10000000";
 choices[30][1] = "00001010.00000001.10000001.00000000";
 choices[30][2] = "00001010.00000001.00000000.00000001";
 choices[30][3] = "00001010.00000001.10000001.11000000";
 answers[30] = 0;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4328. Examen TIC MAP B 2004";
 preguntaids[30] = 4328


//  Id pregunta: 3554 Año de creación de pregunta: 2004
 questions[31]= "32)  En el dise&ntilde;o estructurado, se&ntilde;ale la definici&oacute;n correcta de FAN-OUT.";
 choices[31]= new Array();
 choices[31][0] = "Es el n&uacute;mero de superordinados inmediatos de un m&oacute;dulo.";
 choices[31][1] = "Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[31][2] = "Es el n&uacute;mero de m&oacute;dulos que hay que compilar antes del m&oacute;dulo.";
 choices[31][3] = "Es el n&uacute;mero de par&aacute;metros de salida que tiene un m&oacute;dulo.";
 answers[31] = 1;
 units[31] = ['89'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3554. TIC MAP B 2004";
 preguntaids[31] = 3554


//  Id pregunta: 3561 Año de creación de pregunta: 2004
 questions[32]= "33)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[32]= new Array();
 choices[32][0] = "Graphical Interchange Format (GIF)";
 choices[32][1] = "Windows Metafile Format (WMF)";
 choices[32][2] = "Portable Network Graphics (PNG)";
 choices[32][3] = "Windows Bitmap (BMP)";
 answers[32] = 1;
 units[32] = ['80'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3561. TIC MAP B 2004";
 preguntaids[32] = 3561


//  Id pregunta: 2501 Año de creación de pregunta: 2004
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[33]= new Array();
 choices[33][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[33][1] = "Utiliza modelos de datos multidimensionales.";
 choices[33][2] = "Proporciona la velocidad y flexibilidad necesarias en tiempo real.";
 choices[33][3] = "Est&aacute; basado en modelos de datos jer&aacute;rquicos.";
 answers[33] = 3;
 units[33] = ['72'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2501. Examen TIC MAP B 2004";
 preguntaids[33] = 2501


//  Id pregunta: 3557 Año de creación de pregunta: 2004
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;nmente reconocida en los lenguajes de programaci&oacute;n orientados a objetos (LPOO)?";
 choices[34]= new Array();
 choices[34][0] = "La base de objetos y clases.";
 choices[34][1] = "La sustanciaci&oacute;n de objetos.";
 choices[34][2] = "Las relaciones de agregaci&oacute;n y herencia.";
 choices[34][3] = "El ligamiento din&aacute;mico y el polimorfismo.";
 answers[34] = 1;
 units[34] = ['89'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3557. TIC MAP B 2004";
 preguntaids[34] = 3557


//  Id pregunta: 2139 Año de creación de pregunta: 2004
 questions[35]= "36)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[35]= new Array();
 choices[35][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[35][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[35][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[35][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[35] = 2;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2139. Examen TIC MAP B 2004";
 preguntaids[35] = 2139


//  Id pregunta: 3560 Año de creación de pregunta: 2004
 questions[36]= "37)  Son lenguajes que al menos en sus &uacute;ltimos est&aacute;ndares soportan la programaci&oacute;n orientada a objetos:";
 choices[36]= new Array();
 choices[36][0] = "C++, COBOL, FORTRAN, Ada.";
 choices[36][1] = "Java, Lisp, Algol, Eiffel.";
 choices[36][2] = "C++, Java, Eiffel, Smalltalk.";
 choices[36][3] = "C++, Smalltalk, Eiffel, REXX.";
 answers[36] = 2;
 units[36] = ['85', '89'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3560. TIC MAP B 2004";
 preguntaids[36] = 3560


//  Id pregunta: 3552 Año de creación de pregunta: 2004
 questions[37]= "38)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Definici&oacute;n de &iacute;ndices";
 choices[37][1] = "Generalizaci&oacute;n";
 choices[37][2] = "Entidades deductivas";
 choices[37][3] = "Entidades hist&oacute;ricas";
 answers[37] = 1;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3552. TIC MAP B 2004";
 preguntaids[37] = 3552


//  Id pregunta: 3549 Año de creación de pregunta: 2004
 questions[38]= "39)  El denominado &quot;modelo de desarrollo concurrente&quot; del ciclo de vida";
 choices[38]= new Array();
 choices[38][0] = "Es una variante del Modelo en Espiral Cl&aacute;sico";
 choices[38][1] = "Es una variante del Modelo Lienal o en Cascada";
 choices[38][2] = "S&oacute;lo es apropiado para aplicaciones de Miner&iacute;a de Datos u OLAP";
 choices[38][3] = "Est&aacute; espec&iacute;ficamente concebido para sistemas multiprocesador";
 answers[38] = 0;
 units[38] = ['82'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3549. TIC MAP B 2004";
 preguntaids[38] = 3549


//  Id pregunta: 2140 Año de creación de pregunta: 2004
 questions[39]= "40)  El t&eacute;rmino COBIT es un acr&oacute;nimo angl&oacute;fono que procede de los siguientes t&eacute;rminos, o significa lo siguiente en el idioma ingl&eacute;s:";
 choices[39]= new Array();
 choices[39][0] = "Computer Building Information Technology";
 choices[39][1] = "Computational Binary Translation";
 choices[39][2] = "Control Objetives for Information and Related Technology";
 choices[39][3] = "Committee of Business Information Technique";
 answers[39] = 2;
 units[39] = ['24'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2140. Examen TIC MAP B 2004";
 preguntaids[39] = 2140


//  Id pregunta: 3551 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos es falsa?";
 choices[40]= new Array();
 choices[40][0] = "Un proceso puede ser tanto origen como final de unos datos";
 choices[40][1] = "Una entidad externa puede aparecer varias veces en un mismo diagrama";
 choices[40][2] = "Los flujos de datos dirigidos a almacenes de datos pueden ser de consulta, de actualizaci&oacute;n y de di&aacute;logo";
 choices[40][3] = "Un almac&eacute;n de datos no puede crear, transformar ni modificar datos";
 answers[40] = 0;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 3551. TIC MAP B 2004";
 preguntaids[40] = 3551


//  Id pregunta: 2143 Año de creación de pregunta: 2004
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[41][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[41][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[41][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[41] = 3;
 units[41] = ['45'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2143. Examen TIC MAP B 2004";
 preguntaids[41] = 2143


//  Id pregunta: 2527 Año de creación de pregunta: 2004
 questions[42]= "43)  El lenguaje Java Script:";
 choices[42]= new Array();
 choices[42][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[42][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[42][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[42][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[42] = 1;
 units[42] = ['66'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2527. Examen TIC MAP B 2004";
 preguntaids[42] = 2527


//  Id pregunta: 2505 Año de creación de pregunta: 2004
 questions[43]= "44)  En el estudio te&oacute;rico de las Estructuras de Datos, el conocido como &quot;m&eacute;todo de la baraja&quot; responde a un algoritmo de:";
 choices[43]= new Array();
 choices[43][0] = "B&uacute;squeda";
 choices[43][1] = "Ordenaci&oacute;n";
 choices[43][2] = "Iteraci&oacute;n";
 choices[43][3] = "Recursi&oacute;n";
 answers[43] = 1;
 units[43] = ['60'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2505. Examen TIC MAP B 2004";
 preguntaids[43] = 2505


//  Id pregunta: 4326 Año de creación de pregunta: 2004
 questions[44]= "45)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "ACK";
 choices[44][1] = "PSH";
 choices[44][2] = "RST";
 choices[44][3] = "PUT";
 answers[44] = 1;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4326. Examen TIC MAP B 2004";
 preguntaids[44] = 4326


//  Id pregunta: 2137 Año de creación de pregunta: 2004
 questions[45]= "46)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[45]= new Array();
 choices[45][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[45][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[45][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[45][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[45] = 1;
 units[45] = ['33'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2137. Examen TIC MAP B 2004";
 preguntaids[45] = 2137


//  Id pregunta: 2512 Año de creación de pregunta: 2004
 questions[46]= "47)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[46]= new Array();
 choices[46][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[46][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[46][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[46][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[46] = 3;
 units[46] = ['60'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2512. Examen TIC MAP B 2004";
 preguntaids[46] = 2512


//  Id pregunta: 2515 Año de creación de pregunta: 2004
 questions[47]= "48)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[47]= new Array();
 choices[47][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[47][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[47][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[47][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[47] = 0;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 2515. Examen TIC MAP B 2004";
 preguntaids[47] = 2515


//  Id pregunta: 2508 Año de creación de pregunta: 2004
 questions[48]= "49)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[48]= new Array();
 choices[48][0] = "DXL (Document eXtended Language)";
 choices[48][1] = "DTD (Document Type Definition)";
 choices[48][2] = "DOM (Document Object Model)";
 choices[48][3] = "DML (Document Markup Language)";
 answers[48] = 1;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2508. Examen TIC MAP B 2004";
 preguntaids[48] = 2508


//  Id pregunta: 3558 Año de creación de pregunta: 2004
 questions[49]= "50)  De acuerdo con el modelo Staffing Size, en un desarrollo orientado a objetos:";
 choices[49]= new Array();
 choices[49][0] = "El porcentaje de clases clave oscila entre el 20% y el 40%; el resto suelen ser clases secundarias.";
 choices[49][1] = "El porcentaje de clases clave nunca debe superar el 5% del total de clases.";
 choices[49][2] = "El porcentaje de clases clave debe ser superior al 75% para garantizar la robustez del proyecto.";
 choices[49][3] = "No deben existir clases secundarias.";
 answers[49] = 0;
 units[49] = ['85', '89'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3558. TIC MAP B 2004";
 preguntaids[49] = 3558


//  Id pregunta: 2516 Año de creación de pregunta: 2004
 questions[50]= "51)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[50]= new Array();
 choices[50][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[50][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[50][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[50][3] = "La FNMT";
 answers[50] = 3;
 units[50] = ['30'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2516. Examen TIC MAP B 2004";
 preguntaids[50] = 2516


//  Id pregunta: 3550 Año de creación de pregunta: 2004
 questions[51]= "52)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[51]= new Array();
 choices[51][0] = "Realizar las entrevistas al usuario";
 choices[51][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[51][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[51][3] = "Dirigir a los programadores";
 answers[51] = 1;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3550. TIC MAP B 2004";
 preguntaids[51] = 3550


//  Id pregunta: 2513 Año de creación de pregunta: 2004
 questions[52]= "53)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[52]= new Array();
 choices[52][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[52][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[52][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[52][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 2513. Examen TIC MAP B 2004";
 preguntaids[52] = 2513


