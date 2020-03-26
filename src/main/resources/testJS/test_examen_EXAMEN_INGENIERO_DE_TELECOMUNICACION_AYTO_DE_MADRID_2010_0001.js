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
//  Id pregunta: 8848 Año de creación de pregunta: 2013
 questions[0]= "1)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[0]= new Array();
 choices[0][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[0][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[0][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = 1;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8848. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[0] = 8848


//  Id pregunta: 8497 Año de creación de pregunta: 2011
 questions[1]= "2)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[1]= new Array();
 choices[1][0] = "El retardo es m&iacute;nimo.";
 choices[1][1] = "El retardo es m&aacute;ximo.";
 choices[1][2] = "El retardo es constante.";
 choices[1][3] = "No existe retardo";
 answers[1] = 2;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8497. Teleco Ayto. Madrid 2010";
 preguntaids[1] = 8497


//  Id pregunta: 8493 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[2]= new Array();
 choices[2][0] = "el filtrado de coseno alzado de la moduladora";
 choices[2][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[2][2] = "el filtrado de de retardo de grupo constante";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 0;
 units[2] = ['99'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 8493. Teleco Ayto. Madrid 2010";
 preguntaids[2] = 8493


//  Id pregunta: 8804 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[3]= new Array();
 choices[3][0] = "Fibra 62.5/125 um";
 choices[3][1] = "Fibra 50/125 um";
 choices[3][2] = "Fibra 200/380 um";
 choices[3][3] = "Fibra 10/125 um";
 answers[3] = 3;
 units[3] = ['106'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8804. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[3] = 8804


//  Id pregunta: 8492 Año de creación de pregunta: 2011
 questions[4]= "5)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[4]= new Array();
 choices[4][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[4][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[4][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = 0;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8492. Teleco Ayto. Madrid 2010";
 preguntaids[4] = 8492


//  Id pregunta: 8852 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;Cu&aacute;l es el modelo de organizaci&oacute;n TIC &oacute;ptimo?";
 choices[5]= new Array();
 choices[5][0] = "La estructura matricial con dise&ntilde;o plano";
 choices[5][1] = "La estructura funcional apuntada";
 choices[5][2] = "La estructura matricial con orientaci&oacute;n a staff";
 choices[5][3] = "Aquel que permita en cada caso conseguir los objetivos del negocio";
 answers[5] = 3;
 units[5] = ['30'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 8852. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[5] = 8852


//  Id pregunta: 8499 Año de creación de pregunta: 2011
 questions[6]= "7)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[6][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[6][2] = "Se produce en ambos tipos de fibra.";
 choices[6][3] = "No se produce en la fibra &oacute;ptica";
 answers[6] = 1;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8499. Teleco Ayto. Madrid 2010";
 preguntaids[6] = 8499


//  Id pregunta: 8489 Año de creación de pregunta: 2011
 questions[7]= "8)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 68 de la Ley 9/2014 General de Telecomunicaciones:";
 choices[7]= new Array();
 choices[7][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[7][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[7][2] = "El Gobierno.";
 choices[7][3] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 answers[7] = 1;
 units[7] = ['121'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 8489. Teleco Ayto. Madrid 2010";
 preguntaids[7] = 8489


//  Id pregunta: 8803 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[8][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[8][2] = "1 por cada canal B, mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[8][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[8] = 2;
 units[8] = ['114'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8803. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[8] = 8803


//  Id pregunta: 8490 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[9]= new Array();
 choices[9][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[9][1] = "Ministerio de Energia, Turismo y Agenda Digital";
 choices[9][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[9][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[9] = 1;
 units[9] = ['121'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8490. Teleco Ayto. Madrid 2010";
 preguntaids[9] = 8490


//  Id pregunta: 8506 Año de creación de pregunta: 2011
 questions[10]= "11)  Indica cual de estas afirmaciones es cierta";
 choices[10]= new Array();
 choices[10][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[10][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[10][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = 1;
 units[10] = ['103'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8506. Teleco Ayto. Madrid 2010";
 preguntaids[10] = 8506


//  Id pregunta: 8504 Año de creación de pregunta: 2011
 questions[11]= "12)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[11]= new Array();
 choices[11][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[11][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[11][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[11][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[11] = 0;
 units[11] = ['103'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8504. Teleco Ayto. Madrid 2010";
 preguntaids[11] = 8504


//  Id pregunta: 8507 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[12]= new Array();
 choices[12][0] = "Wowza Media Server";
 choices[12][1] = "Icecast";
 choices[12][2] = "Darwin Streaming Server";
 choices[12][3] = "FlowCast";
 answers[12] = 3;
 units[12] = ['103'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8507. Teleco Ayto. Madrid 2010";
 preguntaids[12] = 8507


//  Id pregunta: 8801 Año de creación de pregunta: 2013
 questions[13]= "14)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[13]= new Array();
 choices[13][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[13][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[13][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[13][3] = "Ninguna de las respuestas es correcta.";
 answers[13] = 0;
 units[13] = ['114'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8801. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[13] = 8801


//  Id pregunta: 8494 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[14]= new Array();
 choices[14][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[14][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[14][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = 1;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8494. Teleco Ayto. Madrid 2010";
 preguntaids[14] = 8494


//  Id pregunta: 8501 Año de creación de pregunta: 2011
 questions[15]= "16)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[15]= new Array();
 choices[15][0] = "1 CSS.";
 choices[15][1] = "100 CSS.";
 choices[15][2] = "36 CSS.";
 choices[15][3] = "10 CSS";
 answers[15] = 2;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 8501. Teleco Ayto. Madrid 2010";
 preguntaids[15] = 8501


//  Id pregunta: 8495 Año de creación de pregunta: 2011
 questions[16]= "17)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[16]= new Array();
 choices[16][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[16][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[16][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = 2;
 units[16] = ['102'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8495. Teleco Ayto. Madrid 2010";
 preguntaids[16] = 8495


//  Id pregunta: 8488 Año de creación de pregunta: 2011
 questions[17]= "18)  No ser&aacute; necesario que una ICT incluya inicialmente la red de distribuci&oacute;n para los servicios de:";
 choices[17]= new Array();
 choices[17][0] = "Telecomunicaciones por cable.";
 choices[17][1] = "Radiodifusi&oacute;n.";
 choices[17][2] = "Telefon&iacute;a.";
 choices[17][3] = "Deber&aacute; incluir todas ellas.";
 answers[17] = 3;
 units[17] = ['121'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8488. Teleco Ayto. Madrid 2010";
 preguntaids[17] = 8488


//  Id pregunta: 8850 Año de creación de pregunta: 2013
 questions[18]= "19)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP:";
 choices[18]= new Array();
 choices[18][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[18][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al c&oacute;dec G.711.";
 choices[18][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 0;
 units[18] = ['110'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8850. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[18] = 8850


//  Id pregunta: 8500 Año de creación de pregunta: 2011
 questions[19]= "20)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[19]= new Array();
 choices[19][0] = "De baja capacidad y elevado alcance.";
 choices[19][1] = "De alta capacidad y reducido alcance.";
 choices[19][2] = "De alta capacidad y elevado alcance.";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 2;
 units[19] = ['106'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8500. Teleco Ayto. Madrid 2010";
 preguntaids[19] = 8500


//  Id pregunta: 8503 Año de creación de pregunta: 2011
 questions[20]= "21)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[20]= new Array();
 choices[20][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[20][1] = "S&oacute;lo se emplea en RDSI.";
 choices[20][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 0;
 units[20] = ['106', '107'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8503. Teleco Ayto. Madrid 2010";
 preguntaids[20] = 8503


//  Id pregunta: 8841 Año de creación de pregunta: 2013
 questions[21]= "22)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[21]= new Array();
 choices[21][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[21][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[21][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[21][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[21] = 0;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8841. Examen Teleco Ayto Madrid 2010";
 preguntaids[21] = 8841


//  Id pregunta: 8502 Año de creación de pregunta: 2011
 questions[22]= "23)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[22]= new Array();
 choices[22][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[22][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[22][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = 1;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8502. Teleco Ayto. Madrid 2010";
 preguntaids[22] = 8502


//  Id pregunta: 8851 Año de creación de pregunta: 2013
 questions[23]= "24)  QSIG es:";
 choices[23]= new Array();
 choices[23][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[23][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[23][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 0;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8851. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[23] = 8851


//  Id pregunta: 8849 Año de creación de pregunta: 2013
 questions[24]= "25)  RTP (Real Time Protocol) se utiliza en ToIP (telefon&iacute;a IP) para:";
 choices[24]= new Array();
 choices[24][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[24][1] = "Nada. Lo que se utiliza es RTCP (Real Time Control Protocol)";
 choices[24][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 2;
 units[24] = ['110'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8849. T&eacute;cnico Teleco Ayto Madrid 2010";
 preguntaids[24] = 8849


//  Id pregunta: 8505 Año de creación de pregunta: 2011
 questions[25]= "26)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[25]= new Array();
 choices[25][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[25][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[25][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[25][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[25] = 1;
 units[25] = ['103'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8505. Teleco Ayto. Madrid 2010";
 preguntaids[25] = 8505


//  Id pregunta: 8498 Año de creación de pregunta: 2011
 questions[26]= "27)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[26]= new Array();
 choices[26][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[26][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[26][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 1;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8498. Teleco Ayto. Madrid 2010";
 preguntaids[26] = 8498


//  Id pregunta: 8491 Año de creación de pregunta: 2011
 questions[27]= "28)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[27]= new Array();
 choices[27][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[27][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[27][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[27][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[27] = 1;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8491. Teleco Ayto. Madrid 2010";
 preguntaids[27] = 8491


//  Id pregunta: 8802 Año de creación de pregunta: 2013
 questions[28]= "29)  Indica cu&aacute;l de estas afirmaciones es cierta:";
 choices[28]= new Array();
 choices[28][0] = "En RDSI, igual que en RTB, el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[28][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[28][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[28][3] = "Todas las respuestas son correctas.";
 answers[28] = 1;
 units[28] = ['114'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8802. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[28] = 8802


//  Id pregunta: 8496 Año de creación de pregunta: 2011
 questions[29]= "30)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[29]= new Array();
 choices[29][0] = "El ruido es acumulativo.";
 choices[29][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[29][2] = "No tiene influencia el ruido.";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = 1;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8496. Teleco Ayto. Madrid 2010";
 preguntaids[29] = 8496


