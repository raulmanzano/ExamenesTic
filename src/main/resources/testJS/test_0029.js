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
//  Id pregunta: 7372 Año de creación de pregunta: 2010
 questions[0]= "1)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[0]= new Array();
 choices[0][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[0][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[0][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[0][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[0] = 2;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7372. Examen TIC B 2009";
 preguntaids[0] = 7372


//  Id pregunta: 2627 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[1]= new Array();
 choices[1][0] = "MIME";
 choices[1][1] = "LDAP";
 choices[1][2] = "SMNP";
 choices[1][3] = "BGP";
 answers[1] = 1;
 units[1] = ['77'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2627. ";
 preguntaids[1] = 2627


//  Id pregunta: 9075 Año de creación de pregunta: 2014
 questions[2]= "3)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[2]= new Array();
 choices[2][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[2][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[2][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[2][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[2] = 2;
 units[2] = ['71'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9075. ";
 preguntaids[2] = 9075


//  Id pregunta: 1588 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale c&oacute;mo se denomina, en el modelo entidad/relaci&oacute;n extendido, la relaci&oacute;n por la que un supertipo se descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo, adem&aacute;s de tener los suyos propios:";
 choices[3]= new Array();
 choices[3][0] = "Generalizaci&oacute;n.";
 choices[3][1] = "Asociaci&oacute;n.";
 choices[3][2] = "Especializaci&oacute;n.";
 choices[3][3] = "Agregaci&oacute;n";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1588. ";
 preguntaids[3] = 1588


//  Id pregunta: 5842 Año de creación de pregunta: 2007
 questions[4]= "5)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[4][1] = "Al valorar los recursos que se han consumido.";
 choices[4][2] = "Para ver la forma de materializar un desarrollo.";
 choices[4][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[4] = 3;
 units[4] = ['33'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 5842. Examen 2006 JCYL";
 preguntaids[4] = 5842


//  Id pregunta: 7219 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[5]= new Array();
 choices[5][0] = "Permisos";
 choices[5][1] = "Propietario";
 choices[5][2] = "Grupo";
 choices[5][3] = "Nombre del fichero";
 answers[5] = 3;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7219. ";
 preguntaids[5] = 7219


//  Id pregunta: 3440 Año de creación de pregunta: 2006
 questions[6]= "7)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[6]= new Array();
 choices[6][0] = "Tablas de dimensiones.";
 choices[6][1] = "Tablas maestras.";
 choices[6][2] = "Tablas de hechos.";
 choices[6][3] = "Tablas externas.";
 answers[6] = 2;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3440. ";
 preguntaids[6] = 3440


//  Id pregunta: 4446 Año de creación de pregunta: 2002
 questions[7]= "8)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[7]= new Array();
 choices[7][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[7][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[7][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[7][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[7] = 1;
 units[7] = ['24'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 4446. ";
 preguntaids[7] = 4446


//  Id pregunta: 1955 Año de creación de pregunta: 2016
 questions[8]= "9)  Cu&aacute;l de estas afirmaciones sobre orientaci&oacute;n a objetos es FALSA:";
 choices[8]= new Array();
 choices[8][0] = "Una nueva clase toma sus m&eacute;todos y datos de su objeto padre.";
 choices[8][1] = "Una de sus caracter&iacute;sticas es la reusabilidad de software.";
 choices[8][2] = "Un objeto es la instancia de una clase.";
 choices[8][3] = "Las clases se pueden organizar en una jerarqu&iacute;a de herencias.";
 answers[8] = 0;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 1955. ";
 preguntaids[8] = 1955


//  Id pregunta: 5498 Año de creación de pregunta: 2007
 questions[9]= "10)  La topolog&iacute;a de una LAN puede ser:";
 choices[9]= new Array();
 choices[9][0] = "BUS, Anillo, Estrella y Mixta.";
 choices[9][1] = "&Aacute;rbol, Anillo y Estrella";
 choices[9][2] = "BUS, Anillo, Estrella, Completa, &Aacute;rbol o Mixta.";
 choices[9][3] = "BUS, Anillo, Estrella, &Aacute;rbol y Mixta.";
 answers[9] = 2;
 units[9] = ['104'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5498. ";
 preguntaids[9] = 5498


//  Id pregunta: 7016 Año de creación de pregunta: 2010
 questions[10]= "11)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastre se les denomina:";
 choices[10]= new Array();
 choices[10][0] = "SDO";
 choices[10][1] = "RPO";
 choices[10][2] = "RTO";
 choices[10][3] = "MTBF";
 answers[10] = 1;
 units[10] = ['87'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 7016. ";
 preguntaids[10] = 7016


//  Id pregunta: 3477 Año de creación de pregunta: 2006
 questions[11]= "12)  Se&ntilde;ale la falsa:";
 choices[11]= new Array();
 choices[11][0] = "La Ley General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[11][1] = "La ley de Firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[11][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[11][3] = "Son ciertas las tres anteriores";
 answers[11] = 3;
 units[11] = ['19'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 3477. ";
 preguntaids[11] = 3477


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[12]= "13)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[12]= new Array();
 choices[12][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[12][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[12][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[12][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[12] = 2;
 units[12] = ['43'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 583. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[12] = 583


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[13]= "14)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[13]= new Array();
 choices[13][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[13][1] = "Programa de cartas de servicios";
 choices[13][2] = "Programa para la mejora continua de las organizaciones.";
 choices[13][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[13] = 2;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 454. Direcci&oacute;n p&uacute;blica";
 preguntaids[13] = 454


//  Id pregunta: 984 Año de creación de pregunta: 2016
 questions[14]= "15)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[14]= new Array();
 choices[14][0] = "los Subsecretarios y los Secretarios generales";
 choices[14][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[14][2] = "los Secretarios de Estado y los Directores generales";
 choices[14][3] = "los Ministros y los Secretarios de Estado";
 answers[14] = 3;
 units[14] = ['4', '7', '8', '9'];
 blocks[14] = ['A1', 'A2'];
 comments[14] = "Id Pregunta: 984. Ley 40/2015";
 preguntaids[14] = 984


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[15][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[15][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[15][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[15] = 0;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 444. Agenda Digital";
 preguntaids[15] = 444


//  Id pregunta: 4303 Año de creación de pregunta: 2004
 questions[16]= "17)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[16]= new Array();
 choices[16][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[16][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[16][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[16][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[16] = 1;
 units[16] = ['55'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 4303. Similar a examen TIC SS A 2003";
 preguntaids[16] = 4303


//  Id pregunta: 7620 Año de creación de pregunta: 2010
 questions[17]= "18)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neas de c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes 4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en el c&oacute;digo C el ratio es 128 LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[17]= new Array();
 choices[17][0] = "148";
 choices[17][1] = "250";
 choices[17][2] = "460";
 choices[17][3] = "210";
 answers[17] = 2;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7620. Map 2006";
 preguntaids[17] = 7620


//  Id pregunta: 4405 Año de creación de pregunta: 2002
 questions[18]= "19)  Bluetooth:";
 choices[18]= new Array();
 choices[18][0] = "Es una tecnolog&iacute;a de enlace radio para redes LAN de peque&ntilde;o alcance";
 choices[18][1] = "Es una tecnolog&iacute;a de enlace de radio para redes PAN";
 choices[18][2] = "Es el resultado de la aplicaci&oacute;n de las &uacute;ltimas t&eacute;cnicas inform&aacute;ticas al mundo de la odontolog&iacute;a";
 choices[18][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[18] = 1;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4405. ";
 preguntaids[18] = 4405


//  Id pregunta: 5369 Año de creación de pregunta: 2006
 questions[19]= "20)  Para transmitir Gigabit Ethernet";
 choices[19]= new Array();
 choices[19][0] = "Es necesario un cableado de categoria 6";
 choices[19][1] = "Es necesaria fibra &oacute;ptica";
 choices[19][2] = "Se puede usar cable coaxial";
 choices[19][3] = "ninguna de las anteriores";
 answers[19] = 3;
 units[19] = ['106'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5369. ";
 preguntaids[19] = 5369


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[20]= "21)  El plan nacional de ciudades inteligentes...";
 choices[20]= new Array();
 choices[20][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[20][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[20][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[20][3] = "No existe";
 answers[20] = 1;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 453. Ciudades Inteligentes";
 preguntaids[20] = 453


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[21]= "22)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "Peters";
 choices[21][1] = "Hollingsworth";
 choices[21][2] = "Manuel Castells";
 choices[21][3] = "Gaebler";
 answers[21] = 1;
 units[21] = ['20'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 490. Direcci&oacute;n p&uacute;blica";
 preguntaids[21] = 490


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[22]= new Array();
 choices[22][0] = "Publicidad.";
 choices[22][1] = "Constituci&oacute;n.";
 choices[22][2] = "Legalidad.";
 choices[22][3] = "Creaci&oacute;n.";
 answers[22] = 0;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[22] = 42


//  Id pregunta: 6353 Año de creación de pregunta: 2003
 questions[23]= "24)  &ldquo;La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas&rdquo; est&aacute; catalogada por la Ley 9/2014 como infracci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Muy grave";
 choices[23][1] = "Grave";
 choices[23][2] = "Leve";
 choices[23][3] = "No est&aacute; considerado infracci&oacute;n";
 answers[23] = 1;
 units[23] = ['110'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6353. ";
 preguntaids[23] = 6353


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Senado.";
 choices[24][1] = "El Defensor del Pueblo.";
 choices[24][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[24][3] = "El Presidente del Gobierno.";
 answers[24] = 0;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 62. Constituci&oacute;n de 1978";
 preguntaids[24] = 62


//  Id pregunta: 4595 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Por qu&eacute; motivo no debe utilizarse una red Ethernet para comunicar dispositivos que deban trabajar en tiempo real cr&iacute;tico?:";
 choices[25]= new Array();
 choices[25][0] = "Porque el tiempo medio entre fallos de este tipo de redes es bajo";
 choices[25][1] = "Porque la velocidad de este tipo de redes es demasiado baja";
 choices[25][2] = "Porque el tiempo m&aacute;ximo que tarda un nodo en acceder a la red no est&aacute; acotado";
 choices[25][3] = "Porque este tipo de redes responde al modelo cliente servidor y no permite comunicar dispositivos entre s&iacute;";
 answers[25] = 2;
 units[25] = ['104'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4595. ";
 preguntaids[25] = 4595


//  Id pregunta: 7952 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[26]= new Array();
 choices[26][0] = "XAdES-X.";
 choices[26][1] = "XAdES-X-L.";
 choices[26][2] = "XAdES-C.";
 choices[26][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[26] = 1;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7952. Examen TIC A2 2010";
 preguntaids[26] = 7952


//  Id pregunta: 6718 Año de creación de pregunta: 2009
 questions[27]= "28)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[27]= new Array();
 choices[27][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[27][1] = "IANA gestiona el dominio .int (top-level)";
 choices[27][2] = "IANA asigna las direcciones IP";
 choices[27][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[27] = 2;
 units[27] = ['103'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6718. MAP 2008 A1";
 preguntaids[27] = 6718


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[28]= "29)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[28]= new Array();
 choices[28][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[28][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[28][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[28][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[28] = 3;
 units[28] = ['7'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 227. Ley 39/2015";
 preguntaids[28] = 227


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[29]= "30)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[29]= new Array();
 choices[29][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[29][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[29][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[29][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[29] = 3;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 77. Constituci&oacute;n de 1978";
 preguntaids[29] = 77


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[30]= new Array();
 choices[30][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[30][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[30][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[30][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[30] = 3;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 1894. ";
 preguntaids[30] = 1894


//  Id pregunta: 1433 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes NO es causa de inelegibilidad para los Diputados y Senadores seg&uacute;n el art&iacute;culo 70 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[31]= new Array();
 choices[31][0] = "Ser miembros del Tribunal Constitucional.";
 choices[31][1] = "Ser miembros del Gobierno.";
 choices[31][2] = "Ser Magistrado, Juez y Fiscal en activo.";
 choices[31][3] = "Ser el Defensor del Pueblo.";
 answers[31] = 1;
 units[31] = ['1'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 1433. ";
 preguntaids[31] = 1433


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[32]= "33)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[32]= new Array();
 choices[32][0] = "El rey, a propuesta del Gobierno.";
 choices[32][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[32][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[32][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[32] = 1;
 units[32] = ['1'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[32] = 37


//  Id pregunta: 3949 Año de creación de pregunta: 2002
 questions[33]= "34)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[33]= new Array();
 choices[33][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[33][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[33][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[33][3] = "Los criterios para calificar al software";
 answers[33] = 1;
 units[33] = ['93'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3949. ";
 preguntaids[33] = 3949


//  Id pregunta: 8870 Año de creación de pregunta: 2013
 questions[34]= "35)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros:";
 choices[34]= new Array();
 choices[34][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[34][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[34][2] = "Puede ser de cualquier nacionalidad";
 choices[34][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[34] = 3;
 units[34] = ['121'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8870. ";
 preguntaids[34] = 8870


//  Id pregunta: 7213 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[35]= new Array();
 choices[35][0] = "GNU";
 choices[35][1] = "GPL";
 choices[35][2] = "POSIX";
 choices[35][3] = "Emacs";
 answers[35] = 2;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7213. ";
 preguntaids[35] = 7213


//  Id pregunta: 10387 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[36]= new Array();
 choices[36][0] = "Crecimiento inteligente";
 choices[36][1] = "Crecimiento sostenible";
 choices[36][2] = "Crecimiento integrador";
 choices[36][3] = "Todas las anteriores";
 answers[36] = 3;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 10387. ";
 preguntaids[36] = 10387


//  Id pregunta: 7871 Año de creación de pregunta: 2011
 questions[37]= "38)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF:";
 choices[37]= new Array();
 choices[37][0] = "0x100000001.";
 choices[37][1] = "0xFFFFFFFF.";
 choices[37][2] = "0xFFFE0001.";
 choices[37][3] = "0xFFFE0002";
 answers[37] = 2;
 units[37] = ['56'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7871. Examen TIC A1 2010";
 preguntaids[37] = 7871


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[38]= "39)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[38]= new Array();
 choices[38][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[38][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[38][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[38][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[38] = 2;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 83. Constituci&oacute;n de 1978";
 preguntaids[38] = 83


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[39]= "40)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Acoso sexual.";
 choices[39][1] = "Acoso por raz&oacute;n de sexo.";
 choices[39][2] = "Acoso laboral.";
 choices[39][3] = "Acoso mental.";
 answers[39] = 1;
 units[39] = ['14'];
 blocks[39] = ['A3'];
 comments[39] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[39] = 377


//  Id pregunta: 10591 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[40]= new Array();
 choices[40][0] = "Todas las anteriores";
 choices[40][1] = "Solo 1 y 4";
 choices[40][2] = "Solo 2 y 3";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 0;
 units[40] = ['101'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10591. ";
 preguntaids[40] = 10591


//  Id pregunta: 8959 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[41]= new Array();
 choices[41][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[41][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[41][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[41][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[41] = 1;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8959. ";
 preguntaids[41] = 8959


//  Id pregunta: 4864 Año de creación de pregunta: 2002
 questions[42]= "43)  Indique la opci&oacute;n correcta respecto a la se&ntilde;alizaci&oacute;n en RDSI:";
 choices[42]= new Array();
 choices[42][0] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS7";
 choices[42][1] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal asociado y se le conoce como CCS7";
 choices[42][2] = "El sistema de se&ntilde;alizaci&oacute;n en RDSI es por paquetes y canal com&uacute;n y se le conoce como CCS9";
 choices[42][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[42] = 0;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4864. ";
 preguntaids[42] = 4864


//  Id pregunta: 1253 Año de creación de pregunta: 2016
 questions[43]= "44)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[43]= new Array();
 choices[43][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[43][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[43][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[43][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[43] = 2;
 units[43] = ['1'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 1253. ";
 preguntaids[43] = 1253


//  Id pregunta: 5358 Año de creación de pregunta: 2006
 questions[44]= "45)  Si quiero autenticar a un usuario";
 choices[44]= new Array();
 choices[44][0] = "Le pido su nombre";
 choices[44][1] = "Le pido su DNI";
 choices[44][2] = "Le pido su nombre y lo compruebo en una lista";
 choices[44][3] = "todas las anteriores";
 answers[44] = 1;
 units[44] = ['120'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5358. ";
 preguntaids[44] = 5358


//  Id pregunta: 8740 Año de creación de pregunta: 2013
 questions[45]= "46)  El dominio de control &quot;Seguridad ligada al personal&quot; se corresponde con la dimensi&oacute;n de seguridad:";
 choices[45]= new Array();
 choices[45][0] = "Organizativa.";
 choices[45][1] = "L&oacute;gica";
 choices[45][2] = "F&iacute;sica";
 choices[45][3] = "Legal";
 answers[45] = 0;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 8740. ";
 preguntaids[45] = 8740


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[46]= "47)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[46]= new Array();
 choices[46][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[46][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[46][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[46][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[46] = 1;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 485. Sociedad de la informaci&oacute;n";
 preguntaids[46] = 485


//  Id pregunta: 5825 Año de creación de pregunta: 2007
 questions[47]= "48)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[47]= new Array();
 choices[47][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[47][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[47][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n.";
 choices[47][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[47] = 2;
 units[47] = ['94'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 5825. Examen 2006 JCYL";
 preguntaids[47] = 5825


//  Id pregunta: 9387 Año de creación de pregunta: 2014
 questions[48]= "49)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[48]= new Array();
 choices[48][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[48][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[48][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[48][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[48] = 0;
 units[48] = ['107'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9387. Examen TIC A2  2013";
 preguntaids[48] = 9387


//  Id pregunta: 1126 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta FALSA, en relaci&oacute;n con el algoritmo de planificaci&oacute;n SRTF (Shortest Remaining Time First):";
 choices[49]= new Array();
 choices[49][0] = "Es una versi&oacute;n de SJF.";
 choices[49][1] = "Cada vez que entran trabajos se interrumpe el actual y se compara el tiempo restante de &eacute;ste con el de los entrantes.";
 choices[49][2] = "Si hay un trabajo nuevo m&aacute;s corto que lo que le falta al actual en CPU, echamos el actual y metemos el nuevo.";
 choices[49][3] = "Cada proceso tiene un tiempo l&iacute;mite de uso de CPU llamado quantum.";
 answers[49] = 3;
 units[49] = ['56'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1126. ";
 preguntaids[49] = 1126


//  Id pregunta: 8278 Año de creación de pregunta: 2011
 questions[50]= "51)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Bidireccional";
 choices[50][1] = "S&iacute;ncrono.";
 choices[50][2] = "Entre procesos.";
 choices[50][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[50] = 2;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8278. Examen TIC A2 2010 interna";
 preguntaids[50] = 8278


//  Id pregunta: 5167 Año de creación de pregunta: 2003
 questions[51]= "52)  El protocolo Internet versi&oacute;n 6 (IPv6) define un espacio de direcciones de:";
 choices[51]= new Array();
 choices[51][0] = "32 bits";
 choices[51][1] = "64 bits";
 choices[51][2] = "128 bits";
 choices[51][3] = "Ninguno de los anteriores";
 answers[51] = 2;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5167. ";
 preguntaids[51] = 5167


//  Id pregunta: 3929 Año de creación de pregunta: 2002
 questions[52]= "53)  Los diagramas de flujos de datos son una de las t&eacute;cnicas utilizadas en la metodolog&iacute;a METRICA cuyo objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo. Indique la respuesta que incluye los elementos utilizados en esa t&eacute;cnica:";
 choices[52]= new Array();
 choices[52][0] = "Atributos, relaciones y entidades";
 choices[52][1] = "Entidades externas al sistema, procesos y almacenes de datos";
 choices[52][2] = "Entradas, funciones de transformaci&oacute;n y salidas";
 choices[52][3] = "Niveles, diagramas y objetos";
 answers[52] = 1;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3929. ";
 preguntaids[52] = 3929


//  Id pregunta: 1883 Año de creación de pregunta: 2016
 questions[53]= "54)  EI Documento Nacional de Identidad electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Acredita electr&oacute;nicamente la identidad personal de su titular y permite la firma electr&oacute;nica de documentos";
 choices[53][1] = "S&oacute;lo se podr&aacute; utilizar para acreditar la identidad de su titular";
 choices[53][2] = "Permitir&aacute; acreditar la identidad de las personas f&iacute;sicas o jur&iacute;dicas";
 choices[53][3] = "Puede almacenar informaci&oacute;n penal y sanitario del titular.";
 answers[53] = 0;
 units[53] = ['78'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1883. ";
 preguntaids[53] = 1883


//  Id pregunta: 9799 Año de creación de pregunta: 2015
 questions[54]= "55)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[54]= new Array();
 choices[54][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[54][1] = "Es la base legal del programa ISA.";
 choices[54][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[54][3] = "La Decisi&oacute;n establece un programa de medidas para la seguridad en las administraciones p&uacute;blicas europeas.";
 answers[54] = 1;
 units[54] = ['43', '19'];
 blocks[54] = ['B1', 'A4'];
 comments[54] = "Id Pregunta: 9799. ";
 preguntaids[54] = 9799


//  Id pregunta: 7419 Año de creación de pregunta: 2010
 questions[55]= "56)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[55]= new Array();
 choices[55][0] = "Consolidaci&oacute;n de servidores";
 choices[55][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[55][2] = "SaaS (Storage as a Service)";
 choices[55][3] = "Computing Mobility";
 answers[55] = 0;
 units[55] = ['124'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7419. Examen TIC B 2009";
 preguntaids[55] = 7419


//  Id pregunta: 9968 Año de creación de pregunta: 2015
 questions[56]= "57)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n escrita de los &oacute;rganos o entidades de derecho p&uacute;blico, firmada por su responsable, mediante la que se da publicidad que los sistemas a que se refieren cumplen con las exigencias del Esquema Nacional de Seguridad aprobado por Real Decreto 3/2010, de 8 de enero&quot;?";
 choices[56]= new Array();
 choices[56][0] = "Informe de auditor&iacute;a";
 choices[56][1] = "Declaraci&oacute;n de conformidad";
 choices[56][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[56][3] = "Formalizaci&oacute;n de la conformidad";
 answers[56] = 1;
 units[56] = ['46'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9968. ";
 preguntaids[56] = 9968


//  Id pregunta: 7014 Año de creación de pregunta: 2010
 questions[57]= "58)  Cu&aacute;l de las siguientes afirmaciones es falsa en lo que al &ldquo;informe final de una auditor&iacute;a&rdquo; se refiere:";
 choices[57]= new Array();
 choices[57][0] = "Si el informe es muy extenso, ser&iacute;a conveniente redactar un resumen ejecutivo.";
 choices[57][1] = "Es conveniente que el informe est&eacute; perfectamente indexado con, al menos, tres apartados en funci&oacute;n de a qui&eacute;n vaya dirigido (director de sistemas, equipo t&eacute;cnico de sistemas, equipo de calidad y auditor&iacute;a).";
 choices[57][2] = "El esquema t&iacute;pico de un informe de auditor&iacute;a contendr&iacute;a entre otros los siguientes apartados: introducci&oacute;n, objetivos, metodolog&iacute;a y resultados.";
 choices[57][3] = "Un elemento sustancial para asegurar la calidad del informe y que &eacute;ste sea completo y objetivo es conseguir que los responsables de la actividad realicen una revisi&oacute;n del borrador del informe y formulen las alegaciones y comentarios que consideren oportunos.";
 answers[57] = 1;
 units[57] = ['36'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 7014. ";
 preguntaids[57] = 7014


//  Id pregunta: 2410 Año de creación de pregunta: 2006
 questions[58]= "59)  Cual de los siguientes ficheros debe inscribirse como de nivel de seguridad alto";
 choices[58]= new Array();
 choices[58][0] = "Los ficheros que contengan datos para fines policiales sin consentimiento del afectado.";
 choices[58][1] = "Los ficheros que contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo.";
 choices[58][2] = "Los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas o penales.";
 choices[58][3] = "No es correcta ninguna de las anteriores.";
 answers[58] = 0;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2410. ";
 preguntaids[58] = 2410


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[59]= "60)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[59]= new Array();
 choices[59][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[59][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[59][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[59][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[59] = 0;
 units[59] = ['5'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 172. Uni&oacute;n Europea";
 preguntaids[59] = 172


//  Id pregunta: 1102 Año de creación de pregunta: 2016
 questions[60]= "61)  La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio El electr&oacute;nico, en el art&iacute;culo 45 detalla la prescripci&oacute;n para las sanciones e infracciones. Se&ntilde;ale la respuesta correcta:";
 choices[60]= new Array();
 choices[60][0] = "Las infracciones muy graves prescribir&aacute;n a los 3 a&ntilde;os, las graves al a&ntilde;o y las leves a los 6 meses.";
 choices[60][1] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves a los seis meses.";
 choices[60][2] = "Las infracciones muy graves prescribir&aacute;n a los 5 a&ntilde;os, las graves a los 3 a&ntilde;os y las leves al a&ntilde;o.";
 choices[60][3] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves al a&ntilde;o.";
 answers[60] = 3;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 1102. ";
 preguntaids[60] = 1102


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[61][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[61][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[61][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[61] = 2;
 units[61] = ['7'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 206. Ley 39/2015";
 preguntaids[61] = 206


//  Id pregunta: 6055 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[62]= new Array();
 choices[62][0] = "MIB (Management Information Base).";
 choices[62][1] = "PDU (Packet Data Unit).";
 choices[62][2] = "CMIS (Common Management Information Services).";
 choices[62][3] = "SMI (Structure of Management Information).";
 answers[62] = 3;
 units[62] = ['114'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 6055. TIC B 2007";
 preguntaids[62] = 6055


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[63]= "64)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[63]= new Array();
 choices[63][0] = "Rey.";
 choices[63][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[63][2] = "Constituci&oacute;n.";
 choices[63][3] = "Pueblo.";
 answers[63] = 3;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 78. Constituci&oacute;n de 1978";
 preguntaids[63] = 78


//  Id pregunta: 10396 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[64]= new Array();
 choices[64][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[64][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[64][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[64][3] = "Beneficios TIC para la Sociedad UE";
 answers[64] = 0;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 10396. ";
 preguntaids[64] = 10396


//  Id pregunta: 9769 Año de creación de pregunta: 2014
 questions[65]= "66)  Cual de los siguientes no es un principio de COBIT5";
 choices[65]= new Array();
 choices[65][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[65][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[65][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[65][3] = "Aplicar un solo marco integrado";
 answers[65] = 1;
 units[65] = ['101'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 9769. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";
 preguntaids[65] = 9769


//  Id pregunta: 5424 Año de creación de pregunta: 2007
 questions[66]= "67)  Qu&eacute; es AXIS";
 choices[66]= new Array();
 choices[66][0] = "Un servidor de aplicaciones";
 choices[66][1] = "Un lenguaje de programaci&oacute;n";
 choices[66][2] = "Una implementaci&oacute;n de SOAP para APACHE";
 choices[66][3] = "Un m&eacute;todo as&iacute;ncrono de comunicaci&oacute;n entre servidores.";
 answers[66] = 2;
 units[66] = ['55'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5424. ";
 preguntaids[66] = 5424


//  Id pregunta: 2104 Año de creación de pregunta: 2002
 questions[67]= "68)  El modelo orientado a los tratamientos:";
 choices[67]= new Array();
 choices[67][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[67][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[67][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[67][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[67] = 0;
 units[67] = ['24'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2104. ";
 preguntaids[67] = 2104


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[68][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[68][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[68][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[68] = 1;
 units[68] = ['1'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 46. Constituci&oacute;n de 1978";
 preguntaids[68] = 46


//  Id pregunta: 4972 Año de creación de pregunta: 2002
 questions[69]= "70)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[69]= new Array();
 choices[69][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[69][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[69][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[69][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[69] = 3;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4972. ";
 preguntaids[69] = 4972


//  Id pregunta: 1782 Año de creación de pregunta: 2016
 questions[70]= "71)  El art. 9 del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, se refiere al inventario de informaci&oacute;n administrativa, y establece que las administraciones p&uacute;blicas deber&aacute;n mantener en &eacute;l:";
 choices[70]= new Array();
 choices[70][0] = "Los procedimientos administrativos y servicios que prestan de forma clasificada y estructurados en familias, con indicaci&oacute;n del nivel de informatizaci&oacute;n de los mismos.";
 choices[70][1] = "La relaci&oacute;n actualizada de los &oacute;rganos de direcci&oacute;n de los organismos y entidades de la administraci&oacute;n p&uacute;blica.";
 choices[70][2] = "La relaci&oacute;n de los documentos o datos que puede facilitar a otras administraciones a trav&eacute;s de un nodo de interoperabilidad, indicando las condiciones de acceso y uso del mismo.";
 choices[70][3] = "La relaci&oacute;n de sedes electr&oacute;nicas que complementan la red de oficinas de registro y atenci&oacute;n al ciudadano.";
 answers[70] = 0;
 units[70] = ['43'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 1782. ";
 preguntaids[70] = 1782


//  Id pregunta: 888 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale qu&eacute; est&aacute;ndar wifi del IEEE est&aacute; especialmente dise&ntilde;ado para uso en redes que permitan la comunicaci&oacute;n en entornos entre veh&iacute;culos:";
 choices[71]= new Array();
 choices[71][0] = "802.11Qay";
 choices[71][1] = "802.11n";
 choices[71][2] = "802.11p";
 choices[71][3] = "802.11ve";
 answers[71] = 2;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 888. AGE A2 2015";
 preguntaids[71] = 888


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[72]= "73)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[72]= new Array();
 choices[72][0] = "TPDU.";
 choices[72][1] = "Paquete.";
 choices[72][2] = "Trama.";
 choices[72][3] = "TCDU.";
 answers[72] = 0;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1129. ";
 preguntaids[72] = 1129


//  Id pregunta: 6131 Año de creación de pregunta: 2003
 questions[73]= "74)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[73]= new Array();
 choices[73][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[73][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[73][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[73][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[73] = 3;
 units[73] = ['41'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 6131. Examen TIC A1 MAP 2007";
 preguntaids[73] = 6131


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[74][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[74][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[74][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[74] = 3;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 481. Sociedad de la informaci&oacute;n";
 preguntaids[74] = 481


