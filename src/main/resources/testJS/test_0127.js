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
//  Id pregunta: 2813 Año de creación de pregunta: 2002
 questions[0]= "1)  En el modelo cliente/servidor:";
 choices[0]= new Array();
 choices[0][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[0][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[0][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[0][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[0] = 0;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2813. ";
 preguntaids[0] = 2813


//  Id pregunta: 3291 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[1]= new Array();
 choices[1][0] = "Lynx";
 choices[1][1] = "Epiphany";
 choices[1][2] = "Firefox";
 choices[1][3] = "Internet Explorer";
 answers[1] = 3;
 units[1] = ['66'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3291. ";
 preguntaids[1] = 3291


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[2]= new Array();
 choices[2][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[2][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[2][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[2][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[2] = 1;
 units[2] = ['11'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 302. Presupuestos generales";
 preguntaids[2] = 302


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[3]= "4)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[3]= new Array();
 choices[3][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[3][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[3][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[3][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[3] = 0;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[3] = 1023


//  Id pregunta: 4635 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n es m&aacute;s acorde con la tecnolog&iacute;a GPRS?:";
 choices[4]= new Array();
 choices[4][0] = "64 kbps";
 choices[4][1] = "256 kbps";
 choices[4][2] = "384 kbps";
 choices[4][3] = "115 kbps";
 answers[4] = 3;
 units[4] = ['117'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4635. ";
 preguntaids[4] = 4635


//  Id pregunta: 9025 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[5]= new Array();
 choices[5][0] = "Metacity de GNOME";
 choices[5][1] = "KWIN de KDE";
 choices[5][2] = "GTK de CDE";
 choices[5][3] = "Enlightenment de GNOME";
 answers[5] = 2;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9025. Examen TIC A1 2013";
 preguntaids[5] = 9025


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[6]= "7)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[6]= new Array();
 choices[6][0] = "un art&iacute;culo";
 choices[6][1] = "dos art&iacute;culos";
 choices[6][2] = "tres art&iacute;culos";
 choices[6][3] = "cuatro art&iacute;culos";
 answers[6] = 1;
 units[6] = ['7'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 219. Ley 39/2015";
 preguntaids[6] = 219


//  Id pregunta: 5677 Año de creación de pregunta: 2007
 questions[7]= "8)  La firma digital garantiza:";
 choices[7]= new Array();
 choices[7][0] = "La autenticidad, la integridad y el no repudio en destino.";
 choices[7][1] = "La autenticidad, la integridad y el no repudio en origen.";
 choices[7][2] = "La autenticidad, la integridad y la confidencialidad.";
 choices[7][3] = "La confidencialidad.";
 answers[7] = 1;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5677. ";
 preguntaids[7] = 5677


//  Id pregunta: 10523 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Qu&eacute; planes nacionales se derivan de la Ley General de Telecomunicaciones?";
 choices[8]= new Array();
 choices[8][0] = "Numeraci&oacute;n y direccionamiento";
 choices[8][1] = "Denominaci&oacute;n";
 choices[8][2] = "Las dos anteriores";
 choices[8][3] = "Ninguna";
 answers[8] = 2;
 units[8] = ['121'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10523. ";
 preguntaids[8] = 10523


//  Id pregunta: 5164 Año de creación de pregunta: 2003
 questions[9]= "10)  Con la API de Servlet con respecto a cookies se puede:";
 choices[9]= new Array();
 choices[9][0] = "S&oacute;lo se pueden leer cookies";
 choices[9][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[9][2] = "Se pueden crear cookies";
 choices[9][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[9] = 2;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5164. ";
 preguntaids[9] = 5164


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[10]= new Array();
 choices[10][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[10][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[10][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[10][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[10] = 0;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 47. Constituci&oacute;n de 1978";
 preguntaids[10] = 47


//  Id pregunta: 9898 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; Ley establece el Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas?";
 choices[11]= new Array();
 choices[11][0] = "Ley 40/2015.";
 choices[11][1] = "Ley 40/2014.";
 choices[11][2] = "Ley 39/2015.";
 choices[11][3] = "Ley 41/2015.";
 answers[11] = 2;
 units[11] = ['7', '19'];
 blocks[11] = ['A2', 'A4'];
 comments[11] = "Id Pregunta: 9898. ";
 preguntaids[11] = 9898


//  Id pregunta: 10933 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[12]= new Array();
 choices[12][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a 150.000 euros";
 choices[12][1] = "cuando al menos el 40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de 5.000 euros.";
 choices[12][2] = "No tienen que cumplir la ley de transparencia";
 choices[12][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[12] = 1;
 units[12] = ['22'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 10933. ";
 preguntaids[12] = 10933


//  Id pregunta: 4250 Año de creación de pregunta: 2006
 questions[13]= "14)  La ingenier&iacute;a inversa:";
 choices[13]= new Array();
 choices[13][0] = "Seg&uacute;n el IEEE, es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original a un mayor nivel de abstracci&oacute;n";
 choices[13][1] = "Es sin&oacute;nimo de Reingenier&iacute;a";
 choices[13][2] = "Es sin&oacute;nimo de Forward Engineering";
 choices[13][3] = "El IEEE no proporciona una definici&oacute;n de Ingenier&iacute;a Inversa";
 answers[13] = 0;
 units[13] = ['96', '97'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4250. ";
 preguntaids[13] = 4250


//  Id pregunta: 1762 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale qui&eacute;n gestiona la ra&iacute;z del DNS:";
 choices[14]= new Array();
 choices[14][0] = "IANA";
 choices[14][1] = "ESNIC";
 choices[14][2] = "INIC";
 choices[14][3] = "ITU";
 answers[14] = 0;
 units[14] = ['103'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1762. ";
 preguntaids[14] = 1762


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[15]= "16)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[15]= new Array();
 choices[15][0] = "De las disposiciones favorables.";
 choices[15][1] = "De las disposiciones sancionadoras no favorables.";
 choices[15][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[15][3] = "Las respuestas b) y c) son correctas.";
 answers[15] = 3;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 79. Constituci&oacute;n de 1978";
 preguntaids[15] = 79


//  Id pregunta: 9614 Año de creación de pregunta: 2014
 questions[16]= "17)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[16][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[16][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[16][3] = "Todas las respuestas anteriores son falsas";
 answers[16] = 2;
 units[16] = ['41'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 9614. Consultar Art. 100 del Real Decreto Legislativo 1/1996";
 preguntaids[16] = 9614


//  Id pregunta: 10025 Año de creación de pregunta: 2015
 questions[17]= "18)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[17]= new Array();
 choices[17][0] = "Consultor.";
 choices[17][1] = "Analista.";
 choices[17][2] = "Programador.";
 choices[17][3] = "Jefe de Proyecto.";
 answers[17] = 0;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10025. Examen TIC A2 2014";
 preguntaids[17] = 10025


//  Id pregunta: 3021 Año de creación de pregunta: 2002
 questions[18]= "19)  RSA es:";
 choices[18]= new Array();
 choices[18][0] = "Un algoritmo criptogr&aacute;fico";
 choices[18][1] = "Un mecanismo de intercambio de claves";
 choices[18][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[18][3] = "Una funcion resumen";
 answers[18] = 0;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3021. ";
 preguntaids[18] = 3021


//  Id pregunta: 3115 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; es MIDI?:";
 choices[19]= new Array();
 choices[19][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[19][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[19][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[19][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[19] = 2;
 units[19] = ['52'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3115. ";
 preguntaids[19] = 3115


//  Id pregunta: 2313 Año de creación de pregunta: 2002
 questions[20]= "21)  Un activo es, de acuerdo a MAGERIT:";
 choices[20]= new Array();
 choices[20][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[20][1] = "Resultado de una agresi&oacute;n";
 choices[20][2] = "Evento que desencadena un incidente";
 choices[20][3] = "Ninguno de los anteriores";
 answers[20] = 3;
 units[20] = ['36'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2313. ";
 preguntaids[20] = 2313


//  Id pregunta: 8538 Año de creación de pregunta: 2011
 questions[21]= "22)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Infracci&oacute;n leve";
 choices[21][1] = "Infracci&oacute;n grave";
 choices[21][2] = "Infracci&oacute;n muy grave";
 choices[21][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[21] = 0;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 8538. ";
 preguntaids[21] = 8538


//  Id pregunta: 8432 Año de creación de pregunta: 2011
 questions[22]= "23)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[22]= new Array();
 choices[22][0] = "El &oacute;rgano titular de la sede";
 choices[22][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[22][2] = "El &oacute;rgano que origine la informaci&oacute;n que se deba incluir en la sede judicial electr&oacute;nica";
 choices[22][3] = "Ninguno de los anteriores";
 answers[22] = 2;
 units[22] = ['2'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 8432. ";
 preguntaids[22] = 8432


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[23]= "24)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[23]= new Array();
 choices[23][0] = "Dos.";
 choices[23][1] = "Cuatro.";
 choices[23][2] = "Cinco.";
 choices[23][3] = "Tres.";
 answers[23] = 1;
 units[23] = ['11'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 307. Presupuestos generales";
 preguntaids[23] = 307


//  Id pregunta: 7405 Año de creación de pregunta: 2010
 questions[24]= "25)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[24]= new Array();
 choices[24][0] = "Bot";
 choices[24][1] = "Virus";
 choices[24][2] = "Troyano";
 choices[24][3] = "Gusano";
 answers[24] = 2;
 units[24] = ['120'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7405. Examen TIC B 2009";
 preguntaids[24] = 7405


//  Id pregunta: 7862 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[25]= new Array();
 choices[25][0] = "Exclusivamente el sistema ETRS89.";
 choices[25][1] = "Los sistemas ED50 y ETRS89.";
 choices[25][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[25][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[25] = 2;
 units[25] = ['71'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7862. Examen TIC A1 2010";
 preguntaids[25] = 7862


//  Id pregunta: 9454 Año de creación de pregunta: 2014
 questions[26]= "27)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[26]= new Array();
 choices[26][0] = "se crea en el RD 1671/2009 (art. 15)";
 choices[26][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[26][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[26][3] = "Todas las anteriores son ciertas";
 answers[26] = 3;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 9454. ";
 preguntaids[26] = 9454


//  Id pregunta: 3861 Año de creación de pregunta: 2002
 questions[27]= "28)  Indicar cu&aacute;l de los siguientes atributos no debe resultar de la descomposici&oacute;n modular del sistema:";
 choices[27]= new Array();
 choices[27][0] = "M&aacute;ximo acoplamiento.";
 choices[27][1] = "Interfaz bien definida.";
 choices[27][2] = "M&aacute;xima capacidad de reutilizaci&oacute;n.";
 choices[27][3] = "Introducci&oacute;n de una jerarqu&iacute;a de modo que los m&oacute;dulos superiores de la misma se sirvan de los inferiores, es decir, requieran de la tarea desarrollada por &eacute;stos, pero nunca al contrario.";
 answers[27] = 0;
 units[27] = ['89'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3861. ";
 preguntaids[27] = 3861


//  Id pregunta: 9068 Año de creación de pregunta: 2014
 questions[28]= "29)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[28]= new Array();
 choices[28][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[28][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[28][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[28][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[28] = 2;
 units[28] = ['71'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9068. ";
 preguntaids[28] = 9068


//  Id pregunta: 2585 Año de creación de pregunta: 2009
 questions[29]= "30)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[29]= new Array();
 choices[29][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[29][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[29][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[29][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[29] = 0;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 2585. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";
 preguntaids[29] = 2585


//  Id pregunta: 5114 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Qu&eacute; es JavaScript?";
 choices[30]= new Array();
 choices[30][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[30][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[30][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI";
 choices[30][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[30] = 3;
 units[30] = ['62'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5114. ";
 preguntaids[30] = 5114


//  Id pregunta: 10555 Año de creación de pregunta: 2015
 questions[31]= "32)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[31]= new Array();
 choices[31][0] = "Solo 1";
 choices[31][1] = "Solo 2";
 choices[31][2] = "Ambas";
 choices[31][3] = "Ninguna";
 answers[31] = 2;
 units[31] = ['101'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10555. ";
 preguntaids[31] = 10555


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[32]= "33)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[32]= new Array();
 choices[32][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[32][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[32][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[32][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[32] = 0;
 units[32] = ['12'];
 blocks[32] = ['A3'];
 comments[32] = "Id Pregunta: 342. Modelo econ&oacute;mico";
 preguntaids[32] = 342


//  Id pregunta: 10867 Año de creación de pregunta: 2015
 questions[33]= "34)  El comando top de Linux permite:";
 choices[33]= new Array();
 choices[33][0] = "Moverse por una b&uacute;squeda";
 choices[33][1] = "Acceder al directorio inmediatamente inferior";
 choices[33][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[33][3] = "Todas las anteriores son falsas";
 answers[33] = 2;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10867. ";
 preguntaids[33] = 10867


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[34]= new Array();
 choices[34][0] = "Indirecta.";
 choices[34][1] = "Directa.";
 choices[34][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[34][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[34] = 1;
 units[34] = ['14'];
 blocks[34] = ['A3'];
 comments[34] = "Id Pregunta: 370. Pol&iacute;ticas de igualdad";
 preguntaids[34] = 370


//  Id pregunta: 1698 Año de creación de pregunta: 2016
 questions[35]= "36)  En terminolog&iacute;a de bases de datos, el lenguaje de definici&oacute;n de datos (LDD) es empleado para:";
 choices[35]= new Array();
 choices[35][0] = "Capacitar a los usuarios a acceder o manipular los datos seg&uacute;n est&eacute;n organizados por su modelo de datos.";
 choices[35][1] = "Conceder o suprimir privilegios a los usuarios, es decir, el control del acceso a los datos.";
 choices[35][2] = "Determinar la organizaci&oacute;n interna del modelo l&oacute;gico de los datos en una base de datos.";
 choices[35][3] = "Representar el flujo de datos entre procesos y almacenes de datos l&oacute;gicos.";
 answers[35] = 2;
 units[35] = ['61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1698. ";
 preguntaids[35] = 1698


//  Id pregunta: 6129 Año de creación de pregunta: 2003
 questions[36]= "37)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola deProtecci&oacute;n de Datos";
 choices[36]= new Array();
 choices[36][0] = "Un experto en la materia";
 choices[36][1] = "Un miembro de la Real Academia de la Historia";
 choices[36][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica";
 choices[36][3] = "Un representante de la Administraci&oacute;n Local";
 answers[36] = 2;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 6129. Examen TIC A1 MAP 2007";
 preguntaids[36] = 6129


//  Id pregunta: 6439 Año de creación de pregunta: 2003
 questions[37]= "38)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[37]= new Array();
 choices[37][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[37][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[37][2] = "Las respuestas a) y b) son verdaderas";
 choices[37][3] = "Ninguna es verdadera";
 answers[37] = 2;
 units[37] = ['112'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6439. ";
 preguntaids[37] = 6439


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[38]= "39)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[38]= new Array();
 choices[38][0] = "El Gobierno.";
 choices[38][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[38][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[38][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[38] = 2;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 33. Constituci&oacute;n de 1978";
 preguntaids[38] = 33


//  Id pregunta: 2187 Año de creación de pregunta: 2002
 questions[39]= "40)  Entre las variables que habitualmente se usan para evaluar el comportamiento de un sistema inform&aacute;tico se encuentra el tama&ntilde;o del quantum definido como:";
 choices[39]= new Array();
 choices[39][0] = "La cantidad de tiempo de uso ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[39][1] = "El intervalo de tiempo durante el cu&aacute;l se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 choices[39][2] = "El porcentaje de tiempo que los distintos dispositivos del sistema se usan en tareas no directamente imputables a ninguno de los trabajos en curso";
 choices[39][3] = "El porcentaje de tiempo de uso de un componente del sistema inform&aacute;tico";
 answers[39] = 0;
 units[39] = ['39'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2187. ";
 preguntaids[39] = 2187


//  Id pregunta: 1330 Año de creación de pregunta: 2016
 questions[40]= "41)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[40]= new Array();
 choices[40][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[40][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[40][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[40][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[40] = 0;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1330. ";
 preguntaids[40] = 1330


//  Id pregunta: 7268 Año de creación de pregunta: 2010
 questions[41]= "42)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[41]= new Array();
 choices[41][0] = "Tecnolog&iacute;a HSDPA";
 choices[41][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[41][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[41][3] = "Todas las respuestas anteriores son correctas";
 answers[41] = 3;
 units[41] = ['117'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7268. ";
 preguntaids[41] = 7268


//  Id pregunta: 1909 Año de creación de pregunta: 2016
 questions[42]= "43)  La MTU del enlace es igual al:";
 choices[42]= new Array();
 choices[42][0] = "AI valor de MTU m&aacute;s alto de los posibles a lo largo de una ruta";
 choices[42][1] = "AI valor de MTU m&aacute;s bajo de los posibles a lo largo de una ruta";
 choices[42][2] = "AI valor medio de MTU de los enlaces que intervienen a lo largo de una ruta";
 choices[42][3] = "AI valor que haya sido definido en el PC que inicia la comunicaci&oacute;n";
 answers[42] = 1;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1909. ";
 preguntaids[42] = 1909


//  Id pregunta: 3255 Año de creación de pregunta: 2003
 questions[43]= "44)  En los sistemas de aplicaciones transaccionales online (OLTP), &iquest;como se define el concepto de throughput?:";
 choices[43]= new Array();
 choices[43][0] = "Mayor tiempo de respuesta por transacci&oacute;n.";
 choices[43][1] = "Cantidad de trabajo realizada en un determinado tiempo.";
 choices[43][2] = "Unidad m&iacute;nima de recursos f&iacute;sicos necesarios para ejecutar una transacci&oacute;n.";
 choices[43][3] = "N&uacute;mero de hilos (threads) de ejecuci&oacute;n paralela de transacciones.";
 answers[43] = 1;
 units[43] = ['86'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3255. Junta Andaluc&iacute;a";
 preguntaids[43] = 3255


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[44]= new Array();
 choices[44][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[44][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[44][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[44][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[44] = 1;
 units[44] = ['5'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[44] = 120


//  Id pregunta: 9661 Año de creación de pregunta: 2014
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[45]= new Array();
 choices[45][0] = "Kexi.";
 choices[45][1] = "Kivio.";
 choices[45][2] = "Konqueror.";
 choices[45][3] = "Kugar.";
 answers[45] = 3;
 units[45] = ['57'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9661. Examen TIC A1 2013";
 preguntaids[45] = 9661


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[46]= "47)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[46]= new Array();
 choices[46][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[46][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[46][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[46][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[46] = 3;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 223. Ley 39/2015";
 preguntaids[46] = 223


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[47]= new Array();
 choices[47][0] = "10 d&iacute;as.";
 choices[47][1] = "15 d&iacute;as.";
 choices[47][2] = "1 mes.";
 choices[47][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[47] = 0;
 units[47] = ['7'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[47] = 207


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[48]= "49)  El sector Servicios NO incluye:";
 choices[48]= new Array();
 choices[48][0] = "El Comercio";
 choices[48][1] = "Los Transportes";
 choices[48][2] = "La Energ&iacute;a";
 choices[48][3] = "Las Comunicaciones";
 answers[48] = 2;
 units[48] = ['12'];
 blocks[48] = ['A3'];
 comments[48] = "Id Pregunta: 345. Modelo econ&oacute;mico";
 preguntaids[48] = 345


//  Id pregunta: 6130 Año de creación de pregunta: 2003
 questions[49]= "50)  RDF (Resource Description Framework) es un:";
 choices[49]= new Array();
 choices[49][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[49][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[49][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[49][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[49] = 0;
 units[49] = ['74'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6130. Examen TIC A1 MAP 2007";
 preguntaids[49] = 6130


//  Id pregunta: 2524 Año de creación de pregunta: 2004
 questions[50]= "51)  La criptograf&iacute;a sirve para codificar:";
 choices[50]= new Array();
 choices[50][0] = "Lenguaje manuscrito";
 choices[50][1] = "Lenguaje manuscrito y datos";
 choices[50][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[50][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[50] = 1;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2524. Similar a examen TIC SS A 2003";
 preguntaids[50] = 2524


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[51]= new Array();
 choices[51][0] = "Publicidad.";
 choices[51][1] = "Constituci&oacute;n.";
 choices[51][2] = "Legalidad.";
 choices[51][3] = "Creaci&oacute;n.";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[51] = 42


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[52]= "53)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[52]= new Array();
 choices[52][0] = "La mujeres.";
 choices[52][1] = "Lo hombres.";
 choices[52][2] = "Todas las personas.";
 choices[52][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[52] = 2;
 units[52] = ['14'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 393. Pol&iacute;ticas de igualdad";
 preguntaids[52] = 393


//  Id pregunta: 5821 Año de creación de pregunta: 2007
 questions[53]= "54)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[53]= new Array();
 choices[53][0] = "las frecuencias usadas";
 choices[53][1] = "los adaptadores usados";
 choices[53][2] = "la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 2;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5821. Examen 2006 JCYL";
 preguntaids[53] = 5821


//  Id pregunta: 9932 Año de creación de pregunta: 2015
 questions[54]= "55)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[54]= new Array();
 choices[54][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[54][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[54][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[54][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[54] = 1;
 units[54] = ['44'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9932. ";
 preguntaids[54] = 9932


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[55]= "56)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[55]= new Array();
 choices[55][0] = "Entradas (entities).";
 choices[55][1] = "Atributos (attribs).";
 choices[55][2] = "M&oacute;dulos (modules).";
 choices[55][3] = "Objetos (objects).";
 answers[55] = 0;
 units[55] = ['74'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 772. Junta de Extremadura A1 2015";
 preguntaids[55] = 772


//  Id pregunta: 2935 Año de creación de pregunta: 2002
 questions[56]= "57)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[56]= new Array();
 choices[56][0] = "El boot-strap";
 choices[56][1] = "El dispatcher";
 choices[56][2] = "El scheduler";
 choices[56][3] = "Ninguno de los anteriores";
 answers[56] = 2;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2935. ";
 preguntaids[56] = 2935


//  Id pregunta: 10578 Año de creación de pregunta: 2015
 questions[57]= "58)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de la capacidad";
 choices[57][1] = "Gesti&oacute;n de suministradores";
 choices[57][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[57][3] = "Gesti&oacute;n de cambios";
 answers[57] = 0;
 units[57] = ['101'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10578. ";
 preguntaids[57] = 10578


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[58]= "59)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[58]= new Array();
 choices[58][0] = "tienen capacidad de obrar limitada";
 choices[58][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[58][2] = "no tienen capacidad de obrar";
 choices[58][3] = "ninguna es correcta";
 answers[58] = 2;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 225. Ley 39/2015";
 preguntaids[58] = 225


//  Id pregunta: 5825 Año de creación de pregunta: 2007
 questions[59]= "60)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[59]= new Array();
 choices[59][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[59][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[59][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n.";
 choices[59][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[59] = 2;
 units[59] = ['94'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 5825. Examen 2006 JCYL";
 preguntaids[59] = 5825


//  Id pregunta: 10542 Año de creación de pregunta: 2015
 questions[60]= "61)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[60]= new Array();
 choices[60][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[60][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[60][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[60][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[60] = 0;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 10542. ";
 preguntaids[60] = 10542


//  Id pregunta: 9116 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[61]= new Array();
 choices[61][0] = "Contexts and Dependency Injection.";
 choices[61][1] = "Common Display Interface.";
 choices[61][2] = "Context-Dependent Interface.";
 choices[61][3] = "Case-Driven Implementation.";
 answers[61] = 0;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9116. Examen TIC A2 2013";
 preguntaids[61] = 9116


//  Id pregunta: 4568 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l es el servicio del nivel de enlace del modelo OSI m&aacute;s apropiado para transmitir voz?:";
 choices[62]= new Array();
 choices[62][0] = "Servicio con acuse de recibo y sin conexi&oacute;n";
 choices[62][1] = "Servicio sin acuse de recibo y sin conexi&oacute;n";
 choices[62][2] = "Servicio con acuse de recibo y orientado a la conexi&oacute;n";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 1;
 units[62] = ['110'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4568. ";
 preguntaids[62] = 4568


//  Id pregunta: 7865 Año de creación de pregunta: 2011
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[63]= new Array();
 choices[63][0] = "Mercado &uacute;nico digital din&aacute;mico.";
 choices[63][1] = "Acceso ultrarr&aacute;pido a Internet.";
 choices[63][2] = "Nativos digitales.";
 choices[63][3] = "Inclusi&oacute;n digital.";
 answers[63] = 2;
 units[63] = ['16'];
 blocks[63] = ['A3'];
 comments[63] = "Id Pregunta: 7865. Examen TIC A1 2010";
 preguntaids[63] = 7865


//  Id pregunta: 9247 Año de creación de pregunta: 2010
 questions[64]= "65)  Escoja la ordenaci&oacute;n correcta de las siguientes t&eacute;cnicas para la realizaci&oacute;n de prototipos de menor a mayor grado de fidelidad con el sistema final:";
 choices[64]= new Array();
 choices[64][0] = "Mockup, Sketch y WireFrame.";
 choices[64][1] = "Sketch, Mockup y WireFrame.";
 choices[64][2] = "Sketch, WireFrame y Mockup.";
 choices[64][3] = "Mockup, Wireframe y Sketch.";
 answers[64] = 2;
 units[64] = ['90'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 9247. Examen TIC A2 2013";
 preguntaids[64] = 9247


//  Id pregunta: 5575 Año de creación de pregunta: 2007
 questions[65]= "66)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[65]= new Array();
 choices[65][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[65][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[65][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[65][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[65] = 1;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 5575. ";
 preguntaids[65] = 5575


//  Id pregunta: 3453 Año de creación de pregunta: 2006
 questions[66]= "67)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[66]= new Array();
 choices[66][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[66][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[66][2] = "Facilidades de enrutamiento";
 choices[66][3] = "Todas las anteriores";
 answers[66] = 3;
 units[66] = ['72'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3453. ";
 preguntaids[66] = 3453


//  Id pregunta: 3392 Año de creación de pregunta: 2006
 questions[67]= "68)  &iquest;C&oacute;mo se denominan en Java EE los componentes de negocio en el entorno servidor?";
 choices[67]= new Array();
 choices[67][0] = "Applet";
 choices[67][1] = "EJB";
 choices[67][2] = "DCOM+";
 choices[67][3] = "JSP";
 answers[67] = 1;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3392. ";
 preguntaids[67] = 3392


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[68]= "69)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[68]= new Array();
 choices[68][0] = "Personas jur&iacute;dicas.";
 choices[68][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[68][2] = "Notarios y registradores.";
 choices[68][3] = "Todas las anteriores.";
 answers[68] = 3;
 units[68] = ['7', '19'];
 blocks[68] = ['A2', 'A4'];
 comments[68] = "Id Pregunta: 9887. ";
 preguntaids[68] = 9887


//  Id pregunta: 4517 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[69]= new Array();
 choices[69][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[69][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[69][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[69][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[69] = 0;
 units[69] = ['105'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4517. ";
 preguntaids[69] = 4517


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[70]= new Array();
 choices[70][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[70][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[70][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[70][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[70] = 2;
 units[70] = ['22'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 505. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[70] = 505


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[71]= new Array();
 choices[71][0] = "Establecer redes de telecomunicaciones continentales";
 choices[71][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[71][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[71][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[71] = 0;
 units[71] = ['17'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 431. Mercado &Uacute;nico Digital";
 preguntaids[71] = 431


//  Id pregunta: 5247 Año de creación de pregunta: 2006
 questions[72]= "73)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[72]= new Array();
 choices[72][0] = "El primer puerto libre del firewall";
 choices[72][1] = "El puerto 80";
 choices[72][2] = "El primer puerto libre desde el 80";
 choices[72][3] = "No es necesario abrir puerto alguno";
 answers[72] = 1;
 units[72] = ['120'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5247. ";
 preguntaids[72] = 5247


//  Id pregunta: 8768 Año de creación de pregunta: 2013
 questions[73]= "74)  Se&ntilde;ale la falsa:";
 choices[73]= new Array();
 choices[73][0] = "La evidencia obtenida de una tercera parte independiente es menos competente que la ofrecida por el &aacute;rea auditada";
 choices[73][1] = "La evidencia obtenida de un sistema con un control efectivo es m&aacute;s competente que la ofrecida por un sistema con un control d&eacute;bil";
 choices[73][2] = "La evidencia obtenida por el equipo auditor directamente en una inspecci&oacute;n f&iacute;sica es m&aacute;s competente que la obtenida indirectamente";
 choices[73][3] = "Todas las afirmaciones anteriores son ciertas";
 answers[73] = 0;
 units[73] = ['36'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 8768. ";
 preguntaids[73] = 8768


//  Id pregunta: 7472 Año de creación de pregunta: 2010
 questions[74]= "75)  Es un m&eacute;todo est&aacute;tico de an&aacute;lisis:";
 choices[74]= new Array();
 choices[74][0] = "Valor Actual Neto";
 choices[74][1] = "Tasa Interna de Retorno";
 choices[74][2] = "Pay-Back";
 choices[74][3] = "Delphi";
 answers[74] = 2;
 units[74] = ['40'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 7472. ";
 preguntaids[74] = 7472


