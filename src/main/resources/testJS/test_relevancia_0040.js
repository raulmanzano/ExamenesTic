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
//  Id pregunta: 7939 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[0]= new Array();
 choices[0][0] = "Gestor DHCP.";
 choices[0][1] = "MIB.";
 choices[0][2] = "Agente-SMAP.";
 choices[0][3] = "NMS.";
 answers[0] = 0;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7939. Examen TIC A2 2010";
 preguntaids[0] = 7939


//  Id pregunta: 10463 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[1]= new Array();
 choices[1][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[1][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[1][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[1][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[1] = 1;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10463. ";
 preguntaids[1] = 10463


//  Id pregunta: 8889 Año de creación de pregunta: 2013
 questions[2]= "3)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[2]= new Array();
 choices[2][0] = "Modelo conceptual de datos.";
 choices[2][1] = "Modelo de casos de uso.";
 choices[2][2] = "Cat&aacute;logo de usuarios.";
 choices[2][3] = "Cat&aacute;logo de excepciones.";
 answers[2] = 1;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 8889. Examen AGE TIC A1 2011";
 preguntaids[2] = 8889


//  Id pregunta: 3249 Año de creación de pregunta: 2003
 questions[3]= "4)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Superclave.";
 choices[3][1] = "Clave principal.";
 choices[3][2] = "Tupla m&uacute;ltiple.";
 choices[3][3] = "Clave ajena.";
 answers[3] = 3;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3249. Junta Andaluc&iacute;a";
 preguntaids[3] = 3249


//  Id pregunta: 10666 Año de creación de pregunta: 2015
 questions[4]= "5)  Seg&uacute;n la Ley 9/2014, indique la respuesta CORRECTA:";
 choices[4]= new Array();
 choices[4][0] = "El Ministerio de Energia, Turismo y Agenda Digital aprobar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[4][1] = "El otorgamiento de derechos se har&aacute; en 3 semanas m&aacute;ximo en cualquier caso.";
 choices[4][2] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; modificar mediante Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[4][3] = "La CNMC podr&aacute; fijar mediante circular las caracter&iacute;sticas de conservaci&oacute;n de numeraci&oacute;n.";
 answers[4] = 3;
 units[4] = ['121'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 10666. ";
 preguntaids[4] = 10666


//  Id pregunta: 4643 Año de creación de pregunta: 2002
 questions[5]= "6)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[5]= new Array();
 choices[5][0] = "applet";
 choices[5][1] = "cookie";
 choices[5][2] = "socket";
 choices[5][3] = "control activeX";
 answers[5] = 1;
 units[5] = ['113'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4643. ";
 preguntaids[5] = 4643


//  Id pregunta: 9042 Año de creación de pregunta: 2014
 questions[6]= "7)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[6]= new Array();
 choices[6][0] = "MSIL";
 choices[6][1] = "CIL";
 choices[6][2] = "CLS";
 choices[6][3] = "Bytecode";
 answers[6] = 1;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9042. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";
 preguntaids[6] = 9042


//  Id pregunta: 10598 Año de creación de pregunta: 2015
 questions[7]= "8)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones es un objetivo del proceso de coordinaci&oacute;n del dise&ntilde;o?";
 choices[7]= new Array();
 choices[7][0] = "Asegurar que los objetivos de disponibilidad del servicio se cumplan";
 choices[7][1] = "Definir, documentar, acordar, monitorizar, medir y revisar los niveles de servicios";
 choices[7][2] = "Proveer y mantener una fuente &uacute;nica de informaci&oacute;n consistente sobre todos los servicios operativos";
 choices[7][3] = "Monitorizar y mejorar el desempe&ntilde;o de la etapa de dise&ntilde;o del ciclo de vida del servicio";
 answers[7] = 3;
 units[7] = ['101'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10598. ";
 preguntaids[7] = 10598


//  Id pregunta: 3775 Año de creación de pregunta: 2002
 questions[8]= "9)  El diagrama que representa el despliegue de los componentes sobre los dispositivos materiales o nodos es el de:";
 choices[8]= new Array();
 choices[8][0] = "componentes";
 choices[8][1] = "despliegue";
 choices[8][2] = "actividades";
 choices[8][3] = "ninguno de los anteriores";
 answers[8] = 1;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3775. ";
 preguntaids[8] = 3775


//  Id pregunta: 8934 Año de creación de pregunta: 2013
 questions[9]= "10)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[9]= new Array();
 choices[9][0] = "Verificaciones de integridad";
 choices[9][1] = "Verificaciones de consistencia";
 choices[9][2] = "Verificaciones de completitud";
 choices[9][3] = "Verificaciones de validez";
 answers[9] = 0;
 units[9] = ['84'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8934. Seg&uacute;n M&eacute;trica v3 los requisitos han de ser v&aacute;lidos, consistentes y completos.";
 preguntaids[9] = 8934


//  Id pregunta: 10100 Año de creación de pregunta: 2015
 questions[10]= "11)  En el contexto de la web sem&aacute;ntica, se&ntilde;ale la definici&oacute;n correcta de ontolog&iacute;a:";
 choices[10]= new Array();
 choices[10][0] = "Es una especificaci&oacute;n expl&iacute;cita de una conceptualizaci&oacute;n.";
 choices[10][1] = "Es un sistema de clasificaci&oacute;n abierto y/o colaborativo basado en etiquetas.";
 choices[10][2] = "Es un conjunto de nombres en el cual todos los nombres son &uacute;nicos.";
 choices[10][3] = "Es un sistema de clasificaci&oacute;n que permite agrupar un conjunto de elementos dentro de unas categor&iacute;as predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera.";
 answers[10] = 0;
 units[10] = ['42'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10100. Examen TIC A2 2014";
 preguntaids[10] = 10100


//  Id pregunta: 1463 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale cual de los siguientes lenguajes de programaci&oacute;n NO es orientado a objetos:";
 choices[11]= new Array();
 choices[11][0] = "XBase++";
 choices[11][1] = "VB.NET";
 choices[11][2] = "Eiffel";
 choices[11][3] = "Prolog";
 answers[11] = 3;
 units[11] = ['84'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1463. ";
 preguntaids[11] = 1463


//  Id pregunta: 4132 Año de creación de pregunta: 2003
 questions[12]= "13)  M&eacute;todo b&aacute;sico de reconocimiento de caracteres en OCR:";
 choices[12]= new Array();
 choices[12][0] = "Comparaci&oacute;n matricial.";
 choices[12][1] = "S&iacute;ntesis de caracter&iacute;sticas.";
 choices[12][2] = "Todas las anteriores.";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = 0;
 units[12] = ['81'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 4132. ";
 preguntaids[12] = 4132


//  Id pregunta: 6854 Año de creación de pregunta: 2010
 questions[13]= "14)  Cu&aacute;l de los siguientes NO es un principio arquitect&oacute;nico b&aacute;sico intr&iacute;nsicamente aplicable a arquitecturas SOA:";
 choices[13]= new Array();
 choices[13][0] = "Encapsulaci&oacute;n";
 choices[13][1] = "D&eacute;bil acoplamiento";
 choices[13][2] = "Composici&oacute;n";
 choices[13][3] = "Polimorfismo";
 answers[13] = 3;
 units[13] = ['55'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6854. ";
 preguntaids[13] = 6854


//  Id pregunta: 5265 Año de creación de pregunta: 2006
 questions[14]= "15)  Podemos definir spoofing como";
 choices[14]= new Array();
 choices[14][0] = "captura de datos sensibles mediante la escucha no autorizada";
 choices[14][1] = "amenaza propia de virus y gusanos";
 choices[14][2] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[14][3] = "Un mecanismo de enga&ntilde;o basado en t&eacute;cnicas de ingenier&iacute;a social";
 answers[14] = 2;
 units[14] = ['103'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5265. ";
 preguntaids[14] = 5265


//  Id pregunta: 2275 Año de creación de pregunta: 2002
 questions[15]= "16)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:";
 choices[15]= new Array();
 choices[15][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[15][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[15][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[15][3] = "Todas las respuestas anteriores son correctas";
 answers[15] = 3;
 units[15] = ['43'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2275. ";
 preguntaids[15] = 2275


//  Id pregunta: 7304 Año de creación de pregunta: 2010
 questions[16]= "17)  Un contrato de servicios de una comunidad aut&oacute;noma estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es:";
 choices[16]= new Array();
 choices[16][0] = "Superior a 134.000 euros";
 choices[16][1] = "Superior a 125.000";
 choices[16][2] = "Igual o superior a 209.000";
 choices[16][3] = "Superior a 207.000 euros.";
 answers[16] = 2;
 units[16] = ['37'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 7304. Nuevos importes SARA";
 preguntaids[16] = 7304


//  Id pregunta: 955 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[17]= new Array();
 choices[17][0] = "De 1 a  4";
 choices[17][1] = "De 3 a  7";
 choices[17][2] = "De 5 a  9";
 choices[17][3] = "De 7 a 11";
 answers[17] = 2;
 units[17] = ['34', '84'];
 blocks[17] = ['B1', 'B3'];
 comments[17] = "Id Pregunta: 955. Metodologias &aacute;giles";
 preguntaids[17] = 955


//  Id pregunta: 7025 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Qu&eacute; diferencia existe entre factores de &eacute;xito y objetivos de la organizaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Los factores de &eacute;xito son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los objetivos son los &ldquo;medios&rdquo; para lograr dicho &eacute;xito";
 choices[18][1] = "Los objetivos son los estudios de mercado mientras que los factores de &eacute;xito son las variaciones en los mercados que modifican dichos estudios";
 choices[18][2] = "Los objetivos son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los factores de &eacute;xito son los &ldquo;medios&rdquo; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 2;
 units[18] = ['83'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 7025. ";
 preguntaids[18] = 7025


//  Id pregunta: 1036 Año de creación de pregunta: 2016
 questions[19]= "20)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[19]= new Array();
 choices[19][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[19][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[19][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[19][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[19] = 1;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 1036. Ley 40/2015";
 preguntaids[19] = 1036


//  Id pregunta: 962 Año de creación de pregunta: 2016
 questions[20]= "21)  La Ley 40/2015 se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "la Administraci&oacute;n General del Estado";
 choices[20][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[20][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[20][3] = "el sector p&uacute;blico y privado institucional";
 answers[20] = 3;
 units[20] = ['4', '7', '8', '9'];
 blocks[20] = ['A1', 'A2'];
 comments[20] = "Id Pregunta: 962. Ley 40/2015";
 preguntaids[20] = 962


//  Id pregunta: 4517 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[21]= new Array();
 choices[21][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[21][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[21][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[21][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[21] = 0;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4517. ";
 preguntaids[21] = 4517


//  Id pregunta: 10596 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[22]= new Array();
 choices[22][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[22][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[22][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[22][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[22] = 0;
 units[22] = ['101'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10596. ";
 preguntaids[22] = 10596


//  Id pregunta: 7551 Año de creación de pregunta: 2010
 questions[23]= "24)  En el sistema operativo UNIX-LINUX, el t&eacute;rmino &laquo;uucp&raquo; hace referencia a:";
 choices[23]= new Array();
 choices[23][0] = "Un programa dise&ntilde;ado para emular terminales ASCII.";
 choices[23][1] = "Un procesador frontal para correo que ofrece caracter&iacute;sticas avanzadas de interfaz de usuario.";
 choices[23][2] = "Un paquete completo de movimiento de datos que puede transferir ficheros ASCII y binarios entre m&aacute;quinas, adem&aacute;s de controlar la ejecuci&oacute;n de &oacute;rdenes sobre una m&aacute;quina remota.";
 choices[23][3] = "Una base de datos que contiene descripciones para secuencias de escape que pueden cambiar el color de la pantalla.";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7551. Map 2005";
 preguntaids[23] = 7551


//  Id pregunta: 10808 Año de creación de pregunta: 2015
 questions[24]= "25)  El Algoritmo A* es un m&eacute;todo de b&uacute;squeda:";
 choices[24]= new Array();
 choices[24][0] = "De mejora iterativa";
 choices[24][1] = "Ciego";
 choices[24][2] = "Heur&iacute;stico";
 choices[24][3] = "a) y c) son correctos";
 answers[24] = 2;
 units[24] = ['67'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10808. ";
 preguntaids[24] = 10808


//  Id pregunta: 10962 Año de creación de pregunta: 2015
 questions[25]= "26)  Implementaci&oacute;n de servicios compartidos: Los Organismos que van a utilizar un servicio compartido";
 choices[25]= new Array();
 choices[25][0] = "Deben firmar un convenio con la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de la Comunicaci&oacute;n";
 choices[25][1] = "Pueden solicitar prestaciones &quot;ad hoc&quot;";
 choices[25][2] = "Deben usar el presupuesto de la secci&oacute;n 31 para Gastos de Diversos Ministerios";
 choices[25][3] = "Generalmente tienen que contribuir econ&oacute;micamente al servicio";
 answers[25] = 3;
 units[25] = ['47'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 10962. ";
 preguntaids[25] = 10962


//  Id pregunta: 7332 Año de creación de pregunta: 2010
 questions[26]= "27)  El modelo de McCall de calidad de software define:";
 choices[26]= new Array();
 choices[26][0] = "Caracter&iacute;sticas del proyecto y del producto generado";
 choices[26][1] = "Caracter&iacute;sticas operacionales, de modificaci&oacute;n y de transici&oacute;n o conversi&oacute;n";
 choices[26][2] = "Caracter&iacute;sticas de an&aacute;lisis, desarrollo y pruebas";
 choices[26][3] = "Caracter&iacute;sticas de accesibilidad y rendimiento";
 answers[26] = 1;
 units[26] = ['92'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 7332. ";
 preguntaids[26] = 7332


//  Id pregunta: 10870 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[27]= new Array();
 choices[27][0] = "MAC";
 choices[27][1] = "Segmento";
 choices[27][2] = "Paquete";
 choices[27][3] = "Trama";
 answers[27] = 3;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10870. ";
 preguntaids[27] = 10870


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[28]= "29)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[28]= new Array();
 choices[28][0] = "Un Reglamento.";
 choices[28][1] = "Un Decreto.";
 choices[28][2] = "Una Ley.";
 choices[28][3] = "Un Real-Decreto.";
 answers[28] = 2;
 units[28] = ['5'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[28] = 190


//  Id pregunta: 2015 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[29]= new Array();
 choices[29][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[29][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[29][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[29][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[29] = 1;
 units[29] = ['36', '45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2015. ";
 preguntaids[29] = 2015


//  Id pregunta: 6071 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[30]= new Array();
 choices[30][0] = "RMI";
 choices[30][1] = "JAXP";
 choices[30][2] = "JNDI";
 choices[30][3] = "JNI";
 answers[30] = 3;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6071. Examen TIC A1 MAP 2007";
 preguntaids[30] = 6071


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[31]= "32)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[31]= new Array();
 choices[31][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[31][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[31][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[31][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[31] = 3;
 units[31] = ['1'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 80. Constituci&oacute;n de 1978";
 preguntaids[31] = 80


//  Id pregunta: 6947 Año de creación de pregunta: 2010
 questions[32]= "33)  La Orden PRE/878/2010 regula";
 choices[32]= new Array();
 choices[32][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[32][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[32][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[32][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[32] = 3;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 6947. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";
 preguntaids[32] = 6947


//  Id pregunta: 5178 Año de creación de pregunta: 2003
 questions[33]= "34)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencias:";
 choices[33]= new Array();
 choices[33][0] = "2,4 GHz y 5 GHz";
 choices[33][1] = "10 MHz y 100 MHz";
 choices[33][2] = "1 MHz y 10 MHz";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = 0;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5178. ";
 preguntaids[33] = 5178


//  Id pregunta: 9662 Año de creación de pregunta: 2014
 questions[34]= "35)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n.";
 choices[34]= new Array();
 choices[34][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[34][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[34][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica.";
 choices[34][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[34] = 2;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 9662. Examen TIC A1 2013";
 preguntaids[34] = 9662


//  Id pregunta: 1838 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es el tama&ntilde;o de bloque del algoritmo DES?";
 choices[35]= new Array();
 choices[35][0] = "64 bits";
 choices[35][1] = "56 bits";
 choices[35][2] = "128 bits";
 choices[35][3] = "256 bits";
 answers[35] = 0;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1838. ";
 preguntaids[35] = 1838


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[36]= "37)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[36]= new Array();
 choices[36][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[36][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[36][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[36][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[36] = 3;
 units[36] = ['43'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 586. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[36] = 586


//  Id pregunta: 9904 Año de creación de pregunta: 2015
 questions[37]= "38)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[37]= new Array();
 choices[37][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[37][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[37][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[37][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[37] = 1;
 units[37] = ['7', '19'];
 blocks[37] = ['A2', 'A4'];
 comments[37] = "Id Pregunta: 9904. ";
 preguntaids[37] = 9904


//  Id pregunta: 1124 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes NO es una distribuci&oacute;n LINUX?";
 choices[38]= new Array();
 choices[38][0] = "Fedora.";
 choices[38][1] = "Mandriva.";
 choices[38][2] = "Solaris.";
 choices[38][3] = "Ubuntu.";
 answers[38] = 2;
 units[38] = ['57'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1124. ";
 preguntaids[38] = 1124


//  Id pregunta: 9750 Año de creación de pregunta: 2014
 questions[39]= "40)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[39]= new Array();
 choices[39][0] = "fd00::/8";
 choices[39][1] = "fe00::/64";
 choices[39][2] = "fe80::/64";
 choices[39][3] = "No existen las direcciones link-local en IPv6";
 answers[39] = 2;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9750. ";
 preguntaids[39] = 9750


//  Id pregunta: 10608 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n la Ley 9/2014, es un derecho del usuario de teleco:";
 choices[40]= new Array();
 choices[40][0] = "La desconexi&oacute;n de cualquier servicio, previa solicitud.";
 choices[40][1] = "Disponer de un 902 o comunicaci&oacute;n electr&oacute;nica como servicio de atenci&oacute;n al cliente.";
 choices[40][2] = "La continuidad del servicio.";
 choices[40][3] = "A ser informado, pleno pago de la tasa correspondiente, de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 answers[40] = 2;
 units[40] = ['121'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10608. Articulo 47";
 preguntaids[40] = 10608


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[41]= new Array();
 choices[41][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[41][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[41][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[41][3] = "El Instituto de la Mujer de Extremadura.";
 answers[41] = 3;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 360. Junta de Extremadura A1 2015";
 preguntaids[41] = 360


//  Id pregunta: 5095 Año de creación de pregunta: 2004
 questions[42]= "43)  El protocolo ARP";
 choices[42]= new Array();
 choices[42][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[42][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[42][2] = "Se utiliza en routers y bridges";
 choices[42][3] = "A y B son correctas";
 answers[42] = 0;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5095. ";
 preguntaids[42] = 5095


//  Id pregunta: 2129 Año de creación de pregunta: 2002
 questions[43]= "44)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[43]= new Array();
 choices[43][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[43][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[43][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[43][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[43] = 3;
 units[43] = ['38'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2129. ";
 preguntaids[43] = 2129


//  Id pregunta: 5893 Año de creación de pregunta: 2007
 questions[44]= "45)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[44]= new Array();
 choices[44][0] = "1 y 5.";
 choices[44][1] = "1 y 8.";
 choices[44][2] = "0 y 8.";
 choices[44][3] = "0 y 5.";
 answers[44] = 3;
 units[44] = ['33'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 5893. Castilla la Mancha B 2006";
 preguntaids[44] = 5893


//  Id pregunta: 1439 Año de creación de pregunta: 2016
 questions[45]= "46)  A efectos de la LOPD art&iacute;culo 3, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el :";
 choices[45]= new Array();
 choices[45][0] = "Encargado del tratamiento.";
 choices[45][1] = "Afectado o interesado.";
 choices[45][2] = "Responsable del fichero o tratamiento.";
 choices[45][3] = "Decisor del tratamiento.";
 answers[45] = 2;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 1439. ";
 preguntaids[45] = 1439


//  Id pregunta: 3541 Año de creación de pregunta: 2004
 questions[46]= "47)  Son elementos de un DFD:";
 choices[46]= new Array();
 choices[46][0] = "Eventos, nodos, entidades externas, flujos de datos";
 choices[46][1] = "Eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[46][2] = "Entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[46][3] = "Entidades externas, nodos, flujos de datos";
 answers[46] = 2;
 units[46] = ['86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3541. Similar a examen TIC MAP A 2004";
 preguntaids[46] = 3541


//  Id pregunta: 10911 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[47]= new Array();
 choices[47][0] = "WEP";
 choices[47][1] = "PSK";
 choices[47][2] = "EAP";
 choices[47][3] = "WPA";
 answers[47] = 3;
 units[47] = ['108'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10911. ";
 preguntaids[47] = 10911


//  Id pregunta: 3422 Año de creación de pregunta: 2006
 questions[48]= "49)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[48]= new Array();
 choices[48][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[48][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[48][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[48][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[48] = 0;
 units[48] = ['70'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3422. &quot;blended learning&quot; = aprendizaje semipresencial";
 preguntaids[48] = 3422


//  Id pregunta: 9280 Año de creación de pregunta: 2014
 questions[49]= "50)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[49]= new Array();
 choices[49][0] = "Cat&aacute;logo de clases.";
 choices[49][1] = "Cat&aacute;logo de entidades";
 choices[49][2] = "Cat&aacute;logo de miembros.";
 choices[49][3] = "Cat&aacute;logo de interfaces.";
 answers[49] = 0;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 9280. Examen TIC A2 2013. Promocion interna";
 preguntaids[49] = 9280


//  Id pregunta: 7563 Año de creación de pregunta: 2010
 questions[50]= "51)  En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[50]= new Array();
 choices[50][0] = "De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute; el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado.";
 choices[50][1] = "El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os.";
 choices[50][2] = "En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido.";
 choices[50][3] = "El responsable de seguridad se encargar&aacute; de revisar al menos una vez al mes la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados.";
 answers[50] = 0;
 units[50] = ['35'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 7563. Similar a Map 2005";
 preguntaids[50] = 7563


//  Id pregunta: 2279 Año de creación de pregunta: 2002
 questions[51]= "52)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[51]= new Array();
 choices[51][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[51][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[51][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[51][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[51] = 1;
 units[51] = ['35'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2279. ";
 preguntaids[51] = 2279


//  Id pregunta: 6068 Año de creación de pregunta: 2003
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n deDatos, de conformidad con el art&iacute;culo 38 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n deDatos de car&aacute;cter personal:";
 choices[52]= new Array();
 choices[52][0] = "Un magistrado del Tribunal Constitucional.";
 choices[52][1] = "Un senador.";
 choices[52][2] = "Un representante de los usuarios y consumidores.";
 choices[52][3] = "Un miembro de la Real Academia de la Historia.";
 answers[52] = 0;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 6068. TIC B 2007";
 preguntaids[52] = 6068


//  Id pregunta: 9356 Año de creación de pregunta: 2014
 questions[53]= "54)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[53]= new Array();
 choices[53][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[53][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[53][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.";
 choices[53][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[53] = 3;
 units[53] = ['114'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9356. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[53] = 9356


//  Id pregunta: 2181 Año de creación de pregunta: 2002
 questions[54]= "55)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[54]= new Array();
 choices[54][0] = "Volumen de datos transmitidos";
 choices[54][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[54][2] = "Protocolo de comunicaci&oacute;n";
 choices[54][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[54] = 2;
 units[54] = ['36', '45'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2181. ";
 preguntaids[54] = 2181


//  Id pregunta: 9589 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[55]= new Array();
 choices[55][0] = "Los ficheros abiertos.";
 choices[55][1] = "El escritorio.";
 choices[55][2] = "Los procesos.";
 choices[55][3] = "Los puertos TCP/IP.";
 answers[55] = 2;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9589. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[55] = 9589


//  Id pregunta: 966 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[56]= new Array();
 choices[56][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[56][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[56][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[56][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[56] = 2;
 units[56] = ['4', '7', '8', '9'];
 blocks[56] = ['A1', 'A2'];
 comments[56] = "Id Pregunta: 966. Ley 40/2015";
 preguntaids[56] = 966


//  Id pregunta: 6321 Año de creación de pregunta: 2003
 questions[57]= "58)  Se&ntilde;ale la falsa:";
 choices[57]= new Array();
 choices[57][0] = "Las m&eacute;tricas de complejidad intentan principalmente evaluar la posible mantenibilidad del software.";
 choices[57][1] = "Las t&eacute;cnicas de Halstead y McCabe se engloban dentro de estas m&eacute;tricas.";
 choices[57][2] = "La complejidad ciclom&aacute;tica de McCabe es una medida cualitativa de la complejidad l&oacute;gica de un programa";
 choices[57][3] = "La t&eacute;cnica de Halstead define los token, como la unidad sint&aacute;ctica m&aacute;s elemental distinguible por un compilador.";
 answers[57] = 2;
 units[57] = ['93'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6321. ";
 preguntaids[57] = 6321


//  Id pregunta: 9117 Año de creación de pregunta: 2014
 questions[58]= "59)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[58]= new Array();
 choices[58][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[58][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[58][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[58][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[58] = 3;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9117. Examen TIC A2 2013";
 preguntaids[58] = 9117


//  Id pregunta: 8745 Año de creación de pregunta: 2013
 questions[59]= "60)  En cuanto a la dependencia entre activos, a la hora de evaluar riesgos:";
 choices[59]= new Array();
 choices[59][0] = "La seguridad del activo superior depende de la del inferior.";
 choices[59][1] = "El activo superior puede ser atacado a trav&eacute;s del inferior.";
 choices[59][2] = "La relaci&oacute;n indica que el activo inferior es necesario para que el superior funcione.";
 choices[59][3] = "La a) y la b) son correctas.";
 answers[59] = 3;
 units[59] = ['45'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 8745. ";
 preguntaids[59] = 8745


//  Id pregunta: 5610 Año de creación de pregunta: 2007
 questions[60]= "61)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[60]= new Array();
 choices[60][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[60][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[60][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[60][3] = "&Uacute;nicamente el responsable del fichero";
 answers[60] = 2;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 5610. ";
 preguntaids[60] = 5610


//  Id pregunta: 9541 Año de creación de pregunta: 2014
 questions[61]= "62)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[61]= new Array();
 choices[61][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[61][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[61][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[61][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[61] = 1;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 9541. Art&iacute;culo 11.2 d) de la Ley Org&aacute;nica 15/1999";
 preguntaids[61] = 9541


//  Id pregunta: 3705 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l no es una caracter&iacute;stica com&uacute;n a todas las metodolog&iacute;as?:";
 choices[62]= new Array();
 choices[62][0] = "Diccionario de datos";
 choices[62][1] = "Prototipado";
 choices[62][2] = "Cubre todos los aspectos de un sistema de aplicaci&oacute;n: desde el organizativo , hasta el sistema t&eacute;cnico de apoyo";
 choices[62][3] = "An&aacute;lisis de riesgo";
 answers[62] = 1;
 units[62] = ['90', '86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3705. ";
 preguntaids[62] = 3705


//  Id pregunta: 6629 Año de creación de pregunta: 2009
 questions[63]= "64)  De acuerdo con la LOPD, se&ntilde;ale el tipo de fichero que se incluye en el alcance de la Ley";
 choices[63]= new Array();
 choices[63][0] = "Ficheros realizados o mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[63][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[63][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada. No obstante el responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[63][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente";
 answers[63] = 3;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 6629. MAP 2008 A2";
 preguntaids[63] = 6629


//  Id pregunta: 6608 Año de creación de pregunta: 2009
 questions[64]= "65)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[64]= new Array();
 choices[64][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[64][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[64][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[64][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[64] = 1;
 units[64] = ['77'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 6608. ";
 preguntaids[64] = 6608


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[65]= "66)  En las Administraciones P&uacute;blicas...";
 choices[65]= new Array();
 choices[65][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[65][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[65][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[65][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[65] = 0;
 units[65] = ['11'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 271. Presupuestos generales";
 preguntaids[65] = 271


//  Id pregunta: 2964 Año de creación de pregunta: 2002
 questions[66]= "67)  Las modulaciones angulares, respecto a las modulaciones lineales:";
 choices[66]= new Array();
 choices[66][0] = "Dan peor discriminaci&oacute;n en contra del ruido y la interferencia.";
 choices[66][1] = "Utilizan menor ancho de banda.";
 choices[66][2] = "Utilizan mayor energ&iacute;a para transmitir.";
 choices[66][3] = "Dan mejor discriminaci&oacute;n en contra del ruido y la interferencia.";
 answers[66] = 3;
 units[66] = ['108', '117', '118'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 2964. ";
 preguntaids[66] = 2964


//  Id pregunta: 5242 Año de creación de pregunta: 2006
 questions[67]= "68)  &iquest;Cu&aacute;l es el ancho de banda de separaci&oacute;n entre las portadoras ascendentes y descendentes en GSM?";
 choices[67]= new Array();
 choices[67][0] = "15 MHz";
 choices[67][1] = "25 MHz";
 choices[67][2] = "35 MHz";
 choices[67][3] = "45 MHz";
 answers[67] = 3;
 units[67] = ['117'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5242. ";
 preguntaids[67] = 5242


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[68]= "69)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[68]= new Array();
 choices[68][0] = "La Ley Org&aacute;nica 2/2011";
 choices[68][1] = "La Ley Org&aacute;nica 2/2012";
 choices[68][2] = "La Ley Org&aacute;nica 3/2012";
 choices[68][3] = "La Ley Org&aacute;nica 2/2002";
 answers[68] = 1;
 units[68] = ['12'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 336. Modelo econ&oacute;mico";
 preguntaids[68] = 336


//  Id pregunta: 10212 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?";
 choices[69]= new Array();
 choices[69][0] = "8";
 choices[69][1] = "10";
 choices[69][2] = "11";
 choices[69][3] = "12";
 answers[69] = 3;
 units[69] = ['43'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 10212. ";
 preguntaids[69] = 10212


//  Id pregunta: 7597 Año de creación de pregunta: 2010
 questions[70]= "71)  El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal establece para los ficheros temporales que:";
 choices[70]= new Array();
 choices[70][0] = "No se les aplica el citado reglamento, dado que se borran tras su utilizaci&oacute;n temporal.";
 choices[70][1] = "Deber&aacute;n cumplir el nivel de seguridad que les corresponda con arreglo a los criterios establecidos en el Reglamento.";
 choices[70][2] = "Les corresponde un nivel de seguridad bajo.";
 choices[70][3] = "Se mantendr&aacute;n almacenados durante un a&ntilde;o, incluidas sus copias de seguridad.";
 answers[70] = 1;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 7597. Similar a Map 2006";
 preguntaids[70] = 7597


//  Id pregunta: 10784 Año de creación de pregunta: 2015
 questions[71]= "72)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[71][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[71][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[71][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[71] = 2;
 units[71] = ['26'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 10784. ";
 preguntaids[71] = 10784


//  Id pregunta: 4235 Año de creación de pregunta: 2006
 questions[72]= "73)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[72]= new Array();
 choices[72][0] = "Norma ISO 9001";
 choices[72][1] = "norma ISO 9000-2003";
 choices[72][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[72][3] = "norma ISO 9000-2001";
 answers[72] = 2;
 units[72] = ['93'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4235. ";
 preguntaids[72] = 4235


//  Id pregunta: 1278 Año de creación de pregunta: 2016
 questions[73]= "74)  Conforme a la Ley 59/2003, de Firma electr&oacute;nica, el prestador de servicios de certificaci&oacute;n que vaya a cesar en su actividad deber&aacute; comunicarlo a los firmantes que utilicen los certificados electr&oacute;nicos que haya expedido as&iacute; como a los solicitantes de certificados expedidos a favor de personas jur&iacute;dicas, con una antelaci&oacute;n al cese efectivo de la actividad, como m&iacute;nimo de:";
 choices[73]= new Array();
 choices[73][0] = "AI menos seis meses.";
 choices[73][1] = "Un a&ntilde;o natural.";
 choices[73][2] = "AI menos dos meses.";
 choices[73][3] = "AI menos dos semanas.";
 answers[73] = 2;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1278. ";
 preguntaids[73] = 1278


//  Id pregunta: 6806 Año de creación de pregunta: 2010
 questions[74]= "75)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[74]= new Array();
 choices[74][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[74][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[74][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[74][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[74] = 2;
 units[74] = ['101'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 6806. TIC A 2009";
 preguntaids[74] = 6806


