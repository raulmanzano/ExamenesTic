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
//  Id pregunta: 9480 Año de creación de pregunta: 2014
 questions[0]= "1)  Se califican como entidades d&eacute;biles aquellas cuya existencia no tiene sentido sin la existencia de la entidad regular de la que dependen. En relaci&oacute;n con las entidades d&eacute;biles y regulares, es VERDADERO que:";
 choices[0]= new Array();
 choices[0][0] = "La dependencia en existencia implica a su vez dependencia en identificaci&oacute;n";
 choices[0][1] = "La dependencia en existencia de una entidad d&eacute;bil respecto de una entidad regular supone que la entidad d&eacute;bil no dispone de suficientes atributos para formar su clave primaria. La entidad regular aporta la parte de clave que le falta a la entidad d&eacute;bil.";
 choices[0][2] = "Las relaciones de dependencia pueden surgir en interrelaciones con tipo de correspondencia 1:N o N:M";
 choices[0][3] = "Todas las anteriores son falsas";
 answers[0] = 3;
 units[0] = ['85'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 9480. A: La dependencia en identificaci&oacute;n implica dependencia en existencia, pero no al contrario; B: es la definici&oacute;n de dependencia de identificaci&oacute;n; C: solo 1:N;";
 preguntaids[0] = 9480


//  Id pregunta: 9509 Año de creación de pregunta: 2014
 questions[1]= "2)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[1]= new Array();
 choices[1][0] = "0,25 puntos";
 choices[1][1] = "0,75 puntos";
 choices[1][2] = "0,33 puntos";
 choices[1][3] = "0,66 puntos";
 answers[1] = 0;
 units[1] = ['38'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 9509. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";
 preguntaids[1] = 9509


//  Id pregunta: 9461 Año de creación de pregunta: 2014
 questions[2]= "3)  El conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel se denomina:";
 choices[2]= new Array();
 choices[2][0] = "SCCD";
 choices[2][1] = "SCSP";
 choices[2][2] = "Plataforma de intermedicaci&oacute;n";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = 1;
 units[2] = ['47'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9461. ";
 preguntaids[2] = 9461


//  Id pregunta: 9487 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[3]= new Array();
 choices[3][0] = "Filtro de mediana";
 choices[3][1] = "Realce logar&iacute;tmico";
 choices[3][2] = "Filtro paso bajo";
 choices[3][3] = "Filtro paso alto";
 answers[3] = 1;
 units[3] = ['80'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9487. ";
 preguntaids[3] = 9487


//  Id pregunta: 9477 Año de creación de pregunta: 2014
 questions[4]= "5)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[4]= new Array();
 choices[4][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[4][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[4][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[4][3] = "Todas las anteriores";
 answers[4] = 3;
 units[4] = ['85'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 9477. ";
 preguntaids[4] = 9477


//  Id pregunta: 9479 Año de creación de pregunta: 2014
 questions[5]= "6)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con las clases abstractas y las interfaces:";
 choices[5]= new Array();
 choices[5][0] = "En una clase abstracta, todos los m&eacute;todos definidos deben carecer de implementaci&oacute;n";
 choices[5][1] = "Una clase abstracta podr&aacute; ser instanciada cuando la clase que hereda implemente los m&eacute;todos abstractos";
 choices[5][2] = "Una interfaz permite la implementaci&oacute;n de clases con comportamientos comunes, sin importar su ubicaci&oacute;n en la jerarqu&iacute;a de clases.";
 choices[5][3] = "Las interfaces pueden definir constantes y variables de instancia";
 answers[5] = 2;
 units[5] = ['85'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 9479. ";
 preguntaids[5] = 9479


//  Id pregunta: 9452 Año de creación de pregunta: 2014
 questions[6]= "7)  En cumplimiento de la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones:";
 choices[6]= new Array();
 choices[6][0] = "Los operadores deben conservar el contenido de las comunicaciones";
 choices[6][1] = "El deber de conservaci&oacute;n se extiende a los datos relativos a las llamadas infructuosas";
 choices[6][2] = "La obligaci&oacute;n de conservaci&oacute;n de datos impuesta cesa a los cuatro meses computados desde la fecha en que se haya producido la comunicaci&oacute;n";
 choices[6][3] = "El plazo de ejecuci&oacute;n de la orden de cesi&oacute;n ser&aacute; el fijado por la resoluci&oacute;n judicial. Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 answers[6] = 1;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 9452. A: art 1: 3. Se excluye del &aacute;mbito de aplicaci&oacute;n de esta Ley el contenido de las comunicaciones electr&oacute;nicas, incluida la informaci&oacute;n consultada utilizando una red de comunicaciones electr&oacute;nicas.; B: Se entender&aacute; por llamada infructuosa aquella comunicaci&oacute;n en el transcurso de la cual se ha realizado con &eacute;xito una llamada telef&oacute;nica pero sin contestaci&oacute;n, o en la que ha habido una intervenci&oacute;n por parte del operador u operadores involucrados en la llamada. C: 12 meses (art&iacute;culo 5). D: En 2014 se modific&oacute; el art 7: &quot;Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.&quot;";
 preguntaids[6] = 9452


//  Id pregunta: 9457 Año de creación de pregunta: 2014
 questions[7]= "8)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[7]= new Array();
 choices[7][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella.";
 choices[7][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[7][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[7][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad.";
 answers[7] = 3;
 units[7] = ['46'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 9457. El registro de actividad se aplica desde el nivel BAJO";
 preguntaids[7] = 9457


//  Id pregunta: 9504 Año de creación de pregunta: 2014
 questions[8]= "9)  Seg&uacute;n M&eacute;trica v3, indique qu&eacute; no es necesario tener en cuenta para el c&aacute;lculo del ROI (Retorno de la Inversi&oacute;n):";
 choices[8]= new Array();
 choices[8][0] = "La Inversi&oacute;n Promedio";
 choices[8][1] = "El Beneficio Neto Anual";
 choices[8][2] = "El Periodo de Amortizaci&oacute;n";
 choices[8][3] = "El Coste de Desarrollo Anualizado";
 answers[8] = 2;
 units[8] = ['40'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9504. ROI = 100 x (Beneficio Neto Anual - Coste Desarrollo Anualizado) / Inversi&oacute;n Promedio";
 preguntaids[8] = 9504


//  Id pregunta: 9475 Año de creación de pregunta: 2014
 questions[9]= "10)  El uso del paradigma de orientaci&oacute;n de objetos se caracteriza por&hellip;.";
 choices[9]= new Array();
 choices[9][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[9][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[9][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[9][3] = "La mayor dificultad de la programaci&oacute;n orientada a objetos es que reduce la mantenibilidad y modificabilidad de los programas";
 answers[9] = 0;
 units[9] = ['85'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 9475. ";
 preguntaids[9] = 9475


//  Id pregunta: 9464 Año de creación de pregunta: 2014
 questions[10]= "11)  Un dominio en un modelo relacional&hellip;";
 choices[10]= new Array();
 choices[10][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[10][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[10][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[10][3] = "Todas las anteriores";
 answers[10] = 0;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9464. Por extensi&oacute;n= enumeraci&oacute;n de sus elementos, p.ej. d&iacute;as de la semana = {lunes, martes, mi&eacute;rcoles, jueves, viernes, s&aacute;bado, domingo} ; Por intensi&oacute;n= mediante una propiedad que recoja el recorrido de sus valores admisibles, p. ej: edad: entero / 0 &le; edad &le; 200";
 preguntaids[10] = 9464


//  Id pregunta: 9463 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[11]= new Array();
 choices[11][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[11][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[11][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 2;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9463. B: El c&aacute;lculo relacional es de tipo declarativo.";
 preguntaids[11] = 9463


//  Id pregunta: 9503 Año de creación de pregunta: 2014
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del m&eacute;todo de c&aacute;lculo de la rentabilidad de una inversi&oacute;n llamado &Iacute;ndice de rentabilidad";
 choices[12]= new Array();
 choices[12][0] = "Es un m&eacute;todo est&aacute;tico";
 choices[12][1] = "La inversi&oacute;n es rentable si el &iacute;ndice es mayor que cero";
 choices[12][2] = "Si el &iacute;ndice es mayor que uno, entonces es rentable";
 choices[12][3] = "Ninguna de las anteriores respuestas es verdadera";
 answers[12] = 2;
 units[12] = ['40'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9503. El &iacute;ndice de rentabilidad (IR) es un m&eacute;todo din&aacute;mico que se calcula como IR = ValorActualCobros / ValorActualPagos. Si IR &gt; 1, la inversi&oacute;n es rentable";
 preguntaids[12] = 9503


//  Id pregunta: 9458 Año de creación de pregunta: 2014
 questions[13]= "14)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[13][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[13][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[13][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[13] = 2;
 units[13] = ['44'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 9458. ";
 preguntaids[13] = 9458


//  Id pregunta: 9497 Año de creación de pregunta: 2014
 questions[14]= "15)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[14]= new Array();
 choices[14][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[14][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[14][2] = "Es compatible con las redes IEEE 802.16e";
 choices[14][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[14] = 2;
 units[14] = ['117'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9497. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";
 preguntaids[14] = 9497


//  Id pregunta: 9505 Año de creación de pregunta: 2014
 questions[15]= "16)  Una inversi&oacute;n de 300.000 euros produce el primer a&ntilde;o un beneficio de 5.000 euros. Teniendo en cuenta que la rentabilidad requerida a la inversi&oacute;n es del 2%, &iquest;cu&aacute;l es el valor actual neto de dicha inversi&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "300.000 + 5.000 * 0,02";
 choices[15][1] = "-300.000 + 5.000 / (1 + 0,02)";
 choices[15][2] = "300.000 - 5.000 / (1 - 0,02)";
 choices[15][3] = "-300.000 + 5.000 * (1 + 0,02)";
 answers[15] = 1;
 units[15] = ['40'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 9505. VAN(k) = &minus; C0 + Q1 / (1+k) + Q2 / (1+k)2 + ..... + Qn / (1+k)n";
 preguntaids[15] = 9505


//  Id pregunta: 9483 Año de creación de pregunta: 2014
 questions[16]= "17)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[16]= new Array();
 choices[16][0] = "Externo";
 choices[16][1] = "L&oacute;gico";
 choices[16][2] = "Interno";
 choices[16][3] = "Conceptual";
 answers[16] = 3;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9483. ";
 preguntaids[16] = 9483


//  Id pregunta: 9517 Año de creación de pregunta: 2014
 questions[17]= "18)  Cuales de los siguientes objetos son interfaces:";
 choices[17]= new Array();
 choices[17][0] = "java.util.List";
 choices[17][1] = "java.util.TreeMap";
 choices[17][2] = "java.util.AbstractList";
 choices[17][3] = "java.util.Collections";
 answers[17] = 0;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9517. B,C,D son clases";
 preguntaids[17] = 9517


//  Id pregunta: 9502 Año de creación de pregunta: 2014
 questions[18]= "19)  De los siguientes m&eacute;todos de selecci&oacute;n de inversiones, &iquest;cu&aacute;l de los siguientes es din&aacute;mico?";
 choices[18]= new Array();
 choices[18][0] = "Tasa de rendimiento contable";
 choices[18][1] = "ROI (Return of Investment)";
 choices[18][2] = "Flujo total por unidad monetaria comprometida";
 choices[18][3] = "Tasa interna de retorno";
 answers[18] = 3;
 units[18] = ['40'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 9502. Tasa rendimiento contable= Beneficio/ Inversi&oacute;n; ROI = (Beneficio &ndash; Inversi&oacute;n) / Inversi&oacute;n; Flujo total por unidad monetaria comprometida: Consiste en sumar todos los flujos de caja y dividir el importe obtenido entre el desembolso inicial; TIR = &ldquo;r&rdquo; tal que : &minus;C0 + Q1 / (1+r) + Q2 / (1+r)elevado a 2 + ..... + Qn / (1+r) elevado a n= 0";
 preguntaids[18] = 9502


//  Id pregunta: 9476 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[19]= new Array();
 choices[19][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprime otros";
 choices[19][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[19][2] = "Los lenguajes orientados a objetos son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[19][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[19] = 1;
 units[19] = ['85'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 9476. ";
 preguntaids[19] = 9476


//  Id pregunta: 9515 Año de creación de pregunta: 2014
 questions[20]= "21)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[20]= new Array();
 choices[20][0] = "sleep(long msec);";
 choices[20][1] = "start();";
 choices[20][2] = "wait();";
 choices[20][3] = "A y B son correctas.";
 answers[20] = 3;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9515. ";
 preguntaids[20] = 9515


//  Id pregunta: 9454 Año de creación de pregunta: 2014
 questions[21]= "22)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[21]= new Array();
 choices[21][0] = "se crea en el RD 1671/2009 (art. 15)";
 choices[21][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[21][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[21][3] = "Todas las anteriores son ciertas";
 answers[21] = 3;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 9454. ";
 preguntaids[21] = 9454


//  Id pregunta: 9453 Año de creación de pregunta: 2014
 questions[22]= "23)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[22]= new Array();
 choices[22][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[22][1] = "La no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[22][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[22][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[22] = 1;
 units[22] = ['19'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 9453. A: grave; B: muy grave; C: grave; D: grave";
 preguntaids[22] = 9453


//  Id pregunta: 9498 Año de creación de pregunta: 2014
 questions[23]= "24)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[23]= new Array();
 choices[23][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[23][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[23][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[23][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[23] = 1;
 units[23] = ['117'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9498. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";
 preguntaids[23] = 9498


//  Id pregunta: 9521 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[24]= new Array();
 choices[24][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[24][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[24][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[24][3] = "El usuario cierra la ventana del navegador";
 answers[24] = 0;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9521. ";
 preguntaids[24] = 9521


//  Id pregunta: 9469 Año de creación de pregunta: 2014
 questions[25]= "26)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[25]= new Array();
 choices[25][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[25][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[25][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[25][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[25] = 1;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9469. C: El grado de Cross Join resultante es gradoR + gradoS";
 preguntaids[25] = 9469


//  Id pregunta: 9478 Año de creación de pregunta: 2014
 questions[26]= "27)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[26]= new Array();
 choices[26][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[26][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto compuesto&quot; es eliminado o desaparece, el &quot;objeto componente&quot; deja de existir.";
 choices[26][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot;";
 choices[26][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot;";
 answers[26] = 3;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9478. ";
 preguntaids[26] = 9478


//  Id pregunta: 9488 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Qu&eacute; es PDF-417?";
 choices[27]= new Array();
 choices[27][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[27][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[27][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[27][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[27] = 0;
 units[27] = ['81'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9488. ";
 preguntaids[27] = 9488


//  Id pregunta: 9493 Año de creación de pregunta: 2014
 questions[28]= "29)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[28]= new Array();
 choices[28][0] = "3 Mbps";
 choices[28][1] = "2 Mbps";
 choices[28][2] = "5 Mbps";
 choices[28][3] = "1 Mbps";
 answers[28] = 0;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9493. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";
 preguntaids[28] = 9493


//  Id pregunta: 9471 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[29]= new Array();
 choices[29][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[29][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[29][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[29][3] = "Todas las anteriores";
 answers[29] = 3;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9471. ";
 preguntaids[29] = 9471


//  Id pregunta: 9524 Año de creación de pregunta: 2014
 questions[30]= "31)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[30]= new Array();
 choices[30][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[30][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[30][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[30][3] = "ninguna de las anteriores";
 answers[30] = 0;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9524. ";
 preguntaids[30] = 9524


//  Id pregunta: 9492 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[31]= new Array();
 choices[31][0] = "2B1Q";
 choices[31][1] = "CAP";
 choices[31][2] = "DMT";
 choices[31][3] = "WDM";
 answers[31] = 3;
 units[31] = ['106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9492. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";
 preguntaids[31] = 9492


//  Id pregunta: 9512 Año de creación de pregunta: 2014
 questions[32]= "33)  Teniendo las siguientes sentencias, el resultado ser&aacute;:  byte b1 = 126, b2 = 1;  byte b3 = b1 + b2;  System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[32]= new Array();
 choices[32][0] = "127";
 choices[32][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[32][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[32][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[32] = 2;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9512. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";
 preguntaids[32] = 9512


//  Id pregunta: 9518 Año de creación de pregunta: 2014
 questions[33]= "34)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[33]= new Array();
 choices[33][0] = "Object getInitParameter(int index)";
 choices[33][1] = "Object getInitParameter(String name)";
 choices[33][2] = "String getInitParameter(String name)";
 choices[33][3] = "String getParameter(String name)";
 answers[33] = 2;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9518. ";
 preguntaids[33] = 9518


//  Id pregunta: 9507 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "M&eacute;todo PROMETHEE";
 choices[34][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[34][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[34][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[34] = 0;
 units[34] = ['38'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9507. ";
 preguntaids[34] = 9507


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[35]= "36)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[35]= new Array();
 choices[35][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[35][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[35][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[35][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[35] = 1;
 units[35] = ['7'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 9456. ";
 preguntaids[35] = 9456


//  Id pregunta: 9511 Año de creación de pregunta: 2014
 questions[36]= "37)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:  System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[36]= new Array();
 choices[36][0] = "Da un error de compilaci&oacute;n";
 choices[36][1] = "TRUE";
 choices[36][2] = "FALSE";
 choices[36][3] = "12";
 answers[36] = 1;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9511. ";
 preguntaids[36] = 9511


//  Id pregunta: 9474 Año de creación de pregunta: 2014
 questions[37]= "38)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[37]= new Array();
 choices[37][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo.";
 choices[37][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[37][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[37][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[37] = 3;
 units[37] = ['85'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 9474. B: las interaciones no se dividen en fases; C: fases: inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n; flujos principales: modelo de negocio, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n, dise&ntilde;o, pruebas; flujos secundarios: configuraci&oacute;n, gesti&oacute;n, entorno";
 preguntaids[37] = 9474


//  Id pregunta: 9519 Año de creación de pregunta: 2014
 questions[38]= "39)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[38]= new Array();
 choices[38][0] = "sendError(int errorCode) de HttpServlet";
 choices[38][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[38][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[38][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[38] = 2;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9519. ";
 preguntaids[38] = 9519


//  Id pregunta: 9506 Año de creación de pregunta: 2014
 questions[39]= "40)  Respecto a las alternativas de suministro de equipamiento hardware, &iquest;a qu&eacute; cap&iacute;tulo presupuestario se imputar&iacute;a el arrendamiento de equipos sin opci&oacute;n a compra?";
 choices[39]= new Array();
 choices[39][0] = "Cap&iacute;tulo 1";
 choices[39][1] = "Cap&iacute;tulo 2";
 choices[39][2] = "Cap&iacute;tulo 4";
 choices[39][3] = "Cap&iacute;tulo 6";
 answers[39] = 1;
 units[39] = ['39'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 9506. ";
 preguntaids[39] = 9506


//  Id pregunta: 9472 Año de creación de pregunta: 2014
 questions[40]= "41)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[40]= new Array();
 choices[40][0] = "N&ordm; de filas recuperadas por la consulta";
 choices[40][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[40][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[40][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[40] = 2;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9472. ";
 preguntaids[40] = 9472


//  Id pregunta: 9491 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[41]= new Array();
 choices[41][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[41][1] = "No permite la modalidad sim&eacute;trica";
 choices[41][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central";
 choices[41][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[41] = 1;
 units[41] = ['106'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9491. ";
 preguntaids[41] = 9491


//  Id pregunta: 9473 Año de creación de pregunta: 2014
 questions[42]= "43)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[42]= new Array();
 choices[42][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados por otra transacci&oacute;n que finalmente aborta.";
 choices[42][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[42][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[42][3] = "Todas las anteriores";
 answers[42] = 1;
 units[42] = ['60'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9473. A: Lectura sucia";
 preguntaids[42] = 9473


//  Id pregunta: 9495 Año de creación de pregunta: 2014
 questions[43]= "44)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[43]= new Array();
 choices[43][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[43][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[43][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[43][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[43] = 3;
 units[43] = ['108'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 9495. ";
 preguntaids[43] = 9495


//  Id pregunta: 9467 Año de creación de pregunta: 2014
 questions[44]= "45)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[44]= new Array();
 choices[44][0] = "Sin normalizar";
 choices[44][1] = "1&ordf; Forma Normal";
 choices[44][2] = "2&ordf; Forma Normal";
 choices[44][3] = "3&ordf; Forma Normal";
 answers[44] = 2;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9467. ";
 preguntaids[44] = 9467


//  Id pregunta: 9465 Año de creación de pregunta: 2014
 questions[45]= "46)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[45]= new Array();
 choices[45][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[45][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[45][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[45][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[45] = 3;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9465. ";
 preguntaids[45] = 9465


//  Id pregunta: 9484 Año de creación de pregunta: 2014
 questions[46]= "47)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[46]= new Array();
 choices[46][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[46][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[46][2] = "Autenticidad (A) es la prueba de qui&eacute;n es el autor de un dato y garantiza su no repudio";
 choices[46][3] = "Durabilidad (D) es la propiedad que asegura que una vez realizada la operaci&oacute;n, &eacute;sta persistir&aacute; y no se podr&aacute; deshacer aunque falle el sistema y que de esta forma los datos sobrevivan de alguna manera.";
 answers[46] = 3;
 units[46] = ['60'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9484. Atomicidad: Si una operaci&oacute;n consiste en una serie de pasos, todos ellos ocurren o ninguno, es decir, las transacciones son completas. C = Consistencia = Integridad; I= Isolation = Aislamiento= una operaci&oacute;n no afecta a otras; D =durabilidad";
 preguntaids[46] = 9484


//  Id pregunta: 9496 Año de creación de pregunta: 2014
 questions[47]= "48)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[47]= new Array();
 choices[47][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[47][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[47][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[47][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[47] = 1;
 units[47] = ['117'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 9496. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";
 preguntaids[47] = 9496


//  Id pregunta: 9499 Año de creación de pregunta: 2014
 questions[48]= "49)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[48]= new Array();
 choices[48][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[48][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[48][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[48][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[48] = 3;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9499. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";
 preguntaids[48] = 9499


//  Id pregunta: 9494 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[49]= new Array();
 choices[49][0] = "802.11f";
 choices[49][1] = "802.11h";
 choices[49][2] = "802.11i";
 choices[49][3] = "802.11r";
 answers[49] = 2;
 units[49] = ['108'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 9494. ";
 preguntaids[49] = 9494


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[50]= "51)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[50]= new Array();
 choices[50][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[50][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[50][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[50][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[50] = 1;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[50] = 9455


//  Id pregunta: 9527 Año de creación de pregunta: 2014
 questions[51]= "52)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[51]= new Array();
 choices[51][0] = "EJB home interface";
 choices[51][1] = "Un componente EJB";
 choices[51][2] = "La API EJB";
 choices[51][3] = "Un objeto interface EJB";
 answers[51] = 0;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9527. ";
 preguntaids[51] = 9527


//  Id pregunta: 9516 Año de creación de pregunta: 2014
 questions[52]= "53)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[52]= new Array();
 choices[52][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[52][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[52][2] = "A y B son ciertas";
 choices[52][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[52] = 2;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9516. ";
 preguntaids[52] = 9516


//  Id pregunta: 9522 Año de creación de pregunta: 2014
 questions[53]= "54)  Podemos considerar a SOAP como:";
 choices[53]= new Array();
 choices[53][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[53][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[53][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 1;
 units[53] = ['55'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9522. ";
 preguntaids[53] = 9522


//  Id pregunta: 9513 Año de creación de pregunta: 2014
 questions[54]= "55)  Para que la siguiente sentencia compile:  float a = 100.21;  I) Necesita hacer un casting a float: float a = (float) 100.21;  II) Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;  III) Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[54]= new Array();
 choices[54][0] = "Compila bien sin cambios";
 choices[54][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[54][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[54][3] = "I), II) y III) son v&aacute;lidas";
 answers[54] = 3;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9513. ";
 preguntaids[54] = 9513


//  Id pregunta: 9510 Año de creación de pregunta: 2014
 questions[55]= "56)  Las variables declaradas en un interface deben ser:";
 choices[55]= new Array();
 choices[55][0] = "public, static y final";
 choices[55][1] = "private static y final";
 choices[55][2] = "S&oacute;lo protected";
 choices[55][3] = "En un interface no se deben incluir variables";
 answers[55] = 0;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9510. ";
 preguntaids[55] = 9510


//  Id pregunta: 9526 Año de creación de pregunta: 2014
 questions[56]= "57)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[56]= new Array();
 choices[56][0] = "RMI";
 choices[56][1] = "JTS";
 choices[56][2] = "JMAPI";
 choices[56][3] = "JTA";
 answers[56] = 3;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9526. JTA: Java Transaction Api; Remote Method Invocation; Java Topology Suite; Java Messaging Application Programming Interface.";
 preguntaids[56] = 9526


//  Id pregunta: 9468 Año de creación de pregunta: 2014
 questions[57]= "58)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[57]= new Array();
 choices[57][0] = "Dependencia funcional";
 choices[57][1] = "Dependencia multivaluada";
 choices[57][2] = "Dependencia funcional trivial";
 choices[57][3] = "Dependencia funcional completa";
 answers[57] = 3;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9468. ";
 preguntaids[57] = 9468


//  Id pregunta: 9482 Año de creación de pregunta: 2014
 questions[58]= "59)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[58]= new Array();
 choices[58][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[58][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[58][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[58][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[58] = 1;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 9482. ";
 preguntaids[58] = 9482


//  Id pregunta: 9470 Año de creación de pregunta: 2014
 questions[59]= "60)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[59]= new Array();
 choices[59][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[59][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[59][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[59][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[59] = 2;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9470. ";
 preguntaids[59] = 9470


//  Id pregunta: 9525 Año de creación de pregunta: 2014
 questions[60]= "61)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[60]= new Array();
 choices[60][0] = "Java Messaging Services (JMS)";
 choices[60][1] = "Java Naming and Directory Interface (JNDI)";
 choices[60][2] = "Remote Method Invocation (RMI)";
 choices[60][3] = "JavaBeans Activation Framework (JMF)";
 answers[60] = 1;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9525. ";
 preguntaids[60] = 9525


//  Id pregunta: 9501 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[61]= new Array();
 choices[61][0] = "Es compatible con las redes IEEE 802.16e";
 choices[61][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[61][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[61][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[61] = 1;
 units[61] = ['117'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 9501. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server),";
 preguntaids[61] = 9501


//  Id pregunta: 9508 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta es m&aacute;s adecuado cuando se trata de obtener un subconjunto de alternativas aceptables?";
 choices[62]= new Array();
 choices[62][0] = "El m&eacute;todo de la Utilidad Multiatributo";
 choices[62][1] = "Los m&eacute;todos de concordancia";
 choices[62][2] = "Los m&eacute;todos basados en permutaciones";
 choices[62][3] = "El m&eacute;todo de la Programaci&oacute;n compromiso";
 answers[62] = 1;
 units[62] = ['38'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 9508. ";
 preguntaids[62] = 9508


//  Id pregunta: 9500 Año de creación de pregunta: 2014
 questions[63]= "64)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[63]= new Array();
 choices[63][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[63][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[63][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[63][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[63] = 0;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9500. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";
 preguntaids[63] = 9500


//  Id pregunta: 9460 Año de creación de pregunta: 2014
 questions[64]= "65)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[64]= new Array();
 choices[64][0] = "SNE";
 choices[64][1] = "NoTe";
 choices[64][2] = "Notific@";
 choices[64][3] = "GESNOTE";
 answers[64] = 2;
 units[64] = ['47'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9460. ";
 preguntaids[64] = 9460


//  Id pregunta: 9490 Año de creación de pregunta: 2014
 questions[65]= "66)  Para el reconocimiento de las vocales se calculan";
 choices[65]= new Array();
 choices[65][0] = "los al&oacute;fonos";
 choices[65][1] = "el pitch";
 choices[65][2] = "los formantes";
 choices[65][3] = "el cepstrum";
 answers[65] = 2;
 units[65] = ['81'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9490. ";
 preguntaids[65] = 9490


//  Id pregunta: 9486 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes formatos de im&aacute;gen permite fondos transparentes?";
 choices[66]= new Array();
 choices[66][0] = "TIFF";
 choices[66][1] = "BMP";
 choices[66][2] = "JPEG";
 choices[66][3] = "PNG";
 answers[66] = 3;
 units[66] = ['80'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9486. ";
 preguntaids[66] = 9486


//  Id pregunta: 9514 Año de creación de pregunta: 2014
 questions[67]= "68)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[67]= new Array();
 choices[67][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[67][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[67][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[67][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[67] = 1;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9514. ";
 preguntaids[67] = 9514


//  Id pregunta: 9523 Año de creación de pregunta: 2014
 questions[68]= "69)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[68]= new Array();
 choices[68][0] = "getHeaderValues() of HttpServletRequest";
 choices[68][1] = "getHeaderValue() of ServletRequest";
 choices[68][2] = "getHeader() of HttpServletRequest";
 choices[68][3] = "getHeader() of ServletRequest";
 answers[68] = 2;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9523. ";
 preguntaids[68] = 9523


//  Id pregunta: 9520 Año de creación de pregunta: 2014
 questions[69]= "70)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[69]= new Array();
 choices[69][0] = "GenericServlet";
 choices[69][1] = "ServletConfig";
 choices[69][2] = "ServletContext";
 choices[69][3] = "HttpServletRequest";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9520. ";
 preguntaids[69] = 9520


//  Id pregunta: 9466 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[70]= new Array();
 choices[70][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[70][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[70][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[70][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[70] = 1;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9466. A: regla 9 Independencia l&oacute;gica de datos; C: adem&aacute;s de CASCADE hay otras opciones: NO ACTION | CASCADE | SET DEFAULT | SET NULL; D: define la integridad referencial, falta la integridad de identidad";
 preguntaids[70] = 9466


//  Id pregunta: 9489 Año de creación de pregunta: 2014
 questions[71]= "72)  En relaci&oacute;n a las t&eacute;cnicas para el reconocimiento &oacute;ptico de caracteres, indique la frase incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "El histograma horizontal permite dividir un p&aacute;rrafo en l&iacute;neas";
 choices[71][1] = "El proceso de kerning aplicado por un procesador de textos dificulta el segmentado de palabras";
 choices[71][2] = "Los m&eacute;todos de Zadeh usan mecanismos basados en l&oacute;gica borrosa";
 choices[71][3] = "Los m&eacute;todos de comparaci&oacute;n de plantillas usan matrices bidimensionales";
 answers[71] = 1;
 units[71] = ['81'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9489. ";
 preguntaids[71] = 9489


//  Id pregunta: 9459 Año de creación de pregunta: 2014
 questions[72]= "73)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[72]= new Array();
 choices[72][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[72][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares.";
 choices[72][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[72][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[72] = 2;
 units[72] = ['27'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 9459. ";
 preguntaids[72] = 9459


//  Id pregunta: 9481 Año de creación de pregunta: 2014
 questions[73]= "74)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[73]= new Array();
 choices[73][0] = "Grado";
 choices[73][1] = "Tipo de correspondencia";
 choices[73][2] = "Cardinalidad";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = 0;
 units[73] = ['85'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 9481. ";
 preguntaids[73] = 9481


//  Id pregunta: 9485 Año de creación de pregunta: 2014
 questions[74]= "75)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[74]= new Array();
 choices[74][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[74][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[74][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[74][3] = "Todas las anteriores";
 answers[74] = 3;
 units[74] = ['60'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9485. ";
 preguntaids[74] = 9485


