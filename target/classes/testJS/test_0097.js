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
//  Id pregunta: 880 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[0]= new Array();
 choices[0][0] = "Nivel 7 - MPLS.";
 choices[0][1] = "Nivel 3 - RARP.";
 choices[0][2] = "Nivel 2 - HDLC.";
 choices[0][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[0] = 2;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 880. AGE A1 2015";
 preguntaids[0] = 880


//  Id pregunta: 5816 Año de creación de pregunta: 2007
 questions[1]= "2)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[1]= new Array();
 choices[1][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[1][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[1][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[1][3] = "La citada ley no hace referencia a tal concepto";
 answers[1] = 2;
 units[1] = ['41'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5816. Examen 2006 JCYL";
 preguntaids[1] = 5816


//  Id pregunta: 7762 Año de creación de pregunta: 2010
 questions[2]= "3)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[2]= new Array();
 choices[2][0] = "Strategy.";
 choices[2][1] = "State.";
 choices[2][2] = "Observer.";
 choices[2][3] = "Command.";
 answers[2] = 2;
 units[2] = ['89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7762. ";
 preguntaids[2] = 7762


//  Id pregunta: 9558 Año de creación de pregunta: 2014
 questions[3]= "4)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[3]= new Array();
 choices[3][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[3][1] = "La estrategia del oponente es desconocida";
 choices[3][2] = "Interviene el azar";
 choices[3][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[3] = 2;
 units[3] = ['67'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9558. ";
 preguntaids[3] = 9558


//  Id pregunta: 8342 Año de creación de pregunta: 2011
 questions[4]= "5)  Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[4]= new Array();
 choices[4][0] = "Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente";
 choices[4][1] = "Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[4][2] = "Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual";
 choices[4][3] = "Ambos conceptos son incompatibles en una red FC";
 answers[4] = 2;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8342. Examen UC3M 2010";
 preguntaids[4] = 8342


//  Id pregunta: 7868 Año de creación de pregunta: 2011
 questions[5]= "6)  seg&uacute;n el CMMI v1.2 (Capability Maturity Model Integration, en espa&ntilde;ol Modelo Integrado de Capacidad y Madurez), una organizaci&oacute;n en la que en la que los procesos est&aacute;n definidos y son gestionados cuantitativamente, y en la que se establecen m&eacute;tricas de calidad para la gesti&oacute;n y rendimiento de dichos procesos, se encuentra en el nivel de capacidad:";
 choices[5]= new Array();
 choices[5][0] = "Nivel 1.";
 choices[5][1] = "Nivel 2.";
 choices[5][2] = "Nivel 3.";
 choices[5][3] = "Nivel 4.";
 answers[5] = 3;
 units[5] = ['92'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7868. Examen TIC A1 2010";
 preguntaids[5] = 7868


//  Id pregunta: 9369 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[6]= new Array();
 choices[6][0] = "OSPF";
 choices[6][1] = "RIP";
 choices[6][2] = "BGP";
 choices[6][3] = "EGP";
 answers[6] = 0;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9369. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[6] = 9369


//  Id pregunta: 10742 Año de creación de pregunta: 2015
 questions[7]= "8)  Seg&uacute;n M&eacute;trica v3, las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Reingenier&iacute;a de sistemas.";
 choices[7][1] = "Mantenimiento Perfectivo.";
 choices[7][2] = "Reestructuraci&oacute;n del Software.";
 choices[7][3] = "Mantenimiento Preventivo.";
 answers[7] = 1;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10742. ";
 preguntaids[7] = 10742


//  Id pregunta: 2461 Año de creación de pregunta: 2002
 questions[8]= "9)  Seg&uacute;n el R.D. 209/2003:";
 choices[8]= new Array();
 choices[8][0] = "la Administraci&oacute;n P&uacute;blica proporcionar&aacute; al ciudadano una direcci&oacute;n &uacute;nica mediante la que &eacute;ste deber&aacute; realizar la tramitaci&oacute;n electr&oacute;nica pertinente una vez se disponga de los medios adecuados";
 choices[8][1] = "Se podr&aacute;n realizar por los organismos competentes copias firmadas de los documentos electr&oacute;nicos, de la misma manera que se pueden compulsar y sellar copias de los documentos en papel";
 choices[8][2] = "Los c&oacute;mputos de los plazos de entrega a efectos legales podr&aacute;n incluir d&iacute;as inh&aacute;biles, al estar los registros electr&oacute;nicos funcionando 24 horas al d&iacute;a y 7 d&iacute;as a la semana";
 choices[8][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[8] = 3;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 2461. ";
 preguntaids[8] = 2461


//  Id pregunta: 2787 Año de creación de pregunta: 2002
 questions[9]= "10)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[9]= new Array();
 choices[9][0] = "En todo caso es falso";
 choices[9][1] = "Siempre es cierto";
 choices[9][2] = "Depende de la carga de trabajo de la CPU";
 choices[9][3] = "Depende del 'throughput'";
 answers[9] = 1;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2787. ";
 preguntaids[9] = 2787


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[10]= "11)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[10]= new Array();
 choices[10][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[10][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[10][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[10][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[10] = 3;
 units[10] = ['12'];
 blocks[10] = ['A3'];
 comments[10] = "Id Pregunta: 330. Modelo econ&oacute;mico";
 preguntaids[10] = 330


//  Id pregunta: 6498 Año de creación de pregunta: 2003
 questions[11]= "12)  &iquest;Qu&eacute; niveles implementa el m&oacute;dem de cable?";
 choices[11]= new Array();
 choices[11][0] = "El nivel f&iacute;sico, de control de acceso al medio e IP";
 choices[11][1] = "El nivel f&iacute;sico, enlace, de red y de transporte";
 choices[11][2] = "El nivel f&iacute;sico y de control de acceso al medio";
 choices[11][3] = "Depende, a partir de DOCSIS 2.0 se implementan el nivel f&iacute;sico y de control de acceso al medio e IP";
 answers[11] = 2;
 units[11] = ['115'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6498. ";
 preguntaids[11] = 6498


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[12]= "13)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[12]= new Array();
 choices[12][0] = "Al Gobierno.";
 choices[12][1] = "A las Cortes Generales.";
 choices[12][2] = "Al Poder Judicial.";
 choices[12][3] = "Al Congreso de los Diputados.";
 answers[12] = 0;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 22. Constituci&oacute;n de 1978";
 preguntaids[12] = 22


//  Id pregunta: 2435 Año de creación de pregunta: 2006
 questions[13]= "14)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "Portabilidad consiste en la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes.";
 choices[13][1] = "lnteroperabilidad consiste en la posibilidad de enlazar distintos ordenadores.";
 choices[13][2] = "Una de las principales ventajas de usar sistemas abiertos consiste en proteger la inversi&oacute;n en equipos f&iacute;sicos, software, formaci&oacute;n y usuarios.";
 choices[13][3] = "Con la utilizaci&oacute;n de sistemas abiertos se persigue evitar el 's&iacute;ndrome de cliente cautivo'.";
 answers[13] = 0;
 units[13] = ['43'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2435. ";
 preguntaids[13] = 2435


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[14]= new Array();
 choices[14][0] = "Art. 25 LO, 3/2007.";
 choices[14][1] = "Art. 23 LO, 3/2007.";
 choices[14][2] = "Art. 14 LO, 3/2007.";
 choices[14][3] = "Ninguna es correcta, es el art. 13.";
 answers[14] = 0;
 units[14] = ['14'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 396. Pol&iacute;ticas de igualdad";
 preguntaids[14] = 396


//  Id pregunta: 1441 Año de creación de pregunta: 2016
 questions[15]= "16)  La LOPD en su art&iacute;culo 5, nos dice que los interesados a los que se soliciten datos personales deber&aacute;n ser previamente informados :";
 choices[15]= new Array();
 choices[15][0] = "De la posibilidad de consultar y rectificar sus datos.";
 choices[15][1] = "De la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 choices[15][2] = "De ejercitar los derechos de acceso y rectificaci&oacute;n.";
 choices[15][3] = "De ejercitar s&oacute;lo los derechos de cancelaci&oacute;n.";
 answers[15] = 1;
 units[15] = ['35'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 1441. ";
 preguntaids[15] = 1441


//  Id pregunta: 9075 Año de creación de pregunta: 2014
 questions[16]= "17)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[16]= new Array();
 choices[16][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[16][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[16][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[16][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[16] = 2;
 units[16] = ['71'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9075. ";
 preguntaids[16] = 9075


//  Id pregunta: 7559 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &laquo;Personas&raquo; en el modelo EFQM?";
 choices[17]= new Array();
 choices[17][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos.";
 choices[17][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n.";
 choices[17][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n.";
 choices[17][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n.";
 answers[17] = 2;
 units[17] = ['98'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7559. Map 2005";
 preguntaids[17] = 7559


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[18]= new Array();
 choices[18][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[18][1] = "Solamente el Congreso.";
 choices[18][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[18][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[18] = 0;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 4. Constituci&oacute;n de 1978";
 preguntaids[18] = 4


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[19]= "20)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[19]= new Array();
 choices[19][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[19][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[19][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[19][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[19] = 2;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 11. Constituci&oacute;n de 1978";
 preguntaids[19] = 11


//  Id pregunta: 10020 Año de creación de pregunta: 2015
 questions[20]= "21)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[20]= new Array();
 choices[20][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[20][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[20][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[20][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[20] = 3;
 units[20] = ['84'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10020. Examen TIC A2 2014";
 preguntaids[20] = 10020


//  Id pregunta: 8659 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;Cu&aacute;les son posibles topolog&iacute;as SAN de fibra &oacute;ptica?";
 choices[21]= new Array();
 choices[21][0] = "Punto a punto";
 choices[21][1] = "Bucle arbitrado";
 choices[21][2] = "Estructura Conmutada";
 choices[21][3] = "Todas son v&aacute;lidas";
 answers[21] = 3;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8659. ";
 preguntaids[21] = 8659


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[22]= "23)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[22]= new Array();
 choices[22][0] = "3 a&ntilde;os.";
 choices[22][1] = "5 a&ntilde;os.";
 choices[22][2] = "4 a&ntilde;os.";
 choices[22][3] = "6 a&ntilde;os.";
 answers[22] = 1;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 20. Constituci&oacute;n de 1978";
 preguntaids[22] = 20


//  Id pregunta: 10461 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[23]= new Array();
 choices[23][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[23][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[23][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[23][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[23] = 1;
 units[23] = ['101'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10461. ";
 preguntaids[23] = 10461


//  Id pregunta: 10788 Año de creación de pregunta: 2015
 questions[24]= "25)  La entrada en vigor de la Ley 39/2015 es:";
 choices[24]= new Array();
 choices[24][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[24][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[24][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[24][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[24] = 1;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 10788. ";
 preguntaids[24] = 10788


//  Id pregunta: 9882 Año de creación de pregunta: 2015
 questions[25]= "26)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[25]= new Array();
 choices[25][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[25][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[25][2] = "Ambas";
 choices[25][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[25] = 2;
 units[25] = ['7', '19'];
 blocks[25] = ['A2', 'A4'];
 comments[25] = "Id Pregunta: 9882. ";
 preguntaids[25] = 9882


//  Id pregunta: 4997 Año de creación de pregunta: 2002
 questions[26]= "27)  Los sat&eacute;lites de comunicaciones utilizan frecuencias elevadas (bandas Ku y K) porque:";
 choices[26]= new Array();
 choices[26][0] = "Las ondas de mayor frecuencia permiten un mayor alcance y atravesar obst&aacute;culos";
 choices[26][1] = "Las frecuencias altas permiten enviar mayor cantidad de informaci&oacute;n por segundo";
 choices[26][2] = "En estas bandas la atenuaci&oacute;n es menor";
 choices[26][3] = "Aunque la atenuaci&oacute;n es menor en estas frecuencias su alcance es mayor";
 answers[26] = 1;
 units[26] = ['117'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4997. ";
 preguntaids[26] = 4997


//  Id pregunta: 4147 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Cu&aacute;l de estos es un tipo de fichero de sonido?";
 choices[27]= new Array();
 choices[27][0] = "TIFF";
 choices[27][1] = "PNG";
 choices[27][2] = "VRML";
 choices[27][3] = "MIDI";
 answers[27] = 3;
 units[27] = ['81'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 4147. ";
 preguntaids[27] = 4147


//  Id pregunta: 1973 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 34/2002 de SSI-CE, NO ser&aacute; obligaci&oacute;n de los prestadores de Servicios de la Sociedad de la Informaci&oacute;n permitir el acceso por medios electr&oacute;nicos de forma f&aacute;cil directa y gratuita:";
 choices[28]= new Array();
 choices[28][0] = "A su nombre o denominaci&oacute;n social.";
 choices[28][1] = "A el n&uacute;mero de identificaci&oacute;n fiscal que Ie corresponda.";
 choices[28][2] = "A la informaci&oacute;n clara y exacta sobre el precio del producto 6 servicio.";
 choices[28][3] = "AI n&uacute;mero de registro del dominio que identifique al prestador de servicios en internet.";
 answers[28] = 3;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 1973. ";
 preguntaids[28] = 1973


//  Id pregunta: 6257 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes opciones no es una herramienta de Dise&ntilde;o de Sistemas en Tiempo Real?";
 choices[29]= new Array();
 choices[29][0] = "DARTS.";
 choices[29][1] = "UML - RT.";
 choices[29][2] = "Rational Rose - RT.";
 choices[29][3] = "PERTS.";
 answers[29] = 0;
 units[29] = ['86'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6257. ";
 preguntaids[29] = 6257


//  Id pregunta: 10260 Año de creación de pregunta: 2015
 questions[30]= "31)  De los siguientes t&iacute;tulos, &iquest;cual NO es uno libro del core de publicaciones de ITIL?";
 choices[30]= new Array();
 choices[30][0] = "Servicio de Optimizaci&oacute;n";
 choices[30][1] = "Transici&oacute;n del Servicio";
 choices[30][2] = "Dise&ntilde;o del Servicio";
 choices[30][3] = "Estrategia del Servicio";
 answers[30] = 0;
 units[30] = ['101'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 10260. SDTO (Strategy, Design, Transition, Operation) + Mantenimiento";
 preguntaids[30] = 10260


//  Id pregunta: 7244 Año de creación de pregunta: 2010
 questions[31]= "32)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[31]= new Array();
 choices[31][0] = "Responsabilidad de la direcci&oacute;n";
 choices[31][1] = "Realizaci&oacute;n del producto";
 choices[31][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[31][3] = "Todas las respuestas anteriores son correctas";
 answers[31] = 3;
 units[31] = ['98'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7244. ";
 preguntaids[31] = 7244


//  Id pregunta: 10393 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[32]= new Array();
 choices[32][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[32][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[32][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[32][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[32] = 2;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 10393. ";
 preguntaids[32] = 10393


//  Id pregunta: 9802 Año de creación de pregunta: 2015
 questions[33]= "34)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[33]= new Array();
 choices[33][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[33][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[33][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[33][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[33] = 2;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 9802. ";
 preguntaids[33] = 9802


//  Id pregunta: 9967 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Qu&eacute; serie CCN-STIC constituye un conjunto de normas desarrolladas para entornos basados en el sistema operativo Windows de Microsoft?";
 choices[34]= new Array();
 choices[34][0] = "500";
 choices[34][1] = "600";
 choices[34][2] = "700";
 choices[34][3] = "400";
 answers[34] = 0;
 units[34] = ['46'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9967. ";
 preguntaids[34] = 9967


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[35]= "36)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[35]= new Array();
 choices[35][0] = "La Ley Org&aacute;nica 2/2011";
 choices[35][1] = "La Ley Org&aacute;nica 2/2012";
 choices[35][2] = "La Ley Org&aacute;nica 3/2012";
 choices[35][3] = "La Ley Org&aacute;nica 2/2002";
 answers[35] = 1;
 units[35] = ['12'];
 blocks[35] = ['A3'];
 comments[35] = "Id Pregunta: 336. Modelo econ&oacute;mico";
 preguntaids[35] = 336


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[36]= "37)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[36]= new Array();
 choices[36][0] = "El derecho a la propiedad privada.";
 choices[36][1] = "El derecho de asociaci&oacute;n.";
 choices[36][2] = "El derecho de fundaci&oacute;n.";
 choices[36][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[36] = 1;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[36] = 2


//  Id pregunta: 883 Año de creación de pregunta: 2016
 questions[37]= "38)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[37]= new Array();
 choices[37][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[37][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[37][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[37][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[37] = 1;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 883. TAI 2016.";
 preguntaids[37] = 883


//  Id pregunta: 7821 Año de creación de pregunta: 2010
 questions[38]= "39)  En relaci&oacute;n a &laquo;Internet Assigned Numbers Authority&raquo; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[38]= new Array();
 choices[38][0] = "IANA coordina a nivel global el &laquo;DNS root&raquo;.";
 choices[38][1] = "IANA gestiona el dominio .int (top-level).";
 choices[38][2] = "IANA asigna las direcciones IP.";
 choices[38][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board.";
 answers[38] = 2;
 units[38] = ['103'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7821. ";
 preguntaids[38] = 7821


//  Id pregunta: 7046 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un componente de CORBA?";
 choices[39]= new Array();
 choices[39][0] = "Dynamic Invocation Interface (DII)";
 choices[39][1] = "Object Request Broker (ORB)";
 choices[39][2] = "Dynamic Skeleton Interface (DSI)";
 choices[39][3] = "Todos lo son";
 answers[39] = 3;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7046. ";
 preguntaids[39] = 7046


//  Id pregunta: 7481 Año de creación de pregunta: 2010
 questions[40]= "41)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[40]= new Array();
 choices[40][0] = "Una extensi&oacute;n de Swing.";
 choices[40][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[40][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[40][3] = "Una familia de fuentes de caracteres.";
 answers[40] = 1;
 units[40] = ['64'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7481. Map 2005";
 preguntaids[40] = 7481


//  Id pregunta: 5537 Año de creación de pregunta: 2007
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de calidad CMM (Capacity Mature Model)?";
 choices[41]= new Array();
 choices[41][0] = "Inicial";
 choices[41][1] = "Administrado";
 choices[41][2] = "Definido";
 choices[41][3] = "Ideal";
 answers[41] = 3;
 units[41] = ['93'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 5537. ";
 preguntaids[41] = 5537


//  Id pregunta: 8323 Año de creación de pregunta: 2011
 questions[42]= "43)  El objeto anchor de Javascript indica...";
 choices[42]= new Array();
 choices[42][0] = "Los enlaces internos del documento";
 choices[42][1] = "Los v&iacute;nculos externos del documento";
 choices[42][2] = "Array con todas las anclas del documento";
 choices[42][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[42] = 0;
 units[42] = ['62'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8323. Examen UPM A2 2011";
 preguntaids[42] = 8323


//  Id pregunta: 10069 Año de creación de pregunta: 2015
 questions[43]= "44)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[43]= new Array();
 choices[43][0] = "grep error log.txt | wc &ndash;l";
 choices[43][1] = "grep wc &ndash;l |error log.txt";
 choices[43][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[43][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[43] = 0;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 10069. Examen TIC A2 2014";
 preguntaids[43] = 10069


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[44]= "45)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[44]= new Array();
 choices[44][0] = "P&uacute;blica.";
 choices[44][1] = "Privada.";
 choices[44][2] = "Ambas son correctas.";
 choices[44][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[44] = 0;
 units[44] = ['14'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 399. Pol&iacute;ticas de igualdad";
 preguntaids[44] = 399


//  Id pregunta: 7189 Año de creación de pregunta: 2010
 questions[45]= "46)  UMLSec:";
 choices[45]= new Array();
 choices[45][0] = "Se utiliza en el desarrollo de software para modelizar pol&iacute;ticas de control de acceso, integr&aacute;ndolas en el sistema desarrollado.";
 choices[45][1] = "Es una metodolog&iacute;a para el an&aacute;lisis y la gesti&oacute;n de riesgos en proyectos de desarrollo orientado a objetos.";
 choices[45][2] = "Es sin&oacute;nimo de SecureUML.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = 3;
 units[45] = ['89'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7189. Castilla La Mancha 2009";
 preguntaids[45] = 7189


//  Id pregunta: 8302 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[46]= new Array();
 choices[46][0] = "SISD";
 choices[46][1] = "SIMD";
 choices[46][2] = "MISD";
 choices[46][3] = "MIMD";
 answers[46] = 2;
 units[46] = ['49'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8302. Examen UPM A2 2011";
 preguntaids[46] = 8302


//  Id pregunta: 6859 Año de creación de pregunta: 2010
 questions[47]= "48)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[47]= new Array();
 choices[47][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[47][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[47][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[47][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[47] = 3;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6859. TIC A 2009";
 preguntaids[47] = 6859


//  Id pregunta: 6684 Año de creación de pregunta: 2009
 questions[48]= "49)  En el M&eacute;todo ALBRETCH de los puntos de funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[48]= new Array();
 choices[48][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[48][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[48][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[48][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[48] = 0;
 units[48] = ['94'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6684. ";
 preguntaids[48] = 6684


//  Id pregunta: 10319 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[49]= new Array();
 choices[49][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[49][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[49][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[49][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[49] = 1;
 units[49] = ['43'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 10319. ";
 preguntaids[49] = 10319


//  Id pregunta: 2050 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Qu&eacute; se entiende por capacidad?:";
 choices[50]= new Array();
 choices[50][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[50][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[50][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[50][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[50] = 0;
 units[50] = ['39'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2050. ";
 preguntaids[50] = 2050


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[51]= new Array();
 choices[51][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[51][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[51][2] = "Las respuestas a) b) no son correctas.";
 choices[51][3] = "Las respuestas a) y b) son correctas.";
 answers[51] = 3;
 units[51] = ['11'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 298. Presupuestos generales";
 preguntaids[51] = 298


//  Id pregunta: 1785 Año de creación de pregunta: 2016
 questions[52]= "53)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, otorga la equivalencia funcional con la firma manuscrita respecto de los datos consignados en forma electr&oacute;nica a:";
 choices[52]= new Array();
 choices[52][0] = "La firma electr&oacute;nica general.";
 choices[52][1] = "La firma electr&oacute;nica avanzada.";
 choices[52][2] = "La firma electr&oacute;nica reconocida";
 choices[52][3] = "La firma electr&oacute;nica autenticada.";
 answers[52] = 2;
 units[52] = ['77'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1785. ";
 preguntaids[52] = 1785


//  Id pregunta: 1552 Año de creación de pregunta: 2016
 questions[53]= "54)  Cocoa es el conjunto de frameworks orientados a objetos que permiten el desarrollo de aplicaciones nativas para Mac OS X. &iquest;C&oacute;mo se llama la versi&oacute;n para iOS?";
 choices[53]= new Array();
 choices[53][0] = "Cocoa Touch.";
 choices[53][1] = "MiniCocoa.";
 choices[53][2] = "Cocoa iOS.";
 choices[53][3] = "iTunes.";
 answers[53] = 0;
 units[53] = ['59'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1552. ";
 preguntaids[53] = 1552


//  Id pregunta: 955 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[54]= new Array();
 choices[54][0] = "De 1 a  4";
 choices[54][1] = "De 3 a  7";
 choices[54][2] = "De 5 a  9";
 choices[54][3] = "De 7 a 11";
 answers[54] = 2;
 units[54] = ['34', '84'];
 blocks[54] = ['B1', 'B3'];
 comments[54] = "Id Pregunta: 955. Metodologias &aacute;giles";
 preguntaids[54] = 955


//  Id pregunta: 5486 Año de creación de pregunta: 2007
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[55]= new Array();
 choices[55][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[55][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[55][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[55][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[55] = 2;
 units[55] = ['80'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 5486. ";
 preguntaids[55] = 5486


//  Id pregunta: 5709 Año de creación de pregunta: 2007
 questions[56]= "57)  Seg&uacute;n la Norma UNE-ISO/IEC 27001:2007, la facultad de un control para lograr los objetivos de seguridad para la que fue dise&ntilde;ado se denomina";
 choices[56]= new Array();
 choices[56][0] = "eficacia de un control";
 choices[56][1] = "eficiencia de un control";
 choices[56][2] = "idoneidad de un control";
 choices[56][3] = "finalidad de un control";
 answers[56] = 0;
 units[56] = ['119'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5709. ";
 preguntaids[56] = 5709


//  Id pregunta: 1009 Año de creación de pregunta: 2016
 questions[57]= "58)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[57]= new Array();
 choices[57][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[57][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[57][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[57][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[57] = 2;
 units[57] = ['4', '7', '8', '9'];
 blocks[57] = ['A1', 'A2'];
 comments[57] = "Id Pregunta: 1009. Ley 40/2015";
 preguntaids[57] = 1009


//  Id pregunta: 8891 Año de creación de pregunta: 2013
 questions[58]= "59)  Se&ntilde;ale la frase correcta acerca de los diferentes modelos de representaci&oacute;n del conocimiento:";
 choices[58]= new Array();
 choices[58][0] = "En los procesos de inferencia en redes sem&aacute;nticas el uso de la herencia permite efectuar emparejamientos sin necesidad de un homomorfismo total entre la red pregunta y la red respuesta.";
 choices[58][1] = "La utilizaci&oacute;n de marcos como modo de representaci&oacute;n de conocimiento permite asociar a un concepto un conjunto de atributos est&aacute;ticos, cuya actualizaci&oacute;n o modificaci&oacute;n no forma parte del modelo.";
 choices[58][2] = "El algoritmo de extracci&oacute;n de la ra&iacute;z cuadrada de un n&uacute;mero es un ejemplo de representaci&oacute;n declarativa de conocimiento.";
 choices[58][3] = "En una red neuronal entrenada los pesos de los enlaces entre neuronas dependen solamente del algoritmo de entrenamiento empleado.";
 answers[58] = 0;
 units[58] = ['68'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8891. Examen AGE TIC A1 2011";
 preguntaids[58] = 8891


//  Id pregunta: 10641 Año de creación de pregunta: 2015
 questions[59]= "60)  Seg&uacute;n la Ley 9/2014, el Gobierno regular&aacute; las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico, que ser&aacute;n (1) no discriminatorias, (2) proporcionadas, (3) neutrales y (4) transparentes.";
 choices[59]= new Array();
 choices[59][0] = "Son ciertas 1, 2 y 3";
 choices[59][1] = "Son ciertas 1, 2, y 4";
 choices[59][2] = "Son ciertas 1, 3, y 4";
 choices[59][3] = "Son todas ciertas";
 answers[59] = 1;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10641. Articulo 61";
 preguntaids[59] = 10641


//  Id pregunta: 7768 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[60]= new Array();
 choices[60][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[60][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits.";
 choices[60][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits.";
 choices[60][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits.";
 answers[60] = 2;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7768. ";
 preguntaids[60] = 7768


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[61]= "62)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[61]= new Array();
 choices[61][0] = "Establecer tributos.";
 choices[61][1] = "Desarrollar lo establecido en una Ley.";
 choices[61][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[61][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[61] = 0;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 24. Constituci&oacute;n de 1978";
 preguntaids[61] = 24


//  Id pregunta: 8178 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[62]= new Array();
 choices[62][0] = "ISO/IEC 9126";
 choices[62][1] = "ISO 8859";
 choices[62][2] = "ISO 14000";
 choices[62][3] = "ISO/IEC 14496";
 answers[62] = 0;
 units[62] = ['42'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 8178. Examen TIC A2 2010 interna";
 preguntaids[62] = 8178


//  Id pregunta: 1752 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta. La cabecera de IPv6 es:";
 choices[63]= new Array();
 choices[63][0] = "Menor que la de IPv4.";
 choices[63][1] = "Mayor que la de IPv4.";
 choices[63][2] = "Igual que la de IPv4.";
 choices[63][3] = "No hay cabecera propiamente dicha.";
 answers[63] = 1;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1752. ";
 preguntaids[63] = 1752


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[64]= new Array();
 choices[64][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[64][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[64][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[64][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[64] = 3;
 units[64] = ['12'];
 blocks[64] = ['A3'];
 comments[64] = "Id Pregunta: 341. Modelo econ&oacute;mico";
 preguntaids[64] = 341


//  Id pregunta: 1656 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[65]= new Array();
 choices[65][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[65][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[65][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[65][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno";
 answers[65] = 2;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 1656. ";
 preguntaids[65] = 1656


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[66]= "67)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[66]= new Array();
 choices[66][0] = "Seguridad Social y AEAT";
 choices[66][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[66][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[66][3] = "Todos los anteriores";
 answers[66] = 3;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 470. Estrategia TIC";
 preguntaids[66] = 470


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[67]= "68)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[67][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[67][2] = "b) y d) son verdaderas";
 choices[67][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[67] = 1;
 units[67] = ['23'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 522. Direcci&oacute;n p&uacute;blica";
 preguntaids[67] = 522


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[68]= new Array();
 choices[68][0] = "Las Cortes Generales.";
 choices[68][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[68][2] = "El Gobierno.";
 choices[68][3] = "El Congreso de los Diputados.";
 answers[68] = 0;
 units[68] = ['11'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 305. Presupuestos generales";
 preguntaids[68] = 305


//  Id pregunta: 4804 Año de creación de pregunta: 2002
 questions[69]= "70)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[69]= new Array();
 choices[69][0] = "Los paquetes no han de llegar ordenados";
 choices[69][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[69][2] = "Los mensajes no se trocean";
 choices[69][3] = "Los paquetes han de llegar ordenados";
 answers[69] = 0;
 units[69] = ['112'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4804. ";
 preguntaids[69] = 4804


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[70]= "71)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[70]= new Array();
 choices[70][0] = "Un recurso de incumplimiento.";
 choices[70][1] = "Recurso de carencia.";
 choices[70][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[70][3] = "Ninguna es correcta.";
 answers[70] = 2;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 192. Uni&oacute;n Europea";
 preguntaids[70] = 192


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[71]= "72)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[71]= new Array();
 choices[71][0] = "La Ley General Tributaria.";
 choices[71][1] = "La Ley Presupuestaria.";
 choices[71][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[71][3] = "Ninguna de las respuestas es correcta.";
 answers[71] = 0;
 units[71] = ['11'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 304. Presupuestos generales";
 preguntaids[71] = 304


//  Id pregunta: 1110 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale, de los siguientes est&aacute;ndares, cu&aacute;l NO est&aacute; recogido en la Norma T&eacute;cnica de Interoperabilidad NTI de Cat&aacute;logo de est&aacute;ndares en la categor&iacute;a de &quot;Formatos ficheros - Cartograf&iacute;a y sistemas de informaci&oacute;n geogr&aacute;fica&quot;:";
 choices[72]= new Array();
 choices[72][0] = "SVG";
 choices[72][1] = "WFS";
 choices[72][2] = "GML";
 choices[72][3] = "WMS";
 answers[72] = 0;
 units[72] = ['44'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 1110. ";
 preguntaids[72] = 1110


//  Id pregunta: 9931 Año de creación de pregunta: 2015
 questions[73]= "74)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qui&eacute;n impulsar&aacute; la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[73]= new Array();
 choices[73][0] = "La alta direcci&oacute;n.";
 choices[73][1] = "Los responsables de procesos de gesti&oacute;n.";
 choices[73][2] = "El Presidente del Gobierno.";
 choices[73][3] = "El Consejo de Ministros.";
 answers[73] = 0;
 units[73] = ['44'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 9931. ";
 preguntaids[73] = 9931


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[74]= "75)  El Tribunal de Justicia se cre&oacute; en:";
 choices[74]= new Array();
 choices[74][0] = "El Tratado de la CECA.";
 choices[74][1] = "El Tratado de Niza.";
 choices[74][2] = "El Tratado de &Aacute;msterdam.";
 choices[74][3] = "El Tratado de Lisboa.";
 answers[74] = 0;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 129. Uni&oacute;n Europea";
 preguntaids[74] = 129


