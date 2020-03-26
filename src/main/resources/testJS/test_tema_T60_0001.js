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
//  Id pregunta: 2933 Año de creación de pregunta: 2002
 questions[0]= "1)  La estructura secuencial encadenada:";
 choices[0]= new Array();
 choices[0][0] = "Es una estructura de f&aacute;cil gesti&oacute;n";
 choices[0][1] = "La inserciones de datos se autogestionan sin variar la estructura l&oacute;gica inicial";
 choices[0][2] = "Es el elemento precursor de la estructura relacional de las bases de datos";
 choices[0][3] = "La idea de apuntadores ha sido utilizada en los sistemas jer&aacute;rquicos y en red";
 answers[0] = 3;
 units[0] = ['60'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2933. ";
 preguntaids[0] = 2933


//  Id pregunta: 3078 Año de creación de pregunta: 2002
 questions[1]= "2)  Un productor de bases de datos es aqu&eacute;l que:";
 choices[1]= new Array();
 choices[1][0] = "&Uacute;nicamente recopila informaci&oacute;n y la pone a disposici&oacute;n de la sociedad en un soporte susceptible de tratamiento inform&aacute;tico";
 choices[1][1] = "Solo mantiene al d&iacute;a la informaci&oacute;n contenida en las bases";
 choices[1][2] = "Algunos de ellos no se limitan a recopilar la informaci&oacute;n, sino que la elaboran";
 choices[1][3] = "Son correctas las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[1] = 2;
 units[1] = ['60'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3078. ";
 preguntaids[1] = 3078


//  Id pregunta: 5553 Año de creación de pregunta: 2007
 questions[2]= "3)  En el entorno de base de datos, los &iacute;ndices son de vital importancia en las transacciones de acceso, &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[2]= new Array();
 choices[2][0] = "El &iacute;ndice es tambi&eacute;n una tabla almacenada en un disco.";
 choices[2][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos.";
 choices[2][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario.";
 choices[2][3] = "Las actualizaciones de los &iacute;ndices no consumen recursos.";
 answers[2] = 3;
 units[2] = ['60'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5553. ";
 preguntaids[2] = 5553


//  Id pregunta: 2512 Año de creación de pregunta: 2004
 questions[3]= "4)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[3]= new Array();
 choices[3][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[3][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[3][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[3][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[3] = 3;
 units[3] = ['60'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2512. Examen TIC MAP B 2004";
 preguntaids[3] = 2512


//  Id pregunta: 2959 Año de creación de pregunta: 2002
 questions[4]= "5)  La visi&oacute;n general que la empresa debe tener de toda la base de datos, corresponde al:";
 choices[4]= new Array();
 choices[4][0] = "Esquema conceptual";
 choices[4][1] = "Exquema externo";
 choices[4][2] = "Esquema interno";
 choices[4][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[4] = 0;
 units[4] = ['60'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2959. ";
 preguntaids[4] = 2959


//  Id pregunta: 1563 Año de creación de pregunta: 2016
 questions[5]= "6)  Existen diversos tipos de sistemas gestores de bases de datos (SGBD) en funci&oacute;n del modelo l&oacute;gico en el cual se basan. Indique a que tipo pertenece el SGBD IMS de IBM:";
 choices[5]= new Array();
 choices[5][0] = "Modelo l&oacute;gico relacional.";
 choices[5][1] = "Modelo l&oacute;gico jer&aacute;rquico.";
 choices[5][2] = "Modelo l&oacute;gico en red.";
 choices[5][3] = "Modelo l&oacute;gico orientado a objetos.";
 answers[5] = 1;
 units[5] = ['60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1563. ";
 preguntaids[5] = 1563


//  Id pregunta: 2764 Año de creación de pregunta: 2002
 questions[6]= "7)  Existen diversos tipos de modelos de datos convencionales:";
 choices[6]= new Array();
 choices[6][0] = "El modelo jer&aacute;rquico es m&aacute;s flexible que el de red o reticular";
 choices[6][1] = "El modelo relacional se basa en el &aacute;lgebra y c&aacute;lculo relacional";
 choices[6][2] = "Cronol&oacute;gicamente el modelo de red o reticular es anterior al jer&aacute;rquico";
 choices[6][3] = "En el modelo relacional se exige que el usuario conozca las vinculaciones entre entidades";
 answers[6] = 1;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2764. ";
 preguntaids[6] = 2764


//  Id pregunta: 1334 Año de creación de pregunta: 2016
 questions[7]= "8)  AI problema en un SGBD en que dos transacciones paralelas intentan modificar el mismo objeto de la base de datos, leyendo ambas el valor antes de que la otra transacci&oacute;n lo actualice, se conoce como:";
 choices[7]= new Array();
 choices[7][0] = "Lectura sucia.";
 choices[7][1] = "Lectura fantasma.";
 choices[7][2] = "Lectura no repetible.";
 choices[7][3] = "Lectura comprometida.";
 answers[7] = 2;
 units[7] = ['60'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1334. ";
 preguntaids[7] = 1334


//  Id pregunta: 3627 Año de creación de pregunta: 2002
 questions[8]= "9)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[8][1] = "Cuando acaba la rutina que los actualiza.";
 choices[8][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[8][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[8] = 3;
 units[8] = ['60', '61', '86'];
 blocks[8] = ['B2', 'B3'];
 comments[8] = "Id Pregunta: 3627. ";
 preguntaids[8] = 3627


//  Id pregunta: 1195 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[9]= new Array();
 choices[9][0] = "RFID";
 choices[9][1] = "RSYNC";
 choices[9][2] = "RMAN";
 choices[9][3] = "RMON";
 answers[9] = 2;
 units[9] = ['60'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1195. ";
 preguntaids[9] = 1195


//  Id pregunta: 2505 Año de creación de pregunta: 2004
 questions[10]= "11)  En el estudio te&oacute;rico de las Estructuras de Datos, el conocido como &quot;m&eacute;todo de la baraja&quot; responde a un algoritmo de:";
 choices[10]= new Array();
 choices[10][0] = "B&uacute;squeda";
 choices[10][1] = "Ordenaci&oacute;n";
 choices[10][2] = "Iteraci&oacute;n";
 choices[10][3] = "Recursi&oacute;n";
 answers[10] = 1;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2505. Examen TIC MAP B 2004";
 preguntaids[10] = 2505


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[11]= new Array();
 choices[11][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[11][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[11][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[11][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[11] = 1;
 units[11] = ['60'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 682. AGE A1 2015";
 preguntaids[11] = 682


//  Id pregunta: 3583 Año de creación de pregunta: 2004
 questions[12]= "13)  En un modelo de datos jer&aacute;rquico";
 choices[12]= new Array();
 choices[12][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[12][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[12][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[12][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[12] = 1;
 units[12] = ['60'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3583. Pregunta Junta Andalucia - A";
 preguntaids[12] = 3583


//  Id pregunta: 5817 Año de creación de pregunta: 2007
 questions[13]= "14)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[13]= new Array();
 choices[13][0] = "Esquema externo";
 choices[13][1] = "Esquema legal";
 choices[13][2] = "Esquema conceptual";
 choices[13][3] = "Esquema interno";
 answers[13] = 1;
 units[13] = ['60'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5817. Examen 2006 JCYL";
 preguntaids[13] = 5817


//  Id pregunta: 2815 Año de creación de pregunta: 2002
 questions[14]= "15)  En el Modelo de Referencia para la estandarizaci&oacute;n de los Sistemas de Gesti&oacute;n de Bases de Datos, basado en la arquitectura de tres niveles de ANSI, las funciones de insertar y borrar se realizan mediante:";
 choices[14]= new Array();
 choices[14][0] = "El esquema interno";
 choices[14][1] = "El diccionario central de datos";
 choices[14][2] = "El lenguaje de definici&oacute;n de datos";
 choices[14][3] = "El lenguaje de manipulaci&oacute;n de datos";
 answers[14] = 3;
 units[14] = ['60'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2815. ";
 preguntaids[14] = 2815


//  Id pregunta: 2849 Año de creación de pregunta: 2002
 questions[15]= "16)  En relaci&oacute;n con el diccionario de recursos de informaci&oacute;n de una base de datos, se define 'metadatos' como:";
 choices[15]= new Array();
 choices[15][0] = "El repositorio que contiene todos los datos de la organizaci&oacute;n";
 choices[15][1] = "La informaci&oacute;n relativa al propio diccionario de datos, su estructura y sus caracter&iacute;sticas";
 choices[15][2] = "La informaci&oacute;n de nivel conceptual que determina la visi&oacute;n global del sistema de informaci&oacute;n";
 choices[15][3] = "El conjunto de datos necesarios para deducir determinada informaci&oacute;n no especificada en la base de datos";
 answers[15] = 1;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2849. ";
 preguntaids[15] = 2849


//  Id pregunta: 5489 Año de creación de pregunta: 2007
 questions[16]= "17)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[16]= new Array();
 choices[16][0] = "Control de concurrencia";
 choices[16][1] = "Control de herencia.";
 choices[16][2] = "Control de acceso.";
 choices[16][3] = "Las facilidades de cifrado.";
 answers[16] = 1;
 units[16] = ['60'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 5489. ";
 preguntaids[16] = 5489


//  Id pregunta: 2829 Año de creación de pregunta: 2002
 questions[17]= "18)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[17]= new Array();
 choices[17][0] = "Esquema externo";
 choices[17][1] = "Esquema legal";
 choices[17][2] = "Esquema conceptual";
 choices[17][3] = "Esquema interno";
 answers[17] = 1;
 units[17] = ['60'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2829. ";
 preguntaids[17] = 2829


//  Id pregunta: 1929 Año de creación de pregunta: 2016
 questions[18]= "19)  EI m&oacute;dulo de un Sistema de Gesti&oacute;n de Base Datos que controla que las operaciones satisfagan las restricciones de integridad es:";
 choices[18]= new Array();
 choices[18][0] = "Procesador de consultas.";
 choices[18][1] = "Compilador del Lenguaje de Definici&oacute;n de Datos.";
 choices[18][2] = "Gestor del diccionario.";
 choices[18][3] = "Gestor de la base de datos.";
 answers[18] = 3;
 units[18] = ['60'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1929. ";
 preguntaids[18] = 1929


//  Id pregunta: 3071 Año de creación de pregunta: 2002
 questions[19]= "20)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[19]= new Array();
 choices[19][0] = "M&oacute;dulo";
 choices[19][1] = "M&oacute;dulo reentrante";
 choices[19][2] = "Transacci&oacute;n";
 choices[19][3] = "Actualizaci&oacute;n";
 answers[19] = 2;
 units[19] = ['58', '59', '60'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3071. ";
 preguntaids[19] = 3071


//  Id pregunta: 3691 Año de creación de pregunta: 2002
 questions[20]= "21)  La administraci&oacute;n de recursos de datos pueden consistir de:";
 choices[20]= new Array();
 choices[20][0] = "Administraci&oacute;n de datos y administraci&oacute;n de bases de datos";
 choices[20][1] = "Administraci&oacute;n de ordenadores y administraci&oacute;n de software";
 choices[20][2] = "Administraci&oacute;n de bases de datos y administraci&oacute;n de comunicaciones";
 choices[20][3] = "Planificaci&oacute;n e implementaci&oacute;n de bases de datos";
 answers[20] = 0;
 units[20] = ['60'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3691. ";
 preguntaids[20] = 3691


//  Id pregunta: 2770 Año de creación de pregunta: 2002
 questions[21]= "22)  El modelo de base de datos CODASYL:";
 choices[21]= new Array();
 choices[21][0] = "Es el modelo conceptual de datos que corresponde a los SGBD jer&aacute;rquicos";
 choices[21][1] = "Es el modelo l&oacute;gico de datos de un SGBD relacional";
 choices[21][2] = "Es el Modelo de Codd";
 choices[21][3] = "No se corresponde con nada de lo anterior";
 answers[21] = 3;
 units[21] = ['60'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2770. ";
 preguntaids[21] = 2770


//  Id pregunta: 5897 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema aotro usuario?";
 choices[22]= new Array();
 choices[22][0] = "CONNECT y RESOURCE";
 choices[22][1] = "DBA";
 choices[22][2] = "GRANT ANY ROLE";
 choices[22][3] = "SELECT ANY TABLE";
 answers[22] = 2;
 units[22] = ['60'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5897. ";
 preguntaids[22] = 5897


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[23]= "24)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[23]= new Array();
 choices[23][0] = "Relaciones base y vistas.";
 choices[23][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[23][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[23][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[23] = 3;
 units[23] = ['60'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 686. Junta de Extremadura A1 2015";
 preguntaids[23] = 686


//  Id pregunta: 3272 Año de creación de pregunta: 2003
 questions[24]= "25)  Las herramientas de administraci&oacute;n de datos de un SGBD";
 choices[24]= new Array();
 choices[24][0] = "Est&aacute;n entre las facilidades de usuario y el sistema central de transformaci&oacute;n de datos";
 choices[24][1] = "Tienen como interfaces LDU y LD";
 choices[24][2] = "Tienen como interfaces LD y LD-I";
 choices[24][3] = "Est&aacute;n entre el usuario y el sistema central de transformaci&oacute;n de datos";
 answers[24] = 0;
 units[24] = ['60'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3272. ";
 preguntaids[24] = 3272


//  Id pregunta: 2598 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el &aacute;lgebra relacional?:";
 choices[25]= new Array();
 choices[25][0] = "El &aacute;lgebra relacional es un lenguaje procedimental";
 choices[25][1] = "Los operadores de selecci&oacute;n, proyecci&oacute;n, uni&oacute;n y diferencia forman un conjunto relacionalmente completo";
 choices[25][2] = "Todos los operadores de consulta son derivables de los operadores fundamentales";
 choices[25][3] = "El &lsquo;join&rsquo; es un operador de compuesto de selecci&oacute;n y proyecci&oacute;n";
 answers[25] = 0;
 units[25] = ['60'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2598. ";
 preguntaids[25] = 2598


//  Id pregunta: 2498 Año de creación de pregunta: 2004
 questions[26]= "27)  Entre los distintos niveles de abstracci&oacute;n de una base de datos &iquest;con cu&aacute;l de los siguientes conceptos se identifica el &quot;usuario final&quot;?";
 choices[26]= new Array();
 choices[26][0] = "Esquema externo";
 choices[26][1] = "Esquema conceptual";
 choices[26][2] = "Esquema interno";
 choices[26][3] = "Esquema global";
 answers[26] = 0;
 units[26] = ['60'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2498. Examen TIC MAP B 2004";
 preguntaids[26] = 2498


//  Id pregunta: 3381 Año de creación de pregunta: 2006
 questions[27]= "28)  Qu&eacute; tipo de arquitectura propone el comit&eacute; ANSI/X3/SPARC para la normalizaci&oacute;n de los SGBD";
 choices[27]= new Array();
 choices[27][0] = "Arquitectura de dos niveles: estructura global y vistas l&oacute;gicas";
 choices[27][1] = "Arquitectura de tres niveles: nivel interno o f&iacute;sico, conceptual y externo o l&oacute;gico";
 choices[27][2] = "Arquitectura de cuatro niveles: interno, f&iacute;sico, conceptual y l&oacute;gico";
 choices[27][3] = "Arquitectura de un &uacute;nico nivel denominado nivel global";
 answers[27] = 1;
 units[27] = ['60'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3381. ";
 preguntaids[27] = 3381


//  Id pregunta: 1364 Año de creación de pregunta: 2016
 questions[28]= "29)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[28]= new Array();
 choices[28][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[28][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[28][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[28][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizara siempre que se actualicen las tablas involucradas en esa vista.";
 answers[28] = 2;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1364. ";
 preguntaids[28] = 1364


//  Id pregunta: 2504 Año de creación de pregunta: 2004
 questions[29]= "30)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[29]= new Array();
 choices[29][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[29][1] = "De clase y de objeto";
 choices[29][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[29][3] = "De flujo de control y de flujo de datos";
 answers[29] = 0;
 units[29] = ['60'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2504. Examen TIC MAP B 2004";
 preguntaids[29] = 2504


//  Id pregunta: 2998 Año de creación de pregunta: 2002
 questions[30]= "31)  Para cuantificar el movimiento existente entre la entrada a una base de datos orientada a objetos y la salida se emplean dos sistemas. El denominado 'din&aacute;mica d&eacute;bil' se caracteriza por:";
 choices[30]= new Array();
 choices[30][0] = "Considerar la creaci&oacute;n y destrucci&oacute;n de objetos";
 choices[30][1] = "Definir el tiempo de vida de los objetos como el intervalo de existencia asociado a los mismos";
 choices[30][2] = "Reflejar el movimiento y cambios de valor de los atributos variables";
 choices[30][3] = "Modificar la sociedad de objetos entre s&iacute;, pero no la observabilidad de los mismos";
 answers[30] = 2;
 units[30] = ['60'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2998. ";
 preguntaids[30] = 2998


//  Id pregunta: 2602 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[31]= new Array();
 choices[31][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[31][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[31][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[31][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[31] = 2;
 units[31] = ['60'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2602. ";
 preguntaids[31] = 2602


//  Id pregunta: 3107 Año de creación de pregunta: 2002
 questions[32]= "33)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[32]= new Array();
 choices[32][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[32][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[32][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[32][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[32] = 0;
 units[32] = ['60'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3107. ";
 preguntaids[32] = 3107


//  Id pregunta: 5690 Año de creación de pregunta: 2007
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite?";
 choices[33]= new Array();
 choices[33][0] = "Forms.";
 choices[33][1] = "Reports.";
 choices[33][2] = "Designer.";
 choices[33][3] = "Fusion.";
 answers[33] = 3;
 units[33] = ['60', '61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5690. ";
 preguntaids[33] = 5690


//  Id pregunta: 1332 Año de creación de pregunta: 2016
 questions[34]= "35)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[34]= new Array();
 choices[34][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[34][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la , informaci&oacute;n de bloqueos.";
 choices[34][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[34][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[34] = 0;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1332. ";
 preguntaids[34] = 1332


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[35]= "36)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[35]= new Array();
 choices[35][0] = "GROUP BY.";
 choices[35][1] = "COUNT.";
 choices[35][2] = "WHERE.";
 choices[35][3] = "DISTINCT.";
 answers[35] = 0;
 units[35] = ['60'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 684. Junta de Extremadura A1 2015";
 preguntaids[35] = 684


//  Id pregunta: 3781 Año de creación de pregunta: 2002
 questions[36]= "37)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[36]= new Array();
 choices[36][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[36][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[36][2] = "Los dos tipos de propiedades, es indiferente";
 choices[36][3] = "No define propiedades, define comportamientos";
 answers[36] = 1;
 units[36] = ['60'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3781. ";
 preguntaids[36] = 3781


//  Id pregunta: 2575 Año de creación de pregunta: 2002
 questions[37]= "38)  A la tabla virtual que se deriva de una o varias tablas f&iacute;sicas y aparece como una ventana personalizada para el usuario, se la conoce por el nombre de:";
 choices[37]= new Array();
 choices[37][0] = "Subesquema de grupo";
 choices[37][1] = "Vista";
 choices[37][2] = "Apuntador de &iacute;ndices";
 choices[37][3] = "Modelo f&iacute;sico";
 answers[37] = 1;
 units[37] = ['60'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2575. ";
 preguntaids[37] = 2575


//  Id pregunta: 5443 Año de creación de pregunta: 2007
 questions[38]= "39)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "NO COMMIT.";
 choices[38][1] = "ROLLBACK";
 choices[38][2] = "END TRANSACTION.";
 choices[38][3] = "BACK TRANSACTION.";
 answers[38] = 1;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5443. ";
 preguntaids[38] = 5443


//  Id pregunta: 2772 Año de creación de pregunta: 2002
 questions[39]= "40)  El modelo de referencia ANSI para SGBD, en cuanto a la definici&oacute;n de los datos:";
 choices[39]= new Array();
 choices[39][0] = "Crea cuatro tipos de esquemas: conceptual, l&oacute;gico, f&iacute;sico, de implementaci&oacute;n";
 choices[39][1] = "Establece la estrecha dependencia que debe existir entre los datos y las aplicaciones";
 choices[39][2] = "Define cinco niveles de interpretaci&oacute;n de los mismos, seg&uacute;n cinco aspectos: visualizaci&oacute;n, cardinalidad, muestreo, distancia y flexibilidad";
 choices[39][3] = "Establece los Metadatos (datos sobre los datos) que se almacenan en el Diccionario de Datos";
 answers[39] = 3;
 units[39] = ['60'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2772. ";
 preguntaids[39] = 2772


//  Id pregunta: 3296 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;Cu&aacute;l no es una funci&oacute;n del Administrador de Base de Datos?";
 choices[40]= new Array();
 choices[40][0] = "Dise&ntilde;o de la base de datos";
 choices[40][1] = "Supervisi&oacute;n del funcionamiento de la base de datos";
 choices[40][2] = "Correci&oacute;n de errores de entrada de datos";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = 2;
 units[40] = ['60'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3296. ";
 preguntaids[40] = 3296


//  Id pregunta: 3643 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[41]= new Array();
 choices[41][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[41][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[41][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[41][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[41] = 0;
 units[41] = ['60'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3643. ";
 preguntaids[41] = 3643


//  Id pregunta: 3382 Año de creación de pregunta: 2006
 questions[42]= "43)  Cu&aacute;l de las siguientes &oacute;rdenes, define el Lenguaje de Manipulaci&oacute;n de Datos (DML) de un SGBD";
 choices[42]= new Array();
 choices[42][0] = "Create table";
 choices[42][1] = "Revoke";
 choices[42][2] = "Insert";
 choices[42][3] = "Todas las anteriores";
 answers[42] = 2;
 units[42] = ['60'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3382. ";
 preguntaids[42] = 3382


//  Id pregunta: 2771 Año de creación de pregunta: 2002
 questions[43]= "44)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[43][1] = "Interfaz lenguaje de datos de usuario";
 choices[43][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[43][3] = "Interfaz lenguaje de datos interno";
 answers[43] = 2;
 units[43] = ['60'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2771. ";
 preguntaids[43] = 2771


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[44]= "45)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[44]= new Array();
 choices[44][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[44][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[44][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[44][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[44] = 0;
 units[44] = ['60'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 687. Junta de Extremadura A1 2015";
 preguntaids[44] = 687


//  Id pregunta: 3584 Año de creación de pregunta: 2004
 questions[45]= "46)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Superclave";
 choices[45][1] = "Clave principal";
 choices[45][2] = "Tupla m&uacute;ltiple";
 choices[45][3] = "Clave ajena";
 answers[45] = 3;
 units[45] = ['60'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3584. Pregunta Junta Andalucia - A";
 preguntaids[45] = 3584


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[46]= "47)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[46]= new Array();
 choices[46][0] = "Intersecci&oacute;n.";
 choices[46][1] = "Uni&oacute;n.";
 choices[46][2] = "Restricci&oacute;n.";
 choices[46][3] = "Diferencia.";
 answers[46] = 0;
 units[46] = ['60'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 685. Junta de Extremadura A1 2015";
 preguntaids[46] = 685


//  Id pregunta: 1060 Año de creación de pregunta: 2016
 questions[47]= "48)  Seleccione la frase correcta acerca de los sistemas gestores de bases de datos y los modelos de datos que emplean.";
 choices[47]= new Array();
 choices[47][0] = "Independientemente del modelo de datos, la capacidad de un SGBD para manejar accesos concurrentes es imprescindible para la &quot;Consistencia&quot; del &quot;ACID test&quot;.";
 choices[47][1] = "El modelo de datos en red permite recuperar bloques de varios registros mediante el uso de punteros.";
 choices[47][2] = "El modelo jer&aacute;rquico es una variante de los modelos en red que elimina las relaciones N:M.";
 choices[47][3] = "El modelo relacional incorpora restricciones inherentes al mismo que se denominan restricciones sem&aacute;nticas.";
 answers[47] = 2;
 units[47] = ['60'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1060. ";
 preguntaids[47] = 1060


//  Id pregunta: 1511 Año de creación de pregunta: 2016
 questions[48]= "49)  De entre los siguientes, &iquest;Cu&aacute;l es el nivel m&aacute;s bajo de aislamiento?";
 choices[48]= new Array();
 choices[48][0] = "Read Commited (lectura confirmada).";
 choices[48][1] = "Repeatable Read (lectura repetible).";
 choices[48][2] = "Serializable.";
 choices[48][3] = "Read Uncommited (lectura no confirmada).";
 answers[48] = 3;
 units[48] = ['60'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1511. ";
 preguntaids[48] = 1511


//  Id pregunta: 2837 Año de creación de pregunta: 2002
 questions[49]= "50)  En las bases de datos orientadas a objeto, para cuantificar el movimiento existente entre la entrada a las bases de datos y la salida se emplean dos sistemas que se conocen como:";
 choices[49]= new Array();
 choices[49][0] = "Creatividad y destructividad de los objetos";
 choices[49][1] = "Tasa e incremento de variaci&oacute;n de los objetos";
 choices[49][2] = "Intervalo y tiempo de vida de los objetos";
 choices[49][3] = "Din&aacute;mica fuerte y din&aacute;mica d&eacute;bil";
 answers[49] = 3;
 units[49] = ['60'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2837. ";
 preguntaids[49] = 2837


//  Id pregunta: 2797 Año de creación de pregunta: 2002
 questions[50]= "51)  Elija el tipo de relaciones entre registros que el modelo en red es incapaz de mostrar:";
 choices[50]= new Array();
 choices[50][0] = "1 a 1";
 choices[50][1] = "1 a N";
 choices[50][2] = "N a M";
 choices[50][3] = "Es capaz de mostrar todas";
 answers[50] = 3;
 units[50] = ['60'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2797. ";
 preguntaids[50] = 2797


//  Id pregunta: 1553 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; es SQLMetal?";
 choices[51]= new Array();
 choices[51][0] = "Es un lenguaje declarativo de acceso a bases de datos relacionales.";
 choices[51][1] = "Es una herramienta de generaci&oacute;n de c&oacute;digo de LINQ.";
 choices[51][2] = "Es un conjunto de extensiones a ANSI SQL.";
 choices[51][3] = "Es un est&aacute;ndar de acceso a bases de datos.";
 answers[51] = 1;
 units[51] = ['60'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1553. ";
 preguntaids[51] = 1553


//  Id pregunta: 2814 Año de creación de pregunta: 2002
 questions[52]= "53)  En el modelo de referencia ANSI/SPARC, el nivel conceptual:";
 choices[52]= new Array();
 choices[52][0] = "Se obtiene conceptualizando los datos f&iacute;sicos";
 choices[52][1] = "Es una representaci&oacute;n abstracta de la base de datos, com&uacute;n para todos los usuarios";
 choices[52][2] = "Conceptualiza y abstrae las vistas del nivel externo";
 choices[52][3] = "Es una representaci&oacute;n abstracta de la base de datos, diferente para cada usuario";
 answers[52] = 1;
 units[52] = ['60'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2814. ";
 preguntaids[52] = 2814


//  Id pregunta: 2507 Año de creación de pregunta: 2004
 questions[53]= "54)  En una base de datos las vistas";
 choices[53]= new Array();
 choices[53][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[53][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[53][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[53][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[53] = 1;
 units[53] = ['60'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2507. Examen TIC MAP B 2004";
 preguntaids[53] = 2507


//  Id pregunta: 2773 Año de creación de pregunta: 2002
 questions[54]= "55)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[54]= new Array();
 choices[54][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[54][1] = "Los metadatos no forman parte del diccionario";
 choices[54][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[54][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[54] = 0;
 units[54] = ['60'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2773. ";
 preguntaids[54] = 2773


//  Id pregunta: 2677 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Qu&eacute; es JDBC?:";
 choices[55]= new Array();
 choices[55][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[55][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[55][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[55][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[55] = 1;
 units[55] = ['60', '61', '64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2677. ";
 preguntaids[55] = 2677


//  Id pregunta: 2808 Año de creación de pregunta: 2002
 questions[56]= "57)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[56]= new Array();
 choices[56][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[56][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[56][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[56][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[56] = 3;
 units[56] = ['60'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2808. ";
 preguntaids[56] = 2808


//  Id pregunta: 1353 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[57]= new Array();
 choices[57][0] = "SELECT";
 choices[57][1] = "DRILL";
 choices[57][2] = "CUBE";
 choices[57][3] = "MEMBER";
 answers[57] = 1;
 units[57] = ['60'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1353. ";
 preguntaids[57] = 1353


//  Id pregunta: 2511 Año de creación de pregunta: 2004
 questions[58]= "59)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[58]= new Array();
 choices[58][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[58][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[58][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[58][3] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[58] = 2;
 units[58] = ['60'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2511. Examen TIC MAP B 2004";
 preguntaids[58] = 2511


//  Id pregunta: 2674 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Qu&eacute; es el repositorio de Oracle Designer?:";
 choices[59]= new Array();
 choices[59][0] = "Un objeto para obtener listados";
 choices[59][1] = "Una base de datos donde se guardan las estructuras que se van creando";
 choices[59][2] = "Un formulario especial de licencias del Designer";
 choices[59][3] = "Una base de datos que almacena solo los usuarios con acceso al Designer";
 answers[59] = 1;
 units[59] = ['60'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2674. ";
 preguntaids[59] = 2674


//  Id pregunta: 2506 Año de creación de pregunta: 2004
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes conceptos se clasifica dentro de la tipolog&iacute;a de &quot;Estructuras de datos no lineales&quot;?";
 choices[60]= new Array();
 choices[60][0] = "Pilas";
 choices[60][1] = "Listas";
 choices[60][2] = "Colas";
 choices[60][3] = "&Aacute;rboles";
 answers[60] = 3;
 units[60] = ['60'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2506. Examen TIC MAP B 2004";
 preguntaids[60] = 2506


//  Id pregunta: 2789 Año de creación de pregunta: 2002
 questions[61]= "62)  El SGBD permite la definici&oacute;n de la Base de Datos a tres niveles de abstracci&oacute;n: l&oacute;gico, f&iacute;sico y externo En el nivel l&oacute;gico:";
 choices[61]= new Array();
 choices[61][0] = "Se da una definici&oacute;n de las estructuras de datos que constituyen la base de datos";
 choices[61][1] = "Se elige una implementaci&oacute;n de cada una de las estructuras de datos";
 choices[61][2] = "Se definen vistas parciales de la base de datos para distintos grupos de usuarios";
 choices[61][3] = "Ninguna es cierta";
 answers[61] = 0;
 units[61] = ['60'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2789. ";
 preguntaids[61] = 2789


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[62]= "63)  En relaci&oacute;n con el dise&ntilde;o f&iacute;sico de base de datos, se&ntilde;ale la repsuesta INCORRECTA:";
 choices[62]= new Array();
 choices[62][0] = "Si el fichero se va a actualizar mucho (inserci&oacute;n/eliminaci&oacute;n) debemos reducir al m&iacute;nimo el n&uacute;mero de &iacute;ndices del fichero.";
 choices[62][1] = "Una estructura com&uacute;n de &iacute;ndices en muchos sistemas gestores de BD son los B-Trees.";
 choices[62][2] = "Debemos evitar t&eacute;cnicas de dispersi&oacute;n (hashing) sobre columnas poco actualizadas.";
 choices[62][3] = "Para cada atributo (no de ordenaci&oacute;n) que se use mucho en operaciones de selecci&oacute;n o reuni&oacute;n, debemos crear un &iacute;ndice SECUNDARIO.";
 answers[62] = 2;
 units[62] = ['60'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 683. AGE A2 2015";
 preguntaids[62] = 683


//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[63]= "64)  El Diccionario de Datos es utilizado por:";
 choices[63]= new Array();
 choices[63][0] = "El administrador de la base de datos y los programadores";
 choices[63][1] = "Los analistas y los programadores";
 choices[63][2] = "Los usuarios finales de las aplicaciones";
 choices[63][3] = "Los usuarios remotos";
 answers[63] = 0;
 units[63] = ['60', '85', '86'];
 blocks[63] = ['B2', 'B3'];
 comments[63] = "Id Pregunta: 3777. ";
 preguntaids[63] = 3777


//  Id pregunta: 5907 Año de creación de pregunta: 2007
 questions[64]= "65)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las afirmaciones NO es cierta?";
 choices[64]= new Array();
 choices[64][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, puede existir un valor de K en R1 cuyo valor sea igual al valor de A";
 choices[64][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K";
 choices[64][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo";
 choices[64][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo";
 answers[64] = 1;
 units[64] = ['60'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5907. ";
 preguntaids[64] = 5907


//  Id pregunta: 1730 Año de creación de pregunta: 2016
 questions[65]= "66)  En un Sistema de Gesti&oacute;n de Base de Datos (SGBD) debe garantizarse la total satisfacci&oacute;n la CONSISTENCIA, es decir que:";
 choices[65]= new Array();
 choices[65][0] = "Varios accesos simult&aacute;neos a cada Base de Datos sin conflictos.";
 choices[65][1] = "En todo momento, los valores de los datos no presenten contradicciones.";
 choices[65][2] = "Los valores de los datos sean aut&eacute;nticos, conforme a las reglas sem&aacute;nticas establecidas por dise&ntilde;o.";
 choices[65][3] = "En caso de fallo (hardware, alimentaci&oacute;n, etc) la Base de Datos vuelva a un estado &iacute;ntegro anterior al fallo.";
 answers[65] = 1;
 units[65] = ['60'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1730. ";
 preguntaids[65] = 1730


//  Id pregunta: 2597 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[66]= new Array();
 choices[66][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[66][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[66][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[66][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[66] = 0;
 units[66] = ['60'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2597. ";
 preguntaids[66] = 2597


//  Id pregunta: 1561 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes NO es un framework que permita el acceso y manipulaci&oacute;n de datos en una base de datos relacional?";
 choices[67]= new Array();
 choices[67][0] = "Apache Torque.";
 choices[67][1] = "MyBatis.";
 choices[67][2] = "Sun Mapper.";
 choices[67][3] = "NHibernate.";
 answers[67] = 2;
 units[67] = ['60'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1561. ";
 preguntaids[67] = 1561


//  Id pregunta: 3031 Año de creación de pregunta: 2002
 questions[68]= "69)  Se puede decir que una base de datos es:";
 choices[68]= new Array();
 choices[68][0] = "Un elemento f&iacute;sico (hardware)";
 choices[68][1] = "Un dispositivo de almacenamiento";
 choices[68][2] = "Un conjunto de datos interrelacionados";
 choices[68][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[68] = 2;
 units[68] = ['60'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3031. ";
 preguntaids[68] = 3031


//  Id pregunta: 3825 Año de creación de pregunta: 2002
 questions[69]= "70)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[69]= new Array();
 choices[69][0] = "Uno-a-muchos";
 choices[69][1] = "Binaria";
 choices[69][2] = "Muchos-a-muchos";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 0;
 units[69] = ['60', '61', '85'];
 blocks[69] = ['B2', 'B3'];
 comments[69] = "Id Pregunta: 3825. ";
 preguntaids[69] = 3825


//  Id pregunta: 1333 Año de creación de pregunta: 2016
 questions[70]= "71)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[70]= new Array();
 choices[70][0] = "Undo.";
 choices[70][1] = "Rollback.";
 choices[70][2] = "Two Phase Commit.";
 choices[70][3] = "Commit.";
 answers[70] = 1;
 units[70] = ['60'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1333. ";
 preguntaids[70] = 1333


//  Id pregunta: 3003 Año de creación de pregunta: 2002
 questions[71]= "72)  Para solucionar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos, utilizaremos la t&eacute;cnica denominada de:";
 choices[71]= new Array();
 choices[71][0] = "Bloqueo";
 choices[71][1] = "Rollback";
 choices[71][2] = "Interbloqueo";
 choices[71][3] = "Inter-Roll";
 answers[71] = 0;
 units[71] = ['60'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3003. ";
 preguntaids[71] = 3003


//  Id pregunta: 3252 Año de creación de pregunta: 2003
 questions[72]= "73)  En la arquitectura de tres niveles para el dise&ntilde;o de bases de datos establecida por el ANSI, &iquest;qu&eacute; nivel se ocupa de las reglas de integridad, claves e &iacute;ndices?";
 choices[72]= new Array();
 choices[72][0] = "Nivel f&iacute;sico.";
 choices[72][1] = "Nivel conceptual.";
 choices[72][2] = "Nivel Externo.";
 choices[72][3] = "Ninguno de los tres niveles se ocupa de las reglas de integridad, claves e &iacute;ndices, lo hace el administrador de la base de datos.";
 answers[72] = 0;
 units[72] = ['60'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3252. ";
 preguntaids[72] = 3252


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[73]= "74)  En un modelo de datos jer&aacute;rquico:";
 choices[73]= new Array();
 choices[73][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[73][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[73][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[73][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[73] = 1;
 units[73] = ['60'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[73] = 3261


//  Id pregunta: 2497 Año de creación de pregunta: 2004
 questions[74]= "75)  En relaci&oacute;n a la definici&oacute;n y caracter&iacute;sticas de una base de datos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[74]= new Array();
 choices[74][0] = "En una base de datos se admite la redundancia controlada";
 choices[74][1] = "En una base de datos no debe darse la redundancia l&oacute;gica";
 choices[74][2] = "En una base de datos puede existir la redundancia f&iacute;sica";
 choices[74][3] = "En una base de datos puede admitirse la redundancia l&oacute;gica pero no f&iacute;sica";
 answers[74] = 3;
 units[74] = ['60'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2497. Examen TIC MAP B 2004";
 preguntaids[74] = 2497


