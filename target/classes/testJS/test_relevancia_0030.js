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
//  Id pregunta: 6224 Año de creación de pregunta: 2003
 questions[0]= "1)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[0]= new Array();
 choices[0][0] = "IEEE 802.2";
 choices[0][1] = "IEEE 802.3";
 choices[0][2] = "IEEE 802.4";
 choices[0][3] = "IEEE 802.5";
 answers[0] = 1;
 units[0] = ['112'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 6224. Examen TIC A Castilla La Mancha 2007";
 preguntaids[0] = 6224


//  Id pregunta: 4220 Año de creación de pregunta: 2006
 questions[1]= "2)  Qu&eacute; actividades componen la Interfaz de Gesti&oacute;n de proyectos en M&eacute;trica v3";
 choices[1]= new Array();
 choices[1][0] = "Inicio del proyecto, seguimiento y control, Finalizaci&oacute;n y registro del proyecto";
 choices[1][1] = "Planificaci&oacute;n de la calidad, Seguimiento y control, Finalizaci&oacute;n del proyecto";
 choices[1][2] = "Inicio del proyecto, seguimiento y supervisi&oacute;n, cierre del proyecto";
 choices[1][3] = "Inicio del proyecto, seguimiento y control y Finalizaci&oacute;n del proyecto";
 answers[1] = 3;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4220. ";
 preguntaids[1] = 4220


//  Id pregunta: 4119 Año de creación de pregunta: 2003
 questions[2]= "3)  Indique la afirmaci&oacute;n verdadera:";
 choices[2]= new Array();
 choices[2][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[2][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[2][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = 3;
 units[2] = ['80'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 4119. ";
 preguntaids[2] = 4119


//  Id pregunta: 4632 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[3]= new Array();
 choices[3][0] = "Spread spectrum con secuencia directa";
 choices[3][1] = "Spread spectrum con salto de frecuencia";
 choices[3][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = 1;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4632. ";
 preguntaids[3] = 4632


//  Id pregunta: 2851 Año de creación de pregunta: 2002
 questions[4]= "5)  En relaci&oacute;n con la teor&iacute;a de la normalizaci&oacute;n, que nos permite asegurar que un esquema relacional cumple unas ciertas propiedades, indicar cu&aacute;l de las siguientes corresponde a la definici&oacute;n de segunda forma normal:";
 choices[4]= new Array();
 choices[4][0] = "Si y s&oacute;lo si todo determinante es una clave candidata";
 choices[4][1] = "Si no existe ning&uacute;n atributo no principal que dependa transitivamente de alguna de las claves de relaci&oacute;n";
 choices[4][2] = "Cada atributo no principal tiene dependencia funcional completa respecto de cada una de las claves";
 choices[4][3] = "Si no existen grupos repetitivos";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2851. ";
 preguntaids[4] = 2851


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[5]= "6)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[5]= new Array();
 choices[5][0] = "Son actos individuales no normativos.";
 choices[5][1] = "Poseen alcance general.";
 choices[5][2] = "Son actos normativos.";
 choices[5][3] = "No son obligatorias.";
 answers[5] = 0;
 units[5] = ['5'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 191. Uni&oacute;n Europea";
 preguntaids[5] = 191


//  Id pregunta: 5335 Año de creación de pregunta: 2006
 questions[6]= "7)  Una aplicaci&oacute;n que se localiza en un servidor con el fin de ofrecer seguridad a la red interna, por lo que ha sido especialmente configurado para la recepci&oacute;n de ataques es un...";
 choices[6]= new Array();
 choices[6][0] = "cortafuegos";
 choices[6][1] = "sonda";
 choices[6][2] = "honeypot";
 choices[6][3] = "basti&oacute;n";
 answers[6] = 3;
 units[6] = ['120'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5335. ";
 preguntaids[6] = 5335


//  Id pregunta: 9185 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[7]= new Array();
 choices[7][0] = "Kit Kat.";
 choices[7][1] = "Ice Cream Sandwich.";
 choices[7][2] = "Donut.";
 choices[7][3] = "Candy Marzipan.";
 answers[7] = 3;
 units[7] = ['59'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9185. Examen TIC A2 2013";
 preguntaids[7] = 9185


//  Id pregunta: 9798 Año de creación de pregunta: 2015
 questions[8]= "9)  Son principios del programa europeo ISA:";
 choices[8]= new Array();
 choices[8][0] = "La privacidad, la apertura y la seguridad.";
 choices[8][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[8][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[8][3] = "Todas las anteriores.";
 answers[8] = 3;
 units[8] = ['43', '19'];
 blocks[8] = ['B1', 'A4'];
 comments[8] = "Id Pregunta: 9798. ";
 preguntaids[8] = 9798


//  Id pregunta: 6630 Año de creación de pregunta: 2009
 questions[9]= "10)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[9]= new Array();
 choices[9][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[9][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[9][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[9][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[9] = 0;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 6630. MAP 2008 A2";
 preguntaids[9] = 6630


//  Id pregunta: 1100 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;En qu&eacute; zona del chip del DNI electr&oacute;nico se encuentra el certificado x509 de componente?";
 choices[10]= new Array();
 choices[10][0] = "Zona de seguridad.";
 choices[10][1] = "Zona aut&oacute;noma.";
 choices[10][2] = "Zona privada.";
 choices[10][3] = "Zona p&uacute;blica.";
 answers[10] = 3;
 units[10] = ['77'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1100. ";
 preguntaids[10] = 1100


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[11]= new Array();
 choices[11][0] = "Constitucional.";
 choices[11][1] = "Penal.";
 choices[11][2] = "Militar.";
 choices[11][3] = "Tribunales consuetudinarios.";
 answers[11] = 1;
 units[11] = ['1'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 89. Constituci&oacute;n de 1978";
 preguntaids[11] = 89


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[12]= new Array();
 choices[12][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[12][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[12][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[12][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[12] = 3;
 units[12] = ['78'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 794. AGE A1 2015";
 preguntaids[12] = 794


//  Id pregunta: 10606 Año de creación de pregunta: 2015
 questions[13]= "14)  Seg&uacute;n la Ley 9/2014, General de Telecomunicaciones, es facultad del gobierno para la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico:";
 choices[13]= new Array();
 choices[13][0] = "Aprobaci&oacute;n del CNAF previa elaboraci&oacute;n del Ministerio de Energia, Turismo y Agenda Digital.";
 choices[13][1] = "La determinaci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica de cuyo control se encarga Ministerio de Energia, Turismo y Agenda Digital.";
 choices[13][2] = "Establecer el procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencia.";
 choices[13][3] = "El otorgamiento de las autorizaciones de uso.";
 answers[13] = 2;
 units[13] = ['121'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10606. Articulo 61";
 preguntaids[13] = 10606


//  Id pregunta: 10574 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[14]= new Array();
 choices[14][0] = "M&eacute;tricas del proceso";
 choices[14][1] = "M&eacute;tricas del servicio";
 choices[14][2] = "M&eacute;tricas de personal";
 choices[14][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[14] = 2;
 units[14] = ['101'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10574. ";
 preguntaids[14] = 10574


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[15]= new Array();
 choices[15][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[15][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[15][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[15][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[15] = 0;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 6. Constituci&oacute;n de 1978";
 preguntaids[15] = 6


//  Id pregunta: 1500 Año de creación de pregunta: 2016
 questions[16]= "17)  La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios, ha definido un marco para impulsar la mejora continua de los servicios p&uacute;blicos en la Administraci&oacute;n General del Estado constituido por seis programas. &iquest;Cu&aacute;l de los siguientes es uno de esos programas?";
 choices[16]= new Array();
 choices[16][0] = "Programa de an&aacute;lisis estructural del organismo.";
 choices[16][1] = "Programa de evaluaci&oacute;n de los costes del servicio p&uacute;blico.";
 choices[16][2] = "Programa del EFQM.";
 choices[16][3] = "Programa de Reconocimiento (Certificaci&oacute;n de Organizaciones y Premios).";
 answers[16] = 3;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 1500. ";
 preguntaids[16] = 1500


//  Id pregunta: 2733 Año de creación de pregunta: 2002
 questions[17]= "18)  Dentro de los sistemas de criptograf&iacute;a de res&uacute;men podemos encontrar los algoritmos:";
 choices[17]= new Array();
 choices[17][0] = "DES";
 choices[17][1] = "SEAL";
 choices[17][2] = "RC-4";
 choices[17][3] = "MD-5";
 answers[17] = 3;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2733. ";
 preguntaids[17] = 2733


//  Id pregunta: 10101 Año de creación de pregunta: 2015
 questions[18]= "19)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Screened Subnet.";
 choices[18][1] = "Dual-Homed Host.";
 choices[18][2] = "Router-Homed Host.";
 choices[18][3] = "Screened Host.";
 answers[18] = 3;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10101. Examen TIC A2 2014";
 preguntaids[18] = 10101


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[19]= "20)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Discriminaci&oacute;n indirecta.";
 choices[19][1] = "Discriminaci&oacute;n directa.";
 choices[19][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[19][3] = "Discriminaci&oacute;n abusiva.";
 answers[19] = 0;
 units[19] = ['14'];
 blocks[19] = ['A3'];
 comments[19] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[19] = 374


//  Id pregunta: 10238 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[20]= new Array();
 choices[20][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[20][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[20][2] = "Los 2 respuestas anteriores son correctas";
 choices[20][3] = "Ninguna de las anteriores es correcta";
 answers[20] = 2;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10238. ";
 preguntaids[20] = 10238


//  Id pregunta: 1122 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta correcta respecto a un sistema de archivos de UNIX System V:";
 choices[21]= new Array();
 choices[21][0] = "Posee una estructura relacional de archivos.";
 choices[21][1] = "En el sistema de archivos se encuentra el bloque de arranque. El superbloque, la lista de nodos y los bloques de datos se leen de la BIOS directamente.";
 choices[21][2] = "La lista de i-nodos se encuentra a continuaci&oacute;n del superbloque.";
 choices[21][3] = "Los dispositivos y perif&eacute;ricos no son archivos.";
 answers[21] = 2;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1122. ";
 preguntaids[21] = 1122


//  Id pregunta: 1684 Año de creación de pregunta: 2016
 questions[22]= "23)  La actividad -Estudio de alternativas de soluci&oacute;n- de M&eacute;trica V.3 se encuadra dentro del proceso de:";
 choices[22]= new Array();
 choices[22][0] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[22][1] = "An&aacute;lisis del sistema de informaci&oacute;n.";
 choices[22][2] = "Estudio de viabilidad del sistema.";
 choices[22][3] = "Dise&ntilde;o del sistema de informaci&oacute;n.";
 answers[22] = 2;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1684. ";
 preguntaids[22] = 1684


//  Id pregunta: 3581 Año de creación de pregunta: 2002
 questions[23]= "24)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[23]= new Array();
 choices[23][0] = "Establecer los objetivos y metas principales";
 choices[23][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[23][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[23][3] = "Todas las anteriores respuestas son correctas";
 answers[23] = 3;
 units[23] = ['83'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3581. ";
 preguntaids[23] = 3581


//  Id pregunta: 10507 Año de creación de pregunta: 2015
 questions[24]= "25)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[24]= new Array();
 choices[24][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[24][1] = "En cada tarea debe haber un unico R y A";
 choices[24][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[24][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[24] = 1;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10507. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";
 preguntaids[24] = 10507


//  Id pregunta: 7717 Año de creación de pregunta: 2010
 questions[25]= "26)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en UML:";
 choices[25]= new Array();
 choices[25][0] = "El diagrama de secuencia es una t&eacute;cnica que muestra la configuraci&oacute;n de los elementos de procesamiento o nodos del sistema y los componentes software, procesos y objetos que se ejecutan sobre ellos.";
 choices[25][1] = "Un diagrama de componentes muestra la interacci&oacute;n (conjunto de mensajes que se intercambian entre los objetos) ordenada en una secuencia de tiempos.";
 choices[25][2] = "Un diagrama de secuencia muestra un grafo de componentes software conectados por relaciones de dependencia.";
 choices[25][3] = "Un diagrama de comunicaci&oacute;n muestra una interacci&oacute;n organizada sobre los objetos, sus enlaces y sus mensajes.";
 answers[25] = 3;
 units[25] = ['86'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7717. Similar a Map 2007";
 preguntaids[25] = 7717


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[26]= "27)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[26]= new Array();
 choices[26][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[26][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[26][2] = "Los interesados en el procedimiento";
 choices[26][3] = "Las alternativas b) y c) son correctas";
 answers[26] = 1;
 units[26] = ['4', '7', '8', '9'];
 blocks[26] = ['A1', 'A2'];
 comments[26] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[26] = 1022


//  Id pregunta: 8539 Año de creación de pregunta: 2011
 questions[27]= "28)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[27]= new Array();
 choices[27][0] = "601,01 a 60.101,21 euros";
 choices[27][1] = "901,01 a 60.101,21 euros";
 choices[27][2] = "600 a 40.000 euros";
 choices[27][3] = "900 a 40.000 euros";
 answers[27] = 3;
 units[27] = ['35'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8539. ";
 preguntaids[27] = 8539


//  Id pregunta: 10784 Año de creación de pregunta: 2015
 questions[28]= "29)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[28][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[28][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[28][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[28] = 2;
 units[28] = ['26'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 10784. ";
 preguntaids[28] = 10784


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[29]= "30)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[29]= new Array();
 choices[29][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[29][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[29][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[29][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[29] = 2;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 671. Junta de Extremadura A1 2015";
 preguntaids[29] = 671


//  Id pregunta: 4685 Año de creación de pregunta: 2002
 questions[30]= "31)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[30]= new Array();
 choices[30][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[30][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[30][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[30][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[30] = 2;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4685. ";
 preguntaids[30] = 4685


//  Id pregunta: 10044 Año de creación de pregunta: 2015
 questions[31]= "32)  El tipo de prueba BigBang es de tipo:";
 choices[31]= new Array();
 choices[31][0] = "Prueba de sistema.";
 choices[31][1] = "Prueba de aceptaci&oacute;n.";
 choices[31][2] = "Prueba de rendimiento.";
 choices[31][3] = "Prueba de integraci&oacute;n.";
 answers[31] = 3;
 units[31] = ['92'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10044. Examen TIC A2 2014";
 preguntaids[31] = 10044


//  Id pregunta: 7348 Año de creación de pregunta: 2010
 questions[32]= "33)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[32]= new Array();
 choices[32][0] = "1 a&ntilde;o";
 choices[32][1] = "2 a&ntilde;os";
 choices[32][2] = "6 meses";
 choices[32][3] = "10 meses";
 answers[32] = 1;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 7348. Examen TIC B 2009";
 preguntaids[32] = 7348


//  Id pregunta: 6546 Año de creación de pregunta: 2003
 questions[33]= "34)  Seg&uacute;n el RD 1720/2007, &iquest;en que casos se necesita la autorizaci&oacute;n del responsable del fichero para la ejecucion de los procedimientos de recuperaci&oacute;n de los datos?";
 choices[33]= new Array();
 choices[33][0] = "nivel b&aacute;sico";
 choices[33][1] = "nivel medio";
 choices[33][2] = "nivel alto";
 choices[33][3] = "En ningun caso";
 answers[33] = 1;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 6546. ";
 preguntaids[33] = 6546


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[34]= "35)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[34]= new Array();
 choices[34][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[34][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[34][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[34][3] = "todas son correctas";
 answers[34] = 3;
 units[34] = ['7'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 230. Ley 39/2015";
 preguntaids[34] = 230


//  Id pregunta: 8432 Año de creación de pregunta: 2011
 questions[35]= "36)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "El &oacute;rgano titular de la sede";
 choices[35][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[35][2] = "El &oacute;rgano que origine la informaci&oacute;n que se deba incluir en la sede judicial electr&oacute;nica";
 choices[35][3] = "Ninguno de los anteriores";
 answers[35] = 2;
 units[35] = ['2'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 8432. ";
 preguntaids[35] = 8432


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[36]= new Array();
 choices[36][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[36][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[36][2] = "A y B son correctas.";
 choices[36][3] = "A y B son incorrectas.";
 answers[36] = 2;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[36] = 1040


//  Id pregunta: 5415 Año de creación de pregunta: 2006
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[37]= new Array();
 choices[37][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[37][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[37][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[37][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[37] = 0;
 units[37] = ['117'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5415. ";
 preguntaids[37] = 5415


//  Id pregunta: 9556 Año de creación de pregunta: 2014
 questions[38]= "39)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[38][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[38][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[38][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[38] = 0;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 9556. Art&iacute;culos 2 y 33 del RD 428/1993";
 preguntaids[38] = 9556


//  Id pregunta: 2543 Año de creación de pregunta: 2004
 questions[39]= "40)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[39]= new Array();
 choices[39][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[39][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[39][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = 1;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2543. ";
 preguntaids[39] = 2543


//  Id pregunta: 4051 Año de creación de pregunta: 2003
 questions[40]= "41)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[40]= new Array();
 choices[40][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n.";
 choices[40][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n.";
 choices[40][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n.";
 choices[40][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n.";
 answers[40] = 0;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4051. Junta Andaluc&iacute;a";
 preguntaids[40] = 4051


//  Id pregunta: 3031 Año de creación de pregunta: 2002
 questions[41]= "42)  Se puede decir que una base de datos es:";
 choices[41]= new Array();
 choices[41][0] = "Un elemento f&iacute;sico (hardware)";
 choices[41][1] = "Un dispositivo de almacenamiento";
 choices[41][2] = "Un conjunto de datos interrelacionados";
 choices[41][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[41] = 2;
 units[41] = ['60'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3031. ";
 preguntaids[41] = 3031


//  Id pregunta: 1306 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Con que directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[42]= new Array();
 choices[42][0] = "Master";
 choices[42][1] = "MasterPage";
 choices[42][2] = "Master.Page";
 choices[42][3] = "Page";
 answers[42] = 0;
 units[42] = ['63'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1306. ";
 preguntaids[42] = 1306


//  Id pregunta: 7991 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[43]= new Array();
 choices[43][0] = "Pruebas unitarias.";
 choices[43][1] = "Pruebas del Sistema.";
 choices[43][2] = "Pruebas de Implantaci&oacute;n.";
 choices[43][3] = "Pruebas de Regresi&oacute;n.";
 answers[43] = 3;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7991. Examen TIC A2 2010";
 preguntaids[43] = 7991


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[44]= new Array();
 choices[44][0] = "Art&iacute;culo 14 CE.";
 choices[44][1] = "Art&iacute;culo 9.2 CE.";
 choices[44][2] = "Art&iacute;culo 9.1 CE.";
 choices[44][3] = "Art&iacute;culo 13 CE.";
 answers[44] = 1;
 units[44] = ['14'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 387. Pol&iacute;ticas de igualdad";
 preguntaids[44] = 387


//  Id pregunta: 3916 Año de creación de pregunta: 2002
 questions[45]= "46)  Las herramientas CASE se emplean con objeto de:";
 choices[45]= new Array();
 choices[45][0] = "Aumentar la productividad";
 choices[45][1] = "Controlar riesgos";
 choices[45][2] = "Asegurar la calidad";
 choices[45][3] = "Reutilizar c&oacute;digo";
 answers[45] = 0;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3916. ";
 preguntaids[45] = 3916


//  Id pregunta: 4657 Año de creación de pregunta: 2002
 questions[46]= "47)  CSMA/CD es:";
 choices[46]= new Array();
 choices[46][0] = "Un m&eacute;todo de paso de testigo en bus";
 choices[46][1] = "Un sistema operativo no propietario";
 choices[46][2] = "Un m&eacute;todo de detecci&oacute;n de se&ntilde;al en bus";
 choices[46][3] = "Un m&eacute;todo de paso de testigo en anillo";
 answers[46] = 2;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4657. ";
 preguntaids[46] = 4657


//  Id pregunta: 10901 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[47]= new Array();
 choices[47][0] = "LAPB";
 choices[47][1] = "HDLC";
 choices[47][2] = "LCP";
 choices[47][3] = "SDLC";
 answers[47] = 0;
 units[47] = ['105'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10901. ";
 preguntaids[47] = 10901


//  Id pregunta: 9991 Año de creación de pregunta: 2015
 questions[48]= "49)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "ART.";
 choices[48][1] = "Dalvik.";
 choices[48][2] = "Java VM.";
 choices[48][3] = "APK.";
 answers[48] = 1;
 units[48] = ['59'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9991. Examen TIC A2 2014";
 preguntaids[48] = 9991


//  Id pregunta: 6463 Año de creación de pregunta: 2003
 questions[49]= "50)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[49]= new Array();
 choices[49][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[49][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[49][2] = "Resilient Packet Ring";
 choices[49][3] = "Traspaso entre redes";
 answers[49] = 0;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6463. ";
 preguntaids[49] = 6463


//  Id pregunta: 1436 Año de creación de pregunta: 2016
 questions[50]= "51)  Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad seg&uacute;n la LOPD art&iacute;culo 44 es una infracci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "No es infracci&oacute;n.";
 choices[50][1] = "Leve.";
 choices[50][2] = "Grave.";
 choices[50][3] = "Muy Grave.";
 answers[50] = 2;
 units[50] = ['35'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 1436. ";
 preguntaids[50] = 1436


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[51]= "52)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[51]= new Array();
 choices[51][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[51][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[51][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[51][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[51] = 0;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[51] = 982


//  Id pregunta: 8570 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[52]= new Array();
 choices[52][0] = "XcML";
 choices[52][1] = "XrML";
 choices[52][2] = "XMCL";
 choices[52][3] = "XsML";
 answers[52] = 1;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 8570. ";
 preguntaids[52] = 8570


//  Id pregunta: 1254 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[53]= new Array();
 choices[53][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[53][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[53][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[53][3] = "Sancionar y publicar las leyes.";
 answers[53] = 2;
 units[53] = ['1'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 1254. ";
 preguntaids[53] = 1254


//  Id pregunta: 1776 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique cu&aacute;l de las siguientes es una raz&oacute;n com&uacute;n por la que los proyectos se exceden en presupuesto o en fechas:";
 choices[54]= new Array();
 choices[54][0] = "Coste de los especialistas de Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[54][1] = "Indisponibilidad de la &uacute;ltima tecnolog&iacute;a.";
 choices[54][2] = "Subestimaci&oacute;n del esfuerzo requerido.";
 choices[54][3] = "Falta de automatizaci&oacute;n de las herramientas de desarrollo.";
 answers[54] = 2;
 units[54] = ['31'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 1776. ";
 preguntaids[54] = 1776


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[55]= new Array();
 choices[55][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[55][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[55][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[55][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[55] = 1;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 119. Uni&oacute;n Europea";
 preguntaids[55] = 119


//  Id pregunta: 4952 Año de creación de pregunta: 2002
 questions[56]= "57)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[56][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[56][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[56][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[56] = 2;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4952. ";
 preguntaids[56] = 4952


//  Id pregunta: 6555 Año de creación de pregunta: 2003
 questions[57]= "58)  En una arquitectura Java EE, &iquest;d&oacute;nde situar&iacute;a un JSP?";
 choices[57]= new Array();
 choices[57][0] = "En el servidor web";
 choices[57][1] = "En el contenedor web";
 choices[57][2] = "En el contenedor de EJBs";
 choices[57][3] = "En el navegador Web";
 answers[57] = 1;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6555. ";
 preguntaids[57] = 6555


//  Id pregunta: 8953 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[58]= new Array();
 choices[58][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[58][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[58][2] = "Una API de desarrollo en Java";
 choices[58][3] = "Java EE Blueprints no existe";
 answers[58] = 1;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8953. ";
 preguntaids[58] = 8953


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[59]= "60)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[59]= new Array();
 choices[59][0] = "Intersecci&oacute;n.";
 choices[59][1] = "Uni&oacute;n.";
 choices[59][2] = "Restricci&oacute;n.";
 choices[59][3] = "Diferencia.";
 answers[59] = 0;
 units[59] = ['60'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 685. Junta de Extremadura A1 2015";
 preguntaids[59] = 685


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[60]= "61)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[60]= new Array();
 choices[60][0] = "Subsecretario";
 choices[60][1] = "Subdirector general";
 choices[60][2] = "Secretario de Estado";
 choices[60][3] = "ninguna es correcta";
 answers[60] = 0;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[60] = 987


//  Id pregunta: 6881 Año de creación de pregunta: 2010
 questions[61]= "62)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[61]= new Array();
 choices[61][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[61][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[61][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de no causar interferencias entre diferentes servicios.";
 choices[61][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de evitar interferencias entre diferentes servicios.";
 answers[61] = 0;
 units[61] = ['121'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6881. TIC A 2009";
 preguntaids[61] = 6881


//  Id pregunta: 972 Año de creación de pregunta: 2016
 questions[62]= "63)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[62]= new Array();
 choices[62][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[62][1] = "el C&oacute;digo Civil";
 choices[62][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[62][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[62] = 0;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 972. Ley 40/2015";
 preguntaids[62] = 972


//  Id pregunta: 3935 Año de creación de pregunta: 2002
 questions[63]= "64)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[63]= new Array();
 choices[63][0] = "Fiabilidad";
 choices[63][1] = "Reusabilidad";
 choices[63][2] = "Flexibilidad";
 choices[63][3] = "Facilidad de prueba";
 answers[63] = 2;
 units[63] = ['92', '93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3935. ";
 preguntaids[63] = 3935


//  Id pregunta: 4030 Año de creación de pregunta: 2004
 questions[64]= "65)  Al utilizar la t&eacute;cnica de estimaci&oacute;n Puntos Funci&oacute;n, se tienen en cuenta";
 choices[64]= new Array();
 choices[64][0] = "Entradas externas, ficheros l&oacute;gicos internos y salidas externas";
 choices[64][1] = "Ficheros de interfaz externos y consultas externas";
 choices[64][2] = "Entradas de aplicaciones, consulas y salidas de aplicaciones";
 choices[64][3] = "A y B son correctas";
 answers[64] = 3;
 units[64] = ['94'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4030. ";
 preguntaids[64] = 4030


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


//  Id pregunta: 8105 Año de creación de pregunta: 2011
 questions[66]= "67)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[66]= new Array();
 choices[66][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[66][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[66][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[66][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[66] = 0;
 units[66] = ['112'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8105. Examen TIC A2 2010 interna";
 preguntaids[66] = 8105


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[67]= new Array();
 choices[67][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[67][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[67][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[67][3] = "El pago de subsidios a parados";
 answers[67] = 3;
 units[67] = ['15'];
 blocks[67] = ['A3'];
 comments[67] = "Id Pregunta: 421. Mercado laboral";
 preguntaids[67] = 421


//  Id pregunta: 2087 Año de creación de pregunta: 2002
 questions[68]= "69)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[68]= new Array();
 choices[68][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[68][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[68][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[68][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[68] = 0;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2087. ";
 preguntaids[68] = 2087


//  Id pregunta: 8659 Año de creación de pregunta: 2013
 questions[69]= "70)  &iquest;Cu&aacute;les son posibles topolog&iacute;as SAN de fibra &oacute;ptica?";
 choices[69]= new Array();
 choices[69][0] = "Punto a punto";
 choices[69][1] = "Bucle arbitrado";
 choices[69][2] = "Estructura Conmutada";
 choices[69][3] = "Todas son v&aacute;lidas";
 answers[69] = 3;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8659. ";
 preguntaids[69] = 8659


//  Id pregunta: 2174 Año de creación de pregunta: 2002
 questions[70]= "71)  En temas de seguridad inform&aacute;tica, una de las siguientes afirmaciones es falsa:";
 choices[70]= new Array();
 choices[70][0] = "La prioridad de actuaci&oacute;n viene dada por el producto impacto x vulnerabilidad";
 choices[70][1] = "Los costes de seguridad se clasifican en directos (inversiones en equipos, mantenimiento, personal de seguridad) e indirectos (dificultad de uso, restricciones de servicios, reducci&oacute;n de prestaciones)";
 choices[70][2] = "La pol&iacute;tica de seguridad es un documento oficial de la organizaci&oacute;n de car&aacute;cter confidencial";
 choices[70][3] = "El punto de equilibrio financiero ser&aacute; el que represente el coste m&iacute;nimo sumando el coste de seguridad y el de p&eacute;rdidas por incidentes o materializaciones de amenazas";
 answers[70] = 2;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2174. ";
 preguntaids[70] = 2174


//  Id pregunta: 10632 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[71]= new Array();
 choices[71][0] = "Siempre que se mantenga el mismo operador.";
 choices[71][1] = "Sin ning&uacute;n requisito previo.";
 choices[71][2] = "Previa solicitud.";
 choices[71][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[71] = 2;
 units[71] = ['121'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 10632. Articulo 21";
 preguntaids[71] = 10632


//  Id pregunta: 1382 Año de creación de pregunta: 2016
 questions[72]= "73)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[72]= new Array();
 choices[72][0] = "135.26.41.94";
 choices[72][1] = "135.26.41.95";
 choices[72][2] = "135.26.41.96";
 choices[72][3] = "135.26.41.97";
 answers[72] = 0;
 units[72] = ['109'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1382. ";
 preguntaids[72] = 1382


//  Id pregunta: 7478 Año de creación de pregunta: 2010
 questions[73]= "74)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Reusabilidad";
 choices[73][1] = "Encapsulaci&oacute;n.";
 choices[73][2] = "Abstracci&oacute;n";
 choices[73][3] = "Persistencia";
 answers[73] = 3;
 units[73] = ['82'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 7478. Map 2005";
 preguntaids[73] = 7478


//  Id pregunta: 8474 Año de creación de pregunta: 2011
 questions[74]= "75)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[74]= new Array();
 choices[74][0] = "Maximum Input, Minimum Output";
 choices[74][1] = "Minimum Input, Maximum Output";
 choices[74][2] = "Multiple-Input Multiple-Output";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 2;
 units[74] = ['106'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8474. ";
 preguntaids[74] = 8474


