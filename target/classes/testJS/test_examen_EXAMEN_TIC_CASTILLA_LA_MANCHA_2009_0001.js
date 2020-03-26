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
//  Id pregunta: 7192 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[0]= new Array();
 choices[0][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[0][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[0][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[0][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[0] = 1;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7192. Castilla La Mancha 2009";
 preguntaids[0] = 7192


//  Id pregunta: 7177 Año de creación de pregunta: 2010
 questions[1]= "2)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[1]= new Array();
 choices[1][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[1][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[1][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[1][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[1] = 3;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 7177. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";
 preguntaids[1] = 7177


//  Id pregunta: 7167 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;C&oacute;mo se denomina cada una de las particiones l&oacute;gicas de una Storage &Aacute;rea Network?";
 choices[2]= new Array();
 choices[2][0] = "LUN";
 choices[2][1] = "HBA";
 choices[2][2] = "Cl&uacute;ster";
 choices[2][3] = "Usci";
 answers[2] = 0;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7167. Castilla La Mancha 2009";
 preguntaids[2] = 7167


//  Id pregunta: 7168 Año de creación de pregunta: 2010
 questions[3]= "4)  En un sistema de almacenamiento en RAID 5:";
 choices[3]= new Array();
 choices[3][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[3][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[3][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[3][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[3] = 1;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7168. Castilla La Mancha 2009";
 preguntaids[3] = 7168


//  Id pregunta: 7187 Año de creación de pregunta: 2010
 questions[4]= "5)  Indique cu&aacute;l de los siguientes enunciados sobre principios y conceptos fundamentales del Dise&ntilde;o del Software es FALSO:";
 choices[4]= new Array();
 choices[4][0] = "Los principios del dise&ntilde;o s&oacute;lo sirven de gu&iacute;a al ingeniero del software al principio del proceso de dise&ntilde;o. Los conceptos de dise&ntilde;o no proporcionan los criterios b&aacute;sicos para la calidad del dise&ntilde;o.";
 choices[4][1] = "La modularidad (tanto en el programa como en los datos) y el concepto de abstracci&oacute;n permiten que el dise&ntilde;ador simplifique y reutilice los componentes del software.";
 choices[4][2] = "El refinamiento proporciona un mecanismo para representar sucesivas capas de datos funcionales.";
 choices[4][3] = "La ocultaci&oacute;n de informaci&oacute;n y la independencia funcional proporcionan la heur&iacute;stica para conseguir una modularidad efectiva.";
 answers[4] = 0;
 units[4] = ['89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 7187. Castilla La Mancha 2009";
 preguntaids[4] = 7187


//  Id pregunta: 7193 Año de creación de pregunta: 2010
 questions[5]= "6)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[5]= new Array();
 choices[5][0] = "SYS Y DBA";
 choices[5][1] = "SYS Y SYSTEM";
 choices[5][2] = "SYSTEM Y DBA";
 choices[5][3] = "MANAGER Y DBA";
 answers[5] = 1;
 units[5] = ['60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7193. Castilla La Mancha 2009";
 preguntaids[5] = 7193


//  Id pregunta: 7195 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Qu&eacute; protocolo define las VLAN (Virtual LAN)?";
 choices[6]= new Array();
 choices[6][0] = "RFC 1032";
 choices[6][1] = "IEEE 802.3u";
 choices[6][2] = "IEEE 802.1q";
 choices[6][3] = "IEEE 802.11";
 answers[6] = 2;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 7195. Castilla La Mancha 2009";
 preguntaids[6] = 7195


//  Id pregunta: 7203 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[7]= new Array();
 choices[7][0] = "Nessus";
 choices[7][1] = "Snort";
 choices[7][2] = "Nagios";
 choices[7][3] = "NetSaint";
 answers[7] = 1;
 units[7] = ['119'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7203. Castilla La Mancha 2009";
 preguntaids[7] = 7203


//  Id pregunta: 7181 Año de creación de pregunta: 2010
 questions[8]= "9)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[8]= new Array();
 choices[8][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[8][1] = "Estudio de Viabilidad del Sistema";
 choices[8][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[8][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[8] = 1;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7181. Castilla La Mancha 2009";
 preguntaids[8] = 7181


//  Id pregunta: 6778 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Qu&eacute; norma espa&ntilde;ola es la vigente de &quot;Tecnolog&iacute;as de la Informaci&oacute;n. T&eacute;cnicas de seguridad. Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n (SGSI). Requisitos&quot;?";
 choices[9]= new Array();
 choices[9][0] = "UNE 71502:2004";
 choices[9][1] = "UNE-ISO/IEC 27001:2007";
 choices[9][2] = "UNE 17799:2000";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = 1;
 units[9] = ['48'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 6778. Castilla La Mancha 2009";
 preguntaids[9] = 6778


//  Id pregunta: 7163 Año de creación de pregunta: 2010
 questions[10]= "11)  Generalmente el auditor inform&aacute;tico elevar&aacute; su informe a";
 choices[10]= new Array();
 choices[10][0] = "La direcci&oacute;n de la Organizaci&oacute;n";
 choices[10][1] = "La direcci&oacute;n de Inform&aacute;tica";
 choices[10][2] = "La direcci&oacute;n del departamento que este auditando";
 choices[10][3] = "Al Departamento de Asuntos Econ&oacute;micos";
 answers[10] = 0;
 units[10] = ['36'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 7163. Castilla La Mancha 2009";
 preguntaids[10] = 7163


//  Id pregunta: 6774 Año de creación de pregunta: 2010
 questions[11]= "12)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Eficiencia";
 choices[11][1] = "Eficacia";
 choices[11][2] = "Proceso";
 choices[11][3] = "Requisito";
 answers[11] = 0;
 units[11] = ['92'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6774. Castilla La Mancha 2009";
 preguntaids[11] = 6774


//  Id pregunta: 7196 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de enrutamiento?";
 choices[12]= new Array();
 choices[12][0] = "OSPF";
 choices[12][1] = "RIP";
 choices[12][2] = "BGP";
 choices[12][3] = "RARP";
 answers[12] = 3;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 7196. Castilla La Mancha 2009";
 preguntaids[12] = 7196


//  Id pregunta: 7169 Año de creación de pregunta: 2010
 questions[13]= "14)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por proceso zombi?";
 choices[13]= new Array();
 choices[13][0] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes";
 choices[13][1] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo est&aacute; la espera de que el primer proceso acabe";
 choices[13][2] = "Un proceso que ha completado su ejecuci&oacute;n pero a&uacute;n contin&uacute;a consumiendo recursos";
 choices[13][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita";
 answers[13] = 2;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7169. Castilla La Mancha 2009";
 preguntaids[13] = 7169


//  Id pregunta: 6784 Año de creación de pregunta: 2010
 questions[14]= "15)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[14]= new Array();
 choices[14][0] = "Datos relativos a las personas";
 choices[14][1] = "Calidad de los datos";
 choices[14][2] = "Consentimiento del afectado";
 choices[14][3] = "Seguridad de los datos";
 answers[14] = 0;
 units[14] = ['35'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 6784. Castilla La Mancha 2009";
 preguntaids[14] = 6784


//  Id pregunta: 7204 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[15]= new Array();
 choices[15][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[15][1] = "RETE 1,2 DELE 1,2";
 choices[15][2] = "RETR 1-2 DELE 1-2";
 choices[15][3] = "RETR 1 RETR 2";
 answers[15] = 0;
 units[15] = ['116'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7204. Castilla La Mancha 2009";
 preguntaids[15] = 7204


//  Id pregunta: 7183 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;En que t&eacute;cnica  de pruebas del software se utiliza la complejidad ciclom&aacute;tica?";
 choices[16]= new Array();
 choices[16][0] = "Prueba de caja negra";
 choices[16][1] = "Prueba del camino b&aacute;sico";
 choices[16][2] = "Prueba de la partici&oacute;n equivalente";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = 1;
 units[16] = ['93'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 7183. Castilla La Mancha 2009";
 preguntaids[16] = 7183


//  Id pregunta: 7194 Año de creación de pregunta: 2010
 questions[17]= "18)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[17]= new Array();
 choices[17][0] = "Repetidor";
 choices[17][1] = "Puente (bridge)";
 choices[17][2] = "Pasarela (gateway)";
 choices[17][3] = "Encaminador (router)";
 answers[17] = 1;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 7194. Castilla La Mancha 2009";
 preguntaids[17] = 7194


//  Id pregunta: 6779 Año de creación de pregunta: 2010
 questions[18]= "19)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[18]= new Array();
 choices[18][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[18][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[18][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[18][3] = "El proceso y el procedimiento";
 answers[18] = 1;
 units[18] = ['92'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6779. Castilla La Mancha 2009";
 preguntaids[18] = 6779


//  Id pregunta: 7166 Año de creación de pregunta: 2010
 questions[19]= "20)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "ITU";
 choices[19][1] = "IEC";
 choices[19][2] = "ETSI";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 0;
 units[19] = ['48'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 7166. Castilla La Mancha 2009";
 preguntaids[19] = 7166


//  Id pregunta: 6782 Año de creación de pregunta: 2010
 questions[20]= "21)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[20]= new Array();
 choices[20][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[20][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[20][2] = "Todos los datos relativos a una persona";
 choices[20][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[20] = 3;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 6782. Castilla La Mancha 2009";
 preguntaids[20] = 6782


//  Id pregunta: 7172 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde al modelo r&aacute;ster de un SIG?";
 choices[21]= new Array();
 choices[21][0] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos por medio de una ret&iacute;cula regular, generalmente compuesta por celdas cuadradas, tambi&eacute;n llamadas p&iacute;xeles.";
 choices[21][1] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante las primitivas gr&aacute;ficas (puntos, l&iacute;neas y pol&iacute;gonos).";
 choices[21][2] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos que se clasifican en puntos, l&iacute;neas o pol&iacute;gonos.";
 choices[21][3] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante primitivas gr&aacute;ficas, tambi&eacute;n llamadas p&iacute;xeles, a los cuales se les asocia informaci&oacute;n estructurada a modo de tablas en bases de datos relacionales.";
 answers[21] = 0;
 units[21] = ['71'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7172. Castilla La Mancha 2009";
 preguntaids[21] = 7172


//  Id pregunta: 7200 Año de creación de pregunta: 2010
 questions[22]= "23)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[22]= new Array();
 choices[22][0] = "Reflexi&oacute;n";
 choices[22][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[22][2] = "Difracci&oacute;n";
 choices[22][3] = "Absorci&oacute;n";
 answers[22] = 1;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7200. Castilla La Mancha 2009";
 preguntaids[22] = 7200


//  Id pregunta: 7186 Año de creación de pregunta: 2010
 questions[23]= "24)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[23]= new Array();
 choices[23][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[23][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[23][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[23][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[23] = 1;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7186. Castilla La Mancha 2009";
 preguntaids[23] = 7186


//  Id pregunta: 7174 Año de creación de pregunta: 2010
 questions[24]= "25)  Comparando las dos arquitecturas diferentes para los sistemas OLAP: relacional y multidimensional es cierto que:";
 choices[24]= new Array();
 choices[24][0] = "Los sistemas multidimensionales delegan la informaci&oacute;n entre tiempo de respuesta y el proceso batch al dise&ntilde;o del sistema.";
 choices[24][1] = "Los sistemas multidimensionales generalmente son adecuados para diez o menos dimensiones.";
 choices[24][2] = "Los sistemas multidimensionales soportan an&aacute;lisis OLAP contra grandes vol&uacute;menes de datos elementales.";
 choices[24][3] = "Los sistemas multidimensionales pueden crecer hasta un gran n&uacute;mero de dimensiones.";
 answers[24] = 1;
 units[24] = ['72'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7174. Castilla La Mancha 2009";
 preguntaids[24] = 7174


//  Id pregunta: 7184 Año de creación de pregunta: 2010
 questions[25]= "26)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[25]= new Array();
 choices[25][0] = "Aceptaci&oacute;n";
 choices[25][1] = "Regresi&oacute;n";
 choices[25][2] = "Integraci&oacute;n";
 choices[25][3] = "Implantaci&oacute;n";
 answers[25] = 3;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7184. Castilla La Mancha 2009";
 preguntaids[25] = 7184


//  Id pregunta: 6777 Año de creación de pregunta: 2010
 questions[26]= "27)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[26]= new Array();
 choices[26][0] = "Verificaci&oacute;n";
 choices[26][1] = "Validaci&oacute;n";
 choices[26][2] = "Gesti&oacute;n de requisitos";
 choices[26][3] = "Desarrollo de requisitos";
 answers[26] = 3;
 units[26] = ['92'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6777. Castilla La Mancha 2009";
 preguntaids[26] = 6777


//  Id pregunta: 7173 Año de creación de pregunta: 2010
 questions[27]= "28)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[27]= new Array();
 choices[27][0] = "SAAJ";
 choices[27][1] = "JAXR";
 choices[27][2] = "SOAP";
 choices[27][3] = "StAX";
 answers[27] = 1;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7173. Castilla La Mancha 2009";
 preguntaids[27] = 7173


//  Id pregunta: 7198 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[28]= new Array();
 choices[28][0] = "S&iacute;";
 choices[28][1] = "No";
 choices[28][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[28][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[28] = 0;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7198. Castilla La Mancha 2009. Compatibilidad para ADSL 2+ seg&uacute;n Anexo B";
 preguntaids[28] = 7198


//  Id pregunta: 7201 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[29]= new Array();
 choices[29][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[29][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[29][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[29][3] = "Es un servicio punto a punto";
 answers[29] = 2;
 units[29] = ['117'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7201. Castilla La Mancha 2009";
 preguntaids[29] = 7201


//  Id pregunta: 7171 Año de creación de pregunta: 2010
 questions[30]= "31)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[30]= new Array();
 choices[30][0] = "GET";
 choices[30][1] = "HEAD";
 choices[30][2] = "POST";
 choices[30][3] = "SERVICE";
 answers[30] = 1;
 units[30] = ['103'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7171. Castilla La Mancha 2009";
 preguntaids[30] = 7171


//  Id pregunta: 7176 Año de creación de pregunta: 2010
 questions[31]= "32)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[31]= new Array();
 choices[31][0] = "Tres a&ntilde;os";
 choices[31][1] = "Diez a&ntilde;os";
 choices[31][2] = "Dos a&ntilde;os";
 choices[31][3] = "Cinco a&ntilde;os";
 answers[31] = 3;
 units[31] = ['78'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7176. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";
 preguntaids[31] = 7176


//  Id pregunta: 7209 Año de creación de pregunta: 2010
 questions[32]= "33)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[32]= new Array();
 choices[32][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[32][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[32][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[32][3] = "Siempre que no aparezca el DNI";
 answers[32] = 1;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 7209. Castilla La Mancha 2009";
 preguntaids[32] = 7209


//  Id pregunta: 6785 Año de creación de pregunta: 2010
 questions[33]= "34)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, cu&aacute;l de la siguiente informaci&oacute;n NO es necesaria incluir en la orden de creaci&oacute;n de un fichero de titularidad p&uacute;blica:";
 choices[33]= new Array();
 choices[33][0] = "Los &oacute;rganos responsables del fichero";
 choices[33][1] = "El nivel b&aacute;sico, medio o alto de seguridad que resulte exigible";
 choices[33][2] = "Las transferencias internacionales de datos previstas a terceros pa&iacute;ses, con indicaci&oacute;n, en su caso, de los pa&iacute;ses de destino de los datos";
 choices[33][3] = "El encargado de tratamiento, si lo hubiese";
 answers[33] = 3;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 6785. Similar a Castilla La Mancha 2009";
 preguntaids[33] = 6785


//  Id pregunta: 7189 Año de creación de pregunta: 2010
 questions[34]= "35)  UMLSec:";
 choices[34]= new Array();
 choices[34][0] = "Se utiliza en el desarrollo de software para modelizar pol&iacute;ticas de control de acceso, integr&aacute;ndolas en el sistema desarrollado.";
 choices[34][1] = "Es una metodolog&iacute;a para el an&aacute;lisis y la gesti&oacute;n de riesgos en proyectos de desarrollo orientado a objetos.";
 choices[34][2] = "Es sin&oacute;nimo de SecureUML.";
 choices[34][3] = "Ninguna de las anteriores.";
 answers[34] = 3;
 units[34] = ['89'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7189. Castilla La Mancha 2009";
 preguntaids[34] = 7189


//  Id pregunta: 6780 Año de creación de pregunta: 2010
 questions[35]= "36)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[35]= new Array();
 choices[35][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[35][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[35][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[35][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[35] = 2;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 6780. Castilla La Mancha 2009";
 preguntaids[35] = 6780


//  Id pregunta: 7197 Año de creación de pregunta: 2010
 questions[36]= "37)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[36]= new Array();
 choices[36][0] = "C++";
 choices[36][1] = "ASN.1";
 choices[36][2] = "trap";
 choices[36][3] = "Java";
 answers[36] = 1;
 units[36] = ['114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7197. Castilla La Mancha 2009";
 preguntaids[36] = 7197


//  Id pregunta: 7170 Año de creación de pregunta: 2010
 questions[37]= "38)  En un sistema operativo LINUX &iquest;qu&eacute; es un gestor GRUB?";
 choices[37]= new Array();
 choices[37][0] = "Un gestor de creaci&oacute;n y activaci&oacute;n de particiones swap, en el primer sector de la partici&oacute;n de arranque";
 choices[37][1] = "Un gestor que crea un &aacute;rea de swap en memoria RAM";
 choices[37][2] = "Un gestor que activa una partici&oacute;n de swap ya creada";
 choices[37][3] = "Un gestor de arranque multisistema creado por el proyecto GNU";
 answers[37] = 3;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7170. Castilla La Mancha 2009";
 preguntaids[37] = 7170


//  Id pregunta: 6776 Año de creación de pregunta: 2010
 questions[38]= "39)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de la calidad";
 choices[38][1] = "Norma de la calidad";
 choices[38][2] = "Pol&iacute;tica de la calidad";
 choices[38][3] = "Direcci&oacute;n de la calidad";
 answers[38] = 2;
 units[38] = ['92'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 6776. Castilla La Mancha 2009";
 preguntaids[38] = 6776


//  Id pregunta: 7188 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Qu&eacute; elementos de los siguientes NO pertenece a los diagramas de casos de uso?";
 choices[39]= new Array();
 choices[39][0] = "Interfaces.";
 choices[39][1] = "Actor.";
 choices[39][2] = "Paquete.";
 choices[39][3] = "Relaci&oacute;n.";
 answers[39] = 0;
 units[39] = ['89'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7188. Castilla La Mancha 2009";
 preguntaids[39] = 7188


//  Id pregunta: 7202 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[40]= new Array();
 choices[40][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[40][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[40][2] = "Porque mejora el enrutamiento";
 choices[40][3] = "Por analog&iacute;a con Ethernet";
 answers[40] = 1;
 units[40] = ['107'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7202. Castilla La Mancha 2009";
 preguntaids[40] = 7202


//  Id pregunta: 7179 Año de creación de pregunta: 2010
 questions[41]= "42)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[41]= new Array();
 choices[41][0] = "WBS (Work Breakdown Structure)";
 choices[41][1] = "PERT (Program Evaluation and Review Technique)";
 choices[41][2] = "Diagrama de Gantt";
 choices[41][3] = "CPM (Critical Path Method)";
 answers[41] = 0;
 units[41] = ['31'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 7179. Castilla La Mancha 2009";
 preguntaids[41] = 7179


//  Id pregunta: 6773 Año de creación de pregunta: 2010
 questions[42]= "43)  La adquisici&oacute;n de un programa de ordenador a medida se considera un contrato de:";
 choices[42]= new Array();
 choices[42][0] = "Obras";
 choices[42][1] = "Gesti&oacute;n de servicios p&uacute;blicos";
 choices[42][2] = "Servicios";
 choices[42][3] = "Suministros";
 answers[42] = 2;
 units[42] = ['37'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 6773. Castilla La Mancha 2009";
 preguntaids[42] = 6773


//  Id pregunta: 7182 Año de creación de pregunta: 2010
 questions[43]= "44)  Indique la respuesta incorrecta sobre la gesti&oacute;n de configuraci&oacute;n.";
 choices[43]= new Array();
 choices[43][0] = "Una l&iacute;nea base es un conjunto de actividades para gestionar el cambio a lo largo del ciclo de vida del software.";
 choices[43][1] = "El impacto de los cambios puede evaluarse a trav&eacute;s de las relaciones entre los objetos de configuraci&oacute;n.";
 choices[43][2] = "La gesti&oacute;n de configuraci&oacute;n del software es una actividad protectiva.";
 choices[43][3] = "Las herramientas de desarrollo pueden formar parte de una l&iacute;nea base.";
 answers[43] = 0;
 units[43] = ['96'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7182. Castilla La Mancha 2009";
 preguntaids[43] = 7182


//  Id pregunta: 7207 Año de creación de pregunta: 2010
 questions[44]= "45)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[44]= new Array();
 choices[44][0] = "Onda de superficie";
 choices[44][1] = "Onda ionosf&eacute;rica";
 choices[44][2] = "Onda espacial";
 choices[44][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[44] = 2;
 units[44] = ['117'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7207. Castilla La Mancha 2009";
 preguntaids[44] = 7207


//  Id pregunta: 7208 Año de creación de pregunta: 2010
 questions[45]= "46)  El Coste de Calidad incluye todos los costes acarreados en las actividades relacionadas en la obtenci&oacute;n de la calidad. Los Costes de Calidad se pueden dividir en 3 grupos, que son:";
 choices[45]= new Array();
 choices[45][0] = "Costes asociados con la planificaci&oacute;n, la formaci&oacute;n y las pruebas";
 choices[45][1] = "Costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos";
 choices[45][2] = "Costes asociados con la inspecci&oacute;n, la reparaci&oacute;n y el mantenimiento";
 choices[45][3] = "Costes asociados con el an&aacute;lisis, la revisi&oacute;n y las devoluciones de productos";
 answers[45] = 1;
 units[45] = ['98'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7208. Castilla La Mancha 2009";
 preguntaids[45] = 7208


//  Id pregunta: 7190 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[46]= new Array();
 choices[46][0] = "Plataforma Java Technique Edition (JTE)";
 choices[46][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[46][2] = "Plataforma Java Standard Edition (JSE)";
 choices[46][3] = "Plataforma Java Micro Edition (JME)";
 answers[46] = 1;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7190. Castilla La Mancha 2009";
 preguntaids[46] = 7190


//  Id pregunta: 7178 Año de creación de pregunta: 2010
 questions[47]= "48)  Indique la actividad que NO forma parte del ciclo de vida del software";
 choices[47]= new Array();
 choices[47][0] = "El an&aacute;lisis del sistema de informaci&oacute;n";
 choices[47][1] = "La planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n";
 choices[47][2] = "El mantenimiento del sistema de informaci&oacute;n";
 choices[47][3] = "La gesti&oacute;n de riesgos";
 answers[47] = 1;
 units[47] = ['82'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7178. Castilla La Mancha 2009";
 preguntaids[47] = 7178


//  Id pregunta: 7191 Año de creación de pregunta: 2010
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[48]= new Array();
 choices[48][0] = "Un archivo web.xml";
 choices[48][1] = "Un subdirectorio llamado classes";
 choices[48][2] = "Documentos de Microsoft Office";
 choices[48][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[48] = 2;
 units[48] = ['64'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7191. Castilla La Mancha 2009";
 preguntaids[48] = 7191


//  Id pregunta: 7180 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l es el proceso que recibe como entrada los resultados o productos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n?";
 choices[49]= new Array();
 choices[49][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[49][1] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[49][2] = "Estudio de Viabilidad del Sistema";
 choices[49][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[49] = 2;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7180. Castilla La Mancha 2009";
 preguntaids[49] = 7180


//  Id pregunta: 7206 Año de creación de pregunta: 2010
 questions[50]= "51)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[50]= new Array();
 choices[50][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[50][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[50][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[50][3] = "Ninguna de las anteriores es correcta";
 answers[50] = 2;
 units[50] = ['77'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7206. Castilla La Mancha 2009";
 preguntaids[50] = 7206


//  Id pregunta: 7205 Año de creación de pregunta: 2010
 questions[51]= "52)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[51]= new Array();
 choices[51][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[51][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[51][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[51][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[51] = 2;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7205. Castilla La Mancha 2009";
 preguntaids[51] = 7205


//  Id pregunta: 7165 Año de creación de pregunta: 2010
 questions[52]= "53)  ETSI NO publica:";
 choices[52]= new Array();
 choices[52][0] = "Normas europeas";
 choices[52][1] = "Normas espa&ntilde;olas";
 choices[52][2] = "Normas armonizadas";
 choices[52][3] = "Publica todas las anteriores";
 answers[52] = 1;
 units[52] = ['48'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 7165. Similar a Castilla La Mancha 2009";
 preguntaids[52] = 7165


//  Id pregunta: 6783 Año de creación de pregunta: 2010
 questions[53]= "54)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[53]= new Array();
 choices[53][0] = "Bajo, medio y alto";
 choices[53][1] = "B&aacute;sico, medio y alto";
 choices[53][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[53][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[53] = 1;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 6783. Castilla La Mancha 2009";
 preguntaids[53] = 6783


//  Id pregunta: 6775 Año de creación de pregunta: 2010
 questions[54]= "55)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[54]= new Array();
 choices[54][0] = "Procesos";
 choices[54][1] = "Personas";
 choices[54][2] = "Resultados en los clientes";
 choices[54][3] = "Resultados en los proveedores";
 answers[54] = 3;
 units[54] = ['98'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6775. Castilla La Mancha 2009";
 preguntaids[54] = 6775


//  Id pregunta: 7164 Año de creación de pregunta: 2010
 questions[55]= "56)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Adaptabilidad";
 choices[55][1] = "Portabilidad";
 choices[55][2] = "Interoperabilidad";
 choices[55][3] = "Escalabilidad";
 answers[55] = 1;
 units[55] = ['43'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7164. Castilla La Mancha 2009";
 preguntaids[55] = 7164


//  Id pregunta: 7199 Año de creación de pregunta: 2010
 questions[56]= "57)  Respecto a las mejoras de la TDT (DVB-T), sobre la televisi&oacute;n anal&oacute;gica, se&ntilde;ale la afirmaci&oacute;n INCORRECTA";
 choices[56]= new Array();
 choices[56][0] = "TDT permite un mayor aprovechamiento del espectro";
 choices[56][1] = "TDT permite mayor calidad de imagen";
 choices[56][2] = "TDT permite interactividad";
 choices[56][3] = "TDT permite la visualizaci&oacute;n degradada ante un nivel de se&ntilde;al d&eacute;bil";
 answers[56] = 3;
 units[56] = ['115'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 7199. Castilla La Mancha 2009";
 preguntaids[56] = 7199


//  Id pregunta: 7175 Año de creación de pregunta: 2010
 questions[57]= "58)  Una infraestructura de clave p&uacute;blica (PKI) es";
 choices[57]= new Array();
 choices[57][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[57][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[57][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[57][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[57] = 3;
 units[57] = ['78'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7175. Castilla La Mancha 2009";
 preguntaids[57] = 7175


//  Id pregunta: 6781 Año de creación de pregunta: 2010
 questions[58]= "59)  En MAGERIT &iquest;cu&aacute;l de las siguientes opciones NO es cierta?";
 choices[58]= new Array();
 choices[58][0] = "Riesgo es la posibilidad de que suceda un da&ntilde;o o perjuicio";
 choices[58][1] = "Impacto es el evento que puede desencadenar un incidente en la organizaci&oacute;n";
 choices[58][2] = "Existen tres submodelos: elementos, eventos y procesos";
 choices[58][3] = "La informaci&oacute;n es un activo";
 answers[58] = 1;
 units[58] = ['45'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 6781. Castilla La Mancha 2009";
 preguntaids[58] = 6781


//  Id pregunta: 7185 Año de creación de pregunta: 2010
 questions[59]= "60)  En M&eacute;trica V3, qu&eacute; producto NO se elabora en el proceso Plan de Sistemas de Informaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Modelo de procesos de la organizaci&oacute;n";
 choices[59][1] = "Plan de Migraci&oacute;n y Carga Inicial de Datos";
 choices[59][2] = "Arquitectura Tecnol&oacute;gica";
 choices[59][3] = "Plan de proyectos";
 answers[59] = 1;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7185. Castilla La Mancha 2009";
 preguntaids[59] = 7185


