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
//  Id pregunta: 3105 Año de creación de pregunta: 2002
 questions[0]= "1)  Una relaci&oacute;n se dice que est&aacute; en tercera forma normal (3FN) de Boyce y Codd si:";
 choices[0]= new Array();
 choices[0][0] = "Est&aacute; en primera forma normal y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves";
 choices[0][1] = "No contiene dependendencias multievaluadas";
 choices[0][2] = "Ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[0][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[0] = 3;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3105. ";
 preguntaids[0] = 3105


//  Id pregunta: 3118 Año de creación de pregunta: 2002
 questions[1]= "2)  Con AGP se pretende:";
 choices[1]= new Array();
 choices[1][0] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el procesador";
 choices[1][1] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el disco duro";
 choices[1][2] = "Aislar el subsistema de v&iacute;deo de la arquitectura ISA";
 choices[1][3] = "Separar los subsistemas de audio y v&iacute;deo del bus principal";
 answers[1] = 0;
 units[1] = ['53'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3118. ";
 preguntaids[1] = 3118


//  Id pregunta: 3092 Año de creación de pregunta: 2002
 questions[2]= "3)  Un tesauro es lineal cuando:";
 choices[2]= new Array();
 choices[2][0] = "Las relaciones entre descriptores constituyen una estructura de red";
 choices[2][1] = "Los descriptores se clasifican jer&aacute;rquicamente con un cierto criterio";
 choices[2][2] = "Se componen de una relaci&oacute;n de palabras o descriptores sin conexiones entre ellos";
 choices[2][3] = "Los descriptores se clasifican formando una estructura en anillo";
 answers[2] = 2;
 units[2] = ['68'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3092. ";
 preguntaids[2] = 3092


//  Id pregunta: 3104 Año de creación de pregunta: 2002
 questions[3]= "4)  Una relaci&oacute;n est&aacute; en segunda forma normal si:";
 choices[3]= new Array();
 choices[3][0] = "Est&aacute; en 1FN y todos son atributos toman un s&oacute;lo valor";
 choices[3][1] = "Est&aacute; en 1FN y todos sus atributos no pertenecientes a claves candidatas dependen de forma completa de la clave";
 choices[3][2] = "Est&aacute; en 1FN y sus atributos pertenecen al dominio de la informaci&oacute;n";
 choices[3][3] = "Est&aacute; en 1FN y ning&uacute;n atributo depende funcionalmente de la clave";
 answers[3] = 1;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3104. ";
 preguntaids[3] = 3104


//  Id pregunta: 3084 Año de creación de pregunta: 2002
 questions[4]= "5)  Un sistema de gesti&oacute;n de base de datos (SGBD) es relacional si, entre otras cosas:";
 choices[4]= new Array();
 choices[4][0] = "Soporta un lenguaje de manipulaci&oacute;n de datos basado en el c&aacute;lculo referencial";
 choices[4][1] = "Soporta un lenguaje de definici&oacute;n de datos de tipo referencial";
 choices[4][2] = "Es capaz de establecer relaciones con otros SGBD";
 choices[4][3] = "Toda la informaci&oacute;n se representa a nivel l&oacute;gico en forma de tablas";
 answers[4] = 3;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3084. ";
 preguntaids[4] = 3084


//  Id pregunta: 3071 Año de creación de pregunta: 2002
 questions[5]= "6)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[5]= new Array();
 choices[5][0] = "M&oacute;dulo";
 choices[5][1] = "M&oacute;dulo reentrante";
 choices[5][2] = "Transacci&oacute;n";
 choices[5][3] = "Actualizaci&oacute;n";
 answers[5] = 2;
 units[5] = ['58', '59', '60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3071. ";
 preguntaids[5] = 3071


//  Id pregunta: 3077 Año de creación de pregunta: 2002
 questions[6]= "7)  Un procesador superescalar es aqu&eacute;l que:";
 choices[6]= new Array();
 choices[6][0] = "Contiene varias unidades de ejecuci&oacute;n independientes de forma que puede ejecutar varias instrucciones simult&aacute;neamente";
 choices[6][1] = "Est&aacute; optimizado para maquinas multiprocesador, principalmente por su implementaci&oacute;n de algoritmos que aseguran la coherencia de las cach&eacute;s";
 choices[6][2] = "Contiene varias unidades de coma flotante posibilitando la paralelizaci&oacute;n de c&oacute;digo en servidores de c&aacute;lculo intensivo";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[6] = 0;
 units[6] = ['49'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3077. ";
 preguntaids[6] = 3077


//  Id pregunta: 3134 Año de creación de pregunta: 2002
 questions[7]= "8)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[7]= new Array();
 choices[7][0] = "buses internos";
 choices[7][1] = "buses externos";
 choices[7][2] = "organismos de estandarizaci&oacute;n";
 choices[7][3] = "est&aacute;ndares de almacenamiento";
 answers[7] = 0;
 units[7] = ['52'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3134. ";
 preguntaids[7] = 3134


//  Id pregunta: 3088 Año de creación de pregunta: 2002
 questions[8]= "9)  Un sistema operativo debe evolucionar f&aacute;cilmente porque:";
 choices[8]= new Array();
 choices[8][0] = "Hay frecuentes actualizaciones de hardware, y nuevos tipos del mismo; hay nuevos servicios que implican nuevos mecanismos de control; y se presentan siempre fallos no previstos que es necesario corregir";
 choices[8][1] = "No debe evolucionar f&aacute;cilmente, pues debe estar prevista desde su generaci&oacute;n la incorporaci&oacute;n de nuevos elementos de hardware";
 choices[8][2] = "No debe evolucionar f&aacute;cilmente, para evitar la f&aacute;cil generaci&oacute;n de versiones no autorizadas por el propietario";
 choices[8][3] = "Hay frecuentes desapariciones y apariciones de empresas de software, que podr&iacute;an dar lugar a una descontinuidad de versiones";
 answers[8] = 0;
 units[8] = ['56'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3088. ";
 preguntaids[8] = 3088


//  Id pregunta: 3089 Año de creación de pregunta: 2002
 questions[9]= "10)  Un sistema que reparte un quantum de procesador entre sus usuarios interactivos podr&iacute;a calificarse de:";
 choices[9]= new Array();
 choices[9][0] = "Tiempo compartido";
 choices[9][1] = "Tiempo real";
 choices[9][2] = "Batch";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = 0;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3089. ";
 preguntaids[9] = 3089


//  Id pregunta: 3072 Año de creación de pregunta: 2002
 questions[10]= "11)  Un Data Mart es:";
 choices[10]= new Array();
 choices[10][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[10][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[10][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[10] = 1;
 units[10] = ['72', '73'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3072. ";
 preguntaids[10] = 3072


//  Id pregunta: 3136 Año de creación de pregunta: 2002
 questions[11]= "12)  La consistencia de un interfaz de usuario:";
 choices[11]= new Array();
 choices[11][0] = "Contribuye a que &eacute;ste sea menos vers&aacute;til en su utilizaci&oacute;n";
 choices[11][1] = "Se refiere a la uniformidad en su utilizaci&oacute;n a lo largo de toda su exposici&oacute;n";
 choices[11][2] = "S&oacute;lo se puede garantizar si &eacute;ste es gr&aacute;fico";
 choices[11][3] = "Garantiza su facilidad de uso";
 answers[11] = 1;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3136. ";
 preguntaids[11] = 3136


//  Id pregunta: 3123 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[12]= new Array();
 choices[12][0] = "Lesser General Public License (LGPL)";
 choices[12][1] = "Modified BSD License";
 choices[12][2] = "Mozilla Public License (MPL)";
 choices[12][3] = "X11 License";
 answers[12] = 2;
 units[12] = ['66'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3123. ";
 preguntaids[12] = 3123


//  Id pregunta: 3101 Año de creación de pregunta: 2002
 questions[13]= "14)  Una memoria EEPROM:";
 choices[13]= new Array();
 choices[13][0] = "Podemos programarla una &uacute;nica vez, s&oacute;lo cuando est&aacute; nueva";
 choices[13][1] = "Podemos reprogramarla tras borrarla el&eacute;ctricamente";
 choices[13][2] = "Podemos reprogramarla, tras borrarla con rayos UV";
 choices[13][3] = "Ninguna de las anteriores es correcta";
 answers[13] = 1;
 units[13] = ['52'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3101. ";
 preguntaids[13] = 3101


//  Id pregunta: 3085 Año de creación de pregunta: 2002
 questions[14]= "15)  Un sistema IBM z/Series:";
 choices[14]= new Array();
 choices[14][0] = "Puede ejecutar Linux";
 choices[14][1] = "Puede ejecutar OS/400";
 choices[14][2] = "Puede ejecutar Windows 2000";
 choices[14][3] = "Todas son ciertas";
 answers[14] = 0;
 units[14] = ['49'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3085. ";
 preguntaids[14] = 3085


//  Id pregunta: 3119 Año de creación de pregunta: 2002
 questions[15]= "16)  Considerando de modo gen&eacute;rico una interfaz como un dispositivo de adaptaci&oacute;n a dos entidades distintas, podr&iacute;a decirse que es:";
 choices[15]= new Array();
 choices[15][0] = "Un grupo de especificaciones";
 choices[15][1] = "Una entidad l&oacute;gica";
 choices[15][2] = "Un conjunto de convenios que permite el intercambio de informaci&oacute;n entre dos entidades que pueden ser f&iacute;sicas o no";
 choices[15][3] = "Todas las respuestas son correctas";
 answers[15] = 3;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3119. ";
 preguntaids[15] = 3119


//  Id pregunta: 3094 Año de creación de pregunta: 2002
 questions[16]= "17)  Una base de datos multidimensional:";
 choices[16]= new Array();
 choices[16][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[16][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[16][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[16][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[16] = 1;
 units[16] = ['72', '73'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3094. ";
 preguntaids[16] = 3094


//  Id pregunta: 3116 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Qu&eacute; es una API?:";
 choices[17]= new Array();
 choices[17][0] = "Entorno de desarrollo que permite la compatibilidad binaria entre m&aacute;quinas";
 choices[17][1] = "Una herramienta CASE que facilita el desarrollo de aplicaciones";
 choices[17][2] = "Monitor est&aacute;ndar de transacciones en el sistema operativo Unix";
 choices[17][3] = "Application Programming Interface: Interfaz de la aplicaci&oacute;n con otros componentes software, por ejemplo con el sistema operativo o con el interfaz gr&aacute;fico";
 answers[17] = 3;
 units[17] = ['56'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3116. ";
 preguntaids[17] = 3116


//  Id pregunta: 3082 Año de creación de pregunta: 2002
 questions[18]= "19)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[18]= new Array();
 choices[18][0] = "Al servidor DNS principal";
 choices[18][1] = "Al servidor web asociado al dominio";
 choices[18][2] = "Al servidor de correo asociado al dominio";
 choices[18][3] = "Al servidor seguro asociado al dominio";
 answers[18] = 2;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3082. ";
 preguntaids[18] = 3082


//  Id pregunta: 3107 Año de creación de pregunta: 2002
 questions[19]= "20)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[19]= new Array();
 choices[19][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[19][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[19][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[19][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[19] = 0;
 units[19] = ['60'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3107. ";
 preguntaids[19] = 3107


//  Id pregunta: 3127 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l es el objetivo del concepto WYSIWYG en los sistemas inform&aacute;ticos?:";
 choices[20]= new Array();
 choices[20][0] = "Lograr alta definici&oacute;n (resoluci&oacute;n) en los documentos impresos";
 choices[20][1] = "Que a la hora de imprimir se tenga claro c&oacute;mo queda el documento";
 choices[20][2] = "Disponer de fonts de todos los tama&ntilde;os deseados a partir de una font base dada";
 choices[20][3] = "Crear documentos multimedia";
 answers[20] = 1;
 units[20] = ['52'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3127. ";
 preguntaids[20] = 3127


//  Id pregunta: 3067 Año de creación de pregunta: 2002
 questions[21]= "22)  TTP:";
 choices[21]= new Array();
 choices[21][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[21][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[21][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[21][3] = "Todas son falsas";
 answers[21] = 2;
 units[21] = ['77', '78'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3067. ";
 preguntaids[21] = 3067


//  Id pregunta: 3068 Año de creación de pregunta: 2002
 questions[22]= "23)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[22]= new Array();
 choices[22][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[22][1] = "Es un componente del servicio de paquetes";
 choices[22][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[22][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[22] = 3;
 units[22] = ['58', '59'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3068. ";
 preguntaids[22] = 3068


//  Id pregunta: 3099 Año de creación de pregunta: 2002
 questions[23]= "24)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[23]= new Array();
 choices[23][0] = "Poseen una gran capacidad de almacenamiento";
 choices[23][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[23][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[23][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[23] = 2;
 units[23] = ['53'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3099. ";
 preguntaids[23] = 3099


//  Id pregunta: 3097 Año de creación de pregunta: 2002
 questions[24]= "25)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[24]= new Array();
 choices[24][0] = "ODBC";
 choices[24][1] = "Visual Basic";
 choices[24][2] = "DCOM";
 choices[24][3] = "DNA";
 answers[24] = 2;
 units[24] = ['63'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3097. ";
 preguntaids[24] = 3097


//  Id pregunta: 3126 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes no es un formato de descripci&oacute;n de p&aacute;ginas?:";
 choices[25]= new Array();
 choices[25][0] = "EPS";
 choices[25][1] = "RIP";
 choices[25][2] = "PDF";
 choices[25][3] = "PCL";
 answers[25] = 1;
 units[25] = ['80'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3126. ";
 preguntaids[25] = 3126


//  Id pregunta: 3110 Año de creación de pregunta: 2002
 questions[26]= "27)  Uno de los problemas m&aacute;s importantes en la aplicaci&oacute;n de los computadores paralelos consiste en:";
 choices[26]= new Array();
 choices[26][0] = "Su gran volumen";
 choices[26][1] = "Elevada potencia consumida";
 choices[26][2] = "Su dif&iacute;cil programaci&oacute;n";
 choices[26][3] = "El escaso hardware disponible";
 answers[26] = 2;
 units[26] = ['49'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3110. ";
 preguntaids[26] = 3110


//  Id pregunta: 3121 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta al referirnos a los dos tipos de interfaces existentes?:";
 choices[27]= new Array();
 choices[27][0] = "La utilizaci&oacute;n diaria de la interfaz basada en comandos es m&aacute;s &aacute;gil que la basada en men&uacute;, pero su aprendizaje es m&aacute;s costoso";
 choices[27][1] = "A medida que el usuario va ganando destreza la interfaz basada en men&uacute; tiende a hacerse tediosa debido al elevado n&uacute;mero de opciones y funciones que proporcionan";
 choices[27][2] = "Con la interfaz basada en men&uacute; el usuario tiene la continua sensaci&oacute;n de sentirse guiado";
 choices[27][3] = "La interfaz basada en comando es m&aacute;s intuitiva que la basada en men&uacute;";
 answers[27] = 3;
 units[27] = ['52'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3121. ";
 preguntaids[27] = 3121


//  Id pregunta: 3095 Año de creación de pregunta: 2002
 questions[28]= "29)  Una cinta DAT DDS3 tiene una capacidad de:";
 choices[28]= new Array();
 choices[28][0] = "32,1 Gb sin comprimir";
 choices[28][1] = "40 Gb comprimido";
 choices[28][2] = "80 Gb comprimido";
 choices[28][3] = "12 Gb sin comprimir";
 answers[28] = 3;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3095. ";
 preguntaids[28] = 3095


//  Id pregunta: 3138 Año de creación de pregunta: 2002
 questions[29]= "30)  La extensi&oacute;n de los documentos de plantillas en MS Word es:";
 choices[29]= new Array();
 choices[29][0] = "Doc";
 choices[29][1] = "Dot";
 choices[29][2] = "Pln";
 choices[29][3] = "Std";
 answers[29] = 1;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3138. ";
 preguntaids[29] = 3138


//  Id pregunta: 3069 Año de creación de pregunta: 2002
 questions[30]= "31)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[30]= new Array();
 choices[30][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[30][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[30][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[30][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[30] = 0;
 units[30] = ['72', '73'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3069. ";
 preguntaids[30] = 3069


//  Id pregunta: 3111 Año de creación de pregunta: 2002
 questions[31]= "32)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[31]= new Array();
 choices[31][0] = "video, audio, editor texto";
 choices[31][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[31][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[31][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[31] = 2;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3111. ";
 preguntaids[31] = 3111


//  Id pregunta: 3081 Año de creación de pregunta: 2002
 questions[32]= "33)  Un 'Recordset' es:";
 choices[32]= new Array();
 choices[32][0] = "Un conjunto de variables en un lenguaje orientado a objetos";
 choices[32][1] = "Una referencia al resultado de una consulta o tabla de base de datos";
 choices[32][2] = "La unidad b&aacute;sica para acceder a vol&uacute;menes de disco montados por NFS";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = 1;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3081. ";
 preguntaids[32] = 3081


//  Id pregunta: 3090 Año de creación de pregunta: 2002
 questions[33]= "34)  Un sistema situado en una central nuclear, encargado de gestionar su correcto funcionamiento y operativa, controlando todos sus elementos, y que tiene un umbral de tiempo m&aacute;ximo para dar cada respuesta, se cataloga como:";
 choices[33]= new Array();
 choices[33][0] = "Sistema multiprogramado";
 choices[33][1] = "Sistema de tiempo compartido";
 choices[33][2] = "Sistema de tiempo real";
 choices[33][3] = "Sistema multiusuario";
 answers[33] = 2;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3090. ";
 preguntaids[33] = 3090


//  Id pregunta: 3087 Año de creación de pregunta: 2002
 questions[34]= "35)  Un sistema operativo b&aacute;sico se compone de:";
 choices[34]= new Array();
 choices[34][0] = "Gesti&oacute;n de E/S";
 choices[34][1] = "Gesti&oacute;n de Memoria";
 choices[34][2] = "Planificaci&oacute;n";
 choices[34][3] = "Todas son ciertas";
 answers[34] = 3;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3087. ";
 preguntaids[34] = 3087


//  Id pregunta: 3091 Año de creación de pregunta: 2002
 questions[35]= "36)  Un sistema SUN:";
 choices[35]= new Array();
 choices[35][0] = "Puede utilizar procesadores Sparc";
 choices[35][1] = "Puede utilizar procesadores MIPS";
 choices[35][2] = "Puede utilizar procesadores Intel";
 choices[35][3] = "A y C son ciertas";
 answers[35] = 3;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3091. ";
 preguntaids[35] = 3091


//  Id pregunta: 3075 Año de creación de pregunta: 2002
 questions[36]= "37)  Un microprocesador, cuya frecuencia de reloj es de 300 Mhz y ejecuta 4 instrucciones/ciclo, puede ejecutar:";
 choices[36]= new Array();
 choices[36][0] = "1,2 Mips";
 choices[36][1] = "300 Mips";
 choices[36][2] = "300.000 instrucciones/segundo";
 choices[36][3] = "1200 Mips";
 answers[36] = 3;
 units[36] = ['52'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3075. ";
 preguntaids[36] = 3075


//  Id pregunta: 3086 Año de creación de pregunta: 2002
 questions[37]= "38)  Un sistema inform&aacute;tico SCADA es:";
 choices[37]= new Array();
 choices[37][0] = "un sistema de supervisi&oacute;n, control y adquisici&oacute;n de datos";
 choices[37][1] = "un sistema de procesamiento paralelo optimizado para c&aacute;lculo matem&aacute;tico";
 choices[37][2] = "un sistema &uacute;nico multiprocesador que experimenta el uso del plasma en la construcci&oacute;n de CPUs m&aacute;s r&aacute;pidas";
 choices[37][3] = "un sistema de realidad virtual con perif&eacute;ricos de inmersi&oacute;n en la escena y retorno de la informaci&oacute;n de los sensores";
 answers[37] = 0;
 units[37] = ['54'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3086. ";
 preguntaids[37] = 3086


//  Id pregunta: 3143 Año de creación de pregunta: 2002
 questions[38]= "39)  MPEG es:";
 choices[38]= new Array();
 choices[38][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[38][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[38][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[38][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[38] = 3;
 units[38] = ['62'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3143. ";
 preguntaids[38] = 3143


//  Id pregunta: 3098 Año de creación de pregunta: 2002
 questions[39]= "40)  Una de las siguientes caracter&iacute;sticas es falsa para los ordenadores RISC. Indicar cu&aacute;l:";
 choices[39]= new Array();
 choices[39][0] = "Consideran m&aacute;s importante la simplicidad en las instrucciones que en la longitud de los programas";
 choices[39][1] = "Las primitivas del ensamblador tienden a ser las mismas que las microinstrucciones";
 choices[39][2] = "Son adecuados para c&aacute;lculos mediante operaciones en coma flotante";
 choices[39][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[39] = 2;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3098. ";
 preguntaids[39] = 3098


//  Id pregunta: 3103 Año de creación de pregunta: 2002
 questions[40]= "41)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[40]= new Array();
 choices[40][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[40][1] = "No contiene claves dependientes de otra extranjera";
 choices[40][2] = "La clave extranjera est&aacute; normalizada";
 choices[40][3] = "No contiene grupos repetitivos";
 answers[40] = 3;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3103. ";
 preguntaids[40] = 3103


//  Id pregunta: 3145 Año de creación de pregunta: 2002
 questions[41]= "42)  PDF se corresponde con:";
 choices[41]= new Array();
 choices[41][0] = "Portable Digital Format, Formato Digital Portable";
 choices[41][1] = "Portable Data Format, Formato de Datos Portables";
 choices[41][2] = "Portable Document Format, Formato de Documento Portable";
 choices[41][3] = "Pseudo-compatibility Data Format, Formato de Datos para la Compatibilidad";
 answers[41] = 2;
 units[41] = ['80'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3145. ";
 preguntaids[41] = 3145


//  Id pregunta: 3122 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes denominaciones no corresponde a un formato comercial de DVD?:";
 choices[42]= new Array();
 choices[42][0] = "DVD+RW";
 choices[42][1] = "DVD-R";
 choices[42][2] = "DVD-RE";
 choices[42][3] = "DVD RAM";
 answers[42] = 2;
 units[42] = ['53'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3122. ";
 preguntaids[42] = 3122


//  Id pregunta: 3124 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[43]= new Array();
 choices[43][0] = "Diccionario de palabras vac&iacute;as";
 choices[43][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[43][2] = "Tesauro";
 choices[43][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[43] = 3;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3124. ";
 preguntaids[43] = 3124


//  Id pregunta: 3139 Año de creación de pregunta: 2002
 questions[44]= "45)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[44]= new Array();
 choices[44][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[44][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[44][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[44][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[44] = 3;
 units[44] = ['56'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3139. ";
 preguntaids[44] = 3139


//  Id pregunta: 3112 Año de creación de pregunta: 2002
 questions[45]= "46)  XML:";
 choices[45]= new Array();
 choices[45][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[45][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[45][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[45][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[45] = 1;
 units[45] = ['74'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3112. ";
 preguntaids[45] = 3112


//  Id pregunta: 3131 Año de creación de pregunta: 2002
 questions[46]= "47)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[46]= new Array();
 choices[46][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[46][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[46][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[46][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[46] = 3;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3131. ";
 preguntaids[46] = 3131


//  Id pregunta: 3083 Año de creación de pregunta: 2002
 questions[47]= "48)  Un sistema de almacenamiento RAID 0:";
 choices[47]= new Array();
 choices[47][0] = "Es un sistema tolerante a fallos de un disco";
 choices[47][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[47][2] = "Requiere al menos 5 discos";
 choices[47][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[47] = 3;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3083. ";
 preguntaids[47] = 3083


//  Id pregunta: 3100 Año de creación de pregunta: 2002
 questions[48]= "49)  Una entidad d&eacute;bil es aquella que cumple que:";
 choices[48]= new Array();
 choices[48][0] = "La clave est&aacute; compuesta por atributos de la entidad";
 choices[48][1] = "La clave est&aacute; compuesta por atributos de la entidad y atributos de otras entidades";
 choices[48][2] = "Su existencia depende de la existencia de otra u otras entidades";
 choices[48][3] = "No puede tener relaciones cuya cardinalidad sea uno-a-uno";
 answers[48] = 2;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3100. ";
 preguntaids[48] = 3100


//  Id pregunta: 3114 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[49]= new Array();
 choices[49][0] = "LaCie";
 choices[49][1] = "Toshiba";
 choices[49][2] = "Apple";
 choices[49][3] = "Rank Xerox";
 answers[49] = 3;
 units[49] = ['52'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3114. ";
 preguntaids[49] = 3114


//  Id pregunta: 3135 Año de creación de pregunta: 2002
 questions[50]= "51)  La compresi&oacute;n con p&eacute;rdidas no ser&iacute;a adecuada para:";
 choices[50]= new Array();
 choices[50][0] = "Un ejecutable";
 choices[50][1] = "Texto ASCII";
 choices[50][2] = "Un facs&iacute;mil";
 choices[50][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[50] = 3;
 units[50] = ['80'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3135. ";
 preguntaids[50] = 3135


//  Id pregunta: 3132 Año de creación de pregunta: 2002
 questions[51]= "52)  En un servidor de archivos jer&aacute;rquico cada nodo del &aacute;rbol puede tener:";
 choices[51]= new Array();
 choices[51][0] = "Una etiqueta o un registro de datos, pero no ambos";
 choices[51][1] = "Un registro de datos";
 choices[51][2] = "Una etiqueta, un registro de datos, ambos o ninguno";
 choices[51][3] = "Una etiqueta y un registro de datos obligatoriamente";
 answers[51] = 2;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3132. ";
 preguntaids[51] = 3132


//  Id pregunta: 3102 Año de creación de pregunta: 2002
 questions[52]= "53)  Una microinstrucci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Es una funci&oacute;n que acepta pocos par&aacute;metros en un lenguaje de programaci&oacute;n convencional";
 choices[52][1] = "En unidades de control microprogramadas, cada intrucci&oacute;n es un microprograma formado por microinstrucciones";
 choices[52][2] = "Son comandos del sistema operativo que tienen peque&ntilde;o tama&ntilde;o y que siempre se encuentran en memoria";
 choices[52][3] = "Todas son falsas";
 answers[52] = 1;
 units[52] = ['52'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3102. ";
 preguntaids[52] = 3102


//  Id pregunta: 3076 Año de creación de pregunta: 2002
 questions[53]= "54)  Un ordenador con multiprocesamiento sim&eacute;trico (SMP). Dentro de la clasificaci&oacute;n de M.J. Flinn se clasificar&iacute;a como:";
 choices[53]= new Array();
 choices[53][0] = "SISD";
 choices[53][1] = "MIMD";
 choices[53][2] = "MISD";
 choices[53][3] = "SIMD";
 answers[53] = 1;
 units[53] = ['49'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3076. ";
 preguntaids[53] = 3076


//  Id pregunta: 3093 Año de creación de pregunta: 2002
 questions[54]= "55)  Una asociaci&oacute;n entre entidades es reflexiva cuando:";
 choices[54]= new Array();
 choices[54][0] = "El n&uacute;mero de entidades que participan en la asociaci&oacute;n es mayor que 2";
 choices[54][1] = "La cardinalidad de la asociaci&oacute;n es l";
 choices[54][2] = "Tiene &uacute;nicamente un atributo principal como clave";
 choices[54][3] = "Una entidad se relaciona con ella misma";
 answers[54] = 3;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3093. ";
 preguntaids[54] = 3093


//  Id pregunta: 3130 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[55]= new Array();
 choices[55][0] = "Sun Microsystems";
 choices[55][1] = "OSF (Open Group)";
 choices[55][2] = "Departamento de Defensa de EE.UU.";
 choices[55][3] = "MIT (Massachusets Institute of Technology)";
 answers[55] = 1;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3130. ";
 preguntaids[55] = 3130


//  Id pregunta: 3144 Año de creación de pregunta: 2002
 questions[56]= "57)  Para el tratamiento de im&aacute;genes informatizadas se usan algoritmos construidos mediante:";
 choices[56]= new Array();
 choices[56][0] = "Ecuaciones de Cauchy";
 choices[56][1] = "Series de McLaurin";
 choices[56][2] = "Integrales de Riemann Stiltges";
 choices[56][3] = "Transformadas de Fourier";
 answers[56] = 3;
 units[56] = ['80'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3144. ";
 preguntaids[56] = 3144


//  Id pregunta: 3078 Año de creación de pregunta: 2002
 questions[57]= "58)  Un productor de bases de datos es aqu&eacute;l que:";
 choices[57]= new Array();
 choices[57][0] = "&Uacute;nicamente recopila informaci&oacute;n y la pone a disposici&oacute;n de la sociedad en un soporte susceptible de tratamiento inform&aacute;tico";
 choices[57][1] = "Solo mantiene al d&iacute;a la informaci&oacute;n contenida en las bases";
 choices[57][2] = "Algunos de ellos no se limitan a recopilar la informaci&oacute;n, sino que la elaboran";
 choices[57][3] = "Son correctas las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[57] = 2;
 units[57] = ['60'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3078. ";
 preguntaids[57] = 3078


//  Id pregunta: 3113 Año de creación de pregunta: 2002
 questions[58]= "59)  XQL es:";
 choices[58]= new Array();
 choices[58][0] = "Extended Query Language";
 choices[58][1] = "XML Query Language";
 choices[58][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[58][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[58] = 1;
 units[58] = ['69'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3113. ";
 preguntaids[58] = 3113


//  Id pregunta: 3079 Año de creación de pregunta: 2002
 questions[59]= "60)  Un proveedor de servicios OLE DB es:";
 choices[59]= new Array();
 choices[59][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[59][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[59][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[59][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[59] = 0;
 units[59] = ['63'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3079. ";
 preguntaids[59] = 3079


//  Id pregunta: 3142 Año de creación de pregunta: 2002
 questions[60]= "61)  Los servicios interactivos multimedia se caracterizan por ser:";
 choices[60]= new Array();
 choices[60][0] = "bidereccionales sim&eacute;tricos";
 choices[60][1] = "bidireccionales asim&eacute;tricos con mayor volumen del cliente al servidor";
 choices[60][2] = "bidireccionales asim&eacute;tricos con mayor volumen del servidor al cliente";
 choices[60][3] = "unidireccionales del servidor al cliente";
 answers[60] = 2;
 units[60] = ['55'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3142. ";
 preguntaids[60] = 3142


//  Id pregunta: 3125 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes respuestas no est&aacute; relacionada con los interfaces de usuario?:";
 choices[61]= new Array();
 choices[61][0] = "Free Windows";
 choices[61][1] = "WYSIWYG";
 choices[61][2] = "X Windows";
 choices[61][3] = "Motif";
 answers[61] = 0;
 units[61] = ['52'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3125. ";
 preguntaids[61] = 3125


//  Id pregunta: 3115 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Qu&eacute; es MIDI?:";
 choices[62]= new Array();
 choices[62][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[62][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[62][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[62][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[62] = 2;
 units[62] = ['52'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3115. ";
 preguntaids[62] = 3115


//  Id pregunta: 3108 Año de creación de pregunta: 2002
 questions[63]= "64)  Unix implementa la protecci&oacute;n de ficheros (permisos) a nivel de:";
 choices[63]= new Array();
 choices[63][0] = "Librer&iacute;as del sistema";
 choices[63][1] = "Microkernel";
 choices[63][2] = "Directorios";
 choices[63][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[63] = 2;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3108. ";
 preguntaids[63] = 3108


//  Id pregunta: 3140 Año de creación de pregunta: 2002
 questions[64]= "65)  Los c&oacute;decs DivX permiten:";
 choices[64]= new Array();
 choices[64][0] = "Escuchar la radio en un PC";
 choices[64][1] = "Ver la TV en un PC";
 choices[64][2] = "Conectar cualquier dispositivo Bluetooth a un PC";
 choices[64][3] = "Ver v&iacute;deos en un PC";
 answers[64] = 3;
 units[64] = ['53'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3140. ";
 preguntaids[64] = 3140


//  Id pregunta: 3141 Año de creación de pregunta: 2002
 questions[65]= "66)  Los perif&eacute;ricos conocidos como &quot;Pen-drive&quot; son:";
 choices[65]= new Array();
 choices[65][0] = "Unidades del tama&ntilde;o de un bol&iacute;grafo o un mechero que permiten aumentar la memoria RAM del ordenador o bien a&ntilde;adir un nuevo disco duro port&aacute;til y extra&iacute;ble";
 choices[65][1] = "L&aacute;pices &oacute;pticos que permiten dibujar en tabletas digitalizadoras y pantallas t&aacute;ctiles";
 choices[65][2] = "Esc&aacute;neres de mano de alta precisi&oacute;n";
 choices[65][3] = "Lectores de c&oacute;digos de barras de &uacute;ltima generaci&oacute;n";
 answers[65] = 0;
 units[65] = ['52'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3141. ";
 preguntaids[65] = 3141


//  Id pregunta: 3106 Año de creación de pregunta: 2002
 questions[66]= "67)  Una sala blanca es:";
 choices[66]= new Array();
 choices[66][0] = "Aquella especialmente dise&ntilde;ada para favorecer la ac&uacute;stica sin necesidad de altavoces ni micr&oacute;fonos";
 choices[66][1] = "Aquella especialmente dise&ntilde;ada para anular las ondas de los tel&eacute;fonos m&oacute;viles impidiendo as&iacute; su cobertura";
 choices[66][2] = "Aquella especialmente dise&ntilde;ada para realizar simulaciones de redes de &aacute;rea local por su escaso nivel de interferencia";
 choices[66][3] = "Aquella especialmente dise&ntilde;ada para la fabricaci&oacute;n de sustratos y componentes electr&oacute;nicos";
 answers[66] = 3;
 units[66] = ['52'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3106. ";
 preguntaids[66] = 3106


//  Id pregunta: 3109 Año de creación de pregunta: 2002
 questions[67]= "68)  Uno de los conectores mas utilizados en inform&aacute;tica es el conector RJ45. &iquest;Cu&aacute;ntos contactos tiene?:";
 choices[67]= new Array();
 choices[67][0] = "4";
 choices[67][1] = "6";
 choices[67][2] = "8";
 choices[67][3] = "15";
 answers[67] = 2;
 units[67] = ['52'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3109. ";
 preguntaids[67] = 3109


//  Id pregunta: 3096 Año de creación de pregunta: 2002
 questions[68]= "69)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[68]= new Array();
 choices[68][0] = "Homogeneidad de datos almacenados.";
 choices[68][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[68][2] = "Total organizaci&oacute;n.";
 choices[68][3] = "Facilidad para responder a consultas complejas.";
 answers[68] = 1;
 units[68] = ['72', '73'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3096. ";
 preguntaids[68] = 3096


//  Id pregunta: 3120 Año de creación de pregunta: 2002
 questions[69]= "70)  La notaci&oacute;n sint&aacute;ctica conocida como BNF (Backus Normal Form) especifica:";
 choices[69]= new Array();
 choices[69][0] = "La funci&oacute;n, el formato, las reglas sint&aacute;cticas y generales de cada elemento SQL";
 choices[69][1] = "La sintaxis y la sem&aacute;ntica del SQL-DDL (Lenguaje de Definici&oacute;n de Esquema) y el SQL-DML (Lenguaje de M&oacute;dulos y de Manipulaci&oacute;n de Datos)";
 choices[69][2] = "Las autorizaciones para realizar determinadas funciones en las tablas";
 choices[69][3] = "Las restricciones para prevenir que dos filas tengan los mismos valores en determinadas columnas (unique) o para impedir que determinada columna contenga un valor nulo";
 answers[69] = 0;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3120. ";
 preguntaids[69] = 3120


//  Id pregunta: 3137 Año de creación de pregunta: 2002
 questions[70]= "71)  La definici&oacute;n de la ofim&aacute;tica como la utilizaci&oacute;n de tecnolog&iacute;a para mejorar la realizaci&oacute;n de funciones de oficina se debe a:";
 choices[70]= new Array();
 choices[70][0] = "Hammer y Sirbu";
 choices[70][1] = "Olson y Lucas";
 choices[70][2] = "Eli y Nutt";
 choices[70][3] = "Carter y Huzan";
 answers[70] = 0;
 units[70] = ['52'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3137. ";
 preguntaids[70] = 3137


//  Id pregunta: 3129 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[71]= new Array();
 choices[71][0] = "En la codificaci&oacute;n progresiva";
 choices[71][1] = "En la modulaci&oacute;n codificada";
 choices[71][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[71][3] = "En el filtrado de frecuencias";
 answers[71] = 2;
 units[71] = ['53'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3129. ";
 preguntaids[71] = 3129


//  Id pregunta: 3133 Año de creación de pregunta: 2002
 questions[72]= "73)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[72]= new Array();
 choices[72][0] = "Es un programa con 2 versiones de trabajo";
 choices[72][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[72][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[72][3] = "Es un equipo tolerante a fallos";
 answers[72] = 1;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3133. ";
 preguntaids[72] = 3133


//  Id pregunta: 3070 Año de creación de pregunta: 2002
 questions[73]= "74)  Un buen sistema operativo, en cuanto a la gesti&oacute;n de memoria principal, debe:";
 choices[73]= new Array();
 choices[73][0] = "Repartirla entre los diversos procesos, de forma que cada uno sepa desde el comienzo que solo cuenta con la que se le ha asignado. As&iacute; el programador sabe lo que tiene que hacer en cada momento en cuanto al trasiego de datos a la memoria principal";
 choices[73][1] = "No afectarle demasiado, dejando que ella misma se gestione sin intervenci&oacute;n del sistema operativo";
 choices[73][2] = "Asignar memoria din&aacute;micamente a los programas seg&uacute;n la vayan necesitando, de forma transparente para el programador";
 choices[73][3] = "Reservarse una cantidad peque&ntilde;a para s&iacute; mismo, dejando que cada aplicaci&oacute;n tenga mayor cantidad limitada de forma fija";
 answers[73] = 2;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3070. ";
 preguntaids[73] = 3070


//  Id pregunta: 3128 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;ntas im&aacute;genes por segundo se emiten utilizando el est&aacute;ndar PAL?:";
 choices[74]= new Array();
 choices[74][0] = "30";
 choices[74][1] = "26";
 choices[74][2] = "15";
 choices[74][3] = "25";
 answers[74] = 3;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3128. ";
 preguntaids[74] = 3128


