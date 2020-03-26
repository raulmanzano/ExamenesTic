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
//  Id pregunta: 8198 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[0]= new Array();
 choices[0][0] = "En la especializaci&oacute;n un supertipo se descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[0][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[0][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[0][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[0] = 0;
 units[0] = ['60', '61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8198. Examen TIC A2 2010 interna";
 preguntaids[0] = 8198


//  Id pregunta: 8187 Año de creación de pregunta: 2011
 questions[1]= "2)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[1]= new Array();
 choices[1][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[1][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[1][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[1][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[1] = 2;
 units[1] = ['60', '61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8187. Examen TIC A2 2010 interna";
 preguntaids[1] = 8187


//  Id pregunta: 8017 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[2]= new Array();
 choices[2][0] = "Read Commited (lectura confirmada).";
 choices[2][1] = "Serializable.";
 choices[2][2] = "Read uncornmited (lectura no confirmada),";
 choices[2][3] = "Repeatable read (lectura repetible).";
 answers[2] = 3;
 units[2] = ['60', '61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8017. Examen TIC A2 2010";
 preguntaids[2] = 8017


//  Id pregunta: 6189 Año de creación de pregunta: 2003
 questions[3]= "4)  Si examinamos el modelo relacional dentro del marco de la arquitectura ANSI, podemos afirmar que:";
 choices[3]= new Array();
 choices[3][0] = "El modelo relacional no especifica nada respecto al esquema interno.";
 choices[3][1] = "En el nivel externo se encuentran las relaciones base, tambi&eacute;n denominadas tablas reales.";
 choices[3][2] = "En el nivel conceptual se encuentran las vistas.";
 choices[3][3] = "El modelo relacional define los tres niveles de la arquitectura ANSI.";
 answers[3] = 0;
 units[3] = ['60'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6189. Examen TIC A Castilla La Mancha 2007";
 preguntaids[3] = 6189


//  Id pregunta: 9836 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[4]= new Array();
 choices[4][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[4][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[4][2] = "Externo, interno y conceptual.";
 choices[4][3] = "Externo, interno y l&oacute;gico.";
 answers[4] = 2;
 units[4] = ['60'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9836. ";
 preguntaids[4] = 9836


//  Id pregunta: 9154 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[5]= new Array();
 choices[5][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad.";
 choices[5][1] = "El esquema conceptual.";
 choices[5][2] = "Fichero diario.";
 choices[5][3] = "Triggers.";
 answers[5] = 2;
 units[5] = ['60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9154. Examen TIC A2 2013";
 preguntaids[5] = 9154


//  Id pregunta: 9484 Año de creación de pregunta: 2014
 questions[6]= "7)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[6]= new Array();
 choices[6][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[6][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[6][2] = "Autenticidad (A) es la prueba de qui&eacute;n es el autor de un dato y garantiza su no repudio";
 choices[6][3] = "Durabilidad (D) es la propiedad que asegura que una vez realizada la operaci&oacute;n, &eacute;sta persistir&aacute; y no se podr&aacute; deshacer aunque falle el sistema y que de esta forma los datos sobrevivan de alguna manera.";
 answers[6] = 3;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9484. Atomicidad: Si una operaci&oacute;n consiste en una serie de pasos, todos ellos ocurren o ninguno, es decir, las transacciones son completas. C = Consistencia = Integridad; I= Isolation = Aislamiento= una operaci&oacute;n no afecta a otras; D =durabilidad";
 preguntaids[6] = 9484


//  Id pregunta: 8057 Año de creación de pregunta: 2011
 questions[7]= "8)  Se dice que un SGBD cumple el ACID test si observa las propiedades de:";
 choices[7]= new Array();
 choices[7][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[7][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[7][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[7][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[7] = 3;
 units[7] = ['60'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8057. Examen TIC A2 2010";
 preguntaids[7] = 8057


//  Id pregunta: 9343 Año de creación de pregunta: 2014
 questions[8]= "9)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Undo.";
 choices[8][1] = "Rollback.";
 choices[8][2] = "Two Phase Commit.";
 choices[8][3] = "Commit.";
 answers[8] = 1;
 units[8] = ['60'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9343. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[8] = 9343


//  Id pregunta: 10072 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Qu&eacute; es Navicat Premium en el entorno de administraci&oacute;n de bases de datos?";
 choices[9]= new Array();
 choices[9][0] = "Es un conjunto de herramientas multiplataforma de software libre creado para ayudar a los administradores y desarrolladores de aplicaciones de bases de datos Oracle. Tambi&eacute;n suministra soporte para MySQL y PostgreSQL.";
 choices[9][1] = "Es una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 choices[9][2] = "Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java.";
 choices[9][3] = "Es un administrador de bases de datos propietario, de m&uacute;ltiples conexiones, que permite conectarse a diversas bases de datos como MySQL, MariaDB, SQL Server, etc. Simult&aacute;neamente en una sola aplicaci&oacute;n.";
 answers[9] = 3;
 units[9] = ['60'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10072. Examen TIC A2 2014";
 preguntaids[9] = 10072


//  Id pregunta: 6797 Año de creación de pregunta: 2010
 questions[10]= "11)  La arquitectura ANSI/SPARC para sistemas de bases de datos se divide en los siguientes niveles:";
 choices[10]= new Array();
 choices[10][0] = "L&oacute;gico, de usuario y f&iacute;sico.";
 choices[10][1] = "Externo, intermedio e interno.";
 choices[10][2] = "Externo, conceptual e interno.";
 choices[10][3] = "De usuario, de administrador y f&iacute;sico.";
 answers[10] = 2;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6797. TIC A 2009";
 preguntaids[10] = 6797


//  Id pregunta: 8132 Año de creación de pregunta: 2011
 questions[11]= "12)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[11]= new Array();
 choices[11][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[11][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[11][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[11][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[11] = 2;
 units[11] = ['60', '61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8132. Examen TIC A2 2010 interna";
 preguntaids[11] = 8132


//  Id pregunta: 8211 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "&Aacute;rbol Binario";
 choices[12][1] = "Lista.";
 choices[12][2] = "Lista enlazada.";
 choices[12][3] = "&Aacute;rbol-B";
 answers[12] = 3;
 units[12] = ['60'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8211. Examen TIC A2 2010 interna";
 preguntaids[12] = 8211


//  Id pregunta: 9276 Año de creación de pregunta: 2014
 questions[13]= "14)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[13]= new Array();
 choices[13][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta.";
 choices[13][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[13][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public.";
 choices[13][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto.";
 answers[13] = 0;
 units[13] = ['60'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9276. Examen TIC A2 2013. Promocion interna";
 preguntaids[13] = 9276


//  Id pregunta: 6966 Año de creación de pregunta: 2010
 questions[14]= "15)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[14]= new Array();
 choices[14][0] = "Se definen tres niveles: interno, medio y externo";
 choices[14][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[14][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[14][3] = "Existen dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[14] = 1;
 units[14] = ['60'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6966. TIC-B 2009 bloque desarrollo";
 preguntaids[14] = 6966


//  Id pregunta: 7654 Año de creación de pregunta: 2010
 questions[15]= "16)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[15]= new Array();
 choices[15][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario.";
 choices[15][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales.";
 choices[15][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nueva transacci&oacute;n.";
 choices[15][3] = "El diario nunca necesita escribirse en disco.";
 answers[15] = 1;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7654. Map 2006";
 preguntaids[15] = 7654


//  Id pregunta: 10034 Año de creación de pregunta: 2015
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[16]= new Array();
 choices[16][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[16][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[16][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[16][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[16] = 3;
 units[16] = ['60'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10034. Examen TIC A2 2014";
 preguntaids[16] = 10034


//  Id pregunta: 8186 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[17]= new Array();
 choices[17][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[17][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[17][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[17][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[17] = 0;
 units[17] = ['60', '61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8186. Examen TIC A2 2010 interna";
 preguntaids[17] = 8186


//  Id pregunta: 10535 Año de creación de pregunta: 2015
 questions[18]= "19)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la correcta para la transformaci&oacute;n de una relaci&oacute;n 1:1";
 choices[18]= new Array();
 choices[18][0] = "Se crea una clave for&aacute;nea en una de ellas que referencia a la clave de la otra";
 choices[18][1] = "La relaci&oacute;n se convierte en tabla con cada una de las claves m&aacute;s las propiedades de la relaci&oacute;n";
 choices[18][2] = "Podr&iacute;a elegirse entre las opciones anteriores";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 0;
 units[18] = ['60'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10535. ";
 preguntaids[18] = 10535


//  Id pregunta: 6990 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[19]= new Array();
 choices[19][0] = "Complejo";
 choices[19][1] = "M&aacute;ximo";
 choices[19][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[19][3] = "Informal";
 answers[19] = 2;
 units[19] = ['60'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6990. TIC-B 2009 bloque desarrollo";
 preguntaids[19] = 6990


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


//  Id pregunta: 10074 Año de creación de pregunta: 2015
 questions[21]= "22)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[21]= new Array();
 choices[21][0] = "JOB";
 choices[21][1] = "COMMENT";
 choices[21][2] = "EXEC";
 choices[21][3] = "DD";
 answers[21] = 1;
 units[21] = ['60', '61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10074. Examen TIC A2 2014";
 preguntaids[21] = 10074


//  Id pregunta: 6042 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[22]= new Array();
 choices[22][0] = "PostgreSQL.";
 choices[22][1] = "Gentoo.";
 choices[22][2] = "UbuntuBD.";
 choices[22][3] = "SQLCentos.";
 answers[22] = 0;
 units[22] = ['60'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6042. TIC B 2007";
 preguntaids[22] = 6042


//  Id pregunta: 8212 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[23]= new Array();
 choices[23][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[23][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[23][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[23][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[23] = 3;
 units[23] = ['60', '61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8212. Examen TIC A2 2010 interna";
 preguntaids[23] = 8212


//  Id pregunta: 7193 Año de creación de pregunta: 2010
 questions[24]= "25)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[24]= new Array();
 choices[24][0] = "SYS Y DBA";
 choices[24][1] = "SYS Y SYSTEM";
 choices[24][2] = "SYSTEM Y DBA";
 choices[24][3] = "MANAGER Y DBA";
 answers[24] = 1;
 units[24] = ['60'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7193. Castilla La Mancha 2009";
 preguntaids[24] = 7193


//  Id pregunta: 6965 Año de creación de pregunta: 2010
 questions[25]= "26)  En una metodolog&iacute;a de dise&ntilde;o de bases de datos, &iquest;c&oacute;mo se llama la etapa cuyo objetivo es obtener una buena representaci&oacute;n de los recursos de informaci&oacute;n con independencia de los usuarios o el SGBD, y sin realizar consideraciones sobre la eficiencia?";
 choices[25]= new Array();
 choices[25][0] = "Dise&ntilde;o conceptual";
 choices[25][1] = "Dise&ntilde;o l&oacute;gico est&aacute;ndar";
 choices[25][2] = "Dise&ntilde;o l&oacute;gico espec&iacute;fico";
 choices[25][3] = "Dise&ntilde;o preliminar";
 answers[25] = 0;
 units[25] = ['60'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6965. TIC-B 2009 bloque desarrollo";
 preguntaids[25] = 6965


//  Id pregunta: 8378 Año de creación de pregunta: 2011
 questions[26]= "27)  ODBC son las siglas de:";
 choices[26]= new Array();
 choices[26][0] = "Open DataBase Consortium";
 choices[26][1] = "Open Data Business Connectivity";
 choices[26][2] = "Open DataBase Connectivity";
 choices[26][3] = "Object DataBase Consortium";
 answers[26] = 2;
 units[26] = ['60', '61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8378. Examen UPM A2 2011";
 preguntaids[26] = 8378


//  Id pregunta: 10071 Año de creación de pregunta: 2015
 questions[27]= "28)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[27]= new Array();
 choices[27][0] = "RFID";
 choices[27][1] = "RSYNC";
 choices[27][2] = "RMAN";
 choices[27][3] = "RMON";
 answers[27] = 2;
 units[27] = ['60'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10071. Examen TIC A2 2014";
 preguntaids[27] = 10071


//  Id pregunta: 8199 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[28]= new Array();
 choices[28][0] = "Regla de la no subversi&oacute;n.";
 choices[28][1] = "Regla de la no concurrencia.";
 choices[28][2] = "Regla de la restricci&oacute;n.";
 choices[28][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[28] = 0;
 units[28] = ['60', '61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8199. Examen TIC A2 2010 interna";
 preguntaids[28] = 8199


//  Id pregunta: 9255 Año de creación de pregunta: 2014
 questions[29]= "30)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[29]= new Array();
 choices[29][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[29][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[29][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[29][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[29] = 1;
 units[29] = ['60'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9255. Examen TIC A2 2013";
 preguntaids[29] = 9255


//  Id pregunta: 6341 Año de creación de pregunta: 2003
 questions[30]= "31)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[30]= new Array();
 choices[30][0] = "Si.";
 choices[30][1] = "No.";
 choices[30][2] = "Si con ciertas restricciones.";
 choices[30][3] = "No con ciertas restricciones.";
 answers[30] = 1;
 units[30] = ['60'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6341. ";
 preguntaids[30] = 6341


//  Id pregunta: 5915 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[31]= new Array();
 choices[31][0] = "Primera FN";
 choices[31][1] = "Segunda FN";
 choices[31][2] = "Tercera FN";
 choices[31][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[31] = 1;
 units[31] = ['60'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 5915. ";
 preguntaids[31] = 5915


//  Id pregunta: 8099 Año de creación de pregunta: 2011
 questions[32]= "33)  La regla 2 de Codd es la del:";
 choices[32]= new Array();
 choices[32][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[32][1] = "Acceso garantizado";
 choices[32][2] = "Actualizaci&oacute;n de vistas";
 choices[32][3] = "Integridad referencial";
 answers[32] = 1;
 units[32] = ['60', '61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8099. Analista Ayto. Madrid 2010";
 preguntaids[32] = 8099


//  Id pregunta: 10002 Año de creación de pregunta: 2015
 questions[33]= "34)  Apache Cassandra es:";
 choices[33]= new Array();
 choices[33][0] = "Un servidor de comunicaciones.";
 choices[33][1] = "Una base de datos NoSQL distribuida.";
 choices[33][2] = "Un sistema de claves privadas.";
 choices[33][3] = "Un protocolo de comunicaciones.";
 answers[33] = 1;
 units[33] = ['60'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10002. Examen TIC A2 2014";
 preguntaids[33] = 10002


//  Id pregunta: 10126 Año de creación de pregunta: 2015
 questions[34]= "35)  En SQL Server, la cardinalidad m&aacute;xima de una tabla de hechos que es la tabla central de n tablas dimensionales es:";
 choices[34]= new Array();
 choices[34][0] = "La multiplicaci&oacute;n de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[34][1] = "La suma de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[34][2] = "La mayor de las cardinalidades presentes en las n tablas dimensionales.";
 choices[34][3] = "La mayor de las cardinalidades presentes en las n tablas dimensionales elevado a n.";
 answers[34] = 0;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10126. Examen TIC A1 2014";
 preguntaids[34] = 10126


//  Id pregunta: 9256 Año de creación de pregunta: 2014
 questions[35]= "36)  En una transacci&oacute;n en un Sistema de Gesti&oacute;n de Bases de Datos (SGBD), &iquest;qu&eacute; se entiende por el punto de integridad?";
 choices[35]= new Array();
 choices[35][0] = "El momento despu&eacute;s en el que se inicia la transacci&oacute;n.";
 choices[35][1] = "El estado de la base de datos en el momento en que se inicia la transacci&oacute;n.";
 choices[35][2] = "Hacer un rollback en el caso de que haya un problema antes de completar la transacci&oacute;n.";
 choices[35][3] = "El retorno con la confirmaci&oacute;n de que la transacci&oacute;n se ha completado con &eacute;xito.";
 answers[35] = 1;
 units[35] = ['60'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9256. Examen TIC A2 2013";
 preguntaids[35] = 9256


//  Id pregunta: 9126 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[36]= new Array();
 choices[36][0] = "SELECT";
 choices[36][1] = "DRILL";
 choices[36][2] = "CUBE";
 choices[36][3] = "MEMBER";
 answers[36] = 1;
 units[36] = ['60'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9126. Examen TIC A2 2013";
 preguntaids[36] = 9126


//  Id pregunta: 6977 Año de creación de pregunta: 2010
 questions[37]= "38)  Qu&eacute; esquema de bases de datos incluye la descripci&oacute;n de todos los datos e interrelaciones entre &eacute;stos, as&iacute; como las restricciones de integridad y de confidencialidad";
 choices[37]= new Array();
 choices[37][0] = "Esquema interno";
 choices[37][1] = "Esquema conceptual";
 choices[37][2] = "Esquema externo";
 choices[37][3] = "Esquema f&iacute;sico";
 answers[37] = 1;
 units[37] = ['60'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6977. TIC-B 2009 bloque desarrollo";
 preguntaids[37] = 6977


//  Id pregunta: 10229 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[38]= new Array();
 choices[38][0] = "Durante el an&aacute;lisis";
 choices[38][1] = "Durante el dise&ntilde;o";
 choices[38][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[38][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[38] = 2;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10229. ";
 preguntaids[38] = 10229


//  Id pregunta: 10230 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Modelo de Datos a Modelo est&aacute;tico";
 choices[39][1] = "Modelo de Objetos a Modelo funcional";
 choices[39][2] = "Modelo de Procesos a Modelo din&aacute;mico";
 choices[39][3] = "Modelo de Estados a Modelo funcional";
 answers[39] = 0;
 units[39] = ['60'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10230. ";
 preguntaids[39] = 10230


//  Id pregunta: 9253 Año de creación de pregunta: 2014
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es un Sistema Gestor de Bases de Datos Orientado a Objetos?";
 choices[40]= new Array();
 choices[40][0] = "Microsoft SQL Server.";
 choices[40][1] = "Versant.";
 choices[40][2] = "MariaDB.";
 choices[40][3] = "MySQL.";
 answers[40] = 1;
 units[40] = ['60'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9253. Examen TIC A2 2013";
 preguntaids[40] = 9253


//  Id pregunta: 9485 Año de creación de pregunta: 2014
 questions[41]= "42)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[41]= new Array();
 choices[41][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[41][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[41][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[41][3] = "Todas las anteriores";
 answers[41] = 3;
 units[41] = ['60'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9485. ";
 preguntaids[41] = 9485


//  Id pregunta: 9569 Año de creación de pregunta: 2014
 questions[42]= "43)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[42]= new Array();
 choices[42][0] = "MongoDB";
 choices[42][1] = "MariaDB";
 choices[42][2] = "HeidiSQL";
 choices[42][3] = "MarcoDB";
 answers[42] = 3;
 units[42] = ['60'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9569. TIC A2 2013 libre";
 preguntaids[42] = 9569


//  Id pregunta: 8011 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[43]= new Array();
 choices[43][0] = "1992";
 choices[43][1] = "2008";
 choices[43][2] = "2011";
 choices[43][3] = "2012";
 answers[43] = 2;
 units[43] = ['60'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8011. Examen TIC A2 2010";
 preguntaids[43] = 8011


//  Id pregunta: 7616 Año de creación de pregunta: 2010
 questions[44]= "45)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos, &iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint).";
 choices[44][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones.";
 choices[44][2] = "Rollback de la transacci&oacute;n.";
 choices[44][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones.";
 answers[44] = 1;
 units[44] = ['60'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7616. Map 2006";
 preguntaids[44] = 7616


//  Id pregunta: 9001 Año de creación de pregunta: 2014
 questions[45]= "46)  En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[45]= new Array();
 choices[45][0] = "Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[45][1] = "Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[45][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[45][3] = "Todas las anteriores";
 answers[45] = 3;
 units[45] = ['60'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9001. ";
 preguntaids[45] = 9001


//  Id pregunta: 10073 Año de creación de pregunta: 2015
 questions[46]= "47)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[46]= new Array();
 choices[46][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[46][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[46][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[46][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[46] = 1;
 units[46] = ['60'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10073. Examen TIC A2 2014";
 preguntaids[46] = 10073


//  Id pregunta: 6003 Año de creación de pregunta: 2003
 questions[47]= "48)  Seg&uacute;n la arquitectura est&aacute;ndar de los SGBD, ANSI/X3/SPARC &iquest;en qu&eacute; nivel se define el esquema de la base dedatos?:";
 choices[47]= new Array();
 choices[47][0] = "Nivel conceptual.";
 choices[47][1] = "Nivel f&iacute;sico.";
 choices[47][2] = "Nivel de aplicaci&oacute;n.";
 choices[47][3] = "Nivel l&oacute;gico.";
 answers[47] = 0;
 units[47] = ['60'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 6003. TIC B 2007";
 preguntaids[47] = 6003


//  Id pregunta: 8206 Año de creación de pregunta: 2011
 questions[48]= "49)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[48]= new Array();
 choices[48][0] = "No tiene claves.";
 choices[48][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[48][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[48][3] = "Conserva la clave de la entidad fuerte.";
 answers[48] = 1;
 units[48] = ['60', '61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8206. Examen TIC A2 2010 interna";
 preguntaids[48] = 8206


//  Id pregunta: 9998 Año de creación de pregunta: 2015
 questions[49]= "50)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[49]= new Array();
 choices[49][0] = "SQLite.";
 choices[49][1] = "Oracle Pocket.";
 choices[49][2] = "SQL Server compact.";
 choices[49][3] = "MySQL micro edition.";
 answers[49] = 0;
 units[49] = ['60'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9998. Examen TIC A2 2014";
 preguntaids[49] = 9998


//  Id pregunta: 8375 Año de creación de pregunta: 2011
 questions[50]= "51)  La cl&aacute;usula HAVING de SQL:";
 choices[50]= new Array();
 choices[50][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[50][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[50][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[50][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[50] = 2;
 units[50] = ['60', '61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8375. Examen UPM A2 2011";
 preguntaids[50] = 8375


//  Id pregunta: 8133 Año de creación de pregunta: 2011
 questions[51]= "52)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[51]= new Array();
 choices[51][0] = "Una relaci&oacute;n N:M.";
 choices[51][1] = "Una relaci&oacute;n 1:N.";
 choices[51][2] = "Una relaci&oacute;n 1:1.";
 choices[51][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite.";
 answers[51] = 0;
 units[51] = ['60', '61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8133. Examen TIC A2 2010 interna";
 preguntaids[51] = 8133


//  Id pregunta: 7429 Año de creación de pregunta: 2010
 questions[52]= "53)  SQL*Loader es una herramienta utilizada para qu&eacute; servidor de bases de datos:";
 choices[52]= new Array();
 choices[52][0] = "MySQL";
 choices[52][1] = "Oracle";
 choices[52][2] = "SQL Server";
 choices[52][3] = "Todas las opciones son correctas";
 answers[52] = 1;
 units[52] = ['60'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7429. ";
 preguntaids[52] = 7429


//  Id pregunta: 9106 Año de creación de pregunta: 2014
 questions[53]= "54)  ANSI/ISO SQL define ciertos niveles de aislamiento en transacciones en funci&oacute;n de qu&eacute; fen&oacute;menos puede que ocurran. Indique la respuesta correcta respecto al fen&oacute;meno &quot;lectura fantasma&quot;:";
 choices[53]= new Array();
 choices[53][0] = "Se permite en read uncommitted, read committed y repeatable read, pero no se permite en serializable.";
 choices[53][1] = "Se permite en read uncommitted y read committed, pero no se permite en repeatable read ni en serializable.";
 choices[53][2] = "Se permite en read uncommitted y repeatable read, pero no se permite en read committed ni en serializable.";
 choices[53][3] = "Se permite en read uncommitted, pero no se permite en read committed, repeatable read ni en serializable.";
 answers[53] = 0;
 units[53] = ['60'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9106. Examen TIC A2 2013";
 preguntaids[53] = 9106


//  Id pregunta: 8207 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[54]= new Array();
 choices[54][0] = "CREATE";
 choices[54][1] = "ALTER";
 choices[54][2] = "DELETE";
 choices[54][3] = "DROP";
 answers[54] = 2;
 units[54] = ['60', '61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8207. Examen TIC A2 2010 interna";
 preguntaids[54] = 8207


//  Id pregunta: 8055 Año de creación de pregunta: 2011
 questions[55]= "56)  COBOL es el acr&oacute;nimo de:";
 choices[55]= new Array();
 choices[55][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios).";
 choices[55][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios).";
 choices[55][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio).";
 choices[55][3] = "No es un acr&oacute;nimo.";
 answers[55] = 1;
 units[55] = ['60'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8055. Examen TIC A2 2010";
 preguntaids[55] = 8055


//  Id pregunta: 9473 Año de creación de pregunta: 2014
 questions[56]= "57)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[56]= new Array();
 choices[56][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados por otra transacci&oacute;n que finalmente aborta.";
 choices[56][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[56][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[56][3] = "Todas las anteriores";
 answers[56] = 1;
 units[56] = ['60'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9473. A: Lectura sucia";
 preguntaids[56] = 9473


//  Id pregunta: 10030 Año de creación de pregunta: 2015
 questions[57]= "58)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[57]= new Array();
 choices[57][0] = "Serializable.";
 choices[57][1] = "Repeatable Read (lecturas repetibles).";
 choices[57][2] = "Read Committed (lecturas comprometidas).";
 choices[57][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[57] = 3;
 units[57] = ['60', '61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10030. Examen TIC A2 2014";
 preguntaids[57] = 10030


//  Id pregunta: 10332 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[58]= new Array();
 choices[58][0] = "DDL - Data Definition Language";
 choices[58][1] = "DML - Data Manipulation Language";
 choices[58][2] = "DCL - Data Control Language";
 choices[58][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[58] = 3;
 units[58] = ['60'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 10332. ";
 preguntaids[58] = 10332


//  Id pregunta: 8377 Año de creación de pregunta: 2011
 questions[59]= "60)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[59]= new Array();
 choices[59][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[59][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[59][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[59][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[59] = 1;
 units[59] = ['60', '61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8377. Examen UPM A2 2011";
 preguntaids[59] = 8377


//  Id pregunta: 8881 Año de creación de pregunta: 2013
 questions[60]= "61)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica de las transacciones?";
 choices[60]= new Array();
 choices[60][0] = "Concurrencia";
 choices[60][1] = "Durabilidad";
 choices[60][2] = "Aislamiento";
 choices[60][3] = "Atomicidad";
 answers[60] = 0;
 units[60] = ['60'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8881. Examen AGE TIC A1 2011";
 preguntaids[60] = 8881


//  Id pregunta: 7877 Año de creación de pregunta: 2011
 questions[61]= "62)  Respecto del modelo jer&aacute;rquico de base de datos, se&ntilde;ale qu&eacute; afirmaci&oacute;n es FALSA:";
 choices[61]= new Array();
 choices[61][0] = "Utiliza punteros para su implementaci&oacute;n f&iacute;sica.";
 choices[61][1] = "Permite que un nodo de nivel superior pueda tener un n&uacute;mero ilimitado de nodos de nivel inferior.";
 choices[61][2] = "Permite describir relaciones sim&eacute;tricas.";
 choices[61][3] = "Permite actualizaciones en cascada.";
 answers[61] = 2;
 units[61] = ['60'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7877. Examen TIC A1 2010";
 preguntaids[61] = 7877


//  Id pregunta: 9340 Año de creación de pregunta: 2014
 questions[62]= "63)  Indique los cuatro niveles de aislamiento que define ANSI SQL 92:";
 choices[62]= new Array();
 choices[62][0] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[62][1] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 choices[62][2] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[62][3] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 answers[62] = 0;
 units[62] = ['60'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9340. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[62] = 9340


//  Id pregunta: 8999 Año de creación de pregunta: 2014
 questions[63]= "64)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[63]= new Array();
 choices[63][0] = "Relacional";
 choices[63][1] = "En red";
 choices[63][2] = "Jer&aacute;rquico";
 choices[63][3] = "Multidimensional";
 answers[63] = 2;
 units[63] = ['60'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8999. ";
 preguntaids[63] = 8999


//  Id pregunta: 9341 Año de creación de pregunta: 2014
 questions[64]= "65)  El t&eacute;rmino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[64]= new Array();
 choices[64][0] = "Autentication, Consistency, Integrity, Durability.";
 choices[64][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[64][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[64][3] = "Availability, Consistency, Isolation, Durability.";
 answers[64] = 2;
 units[64] = ['60'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9341. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[64] = 9341


//  Id pregunta: 8209 Año de creación de pregunta: 2011
 questions[65]= "66)  En la arquitectura ANSI SQL la capacidad de modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[65]= new Array();
 choices[65][0] = "Independencia f&iacute;sica.";
 choices[65][1] = "Independencia L&oacute;gica.";
 choices[65][2] = "Integridad de la entidad";
 choices[65][3] = "Integridad referencial.";
 answers[65] = 0;
 units[65] = ['60', '61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8209. Examen TIC A2 2010 interna";
 preguntaids[65] = 8209


//  Id pregunta: 9153 Año de creación de pregunta: 2014
 questions[66]= "67)  CODASYL, modelo de Sistemas Gestores de Bases de datos en red, es acr&oacute;nimo de:";
 choices[66]= new Array();
 choices[66][0] = "Conference on Data Systems Languages.";
 choices[66][1] = "Concurrent Database Systems Languages.";
 choices[66][2] = "Coherent Data Symmetric Location.";
 choices[66][3] = "CODe And Systematic Language.";
 answers[66] = 0;
 units[66] = ['60'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9153. Examen TIC A2 2013";
 preguntaids[66] = 9153


