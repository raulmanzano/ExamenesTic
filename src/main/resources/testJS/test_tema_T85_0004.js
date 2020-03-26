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
//  Id pregunta: 8883 Año de creación de pregunta: 2013
 questions[0]= "1)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[0]= new Array();
 choices[0][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[0][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[0][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[0][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[0] = 3;
 units[0] = ['85', '86'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8883. Examen AGE TIC A1 2011";
 preguntaids[0] = 8883


//  Id pregunta: 8886 Año de creación de pregunta: 2013
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del patr&oacute;n de dise&ntilde;o MVC (Modelo, Vista, Controlador):";
 choices[1]= new Array();
 choices[1][0] = "A pesar de su amplia difusi&oacute;n con las arquitecturas Web, naci&oacute; en la d&eacute;cada de los sesenta.";
 choices[1][1] = "Los componentes que se encargan de la l&oacute;gica de negocio forman parte del Modelo.";
 choices[1][2] = "La Vista variar&aacute; inevitablemente al variar el Modelo.";
 choices[1][3] = "El patr&oacute;n de dise&ntilde;o MVC es un modo de dividir la funcionalidad de un componente de forma ordenada.";
 answers[1] = 1;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 8886. Examen AGE TIC A1 2011";
 preguntaids[1] = 8886


//  Id pregunta: 9478 Año de creación de pregunta: 2014
 questions[2]= "3)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[2]= new Array();
 choices[2][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[2][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto compuesto&quot; es eliminado o desaparece, el &quot;objeto componente&quot; deja de existir.";
 choices[2][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot;";
 choices[2][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot;";
 answers[2] = 3;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 9478. ";
 preguntaids[2] = 9478


//  Id pregunta: 9857 Año de creación de pregunta: 2015
 questions[3]= "4)  La construcci&oacute;n de los diagramas de flujo de datos se basa en el principio de:";
 choices[3]= new Array();
 choices[3][0] = "Partici&oacute;n.";
 choices[3][1] = "Descomposici&oacute;n.";
 choices[3][2] = "Inconsistencia.";
 choices[3][3] = "Todos los anteriores.";
 answers[3] = 1;
 units[3] = ['85'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9857. ";
 preguntaids[3] = 9857


//  Id pregunta: 9856 Año de creación de pregunta: 2015
 questions[4]= "5)  En un modelo Entidad / Relaci&oacute;n extendido, las relaciones pueden ser:";
 choices[4]= new Array();
 choices[4][0] = "Regular o d&eacute;bil.";
 choices[4][1] = "De dependencia en existencia o de dependencia en identificaci&oacute;n.";
 choices[4][2] = "Exclusivas o no exclusivas.";
 choices[4][3] = "Todas las anteriores.";
 answers[4] = 3;
 units[4] = ['85'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 9856. ";
 preguntaids[4] = 9856


//  Id pregunta: 10045 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[5]= new Array();
 choices[5][0] = "Diagrama de clases.";
 choices[5][1] = "Diagrama de objetos.";
 choices[5][2] = "Diagrama de despliegue.";
 choices[5][3] = "Diagrama de actividades.";
 answers[5] = 3;
 units[5] = ['85', '89'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10045. Examen TIC A2 2014";
 preguntaids[5] = 10045


//  Id pregunta: 8896 Año de creación de pregunta: 2013
 questions[6]= "7)  En UML, NO es un diagrama din&aacute;mico:";
 choices[6]= new Array();
 choices[6][0] = "Diagrama de secuencia.";
 choices[6][1] = "Diagrama de estado.";
 choices[6][2] = "Diagrama de despliegue.";
 choices[6][3] = "Diagrama de colaboraci&oacute;n.";
 answers[6] = 2;
 units[6] = ['85'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 8896. Examen AGE TIC A1 2011";
 preguntaids[6] = 8896


//  Id pregunta: 10353 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[7]= new Array();
 choices[7][0] = "Nivel 0: Diagrama de Contexto";
 choices[7][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[7][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[7][3] = "Nivel 4: Diagrama de Procesos";
 answers[7] = 2;
 units[7] = ['85'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10353. ";
 preguntaids[7] = 10353


//  Id pregunta: 9475 Año de creación de pregunta: 2014
 questions[8]= "9)  El uso del paradigma de orientaci&oacute;n de objetos se caracteriza por&hellip;.";
 choices[8]= new Array();
 choices[8][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[8][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[8][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[8][3] = "La mayor dificultad de la programaci&oacute;n orientada a objetos es que reduce la mantenibilidad y modificabilidad de los programas";
 answers[8] = 0;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9475. ";
 preguntaids[8] = 9475


//  Id pregunta: 9114 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[9]= new Array();
 choices[9][0] = "Actors.";
 choices[9][1] = "Use cases.";
 choices[9][2] = "Subject.";
 choices[9][3] = "Scenario.";
 answers[9] = 3;
 units[9] = ['85'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 9114. Examen TIC A2 2013";
 preguntaids[9] = 9114


//  Id pregunta: 8890 Año de creación de pregunta: 2013
 questions[10]= "11)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Sobrecarga.";
 choices[10][1] = "Herencia.";
 choices[10][2] = "Extensibilidad.";
 choices[10][3] = "Polimorfismo.";
 answers[10] = 3;
 units[10] = ['85'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 8890. Examen AGE TIC A1 2011";
 preguntaids[10] = 8890


//  Id pregunta: 9290 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[11]= new Array();
 choices[11][0] = "La persistencia";
 choices[11][1] = "Los procesos de transformaci&oacute;n.";
 choices[11][2] = "El flujo de la informaci&oacute;n.";
 choices[11][3] = "La herencia";
 answers[11] = 3;
 units[11] = ['85', '86'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9290. Examen TIC A2 2013. Promocion interna";
 preguntaids[11] = 9290


//  Id pregunta: 9474 Año de creación de pregunta: 2014
 questions[12]= "13)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[12]= new Array();
 choices[12][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo.";
 choices[12][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[12][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[12][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[12] = 3;
 units[12] = ['85'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9474. B: las interaciones no se dividen en fases; C: fases: inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n; flujos principales: modelo de negocio, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n, dise&ntilde;o, pruebas; flujos secundarios: configuraci&oacute;n, gesti&oacute;n, entorno";
 preguntaids[12] = 9474


//  Id pregunta: 10352 Año de creación de pregunta: 2015
 questions[13]= "14)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[13]= new Array();
 choices[13][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[13][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[13][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[13][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[13] = 3;
 units[13] = ['85'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 10352. ";
 preguntaids[13] = 10352


//  Id pregunta: 10536 Año de creación de pregunta: 2015
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n falsa de entre las siguientes:";
 choices[14]= new Array();
 choices[14][0] = "Las relaciones regulares son entre dos entidades fuertes";
 choices[14][1] = "La existencia de las entidades fuertes, depende de otra entidad";
 choices[14][2] = "Las entidades pueden ser fuertes o d&eacute;biles";
 choices[14][3] = "Las relaciones d&eacute;biles se producen entre una entidad fuerte y otra d&eacute;bil";
 answers[14] = 1;
 units[14] = ['85'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10536. ";
 preguntaids[14] = 10536


//  Id pregunta: 10497 Año de creación de pregunta: 2015
 questions[15]= "16)  Indique cu&aacute;l de los siguientes, es un lenguaje de programaci&oacute;n orientado a objetos puro";
 choices[15]= new Array();
 choices[15][0] = "Eiffel";
 choices[15][1] = "Basic";
 choices[15][2] = "LISP";
 choices[15][3] = "Pascal";
 answers[15] = 0;
 units[15] = ['85'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 10497. ";
 preguntaids[15] = 10497


//  Id pregunta: 10510 Año de creación de pregunta: 2015
 questions[16]= "17)  Se&ntilde;ale de entre las siguientes, la opci&oacute;n incorrecta en cuanto a las caracter&iacute;sticas del principios del modelado orientado a objetos";
 choices[16]= new Array();
 choices[16][0] = "Polimorfismo, encapsulaci&oacute;n y herencia";
 choices[16][1] = "Reusabilidad, modulaci&oacute;n y herencia";
 choices[16][2] = "Herencia, polimorfismo";
 choices[16][3] = "Reusabilidad, abstracci&oacute;n y herencia";
 answers[16] = 1;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 10510. ";
 preguntaids[16] = 10510


//  Id pregunta: 9476 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[17]= new Array();
 choices[17][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprime otros";
 choices[17][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[17][2] = "Los lenguajes orientados a objetos son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[17][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[17] = 1;
 units[17] = ['85'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 9476. ";
 preguntaids[17] = 9476


//  Id pregunta: 10029 Año de creación de pregunta: 2015
 questions[18]= "19)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[18]= new Array();
 choices[18][0] = "Diagrama de secuencia.";
 choices[18][1] = "Diagrama de colaboraci&oacute;n.";
 choices[18][2] = "Diagrama de clases.";
 choices[18][3] = "Diagrama de Casos de Uso.";
 answers[18] = 3;
 units[18] = ['91', '85', '89'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10029. Examen TIC A2 2014";
 preguntaids[18] = 10029


//  Id pregunta: 9477 Año de creación de pregunta: 2014
 questions[19]= "20)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[19]= new Array();
 choices[19][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[19][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[19][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[19][3] = "Todas las anteriores";
 answers[19] = 3;
 units[19] = ['85'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 9477. ";
 preguntaids[19] = 9477


//  Id pregunta: 8894 Año de creación de pregunta: 2013
 questions[20]= "21)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[20]= new Array();
 choices[20][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[20][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[20][2] = "Jerarqu&iacute;a disjunta.";
 choices[20][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[20] = 1;
 units[20] = ['85'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 8894. Examen AGE TIC A1 2011";
 preguntaids[20] = 8894


//  Id pregunta: 10035 Año de creación de pregunta: 2015
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[21]= new Array();
 choices[21][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[21][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[21][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[21][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[21] = 3;
 units[21] = ['85'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 10035. Examen TIC A2 2014";
 preguntaids[21] = 10035


//  Id pregunta: 10549 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n el Modelo Entidad/Relaci&oacute;n, se&ntilde;ale cu&aacute;l no se encuentra entre las caracter&iacute;sticas que caracterizan una relaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Nombre";
 choices[22][1] = "Tipo de correspondencia";
 choices[22][2] = "Cardinalidad";
 choices[22][3] = "Identificaci&oacute;n";
 answers[22] = 3;
 units[22] = ['85'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10549. ";
 preguntaids[22] = 10549


//  Id pregunta: 9482 Año de creación de pregunta: 2014
 questions[23]= "24)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[23]= new Array();
 choices[23][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[23][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[23][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[23][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[23] = 1;
 units[23] = ['85'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 9482. ";
 preguntaids[23] = 9482


//  Id pregunta: 8898 Año de creación de pregunta: 2013
 questions[24]= "25)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[24]= new Array();
 choices[24][0] = "Regulares y d&eacute;biles.";
 choices[24][1] = "Fuertes y d&eacute;biles.";
 choices[24][2] = "A y B son correctas.";
 choices[24][3] = "Ninguna de las anteriores es correcta.";
 answers[24] = 2;
 units[24] = ['85'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 8898. Examen AGE TIC A1 2011";
 preguntaids[24] = 8898


//  Id pregunta: 9479 Año de creación de pregunta: 2014
 questions[25]= "26)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con las clases abstractas y las interfaces:";
 choices[25]= new Array();
 choices[25][0] = "En una clase abstracta, todos los m&eacute;todos definidos deben carecer de implementaci&oacute;n";
 choices[25][1] = "Una clase abstracta podr&aacute; ser instanciada cuando la clase que hereda implemente los m&eacute;todos abstractos";
 choices[25][2] = "Una interfaz permite la implementaci&oacute;n de clases con comportamientos comunes, sin importar su ubicaci&oacute;n en la jerarqu&iacute;a de clases.";
 choices[25][3] = "Las interfaces pueden definir constantes y variables de instancia";
 answers[25] = 2;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 9479. ";
 preguntaids[25] = 9479


//  Id pregunta: 9289 Año de creación de pregunta: 2014
 questions[26]= "27)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[26]= new Array();
 choices[26][0] = "Proceso-Proceso";
 choices[26][1] = "Proceso-Entidad Externa";
 choices[26][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos.";
 choices[26][3] = "Entidad Externa-Proceso";
 answers[26] = 2;
 units[26] = ['85', '86'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9289. Examen TIC A2 2013. Promocion interna";
 preguntaids[26] = 9289


//  Id pregunta: 10037 Año de creación de pregunta: 2015
 questions[27]= "28)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[27]= new Array();
 choices[27][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[27][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[27][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[27][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[27] = 2;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10037. Examen TIC A2 2014";
 preguntaids[27] = 10037


//  Id pregunta: 10065 Año de creación de pregunta: 2015
 questions[28]= "29)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[28][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[28][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[28][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[28] = 1;
 units[28] = ['91', '85', '86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10065. Examen TIC A2 2014";
 preguntaids[28] = 10065


//  Id pregunta: 8892 Año de creación de pregunta: 2013
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[29]= new Array();
 choices[29][0] = "UMTS.";
 choices[29][1] = "JINI.";
 choices[29][2] = "VORBIS.";
 choices[29][3] = "CLOS.";
 answers[29] = 1;
 units[29] = ['85'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 8892. Examen AGE TIC A1 2011";
 preguntaids[29] = 8892


//  Id pregunta: 8885 Año de creación de pregunta: 2013
 questions[30]= "31)  &iquest;Qu&eacute; diagrama UML muestra el flujo de acciones en curso, no necesariamente at&oacute;micas, en relaci&oacute;n a la estructura de estados del sistema?";
 choices[30]= new Array();
 choices[30][0] = "Diagrama de secuencia.";
 choices[30][1] = "Diagrama de estados.";
 choices[30][2] = "Diagrama de actividad.";
 choices[30][3] = "Diagrama de colaboraci&oacute;n.";
 answers[30] = 2;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 8885. Examen AGE TIC A1 2011";
 preguntaids[30] = 8885


//  Id pregunta: 10200 Año de creación de pregunta: 2015
 questions[31]= "32)  En el modelo Entidad/Relaci&oacute;n, y dada una jerarqu&iacute;a obligatoria disjunta, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[31]= new Array();
 choices[31][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 choices[31][1] = "Es necesario que toda ocurrencia del supertipo se encuentre en uno solo de los subtipos.";
 choices[31][2] = "Es necesario que toda ocurrencia del supertipo se encuentre en todos los subtipos.";
 choices[31][3] = "Es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 answers[31] = 1;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10200. Examen TIC A1 2014";
 preguntaids[31] = 10200


//  Id pregunta: 8887 Año de creación de pregunta: 2013
 questions[32]= "33)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[32]= new Array();
 choices[32][0] = "Polimorfismo.";
 choices[32][1] = "Abstracci&oacute;n.";
 choices[32][2] = "Encapsulaci&oacute;n.";
 choices[32][3] = "Persistencia.";
 answers[32] = 2;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 8887. Examen AGE TIC A1 2011";
 preguntaids[32] = 8887


//  Id pregunta: 8376 Año de creación de pregunta: 2011
 questions[33]= "34)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[33]= new Array();
 choices[33][0] = "El c&oacute;digo fuente.";
 choices[33][1] = "El c&oacute;digo m&aacute;quina.";
 choices[33][2] = "El c&oacute;digo clase.";
 choices[33][3] = "El c&oacute;digo de enlazado.";
 answers[33] = 0;
 units[33] = ['85'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 8376. Examen UPM A2 2011";
 preguntaids[33] = 8376


//  Id pregunta: 8884 Año de creación de pregunta: 2013
 questions[34]= "35)  El diagrama de estructura de datos (DED):";
 choices[34]= new Array();
 choices[34][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[34][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[34][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[34][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[34] = 0;
 units[34] = ['85'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 8884. Examen AGE TIC A1 2011";
 preguntaids[34] = 8884


//  Id pregunta: 9221 Año de creación de pregunta: 2014
 questions[35]= "36)  En el &aacute;mbito del dise&ntilde;o de sistemas software, la inyecci&oacute;n de dependencias";
 choices[35]= new Array();
 choices[35][0] = "aumenta el acoplamiento entre los m&oacute;dulos.";
 choices[35][1] = "es una forma de implementar el patr&oacute;n de Inversi&oacute;n de Control.";
 choices[35][2] = "facilita la detecci&oacute;n de errores (debugging) en tiempo de ejecuci&oacute;n";
 choices[35][3] = "es un patr&oacute;n de ataque que introduce (&ldquo;inyecta&rdquo;) c&oacute;digo malicioso para cambiar el curso de ejecuci&oacute;n.";
 answers[35] = 1;
 units[35] = ['85', '86'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 9221. Examen TIC A1 2013";
 preguntaids[35] = 9221


//  Id pregunta: 9480 Año de creación de pregunta: 2014
 questions[36]= "37)  Se califican como entidades d&eacute;biles aquellas cuya existencia no tiene sentido sin la existencia de la entidad regular de la que dependen. En relaci&oacute;n con las entidades d&eacute;biles y regulares, es VERDADERO que:";
 choices[36]= new Array();
 choices[36][0] = "La dependencia en existencia implica a su vez dependencia en identificaci&oacute;n";
 choices[36][1] = "La dependencia en existencia de una entidad d&eacute;bil respecto de una entidad regular supone que la entidad d&eacute;bil no dispone de suficientes atributos para formar su clave primaria. La entidad regular aporta la parte de clave que le falta a la entidad d&eacute;bil.";
 choices[36][2] = "Las relaciones de dependencia pueden surgir en interrelaciones con tipo de correspondencia 1:N o N:M";
 choices[36][3] = "Todas las anteriores son falsas";
 answers[36] = 3;
 units[36] = ['85'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9480. A: La dependencia en identificaci&oacute;n implica dependencia en existencia, pero no al contrario; B: es la definici&oacute;n de dependencia de identificaci&oacute;n; C: solo 1:N;";
 preguntaids[36] = 9480


//  Id pregunta: 8902 Año de creación de pregunta: 2013
 questions[37]= "38)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[37]= new Array();
 choices[37][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[37][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[37][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[37][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[37] = 3;
 units[37] = ['85'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 8902. ";
 preguntaids[37] = 8902


//  Id pregunta: 10255 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Qu&eacute; tipo de restricciones en el modelo de Entidad-Relaci&oacute;n hacen referencia al formato de escritura del atributo?";
 choices[38]= new Array();
 choices[38][0] = "Restricciones sem&aacute;nticas";
 choices[38][1] = "Restricciones sint&aacute;cticas";
 choices[38][2] = "Restricciones estructurales";
 choices[38][3] = "Restricciones de usuario";
 answers[38] = 1;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 10255. ";
 preguntaids[38] = 10255


//  Id pregunta: 10036 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[39]= new Array();
 choices[39][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[39][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[39][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[39][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[39] = 1;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10036. Examen TIC A2 2014";
 preguntaids[39] = 10036


//  Id pregunta: 9113 Año de creación de pregunta: 2014
 questions[40]= "41)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[40]= new Array();
 choices[40][0] = "Intrastructure e Hiperstructure.";
 choices[40][1] = "Basic y Complex.";
 choices[40][2] = "Infrastructure y Superstructure.";
 choices[40][3] = "Infrastructure y Substructure.";
 answers[40] = 2;
 units[40] = ['85'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 9113. Examen TIC A2 2013";
 preguntaids[40] = 9113


//  Id pregunta: 9481 Año de creación de pregunta: 2014
 questions[41]= "42)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[41]= new Array();
 choices[41][0] = "Grado";
 choices[41][1] = "Tipo de correspondencia";
 choices[41][2] = "Cardinalidad";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = 0;
 units[41] = ['85'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 9481. ";
 preguntaids[41] = 9481


//  Id pregunta: 10503 Año de creación de pregunta: 2015
 questions[42]= "43)  Se&ntilde;ale el conjunto de conceptos que son introducidos por el Modelo Entidad/Relaci&oacute;n extendido";
 choices[42]= new Array();
 choices[42][0] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e identificaci&oacute;n.";
 choices[42][1] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima y Dependencia en existencia e identificaci&oacute;n.";
 choices[42][2] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&iacute;nima y Dependencia en existencia e autenticaci&oacute;n.";
 choices[42][3] = "Generalizaci&oacute;n, Especializaci&oacute;n, Cardinalidad M&aacute;xima e independencia en existencia e identificaci&oacute;n.";
 answers[42] = 0;
 units[42] = ['85'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 10503. ";
 preguntaids[42] = 10503


