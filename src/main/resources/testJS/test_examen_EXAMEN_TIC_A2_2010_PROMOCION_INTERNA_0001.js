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
//  Id pregunta: 8115 Año de creación de pregunta: 2011
 questions[0]= "1)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[0]= new Array();
 choices[0][0] = "Debe disponer de puertas de acceso grandes.";
 choices[0][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[0][2] = "Debe evitar tener ventanas.";
 choices[0][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[0] = 1;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8115. Examen TIC A2 2010";
 preguntaids[0] = 8115


//  Id pregunta: 8144 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[1]= new Array();
 choices[1][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[1][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[1][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[1][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[1] = 0;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8144. Examen TIC A2 2010 interna";
 preguntaids[1] = 8144


//  Id pregunta: 8164 Año de creación de pregunta: 2011
 questions[2]= "3)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[2]= new Array();
 choices[2][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[2][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[2][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[2][3] = "No existen los ficheros WAR en J2EE";
 answers[2] = 1;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8164. Examen TIC A2 2010 interna";
 preguntaids[2] = 8164


//  Id pregunta: 8172 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[3]= new Array();
 choices[3][0] = "Uso equiparable";
 choices[3][1] = "Uso flexible";
 choices[3][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[3][3] = "Robusto";
 answers[3] = 3;
 units[3] = ['42'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 8172. Examen TIC A2 2010 interna";
 preguntaids[3] = 8172


//  Id pregunta: 8150 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[4]= new Array();
 choices[4][0] = "2.4 GHz y hasta 11 Mbps";
 choices[4][1] = "5 GHz y hasta 54Mbps.";
 choices[4][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[4][3] = "5 GHz y hasta 11 Mbps";
 answers[4] = 1;
 units[4] = ['108'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8150. Examen TIC A2 2010 interna";
 preguntaids[4] = 8150


//  Id pregunta: 8113 Año de creación de pregunta: 2011
 questions[5]= "6)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[5]= new Array();
 choices[5][0] = "HTTP.";
 choices[5][1] = "UDP.";
 choices[5][2] = "TCP.";
 choices[5][3] = "IP.";
 answers[5] = 1;
 units[5] = ['105'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8113. Examen TIC A2 2010 interna";
 preguntaids[5] = 8113


//  Id pregunta: 8136 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[6]= new Array();
 choices[6][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[6][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[6][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[6][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[6] = 3;
 units[6] = ['107'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8136. Examen TIC A2 2010 interna";
 preguntaids[6] = 8136


//  Id pregunta: 8157 Año de creación de pregunta: 2010
 questions[7]= "8)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[7]= new Array();
 choices[7][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[7][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[7][2] = "El intercambio de claves Diffie-Hellman.";
 choices[7][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[7] = 2;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8157. Examen TIC A2 2010 interna";
 preguntaids[7] = 8157


//  Id pregunta: 8151 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[8]= new Array();
 choices[8][0] = "IEEE 802.11 h";
 choices[8][1] = "IEEE 802.11 l";
 choices[8][2] = "IEEE 802.11 p";
 choices[8][3] = "IEEE 802 11 r.";
 answers[8] = 3;
 units[8] = ['108'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8151. Examen TIC A2 2010 interna";
 preguntaids[8] = 8151


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


//  Id pregunta: 8154 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[10]= new Array();
 choices[10][0] = "ISDB.";
 choices[10][1] = "MPEG-2";
 choices[10][2] = "DVB-T";
 choices[10][3] = "EDTV";
 answers[10] = 2;
 units[10] = ['115'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8154. Examen TIC A2 2010 interna";
 preguntaids[10] = 8154


//  Id pregunta: 8153 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[11]= new Array();
 choices[11][0] = "2007";
 choices[11][1] = "2008";
 choices[11][2] = "2009";
 choices[11][3] = "2010";
 answers[11] = 3;
 units[11] = ['115'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8153. Examen TIC A2 2010 interna";
 preguntaids[11] = 8153


//  Id pregunta: 8137 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[12]= new Array();
 choices[12][0] = "4 bits.";
 choices[12][1] = "5 bits.";
 choices[12][2] = "32 bits.";
 choices[12][3] = "258 bits.";
 answers[12] = 2;
 units[12] = ['107'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8137. Examen TIC A2 2010 interna";
 preguntaids[12] = 8137


//  Id pregunta: 8129 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[13]= new Array();
 choices[13][0] = "Diagrama de Clases.";
 choices[13][1] = "Flujograma de Sistemas.";
 choices[13][2] = "Flujograma de Programas.";
 choices[13][3] = "Diagrama de Flujo de Datos.";
 answers[13] = 2;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 8129. Examen TIC A2 2010 interna";
 preguntaids[13] = 8129


//  Id pregunta: 8175 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[14]= new Array();
 choices[14][0] = "JDataMiner.";
 choices[14][1] = "Cubos OLAP de Excel.";
 choices[14][2] = "VNC.";
 choices[14][3] = "Extract to Learnt by SQLServer.";
 answers[14] = 1;
 units[14] = ['72'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8175. Examen TIC A2 2010 interna";
 preguntaids[14] = 8175


//  Id pregunta: 8178 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[15]= new Array();
 choices[15][0] = "ISO/IEC 9126";
 choices[15][1] = "ISO 8859";
 choices[15][2] = "ISO 14000";
 choices[15][3] = "ISO/IEC 14496";
 answers[15] = 0;
 units[15] = ['42'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 8178. Examen TIC A2 2010 interna";
 preguntaids[15] = 8178


//  Id pregunta: 8131 Año de creación de pregunta: 2011
 questions[16]= "17)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[16]= new Array();
 choices[16][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[16][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[16][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[16][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[16] = 2;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 8131. Examen TIC A2 2010 interna";
 preguntaids[16] = 8131


//  Id pregunta: 8105 Año de creación de pregunta: 2011
 questions[17]= "18)  En la traslaci&oacute;n del modelo OSI para su aplicaci&oacute;n a las redes de &aacute;rea local (LAN), es cierto que:";
 choices[17]= new Array();
 choices[17][0] = "El nivel de enlace se subdivide en subnivel LLC y subnivel MAC.";
 choices[17][1] = "El nivel f&iacute;sico se subdivide en subnivel LLC y subnivel MAC.";
 choices[17][2] = "Se establecen los tres niveles siguientes: nivel f&iacute;sico (que pasa a denominarse nivel LLC), nivel MAC y nivel de enlace.";
 choices[17][3] = "Los niveles f&iacute;sico y de enlace pasan de denominarse, respectivamente, nivel LLC y nivel MAC";
 answers[17] = 0;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8105. Examen TIC A2 2010 interna";
 preguntaids[17] = 8105


//  Id pregunta: 8112 Año de creación de pregunta: 2011
 questions[18]= "19)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[18]= new Array();
 choices[18][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[18][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[18][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[18][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[18] = 0;
 units[18] = ['105', '109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8112. Examen TIC A2 2010 interna";
 preguntaids[18] = 8112


//  Id pregunta: 8138 Año de creación de pregunta: 2011
 questions[19]= "20)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[19]= new Array();
 choices[19][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[19][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[19][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[19][3] = "Son firewalls que operan en el nivel de red.";
 answers[19] = 3;
 units[19] = ['119'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8138. Examen TIC A2 2010 interna";
 preguntaids[19] = 8138


//  Id pregunta: 8108 Año de creación de pregunta: 2011
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[20]= new Array();
 choices[20][0] = "SetRequest";
 choices[20][1] = "GetBulkRequest";
 choices[20][2] = "GetNextRequest";
 choices[20][3] = "Trap";
 answers[20] = 1;
 units[20] = ['114'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8108. Examen TIC A2 2010 interna";
 preguntaids[20] = 8108


//  Id pregunta: 8188 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Qu&eacute; tipos de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[21]= new Array();
 choices[21][0] = "Correctivo, evolutivo y adaptativo";
 choices[21][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[21][2] = "Correctivo y evolutivo";
 choices[21][3] = "Correctivo, evolutivo y perfectivo.";
 answers[21] = 2;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8188. Examen TIC A2 2010 interna";
 preguntaids[21] = 8188


//  Id pregunta: 8107 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[22]= new Array();
 choices[22][0] = "London";
 choices[22][1] = "Liverpool.";
 choices[22][2] = "Manchester.";
 choices[22][3] = "Boston.";
 answers[22] = 2;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8107. Examen TIC A2 2010 interna";
 preguntaids[22] = 8107


//  Id pregunta: 8143 Año de creación de pregunta: 2011
 questions[23]= "24)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[23]= new Array();
 choices[23][0] = "RTF.";
 choices[23][1] = "RML.";
 choices[23][2] = "OWL.";
 choices[23][3] = "Jabsys.";
 answers[23] = 2;
 units[23] = ['125'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8143. Examen TIC A2 2010 interna";
 preguntaids[23] = 8143


//  Id pregunta: 8130 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[24]= new Array();
 choices[24][0] = "El Diccionario de Datos.";
 choices[24][1] = "El Diagrama de Flujo de Datos.";
 choices[24][2] = "Las especificaciones de procesos.";
 choices[24][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[24] = 3;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 8130. Examen TIC A2 2010 interna";
 preguntaids[24] = 8130


//  Id pregunta: 8182 Año de creación de pregunta: 2011
 questions[25]= "26)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[25]= new Array();
 choices[25][0] = "tar con los par&aacute;metros cvf";
 choices[25][1] = "tar con los par&aacute;metros tvf";
 choices[25][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[25][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[25] = 1;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8182. Examen TIC A2 2010 interna";
 preguntaids[25] = 8182


//  Id pregunta: 8145 Año de creación de pregunta: 2011
 questions[26]= "27)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[26]= new Array();
 choices[26][0] = "DSLAM";
 choices[26][1] = "DSLM";
 choices[26][2] = "ADSLM";
 choices[26][3] = "ADSLAM";
 answers[26] = 0;
 units[26] = ['108'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8145. Examen TIC A2 2010 interna";
 preguntaids[26] = 8145


//  Id pregunta: 8189 Año de creación de pregunta: 2011
 questions[27]= "28)  El tipo de mantenimiento de equipos que se realiza en las instalaciones del prestador del servicio de mantenimiento y NO en las Instalaciones del cliente, se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Out-side";
 choices[27][1] = "Off-side";
 choices[27][2] = "In-site";
 choices[27][3] = "On-site";
 answers[27] = 3;
 units[27] = ['26'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8189. Examen TIC A2 2010 interna";
 preguntaids[27] = 8189


//  Id pregunta: 8179 Año de creación de pregunta: 2011
 questions[28]= "29)  En el contexto de las tareas de explotaci&oacute;n de sistemas de informaci&oacute;n, se denominan tareas u operaciones &quot;lights-out&quot; a:";
 choices[28]= new Array();
 choices[28][0] = "Las tareas u operaciones automatizadas, que se llevan a cabo sin intervenci&oacute;n humana, de forma desatendida";
 choices[28][1] = "Las tareas incluidas en el plan de contingencias, a llevar a cabo en caso de corte del suminstro el&eacute;ctrico.";
 choices[28][2] = "Las tareas que no se pueden automatizar, por lo que necesariamente requieren personal para su realizaci&oacute;n.";
 choices[28][3] = "Las tareas criticas, que requieren su Inclusi&oacute;n especifica en el plan de contingencias, en una localizaci&oacute;n f&iacute;sica alternativa a la habitual.";
 answers[28] = 0;
 units[28] = ['30'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 8179. Examen TIC A2 2010 interna";
 preguntaids[28] = 8179


//  Id pregunta: 8142 Año de creación de pregunta: 2011
 questions[29]= "30)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[29]= new Array();
 choices[29][0] = "Wiki.";
 choices[29][1] = "Mashup.";
 choices[29][2] = "Blog.";
 choices[29][3] = "Agregador o feeder.";
 answers[29] = 0;
 units[29] = ['125'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8142. Examen TIC A2 2010 interna";
 preguntaids[29] = 8142


//  Id pregunta: 8111 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[30]= new Array();
 choices[30][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[30][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[30][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[30][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[30] = 1;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8111. Examen TIC A2 2010 interna";
 preguntaids[30] = 8111


//  Id pregunta: 8166 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[31]= new Array();
 choices[31][0] = "Javascripts";
 choices[31][1] = "Applets";
 choices[31][2] = "JSP";
 choices[31][3] = "VisualScript";
 answers[31] = 2;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8166. Examen TIC A2 2010 interna";
 preguntaids[31] = 8166


//  Id pregunta: 8114 Año de creación de pregunta: 2011
 questions[32]= "33)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[32]= new Array();
 choices[32][0] = "Gesti&oacute;n de riesgos.";
 choices[32][1] = "An&aacute;lisis de salvaguardias.";
 choices[32][2] = "An&aacute;lisis de riesgos.";
 choices[32][3] = "Gesti&oacute;n de salvaguardias.";
 answers[32] = 2;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 8114. Examen TIC A2 2010 interna";
 preguntaids[32] = 8114


//  Id pregunta: 8190 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[33]= new Array();
 choices[33][0] = "La paridad est&aacute; en un disco dedicado";
 choices[33][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[33][2] = "Tiene un bajo coste de redundancia";
 choices[33][3] = "Se necesitan al menos 3 discos";
 answers[33] = 0;
 units[33] = ['53'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8190. Examen TIC A2 2010 interna";
 preguntaids[33] = 8190


//  Id pregunta: 8128 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida tiene en cuenta el an&aacute;lisis de riesgos?";
 choices[34]= new Array();
 choices[34][0] = "Extreme Programming.";
 choices[34][1] = "Modelo de ciclo de vida en cascada";
 choices[34][2] = "El modelo de ciclo de vida en V";
 choices[34][3] = "Modelo de ciclo de vida en espiral";
 answers[34] = 3;
 units[34] = ['82'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 8128. Examen TIC A2 2010 interna";
 preguntaids[34] = 8128


//  Id pregunta: 8158 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[35]= new Array();
 choices[35][0] = "ITU G.992.1.";
 choices[35][1] = "ITU G.992.2";
 choices[35][2] = "ITU G.992.3.";
 choices[35][3] = "ITUG.992.4.";
 answers[35] = 1;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8158. Examen TIC A2 2010 interna";
 preguntaids[35] = 8158


//  Id pregunta: 8167 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[36]= new Array();
 choices[36][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[36][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[36][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[36][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[36] = 2;
 units[36] = ['63'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8167. Examen TIC A2 2010 interna";
 preguntaids[36] = 8167


//  Id pregunta: 8177 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[37]= new Array();
 choices[37][0] = "Microstrategy OLAP Services.";
 choices[37][1] = "MDX OLAP server.";
 choices[37][2] = "Oracle Database OLAP.";
 choices[37][3] = "Mondrian OLAP Server.";
 answers[37] = 1;
 units[37] = ['72'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8177. Examen TIC A2 2010 interna";
 preguntaids[37] = 8177


//  Id pregunta: 8104 Año de creación de pregunta: 2011
 questions[38]= "39)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[38]= new Array();
 choices[38][0] = "Bluetooth.";
 choices[38][1] = "Wi-Fi.";
 choices[38][2] = "Wimax.";
 choices[38][3] = "Wireless LAN.";
 answers[38] = 2;
 units[38] = ['108'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8104. Examen TIC A2 2010 interna";
 preguntaids[38] = 8104


//  Id pregunta: 8147 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[39]= new Array();
 choices[39][0] = "SHDSL";
 choices[39][1] = "HDSL";
 choices[39][2] = "ADSL2";
 choices[39][3] = "VDSL";
 answers[39] = 3;
 units[39] = ['108'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8147. Examen TIC A2 2010 interna";
 preguntaids[39] = 8147


//  Id pregunta: 8102 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[40]= new Array();
 choices[40][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[40][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[40][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[40][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[40] = 1;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8102. Examen TIC A2 2010 interna";
 preguntaids[40] = 8102


//  Id pregunta: 8127 Año de creación de pregunta: 2011
 questions[41]= "42)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA:";
 choices[41]= new Array();
 choices[41][0] = "Lluirex - Valencia";
 choices[41][1] = "MAX - Madrid";
 choices[41][2] = "LinKat - Catalu&ntilde;a";
 choices[41][3] = "mEDUxa - Baleares";
 answers[41] = 3;
 units[41] = ['66'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8127. Examen TIC A2 2010 interna";
 preguntaids[41] = 8127


//  Id pregunta: 8180 Año de creación de pregunta: 2011
 questions[42]= "43)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "chmod 766 ejemplo.txt";
 choices[42][1] = "chmod 751 ejemplo.txt";
 choices[42][2] = "chmod 761 ejemplo.txt";
 choices[42][3] = "chmod 754 ejemplo.txt";
 answers[42] = 3;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8180. Examen TIC A2 2010 interna";
 preguntaids[42] = 8180


//  Id pregunta: 8191 Año de creación de pregunta: 2011
 questions[43]= "44)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[43]= new Array();
 choices[43][0] = "Tienen un formato propietario";
 choices[43][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[43][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[43][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[43] = 2;
 units[43] = ['53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8191. Examen TIC A2 2010 interna";
 preguntaids[43] = 8191


//  Id pregunta: 8156 Año de creación de pregunta: 2011
 questions[44]= "45)  1 &iquest;En qu&eacute; RFC se describe el modelo de seguridad basado en usuario (USM o User-basad Security Model) para la versi&oacute;n 3 de SNMP?";
 choices[44]= new Array();
 choices[44][0] = "RFC 1157.";
 choices[44][1] = "RFC 1441";
 choices[44][2] = "RFC 3414";
 choices[44][3] = "RFC 3854";
 answers[44] = 2;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8156. Examen TIC A2 2010 interna";
 preguntaids[44] = 8156


//  Id pregunta: 8135 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[45]= new Array();
 choices[45][0] = "Estado del enlace.";
 choices[45][1] = "Vector distancia.";
 choices[45][2] = "Inundaci&oacute;n de paquetes.";
 choices[45][3] = "Cubeta con goteo.";
 answers[45] = 3;
 units[45] = ['99'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 8135. Examen TIC A2 2010 interna";
 preguntaids[45] = 8135


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[46]= new Array();
 choices[46][0] = "Apache Tomcat";
 choices[46][1] = "JBOSS";
 choices[46][2] = "WebSphere Application Server";
 choices[46][3] = "Glassfish";
 answers[46] = 0;
 units[46] = ['63', '64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[46] = 8163


//  Id pregunta: 8186 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[47]= new Array();
 choices[47][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[47][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[47][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[47][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[47] = 0;
 units[47] = ['60', '61'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8186. Examen TIC A2 2010 interna";
 preguntaids[47] = 8186


//  Id pregunta: 8110 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[48]= new Array();
 choices[48][0] = "169";
 choices[48][1] = "161";
 choices[48][2] = "171";
 choices[48][3] = "179";
 answers[48] = 1;
 units[48] = ['114'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8110. Examen TIC A2 2010 interna";
 preguntaids[48] = 8110


//  Id pregunta: 8103 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[49]= new Array();
 choices[49][0] = "Monomodo";
 choices[49][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[49][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual.";
 choices[49][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[49] = 0;
 units[49] = ['106'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8103. Examen TIC A2 2010 interna";
 preguntaids[49] = 8103


//  Id pregunta: 8152 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[50]= new Array();
 choices[50][0] = "3DES";
 choices[50][1] = "SEAL";
 choices[50][2] = "AES";
 choices[50][3] = "RSA";
 answers[50] = 1;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8152. Examen TIC A2 2010 interna";
 preguntaids[50] = 8152


//  Id pregunta: 8146 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[51][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[51][2] = "PCM (Pulse-Code Modulation).";
 choices[51][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[51] = 2;
 units[51] = ['122'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8146. Examen TIC A2 2010 interna";
 preguntaids[51] = 8146


//  Id pregunta: 8139 Año de creación de pregunta: 2011
 questions[52]= "53)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[52]= new Array();
 choices[52][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[52][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[52][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[52][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[52] = 3;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8139. Examen TIC A2 2010 interna";
 preguntaids[52] = 8139


//  Id pregunta: 8141 Año de creación de pregunta: 2011
 questions[53]= "54)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[53]= new Array();
 choices[53][0] = "Modo t&uacute;nel.";
 choices[53][1] = "Modo transporte.";
 choices[53][2] = "Modo encapsulado.";
 choices[53][3] = "Modo transparente.";
 answers[53] = 1;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8141. Examen TIC A2 2010 interna";
 preguntaids[53] = 8141


//  Id pregunta: 8165 Año de creación de pregunta: 2011
 questions[54]= "55)  La librer&iacute;a Java API for XML Processing (JAXP):";
 choices[54]= new Array();
 choices[54][0] = "Permite tratar documentos XML tanto a trav&eacute;s de! modelo SAX como a trav&eacute;s del modelo DOM.";
 choices[54][1] = "Trabaja &uacute;nicamente con el modelo DOM.";
 choices[54][2] = "No existe tal librer&iacute;a en el lenguaje Java";
 choices[54][3] = "No tiene una Implementaci&oacute;n propia para el parser y obligatoriamente debe utilizar el parser del modelo DOM";
 answers[54] = 0;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8165. Examen TIC A2 2010 interna";
 preguntaids[54] = 8165


//  Id pregunta: 8184 Año de creación de pregunta: 2011
 questions[55]= "56)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[55]= new Array();
 choices[55][0] = "Administraci&oacute;n de seguridad";
 choices[55][1] = "Programaci&oacute;n de aplicaciones";
 choices[55][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[55][3] = "Aseguramiento de la calidad";
 answers[55] = 1;
 units[55] = ['30'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 8184. Examen TIC A2 2010 interna";
 preguntaids[55] = 8184


//  Id pregunta: 8132 Año de creación de pregunta: 2011
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[56]= new Array();
 choices[56][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[56][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[56][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[56][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[56] = 2;
 units[56] = ['60', '61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8132. Examen TIC A2 2010 interna";
 preguntaids[56] = 8132


//  Id pregunta: 8176 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[57]= new Array();
 choices[57][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[57][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[57][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad normal y marca &eacute;stos como copiados.";
 choices[57][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad normal, y marca todos estos archivos como copiados.";
 answers[57] = 3;
 units[57] = ['53', '100'];
 blocks[57] = ['B2', 'B3'];
 comments[57] = "Id Pregunta: 8176. Examen TIC A2 2010 interna";
 preguntaids[57] = 8176


//  Id pregunta: 8149 Año de creación de pregunta: 2011
 questions[58]= "59)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[58]= new Array();
 choices[58][0] = "Permite el uso de antenas MIMO";
 choices[58][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[58][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[58][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[58] = 0;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8149. Examen TIC A2 2010 interna";
 preguntaids[58] = 8149


//  Id pregunta: 8106 Año de creación de pregunta: 2011
 questions[59]= "60)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[59]= new Array();
 choices[59][0] = "IEEE 802.16-2004";
 choices[59][1] = "IEEE 802.16d";
 choices[59][2] = "IEEE 802.16e.";
 choices[59][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[59] = 2;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8106. Examen TIC A2 2010 interna";
 preguntaids[59] = 8106


//  Id pregunta: 8171 Año de creación de pregunta: 2011
 questions[60]= "61)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[60]= new Array();
 choices[60][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[60][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[60][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[60][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[60] = 0;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 8171. Examen TIC A2 2010 interna";
 preguntaids[60] = 8171


//  Id pregunta: 8173 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP?";
 choices[61]= new Array();
 choices[61][0] = "WSDL";
 choices[61][1] = "UDDI";
 choices[61][2] = "XML";
 choices[61][3] = "REST";
 answers[61] = 0;
 units[61] = ['55'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8173. Examen TIC A2 2010 interna";
 preguntaids[61] = 8173


//  Id pregunta: 8169 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[62]= new Array();
 choices[62][0] = "JavaScript";
 choices[62][1] = "JavaBeans";
 choices[62][2] = "Servlets";
 choices[62][3] = "JSP";
 answers[62] = 0;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8169. Examen TIC A2 2010 interna";
 preguntaids[62] = 8169


//  Id pregunta: 8140 Año de creación de pregunta: 2011
 questions[63]= "64)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[63]= new Array();
 choices[63][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[63][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[63][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[63][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[63] = 2;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8140. Examen TIC A2 2010 interna";
 preguntaids[63] = 8140


//  Id pregunta: 8133 Año de creación de pregunta: 2011
 questions[64]= "65)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[64]= new Array();
 choices[64][0] = "Una relaci&oacute;n N:M.";
 choices[64][1] = "Una relaci&oacute;n 1:N.";
 choices[64][2] = "Una relaci&oacute;n 1:1.";
 choices[64][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite.";
 answers[64] = 0;
 units[64] = ['60', '61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8133. Examen TIC A2 2010 interna";
 preguntaids[64] = 8133


//  Id pregunta: 8155 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Qu&eacute; codec de v&iacute;deo se utiliza en la TDT para los canales en alta definici&oacute;n (HD)?";
 choices[65]= new Array();
 choices[65][0] = "Huffyuv.";
 choices[65][1] = "MPEG-4";
 choices[65][2] = "MPEG-2";
 choices[65][3] = "Sorenson.";
 answers[65] = 1;
 units[65] = ['115'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8155. Examen TIC A2 2010 interna";
 preguntaids[65] = 8155


//  Id pregunta: 8185 Año de creación de pregunta: 2011
 questions[66]= "67)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Mantenimiento adaptativo";
 choices[66][1] = "Mantenimiento preventivo";
 choices[66][2] = "Mantenimiento correctivo";
 choices[66][3] = "Mantenimiento evolutivo";
 answers[66] = 1;
 units[66] = ['91'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 8185. Examen TIC A2 2010 interna";
 preguntaids[66] = 8185


//  Id pregunta: 8109 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;Qu&eacute; es una DMZ o zona desmilitarizada?";
 choices[67]= new Array();
 choices[67][0] = "Es una subred perimetral aislada por cortafuegos aunque visible desde Internet.";
 choices[67][1] = "a) Es una subred libre de ataques externos, donde residen -entre otros- servidores con bases de datos criticas.";
 choices[67][2] = "Es una subred desde la que se permiten conexiones a la red interna, por estar la primera desmilitarizada.";
 choices[67][3] = "Es un tipo de honeypot.";
 answers[67] = 0;
 units[67] = ['113'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8109. Examen TIC A2 2010 interna";
 preguntaids[67] = 8109


//  Id pregunta: 8181 Año de creación de pregunta: 2011
 questions[68]= "69)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[68]= new Array();
 choices[68][0] = "Listado de todos los equipos";
 choices[68][1] = "Listado de software usado en cada equipo.";
 choices[68][2] = "Esquema de la red.";
 choices[68][3] = "Todos son necesarios.";
 answers[68] = 3;
 units[68] = ['56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8181. Examen TIC A2 2010 interna";
 preguntaids[68] = 8181


//  Id pregunta: 8174 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[69]= new Array();
 choices[69][0] = "SOLAP.";
 choices[69][1] = "DOLAP.";
 choices[69][2] = "WOLAP.";
 choices[69][3] = "RTOLAP.";
 answers[69] = 2;
 units[69] = ['72'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8174. Examen TIC A2 2010 interna";
 preguntaids[69] = 8174


//  Id pregunta: 8183 Año de creación de pregunta: 2011
 questions[70]= "71)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[70]= new Array();
 choices[70][0] = "Vinagre";
 choices[70][1] = "DameWare Mini Remote Control";
 choices[70][2] = "TightVNC";
 choices[70][3] = "RdesKtop";
 answers[70] = 1;
 units[70] = ['123'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8183. Examen TIC A2 2010 interna";
 preguntaids[70] = 8183


//  Id pregunta: 8168 Año de creación de pregunta: 2011
 questions[71]= "72)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[71]= new Array();
 choices[71][0] = "DataTableRelation";
 choices[71][1] = "DataView";
 choices[71][2] = "DataTable";
 choices[71][3] = "DataSet";
 answers[71] = 3;
 units[71] = ['63'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8168. Examen TIC A2 2010 interna";
 preguntaids[71] = 8168


//  Id pregunta: 8187 Año de creación de pregunta: 2011
 questions[72]= "73)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[72]= new Array();
 choices[72][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[72][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[72][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[72][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[72] = 2;
 units[72] = ['60', '61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8187. Examen TIC A2 2010 interna";
 preguntaids[72] = 8187


//  Id pregunta: 8134 Año de creación de pregunta: 2011
 questions[73]= "74)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[73]= new Array();
 choices[73][0] = "Cualquier valor negativo.";
 choices[73][1] = "Fq=0.";
 choices[73][2] = "Fq=1.";
 choices[73][3] = "Infinito.";
 answers[73] = 2;
 units[73] = ['99'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 8134. Examen TIC A2 2010 interna";
 preguntaids[73] = 8134


//  Id pregunta: 8148 Año de creación de pregunta: 2011
 questions[74]= "75)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[74]= new Array();
 choices[74][0] = "10,8 Mbps te&oacute;ricos.";
 choices[74][1] = "14 Mbps";
 choices[74][2] = "2 Mbps";
 choices[74][3] = "384 Kbps";
 answers[74] = 1;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 8148. Examen TIC A2 2010 interna";
 preguntaids[74] = 8148


