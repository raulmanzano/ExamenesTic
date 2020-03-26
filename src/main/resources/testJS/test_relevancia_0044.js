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
//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "De la C&aacute;mara respectiva.";
 choices[0][1] = "Del Rey.";
 choices[0][2] = "Del Tribunal Constitucional.";
 choices[0][3] = "Del Tribunal Supremo.";
 answers[0] = 0;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 50. Constituci&oacute;n de 1978";
 preguntaids[0] = 50


//  Id pregunta: 6066 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave, seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[1]= new Array();
 choices[1][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[1][1] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[1][2] = "Carecer de los preceptivos cuadros de tarifas o de precios exigidos por la normativa vigente.";
 choices[1][3] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 answers[1] = 0;
 units[1] = ['121'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6066. TIC B 2007";
 preguntaids[1] = 6066


//  Id pregunta: 10510 Año de creación de pregunta: 2015
 questions[2]= "3)  Se&ntilde;ale de entre las siguientes, la opci&oacute;n incorrecta en cuanto a las caracter&iacute;sticas del principios del modelado orientado a objetos";
 choices[2]= new Array();
 choices[2][0] = "Polimorfismo, encapsulaci&oacute;n y herencia";
 choices[2][1] = "Reusabilidad, modulaci&oacute;n y herencia";
 choices[2][2] = "Herencia, polimorfismo";
 choices[2][3] = "Reusabilidad, abstracci&oacute;n y herencia";
 answers[2] = 1;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10510. ";
 preguntaids[2] = 10510


//  Id pregunta: 4783 Año de creación de pregunta: 2002
 questions[3]= "4)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[3]= new Array();
 choices[3][0] = "M/M/1.";
 choices[3][1] = "M/M/1/1.";
 choices[3][2] = "M/G/1.";
 choices[3][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[3] = 3;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 4783. ";
 preguntaids[3] = 4783


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[4]= "5)  No es objetivo de la Ley 39/2015:";
 choices[4]= new Array();
 choices[4][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[4][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[4][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[4][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[4] = 2;
 units[4] = ['7', '47'];
 blocks[4] = ['A2', 'B1'];
 comments[4] = "Id Pregunta: 9790. ";
 preguntaids[4] = 9790


//  Id pregunta: 4697 Año de creación de pregunta: 2002
 questions[5]= "6)  El nivel encargado de la correcci&oacute;n definitiva de errores de comunicaci&oacute;n en el modelo de referencia OSI es:";
 choices[5]= new Array();
 choices[5][0] = "Sesi&oacute;n";
 choices[5][1] = "Red";
 choices[5][2] = "Transporte";
 choices[5][3] = "Enlace";
 answers[5] = 2;
 units[5] = ['105'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4697. ";
 preguntaids[5] = 4697


//  Id pregunta: 6869 Año de creación de pregunta: 2010
 questions[6]= "7)  Por raz&oacute;n de su cuant&iacute;a, &iquest;en qu&eacute; contratos de objeto inform&aacute;tico se precisa autorizaci&oacute;n del Consejo de Ministros para poder celebrar el contrato?";
 choices[6]= new Array();
 choices[6][0] = "Cuando su cuant&iacute;a es igual o superior a 10 millones de euros.";
 choices[6][1] = "Cuando su cuant&iacute;a es igual o superior a 12 millones de euros.";
 choices[6][2] = "Cuando su cuant&iacute;a es igual o superior a 15 millones de euros.";
 choices[6][3] = "No se precisa autorizaci&oacute;n del Consejo de Ministros por motivos de cuant&iacute;a en los contratos de objeto inform&aacute;tico.";
 answers[6] = 1;
 units[6] = ['37'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 6869. TIC A 2009";
 preguntaids[6] = 6869


//  Id pregunta: 10917 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Qu&eacute; protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[7]= new Array();
 choices[7][0] = "AH";
 choices[7][1] = "RSA";
 choices[7][2] = "IKE";
 choices[7][3] = "ESP";
 answers[7] = 3;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10917. ";
 preguntaids[7] = 10917


//  Id pregunta: 9113 Año de creación de pregunta: 2014
 questions[8]= "9)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[8]= new Array();
 choices[8][0] = "Intrastructure e Hiperstructure.";
 choices[8][1] = "Basic y Complex.";
 choices[8][2] = "Infrastructure y Superstructure.";
 choices[8][3] = "Infrastructure y Substructure.";
 answers[8] = 2;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9113. Examen TIC A2 2013";
 preguntaids[8] = 9113


//  Id pregunta: 2538 Año de creación de pregunta: 2004
 questions[9]= "10)  En el entorno de la seguridad de los sistemas operativos UNIX y redes de ordenadores, se llama socket:";
 choices[9]= new Array();
 choices[9][0] = "A la combinaci&oacute;n de una direcci&oacute;n de m&aacute;quina y un puerto";
 choices[9][1] = "A la combinaci&oacute;n de una direcci&oacute;n m&aacute;quina, un puerto y un usuario autenticado de una aplicaci&oacute;n";
 choices[9][2] = "A la conexi&oacute;n entre la m&aacute;quina receptora y la emisora en una red con protocolos TCP/IP";
 choices[9][3] = "Es el protocolo (puerto 113, TCP) que utiliza un mecanismo para determinar nombres de usuarios en conexiones TCP. Trabaja conjuntamente con procesos del tipo &quot;identd&quot; y programas &quot;TCP Wrappers&quot;";
 answers[9] = 0;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2538. ";
 preguntaids[9] = 2538


//  Id pregunta: 1524 Año de creación de pregunta: 2016
 questions[10]= "11)  En una trama Ethernet, &iquest;qu&eacute; valor en binario toma el campo delimitador de inicio de trama?";
 choices[10]= new Array();
 choices[10][0] = "#######";
 choices[10][1] = "1,00E+07";
 choices[10][2] = "#######";
 choices[10][3] = "#######";
 answers[10] = 0;
 units[10] = ['112'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1524. ";
 preguntaids[10] = 1524


//  Id pregunta: 2057 Año de creación de pregunta: 2002
 questions[11]= "12)  A efectos de la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el:";
 choices[11]= new Array();
 choices[11][0] = "Encargado del tratamiento";
 choices[11][1] = "Afectado o interesado";
 choices[11][2] = "Responsable del fichero o tratamiento";
 choices[11][3] = "Decisor del tratamiento";
 answers[11] = 2;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2057. ";
 preguntaids[11] = 2057


//  Id pregunta: 8850 Año de creación de pregunta: 2013
 questions[12]= "13)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP:";
 choices[12]= new Array();
 choices[12][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[12][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al c&oacute;dec G.711.";
 choices[12][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = 0;
 units[12] = ['110'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8850. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[12] = 8850


//  Id pregunta: 5215 Año de creación de pregunta: 2006
 questions[13]= "14)  Con respecto al est&aacute;ndar DOCSIS 1.1 (Data over Cable Service Interface Specification), se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[13]= new Array();
 choices[13][0] = "Especifica mecanismos para garantizar la QoS de flujo de datos en tiempo real como la voz.";
 choices[13][1] = "La voz y los datos viajan por canales diferentes, pero permitiendo un tratamiento uniforme en la red HFC.";
 choices[13][2] = "En la versi&oacute;n europea de DOCSIS 1.1 se establece un m&aacute;ximo de 160 km entre el CMTS (Cable Modem Termination System).";
 choices[13][3] = "En DOCSIS 1.1 est&aacute; prevista la definici&oacute;n para el soporte de ATM.";
 answers[13] = 1;
 units[13] = ['115'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5215. ";
 preguntaids[13] = 5215


//  Id pregunta: 3942 Año de creación de pregunta: 2002
 questions[14]= "15)  No es una de las formas de aplicar COCOMO:";
 choices[14]= new Array();
 choices[14][0] = "B&aacute;sico";
 choices[14][1] = "Avanzado";
 choices[14][2] = "Intermedio";
 choices[14][3] = "Asistido";
 answers[14] = 3;
 units[14] = ['94'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3942. ";
 preguntaids[14] = 3942


//  Id pregunta: 2800 Año de creación de pregunta: 2002
 questions[15]= "16)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[15]= new Array();
 choices[15][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[15][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[15][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[15][3] = "Todas son v&aacute;lidas";
 answers[15] = 1;
 units[15] = ['49'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2800. ";
 preguntaids[15] = 2800


//  Id pregunta: 6964 Año de creación de pregunta: 2010
 questions[16]= "17)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[16]= new Array();
 choices[16][0] = "Diagrama de Componentes";
 choices[16][1] = "Diagrama de Descomposici&oacute;n";
 choices[16][2] = "Diagrama de Despliegue";
 choices[16][3] = "Diagrama de Estructura";
 answers[16] = 2;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6964. TIC-B 2009 bloque desarrollo";
 preguntaids[16] = 6964


//  Id pregunta: 6147 Año de creación de pregunta: 2003
 questions[17]= "18)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?:";
 choices[17]= new Array();
 choices[17][0] = "Dise&ntilde;o de clases";
 choices[17][1] = "Descripci&oacute;n de interfaces entre subsistemas";
 choices[17][2] = "Modelo de clases de an&aacute;lisis";
 choices[17][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso";
 answers[17] = 0;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6147. Examen TIC A1 MAP 2007";
 preguntaids[17] = 6147


//  Id pregunta: 2413 Año de creación de pregunta: 2006
 questions[18]= "19)  El Plan de Contingencias:";
 choices[18]= new Array();
 choices[18][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[18][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[18][2] = "las dos primeras son ciertas";
 choices[18][3] = "las dos primeras son falsas";
 answers[18] = 2;
 units[18] = ['45'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2413. ";
 preguntaids[18] = 2413


//  Id pregunta: 3459 Año de creación de pregunta: 2006
 questions[19]= "20)  Se&ntilde;ale la falsa:";
 choices[19]= new Array();
 choices[19][0] = "CRL son las siglas en ingl&eacute;s de la lista de certificados revocados";
 choices[19][1] = "OCSP son las siglas en ingl&eacute;s del protocolo de estado de certificados en l&iacute;nea";
 choices[19][2] = "PKCS#7 corresponde al est&aacute;ndar del formato del sobre digital";
 choices[19][3] = "PKCS#11 corresponde al algoritmo RSA";
 answers[19] = 3;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3459. ";
 preguntaids[19] = 3459


//  Id pregunta: 7152 Año de creación de pregunta: 2010
 questions[20]= "21)  Jboss es un servidor de aplicaciones desarrollado por:";
 choices[20]= new Array();
 choices[20][0] = "Red Hat";
 choices[20][1] = "Canonical";
 choices[20][2] = "Apache";
 choices[20][3] = "GNU";
 answers[20] = 0;
 units[20] = ['66'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7152. ";
 preguntaids[20] = 7152


//  Id pregunta: 1582 Año de creación de pregunta: 2016
 questions[21]= "22)  Conforme con la metodolog&iacute;a METRICA 3, constituye una t&eacute;cnica de estimaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Diagrama de Gantt";
 choices[21][1] = "Estructura de descomposici&oacute;n del Trabajo (WBS- Work Breakdonw Structure)";
 choices[21][2] = "M&eacute;todo MARK II";
 choices[21][3] = "Diagrama de extrapolaci&oacute;n";
 answers[21] = 2;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 1582. ";
 preguntaids[21] = 1582


//  Id pregunta: 3262 Año de creación de pregunta: 2003
 questions[22]= "23)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[22]= new Array();
 choices[22][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[22][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[22][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[22][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[22] = 0;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3262. ";
 preguntaids[22] = 3262


//  Id pregunta: 6350 Año de creación de pregunta: 2003
 questions[23]= "24)  Las celdas ATM";
 choices[23]= new Array();
 choices[23][0] = "Tienen un tama&ntilde;o fijo de 53 Bytes";
 choices[23][1] = "Tienen un tama&ntilde;o variable m&aacute;ximo de 53 Bytes";
 choices[23][2] = "Tienen un tama&ntilde;o fijo de 48 Bytes";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 0;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6350. ";
 preguntaids[23] = 6350


//  Id pregunta: 4019 Año de creación de pregunta: 2004
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[24]= new Array();
 choices[24][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[24][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[24][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[24][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[24] = 2;
 units[24] = ['92', '93', '98'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 4019. Pregunta Junta Andalucia - A";
 preguntaids[24] = 4019


//  Id pregunta: 10206 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;C&oacute;mo se llaman los &oacute;rganos colegiados de &aacute;mbito departamental responsables del impulso y de la coordinaci&oacute;n interna en cada departamento en materia de Administraci&oacute;n digital?";
 choices[25]= new Array();
 choices[25][0] = "Comisiones Ministeriales de Administraci&oacute;n Electr&oacute;nica";
 choices[25][1] = "Comisiones Ministeriales de Administraci&oacute;n Digital";
 choices[25][2] = "Subdirecciones TIC";
 choices[25][3] = "Direcci&oacute;n TIC";
 answers[25] = 1;
 units[25] = ['26'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 10206. CMAD";
 preguntaids[25] = 10206


//  Id pregunta: 966 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[26]= new Array();
 choices[26][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[26][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[26][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[26][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[26] = 2;
 units[26] = ['4', '7', '8', '9'];
 blocks[26] = ['A1', 'A2'];
 comments[26] = "Id Pregunta: 966. Ley 40/2015";
 preguntaids[26] = 966


//  Id pregunta: 3846 Año de creación de pregunta: 2002
 questions[27]= "28)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[27]= new Array();
 choices[27][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[27][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[27][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[27][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[27] = 2;
 units[27] = ['85', '86'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3846. ";
 preguntaids[27] = 3846


//  Id pregunta: 1557 Año de creación de pregunta: 2016
 questions[28]= "29)  En especificaciones de requisitos, la norma IEEE 830-1998 (Recommended Practice for Software Requirements Specifications) establece las caracter&iacute;sticas de una buena especificaci&oacute;n de requisitos:";
 choices[28]= new Array();
 choices[28][0] = "3 caracter&iacute;sticas: Correcta, completa y consistente.";
 choices[28][1] = "6 caracter&iacute;sticas: Correcta, completa, consistente, verificable, modificable y trazable.";
 choices[28][2] = "8 caracter&iacute;sticas: Correcta, no ambigua, completa, consistente, clasificada en rangos de importancia y/o estabilidad, verificable, modificable y trazable.";
 choices[28][3] = "9 caracter&iacute;sticas: Correcta, no ambigua, completa, consistente, clasificados en rangos de importancia y/o estabilidad, verificable, modificable, trazable y consensuada con el usuario.";
 answers[28] = 2;
 units[28] = ['84'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 1557. ";
 preguntaids[28] = 1557


//  Id pregunta: 10402 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[29]= new Array();
 choices[29][0] = "0.2";
 choices[29][1] = "0.33";
 choices[29][2] = "0.5";
 choices[29][3] = "0.8";
 answers[29] = 2;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 10402. ";
 preguntaids[29] = 10402


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[30]= new Array();
 choices[30][0] = "Anual";
 choices[30][1] = "Mensual";
 choices[30][2] = "Semestral";
 choices[30][3] = "Trimestral";
 answers[30] = 3;
 units[30] = ['15'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 424. Mercado laboral";
 preguntaids[30] = 424


//  Id pregunta: 6214 Año de creación de pregunta: 2003
 questions[31]= "32)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "Aseguramiento de la Calidad.";
 choices[31][1] = "Seguridad.";
 choices[31][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[31][3] = "Gesti&oacute;n de Proyectos.";
 answers[31] = 3;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6214. Examen TIC A Castilla La Mancha 2007";
 preguntaids[31] = 6214


//  Id pregunta: 2836 Año de creación de pregunta: 2002
 questions[32]= "33)  En la Unidad Central de Proceso (CPU):";
 choices[32]= new Array();
 choices[32][0] = "La unidad Aritm&eacute;tico-L&oacute;gica se compone de uno o varios operadores, un banco de registros y un dispositivo secuenciador";
 choices[32][1] = "La Unidad de Control tiene como misi&oacute;n la supervisi&oacute;n y ordenaci&oacute;n de todo el sistema de elementos que componen la CPU y su relaci&oacute;n con la memoria interna";
 choices[32][2] = "En el esquema dise&ntilde;ado por Charles Babbage en su modelo de ordenador, se considera a la Memoria Central como un elemento externo a la CPU";
 choices[32][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[32] = 1;
 units[32] = ['51'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2836. ";
 preguntaids[32] = 2836


//  Id pregunta: 1660 Año de creación de pregunta: 2016
 questions[33]= "34)  De acuerdo con l a Ley Org&aacute;nica de Protecci&oacute;n de Datos (LOPD) se&ntilde;ale, de las siguientes opciones, el tipo de fichero que se incluye en el alcance de la Ley:";
 choices[33]= new Array();
 choices[33][0] = "Ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[33][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[33][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada.";
 choices[33][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente.";
 answers[33] = 3;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 1660. ";
 preguntaids[33] = 1660


//  Id pregunta: 10620 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n la Ley 9/2014, qu&eacute; no regula el Gobierno, respecto al espectro:";
 choices[34]= new Array();
 choices[34][0] = "Niveles de emisi&oacute;n.";
 choices[34][1] = "Asignaci&oacute;n de bandas de frecuencia.";
 choices[34][2] = "Los contenidos enviados dentro del espectro.";
 choices[34][3] = "Establecer condiciones no discriminatorias.";
 answers[34] = 2;
 units[34] = ['121'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10620. Articulo 61";
 preguntaids[34] = 10620


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es uno de los Ejes en torno a los cuales se articula La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo seg&uacute;n el Real Decreto Legislativo 3/2015?";
 choices[35]= new Array();
 choices[35][0] = "Orientaci&oacute;n";
 choices[35][1] = "Empleo p&uacute;blico";
 choices[35][2] = "Formaci&oacute;n";
 choices[35][3] = "Emprendimiento";
 answers[35] = 1;
 units[35] = ['15'];
 blocks[35] = ['A3'];
 comments[35] = "Id Pregunta: 428. Modelo econ&oacute;mico";
 preguntaids[35] = 428


//  Id pregunta: 6037 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[36]= new Array();
 choices[36][0] = "Diagrama de estado.";
 choices[36][1] = "Diagrama de actividad.";
 choices[36][2] = "Diagrama de despliegue.";
 choices[36][3] = "Diagrama de secuencia.";
 answers[36] = 3;
 units[36] = ['89'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6037. TIC B 2007";
 preguntaids[36] = 6037


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[37][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para aquellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un periodo cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[37][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[37][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[37] = 1;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 357. Estado del Bienestar";
 preguntaids[37] = 357


//  Id pregunta: 6860 Año de creación de pregunta: 2010
 questions[38]= "39)  En relaci&oacute;n con las metodolog&iacute;as &aacute;giles de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[38]= new Array();
 choices[38][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[38][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[38][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a &aacute;gil.";
 choices[38][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a &aacute;gil.";
 answers[38] = 0;
 units[38] = ['84'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 6860. TIC A 2009";
 preguntaids[38] = 6860


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[39]= "40)  Son proyectos de Apache relacionados con Big Data:";
 choices[39]= new Array();
 choices[39][0] = "Hadoop";
 choices[39][1] = "Spark";
 choices[39][2] = "A) y B)";
 choices[39][3] = "Niguno de los anteriores";
 answers[39] = 2;
 units[39] = ['73'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 748. Big Data y NoSQL";
 preguntaids[39] = 748


//  Id pregunta: 4279 Año de creación de pregunta: 2006
 questions[40]= "41)  El &quot; Desarrollo de Sistemas de Informaci&oacute;n&quot; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen";
 choices[40]= new Array();
 choices[40][0] = "Tres procesos";
 choices[40][1] = "Cuatro procesos";
 choices[40][2] = "Cinco procesos";
 choices[40][3] = "Seis procesos";
 answers[40] = 2;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4279. ";
 preguntaids[40] = 4279


//  Id pregunta: 3289 Año de creación de pregunta: 2003
 questions[41]= "42)  Un debugger (depurador) de programas :";
 choices[41]= new Array();
 choices[41][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[41][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[41][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[41][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[41] = 1;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3289. ";
 preguntaids[41] = 3289


//  Id pregunta: 1003 Año de creación de pregunta: 2016
 questions[42]= "43)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[42]= new Array();
 choices[42][0] = "los Secretarios generales t&eacute;cnicos";
 choices[42][1] = "los Directores generales";
 choices[42][2] = "los Secretarios generales";
 choices[42][3] = "los Subsecretarios";
 answers[42] = 1;
 units[42] = ['4', '7', '8', '9'];
 blocks[42] = ['A1', 'A2'];
 comments[42] = "Id Pregunta: 1003. Ley 40/2015";
 preguntaids[42] = 1003


//  Id pregunta: 7146 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Qu&eacute; es TAW?";
 choices[43]= new Array();
 choices[43][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[43][1] = "Es un Gestor de Contenidos";
 choices[43][2] = "Es un tipo de licencia de software libre";
 choices[43][3] = "Es una herramienta de workgroup";
 answers[43] = 0;
 units[43] = ['42'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 7146. ";
 preguntaids[43] = 7146


//  Id pregunta: 1801 Año de creación de pregunta: 2016
 questions[44]= "45)  Existen diferentes tipos de relaciones para un sistema de gesti&oacute;n de bases de datos relacional. Indique cu&aacute;l es la opci&oacute;n correcta que define a las del tipo instant&aacute;neas.";
 choices[44]= new Array();
 choices[44][0] = "Son relaciones con nombre y derivadas. Son reales: est&aacute;n representadas no s&oacute;lo por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre, sino tambi&eacute;n por sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[44][1] = "Son relaciones con nombre y derivadas. Son virtuales: est&aacute;n representadas por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre y no poseen sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[44][2] = "Son relaciones sin nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 choices[44][3] = "Son relaciones que pueden o no tener nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 answers[44] = 0;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1801. ";
 preguntaids[44] = 1801


//  Id pregunta: 4714 Año de creación de pregunta: 2002
 questions[45]= "46)  Gen&eacute;ricamente, xDSL es un conjunto de t&eacute;cnicas para:";
 choices[45]= new Array();
 choices[45][0] = "Transmitir a trav&eacute;s de l&iacute;neas de cobre a alta velocidad";
 choices[45][1] = "Transmitir a trav&eacute;s de l&iacute;neas &oacute;pticas a alta velocidad";
 choices[45][2] = "Transmitir por ondas de radio";
 choices[45][3] = "Transmitir utilizando sat&eacute;lites";
 answers[45] = 0;
 units[45] = ['106'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4714. ";
 preguntaids[45] = 4714


//  Id pregunta: 2817 Año de creación de pregunta: 2002
 questions[46]= "47)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[46]= new Array();
 choices[46][0] = "n";
 choices[46][1] = "n + 1";
 choices[46][2] = "n!";
 choices[46][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[46] = 3;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2817. ";
 preguntaids[46] = 2817


//  Id pregunta: 10618 Año de creación de pregunta: 2015
 questions[47]= "48)  Seg&uacute;n la Ley 9/2014, la regulaci&oacute;n del procedimiento para la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[47]= new Array();
 choices[47][0] = "Al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[47][1] = "A la CNMC.";
 choices[47][2] = "Al Gobierno.";
 choices[47][3] = "Ninguno de los anteriores.";
 answers[47] = 2;
 units[47] = ['121'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10618. Articulo 61";
 preguntaids[47] = 10618


//  Id pregunta: 6506 Año de creación de pregunta: 2003
 questions[48]= "49)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[48]= new Array();
 choices[48][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[48][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[48][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[48][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[48] = 3;
 units[48] = ['119'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 6506. ";
 preguntaids[48] = 6506


//  Id pregunta: 2477 Año de creación de pregunta: 2002
 questions[49]= "50)  El R.D. 209/2003 regula:";
 choices[49]= new Array();
 choices[49][0] = "Los registros telem&aacute;ticos";
 choices[49][1] = "Las notificaciones telem&aacute;ticas";
 choices[49][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[49][3] = "Todas las anteriores son correctas";
 answers[49] = 3;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 2477. ";
 preguntaids[49] = 2477


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[50]= new Array();
 choices[50][0] = "Por Real Decreto.";
 choices[50][1] = "Por Orden del Ministerio del Interior.";
 choices[50][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[50][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[50] = 2;
 units[50] = ['1'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 60. Constituci&oacute;n de 1978";
 preguntaids[50] = 60


//  Id pregunta: 1045 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[51]= new Array();
 choices[51][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[51][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[51][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[51][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[51] = 0;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 1045. Ley 40/2015";
 preguntaids[51] = 1045


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[52]= new Array();
 choices[52][0] = "Principio de solo una vez";
 choices[52][1] = "Apertura y transparencia";
 choices[52][2] = "Confianza y seguridad";
 choices[52][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 483. Sociedad de la informaci&oacute;n";
 preguntaids[52] = 483


//  Id pregunta: 4883 Año de creación de pregunta: 2002
 questions[53]= "54)  La f&oacute;rmula de Little es:";
 choices[53]= new Array();
 choices[53][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[53][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[53][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[53][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[53] = 2;
 units[53] = ['30'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 4883. ";
 preguntaids[53] = 4883


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[54]= new Array();
 choices[54][0] = "Eric Ries";
 choices[54][1] = "Steve Blank";
 choices[54][2] = "Tom Poppendieck";
 choices[54][3] = "Alexander Osterwalder";
 answers[54] = 2;
 units[54] = ['34'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 555. Metodologias Lean";
 preguntaids[54] = 555


//  Id pregunta: 4443 Año de creación de pregunta: 2002
 questions[55]= "56)  Los sistemas de recuperaci&oacute;n de fallos hardware se basan siempre en:";
 choices[55]= new Array();
 choices[55][0] = "La redundancia del equipo o empleo de equipos fault-tolerant";
 choices[55][1] = "El establecimiento de una pol&iacute;tica de respaldo rigurosa";
 choices[55][2] = "Una pol&iacute;tica de mantenimiento de equipos adecuada";
 choices[55][3] = "Evitar manipulaciones indebidas en la instalaci&oacute;n inform&aacute;tica";
 answers[55] = 0;
 units[55] = ['119'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4443. ";
 preguntaids[55] = 4443


//  Id pregunta: 6730 Año de creación de pregunta: 2009
 questions[56]= "57)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[56]= new Array();
 choices[56][0] = "JSTL y EL";
 choices[56][1] = "Scriptlets";
 choices[56][2] = "JavaScript";
 choices[56][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[56] = 0;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6730. ";
 preguntaids[56] = 6730


//  Id pregunta: 959 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[57]= new Array();
 choices[57][0] = "Se definen iteraciones";
 choices[57][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[57][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[57][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[57] = 1;
 units[57] = ['34', '84'];
 blocks[57] = ['B1', 'B3'];
 comments[57] = "Id Pregunta: 959. Metodologias &aacute;giles";
 preguntaids[57] = 959


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[58]= "59)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[58]= new Array();
 choices[58][0] = "Leve";
 choices[58][1] = "Grave";
 choices[58][2] = "Muy grave";
 choices[58][3] = "No constituye infracci&oacute;n";
 answers[58] = 0;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 3297. ";
 preguntaids[58] = 3297


//  Id pregunta: 7121 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[59]= new Array();
 choices[59][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[59][1] = "Unidad administrativa suscriptora del certificado.";
 choices[59][2] = "Fechas de validez del certificado.";
 choices[59][3] = "Ninguna de las anteriores.";
 answers[59] = 1;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 7121. Art&iacute;culo 18 RD 1671/2009";
 preguntaids[59] = 7121


//  Id pregunta: 8710 Año de creación de pregunta: 2013
 questions[60]= "61)  Si se quisiera un middleware para un grid se elegir&iacute;a:";
 choices[60]= new Array();
 choices[60][0] = "Globus Toolkit.";
 choices[60][1] = "Cluster Veritas.";
 choices[60][2] = "Arduino.";
 choices[60][3] = "Data protector.";
 answers[60] = 0;
 units[60] = ['49'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8710. Examen TICA2-2011";
 preguntaids[60] = 8710


//  Id pregunta: 5480 Año de creación de pregunta: 2007
 questions[61]= "62)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[61]= new Array();
 choices[61][0] = "Usuario daemon.";
 choices[61][1] = "Usuario adm.";
 choices[61][2] = "Usuario bin.";
 choices[61][3] = "Usuario root.";
 answers[61] = 3;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 5480. ";
 preguntaids[61] = 5480


//  Id pregunta: 4778 Año de creación de pregunta: 2002
 questions[62]= "63)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[62]= new Array();
 choices[62][0] = "RDSI";
 choices[62][1] = "ADSL";
 choices[62][2] = "RTC";
 choices[62][3] = "TCP-IP";
 answers[62] = 1;
 units[62] = ['108'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4778. ";
 preguntaids[62] = 4778


//  Id pregunta: 6224 Año de creación de pregunta: 2003
 questions[63]= "64)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[63]= new Array();
 choices[63][0] = "IEEE 802.2";
 choices[63][1] = "IEEE 802.3";
 choices[63][2] = "IEEE 802.4";
 choices[63][3] = "IEEE 802.5";
 answers[63] = 1;
 units[63] = ['112'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6224. Examen TIC A Castilla La Mancha 2007";
 preguntaids[63] = 6224


//  Id pregunta: 8818 Año de creación de pregunta: 2013
 questions[64]= "65)  E-Line:";
 choices[64]= new Array();
 choices[64][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[64][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[64][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[64][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[64] = 2;
 units[64] = ['112'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8818. ";
 preguntaids[64] = 8818


//  Id pregunta: 8486 Año de creación de pregunta: 2011
 questions[65]= "66)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[65]= new Array();
 choices[65][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[65][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[65][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[65][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[65] = 0;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 8486. ";
 preguntaids[65] = 8486


//  Id pregunta: 9344 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[66]= new Array();
 choices[66][0] = "ISO/IEC 26300:2006";
 choices[66][1] = "RFC 2373";
 choices[66][2] = "ISO/IEC 9899:1999";
 choices[66][3] = "ISO 9000";
 answers[66] = 0;
 units[66] = ['66'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9344. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[66] = 9344


//  Id pregunta: 3511 Año de creación de pregunta: 2006
 questions[67]= "68)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[67]= new Array();
 choices[67][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[67][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[67][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[67][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[67] = 1;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 3511. Ley 59/2003, art&iacute;culo 11";
 preguntaids[67] = 3511


//  Id pregunta: 7553 Año de creación de pregunta: 2010
 questions[68]= "69)  El protocolo SSL v.3:";
 choices[68]= new Array();
 choices[68][0] = "Trabaja tanto sobre TCP como sobre UDP.";
 choices[68][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits.";
 choices[68][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC.";
 choices[68][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman.";
 answers[68] = 3;
 units[68] = ['119'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 7553. Map 2005";
 preguntaids[68] = 7553


//  Id pregunta: 1167 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a la tecnolog&iacute;a JPA (Java Persistence API).";
 choices[69]= new Array();
 choices[69][0] = "El fichero &quot;persistence.xml&quot; permite la configuraci&oacute;n de JPA.";
 choices[69][1] = "Existen dos m&eacute;todos para gestionar las transacciones denominadas &quot;RESOURCE_LOCAL&quot; y &quot;JTA&quot;.";
 choices[69][2] = "JPQL es un lenguaje de consulta orientado a objetos, independiente de la plataforma y definido como parte de la especificaci&oacute;n JPA.";
 choices[69][3] = "Todas son correctas.";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1167. ";
 preguntaids[69] = 1167


//  Id pregunta: 1883 Año de creación de pregunta: 2016
 questions[70]= "71)  EI Documento Nacional de Identidad electr&oacute;nico:";
 choices[70]= new Array();
 choices[70][0] = "Acredita electr&oacute;nicamente la identidad personal de su titular y permite la firma electr&oacute;nica de documentos";
 choices[70][1] = "S&oacute;lo se podr&aacute; utilizar para acreditar la identidad de su titular";
 choices[70][2] = "Permitir&aacute; acreditar la identidad de las personas f&iacute;sicas o jur&iacute;dicas";
 choices[70][3] = "Puede almacenar informaci&oacute;n penal y sanitario del titular.";
 answers[70] = 0;
 units[70] = ['78'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1883. ";
 preguntaids[70] = 1883


//  Id pregunta: 1032 Año de creación de pregunta: 2016
 questions[71]= "72)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[71]= new Array();
 choices[71][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[71][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[71][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[71][3] = "Todas son correctas.";
 answers[71] = 3;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 1032. Ley 40/2015";
 preguntaids[71] = 1032


//  Id pregunta: 9844 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de estas publicaciones no pertenece a ITILv3?";
 choices[72]= new Array();
 choices[72][0] = "Mejora continua del servicio";
 choices[72][1] = "Evoluci&oacute;n del Servicio";
 choices[72][2] = "Dise&ntilde;o del Servicio";
 choices[72][3] = "Operaci&oacute;n del Servicio";
 answers[72] = 1;
 units[72] = ['101'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 9844. ";
 preguntaids[72] = 9844


//  Id pregunta: 3743 Año de creación de pregunta: 2002
 questions[73]= "74)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[73]= new Array();
 choices[73][0] = "Dise&ntilde;o detallado";
 choices[73][1] = "Codificaci&oacute;n";
 choices[73][2] = "Requisitos del sistema software";
 choices[73][3] = "Dise&ntilde;o preliminar";
 answers[73] = 1;
 units[73] = ['82'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3743. ";
 preguntaids[73] = 3743


//  Id pregunta: 3690 Año de creación de pregunta: 2002
 questions[74]= "75)  Indique la afirmaci&oacute;n verdadera relativa a la Gesti&oacute;n de la Documentaci&oacute;n de un proyecto o sistema:";
 choices[74]= new Array();
 choices[74][0] = "La gesti&oacute;n de configuraci&oacute;n y control de versiones se refiere &uacute;nicamente al producto software y no a la documentaci&oacute;n";
 choices[74][1] = "La documentaci&oacute;n producida durante el desarrollo de un proyecto es independiente de la metodolog&iacute;a empleada";
 choices[74][2] = "El documento de requisitos de sistema es anterior al documento de requisitos de usuario";
 choices[74][3] = "La documentaci&oacute;n debe entenderse como todos los productos resultantes de las tareas realizadas, ya sean informes, programas, juegos de pruebas, gr&aacute;ficos, etc";
 answers[74] = 3;
 units[74] = ['99'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3690. ";
 preguntaids[74] = 3690


