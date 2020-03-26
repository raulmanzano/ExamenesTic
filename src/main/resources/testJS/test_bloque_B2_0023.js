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
//  Id pregunta: 5478 Año de creación de pregunta: 2007
 questions[0]= "1)  Indique la respuesta incorrecta. La utilizaci&oacute;n de &ldquo;web farms&rdquo; o granjas de servidores:";
 choices[0]= new Array();
 choices[0][0] = "Libera al usuario final de tener que saber qu&eacute; servidor est&aacute; procesando su petici&oacute;n.";
 choices[0][1] = "Reduce el riesgo de errores de operaciones, con el resultado de que los usuarios finales ven mejorada la fiabilidad y una mayor disponibilidad del sistema.";
 choices[0][2] = "Simplifica notablemente la gesti&oacute;n del sistema; las acciones que afectan a m&uacute;ltiples recursos pueden ser llevadas a cabo con un &uacute;nico comando, mientras que los recursos est&aacute; repartidos entre los m&uacute;ltiples sistemas en diferentes m&aacute;quinas.";
 choices[0][3] = "Minimiza el coste de una instalaci&oacute;n web.";
 answers[0] = 3;
 units[0] = ['54'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 5478. ";
 preguntaids[0] = 5478


//  Id pregunta: 5690 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite?";
 choices[1]= new Array();
 choices[1][0] = "Forms.";
 choices[1][1] = "Reports.";
 choices[1][2] = "Designer.";
 choices[1][3] = "Fusion.";
 answers[1] = 3;
 units[1] = ['60', '61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 5690. ";
 preguntaids[1] = 5690


//  Id pregunta: 5673 Año de creación de pregunta: 2007
 questions[2]= "3)  Respecto al software libre:";
 choices[2]= new Array();
 choices[2][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[2][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[2][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[2][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[2] = 0;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5673. ";
 preguntaids[2] = 5673


//  Id pregunta: 5617 Año de creación de pregunta: 2007
 questions[3]= "4)  &iquest;Que es el shell de UNIX?";
 choices[3]= new Array();
 choices[3][0] = "Es el equivalente al escritorio en Windows 2003.";
 choices[3][1] = "Es la unidad m&iacute;nima de informaci&oacute;n que se puede almacenar en un sistema de ficheros UNIX.";
 choices[3][2] = "Es un int&eacute;rprete de comandos.";
 choices[3][3] = "Es un protocolo de comunicaci&oacute;n en red propio de UNIX.";
 answers[3] = 2;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5617. ";
 preguntaids[3] = 5617


//  Id pregunta: 5670 Año de creación de pregunta: 2007
 questions[4]= "5)  Los dispositivos NAS utilizan como protocolo para suministrar los archivos a los clientes:";
 choices[4]= new Array();
 choices[4][0] = "ADSL";
 choices[4][1] = "IP";
 choices[4][2] = "SCSI";
 choices[4][3] = "Fiber SCSI";
 answers[4] = 1;
 units[4] = ['53'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 5670. ";
 preguntaids[4] = 5670


//  Id pregunta: 5716 Año de creación de pregunta: 2007
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre dispositivos NAS es falsa?:";
 choices[5]= new Array();
 choices[5][0] = "la capacidad m&aacute;xima de almacenamiento de los dispositivos NAS es inferior al de las redes SAN";
 choices[5][1] = "los dispositivos NAS utilizan un protocolo SCSI para suministrar los archivos a los clientes";
 choices[5][2] = "la conexi&oacute;n entre los dispositivos NAS y la red se realiza a trav&eacute;s de TCP/IP";
 choices[5][3] = "los dispositivos NAS son unidades de almacenamiento, grandes servidores dedicados exclusivamente a tal fin que se conectan a la red";
 answers[5] = 1;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5716. ";
 preguntaids[5] = 5716


//  Id pregunta: 5486 Año de creación de pregunta: 2007
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[6]= new Array();
 choices[6][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[6][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[6][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[6][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[6] = 2;
 units[6] = ['80'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5486. ";
 preguntaids[6] = 5486


//  Id pregunta: 5525 Año de creación de pregunta: 2007
 questions[7]= "8)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[7]= new Array();
 choices[7][0] = "De validaci&oacute;n.";
 choices[7][1] = "De verificaci&oacute;n.";
 choices[7][2] = "De descubrimiento.";
 choices[7][3] = "Predictivo.";
 answers[7] = 2;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5525. ";
 preguntaids[7] = 5525


//  Id pregunta: 5506 Año de creación de pregunta: 2007
 questions[8]= "9)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?";
 choices[8]= new Array();
 choices[8][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[8][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[8][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[8][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[8] = 3;
 units[8] = ['77'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 5506. Ley 59/2003, art&iacute;culo 24";
 preguntaids[8] = 5506


//  Id pregunta: 5658 Año de creación de pregunta: 2007
 questions[9]= "10)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[9]= new Array();
 choices[9][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[9][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[9][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[9][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de &eacute;stas.";
 answers[9] = 3;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5658. ";
 preguntaids[9] = 5658


//  Id pregunta: 5509 Año de creación de pregunta: 2007
 questions[10]= "11)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[10]= new Array();
 choices[10][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[10][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[10][2] = "La direcci&oacute;n IP del MAP.";
 choices[10][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[10] = 2;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 5509. ";
 preguntaids[10] = 5509


//  Id pregunta: 5524 Año de creación de pregunta: 2015
 questions[11]= "12)  JDBC es:";
 choices[11]= new Array();
 choices[11][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[11][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[11][2] = "Una API que permite la ejecuci&oacute;n de operaciones sobre una base de datos mediante lenguaje Java.";
 choices[11][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[11] = 2;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 5524. La A no es, porque podr&iacute;a no usar ODBC intermedio.";
 preguntaids[11] = 5524


//  Id pregunta: 5656 Año de creación de pregunta: 2007
 questions[12]= "13)  Metacity";
 choices[12]= new Array();
 choices[12][0] = "Es el gestor de eventos de GNOME 2";
 choices[12][1] = "Es el gestor de ventanas de GNOME 2";
 choices[12][2] = "Es el gestor de eventos de KDE";
 choices[12][3] = "Es el gestor de eventos de MOLINUX";
 answers[12] = 1;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5656. ";
 preguntaids[12] = 5656


//  Id pregunta: 5630 Año de creación de pregunta: 2007
 questions[13]= "14)  Los prestadores de servicios de certificaci&oacute;n con car&aacute;cter previo al cese definitivo de su actividad, &iquest;que gesti&oacute;n deber&aacute;n realizar con la informaci&oacute;n relativa a los certificados electr&oacute;nicos cuya vigencia haya sido extinguida?";
 choices[13]= new Array();
 choices[13][0] = "Remitirla al ministerio competente.";
 choices[13][1] = "Remitirla al prestador al que se propone la gesti&oacute;n de los certificados vigentes.";
 choices[13][2] = "Ninguna. La ley solo obliga la transferencia de la informaci&oacute;n relativa a los certificados vigentes.";
 choices[13][3] = "Debe conservarla en soporte perdurable durante al menos 30 anos.";
 answers[13] = 0;
 units[13] = ['77'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5630. Ley 59/2003, art&iacute;culo 21";
 preguntaids[13] = 5630


//  Id pregunta: 5510 Año de creación de pregunta: 2007
 questions[14]= "15)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[14]= new Array();
 choices[14][0] = "56 Bits";
 choices[14][1] = "168 Bits";
 choices[14][2] = "256 Bits.";
 choices[14][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[14] = 0;
 units[14] = ['73'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5510. ";
 preguntaids[14] = 5510


//  Id pregunta: 5562 Año de creación de pregunta: 2007
 questions[15]= "16)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[15]= new Array();
 choices[15][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[15][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[15][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[15][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[15] = 1;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5562. ";
 preguntaids[15] = 5562


//  Id pregunta: 5550 Año de creación de pregunta: 2007
 questions[16]= "17)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[16]= new Array();
 choices[16][0] = "Java";
 choices[16][1] = "C#";
 choices[16][2] = "Visual Basic";
 choices[16][3] = "C++";
 answers[16] = 0;
 units[16] = ['63'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 5550. ";
 preguntaids[16] = 5550


//  Id pregunta: 5587 Año de creación de pregunta: 2007
 questions[17]= "18)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[17][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[17][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[17][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[17] = 2;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5587. Ley 59/2003, art&iacute;culo 11";
 preguntaids[17] = 5587


//  Id pregunta: 5677 Año de creación de pregunta: 2007
 questions[18]= "19)  La firma digital garantiza:";
 choices[18]= new Array();
 choices[18][0] = "La autenticidad, la integridad y el no repudio en destino.";
 choices[18][1] = "La autenticidad, la integridad y el no repudio en origen.";
 choices[18][2] = "La autenticidad, la integridad y la confidencialidad.";
 choices[18][3] = "La confidencialidad.";
 answers[18] = 1;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 5677. ";
 preguntaids[18] = 5677


//  Id pregunta: 5615 Año de creación de pregunta: 2007
 questions[19]= "20)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[19]= new Array();
 choices[19][0] = "MS PowerSync";
 choices[19][1] = "MS Syncronizer";
 choices[19][2] = "MS ActiveSync";
 choices[19][3] = "MS PocketSync";
 answers[19] = 2;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 5615. ";
 preguntaids[19] = 5615


//  Id pregunta: 5718 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cual de los siguientes es el sistema de archivos de encriptaci&oacute;n para NTFS?";
 choices[20]= new Array();
 choices[20][0] = "SEE.";
 choices[20][1] = "SCF.";
 choices[20][2] = "EFS.";
 choices[20][3] = "no existe tal sistema de archivos.";
 answers[20] = 2;
 units[20] = ['58'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5718. ";
 preguntaids[20] = 5718


//  Id pregunta: 5549 Año de creación de pregunta: 2007
 questions[21]= "22)  J2EE es:";
 choices[21]= new Array();
 choices[21][0] = "Un producto.";
 choices[21][1] = "Un servicio.";
 choices[21][2] = "Un estandar.";
 choices[21][3] = "Un entorno de desarrollo.";
 answers[21] = 2;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 5549. Es una especificaci&oacute;n que es est&aacute;ndar.";
 preguntaids[21] = 5549


//  Id pregunta: 5724 Año de creación de pregunta: 2007
 questions[22]= "23)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[22]= new Array();
 choices[22][0] = "p12";
 choices[22][1] = ".cer";
 choices[22][2] = ".jks";
 choices[22][3] = ".pfx";
 answers[22] = 3;
 units[22] = ['78'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5724. ";
 preguntaids[22] = 5724


//  Id pregunta: 5671 Año de creación de pregunta: 2007
 questions[23]= "24)  En el modelo relacional se denomina dominio de un atributo a:";
 choices[23]= new Array();
 choices[23][0] = "El conjunto de valores permitidos para ese atributo.";
 choices[23][1] = "El peso del atributo, es decir si forma parte de una clave candidata o no.";
 choices[23][2] = "La clasificaci&oacute;n de los atributos de una relaci&oacute;n entre dominantes y dominados.";
 choices[23][3] = "El orden de los valores de ese atributo para todas las tuplas de la relaci&oacute;n donde se encuentra definido.";
 answers[23] = 0;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 5671. ";
 preguntaids[23] = 5671


//  Id pregunta: 5530 Año de creación de pregunta: 2007
 questions[24]= "25)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[24]= new Array();
 choices[24][0] = "&lt;table&gt;";
 choices[24][1] = "&lt;tr&gt;";
 choices[24][2] = "&lt;th&gt;";
 choices[24][3] = "&lt;td&gt;";
 answers[24] = 3;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5530. ";
 preguntaids[24] = 5530


//  Id pregunta: 5626 Año de creación de pregunta: 2007
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[25]= new Array();
 choices[25][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[25][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[25][2] = "Los datamart no tienen dimensiones.";
 choices[25][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[25] = 0;
 units[25] = ['72'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 5626. ";
 preguntaids[25] = 5626


//  Id pregunta: 5552 Año de creación de pregunta: 2007
 questions[26]= "27)  Un conjunto de dispositivos o especificaciones que act&uacute;a como intermediario entre una m&aacute;quina y un ser humano para proporcionarle a este la mejor adaptaci&oacute;n posible ante los mecanismos de entrada y salida de la m&aacute;quina es:";
 choices[26]= new Array();
 choices[26][0] = "Un sistema operativo.";
 choices[26][1] = "Una pasarela o gateway.";
 choices[26][2] = "Una interfaz de usuario.";
 choices[26][3] = "El middleware.";
 answers[26] = 2;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5552. ";
 preguntaids[26] = 5552


//  Id pregunta: 5526 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[27]= new Array();
 choices[27][0] = "Duck.";
 choices[27][1] = "Drill.";
 choices[27][2] = "Roll.";
 choices[27][3] = "Slice &amp; dice.";
 answers[27] = 0;
 units[27] = ['72'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 5526. ";
 preguntaids[27] = 5526


//  Id pregunta: 5672 Año de creación de pregunta: 2007
 questions[28]= "29)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[28]= new Array();
 choices[28][0] = "double";
 choices[28][1] = "int";
 choices[28][2] = "byte[]";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 0;
 units[28] = ['64'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5672. ";
 preguntaids[28] = 5672


//  Id pregunta: 5480 Año de creación de pregunta: 2007
 questions[29]= "30)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[29]= new Array();
 choices[29][0] = "Usuario daemon.";
 choices[29][1] = "Usuario adm.";
 choices[29][2] = "Usuario bin.";
 choices[29][3] = "Usuario root.";
 answers[29] = 3;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 5480. ";
 preguntaids[29] = 5480


//  Id pregunta: 5644 Año de creación de pregunta: 2007
 questions[30]= "31)  Si consideramos el framework .Net &iquest;Que entender&iacute;amos por CTS (Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[30]= new Array();
 choices[30][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[30][1] = "Es un sistema tipificado de Software";
 choices[30][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = 0;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5644. ";
 preguntaids[30] = 5644


//  Id pregunta: 5720 Año de creación de pregunta: 2007
 questions[31]= "32)  Indique cu&aacute;l de los siguientes no es un lenguaje relacional:";
 choices[31]= new Array();
 choices[31][0] = "RQL";
 choices[31][1] = "QUEL";
 choices[31][2] = "QBE";
 choices[31][3] = "SQL";
 answers[31] = 0;
 units[31] = ['61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 5720. ";
 preguntaids[31] = 5720


//  Id pregunta: 5507 Año de creación de pregunta: 2007
 questions[32]= "33)  Indique cu&aacute;l de las siguientes acciones no es funci&oacute;n de la Firma Electr&oacute;nica, de acuerdo con lo establecido en la Ley 59/2003:";
 choices[32]= new Array();
 choices[32][0] = "Identificar al remitente de un mensaje de manera fidedigna, asegurando su imputabilidad.";
 choices[32][1] = "Evitar accesos indeseados a su propio ordenador, por parte de terceros.";
 choices[32][2] = "Verificar que el mensaje no ha sido manipulado";
 choices[32][3] = "Almacenar la clave privada en el propio ordenador o una tarjeta criptogr&aacute;fica.";
 answers[32] = 1;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5507. ";
 preguntaids[32] = 5507


//  Id pregunta: 5479 Año de creación de pregunta: 2007
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre granjas de servidores (web farms) no es correcta?";
 choices[33]= new Array();
 choices[33][0] = "Una granja es un tipo de sistema de procesamiento distribuido, que consiste en un grupo de servidores interconectados trabajando de forma conjunta como un &uacute;nico recurso de computaci&oacute;n integrado.";
 choices[33][1] = "En una granja de servidores, los servidores pueden tener sistemas operativos individuales o compartidos, y tambi&eacute;n debe ser instalados para proporcionar el balanceo de la carga cuando hay muchas peticiones al servidor";
 choices[33][2] = "La decisi&oacute;n para distribuir la carga a un servidor en particular debe ser una opci&oacute;n preprogramada est&aacute;ticamente, pues es imposible la reconfiguraci&oacute;n din&aacute;mica.";
 choices[33][3] = "La red es la parte m&aacute;s cr&iacute;tica de una granja. Su capacidad y funcionamiento influyen en el rendimiento del sistema completo";
 answers[33] = 2;
 units[33] = ['54'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5479. ";
 preguntaids[33] = 5479


//  Id pregunta: 5489 Año de creación de pregunta: 2007
 questions[34]= "35)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[34]= new Array();
 choices[34][0] = "Control de concurrencia";
 choices[34][1] = "Control de herencia.";
 choices[34][2] = "Control de acceso.";
 choices[34][3] = "Las facilidades de cifrado.";
 answers[34] = 1;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5489. ";
 preguntaids[34] = 5489


//  Id pregunta: 5575 Año de creación de pregunta: 2007
 questions[35]= "36)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[35]= new Array();
 choices[35][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[35][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[35][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[35][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[35] = 1;
 units[35] = ['77'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 5575. ";
 preguntaids[35] = 5575


//  Id pregunta: 5645 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[36]= new Array();
 choices[36][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[36][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[36][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[36][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[36] = 3;
 units[36] = ['63'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5645. ";
 preguntaids[36] = 5645


//  Id pregunta: 5689 Año de creación de pregunta: 2007
 questions[37]= "38)  En java, &iquest;c&oacute;mo se hace referencia al objeto actual sobre el que ha sido llamado el m&eacute;todo que se esta ejecutando?";
 choices[37]= new Array();
 choices[37][0] = "Con la referencia this.";
 choices[37][1] = "Con la referencia null.";
 choices[37][2] = "No es posible.";
 choices[37][3] = "Invocando el m&eacute;todo get.";
 answers[37] = 0;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 5689. ";
 preguntaids[37] = 5689


//  Id pregunta: 5511 Año de creación de pregunta: 2007
 questions[38]= "39)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[38]= new Array();
 choices[38][0] = "DES";
 choices[38][1] = "Triple DES.";
 choices[38][2] = "RSA";
 choices[38][3] = "IDEA";
 answers[38] = 2;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5511. ";
 preguntaids[38] = 5511


//  Id pregunta: 5508 Año de creación de pregunta: 2007
 questions[39]= "40)  De entre los siguientes, &iquest;cu&aacute;l no es uno de los servicios de certificaci&oacute;n ofrecidos actualmente por la F&aacute;brica Nacional de Moneda y Timbre?:";
 choices[39]= new Array();
 choices[39][0] = "Fechado digital.";
 choices[39][1] = "Validaci&oacute;n on-line de certificados.";
 choices[39][2] = "Voto electr&oacute;nico en Juntas Generales de Sociedades";
 choices[39][3] = "Login &uacute;nico en sistemas Windows, Linux y Unix";
 answers[39] = 3;
 units[39] = ['78'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 5508. ";
 preguntaids[39] = 5508


//  Id pregunta: 5618 Año de creación de pregunta: 2007
 questions[40]= "41)  &iquest;Que tipo de informaci&oacute;n contienen los inodos?";
 choices[40]= new Array();
 choices[40][0] = "Contienen los contenidos de los archivos.";
 choices[40][1] = "Contienen informaci&oacute;n acerca del procesos de arranque";
 choices[40][2] = "Contienen informaci&oacute;n referente a cada archivo del sistema de archivos";
 choices[40][3] = "Contienen Ia tabla de caracteres ASCII";
 answers[40] = 2;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 5618. ";
 preguntaids[40] = 5618


//  Id pregunta: 5512 Año de creación de pregunta: 2007
 questions[41]= "42)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[41]= new Array();
 choices[41][0] = "IPSec (IP Security).";
 choices[41][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[41][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[41][3] = "WEP (Wired Equivalent Privacy).";
 answers[41] = 1;
 units[41] = ['77'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5512. ";
 preguntaids[41] = 5512


//  Id pregunta: 5481 Año de creación de pregunta: 2007
 questions[42]= "43)  Indique cu&aacute;l de los siguientes t&eacute;rminos no identifica un gestor de arranque del Sistema Operativo";
 choices[42]= new Array();
 choices[42][0] = "NT OS Loader.";
 choices[42][1] = "LILO (Linux Loader)";
 choices[42][2] = "LIUL (Linux Unified Loader).";
 choices[42][3] = "GRUB (Grand Unified Bootloader).";
 answers[42] = 2;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5481. ";
 preguntaids[42] = 5481


//  Id pregunta: 5560 Año de creación de pregunta: 2009
 questions[43]= "44)  En GNU/Linux se utilizan diversos programas para la gesti&oacute;n de versiones, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[43]= new Array();
 choices[43][0] = "mercurial";
 choices[43][1] = "ksafe";
 choices[43][2] = "git";
 choices[43][3] = "bazaar";
 answers[43] = 1;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 5560. ";
 preguntaids[43] = 5560


//  Id pregunta: 5624 Año de creación de pregunta: 2007
 questions[44]= "45)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[44]= new Array();
 choices[44][0] = "R&aacute;ster.";
 choices[44][1] = "Vectorial.";
 choices[44][2] = "Sinusoidal.";
 choices[44][3] = "Vertical.";
 answers[44] = 1;
 units[44] = ['71'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5624. ";
 preguntaids[44] = 5624


//  Id pregunta: 5591 Año de creación de pregunta: 2007
 questions[45]= "46)  La firma digital de un mensaje o documento, garantiza:";
 choices[45]= new Array();
 choices[45][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[45][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[45][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[45][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[45] = 0;
 units[45] = ['77'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 5591. ";
 preguntaids[45] = 5591


//  Id pregunta: 5571 Año de creación de pregunta: 2007
 questions[46]= "47)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[46]= new Array();
 choices[46][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[46][1] = "Es el precursor del CRM.";
 choices[46][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[46][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[46] = 2;
 units[46] = ['69'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 5571. ";
 preguntaids[46] = 5571


//  Id pregunta: 5544 Año de creación de pregunta: 2007
 questions[47]= "48)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[47]= new Array();
 choices[47][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[47][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[47][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[47][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[47] = 1;
 units[47] = ['77'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 5544. ";
 preguntaids[47] = 5544


//  Id pregunta: 5620 Año de creación de pregunta: 2007
 questions[48]= "49)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[48]= new Array();
 choices[48][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[48][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[48][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[48][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[48] = 0;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 5620. ";
 preguntaids[48] = 5620


//  Id pregunta: 5527 Año de creación de pregunta: 2007
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al interfaz hombre-m&aacute;quina en sistemas Unix y Linux:";
 choices[49]= new Array();
 choices[49][0] = "GNOME (GNU Network Object Modelo Environment) est&aacute; totalmente orientado a objetos y al uso de COM+.";
 choices[49][1] = "La implementaci&oacute;n free Xfree86 del entorno de escritorio CDE (Common Desktop Environment) se incluye en la distribuci&oacute;n MacX Server.";
 choices[49][2] = "En X-Windows el modelo es cliente/servidor, basado en un protocolo de red: Xserver, Xclient.";
 choices[49][3] = "KDE (K Desktop Environment) se implementa &uacute;nicamente en sistemas Unix.";
 answers[49] = 2;
 units[49] = ['57'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5527. ";
 preguntaids[49] = 5527


//  Id pregunta: 5629 Año de creación de pregunta: 2007
 questions[50]= "51)  El DNI digital permitir&aacute;:";
 choices[50]= new Array();
 choices[50][0] = "Firmar y cifrar.";
 choices[50][1] = "Solo firmar.";
 choices[50][2] = "Solo cifrar.";
 choices[50][3] = "Solo funciones 3DES";
 answers[50] = 1;
 units[50] = ['78'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 5629. ";
 preguntaids[50] = 5629


//  Id pregunta: 5531 Año de creación de pregunta: 2007
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la tecnolog&iacute;a de procesadores NUMA (No Uniform Memory Access)?";
 choices[51]= new Array();
 choices[51][0] = "Acceso a m&uacute;ltiples memorias de forma equivalente.";
 choices[51][1] = "Facilidad de programaci&oacute;n.";
 choices[51][2] = "Escalabilidad.";
 choices[51][3] = "Procesamiento paralelo.";
 answers[51] = 0;
 units[51] = ['49'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 5531. ";
 preguntaids[51] = 5531


//  Id pregunta: 5532 Año de creación de pregunta: 2007
 questions[52]= "53)  Indique cu&aacute;l de las siguientes no es una caracter&iacute;stica de los sistemas cliente-servidor:";
 choices[52]= new Array();
 choices[52][0] = "Compartici&oacute;n de recursos.";
 choices[52][1] = "Existe un &uacute;nico sistema de almacenamiento compartido, donde reside toda la informaci&oacute;n importante del sistema.";
 choices[52][2] = "Concurrencia.";
 choices[52][3] = "Interoperabilidad.";
 answers[52] = 1;
 units[52] = ['55'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 5532. ";
 preguntaids[52] = 5532


//  Id pregunta: 5643 Año de creación de pregunta: 2007
 questions[53]= "54)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[53]= new Array();
 choices[53][0] = "java.lang";
 choices[53][1] = "java.beans";
 choices[53][2] = "java.sql";
 choices[53][3] = "java.util";
 answers[53] = 0;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 5643. ";
 preguntaids[53] = 5643


//  Id pregunta: 5616 Año de creación de pregunta: 2007
 questions[54]= "55)  El sistema de almacenamiento SAN:";
 choices[54]= new Array();
 choices[54][0] = "Se corresponde con una red independiente de almacenamiento de altas prestaciones basada en tecnolog&iacute;a de fibra &oacute;ptica.";
 choices[54][1] = "Se corresponde con el sistema de conexi&oacute;n directa (discos en RAID, cinta o disco &oacute;ptico) a un servidor que procesa todas as peticiones de archivos.";
 choices[54][2] = "Tiene una serie de limitaciones entre las que destaca su falta de escalabilidad, lo que hace que su use sea limitado.";
 choices[54][3] = "Se corresponde con un dispositivo de almacenamiento que se conecta a una LAN en la que est&aacute;n conectados los dem&aacute;s equipos , normalmente una Ethernet, y que posee una ip propia.";
 answers[54] = 0;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 5616. ";
 preguntaids[54] = 5616


//  Id pregunta: 5621 Año de creación de pregunta: 2007
 questions[55]= "56)  El uso de mecanismos como JDBC u ODBC:";
 choices[55]= new Array();
 choices[55][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[55][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[55][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[55][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[55] = 0;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 5621. ";
 preguntaids[55] = 5621


//  Id pregunta: 5678 Año de creación de pregunta: 2007
 questions[56]= "57)  En una infraestructura PKI, la revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[56]= new Array();
 choices[56][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[56][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[56][2] = "No hace falta, se puede hacer desde Internet.";
 choices[56][3] = "En una oficina de registro.";
 answers[56] = 2;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 5678. ";
 preguntaids[56] = 5678


//  Id pregunta: 5676 Año de creación de pregunta: 2007
 questions[57]= "58)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[57]= new Array();
 choices[57][0] = "Un Data-Warehouse";
 choices[57][1] = "Un Workflow";
 choices[57][2] = "Un Groupware";
 choices[57][3] = "Un OLAP";
 answers[57] = 2;
 units[57] = ['72'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5676. ";
 preguntaids[57] = 5676


//  Id pregunta: 5602 Año de creación de pregunta: 2007
 questions[58]= "59)  Dentro de Ia tecnolog&iacute;a de Sistemas de Informaci&oacute;n Geogr&aacute;fica, si la realidad se representa mediante figuras elementales geom&eacute;tricas, normalmente cuadradas, que forman un mosaico regular, estamos hablando de:";
 choices[58]= new Array();
 choices[58][0] = "Proyecci&oacute;n.";
 choices[58][1] = "R&aacute;ster.";
 choices[58][2] = "Vector.";
 choices[58][3] = "Imagen multiespectral.";
 answers[58] = 1;
 units[58] = ['71'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 5602. ";
 preguntaids[58] = 5602


//  Id pregunta: 5625 Año de creación de pregunta: 2007
 questions[59]= "60)  Respecto a los servicios Web, podemos afirmar que:";
 choices[59]= new Array();
 choices[59][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[59][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[59][2] = "SOAP proporciona una manera estandar de transportar mensajes para el uso de servicios Web";
 choices[59][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[59] = 2;
 units[59] = ['55'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 5625. ";
 preguntaids[59] = 5625


//  Id pregunta: 5725 Año de creación de pregunta: 2007
 questions[60]= "61)  Indica cual de las siguientes expresiones NO es correcta en un entorno de e-Learning:";
 choices[60]= new Array();
 choices[60][0] = "el LMS se encarga de gestionar los usuarios, los cursos y as herramientas de comunicaci&oacute;n.";
 choices[60][1] = "dos componentes fundamentales en este tipo de ense&ntilde;anza son el LMS y el courseware.";
 choices[60][2] = "se pueden establecer comunicaciones tanto s&iacute;ncronas como as&iacute;ncronas.";
 choices[60][3] = "para compatibilizar LMS y courseware de distintos fabricantes se utilizan los est&aacute;ndares ADL SCORM y UDDI.";
 answers[60] = 3;
 units[60] = ['70'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 5725. ";
 preguntaids[60] = 5725


//  Id pregunta: 5723 Año de creación de pregunta: 2007
 questions[61]= "62)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[61]= new Array();
 choices[61][0] = "@";
 choices[61][1] = "$";
 choices[61][2] = "&amp;";
 choices[61][3] = "#";
 answers[61] = 3;
 units[61] = ['74'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 5723. ";
 preguntaids[61] = 5723


//  Id pregunta: 5533 Año de creación de pregunta: 2007
 questions[62]= "63)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[62]= new Array();
 choices[62][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[62][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[62][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[62][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[62] = 3;
 units[62] = ['63'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 5533. ";
 preguntaids[62] = 5533


//  Id pregunta: 5523 Año de creación de pregunta: 2007
 questions[63]= "64)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[63]= new Array();
 choices[63][0] = "Homogeneidad de datos almacenados.";
 choices[63][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[63][2] = "Total organizaci&oacute;n.";
 choices[63][3] = "Facilidad para responder a consultas complejas.";
 answers[63] = 1;
 units[63] = ['72'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 5523. ";
 preguntaids[63] = 5523


//  Id pregunta: 5719 Año de creación de pregunta: 2007
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el recurso Quorum de un cluster?";
 choices[64]= new Array();
 choices[64][0] = "contiene datos del firmware del hardware del fabricante de los servidores que forman el cluster.";
 choices[64][1] = "contiene los &Uacute;ltimos datos accedidos par el usuario.";
 choices[64][2] = "ofrece una configuraci&oacute;n consistente del cluster.";
 choices[64][3] = "no existe el recurso Quorum en un cluster.";
 answers[64] = 2;
 units[64] = ['49'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5719. ";
 preguntaids[64] = 5719


//  Id pregunta: 5717 Año de creación de pregunta: 2007
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una distribuci&oacute;n comercial de Linux?:";
 choices[65]= new Array();
 choices[65][0] = "Debian";
 choices[65][1] = "Red Hat";
 choices[65][2] = "SuSE";
 choices[65][3] = "Caldera";
 answers[65] = 0;
 units[65] = ['53'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 5717. Debian no es una distribuci&oacute;n comercial, sino comunitaria";
 preguntaids[65] = 5717


//  Id pregunta: 5628 Año de creación de pregunta: 2007
 questions[66]= "67)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[66]= new Array();
 choices[66][0] = "Fija de 256 bits";
 choices[66][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[66][2] = "Fija de 128 bits";
 choices[66][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[66] = 1;
 units[66] = ['76'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5628. ";
 preguntaids[66] = 5628


//  Id pregunta: 5722 Año de creación de pregunta: 2007
 questions[67]= "68)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[67]= new Array();
 choices[67][0] = "2";
 choices[67][1] = "3";
 choices[67][2] = "4";
 choices[67][3] = "tantos como SGBD's";
 answers[67] = 2;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 5722. ";
 preguntaids[67] = 5722


//  Id pregunta: 5623 Año de creación de pregunta: 2007
 questions[68]= "69)  Es un est&aacute;ndar de e-learning:";
 choices[68]= new Array();
 choices[68][0] = "IEEE";
 choices[68][1] = "ADL";
 choices[68][2] = "LMS";
 choices[68][3] = "SCORM";
 answers[68] = 3;
 units[68] = ['70'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 5623. ";
 preguntaids[68] = 5623


//  Id pregunta: 5681 Año de creación de pregunta: 2007
 questions[69]= "70)  En un Sistema de Informaci&oacute;n Geogr&aacute;fica los atributos que puede tener un objeto ser&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Solamente gr&aacute;ficos.";
 choices[69][1] = "Solamente alfanum&eacute;ricos.";
 choices[69][2] = "Solamente vectoriales.";
 choices[69][3] = "Gr&aacute;ficos y alfanum&eacute;ricos.";
 answers[69] = 3;
 units[69] = ['71'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 5681. ";
 preguntaids[69] = 5681


//  Id pregunta: 5675 Año de creación de pregunta: 2007
 questions[70]= "71)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[70]= new Array();
 choices[70][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[70][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[70][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[70][3] = "Los sistemas MOLAP son relacionales.";
 answers[70] = 2;
 units[70] = ['72'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5675. ";
 preguntaids[70] = 5675


//  Id pregunta: 5627 Año de creación de pregunta: 2007
 questions[71]= "72)  El algoritmo MD5:";
 choices[71]= new Array();
 choices[71][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[71][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[71][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[71][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[71] = 2;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 5627. ";
 preguntaids[71] = 5627


//  Id pregunta: 5553 Año de creación de pregunta: 2007
 questions[72]= "73)  En el entorno de base de datos, los &iacute;ndices son de vital importancia en las transacciones de acceso, &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[72]= new Array();
 choices[72][0] = "El &iacute;ndice es tambi&eacute;n una tabla almacenada en un disco.";
 choices[72][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos.";
 choices[72][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario.";
 choices[72][3] = "Las actualizaciones de los &iacute;ndices no consumen recursos.";
 answers[72] = 3;
 units[72] = ['60'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 5553. ";
 preguntaids[72] = 5553


//  Id pregunta: 5619 Año de creación de pregunta: 2007
 questions[73]= "74)  Para usar la utilidad &quot;Shadow Copies for Shared Folders&quot; en un sistema Windows Server 2003 R2 se necesita";
 choices[73]= new Array();
 choices[73][0] = "Un volumen FAT.";
 choices[73][1] = "Un volumen NTFS dedicado en exclusiva a esta funci&oacute;n.";
 choices[73][2] = "Un volumen FAT dedicado en exclusiva a esta funci&oacute;n.";
 choices[73][3] = "Un volumen NTFS";
 answers[73] = 3;
 units[73] = ['58'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 5619. ";
 preguntaids[73] = 5619


//  Id pregunta: 5721 Año de creación de pregunta: 2007
 questions[74]= "75)  Para hacer una llamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;qu&eacute; m&eacute;todo deberemos invocar?:";
 choices[74]= new Array();
 choices[74][0] = "execute";
 choices[74][1] = "executeQuery";
 choices[74][2] = "executeProcedure";
 choices[74][3] = "executeUpdate";
 answers[74] = 0;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 5721. ";
 preguntaids[74] = 5721


