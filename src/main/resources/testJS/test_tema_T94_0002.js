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
//  Id pregunta: 9699 Año de creación de pregunta: 2014
 questions[0]= "1)  El m&eacute;todo SLIM de estimaci&oacute;n de esfuerzo, usa la curva de:";
 choices[0]= new Array();
 choices[0][0] = "F de Snedecor";
 choices[0][1] = "Parkingson";
 choices[0][2] = "Norden-Rayleigh";
 choices[0][3] = "Pareto";
 answers[0] = 2;
 units[0] = ['94'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 9699. ";
 preguntaids[0] = 9699


//  Id pregunta: 10745 Año de creación de pregunta: 2015
 questions[1]= "2)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[1]= new Array();
 choices[1][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[1][1] = "Producitividad, complejidad y objetiva.";
 choices[1][2] = "Complejidad y tama&ntilde;o.";
 choices[1][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[1] = 0;
 units[1] = ['94'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10745. ";
 preguntaids[1] = 10745


//  Id pregunta: 8865 Año de creación de pregunta: 2013
 questions[2]= "3)  El modelo de estimaci&oacute;n de Putnam se caracteriza por:";
 choices[2]= new Array();
 choices[2][0] = "Ser un modelo te&oacute;rico";
 choices[2][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[2][2] = "Incluir una constante tecnol&oacute;gica";
 choices[2][3] = "Todas las anteriores";
 answers[2] = 3;
 units[2] = ['94'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 8865. ";
 preguntaids[2] = 8865


//  Id pregunta: 9700 Año de creación de pregunta: 2014
 questions[3]= "4)  La ecuaci&oacute;n del software establece principalmente que&hellip;";
 choices[3]= new Array();
 choices[3][0] = "El esfuerzo necesario para realizar un proyecto es una ecuaci&oacute;n logar&iacute;tmica";
 choices[3][1] = "El esfuerzo se mide en horas/hombre y hay 100 horas hombre por mes";
 choices[3][2] = "El tiempo para realizar un proyecto se puede medir en base a los puntos de funci&oacute;n ajustados";
 choices[3][3] = "El esfuerzo y el tiempo requerido para realizar un proyecto son inversamente proporcionales";
 answers[3] = 3;
 units[3] = ['94'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9700. ";
 preguntaids[3] = 9700


//  Id pregunta: 9048 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "C";
 choices[4][1] = "Ensamblador";
 choices[4][2] = "Cobol";
 choices[4][3] = "Pascal";
 answers[4] = 1;
 units[4] = ['94'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 9048. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";
 preguntaids[4] = 9048


//  Id pregunta: 9121 Año de creación de pregunta: 2014
 questions[5]= "6)  COCOMO II est&aacute; formado por tres modelos o submodelos. &iquest;Cu&aacute;l de los siguientes NO es un modelo de COCOMO II?";
 choices[5]= new Array();
 choices[5][0] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n.";
 choices[5][1] = "Modelo de Reutilizaci&oacute;n de Objetos.";
 choices[5][2] = "Modelo de Dise&ntilde;o Preliminar.";
 choices[5][3] = "Modelo Post-Arquitectura.";
 answers[5] = 1;
 units[5] = ['94'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 9121. Examen TIC A2 2013";
 preguntaids[5] = 9121


//  Id pregunta: 8864 Año de creación de pregunta: 2013
 questions[6]= "7)  El uso de la t&eacute;cnica de la media para combinar estimaciones software individuales es caracter&iacute;stico de los m&eacute;todos:";
 choices[6]= new Array();
 choices[6][0] = "Con base hist&oacute;rica";
 choices[6][1] = "Con base estad&iacute;stica";
 choices[6][2] = "Compuestos";
 choices[6][3] = "Lineales";
 answers[6] = 0;
 units[6] = ['94'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 8864. ";
 preguntaids[6] = 8864


//  Id pregunta: 8861 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo?";
 choices[7]= new Array();
 choices[7][0] = "LOC";
 choices[7][1] = "DSI";
 choices[7][2] = "NSLOC";
 choices[7][3] = "LDSI";
 answers[7] = 3;
 units[7] = ['94'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 8861. ";
 preguntaids[7] = 8861


//  Id pregunta: 8859 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes magnitudes no tratan en general de evaluar las m&eacute;tricas de estimaci&oacute;n software?";
 choices[8]= new Array();
 choices[8][0] = "Calidad";
 choices[8][1] = "Productividad";
 choices[8][2] = "Seguridad";
 choices[8][3] = "Tama&ntilde;o";
 answers[8] = 2;
 units[8] = ['94'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 8859. ";
 preguntaids[8] = 8859


//  Id pregunta: 10746 Año de creación de pregunta: 2015
 questions[9]= "10)  El model COCOMO contempla tres modos distintos de desarrollo del software. El m&aacute;s adecuado para un proyecto de unas 300.000 instrucciones de c&oacute;digo fuente, con unos requisitos extremadamente r&iacute;gidos, es:";
 choices[9]= new Array();
 choices[9][0] = "Modo semilibre.";
 choices[9][1] = "Modo empotrado.";
 choices[9][2] = "Modo org&aacute;nico.";
 choices[9][3] = "Modo avanzado.";
 answers[9] = 1;
 units[9] = ['94'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10746. ";
 preguntaids[9] = 10746


//  Id pregunta: 9701 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;En qu&eacute; se basa el m&eacute;todo de Karner?";
 choices[10]= new Array();
 choices[10][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[10][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[10][2] = "Se aplica en Cocomo semipesado";
 choices[10][3] = "Variante del m&eacute;todo Mark II";
 answers[10] = 0;
 units[10] = ['94'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 9701. ";
 preguntaids[10] = 9701


//  Id pregunta: 8862 Año de creación de pregunta: 2013
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "M&eacute;todo Albrecht";
 choices[11][1] = "M&eacute;todo MARK II";
 choices[11][2] = "La a) y la b) son correctas";
 choices[11][3] = "Ninguno de los anteriores";
 answers[11] = 2;
 units[11] = ['94'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 8862. ";
 preguntaids[11] = 8862


//  Id pregunta: 8860 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las m&eacute;tricas de productividad es incorrecta?";
 choices[12]= new Array();
 choices[12][0] = "Recogen la eficiencia del proceso del construcci&oacute;n de software";
 choices[12][1] = "Relacionan el software que se ha construido con el esfuerzo que ha costado elaborarlo";
 choices[12][2] = "Un ejemplo de m&eacute;trica de productividad son los Puntos de Funci&oacute;n";
 choices[12][3] = "Son en general indirectas, puesto que requieren de otras m&eacute;tricas previas para poder calcularse";
 answers[12] = 3;
 units[12] = ['94'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 8860. ";
 preguntaids[12] = 8860


//  Id pregunta: 9041 Año de creación de pregunta: 2014
 questions[13]= "14)  FAN-OUT es una medida de:";
 choices[13]= new Array();
 choices[13][0] = "Complejidad";
 choices[13][1] = "Reutilizaci&oacute;n";
 choices[13][2] = "Mantenibilidad";
 choices[13][3] = "Ninguna de las anteriores.";
 answers[13] = 0;
 units[13] = ['94'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 9041. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";
 preguntaids[13] = 9041


//  Id pregunta: 8868 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es uno de los tres tipos de proyecto contemplados en el COCOMO cl&aacute;sico/81?";
 choices[14]= new Array();
 choices[14][0] = "Org&aacute;nico";
 choices[14][1] = "Acoplado";
 choices[14][2] = "Semiacoplado";
 choices[14][3] = "Empotrado";
 answers[14] = 1;
 units[14] = ['94'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8868. ";
 preguntaids[14] = 8868


//  Id pregunta: 10026 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[15]= new Array();
 choices[15][0] = "Regla del 80-20.";
 choices[15][1] = "Regla del 30-40-30.";
 choices[15][2] = "Regla del 40-20-40.";
 choices[15][3] = "Regla del 20-60-20.";
 answers[15] = 2;
 units[15] = ['31', '94'];
 blocks[15] = ['B1', 'B3'];
 comments[15] = "Id Pregunta: 10026. Examen TIC A2 2014";
 preguntaids[15] = 10026


//  Id pregunta: 8866 Año de creación de pregunta: 2013
 questions[16]= "17)  El modelo de estimaci&oacute;n de Putnam no se caracteriza por:";
 choices[16]= new Array();
 choices[16][0] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[16][1] = "Tener asociada una herramienta automatizada (SLIM)";
 choices[16][2] = "Incluir una constante tecnol&oacute;gica";
 choices[16][3] = "Funcionar en proyectos grandes relativamente peor que en proyectos peque&ntilde;os";
 answers[16] = 3;
 units[16] = ['94'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 8866. ";
 preguntaids[16] = 8866


//  Id pregunta: 10058 Año de creación de pregunta: 2015
 questions[17]= "18)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[17]= new Array();
 choices[17][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[17][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[17][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[17][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[17] = 3;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10058. Examen TIC A2 2014";
 preguntaids[17] = 10058


//  Id pregunta: 10548 Año de creación de pregunta: 2015
 questions[18]= "19)  En cuanto al uso de los Cost Driven Attributes (CDA) en COCOMO, seleccione la opci&oacute;n verdadera";
 choices[18]= new Array();
 choices[18][0] = "Para estimar el esfuerzo, se tiene en cuenta las l&iacute;neas de c&oacute;digo en miles de l&iacute;neas de c&oacute;digo (KLOC)";
 choices[18][1] = "Los Cost Driven Attributes (a, b, c y d) son los mismos para cada fase de construcci&oacute;n del software en el modelo avanzado.";
 choices[18][2] = "En el m&oacute;delo b&aacute;sico, se tiene en cuenta, adem&aacute;s del n&uacute;mero de l&iacute;neas, los Cost Driven Attributes (CDA) b&aacute;sicos";
 choices[18][3] = "Para estimar el esfuerzo, se utiliza a y b. Para estimar el tiempo se utliza c y d.";
 answers[18] = 3;
 units[18] = ['94'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10548. ";
 preguntaids[18] = 10548


//  Id pregunta: 9040 Año de creación de pregunta: 2014
 questions[19]= "20)  FAN-IN es una medida de:";
 choices[19]= new Array();
 choices[19][0] = "Complejidad";
 choices[19][1] = "Reutilizaci&oacute;n";
 choices[19][2] = "Mantenibilidad";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 1;
 units[19] = ['94'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 9040. N&uacute;mero de clases que hacen uso de la clase que estamos estudiando.";
 preguntaids[19] = 9040


//  Id pregunta: 10531 Año de creación de pregunta: 2015
 questions[20]= "21)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[20]= new Array();
 choices[20][0] = "Empotrado";
 choices[20][1] = "Org&aacute;nico";
 choices[20][2] = "Semiacoplado";
 choices[20][3] = "Semiempotrado";
 answers[20] = 3;
 units[20] = ['94'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10531. ";
 preguntaids[20] = 10531


//  Id pregunta: 8869 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[21]= new Array();
 choices[21][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[21][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[21][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[21][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[21] = 3;
 units[21] = ['94'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8869. ";
 preguntaids[21] = 8869


//  Id pregunta: 8863 Año de creación de pregunta: 2013
 questions[22]= "23)  Una clasificaci&oacute;n t&iacute;pica de los modelos de estimaci&oacute;n software es:";
 choices[22]= new Array();
 choices[22][0] = "Basados en Puntos de Funci&oacute;n, multivariable est&aacute;ticos y multivariable din&aacute;micos";
 choices[22][1] = "Con base hist&oacute;rica, con base estad&iacute;stica, con base te&oacute;rica, compuestos y basados en est&aacute;ndares";
 choices[22][2] = "T&eacute;cnicas de Delphi, Modelos exponenciales, Modelo de Putnam y modelos COCOMO";
 choices[22][3] = "Ninguno de los anteriores";
 answers[22] = 1;
 units[22] = ['94'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 8863. ";
 preguntaids[22] = 8863


//  Id pregunta: 10829 Año de creación de pregunta: 2015
 questions[23]= "24)  El modelo de Putman para la estimaci&oacute;n del esfuerzo en el desarrollo de un sistema de informaci&oacute;n es un modelo:";
 choices[23]= new Array();
 choices[23][0] = "Compuesto";
 choices[23][1] = "Estad&iacute;stico";
 choices[23][2] = "Te&oacute;rico";
 choices[23][3] = "Hist&oacute;rico";
 answers[23] = 2;
 units[23] = ['94'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10829. ";
 preguntaids[23] = 10829


//  Id pregunta: 10744 Año de creación de pregunta: 2015
 questions[24]= "25)  El modelo de estimaci&oacute;n que establece que el esfuerzo de desarrollo de un proyecto Software sigue una distribuci&oacute;n de Rayleigh-Norden es el de:";
 choices[24]= new Array();
 choices[24][0] = "PUTNAM";
 choices[24][1] = "COCOMO";
 choices[24][2] = "WALTSON-FELIX";
 choices[24][3] = "ESTERLING";
 answers[24] = 0;
 units[24] = ['94'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10744. ";
 preguntaids[24] = 10744


//  Id pregunta: 8867 Año de creación de pregunta: 2013
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[25]= new Array();
 choices[25][0] = "El modelo original, COCOMO 81, fue publicado por Barry Boehm";
 choices[25][1] = "Sus siglas vienen de COnstructive COst MOdel";
 choices[25][2] = "Es un modelo de base emp&iacute;rica";
 choices[25][3] = "Es un modelo con base estad&iacute;stica";
 answers[25] = 3;
 units[25] = ['94'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 8867. ";
 preguntaids[25] = 8867


