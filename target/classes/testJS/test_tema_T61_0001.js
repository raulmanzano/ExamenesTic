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
//  Id pregunta: 1510 Año de creación de pregunta: 2016
 questions[0]= "1)  Las denominadas doce reglas de Codd son reglas que:";
 choices[0]= new Array();
 choices[0][0] = "Permiten calificar el grado de seguridad de un sistema de gesti&oacute;n de bases de datos.";
 choices[0][1] = "Articulan el dise&ntilde;o de los sistemas operativos m&aacute;s significativos de la actualidad.";
 choices[0][2] = "Definen qu&eacute; se requiere de un sistema de gesti&oacute;n de base de datos con el fin de que sea considerado relacional.";
 choices[0][3] = "Mejoran significativamente el control de calidad en los proyectos de desarrollo de bases de datos.";
 answers[0] = 2;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1510. ";
 preguntaids[0] = 1510


//  Id pregunta: 1802 Año de creación de pregunta: 2016
 questions[1]= "2)  En SQL, &iquest;cu&aacute;l de las siguientes sentencias es correcta?";
 choices[1]= new Array();
 choices[1][0] = "TRUNCATE TABLE, borra la tabla de la base de datos";
 choices[1][1] = "TRUNCATE TABLE es funcionalmente igual a DELETE TABLE";
 choices[1][2] = "TRUNCATE TABLE debe ser usado con la cl&aacute;usula WHERE";
 choices[1][3] = "Ninguna de las anteriores es correcta";
 answers[1] = 0;
 units[1] = ['61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1802. ";
 preguntaids[1] = 1802


//  Id pregunta: 2938 Año de creación de pregunta: 2002
 questions[2]= "3)  La instrucci&oacute;n &quot;SELECT DISTINCT&quot; en SQL:";
 choices[2]= new Array();
 choices[2][0] = "Devuelve los resultados de la consulta, eliminando los duplicados";
 choices[2][1] = "Devuelve los datos de la tabla que no estaban en la consulta inmediatamente anterior";
 choices[2][2] = "Permite obtener los datos clave que distinguen a una fila de otra";
 choices[2][3] = "Todas las anteriores respuestas son falsas";
 answers[2] = 0;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2938. ";
 preguntaids[2] = 2938


//  Id pregunta: 2963 Año de creación de pregunta: 2002
 questions[3]= "4)  Las bases de datos tipo ORACLE o Mysql est&aacute;n estructuradas seg&uacute;n un modelo:";
 choices[3]= new Array();
 choices[3][0] = "Sem&aacute;ntico";
 choices[3][1] = "Conceptual";
 choices[3][2] = "Relacional";
 choices[3][3] = "Jer&aacute;rquico";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2963. ";
 preguntaids[3] = 2963


//  Id pregunta: 1800 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como una de las caracter&iacute;sticas de las Bases de Datos XML nativas";
 choices[4]= new Array();
 choices[4][0] = "Las Bases de Datos XML nativas son bases de datos centradas en documentos";
 choices[4][1] = "Las Bases de Datos XML nativas permiten la creaci&oacute;n de &iacute;ndices";
 choices[4][2] = "Las Bases de Datos XML nativas soportan s&oacute;lo el lenguaje de consulta XML";
 choices[4][3] = "Las Bases de Datos XML nativas no tienen ning&uacute;n modelo de almacenamiento f&iacute;sico subyacente concreto";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1800. ";
 preguntaids[4] = 1800


//  Id pregunta: 2971 Año de creación de pregunta: 2002
 questions[5]= "6)  Las vistas de una base de datos:";
 choices[5]= new Array();
 choices[5][0] = "Son tablas virtuales que se definen sobre una o m&aacute;s tablas reales y de las que s&oacute;lo se almacena su definici&oacute;n";
 choices[5][1] = "Son las distintas formas de representaci&oacute;n del modelo conceptual de datos";
 choices[5][2] = "Son las formas en las que se puede almacenar f&iacute;sicamente la informaci&oacute;n, dependiendo de las caracter&iacute;sticas del sistema inform&aacute;tico";
 choices[5][3] = "No se corresponden con nada de lo anterior";
 answers[5] = 0;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2971. ";
 preguntaids[5] = 2971


//  Id pregunta: 1615 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de los siguientes controles es el m&aacute;s cr&iacute;tico sobre las actividades de administraci&oacute;n de bases de datos:";
 choices[6]= new Array();
 choices[6][0] = "Aprobaci&oacute;n de las actividades de Administrador de bases de datos";
 choices[6][1] = "Segregaci&oacute;n de tareas";
 choices[6][2] = "Revisi&oacute;n de logs de acceso y actividades";
 choices[6][3] = "Revisi&oacute;n del uso de las herramientas del Sistema Gestor de Base de Datos (SGBD)";
 answers[6] = 1;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1615. ";
 preguntaids[6] = 1615


//  Id pregunta: 2921 Año de creación de pregunta: 2002
 questions[7]= "8)  La 3FN (Tercera Forma Normal), definida por Codd, dice:";
 choices[7]= new Array();
 choices[7][0] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si no incluye ning&uacute;n grupo repetitivo";
 choices[7][1] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si todos los atributos que no forman parte de la clave primaria son mutuamente independientes y dependen funcionalmente de forma completa de la clave";
 choices[7][2] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si est&aacute; en 2FN (Segunda Forma Normal) y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves y no con partes de &eacute;sta";
 choices[7][3] = "Elimina dependencias multivaluadas";
 answers[7] = 1;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2921. ";
 preguntaids[7] = 2921


//  Id pregunta: 2714 Año de creación de pregunta: 2002
 questions[8]= "9)  Cuando en las entidades descritas en el modelo de datos existe una dependencia funcional de los atributos de todos los atributos que componen la clave, se dice que el modelo est&aacute; normalizado:";
 choices[8]= new Array();
 choices[8][0] = "En segunda forma normal";
 choices[8][1] = "En primera forma normal";
 choices[8][2] = "En tercera forma normal";
 choices[8][3] = "En cuarta forma normal";
 answers[8] = 0;
 units[8] = ['61'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2714. ";
 preguntaids[8] = 2714


//  Id pregunta: 1801 Año de creación de pregunta: 2016
 questions[9]= "10)  Existen diferentes tipos de relaciones para un sistema de gesti&oacute;n de bases de datos relacional. Indique cu&aacute;l es la opci&oacute;n correcta que define a las del tipo instant&aacute;neas.";
 choices[9]= new Array();
 choices[9][0] = "Son relaciones con nombre y derivadas. Son reales: est&aacute;n representadas no s&oacute;lo por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre, sino tambi&eacute;n por sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[9][1] = "Son relaciones con nombre y derivadas. Son virtuales: est&aacute;n representadas por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre y no poseen sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[9][2] = "Son relaciones sin nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 choices[9][3] = "Son relaciones que pueden o no tener nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 answers[9] = 0;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1801. ";
 preguntaids[9] = 1801


//  Id pregunta: 1475 Año de creación de pregunta: 2016
 questions[10]= "11)  En un diagrama Entidad Relaci&oacute;n existe una relaci&oacute;n n:m entre dos entidades: Alumno y Profesor. Un profesor puede dar clases a muchos alumnos, y un alumno puede tener muchos profesores, &iquest;Cu&aacute;ntas tablas son necesarias como m&iacute;nimo para implementar en el modelo f&iacute;sico esa relaci&oacute;n en primera forma normal si se hace utilizando una base de datos relacional?";
 choices[10]= new Array();
 choices[10][0] = "Dos.";
 choices[10][1] = "Tres.";
 choices[10][2] = "Cuatro.";
 choices[10][3] = "Cinco.";
 answers[10] = 1;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1475. ";
 preguntaids[10] = 1475


//  Id pregunta: 1798 Año de creación de pregunta: 2016
 questions[11]= "12)  En un modelo relacional existen restricciones inherentes (propias del modelo) y restricciones sem&aacute;nticas (de usuario). Indique cu&aacute;l de las siguientes opciones NO es una restricci&oacute;n sem&aacute;ntica:";
 choices[11]= new Array();
 choices[11][0] = "Unicidad de valor en un atributo";
 choices[11][1] = "Obligatoriedad de que un atributo no admita nulos";
 choices[11][2] = "Integridad referencial";
 choices[11][3] = "Obligatoriedad de existencia de clave primaria.";
 answers[11] = 3;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1798. ";
 preguntaids[11] = 1798


//  Id pregunta: 1959 Año de creación de pregunta: 2016
 questions[12]= "13)  En el entorno de las bases de datos relacionales se denomina ACID a:";
 choices[12]= new Array();
 choices[12][0] = "Un conjunto de caracter&iacute;sticas necesarias para que una serie de instrucciones puedan ser consideradas como una transacci&oacute;n.";
 choices[12][1] = "EI m&eacute;todo que determina cuando una transacci&oacute;n finaliza con &eacute;xito.";
 choices[12][2] = "EI m&eacute;todo que determina cuando una transacci&oacute;n no finaliza con &eacute;xito.";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = 0;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1959. ";
 preguntaids[12] = 1959


//  Id pregunta: 2979 Año de creación de pregunta: 2002
 questions[13]= "14)  Los operadores fundamentales del &aacute;lgebra relacional utilizada en los lenguajes relacionales de los SGBDR:";
 choices[13]= new Array();
 choices[13][0] = "Pueden combinarse para dar lugar a otros";
 choices[13][1] = "Permiten obtener cualquier subconjunto de los datos contenidos en una base de datos";
 choices[13][2] = "Son cinco: selecci&oacute;n, proyecci&oacute;n, uni&oacute;n, diferencia y producto cartesiano";
 choices[13][3] = "Todas las anteriores respuestas son correctas";
 answers[13] = 3;
 units[13] = ['61'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2979. ";
 preguntaids[13] = 2979


//  Id pregunta: 1587 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes enunciados NO es un objetivo en la elaboraci&oacute;n del modelo conceptual de datos?";
 choices[14]= new Array();
 choices[14][0] = "Identificar y definir las entidades que quedan dentro del &aacute;mbito del sistema.";
 choices[14][1] = "Identificar y definir los m&eacute;todos asociados a cada una de las entidades del sistema.";
 choices[14][2] = "Identificar y definir los atributos de cada entidad y sus dominios correspondientes.";
 choices[14][3] = "Identificar y definir las relaciones existentes entre las entidades.";
 answers[14] = 1;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1587. ";
 preguntaids[14] = 1587


//  Id pregunta: 1931 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale cual de los siguientes niveles NO existe en la definici&oacute;n de niveles de la arquitectura est&aacute;ndar de los SGBD. ANSI1X3/SPARC:";
 choices[15]= new Array();
 choices[15][0] = "Nivel relacional.";
 choices[15][1] = "Nivel conceptual";
 choices[15][2] = "Nivel externo.";
 choices[15][3] = "Nivel interno.";
 answers[15] = 0;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1931. ";
 preguntaids[15] = 1931


//  Id pregunta: 2500 Año de creación de pregunta: 2004
 questions[16]= "17)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[16]= new Array();
 choices[16][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[16][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[16][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[16][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[16] = 1;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2500. Examen TIC MAP B 2004";
 preguntaids[16] = 2500


//  Id pregunta: 2987 Año de creación de pregunta: 2002
 questions[17]= "18)  Los tipos de entidad dentro de un modelo entidad/asociaci&oacute;n son:";
 choices[17]= new Array();
 choices[17][0] = "Regulares y d&eacute;biles";
 choices[17][1] = "Regulares e irregulares";
 choices[17][2] = "Externas, internas, regulares y d&eacute;biles";
 choices[17][3] = "Ninguna de las anteriores.";
 answers[17] = 0;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2987. ";
 preguntaids[17] = 2987


//  Id pregunta: 2677 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Qu&eacute; es JDBC?:";
 choices[18]= new Array();
 choices[18][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[18][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[18][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[18][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[18] = 1;
 units[18] = ['60', '61', '64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2677. ";
 preguntaids[18] = 2677


//  Id pregunta: 1934 Año de creación de pregunta: 2016
 questions[19]= "20)  El lenguaje de consulta SQL utiliza el comando &quot;GRANT&quot; para:";
 choices[19]= new Array();
 choices[19][0] = "Eliminar una tabla de datos.";
 choices[19][1] = "Dar derechos de acceso a un usuario sobre un objeto de la base de datos.";
 choices[19][2] = "Comparar 16gicamente la condici&oacute;n &quot;mayor que&quot; en dos variables.";
 choices[19][3] = "Crear una vista.";
 answers[19] = 1;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1934. ";
 preguntaids[19] = 1934


//  Id pregunta: 1588 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale c&oacute;mo se denomina, en el modelo entidad/relaci&oacute;n extendido, la relaci&oacute;n por la que un supertipo se descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo, adem&aacute;s de tener los suyos propios:";
 choices[20]= new Array();
 choices[20][0] = "Generalizaci&oacute;n.";
 choices[20][1] = "Asociaci&oacute;n.";
 choices[20][2] = "Especializaci&oacute;n.";
 choices[20][3] = "Agregaci&oacute;n";
 answers[20] = 2;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1588. ";
 preguntaids[20] = 1588


//  Id pregunta: 1593 Año de creación de pregunta: 2016
 questions[21]= "22)  En un modelo de datos Entidad / Relaci&oacute;n, &iquest;qu&eacute; se entiende por &ldquo;entidad d&eacute;bil&rdquo;?";
 choices[21]= new Array();
 choices[21][0] = "Una entidad que no se encuentra relacionada con otra.";
 choices[21][1] = "Una entidad que hereda todos sus atributos de otra.";
 choices[21][2] = "Una entidad cuya existencia depende de la existencia de otra.";
 choices[21][3] = "Ninguna de las respuestas anteriores definen una entidad d&eacute;bil.";
 answers[21] = 2;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1593. ";
 preguntaids[21] = 1593


//  Id pregunta: 1596 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes tipos de anomal&iacute;a, NO se soluciona o mitiga mediante la normalizaci&oacute;n de tablas y relaciones?";
 choices[22]= new Array();
 choices[22][0] = "Anomal&iacute;a de inserci&oacute;n.";
 choices[22][1] = "Anomal&iacute;a de eliminaci&oacute;n.";
 choices[22][2] = "Anomal&iacute;a estructural.";
 choices[22][3] = "Anomal&iacute;a de actualizaci&oacute;n.";
 answers[22] = 2;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1596. ";
 preguntaids[22] = 1596


//  Id pregunta: 1932 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n correcta acerca de La Forma Normal de Boyce-Codd (FNBC):";
 choices[23]= new Array();
 choices[23][0] = "Requiere que existan dependencias funcionales no triviales de los atributos que no sean un conjunto de la clave candidata.";
 choices[23][1] = "Es una versi&oacute;n ligeramente menos fuerte que la 3FN (Tercera Forma Normal).";
 choices[23][2] = "Una relaci&oacute;n esta en FNBC si esta en 3FN y solo si, todo determinante es una clave candidata.";
 choices[23][3] = "Es una versi&oacute;n ligeramente menos fuerte que la 2FN (Segunda Forma Normal).";
 answers[23] = 2;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1932. ";
 preguntaids[23] = 1932


//  Id pregunta: 2595 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[24]= new Array();
 choices[24][0] = "Join";
 choices[24][1] = "Selecci&oacute;n";
 choices[24][2] = "Diferencia";
 choices[24][3] = "Proyecci&oacute;n";
 answers[24] = 0;
 units[24] = ['61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2595. ";
 preguntaids[24] = 2595


//  Id pregunta: 2495 Año de creación de pregunta: 2004
 questions[25]= "26)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[25]= new Array();
 choices[25][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[25][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[25][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[25][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[25] = 0;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2495. Similar a examen TIC SS A 2003";
 preguntaids[25] = 2495


//  Id pregunta: 2852 Año de creación de pregunta: 2002
 questions[26]= "27)  En relaci&oacute;n con las caracter&iacute;sticas de una tabla de estructura relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[26]= new Array();
 choices[26][0] = "Cada columna debe estar identificada por un nombre espec&iacute;fico";
 choices[26][1] = "Un mismo dominio podr&aacute; servir para definir los valores de varias columnas diferentes";
 choices[26][2] = "Cada columna debe extraer sus valores de un dominio";
 choices[26][3] = "Todas las respuestas anteriores son ciertas";
 answers[26] = 3;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2852. ";
 preguntaids[26] = 2852


//  Id pregunta: 2704 Año de creación de pregunta: 2002
 questions[27]= "28)  Con referencia al modelo relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[27]= new Array();
 choices[27][0] = "El n&uacute;mero de dominios de una relaci&oacute;n define su grado";
 choices[27][1] = "La extensi&oacute;n u ocurrencia de una relaci&oacute;n es una tabla donde las filas corresponden a los atributos";
 choices[27][2] = "Cada atributo, o propiedad con inter&eacute;s informacional de una relaci&oacute;n, est&aacute; asociado a un dominio del que toma sus valores";
 choices[27][3] = "El orden de las filas dentro de una tabla es determinante";
 answers[27] = 2;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2704. ";
 preguntaids[27] = 2704


//  Id pregunta: 2699 Año de creación de pregunta: 2002
 questions[28]= "29)  Como podr&iacute;a hacer que un usuario de una base de datos ANSI SQL solo pudiera tener acceso a dos columnas de cada fila de una tabla:";
 choices[28]= new Array();
 choices[28][0] = "Utilizando la sentencia GRANT para conceder derechos al usuario sobre esas dos filas";
 choices[28][1] = "Creando una vista al efecto con solo esas dos columnas";
 choices[28][2] = "Utilizando la sentencia ALTER TABLE";
 choices[28][3] = "A y B son ciertas";
 answers[28] = 1;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2699. ";
 preguntaids[28] = 2699


//  Id pregunta: 1589 Año de creación de pregunta: 2016
 questions[29]= "30)  En el modelo relacional, se denomina Grado de una tabla relacional al n&uacute;mero de:";
 choices[29]= new Array();
 choices[29][0] = "Tuplas que la forman.";
 choices[29][1] = "Filas que la forman.";
 choices[29][2] = "Claves alternativas que contiene.";
 choices[29][3] = "Atributos que la forman.";
 answers[29] = 3;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1589. ";
 preguntaids[29] = 1589


//  Id pregunta: 1799 Año de creación de pregunta: 2016
 questions[30]= "31)  Refiri&eacute;ndonos al concepto de claves for&aacute;neas en un modelo relacional, indique cu&aacute;l de las siguientes opciones NO es correcta:";
 choices[30]= new Array();
 choices[30][0] = "La clave for&aacute;nea puede hacer referencia a la clave primaria de la misma tabla.";
 choices[30][1] = "La clave for&aacute;nea puede tener valores nulos.";
 choices[30][2] = "La clave for&aacute;nea puede tener valores duplicados.";
 choices[30][3] = "La clave for&aacute;nea puede estar formada por una parte de la clave primaria a la que hace referencia.";
 answers[30] = 3;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1799. ";
 preguntaids[30] = 1799


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale cu&aacute;l de las siguientes sentencias se cataloga dentro del lenguaje SQL como sentencia de DCL:";
 choices[31]= new Array();
 choices[31][0] = "REVOKE";
 choices[31][1] = "CREATE";
 choices[31][2] = "DELETE";
 choices[31][3] = "SELECT";
 answers[31] = 0;
 units[31] = ['61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 688. AGE A2 2015";
 preguntaids[31] = 688


//  Id pregunta: 2686 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Qu&eacute; norma de las que se relacionan a continuaci&oacute;n afecta a SQL?:";
 choices[32]= new Array();
 choices[32][0] = "ISO 9075";
 choices[32][1] = "ISO 9003";
 choices[32][2] = "ANSI 9003";
 choices[32][3] = "IEEE 9003";
 answers[32] = 0;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2686. ";
 preguntaids[32] = 2686


//  Id pregunta: 1331 Año de creación de pregunta: 2016
 questions[33]= "34)  EI termino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[33]= new Array();
 choices[33][0] = "Authentication, Consistency, Integrity, Durability.";
 choices[33][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[33][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[33][3] = "Availability, Consistency, Isolation, Durability.";
 answers[33] = 2;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1331. ";
 preguntaids[33] = 1331


//  Id pregunta: 1803 Año de creación de pregunta: 2016
 questions[34]= "35)  En el contexto del DCL (Lenguaje de control de datos), indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[34]= new Array();
 choices[34][0] = "La sentencia para controlar el nivel de aislamiento es SET TRANSACTION ISOLATION LEVEL";
 choices[34][1] = "La sentencia GRANT se utiliza para conceder privilegios de seguridad sobre objetos de la base de datos a usuarios espec&iacute;ficos.";
 choices[34][2] = "Los privilegios que se han concedido con la sentencia GRANT pueden ser retirados con la sentencia REMOVE.";
 choices[34][3] = "En la ejecuci&oacute;n de una transacci&oacute;n la sentencia COMMIT [WORK]. Termina la transacci&oacute;n actual grabando permanentemente las modificaciones.";
 answers[34] = 2;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1803. ";
 preguntaids[34] = 1803


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[35]= "36)  En un modelo relacional, &iquest;a qu&eacute; hace referencia el dominio?";
 choices[35]= new Array();
 choices[35][0] = "Cada uno de los elementos que contiene una instancia de la relaci&oacute;n.";
 choices[35][1] = "Elemento susceptible de tomar valores.";
 choices[35][2] = "Conjunto de valores que puede tomar un atributo.";
 choices[35][3] = "Conjunto de filas y columnas que forman una tabla.";
 answers[35] = 2;
 units[35] = ['61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 689. AGE A2 2015";
 preguntaids[35] = 689


//  Id pregunta: 1614 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale qu&eacute; lenguaje es el que incluye las operaciones de creaci&oacute;n, modificaci&oacute;n y eliminaci&oacute;n de las estructuras de la base:";
 choices[36]= new Array();
 choices[36][0] = "DDL";
 choices[36][1] = "DML";
 choices[36][2] = "DLC";
 choices[36][3] = "TCL";
 answers[36] = 0;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1614. ";
 preguntaids[36] = 1614


//  Id pregunta: 2947 Año de creación de pregunta: 2002
 questions[37]= "38)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[37]= new Array();
 choices[37][0] = "ISO 7498";
 choices[37][1] = "ISO 9735";
 choices[37][2] = "ISO 9075";
 choices[37][3] = "ISO 9945-1";
 answers[37] = 2;
 units[37] = ['61'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2947. ";
 preguntaids[37] = 2947


//  Id pregunta: 2908 Año de creación de pregunta: 2002
 questions[38]= "39)  Indique cu&aacute;l de las siguientes expresiones corresponde a una sentencia correcta de consulta en SQL:";
 choices[38]= new Array();
 choices[38][0] = "SELECT Nombre, Apellido FROM PERSONAS IF Edad &gt;25";
 choices[38][1] = "SHOW Nombre, Apellido.FROM PERSONAS FOR Edad &gt;25";
 choices[38][2] = "SELECT Nombre, Apellido FROM PERSONAS WHERE Edad&gt; 25";
 choices[38][3] = "DISPLAY Nombre, Apellido FROM PERSONAS WHERE Edad &gt;25";
 answers[38] = 2;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2908. ";
 preguntaids[38] = 2908


//  Id pregunta: 1196 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; podr&iacute;a usar el administrador de una base de datos SQL Server para supervisar el uso de los recursos del sistema?";
 choices[39]= new Array();
 choices[39][0] = "Los comandos cpustat y cputrack.";
 choices[39][1] = "El procedimiento almacenado sp_startmonitor.";
 choices[39][2] = "El monitor de sistema.";
 choices[39][3] = "El Enterprise SyMON 2.0.";
 answers[39] = 2;
 units[39] = ['61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1196. ";
 preguntaids[39] = 1196


//  Id pregunta: 2851 Año de creación de pregunta: 2002
 questions[40]= "41)  En relaci&oacute;n con la teor&iacute;a de la normalizaci&oacute;n, que nos permite asegurar que un esquema relacional cumple unas ciertas propiedades, indicar cu&aacute;l de las siguientes corresponde a la definici&oacute;n de segunda forma normal:";
 choices[40]= new Array();
 choices[40][0] = "Si y s&oacute;lo si todo determinante es una clave candidata";
 choices[40][1] = "Si no existe ning&uacute;n atributo no principal que dependa transitivamente de alguna de las claves de relaci&oacute;n";
 choices[40][2] = "Cada atributo no principal tiene dependencia funcional completa respecto de cada una de las claves";
 choices[40][3] = "Si no existen grupos repetitivos";
 answers[40] = 2;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2851. ";
 preguntaids[40] = 2851


//  Id pregunta: 1935 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; instrucci&oacute;n SQL se utiliza para extraer informaci&oacute;n de la Base de Datos?";
 choices[41]= new Array();
 choices[41][0] = "GET.";
 choices[41][1] = "EXPORT.";
 choices[41][2] = "SELECT.";
 choices[41][3] = "QUERY.";
 answers[41] = 2;
 units[41] = ['61'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1935. ";
 preguntaids[41] = 1935


//  Id pregunta: 1590 Año de creación de pregunta: 2016
 questions[42]= "43)  El modelo entidad/relaci&oacute;n est&aacute; formado por:";
 choices[42]= new Array();
 choices[42][0] = "Clases, objetos e instancias.";
 choices[42][1] = "Variables y m&eacute;todos.";
 choices[42][2] = "Entidades, atributos y relaciones.";
 choices[42][3] = "Entidades. Objetos y clases.";
 answers[42] = 2;
 units[42] = ['61'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1590. ";
 preguntaids[42] = 1590


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[43]= new Array();
 choices[43][0] = "PostgreSQL";
 choices[43][1] = "Datawarehouse";
 choices[43][2] = "Snowflake";
 choices[43][3] = "CouchDB";
 answers[43] = 0;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 694. TAI 2016.";
 preguntaids[43] = 694


//  Id pregunta: 1933 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cuantas son las reglas que seg&uacute;n Codd debe cumplir un sistema verdaderamente relacional?";
 choices[44]= new Array();
 choices[44][0] = "Cinco.";
 choices[44][1] = "Doce.";
 choices[44][2] = "Cuatro.";
 choices[44][3] = "Tres.";
 answers[44] = 1;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1933. ";
 preguntaids[44] = 1933


//  Id pregunta: 2499 Año de creación de pregunta: 2004
 questions[45]= "46)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[45]= new Array();
 choices[45][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[45][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[45][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[45][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[45] = 1;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2499. Examen TIC MAP B 2004";
 preguntaids[45] = 2499


//  Id pregunta: 2822 Año de creación de pregunta: 2002
 questions[46]= "47)  En electr&oacute;nica digital, un conjunto de funciones es completo en un &aacute;lgebra de Boole:";
 choices[46]= new Array();
 choices[46][0] = "Si y s&oacute;lo si cualquier forma booleana puede realizarse con dichas funciones.";
 choices[46][1] = "Si un conjunto m&iacute;nimo puede realizarse con dichas funciones.";
 choices[46][2] = "Si y s&oacute;lo si contiene a todas las funciones l&oacute;gicas siguientes AND, OR, NOT, NAND, XOR.";
 choices[46][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[46] = 0;
 units[46] = ['61'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2822. ";
 preguntaids[46] = 2822


//  Id pregunta: 1365 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[47]= new Array();
 choices[47][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[47][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[47][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[47][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[47] = 1;
 units[47] = ['61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1365. ";
 preguntaids[47] = 1365


//  Id pregunta: 1698 Año de creación de pregunta: 2016
 questions[48]= "49)  En terminolog&iacute;a de bases de datos, el lenguaje de definici&oacute;n de datos (LDD) es empleado para:";
 choices[48]= new Array();
 choices[48][0] = "Capacitar a los usuarios a acceder o manipular los datos seg&uacute;n est&eacute;n organizados por su modelo de datos.";
 choices[48][1] = "Conceder o suprimir privilegios a los usuarios, es decir, el control del acceso a los datos.";
 choices[48][2] = "Determinar la organizaci&oacute;n interna del modelo l&oacute;gico de los datos en una base de datos.";
 choices[48][3] = "Representar el flujo de datos entre procesos y almacenes de datos l&oacute;gicos.";
 answers[48] = 2;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1698. ";
 preguntaids[48] = 1698


//  Id pregunta: 1595 Año de creación de pregunta: 2016
 questions[49]= "50)  El modelo de datos se compone de tres piezas de informaci&oacute;n interrelacionadas: el objeto de datos, los atributos y la relaci&oacute;n que conecta objetos de datos entre s&iacute;. Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al objeto de datos:";
 choices[49]= new Array();
 choices[49][0] = "Solamente encapsula datos, no hay referencia dentro de un objeto de datos a operaciones que act&uacute;an en el dato.";
 choices[49][1] = "Se usa para nombrar una ocurrencia de un atributo.";
 choices[49][2] = "Proporciona una indicaci&oacute;n de c&oacute;mo se transforman los datos a medida que se avanza en el sistema.";
 choices[49][3] = "Nunca puede ser una entidad externa.";
 answers[49] = 0;
 units[49] = ['61'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1595. ";
 preguntaids[49] = 1595


//  Id pregunta: 2809 Año de creación de pregunta: 2002
 questions[50]= "51)  En el lenguaje de consulta en BBDD relacionales, se usan los t&eacute;rminos tabla, fila y columna para:";
 choices[50]= new Array();
 choices[50][0] = "Tupla, relaci&oacute;n y atributo, respectivamente";
 choices[50][1] = "Relaci&oacute;n, tupla y atributo, respectivamente";
 choices[50][2] = "Relaci&oacute;n, atributo y tupla, respectivamente";
 choices[50][3] = "Tupla, atributo y relaci&oacute;n, respectivamente";
 answers[50] = 1;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2809. ";
 preguntaids[50] = 2809


//  Id pregunta: 1152 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale en qu&eacute; nivel de aislamiento definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[51]= new Array();
 choices[51][0] = "Serializable.";
 choices[51][1] = "Repeatable Read (lecturas repetibles).";
 choices[51][2] = "Read Committed (lecturas comprometidas).";
 choices[51][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[51] = 3;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1152. ";
 preguntaids[51] = 1152


//  Id pregunta: 1150 Año de creación de pregunta: 2016
 questions[52]= "53)  En una base de datos de coches hay una tabla con marcas de coches (c&oacute;digo_marca y nombre_marca) y otra con modelos (c&oacute;digo_marca, c&oacute;digo_modelo, nombre_modelo). Para que la base de datos mantenga la integridad referencial:";
 choices[52]= new Array();
 choices[52][0] = "Si borro una marca, antes tengo que borrar todas las ocurrencias de modelos de esa marca.";
 choices[52][1] = "Si borro un modelo, antes tengo que borrar la marca correspondiente.";
 choices[52][2] = "No puedo dar de alta ninguna marca si no hay antes alg&uacute;n modelo de la misma.";
 choices[52][3] = "Al modificar el nombre de una marca tengo que modificar antes el c&oacute;digo_marca en los modelos correspondientes.";
 answers[52] = 0;
 units[52] = ['61'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1150. ";
 preguntaids[52] = 1150


//  Id pregunta: 1699 Año de creación de pregunta: 2016
 questions[53]= "54)  En relaci&oacute;n con los grafos, indique la respuesta FALSA:";
 choices[53]= new Array();
 choices[53][0] = "Orden de un grafo: Es el n&uacute;mero de nodos (v&eacute;rtices del grafo).";
 choices[53][1] = "Grado de un nodo: Es el n&uacute;mero de ejes (arcos) que inciden sobre el nodo.";
 choices[53][2] = "Longitud del camino: Es el n&uacute;mero de nodos que componen el camino.";
 choices[53][3] = "Grafo euleriano: Es un grafo que tiene un camino euleriano cerrado.";
 answers[53] = 2;
 units[53] = ['61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1699. ";
 preguntaids[53] = 1699


//  Id pregunta: 1613 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Puede el administrador de la Base de Datos Relacional autorizar a un usuario para que pueda a&ntilde;adir columnas en una tabla permitiendo que este usuario pueda autorizar a otros este mismo privilegio?";
 choices[54]= new Array();
 choices[54][0] = "A&ntilde;adir columnas en una tabla es tarea exclusiva del administrador de la Base de Datos y no puede delegarla";
 choices[54][1] = "A&ntilde;adir columnas en una tabla no requiere la autorizaci&oacute;n del administrador de la Base de Datos";
 choices[54][2] = "S&iacute;, puede autorizar a que un usuario a&ntilde;ada columnas en una tabla, pero no puede autorizar para que un usuario pueda a su vez conceder este privilegio";
 choices[54][3] = "S&iacute; puede autorizar ambas cosas";
 answers[54] = 3;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1613. ";
 preguntaids[54] = 1613


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[55]= new Array();
 choices[55][0] = "MySQL";
 choices[55][1] = "SQLite";
 choices[55][2] = "Zope";
 choices[55][3] = "MariaDB";
 answers[55] = 2;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 693. TAI 2016.";
 preguntaids[55] = 693


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes operaciones del &aacute;lgebra relacional es una operaci&oacute;n unitraia?";
 choices[56]= new Array();
 choices[56][0] = "Proyecci&oacute;n.";
 choices[56][1] = "Diferencia de conjuntos.";
 choices[56][2] = "Producto cartesiano.";
 choices[56][3] = "Uni&oacute;n.";
 answers[56] = 0;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 690. AGE A2 2015";
 preguntaids[56] = 690


//  Id pregunta: 2576 Año de creación de pregunta: 2002
 questions[57]= "58)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[57]= new Array();
 choices[57][0] = "Cumple con la segunda forma normal";
 choices[57][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[57][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[57][3] = "No cumple la segunda forma normal";
 answers[57] = 3;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2576. ";
 preguntaids[57] = 2576


//  Id pregunta: 2927 Año de creación de pregunta: 2002
 questions[58]= "59)  La cla&uacute;sula GROUP BY se utiliza para:";
 choices[58]= new Array();
 choices[58][0] = "Agrupar varios atributos para formar una clave";
 choices[58][1] = "Formar una vista con elementos de varias tablas";
 choices[58][2] = "Agrupar usuarios para asignar privilegio";
 choices[58][3] = "Obtener en una sentencia SELECT grupos de tuplas en lugar de tuplas individuales";
 answers[58] = 3;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2927. ";
 preguntaids[58] = 2927


//  Id pregunta: 2811 Año de creación de pregunta: 2002
 questions[59]= "60)  En el lenguaje SQL una 'Transacci&oacute;n' es una secuencia de operaciones que constituye una unidad de recuperaci&oacute;n, y que puede finalizarse con una sentencia:";
 choices[59]= new Array();
 choices[59][0] = "SELECT";
 choices[59][1] = "END";
 choices[59][2] = "COMMIT";
 choices[59][3] = "CLOSE";
 answers[59] = 2;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2811. ";
 preguntaids[59] = 2811


//  Id pregunta: 1594 Año de creación de pregunta: 2016
 questions[60]= "61)  En el sistema relacional de datos, los conceptos b&aacute;sicos son relaci&oacute;n, tupla, clave primaria y dominio. En este &aacute;mbito, se&ntilde;ale qu&eacute; es un dominio:";
 choices[60]= new Array();
 choices[60][0] = "El identificador &uacute;nico para la tabla";
 choices[60][1] = "Una colecci&oacute;n de valores, de los cuales uno o m&aacute;s atributos (columnas) obtienen sus valores reales";
 choices[60][2] = "Una colecci&oacute;n de valores, de los cuales una o m&aacute;s tuplas obtienen sus relaciones";
 choices[60][3] = "El n&uacute;mero de tuplas que contiene una relaci&oacute;n. Tambi&eacute;n es conocido por cardinalidad";
 answers[60] = 1;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1594. ";
 preguntaids[60] = 1594


//  Id pregunta: 1697 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el modelo ANSI/X3/SPARC, las vistas de una base de datos se definen en:";
 choices[61]= new Array();
 choices[61][0] = "Nivel f&iacute;sico";
 choices[61][1] = "Nivel conceptual";
 choices[61][2] = "Nivel l&oacute;gico";
 choices[61][3] = "Nivel de aplicaci&oacute;n";
 answers[61] = 2;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1697. ";
 preguntaids[61] = 1697


//  Id pregunta: 1930 Año de creación de pregunta: 2016
 questions[62]= "63)  En el modelo referencial, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[62]= new Array();
 choices[62][0] = "Que todos los datos est&aacute;n referenciados por su clave y &eacute;sta que sea &uacute;nica.";
 choices[62][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[62][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias.";
 choices[62][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[62] = 1;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1930. ";
 preguntaids[62] = 1930


//  Id pregunta: 1696 Año de creación de pregunta: 2016
 questions[63]= "64)  En &aacute;lgebra relacional, la operaci&oacute;n realizada a partir de dos tablas T1 y T2, tal que la resultante de una relaci&oacute;n es de grado g1+g2 constituida por todas las combinaciones de tuplas completas de T1 con las completas de T2, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Uni&oacute;n";
 choices[63][1] = "Producto cartesiano";
 choices[63][2] = "Intersecci&oacute;n";
 choices[63][3] = "Join";
 answers[63] = 1;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1696. ";
 preguntaids[63] = 1696


//  Id pregunta: 1694 Año de creación de pregunta: 2016
 questions[64]= "65)  En el modelo Entidad-Relaci&oacute;n, el conjunto nominado de valores homog&eacute;neos que puede tomar una cierta caracter&iacute;stica, se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Atributo";
 choices[64][1] = "Dominio";
 choices[64][2] = "Entidad";
 choices[64][3] = "Diccionario de datos";
 answers[64] = 1;
 units[64] = ['61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1694. ";
 preguntaids[64] = 1694


//  Id pregunta: 2631 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?";
 choices[65]= new Array();
 choices[65][0] = "Regla de la no subversi&oacute;n";
 choices[65][1] = "Independencia l&oacute;gica de los datos";
 choices[65][2] = "Actualizaci&oacute;n de vistas";
 choices[65][3] = "Consistencia de los datos";
 answers[65] = 3;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2631. ";
 preguntaids[65] = 2631


//  Id pregunta: 2697 Año de creación de pregunta: 2002
 questions[66]= "67)  Codd  estableci&oacute; en 1986 doce principios, de los cuales al menos seis deben satisfacerse para que una base de datos pueda considerarse totalmente relacional. Entre ellos est&aacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Acceso garantizado, cat&aacute;logo din&aacute;mico e independencia f&iacute;sica de los datos";
 choices[66][1] = "Gesti&oacute;n de una base de datos relacional, representaci&oacute;n de la informaci&oacute;n y regla de inversi&oacute;n";
 choices[66][2] = "Independencia de integridad, distribuci&oacute;n dependiente y sublenguaje global de datos";
 choices[66][3] = "Actualizaci&oacute;n de vistas, inserciones de alto nivel y n&uacute;cleo funcional independiente";
 answers[66] = 0;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2697. ";
 preguntaids[66] = 2697


//  Id pregunta: 1151 Año de creación de pregunta: 2016
 questions[67]= "68)  La arquitectura ANSI/SPARC, define los niveles de abstracci&oacute;n para un sistema de administraci&oacute;n de bases de datos. Indicar el nivel INCORRECTO:";
 choices[67]= new Array();
 choices[67][0] = "Nivel f&iacute;sico: define c&oacute;mo se almacenan los datos y los m&eacute;todos de acceso.";
 choices[67][1] = "Nivel conceptual: define c&oacute;mo se organiza la informaci&oacute;n dentro de la base de datos.";
 choices[67][2] = "Nivel contextual: define el formato de los campos.";
 choices[67][3] = "Nivel externo: define las vistas del usuario.";
 answers[67] = 2;
 units[67] = ['61'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1151. ";
 preguntaids[67] = 1151


//  Id pregunta: 2558 Año de creación de pregunta: 2004
 questions[68]= "69)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos, en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[68]= new Array();
 choices[68][0] = "1FN";
 choices[68][1] = "2FN";
 choices[68][2] = "3FN";
 choices[68][3] = "Boyce-Cood";
 answers[68] = 1;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2558. Examen Seg-Social A 2004";
 preguntaids[68] = 2558


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[69]= "70)  Para importar un fichero en una tabla de una base de datos (BD) relacional, el administrador de BD decide eliminar la clave primaria existente. De entre las siguientes reglas de Codd que definen el modelo relacional, &iquest;cu&aacute;l es la que posibilita esta acci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Regla 2: Regla de Acceso Garantizado.";
 choices[69][1] = "Regla 8: Independencia F&iacute;sica de los Datos.";
 choices[69][2] = "Regla 10: Independencia de la Integridad.";
 choices[69][3] = "Regla 11: Independencia de la Distribuci&oacute;n.";
 answers[69] = 2;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 691. AGE A2 2015";
 preguntaids[69] = 691


//  Id pregunta: 2599 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el lenguaje SQL?:";
 choices[70]= new Array();
 choices[70][0] = "El SQL es un lenguaje de definici&oacute;n y manipulaci&oacute;n de datos";
 choices[70][1] = "Si una transacci&oacute;n finaliza con una sentencia COMMIT, los cambios son cancelados";
 choices[70][2] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9085 de 1987";
 choices[70][3] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9075 de 1987";
 answers[70] = 3;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2599. ";
 preguntaids[70] = 2599


//  Id pregunta: 2816 Año de creación de pregunta: 2002
 questions[71]= "72)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?:";
 choices[71]= new Array();
 choices[71][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica";
 choices[71][1] = "Que todo atributo que represente una relaci&oacute;n, o bien sea nulo, o bien exista en la clave primaria del elemento relacionado";
 choices[71][2] = "Que todo conjunto de operaciones que constituya una unidad, o bien progrese en conjunto, bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[71][3] = "Que se pueda referenciar la totalidad de la base de datos";
 answers[71] = 1;
 units[71] = ['61'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2816. ";
 preguntaids[71] = 2816


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[72]= "73)  En el contexto de las bases de datos que siguen el modelo relacional, una superclave es:";
 choices[72]= new Array();
 choices[72][0] = "Una clave candidata m&iacute;nima, es decir, una clave candidata formada por un solo atributo.";
 choices[72][1] = "Una clave candidata siempre.";
 choices[72][2] = "Una clave primaria combinada con un identificador &uacute;nico generado por el gestor de base de datos, con el fin de reforzar la integridad y seguridad de la informaci&oacute;n.";
 choices[72][3] = "Un atributo o conjunto de atributos que permite identificar de forma &uacute;nica una fila en una tabla.";
 answers[72] = 3;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 692. AGE A2 2015";
 preguntaids[72] = 692


//  Id pregunta: 2718 Año de creación de pregunta: 2002
 questions[73]= "74)  Dada una relaci&oacute;n R y dos de sus atributos X e Y, si cada valor de X tiene asociado con &eacute;l un &uacute;nico valorde Y en todo instante, se dice que:";
 choices[73]= new Array();
 choices[73][0] = "El atributo X es funcionalmente dependiente del atributo Y";
 choices[73][1] = "El atributo Y es funcionalmente dependiente del atributo X";
 choices[73][2] = "La relaci&oacute;n R no est&aacute; normalizada";
 choices[73][3] = "La relaci&oacute;n R no est&aacute; en Segunda Forma Normal";
 answers[73] = 1;
 units[73] = ['61'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2718. ";
 preguntaids[73] = 2718


//  Id pregunta: 1077 Año de creación de pregunta: 2016
 questions[74]= "75)  La regla de &quot;Actualizaci&oacute;n de Vistas&quot; (Regla 6) de Codd establece que:";
 choices[74]= new Array();
 choices[74][0] = "Todas las vistas actualizadas deben actualizarse tambi&eacute;n en el cat&aacute;logo de datos.";
 choices[74][1] = "Todas las vistas que son te&oacute;ricamente actualizables se pueden actualizar por el sistema.";
 choices[74][2] = "La actualizaci&oacute;n de una vista se realiza manteniendo la integridad del conjunto de informaci&oacute;n del sistema.";
 choices[74][3] = "Todas las vistas que son actualizadas no requieren un cambio en su estructura l&oacute;gica.";
 answers[74] = 1;
 units[74] = ['61'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1077. ";
 preguntaids[74] = 1077


