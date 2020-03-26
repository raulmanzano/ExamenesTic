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
//  Id pregunta: 7574 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[0]= new Array();
 choices[0][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[0][1] = "EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[0][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[0][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[0] = 2;
 units[0] = ['68'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7574. Map 2006";
 preguntaids[0] = 7574


//  Id pregunta: 1944 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos NO es un m&eacute;todo de representaci&oacute;n simb&oacute;lica del conocimiento?";
 choices[1]= new Array();
 choices[1][0] = "Redes sem&aacute;nticas";
 choices[1][1] = "Redes Neuronales";
 choices[1][2] = "Marcos";
 choices[1][3] = "Reglas";
 answers[1] = 1;
 units[1] = ['68'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1944. ";
 preguntaids[1] = 1944


//  Id pregunta: 7528 Año de creación de pregunta: 2010
 questions[2]= "3)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta:";
 choices[2]= new Array();
 choices[2][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado.";
 choices[2][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido.";
 choices[2][2] = "En OWL DL, una clase no puede ser instancia de otra clase.";
 choices[2][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud.";
 answers[2] = 2;
 units[2] = ['68'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7528. Map 2005";
 preguntaids[2] = 7528


//  Id pregunta: 2859 Año de creación de pregunta: 2002
 questions[3]= "4)  En un marco, al pedir el valor de un slot:";
 choices[3]= new Array();
 choices[3][0] = "Primero se dar&aacute; el valor por defecto, si este no existiera, el valor en curso, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[3][1] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[3][2] = "Primero se ejecutar&aacute; if-required, y si no finaliza con &eacute;xito, se dar&aacute; el valor por defecto, y si este no existiera, el valor en curso, Sini, se termina con error.";
 choices[3][3] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-needed";
 answers[3] = 3;
 units[3] = ['68'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2859. ";
 preguntaids[3] = 2859


//  Id pregunta: 7581 Año de creación de pregunta: 2010
 questions[4]= "5)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3 de Quinlan)";
 choices[4]= new Array();
 choices[4][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a";
 choices[4][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n";
 choices[4][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado";
 choices[4][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas e inclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[4] = 1;
 units[4] = ['68'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7581. Map 2006";
 preguntaids[4] = 7581


//  Id pregunta: 7646 Año de creación de pregunta: 2010
 questions[5]= "6)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[5]= new Array();
 choices[5][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia.";
 choices[5][1] = "Los dos son equivalentes.";
 choices[5][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico.";
 choices[5][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento.";
 answers[5] = 3;
 units[5] = ['68'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7646. Map 2006";
 preguntaids[5] = 7646


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[6]= "7)  Dado un &aacute;rbol binario, cuyo recorrido en pre-orden es 'Redhat, Debian, Fedora, Mandriva, Archilinux', &iquest;cu&aacute;l de las siguientes opciones podr&iacute;a ser un recorrido en in-orden?";
 choices[6]= new Array();
 choices[6][0] = "Fedora, Archilinux, Debian, Mandriva, Redhat.";
 choices[6][1] = "Fedora, Debian, Archilinux, Mandriva, Redhat.";
 choices[6][2] = "Debian, Fedora, Redhat, Archilinux, Mandriva.";
 choices[6][3] = "Debian, Mandriva, Fedora, Archilinux, Redhat.";
 answers[6] = 0;
 units[6] = ['68'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 726. AGE A2 2015";
 preguntaids[6] = 726


//  Id pregunta: 3055 Año de creación de pregunta: 2002
 questions[7]= "8)  Si a un sistema experto se le vac&iacute;a su base de conocimientos dejando intactos el resto de sus componentes (base de reglas y motor de inferencia) para que se pueda aplicar a temas similares al que dio lugar al desarrollo se denomina  sistema:";
 choices[7]= new Array();
 choices[7][0] = "Kernel o n&uacute;cleo";
 choices[7][1] = "Concha o shell";
 choices[7][2] = "Sistema inferente";
 choices[7][3] = "Sistema fuente";
 answers[7] = 1;
 units[7] = ['68'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3055. ";
 preguntaids[7] = 3055


//  Id pregunta: 2679 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[8]= new Array();
 choices[8][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[8][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[8][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[8][3] = "Nada de lo anterior es cierto";
 answers[8] = 2;
 units[8] = ['68'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2679. ";
 preguntaids[8] = 2679


//  Id pregunta: 2510 Año de creación de pregunta: 2004
 questions[9]= "10)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[9]= new Array();
 choices[9][0] = "Perceptron";
 choices[9][1] = "Adaline";
 choices[9][2] = "Art";
 choices[9][3] = "Madaline";
 answers[9] = 2;
 units[9] = ['68'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2510. Examen TIC MAP B 2004";
 preguntaids[9] = 2510


//  Id pregunta: 8363 Año de creación de pregunta: 2011
 questions[10]= "11)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[10]= new Array();
 choices[10][0] = "Insercci&oacute;n";
 choices[10][1] = "Burbuja";
 choices[10][2] = "Selecci&oacute;n";
 choices[10][3] = "Combinaci&oacute;n";
 answers[10] = 1;
 units[10] = ['67', '68'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8363. Analista Ayto. Madrid 2010";
 preguntaids[10] = 8363


//  Id pregunta: 2623 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de la arquitectura basada en inteligencia artificial?:";
 choices[11]= new Array();
 choices[11][0] = "Base de conocimientos";
 choices[11][1] = "Sistema inferencial";
 choices[11][2] = "Motor inferencial";
 choices[11][3] = "Memoria de trabajo";
 answers[11] = 2;
 units[11] = ['68'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2623. ";
 preguntaids[11] = 2623


//  Id pregunta: 3038 Año de creación de pregunta: 2002
 questions[12]= "13)  Se&ntilde;alar la sentencia correcta respecto de la ingenier&iacute;a del conocimiento:";
 choices[12]= new Array();
 choices[12][0] = "Las reglas de producci&oacute;n y las reglas deductivas son maneras de representaci&oacute;n param&eacute;trica del conocimiento";
 choices[12][1] = "Ejemplos de modelos de representaci&oacute;n del conocimiento en forma param&eacute;trica son el perceptr&oacute;n y las redes neuronales";
 choices[12][2] = "Uno de los algoritmos m&aacute;s utilizados en el proceso de entrenamiento viene dado por el filtrado de Waltz";
 choices[12][3] = "El razonamiento no mon&oacute;tono es un modelo de razonamiento cuyo objetivo es asignar medidas o factores de certeza a un conjunto de proposiciones intermedias a partir de las asignadas a las proposiciones iniciales";
 answers[12] = 1;
 units[12] = ['68'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3038. ";
 preguntaids[12] = 3038


//  Id pregunta: 6366 Año de creación de pregunta: 2003
 questions[13]= "14)  En OLAP, &iquest;Qu&eacute; son las variables complejas?";
 choices[13]= new Array();
 choices[13][0] = "Las que tienen un tipo complejo.";
 choices[13][1] = "Las que se calculan a partir de otras variables.";
 choices[13][2] = "Las que necesitan m&aacute;s de una dimensi&oacute;n para ser almacenadas.";
 choices[13][3] = "Las que no son representables.";
 answers[13] = 0;
 units[13] = ['68'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6366. Examen 2006 JCYL";
 preguntaids[13] = 6366


//  Id pregunta: 2901 Año de creación de pregunta: 2002
 questions[14]= "15)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[14]= new Array();
 choices[14][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[14][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[14][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[14][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[14] = 1;
 units[14] = ['68'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2901. ";
 preguntaids[14] = 2901


//  Id pregunta: 3418 Año de creación de pregunta: 2006
 questions[15]= "16)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[15]= new Array();
 choices[15][0] = "Redes neuronales; representaci&oacute;n por marcos y sistemas basados en restricciones";
 choices[15][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[15][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[15][3] = "Algoritmos gen&eacute;ticos; redes neuronales y perceptr&oacute;n";
 answers[15] = 3;
 units[15] = ['68'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3418. ";
 preguntaids[15] = 3418


//  Id pregunta: 3417 Año de creación de pregunta: 2006
 questions[16]= "17)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[16]= new Array();
 choices[16][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[16][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[16][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[16][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[16] = 0;
 units[16] = ['68'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3417. ";
 preguntaids[16] = 3417


//  Id pregunta: 2616 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[17]= new Array();
 choices[17][0] = "Redes sem&aacute;nticas";
 choices[17][1] = "Diagramas";
 choices[17][2] = "Marcos";
 choices[17][3] = "Guiones";
 answers[17] = 1;
 units[17] = ['68'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2616. ";
 preguntaids[17] = 2616


//  Id pregunta: 2919 Año de creación de pregunta: 2002
 questions[18]= "19)  KADS es una metodolog&iacute;a de desarrollo de sistemas basados en en el conocimiento. Se divide en varias fases, entre las que no se encuentra:";
 choices[18]= new Array();
 choices[18][0] = "Refino de la base de conocimiento";
 choices[18][1] = "Implementaci&oacute;n";
 choices[18][2] = "Uso";
 choices[18][3] = "Clasificaci&oacute;n";
 answers[18] = 3;
 units[18] = ['68'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2919. ";
 preguntaids[18] = 2919


//  Id pregunta: 2904 Año de creación de pregunta: 2002
 questions[19]= "20)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[19]= new Array();
 choices[19][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[19][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[19][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[19][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[19] = 3;
 units[19] = ['68'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2904. ";
 preguntaids[19] = 2904


//  Id pregunta: 2620 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes conceptos no es caracter&iacute;stico de los sistemas expertos?:";
 choices[20]= new Array();
 choices[20][0] = "Base de conocimiento";
 choices[20][1] = "Encadenamiento de reglas";
 choices[20][2] = "Motor de inferencia";
 choices[20][3] = "Proceso algor&iacute;tmico";
 answers[20] = 3;
 units[20] = ['68'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2620. ";
 preguntaids[20] = 2620


//  Id pregunta: 2876 Año de creación de pregunta: 2002
 questions[21]= "22)  En una representaci&oacute;n de tipo simb&oacute;lico de un Sistema Experto Basado en el Conocimiento, al conjunto de campos de informaci&oacute;n (ranuras) que describen un objeto se le da el nombre de:";
 choices[21]= new Array();
 choices[21][0] = "Regla de producci&oacute;n";
 choices[21][1] = "Restricci&oacute;n";
 choices[21][2] = "Red sem&aacute;ntica";
 choices[21][3] = "Marco";
 answers[21] = 3;
 units[21] = ['68'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2876. ";
 preguntaids[21] = 2876


//  Id pregunta: 2665 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[22]= new Array();
 choices[22][0] = "Si";
 choices[22][1] = "No, pero reglas y restricciones si";
 choices[22][2] = "No, pero reglas y marcos si";
 choices[22][3] = "No";
 answers[22] = 0;
 units[22] = ['68'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2665. ";
 preguntaids[22] = 2665


//  Id pregunta: 3414 Año de creación de pregunta: 2006
 questions[23]= "24)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[23]= new Array();
 choices[23][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[23][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[23][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[23][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[23] = 3;
 units[23] = ['68'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3414. ";
 preguntaids[23] = 3414


//  Id pregunta: 2625 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes es un lenguaje espec&iacute;fico de la ingenier&iacute;a del conocimiento?:";
 choices[24]= new Array();
 choices[24][0] = "C++";
 choices[24][1] = "Java";
 choices[24][2] = "PROLOG";
 choices[24][3] = "PASCAL";
 answers[24] = 2;
 units[24] = ['68'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2625. ";
 preguntaids[24] = 2625


//  Id pregunta: 3265 Año de creación de pregunta: 2003
 questions[25]= "26)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[25]= new Array();
 choices[25][0] = "Representan conceptos estereotipados o patrones predefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[25][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[25][2] = "el marco es una entidad din&aacute;mica, con procedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[25][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[25] = 1;
 units[25] = ['68'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3265. ";
 preguntaids[25] = 3265


//  Id pregunta: 2885 Año de creación de pregunta: 2002
 questions[26]= "27)  Entre las formas de representaci&oacute;n param&eacute;trica del conocimiento se encuentra:";
 choices[26]= new Array();
 choices[26][0] = "Reglas de producci&oacute;n";
 choices[26][1] = "Reglas sem&aacute;nticas";
 choices[26][2] = "Redes neuronales";
 choices[26][3] = "Restricciones";
 answers[26] = 2;
 units[26] = ['68'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2885. ";
 preguntaids[26] = 2885


//  Id pregunta: 2518 Año de creación de pregunta: 2004
 questions[27]= "28)  En inteligencia artificial, los marcos";
 choices[27]= new Array();
 choices[27][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[27][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[27][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[27][3] = "Se representan mediante nodos y arcos";
 answers[27] = 0;
 units[27] = ['68'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2518. Similar a examen TIC SS A 2003";
 preguntaids[27] = 2518


//  Id pregunta: 8448 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[28]= new Array();
 choices[28][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[28][1] = "Utiliza una estructura eminentemente procedural";
 choices[28][2] = "Utiliza una estructura eminentemente declarativa";
 choices[28][3] = "Resuelve problemas heur&iacute;sticos";
 answers[28] = 1;
 units[28] = ['68'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8448. ";
 preguntaids[28] = 8448


//  Id pregunta: 2875 Año de creación de pregunta: 2002
 questions[29]= "30)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[29]= new Array();
 choices[29][0] = "M&eacute;todo de la varianza";
 choices[29][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[29][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[29][3] = "M&eacute;todo de Kohonen";
 answers[29] = 2;
 units[29] = ['68'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2875. ";
 preguntaids[29] = 2875


//  Id pregunta: 7907 Año de creación de pregunta: 2011
 questions[30]= "31)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[30]= new Array();
 choices[30][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[30][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[30][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[30][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[30] = 0;
 units[30] = ['68'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7907. Examen TIC A1 2010";
 preguntaids[30] = 7907


//  Id pregunta: 9561 Año de creación de pregunta: 2014
 questions[31]= "32)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[31]= new Array();
 choices[31][0] = "Facilidad de representaci&oacute;n";
 choices[31][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[31][2] = "Modularidad";
 choices[31][3] = "Flexibilidad";
 answers[31] = 1;
 units[31] = ['68'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9561. Seg&uacute;n ASTIC: ventajas: facilidad de representaci&oacute;n, modularidad, flexibilidad, eficiencia;  desventajas: direcci&oacute;n de inferencia prefijada, hay dominios de conocimiento que  formulados en reglas dan lugar a bases de conocimiento muy grandes debido  a que el conocimiento se expresa mejor mediante restricciones";
 preguntaids[31] = 9561


//  Id pregunta: 7989 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "&Aacute;rbol Binario.";
 choices[32][1] = "Lista.";
 choices[32][2] = "Lista enlazada.";
 choices[32][3] = "&Aacute;rbol-B.";
 answers[32] = 3;
 units[32] = ['68'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7989. Examen TIC A2 2010";
 preguntaids[32] = 7989


//  Id pregunta: 2978 Año de creación de pregunta: 2002
 questions[33]= "34)  Los mecanismos de inferencia usados en los sistemas expertos incluyen:";
 choices[33]= new Array();
 choices[33][0] = "La reducci&oacute;n con encadenamiento (chaining), herencia, inducci&oacute;n y abducci&oacute;n";
 choices[33][1] = "Redes sem&aacute;nticas, planificadores (skeletal planners), pizarras (blackboards) y reglas de producci&oacute;n";
 choices[33][2] = "Aserciones y &aacute;rboles de decisi&oacute;n";
 choices[33][3] = "Shells, correspondencia heur&iacute;stica y conjuntos borrosos (fuzzy)";
 answers[33] = 3;
 units[33] = ['68'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2978. ";
 preguntaids[33] = 2978


//  Id pregunta: 2661 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[34]= new Array();
 choices[34][0] = "El motor de base de datos JET de Access";
 choices[34][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[34][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[34][3] = "El Ayudante de Office";
 answers[34] = 3;
 units[34] = ['58', '68'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2661. ";
 preguntaids[34] = 2661


//  Id pregunta: 5183 Año de creación de pregunta: 2003
 questions[35]= "36)  Respecto a SDH &iquest;cual de las siguientes opciones es falsa?";
 choices[35]= new Array();
 choices[35][0] = "Est&aacute; internacionalmente extendido";
 choices[35][1] = "Posee capacidad poderosa de administraci&oacute;n";
 choices[35][2] = "Brinda m&aacute;s ancho de banda que PDH";
 choices[35][3] = "Es un est&aacute;ndar establecido &uacute;nicamente en Am&eacute;rica";
 answers[35] = 3;
 units[35] = ['68'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 5183. Pregunta similar a la del ex&aacute;men de SS del 2003.";
 preguntaids[35] = 5183


//  Id pregunta: 2606 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ingenier&iacute;a del conocimiento es falsa?:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo trata problemas de tipo heur&iacute;stico";
 choices[36][1] = "No utiliza enfoques algor&iacute;tmicos";
 choices[36][2] = "Requiere una estructura eminentemente declarativa";
 choices[36][3] = "Los programas que generan son primordialmente procedimentales";
 answers[36] = 3;
 units[36] = ['68'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2606. ";
 preguntaids[36] = 2606


//  Id pregunta: 7609 Año de creación de pregunta: 2010
 questions[37]= "38)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[37]= new Array();
 choices[37][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica.";
 choices[37][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos.";
 choices[37][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados.";
 choices[37][3] = "XML Schema no tiene tipos predefinidos.";
 answers[37] = 1;
 units[37] = ['68'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7609. Map 2006";
 preguntaids[37] = 7609


//  Id pregunta: 3416 Año de creación de pregunta: 2006
 questions[38]= "39)  Se&ntilde;ale qu&eacute; opci&oacute;n contiene los distintos mecanismos de inferencia utilizando la representaci&oacute;n del conocimiento basada en marcos (frameworks):";
 choices[38]= new Array();
 choices[38][0] = "Deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y herencia de marcos";
 choices[38][1] = "Deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 choices[38][2] = "Deducci&oacute;n de valores de slots; herencia de slots; y equiparaci&oacute;n de marcos";
 choices[38][3] = "Reducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 answers[38] = 1;
 units[38] = ['68'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3416. ";
 preguntaids[38] = 3416


//  Id pregunta: 3413 Año de creación de pregunta: 2006
 questions[39]= "40)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas...";
 choices[39]= new Array();
 choices[39][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[39][1] = "Utilizan slots donde cada slot se corresponde con una idea";
 choices[39][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[39][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[39] = 0;
 units[39] = ['68'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3413. ";
 preguntaids[39] = 3413


//  Id pregunta: 8039 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[40]= new Array();
 choices[40][0] = "Las redes neuronales.";
 choices[40][1] = "Look and Find.";
 choices[40][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[40][3] = "Las redes bayesianas.";
 answers[40] = 1;
 units[40] = ['68', '72'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8039. Examen TIC A2 2010";
 preguntaids[40] = 8039


//  Id pregunta: 3027 Año de creación de pregunta: 2002
 questions[41]= "42)  Se dice que el conocimiento, independientemente del paradigma de representaci&oacute;n utilizado, tiene una doble componente:";
 choices[41]= new Array();
 choices[41][0] = "Los hechos constatables y los mecanismos de inferencia";
 choices[41][1] = "Los procedimientos y los mecanismos de deducci&oacute;n";
 choices[41][2] = "Los objetos y las relaciones entre los mismos";
 choices[41][3] = "El componente simb&oacute;lico y el componente procedimental";
 answers[41] = 0;
 units[41] = ['68'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3027. ";
 preguntaids[41] = 3027


//  Id pregunta: 2630 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje declarativo?";
 choices[42]= new Array();
 choices[42][0] = "Prolog";
 choices[42][1] = "LISP";
 choices[42][2] = "Clos";
 choices[42][3] = "Todos los lenguajes anteriores son declarativos";
 answers[42] = 3;
 units[42] = ['68'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2630. ";
 preguntaids[42] = 2630


//  Id pregunta: 7990 Año de creación de pregunta: 2011
 questions[43]= "44)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[43]= new Array();
 choices[43][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[43][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[43][2] = "No contiene ciclos.";
 choices[43][3] = "Es conexo y contiene un ciclo.";
 answers[43] = 1;
 units[43] = ['68'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7990. Examen TIC A2 2010";
 preguntaids[43] = 7990


//  Id pregunta: 7719 Año de creación de pregunta: 2010
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?";
 choices[44]= new Array();
 choices[44][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[44][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias.";
 choices[44][2] = "RSS es parte de la familia de los formatos XML.";
 choices[44][3] = "Es un acr&oacute;nimo de &laquo;Really Simple Syndication&raquo;.";
 answers[44] = 1;
 units[44] = ['68'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7719. Map 2007";
 preguntaids[44] = 7719


//  Id pregunta: 2647 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[45]= new Array();
 choices[45][0] = "Conocimiento del sistema superior al del experto";
 choices[45][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[45][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[45][3] = "Todas las anteriores";
 answers[45] = 1;
 units[45] = ['68'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2647. ";
 preguntaids[45] = 2647


//  Id pregunta: 7650 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[46]= new Array();
 choices[46][0] = "El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85001 de la NISO (National Information Standards Organization).";
 choices[46][1] = "Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML (Hypertext Markup Language).";
 choices[46][2] = "Su nivel b&aacute;sico contiene 15 elementos sobre metadatos.";
 choices[46][3] = "Es una iniciativa de la W3C (World Wide Web Consortium).";
 answers[46] = 3;
 units[46] = ['68'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7650. Map 2006";
 preguntaids[46] = 7650


//  Id pregunta: 8891 Año de creación de pregunta: 2013
 questions[47]= "48)  Se&ntilde;ale la frase correcta acerca de los diferentes modelos de representaci&oacute;n del conocimiento:";
 choices[47]= new Array();
 choices[47][0] = "En los procesos de inferencia en redes sem&aacute;nticas el uso de la herencia permite efectuar emparejamientos sin necesidad de un homomorfismo total entre la red pregunta y la red respuesta.";
 choices[47][1] = "La utilizaci&oacute;n de marcos como modo de representaci&oacute;n de conocimiento permite asociar a un concepto un conjunto de atributos est&aacute;ticos, cuya actualizaci&oacute;n o modificaci&oacute;n no forma parte del modelo.";
 choices[47][2] = "El algoritmo de extracci&oacute;n de la ra&iacute;z cuadrada de un n&uacute;mero es un ejemplo de representaci&oacute;n declarativa de conocimiento.";
 choices[47][3] = "En una red neuronal entrenada los pesos de los enlaces entre neuronas dependen solamente del algoritmo de entrenamiento empleado.";
 answers[47] = 0;
 units[47] = ['68'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8891. Examen AGE TIC A1 2011";
 preguntaids[47] = 8891


//  Id pregunta: 2903 Año de creación de pregunta: 2002
 questions[48]= "49)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[48]= new Array();
 choices[48][0] = "Deducci&oacute;n de valores de ranuras";
 choices[48][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[48][2] = "Herencia de ranuras";
 choices[48][3] = "Equiparaci&oacute;n de marcos";
 answers[48] = 2;
 units[48] = ['68'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2903. ";
 preguntaids[48] = 2903


//  Id pregunta: 2895 Año de creación de pregunta: 2002
 questions[49]= "50)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[49]= new Array();
 choices[49][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[49][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[49][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[49][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[49] = 2;
 units[49] = ['68'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2895. ";
 preguntaids[49] = 2895


//  Id pregunta: 2805 Año de creación de pregunta: 2002
 questions[50]= "51)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[50]= new Array();
 choices[50][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[50][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[50][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[50][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[50] = 1;
 units[50] = ['68'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2805. ";
 preguntaids[50] = 2805


//  Id pregunta: 9562 Año de creación de pregunta: 2014
 questions[51]= "52)  En cuanto a las estrategias de inferencia en marcos";
 choices[51]= new Array();
 choices[51][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[51][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[51][2] = "Ambas son ciertas";
 choices[51][3] = "Ninguna es cierta";
 answers[51] = 2;
 units[51] = ['68'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9562. ";
 preguntaids[51] = 9562


//  Id pregunta: 3192 Año de creación de pregunta: 2003
 questions[52]= "53)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[52]= new Array();
 choices[52][0] = "Modelo Simb&oacute;lico";
 choices[52][1] = "Modelo de conocimiento profundo";
 choices[52][2] = "Modelo Param&eacute;trico";
 choices[52][3] = "Razonamiento multinivel";
 answers[52] = 2;
 units[52] = ['68'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3192. ";
 preguntaids[52] = 3192


//  Id pregunta: 2834 Año de creación de pregunta: 2002
 questions[53]= "54)  En la programaci&oacute;n orientada a objetos de los sistemas expertos:";
 choices[53]= new Array();
 choices[53][0] = "Bajo este paradigma los programas se estructuran en procedimientos orientados al proceso";
 choices[53][1] = "Los objetos se comunican entre s&iacute; mediante arcos";
 choices[53][2] = "La especificaci&oacute;n de un objeto es independiente de su implementaci&oacute;n";
 choices[53][3] = "La propiedad de herencia afecta no s&oacute;lo a la componente est&aacute;tica de los objetos (m&eacute;todos) sino tambi&eacute;n a su componente din&aacute;mica";
 answers[53] = 2;
 units[53] = ['68'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2834. ";
 preguntaids[53] = 2834


//  Id pregunta: 1546 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qu&eacute; parte de un sistema experto efect&uacute;a el razonamiento a partir de los datos?";
 choices[54]= new Array();
 choices[54][0] = "Base de Conocimiento.";
 choices[54][1] = "Motor de Inferencia.";
 choices[54][2] = "Interfaz de Adquisici&oacute;n.";
 choices[54][3] = "M&oacute;dulo de Inteligencia artificial.";
 answers[54] = 1;
 units[54] = ['68'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1546. ";
 preguntaids[54] = 1546


//  Id pregunta: 3092 Año de creación de pregunta: 2002
 questions[55]= "56)  Un tesauro es lineal cuando:";
 choices[55]= new Array();
 choices[55][0] = "Las relaciones entre descriptores constituyen una estructura de red";
 choices[55][1] = "Los descriptores se clasifican jer&aacute;rquicamente con un cierto criterio";
 choices[55][2] = "Se componen de una relaci&oacute;n de palabras o descriptores sin conexiones entre ellos";
 choices[55][3] = "Los descriptores se clasifican formando una estructura en anillo";
 answers[55] = 2;
 units[55] = ['68'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3092. ";
 preguntaids[55] = 3092


//  Id pregunta: 3412 Año de creación de pregunta: 2006
 questions[56]= "57)  Para representaci&oacute;n del conocimiento, los m&eacute;todos param&eacute;tricos&hellip;";
 choices[56]= new Array();
 choices[56][0] = "Son preferibles para obtener explicaciones de la forma en que el sistema saca las conclusiones";
 choices[56][1] = "Simulan los mecanismos neuronales del pensamiento";
 choices[56][2] = "Emulan los procesos de razonamiento utilizando modelos simb&oacute;licos";
 choices[56][3] = "Permiten utilizar par&aacute;metros por valor y por variable";
 answers[56] = 1;
 units[56] = ['68'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3412. ";
 preguntaids[56] = 3412


//  Id pregunta: 3337 Año de creación de pregunta: 2004
 questions[57]= "58)  Si hablamos de los procedimientos if-needed,e if-added, es cierto que";
 choices[57]= new Array();
 choices[57][0] = "El procedimiento if-needed es un procedimiento de validadci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a una ranura.";
 choices[57][1] = "El procedimiento if-added es un procedimiento que se ejecuta siempre que se a&ntilde;ade un valor determinado a un slot";
 choices[57][2] = "Ambos forman parte de las facetas declarativas de un marco";
 choices[57][3] = "Las afirmaciones A) y B) son correctas";
 answers[57] = 1;
 units[57] = ['68'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3337. ";
 preguntaids[57] = 3337


//  Id pregunta: 2894 Año de creación de pregunta: 2002
 questions[58]= "59)  Indicar cu&aacute;l de las siguientes no es una estructura v&aacute;lida de marcos en las bases de conocimiento:";
 choices[58]= new Array();
 choices[58][0] = "Jerarqu&iacute;a circular";
 choices[58][1] = "Jerarqu&iacute;a simple";
 choices[58][2] = "Jerarqu&iacute;a m&uacute;ltiple";
 choices[58][3] = "Colecci&oacute;n lineal";
 answers[58] = 0;
 units[58] = ['68'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2894. ";
 preguntaids[58] = 2894


//  Id pregunta: 6842 Año de creación de pregunta: 2010
 questions[59]= "60)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[59]= new Array();
 choices[59][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[59][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[59][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[59][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[59] = 1;
 units[59] = ['67', '68'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6842. ";
 preguntaids[59] = 6842


//  Id pregunta: 3415 Año de creación de pregunta: 2006
 questions[60]= "61)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[60]= new Array();
 choices[60][0] = "if-needed; if-required e if-deleted";
 choices[60][1] = "if-needed; if-required e if-added";
 choices[60][2] = "if-needed; if-deleted e if-added";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = 3;
 units[60] = ['68'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3415. ";
 preguntaids[60] = 3415


//  Id pregunta: 3237 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[61]= new Array();
 choices[61][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[61][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[61][2] = "Es un medio de documentos para personas";
 choices[61][3] = "Todas las anteriores son definiciones correctas";
 answers[61] = 1;
 units[61] = ['68'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3237. ";
 preguntaids[61] = 3237


//  Id pregunta: 3336 Año de creación de pregunta: 2004
 questions[62]= "63)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[62]= new Array();
 choices[62][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[62][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[62][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[62][3] = "Todas son correctas";
 answers[62] = 3;
 units[62] = ['68'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3336. ";
 preguntaids[62] = 3336


//  Id pregunta: 1945 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;De las siguientes cuestiones sobre Ingenier&iacute;a del conocimiento indique cual es FALSA:";
 choices[63]= new Array();
 choices[63][0] = "EI conocimiento puede representarse de forma procedimental.";
 choices[63][1] = "Un sistema experto tiene dos componentes: la base de conocimiento y el motor de inferencia.";
 choices[63][2] = "Mediante lenguajes de prop&oacute;sito general como C o Java podemos construir Sistemas Expertos.";
 choices[63][3] = "Un marco representa un conjunto de conceptos relacionados.";
 answers[63] = 3;
 units[63] = ['68'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1945. ";
 preguntaids[63] = 1945


//  Id pregunta: 7728 Año de creación de pregunta: 2010
 questions[64]= "65)  RDF (Resource Description Framework) es un:";
 choices[64]= new Array();
 choices[64][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la web.";
 choices[64][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos.";
 choices[64][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles.";
 choices[64][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n.";
 answers[64] = 0;
 units[64] = ['68'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7728. Map 2007";
 preguntaids[64] = 7728


//  Id pregunta: 2801 Año de creación de pregunta: 2002
 questions[65]= "66)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[65]= new Array();
 choices[65][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[65][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[65][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[65][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[65] = 0;
 units[65] = ['68'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2801. ";
 preguntaids[65] = 2801


//  Id pregunta: 6843 Año de creación de pregunta: 2010
 questions[66]= "67)  Sobre la representaci&oacute;n del conocimiento:";
 choices[66]= new Array();
 choices[66][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[66][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[66][2] = "Las dos respuestas anteriores son correctas";
 choices[66][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[66] = 0;
 units[66] = ['67', '68'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6843. ";
 preguntaids[66] = 6843


//  Id pregunta: 2831 Año de creación de pregunta: 2002
 questions[67]= "68)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[67]= new Array();
 choices[67][0] = "Sistemas de clasificaci&oacute;n.";
 choices[67][1] = "Patrones de comportamiento.";
 choices[67][2] = "Sistemas de predicci&oacute;n.";
 choices[67][3] = "Modelado y control.";
 answers[67] = 1;
 units[67] = ['68'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2831. ";
 preguntaids[67] = 2831


//  Id pregunta: 2896 Año de creación de pregunta: 2002
 questions[68]= "69)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[68]= new Array();
 choices[68][0] = "Permanencia";
 choices[68][1] = "Facilidad de reproducci&oacute;n";
 choices[68][2] = "Funcionamiento uniforme";
 choices[68][3] = "Eficiencia";
 answers[68] = 3;
 units[68] = ['68'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2896. ";
 preguntaids[68] = 2896


//  Id pregunta: 2891 Año de creación de pregunta: 2002
 questions[69]= "70)  Indicar cual de la siguientes cualidades de los sistemas expertos es falsa:";
 choices[69]= new Array();
 choices[69][0] = "Capacidad para explicar la forma en que el sistema resuelve los problemas planteados";
 choices[69][1] = "Flexibilidad para incorporar gradualmente nuevo conocimiento";
 choices[69][2] = "Pueden procesar informaci&oacute;n simb&oacute;lica en vez de s&oacute;lo informaci&oacute;n num&eacute;rica";
 choices[69][3] = "S&oacute;lo pueden operar con conocimiento completo";
 answers[69] = 3;
 units[69] = ['68'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2891. ";
 preguntaids[69] = 2891


//  Id pregunta: 2902 Año de creación de pregunta: 2002
 questions[70]= "71)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[70]= new Array();
 choices[70][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[70][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[70][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[70][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[70] = 2;
 units[70] = ['68'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2902. ";
 preguntaids[70] = 2902


//  Id pregunta: 6714 Año de creación de pregunta: 2009
 questions[71]= "72)  Se desea representar usando el formalismo de marcos que 'El cuerpo humano se divide en cabeza, tronco y extremidades'. La etiqueta a utilizar en las relaciones que parten del marco 'cuerpo humano' y van a los marcos 'cabeza', 'tronco' y 'extremidadeses' es:";
 choices[71]= new Array();
 choices[71][0] = "Subclase de";
 choices[71][1] = "Superclase de";
 choices[71][2] = "Compuesto de";
 choices[71][3] = "Parte de";
 answers[71] = 2;
 units[71] = ['68'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 6714. MAP 2008 A1";
 preguntaids[71] = 6714


//  Id pregunta: 2900 Año de creación de pregunta: 2002
 questions[72]= "73)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[72]= new Array();
 choices[72][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[72][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[72][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[72][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[72] = 2;
 units[72] = ['68'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2900. ";
 preguntaids[72] = 2900


//  Id pregunta: 2678 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Qu&eacute; es la base de conocimientos de un sistema experto?:";
 choices[73]= new Array();
 choices[73][0] = "La base de datos que usa el sistema experto";
 choices[73][1] = "El conjunto de reglas almacenadas sobre un tema particular";
 choices[73][2] = "La operaci&oacute;n de obtener informaci&oacute;n del experto humano";
 choices[73][3] = "El programa b&aacute;sico que gestiona el sistema experto";
 answers[73] = 1;
 units[73] = ['68'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2678. ";
 preguntaids[73] = 2678


//  Id pregunta: 7832 Año de creación de pregunta: 2010
 questions[74]= "75)  Se desea representar usando el formalismo de marcos que &laquo;El cuerpo humano se divide en cabeza, tronco y extremidades&raquo;. La etiqueta a utilizar en las relaciones que parten del marco &laquo;cuerpo humano&raquo; y van a los marcos &laquo;cabeza&raquo;, &laquo;tronco&raquo; y &laquo;extremidadeses&raquo; es:";
 choices[74]= new Array();
 choices[74][0] = "Subclase de.";
 choices[74][1] = "Superclase de.";
 choices[74][2] = "Compuesto de.";
 choices[74][3] = "Parte de.";
 answers[74] = 2;
 units[74] = ['68'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7832. ";
 preguntaids[74] = 7832


