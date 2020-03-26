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
//  Id pregunta: 8048 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO corresponde a una unidad de estado s&oacute;lido (SSD)?";
 choices[0]= new Array();
 choices[0][0] = "No contiene partes m&oacute;viles.";
 choices[0][1] = "Son discos menos ruidosos que los magn&eacute;ticos.";
 choices[0][2] = "El precio por MB es menor que en los discos magn&eacute;ticos";
 choices[0][3] = "Existen para varias &iacute;nterfaces (SATA, PATA, etc.)";
 answers[0] = 2;
 units[0] = ['53'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8048. Examen TIC A2 2010";
 preguntaids[0] = 8048


//  Id pregunta: 8166 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[1]= new Array();
 choices[1][0] = "Javascripts";
 choices[1][1] = "Applets";
 choices[1][2] = "JSP";
 choices[1][3] = "VisualScript";
 answers[1] = 2;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8166. Examen TIC A2 2010 interna";
 preguntaids[1] = 8166


//  Id pregunta: 8212 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[2]= new Array();
 choices[2][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[2][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[2][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[2][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[2] = 3;
 units[2] = ['60', '61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8212. Examen TIC A2 2010 interna";
 preguntaids[2] = 8212


//  Id pregunta: 8193 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Qu&eacute; es el World Wide Name (WWN)?";
 choices[3]= new Array();
 choices[3][0] = "Un identificador &uacute;nico de 8 byles en una red de almacenamiento";
 choices[3][1] = "Uno de los servidores DNS ra&iacute;z";
 choices[3][2] = "Un nuevo dominio de Internet basado en IPv6 que va a sustituir los actuales dominios basados en IPv4.";
 choices[3][3] = "Un protocolo que permite identificar un equipo y sus recursos con independencia del tipo de red y sistema operativo";
 answers[3] = 0;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8193. Examen TIC A2 2010 interna";
 preguntaids[3] = 8193


//  Id pregunta: 8072 Año de creación de pregunta: 2011
 questions[4]= "5)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[4]= new Array();
 choices[4][0] = "SJF (Shortest Job First)";
 choices[4][1] = "FIFO (First In First Out";
 choices[4][2] = "Por prioridad";
 choices[4][3] = "Round Robin";
 answers[4] = 3;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8072. ";
 preguntaids[4] = 8072


//  Id pregunta: 8123 Año de creación de pregunta: 2011
 questions[5]= "6)  El IVR (lnteractive Voice Response), para brindar mejores servicios involucra otras tecnolog&iacute;as, indicar la ERR&Oacute;NEA:";
 choices[5]= new Array();
 choices[5][0] = "DTMF (Dual Tone Multi Frequency) es la tecnolog&iacute;a de tonos utilizada para el marcado.";
 choices[5][1] = "TTS (Text To Speech) le da capacidad de transformar texto a audio que escucha el operador.";
 choices[5][2] = "ASR (Reconocimiento de Voz) le da la capacidad de reconocer las palabras del usuario y aceptarlas como &oacute;rdenes.";
 choices[5][3] = "MSCML (Media Server Control Markup Language): lo que le permite controlar cualquier Media Resource Function (MRF).";
 answers[5] = 3;
 units[5] = ['81'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8123. Examen TIC A2 2010";
 preguntaids[5] = 8123


//  Id pregunta: 8186 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[6]= new Array();
 choices[6][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[6][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[6][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[6][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[6] = 0;
 units[6] = ['60', '61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8186. Examen TIC A2 2010 interna";
 preguntaids[6] = 8186


//  Id pregunta: 8173 Año de creación de pregunta: 2011
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP?";
 choices[7]= new Array();
 choices[7][0] = "WSDL";
 choices[7][1] = "UDDI";
 choices[7][2] = "XML";
 choices[7][3] = "REST";
 answers[7] = 0;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8173. Examen TIC A2 2010 interna";
 preguntaids[7] = 8173


//  Id pregunta: 8198 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[8]= new Array();
 choices[8][0] = "En la especializaci&oacute;n un supertipo se descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[8][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[8][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[8][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[8] = 0;
 units[8] = ['60', '61'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8198. Examen TIC A2 2010 interna";
 preguntaids[8] = 8198


//  Id pregunta: 8170 Año de creación de pregunta: 2011
 questions[9]= "10)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[9]= new Array();
 choices[9][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[9][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[9][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[9][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[9] = 0;
 units[9] = ['63'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8170. Examen TIC A2 2010 interna";
 preguntaids[9] = 8170


//  Id pregunta: 8089 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[10]= new Array();
 choices[10][0] = "TPC-C.";
 choices[10][1] = "TPC-R.";
 choices[10][2] = "TPC-H.";
 choices[10][3] = "TPC-A.";
 answers[10] = 0;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8089. Analista Ayto. Madrid 2010";
 preguntaids[10] = 8089


//  Id pregunta: 8099 Año de creación de pregunta: 2011
 questions[11]= "12)  La regla 2 de Codd es la del:";
 choices[11]= new Array();
 choices[11][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[11][1] = "Acceso garantizado";
 choices[11][2] = "Actualizaci&oacute;n de vistas";
 choices[11][3] = "Integridad referencial";
 answers[11] = 1;
 units[11] = ['60', '61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8099. Analista Ayto. Madrid 2010";
 preguntaids[11] = 8099


//  Id pregunta: 8199 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[12]= new Array();
 choices[12][0] = "Regla de la no subversi&oacute;n.";
 choices[12][1] = "Regla de la no concurrencia.";
 choices[12][2] = "Regla de la restricci&oacute;n.";
 choices[12][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[12] = 0;
 units[12] = ['60', '61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8199. Examen TIC A2 2010 interna";
 preguntaids[12] = 8199


//  Id pregunta: 8122 Año de creación de pregunta: 2011
 questions[13]= "14)  Actualmente, el World Wide Web Consortium (W3C) trabaja en los siguientes est&aacute;ndares y herramientas de integraci&oacute;n de datos de entrada. Seleccionar la respuesta ERR&Oacute;NEA:";
 choices[13]= new Array();
 choices[13][0] = "SRGS tiene corno funci&oacute;n principal permitir que una aplicaci&oacute;n de voz indique a un reconocedor qu&eacute; es lo que tiene que escuchar, es decir, palabras, modelos en los que estas palabras surgen, lenguaje hablado de cada palabra, etc.";
 choices[13][1] = "SSML, lenguaje de marcado de S&iacute;ntesis del Habla, basado en XML, forma parte del proceso de salida de informaci&oacute;n y funciona como componente de conversi&oacute;n ayudando a generar habla sint&eacute;tica.";
 choices[13][2] = "SlSR permite describir anotaciones sobre reglas gramaticales para extraer resultados sem&aacute;nticos a trav&eacute;s del reconocimiento del habla. El resultado obtenido puede expresarse en formato XML, usando el lenguaje EMMA.";
 choices[13][3] = "EMMA es un lenguaje de etiquetado que permite crear di&aacute;logos con los que se puede interactuar escuchando comandos hablados, controlables a trav&eacute;s de entradas de voz";
 answers[13] = 3;
 units[13] = ['81'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8122. Examen TIC A2 2010";
 preguntaids[13] = 8122


//  Id pregunta: 8190 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[14]= new Array();
 choices[14][0] = "La paridad est&aacute; en un disco dedicado";
 choices[14][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[14][2] = "Tiene un bajo coste de redundancia";
 choices[14][3] = "Se necesitan al menos 3 discos";
 answers[14] = 0;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8190. Examen TIC A2 2010 interna";
 preguntaids[14] = 8190


//  Id pregunta: 8039 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[15]= new Array();
 choices[15][0] = "Las redes neuronales.";
 choices[15][1] = "Look and Find.";
 choices[15][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[15][3] = "Las redes bayesianas.";
 answers[15] = 1;
 units[15] = ['68', '72'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8039. Examen TIC A2 2010";
 preguntaids[15] = 8039


//  Id pregunta: 8047 Año de creación de pregunta: 2011
 questions[16]= "17)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[16]= new Array();
 choices[16][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[16][1] = "Tiene muchos modos de direccionamiento";
 choices[16][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[16][3] = "Su unidad de control es cableada";
 answers[16] = 3;
 units[16] = ['51'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8047. Examen TIC A2 2010";
 preguntaids[16] = 8047


//  Id pregunta: 8180 Año de creación de pregunta: 2011
 questions[17]= "18)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "chmod 766 ejemplo.txt";
 choices[17][1] = "chmod 751 ejemplo.txt";
 choices[17][2] = "chmod 761 ejemplo.txt";
 choices[17][3] = "chmod 754 ejemplo.txt";
 answers[17] = 3;
 units[17] = ['57'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8180. Examen TIC A2 2010 interna";
 preguntaids[17] = 8180


//  Id pregunta: 8157 Año de creación de pregunta: 2010
 questions[18]= "19)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[18]= new Array();
 choices[18][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[18][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[18][2] = "El intercambio de claves Diffie-Hellman.";
 choices[18][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[18] = 2;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8157. Examen TIC A2 2010 interna";
 preguntaids[18] = 8157


//  Id pregunta: 8245 Año de creación de pregunta: 2011
 questions[19]= "20)  Indique el puerto utilizado por el protocolo LDAP sobre SSL:";
 choices[19]= new Array();
 choices[19][0] = "563";
 choices[19][1] = "443";
 choices[19][2] = "336";
 choices[19][3] = "636";
 answers[19] = 3;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8245. Examen UPM A2 2011";
 preguntaids[19] = 8245


//  Id pregunta: 8056 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd?";
 choices[20]= new Array();
 choices[20][0] = "Independencia f&iacute;sica de los datos.";
 choices[20][1] = "Independencia de distribuci&oacute;n.";
 choices[20][2] = "Independencia de actualizaci&oacute;n.";
 choices[20][3] = "Independencia de integridad.";
 answers[20] = 2;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8056. Examen TIC A2 2010";
 preguntaids[20] = 8056


//  Id pregunta: 8237 Año de creación de pregunta: 2011
 questions[21]= "22)  El protocolo OCSP, se utiliza en:";
 choices[21]= new Array();
 choices[21][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[21][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[21][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[21][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[21] = 0;
 units[21] = ['78'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8237. Examen UPM A2 2011";
 preguntaids[21] = 8237


//  Id pregunta: 8208 Año de creación de pregunta: 2011
 questions[22]= "23)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[22]= new Array();
 choices[22][0] = "(A, B, C), (A, B, D).";
 choices[22][1] = "(A, B, C), (B, D).";
 choices[22][2] = "(A, B, C),  (A, D).";
 choices[22][3] = "Ya est&aacute; en 2FN.";
 answers[22] = 1;
 units[22] = ['60', '61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8208. Examen TIC A2 2010 interna";
 preguntaids[22] = 8208


//  Id pregunta: 8167 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[23]= new Array();
 choices[23][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[23][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[23][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[23][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[23] = 2;
 units[23] = ['63'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8167. Examen TIC A2 2010 interna";
 preguntaids[23] = 8167


//  Id pregunta: 8209 Año de creación de pregunta: 2011
 questions[24]= "25)  En la arquitectura ANSI SQL la capacidad de modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "Independencia f&iacute;sica.";
 choices[24][1] = "Independencia L&oacute;gica.";
 choices[24][2] = "Integridad de la entidad";
 choices[24][3] = "Integridad referencial.";
 answers[24] = 0;
 units[24] = ['60', '61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8209. Examen TIC A2 2010 interna";
 preguntaids[24] = 8209


//  Id pregunta: 8169 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[25]= new Array();
 choices[25][0] = "JavaScript";
 choices[25][1] = "JavaBeans";
 choices[25][2] = "Servlets";
 choices[25][3] = "JSP";
 answers[25] = 0;
 units[25] = ['64'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8169. Examen TIC A2 2010 interna";
 preguntaids[25] = 8169


//  Id pregunta: 8100 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l es la velocidad del est&aacute;ndar USB 3.0?:";
 choices[26]= new Array();
 choices[26][0] = "600 MB/s";
 choices[26][1] = "480 MB/s";
 choices[26][2] = "4800 MB/s";
 choices[26][3] = "1092 MB/s";
 answers[26] = 0;
 units[26] = ['51'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8100. Analista Ayto. Madrid 2010";
 preguntaids[26] = 8100


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[27]= new Array();
 choices[27][0] = "Apache Tomcat";
 choices[27][1] = "JBOSS";
 choices[27][2] = "WebSphere Application Server";
 choices[27][3] = "Glassfish";
 answers[27] = 0;
 units[27] = ['63', '64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[27] = 8163


//  Id pregunta: 8061 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Qu&eacute; tipo de conector de alta velocidad (anteriormente conocido por su nombre clave Light Peak) hace uso de la tecnolog&iacute;a &oacute;ptica llegando a ofrecer anchos de banda de hasta 10 Gbps?";
 choices[28]= new Array();
 choices[28][0] = "FireWire";
 choices[28][1] = "Thunderbolt";
 choices[28][2] = "USB";
 choices[28][3] = "HDMI";
 answers[28] = 1;
 units[28] = ['51'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8061. ";
 preguntaids[28] = 8061


//  Id pregunta: 8091 Año de creación de pregunta: 2011
 questions[29]= "30)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[29]= new Array();
 choices[29][0] = "UDDI";
 choices[29][1] = "SOAP";
 choices[29][2] = "WSDL";
 choices[29][3] = "XML";
 answers[29] = 0;
 units[29] = ['55'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8091. Analista Ayto. Madrid 2010";
 preguntaids[29] = 8091


//  Id pregunta: 8051 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes pol&iacute;ticas de planificaci&oacute;n es de tipo preemptive?";
 choices[30]= new Array();
 choices[30][0] = "Shortest Job First (SJF)";
 choices[30][1] = "Shortest Remaining Time First (SRTF).";
 choices[30][2] = "First-come, first-served (FCFS)";
 choices[30][3] = "Shortest Process Next (SPN).";
 answers[30] = 1;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8051. Examen TIC A2 2010";
 preguntaids[30] = 8051


//  Id pregunta: 8162 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[31]= new Array();
 choices[31][0] = "JRE";
 choices[31][1] = "M&aacute;quina Virtual de Java";
 choices[31][2] = "JDK";
 choices[31][3] = "AWT";
 answers[31] = 2;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8162. ";
 preguntaids[31] = 8162


//  Id pregunta: 8181 Año de creación de pregunta: 2011
 questions[32]= "33)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[32]= new Array();
 choices[32][0] = "Listado de todos los equipos";
 choices[32][1] = "Listado de software usado en cada equipo.";
 choices[32][2] = "Esquema de la red.";
 choices[32][3] = "Todos son necesarios.";
 answers[32] = 3;
 units[32] = ['56'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8181. Examen TIC A2 2010 interna";
 preguntaids[32] = 8181


//  Id pregunta: 8059 Año de creación de pregunta: 2011
 questions[33]= "34)  Dentro de las arquitecturas orientadas a servicios, &iquest;cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que es un ESB (Enterprise Service Bus)?";
 choices[33]= new Array();
 choices[33][0] = "Es el encargado de definir y verificar el cumplimiento de los acuerdos de nivel de servicio";
 choices[33][1] = "Es una infraestructura y un sistema de eventos que permiten conectar cualquier recurso de tecnolog&iacute;as de la informaci&oacute;n sin importar la tecnolog&iacute;a que utiliza el recurso";
 choices[33][2] = "Es el repositorio de datos donde est&aacute; almacenada la informaci&oacute;n que quiere ser compartida a trav&eacute;s de los web services";
 choices[33][3] = "Es el registro y repositorio de los web services";
 answers[33] = 1;
 units[33] = ['55'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8059. Examen TIC A2 2010";
 preguntaids[33] = 8059


//  Id pregunta: 8197 Año de creación de pregunta: 2011
 questions[34]= "35)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[34]= new Array();
 choices[34][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[34][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[34][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[34][3] = "El conector SATA posee 68 pines";
 answers[34] = 0;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8197. Examen TIC A2 2010 interna";
 preguntaids[34] = 8197


//  Id pregunta: 8248 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[35]= new Array();
 choices[35][0] = "iSCSI";
 choices[35][1] = "sSCSI";
 choices[35][2] = "iFCP";
 choices[35][3] = "FCIP";
 answers[35] = 3;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8248. Examen UPM A2 2011";
 preguntaids[35] = 8248


//  Id pregunta: 8176 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[36]= new Array();
 choices[36][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[36][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[36][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad normal y marca &eacute;stos como copiados.";
 choices[36][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad normal, y marca todos estos archivos como copiados.";
 answers[36] = 3;
 units[36] = ['53', '100'];
 blocks[36] = ['B2', 'B3'];
 comments[36] = "Id Pregunta: 8176. Examen TIC A2 2010 interna";
 preguntaids[36] = 8176


//  Id pregunta: 8211 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "&Aacute;rbol Binario";
 choices[37][1] = "Lista.";
 choices[37][2] = "Lista enlazada.";
 choices[37][3] = "&Aacute;rbol-B";
 answers[37] = 3;
 units[37] = ['60'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8211. Examen TIC A2 2010 interna";
 preguntaids[37] = 8211


//  Id pregunta: 8085 Año de creación de pregunta: 2011
 questions[38]= "39)  En los GIS, el sistema UTM:";
 choices[38]= new Array();
 choices[38][0] = "Asocia cada elemento a una clave de zona.";
 choices[38][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[38][2] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 choices[38][3] = "Ninguna de las anteriores.";
 answers[38] = 1;
 units[38] = ['71'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8085. Analista Ayto. Madrid 2010";
 preguntaids[38] = 8085


//  Id pregunta: 8164 Año de creación de pregunta: 2011
 questions[39]= "40)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[39]= new Array();
 choices[39][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[39][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[39][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[39][3] = "No existen los ficheros WAR en J2EE";
 answers[39] = 1;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8164. Examen TIC A2 2010 interna";
 preguntaids[39] = 8164


//  Id pregunta: 8053 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux?";
 choices[40]= new Array();
 choices[40][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal.";
 choices[40][1] = "Lista las unidades extra&iacute;bles del sistema.";
 choices[40][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje.";
 choices[40][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal.";
 answers[40] = 2;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8053. Examen TIC A2 2010";
 preguntaids[40] = 8053


//  Id pregunta: 8052 Año de creación de pregunta: 2011
 questions[41]= "42)  Indique la respuesta INCORRECTA sobre el protocolo SMB:";
 choices[41]= new Array();
 choices[41][0] = "Protocolo de red que permite compartir archivos e impresoras (entre otras cosas) entre nodos de una red";
 choices[41][1] = "Microsoft a&ntilde;adi&oacute; algunas extensiones al protocolo y lo renombr&oacute; como CIFS (Common Internet File Syslem).";
 choices[41][2] = "Las iniciales SMB responden a Service Message Block";
 choices[41][3] = "SAMBA es una implementaci&oacute;n libre del protocolo para entornos GNU/Linux y Unix.";
 answers[41] = 2;
 units[41] = ['56'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8052. Examen TIC A2 2010";
 preguntaids[41] = 8052


//  Id pregunta: 8060 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[42]= new Array();
 choices[42][0] = "Bluetooth";
 choices[42][1] = "PayPal Mobile";
 choices[42][2] = "NFC (Near Field Communication)";
 choices[42][3] = "3D Secure";
 answers[42] = 2;
 units[42] = ['75', '108'];
 blocks[42] = ['B2', 'B4'];
 comments[42] = "Id Pregunta: 8060. ";
 preguntaids[42] = 8060


//  Id pregunta: 8206 Año de creación de pregunta: 2011
 questions[43]= "44)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[43]= new Array();
 choices[43][0] = "No tiene claves.";
 choices[43][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[43][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[43][3] = "Conserva la clave de la entidad fuerte.";
 answers[43] = 1;
 units[43] = ['60', '61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8206. Examen TIC A2 2010 interna";
 preguntaids[43] = 8206


//  Id pregunta: 8094 Año de creación de pregunta: 2011
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[44]= new Array();
 choices[44][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[44][1] = "&lt;meta&gt;";
 choices[44][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[44][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[44] = 2;
 units[44] = ['74'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8094. Analista Ayto. Madrid 2010";
 preguntaids[44] = 8094


//  Id pregunta: 8076 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes no es una ventaja del cloud computing?";
 choices[45]= new Array();
 choices[45][0] = "Prestaci&oacute;n de servicios a nivel mundial";
 choices[45][1] = "Implementaci&oacute;n m&aacute;s r&aacute;pida y con menos riesgos";
 choices[45][2] = "Contribuye al uso eficiente de la energ&iacute;a";
 choices[45][3] = "Aumento de la seguridad";
 answers[45] = 3;
 units[45] = ['52'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8076. ";
 preguntaids[45] = 8076


//  Id pregunta: 8092 Año de creación de pregunta: 2011
 questions[46]= "47)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[46]= new Array();
 choices[46][0] = "P&aacute;ginas Asp y VBScript";
 choices[46][1] = "Applet, Servlets, EJBs";
 choices[46][2] = "Javascript y p&aacute;ginas JSP";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 1;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8092. Analista Ayto. Madrid 2010";
 preguntaids[46] = 8092


//  Id pregunta: 8133 Año de creación de pregunta: 2011
 questions[47]= "48)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[47]= new Array();
 choices[47][0] = "Una relaci&oacute;n N:M.";
 choices[47][1] = "Una relaci&oacute;n 1:N.";
 choices[47][2] = "Una relaci&oacute;n 1:1.";
 choices[47][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite.";
 answers[47] = 0;
 units[47] = ['60', '61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8133. Examen TIC A2 2010 interna";
 preguntaids[47] = 8133


//  Id pregunta: 8174 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[48]= new Array();
 choices[48][0] = "SOLAP.";
 choices[48][1] = "DOLAP.";
 choices[48][2] = "WOLAP.";
 choices[48][3] = "RTOLAP.";
 answers[48] = 2;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8174. Examen TIC A2 2010 interna";
 preguntaids[48] = 8174


//  Id pregunta: 8093 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[49]= new Array();
 choices[49][0] = "JNDI";
 choices[49][1] = "JAAS";
 choices[49][2] = "JMS";
 choices[49][3] = "JNI";
 answers[49] = 1;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8093. Analista Ayto. Madrid 2010";
 preguntaids[49] = 8093


//  Id pregunta: 8057 Año de creación de pregunta: 2011
 questions[50]= "51)  Se dice que un SGBD cumple el ACID test si observa las propiedades de:";
 choices[50]= new Array();
 choices[50][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[50][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[50][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[50][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[50] = 3;
 units[50] = ['60'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8057. Examen TIC A2 2010";
 preguntaids[50] = 8057


//  Id pregunta: 8101 Año de creación de pregunta: 2011
 questions[51]= "52)  El PID 0 se asigna en Unix/Linux a:";
 choices[51]= new Array();
 choices[51][0] = "Swapper";
 choices[51][1] = "Init";
 choices[51][2] = "Page daemon";
 choices[51][3] = "Load";
 answers[51] = 0;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8101. Analista Ayto. Madrid 2010";
 preguntaids[51] = 8101


//  Id pregunta: 8086 Año de creación de pregunta: 2011
 questions[52]= "53)  Entre las ventajas de un Datawarehouse NO se encuentra:";
 choices[52]= new Array();
 choices[52][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[52][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[52][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[52][3] = "Facilitar la implementaci&oacute;n de cuadros de mando.";
 answers[52] = 0;
 units[52] = ['72'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8086. Analista Ayto. Madrid 2010";
 preguntaids[52] = 8086


//  Id pregunta: 8118 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)?";
 choices[53]= new Array();
 choices[53][0] = "/* Esto es un comentario */";
 choices[53][1] = "// Esto es un comentario";
 choices[53][2] = "# Esto es un comentario";
 choices[53][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[53] = 3;
 units[53] = ['74'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8118. Examen TIC A2 2010";
 preguntaids[53] = 8118


//  Id pregunta: 8187 Año de creación de pregunta: 2011
 questions[54]= "55)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[54]= new Array();
 choices[54][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[54][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[54][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[54][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[54] = 2;
 units[54] = ['60', '61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8187. Examen TIC A2 2010 interna";
 preguntaids[54] = 8187


//  Id pregunta: 8242 Año de creación de pregunta: 2011
 questions[55]= "56)  El permiso de Unix 500 pemiite:";
 choices[55]= new Array();
 choices[55][0] = "Lectura y escritura para el propietario del archivo";
 choices[55][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[55][2] = "Lectura y escritura para todos los usuarios";
 choices[55][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[55] = 1;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8242. Examen UPM A2 2011";
 preguntaids[55] = 8242


//  Id pregunta: 8168 Año de creación de pregunta: 2011
 questions[56]= "57)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[56]= new Array();
 choices[56][0] = "DataTableRelation";
 choices[56][1] = "DataView";
 choices[56][2] = "DataTable";
 choices[56][3] = "DataSet";
 answers[56] = 3;
 units[56] = ['63'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8168. Examen TIC A2 2010 interna";
 preguntaids[56] = 8168


//  Id pregunta: 8177 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[57]= new Array();
 choices[57][0] = "Microstrategy OLAP Services.";
 choices[57][1] = "MDX OLAP server.";
 choices[57][2] = "Oracle Database OLAP.";
 choices[57][3] = "Mondrian OLAP Server.";
 answers[57] = 1;
 units[57] = ['72'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8177. Examen TIC A2 2010 interna";
 preguntaids[57] = 8177


//  Id pregunta: 8055 Año de creación de pregunta: 2011
 questions[58]= "59)  COBOL es el acr&oacute;nimo de:";
 choices[58]= new Array();
 choices[58][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios).";
 choices[58][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios).";
 choices[58][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio).";
 choices[58][3] = "No es un acr&oacute;nimo.";
 answers[58] = 1;
 units[58] = ['60'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8055. Examen TIC A2 2010";
 preguntaids[58] = 8055


//  Id pregunta: 8127 Año de creación de pregunta: 2011
 questions[59]= "60)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA:";
 choices[59]= new Array();
 choices[59][0] = "Lluirex - Valencia";
 choices[59][1] = "MAX - Madrid";
 choices[59][2] = "LinKat - Catalu&ntilde;a";
 choices[59][3] = "mEDUxa - Baleares";
 answers[59] = 3;
 units[59] = ['66'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8127. Examen TIC A2 2010 interna";
 preguntaids[59] = 8127


//  Id pregunta: 8074 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[60]= new Array();
 choices[60][0] = "Orden EHA/962/2007";
 choices[60][1] = "Orden PRE/2971/2007";
 choices[60][2] = "Ley 30/2007";
 choices[60][3] = "Ley 59/2003";
 answers[60] = 3;
 units[60] = ['75'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8074. ";
 preguntaids[60] = 8074


//  Id pregunta: 8165 Año de creación de pregunta: 2011
 questions[61]= "62)  La librer&iacute;a Java API for XML Processing (JAXP):";
 choices[61]= new Array();
 choices[61][0] = "Permite tratar documentos XML tanto a trav&eacute;s de! modelo SAX como a trav&eacute;s del modelo DOM.";
 choices[61][1] = "Trabaja &uacute;nicamente con el modelo DOM.";
 choices[61][2] = "No existe tal librer&iacute;a en el lenguaje Java";
 choices[61][3] = "No tiene una Implementaci&oacute;n propia para el parser y obligatoriamente debe utilizar el parser del modelo DOM";
 answers[61] = 0;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8165. Examen TIC A2 2010 interna";
 preguntaids[61] = 8165


//  Id pregunta: 8132 Año de creación de pregunta: 2011
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[62]= new Array();
 choices[62][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[62][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[62][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[62][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[62] = 2;
 units[62] = ['60', '61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8132. Examen TIC A2 2010 interna";
 preguntaids[62] = 8132


//  Id pregunta: 8090 Año de creación de pregunta: 2011
 questions[63]= "64)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[63]= new Array();
 choices[63][0] = "WWN";
 choices[63][1] = "MAC";
 choices[63][2] = "SPOF";
 choices[63][3] = "IP";
 answers[63] = 0;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8090. Analista Ayto. Madrid 2010";
 preguntaids[63] = 8090


//  Id pregunta: 8160 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporciona una infraestructura para la definici&oacute;n de servicios que pueden ser consumidos de manera uniforme, sin conocer los detalles e los sistemas que los proporcionan?";
 choices[64]= new Array();
 choices[64][0] = "EAI (Enterprise Application Integration)";
 choices[64][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[64][2] = "ESB (Enterprise Service Bus)";
 choices[64][3] = "ORB (Object Request Broker)";
 answers[64] = 2;
 units[64] = ['55'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8160. Analista Ayto. Madrid 2010";
 preguntaids[64] = 8160


//  Id pregunta: 8050 Año de creación de pregunta: 2011
 questions[65]= "66)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[65]= new Array();
 choices[65][0] = "chmod 652 test.txt";
 choices[65][1] = "chmod 754 test.txt";
 choices[65][2] = "chmod 654 test.txt";
 choices[65][3] = "chmod 752 test.txt";
 answers[65] = 1;
 units[65] = ['57'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8050. Examen TIC A2 2010";
 preguntaids[65] = 8050


//  Id pregunta: 8049 Año de creación de pregunta: 2011
 questions[66]= "67)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es:";
 choices[66]= new Array();
 choices[66][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos.";
 choices[66][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[66][2] = "La empleada por los programas OCR para identificar el texto.";
 choices[66][3] = "La que determina la profundidad del color";
 answers[66] = 0;
 units[66] = ['80', '81'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8049. Examen TIC A2 2010";
 preguntaids[66] = 8049


//  Id pregunta: 8191 Año de creación de pregunta: 2011
 questions[67]= "68)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[67]= new Array();
 choices[67][0] = "Tienen un formato propietario";
 choices[67][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[67][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[67][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[67] = 2;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8191. Examen TIC A2 2010 interna";
 preguntaids[67] = 8191


//  Id pregunta: 8207 Año de creación de pregunta: 2011
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[68]= new Array();
 choices[68][0] = "CREATE";
 choices[68][1] = "ALTER";
 choices[68][2] = "DELETE";
 choices[68][3] = "DROP";
 answers[68] = 2;
 units[68] = ['60', '61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8207. Examen TIC A2 2010 interna";
 preguntaids[68] = 8207


//  Id pregunta: 8182 Año de creación de pregunta: 2011
 questions[69]= "70)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[69]= new Array();
 choices[69][0] = "tar con los par&aacute;metros cvf";
 choices[69][1] = "tar con los par&aacute;metros tvf";
 choices[69][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[69][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[69] = 1;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8182. Examen TIC A2 2010 interna";
 preguntaids[69] = 8182


//  Id pregunta: 8073 Año de creación de pregunta: 2011
 questions[70]= "71)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[70]= new Array();
 choices[70][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[70][1] = "Condici&oacute;n de espera circular";
 choices[70][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[70][3] = "Condici&oacute;n de espera ocupada";
 answers[70] = 3;
 units[70] = ['56'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8073. ";
 preguntaids[70] = 8073


//  Id pregunta: 8121 Año de creación de pregunta: 2011
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes elementos de VoiceXML v2.0 captura un evento de ayuda?";
 choices[71]= new Array();
 choices[71][0] = "&lt;catch&gt;";
 choices[71][1] = "&lt;help&gt;";
 choices[71][2] = "&lt;field&gt;";
 choices[71][3] = "&lt;record&gt;";
 answers[71] = 1;
 units[71] = ['81'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8121. Examen TIC A2 2010";
 preguntaids[71] = 8121


//  Id pregunta: 8058 Año de creación de pregunta: 2011
 questions[72]= "73)  En el contexto del PL-SQL, &iquest;cu&aacute;l es el nombre que se da a los segmentos de memoria utilizados para realizar operaciones con los registros devueltos tras ejecutar una sentencia SELECT?";
 choices[72]= new Array();
 choices[72][0] = "Row Trigger";
 choices[72][1] = "Statement Trigger.";
 choices[72][2] = "Cursor";
 choices[72][3] = "Puntero";
 answers[72] = 2;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8058. Examen TIC A2 2010";
 preguntaids[72] = 8058


//  Id pregunta: 8251 Año de creación de pregunta: 2011
 questions[73]= "74)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[73]= new Array();
 choices[73][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[73][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[73][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[73][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[73] = 0;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8251. Examen UPM A2 2011";
 preguntaids[73] = 8251


//  Id pregunta: 8175 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[74]= new Array();
 choices[74][0] = "JDataMiner.";
 choices[74][1] = "Cubos OLAP de Excel.";
 choices[74][2] = "VNC.";
 choices[74][3] = "Extract to Learnt by SQLServer.";
 answers[74] = 1;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8175. Examen TIC A2 2010 interna";
 preguntaids[74] = 8175


