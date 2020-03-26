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
//  Id pregunta: 3025 Año de creación de pregunta: 2002
 questions[0]= "1)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[0]= new Array();
 choices[0][0] = "algoritmo basado en clave &uacute;nica";
 choices[0][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[0][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = 1;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3025. ";
 preguntaids[0] = 3025


//  Id pregunta: 3062 Año de creación de pregunta: 2002
 questions[1]= "2)  Si un ordenador tiene un tiempo de acceso a memoria de 60 nanosegundos, una longitud de palabra de 16 bits, memoria ECC y utiliza 24 bits para direccionamiento, se puede decir que la memoria m&aacute;xima que puede direccionar es de:";
 choices[1]= new Array();
 choices[1][0] = "8 Megabytes";
 choices[1][1] = "16 Megabytes";
 choices[1][2] = "32 Megabytes";
 choices[1][3] = "64 Megabytes";
 answers[1] = 2;
 units[1] = ['52'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3062. ";
 preguntaids[1] = 3062


//  Id pregunta: 3018 Año de creación de pregunta: 2002
 questions[2]= "3)  RPC's o Remote Procedure Calls est&aacute;n asocadas con:";
 choices[2]= new Array();
 choices[2][0] = "Redes y Sistemas distribuidos";
 choices[2][1] = "Modelo cliente-servidor";
 choices[2][2] = "Sesiones orientadas a no conexi&oacute;n";
 choices[2][3] = "Todas las respuestas anteriores son correctas";
 answers[2] = 3;
 units[2] = ['55'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3018. ";
 preguntaids[2] = 3018


//  Id pregunta: 3061 Año de creación de pregunta: 2002
 questions[3]= "4)  Si un disco tiene 7 pistas por cilindro y la capacidad  de cada  pista es de 2000 caracteres, para copiar una cinta que contiene 300 registros de 100 caracteres cada uno, &iquest;cu&aacute;ntos cilindros har&iacute;an falta?:";
 choices[3]= new Array();
 choices[3][0] = "3 cilindros";
 choices[3][1] = "2 cilindros";
 choices[3][2] = "4 cilindros";
 choices[3][3] = "5 cilindros";
 answers[3] = 0;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3061. ";
 preguntaids[3] = 3061


//  Id pregunta: 3058 Año de creación de pregunta: 2002
 questions[4]= "5)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[4]= new Array();
 choices[4][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[4][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[4][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[4][3] = "FAMILIAR es una entidad dependiente";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3058. ";
 preguntaids[4] = 3058


//  Id pregunta: 3006 Año de creación de pregunta: 2002
 questions[5]= "6)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[5]= new Array();
 choices[5][0] = "Controles Java";
 choices[5][1] = "Applets";
 choices[5][2] = "Servlets";
 choices[5][3] = "Aplicaciones CGI";
 answers[5] = 1;
 units[5] = ['64', '65'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3006. ";
 preguntaids[5] = 3006


//  Id pregunta: 3034 Año de creación de pregunta: 2002
 questions[6]= "7)  Seg&uacute;n el est&aacute;ndar SQL, una transacci&oacute;n es una secuencia de operaciones que:";
 choices[6]= new Array();
 choices[6][0] = "Se inicia con una sentencia BEGIN TRANSACTION y termina con una sentencia END TRANSACTION";
 choices[6][1] = "Si se termina con un sentencia ROLLBACK, todos los cambios realizados por las diferentes transacciones desde el inicio de la sesi&oacute;n son cancelados";
 choices[6][2] = "Puede iniciarse con la ejecuci&oacute;n de una sentencia DML y se finaliza con una sentencia COMMIT o ROLLBACK";
 choices[6][3] = "Si no finaliza con una sentencia COMMIT, el sistema debe devolver un mensaje de error";
 answers[6] = 2;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3034. ";
 preguntaids[6] = 3034


//  Id pregunta: 3060 Año de creación de pregunta: 2002
 questions[7]= "8)  Si se comparan los diferentes sistemas de almacenamiento secundario:";
 choices[7]= new Array();
 choices[7][0] = "La velocidad de transferencia es del mismo orden en una unidad de cinta DAT que en una unidad de disco magn&eacute;tico";
 choices[7][1] = "La capacidad de almacenamiento de una cinta de cartucho normal de 0,25&quot; es similar a la de un CD-ROM de 5&quot; 1/4";
 choices[7][2] = "Los discos WORM y los magneto-opticos ofrecen la posibilidad de borrar y reescribir informaci&oacute;n";
 choices[7][3] = "En las unidades de cinta no se puede intercalar informaci&oacute;n adicional, por el contrario, para hacerlo habr&iacute;a que regrabar todo el resto de la cinta";
 answers[7] = 3;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3060. ";
 preguntaids[7] = 3060


//  Id pregunta: 3033 Año de creación de pregunta: 2002
 questions[8]= "9)  Sean dos transacciones A y B:  1&ordm;) A accede al registro 1. 2&ordm;) B accede al registro 2. 3&ordm;) A pide el registro 2, pero debe esperar que B lo libere. 4&ordm;) B pide el registro 1, pero debe esperar que A lo libere.  Entonces:";
 choices[8]= new Array();
 choices[8][0] = "Se produjo alg&uacute;n fallo en el dise&ntilde;o l&oacute;gico de datos, pues &eacute;sto no debe suceder";
 choices[8][1] = "Estamos ante un caso de dise&ntilde;o defectuoso de los procesos A y B";
 choices[8][2] = "Se ha producido una situaci&oacute;n de 'deadlock'";
 choices[8][3] = "El transaccional desbloquear&aacute; los registros bloqueados y permitir&aacute; que las transacciones continuen sin m&aacute;s problemas";
 answers[8] = 2;
 units[8] = ['61'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3033. ";
 preguntaids[8] = 3033


//  Id pregunta: 3039 Año de creación de pregunta: 2002
 questions[9]= "10)  Se&ntilde;ale el enunciado falso:";
 choices[9]= new Array();
 choices[9][0] = "Los ordenadores de primera generaci&oacute;n eran dif&iacute;ciles de programar porque no exist&iacute;an los lenguajes simb&oacute;licos";
 choices[9][1] = "Los ordenadores de segunda generaci&oacute;n quedaron limitados al campo cient&iacute;fico y de la defensa";
 choices[9][2] = "Como consecuencia de la aparici&oacute;n de los transistores disminuyeron las necesidades de refrigeraci&oacute;n";
 choices[9][3] = "El ordenador ENIAC estaba basado en tecnolog&iacute;as de v&aacute;lvulas de vac&iacute;o";
 answers[9] = 1;
 units[9] = ['55'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3039. ";
 preguntaids[9] = 3039


//  Id pregunta: 3035 Año de creación de pregunta: 2002
 questions[10]= "11)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[10]= new Array();
 choices[10][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[10][1] = "Es la estructura de un sistema con multiprocesador";
 choices[10][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[10][3] = "No se corresponde con nada de lo anterior";
 answers[10] = 2;
 units[10] = ['49'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3035. ";
 preguntaids[10] = 3035


//  Id pregunta: 3023 Año de creación de pregunta: 2002
 questions[11]= "12)  SAN:";
 choices[11]= new Array();
 choices[11][0] = "Es un fabricante americano de hardware y software";
 choices[11][1] = "Es una red de fibra &oacute;ptica dedicada para el almacenamiento";
 choices[11][2] = "Es una red de &aacute;rea local muy peque&ntilde;a (Simple Area Network)";
 choices[11][3] = "Corresponde con la tecnolog&iacute;a Software Adaptative Networking que permite que los nodos de conmutaci&oacute;n de las redes tengan procesamiento inteligente liberando a los clientes de incompatibilidades de protocolos y de gran cantidad de procesamiento";
 answers[11] = 1;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3023. ";
 preguntaids[11] = 3023


//  Id pregunta: 3057 Año de creación de pregunta: 2002
 questions[12]= "13)  Si construimos un fichero, donde la direcci&oacute;n real de almacenamiento de cada registro se deduce directamente de su indicativo o clave a trav&eacute;s de un algoritmo, estamos hablando de un fichero con organizaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Indexada";
 choices[12][1] = "Encadenada";
 choices[12][2] = "Aleatoria";
 choices[12][3] = "Invertida";
 answers[12] = 2;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3057. ";
 preguntaids[12] = 3057


//  Id pregunta: 3016 Año de creación de pregunta: 2002
 questions[13]= "14)  Respecto a los DTDs es falso que:";
 choices[13]= new Array();
 choices[13][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[13][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[13][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[13][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[13] = 1;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3016. ";
 preguntaids[13] = 3016


//  Id pregunta: 3013 Año de creación de pregunta: 2002
 questions[14]= "15)  Refiri&eacute;ndonos a los Sistemas de Informaci&oacute;n Geogr&aacute;fica (SIG), podemos afirmar que:";
 choices[14]= new Array();
 choices[14][0] = "Si la informaci&oacute;n est&aacute; almacenada seg&uacute;n el modelo de datos vectorial, las representaciones que se obtienen son menos precisas y de peor calidad que las del modelo r&aacute;ster.";
 choices[14][1] = "Los procedimientos de captura de la informaci&oacute;n gr&aacute;fica son diferentes, seg&uacute;n se trate de entidades planim&eacute;tricas o de entidades topogr&aacute;ficas.";
 choices[14][2] = "Si se va a utilizar en aplicaciones en las que sea esencial el empleo de objetos geogr&aacute;ficos, el modelo de datos r&aacute;ster es el m&aacute;s adecuado.";
 choices[14][3] = "Los atributos alfanum&eacute;ricos, que proporcionan informaci&oacute;n sobre las caracter&iacute;sticas de las entidades gr&aacute;ficas, se almacenan en formato r&aacute;ster.";
 answers[14] = 1;
 units[14] = ['71'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3013. ";
 preguntaids[14] = 3013


//  Id pregunta: 2996 Año de creación de pregunta: 2002
 questions[15]= "16)  P2P:";
 choices[15]= new Array();
 choices[15][0] = "Puede usarse para transferir archivos";
 choices[15][1] = "Simboliza un tipo de protocolos o sistemas que hacen uso de todos los recursos presentes en una red entre iguales (peers), haciendola parecer al usuario como un &uacute;nico sistema.";
 choices[15][2] = "Puede usarse para computaci&oacute;n distribuida";
 choices[15][3] = "Todas son ciertas";
 answers[15] = 3;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2996. ";
 preguntaids[15] = 2996


//  Id pregunta: 3054 Año de creación de pregunta: 2005
 questions[16]= "17)  &iquest;Qu&eacute; se conoce por SHA-2?:";
 choices[16]= new Array();
 choices[16][0] = "Una funci&oacute;n de compresi&oacute;n";
 choices[16][1] = "Un mecanismo de intercambio de claves";
 choices[16][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[16][3] = "Un conjunto de funciones resumen";
 answers[16] = 3;
 units[16] = ['76'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3054. ";
 preguntaids[16] = 3054


//  Id pregunta: 3007 Año de creación de pregunta: 2002
 questions[17]= "18)  PGP son una siglas muy conocidad dentro del mundo del cifrado y de la seguridad. &iquest;A qu&eacute; corresponden?:";
 choices[17]= new Array();
 choices[17][0] = "Pretty Good Privacy";
 choices[17][1] = "Personal General Privacity";
 choices[17][2] = "Privacity Generator Program";
 choices[17][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[17] = 0;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3007. ";
 preguntaids[17] = 3007


//  Id pregunta: 2991 Año de creación de pregunta: 2002
 questions[18]= "19)  MPI:";
 choices[18]= new Array();
 choices[18][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[18][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[18][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[18][3] = "Todas son falsas";
 answers[18] = 0;
 units[18] = ['55'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2991. ";
 preguntaids[18] = 2991


//  Id pregunta: 3055 Año de creación de pregunta: 2002
 questions[19]= "20)  Si a un sistema experto se le vac&iacute;a su base de conocimientos dejando intactos el resto de sus componentes (base de reglas y motor de inferencia) para que se pueda aplicar a temas similares al que dio lugar al desarrollo se denomina  sistema:";
 choices[19]= new Array();
 choices[19][0] = "Kernel o n&uacute;cleo";
 choices[19][1] = "Concha o shell";
 choices[19][2] = "Sistema inferente";
 choices[19][3] = "Sistema fuente";
 answers[19] = 1;
 units[19] = ['68'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3055. ";
 preguntaids[19] = 3055


//  Id pregunta: 3048 Año de creación de pregunta: 2002
 questions[20]= "21)  Se&ntilde;ale la respuesta falsa. El sistema de ficheros en Unix:";
 choices[20]= new Array();
 choices[20][0] = "Est&aacute; formado por i-nodos";
 choices[20][1] = "Se utiliza para acceder a los perif&eacute;ricos";
 choices[20][2] = "Tiene una estructura no basada en jerarqu&iacute;as";
 choices[20][3] = "Est&aacute; basado en listas enlazadas, con varios niveles de indireccion";
 answers[20] = 2;
 units[20] = ['57'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3048. ";
 preguntaids[20] = 3048


//  Id pregunta: 3038 Año de creación de pregunta: 2002
 questions[21]= "22)  Se&ntilde;alar la sentencia correcta respecto de la ingenier&iacute;a del conocimiento:";
 choices[21]= new Array();
 choices[21][0] = "Las reglas de producci&oacute;n y las reglas deductivas son maneras de representaci&oacute;n param&eacute;trica del conocimiento";
 choices[21][1] = "Ejemplos de modelos de representaci&oacute;n del conocimiento en forma param&eacute;trica son el perceptr&oacute;n y las redes neuronales";
 choices[21][2] = "Uno de los algoritmos m&aacute;s utilizados en el proceso de entrenamiento viene dado por el filtrado de Waltz";
 choices[21][3] = "El razonamiento no mon&oacute;tono es un modelo de razonamiento cuyo objetivo es asignar medidas o factores de certeza a un conjunto de proposiciones intermedias a partir de las asignadas a las proposiciones iniciales";
 answers[21] = 1;
 units[21] = ['68'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3038. ";
 preguntaids[21] = 3038


//  Id pregunta: 3066 Año de creación de pregunta: 2002
 questions[22]= "23)  Todas las respuestas son nombres de compa&ntilde;&iacute;as que han desarrollado sistemas operativos de red, excepto una. &iquest;Cu&aacute;l?:";
 choices[22]= new Array();
 choices[22][0] = "Alcatel";
 choices[22][1] = "Microsoft";
 choices[22][2] = "Novell";
 choices[22][3] = "Banyan";
 answers[22] = 0;
 units[22] = ['56'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3066. ";
 preguntaids[22] = 3066


//  Id pregunta: 3011 Año de creación de pregunta: 2002
 questions[23]= "24)  Referente al lenguaje m&aacute;quina de un ordenador, se puede afirmar que:";
 choices[23]= new Array();
 choices[23][0] = "El lenguaje m&aacute;quina es independiente de la CPU del ordenador";
 choices[23][1] = "El lenguaje m&aacute;quina, los datos se proporcionan mediante las direcciones de memoria donde &eacute;stos se encuentran";
 choices[23][2] = "Las instrucciones en lenguaje m&aacute;quina no tienen generalmente formato r&iacute;gido en cuanto a la posici&oacute;n de los distintos campos que las configuran";
 choices[23][3] = "El lenguaje m&aacute;quina era algo propio de los ordenadores de &eacute;pocas pasadas, hoy d&iacute;a la mayoria ejecuta directamente c&oacute;digo C";
 answers[23] = 1;
 units[23] = ['52'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3011. ";
 preguntaids[23] = 3011


//  Id pregunta: 3004 Año de creación de pregunta: 2002
 questions[24]= "25)  Para trabajar con una vista que contenga tuplas de varias tablas se utilizar&aacute; la sentencia SQL:";
 choices[24]= new Array();
 choices[24][0] = "CREATE TABLE";
 choices[24][1] = "CREATE VIEW";
 choices[24][2] = "ALTER TABLE";
 choices[24][3] = "ALTER VIEW";
 answers[24] = 1;
 units[24] = ['61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3004. ";
 preguntaids[24] = 3004


//  Id pregunta: 3042 Año de creación de pregunta: 2002
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los algoritmos de cifrado:";
 choices[25]= new Array();
 choices[25][0] = "Si utilizamos el sistema de cifrado mediante clave p&uacute;blica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N! / 2 x (N - 2)! parejas de claves";
 choices[25][1] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N*(N-1)/2 claves";
 choices[25][2] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de 10 nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer 9 claves, y ser&aacute;n necesarias un total de 45 claves";
 choices[25][3] = "Los algoritmos de cifrado mediante clave sim&eacute;trica DES, RC-2 y RC-4 son p&uacute;blicos.  A partir de un bloque de caracteres &ldquo;en claro&rdquo;, estos algoritmos generan un bloque de caracteres ininteligible (cifrado) mediante un n&uacute;mero de sustituciones y permutaciones";
 answers[25] = 0;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3042. ";
 preguntaids[25] = 3042


//  Id pregunta: 3044 Año de creación de pregunta: 2002
 questions[26]= "27)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[26]= new Array();
 choices[26][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[26][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[26][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[26][3] = "El sistema operativo y las utilidades";
 answers[26] = 0;
 units[26] = ['49', '56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3044. ";
 preguntaids[26] = 3044


//  Id pregunta: 3041 Año de creación de pregunta: 2002
 questions[27]= "28)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[27]= new Array();
 choices[27][0] = "Modelo de descubrimiento.";
 choices[27][1] = "Modelo de verificaci&oacute;n.";
 choices[27][2] = "Modelo predictivo.";
 choices[27][3] = "Modelo de resumen.";
 answers[27] = 1;
 units[27] = ['72', '73'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3041. ";
 preguntaids[27] = 3041


//  Id pregunta: 3059 Año de creación de pregunta: 2002
 questions[28]= "29)  Si hablamos de formas normales en el modelo relacional, una de las siguientes afirmaciones es falsa:";
 choices[28]= new Array();
 choices[28][0] = "Una informaci&oacute;n est&aacute; en primera forma normal si no incluye ning&uacute;n grupo repetitivo";
 choices[28][1] = "La cuarta forma normal elimina dependencias monovaluadas";
 choices[28][2] = "La segunda forma normal, implica, adem&aacute;s de estar en primera forma normal, que en una relaci&oacute;n cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves, y no con partes de &eacute;stas";
 choices[28][3] = "La quinta forma normal elimina dependencias combinacionales";
 answers[28] = 1;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3059. ";
 preguntaids[28] = 3059


//  Id pregunta: 3000 Año de creación de pregunta: 2002
 questions[29]= "30)  Para la comunicaci&oacute;n web segura, la norma de seguridad independiente del protocolo de aplicaci&oacute;n y, por tanto, v&aacute;lida para http, ftp, telnet&hellip; es la siguiente:";
 choices[29]= new Array();
 choices[29][0] = "DNS";
 choices[29][1] = "SSL";
 choices[29][2] = "XAdES-A";
 choices[29][3] = "WML";
 answers[29] = 1;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3000. ";
 preguntaids[29] = 3000


//  Id pregunta: 3037 Año de creación de pregunta: 2009
 questions[30]= "31)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[30]= new Array();
 choices[30][0] = "Actualizaci&oacute;n.";
 choices[30][1] = "Agregaci&oacute;n.";
 choices[30][2] = "Dril-down.";
 choices[30][3] = "Slice-Dice.";
 answers[30] = 0;
 units[30] = ['72', '73'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3037. ";
 preguntaids[30] = 3037


//  Id pregunta: 2999 Año de creación de pregunta: 2002
 questions[31]= "32)  Para especificar localizadores en XML se usa:";
 choices[31]= new Array();
 choices[31][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[31][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[31][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[31][3] = "ninguno de los anteriores";
 answers[31] = 2;
 units[31] = ['74'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2999. ";
 preguntaids[31] = 2999


//  Id pregunta: 3032 Año de creación de pregunta: 2002
 questions[32]= "33)  Se puede entender por 'driver':";
 choices[32]= new Array();
 choices[32][0] = "Un tipo especial de programa supervisor";
 choices[32][1] = "Un programa encargado de permitir el manejo de un determinado perif&eacute;rico por parte de una unidad central";
 choices[32][2] = "Un lector/grabador de discos &oacute;pticos";
 choices[32][3] = "Un lector/grabador de discos CD-ROM";
 answers[32] = 1;
 units[32] = ['52'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3032. ";
 preguntaids[32] = 3032


//  Id pregunta: 3014 Año de creación de pregunta: 2002
 questions[33]= "34)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[33]= new Array();
 choices[33][0] = "Windows no puede ejecutarse bajo Linux";
 choices[33][1] = "Linux no puede ejecutarse bajo Windows";
 choices[33][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[33][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[33] = 3;
 units[33] = ['57', '49', '56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3014. ";
 preguntaids[33] = 3014


//  Id pregunta: 3001 Año de creación de pregunta: 2002
 questions[34]= "35)  Para la traducci&oacute;n de direcciones virtuales a f&iacute;sicas se utiliza:";
 choices[34]= new Array();
 choices[34][0] = "La paginaci&oacute;n";
 choices[34][1] = "La segmentaci&oacute;n";
 choices[34][2] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[34][3] = "Todas son falsas";
 answers[34] = 2;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3001. ";
 preguntaids[34] = 3001


//  Id pregunta: 3045 Año de creación de pregunta: 2002
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[35]= new Array();
 choices[35][0] = "El RISC tiene m&aacute;s registros";
 choices[35][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[35][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[35][3] = "Todas las respuestas anteriores son ciertas";
 answers[35] = 3;
 units[35] = ['50', '51'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3045. ";
 preguntaids[35] = 3045


//  Id pregunta: 3053 Año de creación de pregunta: 2002
 questions[36]= "37)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[36]= new Array();
 choices[36][0] = "Res&uacute;men";
 choices[36][1] = "Bloques";
 choices[36][2] = "Flujos";
 choices[36][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[36] = 0;
 units[36] = ['76'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3053. ";
 preguntaids[36] = 3053


//  Id pregunta: 3052 Año de creación de pregunta: 2002
 questions[37]= "38)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[37]= new Array();
 choices[37][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[37][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[37][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[37][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[37] = 2;
 units[37] = ['67'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3052. ";
 preguntaids[37] = 3052


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[38]= "39)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[38]= new Array();
 choices[38][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[38][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[38][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[38][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[38] = 2;
 units[38] = ['10', '75'];
 blocks[38] = ['A2', 'B2'];
 comments[38] = "Id Pregunta: 3050. ";
 preguntaids[38] = 3050


//  Id pregunta: 3040 Año de creación de pregunta: 2002
 questions[39]= "40)  Se&ntilde;ale el enunciado falso:";
 choices[39]= new Array();
 choices[39][0] = "Los sistemas transaccionales deben bloquear los registros que vayan a modificar";
 choices[39][1] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado es cuando se actualizan las bases de datos y se suelen liberar los registros intervinientes";
 choices[39][2] = "Todos los aspectos de una transacci&oacute;n deben completarse o el sistema debe actuar como si ninguna se hubiera completado";
 choices[39][3] = "Los efectos de una transacci&oacute;n deben ser visibles por las dem&aacute;s transacciones antes que la transacci&oacute;n se complete";
 answers[39] = 3;
 units[39] = ['61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3040. ";
 preguntaids[39] = 3040


//  Id pregunta: 3030 Año de creación de pregunta: 2002
 questions[40]= "41)  Se puede acceder directamente a la memoria principal del ordenador por varios m&eacute;todos. Entre ellos se encuentra:";
 choices[40]= new Array();
 choices[40][0] = "Bus multiplexado";
 choices[40][1] = "Robo de ciclo";
 choices[40][2] = "Memoria segmentada";
 choices[40][3] = "Accesos aleatorios";
 answers[40] = 1;
 units[40] = ['56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3030. ";
 preguntaids[40] = 3030


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


//  Id pregunta: 3046 Año de creación de pregunta: 2002
 questions[42]= "43)  Se&ntilde;ale la respuesta falsa respecto de Unix:";
 choices[42]= new Array();
 choices[42][0] = "Se cre&oacute; basandose en MULTICS";
 choices[42][1] = "Est&aacute; escrito en lenguaje C";
 choices[42][2] = "Se us&oacute; primero en la NASA";
 choices[42][3] = "Inicialmente era gratuito";
 answers[42] = 2;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3046. ";
 preguntaids[42] = 3046


//  Id pregunta: 3009 Año de creación de pregunta: 2002
 questions[43]= "44)  Por clave ajena se entiende:";
 choices[43]= new Array();
 choices[43][0] = "Un conjunto no vacio de atributos de una relaci&oacute;n";
 choices[43][1] = "Un atributo no principal de una relaci&oacute;n que no tiene valor nulo";
 choices[43][2] = "Un descriptor de una relaci&oacute;n, cuyos valores coinciden con los valores de la clave primaria de otra relaci&oacute;n";
 choices[43][3] = "Es el atributo de una relaci&oacute;n que garantiza la integridad de la entidad";
 answers[43] = 2;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3009. ";
 preguntaids[43] = 3009


//  Id pregunta: 3036 Año de creación de pregunta: 2002
 questions[44]= "45)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[44]= new Array();
 choices[44][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[44][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[44][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[44][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[44] = 0;
 units[44] = ['72'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3036. ";
 preguntaids[44] = 3036


//  Id pregunta: 3051 Año de creación de pregunta: 2002
 questions[45]= "46)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[45]= new Array();
 choices[45][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[45][1] = "Es muy cara de dise&ntilde;ar";
 choices[45][2] = "Es reprogramable f&aacute;cilmente";
 choices[45][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[45] = 2;
 units[45] = ['52'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3051. ";
 preguntaids[45] = 3051


//  Id pregunta: 3063 Año de creación de pregunta: 2002
 questions[46]= "47)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[46]= new Array();
 choices[46][0] = "Primera forma normal";
 choices[46][1] = "Segunda forma normal";
 choices[46][2] = "Tercera forma normal";
 choices[46][3] = "Forma normal de Boyce-Codd";
 answers[46] = 1;
 units[46] = ['61'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3063. ";
 preguntaids[46] = 3063


//  Id pregunta: 3022 Año de creación de pregunta: 2002
 questions[47]= "48)  SAMBA:";
 choices[47]= new Array();
 choices[47][0] = "Implementa los protocolos de los servidores de archivos Windows";
 choices[47][1] = "Permite que un servidor Unix sea controlador de dominio en una red Windows";
 choices[47][2] = "Permite la compartici&oacute;n de las colas de impresi&oacute;n Unix con Windows y viceversa";
 choices[47][3] = "Todas las anteriores respuestas son ciertas";
 answers[47] = 3;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3022. ";
 preguntaids[47] = 3022


//  Id pregunta: 3029 Año de creación de pregunta: 2002
 questions[48]= "49)  Se entiende por 'dispatching ':";
 choices[48]= new Array();
 choices[48][0] = "El mecanismo por el que el sistema operativo decide cu&aacute;l es el siguiente proceso que se va a ejecutar";
 choices[48][1] = "El mecanismo que planifica el uso del procesador entre los diversos programas que se est&aacute;n ejecutando";
 choices[48][2] = "El mecanismo que gestiones las distintas colas de peticiones que existen en un ordenador";
 choices[48][3] = "El mecanismo que determina qu&eacute; procesador debe ejecutar una determinada instrucci&oacute;n";
 answers[48] = 0;
 units[48] = ['56'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3029. ";
 preguntaids[48] = 3029


//  Id pregunta: 3003 Año de creación de pregunta: 2002
 questions[49]= "50)  Para solucionar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos, utilizaremos la t&eacute;cnica denominada de:";
 choices[49]= new Array();
 choices[49][0] = "Bloqueo";
 choices[49][1] = "Rollback";
 choices[49][2] = "Interbloqueo";
 choices[49][3] = "Inter-Roll";
 answers[49] = 0;
 units[49] = ['60'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3003. ";
 preguntaids[49] = 3003


//  Id pregunta: 3026 Año de creación de pregunta: 2002
 questions[50]= "51)  Se denomina firmware a:";
 choices[50]= new Array();
 choices[50][0] = "El software que suele suministrar el fabricante con sus equipos";
 choices[50][1] = "El c&oacute;digo de bajo nivel que es com&uacute;n a todos los ordenadores";
 choices[50][2] = "El componente f&iacute;sico que permite que el ordenador ejecute instrucciones m&aacute;quina";
 choices[50][3] = "Programa empotrado que establece la l&oacute;gica de bajo nivel que controla los circuitos electr&oacute;nicos de un dispositivo.";
 answers[50] = 3;
 units[50] = ['52'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3026. ";
 preguntaids[50] = 3026


//  Id pregunta: 3012 Año de creación de pregunta: 2002
 questions[51]= "52)  Referido a un sistema de disco magn&eacute;tico, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "Todas las pistas de un sector est&aacute;n en el mismo cilindro";
 choices[51][1] = "Un sector est&aacute; constituido por varias pistas";
 choices[51][2] = "Un  cilindro est&aacute; constituido por varias pistas";
 choices[51][3] = "Una pista est&aacute; constituida por varios cilindros";
 answers[51] = 2;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3012. ";
 preguntaids[51] = 3012


//  Id pregunta: 3028 Año de creación de pregunta: 2002
 questions[52]= "53)  Se dispone de un ordenador monoprocesador que permite multiprogramaci&oacute;n, para lo cual es preciso:";
 choices[52]= new Array();
 choices[52][0] = "Utilizar t&eacute;cnicas de multiplexaci&oacute;n en el tiempo";
 choices[52][1] = "Utilizar t&eacute;cnicas de ejecuci&oacute;n de programas en tiempo real";
 choices[52][2] = "Utilizar t&eacute;cnicas de ejecuci&oacute;n en tiempo compartido";
 choices[52][3] = "Fragmentar de forma l&oacute;gica la memoria cach&eacute; en tantas partes ccomo programas en ejecuci&oacute;n tengamos";
 answers[52] = 2;
 units[52] = ['56'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3028. ";
 preguntaids[52] = 3028


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[53]= "54)  Si comparamos SSL y SET:";
 choices[53]= new Array();
 choices[53][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[53][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[53][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[53][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[53] = 0;
 units[53] = ['10', '75'];
 blocks[53] = ['A2', 'B2'];
 comments[53] = "Id Pregunta: 3056. ";
 preguntaids[53] = 3056


//  Id pregunta: 3064 Año de creación de pregunta: 2002
 questions[54]= "55)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[54]= new Array();
 choices[54][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[54][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[54][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[54][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[54] = 1;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3064. ";
 preguntaids[54] = 3064


//  Id pregunta: 3017 Año de creación de pregunta: 2002
 questions[55]= "56)  Respecto al algoritmo RSA:";
 choices[55]= new Array();
 choices[55][0] = "Reduce el problema de la distribuci&oacute;n de claves respecto a los criptosistemas cl&aacute;sicos";
 choices[55][1] = "Pertenece a la categor&iacute;a de criptosistemas sim&eacute;tricos";
 choices[55][2] = "Se basa en la utilizaci&oacute;n de grandes series de n&uacute;meros primos de tama&ntilde;o peque&ntilde;o";
 choices[55][3] = "Se basa en la transposici&oacute;n y sustituci&oacute;n de s&iacute;mbolos a trav&eacute;s de m&uacute;ltiples iteraciones";
 answers[55] = 0;
 units[55] = ['76'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3017. ";
 preguntaids[55] = 3017


//  Id pregunta: 3043 Año de creación de pregunta: 2002
 questions[56]= "57)  Se&ntilde;ale la alternativa que contiene los operadores que, juntos, componen el operador &lsquo;join&rsquo; del &aacute;lgebra relacional:";
 choices[56]= new Array();
 choices[56][0] = "Selecci&oacute;n, proyecci&oacute;n y diferencia";
 choices[56][1] = "Selecci&oacute;n, proyecci&oacute;n y producto cartesiano";
 choices[56][2] = "Proyecci&oacute;n, producto cartesiano y diferencia";
 choices[56][3] = "Proyecci&oacute;n, producto cartesiano y uni&oacute;n";
 answers[56] = 1;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3043. ";
 preguntaids[56] = 3043


//  Id pregunta: 3008 Año de creación de pregunta: 2002
 questions[57]= "58)  Pilar quier enviar un mensaje confidencial a Antonio, en un sistema de clave p&uacute;blica, por lo tanto existen las claves Pilar-privada / Pilar p&uacute;blica y Antonio privada / Antonio p&uacute;blica.  Pilar genera su mensaje, &iquest;con qu&eacute; clave de las cuatro lo cifrar&aacute;?:";
 choices[57]= new Array();
 choices[57][0] = "Pilar-privada";
 choices[57][1] = "Pilar-p&uacute;blica";
 choices[57][2] = "Antonio-privada";
 choices[57][3] = "Antonio-p&uacute;blica";
 answers[57] = 3;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3008. ";
 preguntaids[57] = 3008


//  Id pregunta: 2990 Año de creación de pregunta: 2002
 questions[58]= "59)  MPI:";
 choices[58]= new Array();
 choices[58][0] = "Es una librer&iacute;a para programaci&oacute;n distribuida por paso de mensajes";
 choices[58][1] = "Multi Peer Interface es una utilidad P2P que permite utilizar los recursos de los PC de una LAN como si de un servidor centralizado se tratara";
 choices[58][2] = "Permite el intercambio de archivos entre PCs de una misma red";
 choices[58][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[58] = 0;
 units[58] = ['55'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2990. ";
 preguntaids[58] = 2990


//  Id pregunta: 3031 Año de creación de pregunta: 2002
 questions[59]= "60)  Se puede decir que una base de datos es:";
 choices[59]= new Array();
 choices[59][0] = "Un elemento f&iacute;sico (hardware)";
 choices[59][1] = "Un dispositivo de almacenamiento";
 choices[59][2] = "Un conjunto de datos interrelacionados";
 choices[59][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[59] = 2;
 units[59] = ['60'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3031. ";
 preguntaids[59] = 3031


//  Id pregunta: 3049 Año de creación de pregunta: 2002
 questions[60]= "61)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[60]= new Array();
 choices[60][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[60][1] = "Utiliza m&aacute;s discos";
 choices[60][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[60][3] = "Todas las respuestas anteriores son falsas";
 answers[60] = 1;
 units[60] = ['53'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3049. ";
 preguntaids[60] = 3049


//  Id pregunta: 3065 Año de creación de pregunta: 2002
 questions[61]= "62)  SSL:";
 choices[61]= new Array();
 choices[61][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[61][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[61][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[61][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[61] = 1;
 units[61] = ['76'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3065. ";
 preguntaids[61] = 3065


//  Id pregunta: 3005 Año de creación de pregunta: 2002
 questions[62]= "63)  Para Unix un archivo de compone de:";
 choices[62]= new Array();
 choices[62][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[62][1] = "Una secuencia de bytes";
 choices[62][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[62][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[62] = 1;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3005. ";
 preguntaids[62] = 3005


//  Id pregunta: 2995 Año de creación de pregunta: 2002
 questions[63]= "64)  OnNow:";
 choices[63]= new Array();
 choices[63][0] = "Es una tecnolog&iacute;a que permite a un PC encenderse r&aacute;pidamente";
 choices[63][1] = "Es una caracter&iacute;stica de los sistemas Z/series de IBM que permite el reemplazo en caliente de todas sus partes y su operaci&oacute;n 24x7";
 choices[63][2] = "Es una caracter&iacute;stica de Linux orientada a aumentar la redundancia y confiabilidad en la operaci&oacute;n del sistema";
 choices[63][3] = "Todas las respuestas anteriores son ciertas";
 answers[63] = 0;
 units[63] = ['52'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2995. ";
 preguntaids[63] = 2995


//  Id pregunta: 3021 Año de creación de pregunta: 2002
 questions[64]= "65)  RSA es:";
 choices[64]= new Array();
 choices[64][0] = "Un algoritmo criptogr&aacute;fico";
 choices[64][1] = "Un mecanismo de intercambio de claves";
 choices[64][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[64][3] = "Una funcion resumen";
 answers[64] = 0;
 units[64] = ['76'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3021. ";
 preguntaids[64] = 3021


//  Id pregunta: 2992 Año de creación de pregunta: 2002
 questions[65]= "66)  NAS:";
 choices[65]= new Array();
 choices[65][0] = "Es un dispositivo de almacenamiento conectado a red de alta capacidad";
 choices[65][1] = "Es un sistema de emisi&oacute;n de alarmas a trav&eacute;s de redes";
 choices[65][2] = "Es una base de datos orientada a objetos";
 choices[65][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[65] = 0;
 units[65] = ['53'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2992. ";
 preguntaids[65] = 2992


//  Id pregunta: 3019 Año de creación de pregunta: 2002
 questions[66]= "67)  RS-232, USB, Centronics, ECP, EPP, SCSI, PS/2&hellip;, son:";
 choices[66]= new Array();
 choices[66][0] = "buses/interfaces internos";
 choices[66][1] = "buses/interfaces externos";
 choices[66][2] = "est&aacute;ndares inal&aacute;mbricos";
 choices[66][3] = "arquitecturas de ordenadores";
 answers[66] = 1;
 units[66] = ['52'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3019. ";
 preguntaids[66] = 3019


//  Id pregunta: 2998 Año de creación de pregunta: 2002
 questions[67]= "68)  Para cuantificar el movimiento existente entre la entrada a una base de datos orientada a objetos y la salida se emplean dos sistemas. El denominado 'din&aacute;mica d&eacute;bil' se caracteriza por:";
 choices[67]= new Array();
 choices[67][0] = "Considerar la creaci&oacute;n y destrucci&oacute;n de objetos";
 choices[67][1] = "Definir el tiempo de vida de los objetos como el intervalo de existencia asociado a los mismos";
 choices[67][2] = "Reflejar el movimiento y cambios de valor de los atributos variables";
 choices[67][3] = "Modificar la sociedad de objetos entre s&iacute;, pero no la observabilidad de los mismos";
 answers[67] = 2;
 units[67] = ['60'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2998. ";
 preguntaids[67] = 2998


//  Id pregunta: 3002 Año de creación de pregunta: 2002
 questions[68]= "69)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[68]= new Array();
 choices[68][0] = "ldir";
 choices[68][1] = "ls";
 choices[68][2] = "pwd";
 choices[68][3] = "ps";
 answers[68] = 1;
 units[68] = ['56', '57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3002. ";
 preguntaids[68] = 3002


//  Id pregunta: 3020 Año de creación de pregunta: 2002
 questions[69]= "70)  RSA es:";
 choices[69]= new Array();
 choices[69][0] = "un algoritmo de clave privada";
 choices[69][1] = "un algoritmo de clave p&uacute;blica";
 choices[69][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[69][3] = "una infraestructura de clave p&uacute;blica";
 answers[69] = 1;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3020. ";
 preguntaids[69] = 3020


//  Id pregunta: 2993 Año de creación de pregunta: 2002
 questions[70]= "71)  ODBC:";
 choices[70]= new Array();
 choices[70][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[70][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[70][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[70][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[70] = 0;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2993. ";
 preguntaids[70] = 2993


//  Id pregunta: 3024 Año de creación de pregunta: 2002
 questions[71]= "72)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[71]= new Array();
 choices[71][0] = "Los usuarios";
 choices[71][1] = "Los datos";
 choices[71][2] = "Los documentos";
 choices[71][3] = "Los mensajes";
 answers[71] = 0;
 units[71] = ['77', '78'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3024. ";
 preguntaids[71] = 3024


//  Id pregunta: 2997 Año de creación de pregunta: 2002
 questions[72]= "73)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[72]= new Array();
 choices[72][0] = "DELETE + Nombre de la tabla";
 choices[72][1] = "DROP + Nombre de la tabla";
 choices[72][2] = "REVOKE + Nombre de la tabla";
 choices[72][3] = "B y C son ciertas";
 answers[72] = 1;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2997. ";
 preguntaids[72] = 2997


//  Id pregunta: 3010 Año de creación de pregunta: 2002
 questions[73]= "74)  Que el bus de datos trabaje con 32 bits quiere decir que:";
 choices[73]= new Array();
 choices[73][0] = "Todos los dispositivos conectados al bus acceden a 32 bits en cada impulso de reloj del ordenador";
 choices[73][1] = "Todos los dispositivos conectados al bus acceden a 32 bits en dos impulsos de reloj del ordenador";
 choices[73][2] = "Todos los dispositivos conectados al bus acceden a 32 bits en cuatro impulsos de reloj del ordenador";
 choices[73][3] = "Ninguna de las anteriores, ya que el bus del ordenador puede trabajar a diferente velocidad que la CPU";
 answers[73] = 3;
 units[73] = ['52'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3010. ";
 preguntaids[73] = 3010


//  Id pregunta: 3015 Año de creación de pregunta: 2002
 questions[74]= "75)  Respecto a las memorias RAM:";
 choices[74]= new Array();
 choices[74][0] = "las RAM est&aacute;ticas no son m&aacute;s r&aacute;pidas que las din&aacute;micas";
 choices[74][1] = "SDRAM (Synchronous Dynamic) es generalmente m&aacute;s r&aacute;pida que EDORAM (Extended Data Output)";
 choices[74][2] = "las RAM no pueden ser usadas para simular discos duros debido a su velocidad de acceso";
 choices[74][3] = "las PBSRAM (pipeline burst static) no pueden proporcionar acceso simult&aacute;neo por la propia concepci&oacute;n de la m&aacute;quina de Von Neumann";
 answers[74] = 1;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3015. ";
 preguntaids[74] = 3015


