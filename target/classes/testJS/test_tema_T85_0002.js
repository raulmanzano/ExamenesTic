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
//  Id pregunta: 5538 Año de creación de pregunta: 2007
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es propia del modelado de sistemas?";
 choices[0]= new Array();
 choices[0][0] = "Descomposici&oacute;n";
 choices[0][1] = "Partici&oacute;n en clases de equivalencia";
 choices[0][2] = "Aproximaciones sucesivas";
 choices[0][3] = "An&aacute;lisis del dominio";
 answers[0] = 1;
 units[0] = ['85'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 5538. ";
 preguntaids[0] = 5538


//  Id pregunta: 4184 Año de creación de pregunta: 2006
 questions[1]= "2)  En el an&aacute;lisis orientado a objetos, una clase que no tenga instancias se denomina:";
 choices[1]= new Array();
 choices[1][0] = "No puede darse";
 choices[1][1] = "Clase padre";
 choices[1][2] = "Subclase";
 choices[1][3] = "Clase abstracta";
 answers[1] = 3;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 4184. ";
 preguntaids[1] = 4184


//  Id pregunta: 5542 Año de creación de pregunta: 2007
 questions[2]= "3)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[2]= new Array();
 choices[2][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[2][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[2][2] = "Establecer claramente las especificaciones del producto.";
 choices[2][3] = "Integrar los distintos componentes del sistema.";
 answers[2] = 2;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 5542. ";
 preguntaids[2] = 5542


//  Id pregunta: 3963 Año de creación de pregunta: 2002
 questions[3]= "4)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[3]= new Array();
 choices[3][0] = "Agregaci&oacute;n.";
 choices[3][1] = "Coherencia.";
 choices[3][2] = "Herencia.";
 choices[3][3] = "Dependencia.";
 answers[3] = 1;
 units[3] = ['85', '89'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3963. ";
 preguntaids[3] = 3963


//  Id pregunta: 5468 Año de creación de pregunta: 2007
 questions[4]= "5)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[4]= new Array();
 choices[4][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[4][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[4][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[4][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[4] = 1;
 units[4] = ['85'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 5468. ";
 preguntaids[4] = 5468


//  Id pregunta: 3934 Año de creación de pregunta: 2002
 questions[5]= "6)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[5]= new Array();
 choices[5][0] = "Iteraci&oacute;n";
 choices[5][1] = "Selecci&oacute;n";
 choices[5][2] = "Composici&oacute;n";
 choices[5][3] = "Opcionalidad";
 answers[5] = 3;
 units[5] = ['85', '86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3934. ";
 preguntaids[5] = 3934


//  Id pregunta: 3977 Año de creación de pregunta: 2002
 questions[6]= "7)  Una entidad externa en un DFD:";
 choices[6]= new Array();
 choices[6][0] = "No debe figurar en el DFD";
 choices[6][1] = "No se tiene en consideraci&oacute;n";
 choices[6][2] = "Interactua con el sistema";
 choices[6][3] = "Se relaciona con otras entidades externas";
 answers[6] = 2;
 units[6] = ['85', '86'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3977. ";
 preguntaids[6] = 3977


//  Id pregunta: 4175 Año de creación de pregunta: 2006
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[7]= new Array();
 choices[7][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[7][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[7][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[7][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[7] = 0;
 units[7] = ['85', '86'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 4175. ";
 preguntaids[7] = 4175


//  Id pregunta: 5469 Año de creación de pregunta: 2007
 questions[8]= "9)  En el An&aacute;lisis estructurado moderno, la &ldquo;lista de eventos&rdquo; se utiliza para:";
 choices[8]= new Array();
 choices[8][0] = "Mejorar los requisitos de trazabilidad.";
 choices[8][1] = "Construir diagramas Entidad-Historia";
 choices[8][2] = "Documentar las transacciones de datos en el Diagrama Entidad-Relaci&oacute;n.";
 choices[8][3] = "Construir un Diagrama de Flujo de Datos preliminar del sistema.";
 answers[8] = 3;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 5469. ";
 preguntaids[8] = 5469


//  Id pregunta: 5317 Año de creación de pregunta: 2006
 questions[9]= "10)  Protocolo que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos. Esta definici&oacute;n no corresponde con:";
 choices[9]= new Array();
 choices[9][0] = "CORBA";
 choices[9][1] = "SOAP";
 choices[9][2] = "RMI";
 choices[9][3] = "DCOM";
 answers[9] = 3;
 units[9] = ['85'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 5317. ";
 preguntaids[9] = 5317


//  Id pregunta: 3946 Año de creación de pregunta: 2002
 questions[10]= "11)  Para reutilizar &quot;software&quot; es ventajoso utilizar lenguajes de programaci&oacute;n orientados a objetos por la siguiente raz&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Porque son m&aacute;s modernos.";
 choices[10][1] = "Porque permiten agrupar los objetos y las operaciones que se realizan sobre los mismos.";
 choices[10][2] = "Porque permiten recursividad.";
 choices[10][3] = "Porque admiten paso de par&aacute;metros por valor y por referencia.";
 answers[10] = 1;
 units[10] = ['85', '89'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3946. ";
 preguntaids[10] = 3946


//  Id pregunta: 4173 Año de creación de pregunta: 2006
 questions[11]= "12)  Son objetivos que persigue el An&aacute;lisis de Sistemas de Informaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Identificar las necesidades del cliente";
 choices[11][1] = "Crear una definici&oacute;n clara y precisa del sistema, que sea la base para todo lo que sigue despu&eacute;s";
 choices[11][2] = "Establecer las restricciones de coste y tiempo que incidir&aacute;n en el futuro desarrollo";
 choices[11][3] = "Todas las anteriores";
 answers[11] = 3;
 units[11] = ['85'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4173. ";
 preguntaids[11] = 4173


//  Id pregunta: 4183 Año de creación de pregunta: 2006
 questions[12]= "13)  &iquest;C&oacute;mo se denomina la t&eacute;cnica que permite obtener un modelo f&iacute;sico de datos a partir del modelo de clases?";
 choices[12]= new Array();
 choices[12][0] = "Matricial";
 choices[12][1] = "Historia de vidas de las entidades";
 choices[12][2] = "Diagrama de paquetes";
 choices[12][3] = "Reglas de transformaci&oacute;n.";
 answers[12] = 3;
 units[12] = ['85'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4183. ";
 preguntaids[12] = 4183


//  Id pregunta: 4075 Año de creación de pregunta: 2003
 questions[13]= "14)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?";
 choices[13]= new Array();
 choices[13][0] = "Diagrama de despliegue.";
 choices[13][1] = "Diagrama de componentes.";
 choices[13][2] = "Diagrama de descomposici&oacute;n.";
 choices[13][3] = "Diagrama de estructura.";
 answers[13] = 0;
 units[13] = ['85', '89'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4075. EXAMEN CASTILLA LA MANCHA";
 preguntaids[13] = 4075


//  Id pregunta: 5157 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;Qu&eacute; es cierto, en los diagramas de clases?";
 choices[14]= new Array();
 choices[14][0] = "Los atributos se representan debajo en la caja de representaci&oacute;n de la clase";
 choices[14][1] = "Las interfaces se representan mediante carpetas";
 choices[14][2] = "Los atributos se representan en medio  en la caja de representaci&oacute;n de la clase";
 choices[14][3] = "Los atributos se representan  en la zona superior de representaci&oacute;n de la clase";
 answers[14] = 0;
 units[14] = ['85'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 5157. ";
 preguntaids[14] = 5157


//  Id pregunta: 5461 Año de creación de pregunta: 2007
 questions[15]= "16)  Un diagrama de Secuencia de UML:";
 choices[15]= new Array();
 choices[15][0] = "Representa los componentes del sistema y las dependencias existentes entre ellos.";
 choices[15][1] = "Hace hincapi&eacute; en la ordenaci&oacute;n temporal de los mensajes que se intercambian.";
 choices[15][2] = "Establece las relaciones que existen entre los objetos y las clases.";
 choices[15][3] = "Establece los estados y las transiciones entre los estados de los elementos del sistema.";
 answers[15] = 1;
 units[15] = ['85'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 5461. ";
 preguntaids[15] = 5461


//  Id pregunta: 4137 Año de creación de pregunta: 2004
 questions[16]= "17)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[16]= new Array();
 choices[16][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[16][1] = "El modelo esencial de compone de modelo ambiental y modelo de comportamiento";
 choices[16][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[16][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[16] = 3;
 units[16] = ['85', '86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 4137. ";
 preguntaids[16] = 4137


//  Id pregunta: 3846 Año de creación de pregunta: 2002
 questions[17]= "18)  Entre los elementos de un diagrama de flujo de datos tenemos:";
 choices[17]= new Array();
 choices[17][0] = "Entidad externa, proceso, almac&eacute;n de datos y diagrama general";
 choices[17][1] = "Entidad externa, almac&eacute;n de datos y flujo de datos";
 choices[17][2] = "Entidad externa, almac&eacute;n de datos, proceso y flujo de datos";
 choices[17][3] = "Almac&eacute;n de datos, proceso, flujo de datos y diagrama general";
 answers[17] = 2;
 units[17] = ['85', '86'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3846. ";
 preguntaids[17] = 3846


//  Id pregunta: 3908 Año de creación de pregunta: 2002
 questions[18]= "19)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[18]= new Array();
 choices[18][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[18][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[18][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[18][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[18] = 1;
 units[18] = ['85', '89'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3908. ";
 preguntaids[18] = 3908


//  Id pregunta: 3867 Año de creación de pregunta: 2002
 questions[19]= "20)  La dimensi&oacute;n est&aacute;tica del modelo E/R est&aacute; constituida por el siguiente conjunto de objetos con los que describimos la estructura del mundo real:";
 choices[19]= new Array();
 choices[19][0] = "Entidad, interrelaci&oacute;n y atributo";
 choices[19][1] = "Entidad, atributo, dominio y restricci&oacute;n";
 choices[19][2] = "Entidad, interrelaci&oacute;n, dominio, atributo y restricciones del modelo";
 choices[19][3] = "Entidad, interrelaci&oacute;n, domino, atributo y objeto";
 answers[19] = 2;
 units[19] = ['85'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3867. ";
 preguntaids[19] = 3867


//  Id pregunta: 3848 Año de creación de pregunta: 2002
 questions[20]= "21)  Entre los objetivos de los DFDs se encuentra:";
 choices[20]= new Array();
 choices[20][0] = "Hacer referencia al entorno f&iacute;sico";
 choices[20][1] = "Crear un modelo funcional del sistema";
 choices[20][2] = "Representar el &quot;c&oacute;mo se va a hacer el sistema&quot; en lugar del &quot;qu&eacute; se va a hacer en el sistema&quot;";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 1;
 units[20] = ['85', '86'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3848. ";
 preguntaids[20] = 3848


//  Id pregunta: 3862 Año de creación de pregunta: 2002
 questions[21]= "22)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[21]= new Array();
 choices[21][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[21][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[21][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[21][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[21] = 3;
 units[21] = ['85', '86'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3862. ";
 preguntaids[21] = 3862


//  Id pregunta: 3910 Año de creación de pregunta: 2002
 questions[22]= "23)  La t&eacute;cnica conocida como Diagrama de Flujo de Datos, se utiliza:";
 choices[22]= new Array();
 choices[22][0] = "Para modelizaci&oacute;n de funciones";
 choices[22][1] = "S&oacute;lo para modelizaci&oacute;n de sistemas en tiempo real";
 choices[22][2] = "Para modelizaci&oacute;n de datos";
 choices[22][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[22] = 3;
 units[22] = ['85', '86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3910. ";
 preguntaids[22] = 3910


//  Id pregunta: 3958 Año de creación de pregunta: 2002
 questions[23]= "24)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[23]= new Array();
 choices[23][0] = "El dominio de la informaci&oacute;n";
 choices[23][1] = "La subdivisi&oacute;n del problema";
 choices[23][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[23][3] = "Los tres anteriores";
 answers[23] = 3;
 units[23] = ['84', '85', '86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3958. ";
 preguntaids[23] = 3958


//  Id pregunta: 3928 Año de creación de pregunta: 2002
 questions[24]= "25)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[24]= new Array();
 choices[24][0] = "Dise&ntilde;o de prototipos";
 choices[24][1] = "Tests finales";
 choices[24][2] = "An&aacute;lisis de requerimientos";
 choices[24][3] = "Ninguno de ellos";
 answers[24] = 2;
 units[24] = ['85', '86'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3928. ";
 preguntaids[24] = 3928


//  Id pregunta: 4182 Año de creación de pregunta: 2006
 questions[25]= "26)  &iquest;Qu&eacute; se entiende por diagrama de despliegue en UML?";
 choices[25]= new Array();
 choices[25][0] = "Mostrar las relaciones f&iacute;sicas entre los componenetes del sistema a desarrollar.";
 choices[25][1] = "Mostrar las relaciones entre procesos.";
 choices[25][2] = "Describir el comportamiento din&aacute;mico del sistema.";
 choices[25][3] = "Describir el comportamineto dinamico haciendo enfasis en los mensajes intercambiados.";
 answers[25] = 0;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 4182. ";
 preguntaids[25] = 4182


//  Id pregunta: 3956 Año de creación de pregunta: 2002
 questions[26]= "27)  Sea una interrelaci&oacute;n 1:N entre dos entidades A y B. Si para toda ocurrencia de A pueden existir, o no, una o varias ocurrencias de B asociadas, y para una ocurrencia de B existe una ocurrencia de A asociada, se dice que esta interrelaci&oacute;n es:";
 choices[26]= new Array();
 choices[26][0] = "Obligatoria en A y opcional en B";
 choices[26][1] = "Obligatoria en B y opcional en A";
 choices[26][2] = "Obligatoria en ambos extremos";
 choices[26][3] = "Opcional en ambos extremos";
 answers[26] = 1;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3956. ";
 preguntaids[26] = 3956


//  Id pregunta: 4180 Año de creación de pregunta: 2006
 questions[27]= "28)  &iquest;Cu&aacute;les son las cuatro fases del proceso unificado de desarrollo de software?";
 choices[27]= new Array();
 choices[27][0] = "Comienzo, incepci&oacute;n, transici&oacute;n y fin";
 choices[27][1] = "An&aacute;lisis, Dise&ntilde;o, Implementaci&oacute;n y pruebas";
 choices[27][2] = "An&aacute;lisis de requisitos, dise&ntilde;o, desarrollo y pruebas";
 choices[27][3] = "Inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n";
 answers[27] = 3;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 4180. ";
 preguntaids[27] = 4180


//  Id pregunta: 4088 Año de creación de pregunta: 2003
 questions[28]= "29)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[28]= new Array();
 choices[28][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[28][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[28][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[28][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[28] = 2;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 4088. ";
 preguntaids[28] = 4088


//  Id pregunta: 4096 Año de creación de pregunta: 2003
 questions[29]= "30)  Relativo a las clases en Orientaci&oacute;n a Objetos, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[29]= new Array();
 choices[29][0] = "Asociaci&oacute;n";
 choices[29][1] = "Agrupaci&oacute;n";
 choices[29][2] = "Agregaci&oacute;n";
 choices[29][3] = "Generalizaci&oacute;n";
 answers[29] = 3;
 units[29] = ['85'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 4096. ";
 preguntaids[29] = 4096


//  Id pregunta: 4078 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Qu&eacute; contendr&aacute; el diagrama de contexto en un DFD?";
 choices[30]= new Array();
 choices[30][0] = "Entidades Extermas, Procesos, Flujos de Datos";
 choices[30][1] = "Almacenes de Datos, Prodesos, Entidades Extrenas.";
 choices[30][2] = "Entidades Externas, Un solo Proceso, Flujos de Datos.";
 choices[30][3] = "Entidades Extermas, Procesos, Flujos de Datos, Almacenes de Datos";
 answers[30] = 2;
 units[30] = ['85', '86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 4078. EXAMEN CASTILLA LA MANCHA";
 preguntaids[30] = 4078


//  Id pregunta: 3866 Año de creación de pregunta: 2002
 questions[31]= "32)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de un almac&eacute;n de datos dentro de un diagrama de flujo de datos:";
 choices[31]= new Array();
 choices[31][0] = "No puede crear, destruir ni transformar datos";
 choices[31][1] = "No se puede comunicar con otro almac&eacute;n de datos mediante un flujo directo, siempre tiene que haber un proceso entre ambos almacenes";
 choices[31][2] = "Debe referirse el almac&eacute;n al entorno f&iacute;sico";
 choices[31][3] = "Si se transpasa por un flujo de datos el contenido completo del almac&eacute;n, este flujo no llevar&aacute; nombre";
 answers[31] = 2;
 units[31] = ['85', '86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3866. ";
 preguntaids[31] = 3866


//  Id pregunta: 3974 Año de creación de pregunta: 2002
 questions[32]= "33)  Un proceso en un DFD&hellip;:";
 choices[32]= new Array();
 choices[32][0] = "Puede descomponerse en otros procesos";
 choices[32][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[32][2] = "Puede estar aislado";
 choices[32][3] = "Puede equivaler a una entidad externa";
 answers[32] = 0;
 units[32] = ['85', '86'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3974. ";
 preguntaids[32] = 3974


//  Id pregunta: 3924 Año de creación de pregunta: 2002
 questions[33]= "34)  Los almacenes de datos de un DFD:";
 choices[33]= new Array();
 choices[33][0] = "Representan datos en movimiento";
 choices[33][1] = "Respresentan datos almacenados en dispositivo de acceso r&aacute;pido";
 choices[33][2] = "Comprenden cualquier tipo de almac&eacute;n accesible por odenador ya sea local o remoto";
 choices[33][3] = "Pueden representar un caj&oacute;n de papeles, un archivador manual, un fichero o una base de datos";
 answers[33] = 3;
 units[33] = ['85', '86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3924. ";
 preguntaids[33] = 3924


//  Id pregunta: 3973 Año de creación de pregunta: 2002
 questions[34]= "35)  Un m&eacute;todo orientado a los procesos es:";
 choices[34]= new Array();
 choices[34][0] = "Modelo Entidad-Relaci&oacute;n";
 choices[34][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[34][2] = "An&aacute;lisis de flujo de datos";
 choices[34][3] = "An&aacute;lisis relacional de datos (COOD)";
 answers[34] = 2;
 units[34] = ['85', '86'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3973. ";
 preguntaids[34] = 3973


//  Id pregunta: 5472 Año de creación de pregunta: 2007
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes opciones no es una heur&iacute;stica de dise&ntilde;o aplicable a los Diagramas de Estructura preliminares?:";
 choices[35]= new Array();
 choices[35][0] = "Aislar el centro de transformaci&oacute;n especificando los l&iacute;mites del flujo de entrada y salida.";
 choices[35][1] = "No utilizar variables globales.";
 choices[35][2] = "Optimizar los grados de entrada y salida de los m&oacute;dulos.";
 choices[35][3] = "No dejar que un dato se obtenga en un m&oacute;dulo lejano al m&oacute;dulo donde se utiliza.";
 answers[35] = 0;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 5472. ";
 preguntaids[35] = 5472


//  Id pregunta: 4176 Año de creación de pregunta: 2006
 questions[36]= "37)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[36]= new Array();
 choices[36][0] = "De consulta";
 choices[36][1] = "De actualizaci&oacute;n";
 choices[36][2] = "De di&aacute;logo";
 choices[36][3] = "Todas las anteriores";
 answers[36] = 3;
 units[36] = ['85', '86'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 4176. ";
 preguntaids[36] = 4176


//  Id pregunta: 5453 Año de creación de pregunta: 2007
 questions[37]= "38)  Un programador tiene que codificar un procedimiento que act&uacute;a sobre un conjunto de datos de N elementos. Para ello conoce tres posibles algoritmos: Alfa, Beta y Gamma. El algoritmo Alfa tiene un rendimiento en tiempo de Nlog10N (logaritmo decimal). Beta rinde 2^N (dos elevado a N), y Gamma produce un rendimiento igual a N(N-1)/2. &iquest;Cu&aacute;l de los tres algoritmos es m&aacute;s eficiente si el resto de condiciones son id&eacute;nticas?";
 choices[37]= new Array();
 choices[37][0] = "Alfa.";
 choices[37][1] = "Beta.";
 choices[37][2] = "Gamma.";
 choices[37][3] = "No se puede determinar";
 answers[37] = 0;
 units[37] = ['85'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 5453. ";
 preguntaids[37] = 5453


//  Id pregunta: 4087 Año de creación de pregunta: 2003
 questions[38]= "39)  En el modelo Entidad Relaci&oacute;n, &iquest; qu&eacute; es una entidad regular?";
 choices[38]= new Array();
 choices[38][0] = "Es aquella que tiene existencia por si misma, no depende de ninguna otra entidad.";
 choices[38][1] = "Es aquella que su existencia depende de otra entidad del modelo y sin la otra entidad no tiene sentido &eacute;sta.";
 choices[38][2] = "Una entidad en la que el n&uacute;mero m&aacute;ximo de ocurrencias que pueden estar asociadas a ella con una ocurrencia de otra u otras entidades participantes es 1.";
 choices[38][3] = "Una entidad que tiene atributos derivados.";
 answers[38] = 0;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4087. ";
 preguntaids[38] = 4087


//  Id pregunta: 4185 Año de creación de pregunta: 2006
 questions[39]= "40)  En el an&aacute;lisis orientado a objetos, la herencia es:";
 choices[39]= new Array();
 choices[39][0] = "Es el t&eacute;rmino formal que se utiliza para expresar que los datos de un objeto solamente pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos";
 choices[39][1] = "Es el mecanismo mediante el cual una clase adquiere las propiedades de otra clase jer&aacute;rquicamente superior";
 choices[39][2] = "La propiedad que permite definir tantas versiones de un m&eacute;todo como tipos de argumentos pueda tener";
 choices[39][3] = "No existe";
 answers[39] = 1;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 4185. ";
 preguntaids[39] = 4185


//  Id pregunta: 4057 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[40]= new Array();
 choices[40][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[40][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[40][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[40][3] = "El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[40] = 2;
 units[40] = ['85', '86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4057. ";
 preguntaids[40] = 4057


//  Id pregunta: 5540 Año de creación de pregunta: 2007
 questions[41]= "42)  En el an&aacute;lisis de sistemas, el m&eacute;todo de Abbott:";
 choices[41]= new Array();
 choices[41][0] = "Consiste en descomponer el problema utilizando los primeros niveles del refinamiento.";
 choices[41][1] = "Construye una estructura similar a la de los datos de entrada-salida.";
 choices[41][2] = "Identifica un flujo global desde los elementos de entrada a los de salida.";
 choices[41][3] = "Sistematiza la forma de reconocer las abstracciones.";
 answers[41] = 3;
 units[41] = ['85'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 5540. ";
 preguntaids[41] = 5540


//  Id pregunta: 4058 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;C&oacute;mo se llama la caracter&iacute;stica que permite que dos m&eacute;todos distintos tengan el mismo nombre?";
 choices[42]= new Array();
 choices[42][0] = "Herencia";
 choices[42][1] = "Persistencia";
 choices[42][2] = "Polimorfismo";
 choices[42][3] = "Abstracci&oacute;n";
 answers[42] = 2;
 units[42] = ['85'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4058. ";
 preguntaids[42] = 4058


//  Id pregunta: 3933 Año de creación de pregunta: 2002
 questions[43]= "44)  En programaci&oacute;n orientada a objetos, los objetos act&uacute;an en respuesta a los mensajes que reciben. El mismo mensaje puede originar conductas completamente diferentes al ser recibido por diferentes objetos. Este fen&oacute;meno se conoce como:";
 choices[43]= new Array();
 choices[43][0] = "Herencia";
 choices[43][1] = "Encapsulaci&oacute;n";
 choices[43][2] = "Abstracci&oacute;n";
 choices[43][3] = "Polimorfismo";
 answers[43] = 3;
 units[43] = ['85'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3933. ";
 preguntaids[43] = 3933


//  Id pregunta: 3971 Año de creación de pregunta: 2002
 questions[44]= "45)  Un almac&eacute;n de datos en un DFD&hellip;:";
 choices[44]= new Array();
 choices[44][0] = "No tiene por qu&eacute; equivaler a una tabla";
 choices[44][1] = "Representa una base de datos";
 choices[44][2] = "Es un objeto de tipo dato";
 choices[44][3] = "Se usa tanto como repositorio como en la recogida de basura";
 answers[44] = 0;
 units[44] = ['85', '86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3971. ";
 preguntaids[44] = 3971


//  Id pregunta: 4170 Año de creación de pregunta: 2006
 questions[45]= "46)  En el modelo entidad-relaci&oacute;n de CHEN la cardinalidad es:";
 choices[45]= new Array();
 choices[45][0] = "El n&uacute;mero de tablas";
 choices[45][1] = "El n&uacute;mero de elementos del modelo";
 choices[45][2] = "El n&uacute;mero m&iacute;nimo y m&aacute;ximo de entidades de un tipo de entidad que se relacionan con una entidad del otro tipo.";
 choices[45][3] = "El n&uacute;mero de relaciones unitarias";
 answers[45] = 2;
 units[45] = ['85'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 4170. ";
 preguntaids[45] = 4170


//  Id pregunta: 5548 Año de creación de pregunta: 2007
 questions[46]= "47)  En el desarrollo orientado a objetos, la ocultaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Permite utilizar un m&oacute;dulo sin necesidad de conocer su estructura interna.";
 choices[46][1] = "Posibilita la clasificaci&oacute;n de los m&oacute;dulos.";
 choices[46][2] = "Hace que un m&oacute;dulo pueda adquirir formas diferentes cuando se particulariza su uso.";
 choices[46][3] = "Tiene el peligro de la aparici&oacute;n de interbloqueos entre m&oacute;dulos";
 answers[46] = 0;
 units[46] = ['85'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 5548. ";
 preguntaids[46] = 5548


//  Id pregunta: 4074 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[47]= new Array();
 choices[47][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[47][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[47][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[47][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[47] = 3;
 units[47] = ['85'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4074. ";
 preguntaids[47] = 4074


//  Id pregunta: 3952 Año de creación de pregunta: 2002
 questions[48]= "49)  Respecto a los procesos, en un DFD:";
 choices[48]= new Array();
 choices[48][0] = "Cada proceso debe tener al menos una entrada y una salida";
 choices[48][1] = "Un proceso no puede ser fuente ni sumidero de informaci&oacute;n, s&oacute;lo transformarla";
 choices[48][2] = "Un proceso primitivo es aquel del que derivan en el tiempo otros procesos del sistema";
 choices[48][3] = "Las opciones a) y b) son correctas";
 answers[48] = 3;
 units[48] = ['85', '86'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3952. ";
 preguntaids[48] = 3952


//  Id pregunta: 4169 Año de creación de pregunta: 2006
 questions[49]= "50)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[49]= new Array();
 choices[49][0] = "Caja blanca";
 choices[49][1] = "Caja negra";
 choices[49][2] = "Integraci&oacute;n";
 choices[49][3] = "Aceptaci&oacute;n";
 answers[49] = 0;
 units[49] = ['85', '86'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 4169. ";
 preguntaids[49] = 4169


//  Id pregunta: 3913 Año de creación de pregunta: 2002
 questions[50]= "51)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[50]= new Array();
 choices[50][0] = "La localizaci&oacute;n de objetos.";
 choices[50][1] = "La direcci&oacute;n de reuniones.";
 choices[50][2] = "La negociaci&oacute;n.";
 choices[50][3] = "Los diagramas generales de un sistema.";
 answers[50] = 0;
 units[50] = ['85', '89'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3913. ";
 preguntaids[50] = 3913


//  Id pregunta: 3969 Año de creación de pregunta: 2002
 questions[51]= "52)  UML se corresponde con:";
 choices[51]= new Array();
 choices[51][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[51][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[51][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[51][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[51] = 2;
 units[51] = ['85', '89'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3969. ";
 preguntaids[51] = 3969


//  Id pregunta: 3980 Año de creación de pregunta: 2002
 questions[52]= "53)  Uno de los m&eacute;todos utilizados para la identificaci&oacute;n de objetos es:";
 choices[52]= new Array();
 choices[52][0] = "Tarjetas CRC";
 choices[52][1] = "An&aacute;lisis l&eacute;xico";
 choices[52][2] = "Contraste de modelos";
 choices[52][3] = "Todas las anteriores son ciertas";
 answers[52] = 3;
 units[52] = ['85'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3980. ";
 preguntaids[52] = 3980


//  Id pregunta: 4181 Año de creación de pregunta: 2006
 questions[53]= "54)  Cual de los siguientes no es una caracteristica del Proceso unificado de desarrollo de software";
 choices[53]= new Array();
 choices[53][0] = "Es iterativo e incremental";
 choices[53][1] = "El dise&ntilde;o comienza siempre al terminar el an&aacute;lisis.";
 choices[53][2] = "Est&aacute; dirigido por los casos de uso";
 choices[53][3] = "Est&aacute; dirigido por la arquitectura.";
 answers[53] = 1;
 units[53] = ['85'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 4181. ";
 preguntaids[53] = 4181


//  Id pregunta: 3915 Año de creación de pregunta: 2002
 questions[54]= "55)  Las funciones primitivas del modelo l&oacute;gico de procesos:";
 choices[54]= new Array();
 choices[54][0] = "Se pueden descomponer en m&oacute;dulos elementales de proceso";
 choices[54][1] = "Son procesos que no se descomponen m&aacute;s";
 choices[54][2] = "Pueden aparecer en todos los niveles del modelo, incluso en el diagrama de contexto";
 choices[54][3] = "Incluyen s&oacute;lo informaci&oacute;n sobre el modo de acceso a los datos del sistema";
 answers[54] = 1;
 units[54] = ['85', '86'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3915. ";
 preguntaids[54] = 3915


//  Id pregunta: 3920 Año de creación de pregunta: 2002
 questions[55]= "56)  Las relaciones denominadas maestro-detalle, corresponden a:";
 choices[55]= new Array();
 choices[55][0] = "Relaciones con cardinalidad n:m";
 choices[55][1] = "Relaciones con cardinalidad 1:1";
 choices[55][2] = "Relaciones unarias";
 choices[55][3] = "Relaciones con cardinalidad 1:n";
 answers[55] = 3;
 units[55] = ['85'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3920. ";
 preguntaids[55] = 3920


//  Id pregunta: 4168 Año de creación de pregunta: 2006
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[56]= new Array();
 choices[56][0] = "Entidades externas al sistema";
 choices[56][1] = "Bucles";
 choices[56][2] = "Almac&eacute;n de datos";
 choices[56][3] = "Procesos";
 answers[56] = 1;
 units[56] = ['85', '86'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4168. ";
 preguntaids[56] = 4168


//  Id pregunta: 5318 Año de creación de pregunta: 2006
 questions[57]= "58)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[57]= new Array();
 choices[57][0] = "CORBA";
 choices[57][1] = "SOAP";
 choices[57][2] = "RMI";
 choices[57][3] = "DCOM";
 answers[57] = 1;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 5318. ";
 preguntaids[57] = 5318


//  Id pregunta: 3962 Año de creación de pregunta: 2002
 questions[58]= "59)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[58]= new Array();
 choices[58][0] = "Caso de uso.";
 choices[58][1] = "Carpetas.";
 choices[58][2] = "Actor.";
 choices[58][3] = "Relaci&oacute;n.";
 answers[58] = 1;
 units[58] = ['85', '89'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3962. ";
 preguntaids[58] = 3962


//  Id pregunta: 4179 Año de creación de pregunta: 2006
 questions[59]= "60)  &iquest;Qu&eacute; tres modelos utiliza OMT?";
 choices[59]= new Array();
 choices[59][0] = "Modelo de objetos , din&aacute;mico y funcional";
 choices[59][1] = "Modelo est&aacute;tico , din&aacute;mico y funcional";
 choices[59][2] = "Modelo de objetos , din&aacute;mico y transaccional";
 choices[59][3] = "Modelo de objetos, est&aacute;tico y de clases";
 answers[59] = 0;
 units[59] = ['85'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 4179. ";
 preguntaids[59] = 4179


//  Id pregunta: 3834 Año de creación de pregunta: 2002
 questions[60]= "61)  En un DFD, se&ntilde;alar aquella situaci&oacute;n que no es correcta:";
 choices[60]= new Array();
 choices[60][0] = "Una entidad externa se relaciona con un proceso mediante uno o varios flujos de datos";
 choices[60][1] = "Un almac&eacute;n se repite en varios niveles de DFDs";
 choices[60][2] = "Dos procesos se pueden comunicar, enviando datos de uno a otro, siempre que lacomunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[60][3] = "Un flujo de datos entra en un proceso que s&oacute;lo realiza la transformaci&oacute;n de dividir el flujo entrante en dos flujos salientes";
 answers[60] = 2;
 units[60] = ['85', '86'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3834. ";
 preguntaids[60] = 3834


//  Id pregunta: 4172 Año de creación de pregunta: 2006
 questions[61]= "62)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[61]= new Array();
 choices[61][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[61][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[61][2] = "El n&uacute;mero de columnas de una tabla";
 choices[61][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[61] = 0;
 units[61] = ['85'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4172. ";
 preguntaids[61] = 4172


//  Id pregunta: 4061 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a las conexiones mediante flujos de datos en un DFD (Diagrama de Flujo de Datos) es correcta?";
 choices[62]= new Array();
 choices[62][0] = "En un DFD los almacenes se pueden conectar con procesos, pero no con otros almacenes ni con entidades externas.";
 choices[62][1] = "En un DFD los almacenes de datos se pueden conectar con procesos, almacenes pero no con entidades externas.";
 choices[62][2] = "En un DFD las entidades externas se pueden conectar con procesos y almacenes y entidades externas.";
 choices[62][3] = "En un DFD las entidades externas se pueden conectar con procesos y con otras entidades externas pero no con almacenes.";
 answers[62] = 0;
 units[62] = ['85', '86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 4061. ";
 preguntaids[62] = 4061


//  Id pregunta: 4165 Año de creación de pregunta: 2006
 questions[63]= "64)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[63]= new Array();
 choices[63][0] = "Pueden ser permanentes o temporales";
 choices[63][1] = "No crean informaci&oacute;n";
 choices[63][2] = "Son accesibles desde entidades externas.";
 choices[63][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[63] = 2;
 units[63] = ['85', '86'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4165. ";
 preguntaids[63] = 4165


//  Id pregunta: 4177 Año de creación de pregunta: 2006
 questions[64]= "65)  En un DFD (Diagrama de Flujos de Datos) el diagrama que se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[64]= new Array();
 choices[64][0] = "Diagrama de bloques";
 choices[64][1] = "Diagrama de contexto";
 choices[64][2] = "Diagrama de primer nivel";
 choices[64][3] = "Diagrama b&aacute;sico";
 answers[64] = 1;
 units[64] = ['85', '86'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4177. ";
 preguntaids[64] = 4177


//  Id pregunta: 4149 Año de creación de pregunta: 2004
 questions[65]= "66)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[65]= new Array();
 choices[65][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[65][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[65][2] = "Java es interpretado y C++ es compilado";
 choices[65][3] = "Java no tiene herencia multiple y C++ si";
 answers[65] = 0;
 units[65] = ['85'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 4149. ";
 preguntaids[65] = 4149


//  Id pregunta: 3835 Año de creación de pregunta: 2002
 questions[66]= "67)  En un diagrama de flujo de datos:";
 choices[66]= new Array();
 choices[66][0] = "Una entidad externa puede aparecer en cualquier diagrama de cualquier nivel";
 choices[66][1] = "Una entidad externa nunca se relaciona mediante un flujo directamente con un almac&eacute;n de datos";
 choices[66][2] = "Se entiende por 'cuadre de flujos netos' el que un proceso tenga el mismo n&uacute;mero de flujos de entrada que de salida";
 choices[66][3] = "Son ciertas las respuestas 'a' y 'b'";
 answers[66] = 3;
 units[66] = ['85', '86'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3835. ";
 preguntaids[66] = 3835


//  Id pregunta: 4174 Año de creación de pregunta: 2006
 questions[67]= "68)  &iquest;C&oacute;mo se denomina la estrategia para obtener el diagrama de un DFD si existe un proceso que en funcion de un flujo de llegada determina la eleccion de uno o m&aacute;s flujos de informacion?";
 choices[67]= new Array();
 choices[67][0] = "An&aacute;lisis de transacci&oacute;n";
 choices[67][1] = "An&aacute;lisis de Transformaci&oacute;n";
 choices[67][2] = "An&aacute;lisis de flujo";
 choices[67][3] = "An&aacute;lisis de Informaci&oacute;n";
 answers[67] = 0;
 units[67] = ['85', '86'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4174. ";
 preguntaids[67] = 4174


//  Id pregunta: 3925 Año de creación de pregunta: 2002
 questions[68]= "69)  Los almacenes de datos, en un DFD:";
 choices[68]= new Array();
 choices[68][0] = "pueden conectarse directamente con los terminadores, sin necesitar procesos intermedios";
 choices[68][1] = "por convenio, si el flujo hacia/desde el almac&eacute;n es etiquetado, se supone que representa a parte del registro";
 choices[68][2] = "aparecen desde el DFD de nivel 0 para dar importancia a los datos sobre los procesos que los manejan";
 choices[68][3] = "son modificados tanto en la lectura como en la escritura de datos";
 answers[68] = 1;
 units[68] = ['85', '86'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3925. ";
 preguntaids[68] = 3925


//  Id pregunta: 5474 Año de creación de pregunta: 2007
 questions[69]= "70)  Ernesto es un jefe de proyecto que en una nueva aplicaci&oacute;n que est&aacute; realizando en su Ministerio ha decidido emplear la tecnolog&iacute;a CORBA de objetos distribuidos. La raz&oacute;n m&aacute;s probable por la que Ernesto ha decidido utilizar CORBA es";
 choices[69]= new Array();
 choices[69][0] = "CORBA es la tecnolog&iacute;a de objetos distribuidos m&aacute;s sencilla";
 choices[69][1] = "CORBA es multilenguaje, con interfaces Fortran, Java, Lisp, Ada, etc.";
 choices[69][2] = "CORBA es ideal para sistemas cerrados Java";
 choices[69][3] = "CORBA es una tecnolog&iacute;a de Microsoft, y se adapta muy bien para desarrollos en Visual Basic y J++";
 answers[69] = 1;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 5474. ";
 preguntaids[69] = 5474


//  Id pregunta: 4178 Año de creación de pregunta: 2006
 questions[70]= "71)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos:";
 choices[70]= new Array();
 choices[70][0] = "SA/SD";
 choices[70][1] = "OMT";
 choices[70][2] = "Proceso Unificado de modelado";
 choices[70][3] = "Tarjetas de clase";
 answers[70] = 0;
 units[70] = ['85'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4178. ";
 preguntaids[70] = 4178


//  Id pregunta: 4064 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;C&uacute;al de los siguientes lenguajes no es Orientado a Objetos?";
 choices[71]= new Array();
 choices[71][0] = "Smalltalk";
 choices[71][1] = "C++";
 choices[71][2] = "Eiffel";
 choices[71][3] = "ACTOR";
 answers[71] = 3;
 units[71] = ['85'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 4064. ";
 preguntaids[71] = 4064


//  Id pregunta: 4039 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[72]= new Array();
 choices[72][0] = "Eiffel";
 choices[72][1] = "C++";
 choices[72][2] = "Smalltalk";
 choices[72][3] = "C";
 answers[72] = 3;
 units[72] = ['85'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4039. ";
 preguntaids[72] = 4039


//  Id pregunta: 3904 Año de creación de pregunta: 2002
 questions[73]= "74)  La orientaci&oacute;n a objetos usa com&uacute;nmente dos tipos de mecanismos de herencia: herencia simple y herencia m&uacute;ltiple. La herencia repetida:";
 choices[73]= new Array();
 choices[73][0] = "Supone que una clase, llamada subclase, hereda caracter&iacute;sticas y m&eacute;todos de una sola clase superior llamada superclase, a la que puede a&ntilde;adir o borrar alg&uacute;n comportamiento.";
 choices[73][1] = "Es un tipo de herencia m&uacute;ltiple en la que en la jerarqu&iacute;a de la herencia hay ciclos, es decir, una clase hereda directa o indirectamente de otra clase m&aacute;s de una vez.";
 choices[73][2] = "Consiste en que un objeto dado tenga m&aacute;s de un padre.";
 choices[73][3] = "No existe.";
 answers[73] = 1;
 units[73] = ['85', '89'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3904. ";
 preguntaids[73] = 3904


//  Id pregunta: 3968 Año de creación de pregunta: 2002
 questions[74]= "75)  Sobre la cardinalidad de un tipo entidad podemos decir:";
 choices[74]= new Array();
 choices[74][0] = "Es el n&uacute;mero de ocurrencias de un tipo de entidad que se pueden interrelacionar con cada ocurrencia de los otros tipos de entidad en un determinado tipo de interrelaci&oacute;n";
 choices[74][1] = "Se habla de una cardinalidad m&aacute;xima y m&iacute;nima";
 choices[74][2] = "En las interrelaciones binarias el tipo de correspondencia se deduce directamente a partir de los tipos de entidad involucrada";
 choices[74][3] = "Todas las respuestas anteriores son ciertas";
 answers[74] = 3;
 units[74] = ['85'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3968. ";
 preguntaids[74] = 3968


