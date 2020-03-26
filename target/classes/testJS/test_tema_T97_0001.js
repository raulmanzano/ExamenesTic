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
//  Id pregunta: 7977 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[0]= new Array();
 choices[0][0] = "Upper CASE (U-CASE)";
 choices[0][1] = "MetaCASE";
 choices[0][2] = "CAST (Computer-Aided Software Testing)";
 choices[0][3] = "IPSE (Integrated Programming Support Environment)";
 answers[0] = 1;
 units[0] = ['97'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7977. Examen TIC A2 2010";
 preguntaids[0] = 7977


//  Id pregunta: 3851 Año de creación de pregunta: 2002
 questions[1]= "2)  Entre los siguientes t&eacute;rminos, indicar cu&aacute;l define la reconstrucci&oacute;n de un sistema de una forma nueva, incluyendo la implementaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Ingenier&iacute;a inversa.";
 choices[1][1] = "Reestructuraci&oacute;n.";
 choices[1][2] = "Reingenier&iacute;a.";
 choices[1][3] = "Ingenier&iacute;a hacia delante.";
 answers[1] = 2;
 units[1] = ['97'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3851. ";
 preguntaids[1] = 3851


//  Id pregunta: 5682 Año de creación de pregunta: 2007
 questions[2]= "3)  Al realizar las pruebas de un sistema de informaci&oacute;n podemos dise&ntilde;arlas desde dos puntos de vista, como pruebas de caja blanca o de caja negra. &iquest;Cual es la diferencia entre ellas?";
 choices[2]= new Array();
 choices[2][0] = "Las de caja blanca o de enfoque estructural se centran en la estructura interna del programa mientras que las de caja negra o de enfoque funcional estudian la especificaci&oacute;n de las funciones centr&aacute;ndose en la entrada y la salida en lugar del contenido.";
 choices[2][1] = "Las de caja blanca buscan probar los resultados favorables en todas las preguntas del sistema, mientras que las de caja negra se centran en los resultados negativos.";
 choices[2][2] = "Mientras que las pruebas de caja blanca o de enfoque estructural analizan la estructura del programa las pruebas de caja negra o de enfoque funcional estudian los datos y la variabilidad de los mismos.";
 choices[2][3] = "Las de caja negra o de enfoque estructural se centran en la estructura interna del programa mientras que las de caja blanca o de enfoque funcional estudian la especificaci&oacute;n de las funciones centr&aacute;ndose en la entrada y la salida en lugar del contenido.";
 answers[2] = 0;
 units[2] = ['97'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 5682. ";
 preguntaids[2] = 5682


//  Id pregunta: 3674 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un componente de una herramienta CASE integrada?";
 choices[3]= new Array();
 choices[3][0] = "Diccionario de datos.";
 choices[3][1] = "Editor de diagramas.";
 choices[3][2] = "Editor de documentos.";
 choices[3][3] = "Editor de textos.";
 answers[3] = 3;
 units[3] = ['96', '97'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3674. ";
 preguntaids[3] = 3674


//  Id pregunta: 3555 Año de creación de pregunta: 2004
 questions[4]= "5)  En relaci&oacute;n con la &quot;reingenier&iacute;a de sistemas&quot; indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[4]= new Array();
 choices[4][0] = "La reingenier&iacute;a es la mejora de los sistemas existentes de modo que la inversi&oacute;n resulte muy rentable, independientemente de que dicha mejora pueda ser obtenida con un nuevo desarrollo.";
 choices[4][1] = "La reingenier&iacute;a debe tener bajo coste, hacerse en poco tiempo, tener poco riesgo y dar un valor a&ntilde;adido.";
 choices[4][2] = "La reingener&iacute;a trabaja todos los niveles de abstracci&oacute;n, desde la implementaci&oacute;n hasta el dise&ntilde;o.";
 choices[4][3] = "La reingenier&iacute;a que s&oacute;lo requiere el conocimiento de los interfaces de sistema se llama ingenier&iacute;a inversa o modernizaci&oacute;n de caja blanca.";
 answers[4] = 3;
 units[4] = ['97'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3555. TIC MAP B 2004";
 preguntaids[4] = 3555


//  Id pregunta: 5974 Año de creación de pregunta: 2007
 questions[5]= "6)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[5]= new Array();
 choices[5][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[5][1] = "Reestructuraci&oacute;n del software.";
 choices[5][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[5][3] = "Ingenier&iacute;a avanzada.";
 answers[5] = 1;
 units[5] = ['97'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 5974. examen TIC 2006";
 preguntaids[5] = 5974


//  Id pregunta: 2977 Año de creación de pregunta: 2002
 questions[6]= "7)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[6][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[6][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[6][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[6] = 3;
 units[6] = ['96', '97'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 2977. ";
 preguntaids[6] = 2977


//  Id pregunta: 10359 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;A qu&eacute; concepto se corresponde la definici&oacute;n: &ldquo;proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n.&rdquo;";
 choices[7]= new Array();
 choices[7][0] = "Ingenier&iacute;a inversa";
 choices[7][1] = "Reingenier&iacute;a";
 choices[7][2] = "Ingenier&iacute;a hacia delante";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 0;
 units[7] = ['97'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10359. ";
 preguntaids[7] = 10359


//  Id pregunta: 9085 Año de creación de pregunta: 2014
 questions[8]= "9)  De acuerdo con la definiciones dadas por el grupo de trabajo del IEEE Computer Society, la reestructuraci&oacute;n software (restructuring) es";
 choices[8]= new Array();
 choices[8][0] = "el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos.";
 choices[8][1] = "el examen y la modificaci&oacute;n de un sistema para ser reconstruido de una forma nueva y realizar la implantaci&oacute;n derivada de esta nueva forma.";
 choices[8][2] = "la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero sin modificar el comportamiento externo del sistema.";
 choices[8][3] = "un proceso completo que va desde una alto nivel de abstracci&oacute;n, hasta la propia implementaci&oacute;n f&iacute;sica del sistema.";
 answers[8] = 2;
 units[8] = ['97'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9085. Examen TIC-A1 2013";
 preguntaids[8] = 9085


//  Id pregunta: 8030 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[9]= new Array();
 choices[9][0] = "Prueba de la tabla ortogonal.";
 choices[9][1] = "Partici&oacute;n equivalente.";
 choices[9][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[9][3] = "Prueba del camino b&aacute;sico.";
 answers[9] = 3;
 units[9] = ['97'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8030. Examen TIC A2 2010";
 preguntaids[9] = 8030


//  Id pregunta: 4252 Año de creación de pregunta: 2006
 questions[10]= "11)  La transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema es:";
 choices[10]= new Array();
 choices[10][0] = "Ingenier&iacute;a inversa.";
 choices[10][1] = "Reestructuraci&oacute;n.";
 choices[10][2] = "Ingenier&iacute;a hacia delante.";
 choices[10][3] = "Reingenier&iacute;a.";
 answers[10] = 1;
 units[10] = ['96', '97'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 4252. ";
 preguntaids[10] = 4252


//  Id pregunta: 3872 Año de creación de pregunta: 2002
 questions[11]= "12)  La ingenier&iacute;a inversa consiste en:";
 choices[11]= new Array();
 choices[11][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[11][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[11][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[11][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[11] = 0;
 units[11] = ['97'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3872. ";
 preguntaids[11] = 3872


//  Id pregunta: 9105 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[12]= new Array();
 choices[12][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[12][1] = "impide la ingenier&iacute;a inversa.";
 choices[12][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[12][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[12] = 1;
 units[12] = ['97'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9105. Examen TIC-A1 2013";
 preguntaids[12] = 9105


//  Id pregunta: 7583 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[13]= new Array();
 choices[13][0] = "An&aacute;lisis de Inventarios.";
 choices[13][1] = "Ingenier&iacute;a Inversa.";
 choices[13][2] = "Ingenier&iacute;a Directa.";
 choices[13][3] = "Ingenier&iacute;a Relacional.";
 answers[13] = 3;
 units[13] = ['97'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 7583. Map 2006";
 preguntaids[13] = 7583


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[14]= new Array();
 choices[14][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[14][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[14][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[14][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[14] = 1;
 units[14] = ['97'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1827. ";
 preguntaids[14] = 1827


//  Id pregunta: 3854 Año de creación de pregunta: 2002
 questions[15]= "16)  Es cierto decir que la &quot;reingenier&iacute;a&quot;:";
 choices[15]= new Array();
 choices[15][0] = "Suele usarse para ampliar la vida &uacute;til de un sistema.";
 choices[15][1] = "Es una ingenier&iacute;a inversa hecha con herramientas de asistencia computerizada.";
 choices[15][2] = "No tiene sentido si se hace usando tecnolog&iacute;a de objetos, que por definici&oacute;n son reutilizables.";
 choices[15][3] = "S&oacute;lo se usa cuando se encuentran fallos de funcionalidad.";
 answers[15] = 0;
 units[15] = ['97'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3854. ";
 preguntaids[15] = 3854


//  Id pregunta: 5910 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[16]= new Array();
 choices[16][0] = "An&aacute;lisis de inventarios.";
 choices[16][1] = "Ingenier&iacute;a inversa.";
 choices[16][2] = "Ingenier&iacute;a directa.";
 choices[16][3] = "Ingenier&iacute;a relacional.";
 answers[16] = 3;
 units[16] = ['97'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 5910. examen TIC 2006";
 preguntaids[16] = 5910


//  Id pregunta: 6813 Año de creación de pregunta: 2010
 questions[17]= "18)  La redocumentaci&oacute;n es:";
 choices[17]= new Array();
 choices[17][0] = "Una forma de ingenier&iacute;a inversa.";
 choices[17][1] = "Es el proceso mediante el que se produce documentaci&oacute;n desde un sistema en desarrollo.";
 choices[17][2] = "Es el mismo concepto que humanware.";
 choices[17][3] = "Es la identificaci&oacute;n de los componentes de un sistema y sus relaciones.";
 answers[17] = 0;
 units[17] = ['97'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6813. TIC A 2009";
 preguntaids[17] = 6813


//  Id pregunta: 3696 Año de creación de pregunta: 2002
 questions[18]= "19)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[18]= new Array();
 choices[18][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[18][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[18][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[18][3] = "Reingenier&iacute;a (Reengineering).";
 answers[18] = 1;
 units[18] = ['97'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3696. ";
 preguntaids[18] = 3696


//  Id pregunta: 4253 Año de creación de pregunta: 2006
 questions[19]= "20)  El proceso que va desde un alto nivel de abstracci&oacute;n hasta la propia implementaci&oacute;n f&iacute;sica del sistema se conoce como:";
 choices[19]= new Array();
 choices[19][0] = "Ingenier&iacute;a inversa.";
 choices[19][1] = "Reestructuraci&oacute;n.";
 choices[19][2] = "Ingenier&iacute;a hacia delante.";
 choices[19][3] = "Reingenier&iacute;a.";
 answers[19] = 2;
 units[19] = ['96', '97'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 4253. ";
 preguntaids[19] = 4253


//  Id pregunta: 5637 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cu&aacute;les de los siguientes no ser&iacute;an objetivos de la ingenier&iacute;a inversa?";
 choices[20]= new Array();
 choices[20][0] = "Incrementar la comprensi&oacute;n global del sistema para el mantenimiento o nuevo desarrollo.";
 choices[20][1] = "Reducir la complejidad del sistema y generar vistas alternativas.";
 choices[20][2] = "Disminuci&oacute;n en los tiempos del ciclo de vida.";
 choices[20][3] = "Recuperar informaci&oacute;n perdida y detectar efectos laterales.";
 answers[20] = 2;
 units[20] = ['97'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 5637. Castilla la Mancha 2006";
 preguntaids[20] = 5637


//  Id pregunta: 5852 Año de creación de pregunta: 2007
 questions[21]= "22)  La refactorizaci&oacute;n consiste en:";
 choices[21]= new Array();
 choices[21][0] = "Mejorar el c&oacute;digo fuente.";
 choices[21][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[21][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[21][3] = "Todas las respuestas anteriores son correctas.";
 answers[21] = 3;
 units[21] = ['97'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 5852. Examen 2006 JCYL";
 preguntaids[21] = 5852


//  Id pregunta: 3839 Año de creación de pregunta: 2002
 questions[22]= "23)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[22]= new Array();
 choices[22][0] = "Mantenimiento permanente.";
 choices[22][1] = "Coste cerrado del producto.";
 choices[22][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[22] = 2;
 units[22] = ['96', '97'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3839. ";
 preguntaids[22] = 3839


//  Id pregunta: 3909 Año de creación de pregunta: 2002
 questions[23]= "24)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[23]= new Array();
 choices[23][0] = "Ingenier&iacute;a inversa";
 choices[23][1] = "Reestructuraci&oacute;n";
 choices[23][2] = "Reingenier&iacute;a";
 choices[23][3] = "Ingenier&iacute;a hacia delante";
 answers[23] = 1;
 units[23] = ['97'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3909. ";
 preguntaids[23] = 3909


//  Id pregunta: 6991 Año de creación de pregunta: 2010
 questions[24]= "25)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[24]= new Array();
 choices[24][0] = "Ingenier&iacute;a hacia delante.";
 choices[24][1] = "Reestructuraci&oacute;n.";
 choices[24][2] = "Reingenier&iacute;a.";
 choices[24][3] = "Ingenier&iacute;a inversa.";
 answers[24] = 1;
 units[24] = ['97'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6991. TIC-B 2009 bloque desarrollo";
 preguntaids[24] = 6991


//  Id pregunta: 3852 Año de creación de pregunta: 2002
 questions[25]= "26)  Es cierto decir que la &quot;Ingenier&iacute;a hacia delante&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Es una reingenier&iacute;a hecha a continuaci&oacute;n de una ingenier&iacute;a inversa.";
 choices[25][1] = "Es el resultado de aplicar t&eacute;cnicas de reutilizaci&oacute;n a un sistema bien definido.";
 choices[25][2] = "Parte de un alto nivel de abstracci&oacute;n.";
 choices[25][3] = "Precisa antes una &quot;ingenier&iacute;a inversa&quot;.";
 answers[25] = 2;
 units[25] = ['97'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3852. ";
 preguntaids[25] = 3852


//  Id pregunta: 4250 Año de creación de pregunta: 2006
 questions[26]= "27)  La ingenier&iacute;a inversa:";
 choices[26]= new Array();
 choices[26][0] = "Seg&uacute;n el IEEE, es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original a un mayor nivel de abstracci&oacute;n";
 choices[26][1] = "Es sin&oacute;nimo de Reingenier&iacute;a";
 choices[26][2] = "Es sin&oacute;nimo de Forward Engineering";
 choices[26][3] = "El IEEE no proporciona una definici&oacute;n de Ingenier&iacute;a Inversa";
 answers[26] = 0;
 units[26] = ['96', '97'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4250. ";
 preguntaids[26] = 4250


//  Id pregunta: 3853 Año de creación de pregunta: 2002
 questions[27]= "28)  Es cierto decir que la &quot;ingenier&iacute;a inversa&quot;:";
 choices[27]= new Array();
 choices[27][0] = "Crea un sistema distinto al original con el mismo nivel de abstracci&oacute;n.";
 choices[27][1] = "No se usa demasiado.";
 choices[27][2] = "Crea una representaci&oacute;n del sistema distinta a la original o con un grado de abstracci&oacute;n normalmente superior.";
 choices[27][3] = "El grado de abstracci&oacute;n que se obtiene es menor, pero eso hace que el proceso sea m&aacute;s din&aacute;mico.";
 answers[27] = 2;
 units[27] = ['97'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3853. ";
 preguntaids[27] = 3853


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[28]= "29)  El m&eacute;todo utilizado en el mantenimiento de software consistente en el examen y modificaci&oacute;n de un sistema para reconstruirlo de una nueva forma es:";
 choices[28]= new Array();
 choices[28][0] = "Ingenier&iacute;a inversa.";
 choices[28][1] = "Reestructuraci&oacute;n software.";
 choices[28][2] = "Reingenier&iacute;a.";
 choices[28][3] = "Transformaci&oacute;n de programas.";
 answers[28] = 2;
 units[28] = ['97'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 855. AGE A2 2015";
 preguntaids[28] = 855


//  Id pregunta: 6786 Año de creación de pregunta: 2010
 questions[29]= "30)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[29]= new Array();
 choices[29][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[29][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[29][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorando los detalles internos.";
 choices[29][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[29] = 2;
 units[29] = ['97'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6786. TIC A 2009";
 preguntaids[29] = 6786


//  Id pregunta: 4254 Año de creación de pregunta: 2006
 questions[30]= "31)  &iquest;Qu&eacute; herramientas de reingenier&iacute;a se engloban en un paquete CASE?";
 choices[30]= new Array();
 choices[30][0] = "Via Center.";
 choices[30][1] = "CA-Metrics.";
 choices[30][2] = "Cadre.";
 choices[30][3] = "ADW.";
 answers[30] = 0;
 units[30] = ['96', '97'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 4254. ";
 preguntaids[30] = 4254


//  Id pregunta: 5730 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[31]= new Array();
 choices[31][0] = "La ingenier&iacute;a inversa es el proceso de codificar los programas m&aacute;s eficientemente.";
 choices[31][1] = "La reingenier&iacute;a del software incluye el an&aacute;lisis de inventario.";
 choices[31][2] = "La ingenier&iacute;a inversa s&oacute;lo es aplicable al software estructurado.";
 choices[31][3] = "La ingenier&iacute;a directa es el proceso de analizar un programa para extraer informaci&oacute;n acerca de los datos, de su arquitectura y del dise&ntilde;o de procedimientos.";
 answers[31] = 1;
 units[31] = ['97'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 5730. Castilla la Mancha B 2006";
 preguntaids[31] = 5730


//  Id pregunta: 3735 Año de creación de pregunta: 2002
 questions[32]= "33)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[32]= new Array();
 choices[32][0] = "Superiores (upper CASE).";
 choices[32][1] = "Inferiores (lower CASE).";
 choices[32][2] = "Las 2 anteriores son correctas.";
 choices[32][3] = "Todas son falsas.";
 answers[32] = 1;
 units[32] = ['97'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3735. ";
 preguntaids[32] = 3735


//  Id pregunta: 3530 Año de creación de pregunta: 2002
 questions[33]= "34)  Al conjunto de est&aacute;ndares que permite que distintas herramientas CASE del mismo o distinto fabricante el intercambio de datos se denomina:";
 choices[33]= new Array();
 choices[33][0] = "MERISE.";
 choices[33][1] = "IPSE.";
 choices[33][2] = "MIDS.";
 choices[33][3] = "X/Open CASE.";
 answers[33] = 1;
 units[33] = ['97'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3530. ";
 preguntaids[33] = 3530


