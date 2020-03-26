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
//  Id pregunta: 3262 Año de creación de pregunta: 2003
 questions[0]= "1)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[0]= new Array();
 choices[0][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[0][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[0][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[0][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[0] = 0;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3262. ";
 preguntaids[0] = 3262


//  Id pregunta: 3286 Año de creación de pregunta: 2003
 questions[1]= "2)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[1]= new Array();
 choices[1][0] = "Sistemas de ayuda de KDE.";
 choices[1][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[1][2] = "Entorno de escritorio.";
 choices[1][3] = "Administradores de ventanas en LINUX.";
 answers[1] = 3;
 units[1] = ['66'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3286. Junta Andaluc&iacute;a";
 preguntaids[1] = 3286


//  Id pregunta: 3250 Año de creación de pregunta: 2003
 questions[2]= "3)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[2]= new Array();
 choices[2][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[2][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[2][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[2][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[2] = 3;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3250. ";
 preguntaids[2] = 3250


//  Id pregunta: 3248 Año de creación de pregunta: 2003
 questions[3]= "4)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "R&eacute;plica.";
 choices[3][1] = "Segmento.";
 choices[3][2] = "Instancia.";
 choices[3][3] = "Tablespace.";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3248. Junta Andaluc&iacute;a";
 preguntaids[3] = 3248


//  Id pregunta: 3281 Año de creación de pregunta: 2003
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas es incorrecta";
 choices[4]= new Array();
 choices[4][0] = "Los ordenadores de segunda generaci&oacute;n, basados en circuitos integrados y multiprogramaci&oacute;n, se programaban en FORTRAN y lenguaje ensamblador, y se usaban para c&aacute;lculos cient&iacute;ficos u de ingenier&iacute;a";
 choices[4][1] = "Los sistemas operativos de tercera generaci&oacute;n permitieron desarrollar la t&eacute;cnica del &quot;spooling&quot; reduciendo considerablemente la necesidad de transporte de cintas magn&eacute;ticas";
 choices[4][2] = "En los sistemas operativos de 4 generaci&oacute;n se desarrolla por primera vez la t&eacute;cnica de multiprogramaci&oacute;n, una variante de los sistemas de tiempo compartido";
 choices[4][3] = "La primera generaci&oacute;n de sistemas operativos surge como consecuencia de los exitosos trabajos realizados por Babbage al desarrollar su m&aacute;quina anal&iacute;tica";
 answers[4] = 0;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3281. ";
 preguntaids[4] = 3281


//  Id pregunta: 3267 Año de creación de pregunta: 2003
 questions[5]= "6)  La escalabilidad vertical tiene que ver con:";
 choices[5]= new Array();
 choices[5][0] = "Granjas de servidores";
 choices[5][1] = "Servidores en rack";
 choices[5][2] = "Cluster de seridores";
 choices[5][3] = "Nada de lo anterior";
 answers[5] = 3;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3267. ";
 preguntaids[5] = 3267


//  Id pregunta: 3270 Año de creación de pregunta: 2003
 questions[6]= "7)  La tercera forma normal enunciada por Codd dice:";
 choices[6]= new Array();
 choices[6][0] = "Un relaci&oacute;n est&aacute; en tercera forma normal, si est&aacute; en 2FN y adem&aacute;s ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[6][1] = "Una relaci&oacute;n R est&aacute; en 3FN si todos los atributos que no forman parte de la clave son mutuamente independientes y dependen funcionalmente de forma completa de la clave primaria";
 choices[6][2] = "Ambos enunciados son correctos";
 choices[6][3] = "Ninguno es correcto";
 answers[6] = 2;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3270. ";
 preguntaids[6] = 3270


//  Id pregunta: 3263 Año de creación de pregunta: 2003
 questions[7]= "8)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[7]= new Array();
 choices[7][0] = "Monitorizaci&oacute;n y control";
 choices[7][1] = "Gesti&oacute;n de procedimientos";
 choices[7][2] = "Interoperabilidad entre aplicaciones";
 choices[7][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[7] = 2;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3263. ";
 preguntaids[7] = 3263


//  Id pregunta: 3283 Año de creación de pregunta: 2003
 questions[8]= "9)  Si en un texto de inform&aacute;tica encontr&aacute;ramos la expresi&oacute;n &quot;memoria de ferrita&rdquo;, sabr&iacute;amos que estamos leyendo un libro de:";
 choices[8]= new Array();
 choices[8][0] = "Dispositivos optoelectr&oacute;nicos.";
 choices[8][1] = "Historia de la inform&aacute;tica.";
 choices[8][2] = "Dispositivos perif&eacute;ricos.";
 choices[8][3] = "Inteligencia artificial.";
 answers[8] = 1;
 units[8] = ['52'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3283. Junta Andaluc&iacute;a";
 preguntaids[8] = 3283


//  Id pregunta: 3268 Año de creación de pregunta: 2003
 questions[9]= "10)  La forma normal Boyce-Codd (FNBC):";
 choices[9]= new Array();
 choices[9][0] = "Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[9][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[9][2] = "Se denomina indistintamente 5FN.";
 choices[9][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[9] = 1;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3268. Junta Andaluc&iacute;a";
 preguntaids[9] = 3268


//  Id pregunta: 3309 Año de creación de pregunta: 2004
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[10]= new Array();
 choices[10][0] = "SET";
 choices[10][1] = "SSL";
 choices[10][2] = "3D-Secure";
 choices[10][3] = "SPA/UCAF";
 answers[10] = 1;
 units[10] = ['75'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3309. ";
 preguntaids[10] = 3309


//  Id pregunta: 3239 Año de creación de pregunta: 2003
 questions[11]= "12)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[11]= new Array();
 choices[11][0] = "Autenticaci&oacute;n";
 choices[11][1] = "Integridad";
 choices[11][2] = "Disponibilidad";
 choices[11][3] = "No repudio";
 answers[11] = 2;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3239. ";
 preguntaids[11] = 3239


//  Id pregunta: 3249 Año de creación de pregunta: 2003
 questions[12]= "13)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Superclave.";
 choices[12][1] = "Clave principal.";
 choices[12][2] = "Tupla m&uacute;ltiple.";
 choices[12][3] = "Clave ajena.";
 answers[12] = 3;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3249. Junta Andaluc&iacute;a";
 preguntaids[12] = 3249


//  Id pregunta: 3300 Año de creación de pregunta: 2003
 questions[13]= "14)  Indicar la afirmaci&oacute;n falsa en torno a las matrices de discos RAID:";
 choices[13]= new Array();
 choices[13][0] = "Cuando se haya reemplazado el disco en el que se ha producido el error, los datos podr&aacute;n regenerarse usando la informaci&oacute;n redundante.";
 choices[13][1] = "Los archivos de datos individuales se escriben siempre en m&aacute;s de un disco de forma que, dependiendo del nivel de RAID utilizado, se puedan mejorar el rendimiento y la fiabilidad.";
 choices[13][2] = "En una soluci&oacute;n de hardware, la interfaz de controlador controla la creaci&oacute;n y regeneraci&oacute;n de la informaci&oacute;n redundante.";
 choices[13][3] = "Las estrategias para implementar una matriz redundante de discos independientes (RAID, Redundant Array oIndependent Disks) pueden utilizar soluciones de hardware o de software.";
 answers[13] = 1;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3300. ";
 preguntaids[13] = 3300


//  Id pregunta: 3314 Año de creación de pregunta: 2004
 questions[14]= "15)  En las bases de datos, &iquest;qu&eacute; tipo de redundancia debe tolerarse?";
 choices[14]= new Array();
 choices[14][0] = "L&oacute;gica";
 choices[14][1] = "M&uacute;ltiple";
 choices[14][2] = "Controlada";
 choices[14][3] = "Ninguna";
 answers[14] = 2;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3314. MAP-B 2003";
 preguntaids[14] = 3314


//  Id pregunta: 3308 Año de creación de pregunta: 2004
 questions[15]= "16)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[15]= new Array();
 choices[15][0] = "Advanced Distributed Learning";
 choices[15][1] = "Advanced Distanced Learning";
 choices[15][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = 0;
 units[15] = ['70'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3308. ";
 preguntaids[15] = 3308


//  Id pregunta: 3258 Año de creación de pregunta: 2003
 questions[16]= "17)  En que tres bibliotecas esta basado GTK+";
 choices[16]= new Array();
 choices[16][0] = "Bonobo, Nautilus, ATK";
 choices[16][1] = "Gnome-db/libgda";
 choices[16][2] = "Glib, Pango, ATK";
 choices[16][3] = "BCEL, Log4j";
 answers[16] = 2;
 units[16] = ['66'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3258. ";
 preguntaids[16] = 3258


//  Id pregunta: 3252 Año de creación de pregunta: 2003
 questions[17]= "18)  En la arquitectura de tres niveles para el dise&ntilde;o de bases de datos establecida por el ANSI, &iquest;qu&eacute; nivel se ocupa de las reglas de integridad, claves e &iacute;ndices?";
 choices[17]= new Array();
 choices[17][0] = "Nivel f&iacute;sico.";
 choices[17][1] = "Nivel conceptual.";
 choices[17][2] = "Nivel Externo.";
 choices[17][3] = "Ninguno de los tres niveles se ocupa de las reglas de integridad, claves e &iacute;ndices, lo hace el administrador de la base de datos.";
 answers[17] = 0;
 units[17] = ['60'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3252. ";
 preguntaids[17] = 3252


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[18]= "19)  En un modelo de datos jer&aacute;rquico:";
 choices[18]= new Array();
 choices[18][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[18][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[18][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[18][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[18] = 1;
 units[18] = ['60'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[18] = 3261


//  Id pregunta: 3277 Año de creación de pregunta: 2003
 questions[19]= "20)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[19]= new Array();
 choices[19][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[19][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[19][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[19][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[19] = 0;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3277. ";
 preguntaids[19] = 3277


//  Id pregunta: 3265 Año de creación de pregunta: 2003
 questions[20]= "21)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[20]= new Array();
 choices[20][0] = "Representan conceptos estereotipados o patrones predefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[20][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[20][2] = "el marco es una entidad din&aacute;mica, con procedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[20][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[20] = 1;
 units[20] = ['68'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3265. ";
 preguntaids[20] = 3265


//  Id pregunta: 3237 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[21]= new Array();
 choices[21][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[21][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[21][2] = "Es un medio de documentos para personas";
 choices[21][3] = "Todas las anteriores son definiciones correctas";
 answers[21] = 1;
 units[21] = ['68'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3237. ";
 preguntaids[21] = 3237


//  Id pregunta: 3235 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;Cu&aacute;ntos Gigabytes tiene un Terabyte?";
 choices[22]= new Array();
 choices[22][0] = "4";
 choices[22][1] = "256";
 choices[22][2] = "512";
 choices[22][3] = "1024";
 answers[22] = 3;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3235. ";
 preguntaids[22] = 3235


//  Id pregunta: 3272 Año de creación de pregunta: 2003
 questions[23]= "24)  Las herramientas de administraci&oacute;n de datos de un SGBD";
 choices[23]= new Array();
 choices[23][0] = "Est&aacute;n entre las facilidades de usuario y el sistema central de transformaci&oacute;n de datos";
 choices[23][1] = "Tienen como interfaces LDU y LD";
 choices[23][2] = "Tienen como interfaces LD y LD-I";
 choices[23][3] = "Est&aacute;n entre el usuario y el sistema central de transformaci&oacute;n de datos";
 answers[23] = 0;
 units[23] = ['60'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 3272. ";
 preguntaids[23] = 3272


//  Id pregunta: 3313 Año de creación de pregunta: 2004
 questions[24]= "25)  La gesti&oacute;n de un sistema operativo a trav&eacute;s de los sistemas distribuidos";
 choices[24]= new Array();
 choices[24][0] = "Aporta como ventajas: La compartici&oacute;n de recursos, la aceleraci&oacute;n de c&aacute;lculos, la fiabilidad y la comunicaci&oacute;n.";
 choices[24][1] = "Son sistemas altamente acoplados, los procesadores comparten tanto memoria como reloj.";
 choices[24][2] = "Son sistemas d&eacute;bilmente acoplados, compartiendo los procesadores la memoria.";
 choices[24][3] = "Son sistemas d&eacute;bilmente acoplados, los procesadores comparten reloj pero no memoria.";
 answers[24] = 0;
 units[24] = ['55'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3313. MAP-B 2003";
 preguntaids[24] = 3313


//  Id pregunta: 3284 Año de creación de pregunta: 2003
 questions[25]= "26)  Si estamos hablando de GNOME, nos referimos a:";
 choices[25]= new Array();
 choices[25][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[25][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[25][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[25][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[25] = 1;
 units[25] = ['66'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3284. Junta Andaluc&iacute;a";
 preguntaids[25] = 3284


//  Id pregunta: 3244 Año de creación de pregunta: 2004
 questions[26]= "27)  El algoritmo de cifrado Rijndael";
 choices[26]= new Array();
 choices[26][0] = "Compite con AES por ser el est&aacute;ndar de criptograf&iacute;a dominante";
 choices[26][1] = "Es un algoritmo de clave p&uacute;blica";
 choices[26][2] = "Es un desarrollo propietario de IBM";
 choices[26][3] = "Se basa en la teor&iacute;a de campos de Galois";
 answers[26] = 3;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3244. ";
 preguntaids[26] = 3244


//  Id pregunta: 3307 Año de creación de pregunta: 2004
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[27]= new Array();
 choices[27][0] = "aTutor";
 choices[27][1] = "WebCT";
 choices[27][2] = "eSchool";
 choices[27][3] = "Blackboard";
 answers[27] = 2;
 units[27] = ['70'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3307. ";
 preguntaids[27] = 3307


//  Id pregunta: 3257 Año de creación de pregunta: 2003
 questions[28]= "29)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[28]= new Array();
 choices[28][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[28][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[28][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[28][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[28] = 1;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3257. ";
 preguntaids[28] = 3257


//  Id pregunta: 3316 Año de creación de pregunta: 2004
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[29]= new Array();
 choices[29][0] = "Uno de los principios de Unix es &quot;Todo es un archivo&quot;";
 choices[29][1] = "El Sistema Operativo &quot;MULTICS&quot; se caracteriza por la gesti&oacute;n de procesos multiprograma y en tiempo compartido y su arquitectura modular.";
 choices[29][2] = "El Sistema Opreativo Unix se caracteriza, junto con MINIX, por la gesti&oacute;n de procesos multiprogramada y su arquitectura modular.";
 choices[29][3] = "El Sistema Operativo Unix se caracteriza por un sistema de gesti&oacute;n de procesos multiprogramada y en tiempo compartido y por su arquitectura monol&iacute;tica.";
 answers[29] = 3;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3316. MAP-B 2003";
 preguntaids[29] = 3316


//  Id pregunta: 3305 Año de creación de pregunta: 2004
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no tienen relaci&oacute;n con el elearning?";
 choices[30]= new Array();
 choices[30][0] = "IMS";
 choices[30][1] = "SCORM";
 choices[30][2] = "Moodle";
 choices[30][3] = "ePupil";
 answers[30] = 3;
 units[30] = ['70'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3305. ";
 preguntaids[30] = 3305


//  Id pregunta: 3304 Año de creación de pregunta: 2004
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[31]= new Array();
 choices[31][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[31][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[31][2] = "Lucene es un motor de b&uacute;squeda";
 choices[31][3] = "Ninguna de las anteriores es cierta";
 answers[31] = 2;
 units[31] = ['66'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3304. ";
 preguntaids[31] = 3304


//  Id pregunta: 3274 Año de creación de pregunta: 2003
 questions[32]= "33)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[32]= new Array();
 choices[32][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[32][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[32][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[32][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[32] = 1;
 units[32] = ['76'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3274. Junta Andaluc&iacute;a";
 preguntaids[32] = 3274


//  Id pregunta: 3269 Año de creación de pregunta: 2003
 questions[33]= "34)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[33][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[33][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[33][3] = "Criptograf&iacute;a paralela.";
 answers[33] = 1;
 units[33] = ['76'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3269. Junta Andaluc&iacute;a";
 preguntaids[33] = 3269


//  Id pregunta: 3278 Año de creación de pregunta: 2003
 questions[34]= "35)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[34]= new Array();
 choices[34][0] = "Es independiente del SO";
 choices[34][1] = "Es independiente de la plataforma";
 choices[34][2] = "Es independiente del HW";
 choices[34][3] = "Write once run everywhere";
 answers[34] = 3;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3278. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";
 preguntaids[34] = 3278


//  Id pregunta: 3301 Año de creación de pregunta: 2004
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura hardware NUMA es cierta?";
 choices[35]= new Array();
 choices[35][0] = "Se tarda m&aacute;s en acceder a ciertas zonas de memoria que a otras";
 choices[35][1] = "Cada procesador tiene su propia memoria local";
 choices[35][2] = "Cada procesador puede acceder a las memorias de otros procesadores";
 choices[35][3] = "Todas las anteriores son ciertas";
 answers[35] = 3;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3301. ";
 preguntaids[35] = 3301


//  Id pregunta: 3240 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[36]= new Array();
 choices[36][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[36][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[36][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[36][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[36] = 0;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3240. ";
 preguntaids[36] = 3240


//  Id pregunta: 3288 Año de creación de pregunta: 2003
 questions[37]= "38)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[37]= new Array();
 choices[37][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad";
 choices[37][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[37][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[37][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[37] = 0;
 units[37] = ['67'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3288. ";
 preguntaids[37] = 3288


//  Id pregunta: 3266 Año de creación de pregunta: 2003
 questions[38]= "39)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "PL/SQL.";
 choices[38][1] = "JSQL.";
 choices[38][2] = "SQL embebido.";
 choices[38][3] = "SQL anfitri&oacute;n.";
 answers[38] = 2;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3266. Junta Andaluc&iacute;a";
 preguntaids[38] = 3266


//  Id pregunta: 3251 Año de creación de pregunta: 2003
 questions[39]= "40)  En el sistema operativo UNIX los estados en los que puede estar un proceso :";
 choices[39]= new Array();
 choices[39][0] = "Son dos, donde el proceso 0 corresponde al proceso intercambiador";
 choices[39][1] = "Son 8, donde el proceso 0 se denimina init, y es el antecesor de todos los procesos";
 choices[39][2] = "Son 9, entre los que se encuentran los procesos ejecuci&oacute;n en modo de usuario y ejecuci&oacute;n en modo n&uacute;cleo";
 choices[39][3] = "Son 8, entre ellos el proceso cerrado o nonato que significa que est&aacute; aguardando un suceso y tiene que intercambiarse desde la memoria secundaria";
 answers[39] = 2;
 units[39] = ['57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3251. ";
 preguntaids[39] = 3251


//  Id pregunta: 3302 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la configuraci&oacute;n de discos RAID 5 son ciertas?";
 choices[40]= new Array();
 choices[40][0] = "Existe un disco de paridad dedicado";
 choices[40][1] = "La paridad de calcula bas&aacute;ndose en la operaci&oacute;n l&oacute;gica XOR";
 choices[40][2] = "Es la configuraci&oacute;n id&oacute;nea para aplicaciones de alta transferencia de datos";
 choices[40][3] = "Todas las anteriores son ciertas";
 answers[40] = 1;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3302. ";
 preguntaids[40] = 3302


//  Id pregunta: 3246 Año de creación de pregunta: 2003
 questions[41]= "42)  En el contexto de las estructuras din&aacute;micas de datos, una cola es:";
 choices[41]= new Array();
 choices[41][0] = "Un tipo de dato que contiene la direcci&oacute;n en memoria de un nodo.";
 choices[41][1] = "Una lista LIFO (Last In First Out).";
 choices[41][2] = "Una estructura de datos no lineal donde la inserci&oacute;n siempre es por el extremo inferior.";
 choices[41][3] = "Una secuencia de elementos en el que las operaciones de inserci&oacute;n y borrado se realiza sobre extremos opuestos de la secuencia.";
 answers[41] = 3;
 units[41] = ['56'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3246. Junta Andaluc&iacute;a";
 preguntaids[41] = 3246


//  Id pregunta: 3260 Año de creación de pregunta: 2003
 questions[42]= "43)  En sistema operativo UNIX indicar, entre las siguientes caracter&iacute;sticas cu&aacute;l no corresponde a cualquier sistema de archivo usado: VFS, NFS, etc&hellip;";
 choices[42]= new Array();
 choices[42][0] = "Capacidad de crear y destruir archivos";
 choices[42][1] = "Crecimiento din&aacute;mico de archivos";
 choices[42][2] = "Tratamiento de cualquier dispositivo perof&eacute;rico como archivo";
 choices[42][3] = "Estructura matricial";
 answers[42] = 3;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3260. ";
 preguntaids[42] = 3260


//  Id pregunta: 3295 Año de creación de pregunta: 2004
 questions[43]= "44)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[43]= new Array();
 choices[43][0] = "Firmware";
 choices[43][1] = "Interfaz de usuario";
 choices[43][2] = "Middleware";
 choices[43][3] = "Everyware";
 answers[43] = 2;
 units[43] = ['55'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3295. ";
 preguntaids[43] = 3295


//  Id pregunta: 3253 Año de creación de pregunta: 2003
 questions[44]= "45)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[44]= new Array();
 choices[44][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[44][1] = "Para establecer reglas de integridad.";
 choices[44][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[44][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[44] = 1;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3253. ";
 preguntaids[44] = 3253


//  Id pregunta: 3273 Año de creación de pregunta: 2003
 questions[45]= "46)  Las l&iacute;neas de un bus se pueden clasificar en grupos funcionales de:";
 choices[45]= new Array();
 choices[45][0] = "L&iacute;neas de direcci&oacute;n y de control.";
 choices[45][1] = "L&iacute;neas de entrada y salida.";
 choices[45][2] = "L&iacute;neas de datos, l&iacute;neas de direcci&oacute;n y l&iacute;neas de control.";
 choices[45][3] = "L&iacute;neas de control de operaci&oacute;n y de salida.";
 answers[45] = 2;
 units[45] = ['52'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3273. Junta Andaluc&iacute;a";
 preguntaids[45] = 3273


//  Id pregunta: 3299 Año de creación de pregunta: 2003
 questions[46]= "47)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en torno a las matrices de discos RAID:";
 choices[46]= new Array();
 choices[46][0] = "RAID-0. Tambi&eacute;n llamado modo &quot;stripe'' o distribuci&oacute;n por bandas. Las lecturas y escrituras se realizan en serie en los dispositivos.";
 choices[46][1] = "RAID-1. Se mantiene en un disco un duplicado exacto de la informaci&oacute;n del otro disco.";
 choices[46][2] = "RAID-5. Se guarda la informaci&oacute;n de paridad en un &uacute;nico disco y escribe los datos a los otros discos de forma parecida a un RAID-0.";
 choices[46][3] = "RAID-4. La informaci&oacute;n de paridad se distribuye uniformemente entre los discos participantes,";
 answers[46] = 1;
 units[46] = ['53'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3299. ";
 preguntaids[46] = 3299


//  Id pregunta: 3290 Año de creación de pregunta: 2003
 questions[47]= "48)  Una de las formas de almacenar las Bases de Datos es la organizaci&oacute;n Hash. &iquest;En qu&eacute; consiste?";
 choices[47]= new Array();
 choices[47][0] = "En la organizaci&oacute;n Hash se accede al registro deseado directamente a trav&eacute;s del &iacute;ndice o clave.";
 choices[47][1] = "Consiste en ir indexando tablas de &iacute;ndices hasta tener un solo bloque mediante sucesivas iteraciones.";
 choices[47][2] = "Consiste en tener una serie de grupos numerados de modo que cuando se va a acceder a un registro conociendo la clave primaria se aplica sobre ella una funci&oacute;n algor&iacute;tmica obteni&eacute;ndose el grupo en el que ha de estar el registro deseado.";
 choices[47][3] = "En la organizaci&oacute;n Hash los registros se almacenan utilizando dos &iacute;ndices, uno primario que se&ntilde;ala los registros de acceso m&aacute;s frecuentes y otro secundario definido con alg&uacute;n criterio.";
 answers[47] = 2;
 units[47] = ['61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3290. ";
 preguntaids[47] = 3290


//  Id pregunta: 3315 Año de creación de pregunta: 2004
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[48]= new Array();
 choices[48][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[48][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito, m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[48][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[48][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[48] = 3;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3315. MAP-B 2003";
 preguntaids[48] = 3315


//  Id pregunta: 3280 Año de creación de pregunta: 2003
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes frases es incorrecta, cuando hablamos de una arquitectura cliente-servidor:";
 choices[49]= new Array();
 choices[49][0] = "El entorno en que se desenvuelve una arquitectura cliente-servidor es homog&eacute;neo y por tanto tiene la ventaja de no requerir interfaz para su comunicaci&oacute;n";
 choices[49][1] = "Se distinguen dos tipos de arquitectura cliente-servidor: modelo de 2 capas y modelo de 3 capas";
 choices[49][2] = "Se trata de una arquitectura escalable, es decir susceptible de ampliarse tanto verticalmente (con mayor n&uacute;mero de servidores) como horizontalmente (con mayor n&uacute;mero de clientes)";
 choices[49][3] = "El proceso clinte proporciona la interfaz del usuario y el proceso servidor los medios para gestionar los recursos compartidos";
 answers[49] = 0;
 units[49] = ['55'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3280. ";
 preguntaids[49] = 3280


//  Id pregunta: 3287 Año de creación de pregunta: 2003
 questions[50]= "51)  Sobre el entorno WINE de Linux se puede decir que:";
 choices[50]= new Array();
 choices[50][0] = "Es un emulador de Windows";
 choices[50][1] = "Es una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[50][2] = "Permite ejecutar todas las aplicaciones de Windows 32 sobre Linux";
 choices[50][3] = "Es un sistema de gesti&oacute;n de ventanas para Linux con la apariencia de Windows";
 answers[50] = 1;
 units[50] = ['66'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3287. ";
 preguntaids[50] = 3287


//  Id pregunta: 3238 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;Qu&eacute; es JDBC?:";
 choices[51]= new Array();
 choices[51][0] = "Un modelo de objetos ActiveX.";
 choices[51][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[51][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[51][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[51] = 3;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3238. Junta Andaluc&iacute;a";
 preguntaids[51] = 3238


//  Id pregunta: 3298 Año de creación de pregunta: 2004
 questions[52]= "53)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[52]= new Array();
 choices[52][0] = "Leer ficheros locales";
 choices[52][1] = "Cargar librer&iacute;as nativas";
 choices[52][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[52][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[52] = 2;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3298. ";
 preguntaids[52] = 3298


//  Id pregunta: 3259 Año de creación de pregunta: 2003
 questions[53]= "54)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[53]= new Array();
 choices[53][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[53][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n pueda interactuar con distintos sistemas gestores de base de datos";
 choices[53][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[53][3] = "Permite que lo que un sistema gestor pueda hacerle sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[53] = 2;
 units[53] = ['61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3259. ";
 preguntaids[53] = 3259


//  Id pregunta: 3236 Año de creación de pregunta: 2003
 questions[54]= "55)  &iquest;En cu&aacute;l de los siguientes modelos de arquitectura cliente-servidor, el cliente asume mayor carga de proceso?:";
 choices[54]= new Array();
 choices[54][0] = "Base de datos remota.";
 choices[54][1] = "Proceso distribuido.";
 choices[54][2] = "Presentaci&oacute;n remota.";
 choices[54][3] = "Presentaci&oacute;n distribuida.";
 answers[54] = 0;
 units[54] = ['55'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3236. Junta Andaluc&iacute;a";
 preguntaids[54] = 3236


//  Id pregunta: 3285 Año de creación de pregunta: 2003
 questions[55]= "56)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[55]= new Array();
 choices[55][0] = "No puede venderlo";
 choices[55][1] = "Integrarlo en otro SW y venderlo como propietario";
 choices[55][2] = "Venderlo a otra empresa como software libre";
 choices[55][3] = "Venderlo a otra empresa como software propietario";
 answers[55] = 2;
 units[55] = ['66'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3285. ";
 preguntaids[55] = 3285


//  Id pregunta: 3256 Año de creación de pregunta: 2003
 questions[56]= "57)  En los GIS, el formato empleado para almacenamiento de la informaci&oacute;n gr&aacute;fica mediante la t&eacute;cnica de descomponer cada objeto en una matriz de celdas de id&eacute;ntico tama&ntilde;o (pixel) se corresponde con el formato:";
 choices[56]= new Array();
 choices[56][0] = "Vectorial.";
 choices[56][1] = "Shape.";
 choices[56][2] = "Mapa de bits.";
 choices[56][3] = "R&aacute;ster.";
 answers[56] = 3;
 units[56] = ['71'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3256. Junta Andaluc&iacute;a";
 preguntaids[56] = 3256


//  Id pregunta: 3245 Año de creación de pregunta: 2004
 questions[57]= "58)  La criptograf&iacute;a cu&aacute;ntica es una t&eacute;cnica basada en";
 choices[57]= new Array();
 choices[57][0] = "Polarizaci&oacute;n de la luz";
 choices[57][1] = "Propiedades de los campos magn&eacute;ticos";
 choices[57][2] = "Ultrasonidos";
 choices[57][3] = "Transmisi&oacute;n de datos a muy alta frecuencia";
 answers[57] = 0;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3245. ";
 preguntaids[57] = 3245


//  Id pregunta: 3311 Año de creación de pregunta: 2004
 questions[58]= "59)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[58]= new Array();
 choices[58][0] = "CTR";
 choices[58][1] = "CBC";
 choices[58][2] = "CFB";
 choices[58][3] = "DFB";
 answers[58] = 3;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3311. ";
 preguntaids[58] = 3311


//  Id pregunta: 3303 Año de creación de pregunta: 2004
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[59]= new Array();
 choices[59][0] = "LCMS (Learning Content Management System)";
 choices[59][1] = "LOMS (Learning Objects Management System)";
 choices[59][2] = "CRM (Customer Relationship Management)";
 choices[59][3] = "Todos los anteriores";
 answers[59] = 0;
 units[59] = ['70'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3303. ";
 preguntaids[59] = 3303


//  Id pregunta: 3312 Año de creación de pregunta: 2004
 questions[60]= "61)  Acceso directo a memoria (DMA) es:";
 choices[60]= new Array();
 choices[60][0] = "Mecanismo por el que se transfieren datos entre un sistema de entrada/salida y el sistema de memoria sin la intervenci&oacute;n de la CPU.";
 choices[60][1] = "Un modo de funcionamiento opcional del hardware que permite acelerar el acceso a discos duros.";
 choices[60][2] = "Un modo de funcionamiento opcional del software que permite acelerar el acceso a discos duros.";
 choices[60][3] = "Un modo de acceso a dispositivos de entrada/salida en el que cada uno de ellos esta &quot;mapeado&quot; a una direcci&oacute;n de memoria.";
 answers[60] = 0;
 units[60] = ['52'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3312. ";
 preguntaids[60] = 3312


//  Id pregunta: 3291 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[61]= new Array();
 choices[61][0] = "Lynx";
 choices[61][1] = "Epiphany";
 choices[61][2] = "Firefox";
 choices[61][3] = "Internet Explorer";
 answers[61] = 3;
 units[61] = ['66'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3291. ";
 preguntaids[61] = 3291


//  Id pregunta: 3296 Año de creación de pregunta: 2004
 questions[62]= "63)  &iquest;Cu&aacute;l no es una funci&oacute;n del Administrador de Base de Datos?";
 choices[62]= new Array();
 choices[62][0] = "Dise&ntilde;o de la base de datos";
 choices[62][1] = "Supervisi&oacute;n del funcionamiento de la base de datos";
 choices[62][2] = "Correci&oacute;n de errores de entrada de datos";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 2;
 units[62] = ['60'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3296. ";
 preguntaids[62] = 3296


//  Id pregunta: 3310 Año de creación de pregunta: 2004
 questions[63]= "64)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[63]= new Array();
 choices[63][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[63][1] = "Atomicity, Consistency, Integration and Durability";
 choices[63][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = 0;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3310. ";
 preguntaids[63] = 3310


//  Id pregunta: 3276 Año de creación de pregunta: 2003
 questions[64]= "65)  Para cambiar los privilegios de un fichero en UNIX qu&eacute; comando se utiliza";
 choices[64]= new Array();
 choices[64][0] = "pwd";
 choices[64][1] = "chmod";
 choices[64][2] = "rmdir";
 choices[64][3] = "cat";
 answers[64] = 1;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3276. ";
 preguntaids[64] = 3276


//  Id pregunta: 3264 Año de creación de pregunta: 2003
 questions[65]= "66)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[65]= new Array();
 choices[65][0] = "TripleDES, RC4 y SHA-1";
 choices[65][1] = "DES, RC2 y MD5";
 choices[65][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[65][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5";
 answers[65] = 3;
 units[65] = ['76'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3264. ";
 preguntaids[65] = 3264


//  Id pregunta: 3306 Año de creación de pregunta: 2003
 questions[66]= "67)  Respecto a tecnolog&iacute;as RAID:";
 choices[66]= new Array();
 choices[66][0] = "RAID 0 aumenta el rendimiento";
 choices[66][1] = "RAID 1 utiliza c&oacute;digos hamming";
 choices[66][2] = "RAID 2 utiliza discos espejo";
 choices[66][3] = "RAID 5 utiliza discos espejo";
 answers[66] = 0;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3306. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";
 preguntaids[66] = 3306


//  Id pregunta: 3293 Año de creación de pregunta: 2003
 questions[67]= "68)  Indique la afirmaci&oacute;n correcta:";
 choices[67]= new Array();
 choices[67][0] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[67][1] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[67][2] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 choices[67][3] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 answers[67] = 0;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3293. EXAMEN CASTILLA LA MANCHA";
 preguntaids[67] = 3293


//  Id pregunta: 3242 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[68]= new Array();
 choices[68][0] = "zx81.";
 choices[68][1] = "IBM XT.";
 choices[68][2] = "APPLE.";
 choices[68][3] = "Amstrad CPC 128.";
 answers[68] = 2;
 units[68] = ['56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3242. Junta Andaluc&iacute;a";
 preguntaids[68] = 3242


//  Id pregunta: 3275 Año de creación de pregunta: 2003
 questions[69]= "70)  Los thin clients son:";
 choices[69]= new Array();
 choices[69][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[69][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[69][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[69][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[69] = 0;
 units[69] = ['55'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3275. Junta Andaluc&iacute;a";
 preguntaids[69] = 3275


//  Id pregunta: 3247 Año de creación de pregunta: 2003
 questions[70]= "71)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[70]= new Array();
 choices[70][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[70][1] = "Una biblioteca de clases Java.";
 choices[70][2] = "Una interfaz de usuario.";
 choices[70][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[70] = 0;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3247. Junta Andaluc&iacute;a";
 preguntaids[70] = 3247


//  Id pregunta: 3243 Año de creación de pregunta: 2004
 questions[71]= "72)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[71]= new Array();
 choices[71][0] = "Es utilizado para firmar digitalmente";
 choices[71][1] = "Fue propuesto por Diffie y Hellman";
 choices[71][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[71][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[71] = 1;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3243. ";
 preguntaids[71] = 3243


//  Id pregunta: 3289 Año de creación de pregunta: 2003
 questions[72]= "73)  Un debugger (depurador) de programas :";
 choices[72]= new Array();
 choices[72][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[72][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[72][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[72][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[72] = 1;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3289. ";
 preguntaids[72] = 3289


//  Id pregunta: 3254 Año de creación de pregunta: 2003
 questions[73]= "74)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[73]= new Array();
 choices[73][0] = "&lt;/TITLE&gt;";
 choices[73][1] = "&lt;TITLE&gt;";
 choices[73][2] = "/&lt;TITLE&gt;";
 choices[73][3] = "/TITLE";
 answers[73] = 0;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3254. ";
 preguntaids[73] = 3254


//  Id pregunta: 3271 Año de creación de pregunta: 2003
 questions[74]= "75)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[74]= new Array();
 choices[74][0] = "150 KB/seg.";
 choices[74][1] = "3600 KB/seg.";
 choices[74][2] = "7200 KB/seg.";
 choices[74][3] = "3 MB/seg.";
 answers[74] = 2;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3271. Junta Andaluc&iacute;a";
 preguntaids[74] = 3271


