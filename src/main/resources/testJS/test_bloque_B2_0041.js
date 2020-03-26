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
//  Id pregunta: 9523 Año de creación de pregunta: 2014
 questions[0]= "1)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[0]= new Array();
 choices[0][0] = "getHeaderValues() of HttpServletRequest";
 choices[0][1] = "getHeaderValue() of ServletRequest";
 choices[0][2] = "getHeader() of HttpServletRequest";
 choices[0][3] = "getHeader() of ServletRequest";
 answers[0] = 2;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9523. ";
 preguntaids[0] = 9523


//  Id pregunta: 9515 Año de creación de pregunta: 2014
 questions[1]= "2)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[1]= new Array();
 choices[1][0] = "sleep(long msec);";
 choices[1][1] = "start();";
 choices[1][2] = "wait();";
 choices[1][3] = "A y B son correctas.";
 answers[1] = 3;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9515. ";
 preguntaids[1] = 9515


//  Id pregunta: 9534 Año de creación de pregunta: 2014
 questions[2]= "3)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:  &quot;Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&quot; &iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[2]= new Array();
 choices[2][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[2][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[2][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[2][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[2] = 1;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9534. ";
 preguntaids[2] = 9534


//  Id pregunta: 9354 Año de creación de pregunta: 2014
 questions[3]= "4)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[3]= new Array();
 choices[3][0] = "Joost";
 choices[3][1] = "Netflix";
 choices[3][2] = "Cassandra";
 choices[3][3] = "Hadoop";
 answers[3] = 3;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9354. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[3] = 9354


//  Id pregunta: 9562 Año de creación de pregunta: 2014
 questions[4]= "5)  En cuanto a las estrategias de inferencia en marcos";
 choices[4]= new Array();
 choices[4][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[4][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[4][2] = "Ambas son ciertas";
 choices[4][3] = "Ninguna es cierta";
 answers[4] = 2;
 units[4] = ['68'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9562. ";
 preguntaids[4] = 9562


//  Id pregunta: 9566 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Cu&aacute;l NO es una sentencia del lenguaje JCL (Job Control Language)?";
 choices[5]= new Array();
 choices[5][0] = "EXEC";
 choices[5][1] = "DD";
 choices[5][2] = "JOB";
 choices[5][3] = "CALL";
 answers[5] = 3;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9566. TIC A2 2013 libre";
 preguntaids[5] = 9566


//  Id pregunta: 9355 Año de creación de pregunta: 2014
 questions[6]= "7)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[6]= new Array();
 choices[6][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[6][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[6][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[6][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[6] = 3;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9355. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[6] = 9355


//  Id pregunta: 9516 Año de creación de pregunta: 2014
 questions[7]= "8)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[7]= new Array();
 choices[7][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[7][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[7][2] = "A y B son ciertas";
 choices[7][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[7] = 2;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9516. ";
 preguntaids[7] = 9516


//  Id pregunta: 9565 Año de creación de pregunta: 2014
 questions[8]= "9)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[8]= new Array();
 choices[8][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[8][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[8][2] = "Las neuronas se conectan mediante arcos";
 choices[8][3] = "Las neuronas se agrupan en capas";
 answers[8] = 1;
 units[8] = ['68'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9565. La neurona es el nivel b&aacute;sico de representaci&oacute;n.";
 preguntaids[8] = 9565


//  Id pregunta: 9567 Año de creación de pregunta: 2014
 questions[9]= "10)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[9]= new Array();
 choices[9][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[9][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[9][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[9][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[9] = 2;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9567. TIC A2 2013 libre";
 preguntaids[9] = 9567


//  Id pregunta: 9537 Año de creación de pregunta: 2014
 questions[10]= "11)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[10]= new Array();
 choices[10][0] = "No, pero hay que licenciarlo como LGPL";
 choices[10][1] = "No, no proh&iacute;be a quienes distribuyan el software plantear demandas sobre patentes a otros licenciatarios";
 choices[10][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[10][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[10] = 2;
 units[10] = ['66'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9537. ";
 preguntaids[10] = 9537


//  Id pregunta: 9511 Año de creación de pregunta: 2014
 questions[11]= "12)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:  System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[11]= new Array();
 choices[11][0] = "Da un error de compilaci&oacute;n";
 choices[11][1] = "TRUE";
 choices[11][2] = "FALSE";
 choices[11][3] = "12";
 answers[11] = 1;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9511. ";
 preguntaids[11] = 9511


//  Id pregunta: 9512 Año de creación de pregunta: 2014
 questions[12]= "13)  Teniendo las siguientes sentencias, el resultado ser&aacute;:  byte b1 = 126, b2 = 1;  byte b3 = b1 + b2;  System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[12]= new Array();
 choices[12][0] = "127";
 choices[12][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[12][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[12][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[12] = 2;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9512. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";
 preguntaids[12] = 9512


//  Id pregunta: 9536 Año de creación de pregunta: 2014
 questions[13]= "14)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:  I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra forma  II) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[13]= new Array();
 choices[13][0] = "I) y II) son verdaderas";
 choices[13][1] = "I) es verdadera, II) es falsa";
 choices[13][2] = "I es falsa, II) es verdadera";
 choices[13][3] = "I) y II) son falsas";
 answers[13] = 3;
 units[13] = ['66'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9536. ";
 preguntaids[13] = 9536


//  Id pregunta: 9486 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes formatos de im&aacute;gen permite fondos transparentes?";
 choices[14]= new Array();
 choices[14][0] = "TIFF";
 choices[14][1] = "BMP";
 choices[14][2] = "JPEG";
 choices[14][3] = "PNG";
 answers[14] = 3;
 units[14] = ['80'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9486. ";
 preguntaids[14] = 9486


//  Id pregunta: 9559 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes mediante sistema de pizarra es cierta?";
 choices[15]= new Array();
 choices[15][0] = "El agente que escribe en la pizarra se convierte en coordinador de la misma";
 choices[15][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra, en lugar de esperar su turno";
 choices[15][2] = "Ambas son ciertas";
 choices[15][3] = "Ninguna es cierta";
 answers[15] = 3;
 units[15] = ['67'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9559. A: el agente y el coordinador son figuras diferentes; B: no lo puede escribir inmediatamente, sino que la pizarra es coordinada y arbitrada por un controlador.";
 preguntaids[15] = 9559


//  Id pregunta: 9573 Año de creación de pregunta: 2014
 questions[16]= "17)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[16]= new Array();
 choices[16][0] = "Tape Management System.";
 choices[16][1] = "Transaction Multiplexing System.";
 choices[16][2] = "Tape Mapping System.";
 choices[16][3] = "Transaction Management System.";
 answers[16] = 0;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9573. TIC A2 2013 libre";
 preguntaids[16] = 9573


//  Id pregunta: 9468 Año de creación de pregunta: 2014
 questions[17]= "18)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[17]= new Array();
 choices[17][0] = "Dependencia funcional";
 choices[17][1] = "Dependencia multivaluada";
 choices[17][2] = "Dependencia funcional trivial";
 choices[17][3] = "Dependencia funcional completa";
 answers[17] = 3;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9468. ";
 preguntaids[17] = 9468


//  Id pregunta: 9521 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[18]= new Array();
 choices[18][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[18][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[18][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[18][3] = "El usuario cierra la ventana del navegador";
 answers[18] = 0;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9521. ";
 preguntaids[18] = 9521


//  Id pregunta: 9488 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Qu&eacute; es PDF-417?";
 choices[19]= new Array();
 choices[19][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[19][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[19][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[19][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[19] = 0;
 units[19] = ['81'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9488. ";
 preguntaids[19] = 9488


//  Id pregunta: 9561 Año de creación de pregunta: 2014
 questions[20]= "21)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[20]= new Array();
 choices[20][0] = "Facilidad de representaci&oacute;n";
 choices[20][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[20][2] = "Modularidad";
 choices[20][3] = "Flexibilidad";
 answers[20] = 1;
 units[20] = ['68'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9561. Seg&uacute;n ASTIC: ventajas: facilidad de representaci&oacute;n, modularidad, flexibilidad, eficiencia;  desventajas: direcci&oacute;n de inferencia prefijada, hay dominios de conocimiento que  formulados en reglas dan lugar a bases de conocimiento muy grandes debido  a que el conocimiento se expresa mejor mediante restricciones";
 preguntaids[20] = 9561


//  Id pregunta: 9485 Año de creación de pregunta: 2014
 questions[21]= "22)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[21]= new Array();
 choices[21][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[21][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[21][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[21][3] = "Todas las anteriores";
 answers[21] = 3;
 units[21] = ['60'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9485. ";
 preguntaids[21] = 9485


//  Id pregunta: 9465 Año de creación de pregunta: 2014
 questions[22]= "23)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[22]= new Array();
 choices[22][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[22][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[22][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[22][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[22] = 3;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9465. ";
 preguntaids[22] = 9465


//  Id pregunta: 9352 Año de creación de pregunta: 2014
 questions[23]= "24)  El Entity Framework es:";
 choices[23]= new Array();
 choices[23][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[23][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[23][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[23][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[23] = 0;
 units[23] = ['63'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9352. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[23] = 9352


//  Id pregunta: 9520 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[24]= new Array();
 choices[24][0] = "GenericServlet";
 choices[24][1] = "ServletConfig";
 choices[24][2] = "ServletContext";
 choices[24][3] = "HttpServletRequest";
 answers[24] = 3;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9520. ";
 preguntaids[24] = 9520


//  Id pregunta: 9473 Año de creación de pregunta: 2014
 questions[25]= "26)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[25]= new Array();
 choices[25][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados por otra transacci&oacute;n que finalmente aborta.";
 choices[25][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[25][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[25][3] = "Todas las anteriores";
 answers[25] = 1;
 units[25] = ['60'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9473. A: Lectura sucia";
 preguntaids[25] = 9473


//  Id pregunta: 9510 Año de creación de pregunta: 2014
 questions[26]= "27)  Las variables declaradas en un interface deben ser:";
 choices[26]= new Array();
 choices[26][0] = "public, static y final";
 choices[26][1] = "private static y final";
 choices[26][2] = "S&oacute;lo protected";
 choices[26][3] = "En un interface no se deben incluir variables";
 answers[26] = 0;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9510. ";
 preguntaids[26] = 9510


//  Id pregunta: 9568 Año de creación de pregunta: 2014
 questions[27]= "28)  En Sql Server 2016 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[27]= new Array();
 choices[27][0] = "rdlccfg";
 choices[27][1] = "tsmrpt";
 choices[27][2] = "rptsetup";
 choices[27][3] = "rsconfig";
 answers[27] = 3;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9568. TIC A2 2013 libre";
 preguntaids[27] = 9568


//  Id pregunta: 9560 Año de creación de pregunta: 2014
 questions[28]= "29)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[28]= new Array();
 choices[28][0] = "Reactivos";
 choices[28][1] = "Predictivos";
 choices[28][2] = "Ambas";
 choices[28][3] = "Ninguna";
 answers[28] = 0;
 units[28] = ['67'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9560. Pueden ser reactivos /deliberativos; colaborativos /de interfaz; m&oacute;viles/ est&aacute;ticos; de informaci&oacute;n / h&iacute;bridos";
 preguntaids[28] = 9560


//  Id pregunta: 9388 Año de creación de pregunta: 2014
 questions[29]= "30)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[29]= new Array();
 choices[29][0] = "Sim&eacute;trico de bloques.";
 choices[29][1] = "Sim&eacute;trico de flujo.";
 choices[29][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[29][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[29] = 0;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9388. Examen TIC A2  2013";
 preguntaids[29] = 9388


//  Id pregunta: 9484 Año de creación de pregunta: 2014
 questions[30]= "31)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[30]= new Array();
 choices[30][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[30][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[30][2] = "Autenticidad (A) es la prueba de qui&eacute;n es el autor de un dato y garantiza su no repudio";
 choices[30][3] = "Durabilidad (D) es la propiedad que asegura que una vez realizada la operaci&oacute;n, &eacute;sta persistir&aacute; y no se podr&aacute; deshacer aunque falle el sistema y que de esta forma los datos sobrevivan de alguna manera.";
 answers[30] = 3;
 units[30] = ['60'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9484. Atomicidad: Si una operaci&oacute;n consiste en una serie de pasos, todos ellos ocurren o ninguno, es decir, las transacciones son completas. C = Consistencia = Integridad; I= Isolation = Aislamiento= una operaci&oacute;n no afecta a otras; D =durabilidad";
 preguntaids[30] = 9484


//  Id pregunta: 9384 Año de creación de pregunta: 2014
 questions[31]= "32)  Los fuegos de clase D son los que implican:";
 choices[31]= new Array();
 choices[31][0] = "Combustibles s&oacute;lidos como papel, cart&oacute;n, madera, pl&aacute;sticos, etc.";
 choices[31][1] = "Metales y aleaciones: magnesio, sodio, etc.";
 choices[31][2] = "Combustibles l&iacute;quidos, por ejemplo: aceite, derivados del petr&oacute;leo, etc.";
 choices[31][3] = "Gases: butano, metano, propano, etc.";
 answers[31] = 1;
 units[31] = ['50'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9384. Examen TIC A2  2013";
 preguntaids[31] = 9384


//  Id pregunta: 9514 Año de creación de pregunta: 2014
 questions[32]= "33)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[32]= new Array();
 choices[32][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[32][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[32][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[32][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[32] = 1;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9514. ";
 preguntaids[32] = 9514


//  Id pregunta: 9532 Año de creación de pregunta: 2014
 questions[33]= "34)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[33]= new Array();
 choices[33][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[33][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[33][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[33][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[33] = 0;
 units[33] = ['66'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9532. https://www.gnu.org/licenses/gpl-faq.es.html#WhyMustIInclude";
 preguntaids[33] = 9532


//  Id pregunta: 9518 Año de creación de pregunta: 2014
 questions[34]= "35)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[34]= new Array();
 choices[34][0] = "Object getInitParameter(int index)";
 choices[34][1] = "Object getInitParameter(String name)";
 choices[34][2] = "String getInitParameter(String name)";
 choices[34][3] = "String getParameter(String name)";
 answers[34] = 2;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9518. ";
 preguntaids[34] = 9518


//  Id pregunta: 9570 Año de creación de pregunta: 2014
 questions[35]= "36)  RMAN es:";
 choices[35]= new Array();
 choices[35][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[35][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[35][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[35][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[35] = 2;
 units[35] = ['61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9570. TIC A2 2013 libre";
 preguntaids[35] = 9570


//  Id pregunta: 9564 Año de creación de pregunta: 2014
 questions[36]= "37)  En reglas, la inferencia mediante encadenamiento hacia adelante:";
 choices[36]= new Array();
 choices[36][0] = "Requiere en primer lugar que se introduzcan las premisas en la base de hechos";
 choices[36][1] = "Se crea un conjunto conflicto con las reglas cuyo consecuente es el objetivo de la inferencia";
 choices[36][2] = "La regla que se va a disparar siempre se elige de forma aleatoria";
 choices[36][3] = "Si la regla disparada es deductiva, se ejecuta la acci&oacute;n asociada";
 answers[36] = 0;
 units[36] = ['68'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9564. ";
 preguntaids[36] = 9564


//  Id pregunta: 9529 Año de creación de pregunta: 2014
 questions[37]= "38)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:  int [] x = new int[25];";
 choices[37]= new Array();
 choices[37][0] = "x[24] es 0";
 choices[37][1] = "x[24] es indefinido";
 choices[37][2] = "x[25] es 0";
 choices[37][3] = "x[0] es igual a null";
 answers[37] = 0;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9529. ";
 preguntaids[37] = 9529


//  Id pregunta: 9519 Año de creación de pregunta: 2014
 questions[38]= "39)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[38]= new Array();
 choices[38][0] = "sendError(int errorCode) de HttpServlet";
 choices[38][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[38][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[38][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[38] = 2;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9519. ";
 preguntaids[38] = 9519


//  Id pregunta: 9557 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[39]= new Array();
 choices[39][0] = "B&uacute;squeda de profundida limitada";
 choices[39][1] = "B&uacute;squeda primero el mejor";
 choices[39][2] = "B&uacute;squeda de coste uniforme";
 choices[39][3] = "B&uacute;squeda bidireccional";
 answers[39] = 1;
 units[39] = ['67'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9557. A , C y D: m&eacute;todo ciego o no informado";
 preguntaids[39] = 9557


//  Id pregunta: 9380 Año de creación de pregunta: 2014
 questions[40]= "41)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[40]= new Array();
 choices[40][0] = "128 bits";
 choices[40][1] = "160 bits";
 choices[40][2] = "224 bits";
 choices[40][3] = "256 bits";
 answers[40] = 1;
 units[40] = ['76'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9380. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[40] = 9380


//  Id pregunta: 9522 Año de creación de pregunta: 2014
 questions[41]= "42)  Podemos considerar a SOAP como:";
 choices[41]= new Array();
 choices[41][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[41][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[41][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = 1;
 units[41] = ['55'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9522. ";
 preguntaids[41] = 9522


//  Id pregunta: 9483 Año de creación de pregunta: 2014
 questions[42]= "43)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[42]= new Array();
 choices[42][0] = "Externo";
 choices[42][1] = "L&oacute;gico";
 choices[42][2] = "Interno";
 choices[42][3] = "Conceptual";
 answers[42] = 3;
 units[42] = ['61'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9483. ";
 preguntaids[42] = 9483


//  Id pregunta: 9569 Año de creación de pregunta: 2014
 questions[43]= "44)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[43]= new Array();
 choices[43][0] = "MongoDB";
 choices[43][1] = "MariaDB";
 choices[43][2] = "HeidiSQL";
 choices[43][3] = "MarcoDB";
 answers[43] = 3;
 units[43] = ['60'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9569. TIC A2 2013 libre";
 preguntaids[43] = 9569


//  Id pregunta: 9464 Año de creación de pregunta: 2014
 questions[44]= "45)  Un dominio en un modelo relacional&hellip;";
 choices[44]= new Array();
 choices[44][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[44][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[44][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[44][3] = "Todas las anteriores";
 answers[44] = 0;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9464. Por extensi&oacute;n= enumeraci&oacute;n de sus elementos, p.ej. d&iacute;as de la semana = {lunes, martes, mi&eacute;rcoles, jueves, viernes, s&aacute;bado, domingo} ; Por intensi&oacute;n= mediante una propiedad que recoja el recorrido de sus valores admisibles, p. ej: edad: entero / 0 &le; edad &le; 200";
 preguntaids[44] = 9464


//  Id pregunta: 9351 Año de creación de pregunta: 2014
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en Java que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[45]= new Array();
 choices[45][0] = "Flex";
 choices[45][1] = "JavaFX";
 choices[45][2] = "AJAX";
 choices[45][3] = "Silverlight";
 answers[45] = 1;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9351. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[45] = 9351


//  Id pregunta: 9558 Año de creación de pregunta: 2014
 questions[46]= "47)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[46]= new Array();
 choices[46][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[46][1] = "La estrategia del oponente es desconocida";
 choices[46][2] = "Interviene el azar";
 choices[46][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[46] = 2;
 units[46] = ['67'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9558. ";
 preguntaids[46] = 9558


//  Id pregunta: 9470 Año de creación de pregunta: 2014
 questions[47]= "48)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[47]= new Array();
 choices[47][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[47][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[47][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[47][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[47] = 2;
 units[47] = ['61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9470. ";
 preguntaids[47] = 9470


//  Id pregunta: 9490 Año de creación de pregunta: 2014
 questions[48]= "49)  Para el reconocimiento de las vocales se calculan";
 choices[48]= new Array();
 choices[48][0] = "los al&oacute;fonos";
 choices[48][1] = "el pitch";
 choices[48][2] = "los formantes";
 choices[48][3] = "el cepstrum";
 answers[48] = 2;
 units[48] = ['81'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9490. ";
 preguntaids[48] = 9490


//  Id pregunta: 9517 Año de creación de pregunta: 2014
 questions[49]= "50)  Cuales de los siguientes objetos son interfaces:";
 choices[49]= new Array();
 choices[49][0] = "java.util.List";
 choices[49][1] = "java.util.TreeMap";
 choices[49][2] = "java.util.AbstractList";
 choices[49][3] = "java.util.Collections";
 answers[49] = 0;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9517. B,C,D son clases";
 preguntaids[49] = 9517


//  Id pregunta: 9513 Año de creación de pregunta: 2014
 questions[50]= "51)  Para que la siguiente sentencia compile:  float a = 100.21;  I) Necesita hacer un casting a float: float a = (float) 100.21;  II) Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;  III) Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[50]= new Array();
 choices[50][0] = "Compila bien sin cambios";
 choices[50][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[50][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[50][3] = "I), II) y III) son v&aacute;lidas";
 answers[50] = 3;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9513. ";
 preguntaids[50] = 9513


//  Id pregunta: 9469 Año de creación de pregunta: 2014
 questions[51]= "52)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[51]= new Array();
 choices[51][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[51][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[51][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[51][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[51] = 1;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9469. C: El grado de Cross Join resultante es gradoR + gradoS";
 preguntaids[51] = 9469


//  Id pregunta: 9525 Año de creación de pregunta: 2014
 questions[52]= "53)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[52]= new Array();
 choices[52][0] = "Java Messaging Services (JMS)";
 choices[52][1] = "Java Naming and Directory Interface (JNDI)";
 choices[52][2] = "Remote Method Invocation (RMI)";
 choices[52][3] = "JavaBeans Activation Framework (JMF)";
 answers[52] = 1;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9525. ";
 preguntaids[52] = 9525


//  Id pregunta: 9533 Año de creación de pregunta: 2014
 questions[53]= "54)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?  I) Puede distribuir el c&oacute;digo fuente original de Juan, mateniendo las notificaciones de copyright  II) Puede distribuir el c&oacute;digo fuente junto a los binarios  III) Puede distribuir los parches aplicados al c&oacute;digo fuente original  IV) Puede distribuir los parches aplicados al c&oacute;digo fuente original, junto con &eacute;ste";
 choices[53]= new Array();
 choices[53][0] = "I o II, y nada m&aacute;s";
 choices[53][1] = "S&oacute;lo II";
 choices[53][2] = "II o IV, pero nada m&aacute;s";
 choices[53][3] = "Cualquiera de las 4";
 answers[53] = 2;
 units[53] = ['66'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9533. https://www.gnu.org/licenses/gpl-faq.es.html#GPLRequireSourcePostedPublic";
 preguntaids[53] = 9533


//  Id pregunta: 9471 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[54]= new Array();
 choices[54][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[54][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[54][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[54][3] = "Todas las anteriores";
 answers[54] = 3;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9471. ";
 preguntaids[54] = 9471


//  Id pregunta: 9489 Año de creación de pregunta: 2014
 questions[55]= "56)  En relaci&oacute;n a las t&eacute;cnicas para el reconocimiento &oacute;ptico de caracteres, indique la frase incorrecta:";
 choices[55]= new Array();
 choices[55][0] = "El histograma horizontal permite dividir un p&aacute;rrafo en l&iacute;neas";
 choices[55][1] = "El proceso de kerning aplicado por un procesador de textos dificulta el segmentado de palabras";
 choices[55][2] = "Los m&eacute;todos de Zadeh usan mecanismos basados en l&oacute;gica borrosa";
 choices[55][3] = "Los m&eacute;todos de comparaci&oacute;n de plantillas usan matrices bidimensionales";
 answers[55] = 1;
 units[55] = ['81'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9489. ";
 preguntaids[55] = 9489


//  Id pregunta: 9535 Año de creación de pregunta: 2014
 questions[56]= "57)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[56]= new Array();
 choices[56][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[56][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[56][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[56][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[56] = 3;
 units[56] = ['66'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9535. ";
 preguntaids[56] = 9535


//  Id pregunta: 9563 Año de creación de pregunta: 2014
 questions[57]= "58)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[57]= new Array();
 choices[57][0] = "Deducci&oacute;n de valores de slots";
 choices[57][1] = "Actualizaci&oacute;n de valores de slots";
 choices[57][2] = "Equiparaci&oacute;n";
 choices[57][3] = "Emparejamiento";
 answers[57] = 3;
 units[57] = ['68'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9563. ";
 preguntaids[57] = 9563


//  Id pregunta: 9472 Año de creación de pregunta: 2014
 questions[58]= "59)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[58]= new Array();
 choices[58][0] = "N&ordm; de filas recuperadas por la consulta";
 choices[58][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[58][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[58][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[58] = 2;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9472. ";
 preguntaids[58] = 9472


//  Id pregunta: 9527 Año de creación de pregunta: 2014
 questions[59]= "60)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[59]= new Array();
 choices[59][0] = "EJB home interface";
 choices[59][1] = "Un componente EJB";
 choices[59][2] = "La API EJB";
 choices[59][3] = "Un objeto interface EJB";
 answers[59] = 0;
 units[59] = ['64'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9527. ";
 preguntaids[59] = 9527


//  Id pregunta: 9528 Año de creación de pregunta: 2014
 questions[60]= "61)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[60]= new Array();
 choices[60][0] = "next()";
 choices[60][1] = "nextValue()";
 choices[60][2] = "nextToken()";
 choices[60][3] = "Ninguno de los anteriores";
 answers[60] = 2;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9528. ";
 preguntaids[60] = 9528


//  Id pregunta: 9374 Año de creación de pregunta: 2014
 questions[61]= "62)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[61]= new Array();
 choices[61][0] = "Contiene la clave privada.";
 choices[61][1] = "Cumple la sintaxis PKCS #21.";
 choices[61][2] = "Est&aacute; codificado en un formato no binario.";
 choices[61][3] = "No se puede convertir a formato .PEM.";
 answers[61] = 0;
 units[61] = ['76'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9374. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[61] = 9374


//  Id pregunta: 9463 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[62]= new Array();
 choices[62][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[62][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[62][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 2;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9463. B: El c&aacute;lculo relacional es de tipo declarativo.";
 preguntaids[62] = 9463


//  Id pregunta: 9530 Año de creación de pregunta: 2014
 questions[63]= "64)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[63]= new Array();
 choices[63][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[63][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[63][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[63][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[63] = 0;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9530. ";
 preguntaids[63] = 9530


//  Id pregunta: 9466 Año de creación de pregunta: 2014
 questions[64]= "65)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[64]= new Array();
 choices[64][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[64][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[64][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[64][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[64] = 1;
 units[64] = ['61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9466. A: regla 9 Independencia l&oacute;gica de datos; C: adem&aacute;s de CASCADE hay otras opciones: NO ACTION | CASCADE | SET DEFAULT | SET NULL; D: define la integridad referencial, falta la integridad de identidad";
 preguntaids[64] = 9466


//  Id pregunta: 9467 Año de creación de pregunta: 2014
 questions[65]= "66)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[65]= new Array();
 choices[65][0] = "Sin normalizar";
 choices[65][1] = "1&ordf; Forma Normal";
 choices[65][2] = "2&ordf; Forma Normal";
 choices[65][3] = "3&ordf; Forma Normal";
 answers[65] = 2;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9467. ";
 preguntaids[65] = 9467


//  Id pregunta: 9524 Año de creación de pregunta: 2014
 questions[66]= "67)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[66]= new Array();
 choices[66][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[66][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[66][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[66][3] = "ninguna de las anteriores";
 answers[66] = 0;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9524. ";
 preguntaids[66] = 9524


//  Id pregunta: 9487 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[67]= new Array();
 choices[67][0] = "Filtro de mediana";
 choices[67][1] = "Realce logar&iacute;tmico";
 choices[67][2] = "Filtro paso bajo";
 choices[67][3] = "Filtro paso alto";
 answers[67] = 1;
 units[67] = ['80'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9487. ";
 preguntaids[67] = 9487


//  Id pregunta: 9531 Año de creación de pregunta: 2014
 questions[68]= "69)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[68]= new Array();
 choices[68][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[68][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[68][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[68][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[68] = 1;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9531. ";
 preguntaids[68] = 9531


//  Id pregunta: 9526 Año de creación de pregunta: 2014
 questions[69]= "70)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[69]= new Array();
 choices[69][0] = "RMI";
 choices[69][1] = "JTS";
 choices[69][2] = "JMAPI";
 choices[69][3] = "JTA";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9526. JTA: Java Transaction Api; Remote Method Invocation; Java Topology Suite; Java Messaging Application Programming Interface.";
 preguntaids[69] = 9526


//  Id pregunta: 9353 Año de creación de pregunta: 2014
 questions[70]= "71)  Elija la respuesta correcta:";
 choices[70]= new Array();
 choices[70][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[70][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[70][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[70][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[70] = 0;
 units[70] = ['63'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9353. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[70] = 9353


//  Id pregunta: 9382 Año de creación de pregunta: 2014
 questions[71]= "72)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[71]= new Array();
 choices[71][0] = "TIER I";
 choices[71][1] = "TIER II";
 choices[71][2] = "TIER III";
 choices[71][3] = "TIER IV";
 answers[71] = 2;
 units[71] = ['54'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9382. Examen TIC A2  2013";
 preguntaids[71] = 9382


//  Id pregunta: 9350 Año de creación de pregunta: 2014
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[72]= new Array();
 choices[72][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[72][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[72][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[72][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[72] = 0;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9350. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[72] = 9350


//  Id pregunta: 9377 Año de creación de pregunta: 2014
 questions[73]= "74)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[73]= new Array();
 choices[73][0] = "Contiene la clave privada.";
 choices[73][1] = "Cumple la sintaxis PKCS #21.";
 choices[73][2] = "Est&aacute; codificado en un formato no binario.";
 choices[73][3] = "No se puede convertir a formato .PEM.";
 answers[73] = 0;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9377. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[73] = 9377


//  Id pregunta: 9376 Año de creación de pregunta: 2014
 questions[74]= "75)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[74]= new Array();
 choices[74][0] = "Contiene la clave privada.";
 choices[74][1] = "Cumple la sintaxis PKCS #21.";
 choices[74][2] = "Est&aacute; codificado en un formato no binario.";
 choices[74][3] = "No se puede convertir a formato .PEM.";
 answers[74] = 0;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9376. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[74] = 9376


