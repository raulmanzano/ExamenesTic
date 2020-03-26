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
//  Id pregunta: 2492 Año de creación de pregunta: 2004
 questions[0]= "1)  En un CPD se hacen back-ups de 240 GB. Se hacen 4 al a&ntilde;o. Si se quiere tener la informaci&oacute;n de los 5 a&ntilde;os anteriores, &iquest;Cu&aacute;ntas cintas de 60 GB hacen falta?";
 choices[0]= new Array();
 choices[0][0] = "60";
 choices[0][1] = "80";
 choices[0][2] = "90";
 choices[0][3] = "70";
 answers[0] = 1;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2492. Similar a examen TIC SS A 2003";
 preguntaids[0] = 2492


//  Id pregunta: 4316 Año de creación de pregunta: 2004
 questions[1]= "2)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[1]= new Array();
 choices[1][0] = "uSCSI";
 choices[1][1] = "FCP";
 choices[1][2] = "iSCSI";
 choices[1][3] = "FCIP";
 answers[1] = 2;
 units[1] = ['100'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4316. Similar a examen TIC SS A 2004";
 preguntaids[1] = 4316


//  Id pregunta: 4322 Año de creación de pregunta: 2004
 questions[2]= "3)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[2]= new Array();
 choices[2][0] = "Red";
 choices[2][1] = "Transporte";
 choices[2][2] = "Sesi&oacute;n";
 choices[2][3] = "Presentaci&oacute;n";
 answers[2] = 1;
 units[2] = ['105'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4322. Similar a examen TIC SS A 2003";
 preguntaids[2] = 4322


//  Id pregunta: 2520 Año de creación de pregunta: 2004
 questions[3]= "4)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[3]= new Array();
 choices[3][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[3][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[3][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[3][3] = "Ninguna de las anteriores.";
 answers[3] = 1;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2520. Similar a examen TIC SS A 2003";
 preguntaids[3] = 2520


//  Id pregunta: 2131 Año de creación de pregunta: 2004
 questions[4]= "5)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[4]= new Array();
 choices[4][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[4][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[4][2] = "Evaluaci&oacute;n de riesgos";
 choices[4][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[4] = 0;
 units[4] = ['36', '45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2131. Similar a examen TIC SS A 2003";
 preguntaids[4] = 2131


//  Id pregunta: 2522 Año de creación de pregunta: 2004
 questions[5]= "6)  Los algoritmos de cifrado que utilizaban los antiguos romanos eran de clave:";
 choices[5]= new Array();
 choices[5][0] = "sim&eacute;trica";
 choices[5][1] = "asim&eacute;trica";
 choices[5][2] = "diferencial";
 choices[5][3] = "clave sim&eacute;trica o asim&eacute;trica, dependiendo del algoritmo";
 answers[5] = 0;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2522. Similar a examen TIC SS A 2003";
 preguntaids[5] = 2522


//  Id pregunta: 3562 Año de creación de pregunta: 2004
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[6]= new Array();
 choices[6][0] = "C.";
 choices[6][1] = "Smalltalk.";
 choices[6][2] = "Eiffel.";
 choices[6][3] = "ACTOR.";
 answers[6] = 0;
 units[6] = ['85', '89'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3562. Similar a examen TIC SS A 2003";
 preguntaids[6] = 3562


//  Id pregunta: 2493 Año de creación de pregunta: 2004
 questions[7]= "8)  En UNIX, &iquest;qui&eacute;n es el due&ntilde;o del proceso una vez ejecutada la instrucci&oacute;n lpr?";
 choices[7]= new Array();
 choices[7][0] = "root";
 choices[7][1] = "el usuario que la ha ejecutado";
 choices[7][2] = "el programa de control de la cola de impresora";
 choices[7][3] = "scheduler";
 answers[7] = 2;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2493. Similar a examen TIC SS A 2003";
 preguntaids[7] = 2493


//  Id pregunta: 2517 Año de creación de pregunta: 2004
 questions[8]= "9)  En la arquitectura cliente-servidor es falso que:";
 choices[8]= new Array();
 choices[8][0] = "Cliente y servidor tienen que estar obligatoriamente en distintas m&aacute;quinas";
 choices[8][1] = "Un servidor atiende a muchos clientes";
 choices[8][2] = "Hay m&aacute;s tr&aacute;fico de servidor a cliente que de cliente a servidor";
 choices[8][3] = "Todas las respuestas anteriores son verdaderas";
 answers[8] = 0;
 units[8] = ['55'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2517. Similar a examen TIC SS A 2003";
 preguntaids[8] = 2517


//  Id pregunta: 2134 Año de creación de pregunta: 2004
 questions[9]= "10)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[9]= new Array();
 choices[9][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[9][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[9][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[9][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[9] = 1;
 units[9] = ['41'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2134. Similar a examen TIC SS A 2003";
 preguntaids[9] = 2134


//  Id pregunta: 3563 Año de creación de pregunta: 2004
 questions[10]= "11)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[10]= new Array();
 choices[10][0] = "UML";
 choices[10][1] = "XML";
 choices[10][2] = "HTML";
 choices[10][3] = "Ninguno de los anteriores";
 answers[10] = 0;
 units[10] = ['85'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3563. Similar a examen TIC SS A 2003";
 preguntaids[10] = 3563


//  Id pregunta: 3566 Año de creación de pregunta: 2004
 questions[11]= "12)  Cu&aacute;l de los siguientes no es un factor de calidad de McCall:";
 choices[11]= new Array();
 choices[11][0] = "Fiabilidad";
 choices[11][1] = "Usabilidad";
 choices[11][2] = "Facilidad de mantenimiento";
 choices[11][3] = "Bajo coste";
 answers[11] = 3;
 units[11] = ['93'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3566. Similar a examen TIC SS A 2003";
 preguntaids[11] = 3566


//  Id pregunta: 3564 Año de creación de pregunta: 2004
 questions[12]= "13)  En UML, los diagramas que describen bajo la forma de acciones y reacciones el comportamiento de un sistema desde el punto de vista de un usuario, se denominan:";
 choices[12]= new Array();
 choices[12][0] = "casos de uso";
 choices[12][1] = "diagrama de estados";
 choices[12][2] = "diagrama de actividades";
 choices[12][3] = "diagrama de secuencia";
 answers[12] = 0;
 units[12] = ['85'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3564. Similar a examen TIC SS A 2003";
 preguntaids[12] = 3564


//  Id pregunta: 2133 Año de creación de pregunta: 2004
 questions[13]= "14)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Impacto";
 choices[13][1] = "Vulnerabilidad";
 choices[13][2] = "Amenaza";
 choices[13][3] = "Riesgo";
 answers[13] = 2;
 units[13] = ['45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2133. Similar a examen TIC SS A 2003";
 preguntaids[13] = 2133


//  Id pregunta: 4303 Año de creación de pregunta: 2004
 questions[14]= "15)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[14]= new Array();
 choices[14][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[14][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[14][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[14][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[14] = 1;
 units[14] = ['55'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 4303. Similar a examen TIC SS A 2003";
 preguntaids[14] = 4303


//  Id pregunta: 3537 Año de creación de pregunta: 2004
 questions[15]= "16)  En Orientaci&oacute;n a Objetos, &iquest;c&oacute;mo se denomina el concepto por el que el an&aacute;lisis se centra en los aspectos esenciales e inherentes de una entidad, ignorarando sus propiedades accidentales?";
 choices[15]= new Array();
 choices[15][0] = "Abstracci&oacute;n";
 choices[15][1] = "Encapsulaci&oacute;n";
 choices[15][2] = "Persistencia";
 choices[15][3] = "Polimorfismo";
 answers[15] = 0;
 units[15] = ['85'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3537. Similar a examen TIC SS A 2003";
 preguntaids[15] = 3537


//  Id pregunta: 4324 Año de creación de pregunta: 2004
 questions[16]= "17)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[16]= new Array();
 choices[16][0] = "RFC";
 choices[16][1] = "IETF";
 choices[16][2] = "IANA";
 choices[16][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar)";
 answers[16] = 0;
 units[16] = ['103'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4324. Similar a examen TIC SS A 2003";
 preguntaids[16] = 4324


//  Id pregunta: 2495 Año de creación de pregunta: 2004
 questions[17]= "18)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[17]= new Array();
 choices[17][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[17][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[17][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[17][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[17] = 0;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2495. Similar a examen TIC SS A 2003";
 preguntaids[17] = 2495


//  Id pregunta: 2525 Año de creación de pregunta: 2004
 questions[18]= "19)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[18]= new Array();
 choices[18][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[18][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[18][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[18][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[18] = 2;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2525. Similar a examen TIC SS A 2003. Puede haber colisiones aunque con una probabilidad muy baja.";
 preguntaids[18] = 2525


//  Id pregunta: 2491 Año de creación de pregunta: 2004
 questions[19]= "20)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[19]= new Array();
 choices[19][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[19][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE";
 choices[19][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[19][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[19] = 3;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 2491. Similar a examen TIC SS A 2003";
 preguntaids[19] = 2491


//  Id pregunta: 3568 Año de creación de pregunta: 2004
 questions[20]= "21)  Cu&aacute;l de los siguientes no es un formato de imagen:";
 choices[20]= new Array();
 choices[20][0] = "gif";
 choices[20][1] = "jp2";
 choices[20][2] = "drw";
 choices[20][3] = "php";
 answers[20] = 3;
 units[20] = ['80'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3568. Similar a examen TIC SS A 2003";
 preguntaids[20] = 3568


//  Id pregunta: 2519 Año de creación de pregunta: 2004
 questions[21]= "22)  Entre las caracter&iacute;sticas de un Data Warehouse se encuentra que es un sistema:";
 choices[21]= new Array();
 choices[21][0] = "Independiente del tiempo.";
 choices[21][1] = "Integrado.";
 choices[21][2] = "Vol&aacute;til.";
 choices[21][3] = "Ninguna de las anteriores.";
 answers[21] = 1;
 units[21] = ['72'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2519. Similar a examen TIC SS A 2003";
 preguntaids[21] = 2519


//  Id pregunta: 2521 Año de creación de pregunta: 2004
 questions[22]= "23)  Las aplicaciones Java son comprobadas:";
 choices[22]= new Array();
 choices[22][0] = "en tiempo de compilaci&oacute;n";
 choices[22][1] = "en tiempo de ejecuci&oacute;n";
 choices[22][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[22][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[22] = 2;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2521. Similar a examen TIC SS A 2003";
 preguntaids[22] = 2521


//  Id pregunta: 4325 Año de creación de pregunta: 2004
 questions[23]= "24)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[23]= new Array();
 choices[23][0] = "CSMA/CD";
 choices[23][1] = "Token bus";
 choices[23][2] = "Token Ring";
 choices[23][3] = "Aloha ranurado";
 answers[23] = 1;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 4325. Similar a examen TIC SS A 2003";
 preguntaids[23] = 4325


//  Id pregunta: 4305 Año de creación de pregunta: 2009
 questions[24]= "25)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[24]= new Array();
 choices[24][0] = "128 kbps";
 choices[24][1] = "171.2 kbps";
 choices[24][2] = "64.1 kbps";
 choices[24][3] = "56.6 kbps";
 answers[24] = 1;
 units[24] = ['117'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4305. Similar a examen TIC SS A 2003";
 preguntaids[24] = 4305


//  Id pregunta: 2132 Año de creación de pregunta: 2004
 questions[25]= "26)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[25]= new Array();
 choices[25][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[25][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[25][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[25][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[25] = 2;
 units[25] = ['36', '45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2132. Similar a examen TIC SS A 2003";
 preguntaids[25] = 2132


//  Id pregunta: 2524 Año de creación de pregunta: 2004
 questions[26]= "27)  La criptograf&iacute;a sirve para codificar:";
 choices[26]= new Array();
 choices[26][0] = "Lenguaje manuscrito";
 choices[26][1] = "Lenguaje manuscrito y datos";
 choices[26][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[26][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[26] = 1;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2524. Similar a examen TIC SS A 2003";
 preguntaids[26] = 2524


//  Id pregunta: 3567 Año de creación de pregunta: 2004
 questions[27]= "28)  Cu&aacute;l de los siguientes es un formato de sonido:";
 choices[27]= new Array();
 choices[27][0] = "gif";
 choices[27][1] = "blob";
 choices[27][2] = "wav";
 choices[27][3] = "rar";
 answers[27] = 2;
 units[27] = ['99'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3567. Similar a examen TIC SS A 2003. JMRP: Se cambia la opci&oacute;n c de wcm a wav porque nunca he visto que wcm sea un formato de audio. De esta forma, la pregunta es correcta seguro";
 preguntaids[27] = 3567


//  Id pregunta: 3565 Año de creación de pregunta: 2004
 questions[28]= "29)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[28]= new Array();
 choices[28][0] = "caja negra";
 choices[28][1] = "caja blanca";
 choices[28][2] = "caja roja";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 0;
 units[28] = ['91', '93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3565. Similar a examen TIC SS A 2003";
 preguntaids[28] = 3565


//  Id pregunta: 2518 Año de creación de pregunta: 2004
 questions[29]= "30)  En inteligencia artificial, los marcos";
 choices[29]= new Array();
 choices[29][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[29][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[29][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[29][3] = "Se representan mediante nodos y arcos";
 answers[29] = 0;
 units[29] = ['68'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2518. Similar a examen TIC SS A 2003";
 preguntaids[29] = 2518


//  Id pregunta: 4318 Año de creación de pregunta: 2004
 questions[30]= "31)  &iquest;Qu&eacute; no permite IP V6?";
 choices[30]= new Array();
 choices[30][0] = "Autenticaci&oacute;n";
 choices[30][1] = "Garantia de no repudio";
 choices[30][2] = "Cifrado";
 choices[30][3] = "Integridad";
 answers[30] = 1;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4318. Similar a examen TIC SS A 2003";
 preguntaids[30] = 4318


//  Id pregunta: 2494 Año de creación de pregunta: 2004
 questions[31]= "32)  En UNIX, &iquest;qu&eacute; elemento traduce los comandos de usuario en instrucciones para el Kernel?";
 choices[31]= new Array();
 choices[31][0] = "Shell";
 choices[31][1] = "Kernel";
 choices[31][2] = "Shell o Kernel, dependiendo de la secuencia de comandos";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = 0;
 units[31] = ['57'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2494. Similar a examen TIC SS A 2003";
 preguntaids[31] = 2494


//  Id pregunta: 4302 Año de creación de pregunta: 2004
 questions[32]= "33)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[32]= new Array();
 choices[32][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[32][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[32][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[32][3] = "No";
 answers[32] = 0;
 units[32] = ['105', '109'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4302. Similar a examen TIC SS A 2003";
 preguntaids[32] = 4302


//  Id pregunta: 4323 Año de creación de pregunta: 2004
 questions[33]= "34)  En ADSL la velocidad de transmisi&oacute;n no depende de:";
 choices[33]= new Array();
 choices[33][0] = "La longitud del bucle de abonado local";
 choices[33][1] = "Los empalmes, conectores y distribuidores que haya para llevar la se&ntilde;al a distintos equipos en el domicilio del usuario";
 choices[33][2] = "Diafon&iacute;a";
 choices[33][3] = "Todas las anteriores.";
 answers[33] = 3;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4323. Similar a examen TIC SS A 2003";
 preguntaids[33] = 4323


//  Id pregunta: 4304 Año de creación de pregunta: 2004
 questions[34]= "35)  En relaci&oacute;n con GPRS se&ntilde;ale la opci&oacute;n incorrecta";
 choices[34]= new Array();
 choices[34][0] = "El acceso radio es por paquetes de datos";
 choices[34][1] = "Hasta 8 usuarios pueden compartir eficientemente un &uacute;nico timeslot de radio";
 choices[34][2] = "La tarificaci&oacute;n es por tiempo de conexi&oacute;n";
 choices[34][3] = "La red GPRS se puede comunicar con redes TCP/IP";
 answers[34] = 2;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4304. Similar a examen TIC SS A 2003";
 preguntaids[34] = 4304


//  Id pregunta: 4317 Año de creación de pregunta: 2004
 questions[35]= "36)  Dentro de la capa OSI, la funci&oacute;n de cifrado de datos se realiza en el nivel de:";
 choices[35]= new Array();
 choices[35][0] = "Red";
 choices[35][1] = "Transporte";
 choices[35][2] = "Sesi&oacute;n";
 choices[35][3] = "Presentaci&oacute;n";
 answers[35] = 3;
 units[35] = ['105'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4317. Similar a examen TIC SS A 2003";
 preguntaids[35] = 4317


//  Id pregunta: 4301 Año de creación de pregunta: 2004
 questions[36]= "37)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[36]= new Array();
 choices[36][0] = "IEEE 802.11a";
 choices[36][1] = "IEEE 802.11b";
 choices[36][2] = "IEEE 802.11g";
 choices[36][3] = "IEEE 802.11i";
 answers[36] = 2;
 units[36] = ['108'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4301. Similar a examen TIC SS A 2003";
 preguntaids[36] = 4301


