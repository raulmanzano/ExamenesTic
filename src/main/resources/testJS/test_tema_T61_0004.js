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
//  Id pregunta: 10804 Año de creación de pregunta: 2015
 questions[0]= "1)  Para seleccionar todos los campos de una fila con el campo Nombre con valor 'Juan'en una tabla llamada Funcionarios se utiliza la sentencia:";
 choices[0]= new Array();
 choices[0][0] = "SELECT * FROM Funcionarios WHERE Nombre='Juan'";
 choices[0][1] = "SELECT * FROM Funcionarios WHERE Nombre:'Juan'";
 choices[0][2] = "SELECT FROM Funcionarios WHERE Nombre='Juan'";
 choices[0][3] = "SELECT FROM Funcionarios WHERE Nombre:'Juan'";
 answers[0] = 0;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10804. ";
 preguntaids[0] = 10804


//  Id pregunta: 10493 Año de creación de pregunta: 2015
 questions[1]= "2)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[1]= new Array();
 choices[1][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[1][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[1][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[1][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[1] = 0;
 units[1] = ['61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10493. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";
 preguntaids[1] = 10493


//  Id pregunta: 9592 Año de creación de pregunta: 2014
 questions[2]= "3)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[2]= new Array();
 choices[2][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[2][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[2][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[2][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[2] = 1;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9592. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[2] = 9592


//  Id pregunta: 9470 Año de creación de pregunta: 2014
 questions[3]= "4)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[3]= new Array();
 choices[3][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[3][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[3][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[3][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9470. ";
 preguntaids[3] = 9470


//  Id pregunta: 10232 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[4]= new Array();
 choices[4][0] = "Intersecci&oacute;n";
 choices[4][1] = "Uni&oacute;n";
 choices[4][2] = "Proyecci&oacute;n";
 choices[4][3] = "Diferencia";
 answers[4] = 0;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10232. ";
 preguntaids[4] = 10232


//  Id pregunta: 9483 Año de creación de pregunta: 2014
 questions[5]= "6)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[5]= new Array();
 choices[5][0] = "Externo";
 choices[5][1] = "L&oacute;gico";
 choices[5][2] = "Interno";
 choices[5][3] = "Conceptual";
 answers[5] = 3;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9483. ";
 preguntaids[5] = 9483


//  Id pregunta: 9471 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[6]= new Array();
 choices[6][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[6][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[6][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[6][3] = "Todas las anteriores";
 answers[6] = 3;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9471. ";
 preguntaids[6] = 9471


//  Id pregunta: 9252 Año de creación de pregunta: 2014
 questions[7]= "8)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[7]= new Array();
 choices[7][0] = "Total y exclusiva.";
 choices[7][1] = "Parcial y superpuesta.";
 choices[7][2] = "Parcial y exclusiva.";
 choices[7][3] = "Total y superpuesta.";
 answers[7] = 2;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9252. Examen TIC A2 2013";
 preguntaids[7] = 9252


//  Id pregunta: 9466 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[8]= new Array();
 choices[8][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[8][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[8][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[8][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[8] = 1;
 units[8] = ['61'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9466. A: regla 9 Independencia l&oacute;gica de datos; C: adem&aacute;s de CASCADE hay otras opciones: NO ACTION | CASCADE | SET DEFAULT | SET NULL; D: define la integridad referencial, falta la integridad de identidad";
 preguntaids[8] = 9466


//  Id pregunta: 9339 Año de creación de pregunta: 2014
 questions[9]= "10)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[9]= new Array();
 choices[9][0] = "Regla de los nulos.";
 choices[9][1] = "Regla de integridad de la entidad.";
 choices[9][2] = "Regla de la integridad referencial.";
 choices[9][3] = "Regla de los valores ajenos.";
 answers[9] = 2;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9339. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[9] = 9339


//  Id pregunta: 9468 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[10]= new Array();
 choices[10][0] = "Dependencia funcional";
 choices[10][1] = "Dependencia multivaluada";
 choices[10][2] = "Dependencia funcional trivial";
 choices[10][3] = "Dependencia funcional completa";
 answers[10] = 3;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9468. ";
 preguntaids[10] = 9468


//  Id pregunta: 9567 Año de creación de pregunta: 2014
 questions[11]= "12)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[11]= new Array();
 choices[11][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[11][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[11][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[11][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[11] = 2;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9567. TIC A2 2013 libre";
 preguntaids[11] = 9567


//  Id pregunta: 10333 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[12]= new Array();
 choices[12][0] = "Intersecci&oacute;n";
 choices[12][1] = "Uni&oacute;n";
 choices[12][2] = "Proyecci&oacute;n";
 choices[12][3] = "Selecci&oacute;n";
 answers[12] = 0;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10333. ";
 preguntaids[12] = 10333


//  Id pregunta: 10231 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes NO es una regla de Codd?";
 choices[13]= new Array();
 choices[13][0] = "Regla del Acceso Garantizado";
 choices[13][1] = "Regla de Actualizaci&oacute;n de Vistas";
 choices[13][2] = "Independencia L&oacute;gica de Datos";
 choices[13][3] = "Regla de la Subversi&oacute;n";
 answers[13] = 3;
 units[13] = ['61'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10231. La Regla 12 es de la No Subversi&oacute;n";
 preguntaids[13] = 10231


//  Id pregunta: 10235 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[14]= new Array();
 choices[14][0] = "Fue creado por Peter Chen";
 choices[14][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[14][2] = "Las estructuras de datos son complejas";
 choices[14][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[14] = 1;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10235. ";
 preguntaids[14] = 10235


//  Id pregunta: 10234 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[15]= new Array();
 choices[15][0] = "Oracle";
 choices[15][1] = "SQL Server";
 choices[15][2] = "PostgreSQL";
 choices[15][3] = "MySQL";
 answers[15] = 1;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10234. SQL Server es la soluci&oacute;n de Microsoft";
 preguntaids[15] = 10234


//  Id pregunta: 10803 Año de creación de pregunta: 2015
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de los siguientes no es un operador b&aacute;sico en SQL:";
 choices[16]= new Array();
 choices[16][0] = "Proyecci&oacute;n";
 choices[16][1] = "Intersecci&oacute;n";
 choices[16][2] = "Producto cartesiano";
 choices[16][3] = "Uni&oacute;n";
 answers[16] = 1;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10803. ";
 preguntaids[16] = 10803


//  Id pregunta: 10074 Año de creación de pregunta: 2015
 questions[17]= "18)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[17]= new Array();
 choices[17][0] = "JOB";
 choices[17][1] = "COMMENT";
 choices[17][2] = "EXEC";
 choices[17][3] = "DD";
 answers[17] = 1;
 units[17] = ['60', '61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10074. Examen TIC A2 2014";
 preguntaids[17] = 10074


//  Id pregunta: 9652 Año de creación de pregunta: 2014
 questions[18]= "19)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios?";
 choices[18]= new Array();
 choices[18][0] = "CREATE VIEW.";
 choices[18][1] = "GRANT.";
 choices[18][2] = "CREATE PROFILE.";
 choices[18][3] = "CREATE ROLE.";
 answers[18] = 0;
 units[18] = ['61'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9652. Examen TIC A1 2013";
 preguntaids[18] = 9652


//  Id pregunta: 10236 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;C&oacute;mo se denomina a la restricci&oacute;n del Modelo L&oacute;gico Relacional por la que si en una relaci&oacute;n hay alguna clave ajena, sus valores deben coincidir con los valores de la clave primaria a la que hace referencia, o bien, deben ser completamente nulos?";
 choices[19]= new Array();
 choices[19][0] = "Aserci&oacute;n (ASSERTION)";
 choices[19][1] = "Verificaci&oacute;n (CHECK)";
 choices[19][2] = "Restricci&oacute;n de clave primaria";
 choices[19][3] = "Integridad referencial";
 answers[19] = 3;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10236. ";
 preguntaids[19] = 10236


//  Id pregunta: 10233 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[20]= new Array();
 choices[20][0] = "SQL-86";
 choices[20][1] = "SQL-89";
 choices[20][2] = "SQL-92";
 choices[20][3] = "SQL-1999";
 answers[20] = 1;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10233. ";
 preguntaids[20] = 10233


//  Id pregunta: 9463 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[21]= new Array();
 choices[21][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[21][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[21][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = 2;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9463. B: El c&aacute;lculo relacional es de tipo declarativo.";
 preguntaids[21] = 9463


//  Id pregunta: 9257 Año de creación de pregunta: 2014
 questions[22]= "23)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[22]= new Array();
 choices[22][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[22][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[22][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[22][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[22] = 2;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9257. Examen TIC A2 2013";
 preguntaids[22] = 9257


//  Id pregunta: 9570 Año de creación de pregunta: 2014
 questions[23]= "24)  RMAN es:";
 choices[23]= new Array();
 choices[23][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[23][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[23][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[23][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[23] = 2;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9570. TIC A2 2013 libre";
 preguntaids[23] = 9570


//  Id pregunta: 9824 Año de creación de pregunta: 2015
 questions[24]= "25)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[24]= new Array();
 choices[24][0] = "IBATIS";
 choices[24][1] = "Hibernate";
 choices[24][2] = "CODD";
 choices[24][3] = "Todas lo son.";
 answers[24] = 2;
 units[24] = ['61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9824. ";
 preguntaids[24] = 9824


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


//  Id pregunta: 9464 Año de creación de pregunta: 2014
 questions[26]= "27)  Un dominio en un modelo relacional&hellip;";
 choices[26]= new Array();
 choices[26][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[26][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[26][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[26][3] = "Todas las anteriores";
 answers[26] = 0;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9464. Por extensi&oacute;n= enumeraci&oacute;n de sus elementos, p.ej. d&iacute;as de la semana = {lunes, martes, mi&eacute;rcoles, jueves, viernes, s&aacute;bado, domingo} ; Por intensi&oacute;n= mediante una propiedad que recoja el recorrido de sus valores admisibles, p. ej: edad: entero / 0 &le; edad &le; 200";
 preguntaids[26] = 9464


//  Id pregunta: 9465 Año de creación de pregunta: 2014
 questions[27]= "28)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[27]= new Array();
 choices[27][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[27][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[27][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[27][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[27] = 3;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9465. ";
 preguntaids[27] = 9465


//  Id pregunta: 9342 Año de creación de pregunta: 2014
 questions[28]= "29)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[28]= new Array();
 choices[28][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[28][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[28][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[28][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[28] = 0;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9342. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[28] = 9342


//  Id pregunta: 10334 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[29]= new Array();
 choices[29][0] = "Native-Api Driver";
 choices[29][1] = "Network Protocol Driver";
 choices[29][2] = "Native Protocol Driver";
 choices[29][3] = "JDBC-OBDC Bridge";
 answers[29] = 1;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10334. ";
 preguntaids[29] = 10334


//  Id pregunta: 10802 Año de creación de pregunta: 2015
 questions[30]= "31)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[30]= new Array();
 choices[30][0] = "DROP TABLE";
 choices[30][1] = "TRUNCATE TABLE";
 choices[30][2] = "DELETE TABLE";
 choices[30][3] = "MODIFY TABLE";
 answers[30] = 1;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10802. ";
 preguntaids[30] = 10802


//  Id pregunta: 10030 Año de creación de pregunta: 2015
 questions[31]= "32)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[31]= new Array();
 choices[31][0] = "Serializable.";
 choices[31][1] = "Repeatable Read (lecturas repetibles).";
 choices[31][2] = "Read Committed (lecturas comprometidas).";
 choices[31][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[31] = 3;
 units[31] = ['60', '61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10030. Examen TIC A2 2014";
 preguntaids[31] = 10030


//  Id pregunta: 9472 Año de creación de pregunta: 2014
 questions[32]= "33)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[32]= new Array();
 choices[32][0] = "N&ordm; de filas recuperadas por la consulta";
 choices[32][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[32][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[32][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[32] = 2;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9472. ";
 preguntaids[32] = 9472


//  Id pregunta: 9568 Año de creación de pregunta: 2014
 questions[33]= "34)  En Sql Server 2016 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[33]= new Array();
 choices[33][0] = "rdlccfg";
 choices[33][1] = "tsmrpt";
 choices[33][2] = "rptsetup";
 choices[33][3] = "rsconfig";
 answers[33] = 3;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9568. TIC A2 2013 libre";
 preguntaids[33] = 9568


//  Id pregunta: 9467 Año de creación de pregunta: 2014
 questions[34]= "35)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[34]= new Array();
 choices[34][0] = "Sin normalizar";
 choices[34][1] = "1&ordf; Forma Normal";
 choices[34][2] = "2&ordf; Forma Normal";
 choices[34][3] = "3&ordf; Forma Normal";
 answers[34] = 2;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9467. ";
 preguntaids[34] = 9467


