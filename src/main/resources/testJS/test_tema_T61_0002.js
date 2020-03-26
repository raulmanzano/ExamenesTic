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
//  Id pregunta: 3009 Año de creación de pregunta: 2002
 questions[0]= "1)  Por clave ajena se entiende:";
 choices[0]= new Array();
 choices[0][0] = "Un conjunto no vacio de atributos de una relaci&oacute;n";
 choices[0][1] = "Un atributo no principal de una relaci&oacute;n que no tiene valor nulo";
 choices[0][2] = "Un descriptor de una relaci&oacute;n, cuyos valores coinciden con los valores de la clave primaria de otra relaci&oacute;n";
 choices[0][3] = "Es el atributo de una relaci&oacute;n que garantiza la integridad de la entidad";
 answers[0] = 2;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3009. ";
 preguntaids[0] = 3009


//  Id pregunta: 5621 Año de creación de pregunta: 2007
 questions[1]= "2)  El uso de mecanismos como JDBC u ODBC:";
 choices[1]= new Array();
 choices[1][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[1][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[1][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[1][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[1] = 0;
 units[1] = ['61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 5621. ";
 preguntaids[1] = 5621


//  Id pregunta: 3329 Año de creación de pregunta: 2004
 questions[2]= "3)  Indique la afirmaci&oacute;n correcta";
 choices[2]= new Array();
 choices[2][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[2][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[2][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[2][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[2] = 1;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3329. ";
 preguntaids[2] = 3329


//  Id pregunta: 3334 Año de creación de pregunta: 2004
 questions[3]= "4)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[3]= new Array();
 choices[3][0] = "Driver de tipo I";
 choices[3][1] = "Driver de tipo II";
 choices[3][2] = "Driver de tipo III";
 choices[3][3] = "Driver de tipo IV";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3334. ";
 preguntaids[3] = 3334


//  Id pregunta: 3385 Año de creación de pregunta: 2006
 questions[4]= "5)  Qu&eacute; es JDBC";
 choices[4]= new Array();
 choices[4][0] = "Un modelo de objetos ActiveX";
 choices[4][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[4][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[4][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[4] = 3;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3385. ";
 preguntaids[4] = 3385


//  Id pregunta: 2993 Año de creación de pregunta: 2002
 questions[5]= "6)  ODBC:";
 choices[5]= new Array();
 choices[5][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[5][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[5][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[5][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[5] = 0;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2993. ";
 preguntaids[5] = 2993


//  Id pregunta: 3033 Año de creación de pregunta: 2002
 questions[6]= "7)  Sean dos transacciones A y B:  1&ordm;) A accede al registro 1. 2&ordm;) B accede al registro 2. 3&ordm;) A pide el registro 2, pero debe esperar que B lo libere. 4&ordm;) B pide el registro 1, pero debe esperar que A lo libere.  Entonces:";
 choices[6]= new Array();
 choices[6][0] = "Se produjo alg&uacute;n fallo en el dise&ntilde;o l&oacute;gico de datos, pues &eacute;sto no debe suceder";
 choices[6][1] = "Estamos ante un caso de dise&ntilde;o defectuoso de los procesos A y B";
 choices[6][2] = "Se ha producido una situaci&oacute;n de 'deadlock'";
 choices[6][3] = "El transaccional desbloquear&aacute; los registros bloqueados y permitir&aacute; que las transacciones continuen sin m&aacute;s problemas";
 answers[6] = 2;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3033. ";
 preguntaids[6] = 3033


//  Id pregunta: 3100 Año de creación de pregunta: 2002
 questions[7]= "8)  Una entidad d&eacute;bil es aquella que cumple que:";
 choices[7]= new Array();
 choices[7][0] = "La clave est&aacute; compuesta por atributos de la entidad";
 choices[7][1] = "La clave est&aacute; compuesta por atributos de la entidad y atributos de otras entidades";
 choices[7][2] = "Su existencia depende de la existencia de otra u otras entidades";
 choices[7][3] = "No puede tener relaciones cuya cardinalidad sea uno-a-uno";
 answers[7] = 2;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3100. ";
 preguntaids[7] = 3100


//  Id pregunta: 4268 Año de creación de pregunta: 2006
 questions[8]= "9)  Una Base de Datos documental";
 choices[8]= new Array();
 choices[8][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[8][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[8][2] = "las dos anteriores";
 choices[8][3] = "ninguna de las anteriores";
 answers[8] = 2;
 units[8] = ['61'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 4268. ";
 preguntaids[8] = 4268


//  Id pregunta: 5470 Año de creación de pregunta: 2007
 questions[9]= "10)  En una base de datos relacional, para definir la estructura org&aacute;nica de un organismo p&uacute;blico, la mejor soluci&oacute;n ser&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "Definir una tabla de departamentos con una relaci&oacute;n reflexiva &lsquo;pertenece a&rsquo;.";
 choices[9][1] = "Definir dos tablas de departamentos con una relaci&oacute;n &lsquo;pertenece a&rsquo; entre ellas.";
 choices[9][2] = "Definir una tabla de departamentos con una clave tipo &lsquo;TREE&rsquo; que recoja la estructura org&aacute;nica.";
 choices[9][3] = "Preguntar al usuario cu&aacute;ntos niveles de departamentos tiene el organismo, y definir en una tabla de departamentos tantos atributos como niveles posibles pueda haber.";
 answers[9] = 0;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5470. ";
 preguntaids[9] = 5470


//  Id pregunta: 3063 Año de creación de pregunta: 2002
 questions[10]= "11)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[10]= new Array();
 choices[10][0] = "Primera forma normal";
 choices[10][1] = "Segunda forma normal";
 choices[10][2] = "Tercera forma normal";
 choices[10][3] = "Forma normal de Boyce-Codd";
 answers[10] = 1;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3063. ";
 preguntaids[10] = 3063


//  Id pregunta: 3519 Año de creación de pregunta: 2006
 questions[11]= "12)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[11][1] = "Diagrama de Flujo de Datos";
 choices[11][2] = "Diagrama de Contexto";
 choices[11][3] = "Modelo de Datos";
 answers[11] = 0;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3519. ";
 preguntaids[11] = 3519


//  Id pregunta: 3253 Año de creación de pregunta: 2003
 questions[12]= "13)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[12]= new Array();
 choices[12][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[12][1] = "Para establecer reglas de integridad.";
 choices[12][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[12][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[12] = 1;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3253. ";
 preguntaids[12] = 3253


//  Id pregunta: 3249 Año de creación de pregunta: 2003
 questions[13]= "14)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Superclave.";
 choices[13][1] = "Clave principal.";
 choices[13][2] = "Tupla m&uacute;ltiple.";
 choices[13][3] = "Clave ajena.";
 answers[13] = 3;
 units[13] = ['61'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3249. Junta Andaluc&iacute;a";
 preguntaids[13] = 3249


//  Id pregunta: 3240 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[14]= new Array();
 choices[14][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[14][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[14][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[14][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[14] = 0;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3240. ";
 preguntaids[14] = 3240


//  Id pregunta: 3186 Año de creación de pregunta: 2003
 questions[15]= "16)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "&Iacute;ndice no &uacute;nico.";
 choices[15][1] = "Vista.";
 choices[15][2] = "Database link.";
 choices[15][3] = "Clustered Cable.";
 answers[15] = 2;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3186. Junta Andaluc&iacute;a";
 preguntaids[15] = 3186


//  Id pregunta: 3250 Año de creación de pregunta: 2003
 questions[16]= "17)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[16]= new Array();
 choices[16][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[16][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[16][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[16][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[16] = 3;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3250. ";
 preguntaids[16] = 3250


//  Id pregunta: 3104 Año de creación de pregunta: 2002
 questions[17]= "18)  Una relaci&oacute;n est&aacute; en segunda forma normal si:";
 choices[17]= new Array();
 choices[17][0] = "Est&aacute; en 1FN y todos son atributos toman un s&oacute;lo valor";
 choices[17][1] = "Est&aacute; en 1FN y todos sus atributos no pertenecientes a claves candidatas dependen de forma completa de la clave";
 choices[17][2] = "Est&aacute; en 1FN y sus atributos pertenecen al dominio de la informaci&oacute;n";
 choices[17][3] = "Est&aacute; en 1FN y ning&uacute;n atributo depende funcionalmente de la clave";
 answers[17] = 1;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3104. ";
 preguntaids[17] = 3104


//  Id pregunta: 3627 Año de creación de pregunta: 2002
 questions[18]= "19)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[18][1] = "Cuando acaba la rutina que los actualiza.";
 choices[18][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[18][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[18] = 3;
 units[18] = ['60', '61', '86'];
 blocks[18] = ['B2', 'B3'];
 comments[18] = "Id Pregunta: 3627. ";
 preguntaids[18] = 3627


//  Id pregunta: 3238 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Qu&eacute; es JDBC?:";
 choices[19]= new Array();
 choices[19][0] = "Un modelo de objetos ActiveX.";
 choices[19][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[19][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[19][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[19] = 3;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3238. Junta Andaluc&iacute;a";
 preguntaids[19] = 3238


//  Id pregunta: 3081 Año de creación de pregunta: 2002
 questions[20]= "21)  Un 'Recordset' es:";
 choices[20]= new Array();
 choices[20][0] = "Un conjunto de variables en un lenguaje orientado a objetos";
 choices[20][1] = "Una referencia al resultado de una consulta o tabla de base de datos";
 choices[20][2] = "La unidad b&aacute;sica para acceder a vol&uacute;menes de disco montados por NFS";
 choices[20][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[20] = 1;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3081. ";
 preguntaids[20] = 3081


//  Id pregunta: 3120 Año de creación de pregunta: 2002
 questions[21]= "22)  La notaci&oacute;n sint&aacute;ctica conocida como BNF (Backus Normal Form) especifica:";
 choices[21]= new Array();
 choices[21][0] = "La funci&oacute;n, el formato, las reglas sint&aacute;cticas y generales de cada elemento SQL";
 choices[21][1] = "La sintaxis y la sem&aacute;ntica del SQL-DDL (Lenguaje de Definici&oacute;n de Esquema) y el SQL-DML (Lenguaje de M&oacute;dulos y de Manipulaci&oacute;n de Datos)";
 choices[21][2] = "Las autorizaciones para realizar determinadas funciones en las tablas";
 choices[21][3] = "Las restricciones para prevenir que dos filas tengan los mismos valores en determinadas columnas (unique) o para impedir que determinada columna contenga un valor nulo";
 answers[21] = 0;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3120. ";
 preguntaids[21] = 3120


//  Id pregunta: 3327 Año de creación de pregunta: 2004
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[22]= new Array();
 choices[22][0] = "SELECT";
 choices[22][1] = "CREATE";
 choices[22][2] = "INSERT";
 choices[22][3] = "UPDATE";
 answers[22] = 1;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3327. ";
 preguntaids[22] = 3327


//  Id pregunta: 3212 Año de creación de pregunta: 2003
 questions[23]= "24)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[23]= new Array();
 choices[23][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[23][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[23][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[23][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[23] = 2;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3212. ";
 preguntaids[23] = 3212


//  Id pregunta: 3270 Año de creación de pregunta: 2003
 questions[24]= "25)  La tercera forma normal enunciada por Codd dice:";
 choices[24]= new Array();
 choices[24][0] = "Un relaci&oacute;n est&aacute; en tercera forma normal, si est&aacute; en 2FN y adem&aacute;s ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[24][1] = "Una relaci&oacute;n R est&aacute; en 3FN si todos los atributos que no forman parte de la clave son mutuamente independientes y dependen funcionalmente de forma completa de la clave primaria";
 choices[24][2] = "Ambos enunciados son correctos";
 choices[24][3] = "Ninguno es correcto";
 answers[24] = 2;
 units[24] = ['61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3270. ";
 preguntaids[24] = 3270


//  Id pregunta: 4444 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre SGBDs no es correcta?:";
 choices[25]= new Array();
 choices[25][0] = "La indexaci&oacute;n por palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[25][1] = "La indexaci&oacute;n por campos es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[25][2] = "Los procedimientos de b&uacute;squeda de los SGBD se basan en la tecnolog&iacute;a de los ficheros inversos";
 choices[25][3] = "La indexaci&oacute;n por cadenas de palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 answers[25] = 1;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 4444. ";
 preguntaids[25] = 4444


//  Id pregunta: 5720 Año de creación de pregunta: 2007
 questions[26]= "27)  Indique cu&aacute;l de los siguientes no es un lenguaje relacional:";
 choices[26]= new Array();
 choices[26][0] = "RQL";
 choices[26][1] = "QUEL";
 choices[26][2] = "QBE";
 choices[26][3] = "SQL";
 answers[26] = 0;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5720. ";
 preguntaids[26] = 5720


//  Id pregunta: 3103 Año de creación de pregunta: 2002
 questions[27]= "28)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[27]= new Array();
 choices[27][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[27][1] = "No contiene claves dependientes de otra extranjera";
 choices[27][2] = "La clave extranjera est&aacute; normalizada";
 choices[27][3] = "No contiene grupos repetitivos";
 answers[27] = 3;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3103. ";
 preguntaids[27] = 3103


//  Id pregunta: 5671 Año de creación de pregunta: 2007
 questions[28]= "29)  En el modelo relacional se denomina dominio de un atributo a:";
 choices[28]= new Array();
 choices[28][0] = "El conjunto de valores permitidos para ese atributo.";
 choices[28][1] = "El peso del atributo, es decir si forma parte de una clave candidata o no.";
 choices[28][2] = "La clasificaci&oacute;n de los atributos de una relaci&oacute;n entre dominantes y dominados.";
 choices[28][3] = "El orden de los valores de ese atributo para todas las tuplas de la relaci&oacute;n donde se encuentra definido.";
 answers[28] = 0;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5671. ";
 preguntaids[28] = 5671


//  Id pregunta: 3384 Año de creación de pregunta: 2006
 questions[29]= "30)  Qu&eacute; t&eacute;cnica se utiliza para eliminar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos";
 choices[29]= new Array();
 choices[29][0] = "Back-roll";
 choices[29][1] = "Bloqueo";
 choices[29][2] = "Inter-Roll";
 choices[29][3] = "Roll-back";
 answers[29] = 1;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3384. ";
 preguntaids[29] = 3384


//  Id pregunta: 3262 Año de creación de pregunta: 2003
 questions[30]= "31)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[30]= new Array();
 choices[30][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[30][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[30][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[30][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[30] = 0;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3262. ";
 preguntaids[30] = 3262


//  Id pregunta: 4171 Año de creación de pregunta: 2006
 questions[31]= "32)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[31]= new Array();
 choices[31][0] = "No tiene grupos repetitivos";
 choices[31][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[31][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[31][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[31] = 1;
 units[31] = ['61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 4171. ";
 preguntaids[31] = 4171


//  Id pregunta: 3259 Año de creación de pregunta: 2003
 questions[32]= "33)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[32]= new Array();
 choices[32][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[32][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n pueda interactuar con distintos sistemas gestores de base de datos";
 choices[32][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[32][3] = "Permite que lo que un sistema gestor pueda hacerle sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[32] = 2;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3259. ";
 preguntaids[32] = 3259


//  Id pregunta: 5916 Año de creación de pregunta: 2007
 questions[33]= "34)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[33]= new Array();
 choices[33][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[33][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[33][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[33][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[33] = 0;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5916. ";
 preguntaids[33] = 5916


//  Id pregunta: 5445 Año de creación de pregunta: 2007
 questions[34]= "35)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[34]= new Array();
 choices[34][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[34][1] = "Mediante un trigger.";
 choices[34][2] = "Mediante una constraint de tipo CHECK.";
 choices[34][3] = "No se pueden definir restricciones de ese tipo.";
 answers[34] = 1;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5445. ";
 preguntaids[34] = 5445


//  Id pregunta: 3314 Año de creación de pregunta: 2004
 questions[35]= "36)  En las bases de datos, &iquest;qu&eacute; tipo de redundancia debe tolerarse?";
 choices[35]= new Array();
 choices[35][0] = "L&oacute;gica";
 choices[35][1] = "M&uacute;ltiple";
 choices[35][2] = "Controlada";
 choices[35][3] = "Ninguna";
 answers[35] = 2;
 units[35] = ['61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3314. MAP-B 2003";
 preguntaids[35] = 3314


//  Id pregunta: 3004 Año de creación de pregunta: 2002
 questions[36]= "37)  Para trabajar con una vista que contenga tuplas de varias tablas se utilizar&aacute; la sentencia SQL:";
 choices[36]= new Array();
 choices[36][0] = "CREATE TABLE";
 choices[36][1] = "CREATE VIEW";
 choices[36][2] = "ALTER TABLE";
 choices[36][3] = "ALTER VIEW";
 answers[36] = 1;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3004. ";
 preguntaids[36] = 3004


//  Id pregunta: 5620 Año de creación de pregunta: 2007
 questions[37]= "38)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[37]= new Array();
 choices[37][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[37][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[37][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[37][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[37] = 0;
 units[37] = ['61'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 5620. ";
 preguntaids[37] = 5620


//  Id pregunta: 3824 Año de creación de pregunta: 2002
 questions[38]= "39)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Esquema Conceptual";
 choices[38][1] = "Esquema Externo";
 choices[38][2] = "Esquema Interno";
 choices[38][3] = "Esquema Funcional";
 answers[38] = 1;
 units[38] = ['61', '85', '86'];
 blocks[38] = ['B2', 'B3'];
 comments[38] = "Id Pregunta: 3824. ";
 preguntaids[38] = 3824


//  Id pregunta: 5690 Año de creación de pregunta: 2007
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite?";
 choices[39]= new Array();
 choices[39][0] = "Forms.";
 choices[39][1] = "Reports.";
 choices[39][2] = "Designer.";
 choices[39][3] = "Fusion.";
 answers[39] = 3;
 units[39] = ['60', '61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5690. ";
 preguntaids[39] = 5690


//  Id pregunta: 3185 Año de creación de pregunta: 2003
 questions[40]= "41)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Procedimiento";
 choices[40][1] = "Producto.";
 choices[40][2] = "Secuencia.";
 choices[40][3] = "Segmento.";
 answers[40] = 0;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3185. Junta Andaluc&iacute;a";
 preguntaids[40] = 3185


//  Id pregunta: 5788 Año de creación de pregunta: 2007
 questions[41]= "42)  Los cursores de referencia de Pl/SQL";
 choices[41]= new Array();
 choices[41][0] = "son m&aacute;s r&aacute;pidos que los cursores est&aacute;ndar (o normales).";
 choices[41][1] = "pueden aceptar la asociaci&oacute;n de variables";
 choices[41][2] = "pueden usarse como cursores impl&iacute;citos en bucles";
 choices[41][3] = "pueden aceptar par&aacute;metros";
 answers[41] = 1;
 units[41] = ['61'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5788. ";
 preguntaids[41] = 5788


//  Id pregunta: 3825 Año de creación de pregunta: 2002
 questions[42]= "43)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[42]= new Array();
 choices[42][0] = "Uno-a-muchos";
 choices[42][1] = "Binaria";
 choices[42][2] = "Muchos-a-muchos";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 0;
 units[42] = ['60', '61', '85'];
 blocks[42] = ['B2', 'B3'];
 comments[42] = "Id Pregunta: 3825. ";
 preguntaids[42] = 3825


//  Id pregunta: 3248 Año de creación de pregunta: 2003
 questions[43]= "44)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[43]= new Array();
 choices[43][0] = "R&eacute;plica.";
 choices[43][1] = "Segmento.";
 choices[43][2] = "Instancia.";
 choices[43][3] = "Tablespace.";
 answers[43] = 2;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3248. Junta Andaluc&iacute;a";
 preguntaids[43] = 3248


//  Id pregunta: 3193 Año de creación de pregunta: 2003
 questions[44]= "45)  Dentro del &aacute;lgebra relacional, &iquest;qu&eacute; definici&oacute;n corresponde con la Uni&oacute;n Natural?";
 choices[44]= new Array();
 choices[44][0] = "Si X es un subconjunto de atributos de la relaci&oacute;n R, entonces la uni&oacute;n natural de R es la relaci&oacute;n formada por las columnas de R correspondientes a los atributos de X.";
 choices[44][1] = "La uni&oacute;n natural de dos relaciones R y S es el conjunto formado por todas las tuplas de R que no est&aacute;n en S. Este operador s&oacute;lo se puede aplicar a relaciones del mismo grado y con los mismos atributos.";
 choices[44][2] = "La uni&oacute;n natural de dos relaciones R y S, de grados m y n respectivamente es el conjunto formado por todas las posibles tuplas (mxn tuplas) de m+n elementos en las que los m primeros son de R y los n restantes pertenecen a S.";
 choices[44][3] = "Ninguna de las definiciones anteriores corresponde con la uni&oacute;n natural.";
 answers[44] = 3;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3193. ";
 preguntaids[44] = 3193


//  Id pregunta: 2997 Año de creación de pregunta: 2002
 questions[45]= "46)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[45]= new Array();
 choices[45][0] = "DELETE + Nombre de la tabla";
 choices[45][1] = "DROP + Nombre de la tabla";
 choices[45][2] = "REVOKE + Nombre de la tabla";
 choices[45][3] = "B y C son ciertas";
 answers[45] = 1;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2997. ";
 preguntaids[45] = 2997


//  Id pregunta: 5658 Año de creación de pregunta: 2007
 questions[46]= "47)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[46]= new Array();
 choices[46][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[46][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[46][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[46][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de &eacute;stas.";
 answers[46] = 3;
 units[46] = ['61'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 5658. ";
 preguntaids[46] = 5658


//  Id pregunta: 3093 Año de creación de pregunta: 2002
 questions[47]= "48)  Una asociaci&oacute;n entre entidades es reflexiva cuando:";
 choices[47]= new Array();
 choices[47][0] = "El n&uacute;mero de entidades que participan en la asociaci&oacute;n es mayor que 2";
 choices[47][1] = "La cardinalidad de la asociaci&oacute;n es l";
 choices[47][2] = "Tiene &uacute;nicamente un atributo principal como clave";
 choices[47][3] = "Una entidad se relaciona con ella misma";
 answers[47] = 3;
 units[47] = ['61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3093. ";
 preguntaids[47] = 3093


//  Id pregunta: 3317 Año de creación de pregunta: 2004
 questions[48]= "49)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[48]= new Array();
 choices[48][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[48][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[48][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[48][3] = "Por medio de SQL embebido";
 answers[48] = 1;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3317. MAP-B 2003";
 preguntaids[48] = 3317


//  Id pregunta: 3328 Año de creación de pregunta: 2004
 questions[49]= "50)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[49]= new Array();
 choices[49][0] = "Acceso garantizado";
 choices[49][1] = "Independencia f&iacute;sica de los datos";
 choices[49][2] = "Gesti&oacute;n de una BDR";
 choices[49][3] = "Actualizaci&oacute;n de tablas";
 answers[49] = 3;
 units[49] = ['61'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3328. ";
 preguntaids[49] = 3328


//  Id pregunta: 3330 Año de creación de pregunta: 2004
 questions[50]= "51)  &iquest;Qu&eacute; hace el comando SQL update?";
 choices[50]= new Array();
 choices[50][0] = "Modifica la estructura de una tabla agregando o eliminando campos";
 choices[50][1] = "Modifica la estructura de una vista";
 choices[50][2] = "Modifica los valores de los campos de una tabla";
 choices[50][3] = "Modifica la estructura de una tabla cambiando la definici&oacute;n de sus campos";
 answers[50] = 2;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3330. ";
 preguntaids[50] = 3330


//  Id pregunta: 3268 Año de creación de pregunta: 2003
 questions[51]= "52)  La forma normal Boyce-Codd (FNBC):";
 choices[51]= new Array();
 choices[51][0] = "Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[51][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[51][2] = "Se denomina indistintamente 5FN.";
 choices[51][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[51] = 1;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3268. Junta Andaluc&iacute;a";
 preguntaids[51] = 3268


//  Id pregunta: 4166 Año de creación de pregunta: 2006
 questions[52]= "53)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[52]= new Array();
 choices[52][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[52][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[52][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[52][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[52] = 3;
 units[52] = ['61'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 4166. ";
 preguntaids[52] = 4166


//  Id pregunta: 3043 Año de creación de pregunta: 2002
 questions[53]= "54)  Se&ntilde;ale la alternativa que contiene los operadores que, juntos, componen el operador &lsquo;join&rsquo; del &aacute;lgebra relacional:";
 choices[53]= new Array();
 choices[53][0] = "Selecci&oacute;n, proyecci&oacute;n y diferencia";
 choices[53][1] = "Selecci&oacute;n, proyecci&oacute;n y producto cartesiano";
 choices[53][2] = "Proyecci&oacute;n, producto cartesiano y diferencia";
 choices[53][3] = "Proyecci&oacute;n, producto cartesiano y uni&oacute;n";
 answers[53] = 1;
 units[53] = ['61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3043. ";
 preguntaids[53] = 3043


//  Id pregunta: 3059 Año de creación de pregunta: 2002
 questions[54]= "55)  Si hablamos de formas normales en el modelo relacional, una de las siguientes afirmaciones es falsa:";
 choices[54]= new Array();
 choices[54][0] = "Una informaci&oacute;n est&aacute; en primera forma normal si no incluye ning&uacute;n grupo repetitivo";
 choices[54][1] = "La cuarta forma normal elimina dependencias monovaluadas";
 choices[54][2] = "La segunda forma normal, implica, adem&aacute;s de estar en primera forma normal, que en una relaci&oacute;n cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves, y no con partes de &eacute;stas";
 choices[54][3] = "La quinta forma normal elimina dependencias combinacionales";
 answers[54] = 1;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3059. ";
 preguntaids[54] = 3059


//  Id pregunta: 3290 Año de creación de pregunta: 2003
 questions[55]= "56)  Una de las formas de almacenar las Bases de Datos es la organizaci&oacute;n Hash. &iquest;En qu&eacute; consiste?";
 choices[55]= new Array();
 choices[55][0] = "En la organizaci&oacute;n Hash se accede al registro deseado directamente a trav&eacute;s del &iacute;ndice o clave.";
 choices[55][1] = "Consiste en ir indexando tablas de &iacute;ndices hasta tener un solo bloque mediante sucesivas iteraciones.";
 choices[55][2] = "Consiste en tener una serie de grupos numerados de modo que cuando se va a acceder a un registro conociendo la clave primaria se aplica sobre ella una funci&oacute;n algor&iacute;tmica obteni&eacute;ndose el grupo en el que ha de estar el registro deseado.";
 choices[55][3] = "En la organizaci&oacute;n Hash los registros se almacenan utilizando dos &iacute;ndices, uno primario que se&ntilde;ala los registros de acceso m&aacute;s frecuentes y otro secundario definido con alg&uacute;n criterio.";
 answers[55] = 2;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3290. ";
 preguntaids[55] = 3290


//  Id pregunta: 3266 Año de creación de pregunta: 2003
 questions[56]= "57)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[56]= new Array();
 choices[56][0] = "PL/SQL.";
 choices[56][1] = "JSQL.";
 choices[56][2] = "SQL embebido.";
 choices[56][3] = "SQL anfitri&oacute;n.";
 answers[56] = 2;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3266. Junta Andaluc&iacute;a";
 preguntaids[56] = 3266


//  Id pregunta: 3277 Año de creación de pregunta: 2003
 questions[57]= "58)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[57]= new Array();
 choices[57][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[57][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[57][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[57][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[57] = 0;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3277. ";
 preguntaids[57] = 3277


//  Id pregunta: 3978 Año de creación de pregunta: 2002
 questions[58]= "59)  Una relaci&oacute;n que est&eacute; en 3FN:";
 choices[58]= new Array();
 choices[58][0] = "No tiene por qu&eacute; estar en 1FN";
 choices[58][1] = "Tiene dependencias funcionales transitivas";
 choices[58][2] = "Tiene atributos multivaluados";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = 3;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3978. ";
 preguntaids[58] = 3978


//  Id pregunta: 3040 Año de creación de pregunta: 2002
 questions[59]= "60)  Se&ntilde;ale el enunciado falso:";
 choices[59]= new Array();
 choices[59][0] = "Los sistemas transaccionales deben bloquear los registros que vayan a modificar";
 choices[59][1] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado es cuando se actualizan las bases de datos y se suelen liberar los registros intervinientes";
 choices[59][2] = "Todos los aspectos de una transacci&oacute;n deben completarse o el sistema debe actuar como si ninguna se hubiera completado";
 choices[59][3] = "Los efectos de una transacci&oacute;n deben ser visibles por las dem&aacute;s transacciones antes que la transacci&oacute;n se complete";
 answers[59] = 3;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3040. ";
 preguntaids[59] = 3040


//  Id pregunta: 5444 Año de creación de pregunta: 2007
 questions[60]= "61)  Qu&eacute; son las restricciones de integridad?";
 choices[60]= new Array();
 choices[60][0] = "Son condiciones sobre el almacenamiento f&iacute;sico de los datos de la base de datos.";
 choices[60][1] = "Son condiciones que deben cumplir los datos almacenados en la base de datos relacional.";
 choices[60][2] = "Son las restricciones que el sistema de gesti&oacute;n de base de datos impone a los ficheros de la base de datos.";
 choices[60][3] = "Son una serie de caracter&iacute;sticas que deben cumplir las transacciones.";
 answers[60] = 1;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 5444. ";
 preguntaids[60] = 5444


//  Id pregunta: 3194 Año de creación de pregunta: 2003
 questions[61]= "62)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[61]= new Array();
 choices[61][0] = "Borra una tabla determinada.";
 choices[61][1] = "Borra un &iacute;ndice de una tabla.";
 choices[61][2] = "Borra valores de una tabla.";
 choices[61][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[61] = 2;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3194. ";
 preguntaids[61] = 3194


//  Id pregunta: 3058 Año de creación de pregunta: 2002
 questions[62]= "63)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[62]= new Array();
 choices[62][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[62][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[62][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[62][3] = "FAMILIAR es una entidad dependiente";
 answers[62] = 2;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3058. ";
 preguntaids[62] = 3058


//  Id pregunta: 3105 Año de creación de pregunta: 2002
 questions[63]= "64)  Una relaci&oacute;n se dice que est&aacute; en tercera forma normal (3FN) de Boyce y Codd si:";
 choices[63]= new Array();
 choices[63][0] = "Est&aacute; en primera forma normal y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves";
 choices[63][1] = "No contiene dependendencias multievaluadas";
 choices[63][2] = "Ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[63][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[63] = 3;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3105. ";
 preguntaids[63] = 3105


//  Id pregunta: 3034 Año de creación de pregunta: 2002
 questions[64]= "65)  Seg&uacute;n el est&aacute;ndar SQL, una transacci&oacute;n es una secuencia de operaciones que:";
 choices[64]= new Array();
 choices[64][0] = "Se inicia con una sentencia BEGIN TRANSACTION y termina con una sentencia END TRANSACTION";
 choices[64][1] = "Si se termina con un sentencia ROLLBACK, todos los cambios realizados por las diferentes transacciones desde el inicio de la sesi&oacute;n son cancelados";
 choices[64][2] = "Puede iniciarse con la ejecuci&oacute;n de una sentencia DML y se finaliza con una sentencia COMMIT o ROLLBACK";
 choices[64][3] = "Si no finaliza con una sentencia COMMIT, el sistema debe devolver un mensaje de error";
 answers[64] = 2;
 units[64] = ['61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3034. ";
 preguntaids[64] = 3034


//  Id pregunta: 3326 Año de creación de pregunta: 2004
 questions[65]= "66)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Un conjunto de valores";
 choices[65][1] = "El n&uacute;mero de tuplas";
 choices[65][2] = "El n&uacute;mero de atributos";
 choices[65][3] = "El n&uacute;mero de vistas";
 answers[65] = 2;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3326. ";
 preguntaids[65] = 3326


//  Id pregunta: 5562 Año de creación de pregunta: 2007
 questions[66]= "67)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[66]= new Array();
 choices[66][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[66][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[66][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[66][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[66] = 1;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5562. ";
 preguntaids[66] = 5562


//  Id pregunta: 5269 Año de creación de pregunta: 2006
 questions[67]= "68)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[67]= new Array();
 choices[67][0] = "El libre";
 choices[67][1] = "El comercial";
 choices[67][2] = "Los dos anteriores son igual de costosos";
 choices[67][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[67] = 1;
 units[67] = ['61'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 5269. ";
 preguntaids[67] = 5269


//  Id pregunta: 4167 Año de creación de pregunta: 2006
 questions[68]= "69)  Indique la afirmaci&oacute;n incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Una relaci&oacute;n est&aacute; en segunda forma normal (2FN) solamente si todos los atributos son dependientes en forma completa de la clave.";
 choices[68][1] = "Cualquier relaci&oacute;n en primera forma normal que tiene una clave compuesta, est&aacute; autom&aacute;ticamente en segunda forma normal.";
 choices[68][2] = "Una relaci&oacute;n se encuentra en tercera forma normal (EFN) si no existen transitividades entre sus atributos y si ya se encuentra en 2 FN.";
 choices[68][3] = "Para poner una relaci&oacute;n en la cuarta forma normal debe estar en 3FN y deben existir una o m&aacute;s multidependencias.";
 answers[68] = 1;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 4167. ";
 preguntaids[68] = 4167


//  Id pregunta: 3257 Año de creación de pregunta: 2003
 questions[69]= "70)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[69]= new Array();
 choices[69][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[69][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[69][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[69][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[69] = 1;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3257. ";
 preguntaids[69] = 3257


//  Id pregunta: 3133 Año de creación de pregunta: 2002
 questions[70]= "71)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[70]= new Array();
 choices[70][0] = "Es un programa con 2 versiones de trabajo";
 choices[70][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[70][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[70][3] = "Es un equipo tolerante a fallos";
 answers[70] = 1;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3133. ";
 preguntaids[70] = 3133


//  Id pregunta: 3124 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[71]= new Array();
 choices[71][0] = "Diccionario de palabras vac&iacute;as";
 choices[71][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[71][2] = "Tesauro";
 choices[71][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[71] = 3;
 units[71] = ['61'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3124. ";
 preguntaids[71] = 3124


//  Id pregunta: 3188 Año de creación de pregunta: 2003
 questions[72]= "73)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[72]= new Array();
 choices[72][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[72][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[72][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[72][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[72] = 3;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3188. Junta Andaluc&iacute;a";
 preguntaids[72] = 3188


//  Id pregunta: 3084 Año de creación de pregunta: 2002
 questions[73]= "74)  Un sistema de gesti&oacute;n de base de datos (SGBD) es relacional si, entre otras cosas:";
 choices[73]= new Array();
 choices[73][0] = "Soporta un lenguaje de manipulaci&oacute;n de datos basado en el c&aacute;lculo referencial";
 choices[73][1] = "Soporta un lenguaje de definici&oacute;n de datos de tipo referencial";
 choices[73][2] = "Es capaz de establecer relaciones con otros SGBD";
 choices[73][3] = "Toda la informaci&oacute;n se representa a nivel l&oacute;gico en forma de tablas";
 answers[73] = 3;
 units[73] = ['61'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3084. ";
 preguntaids[73] = 3084


//  Id pregunta: 3310 Año de creación de pregunta: 2004
 questions[74]= "75)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[74]= new Array();
 choices[74][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[74][1] = "Atomicity, Consistency, Integration and Durability";
 choices[74][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 0;
 units[74] = ['61'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3310. ";
 preguntaids[74] = 3310


