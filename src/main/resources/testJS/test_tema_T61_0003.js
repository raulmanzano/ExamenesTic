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
//  Id pregunta: 7060 Año de creación de pregunta: 2010
 questions[0]= "1)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[0]= new Array();
 choices[0][0] = "Orientado a objetos";
 choices[0][1] = "Relacional";
 choices[0][2] = "De lista invertida";
 choices[0][3] = "Jer&aacute;rquica";
 answers[0] = 2;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7060. Un ejemplo de BD de lista invertida es ADABAS";
 preguntaids[0] = 7060


//  Id pregunta: 8206 Año de creación de pregunta: 2011
 questions[1]= "2)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[1]= new Array();
 choices[1][0] = "No tiene claves.";
 choices[1][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[1][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[1][3] = "Conserva la clave de la entidad fuerte.";
 answers[1] = 1;
 units[1] = ['60', '61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8206. Examen TIC A2 2010 interna";
 preguntaids[1] = 8206


//  Id pregunta: 6883 Año de creación de pregunta: 2010
 questions[2]= "3)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[2]= new Array();
 choices[2][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[2][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[2][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[2][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[2] = 1;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6883. TIC A 2009";
 preguntaids[2] = 6883


//  Id pregunta: 8133 Año de creación de pregunta: 2011
 questions[3]= "4)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[3]= new Array();
 choices[3][0] = "Una relaci&oacute;n N:M.";
 choices[3][1] = "Una relaci&oacute;n 1:N.";
 choices[3][2] = "Una relaci&oacute;n 1:1.";
 choices[3][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite.";
 answers[3] = 0;
 units[3] = ['60', '61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8133. Examen TIC A2 2010 interna";
 preguntaids[3] = 8133


//  Id pregunta: 6403 Año de creación de pregunta: 2003
 questions[4]= "5)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[4]= new Array();
 choices[4][0] = "Nada";
 choices[4][1] = "Una lectura sucia";
 choices[4][2] = "Una lectura fantasma";
 choices[4][3] = "Una escritura sucia";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 6403. ";
 preguntaids[4] = 6403


//  Id pregunta: 7059 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[5]= new Array();
 choices[5][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[5][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[5][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[5][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[5] = 0;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7059. ";
 preguntaids[5] = 7059


//  Id pregunta: 8099 Año de creación de pregunta: 2011
 questions[6]= "7)  La regla 2 de Codd es la del:";
 choices[6]= new Array();
 choices[6][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[6][1] = "Acceso garantizado";
 choices[6][2] = "Actualizaci&oacute;n de vistas";
 choices[6][3] = "Integridad referencial";
 answers[6] = 1;
 units[6] = ['60', '61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8099. Analista Ayto. Madrid 2010";
 preguntaids[6] = 8099


//  Id pregunta: 8411 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Cu&aacute;ndo est&aacute; una relaci&oacute;n en Tercera Forma Normal (3FN)?:";
 choices[7]= new Array();
 choices[7][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[7][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[7][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[7][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[7] = 2;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8411. Operador Ayto. Madrid 2010";
 preguntaids[7] = 8411


//  Id pregunta: 6388 Año de creación de pregunta: 2003
 questions[8]= "9)  Cual de las siguientes afirmaciones no es correcta a la hora de definir una tabla en Oracle";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo deben ser num&eacute;ricas aquellas columnas que sean susceptibles de operaciones aritm&eacute;ticas";
 choices[8][1] = "Una &ldquo;clave inteligente&rdquo; o clave compuesta es m&aacute;s eficiente que una clave compuesta por varias columnas";
 choices[8][2] = "Oracle interpreta por defecto todos los objetos en may&uacute;scula a no ser que se escriba su nombre entre comillas dobles.";
 choices[8][3] = "La ordenaci&oacute;n de columnas num&eacute;ricas es diferente de la ordenaci&oacute;n de las columnas alfanum&eacute;ricas";
 answers[8] = 1;
 units[8] = ['61'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6388. Examen 2006 JCYL";
 preguntaids[8] = 6388


//  Id pregunta: 8377 Año de creación de pregunta: 2011
 questions[9]= "10)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[9]= new Array();
 choices[9][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[9][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[9][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[9][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[9] = 1;
 units[9] = ['60', '61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8377. Examen UPM A2 2011";
 preguntaids[9] = 8377


//  Id pregunta: 6381 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica importante de las bases de datos relacionales y SQL?";
 choices[10]= new Array();
 choices[10][0] = "La independencia de relaciones entre las tablas";
 choices[10][1] = "Elevada velocidad del SQL";
 choices[10][2] = "Potentes entornos de desarrollo";
 choices[10][3] = "F&aacute;ciles de instalar y usar";
 answers[10] = 0;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6381. Examen 2006 JCYL";
 preguntaids[10] = 6381


//  Id pregunta: 9005 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[11]= new Array();
 choices[11][0] = "SQL 2000";
 choices[11][1] = "SQL-2003";
 choices[11][2] = "SQL-2006";
 choices[11][3] = "SQL-2008";
 answers[11] = 2;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9005. ";
 preguntaids[11] = 9005


//  Id pregunta: 7061 Año de creación de pregunta: 2010
 questions[12]= "13)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[12]= new Array();
 choices[12][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[12][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[12][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[12][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[12] = 0;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7061. ";
 preguntaids[12] = 7061


//  Id pregunta: 7068 Año de creación de pregunta: 2010
 questions[13]= "14)  El comando COUNT:";
 choices[13]= new Array();
 choices[13][0] = "Siempre va acompa&ntilde;ado de *";
 choices[13][1] = "Sirve para contar las ocurrencias del atributo al que acompa&ntilde;e.";
 choices[13][2] = "S&oacute;lo aparece despu&eacute;s del WHERE.";
 choices[13][3] = "Obliga a que aparezca la cl&aacute;usula GROUP BY.";
 answers[13] = 1;
 units[13] = ['61'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7068. ";
 preguntaids[13] = 7068


//  Id pregunta: 8895 Año de creación de pregunta: 2013
 questions[14]= "15)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional:";
 choices[14]= new Array();
 choices[14][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[14][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[14][2] = "El producto cartesiano de una relaci&oacute;n de grado n y x tuplas y otra relaci&oacute;n de grado m y z tuplas es una relaci&oacute;n de grado n*m y de (x+z) tuplas";
 choices[14][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[14] = 2;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8895. Examen AGE TIC A1 2011";
 preguntaids[14] = 8895


//  Id pregunta: 7570 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema a otro usuario?";
 choices[15]= new Array();
 choices[15][0] = "CONNECT y RESOURCE.";
 choices[15][1] = "DBA.";
 choices[15][2] = "GRANT ANY ROLE.";
 choices[15][3] = "SELECT ANY TABLE.";
 answers[15] = 2;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7570. Map 2006";
 preguntaids[15] = 7570


//  Id pregunta: 7066 Año de creación de pregunta: 2010
 questions[16]= "17)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[16]= new Array();
 choices[16][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[16][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[16][2] = "No permite insertar valores nulos.";
 choices[16][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[16] = 1;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7066. ";
 preguntaids[16] = 7066


//  Id pregunta: 8056 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd?";
 choices[17]= new Array();
 choices[17][0] = "Independencia f&iacute;sica de los datos.";
 choices[17][1] = "Independencia de distribuci&oacute;n.";
 choices[17][2] = "Independencia de actualizaci&oacute;n.";
 choices[17][3] = "Independencia de integridad.";
 answers[17] = 2;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8056. Examen TIC A2 2010";
 preguntaids[17] = 8056


//  Id pregunta: 8353 Año de creación de pregunta: 2011
 questions[18]= "19)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[18]= new Array();
 choices[18][0] = "PRIMARY KEY";
 choices[18][1] = "FOREIGN KEY";
 choices[18][2] = "CANDIDATE KEY";
 choices[18][3] = "SUPERKEY";
 answers[18] = 1;
 units[18] = ['61'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8353. Analista Ayto. Madrid 2010";
 preguntaids[18] = 8353


//  Id pregunta: 7580 Año de creación de pregunta: 2010
 questions[19]= "20)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[19]= new Array();
 choices[19][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, debe existir un valor de K en R1 cuyo valor sea igual al valor de A.";
 choices[19][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K.";
 choices[19][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo.";
 choices[19][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo.";
 answers[19] = 1;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7580. Map 2006";
 preguntaids[19] = 7580


//  Id pregunta: 8208 Año de creación de pregunta: 2011
 questions[20]= "21)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[20]= new Array();
 choices[20][0] = "(A, B, C), (A, B, D).";
 choices[20][1] = "(A, B, C), (B, D).";
 choices[20][2] = "(A, B, C),  (A, D).";
 choices[20][3] = "Ya est&aacute; en 2FN.";
 answers[20] = 1;
 units[20] = ['60', '61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8208. Examen TIC A2 2010 interna";
 preguntaids[20] = 8208


//  Id pregunta: 7069 Año de creación de pregunta: 2010
 questions[21]= "22)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[21]= new Array();
 choices[21][0] = "Calcular la media de cualquier atributo.";
 choices[21][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[21][2] = "Calcular la suma de los valores de un atributo.";
 choices[21][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[21] = 1;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7069. ";
 preguntaids[21] = 7069


//  Id pregunta: 8017 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[22]= new Array();
 choices[22][0] = "Read Commited (lectura confirmada).";
 choices[22][1] = "Serializable.";
 choices[22][2] = "Read uncornmited (lectura no confirmada),";
 choices[22][3] = "Repeatable read (lectura repetible).";
 answers[22] = 3;
 units[22] = ['60', '61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8017. Examen TIC A2 2010";
 preguntaids[22] = 8017


//  Id pregunta: 7589 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R({A,B,C,D}, {A--&gt;B, B--&gt;C, C--&gt;D})?";
 choices[23]= new Array();
 choices[23][0] = "Primera FN.";
 choices[23][1] = "Segunda FN.";
 choices[23][2] = "Tercera FN.";
 choices[23][3] = "FNBC (Forma Normal de Boyce-Codd).";
 answers[23] = 1;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7589. Map 2006";
 preguntaids[23] = 7589


//  Id pregunta: 8199 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[24]= new Array();
 choices[24][0] = "Regla de la no subversi&oacute;n.";
 choices[24][1] = "Regla de la no concurrencia.";
 choices[24][2] = "Regla de la restricci&oacute;n.";
 choices[24][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[24] = 0;
 units[24] = ['60', '61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8199. Examen TIC A2 2010 interna";
 preguntaids[24] = 8199


//  Id pregunta: 7590 Año de creación de pregunta: 2010
 questions[25]= "26)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[25]= new Array();
 choices[25][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[25][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[25][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[25][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[25] = 0;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7590. Map 2006";
 preguntaids[25] = 7590


//  Id pregunta: 8301 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;En qu&eacute; sentencia de SQL, OLAP proporciona mayor velocidad de procesamiento?";
 choices[26]= new Array();
 choices[26][0] = "INSERT";
 choices[26][1] = "UPDATE";
 choices[26][2] = "DELETE";
 choices[26][3] = "SELECT";
 answers[26] = 3;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8301. Examen UPM A2 2011";
 preguntaids[26] = 8301


//  Id pregunta: 8187 Año de creación de pregunta: 2011
 questions[27]= "28)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[27]= new Array();
 choices[27][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[27][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[27][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[27][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[27] = 2;
 units[27] = ['60', '61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8187. Examen TIC A2 2010 interna";
 preguntaids[27] = 8187


//  Id pregunta: 7518 Año de creación de pregunta: 2010
 questions[28]= "29)  En el lenguaje SQL, un valor NULL:";
 choices[28]= new Array();
 choices[28][0] = "Significa blancos o ceros.";
 choices[28][1] = "Puede ser utilizado en una instrucci&oacute;n SELECT.";
 choices[28][2] = "Se utiliza para referirse a la informaci&oacute;n que es incompleta o de la que no se dispone.";
 choices[28][3] = "Ha de ser igual a cualquier otro valor NULL en cualquier sistema.";
 answers[28] = 2;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7518. Map 2005";
 preguntaids[28] = 7518


//  Id pregunta: 6402 Año de creación de pregunta: 2003
 questions[29]= "30)  Un procedimiento almacenado:";
 choices[29]= new Array();
 choices[29][0] = "Es una tabla SQL especial que permite ejecutar procesos batch";
 choices[29][1] = "S&oacute;lo puede ser  usado por el DBA";
 choices[29][2] = "Se define mediante la palabra clave CREATE TRIGGER";
 choices[29][3] = "Es un conjunto de comandos SQL que pueden almacenarse en el servidor";
 answers[29] = 3;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6402. ";
 preguntaids[29] = 6402


//  Id pregunta: 8901 Año de creación de pregunta: 2013
 questions[30]= "31)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[30]= new Array();
 choices[30][0] = "Primera Forma Normal.";
 choices[30][1] = "Segunda Forma Normal.";
 choices[30][2] = "Tercera Forma Normal.";
 choices[30][3] = "Forma Normal de Boyce-Codd.";
 answers[30] = 0;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8901. ";
 preguntaids[30] = 8901


//  Id pregunta: 7064 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[31]= new Array();
 choices[31][0] = "Los datos se perciben como tablas.";
 choices[31][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[31][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[31][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[31] = 1;
 units[31] = ['61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7064. ";
 preguntaids[31] = 7064


//  Id pregunta: 6111 Año de creación de pregunta: 2003
 questions[32]= "33)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[32]= new Array();
 choices[32][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la claveprimaria de otra relaci&oacute;n";
 choices[32][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla";
 choices[32][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas";
 choices[32][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena puedenser nulos";
 answers[32] = 3;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6111. Examen TIC A1 MAP 2007";
 preguntaids[32] = 6111


//  Id pregunta: 6803 Año de creación de pregunta: 2010
 questions[33]= "34)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[33]= new Array();
 choices[33][0] = "Delete table.";
 choices[33][1] = "rm table.";
 choices[33][2] = "Delete table now.";
 choices[33][3] = "DROP TABLE.";
 answers[33] = 3;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 6803. TIC A 2009";
 preguntaids[33] = 6803


//  Id pregunta: 7065 Año de creación de pregunta: 2010
 questions[34]= "35)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[34]= new Array();
 choices[34][0] = "SELECT, FROM";
 choices[34][1] = "SELECT, FROM y WHERE";
 choices[34][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[34][3] = "Todas las anteriores son err&oacute;neas";
 answers[34] = 3;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7065. ";
 preguntaids[34] = 7065


//  Id pregunta: 7879 Año de creación de pregunta: 2011
 questions[35]= "36)  En una tabla de una base de datos relacional:";
 choices[35]= new Array();
 choices[35][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[35][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[35][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[35][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder a la tabla.";
 answers[35] = 3;
 units[35] = ['61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7879. Examen TIC A1 2010";
 preguntaids[35] = 7879


//  Id pregunta: 8415 Año de creación de pregunta: 2011
 questions[36]= "37)  El proceso de normalizaci&oacute;n tiene por objeto:";
 choices[36]= new Array();
 choices[36][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[36][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[36][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[36][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[36] = 2;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8415. Operador Ayto. Madrid 2010";
 preguntaids[36] = 8415


//  Id pregunta: 9008 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[37]= new Array();
 choices[37][0] = "Vistas indexadas";
 choices[37][1] = "Vistas normalizadas";
 choices[37][2] = "Vistas f&iacute;sicas";
 choices[37][3] = "No existen alternativas";
 answers[37] = 0;
 units[37] = ['61'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9008. En SQL Server se llaman vistas indexadas";
 preguntaids[37] = 9008


//  Id pregunta: 5937 Año de creación de pregunta: 2007
 questions[38]= "39)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[38][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[38][2] = "Rollback de la transacci&oacute;n";
 choices[38][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[38] = 1;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5937. ";
 preguntaids[38] = 5937


//  Id pregunta: 8899 Año de creación de pregunta: 2013
 questions[39]= "40)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[39]= new Array();
 choices[39][0] = "Primera Forma Normal.";
 choices[39][1] = "Segunda Forma Normal.";
 choices[39][2] = "Tercera Forma Normal.";
 choices[39][3] = "Forma Normal de Boyce-Codd.";
 answers[39] = 0;
 units[39] = ['61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8899. ";
 preguntaids[39] = 8899


//  Id pregunta: 8378 Año de creación de pregunta: 2011
 questions[40]= "41)  ODBC son las siglas de:";
 choices[40]= new Array();
 choices[40][0] = "Open DataBase Consortium";
 choices[40][1] = "Open Data Business Connectivity";
 choices[40][2] = "Open DataBase Connectivity";
 choices[40][3] = "Object DataBase Consortium";
 answers[40] = 2;
 units[40] = ['60', '61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8378. Examen UPM A2 2011";
 preguntaids[40] = 8378


//  Id pregunta: 7748 Año de creación de pregunta: 2010
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?";
 choices[41]= new Array();
 choices[41][0] = "UPDATE TABLE.";
 choices[41][1] = "ALTER TABLE.";
 choices[41][2] = "REVOKE ALL.";
 choices[41][3] = "ROLLBACK.";
 answers[41] = 1;
 units[41] = ['61'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7748. ";
 preguntaids[41] = 7748


//  Id pregunta: 9000 Año de creación de pregunta: 2014
 questions[42]= "43)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[42]= new Array();
 choices[42][0] = "Oracle";
 choices[42][1] = "MongoDB";
 choices[42][2] = "eXist";
 choices[42][3] = "Redis";
 answers[42] = 2;
 units[42] = ['61'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9000. ";
 preguntaids[42] = 9000


//  Id pregunta: 6377 Año de creación de pregunta: 2003
 questions[43]= "44)  &iquest;Por qu&eacute; el recorrido completo de tablas de gran tama&ntilde;o es un asunto cr&iacute;tico en la definici&oacute;n de sentencias SQL?";
 choices[43]= new Array();
 choices[43][0] = "Porque es indicativo de una futura ejecuci&oacute;n &oacute;ptima";
 choices[43][1] = "Porque es muy probable que se requiera adaptaciones para el uso de &iacute;ndices";
 choices[43][2] = "Porque el recorrido completo de tablas deber&iacute;a ser normalizado desde el dise&ntilde;o de la base de datos";
 choices[43][3] = "Porque el recorrido completo de una tabla nunca es &oacute;ptimo";
 answers[43] = 1;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6377. Examen 2006 JCYL";
 preguntaids[43] = 6377


//  Id pregunta: 6870 Año de creación de pregunta: 2010
 questions[44]= "45)  El lenguaje SQL92:";
 choices[44]= new Array();
 choices[44][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[44][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[44][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[44][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[44] = 0;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6870. TIC A 2009";
 preguntaids[44] = 6870


//  Id pregunta: 9096 Año de creación de pregunta: 2014
 questions[45]= "46)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[45]= new Array();
 choices[45][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[45][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[45][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[45][3] = "las opciones a, b y c son ciertas.";
 answers[45] = 3;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9096. Examen TIC-A1 2013";
 preguntaids[45] = 9096


//  Id pregunta: 8900 Año de creación de pregunta: 2013
 questions[46]= "47)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[46]= new Array();
 choices[46][0] = "Primera Forma Normal.";
 choices[46][1] = "Segunda Forma Normal.";
 choices[46][2] = "Tercera Forma Normal.";
 choices[46][3] = "Forma Normal de Boyce-Codd.";
 answers[46] = 1;
 units[46] = ['61'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8900. ";
 preguntaids[46] = 8900


//  Id pregunta: 9006 Año de creación de pregunta: 2014
 questions[47]= "48)  &iquest;Qu&eacute; es el FSQL?";
 choices[47]= new Array();
 choices[47][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[47][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[47][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[47][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[47] = 1;
 units[47] = ['61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9006. ";
 preguntaids[47] = 9006


//  Id pregunta: 9007 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;Qu&eacute; es una vista materializada?";
 choices[48]= new Array();
 choices[48][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[48][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[48][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[48][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[48] = 1;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9007. ";
 preguntaids[48] = 9007


//  Id pregunta: 7067 Año de creación de pregunta: 2010
 questions[49]= "50)  Para modificar la estructura de una tabla en SQL";
 choices[49]= new Array();
 choices[49][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[49][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[49][2] = "Las tablas se modifican con el comando ALTER.";
 choices[49][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[49] = 2;
 units[49] = ['61'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7067. ";
 preguntaids[49] = 7067


//  Id pregunta: 6221 Año de creación de pregunta: 2003
 questions[50]= "51)  En entornos Oracle, &iquest;cu&aacute;l de los siguientes NO es un componente de las herramientas Forms y Reports?";
 choices[50]= new Array();
 choices[50][0] = "Forms y Reports Developer (desarrollador)";
 choices[50][1] = "Forms y Reports Runtime (tiempo de ejecuci&oacute;n)";
 choices[50][2] = "Forms y Reports Compiler (compilador)";
 choices[50][3] = "Forms y Reports Designer (dise&ntilde;ador)";
 answers[50] = 3;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6221. Examen TIC A Castilla La Mancha 2007";
 preguntaids[50] = 6221


//  Id pregunta: 8354 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[51]= new Array();
 choices[51][0] = "Type 1 JDBC Driver";
 choices[51][1] = "Type 2 JDBC Driver";
 choices[51][2] = "Type 3 JDBC Driver";
 choices[51][3] = "Type 4 JDBC Driver";
 answers[51] = 3;
 units[51] = ['61', '64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8354. Analista Ayto. Madrid 2010";
 preguntaids[51] = 8354


//  Id pregunta: 7070 Año de creación de pregunta: 2010
 questions[52]= "53)  La operaci&oacute;n de JOIN:";
 choices[52]= new Array();
 choices[52][0] = "Hace &uacute;nicamente el producto cartesiano.";
 choices[52][1] = "Realiza el producto cartesiano y elimina aquellas tuplas que tienen el mismo valor en los atributos comunes.";
 choices[52][2] = "Realiza el producto cartesiano y elimina aquellas tuplas que no tienen el mismo valor en los atributos comunes.";
 choices[52][3] = "Elimina los atributos que no est&aacute;n repetidos.";
 answers[52] = 2;
 units[52] = ['61'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7070. ";
 preguntaids[52] = 7070


//  Id pregunta: 7493 Año de creación de pregunta: 2010
 questions[53]= "54)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[53]= new Array();
 choices[53][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos.";
 choices[53][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[53][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[53][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos.";
 answers[53] = 2;
 units[53] = ['61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7493. Map 2005";
 preguntaids[53] = 7493


//  Id pregunta: 7921 Año de creación de pregunta: 2011
 questions[54]= "55)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[54]= new Array();
 choices[54][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[54][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[54][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[54][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[54] = 3;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7921. Examen TIC A1 2010";
 preguntaids[54] = 7921


//  Id pregunta: 8299 Año de creación de pregunta: 2011
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (DDL) de SQL?";
 choices[55]= new Array();
 choices[55][0] = "ROLLBACK";
 choices[55][1] = "UPDATE";
 choices[55][2] = "GRANT";
 choices[55][3] = "TRUNCATE";
 answers[55] = 3;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8299. Examen UPM A2 2011";
 preguntaids[55] = 8299


//  Id pregunta: 6006 Año de creación de pregunta: 2003
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de los siguientes t&eacute;rminos NO constituye un estandar de interface de acceso a bases de datos:";
 choices[56]= new Array();
 choices[56][0] = "ODBC (Open Database Connectivity).";
 choices[56][1] = "RDO (Remote Data Objects.";
 choices[56][2] = "DMBS (DataBase Management System).";
 choices[56][3] = "OLE DB (Object Linking and Embedding for Databases).";
 answers[56] = 2;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6006. TIC B 2007";
 preguntaids[56] = 6006


//  Id pregunta: 6787 Año de creación de pregunta: 2010
 questions[57]= "58)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[57]= new Array();
 choices[57][0] = "{a,b,c}.";
 choices[57][1] = "{ax,az,bz,cx}.";
 choices[57][2] = "{ay,by,cy}.";
 choices[57][3] = "{a}.";
 answers[57] = 3;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6787. TIC A 2009";
 preguntaids[57] = 6787


//  Id pregunta: 7367 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[58]= new Array();
 choices[58][0] = "SELECT";
 choices[58][1] = "DROP";
 choices[58][2] = "INSERT";
 choices[58][3] = "DELETE";
 answers[58] = 1;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7367. Examen TIC B 2009";
 preguntaids[58] = 7367


//  Id pregunta: 7063 Año de creación de pregunta: 2010
 questions[59]= "60)  Las reglas de integridad en una base de datos relacional son:";
 choices[59]= new Array();
 choices[59][0] = "Integridad de claves con las claves ajenas";
 choices[59][1] = "Integridad de entidad e integridad referencial";
 choices[59][2] = "Integridad referente a las claves";
 choices[59][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[59] = 1;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7063. ";
 preguntaids[59] = 7063


//  Id pregunta: 8207 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[60]= new Array();
 choices[60][0] = "CREATE";
 choices[60][1] = "ALTER";
 choices[60][2] = "DELETE";
 choices[60][3] = "DROP";
 answers[60] = 2;
 units[60] = ['60', '61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8207. Examen TIC A2 2010 interna";
 preguntaids[60] = 8207


//  Id pregunta: 8375 Año de creación de pregunta: 2011
 questions[61]= "62)  La cl&aacute;usula HAVING de SQL:";
 choices[61]= new Array();
 choices[61][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[61][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[61][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[61][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[61] = 2;
 units[61] = ['60', '61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8375. Examen UPM A2 2011";
 preguntaids[61] = 8375


//  Id pregunta: 8212 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[62]= new Array();
 choices[62][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[62][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[62][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[62][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[62] = 3;
 units[62] = ['60', '61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8212. Examen TIC A2 2010 interna";
 preguntaids[62] = 8212


//  Id pregunta: 7724 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[63]= new Array();
 choices[63][0] = "Regla de la no inversi&oacute;n.";
 choices[63][1] = "Regla de la no concurrencia.";
 choices[63][2] = "Regla de la restricci&oacute;n.";
 choices[63][3] = "Regla de la no replicaci&oacute;n de informaci&oacute;n.";
 answers[63] = 0;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7724. Map 2007";
 preguntaids[63] = 7724


//  Id pregunta: 7368 Año de creación de pregunta: 2010
 questions[64]= "65)  En Oracle, un tablespace es:";
 choices[64]= new Array();
 choices[64][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[64][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[64][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[64][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[64] = 3;
 units[64] = ['61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7368. Examen TIC B 2009";
 preguntaids[64] = 7368


//  Id pregunta: 8186 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[65]= new Array();
 choices[65][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[65][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[65][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[65][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[65] = 0;
 units[65] = ['60', '61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8186. Examen TIC A2 2010 interna";
 preguntaids[65] = 8186


//  Id pregunta: 8132 Año de creación de pregunta: 2011
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[66]= new Array();
 choices[66][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[66][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[66][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[66][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[66] = 2;
 units[66] = ['60', '61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8132. Examen TIC A2 2010 interna";
 preguntaids[66] = 8132


//  Id pregunta: 7708 Año de creación de pregunta: 2010
 questions[67]= "68)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[67]= new Array();
 choices[67][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la clave primaria de otra relaci&oacute;n.";
 choices[67][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla.";
 choices[67][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas.";
 choices[67][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena pueden ser nulos.";
 answers[67] = 3;
 units[67] = ['61'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7708. Map 2007";
 preguntaids[67] = 7708


//  Id pregunta: 8058 Año de creación de pregunta: 2011
 questions[68]= "69)  En el contexto del PL-SQL, &iquest;cu&aacute;l es el nombre que se da a los segmentos de memoria utilizados para realizar operaciones con los registros devueltos tras ejecutar una sentencia SELECT?";
 choices[68]= new Array();
 choices[68][0] = "Row Trigger";
 choices[68][1] = "Statement Trigger.";
 choices[68][2] = "Cursor";
 choices[68][3] = "Puntero";
 answers[68] = 2;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8058. Examen TIC A2 2010";
 preguntaids[68] = 8058


//  Id pregunta: 7860 Año de creación de pregunta: 2011
 questions[69]= "70)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[69]= new Array();
 choices[69][0] = "No est&aacute; en primera forma normal.";
 choices[69][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[69][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[69][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[69] = 2;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7860. Examen TIC A1 2010";
 preguntaids[69] = 7860


//  Id pregunta: 6151 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[70]= new Array();
 choices[70][0] = "UPDATE TABLE";
 choices[70][1] = "ALTER TABLE";
 choices[70][2] = "REVOKE ALL";
 choices[70][3] = "ROLLBACK";
 answers[70] = 1;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6151. Examen TIC A1 MAP 2007";
 preguntaids[70] = 6151


//  Id pregunta: 8198 Año de creación de pregunta: 2011
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[71]= new Array();
 choices[71][0] = "En la especializaci&oacute;n un supertipo se descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[71][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[71][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[71][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[71] = 0;
 units[71] = ['60', '61'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8198. Examen TIC A2 2010 interna";
 preguntaids[71] = 8198


//  Id pregunta: 6382 Año de creación de pregunta: 2003
 questions[72]= "73)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[72]= new Array();
 choices[72][0] = "N&uacute;mero de CPUs en el servidor";
 choices[72][1] = "Grado de paralelismo de las tablas";
 choices[72][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[72][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[72] = 3;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6382. Examen 2006 JCYL";
 preguntaids[72] = 6382


//  Id pregunta: 8209 Año de creación de pregunta: 2011
 questions[73]= "74)  En la arquitectura ANSI SQL la capacidad de modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[73]= new Array();
 choices[73][0] = "Independencia f&iacute;sica.";
 choices[73][1] = "Independencia L&oacute;gica.";
 choices[73][2] = "Integridad de la entidad";
 choices[73][3] = "Integridad referencial.";
 answers[73] = 0;
 units[73] = ['60', '61'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8209. Examen TIC A2 2010 interna";
 preguntaids[73] = 8209


//  Id pregunta: 6597 Año de creación de pregunta: 2009
 questions[74]= "75)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Lenguaje de Consulta de datos.";
 choices[74][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[74][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[74][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[74] = 3;
 units[74] = ['61'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6597. MAP 2008 A2";
 preguntaids[74] = 6597


