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
//  Id pregunta: 7488 Año de creación de pregunta: 2010
 questions[0]= "1)  La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[0]= new Array();
 choices[0][0] = "Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[0][1] = "Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[0][2] = "Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[0][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[0] = 2;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7488. Map 2005";
 preguntaids[0] = 7488


//  Id pregunta: 7565 Año de creación de pregunta: 2010
 questions[1]= "2)  Cuando un navegador se conecta por primera vez a un servidor Web que usa cookies permanentes para identificaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "El navegador env&iacute;a al servidor, junto a la primera petici&oacute;n, una cookie con un n&uacute;mero identificativo generado por el navegador.";
 choices[1][1] = "El servidor cuando entrega la primera p&aacute;gina html al navegador, escribe tambi&eacute;n una cookie en el disco del equipo del navegador.";
 choices[1][2] = "El navegador, cuando recibe por primera vez una p&aacute;gina del servidor, escribe en el disco de su equipo una cookie con el n&uacute;mero de identificaci&oacute;n enviado por el servidor.";
 choices[1][3] = "La almacena en la cach&eacute; del navegador por ser una cookie permanente.";
 answers[1] = 2;
 units[1] = ['74'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7565. Map 2005";
 preguntaids[1] = 7565


//  Id pregunta: 7434 Año de creación de pregunta: 2010
 questions[2]= "3)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[2]= new Array();
 choices[2][0] = "ADO.NET";
 choices[2][1] = "OLEDB";
 choices[2][2] = "DEA";
 choices[2][3] = "DAO";
 answers[2] = 2;
 units[2] = ['63'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7434. ";
 preguntaids[2] = 7434


//  Id pregunta: 7517 Año de creación de pregunta: 2010
 questions[3]= "4)  IEEE 1394 es:";
 choices[3]= new Array();
 choices[3][0] = "Un formato de CD.";
 choices[3][1] = "Un proyecto de formato DVD-Audio.";
 choices[3][2] = "Una norma dirigida a dispositivos de alta velocidad como c&aacute;maras de v&iacute;deo e impresoras profesionales.";
 choices[3][3] = "Un norma que regula exclusivamente el ajuste y calibrado del color.";
 answers[3] = 2;
 units[3] = ['51'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7517. Similar a Map 2005";
 preguntaids[3] = 7517


//  Id pregunta: 7485 Año de creación de pregunta: 2010
 questions[4]= "5)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[4]= new Array();
 choices[4][0] = "jpeg, tiff y spp.";
 choices[4][1] = "jpeg, spp y psd.";
 choices[4][2] = "jpeg, spp y tiff.";
 choices[4][3] = "jpeg, gif y png.";
 answers[4] = 3;
 units[4] = ['80'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7485. Map 2005";
 preguntaids[4] = 7485


//  Id pregunta: 7494 Año de creación de pregunta: 2010
 questions[5]= "6)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo .NET:";
 choices[5]= new Array();
 choices[5][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios.";
 choices[5][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes.";
 choices[5][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos.";
 choices[5][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos.";
 answers[5] = 1;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7494. Map 2005";
 preguntaids[5] = 7494


//  Id pregunta: 7570 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema a otro usuario?";
 choices[6]= new Array();
 choices[6][0] = "CONNECT y RESOURCE.";
 choices[6][1] = "DBA.";
 choices[6][2] = "GRANT ANY ROLE.";
 choices[6][3] = "SELECT ANY TABLE.";
 answers[6] = 2;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7570. Map 2006";
 preguntaids[6] = 7570


//  Id pregunta: 7574 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[7]= new Array();
 choices[7][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[7][1] = "EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[7][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[7][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[7] = 2;
 units[7] = ['68'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7574. Map 2006";
 preguntaids[7] = 7574


//  Id pregunta: 7508 Año de creación de pregunta: 2010
 questions[8]= "9)  El entorno Microsoft, WebDAV:";
 choices[8]= new Array();
 choices[8][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio.";
 choices[8][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e Intranets.";
 choices[8][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red.";
 choices[8][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos.";
 answers[8] = 1;
 units[8] = ['63'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7508. Map 2005";
 preguntaids[8] = 7508


//  Id pregunta: 7529 Año de creación de pregunta: 2010
 questions[9]= "10)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[9]= new Array();
 choices[9][0] = "Multa de 30.001 a 150.000 euros.";
 choices[9][1] = "Multa por importe m&aacute;ximo de 50.000 euros.";
 choices[9][2] = "Multa de 150.001 a 600.000 euros.";
 choices[9][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo.";
 answers[9] = 0;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7529. Map 2005";
 preguntaids[9] = 7529


//  Id pregunta: 7460 Año de creación de pregunta: 2010
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[10]= new Array();
 choices[10][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[10][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[10][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[10][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[10] = 1;
 units[10] = ['76'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7460. ";
 preguntaids[10] = 7460


//  Id pregunta: 7520 Año de creación de pregunta: 2010
 questions[11]= "12)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos:";
 choices[11]= new Array();
 choices[11][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo.";
 choices[11][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo.";
 choices[11][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante.";
 choices[11][3] = "Confieren, por s&iacute; mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita.";
 answers[11] = 1;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7520. Similar a Map 2005";
 preguntaids[11] = 7520


//  Id pregunta: 7580 Año de creación de pregunta: 2010
 questions[12]= "13)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[12]= new Array();
 choices[12][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, debe existir un valor de K en R1 cuyo valor sea igual al valor de A.";
 choices[12][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K.";
 choices[12][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo.";
 choices[12][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo.";
 answers[12] = 1;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7580. Map 2006";
 preguntaids[12] = 7580


//  Id pregunta: 7462 Año de creación de pregunta: 2010
 questions[13]= "14)  El est&aacute;ndar de sintaxis de intercambio de informaci&oacute;n personal es:";
 choices[13]= new Array();
 choices[13][0] = "PKCS#7";
 choices[13][1] = "PKCS#9";
 choices[13][2] = "PKCS#12";
 choices[13][3] = "PKCS#14";
 answers[13] = 2;
 units[13] = ['76'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7462. ";
 preguntaids[13] = 7462


//  Id pregunta: 7461 Año de creación de pregunta: 2010
 questions[14]= "15)  El grupo de est&aacute;ndares de criptograf&iacute;a de clave p&uacute;blica, PKCS (Public Key Cryptography Standars), son publicados por:";
 choices[14]= new Array();
 choices[14][0] = "IEEE";
 choices[14][1] = "IETF";
 choices[14][2] = "RSA";
 choices[14][3] = "DES";
 answers[14] = 2;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7461. ";
 preguntaids[14] = 7461


//  Id pregunta: 7589 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R({A,B,C,D}, {A--&gt;B, B--&gt;C, C--&gt;D})?";
 choices[15]= new Array();
 choices[15][0] = "Primera FN.";
 choices[15][1] = "Segunda FN.";
 choices[15][2] = "Tercera FN.";
 choices[15][3] = "FNBC (Forma Normal de Boyce-Codd).";
 answers[15] = 1;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7589. Map 2006";
 preguntaids[15] = 7589


//  Id pregunta: 7551 Año de creación de pregunta: 2010
 questions[16]= "17)  En el sistema operativo UNIX-LINUX, el t&eacute;rmino &laquo;uucp&raquo; hace referencia a:";
 choices[16]= new Array();
 choices[16][0] = "Un programa dise&ntilde;ado para emular terminales ASCII.";
 choices[16][1] = "Un procesador frontal para correo que ofrece caracter&iacute;sticas avanzadas de interfaz de usuario.";
 choices[16][2] = "Un paquete completo de movimiento de datos que puede transferir ficheros ASCII y binarios entre m&aacute;quinas, adem&aacute;s de controlar la ejecuci&oacute;n de &oacute;rdenes sobre una m&aacute;quina remota.";
 choices[16][3] = "Una base de datos que contiene descripciones para secuencias de escape que pueden cambiar el color de la pantalla.";
 answers[16] = 2;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7551. Map 2005";
 preguntaids[16] = 7551


//  Id pregunta: 7430 Año de creación de pregunta: 2010
 questions[17]= "18)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[17]= new Array();
 choices[17][0] = "Grado (degree)";
 choices[17][1] = "Cercan&iacute;a (closeness)";
 choices[17][2] = "Intermediaci&oacute;n (betweenness)";
 choices[17][3] = "Todas son medidas de centralidad";
 answers[17] = 3;
 units[17] = ['67'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7430. ";
 preguntaids[17] = 7430


//  Id pregunta: 7518 Año de creación de pregunta: 2010
 questions[18]= "19)  En el lenguaje SQL, un valor NULL:";
 choices[18]= new Array();
 choices[18][0] = "Significa blancos o ceros.";
 choices[18][1] = "Puede ser utilizado en una instrucci&oacute;n SELECT.";
 choices[18][2] = "Se utiliza para referirse a la informaci&oacute;n que es incompleta o de la que no se dispone.";
 choices[18][3] = "Ha de ser igual a cualquier otro valor NULL en cualquier sistema.";
 answers[18] = 2;
 units[18] = ['61'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7518. Map 2005";
 preguntaids[18] = 7518


//  Id pregunta: 7560 Año de creación de pregunta: 2010
 questions[19]= "20)  En el entorno de la arquitectura GNOME, seleccione la afirmaci&oacute;n correcta en relaci&oacute;n con DII:";
 choices[19]= new Array();
 choices[19][0] = "Es un lenguaje para implementar interfaces CORBA.";
 choices[19][1] = "Es un servicio que ofrece objetos persistentes que representan la informaci&oacute;n IDL de los interfaces disponibles en CORBA.";
 choices[19][2] = "Es un protocolo de comunicaciones de CORBA.";
 choices[19][3] = "Es una interfaz que nos permite la construcci&oacute;n din&aacute;mica de invocaciones para un determinado objeto.";
 answers[19] = 3;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7560. Map 2005";
 preguntaids[19] = 7560


//  Id pregunta: 7439 Año de creación de pregunta: 2010
 questions[20]= "21)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[20]= new Array();
 choices[20][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[20][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[20][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[20][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[20] = 0;
 units[20] = ['75'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7439. ";
 preguntaids[20] = 7439


//  Id pregunta: 7545 Año de creación de pregunta: 2010
 questions[21]= "22)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;cu&aacute;les son?";
 choices[21]= new Array();
 choices[21][0] = "DTD y XML Schema.";
 choices[21][1] = "DTL y HTML.";
 choices[21][2] = "HTML y API.";
 choices[21][3] = "DTD y SGML.";
 answers[21] = 0;
 units[21] = ['74'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7545. Map 2005";
 preguntaids[21] = 7545


//  Id pregunta: 7527 Año de creación de pregunta: 2010
 questions[22]= "23)  En JDBC, &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[22]= new Array();
 choices[22][0] = "Driver Tipo 1.";
 choices[22][1] = "Driver Tipo 2.";
 choices[22][2] = "Driver Tipo 3.";
 choices[22][3] = "Driver Tipo 4.";
 answers[22] = 0;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7527. Map 2005";
 preguntaids[22] = 7527


//  Id pregunta: 7590 Año de creación de pregunta: 2010
 questions[23]= "24)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[23]= new Array();
 choices[23][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[23][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[23][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[23][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[23] = 0;
 units[23] = ['61'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7590. Map 2006";
 preguntaids[23] = 7590


//  Id pregunta: 7535 Año de creación de pregunta: 2010
 questions[24]= "25)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[24]= new Array();
 choices[24][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML.";
 choices[24][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web.";
 choices[24][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos.";
 choices[24][3] = "CSS y XSL no pueden usarse en paralelo.";
 answers[24] = 1;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7535. Map 2005";
 preguntaids[24] = 7535


//  Id pregunta: 7427 Año de creación de pregunta: 2010
 questions[25]= "26)  Un proveedor de SW para miner&iacute;a de datos es:";
 choices[25]= new Array();
 choices[25][0] = "SAS";
 choices[25][1] = "SPSS";
 choices[25][2] = "A y B son correctas.";
 choices[25][3] = "A y B son incorrectas.";
 answers[25] = 2;
 units[25] = ['72'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7427. ";
 preguntaids[25] = 7427


//  Id pregunta: 7436 Año de creación de pregunta: 2010
 questions[26]= "27)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[26]= new Array();
 choices[26][0] = "COBOL";
 choices[26][1] = "Fortran";
 choices[26][2] = "Delphi";
 choices[26][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[26] = 3;
 units[26] = ['63'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7436. ";
 preguntaids[26] = 7436


//  Id pregunta: 7599 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[27][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[27][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[27][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[27] = 2;
 units[27] = ['74'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7599. Map 2006";
 preguntaids[27] = 7599


//  Id pregunta: 7572 Año de creación de pregunta: 2010
 questions[28]= "29)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos pueden tener un per&iacute;odo m&aacute;ximo de validez de:";
 choices[28]= new Array();
 choices[28][0] = "Dos a&ntilde;os.";
 choices[28][1] = "Cuatro a&ntilde;os.";
 choices[28][2] = "Cinco a&ntilde;os.";
 choices[28][3] = "La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica no establece expl&iacute;citamente un per&iacute;odo m&aacute;ximo de validez para este tipo de certificados.";
 answers[28] = 2;
 units[28] = ['77'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7572. Similar a Map 2006";
 preguntaids[28] = 7572


//  Id pregunta: 7435 Año de creación de pregunta: 2010
 questions[29]= "30)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[29]= new Array();
 choices[29][0] = "MSIL";
 choices[29][1] = "JVM";
 choices[29][2] = "Biblioteca de Clases Base o BCL";
 choices[29][3] = "CLR (Common Language Runtime)";
 answers[29] = 1;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7435. ";
 preguntaids[29] = 7435


//  Id pregunta: 7500 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[30]= new Array();
 choices[30][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP.";
 choices[30][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica.";
 choices[30][2] = "Los ficheros con este formato son independientes de la plataforma.";
 choices[30][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los ficheros que contiene.";
 answers[30] = 3;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7500. Map 2005";
 preguntaids[30] = 7500


//  Id pregunta: 7443 Año de creación de pregunta: 2010
 questions[31]= "32)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a facturae:";
 choices[31]= new Array();
 choices[31][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[31][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[31][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[31][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[31] = 3;
 units[31] = ['75'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7443. ";
 preguntaids[31] = 7443


//  Id pregunta: 7509 Año de creación de pregunta: 2010
 questions[32]= "33)  En el entorno de escritorio KDE, Karbon es:";
 choices[32]= new Array();
 choices[32][0] = "El navegador del escritorio.";
 choices[32][1] = "Un generador de informes para la empresa.";
 choices[32][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas.";
 choices[32][3] = "Un programa de dibujo vectorial.";
 answers[32] = 3;
 units[32] = ['66'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7509. Similar a Map 2005";
 preguntaids[32] = 7509


//  Id pregunta: 7441 Año de creación de pregunta: 2010
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[33]= new Array();
 choices[33][0] = "EDIFACT";
 choices[33][1] = "ebXML";
 choices[33][2] = "XMT";
 choices[33][3] = "UBL";
 answers[33] = 2;
 units[33] = ['75'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7441. ";
 preguntaids[33] = 7441


//  Id pregunta: 7503 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[34]= new Array();
 choices[34][0] = "XPG4 Base.";
 choices[34][1] = "XPG4 Commands and Utilities.";
 choices[34][2] = "XPG4 Language.";
 choices[34][3] = "XPG4 Internationalised System Calls and Libraries.";
 answers[34] = 2;
 units[34] = ['56'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7503. Map 2005";
 preguntaids[34] = 7503


//  Id pregunta: 7499 Año de creación de pregunta: 2010
 questions[35]= "36)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta:";
 choices[35]= new Array();
 choices[35][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina.";
 choices[35][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso.";
 choices[35][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador.";
 choices[35][3] = "Los fallos de p&aacute;gina son tratados por el hardware.";
 answers[35] = 2;
 units[35] = ['58'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7499. Map 2005";
 preguntaids[35] = 7499


//  Id pregunta: 7528 Año de creación de pregunta: 2010
 questions[36]= "37)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta:";
 choices[36]= new Array();
 choices[36][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado.";
 choices[36][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido.";
 choices[36][2] = "En OWL DL, una clase no puede ser instancia de otra clase.";
 choices[36][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud.";
 answers[36] = 2;
 units[36] = ['68'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7528. Map 2005";
 preguntaids[36] = 7528


//  Id pregunta: 7491 Año de creación de pregunta: 2010
 questions[37]= "38)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[37]= new Array();
 choices[37][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[37][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[37][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[37][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7491. Map 2005";
 preguntaids[37] = 7491


//  Id pregunta: 7456 Año de creación de pregunta: 2010
 questions[38]= "39)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[38]= new Array();
 choices[38][0] = "Integridad";
 choices[38][1] = "Confidencialidad";
 choices[38][2] = "No Repudio";
 choices[38][3] = "Disponibilidad";
 answers[38] = 0;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7456. ";
 preguntaids[38] = 7456


//  Id pregunta: 7496 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[39]= new Array();
 choices[39][0] = "Modelo en cascada.";
 choices[39][1] = "Modelo de prototipado.";
 choices[39][2] = "Modelo de transformaci&oacute;n.";
 choices[39][3] = "Modelo en espiral.";
 answers[39] = 3;
 units[39] = ['76'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7496. Map 2005";
 preguntaids[39] = 7496


//  Id pregunta: 7526 Año de creación de pregunta: 2010
 questions[40]= "41)  En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[40]= new Array();
 choices[40][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[40][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[40][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[40][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[40] = 2;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7526. Map 2005";
 preguntaids[40] = 7526


//  Id pregunta: 7429 Año de creación de pregunta: 2010
 questions[41]= "42)  SQL*Loader es una herramienta utilizada para qu&eacute; servidor de bases de datos:";
 choices[41]= new Array();
 choices[41][0] = "MySQL";
 choices[41][1] = "Oracle";
 choices[41][2] = "SQL Server";
 choices[41][3] = "Todas las opciones son correctas";
 answers[41] = 1;
 units[41] = ['60'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7429. ";
 preguntaids[41] = 7429


//  Id pregunta: 7543 Año de creación de pregunta: 2010
 questions[42]= "43)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[42]= new Array();
 choices[42][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento.";
 choices[42][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos.";
 choices[42][2] = "Un lenguaje para establecer restricciones en los documentos XML.";
 choices[42][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n.";
 answers[42] = 0;
 units[42] = ['74'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7543. Map 2005";
 preguntaids[42] = 7543


//  Id pregunta: 7562 Año de creación de pregunta: 2010
 questions[43]= "44)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA, se refiere a:";
 choices[43]= new Array();
 choices[43][0] = "Formato del sobre digital.";
 choices[43][1] = "Formato del certificado digital.";
 choices[43][2] = "Sintaxis de la clave privada.";
 choices[43][3] = "Algoritmo Diffie-Hellman.";
 answers[43] = 0;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7562. Map 2005";
 preguntaids[43] = 7562


//  Id pregunta: 7455 Año de creación de pregunta: 2010
 questions[44]= "45)  ASCII es el acr&oacute;nimo de:";
 choices[44]= new Array();
 choices[44][0] = "American Standard Code for Information Integration";
 choices[44][1] = "Alliance Standard Code Interchange Integration";
 choices[44][2] = "American Standard Code for Information Interchange";
 choices[44][3] = "All sugar can injure igloos";
 answers[44] = 2;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7455. ";
 preguntaids[44] = 7455


//  Id pregunta: 7519 Año de creación de pregunta: 2010
 questions[45]= "46)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones:";
 choices[45]= new Array();
 choices[45][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &laquo;abstract person&raquo;.";
 choices[45][1] = "Learning Design puede ser integrado dentro de la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;.";
 choices[45][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI.";
 choices[45][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS e IEEE metadata.";
 answers[45] = 0;
 units[45] = ['70'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7519. Map 2005";
 preguntaids[45] = 7519


//  Id pregunta: 7481 Año de creación de pregunta: 2010
 questions[46]= "47)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[46]= new Array();
 choices[46][0] = "Una extensi&oacute;n de Swing.";
 choices[46][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario.";
 choices[46][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent.";
 choices[46][3] = "Una familia de fuentes de caracteres.";
 answers[46] = 1;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7481. Map 2005";
 preguntaids[46] = 7481


//  Id pregunta: 7605 Año de creación de pregunta: 2010
 questions[47]= "48)  En una aplicaci&oacute;n sobre Arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[47]= new Array();
 choices[47][0] = "En el servidor de aplicaciones.";
 choices[47][1] = "En el servidor de datos.";
 choices[47][2] = "En el cliente.";
 choices[47][3] = "En el servidor http/ssl (Hipertext Transfer Protocol/Secure Sockets Layer).";
 answers[47] = 0;
 units[47] = ['62'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7605. Map 2006";
 preguntaids[47] = 7605


//  Id pregunta: 7534 Año de creación de pregunta: 2010
 questions[48]= "49)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios.";
 choices[48][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n.";
 choices[48][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows.";
 choices[48][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0.";
 answers[48] = 1;
 units[48] = ['63'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7534. Map 2005";
 preguntaids[48] = 7534


//  Id pregunta: 7482 Año de creación de pregunta: 2010
 questions[49]= "50)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[49]= new Array();
 choices[49][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[49][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[49][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[49][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[49] = 2;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7482. Map 2005";
 preguntaids[49] = 7482


//  Id pregunta: 7480 Año de creación de pregunta: 2010
 questions[50]= "51)  El entorno de escritorio KDE:";
 choices[50]= new Array();
 choices[50][0] = "Utiliza como gestor de ventanas uno propio.";
 choices[50][1] = "No posee gestor de ventanas propio.";
 choices[50][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA.";
 choices[50][3] = "No proporciona distintas configuraciones para distintos idiomas.";
 answers[50] = 0;
 units[50] = ['62'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7480. Map 2005";
 preguntaids[50] = 7480


//  Id pregunta: 7428 Año de creación de pregunta: 2010
 questions[51]= "52)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[51]= new Array();
 choices[51][0] = "SAS";
 choices[51][1] = "Clementine";
 choices[51][2] = "Weka";
 choices[51][3] = "SPSS";
 answers[51] = 2;
 units[51] = ['72'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7428. ";
 preguntaids[51] = 7428


//  Id pregunta: 7459 Año de creación de pregunta: 2010
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo DES?";
 choices[52]= new Array();
 choices[52][0] = "ECB";
 choices[52][1] = "OCB";
 choices[52][2] = "CBC";
 choices[52][3] = "OFB";
 answers[52] = 1;
 units[52] = ['76'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7459. ";
 preguntaids[52] = 7459


//  Id pregunta: 7533 Año de creación de pregunta: 2010
 questions[53]= "54)  Dentro del kernel de Unix, el n&uacute;cleo dependiente:";
 choices[53]= new Array();
 choices[53][0] = "Controla la ejecuci&oacute;n de procesos.";
 choices[53][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n.";
 choices[53][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos.";
 choices[53][3] = "Se encarga de las interrupciones.";
 answers[53] = 3;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7533. Map 2005";
 preguntaids[53] = 7533


//  Id pregunta: 7457 Año de creación de pregunta: 2010
 questions[54]= "55)  La autenticaci&oacute;n consiste en:";
 choices[54]= new Array();
 choices[54][0] = "Comprobar los permisos del usuario";
 choices[54][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[54][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[54][3] = "Comprobar la identidad del usuario";
 answers[54] = 3;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7457. ";
 preguntaids[54] = 7457


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[55]= new Array();
 choices[55][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[55][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[55][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[55][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[55] = 1;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7541. Map 2005";
 preguntaids[55] = 7541


//  Id pregunta: 7552 Año de creación de pregunta: 2010
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de JME es cierta:";
 choices[56]= new Array();
 choices[56][0] = "Es un subconjunto del paquete Swing de J2E.";
 choices[56][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n.";
 choices[56][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS.";
 choices[56][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos.";
 answers[56] = 3;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7552. Similar a Map 2005";
 preguntaids[56] = 7552


//  Id pregunta: 7561 Año de creación de pregunta: 2010
 questions[57]= "58)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[57]= new Array();
 choices[57][0] = "Error y Exception.";
 choices[57][1] = "Error y Catch.";
 choices[57][2] = "Throw y Finally.";
 choices[57][3] = "Error y Throw.";
 answers[57] = 0;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7561. Map 2005";
 preguntaids[57] = 7561


//  Id pregunta: 7437 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[58]= new Array();
 choices[58][0] = "Active Server Pages";
 choices[58][1] = "Active Side Pages";
 choices[58][2] = "Archive Server Pages";
 choices[58][3] = "Archive Side Pages";
 answers[58] = 0;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7437. ";
 preguntaids[58] = 7437


//  Id pregunta: 7542 Año de creación de pregunta: 2010
 questions[59]= "60)  En el entrono de desarrollo .NET, el t&eacute;rmino CLR se refiere a:";
 choices[59]= new Array();
 choices[59][0] = "Un entorno en tiempo de ejecuci&oacute;n que ejecuta el c&oacute;digo y proporciona servicios proporcionado por .NET framework.";
 choices[59][1] = "La biblioteca de clases del entorno .NET Framework.";
 choices[59][2] = "Un modelo de programaci&oacute;n para la creaci&oacute;n de aplicaciones Web.";
 choices[59][3] = "Un controlador para eventos de nivel de aplicaci&oacute;n.";
 answers[59] = 0;
 units[59] = ['63'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7542. Map 2005.  http://www.insht.es/InshtWeb/Contenidos/Normativa/GuiasTecnicas/Ficheros/pantallas.pdf";
 preguntaids[59] = 7542


//  Id pregunta: 7497 Año de creación de pregunta: 2010
 questions[60]= "61)  En el formato gr&aacute;fico JPEG, &iquest;cu&aacute;l de estas opciones no es verdadera?";
 choices[60]= new Array();
 choices[60][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n.";
 choices[60][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP.";
 choices[60][2] = "Su nombre oficial es ISO/IEC IS 10918.";
 choices[60][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000.";
 answers[60] = 1;
 units[60] = ['80'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7497. Map 2005";
 preguntaids[60] = 7497


//  Id pregunta: 7510 Año de creación de pregunta: 2010
 questions[61]= "62)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "ISO 7816-1.";
 choices[61][1] = "ISO 7816-2.";
 choices[61][2] = "ISO 7816-3.";
 choices[61][3] = "ISO 7816-4.";
 answers[61] = 2;
 units[61] = ['78'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7510. Map 2005";
 preguntaids[61] = 7510


//  Id pregunta: 7493 Año de creación de pregunta: 2010
 questions[62]= "63)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[62]= new Array();
 choices[62][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos.";
 choices[62][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[62][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte.";
 choices[62][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos.";
 answers[62] = 2;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7493. Map 2005";
 preguntaids[62] = 7493


//  Id pregunta: 7442 Año de creación de pregunta: 2010
 questions[63]= "64)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[63]= new Array();
 choices[63][0] = "3D Secure";
 choices[63][1] = "UCAF";
 choices[63][2] = "Urbinet";
 choices[63][3] = "SET";
 answers[63] = 2;
 units[63] = ['75'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7442. ";
 preguntaids[63] = 7442


//  Id pregunta: 7581 Año de creación de pregunta: 2010
 questions[64]= "65)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3 de Quinlan)";
 choices[64]= new Array();
 choices[64][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a";
 choices[64][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n";
 choices[64][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado";
 choices[64][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas e inclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[64] = 1;
 units[64] = ['68'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7581. Map 2006";
 preguntaids[64] = 7581


//  Id pregunta: 7546 Año de creación de pregunta: 2010
 questions[65]= "66)  Sean en una comunicaci&oacute;n: m = mensaje a transmitir. y = h(m) el c&oacute;digo hash del mensaje m calculado en origen. m&rsquo; = mensaje recibido. y&rsquo; = h(m&rsquo;) el c&oacute;digo hash del mensaje m&rsquo; recibido, calculado en destino. Se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[65]= new Array();
 choices[65][0] = "Si y = y&rsquo; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&rsquo;.";
 choices[65][1] = "Si y ? y&rsquo; entonces se puede afirmar que la clave privada ha sido alterada.";
 choices[65][2] = "Si m = m&rsquo; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&rsquo;.";
 choices[65][3] = "Si y = y&rsquo; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&rsquo;.";
 answers[65] = 0;
 units[65] = ['76'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7546. Map 2005";
 preguntaids[65] = 7546


//  Id pregunta: 7458 Año de creación de pregunta: 2010
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[66]= new Array();
 choices[66][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[66][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[66][2] = "AES es implementable tanto en hardware como en software";
 choices[66][3] = "Todas las anteriores son FALSAS.";
 answers[66] = 2;
 units[66] = ['76'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7458. ";
 preguntaids[66] = 7458


//  Id pregunta: 7501 Año de creación de pregunta: 2010
 questions[67]= "68)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objetos de acuerdo a su funcionalidad:";
 choices[67]= new Array();
 choices[67][0] = "Auxiliar, Estructural, Simplificada, Alias.";
 choices[67][1] = "Estructural, Simplificada, Auxiliar, Alias.";
 choices[67][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias.";
 choices[67][3] = "Abstracta, Estructural, Auxiliar, Alias.";
 answers[67] = 3;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7501. Map 2005";
 preguntaids[67] = 7501


//  Id pregunta: 7555 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Qu&eacute; es un &laquo;Parser&raquo; XML?";
 choices[68]= new Array();
 choices[68][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML.";
 choices[68][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa.";
 choices[68][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna.";
 choices[68][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML.";
 answers[68] = 2;
 units[68] = ['74'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7555. Map 2005";
 preguntaids[68] = 7555


//  Id pregunta: 7463 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Qu&eacute; es HSM?";
 choices[69]= new Array();
 choices[69][0] = "Un dispositivo criptogr&aacute;fico basado en hardware  que genera, almacena y protege claves criptogr&aacute;ficas";
 choices[69][1] = "Un algoritmo de clave p&uacute;blica";
 choices[69][2] = "Un API gen&eacute;rico de acceso a dispositivos criptogr&aacute;ficos";
 choices[69][3] = "Un conjunto de pol&iacute;ticas de seguridad en el &aacute;mbito de la criptograf&iacute;a de clave p&uacute;bica";
 answers[69] = 0;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7463. ";
 preguntaids[69] = 7463


//  Id pregunta: 7571 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes NO es uno de los 14 paquetes de nivel superior que se establecen en la norma 19115 de ISO (International Standards Organization) sobre metadatos de un sistema GIS (Geographycal Information System)?";
 choices[70]= new Array();
 choices[70][0] = "Informaci&oacute;n sobre restricciones.";
 choices[70][1] = "Informaci&oacute;n sobre formato.";
 choices[70][2] = "Informaci&oacute;n sobre extensi&oacute;n.";
 choices[70][3] = "Informaci&oacute;n sobre contenidos.";
 answers[70] = 1;
 units[70] = ['71'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7571. Map 2006";
 preguntaids[70] = 7571


//  Id pregunta: 7489 Año de creación de pregunta: 2010
 questions[71]= "72)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS:";
 choices[71]= new Array();
 choices[71][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n.";
 choices[71][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros.";
 choices[71][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros.";
 choices[71][3] = "Proporciona transparencia de la replicaci&oacute;n.";
 answers[71] = 1;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 7489. Map 2005";
 preguntaids[71] = 7489


//  Id pregunta: 7438 Año de creación de pregunta: 2010
 questions[72]= "73)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[72]= new Array();
 choices[72][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[72][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[72][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[72][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[72] = 2;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7438. ";
 preguntaids[72] = 7438


//  Id pregunta: 7512 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[73]= new Array();
 choices[73][0] = "X/OPEN.";
 choices[73][1] = "ACE.";
 choices[73][2] = "OSF.";
 choices[73][3] = "IEEE.";
 answers[73] = 3;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7512. Map 2005";
 preguntaids[73] = 7512


//  Id pregunta: 7504 Año de creación de pregunta: 2010
 questions[74]= "75)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[74]= new Array();
 choices[74][0] = "JavaMicro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java.";
 choices[74][1] = "Los Java Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java.";
 choices[74][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http.";
 choices[74][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet.";
 answers[74] = 2;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7504. Similar a Map 2005";
 preguntaids[74] = 7504


