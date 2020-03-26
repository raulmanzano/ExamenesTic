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
//  Id pregunta: 7632 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (Joint Photographic Experts Group)?";
 choices[0]= new Array();
 choices[0][0] = "B&aacute;sico/secuencial.";
 choices[0][1] = "Jer&aacute;rquico.";
 choices[0][2] = "Progresivo.";
 choices[0][3] = "Conjugado modificado.";
 answers[0] = 3;
 units[0] = ['80'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7632. Map 2006";
 preguntaids[0] = 7632


//  Id pregunta: 7644 Año de creación de pregunta: 2010
 questions[1]= "2)  El atributo de posicionamiento de un applet &laquo;absbottom&raquo;:";
 choices[1]= new Array();
 choices[1][0] = "Coloca el applet en el margen izquierdo de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a su derecha.";
 choices[1][1] = "Coloca el applet en el margen derecho de la p&aacute;gina, y el texto que le siga se sit&uacute;a en el espacio situado a su izquierda.";
 choices[1][2] = "Coloca la parte inferior del applet coincidiendo con el centro de la l&iacute;nea actual.";
 choices[1][3] = "Coloca la parte superior del applet coincidiendo con la parte superior del texto en la l&iacute;nea actual.";
 answers[1] = 2;
 units[1] = ['62'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 7644. Map 2006";
 preguntaids[1] = 7644


//  Id pregunta: 7628 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[2]= new Array();
 choices[2][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[2][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[2][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[2][3] = "La arquitectura de componentes de GNOME estaba basada en Bonobo, pero en la actualidad se considera obsoleta";
 answers[2] = 0;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7628. Similar a Map 2006";
 preguntaids[2] = 7628


//  Id pregunta: 7647 Año de creación de pregunta: 2010
 questions[3]= "4)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL):";
 choices[3]= new Array();
 choices[3][0] = "Permiten conocer el estado de un certificado en el instante de la consulta.";
 choices[3][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[3][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n.";
 choices[3][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintas facilitan su tratamiento.";
 answers[3] = 2;
 units[3] = ['77'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7647. Map 2006";
 preguntaids[3] = 7647


//  Id pregunta: 7759 Año de creación de pregunta: 2010
 questions[4]= "5)  El sub-proyecto de &laquo;Apache&raquo; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[4]= new Array();
 choices[4][0] = "Watchdog.";
 choices[4][1] = "Turbine.";
 choices[4][2] = "Lucene.";
 choices[4][3] = "Avalon.";
 answers[4] = 2;
 units[4] = ['73'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7759. ";
 preguntaids[4] = 7759


//  Id pregunta: 7694 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato raster?";
 choices[5]= new Array();
 choices[5][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[5][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[5][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[5][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[5] = 2;
 units[5] = ['71'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7694. Map 2007";
 preguntaids[5] = 7694


//  Id pregunta: 7684 Año de creación de pregunta: 2010
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "Es independiente del lenguaje de programaci&oacute;n.";
 choices[6][1] = "Es independiente del sistema operativo.";
 choices[6][2] = "Es independiente de la base de datos.";
 choices[6][3] = "Es un tipo de API.";
 answers[6] = 0;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7684. Map 2007";
 preguntaids[6] = 7684


//  Id pregunta: 7617 Año de creación de pregunta: 2010
 questions[7]= "8)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtual de 2^20 y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos de p&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[7]= new Array();
 choices[7][0] = "32 kB.";
 choices[7][1] = "4 MB.";
 choices[7][2] = "1 MB.";
 choices[7][3] = "8 kB";
 answers[7] = 0;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7617. Map 2006";
 preguntaids[7] = 7617


//  Id pregunta: 7629 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[8]= new Array();
 choices[8][0] = "Modo ECB (Electronic Code Book Mode).";
 choices[8][1] = "Modo CFB (Cipher Feedback Mode).";
 choices[8][2] = "Modo BBM (Bit Block Mode).";
 choices[8][3] = "Modo CBC (Cipher Block Chaining Mode).";
 answers[8] = 2;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 7629. Map 2006";
 preguntaids[8] = 7629


//  Id pregunta: 7654 Año de creación de pregunta: 2010
 questions[9]= "10)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[9]= new Array();
 choices[9][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario.";
 choices[9][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales.";
 choices[9][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nueva transacci&oacute;n.";
 choices[9][3] = "El diario nunca necesita escribirse en disco.";
 answers[9] = 1;
 units[9] = ['60'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7654. Map 2006";
 preguntaids[9] = 7654


//  Id pregunta: 7622 Año de creación de pregunta: 2010
 questions[10]= "11)  De entre las t&eacute;cnicas de compresi&oacute;n de im&aacute;genes digitales por codificaci&oacute;n predictiva en las que se elimina la redundancia entre p&iacute;xeles consecutivos, aquella que forma una predicci&oacute;n del p&iacute;xel a codificar en funci&oacute;n de los p&iacute;xeles ya codificados y guarda el error de predicci&oacute;n cuantificado, recibe el nombre de:";
 choices[10]= new Array();
 choices[10][0] = "Dithering.";
 choices[10][1] = "RLE (Run Length Encoding).";
 choices[10][2] = "Bit Plane.";
 choices[10][3] = "DPCM (Differential Pulse Code Modulation).";
 answers[10] = 3;
 units[10] = ['80'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7622. Map 2006";
 preguntaids[10] = 7622


//  Id pregunta: 7778 Año de creación de pregunta: 2010
 questions[11]= "12)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[11]= new Array();
 choices[11][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria.";
 choices[11][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos.";
 choices[11][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol.";
 choices[11][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol.";
 answers[11] = 2;
 units[11] = ['74'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7778. ";
 preguntaids[11] = 7778


//  Id pregunta: 7730 Año de creación de pregunta: 2010
 questions[12]= "13)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar un recurso de la web:";
 choices[12]= new Array();
 choices[12][0] = "El nombre del recurso.";
 choices[12][1] = "El tipo del recurso.";
 choices[12][2] = "D&oacute;nde se encuentra el recurso.";
 choices[12][3] = "El protocolo que hay que usar para obtener el recurso.";
 answers[12] = 1;
 units[12] = ['74'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 7730. Map 2007";
 preguntaids[12] = 7730


//  Id pregunta: 7789 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[13]= new Array();
 choices[13][0] = "ln.";
 choices[13][1] = "mkdir.";
 choices[13][2] = "ls.";
 choices[13][3] = "mv.";
 answers[13] = 0;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7789. ";
 preguntaids[13] = 7789


//  Id pregunta: 7804 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico o de clave p&uacute;blica?";
 choices[14]= new Array();
 choices[14][0] = "IDEA (International Data Encryption Standard).";
 choices[14][1] = "Algoritmo de intercambio de claves de Diffie-Hellman.";
 choices[14][2] = "AES (Advanced Encryption Standard).";
 choices[14][3] = "RC-5.";
 answers[14] = 1;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7804. ";
 preguntaids[14] = 7804


//  Id pregunta: 7739 Año de creación de pregunta: 2010
 questions[15]= "16)  GNOME es un entorno de escritorio libre para sistemas operativos libres. Seleccione la afirmaci&oacute;n correcta sobre &eacute;l:";
 choices[15]= new Array();
 choices[15][0] = "Ha sido la base sobre la cual se ha desarrollado el c&oacute;digo de la interfaz gr&aacute;fica de Windows VISTA.";
 choices[15][1] = "Desde sus or&iacute;genes ha utilizado la biblioteca de controles gr&aacute;ficos GTK.";
 choices[15][2] = "Cada vez que se a&ntilde;ade un icono al escritorio requiere que se recompile el Kernel.";
 choices[15][3] = "Solamente admite una profundidad de color de 8 bits.";
 answers[15] = 1;
 units[15] = ['66'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7739. ";
 preguntaids[15] = 7739


//  Id pregunta: 7749 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?";
 choices[16]= new Array();
 choices[16][0] = "XSL-FO.";
 choices[16][1] = "XPath.";
 choices[16][2] = "XSLT.";
 choices[16][3] = "XForms.";
 answers[16] = 1;
 units[16] = ['74'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7749. ";
 preguntaids[16] = 7749


//  Id pregunta: 7607 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[17]= new Array();
 choices[17][0] = "No precisa se&ntilde;al de reloj externa.";
 choices[17][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros.";
 choices[17][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas.";
 choices[17][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus.";
 answers[17] = 1;
 units[17] = ['53'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7607. Map 2006";
 preguntaids[17] = 7607


//  Id pregunta: 7748 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?";
 choices[18]= new Array();
 choices[18][0] = "UPDATE TABLE.";
 choices[18][1] = "ALTER TABLE.";
 choices[18][2] = "REVOKE ALL.";
 choices[18][3] = "ROLLBACK.";
 answers[18] = 1;
 units[18] = ['61'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7748. ";
 preguntaids[18] = 7748


//  Id pregunta: 7665 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativos escritos en otros lenguajes?";
 choices[19]= new Array();
 choices[19][0] = "RMI.";
 choices[19][1] = "JAXP.";
 choices[19][2] = "JNDI.";
 choices[19][3] = "JNI.";
 answers[19] = 3;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7665. Map 2007";
 preguntaids[19] = 7665


//  Id pregunta: 7608 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java Web Start?";
 choices[20]= new Array();
 choices[20][0] = "Permite ejecutar aplicaciones independientemente de cu&aacute;l sea la plataforma cliente.";
 choices[20][1] = "Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente.";
 choices[20][2] = "Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridad del cliente.";
 choices[20][3] = "La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar los componentes actualizados.";
 answers[20] = 2;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7608. Map 2006";
 preguntaids[20] = 7608


//  Id pregunta: 7721 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l es el per&iacute;odo m&aacute;ximo de validez de los certificados del DNIe?";
 choices[21]= new Array();
 choices[21][0] = "24 meses.";
 choices[21][1] = "5 a&ntilde;os.";
 choices[21][2] = "30 meses.";
 choices[21][3] = "4 a&ntilde;os.";
 answers[21] = 1;
 units[21] = ['78'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7721. Similar a Map 2007";
 preguntaids[21] = 7721


//  Id pregunta: 7741 Año de creación de pregunta: 2010
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?";
 choices[22]= new Array();
 choices[22][0] = "Los XML Schemas utilizan sintaxis XML.";
 choices[22][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML.";
 choices[22][2] = "Los XML Schemas soportan namespaces.";
 choices[22][3] = "Los XML Schemas permiten definir tipos de datos.";
 answers[22] = 1;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7741. ";
 preguntaids[22] = 7741


//  Id pregunta: 7743 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como &laquo;paginaci&oacute;n&raquo;?";
 choices[23]= new Array();
 choices[23][0] = "Consiste en determinar qu&eacute; espacio vac&iacute;o en la memoria principal es el m&aacute;s indicado para ser asignado a un proceso.";
 choices[23][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de p&aacute;gina, las cuales sirven como unidad de almacenamiento de informaci&oacute;n.";
 choices[23][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como la asignaci&oacute;n.";
 choices[23][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica, llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominados segmentos.";
 answers[23] = 1;
 units[23] = ['56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7743. ";
 preguntaids[23] = 7743


//  Id pregunta: 7731 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?";
 choices[24]= new Array();
 choices[24][0] = "Autenticaci&oacute;n y firma.";
 choices[24][1] = "Cifrado y firma.";
 choices[24][2] = "Firma.";
 choices[24][3] = "Cifrado, firma y autenticaci&oacute;n.";
 answers[24] = 0;
 units[24] = ['78'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7731. Map 2007";
 preguntaids[24] = 7731


//  Id pregunta: 7637 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[25]= new Array();
 choices[25][0] = "Mosix es un sistema basado en Linux que permite trabajar coordinadamente a m&uacute;ltiples ordenadores pertenecientes a una misma organizaci&oacute;n, u organizaciones distintas.";
 choices[25][1] = "Un grid de Mosix puede dividirse en clusters virtuales. Un proceso ejecut&aacute;ndose en un cluster virtual no puede ser transferido a otro cluster virtual.";
 choices[25][2] = "El Entorno de Ejecuci&oacute;n Virtual de Mosix (MVE, Mosix Virtual Runtime Environment) garantiza que un proceso creado en un nodo del grid, pero que se est&aacute; ejecutando en otro, s&oacute;lo accede en este &uacute;ltimo a la CPU y la memoria.";
 choices[25][3] = "En un grid Mosix cualquier proceso puede ser detenido en un punto de control y salvado a disco para posteriormente reanudar su ejecuci&oacute;n desde dicho punto.";
 answers[25] = 2;
 units[25] = ['49'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7637. Map 2006";
 preguntaids[25] = 7637


//  Id pregunta: 7797 Año de creación de pregunta: 2010
 questions[26]= "27)  Un Data Warehouse es:";
 choices[26]= new Array();
 choices[26][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[26][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[26][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[26][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[26] = 3;
 units[26] = ['72'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7797. ";
 preguntaids[26] = 7797


//  Id pregunta: 7732 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?";
 choices[27]= new Array();
 choices[27][0] = "2";
 choices[27][1] = "3";
 choices[27][2] = "4";
 choices[27][3] = "5";
 answers[27] = 2;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7732. ";
 preguntaids[27] = 7732


//  Id pregunta: 7666 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?";
 choices[28]= new Array();
 choices[28][0] = "WSDL.";
 choices[28][1] = "SOAP.";
 choices[28][2] = "UDDI.";
 choices[28][3] = "XHTML.";
 answers[28] = 2;
 units[28] = ['74'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7666. Similar a Map 2007";
 preguntaids[28] = 7666


//  Id pregunta: 7740 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?";
 choices[29]= new Array();
 choices[29][0] = "Zona p&uacute;blica.";
 choices[29][1] = "Zona privada.";
 choices[29][2] = "Zona de seguridad.";
 choices[29][3] = "Zona compartida.";
 answers[29] = 2;
 units[29] = ['78'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7740. ";
 preguntaids[29] = 7740


//  Id pregunta: 7618 Año de creación de pregunta: 2010
 questions[30]= "31)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[30]= new Array();
 choices[30][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadas sobre el software.";
 choices[30][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente los t&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor del producto.";
 choices[30][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara en programas distribuidos bajo licencia no GPL.";
 choices[30][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &laquo;Copyleft&raquo;.";
 answers[30] = 2;
 units[30] = ['66'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7618. Map 2006";
 preguntaids[30] = 7618


//  Id pregunta: 7712 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[31]= new Array();
 choices[31][0] = "RD 153/2005, de 14 de enero.";
 choices[31][1] = "RD 1553/2005, de 23 de diciembre.";
 choices[31][2] = "RD 1555/2003, de 29 de mayo.";
 choices[31][3] = "RD 155/2003, de 15 de septiembre.";
 answers[31] = 1;
 units[31] = ['78'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7712. Map 2007";
 preguntaids[31] = 7712


//  Id pregunta: 7738 Año de creación de pregunta: 2010
 questions[32]= "33)  En relaci&oacute;n con los ERP, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a SAP R/3?";
 choices[32]= new Array();
 choices[32][0] = "El m&oacute;dulo donde se gestionan las compras se denomina CO.";
 choices[32][1] = "El m&oacute;dulo PM se encarga de gestionar la gesti&oacute;n de proyectos.";
 choices[32][2] = "El m&oacute;dulo SD es parte del m&oacute;dulo de contabilidad financiera.";
 choices[32][3] = "El m&oacute;dulo &laquo;Basis&raquo; se encarga de gestionar la base de datos.";
 answers[32] = 3;
 units[32] = ['69'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7738. ";
 preguntaids[32] = 7738


//  Id pregunta: 7616 Año de creación de pregunta: 2010
 questions[33]= "34)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos, &iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint).";
 choices[33][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones.";
 choices[33][2] = "Rollback de la transacci&oacute;n.";
 choices[33][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones.";
 answers[33] = 1;
 units[33] = ['60'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7616. Map 2006";
 preguntaids[33] = 7616


//  Id pregunta: 7625 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en J2EE (Java 2 Enterprise Edition)?";
 choices[34]= new Array();
 choices[34][0] = "WAR (Web Archive).";
 choices[34][1] = "EAR (Enterprise Archive).";
 choices[34][2] = "BAR (Bean Archive).";
 choices[34][3] = "JAR (Java Archive).";
 answers[34] = 2;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 7625. Map 2006";
 preguntaids[34] = 7625


//  Id pregunta: 7650 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[35]= new Array();
 choices[35][0] = "El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85001 de la NISO (National Information Standards Organization).";
 choices[35][1] = "Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML (Hypertext Markup Language).";
 choices[35][2] = "Su nivel b&aacute;sico contiene 15 elementos sobre metadatos.";
 choices[35][3] = "Es una iniciativa de la W3C (World Wide Web Consortium).";
 answers[35] = 3;
 units[35] = ['68'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7650. Map 2006";
 preguntaids[35] = 7650


//  Id pregunta: 7715 Año de creación de pregunta: 2010
 questions[36]= "37)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente-servidor, est&aacute; encuadrado COM+ (Common Object Model Plus)?";
 choices[36]= new Array();
 choices[36][0] = "Modelos basados en llamadas a funciones (sockets).";
 choices[36][1] = "Modelos basados en llamadas a procedimientos remotos (RPC).";
 choices[36][2] = "Modelos basados en llamadas a objetos distribuidos.";
 choices[36][3] = "Modelos basados en agentes m&oacute;viles.";
 answers[36] = 2;
 units[36] = ['55'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7715. Map 2007";
 preguntaids[36] = 7715


//  Id pregunta: 7676 Año de creación de pregunta: 2010
 questions[37]= "38)  El est&aacute;ndar WMS (&laquo;Web Map Service&raquo;), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?";
 choices[37]= new Array();
 choices[37][0] = "ISO (International Standards Organization).";
 choices[37][1] = "OGC (Open Geospatial Consortium).";
 choices[37][2] = "FGDC (Federal Geographic Data Committee).";
 choices[37][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[37] = 1;
 units[37] = ['71'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7676. Map 2007";
 preguntaids[37] = 7676


//  Id pregunta: 7646 Año de creación de pregunta: 2010
 questions[38]= "39)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[38]= new Array();
 choices[38][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia.";
 choices[38][1] = "Los dos son equivalentes.";
 choices[38][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico.";
 choices[38][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento.";
 answers[38] = 3;
 units[38] = ['68'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7646. Map 2006";
 preguntaids[38] = 7646


//  Id pregunta: 7791 Año de creación de pregunta: 2010
 questions[39]= "40)  WSDL son las siglas de:";
 choices[39]= new Array();
 choices[39][0] = "Web Services Description Language.";
 choices[39][1] = "Web Services Data Language.";
 choices[39][2] = "Web SOAP Definition Language.";
 choices[39][3] = "Web Services Distributed Language.";
 answers[39] = 0;
 units[39] = ['55'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7791. ";
 preguntaids[39] = 7791


//  Id pregunta: 7619 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[40]= new Array();
 choices[40][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[40][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta.";
 choices[40][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International Standards Organization/International Electrotechnical Commission).";
 choices[40][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[40] = 1;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7619. Map 2006";
 preguntaids[40] = 7619


//  Id pregunta: 7681 Año de creación de pregunta: 2010
 questions[41]= "42)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es un dispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[41]= new Array();
 choices[41][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse solo una vez y asegurar razonablemente su secreto.";
 choices[41][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[41][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros.";
 choices[41][3] = "Que el dispositivo utilizado no altere los datos o el documento que deba firmarse ni impida que este se muestre al firmante antes del proceso de firma.";
 answers[41] = 1;
 units[41] = ['77'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7681. Map 2007";
 preguntaids[41] = 7681


//  Id pregunta: 7639 Año de creación de pregunta: 2010
 questions[42]= "43)  Los certificados de clave p&uacute;blica:";
 choices[42]= new Array();
 choices[42][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[42][1] = "Ocupan m&aacute;s de 100 kbytes.";
 choices[42][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest Shamir Adleman).";
 choices[42][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[42] = 0;
 units[42] = ['77'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7639. Map 2006";
 preguntaids[42] = 7639


//  Id pregunta: 7677 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?";
 choices[43]= new Array();
 choices[43][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;ar campa&ntilde;as de marketing directo on-line.";
 choices[43][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas.";
 choices[43][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica.";
 choices[43][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un cat&aacute;logo on-line de los productos disponibles para la venta.";
 answers[43] = 0;
 units[43] = ['69'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7677. Map 2007";
 preguntaids[43] = 7677


//  Id pregunta: 7776 Año de creación de pregunta: 2010
 questions[44]= "45)  &iquest;Cu&aacute;l NO es un formato espec&iacute;fico de factura electr&oacute;nica?";
 choices[44]= new Array();
 choices[44][0] = "UBL.";
 choices[44][1] = "EDI.";
 choices[44][2] = "FacturaDTD.";
 choices[44][3] = "CCI-AEAT.";
 answers[44] = 2;
 units[44] = ['75'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7776. ";
 preguntaids[44] = 7776


//  Id pregunta: 7686 Año de creación de pregunta: 2010
 questions[45]= "46)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[45]= new Array();
 choices[45][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[45][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[45][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[45][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[45] = 3;
 units[45] = ['77'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7686. Map 2007";
 preguntaids[45] = 7686


//  Id pregunta: 7655 Año de creación de pregunta: 2010
 questions[46]= "47)  Seg&uacute;n se establece en la Gu&iacute;a de Certificaci&oacute;n para Sistemas de e-Learning basados en Web de AICC (Aviation Industry Computer-based Training Committee), &iquest;cu&aacute;l es la longitud m&aacute;xima de la URL (Uniform Resource Locator) de arranque de una unidad de asignaci&oacute;n en caracteres?";
 choices[46]= new Array();
 choices[46][0] = "64";
 choices[46][1] = "128";
 choices[46][2] = "256";
 choices[46][3] = "1024";
 answers[46] = 2;
 units[46] = ['70'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7655. Map 2006";
 preguntaids[46] = 7655


//  Id pregunta: 7706 Año de creación de pregunta: 2010
 questions[47]= "48)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP, etc., &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[47]= new Array();
 choices[47][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[47][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[47][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[47][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico, lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[47] = 3;
 units[47] = ['72'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7706. Map 2007";
 preguntaids[47] = 7706


//  Id pregunta: 7747 Año de creación de pregunta: 2010
 questions[48]= "49)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[48]= new Array();
 choices[48][0] = "Proviene del SGML.";
 choices[48][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscrito exclusivamente a Internet.";
 choices[48][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano.";
 choices[48][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubran diferentes necesidades.";
 answers[48] = 2;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7747. ";
 preguntaids[48] = 7747


//  Id pregunta: 7783 Año de creación de pregunta: 2010
 questions[49]= "50)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[49]= new Array();
 choices[49][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[49][1] = "Se puede implementar mediante criptograf&iacute;a de clave sim&eacute;trica.";
 choices[49][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC.";
 choices[49][3] = "La firma ciega (Blind Signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[49] = 1;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7783. ";
 preguntaids[49] = 7783


//  Id pregunta: 7805 Año de creación de pregunta: 2010
 questions[50]= "51)  El formato GIF (Graphic Interchange Format):";
 choices[50]= new Array();
 choices[50][0] = "Almacena 8 bits por p&iacute;xel.";
 choices[50][1] = "Almacena 32 bits por p&iacute;xel.";
 choices[50][2] = "Admite una paleta de hasta 512 colores.";
 choices[50][3] = "No admite el algoritmo de compresi&oacute;n LZW (Lempel- Ziv-Welch).";
 answers[50] = 0;
 units[50] = ['53'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7805. ";
 preguntaids[50] = 7805


//  Id pregunta: 7758 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[51]= new Array();
 choices[51][0] = "540.000 p&iacute;xeles.";
 choices[51][1] = "3.240.000 p&iacute;xeles.";
 choices[51][2] = "10.800 p&iacute;xeles.";
 choices[51][3] = "1.800 p&iacute;xeles.";
 answers[51] = 1;
 units[51] = ['53'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7758. ";
 preguntaids[51] = 7758


//  Id pregunta: 7638 Año de creación de pregunta: 2010
 questions[52]= "53)  En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[52]= new Array();
 choices[52][0] = "Mediante un modelo de inferencia bayesiana.";
 choices[52][1] = "Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh.";
 choices[52][2] = "Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer.";
 choices[52][3] = "No hay tratamiento de la incertidumbre.";
 answers[52] = 2;
 units[52] = ['67'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7638. Map 2006";
 preguntaids[52] = 7638


//  Id pregunta: 7714 Año de creación de pregunta: 2010
 questions[53]= "54)  Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[53]= new Array();
 choices[53][0] = "C2.";
 choices[53][1] = "C3.";
 choices[53][2] = "C5.";
 choices[53][3] = "C6.";
 answers[53] = 1;
 units[53] = ['78'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7714. Map 2007";
 preguntaids[53] = 7714


//  Id pregunta: 7615 Año de creación de pregunta: 2010
 questions[54]= "55)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[54]= new Array();
 choices[54][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &laquo;Permitir ordenaci&oacute;n&raquo; en el Generador de propiedades y generar una rutina de tratamiento del evento SortCommand.";
 choices[54][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculados por cada control en las plantillas del control DataList.";
 choices[54][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador de propiedades.";
 choices[54][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del control DataGrid.";
 answers[54] = 2;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7615. Map 2006";
 preguntaids[54] = 7615


//  Id pregunta: 7708 Año de creación de pregunta: 2010
 questions[55]= "56)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[55]= new Array();
 choices[55][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la clave primaria de otra relaci&oacute;n.";
 choices[55][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla.";
 choices[55][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas.";
 choices[55][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena pueden ser nulos.";
 answers[55] = 3;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7708. Map 2007";
 preguntaids[55] = 7708


//  Id pregunta: 7728 Año de creación de pregunta: 2010
 questions[56]= "57)  RDF (Resource Description Framework) es un:";
 choices[56]= new Array();
 choices[56][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la web.";
 choices[56][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos.";
 choices[56][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles.";
 choices[56][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n.";
 answers[56] = 0;
 units[56] = ['68'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7728. Map 2007";
 preguntaids[56] = 7728


//  Id pregunta: 7779 Año de creación de pregunta: 2010
 questions[57]= "58)  El XSLT transforma:";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo de XML a XML.";
 choices[57][1] = "De XML a otro documento.";
 choices[57][2] = "S&oacute;lo de XML a HTML.";
 choices[57][3] = "De un documento a XML.";
 answers[57] = 1;
 units[57] = ['74'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7779. ";
 preguntaids[57] = 7779


//  Id pregunta: 7724 Año de creación de pregunta: 2010
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[58]= new Array();
 choices[58][0] = "Regla de la no inversi&oacute;n.";
 choices[58][1] = "Regla de la no concurrencia.";
 choices[58][2] = "Regla de la restricci&oacute;n.";
 choices[58][3] = "Regla de la no replicaci&oacute;n de informaci&oacute;n.";
 answers[58] = 0;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7724. Map 2007";
 preguntaids[58] = 7724


//  Id pregunta: 7664 Año de creación de pregunta: 2010
 questions[59]= "60)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (&laquo;Datawarehouses&raquo;):";
 choices[59]= new Array();
 choices[59][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[59][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[59][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[59][3] = "Son colecciones de datos.";
 answers[59] = 1;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7664. Map 2007";
 preguntaids[59] = 7664


//  Id pregunta: 7627 Año de creación de pregunta: 2010
 questions[60]= "61)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Para representar un fichero de 2 MB:";
 choices[60]= new Array();
 choices[60][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[60][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[60][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[60][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[60] = 2;
 units[60] = ['57'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7627. Map 2006";
 preguntaids[60] = 7627


//  Id pregunta: 7635 Año de creación de pregunta: 2010
 questions[61]= "62)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase applet:";
 choices[61]= new Array();
 choices[61][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start.";
 choices[61][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n.";
 choices[61][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet.";
 choices[61][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente.";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7635. Map 2006";
 preguntaids[61] = 7635


//  Id pregunta: 7750 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)?";
 choices[62]= new Array();
 choices[62][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica.";
 choices[62][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido.";
 choices[62][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado.";
 choices[62][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet.";
 answers[62] = 3;
 units[62] = ['78'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7750. ";
 preguntaids[62] = 7750


//  Id pregunta: 7656 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization/International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas y protocolos de comunicaci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "7816";
 choices[63][1] = "7816-3.";
 choices[63][2] = "7816-4.";
 choices[63][3] = "7816-5.";
 answers[63] = 1;
 units[63] = ['78'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7656. Map 2006";
 preguntaids[63] = 7656


//  Id pregunta: 7723 Año de creación de pregunta: 2010
 questions[64]= "65)  El algoritmo de cifrado IDEA es del tipo:";
 choices[64]= new Array();
 choices[64][0] = "Asim&eacute;trico.";
 choices[64][1] = "Sim&eacute;trico por bloques.";
 choices[64][2] = "Sim&eacute;trico de flujo.";
 choices[64][3] = "Sim&eacute;trico de resumen (hash).";
 answers[64] = 3;
 units[64] = ['76'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7723. Map 2007";
 preguntaids[64] = 7723


//  Id pregunta: 7719 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?";
 choices[65]= new Array();
 choices[65][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[65][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias.";
 choices[65][2] = "RSS es parte de la familia de los formatos XML.";
 choices[65][3] = "Es un acr&oacute;nimo de &laquo;Really Simple Syndication&raquo;.";
 answers[65] = 1;
 units[65] = ['68'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 7719. Map 2007";
 preguntaids[65] = 7719


//  Id pregunta: 7734 Año de creación de pregunta: 2010
 questions[66]= "67)  En Java 2, el operador &gt;&gt;:";
 choices[66]= new Array();
 choices[66][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas.";
 choices[66][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo).";
 choices[66][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo).";
 choices[66][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos.";
 answers[66] = 2;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7734. ";
 preguntaids[66] = 7734


//  Id pregunta: 7674 Año de creación de pregunta: 2010
 questions[67]= "68)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[67]= new Array();
 choices[67][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute.";
 choices[67][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentes plataformas.";
 choices[67][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware.";
 choices[67][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &laquo;Java Bytecode&raquo;.";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7674. Map 2007";
 preguntaids[67] = 7674


//  Id pregunta: 7697 Año de creación de pregunta: 2010
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[68]= new Array();
 choices[68][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[68][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[68][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[68][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[68] = 1;
 units[68] = ['72'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7697. Map 2007";
 preguntaids[68] = 7697


//  Id pregunta: 7725 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?";
 choices[69]= new Array();
 choices[69][0] = "Enteros.";
 choices[69][1] = "Booleanos.";
 choices[69][2] = "Cadenas.";
 choices[69][3] = "Tensores.";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7725. Map 2007";
 preguntaids[69] = 7725


//  Id pregunta: 7609 Año de creación de pregunta: 2010
 questions[70]= "71)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[70]= new Array();
 choices[70][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica.";
 choices[70][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos.";
 choices[70][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados.";
 choices[70][3] = "XML Schema no tiene tipos predefinidos.";
 answers[70] = 1;
 units[70] = ['68'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7609. Map 2006";
 preguntaids[70] = 7609


//  Id pregunta: 7785 Año de creación de pregunta: 2010
 questions[71]= "72)  En java, el atributo &laquo;final&raquo; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[71]= new Array();
 choices[71][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella.";
 choices[71][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas.";
 choices[71][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set.";
 choices[71][3] = "Que forma parte del interface que implementa la clase.";
 answers[71] = 1;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 7785. ";
 preguntaids[71] = 7785


//  Id pregunta: 7687 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un medio de pago?";
 choices[72]= new Array();
 choices[72][0] = "Simultaneidad.";
 choices[72][1] = "Interactividad.";
 choices[72][2] = "No repudio.";
 choices[72][3] = "Automatizaci&oacute;n.";
 answers[72] = 2;
 units[72] = ['75'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7687. Map 2007";
 preguntaids[72] = 7687


//  Id pregunta: 7781 Año de creación de pregunta: 2010
 questions[73]= "74)  Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[73]= new Array();
 choices[73][0] = "Firma inv&aacute;lida.";
 choices[73][1] = "Validaci&oacute;n incompleta de la firma.";
 choices[73][2] = "Firma v&aacute;lida.";
 choices[73][3] = "Firma suspendida.";
 answers[73] = 1;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7781. ";
 preguntaids[73] = 7781


//  Id pregunta: 7742 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?";
 choices[74]= new Array();
 choices[74][0] = "GIMP.";
 choices[74][1] = "Jetspeed.";
 choices[74][2] = "Konqueror.";
 choices[74][3] = "Eclipse.";
 answers[74] = 0;
 units[74] = ['66'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7742. ";
 preguntaids[74] = 7742


