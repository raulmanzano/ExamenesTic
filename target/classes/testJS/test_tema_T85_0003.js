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
//  Id pregunta: 7041 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;C&oacute;mo se denomina cada uno de los objetos individuales pertenecientes a una clase?";
 choices[0]= new Array();
 choices[0][0] = "Ente";
 choices[0][1] = "Participaci&oacute;n";
 choices[0][2] = "Instancia";
 choices[0][3] = "Abstracci&oacute;n";
 answers[0] = 2;
 units[0] = ['85'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7041. ";
 preguntaids[0] = 7041


//  Id pregunta: 5751 Año de creación de pregunta: 2007
 questions[1]= "2)  Dentro de la ingenier&iacute;a del software orientada a objetos, &iquest;Como se denomina la relaci&oacute;n entre un componente y su interfaz?";
 choices[1]= new Array();
 choices[1][0] = "agregaci&oacute;n";
 choices[1][1] = "realizaci&oacute;n";
 choices[1][2] = "polimorfismo";
 choices[1][3] = "presentaci&oacute;n";
 answers[1] = 1;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5751. ";
 preguntaids[1] = 5751


//  Id pregunta: 7573 Año de creación de pregunta: 2010
 questions[2]= "3)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad/Relaci&oacute;n), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[2]= new Array();
 choices[2][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos.";
 choices[2][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo.";
 choices[2][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo.";
 choices[2][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece.";
 answers[2] = 2;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7573. Map 2006";
 preguntaids[2] = 7573


//  Id pregunta: 7042 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[3]= new Array();
 choices[3][0] = "No existen clases sin instancias";
 choices[3][1] = "Invisible";
 choices[3][2] = "Hu&eacute;rfana";
 choices[3][3] = "Abstracta";
 answers[3] = 3;
 units[3] = ['85'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7042. ";
 preguntaids[3] = 7042


//  Id pregunta: 8326 Año de creación de pregunta: 2011
 questions[4]= "5)  En programaci&oacute;n orientada a objetos &iquest;qu&eacute; son las clases abstractas?";
 choices[4]= new Array();
 choices[4][0] = "Aquellas que se dividen en subclases";
 choices[4][1] = "Aquellas que est&aacute;n predefinidas";
 choices[4][2] = "Las que no tienen instancias";
 choices[4][3] = "Las que no son reutilizables";
 answers[4] = 2;
 units[4] = ['85'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 8326. Examen UPM A2 2011";
 preguntaids[4] = 8326


//  Id pregunta: 7993 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[5]= new Array();
 choices[5][0] = "Estereotipos.";
 choices[5][1] = "Valores etiquetados.";
 choices[5][2] = "Artefactos.";
 choices[5][3] = "Restricciones.";
 answers[5] = 2;
 units[5] = ['85', '86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7993. Examen TIC A2 2010";
 preguntaids[5] = 7993


//  Id pregunta: 7158 Año de creación de pregunta: 2010
 questions[6]= "7)  Las entidades d&eacute;biles se representan en E/R mediante:";
 choices[6]= new Array();
 choices[6][0] = "No hay entidades d&eacute;biles en el modelo E/R.";
 choices[6][1] = "Se representan mediante doble caja.";
 choices[6][2] = "Se representan con un tri&aacute;ngulo.";
 choices[6][3] = "Se representan como dos c&iacute;rculos conc&eacute;ntricos.";
 answers[6] = 1;
 units[6] = ['85'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7158. ";
 preguntaids[6] = 7158


//  Id pregunta: 6251 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no forma parte del conjunto de t&eacute;cnicas del an&aacute;lisis estructurado?";
 choices[7]= new Array();
 choices[7][0] = "Diagrama de Transici&oacute;n de Estados (DTE)";
 choices[7][1] = "Diagrama de Flujos de Datos (DFD)";
 choices[7][2] = "Diagrama de Flujos de Procesos (DFP)";
 choices[7][3] = "Diagrama de Flujos de Control (DFC)";
 answers[7] = 2;
 units[7] = ['85', '86'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6251. ";
 preguntaids[7] = 6251


//  Id pregunta: 5909 Año de creación de pregunta: 2007
 questions[8]= "9)  En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[8]= new Array();
 choices[8][0] = "Contiene definiciones de todos los objetos de datos gestionados por el software";
 choices[8][1] = "Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones";
 choices[8][2] = "Almacena tan solo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos";
 choices[8][3] = "Contiene procedimientos almacenados";
 answers[8] = 0;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 5909. ";
 preguntaids[8] = 5909


//  Id pregunta: 7045 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objtetos?";
 choices[9]= new Array();
 choices[9][0] = "DCOM";
 choices[9][1] = "IDL";
 choices[9][2] = "CORBA";
 choices[9][3] = "RMI";
 answers[9] = 1;
 units[9] = ['85'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7045. ";
 preguntaids[9] = 7045


//  Id pregunta: 6128 Año de creación de pregunta: 2003
 questions[10]= "11)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[10]= new Array();
 choices[10][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[10][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[10][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[10][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[10] = 2;
 units[10] = ['85'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6128. Examen TIC A1 MAP 2007";
 preguntaids[10] = 6128


//  Id pregunta: 6976 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[11]= new Array();
 choices[11][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[11][1] = "En el caso de enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[11][2] = "Se pueden crear instancias de una clase abstracta";
 choices[11][3] = "Un enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[11] = 2;
 units[11] = ['85'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6976. TIC-B 2009 bloque desarrollo";
 preguntaids[11] = 6976


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[12]= "13)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[12]= new Array();
 choices[12][0] = "Polimorfismo.";
 choices[12][1] = "Herencia.";
 choices[12][2] = "Reusabilidad.";
 choices[12][3] = "Encapsulaci&oacute;n.";
 answers[12] = 3;
 units[12] = ['85'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7669. Map 2007";
 preguntaids[12] = 7669


//  Id pregunta: 7040 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l es la diferencia entre una clase y un objeto?";
 choices[13]= new Array();
 choices[13][0] = "Las clases son un concepto din&aacute;mico mientras que los objetos son entes est&aacute;ticos";
 choices[13][1] = "Ninguna, son lo mismo";
 choices[13][2] = "Las clases son un concepto est&aacute;ticos mientras que los objetos son entes din&aacute;micos";
 choices[13][3] = "Tanto las clases como los objetos son entes est&aacute;ticos definidos en el programa fuente";
 answers[13] = 2;
 units[13] = ['85'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 7040. ";
 preguntaids[13] = 7040


//  Id pregunta: 6216 Año de creación de pregunta: 2003
 questions[14]= "15)  En un DFD, &iquest;Cu&aacute;l es la diferencia entre un digrama de contexto y un diagrama de nivel 0?";
 choices[14]= new Array();
 choices[14][0] = "El diagrama de contexto no pertenece al DFD sino que es previo al mismo, el cual comienza con el diagrama de nivel 1.";
 choices[14][1] = "El diagrama de nivel 0 no existe, ya que los niveles empiezan en el 1, con lo cual no tiene sentido la comparaci&oacute;n.";
 choices[14][2] = "La &uacute;nica diferencia entre un diagrama de contexto y un diagrama de nivel 0 es que &eacute;ste &uacute;ltimo carece de entidades externas.";
 choices[14][3] = "No hay ninguna diferencia entre ambos pues se llama diagrama de contexto al diagrama de nivel 0 de un DFD.";
 answers[14] = 3;
 units[14] = ['85'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6216. Examen TIC A Castilla La Mancha 2007";
 preguntaids[14] = 6216


//  Id pregunta: 6252 Año de creación de pregunta: 2003
 questions[15]= "16)  Con respecto a los diccionarios de datos:";
 choices[15]= new Array();
 choices[15][0] = "Los diccionarios Activos permiten que los programadores puedan definir datos dentro sus programas y que estos no est&eacute;n en el diccionario.";
 choices[15][1] = "Los diccionarios Pasivos fuerzan a los programadores a utilizar las definiciones del diccionario.";
 choices[15][2] = "A y B son ciertas";
 choices[15][3] = "A y B son falsas";
 answers[15] = 3;
 units[15] = ['85', '86'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 6252. ";
 preguntaids[15] = 6252


//  Id pregunta: 6967 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Aferentes";
 choices[16][1] = "de Transformaci&oacute;n";
 choices[16][2] = "Diferentes";
 choices[16][3] = "Eferentes";
 answers[16] = 2;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6967. TIC-B 2009 bloque desarrollo";
 preguntaids[16] = 6967


//  Id pregunta: 5555 Año de creación de pregunta: 2007
 questions[17]= "18)  En la elaboraci&oacute;n de los DFD de un Sistema para la Gesti&oacute;n de Concursos de Provisi&oacute;n de Puestos de un Ministerio, &iquest;c&oacute;mo representar&iacute;a la publicaci&oacute;n en el BOE de las bases de concurso?";
 choices[17]= new Array();
 choices[17][0] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[17][1] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[17][2] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 choices[17][3] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 answers[17] = 3;
 units[17] = ['85'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 5555. ";
 preguntaids[17] = 5555


//  Id pregunta: 5674 Año de creación de pregunta: 2007
 questions[18]= "19)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[18]= new Array();
 choices[18][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[18][1] = "Una base de datos OLTP.";
 choices[18][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[18][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[18] = 2;
 units[18] = ['85'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 5674. ";
 preguntaids[18] = 5674


//  Id pregunta: 8054 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes lenguajes NO es un lenguaje que sigue el modelo de orientaci&oacute;n a objetos basados en clases?";
 choices[19]= new Array();
 choices[19][0] = "JavaScript.";
 choices[19][1] = "Java.";
 choices[19][2] = "C++.";
 choices[19][3] = "Eiffel.";
 answers[19] = 0;
 units[19] = ['85', '89'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 8054. Examen TIC A2 2010";
 preguntaids[19] = 8054


//  Id pregunta: 6266 Año de creación de pregunta: 2003
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de los Lenguajes Orientados a Objetos?";
 choices[20]= new Array();
 choices[20][0] = "Tipificaci&oacute;n fuerte";
 choices[20][1] = "Paso de mensajes";
 choices[20][2] = "Monotarea";
 choices[20][3] = "Manejo de excepciones";
 answers[20] = 2;
 units[20] = ['85'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 6266. ";
 preguntaids[20] = 6266


//  Id pregunta: 7726 Año de creación de pregunta: 2010
 questions[21]= "22)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[21]= new Array();
 choices[21][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n.";
 choices[21][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n.";
 choices[21][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de ejecuci&oacute;n.";
 choices[21][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realiza en tiempo de compilaci&oacute;n.";
 answers[21] = 2;
 units[21] = ['85'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 7726. Map 2007";
 preguntaids[21] = 7726


//  Id pregunta: 5786 Año de creación de pregunta: 2007
 questions[22]= "23)  En UML la forma especial de asociaci&oacute;n que especifica una relaci&oacute;n todo-parte entre el agregado y un componente se denomina";
 choices[22]= new Array();
 choices[22][0] = "agregaci&oacute;n";
 choices[22][1] = "generalizaci&oacute;n";
 choices[22][2] = "dependencia";
 choices[22][3] = "asociaci&oacute;n fuerte";
 answers[22] = 0;
 units[22] = ['85'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 5786. ";
 preguntaids[22] = 5786


//  Id pregunta: 7156 Año de creación de pregunta: 2010
 questions[23]= "24)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[23]= new Array();
 choices[23][0] = "Empleados, departamentos y empresa.";
 choices[23][1] = "Empresa, proyectos, empleados y departamentos.";
 choices[23][2] = "Empleados, proyectos y departamentos.";
 choices[23][3] = "Empleados y departamentos.";
 answers[23] = 2;
 units[23] = ['85'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7156. ";
 preguntaids[23] = 7156


//  Id pregunta: 5785 Año de creación de pregunta: 2007
 questions[24]= "25)  Los diagramas de flujo de datos se componen de";
 choices[24]= new Array();
 choices[24][0] = "actores y casos de uso";
 choices[24][1] = "procesos y tablas";
 choices[24][2] = "entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[24][3] = "modulo, conexi&oacute;n, par&aacute;metro, almac&eacute;n de datos y dispositivos f&iacute;sicos";
 answers[24] = 2;
 units[24] = ['85'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 5785. ";
 preguntaids[24] = 5785


//  Id pregunta: 7162 Año de creación de pregunta: 2010
 questions[25]= "26)  El paso a tablas de una relaci&oacute;n ternaria ocasiona:";
 choices[25]= new Array();
 choices[25][0] = "Una tabla para la relaci&oacute;n cuya clave es la concatenaci&oacute;n de las claves de las entidades que participan en la relaci&oacute;n.";
 choices[25][1] = "Tres tablas, una para cada posible combinaci&oacute;n.";
 choices[25][2] = "Dos tablas son suficientes para mantener toda la informaci&oacute;n.";
 choices[25][3] = "No se permiten relaciones ternarias en el modelo E/R.";
 answers[25] = 0;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7162. ";
 preguntaids[25] = 7162


//  Id pregunta: 7307 Año de creación de pregunta: 2010
 questions[26]= "27)  Uno de los creadores originales del An&aacute;lisis Estructurado es";
 choices[26]= new Array();
 choices[26][0] = "Edward Yourdon";
 choices[26][1] = "Tom De Marco";
 choices[26][2] = "Tim Berners Lee";
 choices[26][3] = "James Rumbaugh";
 answers[26] = 1;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 7307. ";
 preguntaids[26] = 7307


//  Id pregunta: 7043 Año de creación de pregunta: 2001
 questions[27]= "28)  &iquest;Qu&eacute; dos tipos de atributos puede tener un objeto?";
 choices[27]= new Array();
 choices[27][0] = "Atributos de clase y atributos de instancia";
 choices[27][1] = "Atributos visibles y atributos ciegos";
 choices[27][2] = "Atributos heredados y atributos no heredados";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 0;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 7043. ";
 preguntaids[27] = 7043


//  Id pregunta: 7310 Año de creación de pregunta: 2010
 questions[28]= "29)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[28]= new Array();
 choices[28][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[28][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[28][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[28][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[28] = 1;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7310. ";
 preguntaids[28] = 7310


//  Id pregunta: 6865 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[29]= new Array();
 choices[29][0] = "Distribuci&oacute;n.";
 choices[29][1] = "Abstracci&oacute;n.";
 choices[29][2] = "Encapsulaci&oacute;n.";
 choices[29][3] = "Modularidad.";
 answers[29] = 0;
 units[29] = ['85'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6865. TIC A 2009";
 preguntaids[29] = 6865


//  Id pregunta: 6148 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[30]= new Array();
 choices[30][0] = "Entidad externa";
 choices[30][1] = "Proceso";
 choices[30][2] = "Funci&oacute;n";
 choices[30][3] = "Almac&eacute;n de datos";
 answers[30] = 2;
 units[30] = ['85', '86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6148. Examen TIC A1 MAP 2007";
 preguntaids[30] = 6148


//  Id pregunta: 6025 Año de creación de pregunta: 2003
 questions[31]= "32)  La notaci&oacute;n de un diagrama Entidad-Relaci&oacute;n no permite representar:";
 choices[31]= new Array();
 choices[31][0] = "Jerarqu&iacute;as de tipos de objetos de datos.";
 choices[31][1] = "Asociaci&oacute;n de objetos de datos.";
 choices[31][2] = "Transformaciones de objetos de datos.";
 choices[31][3] = "La relaci&oacute;n entre objetos de datos.";
 answers[31] = 2;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6025. TIC B 2007";
 preguntaids[31] = 6025


//  Id pregunta: 6247 Año de creación de pregunta: 2003
 questions[32]= "33)  En el modelo E/R, las entidades d&eacute;biles:";
 choices[32]= new Array();
 choices[32][0] = "Dependen de la existencia de otro tipo de entidad";
 choices[32][1] = "S&oacute;lo pueden tener un &uacute;nico atributo de clave propio";
 choices[32][2] = "Tienen atributos de clave propios, pero coinciden con los de la entidad fuerte de la que dependen";
 choices[32][3] = "Se representan mediante un rect&aacute;ngulo de trazo discontinuo";
 answers[32] = 0;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6247. ";
 preguntaids[32] = 6247


//  Id pregunta: 6265 Año de creación de pregunta: 2003
 questions[33]= "34)  Cu&aacute;l de las siguientes es una caracter&iacute;stica de las Especificaciones que se obtienen al realizar un An&aacute;lisis estructurado:";
 choices[33]= new Array();
 choices[33][0] = "Redundantes";
 choices[33][1] = "Ambiguas";
 choices[33][2] = "Imposibles de mantener";
 choices[33][3] = "Particionadas";
 answers[33] = 3;
 units[33] = ['85', '86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 6265. ";
 preguntaids[33] = 6265


//  Id pregunta: 8366 Año de creación de pregunta: 2011
 questions[34]= "35)  En un modelo entidad-relaci&oacute;n cual es la definici&oacute;n b&aacute;sica que corresponde con el elemento entidad?:";
 choices[34]= new Array();
 choices[34][0] = "Es aquel objeto que existe en el mundo real con una identificaci&oacute;n distinta y con un significado propio";
 choices[34][1] = "Es aquella propiedad que tiene asignado un dominio";
 choices[34][2] = "Es el conjunto de valores que puede tomar un atributo";
 choices[34][3] = "Es la relaci&oacute;n que se establece entre los objetos del modelo";
 answers[34] = 0;
 units[34] = ['85'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 8366. Analista Ayto. Madrid 2010";
 preguntaids[34] = 8366


//  Id pregunta: 6074 Año de creación de pregunta: 2003
 questions[35]= "36)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[35]= new Array();
 choices[35][0] = "Polimorfismo";
 choices[35][1] = "Herencia";
 choices[35][2] = "Reusabilidad";
 choices[35][3] = "Encapsulaci&oacute;n";
 answers[35] = 3;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6074. Examen TIC A1 MAP 2007";
 preguntaids[35] = 6074


//  Id pregunta: 6964 Año de creación de pregunta: 2010
 questions[36]= "37)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[36]= new Array();
 choices[36][0] = "Diagrama de Componentes";
 choices[36][1] = "Diagrama de Descomposici&oacute;n";
 choices[36][2] = "Diagrama de Despliegue";
 choices[36][3] = "Diagrama de Estructura";
 answers[36] = 2;
 units[36] = ['85'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6964. TIC-B 2009 bloque desarrollo";
 preguntaids[36] = 6964


//  Id pregunta: 7312 Año de creación de pregunta: 2010
 questions[37]= "38)  Para validar la consistencia en el an&aacute;lisis estructurado se utiliza:";
 choices[37]= new Array();
 choices[37][0] = "M&eacute;trica v3";
 choices[37][1] = "La t&eacute;cnica DFQM (Data Flow Quality Model)";
 choices[37][2] = "El balanceo entre los DFD's de niveles consecutivos";
 choices[37][3] = "El balanceo entre los DFD's de igual nivel";
 answers[37] = 2;
 units[37] = ['85'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 7312. ";
 preguntaids[37] = 7312


//  Id pregunta: 7044 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[38]= new Array();
 choices[38][0] = "Abstracci&oacute;n";
 choices[38][1] = "Encapsulaci&oacute;n";
 choices[38][2] = "Independencia";
 choices[38][3] = "Modularidad";
 answers[38] = 2;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 7044. ";
 preguntaids[38] = 7044


//  Id pregunta: 5900 Año de creación de pregunta: 2007
 questions[39]= "40)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad / Relaci&oacute;n), &iquest;cu&aacute;l de las siguientesafirmaciones es cierta?";
 choices[39]= new Array();
 choices[39][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos";
 choices[39][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo";
 choices[39][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo";
 choices[39][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece";
 answers[39] = 2;
 units[39] = ['85'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 5900. ";
 preguntaids[39] = 5900


//  Id pregunta: 7309 Año de creación de pregunta: 2010
 questions[40]= "41)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[40]= new Array();
 choices[40][0] = "Definen el Interfaz del Usuario";
 choices[40][1] = "Son parte del sistema";
 choices[40][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[40][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[40] = 3;
 units[40] = ['85'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7309. ";
 preguntaids[40] = 7309


//  Id pregunta: 7549 Año de creación de pregunta: 2010
 questions[41]= "42)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Modelo Entidad/Relaci&oacute;n.";
 choices[41][1] = "Diagrama de Flujo de Datos.";
 choices[41][2] = "Diagrama de Contexto.";
 choices[41][3] = "Modelo de Datos.";
 answers[41] = 0;
 units[41] = ['85'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 7549. Map 2005";
 preguntaids[41] = 7549


//  Id pregunta: 7592 Año de creación de pregunta: 2010
 questions[42]= "43)  Dentro de la orientaci&oacute;n a objetos, &iquest;qu&eacute; t&eacute;rmino expresa que los datos de un objeto s&oacute;lo pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos?";
 choices[42]= new Array();
 choices[42][0] = "Reusabilidad.";
 choices[42][1] = "Encapsulaci&oacute;n.";
 choices[42][2] = "Persistencia.";
 choices[42][3] = "Herencia.";
 answers[42] = 1;
 units[42] = ['85'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 7592. Map 2006";
 preguntaids[42] = 7592


//  Id pregunta: 5787 Año de creación de pregunta: 2007
 questions[43]= "44)  El elemento b&aacute;sico de UML que se define como conjunto nominado de operaciones que caracteriza el comportamiento de un elemento es";
 choices[43]= new Array();
 choices[43][0] = "una clase";
 choices[43][1] = "una interfaz";
 choices[43][2] = "un componente";
 choices[43][3] = "un nodo";
 answers[43] = 1;
 units[43] = ['85'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 5787. ";
 preguntaids[43] = 5787


//  Id pregunta: 6218 Año de creación de pregunta: 2003
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[44]= new Array();
 choices[44][0] = "Interrelaciones";
 choices[44][1] = "Sometimiento";
 choices[44][2] = "Generalizaci&oacute;n";
 choices[44][3] = "Agregaci&oacute;n";
 answers[44] = 1;
 units[44] = ['85'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6218. Examen TIC A Castilla La Mancha 2007";
 preguntaids[44] = 6218


//  Id pregunta: 6254 Año de creación de pregunta: 2003
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[45]= new Array();
 choices[45][0] = "RMI";
 choices[45][1] = "JINI";
 choices[45][2] = "EJB";
 choices[45][3] = "CORBA";
 answers[45] = 3;
 units[45] = ['85'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6254. ";
 preguntaids[45] = 6254


//  Id pregunta: 7897 Año de creación de pregunta: 2011
 questions[46]= "47)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[46]= new Array();
 choices[46][0] = "Herencia.";
 choices[46][1] = "Extensibilidad.";
 choices[46][2] = "Sobrecarga.";
 choices[46][3] = "Polimorfismo.";
 answers[46] = 3;
 units[46] = ['85'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 7897. Examen TIC A1 2010";
 preguntaids[46] = 7897


//  Id pregunta: 7582 Año de creación de pregunta: 2010
 questions[47]= "48)  En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[47]= new Array();
 choices[47][0] = "Contiene definiciones de todos los objetos de datos gestionados por el software.";
 choices[47][1] = "Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones.";
 choices[47][2] = "Almacena tan s&oacute;lo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos.";
 choices[47][3] = "Contiene procedimientos almacenados.";
 answers[47] = 0;
 units[47] = ['85'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7582. Map 2006";
 preguntaids[47] = 7582


//  Id pregunta: 5979 Año de creación de pregunta: 2007
 questions[48]= "49)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[48]= new Array();
 choices[48][0] = "Warnier-Orr";
 choices[48][1] = "Rumbaugh";
 choices[48][2] = "Jacobson";
 choices[48][3] = "Booch";
 answers[48] = 2;
 units[48] = ['85'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 5979. ";
 preguntaids[48] = 5979


//  Id pregunta: 7159 Año de creación de pregunta: 2010
 questions[49]= "50)  Cuando se pasa a tablas una relaci&oacute;n N:M";
 choices[49]= new Array();
 choices[49][0] = "Se generan restricciones de integridad referencial.";
 choices[49][1] = "No hay que preocuparse por la integridad referencial.";
 choices[49][2] = "Hay que modificar las claves ajenas de las entidades participantes en la relaci&oacute;n.";
 choices[49][3] = "No se generan claves ajenas nada m&aacute;s que para los atributos propios de la relaci&oacute;n.";
 answers[49] = 0;
 units[49] = ['85'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7159. ";
 preguntaids[49] = 7159


//  Id pregunta: 7046 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un componente de CORBA?";
 choices[50]= new Array();
 choices[50][0] = "Dynamic Invocation Interface (DII)";
 choices[50][1] = "Object Request Broker (ORB)";
 choices[50][2] = "Dynamic Skeleton Interface (DSI)";
 choices[50][3] = "Todos lo son";
 answers[50] = 3;
 units[50] = ['85'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 7046. ";
 preguntaids[50] = 7046


//  Id pregunta: 6879 Año de creación de pregunta: 2010
 questions[51]= "52)  Un diagrama de transici&oacute;n de estados:";
 choices[51]= new Array();
 choices[51][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[51][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[51][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[51][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[51] = 3;
 units[51] = ['85'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6879. TIC A 2009";
 preguntaids[51] = 6879


//  Id pregunta: 7157 Año de creación de pregunta: 2010
 questions[52]= "53)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[52]= new Array();
 choices[52][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[52][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[52][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[52][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[52] = 1;
 units[52] = ['85'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 7157. ";
 preguntaids[52] = 7157


//  Id pregunta: 7506 Año de creación de pregunta: 2010
 questions[53]= "54)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n, &iquest;qu&eacute; se entiende como grado de una tabla?";
 choices[53]= new Array();
 choices[53][0] = "El n&uacute;mero de filas de la tabla.";
 choices[53][1] = "El n&uacute;mero de columnas de la tabla.";
 choices[53][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n.";
 choices[53][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas.";
 answers[53] = 1;
 units[53] = ['85'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7506. Map 2005";
 preguntaids[53] = 7506


//  Id pregunta: 7306 Año de creación de pregunta: 2010
 questions[54]= "55)  En el an&aacute;lisis estructurado un sistema se puede modelizar completamente con:";
 choices[54]= new Array();
 choices[54][0] = "Modelo Funcional, Modelo Est&aacute;tico y Modelo Din&aacute;mico";
 choices[54][1] = "Modelo de Procesos y Modelo de Datos";
 choices[54][2] = "Modelo Funcional, Modelo de Clases y Modelo de Casos de Uso";
 choices[54][3] = "Modelo Funcional y Modelo E/R";
 answers[54] = 0;
 units[54] = ['85'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 7306. ";
 preguntaids[54] = 7306


//  Id pregunta: 7753 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Qu&eacute; propiedad no es inherente a la orientaci&oacute;n a objetos?";
 choices[55]= new Array();
 choices[55][0] = "Polimorfismo.";
 choices[55][1] = "Volatilidad.";
 choices[55][2] = "Herencia.";
 choices[55][3] = "Encapsulaci&oacute;n.";
 answers[55] = 1;
 units[55] = ['85'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 7753. ";
 preguntaids[55] = 7753


//  Id pregunta: 6022 Año de creación de pregunta: 2003
 questions[56]= "57)  Se&ntilde;ale, &iquest;cu&aacute;l de los siguientes t&eacute;rminos no es un elemento de los Diagramas de Flujos de Datos (DFD)?:";
 choices[56]= new Array();
 choices[56][0] = "Funci&oacute;n.";
 choices[56][1] = "Proceso.";
 choices[56][2] = "Flujo de recursos.";
 choices[56][3] = "Almac&eacute;n.";
 answers[56] = 0;
 units[56] = ['85'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6022. TIC B 2007";
 preguntaids[56] = 6022


//  Id pregunta: 6997 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[57]= new Array();
 choices[57][0] = "La clase DataRow representa una fila de datos en un DataTable";
 choices[57][1] = "La clase DataRow representa una cach&eacute; de memoria interna de datos";
 choices[57][2] = "La clase DataRow representa una tabla de datos en memoria";
 choices[57][3] = "La clase DataRow representa el esquema de una columna en una DataTable";
 answers[57] = 0;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6997. TIC-B 2009 bloque desarrollo";
 preguntaids[57] = 6997


//  Id pregunta: 6613 Año de creación de pregunta: 2009
 questions[58]= "59)  &iquest;Cu&aacute;l de estos diagramas de UML no est&aacute; categorizado como un diagrama de comportamiento?";
 choices[58]= new Array();
 choices[58][0] = "Diagrama de interacci&oacute;n.";
 choices[58][1] = "Diagrama de casos de uso.";
 choices[58][2] = "Diagrama de objetos.";
 choices[58][3] = "Diagrama de actividad.";
 answers[58] = 2;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6613. ";
 preguntaids[58] = 6613


//  Id pregunta: 7611 Año de creación de pregunta: 2010
 questions[59]= "60)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[59]= new Array();
 choices[59][0] = "Acoplamiento de control.";
 choices[59][1] = "Acoplamiento por estampado.";
 choices[59][2] = "Acoplamiento por contenido.";
 choices[59][3] = "Acoplamiento externo.";
 answers[59] = 2;
 units[59] = ['85'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7611. Map 2006";
 preguntaids[59] = 7611


//  Id pregunta: 7308 Año de creación de pregunta: 2010
 questions[60]= "61)  Cual de las siguientes t&eacute;cnicas no se contempla en el An&aacute;lisis Estructurado";
 choices[60]= new Array();
 choices[60][0] = "Diagrama de Flujos de Control";
 choices[60][1] = "Diccionario de Datos";
 choices[60][2] = "Diagrama de Interaci&oacute;n";
 choices[60][3] = "Tabla de Activaci&oacute;n de Procesos";
 answers[60] = 2;
 units[60] = ['85'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7308. ";
 preguntaids[60] = 7308


//  Id pregunta: 5703 Año de creación de pregunta: 2007
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes diagramas no se utiliza en UML?";
 choices[61]= new Array();
 choices[61][0] = "Diagrama de casos de uso";
 choices[61][1] = "Diagrama global de interacciones";
 choices[61][2] = "Diagrama de secuencia";
 choices[61][3] = "Diagrama de flujos de datos";
 answers[61] = 3;
 units[61] = ['85', '86'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 5703. ";
 preguntaids[61] = 5703


//  Id pregunta: 6248 Año de creación de pregunta: 2003
 questions[62]= "63)  En el modelo E/R, las relaciones d&eacute;biles:";
 choices[62]= new Array();
 choices[62][0] = "Relacionan una entidad fuerte con dos o m&aacute;s entidades, fuertes o d&eacute;biles";
 choices[62][1] = "Relacionan dos entidades d&eacute;biles";
 choices[62][2] = "Relacionan una entidad d&eacute;bil con una fuerte";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 2;
 units[62] = ['85'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6248. ";
 preguntaids[62] = 6248


//  Id pregunta: 7161 Año de creación de pregunta: 2010
 questions[63]= "64)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[63]= new Array();
 choices[63][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[63][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[63][2] = "No permite relaciones reflexivas.";
 choices[63][3] = "No se pueden representar las propiedades de las entidades.";
 answers[63] = 0;
 units[63] = ['85'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 7161. ";
 preguntaids[63] = 7161


//  Id pregunta: 8013 Año de creación de pregunta: 2011
 questions[64]= "65)  En los diagramas estructurados (Nassi-Schneiderman):";
 choices[64]= new Array();
 choices[64][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[64][1] = "No hay flechas de uni&oacute;n.";
 choices[64][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[64][3] = "Las cajas no son contiguas.";
 answers[64] = 1;
 units[64] = ['85'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 8013. Examen TIC A2 2010";
 preguntaids[64] = 8013


//  Id pregunta: 6253 Año de creación de pregunta: 2003
 questions[65]= "66)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[65]= new Array();
 choices[65][0] = "Estado, Comportamiento e Identidad";
 choices[65][1] = "Comportamiento, Identidad y Relaciones";
 choices[65][2] = "Estado, Identidad y Relaciones";
 choices[65][3] = "Todas son falsas";
 answers[65] = 0;
 units[65] = ['85'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6253. ";
 preguntaids[65] = 6253


//  Id pregunta: 7160 Año de creación de pregunta: 2010
 questions[66]= "67)  Cuando se transforma un modelo E/R a modelo relacional las relaciones 1:N:";
 choices[66]= new Array();
 choices[66][0] = "Se transforman por el mecanismo de propagaci&oacute;n de clave ajena.";
 choices[66][1] = "Generan una tabla igual que una relaci&oacute;n N:M.";
 choices[66][2] = "Dependiendo del tipo de consultas posteriores se genera o no la tabla.";
 choices[66][3] = "Si el volumen de datos es muy grande se genera la tabla.";
 answers[66] = 0;
 units[66] = ['85'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 7160. ";
 preguntaids[66] = 7160


//  Id pregunta: 6249 Año de creación de pregunta: 2003
 questions[67]= "68)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[67]= new Array();
 choices[67][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[67][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[67][2] = "Existen atributos simples, mixtos y compuestos";
 choices[67][3] = "Existen atributos monovalorados y multivalorados";
 answers[67] = 3;
 units[67] = ['85'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 6249. ";
 preguntaids[67] = 6249


//  Id pregunta: 6024 Año de creación de pregunta: 2003
 questions[68]= "69)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[68]= new Array();
 choices[68][0] = "Sint&aacute;ctica.";
 choices[68][1] = "Sem&aacute;ntica estructural.";
 choices[68][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[68][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[68] = 2;
 units[68] = ['85'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6024. TIC B 2007";
 preguntaids[68] = 6024


//  Id pregunta: 6614 Año de creación de pregunta: 2009
 questions[69]= "70)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.5?";
 choices[69]= new Array();
 choices[69][0] = "Diagrama global de interacci&oacute;n";
 choices[69][1] = "Diagrama de colaboraci&oacute;n";
 choices[69][2] = "Diagrama de estructura compuesta";
 choices[69][3] = "Diagrama de tiempos";
 answers[69] = 1;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6614. ";
 preguntaids[69] = 6614


//  Id pregunta: 5970 Año de creación de pregunta: 2007
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[70]= new Array();
 choices[70][0] = "Diagrama de actividades";
 choices[70][1] = "Diagrama de clases";
 choices[70][2] = "Diagrama de secuencia";
 choices[70][3] = "Diagrama de frecuencia";
 answers[70] = 3;
 units[70] = ['85'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 5970. ";
 preguntaids[70] = 5970


//  Id pregunta: 5766 Año de creación de pregunta: 2007
 questions[71]= "72)  Cual de las siguientes opciones es correcta";
 choices[71]= new Array();
 choices[71][0] = "en el modelo jer&aacute;rquico no se exige que el usuario conozca las vinculaciones entre entidades";
 choices[71][1] = "los lenguajes del modelo en red son relacionales";
 choices[71][2] = "el modelo en red responde a una estructura arborescente a varios niveles";
 choices[71][3] = "en el modelo relacional no existen vinculaciones explicitas entre entidades";
 answers[71] = 3;
 units[71] = ['85'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 5766. ";
 preguntaids[71] = 5766


//  Id pregunta: 5687 Año de creación de pregunta: 2007
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[72]= new Array();
 choices[72][0] = "UML es un lenguaje unificado de modelado.";
 choices[72][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[72][2] = "UML s&oacute;lo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[72][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[72] = 2;
 units[72] = ['85'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 5687. ";
 preguntaids[72] = 5687


//  Id pregunta: 7311 Año de creación de pregunta: 2010
 questions[73]= "74)  Que NO se puede incluir en un DFD de nivel 2";
 choices[73]= new Array();
 choices[73][0] = "Procesos";
 choices[73][1] = "Decisiones L&oacute;gicas";
 choices[73][2] = "Flujos de Datos";
 choices[73][3] = "Almacenes de Datos";
 answers[73] = 1;
 units[73] = ['85'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 7311. ";
 preguntaids[73] = 7311


//  Id pregunta: 7002 Año de creación de pregunta: 2010
 questions[74]= "75)  Un diccionario de datos proporciona un enfoque organizado para representar las caracter&iacute;sticas de cada objeto de datos y elemento de control. Adem&aacute;s:";
 choices[74]= new Array();
 choices[74][0] = "El diccionario de datos se puede tratar como una base de datos";
 choices[74][1] = "El formato de diccionario no var&iacute;a aunque se implemente en distintas herramientas";
 choices[74][2] = "Los flujos que partes o llegan a los almacenes definen la interfaz entre el sistema y el mundo exterior";
 choices[74][3] = "Los almacenes de datos representan la informaci&oacute;n din&aacute;mica del sistema";
 answers[74] = 0;
 units[74] = ['85'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7002. TIC-B 2009 bloque desarrollo";
 preguntaids[74] = 7002


