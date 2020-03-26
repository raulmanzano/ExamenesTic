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
//  Id pregunta: 8889 Año de creación de pregunta: 2013
 questions[0]= "1)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[0]= new Array();
 choices[0][0] = "Modelo conceptual de datos.";
 choices[0][1] = "Modelo de casos de uso.";
 choices[0][2] = "Cat&aacute;logo de usuarios.";
 choices[0][3] = "Cat&aacute;logo de excepciones.";
 answers[0] = 1;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8889. Examen AGE TIC A1 2011";
 preguntaids[0] = 8889


//  Id pregunta: 8904 Año de creación de pregunta: 2013
 questions[1]= "2)  &iquest;Qu&eacute; es la cohesi&oacute;n de un m&oacute;dulo?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;trica de la calidad del software directamente proporcional al n&uacute;mero de clases de un m&oacute;dulo.";
 choices[1][1] = "Relaci&oacute;n que existe entre elementos del mismo m&oacute;dulo.";
 choices[1][2] = "Fan-in.";
 choices[1][3] = "Fan-out.";
 answers[1] = 1;
 units[1] = ['89'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 8904. ";
 preguntaids[1] = 8904


//  Id pregunta: 8927 Año de creación de pregunta: 2013
 questions[2]= "3)  Indique la informaci&oacute;n opcional que se debe registrar de cada requisito";
 choices[2]= new Array();
 choices[2][0] = "C&oacute;digo &uacute;nico";
 choices[2][1] = "Nombre descriptivo";
 choices[2][2] = "Descripci&oacute;n";
 choices[2][3] = "Fecha creaci&oacute;n";
 answers[2] = 3;
 units[2] = ['84'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 8927. ";
 preguntaids[2] = 8927


//  Id pregunta: 8885 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Qu&eacute; diagrama UML muestra el flujo de acciones en curso, no necesariamente at&oacute;micas, en relaci&oacute;n a la estructura de estados del sistema?";
 choices[3]= new Array();
 choices[3][0] = "Diagrama de secuencia.";
 choices[3][1] = "Diagrama de estados.";
 choices[3][2] = "Diagrama de actividad.";
 choices[3][3] = "Diagrama de colaboraci&oacute;n.";
 answers[3] = 2;
 units[3] = ['85'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 8885. Examen AGE TIC A1 2011";
 preguntaids[3] = 8885


//  Id pregunta: 8906 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes diagramas contempla UML 2.0?";
 choices[4]= new Array();
 choices[4][0] = "De actividad, DFD, de casos de uso, de secuencia, de comunicaci&oacute;n.";
 choices[4][1] = "De casos de uso, de actividad, de secuencia, de comunicaci&oacute;n, de clases.";
 choices[4][2] = "De casos de uso, entidad-relaci&oacute;n, de secuencia, de clases, de comunicaci&oacute;n.";
 choices[4][3] = "De clases, de herencia compuesta, de secuencia, de comunicaci&oacute;n, de clases.";
 answers[4] = 1;
 units[4] = ['89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 8906. ";
 preguntaids[4] = 8906


//  Id pregunta: 8493 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[5]= new Array();
 choices[5][0] = "el filtrado de coseno alzado de la moduladora";
 choices[5][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[5][2] = "el filtrado de de retardo de grupo constante";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 0;
 units[5] = ['99'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 8493. Teleco Ayto. Madrid 2010";
 preguntaids[5] = 8493


//  Id pregunta: 8553 Año de creación de pregunta: 2013
 questions[6]= "7)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[6]= new Array();
 choices[6][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[6][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[6][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[6][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[6] = 3;
 units[6] = ['83'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 8553. ";
 preguntaids[6] = 8553


//  Id pregunta: 8458 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[7]= new Array();
 choices[7][0] = "Singleton";
 choices[7][1] = "Observer";
 choices[7][2] = "Proxy";
 choices[7][3] = "Prototype";
 answers[7] = 1;
 units[7] = ['89'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 8458. ";
 preguntaids[7] = 8458


//  Id pregunta: 8898 Año de creación de pregunta: 2013
 questions[8]= "9)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[8]= new Array();
 choices[8][0] = "Regulares y d&eacute;biles.";
 choices[8][1] = "Fuertes y d&eacute;biles.";
 choices[8][2] = "A y B son correctas.";
 choices[8][3] = "Ninguna de las anteriores es correcta.";
 answers[8] = 2;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 8898. Examen AGE TIC A1 2011";
 preguntaids[8] = 8898


//  Id pregunta: 8788 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un nivel de madurez de CMMI ?";
 choices[9]= new Array();
 choices[9][0] = "Definido";
 choices[9][1] = "Gestionado";
 choices[9][2] = "Gestionado de forma cuantitativa";
 choices[9][3] = "Repetible";
 answers[9] = 3;
 units[9] = ['92'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8788. ";
 preguntaids[9] = 8788


//  Id pregunta: 8933 Año de creación de pregunta: 2013
 questions[10]= "11)  Las entrevistas son una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos. &iquest;Cu&aacute;l de las siguientes no es una fase de las mismas?";
 choices[10]= new Array();
 choices[10][0] = "Identificaci&oacute;n de candidatos";
 choices[10][1] = "Contacto con candidatos para fijar entrevista";
 choices[10][2] = "Preparaci&oacute;n";
 choices[10][3] = "Ejecuci&oacute;n de la entrevista";
 answers[10] = 1;
 units[10] = ['84'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 8933. ";
 preguntaids[10] = 8933


//  Id pregunta: 8790 Año de creación de pregunta: 2013
 questions[11]= "12)  &iquest;Cu&aacute;ntos principios fundamentales define la ISO 9004:2009?";
 choices[11]= new Array();
 choices[11][0] = "6";
 choices[11][1] = "7";
 choices[11][2] = "8";
 choices[11][3] = "Ninguno";
 answers[11] = 2;
 units[11] = ['92'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 8790. ";
 preguntaids[11] = 8790


//  Id pregunta: 8932 Año de creación de pregunta: 2013
 questions[12]= "13)  Indique cu&aacute;l de los siguientes no es un tipo de prototipo en el proceso unificado de desarrollo del software";
 choices[12]= new Array();
 choices[12][0] = "Prototipo arquitect&oacute;nico";
 choices[12][1] = "Prototipo de prueba";
 choices[12][2] = "Prototipo exploratorio";
 choices[12][3] = "Prototipo evolutivo";
 answers[12] = 1;
 units[12] = ['84'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 8932. ";
 preguntaids[12] = 8932


//  Id pregunta: 8929 Año de creación de pregunta: 2013
 questions[13]= "14)  Seg&uacute;n Metricav3, &iquest;qu&eacute; participante se encarga de definir los requisitos de sistema?";
 choices[13]= new Array();
 choices[13][0] = "Jefe de proyecto";
 choices[13][1] = "Consultor";
 choices[13][2] = "Analista";
 choices[13][3] = "Programador";
 answers[13] = 2;
 units[13] = ['84'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 8929. ";
 preguntaids[13] = 8929


//  Id pregunta: 8859 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes magnitudes no tratan en general de evaluar las m&eacute;tricas de estimaci&oacute;n software?";
 choices[14]= new Array();
 choices[14][0] = "Calidad";
 choices[14][1] = "Productividad";
 choices[14][2] = "Seguridad";
 choices[14][3] = "Tama&ntilde;o";
 answers[14] = 2;
 units[14] = ['94'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8859. ";
 preguntaids[14] = 8859


//  Id pregunta: 8552 Año de creación de pregunta: 2013
 questions[15]= "16)  En relaci&oacute;n a la matriz DAFO, se&ntilde;ale la afirmaci&oacute;n CORRECTA.";
 choices[15]= new Array();
 choices[15][0] = "Las fortalezas y las debilidades hacen referencia a aspectos internos de la organizaci&oacute;n";
 choices[15][1] = "Las fortalezas hacen referencia a aspectos externos a la organizaci&oacute;n y las debilidades a aspectos internos";
 choices[15][2] = "Las fortalezas hacen referencia a aspectos internos a la organizaci&oacute;n y las debilidades a aspectos externos";
 choices[15][3] = "Las fortalezas y las debilidades hacen referencia a aspectos externos de la organizaci&oacute;n";
 answers[15] = 0;
 units[15] = ['83'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 8552. ";
 preguntaids[15] = 8552


//  Id pregunta: 8425 Año de creación de pregunta: 2011
 questions[16]= "17)  La &uacute;ltima versi&oacute;n de ISO 9004 es:";
 choices[16]= new Array();
 choices[16][0] = "ISO 9004:2005";
 choices[16][1] = "ISO 9004:2000";
 choices[16][2] = "ISO 9004:2009";
 choices[16][3] = "ISO 9004:2008";
 answers[16] = 2;
 units[16] = ['98'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 8425. ";
 preguntaids[16] = 8425


//  Id pregunta: 8896 Año de creación de pregunta: 2013
 questions[17]= "18)  En UML, NO es un diagrama din&aacute;mico:";
 choices[17]= new Array();
 choices[17][0] = "Diagrama de secuencia.";
 choices[17][1] = "Diagrama de estado.";
 choices[17][2] = "Diagrama de despliegue.";
 choices[17][3] = "Diagrama de colaboraci&oacute;n.";
 answers[17] = 2;
 units[17] = ['85'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 8896. Examen AGE TIC A1 2011";
 preguntaids[17] = 8896


//  Id pregunta: 8892 Año de creación de pregunta: 2013
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[18]= new Array();
 choices[18][0] = "UMTS.";
 choices[18][1] = "JINI.";
 choices[18][2] = "VORBIS.";
 choices[18][3] = "CLOS.";
 answers[18] = 1;
 units[18] = ['85'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 8892. Examen AGE TIC A1 2011";
 preguntaids[18] = 8892


//  Id pregunta: 8457 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[19]= new Array();
 choices[19][0] = "Lisp";
 choices[19][1] = "Perl";
 choices[19][2] = "Php";
 choices[19][3] = "C++";
 answers[19] = 3;
 units[19] = ['87', '88', '89'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 8457. ";
 preguntaids[19] = 8457


//  Id pregunta: 8551 Año de creación de pregunta: 2013
 questions[20]= "21)  En relaci&oacute;n a la elaboraci&oacute;n de un Plan de Sistemas de Informaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "El Comit&eacute; de Direcci&oacute;n realiza la programaci&oacute;n, define la administraci&oacute;n, los procedimientos y la organizaci&oacute;n del trabajo.";
 choices[20][1] = "El equipo de proyecto es la instancia que establece las orientaciones del desarrollo con los controles de su realizaci&oacute;n, la validaci&oacute;n de los trabajos efectuados, y la toma de decisiones al final de cada fase del estudio.";
 choices[20][2] = "Es tarea del Comit&eacute; de Direcci&oacute;n asegurarse de la traslaci&oacute;n de la pol&iacute;tica estrat&eacute;gica de la organizaci&oacute;n al plan estrat&eacute;gico de Sistemas de Informaci&oacute;n y las Comunicaciones";
 choices[20][3] = "Todas las anteriores";
 answers[20] = 2;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 8551. ";
 preguntaids[20] = 8551


//  Id pregunta: 8472 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil?";
 choices[21]= new Array();
 choices[21][0] = "Scrum";
 choices[21][1] = "XP (eXtreme Programming)";
 choices[21][2] = "Getting Real";
 choices[21][3] = "Todas las anteriores";
 answers[21] = 3;
 units[21] = ['84'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8472. ";
 preguntaids[21] = 8472


//  Id pregunta: 8866 Año de creación de pregunta: 2013
 questions[22]= "23)  El modelo de estimaci&oacute;n de Putnam no se caracteriza por:";
 choices[22]= new Array();
 choices[22][0] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[22][1] = "Tener asociada una herramienta automatizada (SLIM)";
 choices[22][2] = "Incluir una constante tecnol&oacute;gica";
 choices[22][3] = "Funcionar en proyectos grandes relativamente peor que en proyectos peque&ntilde;os";
 answers[22] = 3;
 units[22] = ['94'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 8866. ";
 preguntaids[22] = 8866


//  Id pregunta: 8935 Año de creación de pregunta: 2013
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[23]= new Array();
 choices[23][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[23][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[23][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[23][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[23] = 0;
 units[23] = ['84'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 8935. ";
 preguntaids[23] = 8935


//  Id pregunta: 8897 Año de creación de pregunta: 2013
 questions[24]= "25)  Aquellas pruebas que tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[24]= new Array();
 choices[24][0] = "Pruebas unitarias.";
 choices[24][1] = "Pruebas de integraci&oacute;n.";
 choices[24][2] = "Pruebas del sistema.";
 choices[24][3] = "Pruebas de implantaci&oacute;n.";
 answers[24] = 2;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 8897. Examen AGE TIC A1 2011";
 preguntaids[24] = 8897


//  Id pregunta: 8907 Año de creación de pregunta: 2013
 questions[25]= "26)  &iquest;Qu&eacute; diagramas de UML 2.0 son los m&aacute;s adecuados para el modelo de interacci&oacute;n de una aplicaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Comunicaci&oacute;n, despliegue y secuencia.";
 choices[25][1] = "Despliegue, secuencia y casos de uso.";
 choices[25][2] = "Secuencia, comunicaci&oacute;n y tiempos.";
 choices[25][3] = "Actividades, estados y tiempos.";
 answers[25] = 2;
 units[25] = ['89'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 8907. ";
 preguntaids[25] = 8907


//  Id pregunta: 8459 Año de creación de pregunta: 2011
 questions[26]= "27)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MOOD &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[26]= new Array();
 choices[26][0] = "Factor de polimorfismo";
 choices[26][1] = "Factor de acoplamiento";
 choices[26][2] = "Factor de herencia de m&eacute;todos";
 choices[26][3] = "Factor de cohesi&oacute;n";
 answers[26] = 3;
 units[26] = ['93'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 8459. ";
 preguntaids[26] = 8459


//  Id pregunta: 8864 Año de creación de pregunta: 2013
 questions[27]= "28)  El uso de la t&eacute;cnica de la media para combinar estimaciones software individuales es caracter&iacute;stico de los m&eacute;todos:";
 choices[27]= new Array();
 choices[27][0] = "Con base hist&oacute;rica";
 choices[27][1] = "Con base estad&iacute;stica";
 choices[27][2] = "Compuestos";
 choices[27][3] = "Lineales";
 answers[27] = 0;
 units[27] = ['94'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 8864. ";
 preguntaids[27] = 8864


//  Id pregunta: 8787 Año de creación de pregunta: 2013
 questions[28]= "29)  La t&eacute;cnica de McCabe permite medir:";
 choices[28]= new Array();
 choices[28][0] = "La productividad del software";
 choices[28][1] = "La complejidad del software";
 choices[28][2] = "La fiabilidad del software";
 choices[28][3] = "Ninguna de las tres";
 answers[28] = 1;
 units[28] = ['93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 8787. ";
 preguntaids[28] = 8787


//  Id pregunta: 8886 Año de creación de pregunta: 2013
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del patr&oacute;n de dise&ntilde;o MVC (Modelo, Vista, Controlador):";
 choices[29]= new Array();
 choices[29][0] = "A pesar de su amplia difusi&oacute;n con las arquitecturas Web, naci&oacute; en la d&eacute;cada de los sesenta.";
 choices[29][1] = "Los componentes que se encargan de la l&oacute;gica de negocio forman parte del Modelo.";
 choices[29][2] = "La Vista variar&aacute; inevitablemente al variar el Modelo.";
 choices[29][3] = "El patr&oacute;n de dise&ntilde;o MVC es un modo de dividir la funcionalidad de un componente de forma ordenada.";
 answers[29] = 1;
 units[29] = ['85'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 8886. Examen AGE TIC A1 2011";
 preguntaids[29] = 8886


//  Id pregunta: 8865 Año de creación de pregunta: 2013
 questions[30]= "31)  El modelo de estimaci&oacute;n de Putnam se caracteriza por:";
 choices[30]= new Array();
 choices[30][0] = "Ser un modelo te&oacute;rico";
 choices[30][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[30][2] = "Incluir una constante tecnol&oacute;gica";
 choices[30][3] = "Todas las anteriores";
 answers[30] = 3;
 units[30] = ['94'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 8865. ";
 preguntaids[30] = 8865


//  Id pregunta: 8389 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;A qui&eacute;n NO est&aacute; dirigido ITIL?";
 choices[31]= new Array();
 choices[31][0] = "Proveedores de servicios de TI";
 choices[31][1] = "Usuarios de servicios de TI";
 choices[31][2] = "Directores y gestores de TI";
 choices[31][3] = "Chief Information Officers";
 answers[31] = 1;
 units[31] = ['101'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 8389. ";
 preguntaids[31] = 8389


//  Id pregunta: 8862 Año de creación de pregunta: 2013
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "M&eacute;todo Albrecht";
 choices[32][1] = "M&eacute;todo MARK II";
 choices[32][2] = "La a) y la b) son correctas";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = 2;
 units[32] = ['94'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 8862. ";
 preguntaids[32] = 8862


//  Id pregunta: 8887 Año de creación de pregunta: 2013
 questions[33]= "34)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[33]= new Array();
 choices[33][0] = "Polimorfismo.";
 choices[33][1] = "Abstracci&oacute;n.";
 choices[33][2] = "Encapsulaci&oacute;n.";
 choices[33][3] = "Persistencia.";
 answers[33] = 2;
 units[33] = ['85'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 8887. Examen AGE TIC A1 2011";
 preguntaids[33] = 8887


//  Id pregunta: 8908 Año de creación de pregunta: 2013
 questions[34]= "35)  &iquest;Cu&aacute;l es el est&aacute;ndar para UML 2?";
 choices[34]= new Array();
 choices[34][0] = "ISO/IEC 19501.";
 choices[34][1] = "ISO/IEC 19505.";
 choices[34][2] = "ISO/IEC 80211.";
 choices[34][3] = "ISO/IEC 80216.";
 answers[34] = 1;
 units[34] = ['89'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 8908. ";
 preguntaids[34] = 8908


//  Id pregunta: 8785 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO?";
 choices[35]= new Array();
 choices[35][0] = "Semiacoplado";
 choices[35][1] = "Empotrado";
 choices[35][2] = "Acoplado";
 choices[35][3] = "Org&aacute;nico";
 answers[35] = 2;
 units[35] = ['94'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 8785. Examen TIC A2 2011";
 preguntaids[35] = 8785


//  Id pregunta: 8894 Año de creación de pregunta: 2013
 questions[36]= "37)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[36]= new Array();
 choices[36][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[36][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[36][2] = "Jerarqu&iacute;a disjunta.";
 choices[36][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[36] = 1;
 units[36] = ['85'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 8894. Examen AGE TIC A1 2011";
 preguntaids[36] = 8894


//  Id pregunta: 8860 Año de creación de pregunta: 2013
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las m&eacute;tricas de productividad es incorrecta?";
 choices[37]= new Array();
 choices[37][0] = "Recogen la eficiencia del proceso del construcci&oacute;n de software";
 choices[37][1] = "Relacionan el software que se ha construido con el esfuerzo que ha costado elaborarlo";
 choices[37][2] = "Un ejemplo de m&eacute;trica de productividad son los Puntos de Funci&oacute;n";
 choices[37][3] = "Son en general indirectas, puesto que requieren de otras m&eacute;tricas previas para poder calcularse";
 answers[37] = 3;
 units[37] = ['94'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 8860. ";
 preguntaids[37] = 8860


//  Id pregunta: 8867 Año de creación de pregunta: 2013
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[38]= new Array();
 choices[38][0] = "El modelo original, COCOMO 81, fue publicado por Barry Boehm";
 choices[38][1] = "Sus siglas vienen de COnstructive COst MOdel";
 choices[38][2] = "Es un modelo de base emp&iacute;rica";
 choices[38][3] = "Es un modelo con base estad&iacute;stica";
 answers[38] = 3;
 units[38] = ['94'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 8867. ";
 preguntaids[38] = 8867


//  Id pregunta: 8890 Año de creación de pregunta: 2013
 questions[39]= "40)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[39]= new Array();
 choices[39][0] = "Sobrecarga.";
 choices[39][1] = "Herencia.";
 choices[39][2] = "Extensibilidad.";
 choices[39][3] = "Polimorfismo.";
 answers[39] = 3;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 8890. Examen AGE TIC A1 2011";
 preguntaids[39] = 8890


//  Id pregunta: 8934 Año de creación de pregunta: 2013
 questions[40]= "41)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[40]= new Array();
 choices[40][0] = "Verificaciones de integridad";
 choices[40][1] = "Verificaciones de consistencia";
 choices[40][2] = "Verificaciones de completitud";
 choices[40][3] = "Verificaciones de validez";
 answers[40] = 0;
 units[40] = ['84'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 8934. Seg&uacute;n M&eacute;trica v3 los requisitos han de ser v&aacute;lidos, consistentes y completos.";
 preguntaids[40] = 8934


//  Id pregunta: 8903 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;Qu&eacute; es el acoplamiento entre m&oacute;dulos?:";
 choices[41]= new Array();
 choices[41][0] = "Fan-in.";
 choices[41][1] = "Fan-out.";
 choices[41][2] = "Grado de interdependencia entre m&oacute;dulos.";
 choices[41][3] = "N&uacute;mero de clases repetidas en los dos m&oacute;dulos.";
 answers[41] = 2;
 units[41] = ['89'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 8903. ";
 preguntaids[41] = 8903


//  Id pregunta: 8456 Año de creación de pregunta: 2011
 questions[42]= "43)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[42]= new Array();
 choices[42][0] = "Hirsch";
 choices[42][1] = "Royce";
 choices[42][2] = "Jackson";
 choices[42][3] = "Bohem";
 answers[42] = 2;
 units[42] = ['82'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 8456. ";
 preguntaids[42] = 8456


//  Id pregunta: 8638 Año de creación de pregunta: 2013
 questions[43]= "44)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[43]= new Array();
 choices[43][0] = "ASI";
 choices[43][1] = "DSI";
 choices[43][2] = "CSI";
 choices[43][3] = "IAS";
 answers[43] = 2;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 8638. ";
 preguntaids[43] = 8638


//  Id pregunta: 8388 Año de creación de pregunta: 2011
 questions[44]= "45)  Son principios de gesti&oacute;n de la calidad seg&uacute;n la norma ISO 9004:";
 choices[44]= new Array();
 choices[44][0] = "Enfoque basado en procesos";
 choices[44][1] = "Mejora continua";
 choices[44][2] = "Relaciones mutuamente beneficiosas para el proveedor";
 choices[44][3] = "Todos lo son";
 answers[44] = 3;
 units[44] = ['98'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 8388. ";
 preguntaids[44] = 8388


//  Id pregunta: 8882 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as NO se considera &aacute;gil?";
 choices[45]= new Array();
 choices[45][0] = "M&eacute;l&eacute;";
 choices[45][1] = "OMT";
 choices[45][2] = "DAS (Desarrollo Adaptativo de Software)";
 choices[45][3] = "DCC (Desarrollo Conducido por Caracter&iacute;sticas)";
 answers[45] = 1;
 units[45] = ['84'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 8882. Examen AGE TIC A1 2011";
 preguntaids[45] = 8882


//  Id pregunta: 8930 Año de creación de pregunta: 2013
 questions[46]= "47)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[46]= new Array();
 choices[46][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[46][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[46][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[46][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[46] = 3;
 units[46] = ['84'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 8930. ";
 preguntaids[46] = 8930


//  Id pregunta: 8869 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[47]= new Array();
 choices[47][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[47][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[47][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[47][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[47] = 3;
 units[47] = ['94'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 8869. ";
 preguntaids[47] = 8869


//  Id pregunta: 8858 Año de creación de pregunta: 2013
 questions[48]= "49)  En general, no se entiende por m&eacute;trica software:";
 choices[48]= new Array();
 choices[48][0] = "Una asignaci&oacute;n de valor a un atributo de una entidad propia del software, ya sea un producto o un proceso";
 choices[48][1] = "Una caracter&iacute;stica o atributo propio del software o del proceso de construcci&oacute;n del software";
 choices[48][2] = "Una medida cuantitativa del grado en el que un sistema, un componente o un proceso posee un determinado atributo";
 choices[48][3] = "Una medida o conjunto de medidas destinadas a conocer o estimar el tama&ntilde;o u otra caracter&iacute;stica de un software o un sistema de informaci&oacute;n";
 answers[48] = 1;
 units[48] = ['94'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 8858. ";
 preguntaids[48] = 8858


//  Id pregunta: 8893 Año de creación de pregunta: 2013
 questions[49]= "50)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[49]= new Array();
 choices[49][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[49][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[49][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[49][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[49] = 3;
 units[49] = ['82'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 8893. Examen AGE TIC A1 2011";
 preguntaids[49] = 8893


//  Id pregunta: 8884 Año de creación de pregunta: 2013
 questions[50]= "51)  El diagrama de estructura de datos (DED):";
 choices[50]= new Array();
 choices[50][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[50][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[50][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[50][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[50] = 0;
 units[50] = ['85'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 8884. Examen AGE TIC A1 2011";
 preguntaids[50] = 8884


//  Id pregunta: 8636 Año de creación de pregunta: 2013
 questions[51]= "52)  Seg&uacute;n M&eacute;trica 3, &iquest; cu&aacute;ndo se elaboran los manuales de usuario ?";
 choices[51]= new Array();
 choices[51][0] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[51][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[51][2] = "Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[51][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[51] = 0;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 8636. ";
 preguntaids[51] = 8636


//  Id pregunta: 8635 Año de creación de pregunta: 2013
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[52]= new Array();
 choices[52][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[52][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[52][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[52][3] = "Todos son Procesos Principales";
 answers[52] = 2;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 8635. ";
 preguntaids[52] = 8635


//  Id pregunta: 8868 Año de creación de pregunta: 2013
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no es uno de los tres tipos de proyecto contemplados en el COCOMO cl&aacute;sico/81?";
 choices[53]= new Array();
 choices[53][0] = "Org&aacute;nico";
 choices[53][1] = "Acoplado";
 choices[53][2] = "Semiacoplado";
 choices[53][3] = "Empotrado";
 answers[53] = 1;
 units[53] = ['94'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 8868. ";
 preguntaids[53] = 8868


//  Id pregunta: 8888 Año de creación de pregunta: 2013
 questions[54]= "55)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[54]= new Array();
 choices[54][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[54][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[54][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[54][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[54] = 2;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 8888. Examen AGE TIC A1 2011";
 preguntaids[54] = 8888


//  Id pregunta: 8863 Año de creación de pregunta: 2013
 questions[55]= "56)  Una clasificaci&oacute;n t&iacute;pica de los modelos de estimaci&oacute;n software es:";
 choices[55]= new Array();
 choices[55][0] = "Basados en Puntos de Funci&oacute;n, multivariable est&aacute;ticos y multivariable din&aacute;micos";
 choices[55][1] = "Con base hist&oacute;rica, con base estad&iacute;stica, con base te&oacute;rica, compuestos y basados en est&aacute;ndares";
 choices[55][2] = "T&eacute;cnicas de Delphi, Modelos exponenciales, Modelo de Putnam y modelos COCOMO";
 choices[55][3] = "Ninguno de los anteriores";
 answers[55] = 1;
 units[55] = ['94'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 8863. ";
 preguntaids[55] = 8863


//  Id pregunta: 8511 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Cu&aacute;l se puede considerar un gestor de contenidos?";
 choices[56]= new Array();
 choices[56][0] = "Microsoft Sharepoint";
 choices[56][1] = "Apache";
 choices[56][2] = "TopLink";
 choices[56][3] = "Microsoft Biztalk";
 answers[56] = 0;
 units[56] = ['99'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 8511. ";
 preguntaids[56] = 8511


//  Id pregunta: 8634 Año de creación de pregunta: 2013
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes es un Proceso Principal de M&eacute;trica 3?";
 choices[57]= new Array();
 choices[57][0] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[57][1] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[57][2] = "Estudio de Viabilidad del Sistema";
 choices[57][3] = "Ninguno";
 answers[57] = 0;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 8634. ";
 preguntaids[57] = 8634


//  Id pregunta: 8789 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;Qu&eacute; afirmaci&oacute;n es falsa sobre Garant&iacute;a de Calidad?";
 choices[58]= new Array();
 choices[58][0] = "Est&aacute; delineada en un documento de estructura.";
 choices[58][1] = "El objetivo es asegurarle al cliente la calidad de un producto.";
 choices[58][2] = "La estructura se presenta en un manual de garant&iacute;a de calidad";
 choices[58][3] = "La garant&iacute;a de calidad no se extiende a problemas de seguridad";
 answers[58] = 3;
 units[58] = ['92'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 8789. ";
 preguntaids[58] = 8789


//  Id pregunta: 8861 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo?";
 choices[59]= new Array();
 choices[59][0] = "LOC";
 choices[59][1] = "DSI";
 choices[59][2] = "NSLOC";
 choices[59][3] = "LDSI";
 answers[59] = 3;
 units[59] = ['94'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 8861. ";
 preguntaids[59] = 8861


//  Id pregunta: 8633 Año de creación de pregunta: 2013
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[60][1] = "Gesti&oacute;n de Procesos";
 choices[60][2] = "Seguridad";
 choices[60][3] = "Aseguramiento de la Calidad";
 answers[60] = 1;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 8633. ";
 preguntaids[60] = 8633


//  Id pregunta: 8883 Año de creación de pregunta: 2013
 questions[61]= "62)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[61]= new Array();
 choices[61][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[61][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[61][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[61][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[61] = 3;
 units[61] = ['85', '86'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 8883. Examen AGE TIC A1 2011";
 preguntaids[61] = 8883


//  Id pregunta: 8522 Año de creación de pregunta: 2011
 questions[62]= "63)  C&uacute;al no es un interfaz en M&eacute;trica v3";
 choices[62]= new Array();
 choices[62][0] = "Gesti&oacute;n de la Configuraci&oacute;n";
 choices[62][1] = "Seguridad";
 choices[62][2] = "Gesti&oacute;n del Cambio";
 choices[62][3] = "Aseguramiento de la Calidad";
 answers[62] = 2;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 8522. ";
 preguntaids[62] = 8522


//  Id pregunta: 8928 Año de creación de pregunta: 2013
 questions[63]= "64)  Seg&uacute;n Pressman, el proceso de obtenci&oacute;n de requisitos";
 choices[63]= new Array();
 choices[63][0] = "Es un proceso iterativo";
 choices[63][1] = "Es un proceso de tres fases";
 choices[63][2] = "Es un proceso de 10 fases";
 choices[63][3] = "Todas las anteriores son falsas";
 answers[63] = 0;
 units[63] = ['84'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 8928. ";
 preguntaids[63] = 8928


//  Id pregunta: 8744 Año de creación de pregunta: 2013
 questions[64]= "65)  &iquest;Cu&aacute;l es el dominio de CobiT m&aacute;s afectado de cara a la Continuidad del Negocio?";
 choices[64]= new Array();
 choices[64][0] = "Planificaci&oacute;n y Organizaci&oacute;n.";
 choices[64][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[64][2] = "Entrega y Soporte.";
 choices[64][3] = "Supervisi&oacute;n y Evaluaci&oacute;n.";
 answers[64] = 2;
 units[64] = ['101'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 8744. ";
 preguntaids[64] = 8744


//  Id pregunta: 8905 Año de creación de pregunta: 2013
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[65]= new Array();
 choices[65][0] = "Diagrama de secuencia.";
 choices[65][1] = "Diagrama de comunicaci&oacute;n.";
 choices[65][2] = "Diagrama de transici&oacute;n de estados.";
 choices[65][3] = "Diagrama de elementos.";
 answers[65] = 3;
 units[65] = ['89'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 8905. ";
 preguntaids[65] = 8905


//  Id pregunta: 8902 Año de creación de pregunta: 2013
 questions[66]= "67)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[66]= new Array();
 choices[66][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[66][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[66][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[66][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[66] = 3;
 units[66] = ['85'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 8902. ";
 preguntaids[66] = 8902


//  Id pregunta: 8931 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de obtenci&oacute;n de requisitos no es una t&eacute;cnica de bajo nivel?";
 choices[67]= new Array();
 choices[67][0] = "Entrevistas";
 choices[67][1] = "PIECES";
 choices[67][2] = "An&aacute;lisis de mercado";
 choices[67][3] = "Prototipos";
 answers[67] = 3;
 units[67] = ['84'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 8931. ";
 preguntaids[67] = 8931


//  Id pregunta: 8639 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[68]= new Array();
 choices[68][0] = "Prototipado";
 choices[68][1] = "Normalizaci&oacute;n";
 choices[68][2] = "Diagrama de paquetes";
 choices[68][3] = "Casos de uso";
 answers[68] = 0;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 8639. ";
 preguntaids[68] = 8639


//  Id pregunta: 8909 Año de creación de pregunta: 2013
 questions[69]= "70)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[69]= new Array();
 choices[69][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[69][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[69][2] = "Es lo mismo que la herencia repetida.";
 choices[69][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[69] = 1;
 units[69] = ['89'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 8909. ";
 preguntaids[69] = 8909


//  Id pregunta: 8786 Año de creación de pregunta: 2013
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[70]= new Array();
 choices[70][0] = "Dise&ntilde;o Arquitectura";
 choices[70][1] = "Dise&ntilde;o Preliminar";
 choices[70][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[70][3] = "Post-Arquitectura";
 answers[70] = 0;
 units[70] = ['94'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 8786. ";
 preguntaids[70] = 8786


//  Id pregunta: 8549 Año de creación de pregunta: 2013
 questions[71]= "72)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v.3, el Plan de Sistemas de Informaci&oacute;n debe tener una perspectiva";
 choices[71]= new Array();
 choices[71][0] = "Exclusivamente estrat&eacute;gica, y no tecnol&oacute;gica";
 choices[71][1] = "Estrat&eacute;gica y operativa, y no tecnolog&iacute;ca";
 choices[71][2] = "Exclusivamente estrat&eacute;gica, y fuertemente tecnol&oacute;gica";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = 1;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 8549. ";
 preguntaids[71] = 8549


//  Id pregunta: 8521 Año de creación de pregunta: 2011
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[72]= new Array();
 choices[72][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[72][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[72][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[72][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[72] = 1;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 8521. ";
 preguntaids[72] = 8521


//  Id pregunta: 8637 Año de creación de pregunta: 2013
 questions[73]= "74)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[73]= new Array();
 choices[73][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[73][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[73][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[73][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[73] = 2;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 8637. ";
 preguntaids[73] = 8637


//  Id pregunta: 8550 Año de creación de pregunta: 2013
 questions[74]= "75)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[74]= new Array();
 choices[74][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[74][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[74][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[74][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[74] = 3;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 8550. ";
 preguntaids[74] = 8550


