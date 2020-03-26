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
//  Id pregunta: 8996 Año de creación de pregunta: 2014
 questions[0]= "1)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[0]= new Array();
 choices[0][0] = "Las interrupciones";
 choices[0][1] = "El scheduler";
 choices[0][2] = "Los drivers de los dispositivos";
 choices[0][3] = "a) y c) son correctas";
 answers[0] = 3;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8996. ";
 preguntaids[0] = 8996


//  Id pregunta: 8962 Año de creación de pregunta: 2013
 questions[1]= "2)  Los EJB de tipo entity pueden ser:";
 choices[1]= new Array();
 choices[1][0] = "De dos tipos: RMP y CMP";
 choices[1][1] = "De dos tipos: BMP y CMP";
 choices[1][2] = "De tres tipos: BMP, CMP y JMP";
 choices[1][3] = "De tres tipos: BMP, CMP y SMP";
 answers[1] = 1;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8962. ";
 preguntaids[1] = 8962


//  Id pregunta: 8721 Año de creación de pregunta: 2013
 questions[2]= "3)  Indique la frase correcta sobre la gesti&oacute;n de procesos en los sistemas UNIX:";
 choices[2]= new Array();
 choices[2][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits";
 choices[2][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[2][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[2][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[2] = 1;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8721. Examen TICA2-2011";
 preguntaids[2] = 8721


//  Id pregunta: 8938 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[3]= new Array();
 choices[3][0] = "Javascript";
 choices[3][1] = "JEScript";
 choices[3][2] = "PerlScript";
 choices[3][3] = "VBScript";
 answers[3] = 1;
 units[3] = ['62'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8938. ";
 preguntaids[3] = 8938


//  Id pregunta: 8949 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Cu&aacute;les de los siguientes no es un formato de sonido?";
 choices[4]= new Array();
 choices[4][0] = "MIDI";
 choices[4][1] = "Ogg Vorbis 1.0";
 choices[4][2] = "WAV";
 choices[4][3] = "VRML";
 answers[4] = 3;
 units[4] = ['62'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8949. ";
 preguntaids[4] = 8949


//  Id pregunta: 9007 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Qu&eacute; es una vista materializada?";
 choices[5]= new Array();
 choices[5][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[5][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[5][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[5][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[5] = 1;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9007. ";
 preguntaids[5] = 9007


//  Id pregunta: 9003 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[6]= new Array();
 choices[6][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[6][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[6][2] = "Utilizan estructuras flexibles";
 choices[6][3] = "Todas las anteriores lo son";
 answers[6] = 3;
 units[6] = ['73'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9003. ";
 preguntaids[6] = 9003


//  Id pregunta: 8936 Año de creación de pregunta: 2013
 questions[7]= "8)  En una arquitectura de tres niveles, &iquest;en qu&eacute; nivel se procesa la l&oacute;gica de la aplicaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Nivel de aplicaci&oacute;n";
 choices[7][1] = "Nivel de presentaci&oacute;n";
 choices[7][2] = "Nivel de datos";
 choices[7][3] = "Nivel de usuario";
 answers[7] = 0;
 units[7] = ['62'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8936. ";
 preguntaids[7] = 8936


//  Id pregunta: 8959 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[8]= new Array();
 choices[8][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[8][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[8][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[8][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[8] = 1;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8959. ";
 preguntaids[8] = 8959


//  Id pregunta: 9005 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[9]= new Array();
 choices[9][0] = "SQL 2000";
 choices[9][1] = "SQL-2003";
 choices[9][2] = "SQL-2006";
 choices[9][3] = "SQL-2008";
 answers[9] = 2;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9005. ";
 preguntaids[9] = 9005


//  Id pregunta: 9001 Año de creación de pregunta: 2014
 questions[10]= "11)  En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[10]= new Array();
 choices[10][0] = "Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[10][1] = "Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[10][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[10][3] = "Todas las anteriores";
 answers[10] = 3;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9001. ";
 preguntaids[10] = 9001


//  Id pregunta: 8937 Año de creación de pregunta: 2013
 questions[11]= "12)  El cliente web:";
 choices[11]= new Array();
 choices[11][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[11][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[11][2] = "Puede tener plugins instalados";
 choices[11][3] = "Todas las anteriores son ciertas";
 answers[11] = 3;
 units[11] = ['62'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8937. ";
 preguntaids[11] = 8937


//  Id pregunta: 8954 Año de creación de pregunta: 2013
 questions[12]= "13)  El lenguaje Java es un lenguaje:";
 choices[12]= new Array();
 choices[12][0] = "De herencia simple";
 choices[12][1] = "De herencia m&uacute;ltiple";
 choices[12][2] = "Que no permite la herencia";
 choices[12][3] = "Todas las anteriores son falsas";
 answers[12] = 0;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8954. ";
 preguntaids[12] = 8954


//  Id pregunta: 8939 Año de creación de pregunta: 2013
 questions[13]= "14)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[13]= new Array();
 choices[13][0] = "Es un extensi&oacute;n de Java";
 choices[13][1] = "Es un extensi&oacute;n de HTML";
 choices[13][2] = "Es un lenguaje interpretado";
 choices[13][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[13] = 0;
 units[13] = ['62'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8939. ";
 preguntaids[13] = 8939


//  Id pregunta: 8713 Año de creación de pregunta: 2013
 questions[14]= "15)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[14]= new Array();
 choices[14][0] = "No realiza ninguna acci&oacute;n.";
 choices[14][1] = "Borra la l&iacute;nea anterior.";
 choices[14][2] = "Borra la l&iacute;nea actual";
 choices[14][3] = "Borra la l&iacute;nea posterior.";
 answers[14] = 2;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8713. Examen TICA2-2011";
 preguntaids[14] = 8713


//  Id pregunta: 8722 Año de creación de pregunta: 2013
 questions[15]= "16)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido:";
 choices[15]= new Array();
 choices[15][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[15][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[15][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[15][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[15] = 3;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8722. Examen TICA2-2011";
 preguntaids[15] = 8722


//  Id pregunta: 8716 Año de creación de pregunta: 2013
 questions[16]= "17)  &iquest;C&oacute;mo se llama la conexi&oacute;n de Intel que supera en velocidad a USB 3.0, basada en LightPeak?";
 choices[16]= new Array();
 choices[16][0] = "Thundercat";
 choices[16][1] = "LightFire";
 choices[16][2] = "Thunderbolt";
 choices[16][3] = "USB 4.0";
 answers[16] = 2;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8716. Examen TICA2-2011";
 preguntaids[16] = 8716


//  Id pregunta: 8948 Año de creación de pregunta: 2013
 questions[17]= "18)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[17][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[17][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[17][3] = "Todas las anteriores son falsas";
 answers[17] = 0;
 units[17] = ['62'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8948. ";
 preguntaids[17] = 8948


//  Id pregunta: 8964 Año de creación de pregunta: 2013
 questions[18]= "19)  Indique la afirmaci&oacute;n falsa:";
 choices[18]= new Array();
 choices[18][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[18][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[18][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[18][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[18] = 3;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8964. ";
 preguntaids[18] = 8964


//  Id pregunta: 8953 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[19]= new Array();
 choices[19][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[19][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[19][2] = "Una API de desarrollo en Java";
 choices[19][3] = "Java EE Blueprints no existe";
 answers[19] = 1;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8953. ";
 preguntaids[19] = 8953


//  Id pregunta: 8943 Año de creación de pregunta: 2013
 questions[20]= "21)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[20]= new Array();
 choices[20][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[20][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[20][2] = "Se ejecutan en un componente independiente del navegador";
 choices[20][3] = "Todas las anteriores son ciertas";
 answers[20] = 3;
 units[20] = ['62'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8943. ";
 preguntaids[20] = 8943


//  Id pregunta: 8997 Año de creación de pregunta: 2014
 questions[21]= "22)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[21]= new Array();
 choices[21][0] = "Pipes";
 choices[21][1] = "Signals";
 choices[21][2] = "Events";
 choices[21][3] = "Sem&aacute;foros";
 answers[21] = 0;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8997. ";
 preguntaids[21] = 8997


//  Id pregunta: 8945 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes elementos no es un plugin?";
 choices[22]= new Array();
 choices[22][0] = "Lector Acrobat de Adobe";
 choices[22][1] = "Quicktime de Apple";
 choices[22][2] = "Cosmoplayer de Platinum";
 choices[22][3] = "Todos los anteriores son plugins";
 answers[22] = 3;
 units[22] = ['62'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8945. ";
 preguntaids[22] = 8945


//  Id pregunta: 8901 Año de creación de pregunta: 2013
 questions[23]= "24)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[23]= new Array();
 choices[23][0] = "Primera Forma Normal.";
 choices[23][1] = "Segunda Forma Normal.";
 choices[23][2] = "Tercera Forma Normal.";
 choices[23][3] = "Forma Normal de Boyce-Codd.";
 answers[23] = 0;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8901. ";
 preguntaids[23] = 8901


//  Id pregunta: 8711 Año de creación de pregunta: 2013
 questions[24]= "25)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[24]= new Array();
 choices[24][0] = "Kubuntu.";
 choices[24][1] = "Red Hat";
 choices[24][2] = "Slackware.";
 choices[24][3] = "IRIX.";
 answers[24] = 3;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8711. Examen TICA2-2011";
 preguntaids[24] = 8711


//  Id pregunta: 9010 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[25]= new Array();
 choices[25][0] = "Safari";
 choices[25][1] = "Lion";
 choices[25][2] = "Aqua";
 choices[25][3] = "Terra";
 answers[25] = 2;
 units[25] = ['59'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9010. ";
 preguntaids[25] = 9010


//  Id pregunta: 8958 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[26]= new Array();
 choices[26][0] = "doGet()";
 choices[26][1] = "doDelete()";
 choices[26][2] = "doPut()";
 choices[26][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[26] = 3;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8958. ";
 preguntaids[26] = 8958


//  Id pregunta: 8992 Año de creación de pregunta: 2013
 questions[27]= "28)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[27]= new Array();
 choices[27][0] = "Capa de cliente";
 choices[27][1] = "Capa de l&oacute;gica de negocio";
 choices[27][2] = "Capa de integraci&oacute;n";
 choices[27][3] = "Capa de sistemas de informaci&oacute;n";
 answers[27] = 3;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8992. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[27] = 8992


//  Id pregunta: 8715 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[28]= new Array();
 choices[28][0] = "Memoria RAM";
 choices[28][1] = "Pantalla t&aacute;ctil.";
 choices[28][2] = "Tarjeta de sonido.";
 choices[28][3] = "Disco duro.";
 answers[28] = 1;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8715. Examen TICA2-2011";
 preguntaids[28] = 8715


//  Id pregunta: 8965 Año de creación de pregunta: 2013
 questions[29]= "30)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[29]= new Array();
 choices[29][0] = "Apache Struts";
 choices[29][1] = "Hibernate";
 choices[29][2] = "Tapestry";
 choices[29][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[29] = 3;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8965. ";
 preguntaids[29] = 8965


//  Id pregunta: 8895 Año de creación de pregunta: 2013
 questions[30]= "31)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional:";
 choices[30]= new Array();
 choices[30][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[30][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[30][2] = "El producto cartesiano de una relaci&oacute;n de grado n y x tuplas y otra relaci&oacute;n de grado m y z tuplas es una relaci&oacute;n de grado n*m y de (x+z) tuplas";
 choices[30][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[30] = 2;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8895. Examen AGE TIC A1 2011";
 preguntaids[30] = 8895


//  Id pregunta: 8951 Año de creación de pregunta: 2013
 questions[31]= "32)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[31]= new Array();
 choices[31][0] = "En el modelo";
 choices[31][1] = "En la vista";
 choices[31][2] = "En el controlador";
 choices[31][3] = "En todos los anteriores";
 answers[31] = 0;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8951. ";
 preguntaids[31] = 8951


//  Id pregunta: 8952 Año de creación de pregunta: 2013
 questions[32]= "33)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[32]= new Array();
 choices[32][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[32][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[32][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[32][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[32] = 2;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8952. ";
 preguntaids[32] = 8952


//  Id pregunta: 8812 Año de creación de pregunta: 2013
 questions[33]= "34)  Acerca de Fibre Channel, se puede decir:";
 choices[33]= new Array();
 choices[33][0] = "El protocolo sigue el modelo de referencia OSI.";
 choices[33][1] = "Es un protocolo con 5 capas.";
 choices[33][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[33][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[33] = 1;
 units[33] = ['53', '106'];
 blocks[33] = ['B2', 'B4'];
 comments[33] = "Id Pregunta: 8812. ";
 preguntaids[33] = 8812


//  Id pregunta: 8723 Año de creación de pregunta: 2013
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[34]= new Array();
 choices[34][0] = "ISA";
 choices[34][1] = "HTI";
 choices[34][2] = "PCI";
 choices[34][3] = "AGP";
 answers[34] = 1;
 units[34] = ['51'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8723. Examen TICA2-2011";
 preguntaids[34] = 8723


//  Id pregunta: 8720 Año de creación de pregunta: 2013
 questions[35]= "36)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es:";
 choices[35]= new Array();
 choices[35][0] = "32MB";
 choices[35][1] = "1GB";
 choices[35][2] = "2GB";
 choices[35][3] = "4GB";
 answers[35] = 3;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8720. Examen TICA2-2011";
 preguntaids[35] = 8720


//  Id pregunta: 9006 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Qu&eacute; es el FSQL?";
 choices[36]= new Array();
 choices[36][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[36][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[36][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[36][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[36] = 1;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9006. ";
 preguntaids[36] = 9006


//  Id pregunta: 8990 Año de creación de pregunta: 2013
 questions[37]= "38)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[37]= new Array();
 choices[37][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[37][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[37][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[37][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[37] = 0;
 units[37] = ['63'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8990. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[37] = 8990


//  Id pregunta: 9000 Año de creación de pregunta: 2014
 questions[38]= "39)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[38]= new Array();
 choices[38][0] = "Oracle";
 choices[38][1] = "MongoDB";
 choices[38][2] = "eXist";
 choices[38][3] = "Redis";
 answers[38] = 2;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9000. ";
 preguntaids[38] = 9000


//  Id pregunta: 8940 Año de creación de pregunta: 2013
 questions[39]= "40)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a JScript:";
 choices[39]= new Array();
 choices[39][0] = "Es una implementaci&oacute;n de Microsoft del est&aacute;ndar ECMAScript";
 choices[39][1] = "Es necesario declarar los tipos de datos";
 choices[39][2] = "Es sensible a las may&uacute;sculas y min&uacute;sculas para los nombres de funci&oacute;n";
 choices[39][3] = "Es un lenguaje interpretado y basado en objetos";
 answers[39] = 1;
 units[39] = ['62'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8940. ";
 preguntaids[39] = 8940


//  Id pregunta: 8900 Año de creación de pregunta: 2013
 questions[40]= "41)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[40]= new Array();
 choices[40][0] = "Primera Forma Normal.";
 choices[40][1] = "Segunda Forma Normal.";
 choices[40][2] = "Tercera Forma Normal.";
 choices[40][3] = "Forma Normal de Boyce-Codd.";
 answers[40] = 1;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8900. ";
 preguntaids[40] = 8900


//  Id pregunta: 8991 Año de creación de pregunta: 2013
 questions[41]= "42)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[41]= new Array();
 choices[41][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller)";
 choices[41][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[41][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[41][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE";
 answers[41] = 0;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8991. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[41] = 8991


//  Id pregunta: 8714 Año de creación de pregunta: 2013
 questions[42]= "43)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[42]= new Array();
 choices[42][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[42][1] = "* 4 * * 0,3 /home/user/script.sh";
 choices[42][2] = "0 */4 wed,sun * * /home/user/script.sh";
 choices[42][3] = "* */4 * * 3-7 /home/user/script.sh";
 answers[42] = 0;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8714. Examen TICA2-2011";
 preguntaids[42] = 8714


//  Id pregunta: 8950 Año de creación de pregunta: 2013
 questions[43]= "44)  En el patr&oacute;n MVC:";
 choices[43]= new Array();
 choices[43][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[43][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[43][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[43][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8950. ";
 preguntaids[43] = 8950


//  Id pregunta: 8724 Año de creación de pregunta: 2013
 questions[44]= "45)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores.";
 choices[44]= new Array();
 choices[44][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga.";
 choices[44][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[44][2] = "El balanceo de carga solo puede implementarse por software.";
 choices[44][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos.";
 answers[44] = 2;
 units[44] = ['54'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8724. Examen TICA2-2011";
 preguntaids[44] = 8724


//  Id pregunta: 8963 Año de creación de pregunta: 2013
 questions[45]= "46)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[45]= new Array();
 choices[45][0] = "JAXR";
 choices[45][1] = "JAXB";
 choices[45][2] = "JAXP";
 choices[45][3] = "JTA";
 answers[45] = 3;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8963. ";
 preguntaids[45] = 8963


//  Id pregunta: 8993 Año de creación de pregunta: 2013
 questions[46]= "47)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[46]= new Array();
 choices[46][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR)";
 choices[46][1] = "La biblioteca de clases base (.NET Framework Base Classes)";
 choices[46][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[46][3] = "El motor de generaci&oacute;n de la interfaz de usuario";
 answers[46] = 2;
 units[46] = ['63'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8993. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[46] = 8993


//  Id pregunta: 8710 Año de creación de pregunta: 2013
 questions[47]= "48)  Si se quisiera un middleware para un grid se elegir&iacute;a:";
 choices[47]= new Array();
 choices[47][0] = "Globus Toolkit.";
 choices[47][1] = "Cluster Veritas.";
 choices[47][2] = "Arduino.";
 choices[47][3] = "Data protector.";
 answers[47] = 0;
 units[47] = ['49'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8710. Examen TICA2-2011";
 preguntaids[47] = 8710


//  Id pregunta: 8726 Año de creación de pregunta: 2013
 questions[48]= "49)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows:";
 choices[48]= new Array();
 choices[48][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits";
 choices[48][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[48][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[48][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[48] = 3;
 units[48] = ['58'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8726. Examen TICA2-2011";
 preguntaids[48] = 8726


//  Id pregunta: 8947 Año de creación de pregunta: 2013
 questions[49]= "50)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[49]= new Array();
 choices[49][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[49][1] = "Fue creado en 1987 por Apple";
 choices[49][2] = "Fue creado en 1987 por Compuserve";
 choices[49][3] = "La paleta de color soporta hasta 256 colores";
 answers[49] = 1;
 units[49] = ['62'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8947. ";
 preguntaids[49] = 8947


//  Id pregunta: 8899 Año de creación de pregunta: 2013
 questions[50]= "51)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[50]= new Array();
 choices[50][0] = "Primera Forma Normal.";
 choices[50][1] = "Segunda Forma Normal.";
 choices[50][2] = "Tercera Forma Normal.";
 choices[50][3] = "Forma Normal de Boyce-Codd.";
 answers[50] = 0;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8899. ";
 preguntaids[50] = 8899


//  Id pregunta: 8961 Año de creación de pregunta: 2013
 questions[51]= "52)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[51][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[51][2] = "Se ejecutan en contenedores EJB";
 choices[51][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[51] = 0;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8961. ";
 preguntaids[51] = 8961


//  Id pregunta: 9008 Año de creación de pregunta: 2014
 questions[52]= "53)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[52]= new Array();
 choices[52][0] = "Vistas indexadas";
 choices[52][1] = "Vistas normalizadas";
 choices[52][2] = "Vistas f&iacute;sicas";
 choices[52][3] = "No existen alternativas";
 answers[52] = 0;
 units[52] = ['61'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9008. En SQL Server se llaman vistas indexadas";
 preguntaids[52] = 9008


//  Id pregunta: 8881 Año de creación de pregunta: 2013
 questions[53]= "54)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica de las transacciones?";
 choices[53]= new Array();
 choices[53][0] = "Concurrencia";
 choices[53][1] = "Durabilidad";
 choices[53][2] = "Aislamiento";
 choices[53][3] = "Atomicidad";
 answers[53] = 0;
 units[53] = ['60'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8881. Examen AGE TIC A1 2011";
 preguntaids[53] = 8881


//  Id pregunta: 8717 Año de creación de pregunta: 2013
 questions[54]= "55)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[54]= new Array();
 choices[54][0] = "LUN";
 choices[54][1] = "ESX";
 choices[54][2] = "HBA";
 choices[54][3] = "IDS";
 answers[54] = 2;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8717. Examen TICA2-2011";
 preguntaids[54] = 8717


//  Id pregunta: 8712 Año de creación de pregunta: 2013
 questions[55]= "56)  Indicad cu&aacute;l de los siguientes sistemas de ficheros se corresponde con un sistema de ficheros de alto rendimiento con soporte transaccional:";
 choices[55]= new Array();
 choices[55][0] = "NFS";
 choices[55][1] = "CIFS";
 choices[55][2] = "JFS";
 choices[55][3] = "FAT";
 answers[55] = 2;
 units[55] = ['49'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8712. Examen TICA2-2011";
 preguntaids[55] = 8712


//  Id pregunta: 8998 Año de creación de pregunta: 2014
 questions[56]= "57)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[56]= new Array();
 choices[56][0] = "MariaBD";
 choices[56][1] = "Apache Cassandra";
 choices[56][2] = "Heidi";
 choices[56][3] = "Ingres";
 answers[56] = 1;
 units[56] = ['73'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8998. ";
 preguntaids[56] = 8998


//  Id pregunta: 8999 Año de creación de pregunta: 2014
 questions[57]= "58)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[57]= new Array();
 choices[57][0] = "Relacional";
 choices[57][1] = "En red";
 choices[57][2] = "Jer&aacute;rquico";
 choices[57][3] = "Multidimensional";
 answers[57] = 2;
 units[57] = ['60'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8999. ";
 preguntaids[57] = 8999


//  Id pregunta: 8994 Año de creación de pregunta: 2014
 questions[58]= "59)  La arquitectura original de Linux es de tipo:";
 choices[58]= new Array();
 choices[58][0] = "Microkernel";
 choices[58][1] = "Monol&iacute;tica";
 choices[58][2] = "Modular";
 choices[58][3] = "H&iacute;brida";
 answers[58] = 1;
 units[58] = ['57'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8994. ";
 preguntaids[58] = 8994


//  Id pregunta: 9009 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[59]= new Array();
 choices[59][0] = "Vistas materializadas.";
 choices[59][1] = "Esquemas de copo de nieve.";
 choices[59][2] = "Cubos OLAP.";
 choices[59][3] = "Todos los anteriores.";
 answers[59] = 3;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9009. ";
 preguntaids[59] = 9009


//  Id pregunta: 8960 Año de creación de pregunta: 2013
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[60]= new Array();
 choices[60][0] = "page";
 choices[60][1] = "map";
 choices[60][2] = "taglib";
 choices[60][3] = "include";
 answers[60] = 1;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8960. ";
 preguntaids[60] = 8960


//  Id pregunta: 8719 Año de creación de pregunta: 2013
 questions[61]= "62)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS?";
 choices[61]= new Array();
 choices[61][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel.";
 choices[61][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas.";
 choices[61][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento.";
 choices[61][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[61] = 2;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8719. Examen TICA2-2011";
 preguntaids[61] = 8719


//  Id pregunta: 8891 Año de creación de pregunta: 2013
 questions[62]= "63)  Se&ntilde;ale la frase correcta acerca de los diferentes modelos de representaci&oacute;n del conocimiento:";
 choices[62]= new Array();
 choices[62][0] = "En los procesos de inferencia en redes sem&aacute;nticas el uso de la herencia permite efectuar emparejamientos sin necesidad de un homomorfismo total entre la red pregunta y la red respuesta.";
 choices[62][1] = "La utilizaci&oacute;n de marcos como modo de representaci&oacute;n de conocimiento permite asociar a un concepto un conjunto de atributos est&aacute;ticos, cuya actualizaci&oacute;n o modificaci&oacute;n no forma parte del modelo.";
 choices[62][2] = "El algoritmo de extracci&oacute;n de la ra&iacute;z cuadrada de un n&uacute;mero es un ejemplo de representaci&oacute;n declarativa de conocimiento.";
 choices[62][3] = "En una red neuronal entrenada los pesos de los enlaces entre neuronas dependen solamente del algoritmo de entrenamiento empleado.";
 answers[62] = 0;
 units[62] = ['68'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8891. Examen AGE TIC A1 2011";
 preguntaids[62] = 8891


//  Id pregunta: 9002 Año de creación de pregunta: 2014
 questions[63]= "64)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[63]= new Array();
 choices[63][0] = "Soportan operaciones JOIN";
 choices[63][1] = "Garantizan completamente ACID";
 choices[63][2] = "Requieren estructuras fijas, como tablas";
 choices[63][3] = "Escalan bien horizontalmente";
 answers[63] = 3;
 units[63] = ['73'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9002. ";
 preguntaids[63] = 9002


//  Id pregunta: 8944 Año de creación de pregunta: 2013
 questions[64]= "65)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[64]= new Array();
 choices[64][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[64][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[64][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[64][3] = "Todas las anteriores son ciertas";
 answers[64] = 3;
 units[64] = ['62'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8944. ";
 preguntaids[64] = 8944


//  Id pregunta: 8956 Año de creación de pregunta: 2013
 questions[65]= "66)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[65]= new Array();
 choices[65][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[65][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[65][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[65][3] = "JAX-RPC no soporta WSDL";
 answers[65] = 3;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8956. ";
 preguntaids[65] = 8956


//  Id pregunta: 8941 Año de creación de pregunta: 2013
 questions[66]= "67)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a VBScript:";
 choices[66]= new Array();
 choices[66][0] = "Es una tecnolog&iacute;a abierta";
 choices[66][1] = "Genera ficheros con extensi&oacute;n .vbs";
 choices[66][2] = "Se comunica con las aplicaciones principales mediante ActiveX Scripting";
 choices[66][3] = "Dispone de mayor funcionalidad que JavaScript";
 answers[66] = 0;
 units[66] = ['62'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8941. ";
 preguntaids[66] = 8941


//  Id pregunta: 8942 Año de creación de pregunta: 2013
 questions[67]= "68)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a PerlScript:";
 choices[67]= new Array();
 choices[67][0] = "No se permite su uso en el servidor";
 choices[67][1] = "Es un lenguaje orientado al entorno Microsoft";
 choices[67][2] = "Es un lenguaje de scripting";
 choices[67][3] = "Permite el uso de PERL en los scripts web del cliente";
 answers[67] = 0;
 units[67] = ['62'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8942. ";
 preguntaids[67] = 8942


//  Id pregunta: 8955 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[68]= new Array();
 choices[68][0] = "JAXP";
 choices[68][1] = "StAX";
 choices[68][2] = "JAF";
 choices[68][3] = "JDBC";
 answers[68] = 3;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8955. ";
 preguntaids[68] = 8955


//  Id pregunta: 8725 Año de creación de pregunta: 2013
 questions[69]= "70)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[69]= new Array();
 choices[69][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[69][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[69][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[69][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[69] = 3;
 units[69] = ['50'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8725. Examen TICA2-2011";
 preguntaids[69] = 8725


//  Id pregunta: 8718 Año de creación de pregunta: 2013
 questions[70]= "71)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[70]= new Array();
 choices[70][0] = "RAID 6+0";
 choices[70][1] = "RAID 5+0";
 choices[70][2] = "RAID 5+1";
 choices[70][3] = "RAID 0+1";
 answers[70] = 3;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8718. Examen TICA2-2011";
 preguntaids[70] = 8718


//  Id pregunta: 8957 Año de creación de pregunta: 2013
 questions[71]= "72)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[71]= new Array();
 choices[71][0] = "Se alojan en un contenedor web";
 choices[71][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[71][2] = "Se pueden invocar desde una URL";
 choices[71][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[71] = 3;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8957. ";
 preguntaids[71] = 8957


//  Id pregunta: 9004 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[72]= new Array();
 choices[72][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[72][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[72][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[72][3] = "Todas las respuestas son incorrectas.";
 answers[72] = 1;
 units[72] = ['56'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9004. ";
 preguntaids[72] = 9004


//  Id pregunta: 8946 Año de creación de pregunta: 2013
 questions[73]= "74)  Cosmoplayer de Platinum:";
 choices[73]= new Array();
 choices[73][0] = "Es un plugin que reproduce sonidos";
 choices[73][1] = "Es un plugin que reproduce pel&iacute;culas";
 choices[73][2] = "Es un plugin que reproduce documentos VRML (formato de realidad virtual)";
 choices[73][3] = "Ninguna de las anteriores es correcta";
 answers[73] = 2;
 units[73] = ['62'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8946. ";
 preguntaids[73] = 8946


//  Id pregunta: 8995 Año de creación de pregunta: 2014
 questions[74]= "75)  Marcar la respuesta correcta:";
 choices[74]= new Array();
 choices[74][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[74][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[74][2] = "El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[74][3] = "Todas las anteriores son incorrectas";
 answers[74] = 1;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8995. ";
 preguntaids[74] = 8995


