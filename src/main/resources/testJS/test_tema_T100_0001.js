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
//  Id pregunta: 4276 Año de creación de pregunta: 2006
 questions[0]= "1)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n se basa en la observaci&oacute;n de las frecuencias de aparici&oacute;n de t&eacute;rminos?";
 choices[0]= new Array();
 choices[0][0] = "l&oacute;gica borrosa";
 choices[0][1] = "modelos probabil&iacute;sticos";
 choices[0][2] = "modelos vectoriales";
 choices[0][3] = "lenguaje natural";
 answers[0] = 2;
 units[0] = ['100'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 4276. ";
 preguntaids[0] = 4276


//  Id pregunta: 5323 Año de creación de pregunta: 2006
 questions[1]= "2)  Las im&aacute;genes se utilizan para";
 choices[1]= new Array();
 choices[1][0] = "la realizaci&oacute;n de un backup t&iacute;pico";
 choices[1][1] = "almacenar datos antiguos para asegurar la compatibilidad";
 choices[1][2] = "para recuperar datos en caso de desastre";
 choices[1][3] = "todas las anteriores";
 answers[1] = 2;
 units[1] = ['100'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5323. ";
 preguntaids[1] = 5323


//  Id pregunta: 3983 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales 'silencios documentales'?:";
 choices[2]= new Array();
 choices[2][0] = "A la informaci&oacute;n excedente";
 choices[2][1] = "A la informaci&oacute;n no excedente";
 choices[2][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[2][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[2] = 3;
 units[2] = ['100'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3983. ";
 preguntaids[2] = 3983


//  Id pregunta: 5139 Año de creación de pregunta: 2003
 questions[3]= "4)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, poniendo una marca de copiado a los archivos se habla de:";
 choices[3]= new Array();
 choices[3][0] = "Copia de seguridad incremental.";
 choices[3][1] = "Copia de seguridad diaria.";
 choices[3][2] = "Copia de seguridad intermedia.";
 choices[3][3] = "Copia de seguridad diferencial.";
 answers[3] = 0;
 units[3] = ['100'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 5139. ";
 preguntaids[3] = 5139


//  Id pregunta: 5529 Año de creación de pregunta: 2007
 questions[4]= "5)  Un grafo dirigido que tiene un nodo especial desde el cual se puede alcanzar a cualquier otro nodo atravesando un n&uacute;mero finito de arcos de forma &uacute;nica es";
 choices[4]= new Array();
 choices[4][0] = "Un grafo orientado a procesos.";
 choices[4][1] = "Un grafo representado.";
 choices[4][2] = "Una Pila";
 choices[4][3] = "Un &aacute;rbol.";
 answers[4] = 3;
 units[4] = ['100'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 5529. ";
 preguntaids[4] = 5529


//  Id pregunta: 3612 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales &quot;silencios documentales&quot;?:";
 choices[5]= new Array();
 choices[5][0] = "A la informaci&oacute;n excedente";
 choices[5][1] = "A la informaci&oacute;n no excedente";
 choices[5][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[5][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[5] = 3;
 units[5] = ['100', '99'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3612. ";
 preguntaids[5] = 3612


//  Id pregunta: 3892 Año de creación de pregunta: 2002
 questions[6]= "7)  El m&eacute;todo booleano de recuperaci&oacute;n de informaci&oacute;n presenta como problema fundamental:";
 choices[6]= new Array();
 choices[6][0] = "Es de sintaxis compleja y la consulta debe reintentarse normalmente para obtener una cantidad razonable de documentos";
 choices[6][1] = "Deben utilizarse m&uacute;ltiples ficheros auxiliares";
 choices[6][2] = "Utilizan operadores l&oacute;gicos y modelos probabil&iacute;sticos simult&aacute;neamente";
 choices[6][3] = "Est&aacute; basado en sistemas expertos";
 answers[6] = 0;
 units[6] = ['100'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3892. ";
 preguntaids[6] = 3892


//  Id pregunta: 5578 Año de creación de pregunta: 2007
 questions[7]= "8)  El elemento dentro de un Sistema de Recuperaci&oacute;n de la Informaci&oacute;n que facilita eliminar informaci&oacute;n irrelevante desde el punto de vista del ordenamiento y la b&uacute;squeda y que se realiza durante la fase de ingreso del documento en el sistema, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Taxonom&iacute;a.";
 choices[7][1] = "Tesauro.";
 choices[7][2] = "Descriptor o Signatura";
 choices[7][3] = "Lista de palabras vac&iacute;as.";
 answers[7] = 3;
 units[7] = ['100'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 5578. ";
 preguntaids[7] = 5578


//  Id pregunta: 4007 Año de creación de pregunta: 2002
 questions[8]= "9)  Los ficheros inversos se utilizan preferentemente en:";
 choices[8]= new Array();
 choices[8][0] = "Bases de datos relacionales";
 choices[8][1] = "Bases de datos jer&aacute;rquicas";
 choices[8][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[8][3] = "Bases de datos reticulares";
 answers[8] = 2;
 units[8] = ['100'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 4007. ";
 preguntaids[8] = 4007


//  Id pregunta: 4113 Año de creación de pregunta: 2003
 questions[9]= "10)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n se define:";
 choices[9]= new Array();
 choices[9][0] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto, y el &Iacute;ndice de Precisi&oacute;n, que mide el ajuste del material devuelto.";
 choices[9][1] = "El &Iacute;ndice de Devoluciones, que mide la cantidad de manterial devuelto, y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 choices[9][2] = "El &Iacute;ndice de Datos, que mide la cantidad de material devuelto, y el &Iacute;ndice de Errores, que mide el desajuste del material devuelto.";
 choices[9][3] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 answers[9] = 0;
 units[9] = ['100'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 4113. ";
 preguntaids[9] = 4113


//  Id pregunta: 4273 Año de creación de pregunta: 2006
 questions[10]= "11)  Las Normas Gamma son unas t&eacute;cnicas de recuperaci&oacute;n de informaci&oacute;n";
 choices[10]= new Array();
 choices[10][0] = "tambi&eacute;n conocidas como retroalimentaci&oacute;n";
 choices[10][1] = "donde no es posible modificar el rigor con que se interpretan los operadores &quot;o&quot; &eacute; &quot;y&quot;";
 choices[10][2] = "que asignan valores relativos de importancia a los t&eacute;rminos de la consulta y grados de indexaci&oacute;n a los t&eacute;rminos de cada documento";
 choices[10][3] = "menos eficaces que las basadas en sistemas booleanos tradicionales";
 answers[10] = 2;
 units[10] = ['100'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 4273. ";
 preguntaids[10] = 4273


//  Id pregunta: 5144 Año de creación de pregunta: 2003
 questions[11]= "12)  El m&iacute;nimo espacio de almacenamiento posible y el m&eacute;todo de copia de seguridad m&aacute;s r&aacute;pido se alcanzan:";
 choices[11]= new Array();
 choices[11][0] = "Usando una combinaci&oacute;n de copias de seguridad normales e incrementales.";
 choices[11][1] = "Usando una combinaci&oacute;n de copias de seguridad normales y diferenciales.";
 choices[11][2] = "Al crear por primera vez un conjunto de copia.";
 choices[11][3] = "Nunca pueden alcanzarse ambos a la vez.";
 answers[11] = 0;
 units[11] = ['100'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 5144. ";
 preguntaids[11] = 5144


//  Id pregunta: 5143 Año de creación de pregunta: 2003
 questions[12]= "13)  Cuando una copia de seguridad incluye todos los archivos pero no los marca individualmente como copiados se habla de:";
 choices[12]= new Array();
 choices[12][0] = "Copia de seguridad incremental.";
 choices[12][1] = "Copia de seguridad diaria.";
 choices[12][2] = "Copia de seguridad intermedia.";
 choices[12][3] = "Copia de seguridad diferencial.";
 answers[12] = 2;
 units[12] = ['100'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 5143. ";
 preguntaids[12] = 5143


//  Id pregunta: 4143 Año de creación de pregunta: 2003
 questions[13]= "14)  Tenemos dos discos sobre los que est&aacute; instalada una base de datos, y adem&aacute;s en el disco 2 se ubica el fichero de log backup. Sabiendo que la copia de la base de datos es posterior a la del fichero de log cual ser&iacute;a la forma de proceder si el disco 2 cae";
 choices[13]= new Array();
 choices[13][0] = "Restaurar la base completa con su &uacute;ltima copia y rehacer las transacciones manualmente a partir de esa fecha";
 choices[13][1] = "Restaurar la base y recuperar autom&aacute;ticamente del fichero de log";
 choices[13][2] = "Restaurar la parte de las tablas y ficheros del disco dos y luego manualmente rehacer las transcciones";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = 0;
 units[13] = ['100'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4143. ";
 preguntaids[13] = 4143


//  Id pregunta: 3481 Año de creación de pregunta: 2006
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a un sistema de alimentaci&oacute;n ininterrumpida?";
 choices[14]= new Array();
 choices[14][0] = "Dispone de bater&iacute;as.";
 choices[14][1] = "Tiene capacidad limitada para salvaguardar informaci&oacute;n y apagado del sistema.";
 choices[14][2] = "Convierte energ&iacute;a mec&aacute;nica en energ&iacute;a el&eacute;ctrica.";
 choices[14][3] = "Generalmente se utiliza con servidores, dispositivos de almacenamiento y de comunicaciones.";
 answers[14] = 2;
 units[14] = ['100'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3481. ";
 preguntaids[14] = 3481


//  Id pregunta: 3901 Año de creación de pregunta: 2002
 questions[15]= "16)  El tipo de indizaci&oacute;n por descriptores consistente en seleccionar conceptos de listas normalizadas de descriptores, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "M&eacute;todo estad&iacute;stico";
 choices[15][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[15][2] = "M&eacute;todo sint&aacute;ctico";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = 1;
 units[15] = ['100'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3901. ";
 preguntaids[15] = 3901


//  Id pregunta: 4739 Año de creación de pregunta: 2002
 questions[16]= "17)  El protocolo de control de enlace normalizado por ISO y que corresponde exclusivamente al nivel 2 de su modelo de referencia es el:";
 choices[16]= new Array();
 choices[16][0] = "37288";
 choices[16][1] = "37316";
 choices[16][2] = "37347";
 choices[16][3] = "37377";
 answers[16] = 0;
 units[16] = ['100'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 4739. ";
 preguntaids[16] = 4739


//  Id pregunta: 3964 Año de creación de pregunta: 2002
 questions[17]= "18)  Se&ntilde;ale de las siguientes respuestas la que es una funci&oacute;n propia del responsable de producci&oacute;n y sistemas:";
 choices[17]= new Array();
 choices[17][0] = "Establecer los planes de pruebas de cada aplicaci&oacute;n";
 choices[17][1] = "Definir una metodolog&iacute;a para el desarrollo de aplicaciones";
 choices[17][2] = "Planificar y evaluar el crecimiento del almacenamiento de datos";
 choices[17][3] = "Establecer los procedimientos para la gesti&oacute;n de la organizaci&oacute;n";
 answers[17] = 2;
 units[17] = ['100'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3964. ";
 preguntaids[17] = 3964


//  Id pregunta: 4010 Año de creación de pregunta: 2002
 questions[18]= "19)  Los m&eacute;todos vectoriales y probabil&iacute;sticos de recuperaci&oacute;n de informaci&oacute;n se basan:";
 choices[18]= new Array();
 choices[18][0] = "&Aacute;lgebra de Boole y frecuencia de t&eacute;rminos respectivamente";
 choices[18][1] = "Sistemas de retroalimentaci&oacute;n y lenguaje natural respectivamente";
 choices[18][2] = "Indexaci&oacute;n y recuperaci&oacute;n vectorial";
 choices[18][3] = "Frecuencia de aparici&oacute;n de t&eacute;rminos y teorema de Bayes";
 answers[18] = 3;
 units[18] = ['100'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 4010. ";
 preguntaids[18] = 4010


//  Id pregunta: 3629 Año de creación de pregunta: 2002
 questions[19]= "20)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[19]= new Array();
 choices[19][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[19][1] = "Los indices se almacenan dentro de la base de datos";
 choices[19][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[19][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[19] = 3;
 units[19] = ['100'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3629. ";
 preguntaids[19] = 3629


//  Id pregunta: 3632 Año de creación de pregunta: 2002
 questions[20]= "21)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[20]= new Array();
 choices[20][0] = "Est&aacute;n integradas por campos";
 choices[20][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[20][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[20][3] = "Se almacenan en tablas";
 answers[20] = 2;
 units[20] = ['100'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3632. ";
 preguntaids[20] = 3632


//  Id pregunta: 3996 Año de creación de pregunta: 2002
 questions[21]= "22)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias  obtenidas y el n&uacute;mero total de referencias existentes, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "&Iacute;ndice de retorno";
 choices[21][1] = "&Iacute;ndice de exactitud";
 choices[21][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[21][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[21] = 0;
 units[21] = ['100'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3996. ";
 preguntaids[21] = 3996


//  Id pregunta: 3899 Año de creación de pregunta: 2002
 questions[22]= "23)  El tesauro es un diccionario din&aacute;mico de descriptores que pasa las relaciones entre sus t&eacute;rminos:";
 choices[22]= new Array();
 choices[22][0] = "En operadores de jerarqu&iacute;a";
 choices[22][1] = "En operaciones asociativos";
 choices[22][2] = "En operadores sem&aacute;nticos y preferenciales";
 choices[22][3] = "Son correctas todas las respuestas anteriores";
 answers[22] = 3;
 units[22] = ['100'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3899. ";
 preguntaids[22] = 3899


//  Id pregunta: 4110 Año de creación de pregunta: 2003
 questions[23]= "24)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n el m&eacute;todo que consiste en que el usuario indica si entre los textos recuperados hay algunos relevantes o no, y el sistema modifica as&iacute; el vector de b&uacute;squeda se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Retroalimentaci&oacute;n.";
 choices[23][1] = "Modelo booleano.";
 choices[23][2] = "lenguaje natural.";
 choices[23][3] = "L&oacute;gica borrosa.";
 answers[23] = 0;
 units[23] = ['100'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 4110. ";
 preguntaids[23] = 4110


//  Id pregunta: 3623 Año de creación de pregunta: 2002
 questions[24]= "25)  En la actualidad existen dos est&aacute;ndares importantes sobre diccionario de recursos de la informaci&oacute;n. Entre los organismos que han participado en su elaboraci&oacute;n est&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "IEEE";
 choices[24][1] = "CENELEC";
 choices[24][2] = "DELFOS";
 choices[24][3] = "IEC";
 answers[24] = 3;
 units[24] = ['100'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3623. E est&aacute;ndar ISO/IEC 10728:1993 versa sobre Diccionarios de Recursos de Informaci&oacute;n (http://www.iso.org/iso/catalogue_detail.htm?csnumber=18821)";
 preguntaids[24] = 3623


//  Id pregunta: 3858 Año de creación de pregunta: 2002
 questions[25]= "26)  Hacer una previsi&oacute;n de procedimientos de recuperaci&oacute;n se debe contemplar en:";
 choices[25]= new Array();
 choices[25][0] = "Plan de Contingencias";
 choices[25][1] = "Control de accesos a bases de datos";
 choices[25][2] = "Mantenimiento y dise&ntilde;o de aplicaciones";
 choices[25][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[25] = 0;
 units[25] = ['100'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3858. ";
 preguntaids[25] = 3858


//  Id pregunta: 4129 Año de creación de pregunta: 2003
 questions[26]= "27)  Los sistemas de reconocimiento &oacute;ptico de caracteres:";
 choices[26]= new Array();
 choices[26][0] = "Son caros y dif&iacute;ciles de configurar.";
 choices[26][1] = "Pueden necesitar un entrenamiento para su mejor funcionamiento.";
 choices[26][2] = "Extienden las capacidades del c&aacute;lculo diferencial hacia la resoluci&oacute;n de problemas de parametrizaci&oacute;n polim&eacute;trica.";
 choices[26][3] = "Suponen un gasto necesario para aumentar el n&uacute;mero de documentos almacenados en papel en el paradigma de la oficina sin papeles.";
 answers[26] = 1;
 units[26] = ['100'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4129. ";
 preguntaids[26] = 4129


//  Id pregunta: 3630 Año de creación de pregunta: 2002
 questions[27]= "28)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[27]= new Array();
 choices[27][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[27][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[27][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[27][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[27] = 1;
 units[27] = ['100'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3630. ";
 preguntaids[27] = 3630


//  Id pregunta: 5147 Año de creación de pregunta: 2003
 questions[28]= "29)  Las copias de seguridad:";
 choices[28]= new Array();
 choices[28][0] = "Son un engorro innecesario.";
 choices[28][1] = "Nunca pueden recuperarse del todo.";
 choices[28][2] = "Conviene probar previamente los procedimientos a seguir y dejarlos bien documentados.";
 choices[28][3] = "Nacieron con el fin de ahorrar tiempo y molestias al personal no inform&aacute;tico del Departamento.";
 answers[28] = 2;
 units[28] = ['100'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 5147. ";
 preguntaids[28] = 5147


//  Id pregunta: 5938 Año de creación de pregunta: 2007
 questions[29]= "30)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtualde 2^20 (2 elevado a 20) p&aacute;ginas y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos dep&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[29]= new Array();
 choices[29][0] = "32 kB";
 choices[29][1] = "4 MB";
 choices[29][2] = "1 MB";
 choices[29][3] = "8 kB";
 answers[29] = 0;
 units[29] = ['100'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 5938. ";
 preguntaids[29] = 5938


//  Id pregunta: 3625 Año de creación de pregunta: 2002
 questions[30]= "31)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[30]= new Array();
 choices[30][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[30][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[30][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[30][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[30] = 2;
 units[30] = ['100'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3625. ";
 preguntaids[30] = 3625


//  Id pregunta: 4577 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;les son las t&eacute;cnicas de compartici&oacute;n utilizadas para compartir el recurso com&uacute;n (medio de transmisi&oacute;n o nodo central) en las LAN?:";
 choices[31]= new Array();
 choices[31][0] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD)";
 choices[31][1] = "Paso de testigo";
 choices[31][2] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD), o paso de testigo,  seg&uacute;n el tipo de red";
 choices[31][3] = "Selecci&oacute;n, contienda y reserva";
 answers[31] = 3;
 units[31] = ['100'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 4577. ";
 preguntaids[31] = 4577


//  Id pregunta: 4101 Año de creación de pregunta: 2003
 questions[32]= "33)  De acuerdo con la informaci&oacute;n contenida los servicios de informaci&oacute;n electr&oacute;nica pueden clasificarse en:";
 choices[32]= new Array();
 choices[32][0] = "Servicios referenciales y servicios fuente.";
 choices[32][1] = "Servicios num&eacute;ricos y servicios textuales.";
 choices[32][2] = "Servicios de banda ancha y servicios de banda estrecha.";
 choices[32][3] = "Servicios portadores y servicios de valor a&ntilde;adido.";
 answers[32] = 0;
 units[32] = ['100'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4101. ";
 preguntaids[32] = 4101


//  Id pregunta: 4013 Año de creación de pregunta: 2002
 questions[33]= "34)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[33]= new Array();
 choices[33][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[33][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[33][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[33][3] = "N&uacute;mero de referencias correctas";
 answers[33] = 0;
 units[33] = ['100'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 4013. ";
 preguntaids[33] = 4013


//  Id pregunta: 3479 Año de creación de pregunta: 2006
 questions[34]= "35)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n se basan en la aplicaci&oacute;n del teorema de Bayes?";
 choices[34]= new Array();
 choices[34][0] = "L&oacute;gica borrosa";
 choices[34][1] = "Modelos estad&iacute;sticos";
 choices[34][2] = "Modelos vectoriales";
 choices[34][3] = "Lenguaje natural";
 answers[34] = 1;
 units[34] = ['100'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3479. ";
 preguntaids[34] = 3479


//  Id pregunta: 4275 Año de creación de pregunta: 2006
 questions[35]= "36)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n asigna importancia relativa a los t&eacute;rminos de la consulta, grados de indexaci&oacute;n a los t&eacute;rminos de cada documento, y puede modificar el rigor de los operadores &quot;&quot;0&quot;&quot; e &quot;&quot;Y&quot;&quot;, mediante los valores de una variable?";
 choices[35]= new Array();
 choices[35][0] = "Norma-Gamma";
 choices[35][1] = "L&oacute;gica Borrosa";
 choices[35][2] = "&Iacute;ndices invertidos";
 choices[35][3] = "Recuperaci&oacute;n autom&aacute;tica vectorial";
 answers[35] = 0;
 units[35] = ['100'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 4275. ";
 preguntaids[35] = 4275


//  Id pregunta: 3991 Año de creación de pregunta: 2002
 questions[36]= "37)  El tipo de indizaci&oacute;n por descriptores es el m&aacute;s utilizado en la indizaci&oacute;n asistida por ordenador, y puede realizarse mediante distintos m&eacute;todos. &iquest;Cu&aacute;l de los rese&ntilde;ados no ser&iacute;a un m&eacute;todo de indizaci&oacute;n?:";
 choices[36]= new Array();
 choices[36][0] = "El m&eacute;todo estad&iacute;stico";
 choices[36][1] = "El m&eacute;todo por asignaci&oacute;n de conceptos claves del documento";
 choices[36][2] = "El m&eacute;todo sint&aacute;ctico";
 choices[36][3] = "El m&eacute;todo morfol&oacute;gico";
 answers[36] = 3;
 units[36] = ['100'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3991. ";
 preguntaids[36] = 3991


//  Id pregunta: 5528 Año de creación de pregunta: 2007
 questions[37]= "38)  Sea el array [10, 3, 12, 7, 2, 20]. Si se emplea el algoritmo de ordenaci&oacute;n por selecci&oacute;n, despu&eacute;s de tres iteraciones (ordenaci&oacute;n ascendente), el estado del array ser&aacute;";
 choices[37]= new Array();
 choices[37][0] = "[3, 10, 12, 7, 2, 20]";
 choices[37][1] = "[2, 3, 12, 7, 10, 20]";
 choices[37][2] = "[2, 3, 7, 10, 12, 20]";
 choices[37][3] = "[2, 3, 7, 12, 10, 20]";
 answers[37] = 3;
 units[37] = ['100'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 5528. ";
 preguntaids[37] = 5528


//  Id pregunta: 4099 Año de creación de pregunta: 2003
 questions[38]= "39)  Cu&aacute;l de los siguientes no es un m&eacute;todos o t&eacute;cnicas de recuperaci&oacute;n de informaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Lenguajes recuperativos.";
 choices[38][1] = "Retroalimentaci&oacute;n.";
 choices[38][2] = "Modelos vectoriales y probabil&iacute;sticos.";
 choices[38][3] = "Sistemas booleanos.";
 answers[38] = 0;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4099. ";
 preguntaids[38] = 4099


//  Id pregunta: 4274 Año de creación de pregunta: 2006
 questions[39]= "40)  El objetivo principal de Google es";
 choices[39]= new Array();
 choices[39][0] = "maximizar el &Iacute;ndice de Precisi&oacute;n";
 choices[39][1] = "maximizar el &Iacute;ndice de Respuesta";
 choices[39][2] = "minimizar el Silencio";
 choices[39][3] = "B &yacute; C";
 answers[39] = 0;
 units[39] = ['100'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 4274. ";
 preguntaids[39] = 4274


//  Id pregunta: 4133 Año de creación de pregunta: 2003
 questions[40]= "41)  M&eacute;todo de interpolaci&oacute;n en la correcci&oacute;n geom&eacute;trica:";
 choices[40]= new Array();
 choices[40][0] = "Vecino m&aacute;s pr&oacute;ximo.";
 choices[40][1] = "Bilineal.";
 choices[40][2] = "Bic&uacute;bica.";
 choices[40][3] = "Todos los anteriores.";
 answers[40] = 3;
 units[40] = ['100'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4133. ";
 preguntaids[40] = 4133


//  Id pregunta: 4114 Año de creación de pregunta: 2003
 questions[41]= "42)  En un Sistema de Gesti&oacute;n Documental la recuperaci&oacute;n de la informaci&oacute;n se produce mediante:";
 choices[41]= new Array();
 choices[41][0] = "Palabras clave.";
 choices[41][1] = "Texto completo.";
 choices[41][2] = "&Iacute;ndices.";
 choices[41][3] = "Todas las anteriores.";
 answers[41] = 3;
 units[41] = ['100'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 4114. ";
 preguntaids[41] = 4114


//  Id pregunta: 4111 Año de creación de pregunta: 2003
 questions[42]= "43)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la l&oacute;gica borrosa permite:";
 choices[42]= new Array();
 choices[42][0] = "Indexar parcialmente un documento mediante dos o m&aacute;s t&eacute;rminos.";
 choices[42][1] = "Clasificar los textos con arreglo a su relevancia estimada.";
 choices[42][2] = "T&eacute;cnicas de muestreo de la cuantificaci&oacute;n del grado de relevancia de las claves.";
 choices[42][3] = "Generar varias claves sin tener en cuenta el Tesauro.";
 answers[42] = 1;
 units[42] = ['100'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4111. ";
 preguntaids[42] = 4111


//  Id pregunta: 3992 Año de creación de pregunta: 2002
 questions[43]= "44)  En el an&aacute;lisis documental al nivel en el que se extrae un &quot;abstract&quot; o resumen anal&iacute;tico del texto &iacute;ntegro, se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Nivel de asiento";
 choices[43][1] = "Nivel de descriptor";
 choices[43][2] = "Nivel de resumen";
 choices[43][3] = "Nivel documental";
 answers[43] = 2;
 units[43] = ['100'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3992. ";
 preguntaids[43] = 3992


//  Id pregunta: 5142 Año de creación de pregunta: 2003
 questions[44]= "45)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, sin poner una marca de copiado a los archivos se habla de:";
 choices[44]= new Array();
 choices[44][0] = "Copia de seguridad incremental.";
 choices[44][1] = "Copia de seguridad diaria.";
 choices[44][2] = "Copia de seguridad intermedia.";
 choices[44][3] = "Copia de seguridad diferencial.";
 answers[44] = 3;
 units[44] = ['100'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 5142. ";
 preguntaids[44] = 5142


//  Id pregunta: 4142 Año de creación de pregunta: 2003
 questions[45]= "46)  Suponiendo la existencia de un sistema de copias de seguridad, para restaurar la informaci&oacute;n perdida se puede:";
 choices[45]= new Array();
 choices[45][0] = "S&oacute;lo se necesita la copia normal m&aacute;s reciente m&aacute;s la &uacute;ltima copia de seguridad diaria";
 choices[45][1] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y todas las copias de seguridad diferencial";
 choices[45][2] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y la &uacute;ltima copia de seguridad incremental";
 choices[45][3] = "Todas las respuestas anteriores son incorrectas";
 answers[45] = 3;
 units[45] = ['100'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 4142. ";
 preguntaids[45] = 4142


//  Id pregunta: 5140 Año de creación de pregunta: 2004
 questions[46]= "47)  &iquest;Cu&aacute;l no es una propiedad de la seguridad inform&aacute;tica?";
 choices[46]= new Array();
 choices[46][0] = "Confidencialidad";
 choices[46][1] = "Integridad";
 choices[46][2] = "Autenticaci&oacute;n";
 choices[46][3] = "Fidelidad";
 answers[46] = 3;
 units[46] = ['100'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 5140. ";
 preguntaids[46] = 5140


//  Id pregunta: 4024 Año de creación de pregunta: 2002
 questions[47]= "48)  Los robots programados para localizar referencias hipertexto dirigidas a un servidor o un documento en particular son:";
 choices[47]= new Array();
 choices[47][0] = "los spiders o ara&ntilde;as";
 choices[47][1] = "los knowbots";
 choices[47][2] = "los wanderers o vagabundos";
 choices[47][3] = "ninguno de los anteriores";
 answers[47] = 1;
 units[47] = ['100'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4024. ";
 preguntaids[47] = 4024


//  Id pregunta: 5534 Año de creación de pregunta: 2007
 questions[48]= "49)  El algoritmo de b&uacute;squeda binaria o dicot&oacute;mica";
 choices[48]= new Array();
 choices[48][0] = "Es siempre el m&aacute;s r&aacute;pido de los algoritmos de b&uacute;squeda.";
 choices[48][1] = "No se puede implementar mediante funciones recursivas.";
 choices[48][2] = "Exige que el array est&eacute; totalmente ordenado.";
 choices[48][3] = "Tambi&eacute;n es conocido con el nombre de &ldquo;Quicksort&rdquo;.";
 answers[48] = 2;
 units[48] = ['100'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 5534. ";
 preguntaids[48] = 5534


//  Id pregunta: 5148 Año de creación de pregunta: 2003
 questions[49]= "50)  Para la conservaci&oacute;n de la informaci&oacute;n sobre soporte electr&oacute;nico:";
 choices[49]= new Array();
 choices[49][0] = "Ser&aacute; &uacute;til disponer de un SAI (UPS).";
 choices[49][1] = "Conviene almacenar la configuraci&oacute;n de la red en un fichero contenido en el sistema a proteger.";
 choices[49][2] = "Podemos utilizar cualquier ordenador descatalogado que tengamos a mano.";
 choices[49][3] = "El soporte ha de ser tolerante a fallos.";
 answers[49] = 0;
 units[49] = ['100'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 5148. ";
 preguntaids[49] = 5148


//  Id pregunta: 4121 Año de creación de pregunta: 2003
 questions[50]= "51)  La copia de seguridad intermedia se utiliza:";
 choices[50]= new Array();
 choices[50][0] = "Para restaurar los archivos y carpetas a partir de la &uacute;ltima copia de seguridad normal y la mencinada copia.";
 choices[50][1] = "Cuando se desea hacer copias de seguridad de archivos entre copias de seguridad normales e incrementales, ya que no afecta a estas operaciones.";
 choices[50][2] = "Cuando se usa una combinaci&oacute;n de copias de seguridad normales e incrementales, ya que la restauraci&oacute;n de los datos debe realizarse con la &uacute;ltima copia de seguridad normal y todas las copias de seguridad intermedias.";
 choices[50][3] = "Cuando s&oacute;lo necesita la copia m&aacute;s reciente del archivo o la cinta que contiene la copia de seguridad para restaurar todos los archivos.";
 answers[50] = 1;
 units[50] = ['100'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 4121. ";
 preguntaids[50] = 4121


//  Id pregunta: 3902 Año de creación de pregunta: 2002
 questions[51]= "52)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[51]= new Array();
 choices[51][0] = "M&eacute;todo estad&iacute;stico";
 choices[51][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[51][2] = "M&eacute;todo sint&aacute;ctico";
 choices[51][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[51] = 2;
 units[51] = ['100'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3902. ";
 preguntaids[51] = 3902


//  Id pregunta: 3617 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Qu&eacute; es un 'antidiccionario'?:";
 choices[52]= new Array();
 choices[52][0] = "Un conjunto de palabras de caracterizaci&oacute;n o palabras clave";
 choices[52][1] = "Un conjunto de palabras y signos algebraico-matem&aacute;tico que puede encontrarse en los textos";
 choices[52][2] = "Un conjunto de palabras vac&iacute;as de significado (art&iacute;culos, preposiciones...)";
 choices[52][3] = "Un diccionario en orden alfab&eacute;tico inverso";
 answers[52] = 2;
 units[52] = ['100'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3617. ";
 preguntaids[52] = 3617


//  Id pregunta: 3621 Año de creación de pregunta: 2002
 questions[53]= "54)  El Sistema de Gesti&oacute;n del Diccionario de Recursos de Informaci&oacute;n (SGDRI):";
 choices[53]= new Array();
 choices[53][0] = "Es un componente del Sistema de Gesti&oacute;n de Base de Datos (SGBD) del sistema de informaci&oacute;n";
 choices[53][1] = "Se puede apoyar en el SGBD, en el Sistema de Gesti&oacute;n de Ficheros y en el sistema operativo";
 choices[53][2] = "Permite el almacenamiento de la sintaxis y la sem&aacute;ntica de los diferentes lenguajes que soporta los componentes DRI";
 choices[53][3] = "Describe los datos, componentes f&iacute;sicos y elementos del entorno que integran cada subsistema";
 answers[53] = 1;
 units[53] = ['100'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3621. posible referencia:http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-152.pdf";
 preguntaids[53] = 3621


//  Id pregunta: 3893 Año de creación de pregunta: 2002
 questions[54]= "55)  El m&eacute;todo de recuperaci&oacute;n de la informaci&oacute;n basado en ficheros auxiliares de t&eacute;rminos (claves o &iacute;ndices  de palabras) o ficheros de apuntadores (referencias de los documentos base) es propio de:";
 choices[54]= new Array();
 choices[54][0] = "Modelo booleano";
 choices[54][1] = "Indexaci&oacute;n y recuperaci&oacute;n autom&aacute;tica vectorial";
 choices[54][2] = "&Iacute;ndices invertidos";
 choices[54][3] = "Retroalimentaci&oacute;n";
 answers[54] = 2;
 units[54] = ['100'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3893. ";
 preguntaids[54] = 3893


//  Id pregunta: 4650 Año de creación de pregunta: 2002
 questions[55]= "56)  Cada capa del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) se comunica directamente:";
 choices[55]= new Array();
 choices[55][0] = "A trav&eacute;s de uno o m&aacute;s puntos de acceso de servicio (SAP - service access point), con la capa contigua superior y de igual forma con la capa contigua inferior";
 choices[55][1] = "A trav&eacute;s de la informaci&oacute;n de control (ICI - Interface Control Information) contenida en la cabecera del bloque de datos transferido, con la misma capa en el dispositivo de red con el que establece comunicaci&oacute;n";
 choices[55][2] = "A trav&eacute;s de la informaci&oacute;n de control (ICI - Interface Control Information) contenida en la cabecera del bloque de datos transferido, con la capa contigua superior y de igual forma con la capa contigua inferior";
 choices[55][3] = "Con las tres capas mencionadas en &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[55] = 3;
 units[55] = ['100'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 4650. ";
 preguntaids[55] = 4650


//  Id pregunta: 4023 Año de creación de pregunta: 2002
 questions[56]= "57)  Los robots (entendidos como programas que recorren de forma autom&aacute;tica la estructura hipertexto de la web) se clasifican com&uacute;nmente en:";
 choices[56]= new Array();
 choices[56][0] = "est&aacute;ticos y din&aacute;micos";
 choices[56][1] = "spiders, knowbots y wanderers";
 choices[56][2] = "mantenimiento, esp&iacute;as y virus";
 choices[56][3] = "recopiladores de informaci&oacute;n y vigilantes";
 answers[56] = 1;
 units[56] = ['100'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4023. ";
 preguntaids[56] = 4023


//  Id pregunta: 4100 Año de creación de pregunta: 2003
 questions[57]= "58)  Cu&aacute;l de los siguientes no es un m&eacute;todo o t&eacute;cnica de recuperaci&oacute;n de informaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Sistemas de hojeo-ojeo.";
 choices[57][1] = "Sistemas de fila incierta.";
 choices[57][2] = "Sistemas de normal.";
 choices[57][3] = "Sistemas expertos.";
 answers[57] = 1;
 units[57] = ['100'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 4100. ";
 preguntaids[57] = 4100


//  Id pregunta: 4112 Año de creación de pregunta: 2003
 questions[58]= "59)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la t&eacute;cnica de Sistemas Expertos consiste en:";
 choices[58]= new Array();
 choices[58][0] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de texto";
 choices[58][1] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a varios t&oacute;picos, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de textos pote";
 choices[58][2] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante consulta de &iacute;ndices invertidos, que producen finalmente una relaci&oacute;n clasificad";
 choices[58][3] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n de textos presentes";
 answers[58] = 0;
 units[58] = ['100'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4112. ";
 preguntaids[58] = 4112


//  Id pregunta: 5257 Año de creación de pregunta: 2006
 questions[59]= "60)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[59]= new Array();
 choices[59][0] = "la entrega fiable de paquetes";
 choices[59][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[59][2] = "es orientado a conexi&oacute;n";
 choices[59][3] = "su RFC es 793";
 answers[59] = 1;
 units[59] = ['112', '100'];
 blocks[59] = ['B4', 'B3'];
 comments[59] = "Id Pregunta: 5257. ";
 preguntaids[59] = 5257


//  Id pregunta: 3480 Año de creación de pregunta: 2006
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[60]= new Array();
 choices[60][0] = "Una copia de seguridad intermedia/diaria incluye todos los archivos seleccionados que se hayan modificado, desactivando el atributo de modificado";
 choices[60][1] = "Una copia de seguridad intermedia incluye todos los archivos pero no los marca individualmente como copiados (es decir, no desactiva el atributo de modificado)";
 choices[60][2] = "Una copia de seguridad diferencial s&oacute;lo copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = 1;
 units[60] = ['100'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3480. ";
 preguntaids[60] = 3480


//  Id pregunta: 3900 Año de creación de pregunta: 2002
 questions[61]= "62)  El tipo de indizaci&oacute;n por descriptores consistente en realizar una selecci&oacute;n de los conceptos m&aacute;s significativos mediante el an&aacute;lisis de frecuencias de los t&eacute;rminos existentes, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "M&eacute;todo estad&iacute;stico";
 choices[61][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[61][2] = "M&eacute;todo sint&aacute;ctico";
 choices[61][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[61] = 0;
 units[61] = ['100'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3900. ";
 preguntaids[61] = 3900


//  Id pregunta: 3997 Año de creación de pregunta: 2002
 questions[62]= "63)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias correctas obtenidas y el n&uacute;mero total de documentos recuperados, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "&Iacute;ndice de retorno";
 choices[62][1] = "&Iacute;ndice de exactitud";
 choices[62][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[62][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[62] = 2;
 units[62] = ['100'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3997. ";
 preguntaids[62] = 3997


//  Id pregunta: 4009 Año de creación de pregunta: 2002
 questions[63]= "64)  Los m&eacute;todos de recuperaci&oacute;n de informaci&oacute;n se basan fundamentalmente en:";
 choices[63]= new Array();
 choices[63][0] = "Manipulaci&oacute;n de vol&uacute;menes de informaci&oacute;n muy peque&ntilde;os";
 choices[63][1] = "Identificaci&oacute;n de claves (palabras, fragmentos o frases) y su b&uacute;squeda en la base de informaci&oacute;n o ficheros auxiliares";
 choices[63][2] = "Tratamiento de informaci&oacute;n mediante sistemas hipertexto";
 choices[63][3] = "Grabaci&oacute;n y recuperaci&oacute;n de im&aacute;genes";
 answers[63] = 1;
 units[63] = ['100'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4009. ";
 preguntaids[63] = 4009


//  Id pregunta: 5901 Año de creación de pregunta: 2007
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[64]= new Array();
 choices[64][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo";
 choices[64][1] = "EUROMARC es la versi&oacute;n europea de dicho formato";
 choices[64][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60";
 choices[64][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic";
 answers[64] = 2;
 units[64] = ['100'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 5901. ";
 preguntaids[64] = 5901


//  Id pregunta: 4127 Año de creación de pregunta: 2003
 questions[65]= "66)  Los servicios de informaci&oacute;n electr&oacute;nica denominados &quot;Servicios referenciales&quot; pueden ser:";
 choices[65]= new Array();
 choices[65][0] = "Num&eacute;ricos y textuales.";
 choices[65][1] = "Num&eacute;ricos, textuales o ic&oacute;nicos.";
 choices[65][2] = "Bibliogr&aacute;ficos o directorios.";
 choices[65][3] = "Bibliogr&aacute;ficos, directorios y agendas.";
 answers[65] = 2;
 units[65] = ['100'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 4127. ";
 preguntaids[65] = 4127


//  Id pregunta: 5146 Año de creación de pregunta: 2003
 questions[66]= "67)  Funciones de una copia de seguridad:";
 choices[66]= new Array();
 choices[66][0] = "Restaurar los archivos y carpetas modificados en el disco duro o en otro disco al que tenga acceso.";
 choices[66][1] = "Crear un duplicado de los datos del disco duro y, a continuaci&oacute;n, archivarlos en otros dispositivos de almacenamiento como pueden ser un disco duro o una cinta.";
 choices[66][2] = "Archivar en su disco duro determinados archivos y carpetas.";
 choices[66][3] = "Todas las anteriores";
 answers[66] = 3;
 units[66] = ['100'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 5146. ";
 preguntaids[66] = 5146


//  Id pregunta: 4316 Año de creación de pregunta: 2004
 questions[67]= "68)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[67]= new Array();
 choices[67][0] = "uSCSI";
 choices[67][1] = "FCP";
 choices[67][2] = "iSCSI";
 choices[67][3] = "FCIP";
 answers[67] = 2;
 units[67] = ['100'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4316. Similar a examen TIC SS A 2004";
 preguntaids[67] = 4316


//  Id pregunta: 4025 Año de creación de pregunta: 2002
 questions[68]= "69)  Los wanderers o vagabundos son robots que:";
 choices[68]= new Array();
 choices[68][0] = "se encargan de la medici&oacute;n del crecimiento de la web";
 choices[68][1] = "crean bases de datos a partir de la red hipertexto";
 choices[68][2] = "localizan referencias hipertexto de un servidor o documento en particular";
 choices[68][3] = "se encargan de vigilar la existencia de direcciones ilegales";
 answers[68] = 0;
 units[68] = ['100'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 4025. ";
 preguntaids[68] = 4025


//  Id pregunta: 3993 Año de creación de pregunta: 2002
 questions[69]= "70)  En inform&aacute;tica, el t&eacute;rmino de recuperaci&oacute;n en texto libre se utiliza para describir:";
 choices[69]= new Array();
 choices[69][0] = "La recuperaci&oacute;n en un base de datos que posee &iacute;ndices asociados";
 choices[69][1] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada";
 choices[69][2] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro y carece de &iacute;ndices";
 choices[69][3] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada, a excepci&oacute;n de las contenidas en el diccionario de palabras vac&iacute;as";
 answers[69] = 3;
 units[69] = ['100'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3993. ";
 preguntaids[69] = 3993


//  Id pregunta: 4272 Año de creación de pregunta: 2006
 questions[70]= "71)  Se define &Iacute;ndice de pertinencia (una valor entre 0 &yacute; 1) como";
 choices[70]= new Array();
 choices[70][0] = "la relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados y todos los documentos recuperados en una b&uacute;squeda";
 choices[70][1] = "la relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados y todos los documentos relevantes de la base de datos en una b&uacute;squeda";
 choices[70][2] = "1 menos el Ruido";
 choices[70][3] = "Son correctas A &yacute; C";
 answers[70] = 3;
 units[70] = ['100'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4272. ";
 preguntaids[70] = 4272


//  Id pregunta: 4134 Año de creación de pregunta: 2003
 questions[71]= "72)  Misi&oacute;n principal de un Sistema de Recuperaci&oacute;n de Informaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Asistir la b&uacute;squeda de textos en bases de datos relacionales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[71][1] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[71][2] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar todos los documentos o referencias que aparezcan.";
 choices[71][3] = "Asistir la b&uacute;squeda de im&aacute;genes en bases de datos relacionales para localizar todos los documentos o referencias que aparezcan.";
 answers[71] = 1;
 units[71] = ['100'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 4134. ";
 preguntaids[71] = 4134


//  Id pregunta: 4012 Año de creación de pregunta: 2002
 questions[72]= "73)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n tienen como objeto fundamental:";
 choices[72]= new Array();
 choices[72][0] = "Recuperaci&oacute;n de bases de datos codasyl  y relacionales";
 choices[72][1] = "An&aacute;lisis documental";
 choices[72][2] = "Restaurar ficheros y bases de datos pseudo relacionales";
 choices[72][3] = "Consultas y modificaciones de bases de datos a trav&eacute;s del lenguaje SQL";
 answers[72] = 1;
 units[72] = ['100'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4012. ";
 preguntaids[72] = 4012


//  Id pregunta: 4130 Año de creación de pregunta: 2003
 questions[73]= "74)  Los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n consistente en r&aacute;pidas ojeadas de selecci&oacute;n buscando referencias en textos sin an&aacute;lisis con profundidad de los contenidos, auxili&aacute;ndose de se&ntilde;aladores impl&iacute;citos y expl&iacute;citos:";
 choices[73]= new Array();
 choices[73][0] = "Se denominan hojeo-ojeo.";
 choices[73][1] = "Son relativamente poco complejos.";
 choices[73][2] = "Todas las anteriores.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = 2;
 units[73] = ['100'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 4130. ";
 preguntaids[73] = 4130


//  Id pregunta: 5322 Año de creación de pregunta: 2006
 questions[74]= "75)  Los datos de usuario es mejor guardarlos";
 choices[74]= new Array();
 choices[74][0] = "en la segunda partici&oacute;n o disco duro";
 choices[74][1] = "en la partici&oacute;n m&aacute;s cercana a la de la unidad de backup";
 choices[74][2] = "en la primera partici&oacute;n del disco duro";
 choices[74][3] = "ninguna de las anteriores";
 answers[74] = 0;
 units[74] = ['100'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 5322. ";
 preguntaids[74] = 5322


