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
//  Id pregunta: 8421 Año de creación de pregunta: 2011
 questions[0]= "1)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[0]= new Array();
 choices[0][0] = "los directorios de trabajo de los usuarios.";
 choices[0][1] = "los sistemas de archivos montados temporalmente.";
 choices[0][2] = "el c&oacute;digo fuente del kernel.";
 choices[0][3] = "los ficheros de los controladores de dispositivos";
 answers[0] = 0;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8421. Operador Ayto. Madrid 2010";
 preguntaids[0] = 8421


//  Id pregunta: 8399 Año de creación de pregunta: 2011
 questions[1]= "2)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[1]= new Array();
 choices[1][0] = "En el navegador del cliente.";
 choices[1][1] = "En el servidor Web.";
 choices[1][2] = "En el proxy.";
 choices[1][3] = "En el servidor de aplicaciones";
 answers[1] = 0;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8399. Operador Ayto. Madrid 2010";
 preguntaids[1] = 8399


//  Id pregunta: 8408 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes acciones NO es realizada por un switch de nivel 2?:";
 choices[2]= new Array();
 choices[2][0] = "Conversi&oacute;n de protocolos.";
 choices[2][1] = "Aprendizaje de direcciones MAC.";
 choices[2][2] = "Reducci&oacute;n de colisiones respecto a un hub.";
 choices[2][3] = "Posibilitar m&uacute;ltiples transmisiones simult&aacute;neas sin interferir en otras sub-redes";
 answers[2] = 0;
 units[2] = ['102'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8408. Operador Ayto. Madrid 2010";
 preguntaids[2] = 8408


//  Id pregunta: 8403 Año de creación de pregunta: 2011
 questions[3]= "4)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[3]= new Array();
 choices[3][0] = "Contiene las instrucciones del programa.";
 choices[3][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[3][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[3][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[3] = 2;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8403. Operador Ayto. Madrid 2010";
 preguntaids[3] = 8403


//  Id pregunta: 8415 Año de creación de pregunta: 2011
 questions[4]= "5)  El proceso de normalizaci&oacute;n tiene por objeto:";
 choices[4]= new Array();
 choices[4][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[4][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[4][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[4][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8415. Operador Ayto. Madrid 2010";
 preguntaids[4] = 8415


//  Id pregunta: 8400 Año de creación de pregunta: 2011
 questions[5]= "6)  FTP es un protocolo de la pila TCP/IP:";
 choices[5]= new Array();
 choices[5][0] = "Del nivel de Aplicaci&oacute;n.";
 choices[5][1] = "Del nivel de Transporte.";
 choices[5][2] = "Del nivel de Red.";
 choices[5][3] = "De nivel de Sesi&oacute;n";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8400. Operador Ayto. Madrid 2010";
 preguntaids[5] = 8400


//  Id pregunta: 8414 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Qu&eacute; significan las siglas SOAP?";
 choices[6]= new Array();
 choices[6][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[6][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[6][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[6][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[6] = 0;
 units[6] = ['55'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8414. Operador Ayto. Madrid 2010";
 preguntaids[6] = 8414


//  Id pregunta: 8412 Año de creación de pregunta: 2011
 questions[7]= "8)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[7]= new Array();
 choices[7][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[7][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[7][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[7][3] = "Ninguna de las anteriores es cierta";
 answers[7] = 0;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8412. Operador Ayto. Madrid 2010";
 preguntaids[7] = 8412


//  Id pregunta: 8406 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[8]= new Array();
 choices[8][0] = "En notaci&oacute;n decimal.";
 choices[8][1] = "En notaci&oacute;n hexadecimal.";
 choices[8][2] = "En notaci&oacute;n octal.";
 choices[8][3] = "En notaci&oacute;n binaria";
 answers[8] = 1;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8406. Operador Ayto. Madrid 2010";
 preguntaids[8] = 8406


//  Id pregunta: 8407 Año de creación de pregunta: 2011
 questions[9]= "10)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[9]= new Array();
 choices[9][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[9][1] = "No permite comunicaciones uno a muchos.";
 choices[9][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[9][3] = "Es exclusivamente anal&oacute;gico";
 answers[9] = 0;
 units[9] = ['117'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8407. Operador Ayto. Madrid 2010";
 preguntaids[9] = 8407


//  Id pregunta: 8419 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;C&oacute;mo se denominan las dos series de datos de uso civil emitidas continuamente por cada sat&eacute;lite del sistema GPS?";
 choices[10]= new Array();
 choices[10][0] = "Almanaque y efem&eacute;rides.";
 choices[10][1] = "Multipath y atenuaci&oacute;n.";
 choices[10][2] = "Triangulaci&oacute;n y correcci&oacute;n.";
 choices[10][3] = "Latitud y longitud.";
 answers[10] = 0;
 units[10] = ['71'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8419. Operador Ayto. Madrid 2010";
 preguntaids[10] = 8419


//  Id pregunta: 8401 Año de creación de pregunta: 2011
 questions[11]= "12)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[11]= new Array();
 choices[11][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[11][1] = "UTP Categor&iacute;a 3.";
 choices[11][2] = "UTP Categor&iacute;a 5 o 6";
 choices[11][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[11] = 2;
 units[11] = ['104'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8401. Operador Ayto. Madrid 2010";
 preguntaids[11] = 8401


//  Id pregunta: 8418 Año de creación de pregunta: 2011
 questions[12]= "13)  Las siglas SSL y TLS se refieren a:";
 choices[12]= new Array();
 choices[12][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[12][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[12][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[12][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[12] = 1;
 units[12] = ['119', '120'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8418. Operador Ayto. Madrid 2010";
 preguntaids[12] = 8418


//  Id pregunta: 8422 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[13]= new Array();
 choices[13][0] = "Drill-Across.";
 choices[13][1] = "Drill-In.";
 choices[13][2] = "Roll-Up.";
 choices[13][3] = "Rotaci&oacute;n.";
 answers[13] = 2;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8422. Operador Ayto. Madrid 2010";
 preguntaids[13] = 8422


//  Id pregunta: 8410 Año de creación de pregunta: 2011
 questions[14]= "15)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[14]= new Array();
 choices[14][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[14][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[14][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[14][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[14] = 1;
 units[14] = ['74'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8410. Operador Ayto. Madrid 2010";
 preguntaids[14] = 8410


//  Id pregunta: 8405 Año de creación de pregunta: 2011
 questions[15]= "16)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[15]= new Array();
 choices[15][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[15][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[15][2] = "Cifrar y descifrar con la misma clave.";
 choices[15][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[15] = 2;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8405. Operador Ayto. Madrid 2010";
 preguntaids[15] = 8405


//  Id pregunta: 8417 Año de creación de pregunta: 2011
 questions[16]= "17)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[16]= new Array();
 choices[16][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[16][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[16][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[16][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[16] = 2;
 units[16] = ['67'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8417. Operador Ayto. Madrid 2010";
 preguntaids[16] = 8417


//  Id pregunta: 8416 Año de creación de pregunta: 2011
 questions[17]= "18)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[17]= new Array();
 choices[17][0] = "&lt;table&gt;";
 choices[17][1] = "&lt;td&gt;";
 choices[17][2] = "&lt;th&gt;";
 choices[17][3] = "&lt;column&gt;";
 answers[17] = 1;
 units[17] = ['74'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8416. Operador Ayto. Madrid 2010";
 preguntaids[17] = 8416


//  Id pregunta: 8402 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[18]= new Array();
 choices[18][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[18][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[18][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[18][3] = "Ninguna de las anteriores es correcta";
 answers[18] = 2;
 units[18] = ['56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8402. Operador Ayto. Madrid 2010";
 preguntaids[18] = 8402


//  Id pregunta: 8413 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[19]= new Array();
 choices[19][0] = "ROUTE";
 choices[19][1] = "NETSTAT";
 choices[19][2] = "NBTSTAT";
 choices[19][3] = "TRACERT";
 answers[19] = 1;
 units[19] = ['114'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8413. Operador Ayto. Madrid 2010";
 preguntaids[19] = 8413


//  Id pregunta: 8404 Año de creación de pregunta: 2011
 questions[20]= "21)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[20]= new Array();
 choices[20][0] = "NNTP.";
 choices[20][1] = "VNC.";
 choices[20][2] = "NTP.";
 choices[20][3] = "FTP";
 answers[20] = 1;
 units[20] = ['123'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8404. Operador Ayto. Madrid 2010";
 preguntaids[20] = 8404


//  Id pregunta: 8411 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;ndo est&aacute; una relaci&oacute;n en Tercera Forma Normal (3FN)?:";
 choices[21]= new Array();
 choices[21][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[21][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[21][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[21][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[21] = 2;
 units[21] = ['61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8411. Operador Ayto. Madrid 2010";
 preguntaids[21] = 8411


//  Id pregunta: 8420 Año de creación de pregunta: 2011
 questions[22]= "23)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[22]= new Array();
 choices[22][0] = "Un ancho de banda de 800Mhz.";
 choices[22][1] = "Gran resistencia a interferencias y ruido.";
 choices[22][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[22][3] = "La facilidad de su instalaci&oacute;n";
 answers[22] = 1;
 units[22] = ['106'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8420. Operador Ayto. Madrid 2010";
 preguntaids[22] = 8420


//  Id pregunta: 8398 Año de creación de pregunta: 2011
 questions[23]= "24)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[23]= new Array();
 choices[23][0] = "El padr&oacute;n municipal.";
 choices[23][1] = "Los diarios oficiales.";
 choices[23][2] = "El censo promocional.";
 choices[23][3] = "Los medios de comunicaci&oacute;n";
 answers[23] = 0;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 8398. Operador Ayto. Madrid 2010";
 preguntaids[23] = 8398


