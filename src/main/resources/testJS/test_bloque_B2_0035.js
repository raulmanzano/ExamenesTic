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
//  Id pregunta: 8405 Año de creación de pregunta: 2011
 questions[0]= "1)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[0]= new Array();
 choices[0][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[0][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[0][2] = "Cifrar y descifrar con la misma clave.";
 choices[0][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[0] = 2;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8405. Operador Ayto. Madrid 2010";
 preguntaids[0] = 8405


//  Id pregunta: 8352 Año de creación de pregunta: 2011
 questions[1]= "2)  En el marco de trabajo Windows Communication Foundation (WCF) para la creaci&oacute;n de Aplicaciones Orientadas a Servicios cu&aacute;l de las siguientes afirmaciones es correcta respecto al modelo de intercambio soportado:";
 choices[1]= new Array();
 choices[1][0] = "El modelo es el de solicitud/respuesta, en que un extremo ha de solicitar datos de otro extremo y el otro extremo enviar siempre una respuesta";
 choices[1][1] = "Permite un modelo d&uacute;plex, en donde dos extremos establecen una conexi&oacute;n y se env&iacute;an datos entre s&iacute;, como ocurre con un programa de mensajer&iacute;a instant&aacute;nea";
 choices[1][2] = "El modelo establece que el env&iacute;o de datos de un extremo de servicio a otro no puede ser asincr&oacute;nico";
 choices[1][3] = "Ninguna de las anteriores es correcta";
 answers[1] = 2;
 units[1] = ['58'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8352. Analista Ayto. Madrid 2010";
 preguntaids[1] = 8352


//  Id pregunta: 8396 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un ERP?";
 choices[2]= new Array();
 choices[2][0] = "SAP";
 choices[2][1] = "ADempiere";
 choices[2][2] = "Openbravo";
 choices[2][3] = "Twister";
 answers[2] = 3;
 units[2] = ['69'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8396. ";
 preguntaids[2] = 8396


//  Id pregunta: 8312 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[3]= new Array();
 choices[3][0] = "Para construir aplicaciones y servicios Web";
 choices[3][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[3][2] = "Para construir la interface del usuario";
 choices[3][3] = "Para conectar los programas";
 answers[3] = 0;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8312. Examen UPM A2 2011";
 preguntaids[3] = 8312


//  Id pregunta: 8402 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[4]= new Array();
 choices[4][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[4][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[4][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[4][3] = "Ninguna de las anteriores es correcta";
 answers[4] = 2;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8402. Operador Ayto. Madrid 2010";
 preguntaids[4] = 8402


//  Id pregunta: 8403 Año de creación de pregunta: 2011
 questions[5]= "6)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[5]= new Array();
 choices[5][0] = "Contiene las instrucciones del programa.";
 choices[5][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[5][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[5][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[5] = 2;
 units[5] = ['56'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8403. Operador Ayto. Madrid 2010";
 preguntaids[5] = 8403


//  Id pregunta: 8329 Año de creación de pregunta: 2011
 questions[6]= "7)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[6]= new Array();
 choices[6][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[6][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[6][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[6][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[6] = 0;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8329. Examen UPM A2 2011";
 preguntaids[6] = 8329


//  Id pregunta: 8278 Año de creación de pregunta: 2011
 questions[7]= "8)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Bidireccional";
 choices[7][1] = "S&iacute;ncrono.";
 choices[7][2] = "Entre procesos.";
 choices[7][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[7] = 2;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8278. Examen TIC A2 2010 interna";
 preguntaids[7] = 8278


//  Id pregunta: 8363 Año de creación de pregunta: 2011
 questions[8]= "9)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[8]= new Array();
 choices[8][0] = "Insercci&oacute;n";
 choices[8][1] = "Burbuja";
 choices[8][2] = "Selecci&oacute;n";
 choices[8][3] = "Combinaci&oacute;n";
 answers[8] = 1;
 units[8] = ['67', '68'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8363. Analista Ayto. Madrid 2010";
 preguntaids[8] = 8363


//  Id pregunta: 8416 Año de creación de pregunta: 2011
 questions[9]= "10)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[9]= new Array();
 choices[9][0] = "&lt;table&gt;";
 choices[9][1] = "&lt;td&gt;";
 choices[9][2] = "&lt;th&gt;";
 choices[9][3] = "&lt;column&gt;";
 answers[9] = 1;
 units[9] = ['74'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8416. Operador Ayto. Madrid 2010";
 preguntaids[9] = 8416


//  Id pregunta: 8328 Año de creación de pregunta: 2011
 questions[10]= "11)  Los procesos de un Data Warehouse son:";
 choices[10]= new Array();
 choices[10][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[10][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[10][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[10][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[10] = 1;
 units[10] = ['72'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8328. Examen UPM A2 2011";
 preguntaids[10] = 8328


//  Id pregunta: 8315 Año de creación de pregunta: 2011
 questions[11]= "12)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;c&oacute;mo se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[11]= new Array();
 choices[11][0] = "WT (Window Toolkit)";
 choices[11][1] = "AWT (Abstract Window Toolkit)";
 choices[11][2] = "JWS (Java Window Set)";
 choices[11][3] = "WS (Windows Set)";
 answers[11] = 1;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8315. Examen UPM A2 2011";
 preguntaids[11] = 8315


//  Id pregunta: 8322 Año de creación de pregunta: 2011
 questions[12]= "13)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[12]= new Array();
 choices[12][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[12][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[12][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[12][3] = "Todas las anteriores son falsas";
 answers[12] = 0;
 units[12] = ['63'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8322. Examen UPM A2 2011";
 preguntaids[12] = 8322


//  Id pregunta: 8380 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de elementos fotosensibles?";
 choices[13]= new Array();
 choices[13][0] = "CCD";
 choices[13][1] = "PTN";
 choices[13][2] = "CIS";
 choices[13][3] = "CMOS";
 answers[13] = 1;
 units[13] = ['80'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8380. ";
 preguntaids[13] = 8380


//  Id pregunta: 8313 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[14]= new Array();
 choices[14][0] = "CLRUN";
 choices[14][1] = "CLRNET";
 choices[14][2] = "COLR";
 choices[14][3] = "CLR";
 answers[14] = 3;
 units[14] = ['63'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8313. Examen UPM A2 2011";
 preguntaids[14] = 8313


//  Id pregunta: 8395 Año de creación de pregunta: 2011
 questions[15]= "16)  Se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "XML fue dise&ntilde;ado para transportar datos, no para mostrarlos";
 choices[15][1] = "Las etiquetas de XML son todas predefinidas";
 choices[15][2] = "XML es una recomendaci&oacute;n del UIT";
 choices[15][3] = "XML significa Extralarge Markup Language";
 answers[15] = 0;
 units[15] = ['74'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8395. ";
 preguntaids[15] = 8395


//  Id pregunta: 8358 Año de creación de pregunta: 2011
 questions[16]= "17)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[16]= new Array();
 choices[16][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura";
 choices[16][1] = "Ofrece la maxima seguridad de los datos almacenados";
 choices[16][2] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas";
 choices[16][3] = "Puede ser implementado tanto en Hardware como en Software";
 answers[16] = 2;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8358. Analista Ayto. Madrid 2010";
 preguntaids[16] = 8358


//  Id pregunta: 8391 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[17]= new Array();
 choices[17][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[17][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[17][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[17][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[17] = 1;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8391. ";
 preguntaids[17] = 8391


//  Id pregunta: 8335 Año de creación de pregunta: 2011
 questions[18]= "19)  Seg&uacute;n el art&iacute;culo 3 de la Ley 59/2003, de 19 de diciembre, de Firma Electr&oacute;nica, una &quot;firma electr&oacute;nica que permite identificar al firmante y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control&quot; es una:";
 choices[18]= new Array();
 choices[18][0] = "Firma electr&oacute;nica";
 choices[18][1] = "Firma electr&oacute;nica avanzada";
 choices[18][2] = "Firma electr&oacute;nica reconocida";
 choices[18][3] = "Firma electr&oacute;nica validada";
 answers[18] = 1;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8335. Examen UPM A2 2011";
 preguntaids[18] = 8335


//  Id pregunta: 8355 Año de creación de pregunta: 2011
 questions[19]= "20)  Si en fichero de estilos.css, se incluye: #inner { float: right; width: 130px; color: blue }, &iquest;c&oacute;mo se utilizar&iacute;a el estilo indicado en un p&aacute;rrafo de home.html?";
 choices[19]= new Array();
 choices[19][0] = "&lt;P style=&rdquo;inner&rdquo;&gt;";
 choices[19][1] = "&lt;P id=&rdquo;inner&rdquo;&gt;";
 choices[19][2] = "&lt;P class=&rdquo;inner&rdquo;&gt;";
 choices[19][3] = "&lt;P font=inner&gt;";
 answers[19] = 1;
 units[19] = ['74'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8355. Analista Ayto. Madrid 2010";
 preguntaids[19] = 8355


//  Id pregunta: 8411 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Cu&aacute;ndo est&aacute; una relaci&oacute;n en Tercera Forma Normal (3FN)?:";
 choices[20]= new Array();
 choices[20][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[20][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[20][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[20][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[20] = 2;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8411. Operador Ayto. Madrid 2010";
 preguntaids[20] = 8411


//  Id pregunta: 8311 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Qu&eacute; comando de Unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "jobs";
 choices[21][1] = "fg";
 choices[21][2] = "pg";
 choices[21][3] = "bg";
 answers[21] = 2;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8311. Examen UPM A2 2011";
 preguntaids[21] = 8311


//  Id pregunta: 8390 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[22]= new Array();
 choices[22][0] = "HMAC";
 choices[22][1] = "MD5";
 choices[22][2] = "MD8";
 choices[22][3] = "SHA";
 answers[22] = 2;
 units[22] = ['78'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8390. ";
 preguntaids[22] = 8390


//  Id pregunta: 8310 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[23]= new Array();
 choices[23][0] = "ISO 8879";
 choices[23][1] = "RFC 8879";
 choices[23][2] = "IEEE 8879";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = 0;
 units[23] = ['74'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8310. Examen UPM A2 2011";
 preguntaids[23] = 8310


//  Id pregunta: 8282 Año de creación de pregunta: 2011
 questions[24]= "25)  En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[24]= new Array();
 choices[24][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[24][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[24][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[24][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[24] = 2;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8282. Examen TIC A2 2010 interna";
 preguntaids[24] = 8282


//  Id pregunta: 8415 Año de creación de pregunta: 2011
 questions[25]= "26)  El proceso de normalizaci&oacute;n tiene por objeto:";
 choices[25]= new Array();
 choices[25][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[25][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[25][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[25][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[25] = 2;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8415. Operador Ayto. Madrid 2010";
 preguntaids[25] = 8415


//  Id pregunta: 8410 Año de creación de pregunta: 2011
 questions[26]= "27)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[26]= new Array();
 choices[26][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[26][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[26][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[26][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[26] = 1;
 units[26] = ['74'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8410. Operador Ayto. Madrid 2010";
 preguntaids[26] = 8410


//  Id pregunta: 8377 Año de creación de pregunta: 2011
 questions[27]= "28)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[27]= new Array();
 choices[27][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[27][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[27][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[27][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[27] = 1;
 units[27] = ['60', '61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8377. Examen UPM A2 2011";
 preguntaids[27] = 8377


//  Id pregunta: 8255 Año de creación de pregunta: 2011
 questions[28]= "29)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[28]= new Array();
 choices[28][0] = "Modo raw y modo relleno PKCS#11";
 choices[28][1] = "&Uacute;nicamente en modo raw.";
 choices[28][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[28][3] = "Ninguna de las anteriores.";
 answers[28] = 0;
 units[28] = ['78'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8255. Examen TIC A2 2010 interna";
 preguntaids[28] = 8255


//  Id pregunta: 8275 Año de creación de pregunta: 2011
 questions[29]= "30)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[29]= new Array();
 choices[29][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[29][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[29][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[29][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[29] = 1;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8275. Examen TIC A2 2010 interna";
 preguntaids[29] = 8275


//  Id pregunta: 8364 Año de creación de pregunta: 2011
 questions[30]= "31)  Un dato espacial es una variable asociada a una localizaci&oacute;n del espacio. Normalmente se utilizan datos vectoriales, los cuales pueden ser expresados mediante tres tipos de objetos espaciales:";
 choices[30]= new Array();
 choices[30][0] = "Puntos, l&iacute;neas, pol&iacute;gonos.";
 choices[30][1] = "Coordenadas, l&iacute;neas, pol&iacute;gonos.";
 choices[30][2] = "Puntos, vectores, pol&iacute;gonos.";
 choices[30][3] = "Puntos, arcos, rectas.";
 answers[30] = 0;
 units[30] = ['71'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8364. Analista Ayto. Madrid 2010";
 preguntaids[30] = 8364


//  Id pregunta: 8277 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[31]= new Array();
 choices[31][0] = "Java.";
 choices[31][1] = "C.";
 choices[31][2] = "Smalltalk.";
 choices[31][3] = "Ada.";
 answers[31] = 1;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8277. Examen TIC A2 2010 interna";
 preguntaids[31] = 8277


//  Id pregunta: 8342 Año de creación de pregunta: 2011
 questions[32]= "33)  Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[32]= new Array();
 choices[32][0] = "Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente";
 choices[32][1] = "Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[32][2] = "Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual";
 choices[32][3] = "Ambos conceptos son incompatibles en una red FC";
 answers[32] = 2;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8342. Examen UC3M 2010";
 preguntaids[32] = 8342


//  Id pregunta: 8373 Año de creación de pregunta: 2011
 questions[33]= "34)  Respecto a AJAX es falso que:";
 choices[33]= new Array();
 choices[33][0] = "Reduce el volumen de informaci&oacute;n a intercambiar entre el cliente y el servidor frente al empleo del refresco de p&aacute;gina completa.";
 choices[33][1] = "No se puede emplear para desarrollar aplicaciones RIA.";
 choices[33][2] = "Existen m&uacute;ltiples liber&iacute;as para simplificar el desarrollo con AJAX.";
 choices[33][3] = "Son las siglas de Asynchronous JavaScript And XML.";
 answers[33] = 1;
 units[33] = ['62'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8373. Analista Ayto. Madrid 2010";
 preguntaids[33] = 8373


//  Id pregunta: 8323 Año de creación de pregunta: 2011
 questions[34]= "35)  El objeto anchor de Javascript indica...";
 choices[34]= new Array();
 choices[34][0] = "Los enlaces internos del documento";
 choices[34][1] = "Los v&iacute;nculos externos del documento";
 choices[34][2] = "Array con todas las anclas del documento";
 choices[34][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[34] = 0;
 units[34] = ['62'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8323. Examen UPM A2 2011";
 preguntaids[34] = 8323


//  Id pregunta: 8378 Año de creación de pregunta: 2011
 questions[35]= "36)  ODBC son las siglas de:";
 choices[35]= new Array();
 choices[35][0] = "Open DataBase Consortium";
 choices[35][1] = "Open Data Business Connectivity";
 choices[35][2] = "Open DataBase Connectivity";
 choices[35][3] = "Object DataBase Consortium";
 answers[35] = 2;
 units[35] = ['60', '61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8378. Examen UPM A2 2011";
 preguntaids[35] = 8378


//  Id pregunta: 8280 Año de creación de pregunta: 2011
 questions[36]= "37)  El grado de multiprogramaci&oacute;n en un sistema operativo corresponde a:";
 choices[36]= new Array();
 choices[36][0] = "El n&uacute;mero m&aacute;ximo de programas que realizan operaciones de E/S.";
 choices[36][1] = "El n&uacute;mero m&aacute;ximo de archivos en un directorio";
 choices[36][2] = "El n&uacute;mero m&aacute;ximo de procesos en memoria principal";
 choices[36][3] = "El n&uacute;mero m&aacute;ximo de programas que comparten variables";
 answers[36] = 2;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8280. Examen TIC A2 2010 interna";
 preguntaids[36] = 8280


//  Id pregunta: 8399 Año de creación de pregunta: 2011
 questions[37]= "38)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[37]= new Array();
 choices[37][0] = "En el navegador del cliente.";
 choices[37][1] = "En el servidor Web.";
 choices[37][2] = "En el proxy.";
 choices[37][3] = "En el servidor de aplicaciones";
 answers[37] = 0;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8399. Operador Ayto. Madrid 2010";
 preguntaids[37] = 8399


//  Id pregunta: 8330 Año de creación de pregunta: 2011
 questions[38]= "39)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[38]= new Array();
 choices[38][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[38][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[38][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[38][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[38] = 0;
 units[38] = ['63'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8330. Examen UPM A2 2011";
 preguntaids[38] = 8330


//  Id pregunta: 8316 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[39]= new Array();
 choices[39][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[39][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[39][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[39][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[39] = 3;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8316. Examen UPM A2 2011";
 preguntaids[39] = 8316


//  Id pregunta: 8279 Año de creación de pregunta: 2011
 questions[40]= "41)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms. Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[40]= new Array();
 choices[40][0] = "35";
 choices[40][1] = "40";
 choices[40][2] = "50";
 choices[40][3] = "55";
 answers[40] = 2;
 units[40] = ['56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8279. Examen TIC A2 2010 interna";
 preguntaids[40] = 8279


//  Id pregunta: 8294 Año de creación de pregunta: 2011
 questions[41]= "42)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[41]= new Array();
 choices[41][0] = "PKCS#10";
 choices[41][1] = "PKCS#12";
 choices[41][2] = "X.500";
 choices[41][3] = "X.509";
 answers[41] = 0;
 units[41] = ['78'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8294. Examen UPM A2 2011";
 preguntaids[41] = 8294


//  Id pregunta: 8319 Año de creación de pregunta: 2011
 questions[42]= "43)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con:";
 choices[42]= new Array();
 choices[42][0] = "Data Marts.";
 choices[42][1] = "Metadata.";
 choices[42][2] = "Middleware.";
 choices[42][3] = "Cubos OLAP.";
 answers[42] = 0;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8319. Examen UPM A2 2011";
 preguntaids[42] = 8319


//  Id pregunta: 8354 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[43]= new Array();
 choices[43][0] = "Type 1 JDBC Driver";
 choices[43][1] = "Type 2 JDBC Driver";
 choices[43][2] = "Type 3 JDBC Driver";
 choices[43][3] = "Type 4 JDBC Driver";
 answers[43] = 3;
 units[43] = ['61', '64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8354. Analista Ayto. Madrid 2010";
 preguntaids[43] = 8354


//  Id pregunta: 8325 Año de creación de pregunta: 2011
 questions[44]= "45)  Las extensiones del Data Mining son:";
 choices[44]= new Array();
 choices[44][0] = "Web Mining y Text Mining.";
 choices[44][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[44][2] = "Text Mining e Hipertext Mining.";
 choices[44][3] = "Web Mining e Hipertext Mining.";
 answers[44] = 0;
 units[44] = ['72'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8325. Examen UPM A2 2011";
 preguntaids[44] = 8325


//  Id pregunta: 8412 Año de creación de pregunta: 2011
 questions[45]= "46)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[45]= new Array();
 choices[45][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[45][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[45][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[45][3] = "Ninguna de las anteriores es cierta";
 answers[45] = 0;
 units[45] = ['56'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8412. Operador Ayto. Madrid 2010";
 preguntaids[45] = 8412


//  Id pregunta: 8348 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Con qu&eacute; campo de la inform&aacute;tica se relaciona SHA-2?";
 choices[46]= new Array();
 choices[46][0] = "Data Mining";
 choices[46][1] = "La Criptograf&iacute;a";
 choices[46][2] = "El e-learning";
 choices[46][3] = "La gesti&oacute;n de versiones";
 answers[46] = 1;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8348. Examen UC3M 2010";
 preguntaids[46] = 8348


//  Id pregunta: 8271 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[47]= new Array();
 choices[47][0] = "En la primera generaci&oacute;n,";
 choices[47][1] = "En la segunda generaci&oacute;n";
 choices[47][2] = "En la tercera generaci&oacute;n.";
 choices[47][3] = "En la cuarta generaci&oacute;n";
 answers[47] = 1;
 units[47] = ['49'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8271. Examen TIC A2 2010 interna";
 preguntaids[47] = 8271


//  Id pregunta: 8308 Año de creación de pregunta: 2011
 questions[48]= "49)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[48]= new Array();
 choices[48][0] = "Nombre de usuario y shell";
 choices[48][1] = "Contrase&ntilde;a de usuario y home";
 choices[48][2] = "uid y shell";
 choices[48][3] = "gid y home";
 answers[48] = 2;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8308. Examen UPM A2 2011";
 preguntaids[48] = 8308


//  Id pregunta: 8344 Año de creación de pregunta: 2011
 questions[49]= "50)  De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[49]= new Array();
 choices[49][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[49][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[49][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[49][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[49] = 0;
 units[49] = ['72'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8344. Examen UC3M 2010";
 preguntaids[49] = 8344


//  Id pregunta: 8305 Año de creación de pregunta: 2011
 questions[50]= "51)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[50]= new Array();
 choices[50][0] = "De menor longitud que la cadena inicial";
 choices[50][1] = "De la misma longitud que la cadena inicial";
 choices[50][2] = "De mayor longitud que la cadena inicial";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = 3;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8305. Examen UPM A2 2011";
 preguntaids[50] = 8305


//  Id pregunta: 8353 Año de creación de pregunta: 2011
 questions[51]= "52)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[51]= new Array();
 choices[51][0] = "PRIMARY KEY";
 choices[51][1] = "FOREIGN KEY";
 choices[51][2] = "CANDIDATE KEY";
 choices[51][3] = "SUPERKEY";
 answers[51] = 1;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8353. Analista Ayto. Madrid 2010";
 preguntaids[51] = 8353


//  Id pregunta: 8337 Año de creación de pregunta: 2011
 questions[52]= "53)  &iquest;Qu&eacute; tipo de filtro se emplea en im&aacute;genes digitales para detectar bordes?";
 choices[52]= new Array();
 choices[52][0] = "Filtro paso bajo";
 choices[52][1] = "Filtro paso alto";
 choices[52][2] = "Filtro de mediana";
 choices[52][3] = "Filtro de la moda";
 answers[52] = 1;
 units[52] = ['80'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8337. Examen UC3M 2010";
 preguntaids[52] = 8337


//  Id pregunta: 8274 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[53]= new Array();
 choices[53][0] = "Android.";
 choices[53][1] = "SymbianOS.";
 choices[53][2] = "HTC Mobile.";
 choices[53][3] = "RIM BlackBerry.";
 answers[53] = 2;
 units[53] = ['59'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8274. Examen TIC A2 2010 interna";
 preguntaids[53] = 8274


//  Id pregunta: 8359 Año de creación de pregunta: 2011
 questions[54]= "55)  El lenguaje Java Script:";
 choices[54]= new Array();
 choices[54][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[54][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[54][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[54][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[54] = 1;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8359. Analista Ayto. Madrid 2010";
 preguntaids[54] = 8359


//  Id pregunta: 8302 Año de creación de pregunta: 2011
 questions[55]= "56)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[55]= new Array();
 choices[55][0] = "SISD";
 choices[55][1] = "SIMD";
 choices[55][2] = "MISD";
 choices[55][3] = "MIMD";
 answers[55] = 2;
 units[55] = ['49'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8302. Examen UPM A2 2011";
 preguntaids[55] = 8302


//  Id pregunta: 8301 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;En qu&eacute; sentencia de SQL, OLAP proporciona mayor velocidad de procesamiento?";
 choices[56]= new Array();
 choices[56][0] = "INSERT";
 choices[56][1] = "UPDATE";
 choices[56][2] = "DELETE";
 choices[56][3] = "SELECT";
 answers[56] = 3;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8301. Examen UPM A2 2011";
 preguntaids[56] = 8301


//  Id pregunta: 8309 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[57]= new Array();
 choices[57][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[57][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;.";
 choices[57][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;.";
 choices[57][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[57] = 0;
 units[57] = ['74'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8309. Examen UPM A2 2011";
 preguntaids[57] = 8309


//  Id pregunta: 8334 Año de creación de pregunta: 2011
 questions[58]= "59)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[58]= new Array();
 choices[58][0] = "GPL";
 choices[58][1] = "BSD";
 choices[58][2] = "EULA";
 choices[58][3] = "GNU";
 answers[58] = 0;
 units[58] = ['66'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8334. Examen UPM A2 2011";
 preguntaids[58] = 8334


//  Id pregunta: 8324 Año de creación de pregunta: 2011
 questions[59]= "60)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[59]= new Array();
 choices[59][0] = "&lt;% y %&gt;";
 choices[59][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[59][2] = "&lt;!- --&gt;";
 choices[59][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[59] = 0;
 units[59] = ['63'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8324. Examen UPM A2 2011";
 preguntaids[59] = 8324


//  Id pregunta: 8272 Año de creación de pregunta: 2011
 questions[60]= "61)  Los actuales dise&ntilde;os l&oacute;gicos de los chipset para la arquitectura x86 se estructuran en dos bloques funcionales: el Northbridge y el Southbridge. Indique cu&aacute;l de los siguientes subsistemas son competencia del Northbridge.";
 choices[60]= new Array();
 choices[60][0] = "Acceso a la RAM y controlador AGP.";
 choices[60][1] = "Controladores IDE y SATA";
 choices[60][2] = "Controladores USB y FIREWIRE";
 choices[60][3] = "Super I/O (Puerto serie, paralelo), audio y LAN";
 answers[60] = 0;
 units[60] = ['50'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8272. Examen TIC A2 2010 interna";
 preguntaids[60] = 8272


//  Id pregunta: 8273 Año de creación de pregunta: 2011
 questions[61]= "62)  En relaci&oacute;n con la tecnolog&iacute;a &quot;grid computing&quot;, se&ntilde;ale la respuesta FALSA:";
 choices[61]= new Array();
 choices[61][0] = "Los nodos no tienen que estar dedicados.";
 choices[61][1] = "Son sistemas homog&eacute;neos (todos los nodos deben ser id&eacute;nticos).";
 choices[61][2] = "Se consigue reducci&oacute;n de costes, no es necesaria disponer de grandes y costosos servidores.";
 choices[61][3] = "La escalabilidad parametrizable es una caracter&iacute;stica muy Importante de esta arquitectura";
 answers[61] = 1;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8273. Examen TIC A2 2010 interna";
 preguntaids[61] = 8273


//  Id pregunta: 8276 Año de creación de pregunta: 2011
 questions[62]= "63)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[62]= new Array();
 choices[62][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[62][1] = "No existe tal denominaci&oacute;n.";
 choices[62][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[62][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[62] = 3;
 units[62] = ['56'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8276. Examen TIC A2 2010 interna";
 preguntaids[62] = 8276


//  Id pregunta: 8339 Año de creación de pregunta: 2011
 questions[63]= "64)  En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[63]= new Array();
 choices[63][0] = "Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[63][1] = "Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[63][2] = "Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[63][3] = "Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[63] = 1;
 units[63] = ['62'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8339. Examen UC3M 2010";
 preguntaids[63] = 8339


//  Id pregunta: 8253 Año de creación de pregunta: 2011
 questions[64]= "65)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[64]= new Array();
 choices[64][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[64][1] = "Se incluyen, entre otros, los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[64][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[64][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[64] = 1;
 units[64] = ['78'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8253. Examen TIC A2 2010 interna";
 preguntaids[64] = 8253


//  Id pregunta: 8299 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (DDL) de SQL?";
 choices[65]= new Array();
 choices[65][0] = "ROLLBACK";
 choices[65][1] = "UPDATE";
 choices[65][2] = "GRANT";
 choices[65][3] = "TRUNCATE";
 answers[65] = 3;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8299. Examen UPM A2 2011";
 preguntaids[65] = 8299


//  Id pregunta: 8375 Año de creación de pregunta: 2011
 questions[66]= "67)  La cl&aacute;usula HAVING de SQL:";
 choices[66]= new Array();
 choices[66][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[66][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[66][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[66][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[66] = 2;
 units[66] = ['60', '61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8375. Examen UPM A2 2011";
 preguntaids[66] = 8375


//  Id pregunta: 8292 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[67]= new Array();
 choices[67][0] = "mkboot disk.";
 choices[67][1] = "bootfp disk.";
 choices[67][2] = "ww and rawrite.";
 choices[67][3] = "dd and rawrite.";
 answers[67] = 3;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8292. Examen UPM A2 2011";
 preguntaids[67] = 8292


//  Id pregunta: 8360 Año de creación de pregunta: 2011
 questions[68]= "69)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[68]= new Array();
 choices[68][0] = "Sistema Vectorial.";
 choices[68][1] = "Sistema R&aacute;ster.";
 choices[68][2] = "Sistema georreferencial orientado a objetos.";
 choices[68][3] = "Sistema georreferencial basado en metadatos.";
 answers[68] = 1;
 units[68] = ['71'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8360. Analista Ayto. Madrid 2010";
 preguntaids[68] = 8360


//  Id pregunta: 8414 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Qu&eacute; significan las siglas SOAP?";
 choices[69]= new Array();
 choices[69][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[69][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[69][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[69][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[69] = 0;
 units[69] = ['55'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8414. Operador Ayto. Madrid 2010";
 preguntaids[69] = 8414


//  Id pregunta: 8321 Año de creación de pregunta: 2011
 questions[70]= "71)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[70]= new Array();
 choices[70][0] = "AEIC.";
 choices[70][1] = "LOM.";
 choices[70][2] = "LCMS.";
 choices[70][3] = "SCORM.";
 answers[70] = 3;
 units[70] = ['70'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8321. Examen UPM A2 2011";
 preguntaids[70] = 8321


//  Id pregunta: 8365 Año de creación de pregunta: 2011
 questions[71]= "72)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[71]= new Array();
 choices[71][0] = "Metadata.";
 choices[71][1] = "Data Marts.";
 choices[71][2] = "Data Ware.";
 choices[71][3] = "Data Store.";
 answers[71] = 1;
 units[71] = ['72'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8365. Analista Ayto. Madrid 2010";
 preguntaids[71] = 8365


//  Id pregunta: 8351 Año de creación de pregunta: 2011
 questions[72]= "73)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.5 tenemos:";
 choices[72]= new Array();
 choices[72][0] = "P&aacute;ginas Asp y DLL";
 choices[72][1] = "Applet, Servlets, EJBs";
 choices[72][2] = "Javascript y p&aacute;ginas JSP";
 choices[72][3] = "Componentes COM";
 answers[72] = 1;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8351. Examen UC3M 2010";
 preguntaids[72] = 8351


//  Id pregunta: 8362 Año de creación de pregunta: 2011
 questions[73]= "74)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[73]= new Array();
 choices[73][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[73][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[73][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[73][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[73] = 1;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8362. Analista Ayto. Madrid 2010";
 preguntaids[73] = 8362


//  Id pregunta: 8304 Año de creación de pregunta: 2011
 questions[74]= "75)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root:";
 choices[74]= new Array();
 choices[74][0] = "who | grep root | wc -l";
 choices[74][1] = "who root | wc -l";
 choices[74][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[74][3] = "who &lt;grep -v root&gt;wc";
 answers[74] = 0;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8304. Examen UPM A2 2011";
 preguntaids[74] = 8304


