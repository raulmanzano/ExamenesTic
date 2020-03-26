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
//  Id pregunta: 5932 Año de creación de pregunta: 2007
 questions[0]= "1)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[0]= new Array();
 choices[0][0] = "Acoplamiento de control.";
 choices[0][1] = "Acoplamiento por estampado.";
 choices[0][2] = "Acoplamiento por contenido.";
 choices[0][3] = "Acoplamiento externo.";
 answers[0] = 2;
 units[0] = ['89'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 5932. examen TIC 2006";
 preguntaids[0] = 5932


//  Id pregunta: 9107 Año de creación de pregunta: 2014
 questions[1]= "2)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[1]= new Array();
 choices[1][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[1][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[1][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[1][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[1] = 1;
 units[1] = ['89'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 9107. Examen TIC A2 2013";
 preguntaids[1] = 9107


//  Id pregunta: 6960 Año de creación de pregunta: 2010
 questions[2]= "3)  En dise&ntilde;o y programaci&oacute;n de software &iquest;Cu&aacute;l de los siguientes es un tipo de acoplamiento?";
 choices[2]= new Array();
 choices[2][0] = "De marca";
 choices[2][1] = "De presentaci&oacute;n";
 choices[2][2] = "De clases";
 choices[2][3] = "De herencia";
 answers[2] = 0;
 units[2] = ['89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6960. TIC-B 2009 bloque desarrollo";
 preguntaids[2] = 6960


//  Id pregunta: 7840 Año de creación de pregunta: 2010
 questions[3]= "4)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[3]= new Array();
 choices[3][0] = "Un objeto del que obtenemos referencias a otros.";
 choices[3][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario.";
 choices[3][2] = "Un objeto del que s&oacute;lo existe una instancia.";
 choices[3][3] = "Una clase que no se puede instanciar.";
 answers[3] = 2;
 units[3] = ['89'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7840. ";
 preguntaids[3] = 7840


//  Id pregunta: 7515 Año de creación de pregunta: 2010
 questions[4]= "5)  En el dise&ntilde;o estructurado se utiliza el concepto de acoplamiento entre m&oacute;dulos de software. Indique de entre los siguientes tipos de acoplamiento el que corresponde al caso en que la informaci&oacute;n se transmite entre m&oacute;dulos como estructura de datos:";
 choices[4]= new Array();
 choices[4][0] = "Acoplamiento de datos simple.";
 choices[4][1] = "Acoplamiento por estampado.";
 choices[4][2] = "Acoplamiento de control.";
 choices[4][3] = "Acoplamiento externo.";
 answers[4] = 1;
 units[4] = ['89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 7515. Map 2005";
 preguntaids[4] = 7515


//  Id pregunta: 10824 Año de creación de pregunta: 2015
 questions[5]= "6)  De los siguientes, se&ntilde;ale el peor acoplamiento entre m&oacute;dulos:";
 choices[5]= new Array();
 choices[5][0] = "De contenido";
 choices[5][1] = "Externo";
 choices[5][2] = "De control";
 choices[5][3] = "Normal";
 answers[5] = 0;
 units[5] = ['89'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10824. ";
 preguntaids[5] = 10824


//  Id pregunta: 5545 Año de creación de pregunta: 2007
 questions[6]= "7)  Dentro de un programa se incluye el siguiente m&oacute;dulo. &iquest;Qu&eacute; cohesi&oacute;n existe entre los procedimientos que lo componen? DEFINITION MODULE PintarFigura; PROCEDURE PintarPerimetro(...); PROCEDURE   PintarColor(...); PROCEDURE PintarSombras(...); END PintarFigura";
 choices[6]= new Array();
 choices[6][0] = "Cohesi&oacute;n funcional.";
 choices[6][1] = "Cohesi&oacute;n abstraccional.";
 choices[6][2] = "Cohesi&oacute;n secuencial.";
 choices[6][3] = "Cohesi&oacute;n temporal.";
 answers[6] = 0;
 units[6] = ['89'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 5545. ";
 preguntaids[6] = 5545


//  Id pregunta: 7057 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un dise&ntilde;o orientado a objetos?";
 choices[7]= new Array();
 choices[7][0] = "Acoplamiento fuerte.";
 choices[7][1] = "Modularidad.";
 choices[7][2] = "Extensibilidad.";
 choices[7][3] = "Reusabilidad.";
 answers[7] = 0;
 units[7] = ['89'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7057. ";
 preguntaids[7] = 7057


//  Id pregunta: 6954 Año de creación de pregunta: 2010
 questions[8]= "9)  Respecto al Diagrama de Secuencia, &iquest;cu&aacute;l de las siguientes opciones es correcta?";
 choices[8]= new Array();
 choices[8][0] = "Muestra los objetos participantes en la interacci&oacute;n y los mensajes que intercambian ordenados seg&uacute;n su secuencia en el tiempo.";
 choices[8][1] = "El eje horizontal representa el tiempo, y en el eje vertical se colocan los objetos y actores participantes en la interacci&oacute;n, sin un orden prefijado.";
 choices[8][2] = "Cada objeto o actor tiene una l&iacute;nea horizontal, y los mensajes se representan mediante etiquetas entre los distintos objetos.";
 choices[8][3] = "El tiempo fluye de abajo a arriba y de izquiera a derecha.";
 answers[8] = 0;
 units[8] = ['89'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 6954. TIC-B 2009 bloque desarrollo";
 preguntaids[8] = 6954


//  Id pregunta: 10163 Año de creación de pregunta: 2015
 questions[9]= "10)  En dise&ntilde;o orientado a objetos se utiliza el patr&oacute;n Observador (en ingl&eacute;s, Observer), que define una dependencia uno a muchos entre un sujeto y varios observadores. Se&ntilde;ale la respuesta correcta:";
 choices[9]= new Array();
 choices[9][0] = "Cuando el sujeto se modifica, se notifica dicha modificaci&oacute;n. Los observadores se actualizar&aacute;n s&oacute;lo si se va a utilizar la informaci&oacute;n del sujeto.";
 choices[9][1] = "Establece cu&aacute;ntos observadores de un sujeto van a existir para poder notificarles cualquier cambio.";
 choices[9][2] = "La responsabilidad de actualizaci&oacute;n puede residir en los observadores tras la notificaci&oacute;n de cambio del sujeto.";
 choices[9][3] = "El sujeto nunca puede ser borrado.";
 answers[9] = 2;
 units[9] = ['89'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10163. Examen TIC A1 2014";
 preguntaids[9] = 10163


//  Id pregunta: 7050 Año de creación de pregunta: 2010
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que daba tener un sistema en tiempo real?";
 choices[10]= new Array();
 choices[10][0] = "Manejo sencillo, pero potente, de prioridades, permitiendo que puedan modificarse din&aacute;micamente incluso durante la ejecuci&oacute;n de los procesos.";
 choices[10][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[10][2] = "Manejo eficaz de interrupciones.";
 choices[10][3] = "Funciones complejas para el manejo de ficheros.";
 answers[10] = 3;
 units[10] = ['89'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 7050. ";
 preguntaids[10] = 7050


//  Id pregunta: 6370 Año de creación de pregunta: 2003
 questions[11]= "12)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar";
 choices[11]= new Array();
 choices[11][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesario ajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos";
 choices[11][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo";
 choices[11][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[11][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n";
 answers[11] = 2;
 units[11] = ['89'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6370. Examen 2006 JCYL";
 preguntaids[11] = 6370


//  Id pregunta: 9229 Año de creación de pregunta: 2014
 questions[12]= "13)  En el mapeo objeto-relacional (ORM) en el que el objeto de dominio gestiona su propia persistencia se implementa el patr&oacute;n";
 choices[12]= new Array();
 choices[12][0] = "repositorio (repository pattern).";
 choices[12][1] = "registro activo (active record).";
 choices[12][2] = "mapeador de datos (data mapper).";
 choices[12][3] = "objeto de transferencia de datos (DTO, data transfer object pattern).";
 answers[12] = 1;
 units[12] = ['89'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9229. Examen TIC A1 2013";
 preguntaids[12] = 9229


//  Id pregunta: 8904 Año de creación de pregunta: 2013
 questions[13]= "14)  &iquest;Qu&eacute; es la cohesi&oacute;n de un m&oacute;dulo?:";
 choices[13]= new Array();
 choices[13][0] = "M&eacute;trica de la calidad del software directamente proporcional al n&uacute;mero de clases de un m&oacute;dulo.";
 choices[13][1] = "Relaci&oacute;n que existe entre elementos del mismo m&oacute;dulo.";
 choices[13][2] = "Fan-in.";
 choices[13][3] = "Fan-out.";
 answers[13] = 1;
 units[13] = ['89'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 8904. ";
 preguntaids[13] = 8904


//  Id pregunta: 7053 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del dise&ntilde;o estructurado de un proyecto de ingenier&iacute;a software?";
 choices[14]= new Array();
 choices[14][0] = "Minimizar el coste asociado al mantenimiento.";
 choices[14][1] = "M&aacute;ximo acoplamiento.";
 choices[14][2] = "M&aacute;xima inteligibilidad del sistema.";
 choices[14][3] = "Integraci&oacute;n del sistema.";
 answers[14] = 1;
 units[14] = ['89'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 7053. ";
 preguntaids[14] = 7053


//  Id pregunta: 7189 Año de creación de pregunta: 2010
 questions[15]= "16)  UMLSec:";
 choices[15]= new Array();
 choices[15][0] = "Se utiliza en el desarrollo de software para modelizar pol&iacute;ticas de control de acceso, integr&aacute;ndolas en el sistema desarrollado.";
 choices[15][1] = "Es una metodolog&iacute;a para el an&aacute;lisis y la gesti&oacute;n de riesgos en proyectos de desarrollo orientado a objetos.";
 choices[15][2] = "Es sin&oacute;nimo de SecureUML.";
 choices[15][3] = "Ninguna de las anteriores.";
 answers[15] = 3;
 units[15] = ['89'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7189. Castilla La Mancha 2009";
 preguntaids[15] = 7189


//  Id pregunta: 6217 Año de creación de pregunta: 2003
 questions[16]= "17)  En un dise&ntilde;o de Software es deseable que exista entre los distintos m&oacute;dulos que lo componen:";
 choices[16]= new Array();
 choices[16][0] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&aacute;xima.";
 choices[16][1] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&iacute;nima.";
 choices[16][2] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&aacute;xima.";
 choices[16][3] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&iacute;nima.";
 answers[16] = 2;
 units[16] = ['89'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6217. Examen TIC A Castilla La Mancha 2007";
 preguntaids[16] = 6217


//  Id pregunta: 9846 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Qu&eacute; es el fan-out en dise&ntilde;o estructurado?";
 choices[17]= new Array();
 choices[17][0] = "El grado de acoplamiento externo.";
 choices[17][1] = "El n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[17][2] = "El grado de absorci&oacute;n.";
 choices[17][3] = "El n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 answers[17] = 1;
 units[17] = ['89'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 9846. ";
 preguntaids[17] = 9846


//  Id pregunta: 10751 Año de creación de pregunta: 2015
 questions[18]= "19)  En el dise&ntilde;o estructurado, el acoplamiento normal o simple entre dos m&oacute;dulos de software consiste en:";
 choices[18]= new Array();
 choices[18][0] = "Ambos m&oacute;dulos utilizan las mismas estructuras de datos.";
 choices[18][1] = "Un m&oacute;dulo genera informaci&oacute;n de control para el otro m&oacute;dulo.";
 choices[18][2] = "Un m&oacute;dulo se comunica con el otro mediante paso de par&aacute;metros.";
 choices[18][3] = "Son falsas todas las anteriores.";
 answers[18] = 2;
 units[18] = ['89'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10751. ";
 preguntaids[18] = 10751


//  Id pregunta: 10038 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Tipos Abstractos de Datos (TAD) es correcta?";
 choices[19]= new Array();
 choices[19][0] = "Los TAD describen datos simples abstractos en funci&oacute;n de las operaciones que pueden efectuar, dejando a un lado su implementaci&oacute;n.";
 choices[19][1] = "Las listas son TAD caracterizados por incluir elementos homog&eacute;neos relacionados linealmente, con un antecesor y un sucesor, a excepci&oacute;n del primer y &uacute;ltimo elemento, salvo en el caso de listas circulares.";
 choices[19][2] = "Los &aacute;rboles son TAD en los que cada nodo se caracteriza por su grado de entrada (n&uacute;mero de arcos que llegan al nodo) y su grado de salida (n&uacute;mero de arcos que salen del nodo). Existen &aacute;rboles dirigidos y no dirigidos.";
 choices[19][3] = "Dado un grafo, el orden del mismo es el n&uacute;mero mayor de arcos o aristas de sus nodos.";
 answers[19] = 1;
 units[19] = ['89'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 10038. Examen TIC A2 2014";
 preguntaids[19] = 10038


//  Id pregunta: 5459 Año de creación de pregunta: 2007
 questions[20]= "21)  Las t&eacute;cnicas de ingenier&iacute;a del software de &ldquo;sala limpia&rdquo; (cleanroom):";
 choices[20]= new Array();
 choices[20][0] = "Enfatizan la prevenci&oacute;n de defectos sobre la correcci&oacute;n de los defectos.";
 choices[20][1] = "Minimizan las pr&aacute;cticas de verificaci&oacute;n formal.";
 choices[20][2] = "No precisan un proceso de desarrollo del software bien definido.";
 choices[20][3] = "Requieren que cada miembro del equipo de desarrollo tenga una responsabilidad &uacute;nica.";
 answers[20] = 0;
 units[20] = ['89'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 5459. ";
 preguntaids[20] = 5459


//  Id pregunta: 7049 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Qu&eacute; se entiende por acoplamiento en el contexto del dise&ntilde;o de un sistema transaccional?";
 choices[21]= new Array();
 choices[21][0] = "Indica el grado de interdependencia entre los m&oacute;dulos.";
 choices[21][1] = "Indica la relaci&oacute;n que existe entre los elementos de un mismo m&oacute;dulo.";
 choices[21][2] = "Indica c&oacute;mo se relacionan las entidades de datos del sistema.";
 choices[21][3] = "Ninguna de las anteriores.";
 answers[21] = 0;
 units[21] = ['89'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 7049. ";
 preguntaids[21] = 7049


//  Id pregunta: 8457 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[22]= new Array();
 choices[22][0] = "Lisp";
 choices[22][1] = "Perl";
 choices[22][2] = "Php";
 choices[22][3] = "C++";
 answers[22] = 3;
 units[22] = ['87', '88', '89'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 8457. ";
 preguntaids[22] = 8457


//  Id pregunta: 6671 Año de creación de pregunta: 2009
 questions[23]= "24)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[23]= new Array();
 choices[23][0] = "Strategy.";
 choices[23][1] = "State.";
 choices[23][2] = "Observer.";
 choices[23][3] = "Command.";
 answers[23] = 2;
 units[23] = ['89'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 6671. MAP 2008 A1";
 preguntaids[23] = 6671


//  Id pregunta: 8903 Año de creación de pregunta: 2013
 questions[24]= "25)  &iquest;Qu&eacute; es el acoplamiento entre m&oacute;dulos?:";
 choices[24]= new Array();
 choices[24][0] = "Fan-in.";
 choices[24][1] = "Fan-out.";
 choices[24][2] = "Grado de interdependencia entre m&oacute;dulos.";
 choices[24][3] = "N&uacute;mero de clases repetidas en los dos m&oacute;dulos.";
 answers[24] = 2;
 units[24] = ['89'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 8903. ";
 preguntaids[24] = 8903


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


//  Id pregunta: 6258 Año de creación de pregunta: 2003
 questions[26]= "27)  En los diagramas de estructura, pertenecientes al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones no es un tipo de cupla (comunicaci&oacute;n entre m&oacute;dulos)?";
 choices[26]= new Array();
 choices[26][0] = "Cupla de Datos.";
 choices[26][1] = "Cupla de Funciones.";
 choices[26][2] = "Cupla Modificada.";
 choices[26][3] = "Cupla de Resultados.";
 answers[26] = 1;
 units[26] = ['89'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6258. ";
 preguntaids[26] = 6258


//  Id pregunta: 7007 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[27]= new Array();
 choices[27][0] = "Facade, Composite, Bridge";
 choices[27][1] = "Strategy, Proxy, Iterator";
 choices[27][2] = "Builder, Abstract Factory, Prototype";
 choices[27][3] = "MVC, Session, Router";
 answers[27] = 2;
 units[27] = ['89'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 7007. TIC-B 2009 bloque desarrollo";
 preguntaids[27] = 7007


//  Id pregunta: 7762 Año de creación de pregunta: 2010
 questions[28]= "29)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[28]= new Array();
 choices[28][0] = "Strategy.";
 choices[28][1] = "State.";
 choices[28][2] = "Observer.";
 choices[28][3] = "Command.";
 answers[28] = 2;
 units[28] = ['89'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7762. ";
 preguntaids[28] = 7762


//  Id pregunta: 7055 Año de creación de pregunta: 2010
 questions[29]= "30)  No es un tipo de cohesi&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Cohesi&oacute;n com&uacute;n.";
 choices[29][1] = "Cohesi&oacute;n funcional.";
 choices[29][2] = "Cohesi&oacute;n comunicacional.";
 choices[29][3] = "Cohesi&oacute;n l&oacute;gica.";
 answers[29] = 0;
 units[29] = ['89'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7055. ";
 preguntaids[29] = 7055


//  Id pregunta: 5639 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Qu&eacute; es el metamodelo SPEM?";
 choices[30]= new Array();
 choices[30][0] = "Un lenguaje gen&eacute;rico que extiende UML para el modelado descriptivo de procesos de software.";
 choices[30][1] = "Un m&eacute;trica de software para Ia medici&oacute;n de proyectos.";
 choices[30][2] = "Un consorcio mundial para la creaci&oacute;n de lenguajes de modelado.";
 choices[30][3] = "Un est&aacute;ndar para la creaci&oacute;n de roles de usuario.";
 answers[30] = 0;
 units[30] = ['89'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 5639. ";
 preguntaids[30] = 5639


//  Id pregunta: 7187 Año de creación de pregunta: 2010
 questions[31]= "32)  Indique cu&aacute;l de los siguientes enunciados sobre principios y conceptos fundamentales del Dise&ntilde;o del Software es FALSO:";
 choices[31]= new Array();
 choices[31][0] = "Los principios del dise&ntilde;o s&oacute;lo sirven de gu&iacute;a al ingeniero del software al principio del proceso de dise&ntilde;o. Los conceptos de dise&ntilde;o no proporcionan los criterios b&aacute;sicos para la calidad del dise&ntilde;o.";
 choices[31][1] = "La modularidad (tanto en el programa como en los datos) y el concepto de abstracci&oacute;n permiten que el dise&ntilde;ador simplifique y reutilice los componentes del software.";
 choices[31][2] = "El refinamiento proporciona un mecanismo para representar sucesivas capas de datos funcionales.";
 choices[31][3] = "La ocultaci&oacute;n de informaci&oacute;n y la independencia funcional proporcionan la heur&iacute;stica para conseguir una modularidad efectiva.";
 answers[31] = 0;
 units[31] = ['89'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7187. Castilla La Mancha 2009";
 preguntaids[31] = 7187


//  Id pregunta: 6259 Año de creación de pregunta: 2003
 questions[32]= "33)  El acoplamiento por estampado implica:";
 choices[32]= new Array();
 choices[32][0] = "Comunicaci&oacute;n entre dos m&oacute;dulos a trav&eacute;s de un tercer m&oacute;dulo intermedio.";
 choices[32][1] = "El aislamiento de los m&oacute;dulos respecto de una estructura de datos reservada.";
 choices[32][2] = "Comunicaci&oacute;n entre m&oacute;dulos haciendo referencia a la misma estructura de datos.";
 choices[32][3] = "Ninguna de las anteriores es correcta.";
 answers[32] = 2;
 units[32] = ['89'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6259. ";
 preguntaids[32] = 6259


//  Id pregunta: 6958 Año de creación de pregunta: 2010
 questions[33]= "34)  Relacionado con el An&aacute;lisis y Dise&ntilde;o Orientado a Objetos, &iquest;Cu&aacute;l de los siguientes patrones de dise&ntilde;o corresponde a la subclasificaci&oacute;n patrones de creaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Adapter";
 choices[33][1] = "Bridge";
 choices[33][2] = "Singleton";
 choices[33][3] = "Composite";
 answers[33] = 2;
 units[33] = ['89'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 6958. TIC-B 2009 bloque desarrollo";
 preguntaids[33] = 6958


//  Id pregunta: 5435 Año de creación de pregunta: 2007
 questions[34]= "35)  Indique cu&aacute;l de los siguientes no es un principio de Wasserman";
 choices[34]= new Array();
 choices[34][0] = "Identificar estructuras de datos y operaciones";
 choices[34][1] = "Las decisiones de dise&ntilde;o de datos a bajo nivel debe realizarse tan pronto como sea posible";
 choices[34][2] = "Biblioteca de estructuras de datos &uacute;tiles y sus operaciones";
 choices[34][3] = "An&aacute;lisis sistem&aacute;tico de los datos";
 answers[34] = 1;
 units[34] = ['89'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 5435. ";
 preguntaids[34] = 5435


//  Id pregunta: 7047 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Qu&eacute; caracter&iacute;sticas se exige a un sistema OLTP?";
 choices[35]= new Array();
 choices[35][0] = "Capacidad del sistema para recuperar r&aacute;pidamente su funcionamiento en caso de fallo.";
 choices[35][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[35][2] = "Si una transacci&oacute;n resulta abortada, debe restituirse el anterior estado v&aacute;lido de los datos.";
 choices[35][3] = "Todas las anteriores.";
 answers[35] = 3;
 units[35] = ['89'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7047. ";
 preguntaids[35] = 7047


//  Id pregunta: 6260 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[36]= new Array();
 choices[36][0] = "El fan-out de un m&oacute;dulo es usado como medida de complejidad.";
 choices[36][1] = "El fan-out es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[36][2] = "El fan-out de un m&oacute;dulo es una medida de reusabilidad.";
 choices[36][3] = "Todas las anteriores son ciertas.";
 answers[36] = 0;
 units[36] = ['89'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6260. ";
 preguntaids[36] = 6260


//  Id pregunta: 6664 Año de creación de pregunta: 2009
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[37]= new Array();
 choices[37][0] = "Vista de Componentes.";
 choices[37][1] = "Vista de Despliegue.";
 choices[37][2] = "Vista de Casos de Uso.";
 choices[37][3] = "Vista de Flujo de Datos.";
 answers[37] = 3;
 units[37] = ['89'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6664. MAP 2008 A1";
 preguntaids[37] = 6664


//  Id pregunta: 8040 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Qu&eacute; tipo de nodo de control se emplea en un diagrama de actividades de UML 2.0 para indicar la sincronizaci&oacute;n de varios flujos concurrentes en uno solo?";
 choices[38]= new Array();
 choices[38][0] = "Divisi&oacute;n (fork node).";
 choices[38][1] = "Bifurcaci&oacute;n (decision node).";
 choices[38][2] = "Fusi&oacute;n (merge node).";
 choices[38][3] = "Union (join node).";
 answers[38] = 3;
 units[38] = ['89'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 8040. Examen TIC A2 2010";
 preguntaids[38] = 8040


//  Id pregunta: 8036 Año de creación de pregunta: 2011
 questions[39]= "40)  Elija la opci&oacute;n que corresponde a una relaci&oacute;n entre casos de usos en UMl:";
 choices[39]= new Array();
 choices[39][0] = "Extiende.";
 choices[39][1] = "Referencia.";
 choices[39][2] = "Hereda.";
 choices[39][3] = "Vincula.";
 answers[39] = 0;
 units[39] = ['89'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 8036. Examen TIC A2 2010";
 preguntaids[39] = 8036


//  Id pregunta: 7058 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes no es un tipo de vista en UML?";
 choices[40]= new Array();
 choices[40][0] = "Vista de Casos de Uso.";
 choices[40][1] = "Vista de Interacci&oacute;n";
 choices[40][2] = "Vista de Clases";
 choices[40][3] = "Vista de Actividad";
 answers[40] = 2;
 units[40] = ['89'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7058. ";
 preguntaids[40] = 7058


//  Id pregunta: 6037 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[41]= new Array();
 choices[41][0] = "Diagrama de estado.";
 choices[41][1] = "Diagrama de actividad.";
 choices[41][2] = "Diagrama de despliegue.";
 choices[41][3] = "Diagrama de secuencia.";
 answers[41] = 3;
 units[41] = ['89'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6037. TIC B 2007";
 preguntaids[41] = 6037


//  Id pregunta: 5543 Año de creación de pregunta: 2007
 questions[42]= "43)  En el an&aacute;lisis y dise&ntilde;o de software, el flujo de transacci&oacute;n es una t&eacute;cnica de:";
 choices[42]= new Array();
 choices[42][0] = "Refinamiento progresivo.";
 choices[42][1] = "Descomposici&oacute;n modular.";
 choices[42][2] = "An&aacute;lisis estructurado.";
 choices[42][3] = "Dise&ntilde;o estructurado.";
 answers[42] = 3;
 units[42] = ['89'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 5543. ";
 preguntaids[42] = 5543


//  Id pregunta: 6988 Año de creación de pregunta: 2010
 questions[43]= "44)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que representa y externaliza el estado interno de un objeto sin violar la encapsulaci&oacute;n, de forma que &eacute;ste puede volver a dicho estado m&aacute;s tarde:";
 choices[43]= new Array();
 choices[43][0] = "Spider.";
 choices[43][1] = "State.";
 choices[43][2] = "Observer.";
 choices[43][3] = "Memento.";
 answers[43] = 3;
 units[43] = ['89'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6988. TIC-B 2009 bloque desarrollo";
 preguntaids[43] = 6988


//  Id pregunta: 10045 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[44]= new Array();
 choices[44][0] = "Diagrama de clases.";
 choices[44][1] = "Diagrama de objetos.";
 choices[44][2] = "Diagrama de despliegue.";
 choices[44][3] = "Diagrama de actividades.";
 answers[44] = 3;
 units[44] = ['85', '89'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10045. Examen TIC A2 2014";
 preguntaids[44] = 10045


//  Id pregunta: 7188 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Qu&eacute; elementos de los siguientes NO pertenece a los diagramas de casos de uso?";
 choices[45]= new Array();
 choices[45][0] = "Interfaces.";
 choices[45][1] = "Actor.";
 choices[45][2] = "Paquete.";
 choices[45][3] = "Relaci&oacute;n.";
 answers[45] = 0;
 units[45] = ['89'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7188. Castilla La Mancha 2009";
 preguntaids[45] = 7188


//  Id pregunta: 7054 Año de creación de pregunta: 2010
 questions[46]= "47)  No es un tipo de acoplamiento:";
 choices[46]= new Array();
 choices[46][0] = "Acoplamiento com&uacute;n.";
 choices[46][1] = "Acoplamiento normal.";
 choices[46][2] = "Acoplamiento de contenido.";
 choices[46][3] = "Todos lo son.";
 answers[46] = 3;
 units[46] = ['89'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 7054. ";
 preguntaids[46] = 7054


//  Id pregunta: 7745 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?";
 choices[47]= new Array();
 choices[47][0] = "Entidad externa.";
 choices[47][1] = "Proceso.";
 choices[47][2] = "Funci&oacute;n.";
 choices[47][3] = "Almac&eacute;n de datos.";
 answers[47] = 2;
 units[47] = ['89'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7745. ";
 preguntaids[47] = 7745


//  Id pregunta: 5923 Año de creación de pregunta: 2007
 questions[48]= "49)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[48]= new Array();
 choices[48][0] = "Objetos, casos de uso y actividades.";
 choices[48][1] = "Actores, objetos y relaciones.";
 choices[48][2] = "Casos de uso, actores y relaciones.";
 choices[48][3] = "Actores, casos de uso y actividades.";
 answers[48] = 2;
 units[48] = ['89'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 5923. examen TIC 2006";
 preguntaids[48] = 5923


//  Id pregunta: 10133 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Qu&eacute; nombre recibe, en el paradigma de orientaci&oacute;n a objetos, el principio de dise&ntilde;o que establece que las interfaces definidas deben tener una finalidad espec&iacute;fica?";
 choices[49]= new Array();
 choices[49][0] = "Principio abierto-cerrado.";
 choices[49][1] = "Principio de segregaci&oacute;n de interfaces.";
 choices[49][2] = "Principio de responsabilidad simple.";
 choices[49][3] = "Principio de sustituci&oacute;n.";
 answers[49] = 1;
 units[49] = ['89'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10133. Examen TIC A1 2014";
 preguntaids[49] = 10133


//  Id pregunta: 10823 Año de creación de pregunta: 2015
 questions[50]= "51)  Entre los diagramas de comportamiento de UML se encuentran:";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de clases, diagrama de secuencia y diagrama de componentes.";
 choices[50][1] = "Diagrama de tiempos, diagrama de secuencia y diagrama de componentes.";
 choices[50][2] = "Diagrama de paquetes, diagrama de actividad y diagrama de perfil.";
 choices[50][3] = "Todas las anteriores son falsas";
 answers[50] = 3;
 units[50] = ['89'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10823. ";
 preguntaids[50] = 10823


//  Id pregunta: 6267 Año de creación de pregunta: 2003
 questions[51]= "52)  Dentro de los distintos elementos de UML, &iquest;cu&aacute;l de los siguientes es un elemento estructural?";
 choices[51]= new Array();
 choices[51][0] = "Clase.";
 choices[51][1] = "Interacci&oacute;n.";
 choices[51][2] = "M&aacute;quina de estados.";
 choices[51][3] = "Paquete.";
 answers[51] = 0;
 units[51] = ['89'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6267. ";
 preguntaids[51] = 6267


//  Id pregunta: 5458 Año de creación de pregunta: 2007
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo que fomentara la generaci&oacute;n de arquitecturas de referencia en la ingenier&iacute;a del software?";
 choices[52]= new Array();
 choices[52][0] = "Los desarrolladores futuros tienen que entender c&oacute;mo programar las aplicaciones futuras en ese dominio.";
 choices[52][1] = "La comunidad de usuarios desea intercambiar componentes e interoperar entre sistemas.";
 choices[52][2] = "Hay potenciales clientes que necesitan una base cierta para comparar entre sistemas.";
 choices[52][3] = "Los aspectos clave de un dominio de aplicaci&oacute;n permanecen invariantes en el tiempo.";
 answers[52] = 3;
 units[52] = ['89'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 5458. ";
 preguntaids[52] = 5458


//  Id pregunta: 7056 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Qu&eacute; es el Fan-Out en el contexto de dise&ntilde;o de un proyecto de ingenier&iacute;a software?";
 choices[53]= new Array();
 choices[53][0] = "Es una medida de reusabilidad. Es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[53][1] = "Es una medida de complejidad. Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[53][2] = "Es una medida de mantenibilidad. Es el n&uacute;mero de m&oacute;dulos iguales.";
 choices[53][3] = "Ninguna de las anteriores.";
 answers[53] = 1;
 units[53] = ['89'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7056. ";
 preguntaids[53] = 7056


//  Id pregunta: 8905 Año de creación de pregunta: 2013
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[54]= new Array();
 choices[54][0] = "Diagrama de secuencia.";
 choices[54][1] = "Diagrama de comunicaci&oacute;n.";
 choices[54][2] = "Diagrama de transici&oacute;n de estados.";
 choices[54][3] = "Diagrama de elementos.";
 answers[54] = 3;
 units[54] = ['89'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 8905. ";
 preguntaids[54] = 8905


//  Id pregunta: 7052 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de dise&ntilde;o de sistemas de tiempo real?";
 choices[55]= new Array();
 choices[55][0] = "Rational Rose-RT.";
 choices[55][1] = "PERTS.";
 choices[55][2] = "TimeWiz.";
 choices[55][3] = "ADA.";
 answers[55] = 3;
 units[55] = ['89'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 7052. ";
 preguntaids[55] = 7052


//  Id pregunta: 8458 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[56]= new Array();
 choices[56][0] = "Singleton";
 choices[56][1] = "Observer";
 choices[56][2] = "Proxy";
 choices[56][3] = "Prototype";
 answers[56] = 1;
 units[56] = ['89'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 8458. ";
 preguntaids[56] = 8458


//  Id pregunta: 6023 Año de creación de pregunta: 2003
 questions[57]= "58)  Dentro de la t&eacute;cnica de desarrollo de sistemas de informaci&oacute;n denominada Diagrama de Interacci&oacute;n, el periodo de tiempo en el cual el objeto se encuentra ejecutando alguna operaci&oacute;n en un diagrama de secuencia se denomina:";
 choices[57]= new Array();
 choices[57][0] = "L&iacute;nea de vida.";
 choices[57][1] = "Foco de control.";
 choices[57][2] = "Tiempo de latencia.";
 choices[57][3] = "Per&iacute;odo de acci&oacute;n.";
 answers[57] = 1;
 units[57] = ['89'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6023. TIC B 2007";
 preguntaids[57] = 6023


//  Id pregunta: 8038 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes diagramas NO aparece recogido en UML?";
 choices[58]= new Array();
 choices[58][0] = "Diagrama de secuencia.";
 choices[58][1] = "Diagrama de actividades.";
 choices[58][2] = "Diagrama de estados.";
 choices[58][3] = "Diagrama de perspectiva.";
 answers[58] = 3;
 units[58] = ['89'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 8038. Examen TIC A2 2010";
 preguntaids[58] = 8038


//  Id pregunta: 10355 Año de creación de pregunta: 2015
 questions[59]= "60)  Seleccione la respuesta verdadera:";
 choices[59]= new Array();
 choices[59][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[59][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[59][2] = "Las dos anteriores son verdaderas";
 choices[59][3] = "Todas son falsas";
 answers[59] = 0;
 units[59] = ['89'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10355. ";
 preguntaids[59] = 10355


//  Id pregunta: 9269 Año de creación de pregunta: 2014
 questions[60]= "61)  Se&ntilde;ale la respuesta INCORRECTA sobre patrones de dise&ntilde;o orientado a objetos.";
 choices[60]= new Array();
 choices[60][0] = "Facilitan el aprendizaje de las nuevas generaciones de dise&ntilde;adores condensando conocimiento ya existente.";
 choices[60][1] = "Imponen ciertas alternativas de dise&ntilde;o frente a otras.";
 choices[60][2] = "Permiten la creatividad inherente al proceso de dise&ntilde;o.";
 choices[60][3] = "Estandarizan el modo en que se realiza el dise&ntilde;o.";
 answers[60] = 1;
 units[60] = ['89'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 9269. Examen TIC A1 2013";
 preguntaids[60] = 9269


//  Id pregunta: 7048 Año de creación de pregunta: 2010
 questions[61]= "62)  &iquest;En qu&eacute; consiste el m&eacute;todo SSD (Structured System Design)?";
 choices[61]= new Array();
 choices[61][0] = "Es un m&eacute;todo de programaci&oacute;n orientado a objetos.";
 choices[61][1] = "Es un m&eacute;todo que permite obtener un sistema software a partir de su diagrama de datos.";
 choices[61][2] = "Es un m&eacute;todo de dise&ntilde;o que permite obtener la estructura de un sistema software a partir de un DFD que describa su funcionamiento.";
 choices[61][3] = "Es una tecnolog&iacute;a de objetos distribuidos.";
 answers[61] = 2;
 units[61] = ['89'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 7048. ";
 preguntaids[61] = 7048


//  Id pregunta: 10046 Año de creación de pregunta: 2015
 questions[62]= "63)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[62]= new Array();
 choices[62][0] = "Abstracci&oacute;n.";
 choices[62][1] = "Polimorfismo.";
 choices[62][2] = "Herencia.";
 choices[62][3] = "Encapsulamiento.";
 answers[62] = 3;
 units[62] = ['89'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 10046. Examen TIC A2 2014";
 preguntaids[62] = 10046


//  Id pregunta: 7498 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programaci&oacute;n orientado a objetos?";
 choices[63]= new Array();
 choices[63][0] = "Encapsulaci&oacute;n.";
 choices[63][1] = "Herencia.";
 choices[63][2] = "Polimorfismo.";
 choices[63][3] = "Historicismo.";
 answers[63] = 3;
 units[63] = ['89'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 7498. Map 2005";
 preguntaids[63] = 7498


//  Id pregunta: 6704 Año de creación de pregunta: 2009
 questions[64]= "65)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[64]= new Array();
 choices[64][0] = "Un objeto del que obtenemos referencias a otros";
 choices[64][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario";
 choices[64][2] = "Un objeto del que s&oacute;lo existe una instancia";
 choices[64][3] = "Una clase que no se puede instanciar";
 answers[64] = 2;
 units[64] = ['89'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 6704. MAP 2008 A1";
 preguntaids[64] = 6704


//  Id pregunta: 8054 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes lenguajes NO es un lenguaje que sigue el modelo de orientaci&oacute;n a objetos basados en clases?";
 choices[65]= new Array();
 choices[65][0] = "JavaScript.";
 choices[65][1] = "Java.";
 choices[65][2] = "C++.";
 choices[65][3] = "Eiffel.";
 answers[65] = 0;
 units[65] = ['85', '89'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 8054. Examen TIC A2 2010";
 preguntaids[65] = 8054


//  Id pregunta: 8908 Año de creación de pregunta: 2013
 questions[66]= "67)  &iquest;Cu&aacute;l es el est&aacute;ndar para UML 2?";
 choices[66]= new Array();
 choices[66][0] = "ISO/IEC 19501.";
 choices[66][1] = "ISO/IEC 19505.";
 choices[66][2] = "ISO/IEC 80211.";
 choices[66][3] = "ISO/IEC 80216.";
 answers[66] = 1;
 units[66] = ['89'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 8908. ";
 preguntaids[66] = 8908


//  Id pregunta: 9847 Año de creación de pregunta: 2015
 questions[67]= "68)  Indique la respuesta correcta:";
 choices[67]= new Array();
 choices[67][0] = "UML est&aacute; dise&ntilde;ado para utilizarse exclusivamente con la metodolog&iacute;a RUP.";
 choices[67][1] = "UML es un m&oacute;dulo de OMT (Object-Modeling Technique)";
 choices[67][2] = "UML es un lenguaje de programaci&oacute;n estructurada.";
 choices[67][3] = "UML puede describir m&eacute;todos o procesos.";
 answers[67] = 3;
 units[67] = ['89'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 9847. ";
 preguntaids[67] = 9847


//  Id pregunta: 6156 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Qu&eacute; propiedad no es inherente a la orientaci&oacute;n a objetos?";
 choices[68]= new Array();
 choices[68][0] = "Polimorfismo.";
 choices[68][1] = "Volatilidad.";
 choices[68][2] = "Herencia.";
 choices[68][3] = "Encapsulaci&oacute;n.";
 answers[68] = 1;
 units[68] = ['89'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6156. Examen TIC A1 MAP 2007";
 preguntaids[68] = 6156


//  Id pregunta: 5554 Año de creación de pregunta: 2007
 questions[69]= "70)  El diagrama de transici&oacute;n de estados es una notaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Est&aacute;tica.";
 choices[69][1] = "H&iacute;brida.";
 choices[69][2] = "Din&aacute;mica.";
 choices[69][3] = "Estructural.";
 answers[69] = 2;
 units[69] = ['89'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 5554. Examen TIC MAP B 2006";
 preguntaids[69] = 5554


//  Id pregunta: 8906 Año de creación de pregunta: 2013
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes diagramas contempla UML 2.0?";
 choices[70]= new Array();
 choices[70][0] = "De actividad, DFD, de casos de uso, de secuencia, de comunicaci&oacute;n.";
 choices[70][1] = "De casos de uso, de actividad, de secuencia, de comunicaci&oacute;n, de clases.";
 choices[70][2] = "De casos de uso, entidad-relaci&oacute;n, de secuencia, de clases, de comunicaci&oacute;n.";
 choices[70][3] = "De clases, de herencia compuesta, de secuencia, de comunicaci&oacute;n, de clases.";
 answers[70] = 1;
 units[70] = ['89'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 8906. ";
 preguntaids[70] = 8906


//  Id pregunta: 8909 Año de creación de pregunta: 2013
 questions[71]= "72)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[71]= new Array();
 choices[71][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[71][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[71][2] = "Es lo mismo que la herencia repetida.";
 choices[71][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[71] = 1;
 units[71] = ['89'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 8909. ";
 preguntaids[71] = 8909


//  Id pregunta: 6649 Año de creación de pregunta: 2009
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[72]= new Array();
 choices[72][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[72][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[72][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[72][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[72] = 2;
 units[72] = ['89'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 6649. ";
 preguntaids[72] = 6649


//  Id pregunta: 5735 Año de creación de pregunta: 2007
 questions[73]= "74)  &iquest;Cu&aacute;les de los siguientes diagramas dan una perspectiva est&aacute;tica de un sistema?";
 choices[73]= new Array();
 choices[73][0] = "Diagrama de clases, diagrama de componentes y diagramas de colaboraciones.";
 choices[73][1] = "Diagramas de clase, diagramas de componentes y diagramas de distribuci&oacute;n.";
 choices[73][2] = "Diagramas de clases, de herencia, de encapsulaci&oacute;n y de polimorfismo.";
 choices[73][3] = "Diagramas de secuencias y diagramas de componentes.";
 answers[73] = 1;
 units[73] = ['89'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 5735. ";
 preguntaids[73] = 5735


//  Id pregunta: 10029 Año de creación de pregunta: 2015
 questions[74]= "75)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[74]= new Array();
 choices[74][0] = "Diagrama de secuencia.";
 choices[74][1] = "Diagrama de colaboraci&oacute;n.";
 choices[74][2] = "Diagrama de clases.";
 choices[74][3] = "Diagrama de Casos de Uso.";
 answers[74] = 3;
 units[74] = ['91', '85', '89'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 10029. Examen TIC A2 2014";
 preguntaids[74] = 10029


