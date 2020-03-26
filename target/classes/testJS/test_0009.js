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
//  Id pregunta: 4831 Año de creación de pregunta: 2002
 questions[0]= "1)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[0]= new Array();
 choices[0][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[0][1] = "Igual velocidad de entrada que de salida";
 choices[0][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[0][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[0] = 1;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4831. ";
 preguntaids[0] = 4831


//  Id pregunta: 3477 Año de creación de pregunta: 2006
 questions[1]= "2)  Se&ntilde;ale la falsa:";
 choices[1]= new Array();
 choices[1][0] = "La Ley General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[1][1] = "La ley de Firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[1][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[1][3] = "Son ciertas las tres anteriores";
 answers[1] = 3;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 3477. ";
 preguntaids[1] = 3477


//  Id pregunta: 10648 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley 9/2014 General de Telecomunicaciones es correcta?:";
 choices[2]= new Array();
 choices[2][0] = "Mediante real decreto el Gobierno otorgar&aacute; los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[2][1] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; fijar, mediante orden ministerial, las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros.";
 choices[2][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia, previo informe del Ministerio de Energia, Turismo y Agenda Digital, podr&aacute; modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[2][3] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n tomar&aacute;n en consideraci&oacute;n los n&uacute;meros, direcciones y nombres necesarios para permitir la efectiva prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 answers[2] = 3;
 units[2] = ['121'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10648. ";
 preguntaids[2] = 10648


//  Id pregunta: 3311 Año de creación de pregunta: 2004
 questions[3]= "4)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[3]= new Array();
 choices[3][0] = "CTR";
 choices[3][1] = "CBC";
 choices[3][2] = "CFB";
 choices[3][3] = "DFB";
 answers[3] = 3;
 units[3] = ['76'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3311. ";
 preguntaids[3] = 3311


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[4]= "5)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "El Rey.";
 choices[4][1] = "El Jefe del Estado.";
 choices[4][2] = "El Gobierno.";
 choices[4][3] = "El Presidente del Gobierno.";
 answers[4] = 2;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 35. Constituci&oacute;n de 1978";
 preguntaids[4] = 35


//  Id pregunta: 4581 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[5]= new Array();
 choices[5][0] = "16";
 choices[5][1] = "20";
 choices[5][2] = "24";
 choices[5][3] = "32";
 answers[5] = 1;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4581. ";
 preguntaids[5] = 4581


//  Id pregunta: 9799 Año de creación de pregunta: 2015
 questions[6]= "7)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[6]= new Array();
 choices[6][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[6][1] = "Es la base legal del programa ISA.";
 choices[6][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[6][3] = "La Decisi&oacute;n establece un programa de medidas para la seguridad en las administraciones p&uacute;blicas europeas.";
 answers[6] = 1;
 units[6] = ['43', '19'];
 blocks[6] = ['B1', 'A4'];
 comments[6] = "Id Pregunta: 9799. ";
 preguntaids[6] = 9799


//  Id pregunta: 3299 Año de creación de pregunta: 2003
 questions[7]= "8)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en torno a las matrices de discos RAID:";
 choices[7]= new Array();
 choices[7][0] = "RAID-0. Tambi&eacute;n llamado modo &quot;stripe'' o distribuci&oacute;n por bandas. Las lecturas y escrituras se realizan en serie en los dispositivos.";
 choices[7][1] = "RAID-1. Se mantiene en un disco un duplicado exacto de la informaci&oacute;n del otro disco.";
 choices[7][2] = "RAID-5. Se guarda la informaci&oacute;n de paridad en un &uacute;nico disco y escribe los datos a los otros discos de forma parecida a un RAID-0.";
 choices[7][3] = "RAID-4. La informaci&oacute;n de paridad se distribuye uniformemente entre los discos participantes,";
 answers[7] = 1;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3299. ";
 preguntaids[7] = 3299


//  Id pregunta: 7267 Año de creación de pregunta: 2010
 questions[8]= "9)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[8]= new Array();
 choices[8][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[8][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[8][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[8][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[8] = 0;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7267. ";
 preguntaids[8] = 7267


//  Id pregunta: 2088 Año de creación de pregunta: 2002
 questions[9]= "10)  El benchmark es adecuado cuando:";
 choices[9]= new Array();
 choices[9][0] = "Vamos a adquirir aplicaciones a medida";
 choices[9][1] = "Los entornos de las diversas opciones difieren";
 choices[9][2] = "Queremos desarrollar un proyecto innovador";
 choices[9][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[9] = 3;
 units[9] = ['39'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2088. ";
 preguntaids[9] = 2088


//  Id pregunta: 5624 Año de creación de pregunta: 2007
 questions[10]= "11)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[10]= new Array();
 choices[10][0] = "R&aacute;ster.";
 choices[10][1] = "Vectorial.";
 choices[10][2] = "Sinusoidal.";
 choices[10][3] = "Vertical.";
 answers[10] = 1;
 units[10] = ['71'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 5624. ";
 preguntaids[10] = 5624


//  Id pregunta: 8520 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[11]= new Array();
 choices[11][0] = "Capa F&iacute;sica de Datos";
 choices[11][1] = "Capa de Red";
 choices[11][2] = "Capa de Enlace de Datos";
 choices[11][3] = "Capa de Transporte";
 answers[11] = 2;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8520. ";
 preguntaids[11] = 8520


//  Id pregunta: 3350 Año de creación de pregunta: 2006
 questions[12]= "13)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[12]= new Array();
 choices[12][0] = "Disponer de microprocesadores RISCs.";
 choices[12][1] = "La modularidad.";
 choices[12][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[12][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[12] = 1;
 units[12] = ['52'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3350. ";
 preguntaids[12] = 3350


//  Id pregunta: 3827 Año de creación de pregunta: 2002
 questions[13]= "14)  En los modelos orientados a objeto, un m&eacute;todo:";
 choices[13]= new Array();
 choices[13][0] = "Es una implementaci&oacute;n espec&iacute;fica de una operaci&oacute;n en una determinada clase";
 choices[13][1] = "Es la implementaci&oacute;n de un operador, independientemente de la clase a la que se aplica";
 choices[13][2] = "Es la implementaci&oacute;n sistem&aacute;tica del mecanismo de herencia";
 choices[13][3] = "Es un procedimiento sistem&aacute;tico para el dise&ntilde;o del sistema";
 answers[13] = 0;
 units[13] = ['85'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3827. ";
 preguntaids[13] = 3827


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[14]= "15)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[14]= new Array();
 choices[14][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[14][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[14][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[14][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[14] = 2;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 484. Sociedad de la informaci&oacute;n";
 preguntaids[14] = 484


//  Id pregunta: 5973 Año de creación de pregunta: 2007
 questions[15]= "16)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[15]= new Array();
 choices[15][0] = "La preferencia local";
 choices[15][1] = "El agregado at&oacute;mico";
 choices[15][2] = "El pr&oacute;ximo salto";
 choices[15][3] = "El agregador";
 answers[15] = 2;
 units[15] = ['102'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5973. ";
 preguntaids[15] = 5973


//  Id pregunta: 7025 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Qu&eacute; diferencia existe entre factores de &eacute;xito y objetivos de la organizaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Los factores de &eacute;xito son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los objetivos son los &ldquo;medios&rdquo; para lograr dicho &eacute;xito";
 choices[16][1] = "Los objetivos son los estudios de mercado mientras que los factores de &eacute;xito son las variaciones en los mercados que modifican dichos estudios";
 choices[16][2] = "Los objetivos son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los factores de &eacute;xito son los &ldquo;medios&rdquo; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = 2;
 units[16] = ['83'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 7025. ";
 preguntaids[16] = 7025


//  Id pregunta: 3986 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la menos relevante a la hora de especificar un sistema de reconocimiento de voz?:";
 choices[17]= new Array();
 choices[17][0] = "La amplitud del vocabulario soportado";
 choices[17][1] = "La fluidez de la locuci&oacute;n admitida por el sistema";
 choices[17][2] = "La dependencia o independencia del orador";
 choices[17][3] = "La capacidad de interpretar el habla cuando el orador se expresa en tono bajo";
 answers[17] = 3;
 units[17] = ['81'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3986. ";
 preguntaids[17] = 3986


//  Id pregunta: 2166 Año de creación de pregunta: 2002
 questions[18]= "19)  En la teor&iacute;a de la decisi&oacute;n multicriterio, un criterio es:";
 choices[18]= new Array();
 choices[18][0] = "Las diversas opciones entre las que queremos seleccionar una";
 choices[18][1] = "Aspectos que nos interesan de cada opci&oacute;n";
 choices[18][2] = "Las evaluaciones que damos a cada opci&oacute;n";
 choices[18][3] = "La importancia que le damos a cada aspecto seg&uacute;n nuestro criterio";
 answers[18] = 1;
 units[18] = ['38'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2166. ";
 preguntaids[18] = 2166


//  Id pregunta: 3476 Año de creación de pregunta: 2006
 questions[19]= "20)  De acuerdo a la ley 34/2002, se&ntilde;ale la verdadera:";
 choices[19]= new Array();
 choices[19][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[19][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa";
 choices[19][2] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 choices[19][3] = "Todas son verdaderas";
 answers[19] = 3;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 3476. ";
 preguntaids[19] = 3476


//  Id pregunta: 6170 Año de creación de pregunta: 2003
 questions[20]= "21)  Seg&uacute;n la ley 34/2002, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n grave?";
 choices[20]= new Array();
 choices[20][0] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene";
 choices[20][1] = "No facilitar la informaci&oacute;n a que se refiere el art&iacute;culo 27.1 (Obligaciones previas al inicio del procedimiento de contrataci&oacute;n), cuando las partes no hayan pactado su exclusi&oacute;n o el destinatario sea un consumidor";
 choices[20][2] = "El incumplimiento de lo previsto en el art. 12 bis.";
 choices[20][3] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor";
 answers[20] = 3;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 6170. Ley 34/2002, art&iacute;culo 38";
 preguntaids[20] = 6170


//  Id pregunta: 3123 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[21]= new Array();
 choices[21][0] = "Lesser General Public License (LGPL)";
 choices[21][1] = "Modified BSD License";
 choices[21][2] = "Mozilla Public License (MPL)";
 choices[21][3] = "X11 License";
 answers[21] = 2;
 units[21] = ['66'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3123. ";
 preguntaids[21] = 3123


//  Id pregunta: 4364 Año de creación de pregunta: 2004
 questions[22]= "23)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[22]= new Array();
 choices[22][0] = "Asociativa";
 choices[22][1] = "Jer&aacute;rquica";
 choices[22][2] = "En estrella";
 choices[22][3] = "Como una pila FIFO";
 answers[22] = 1;
 units[22] = ['116'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4364. ";
 preguntaids[22] = 4364


//  Id pregunta: 8071 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[23]= new Array();
 choices[23][0] = "AIF";
 choices[23][1] = "IDA";
 choices[23][2] = "ISA";
 choices[23][3] = "IMA";
 answers[23] = 2;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 8071. ";
 preguntaids[23] = 8071


//  Id pregunta: 2161 Año de creación de pregunta: 2002
 questions[24]= "25)  En la metodolog&iacute;a MAGERIT, se define vulnerabilidad como:";
 choices[24]= new Array();
 choices[24][0] = "El da&ntilde;o producido a la organizaci&oacute;n por un posible incidente";
 choices[24][1] = "La posibilidad de que se produzca un impacto dado en la organizaci&oacute;n";
 choices[24][2] = "Cualquier activo del sistema";
 choices[24][3] = "La posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo";
 answers[24] = 3;
 units[24] = ['45'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2161. ";
 preguntaids[24] = 2161


//  Id pregunta: 9084 Año de creación de pregunta: 2014
 questions[25]= "26)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[25]= new Array();
 choices[25][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[25][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[25][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[25][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[25] = 3;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 9084. Examen TIC-A1 2013";
 preguntaids[25] = 9084


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[26]= "27)  Es falso que:";
 choices[26]= new Array();
 choices[26][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[26][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[26][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[26][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[26] = 1;
 units[26] = ['20'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 491. Direcci&oacute;n p&uacute;blica";
 preguntaids[26] = 491


//  Id pregunta: 3519 Año de creación de pregunta: 2006
 questions[27]= "28)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[27][1] = "Diagrama de Flujo de Datos";
 choices[27][2] = "Diagrama de Contexto";
 choices[27][3] = "Modelo de Datos";
 answers[27] = 0;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3519. ";
 preguntaids[27] = 3519


//  Id pregunta: 4913 Año de creación de pregunta: 2002
 questions[28]= "29)  La red digital de servicios integrados (RDSI):";
 choices[28]= new Array();
 choices[28][0] = "Procede de la evoluci&oacute;n de la red telef&oacute;nica conmutada";
 choices[28][1] = "El acceso b&aacute;sico disponen de dos canales B (64 Kbit/s) que emplean conmutaci&oacute;n de paquetes";
 choices[28][2] = "El acceso desde el terminal de abonado se realiza mediante fibra &oacute;ptica";
 choices[28][3] = "El acceso b&aacute;sico no se puede utilizar para conexi&oacute;n de centralitas digitales PABX's";
 answers[28] = 0;
 units[28] = ['114'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4913. ";
 preguntaids[28] = 4913


//  Id pregunta: 5543 Año de creación de pregunta: 2007
 questions[29]= "30)  En el an&aacute;lisis y dise&ntilde;o de software, el flujo de transacci&oacute;n es una t&eacute;cnica de:";
 choices[29]= new Array();
 choices[29][0] = "Refinamiento progresivo.";
 choices[29][1] = "Descomposici&oacute;n modular.";
 choices[29][2] = "An&aacute;lisis estructurado.";
 choices[29][3] = "Dise&ntilde;o estructurado.";
 answers[29] = 3;
 units[29] = ['89'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 5543. ";
 preguntaids[29] = 5543


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[30]= new Array();
 choices[30][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[30][1] = "Intervenci&oacute;n formal y material.";
 choices[30][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[30][3] = "Intervenci&oacute;n formal y general.";
 answers[30] = 1;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 296. Presupuestos generales";
 preguntaids[30] = 296


//  Id pregunta: 5011 Año de creación de pregunta: 2002
 questions[31]= "32)  OSA Parlay es:";
 choices[31]= new Array();
 choices[31][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[31][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[31][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[31][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[31] = 0;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5011. ";
 preguntaids[31] = 5011


//  Id pregunta: 10058 Año de creación de pregunta: 2015
 questions[32]= "33)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[32]= new Array();
 choices[32][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[32][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[32][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[32][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[32] = 3;
 units[32] = ['94'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 10058. Examen TIC A2 2014";
 preguntaids[32] = 10058


//  Id pregunta: 7115 Año de creación de pregunta: 2010
 questions[33]= "34)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[33]= new Array();
 choices[33][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[33][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[33][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[33][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[33] = 3;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 7115. Art&iacute;culo 1 RD 1671/2009";
 preguntaids[33] = 7115


//  Id pregunta: 3016 Año de creación de pregunta: 2002
 questions[34]= "35)  Respecto a los DTDs es falso que:";
 choices[34]= new Array();
 choices[34][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[34][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[34][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[34][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[34] = 1;
 units[34] = ['74'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3016. ";
 preguntaids[34] = 3016


//  Id pregunta: 1740 Año de creación de pregunta: 2016
 questions[35]= "36)  Se cuenta con 4 discos f&iacute;sicos que se desea configurar como una &uacute;nica unidad, por ejemplo /root. Se desea maximizar la capacidad &uacute;til de almacenamiento proporcionando alg&uacute;n mecanismo de redundancia ante fallos. Por favor, elija entre las siguientes la mejor opci&oacute;n a utilizar:";
 choices[35]= new Array();
 choices[35][0] = "RAID 0";
 choices[35][1] = "RAID 1";
 choices[35][2] = "RAID 0+1";
 choices[35][3] = "RAID 5";
 answers[35] = 3;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1740. ";
 preguntaids[35] = 1740


//  Id pregunta: 4432 Año de creación de pregunta: 2002
 questions[36]= "37)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[36]= new Array();
 choices[36][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea tienen que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[36][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea pueden transmitir simult&aacute;neamente sin restricciones";
 choices[36][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[36][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[36] = 1;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4432. ";
 preguntaids[36] = 4432


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[37]= "38)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[37]= new Array();
 choices[37][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[37][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[37][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[37][3] = "todas son correctas";
 answers[37] = 3;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 230. Ley 39/2015";
 preguntaids[37] = 230


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[38]= new Array();
 choices[38][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[38][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[38][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[38][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[38] = 0;
 units[38] = ['14'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 365. Pol&iacute;ticas de igualdad";
 preguntaids[38] = 365


//  Id pregunta: 1829 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l es la opci&oacute;n correcta que representa a uno de los procesos que es necesario tener implantado para alcanzar el nivel 2 de CMMI (Capability Maturity Model Integration), en el que los proyectos est&aacute;n siendo gestionados y controlados durante su desarrollo";
 choices[39]= new Array();
 choices[39][0] = "Gesti&oacute;n de riesgos";
 choices[39][1] = "Gesti&oacute;n de proveedores";
 choices[39][2] = "Gesti&oacute;n cuantitativa de proyectos";
 choices[39][3] = "Innovaci&oacute;n organizacional";
 answers[39] = 1;
 units[39] = ['93'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 1829. ";
 preguntaids[39] = 1829


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[40]= "41)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[40]= new Array();
 choices[40][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[40][1] = "En el extranjero.";
 choices[40][2] = "Ninguna es correcta.";
 choices[40][3] = "Ambas son correctas.";
 answers[40] = 0;
 units[40] = ['14'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 407. Pol&iacute;ticas de igualdad";
 preguntaids[40] = 407


//  Id pregunta: 10065 Año de creación de pregunta: 2015
 questions[41]= "42)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[41][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[41][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[41][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[41] = 1;
 units[41] = ['91', '85', '86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10065. Examen TIC A2 2014";
 preguntaids[41] = 10065


//  Id pregunta: 7390 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[42]= new Array();
 choices[42][0] = "/20";
 choices[42][1] = "/22";
 choices[42][2] = "/24";
 choices[42][3] = "/240";
 answers[42] = 0;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7390. Examen TIC B 2009";
 preguntaids[42] = 7390


//  Id pregunta: 7196 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[43]= new Array();
 choices[43][0] = "OSPF";
 choices[43][1] = "RIP";
 choices[43][2] = "BGP";
 choices[43][3] = "RARP";
 answers[43] = 3;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7196. Castilla La Mancha 2009";
 preguntaids[43] = 7196


//  Id pregunta: 7893 Año de creación de pregunta: 2011
 questions[44]= "45)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[44]= new Array();
 choices[44][0] = "Una Secretar&iacute;a de Estado.";
 choices[44][1] = "Una Subsecretar&iacute;a.";
 choices[44][2] = "Una Subdirecci&oacute;n General.";
 choices[44][3] = "Una Direcci&oacute;n General.";
 answers[44] = 3;
 units[44] = ['47'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 7893. Examen TIC A1 2010";
 preguntaids[44] = 7893


//  Id pregunta: 6090 Año de creación de pregunta: 2003
 questions[45]= "46)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[45]= new Array();
 choices[45][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[45][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[45][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[45][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[45] = 3;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 6090. Examen TIC A1 MAP 2007";
 preguntaids[45] = 6090


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[46]= "47)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[46][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[46][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[46][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[46] = 1;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 1995. ";
 preguntaids[46] = 1995


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[47]= "48)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[47]= new Array();
 choices[47][0] = "Resoluci&oacute;n.";
 choices[47][1] = "Desistimiento o renuncia.";
 choices[47][2] = "Caducidad.";
 choices[47][3] = "Todas las anteriores.";
 answers[47] = 3;
 units[47] = ['7'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 202. Ley 39/2015";
 preguntaids[47] = 202


//  Id pregunta: 10089 Año de creación de pregunta: 2015
 questions[48]= "49)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[48]= new Array();
 choices[48][0] = "95.25.30.128/27";
 choices[48][1] = "95.25.30.128/25";
 choices[48][2] = "95.25.46.128/27";
 choices[48][3] = "95.25.46.128/25";
 answers[48] = 2;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10089. Examen TIC A2 2014";
 preguntaids[48] = 10089


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[49]= "50)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[49]= new Array();
 choices[49][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[49][1] = "Uno de sus miembros.";
 choices[49][2] = "La Comisi&oacute;n.";
 choices[49][3] = "Todas las respuestas son correctas.";
 answers[49] = 3;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 170. Uni&oacute;n Europea";
 preguntaids[49] = 170


//  Id pregunta: 10395 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[50]= new Array();
 choices[50][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[50][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[50][2] = "Confianza y Seguridad";
 choices[50][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[50] = 3;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 10395. ";
 preguntaids[50] = 10395


//  Id pregunta: 2317 Año de creación de pregunta: 2002
 questions[51]= "52)  Una de las caracter&iacute;sticas principales de los paquetes de planificaci&oacute;n de recursos de empresas (ERP) es:";
 choices[51]= new Array();
 choices[51][0] = "Los datos a tratar por esos paquetes no pueden ser almacenados en sistemas de bases de datos de car&aacute;cter general.";
 choices[51][1] = "Ser parametrizables, lo que les da gran flexibilidad y la posibilidad de ser aplicados a tipos de empresas muy diferentes.";
 choices[51][2] = "No ser parametrizables, por ser dise&ntilde;ados especialmente para cada tipo de empresas.";
 choices[51][3] = "No se puede seleccionar los m&oacute;dulos a implantar. Para su correcto funcionamiento deben implantarse todas las funcionalidades de todos los m&oacute;dulos que componen el paquete.";
 answers[51] = 1;
 units[51] = ['69'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2317. ";
 preguntaids[51] = 2317


//  Id pregunta: 2370 Año de creación de pregunta: 2004
 questions[52]= "53)  Indique la respuesta falsa respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[52]= new Array();
 choices[52][0] = "Se protegen las creaciones originales literarias, art&iacute;sticas o cient&iacute;ficas expresadas por cualquier medio o soporte, tangible o intangible, actualmente conocido o que se invente en el futuro, comprendi&eacute;ndose entre ellas los programas de ordenador";
 choices[52][1] = "Se entender&aacute; por programa de ordenador toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n y fijaci&oacute;n";
 choices[52][2] = "Los derechos sobre los programas de ordenador, as&iacute; como sobre sus sucesivas versiones y los programas derivados, deber&aacute;n ser objeto de inscripci&oacute;n en el Registro de la Propiedad Intelectual.";
 choices[52][3] = "No estar&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador, incluidos los que sirven de fundamento a sus interfaces.";
 answers[52] = 2;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2370. ";
 preguntaids[52] = 2370


//  Id pregunta: 2121 Año de creación de pregunta: 2002
 questions[53]= "54)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[53]= new Array();
 choices[53][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[53][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[53][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[53][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[53] = 3;
 units[53] = ['36', '45'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2121. ";
 preguntaids[53] = 2121


//  Id pregunta: 9644 Año de creación de pregunta: 2014
 questions[54]= "55)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[54]= new Array();
 choices[54][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[54][1] = "Cifrado C&eacute;sar";
 choices[54][2] = "Criptoan&aacute;lisis";
 choices[54][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[54] = 2;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9644. ";
 preguntaids[54] = 9644


//  Id pregunta: 6385 Año de creación de pregunta: 2003
 questions[55]= "56)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[55]= new Array();
 choices[55][0] = "Eficiencia y fiabilidad";
 choices[55][1] = "Fiabilidad y modularidad";
 choices[55][2] = "Fiabilidad y extensibilidad";
 choices[55][3] = "Correcci&oacute;n y verificabilidad";
 answers[55] = 1;
 units[55] = ['93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6385. Examen 2006 JCYL";
 preguntaids[55] = 6385


//  Id pregunta: 7526 Año de creación de pregunta: 2010
 questions[56]= "57)  En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[56]= new Array();
 choices[56][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[56][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[56][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[56][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[56] = 2;
 units[56] = ['57'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7526. Map 2005";
 preguntaids[56] = 7526


//  Id pregunta: 6265 Año de creación de pregunta: 2003
 questions[57]= "58)  Cu&aacute;l de las siguientes es una caracter&iacute;stica de las Especificaciones que se obtienen al realizar un An&aacute;lisis estructurado:";
 choices[57]= new Array();
 choices[57][0] = "Redundantes";
 choices[57][1] = "Ambiguas";
 choices[57][2] = "Imposibles de mantener";
 choices[57][3] = "Particionadas";
 answers[57] = 3;
 units[57] = ['85', '86'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6265. ";
 preguntaids[57] = 6265


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[58]= "59)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[58]= new Array();
 choices[58][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[58][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[58][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[58][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[58] = 1;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[58] = 9455


//  Id pregunta: 6246 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes opciones no es una metodolog&iacute;a estructurada orientada a procesos?";
 choices[59]= new Array();
 choices[59][0] = "DeMarco";
 choices[59][1] = "Gane &amp; Sarson";
 choices[59][2] = "Yourdon / Constantine";
 choices[59][3] = "Warnier-Orr";
 answers[59] = 3;
 units[59] = ['84'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 6246. ";
 preguntaids[59] = 6246


//  Id pregunta: 4701 Año de creación de pregunta: 2002
 questions[60]= "61)  El n&uacute;mero m&aacute;ximo de dispositivos que se puede conectar al bus pasivo de usuario en una instalaci&oacute;n b&aacute;sica RDSI es de:";
 choices[60]= new Array();
 choices[60][0] = "2";
 choices[60][1] = "4";
 choices[60][2] = "8";
 choices[60][3] = "16";
 answers[60] = 2;
 units[60] = ['114'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4701. ";
 preguntaids[60] = 4701


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[61]= "62)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[61]= new Array();
 choices[61][0] = "150 trabajadores/as.";
 choices[61][1] = "200 trabajadores/as.";
 choices[61][2] = "250 trabajadores/as.";
 choices[61][3] = "300 trabajadores/as.";
 answers[61] = 2;
 units[61] = ['14'];
 blocks[61] = ['A3'];
 comments[61] = "Id Pregunta: 400. Pol&iacute;ticas de igualdad";
 preguntaids[61] = 400


//  Id pregunta: 7591 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000, relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular el comercio electr&oacute;nico en el mercado interior?";
 choices[62]= new Array();
 choices[62][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas.";
 choices[62][1] = "Las comunicaciones comerciales.";
 choices[62][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios.";
 choices[62][3] = "Los contratos por v&iacute;a electr&oacute;nica.";
 answers[62] = 0;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 7591. Map 2006";
 preguntaids[62] = 7591


//  Id pregunta: 2044 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[63]= new Array();
 choices[63][0] = "M&eacute;todo promethee";
 choices[63][1] = "Utilidad multiatributo";
 choices[63][2] = "Permutaci&oacute;n";
 choices[63][3] = "Ninguno de los anteriores";
 answers[63] = 3;
 units[63] = ['38'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2044. ";
 preguntaids[63] = 2044


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[64]= "65)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[64]= new Array();
 choices[64][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[64][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[64][2] = "Cinco a&ntilde;os.";
 choices[64][3] = "Ninguna es correcta.";
 answers[64] = 2;
 units[64] = ['5'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[64] = 166


//  Id pregunta: 3254 Año de creación de pregunta: 2003
 questions[65]= "66)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[65]= new Array();
 choices[65][0] = "&lt;/TITLE&gt;";
 choices[65][1] = "&lt;TITLE&gt;";
 choices[65][2] = "/&lt;TITLE&gt;";
 choices[65][3] = "/TITLE";
 answers[65] = 0;
 units[65] = ['74'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3254. ";
 preguntaids[65] = 3254


//  Id pregunta: 9625 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[66][1] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[66][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y y Funci&oacute;n P&uacute;blica";
 choices[66][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[66] = 2;
 units[66] = ['42'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 9625. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";
 preguntaids[66] = 9625


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[67]= "68)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[67]= new Array();
 choices[67][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[67][1] = "La libertad sexual y religiosa.";
 choices[67][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[67][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[67] = 0;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 81. Constituci&oacute;n de 1978";
 preguntaids[67] = 81


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[68]= new Array();
 choices[68][0] = "Al Consejo Europeo.";
 choices[68][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[68][2] = "A la Comisi&oacute;n Europea.";
 choices[68][3] = "Al Parlamento Europeo.";
 answers[68] = 2;
 units[68] = ['5'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 134. Uni&oacute;n Europea";
 preguntaids[68] = 134


//  Id pregunta: 6975 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Cu&aacute;les son las JSRs de las versiones v1 y v2 de la Java Portlet Specification?";
 choices[69]= new Array();
 choices[69][0] = "JSR 186 y JSR 268";
 choices[69][1] = "JSR 618 y JSR 628";
 choices[69][2] = "JSR 681 y JSR 682";
 choices[69][3] = "JSR 168 y JSR 286";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6975. ";
 preguntaids[69] = 6975


//  Id pregunta: 7778 Año de creación de pregunta: 2010
 questions[70]= "71)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[70]= new Array();
 choices[70][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria.";
 choices[70][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos.";
 choices[70][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol.";
 choices[70][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol.";
 answers[70] = 2;
 units[70] = ['74'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7778. ";
 preguntaids[70] = 7778


//  Id pregunta: 5076 Año de creación de pregunta: 2002
 questions[71]= "72)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[71]= new Array();
 choices[71][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[71][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[71][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red";
 choices[71][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[71] = 0;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5076. ";
 preguntaids[71] = 5076


//  Id pregunta: 8046 Año de creación de pregunta: 2011
 questions[72]= "73)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma:";
 choices[72]= new Array();
 choices[72][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[72][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[72][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[72][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado.";
 answers[72] = 2;
 units[72] = ['47'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 8046. Examen TIC A2 2010";
 preguntaids[72] = 8046


//  Id pregunta: 9808 Año de creación de pregunta: 2015
 questions[73]= "74)  datos.gob.es...";
 choices[73]= new Array();
 choices[73][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[73][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[73][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[73][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[73] = 3;
 units[73] = ['27'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 9808. ";
 preguntaids[73] = 9808


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[74]= "75)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[74][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[74][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[74][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[74] = 2;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 11. Constituci&oacute;n de 1978";
 preguntaids[74] = 11


