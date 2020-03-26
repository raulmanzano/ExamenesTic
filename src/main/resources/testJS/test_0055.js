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
//  Id pregunta: 7753 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Qu&eacute; propiedad no es inherente a la orientaci&oacute;n a objetos?";
 choices[0]= new Array();
 choices[0][0] = "Polimorfismo.";
 choices[0][1] = "Volatilidad.";
 choices[0][2] = "Herencia.";
 choices[0][3] = "Encapsulaci&oacute;n.";
 answers[0] = 1;
 units[0] = ['85'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7753. ";
 preguntaids[0] = 7753


//  Id pregunta: 7157 Año de creación de pregunta: 2010
 questions[1]= "2)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[1]= new Array();
 choices[1][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[1][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[1][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[1][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[1] = 1;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7157. ";
 preguntaids[1] = 7157


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[2][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[2][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[2][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[2] = 3;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 481. Sociedad de la informaci&oacute;n";
 preguntaids[2] = 481


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[3]= "4)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[3]= new Array();
 choices[3][0] = "Cinco a&ntilde;os.";
 choices[3][1] = "Cuatro a&ntilde;os.";
 choices[3][2] = "Tres a&ntilde;os.";
 choices[3][3] = "Seis meses.";
 answers[3] = 2;
 units[3] = ['5'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 123. Uni&oacute;n Europea";
 preguntaids[3] = 123


//  Id pregunta: 9400 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[4]= new Array();
 choices[4][0] = "100 a 224 MHz";
 choices[4][1] = "225 a 356 MHz";
 choices[4][2] = "470 a 862 MHz";
 choices[4][3] = "470 a 758 MHz";
 answers[4] = 3;
 units[4] = ['115'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 9400. Examen TIC A2  2013";
 preguntaids[4] = 9400


//  Id pregunta: 4852 Año de creación de pregunta: 2002
 questions[5]= "6)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[5]= new Array();
 choices[5][0] = "Es una celda de datos de usuario";
 choices[5][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[5][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[5][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[5] = 3;
 units[5] = ['107'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4852. ";
 preguntaids[5] = 4852


//  Id pregunta: 7835 Año de creación de pregunta: 2010
 questions[6]= "7)  Determine cu&aacute;l de las afirmaciones siguientes NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[6]= new Array();
 choices[6][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la transferencia de informaci&oacute;n entre dos extremos.";
 choices[6][1] = "ATM es independiente del transporte f&iacute;sico, las celdas ATM pueden ser transportadas en redes SONET, SDH, T3/E3 o T1/E1.";
 choices[6][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha.";
 choices[6][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n.";
 answers[6] = 3;
 units[6] = ['107'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7835. ";
 preguntaids[6] = 7835


//  Id pregunta: 8090 Año de creación de pregunta: 2011
 questions[7]= "8)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[7]= new Array();
 choices[7][0] = "WWN";
 choices[7][1] = "MAC";
 choices[7][2] = "SPOF";
 choices[7][3] = "IP";
 answers[7] = 0;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8090. Analista Ayto. Madrid 2010";
 preguntaids[7] = 8090


//  Id pregunta: 4679 Año de creación de pregunta: 2002
 questions[8]= "9)  Dentro del Modelo de Referencia OSI para la interconexi&oacute;n de sistemas abiertos:";
 choices[8]= new Array();
 choices[8][0] = "El formato de datos corresponde al nivel 6";
 choices[8][1] = "El enrutamiento de paquetes corresponde al nivel 4";
 choices[8][2] = "La multiplexaci&oacute;n de conexiones corresponde al nivel 2";
 choices[8][3] = "Todas las anteriores son ciertas";
 answers[8] = 0;
 units[8] = ['105'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4679. ";
 preguntaids[8] = 4679


//  Id pregunta: 7001 Año de creación de pregunta: 2010
 questions[9]= "10)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[9]= new Array();
 choices[9][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[9][1] = "Agrupamiento";
 choices[9][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[9][3] = "Las redes neuronales";
 answers[9] = 2;
 units[9] = ['67'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7001. TIC-B 2009 bloque desarrollo";
 preguntaids[9] = 7001


//  Id pregunta: 1004 Año de creación de pregunta: 2016
 questions[10]= "11)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[10][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[10][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[10][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[10] = 1;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 1004. Ley 40/2015";
 preguntaids[10] = 1004


//  Id pregunta: 8585 Año de creación de pregunta: 2013
 questions[11]= "12)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[11]= new Array();
 choices[11][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[11][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[11][2] = "El balanceo de carga solo puede implementarse por software";
 choices[11][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[11] = 2;
 units[11] = ['50'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8585. Examen TIC-A1 2011";
 preguntaids[11] = 8585


//  Id pregunta: 10806 Año de creación de pregunta: 2015
 questions[12]= "13)  Se&ntilde;ale en qu&eacute; tipo de licencia Creative Commons se permite el uso comercial de la obra pero no la generaci&oacute;n de obras derivadas:";
 choices[12]= new Array();
 choices[12][0] = "by-nc";
 choices[12][1] = "by-nd";
 choices[12][2] = "by-sa";
 choices[12][3] = "by-nc-nd";
 answers[12] = 1;
 units[12] = ['66'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10806. ";
 preguntaids[12] = 10806


//  Id pregunta: 4009 Año de creación de pregunta: 2002
 questions[13]= "14)  Los m&eacute;todos de recuperaci&oacute;n de informaci&oacute;n se basan fundamentalmente en:";
 choices[13]= new Array();
 choices[13][0] = "Manipulaci&oacute;n de vol&uacute;menes de informaci&oacute;n muy peque&ntilde;os";
 choices[13][1] = "Identificaci&oacute;n de claves (palabras, fragmentos o frases) y su b&uacute;squeda en la base de informaci&oacute;n o ficheros auxiliares";
 choices[13][2] = "Tratamiento de informaci&oacute;n mediante sistemas hipertexto";
 choices[13][3] = "Grabaci&oacute;n y recuperaci&oacute;n de im&aacute;genes";
 answers[13] = 1;
 units[13] = ['100'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4009. ";
 preguntaids[13] = 4009


//  Id pregunta: 7369 Año de creación de pregunta: 2010
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[14]= new Array();
 choices[14][0] = "Sun Community Source License";
 choices[14][1] = "Apache License. Version 2.0";
 choices[14][2] = "Microsoft Public License (MS-OL)";
 choices[14][3] = "GNU Lesser General Public License (LGPL)";
 answers[14] = 3;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7369. Examen TIC B 2009";
 preguntaids[14] = 7369


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[15]= "16)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[15]= new Array();
 choices[15][0] = "Infracci&oacute;n muy grave";
 choices[15][1] = "Infracci&oacute;n grave";
 choices[15][2] = "Infracci&oacute;n leve";
 choices[15][3] = "No se considera infracci&oacute;n";
 answers[15] = 1;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[15] = 3342


//  Id pregunta: 5953 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[16]= new Array();
 choices[16][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[16][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[16][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[16][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[16] = 2;
 units[16] = ['109'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5953. ";
 preguntaids[16] = 5953


//  Id pregunta: 5060 Año de creación de pregunta: 2002
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[17]= new Array();
 choices[17][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[17][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[17][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[17][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[17] = 2;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5060. ";
 preguntaids[17] = 5060


//  Id pregunta: 1420 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; T&iacute;tulo regula la Econom&iacute;a y la Hacienda en la Constituci&oacute;n Espa&ntilde;ola vigente en la actualidad?:";
 choices[18]= new Array();
 choices[18][0] = "El T&iacute;tulo IV.";
 choices[18][1] = "El T&iacute;tulo V.";
 choices[18][2] = "El T&iacute;tulo VI.";
 choices[18][3] = "El T&iacute;tulo VII.";
 answers[18] = 3;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 1420. ";
 preguntaids[18] = 1420


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[19]= "20)  El pacto fiscal europeo de 2012 incluye:";
 choices[19]= new Array();
 choices[19][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[19][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[19][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[19][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[19] = 0;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 102. Uni&oacute;n Europea";
 preguntaids[19] = 102


//  Id pregunta: 1630 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale c&oacute;mo se denomina la unidad de datos usada en la capa de transporte:";
 choices[20]= new Array();
 choices[20][0] = "Paquete";
 choices[20][1] = "Segmento";
 choices[20][2] = "Trama";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 1;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1630. ";
 preguntaids[20] = 1630


//  Id pregunta: 8043 Año de creación de pregunta: 2011
 questions[21]= "22)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n.";
 choices[21][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede.";
 choices[21][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede.";
 choices[21][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[21] = 3;
 units[21] = ['43'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 8043. Examen TIC A2 2010";
 preguntaids[21] = 8043


//  Id pregunta: 2994 Año de creación de pregunta: 2002
 questions[22]= "23)  OLTP son las siglas en ingl&eacute;s de software del tipo:";
 choices[22]= new Array();
 choices[22][0] = "Gestores de bases de datos orientadas a objetos.";
 choices[22][1] = "Gestores estandarizados de bases de datos documentales.";
 choices[22][2] = "Sistemas de Gestion Transaccional.";
 choices[22][3] = "Programas de an&aacute;lisis tipo data warehouse.";
 answers[22] = 2;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 2994. ";
 preguntaids[22] = 2994


//  Id pregunta: 10934 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[23]= new Array();
 choices[23][0] = "representante del Tribunal de Cuentas";
 choices[23][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[23][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[23][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[23] = 2;
 units[23] = ['22'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 10934. ";
 preguntaids[23] = 10934


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[24]= "25)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[24]= new Array();
 choices[24][0] = "Seis a&ntilde;os.";
 choices[24][1] = "Cinco a&ntilde;os.";
 choices[24][2] = "Cuatro a&ntilde;os.";
 choices[24][3] = "Ocho a&ntilde;os.";
 answers[24] = 1;
 units[24] = ['5'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 128. Uni&oacute;n Europea";
 preguntaids[24] = 128


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[25]= "26)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[25]= new Array();
 choices[25][0] = "El Presidente del Consejo Europeo.";
 choices[25][1] = "La Comisi&oacute;n.";
 choices[25][2] = "El Consejo.";
 choices[25][3] = "El Parlamento Europeo.";
 answers[25] = 2;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 148. Uni&oacute;n Europea";
 preguntaids[25] = 148


//  Id pregunta: 7771 Año de creación de pregunta: 2010
 questions[26]= "27)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes wireless de banda ancha (MBWA):";
 choices[26]= new Array();
 choices[26][0] = "802.3.";
 choices[26][1] = "802.11.";
 choices[26][2] = "802.15.";
 choices[26][3] = "802.20.";
 answers[26] = 3;
 units[26] = ['106'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 7771. ";
 preguntaids[26] = 7771


//  Id pregunta: 1482 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la plataforma .NET es verdadera?";
 choices[27]= new Array();
 choices[27][0] = "Es multilenguaje.";
 choices[27][1] = "Los programas desarrollados en .NET se compilan en lenguaje maquina.";
 choices[27][2] = "Mono es una implementaci&oacute;n no oficial de .NET para el sistema operativo Mac OS X.";
 choices[27][3] = "Eclipse es uno de los IDEs m&aacute;s populares y utilizados en la plataforma .NET.";
 answers[27] = 0;
 units[27] = ['63'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1482. ";
 preguntaids[27] = 1482


//  Id pregunta: 6822 Año de creación de pregunta: 2010
 questions[28]= "29)  GEANT2 es una red promovida por la UE para:";
 choices[28]= new Array();
 choices[28][0] = "El intercambio de datos entre las Administraciones Europeas";
 choices[28][1] = "La interconexi&oacute;n de la comunidad cient&iacute;fica y universitaria";
 choices[28][2] = "Las dos respuestas anteriores son correctas";
 choices[28][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[28] = 1;
 units[28] = ['114'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6822. ";
 preguntaids[28] = 6822


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[29]= new Array();
 choices[29][0] = "Ley 3/2015";
 choices[29][1] = "Ley 6/2007";
 choices[29][2] = "Ley 5/1984";
 choices[29][3] = "Ley 5/2006";
 answers[29] = 0;
 units[29] = ['22'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 510. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[29] = 510


//  Id pregunta: 7876 Año de creación de pregunta: 2011
 questions[30]= "31)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es:";
 choices[30]= new Array();
 choices[30][0] = "Una reuni&oacute;n.";
 choices[30][1] = "Un producto del desarrollo.";
 choices[30][2] = "Un documento.";
 choices[30][3] = "La aceptaci&oacute;n del sistema.";
 answers[30] = 0;
 units[30] = ['84'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7876. Examen TIC A1 2010";
 preguntaids[30] = 7876


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[31]= new Array();
 choices[31][0] = "Al Consejo Europeo.";
 choices[31][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[31][2] = "A la Comisi&oacute;n Europea.";
 choices[31][3] = "Al Parlamento Europeo.";
 answers[31] = 2;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 140. Uni&oacute;n Europea";
 preguntaids[31] = 140


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[32]= "33)  El sector p&uacute;blico institucional se integra por:";
 choices[32]= new Array();
 choices[32][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[32][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[32][2] = "las Universidades p&uacute;blicas";
 choices[32][3] = "todas son correctas";
 answers[32] = 3;
 units[32] = ['4', '7', '8', '9'];
 blocks[32] = ['A1', 'A2'];
 comments[32] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[32] = 963


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la respuesta falsa:";
 choices[33]= new Array();
 choices[33][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[33][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[33][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[33][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[33] = 3;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 103. Uni&oacute;n Europea";
 preguntaids[33] = 103


//  Id pregunta: 1599 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n correcta. En la actividad &quot;Elaboraci&oacute;n de los Manuales de Usuario&quot; de M&eacute;trica v3:";
 choices[34]= new Array();
 choices[34][0] = "Se genera la documentaci&oacute;n de usuario final conforme a los requisitos definidos en el proceso Estudio de Viabilidad del Sistema";
 choices[34][1] = "Se especifican todas las interfaces entre el sistema y el usuario, tales como formatos de pantallas, di&aacute;logos, formatos de informes y formularios de entrada";
 choices[34][2] = "Se especifica la formaci&oacute;n necesaria para que los usuarios finales sean capaces de utilizar el sistema de forma satisfactoria";
 choices[34][3] = "Se genera la documentaci&oacute;n de usuario final o explotaci&oacute;n conforme a los requisitos definidos en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[34] = 3;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1599. ";
 preguntaids[34] = 1599


//  Id pregunta: 9345 Año de creación de pregunta: 2014
 questions[35]= "36)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[35]= new Array();
 choices[35][0] = "xUnit";
 choices[35][1] = "xUnit.net";
 choices[35][2] = "NUnit";
 choices[35][3] = "csUnit";
 answers[35] = 0;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9345. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[35] = 9345


//  Id pregunta: 4758 Año de creación de pregunta: 2002
 questions[36]= "37)  El punto de referencia S del modelo RDSI es:";
 choices[36]= new Array();
 choices[36][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[36][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[36][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[36][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[36] = 2;
 units[36] = ['114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4758. ";
 preguntaids[36] = 4758


//  Id pregunta: 2654 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;En qu&eacute; consiste el 'refresco' de una memoria din&aacute;mica?:";
 choices[37]= new Array();
 choices[37][0] = "En el proceso de optimizaci&oacute;n de la temperatura de trabajo de este tipo de memorias";
 choices[37][1] = "En la operaci&oacute;n de reescritura peri&oacute;dica que hay que realizar en ellas para que no pierdan la informaci&oacute;n almacenada";
 choices[37][2] = "En la operaci&oacute;n de acceso peri&oacute;dico que hay que realizar a este tipo de memorias, para repetir la &uacute;ltima operaci&oacute;n realizada";
 choices[37][3] = "El refresco no es propio de las memorias din&aacute;micas";
 answers[37] = 1;
 units[37] = ['50'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2654. ";
 preguntaids[37] = 2654


//  Id pregunta: 8845 Año de creación de pregunta: 2013
 questions[38]= "39)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[38]= new Array();
 choices[38][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n).";
 choices[38][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[38][2] = "Dos (datos estructurados y datos no estructurados).";
 choices[38][3] = "Tres (datos, voz y video).";
 answers[38] = 1;
 units[38] = ['107'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8845. Examen TIC AGE A2 2011 libre";
 preguntaids[38] = 8845


//  Id pregunta: 9893 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[39]= new Array();
 choices[39][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[39][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[39][2] = "Ambas";
 choices[39][3] = "Ninguna de las anteriores.";
 answers[39] = 2;
 units[39] = ['7', '19'];
 blocks[39] = ['A2', 'A4'];
 comments[39] = "Id Pregunta: 9893. Art 21, Ley 39/2015";
 preguntaids[39] = 9893


//  Id pregunta: 10676 Año de creación de pregunta: 2015
 questions[40]= "41)  De entre los siguientes sujetos, &iquest;qui&eacute;n est&aacute; obligado a relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo seg&uacute;n el art&iacute;culo 14 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015?";
 choices[40]= new Array();
 choices[40][0] = "Personas jur&iacute;dicas.";
 choices[40][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[40][2] = "Notarios y registradores de la propiedad y mercantiles.";
 choices[40][3] = "Todos los anteriores.";
 answers[40] = 3;
 units[40] = ['7'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 10676. ";
 preguntaids[40] = 10676


//  Id pregunta: 865 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[41]= new Array();
 choices[41][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[41][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[41][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[41][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[41] = 3;
 units[41] = ['101'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 865. Junta de Extremadura A1 2015";
 preguntaids[41] = 865


//  Id pregunta: 4641 Año de creación de pregunta: 2002
 questions[42]= "43)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[42]= new Array();
 choices[42][0] = "registro de incidencias";
 choices[42][1] = "fichero de log";
 choices[42][2] = "lista de errores";
 choices[42][3] = "fichero de registros";
 answers[42] = 1;
 units[42] = ['113'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4641. ";
 preguntaids[42] = 4641


//  Id pregunta: 5948 Año de creación de pregunta: 2007
 questions[43]= "44)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, unaindirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Pararepresentar un fichero de 2 MB:";
 choices[43]= new Array();
 choices[43][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[43][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[43][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[43][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[43] = 0;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 5948. ";
 preguntaids[43] = 5948


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[44]= "45)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[44]= new Array();
 choices[44][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[44][1] = "Static &amp; Active process for REsolution Bank.";
 choices[44][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[44][3] = "Super Active REsponse for Banks";
 answers[44] = 0;
 units[44] = ['12'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 337. Modelo econ&oacute;mico";
 preguntaids[44] = 337


//  Id pregunta: 7946 Año de creación de pregunta: 2011
 questions[45]= "46)  Una direcci&oacute;n IP identifica:";
 choices[45]= new Array();
 choices[45][0] = "Una conexi&oacute;n.";
 choices[45][1] = "Una interfaz de tarjeta de red.";
 choices[45][2] = "Un ordenador.";
 choices[45][3] = "Una aplicaci&oacute;n interactiva.";
 answers[45] = 1;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 7946. Examen TIC A2 2010";
 preguntaids[45] = 7946


//  Id pregunta: 10865 Año de creación de pregunta: 2015
 questions[46]= "47)  SATA III ofrece una transferencia de datos de:";
 choices[46]= new Array();
 choices[46][0] = "100 MB/s";
 choices[46][1] = "200 MB/s";
 choices[46][2] = "300 MB/s";
 choices[46][3] = "600 MB/s";
 answers[46] = 3;
 units[46] = ['53'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10865. ";
 preguntaids[46] = 10865


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[47]= "48)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[47]= new Array();
 choices[47][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[47][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[47][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[47][3] = "Todas son ciertas";
 answers[47] = 3;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[47] = 3475


//  Id pregunta: 4926 Año de creación de pregunta: 2002
 questions[48]= "49)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando fibra se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Home Fiber";
 choices[48][1] = "City fiber";
 choices[48][2] = "Instant Fiber";
 choices[48][3] = "Fiber To The Home";
 answers[48] = 3;
 units[48] = ['112'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4926. ";
 preguntaids[48] = 4926


//  Id pregunta: 8101 Año de creación de pregunta: 2011
 questions[49]= "50)  El PID 0 se asigna en Unix/Linux a:";
 choices[49]= new Array();
 choices[49][0] = "Swapper";
 choices[49][1] = "Init";
 choices[49][2] = "Page daemon";
 choices[49][3] = "Load";
 answers[49] = 0;
 units[49] = ['57'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8101. Analista Ayto. Madrid 2010";
 preguntaids[49] = 8101


//  Id pregunta: 8305 Año de creación de pregunta: 2011
 questions[50]= "51)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[50]= new Array();
 choices[50][0] = "De menor longitud que la cadena inicial";
 choices[50][1] = "De la misma longitud que la cadena inicial";
 choices[50][2] = "De mayor longitud que la cadena inicial";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = 3;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8305. Examen UPM A2 2011";
 preguntaids[50] = 8305


//  Id pregunta: 7807 Año de creación de pregunta: 2010
 questions[51]= "52)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[51]= new Array();
 choices[51][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments).";
 choices[51][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto.";
 choices[51][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII.";
 choices[51][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;.";
 answers[51] = 3;
 units[51] = ['103'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7807. ";
 preguntaids[51] = 7807


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[52]= new Array();
 choices[52][0] = "Entre 1973 y 1978";
 choices[52][1] = "Entre 1992 y 1996";
 choices[52][2] = "Entre 1978 y 1985";
 choices[52][3] = "Entre 2008 y 2013";
 answers[52] = 2;
 units[52] = ['12'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 338. Modelo econ&oacute;mico";
 preguntaids[52] = 338


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[53]= "54)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[53]= new Array();
 choices[53][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[53][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[53][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[53][3] = "Todas las respuestas son correctas.";
 answers[53] = 3;
 units[53] = ['5'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 197. Uni&oacute;n Europea";
 preguntaids[53] = 197


//  Id pregunta: 3483 Año de creación de pregunta: 2006
 questions[54]= "55)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[54]= new Array();
 choices[54][0] = "SAN";
 choices[54][1] = "NAS";
 choices[54][2] = "RAID";
 choices[54][3] = "Cabina de discos";
 answers[54] = 1;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3483. ";
 preguntaids[54] = 3483


//  Id pregunta: 2260 Año de creación de pregunta: 2002
 questions[55]= "56)  Los ficheros automatizados de los que sean titulares las Cortes Generales, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo General del Poder Judicial y el Tribunal Constitucional , seg&uacute;n la Ley de Protecci&oacute;n de Datos:";
 choices[55]= new Array();
 choices[55][0] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[55][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[55][2] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 choices[55][3] = "No les ser&aacute; de aplicaci&oacute;n lo dispuesto en los T&iacute;tulos VI y VII de la misma";
 answers[55] = 0;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2260. ";
 preguntaids[55] = 2260


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[56]= new Array();
 choices[56][0] = "Apache Tomcat";
 choices[56][1] = "JBOSS";
 choices[56][2] = "WebSphere Application Server";
 choices[56][3] = "Glassfish";
 answers[56] = 0;
 units[56] = ['63', '64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[56] = 8163


//  Id pregunta: 8295 Año de creación de pregunta: 2011
 questions[57]= "58)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[57]= new Array();
 choices[57][0] = "53 TCP";
 choices[57][1] = "453 TCP";
 choices[57][2] = "456 UDP";
 choices[57][3] = "53 UDP";
 answers[57] = 0;
 units[57] = ['103'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 8295. Examen UPM A2 2011";
 preguntaids[57] = 8295


//  Id pregunta: 919 Año de creación de pregunta: 2016
 questions[58]= "59)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[58]= new Array();
 choices[58][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[58][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[58][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[58][3] = "Estos sistemas es imposible clasificarlos.";
 answers[58] = 1;
 units[58] = ['119'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 919. Junta de Extremadura A1 2015";
 preguntaids[58] = 919


//  Id pregunta: 9157 Año de creación de pregunta: 2014
 questions[59]= "60)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[59]= new Array();
 choices[59][0] = "Virtualizaci&oacute;n de escritorio.";
 choices[59][1] = "Virtualizaci&oacute;n de servidores.";
 choices[59][2] = "Sistemas SAN.";
 choices[59][3] = "Miner&iacute;a de datos.";
 answers[59] = 3;
 units[59] = ['74'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9157. Examen TIC A2 2013";
 preguntaids[59] = 9157


//  Id pregunta: 7258 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[60]= new Array();
 choices[60][0] = "Algo que alguien sabe";
 choices[60][1] = "Algo que alguien es";
 choices[60][2] = "Algo que alguien tiene";
 choices[60][3] = "Lo que una persona sabe y es";
 answers[60] = 3;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7258. ";
 preguntaids[60] = 7258


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[61]= "62)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[61][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[61][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[61][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[61] = 0;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 479. Sociedad de la informaci&oacute;n";
 preguntaids[61] = 479


//  Id pregunta: 3445 Año de creación de pregunta: 2006
 questions[62]= "63)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[62]= new Array();
 choices[62][0] = "N&uacute;mero de Registro de Control";
 choices[62][1] = "N&uacute;mero de Referencia de Control";
 choices[62][2] = "N&uacute;mero de Referencia Completo";
 choices[62][3] = "N&uacute;mero de Registro Completo";
 answers[62] = 2;
 units[62] = ['75'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3445. ";
 preguntaids[62] = 3445


//  Id pregunta: 5882 Año de creación de pregunta: 2007
 questions[63]= "64)  De acuerdo con lo establecido en la Ley 9/2014 General de Telecomunicaciones, &iquest;a cu&aacute;l de las siguientes entidades no le corresponde la competencia sancionadora en materia de telecomunicaciones?";
 choices[63]= new Array();
 choices[63][0] = "Al Secretario de Estado  para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[63][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[63][2] = "A la Agencia Estatal de Radiocomunicaciones";
 choices[63][3] = "Todas tienen competencia sancionadora";
 answers[63] = 2;
 units[63] = ['121'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5882. ";
 preguntaids[63] = 5882


//  Id pregunta: 1423 Año de creación de pregunta: 2016
 questions[64]= "65)  Los ciudadanos tienen el derecho a participar en los asuntos p&uacute;blicos, directamente o por medio de representantes, libremente elegidos en elecciones peri&oacute;dicas por sufragio universal. En relaci&oacute;n con esta frase, y seg&uacute;n lo dispuesto en el art&iacute;culo 13 de la Constituci&oacute;n Espa&ntilde;ola, indicar la afirmaci&oacute;n correcta:";
 choices[64]= new Array();
 choices[64][0] = "Solamente los espa&ntilde;oles ser&aacute;n titulares de este derecho.";
 choices[64][1] = "Solamente los espa&ntilde;oles ser&aacute;n titulares de este derecho, salvo lo que pueda establecerse por tratado o ley para el derecho de sufragio activo en las elecciones municipales.";
 choices[64][2] = "Solamente los espa&ntilde;oles ser&aacute;n titulares de este derecho, salvo lo que pueda establecerse por tratado o ley para el derecho de sufragio activo y pasivo en las elecciones municipales.";
 choices[64][3] = "Ninguna es correcta.";
 answers[64] = 2;
 units[64] = ['1'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 1423. ";
 preguntaids[64] = 1423


//  Id pregunta: 970 Año de creación de pregunta: 2016
 questions[65]= "66)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[65]= new Array();
 choices[65][0] = "personalidad jur&iacute;dica propia";
 choices[65][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[65][2] = "personalidad jur&iacute;dica plena";
 choices[65][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[65] = 1;
 units[65] = ['4', '7', '8', '9'];
 blocks[65] = ['A1', 'A2'];
 comments[65] = "Id Pregunta: 970. Ley 40/2015";
 preguntaids[65] = 970


//  Id pregunta: 6146 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como &quot;paginaci&oacute;n&quot;?:";
 choices[66]= new Array();
 choices[66][0] = "Consiste en determinar que espacio vac&iacute;o en la memoria principal es el mas indicado para ser asignado a un proceso";
 choices[66][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de pagina, las cuales sirven como unidad de almacenamiento de informaci&oacute;n";
 choices[66][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como la asignaci&oacute;n";
 choices[66][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica; llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominados segmentos";
 answers[66] = 1;
 units[66] = ['56'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6146. Examen TIC A1 MAP 2007";
 preguntaids[66] = 6146


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[67]= "68)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[67]= new Array();
 choices[67][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[67][1] = "El Congreso de los Diputados.";
 choices[67][2] = "Las Cortes Generales.";
 choices[67][3] = "El Consejo de Ministros";
 answers[67] = 2;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 36. Constituci&oacute;n de 1978";
 preguntaids[67] = 36


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[68]= "69)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[68]= new Array();
 choices[68][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[68][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[68][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[68][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[68] = 2;
 units[68] = ['1'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 83. Constituci&oacute;n de 1978";
 preguntaids[68] = 83


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Estimaci&oacute;n del riesgo";
 choices[69][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[69][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[69][3] = "Mapa de riesgos";
 answers[69] = 3;
 units[69] = ['45'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 608. AGE A1 2015";
 preguntaids[69] = 608


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[70]= "71)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[70]= new Array();
 choices[70][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[70][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[70][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[70][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[70] = 2;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 70. Constituci&oacute;n de 1978";
 preguntaids[70] = 70


//  Id pregunta: 2049 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Qu&eacute; se entiende por 'throughput'?:";
 choices[71]= new Array();
 choices[71][0] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 choices[71][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 choices[71][2] = "Es el tiempo transcurrido entre la entrega de un trabajo o una transacci&oacute;n al sistema y la recepci&oacute;n del resultado o la respuesta";
 choices[71][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[71] = 0;
 units[71] = ['39'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2049. ";
 preguntaids[71] = 2049


//  Id pregunta: 5469 Año de creación de pregunta: 2007
 questions[72]= "73)  En el An&aacute;lisis estructurado moderno, la &ldquo;lista de eventos&rdquo; se utiliza para:";
 choices[72]= new Array();
 choices[72][0] = "Mejorar los requisitos de trazabilidad.";
 choices[72][1] = "Construir diagramas Entidad-Historia";
 choices[72][2] = "Documentar las transacciones de datos en el Diagrama Entidad-Relaci&oacute;n.";
 choices[72][3] = "Construir un Diagrama de Flujo de Datos preliminar del sistema.";
 answers[72] = 3;
 units[72] = ['85'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 5469. ";
 preguntaids[72] = 5469


//  Id pregunta: 3001 Año de creación de pregunta: 2002
 questions[73]= "74)  Para la traducci&oacute;n de direcciones virtuales a f&iacute;sicas se utiliza:";
 choices[73]= new Array();
 choices[73][0] = "La paginaci&oacute;n";
 choices[73][1] = "La segmentaci&oacute;n";
 choices[73][2] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[73][3] = "Todas son falsas";
 answers[73] = 2;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3001. ";
 preguntaids[73] = 3001


//  Id pregunta: 2727 Año de creación de pregunta: 2002
 questions[74]= "75)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[74]= new Array();
 choices[74][0] = "Knowledge Interchange File";
 choices[74][1] = "Knowledge Intermediate Format";
 choices[74][2] = "Knowledge Intermediate File";
 choices[74][3] = "Knowledge Interchange Format";
 answers[74] = 3;
 units[74] = ['67'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2727. ";
 preguntaids[74] = 2727


