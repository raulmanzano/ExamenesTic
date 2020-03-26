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
//  Id pregunta: 4557 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no debe ser un requisito de los sistemas de cableado?:";
 choices[0]= new Array();
 choices[0][0] = "Alto grado de flexibilidad";
 choices[0][1] = "M&iacute;nimas interrupciones";
 choices[0][2] = "Bajo costo en tiempo de diagn&oacute;stico y reparaci&oacute;n";
 choices[0][3] = "Eliminaci&oacute;n de las tecnolog&iacute;as obsoletas";
 answers[0] = 3;
 units[0] = ['104'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4557. ";
 preguntaids[0] = 4557


//  Id pregunta: 4479 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[1]= new Array();
 choices[1][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[1][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[1][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[1][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[1] = 1;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4479. ";
 preguntaids[1] = 4479


//  Id pregunta: 4458 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[2]= new Array();
 choices[2][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[2][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[2][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[2][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[2] = 1;
 units[2] = ['104'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4458. ";
 preguntaids[2] = 4458


//  Id pregunta: 4610 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Qu&eacute; es un modem en banda base?:";
 choices[3]= new Array();
 choices[3][0] = "Equipo que efect&uacute;a &uacute;nicamente funciones de codificaci&oacute;n y decodificaci&oacute;n, aparte de las funciones de di&aacute;logo con el ETD y de interfaz con la l&iacute;nea de transmisi&oacute;n";
 choices[3][1] = "Equipo que adapta el ETD a las caracter&iacute;sticas el&eacute;ctricas de la l&iacute;nea de transmisi&oacute;n";
 choices[3][2] = "Equipo normalizado que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 Hz";
 choices[3][3] = "Equipo que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 HZ y l&iacute;mite superior dependiente de la velocidad de transmisi&oacute;n";
 answers[3] = 0;
 units[3] = ['104'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4610. ";
 preguntaids[3] = 4610


//  Id pregunta: 1521 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; ventaja presenta una fibra &oacute;ptica monomodo respecto de una multimodo?";
 choices[4]= new Array();
 choices[4][0] = "En la multimodo, la se&ntilde;al se reparte entre varios modos, cada uno con un coeficiente de scattering diferente. Al recibirla, la se&ntilde;al se suma y la distorsi&oacute;n toma el valor medio, de baja variaci&oacute;n. La monomodo tiene un &uacute;nico coeficiente y por ello m&aacute;s distorsi&oacute;n.";
 choices[4][1] = "En la multimodo, la se&ntilde;al se reparte entre varios modos, cada uno con una velocidad de propagaci&oacute;n de la se&ntilde;al, quedando distorsionada al recibirla. La monomodo no presenta este tipo de distorsi&oacute;n, por lo que alcanza distancias m&aacute;s largas sin distorsi&oacute;n.";
 choices[4][2] = "En la multimodo, la potencia se reparte entre varios modos. Cada modo tiene menos atenuaci&oacute;n que el anterior, por lo que al recibirla, la se&ntilde;al ha sufrido menos atenuaci&oacute;n que si se hubiera enviado &uacute;nicamente en el primer modo, monomodo, el de mayor atenuaci&oacute;n.";
 choices[4][3] = "En la multimodo, la potencia se reparte entre varios modos. Cada modo tiene m&aacute;s atenuaci&oacute;n que el anterior, por lo que al recibirla, la se&ntilde;al ha sufrido m&aacute;s atenuaci&oacute;n que si se hubiera enviado &uacute;nicamente en el primer modo, monomodo, el de menor atenuaci&oacute;n.";
 answers[4] = 1;
 units[4] = ['104'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1521. ";
 preguntaids[4] = 1521


//  Id pregunta: 1068 Año de creación de pregunta: 2016
 questions[5]= "6)  En cu&aacute;l de las siguientes combinaciones de topolog&iacute;as de red, un fallo en el cableado de red, impedir&aacute; el funcionamiento de toda ella:";
 choices[5]= new Array();
 choices[5][0] = "Topolog&iacute;a Estrella f&iacute;sica y Mallada l&oacute;gica.";
 choices[5][1] = "Topolog&iacute;a Anillo f&iacute;sica y Bus l&oacute;gica.";
 choices[5][2] = "Topolog&iacute;a Mallada f&iacute;sica y Anillo l&oacute;gica.";
 choices[5][3] = "Topolog&iacute;a Bus f&iacute;sica y Estrella l&oacute;gica.";
 answers[5] = 3;
 units[5] = ['104'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1068. ";
 preguntaids[5] = 1068


//  Id pregunta: 4959 Año de creación de pregunta: 2002
 questions[6]= "7)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[6]= new Array();
 choices[6][0] = "Entre 60 KHz y 3 GHz";
 choices[6][1] = "Sobre los 100 MHz";
 choices[6][2] = "Entre 4 y 11 GHz";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[6] = 0;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4959. ";
 preguntaids[6] = 4959


//  Id pregunta: 4988 Año de creación de pregunta: 2002
 questions[7]= "8)  Los m&oacute;dems usan t&eacute;cnicas de modulaci&oacute;n para transmitir datos sobre las l&iacute;neas telef&oacute;nicas. Indique cu&aacute;l de las siguientes no es una de estas t&eacute;cnicas:";
 choices[7]= new Array();
 choices[7][0] = "Modulaci&oacute;n de fase";
 choices[7][1] = "Modulaci&oacute;n de frecuencia";
 choices[7][2] = "Modulaci&oacute;n QAM";
 choices[7][3] = "Modulaci&oacute;n PCM";
 answers[7] = 3;
 units[7] = ['104'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4988. ";
 preguntaids[7] = 4988


//  Id pregunta: 4949 Año de creación de pregunta: 2002
 questions[8]= "9)  Una palabra muy usada cuando hablamos de velocidades de transmisi&oacute;n es 'baudio' que se define como:";
 choices[8]= new Array();
 choices[8][0] = "La velocidad de cambios de se&ntilde;alizaci&oacute;n por segundo en un canal";
 choices[8][1] = "N&uacute;mero de bits por segundo transmitidos por un canal";
 choices[8][2] = "Cambios de frecuencia por segundo en la se&ntilde;al por un canal";
 choices[8][3] = "Todas las respuestas anteriores son ciertas";
 answers[8] = 0;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4949. ";
 preguntaids[8] = 4949


//  Id pregunta: 4704 Año de creación de pregunta: 2002
 questions[9]= "10)  El PMD:";
 choices[9]= new Array();
 choices[9][0] = "Es el acr&oacute;nimo de Physical Medium Dependent";
 choices[9][1] = "Pertenece al Nivel 2 de 802.11";
 choices[9][2] = "Es la uni&oacute;n entre MAC y PLCP";
 choices[9][3] = "Todas las anteriores respuestas son correctas";
 answers[9] = 0;
 units[9] = ['104'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4704. ";
 preguntaids[9] = 4704


//  Id pregunta: 4516 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[10]= new Array();
 choices[10][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[10][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[10][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[10][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[10] = 3;
 units[10] = ['104'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4516. ";
 preguntaids[10] = 4516


//  Id pregunta: 4346 Año de creación de pregunta: 2004
 questions[11]= "12)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[11]= new Array();
 choices[11][0] = "1000BaseLX";
 choices[11][1] = "1000BaseSX";
 choices[11][2] = "1000BaseCX";
 choices[11][3] = "1000BaseT";
 answers[11] = 2;
 units[11] = ['104'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4346. Examen Julio 2003";
 preguntaids[11] = 4346


//  Id pregunta: 1900 Año de creación de pregunta: 2016
 questions[12]= "13)  Los cables de fibra &oacute;ptica utilizados en entornos WAN en enlaces de larga distancia:";
 choices[12]= new Array();
 choices[12][0] = "Suelen ser de tipo multimodo ya que permite transmitir varios haces de luz,";
 choices[12][1] = "Suelen ser de tipo monomodo por la mayor robustez de la libra";
 choices[12][2] = "Suelen ser de tipo monomodo per su menor atenuaci&oacute;n";
 choices[12][3] = "Suelen ser de tipo multimodo por su menor atenuaci&oacute;n";
 answers[12] = 2;
 units[12] = ['104'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1900. ";
 preguntaids[12] = 1900


//  Id pregunta: 2832 Año de creación de pregunta: 2002
 questions[13]= "14)  En la multiplexaci&oacute;n por divisi&oacute;n en frecuencia, &iquest;cu&aacute;l de estas afirmaciones es correcta?";
 choices[13]= new Array();
 choices[13][0] = "Las se&ntilde;ales a enviar usan todo el ancho de banda disponible.";
 choices[13][1] = "Las se&ntilde;ales a enviar s&oacute;lo usan el ancho de banda asignado.";
 choices[13][2] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por todo ancho de banda.";
 choices[13][3] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por el ancho de banda asignado.";
 answers[13] = 1;
 units[13] = ['104'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 2832. ";
 preguntaids[13] = 2832


//  Id pregunta: 4669 Año de creación de pregunta: 2002
 questions[14]= "15)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[14]= new Array();
 choices[14][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[14][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[14][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[14][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[14] = 1;
 units[14] = ['104'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4669. ";
 preguntaids[14] = 4669


//  Id pregunta: 4371 Año de creación de pregunta: 2004
 questions[15]= "16)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[15]= new Array();
 choices[15][0] = "f.o. monomodo y multimodo";
 choices[15][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[15][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[15][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[15] = 1;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4371. ";
 preguntaids[15] = 4371


//  Id pregunta: 4412 Año de creación de pregunta: 2002
 questions[16]= "17)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[16]= new Array();
 choices[16][0] = "Distorsi&oacute;n no lineal";
 choices[16][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[16][2] = "Intermodulaci&oacute;n";
 choices[16][3] = "Paradiafon&iacute;a";
 answers[16] = 2;
 units[16] = ['104'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4412. ";
 preguntaids[16] = 4412


//  Id pregunta: 4547 Año de creación de pregunta: 2002
 questions[17]= "18)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[17]= new Array();
 choices[17][0] = "Ethernet con un par extra de hilos";
 choices[17][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[17][2] = "Fast Ethernet con cableado de par trenzado";
 choices[17][3] = "Ninguno de los anteriores";
 answers[17] = 1;
 units[17] = ['104'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4547. ";
 preguntaids[17] = 4547


//  Id pregunta: 4902 Año de creación de pregunta: 2002
 questions[18]= "19)  La normativa para sistemas de cableado de edificios es:";
 choices[18]= new Array();
 choices[18][0] = "EIA/TIA 568";
 choices[18][1] = "ISO/IEC DIS 11801";
 choices[18][2] = "EPHOS 2";
 choices[18][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[18] = 3;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4902. ";
 preguntaids[18] = 4902


//  Id pregunta: 4617 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; mecanismo de acceso al medio utiliza una red Token Ring?:";
 choices[19]= new Array();
 choices[19][0] = "Interrogaci&oacute;n y respuesta (Polling Selecting)";
 choices[19][1] = "Paso de testigo";
 choices[19][2] = "CSMA/CD";
 choices[19][3] = "DQDB";
 answers[19] = 1;
 units[19] = ['104'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4617. ";
 preguntaids[19] = 4617


//  Id pregunta: 4889 Año de creación de pregunta: 2002
 questions[20]= "21)  La funci&oacute;n fundamental de un &quot;m&oacute;dem&quot; es:";
 choices[20]= new Array();
 choices[20][0] = "La adaptaci&oacute;n de las se&ntilde;ales digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[20][1] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[20][2] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas y digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica digital";
 choices[20][3] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de un medio no anal&oacute;gico";
 answers[20] = 0;
 units[20] = ['104'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4889. ";
 preguntaids[20] = 4889


//  Id pregunta: 4767 Año de creación de pregunta: 2002
 questions[21]= "22)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[21]= new Array();
 choices[21][0] = "&Iacute;ndice gradual";
 choices[21][1] = "Multimodo";
 choices[21][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[21][3] = "Monomodo";
 answers[21] = 3;
 units[21] = ['104'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4767. ";
 preguntaids[21] = 4767


//  Id pregunta: 4882 Año de creación de pregunta: 2002
 questions[22]= "23)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[22]= new Array();
 choices[22][0] = "100 metros";
 choices[22][1] = "185 metros";
 choices[22][2] = "200 metros";
 choices[22][3] = "500 metros";
 answers[22] = 0;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4882. ";
 preguntaids[22] = 4882


//  Id pregunta: 1625 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;ntos elementos conductores diferenciados tiene un cable coaxial?";
 choices[23]= new Array();
 choices[23][0] = "4";
 choices[23][1] = "3";
 choices[23][2] = "2";
 choices[23][3] = "1";
 answers[23] = 2;
 units[23] = ['104'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1625. ";
 preguntaids[23] = 1625


//  Id pregunta: 4638 Año de creación de pregunta: 2002
 questions[24]= "25)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[24]= new Array();
 choices[24][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[24][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[24][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[24][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[24] = 3;
 units[24] = ['104'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4638. ";
 preguntaids[24] = 4638


//  Id pregunta: 4639 Año de creación de pregunta: 2002
 questions[25]= "26)  10BaseT es:";
 choices[25]= new Array();
 choices[25][0] = "Un tipo de modem primario";
 choices[25][1] = "Una variante del est&aacute;ndar IEEE 802.3 para trabajar sobre pares trenzados";
 choices[25][2] = "Un m&eacute;todo de acceso en contenci&oacute;n";
 choices[25][3] = "Un m&eacute;todo de acceso por paso de testigo";
 answers[25] = 1;
 units[25] = ['104'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4639. ";
 preguntaids[25] = 4639


//  Id pregunta: 4763 Año de creación de pregunta: 2002
 questions[26]= "27)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[26]= new Array();
 choices[26][0] = "Shannon";
 choices[26][1] = "Oppenheim";
 choices[26][2] = "Shafer";
 choices[26][3] = "Nyquist";
 answers[26] = 3;
 units[26] = ['104'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4763. ";
 preguntaids[26] = 4763


//  Id pregunta: 4595 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Por qu&eacute; motivo no debe utilizarse una red Ethernet para comunicar dispositivos que deban trabajar en tiempo real cr&iacute;tico?:";
 choices[27]= new Array();
 choices[27][0] = "Porque el tiempo medio entre fallos de este tipo de redes es bajo";
 choices[27][1] = "Porque la velocidad de este tipo de redes es demasiado baja";
 choices[27][2] = "Porque el tiempo m&aacute;ximo que tarda un nodo en acceder a la red no est&aacute; acotado";
 choices[27][3] = "Porque este tipo de redes responde al modelo cliente servidor y no permite comunicar dispositivos entre s&iacute;";
 answers[27] = 2;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4595. ";
 preguntaids[27] = 4595


//  Id pregunta: 1901 Año de creación de pregunta: 2016
 questions[28]= "29)  EI cableado estructurado de categor&iacute;a 5e:";
 choices[28]= new Array();
 choices[28][0] = "Permite transmisiones a velocidades 1OGbit Ethernet";
 choices[28][1] = "Solo es posible utilizarlo en comunicaciones full-duplex";
 choices[28][2] = "A diferencia de la categor&iacute;a 5, permite la transmisi&oacute;n de paquetes VolP";
 choices[28][3] = "Est&aacute; estandarizado por la norma TIAIEIA-568-B";
 answers[28] = 3;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1901. ";
 preguntaids[28] = 1901


//  Id pregunta: 4484 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[29]= new Array();
 choices[29][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[29][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[29][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[29][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[29] = 3;
 units[29] = ['104'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4484. ";
 preguntaids[29] = 4484


//  Id pregunta: 5113 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[30]= new Array();
 choices[30][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[30][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[30][2] = "Especificaci&oacute;n de medio 10BASE-T.";
 choices[30][3] = "Especificaci&oacute;n de medio 10BROAD36.";
 answers[30] = 0;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5113. Junta Andaluc&iacute;a";
 preguntaids[30] = 5113


//  Id pregunta: 4932 Año de creación de pregunta: 2002
 questions[31]= "32)  Un BALUN:";
 choices[31]= new Array();
 choices[31][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[31][1] = "Adapta un conector RJ45 y BNC.";
 choices[31][2] = "Es un conector entre RJ11 y RJ45.";
 choices[31][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[31] = 0;
 units[31] = ['104'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4932. ";
 preguntaids[31] = 4932


//  Id pregunta: 4421 Año de creación de pregunta: 2002
 questions[32]= "33)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[32]= new Array();
 choices[32][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[32][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[32][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[32][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[32] = 2;
 units[32] = ['104'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4421. ";
 preguntaids[32] = 4421


//  Id pregunta: 4947 Año de creación de pregunta: 2002
 questions[33]= "34)  Una emisora de radiodifusi&oacute;n comercial es un ejemplo de sistemas de transmisi&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Simplex";
 choices[33][1] = "Semiduplex";
 choices[33][2] = "Duplex";
 choices[33][3] = "Half duplex";
 answers[33] = 0;
 units[33] = ['104'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4947. ";
 preguntaids[33] = 4947


//  Id pregunta: 5064 Año de creación de pregunta: 2002
 questions[34]= "35)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[34]= new Array();
 choices[34][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[34][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[34][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[34][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[34] = 2;
 units[34] = ['104'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5064. ";
 preguntaids[34] = 5064


//  Id pregunta: 1742 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO se corresponde con las especificaciones de ANSI para cables de Categor&iacute;a 6:";
 choices[35]= new Array();
 choices[35][0] = "Alcanza frecuencias de hasta 500 MHz en cada par.";
 choices[35][1] = "Se emplea para Gigabit Ethernet.";
 choices[35][2] = "Caracterizan los cables de pares trenzados.";
 choices[35][3] = "Se define en la especificaci&oacute;n ANSI/TIA/EIA-568-B2-1";
 answers[35] = 0;
 units[35] = ['104'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 1742. ";
 preguntaids[35] = 1742


//  Id pregunta: 5051 Año de creación de pregunta: 2002
 questions[36]= "37)  Seg&uacute;n la recomendaci&oacute;n EIA/TIA 568:";
 choices[36]= new Array();
 choices[36][0] = "La distancia m&aacute;xima para el cableado horizontal var&iacute;a entre 70 m y 90 m";
 choices[36][1] = "La distancia entre equipo y roseta puede llegar a los 9 m";
 choices[36][2] = "Se consideran los cables coaxiales de 76 Ohm";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 0;
 units[36] = ['104'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5051. ";
 preguntaids[36] = 5051


//  Id pregunta: 4616 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Qu&eacute; indica el teorema de Shannon?:";
 choices[37]= new Array();
 choices[37][0] = "La m&aacute;xima velocidad de transferencia de un canal  es  H*log(1+S/N), donde H es el ancho de banda del canal de transmisi&oacute;n y S/N es la relaci&oacute;n se&ntilde;al ruido";
 choices[37][1] = "La m&aacute;xima velocidad a la que se puede transmitir informaci&oacute;n digital binaria es el doble de la m&aacute;xima frecuencia del canal de transmisi&oacute;n";
 choices[37][2] = "La m&aacute;xima velocidad de transferencia de un canal  sujeto a ruido es directamente proporcional a la relaci&oacute;n se&ntilde;al ruido del canal";
 choices[37][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[37] = 0;
 units[37] = ['104'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4616. ";
 preguntaids[37] = 4616


//  Id pregunta: 4520 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes topolog&iacute;as tiene un mayor nivel de seguridad?:";
 choices[38]= new Array();
 choices[38][0] = "Bus";
 choices[38][1] = "Anillo";
 choices[38][2] = "Estrella";
 choices[38][3] = "Las 3 anteriores topolog&iacute;as tienen un nivel de seguridad similar";
 answers[38] = 2;
 units[38] = ['104'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4520. ";
 preguntaids[38] = 4520


//  Id pregunta: 4881 Año de creación de pregunta: 2002
 questions[39]= "40)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10Base5 es de:";
 choices[39]= new Array();
 choices[39][0] = "100 metros";
 choices[39][1] = "185 metros";
 choices[39][2] = "200 metros";
 choices[39][3] = "500 metros";
 answers[39] = 3;
 units[39] = ['104'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4881. ";
 preguntaids[39] = 4881


//  Id pregunta: 1205 Año de creación de pregunta: 2016
 questions[40]= "41)  La fibra multimodo NO se usa para aplicaciones donde el producto &quot;largas distancias por ancho de banda&quot; deba ser alto, porque:";
 choices[40]= new Array();
 choices[40][0] = "Existen diferentes modos de propagaci&oacute;n, con diferentes velocidades de propagaci&oacute;n de la se&ntilde;al, llegando la misma distorsionada al receptor.";
 choices[40][1] = "El coste de fabricaci&oacute;n de un segmento continuo se incrementa cuadr&aacute;ticamente con la distancia (mientras que en la monomodo lo hace linealmente).";
 choices[40][2] = "Requiere transmitir en la segunda ventana, lo que unido a la potencia &oacute;ptica necesaria por larga distancia hace que aumente prohibitivamente el coste.";
 choices[40][3] = "Requiere, para amplificar la se&ntilde;al a largas distancias, EDFAs (Erbium Doped Fibre Amplifier), mientras que en monomodo hay amplificadores m&aacute;s baratos.";
 answers[40] = 0;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1205. ";
 preguntaids[40] = 1205


//  Id pregunta: 4620 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Qu&eacute; nos dice el teorema del muestreo o teorema de Nyquist?:";
 choices[41]= new Array();
 choices[41][0] = "Que la frecuencia de muestreo debe ser mayor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[41][1] = "Que la frecuencia de muestreo debe ser menor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[41][2] = "Que la frecuencia de muestreo debe ser mayor o igual que el triple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[41][3] = "Que la frecuencia de muestreo debe ser mayor o igual que el cu&aacute;druple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 answers[41] = 0;
 units[41] = ['104'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4620. ";
 preguntaids[41] = 4620


//  Id pregunta: 4970 Año de creación de pregunta: 2002
 questions[42]= "43)  Las siglas UTP corresponden a:";
 choices[42]= new Array();
 choices[42][0] = "Cable coaxial fino";
 choices[42][1] = "Cable coaxial grueso";
 choices[42][2] = "Fibra &oacute;ptica sin apantallar";
 choices[42][3] = "Par trenzado sin apantallar";
 answers[42] = 3;
 units[42] = ['104'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4970. ";
 preguntaids[42] = 4970


//  Id pregunta: 4539 Año de creación de pregunta: 2002
 questions[43]= "44)  El cable coaxial Thick, comunmente conocido como 'amarillo':";
 choices[43]= new Array();
 choices[43][0] = "Sigue el est&aacute;ndar 10 Base 2";
 choices[43][1] = "Tiene un terminador tipo BNC";
 choices[43][2] = "Presenta una impedancia de 50 Ohm.";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 2;
 units[43] = ['104'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4539. ";
 preguntaids[43] = 4539


//  Id pregunta: 4485 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[44]= new Array();
 choices[44][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[44][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[44][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[44][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[44] = 3;
 units[44] = ['104'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4485. ";
 preguntaids[44] = 4485


//  Id pregunta: 5152 Año de creación de pregunta: 2003
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[45]= new Array();
 choices[45][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[45][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[45][2] = "El cable UTP de categor&iacute;a 3";
 choices[45][3] = "El cable STP de 150Ohm";
 answers[45] = 1;
 units[45] = ['104'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5152. ";
 preguntaids[45] = 5152


//  Id pregunta: 4540 Año de creación de pregunta: 2002
 questions[46]= "47)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[46]= new Array();
 choices[46][0] = "Soporta hasta 10 Mbps";
 choices[46][1] = "Soporta hasta 20 Mbps";
 choices[46][2] = "Soporta hasta 100 Mbps";
 choices[46][3] = "Soporta hasta 5 Mbps";
 answers[46] = 2;
 units[46] = ['104'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4540. ";
 preguntaids[46] = 4540


//  Id pregunta: 4880 Año de creación de pregunta: 2002
 questions[47]= "48)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base2 es de:";
 choices[47]= new Array();
 choices[47][0] = "100 metros";
 choices[47][1] = "185 metros";
 choices[47][2] = "200 metros";
 choices[47][3] = "500 metros";
 answers[47] = 1;
 units[47] = ['104'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4880. ";
 preguntaids[47] = 4880


//  Id pregunta: 4515 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes respuestas es falsa respecto a los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n?:";
 choices[48]= new Array();
 choices[48][0] = "Con cableado de par trenzado se pueden alcanzar varios megabits por segundo";
 choices[48][1] = "El cable coaxial se utiliza para redes de &aacute;rea local";
 choices[48][2] = "La fibra &oacute;ptica monomodo es m&aacute;s barata que la fibra &oacute;ptica multimodo";
 choices[48][3] = "La propagaci&oacute;n de las microondas se ve afectada por los fen&oacute;menos atmosf&eacute;ricos";
 answers[48] = 2;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4515. ";
 preguntaids[48] = 4515


//  Id pregunta: 4311 Año de creación de pregunta: 2004
 questions[49]= "50)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[49]= new Array();
 choices[49][0] = "1000BaseT";
 choices[49][1] = "1000BaseSX";
 choices[49][2] = "1000BaseLx";
 choices[49][3] = "1000BaseCX";
 answers[49] = 3;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4311. Similar a examen TIC MAP A 2004";
 preguntaids[49] = 4311


//  Id pregunta: 1522 Año de creación de pregunta: 2016
 questions[50]= "51)  Indicar la respuesta correcta, en relaci&oacute;n con el cable para transmisi&oacute;n de datos conocido como S/FTP:";
 choices[50]= new Array();
 choices[50][0] = "No es un cable de par trenzado.";
 choices[50][1] = "Tanto cada par individual como el cable van apantallados.";
 choices[50][2] = "S&oacute;lo va apantallado el cable, no cada par.";
 choices[50][3] = "S&oacute;lo se apantalla cada par, no el cable.";
 answers[50] = 1;
 units[50] = ['104'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 1522. ";
 preguntaids[50] = 1522


//  Id pregunta: 5069 Año de creación de pregunta: 2002
 questions[51]= "52)  Si un encaminador (router) tiene cuatro interfaces f&iacute;sicas de red y esta encaminando los protocolos AppleTalk, OSI, y TCP/IP, &iquest;cu&aacute;ntas direcciones a nivel de red tendr&aacute; normalmente?:";
 choices[51]= new Array();
 choices[51][0] = "3";
 choices[51][1] = "4";
 choices[51][2] = "12";
 choices[51][3] = "1";
 answers[51] = 2;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5069. ";
 preguntaids[51] = 5069


//  Id pregunta: 4483 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[52]= new Array();
 choices[52][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[52][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[52][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[52][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[52] = 2;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4483. ";
 preguntaids[52] = 4483


//  Id pregunta: 4630 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Qu&eacute; se entiende por modem inteligente?:";
 choices[53]= new Array();
 choices[53][0] = "Aquellos que son capaces de detectar errores";
 choices[53][1] = "Aquellos que llevan microprocesador y memoria";
 choices[53][2] = "Aquellos que no pueden detectar m&uacute;ltiples llamadas";
 choices[53][3] = "Aquellos que funcionan igual a un terminal";
 answers[53] = 0;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4630. ";
 preguntaids[53] = 4630


//  Id pregunta: 1204 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el est&aacute;ndar ISO/IEC 11801 para la clasificaci&oacute;n de fibras multimodo, indicar la respuesta correcta en relaci&oacute;n a OM4:";
 choices[54]= new Array();
 choices[54][0] = "Fibra de 62.5/125 micras.";
 choices[54][1] = "Fibra de 50/125 micras.";
 choices[54][2] = "Fibra de 50/25 micras.";
 choices[54][3] = "Fibra de 62/25 micras.";
 answers[54] = 1;
 units[54] = ['104'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1204. ";
 preguntaids[54] = 1204


//  Id pregunta: 4609 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[55]= new Array();
 choices[55][0] = "Un convertidor similar a uno digital";
 choices[55][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[55][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[55][3] = "Nada de lo anterior es correcto";
 answers[55] = 2;
 units[55] = ['104'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4609. ";
 preguntaids[55] = 4609


//  Id pregunta: 4885 Año de creación de pregunta: 2002
 questions[56]= "57)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[56]= new Array();
 choices[56][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[56][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[56][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[56][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[56] = 0;
 units[56] = ['104'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4885. ";
 preguntaids[56] = 4885


//  Id pregunta: 4979 Año de creación de pregunta: 2002
 questions[57]= "58)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[57]= new Array();
 choices[57][0] = "RJ11";
 choices[57][1] = "RJ45";
 choices[57][2] = "RJ37";
 choices[57][3] = "V.24";
 answers[57] = 1;
 units[57] = ['104'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4979. ";
 preguntaids[57] = 4979


//  Id pregunta: 4733 Año de creación de pregunta: 2002
 questions[58]= "59)  El proceso de multiplexaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[58][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[58][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[58][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[58] = 3;
 units[58] = ['104', '105'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4733. ";
 preguntaids[58] = 4733


//  Id pregunta: 1393 Año de creación de pregunta: 2016
 questions[59]= "60)  EI est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?";
 choices[59]= new Array();
 choices[59][0] = "Tier 5";
 choices[59][1] = "Tier 4";
 choices[59][2] = "Tier 3";
 choices[59][3] = "Tier 0";
 answers[59] = 1;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1393. ";
 preguntaids[59] = 1393


//  Id pregunta: 4406 Año de creación de pregunta: 2002
 questions[60]= "61)  Dado un cable coaxial de longitud 1 metro, donde se aplica una potencia de 1 mW, y se obtiene en el otro extremo una potencia de salida de 0.1 mW, se puede decir que el cable presenta unas p&eacute;rdidas de:";
 choices[60]= new Array();
 choices[60][0] = "10 dB/m";
 choices[60][1] = "20 dB/m";
 choices[60][2] = "1 dB/m";
 choices[60][3] = "5 dB/m";
 answers[60] = 0;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4406. ";
 preguntaids[60] = 4406


//  Id pregunta: 2751 Año de creación de pregunta: 2002
 questions[61]= "62)  El decibelio (dB) es una unidad de medida usada en escalas:";
 choices[61]= new Array();
 choices[61][0] = "lineales.";
 choices[61][1] = "polares.";
 choices[61][2] = "logar&iacute;tmicas.";
 choices[61][3] = "exponenciales.";
 answers[61] = 2;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 2751. ";
 preguntaids[61] = 2751


//  Id pregunta: 4548 Año de creación de pregunta: 2002
 questions[62]= "63)  El est&aacute;ndar 802.3 del IEEE:";
 choices[62]= new Array();
 choices[62][0] = "Es pr&aacute;cticamente equivalente al Sistema Ethernet";
 choices[62][1] = "Utiliza el m&eacute;todo de paso de testigo en anillo";
 choices[62][2] = "Opera entre 10 y 100 Mb/s";
 choices[62][3] = "Emplea m&eacute;todos de no contenci&oacute;n";
 answers[62] = 0;
 units[62] = ['104'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4548. ";
 preguntaids[62] = 4548


//  Id pregunta: 1623 Año de creación de pregunta: 2016
 questions[63]= "64)  En las redes Ethernet las especificaciones del medio son variadas. Para la especificaci&oacute;n 1000Base-T, indique qu&eacute; cable se utiliza:";
 choices[63]= new Array();
 choices[63][0] = "FTP";
 choices[63][1] = "Coaxial fino";
 choices[63][2] = "UTP-5";
 choices[63][3] = "UTP-3";
 answers[63] = 2;
 units[63] = ['104'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1623. ";
 preguntaids[63] = 1623


//  Id pregunta: 4416 Año de creación de pregunta: 2002
 questions[64]= "65)  Indique cu&aacute;l de las opciones refleja m&aacute;s adecuadamente las caracter&iacute;sticas de un cable coaxial:";
 choices[64]= new Array();
 choices[64][0] = "Un cable coaxial es un medio de transmisi&oacute;n constituido por dos hilos conductores aislados entre si y dispuestos de forma paralela a lo largo de todo su recorrido";
 choices[64][1] = "Un cable coaxial est&aacute; constituido por dos hilos conductores paralelos aislados y recubiertos por una l&aacute;mina conductora";
 choices[64][2] = "Un cable coaxial est&aacute; constituido por un hilo conductor central rodeado de una lamina conductora conc&eacute;ntrica con &eacute;l y separado por un medio aislante";
 choices[64][3] = "Un cable coaxial est&aacute; constituido por un conjunto de conductores aislados entre si y torsionados sobre ellos mismos en grupos de cuatro, encerrados todos ellos por una lamina o cubierta conductora";
 answers[64] = 2;
 units[64] = ['104'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4416. ";
 preguntaids[64] = 4416


//  Id pregunta: 2572 Año de creación de pregunta: 2002
 questions[65]= "66)  A Claude Shannon se le considera:";
 choices[65]= new Array();
 choices[65][0] = "el padre de la telem&aacute;tica moderna";
 choices[65][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[65][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[65][3] = "el creador del primer sistema operativo";
 answers[65] = 0;
 units[65] = ['104'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 2572. ";
 preguntaids[65] = 2572


//  Id pregunta: 1624 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con la transmisi&oacute;n por fibra &oacute;ptica:";
 choices[66]= new Array();
 choices[66][0] = "La velocidad de propagaci&oacute;n de la luz a trav&eacute;s de una fibra &oacute;ptica monomodo es de 300.000 Kms/seg.";
 choices[66][1] = "La fibra &oacute;ptica monomodo tiene una atenuaci&oacute;n menor que el cable coaxial.";
 choices[66][2] = "A la fibra &oacute;ptica monomodo tambi&eacute;n se la conoce como de &iacute;ndice gradual.";
 choices[66][3] = "La fibra &oacute;ptica multimodo es la que presenta menores p&eacute;rdidas de la se&ntilde;al.";
 answers[66] = 1;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1624. ";
 preguntaids[66] = 1624


//  Id pregunta: 4335 Año de creación de pregunta: 2004
 questions[67]= "68)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[67]= new Array();
 choices[67][0] = "STP";
 choices[67][1] = "UTP";
 choices[67][2] = "FTP";
 choices[67][3] = "OM1";
 answers[67] = 1;
 units[67] = ['104'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4335. ";
 preguntaids[67] = 4335


//  Id pregunta: 4839 Año de creación de pregunta: 2002
 questions[68]= "69)  En telecomunicaciones se emplea mucho el concepto matem&aacute;tico de 'transformada'. &iquest;Podr&iacute;a decir a qu&eacute; se refiere este concepto?";
 choices[68]= new Array();
 choices[68][0] = "Es un cambio en la modulaci&oacute;n de la se&ntilde;al al pasar por las bobinas de 4 hilos.";
 choices[68][1] = "Es una operaci&oacute;n matem&aacute;tica que expresa una ecuaci&oacute;n en otros t&eacute;rminos mucho m&aacute;s f&aacute;cilmente tratables por un ordenador y m&aacute;s intuitivamente comprensibles por el ser humano.";
 choices[68][2] = "Es un cambio de base de las cantidades para poder operar con ellas en l&oacute;gica digital.";
 choices[68][3] = "Nada de lo anterior es cierto.";
 answers[68] = 1;
 units[68] = ['104'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4839. ";
 preguntaids[68] = 4839


//  Id pregunta: 4759 Año de creación de pregunta: 2002
 questions[69]= "70)  El ruido t&eacute;rmico es una perturbaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Debida a las diferencias en los coeficientes de dilataci&oacute;n de los conductores";
 choices[69][1] = "Aleatoria que aparece de forma natural en los conductores por agitaci&oacute;n de los electrones";
 choices[69][2] = "Igual a la temperatura a la cual la resistencia equivalente del dispositivo producir&iacute;a el ruido total observado";
 choices[69][3] = "Introducida en el proceso de cuantificaci&oacute;n";
 answers[69] = 1;
 units[69] = ['104'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4759. ";
 preguntaids[69] = 4759


//  Id pregunta: 1086 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[70]= new Array();
 choices[70][0] = "UTP - Unshielded Twisted Pair.";
 choices[70][1] = "STP - Shielded Twisted Pair.";
 choices[70][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[70][3] = "FTP - Foiled Twisted Pair.";
 answers[70] = 2;
 units[70] = ['104'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1086. ";
 preguntaids[70] = 1086


//  Id pregunta: 4482 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta cuando se estudia la relaci&oacute;n entre la velocidad de transmisi&oacute;n de una se&ntilde;al digital y la frecuencia m&aacute;xima de la se&ntilde;al?:";
 choices[71]= new Array();
 choices[71][0] = "No existe ninguna relaci&oacute;n directa";
 choices[71][1] = "Cuanto mayor sea el ancho de banda de la se&ntilde;al, menor es la velocidad de transmisi&oacute;n";
 choices[71][2] = "Cuanto mayor sea la velocidad de transmisi&oacute;n, menor es el ancho de banda";
 choices[71][3] = "Cuanto menor sea el ancho de banda, menor es la velocidad de transmisi&oacute;n";
 answers[71] = 3;
 units[71] = ['104'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4482. ";
 preguntaids[71] = 4482


//  Id pregunta: 4633 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Qu&eacute; t&eacute;cnica de multiplexaci&oacute;n es aquella en la que el n&uacute;mero de se&ntilde;ales simult&aacute;neas que se pueden transmitir por un circuito se obtiene dividiendo el ancho de banda del circuito entre el ancho de banda de las se&ntilde;ales a transmitir?:";
 choices[72]= new Array();
 choices[72][0] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[72][1] = "Multiplexaci&oacute;n por divisi&oacute;n de frecuencia";
 choices[72][2] = "Multiplexaci&oacute;n por divisi&oacute;n de tiempo";
 choices[72][3] = "Multiplexaci&oacute;n por divisi&oacute;n de fase";
 answers[72] = 1;
 units[72] = ['104'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4633. ";
 preguntaids[72] = 4633


//  Id pregunta: 879 Año de creación de pregunta: 2016
 questions[73]= "74)  La velocidad de transmisi&oacute;n del cable de pares trenzados CAT6 empleado en el cableado de redes locales, es de:";
 choices[73]= new Array();
 choices[73][0] = "Hasta 56 Mbps.";
 choices[73][1] = "Hasta 100 Mbps.";
 choices[73][2] = "Hasta 1,2 Gbps.";
 choices[73][3] = "Hasta 10 Gbps.";
 answers[73] = 2;
 units[73] = ['104'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 879. AGE A2 2015";
 preguntaids[73] = 879


//  Id pregunta: 4596 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[74]= new Array();
 choices[74][0] = "Debido al relleno de bits";
 choices[74][1] = "La eficiencia de ambos protocolos es la misma";
 choices[74][2] = "Debido al relleno de caracteres";
 choices[74][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[74] = 0;
 units[74] = ['104'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4596. ";
 preguntaids[74] = 4596


