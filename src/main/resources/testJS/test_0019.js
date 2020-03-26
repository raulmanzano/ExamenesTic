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
//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[0]= "1)  En relaci&oacute;n con el dise&ntilde;o f&iacute;sico de base de datos, se&ntilde;ale la repsuesta INCORRECTA:";
 choices[0]= new Array();
 choices[0][0] = "Si el fichero se va a actualizar mucho (inserci&oacute;n/eliminaci&oacute;n) debemos reducir al m&iacute;nimo el n&uacute;mero de &iacute;ndices del fichero.";
 choices[0][1] = "Una estructura com&uacute;n de &iacute;ndices en muchos sistemas gestores de BD son los B-Trees.";
 choices[0][2] = "Debemos evitar t&eacute;cnicas de dispersi&oacute;n (hashing) sobre columnas poco actualizadas.";
 choices[0][3] = "Para cada atributo (no de ordenaci&oacute;n) que se use mucho en operaciones de selecci&oacute;n o reuni&oacute;n, debemos crear un &iacute;ndice SECUNDARIO.";
 answers[0] = 2;
 units[0] = ['60'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 683. AGE A2 2015";
 preguntaids[0] = 683


//  Id pregunta: 2401 Año de creación de pregunta: 2006
 questions[1]= "2)  Seg&uacute;n lo establecido en la LOPD &iquest;Cual de los siguientes son derechos de las personas?";
 choices[1]= new Array();
 choices[1][0] = "Secreto profesional y control previo de los tratamientos";
 choices[1][1] = "Consentimiento expreso para el tratamiento de datos especialmente protegidos y derecho de Informaci&oacute;n";
 choices[1][2] = "Acceso, rectificaci&oacute;n, cancelaci&oacute;n, oposici&oacute;n e impugnaci&oacute;n";
 choices[1][3] = "Confidencialidad e integridad de la Informaci&oacute;n";
 answers[1] = 2;
 units[1] = ['35'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2401. ";
 preguntaids[1] = 2401


//  Id pregunta: 6954 Año de creación de pregunta: 2010
 questions[2]= "3)  Respecto al Diagrama de Secuencia, &iquest;cu&aacute;l de las siguientes opciones es correcta?";
 choices[2]= new Array();
 choices[2][0] = "Muestra los objetos participantes en la interacci&oacute;n y los mensajes que intercambian ordenados seg&uacute;n su secuencia en el tiempo.";
 choices[2][1] = "El eje horizontal representa el tiempo, y en el eje vertical se colocan los objetos y actores participantes en la interacci&oacute;n, sin un orden prefijado.";
 choices[2][2] = "Cada objeto o actor tiene una l&iacute;nea horizontal, y los mensajes se representan mediante etiquetas entre los distintos objetos.";
 choices[2][3] = "El tiempo fluye de abajo a arriba y de izquiera a derecha.";
 answers[2] = 0;
 units[2] = ['89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6954. TIC-B 2009 bloque desarrollo";
 preguntaids[2] = 6954


//  Id pregunta: 6576 Año de creación de pregunta: 2003
 questions[3]= "4)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[3]= new Array();
 choices[3][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[3][1] = "Chip RFID";
 choices[3][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[3][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[3] = 1;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6576. ";
 preguntaids[3] = 6576


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[4]= "5)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[4]= new Array();
 choices[4][0] = "Leve";
 choices[4][1] = "Grave";
 choices[4][2] = "Muy grave";
 choices[4][3] = "No constituye infracci&oacute;n";
 answers[4] = 0;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 3297. ";
 preguntaids[4] = 3297


//  Id pregunta: 5143 Año de creación de pregunta: 2003
 questions[5]= "6)  Cuando una copia de seguridad incluye todos los archivos pero no los marca individualmente como copiados se habla de:";
 choices[5]= new Array();
 choices[5][0] = "Copia de seguridad incremental.";
 choices[5][1] = "Copia de seguridad diaria.";
 choices[5][2] = "Copia de seguridad intermedia.";
 choices[5][3] = "Copia de seguridad diferencial.";
 answers[5] = 2;
 units[5] = ['100'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 5143. ";
 preguntaids[5] = 5143


//  Id pregunta: 2893 Año de creación de pregunta: 2002
 questions[6]= "7)  Indicar cu&aacute;l de las siguientes no es un tipo de georreferenciaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Directa.";
 choices[6][1] = "Discreta.";
 choices[6][2] = "Indirecta.";
 choices[6][3] = "Posicional.";
 answers[6] = 3;
 units[6] = ['71'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2893. ";
 preguntaids[6] = 2893


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[7]= new Array();
 choices[7][0] = "Art&iacute;culo 14 CE.";
 choices[7][1] = "Art&iacute;culo 9.2 CE.";
 choices[7][2] = "Art&iacute;culo 9.1 CE.";
 choices[7][3] = "Art&iacute;culo 13 CE.";
 answers[7] = 1;
 units[7] = ['14'];
 blocks[7] = ['A3'];
 comments[7] = "Id Pregunta: 387. Pol&iacute;ticas de igualdad";
 preguntaids[7] = 387


//  Id pregunta: 9947 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l es el &aacute;mbito de referencia de aplicaci&oacute;n se&ntilde;alado en el RD 806/2014?";
 choices[8]= new Array();
 choices[8][0] = "Administraci&oacute;n General del Estado.";
 choices[8][1] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[8][2] = "Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales.";
 choices[8][3] = "Conjunto del Sector P&uacute;blico.";
 answers[8] = 1;
 units[8] = ['26'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9947. ";
 preguntaids[8] = 9947


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[9]= "10)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[9]= new Array();
 choices[9][0] = "Un a&ntilde;o prorrogable";
 choices[9][1] = "Dos a&ntilde;os no prorrogables";
 choices[9][2] = "Un a&ntilde;o no prorrogable";
 choices[9][3] = "Dos a&ntilde;os prorrogables";
 answers[9] = 2;
 units[9] = ['37'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 572. AGE A1 2015";
 preguntaids[9] = 572


//  Id pregunta: 4313 Año de creación de pregunta: 2004
 questions[10]= "11)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[10]= new Array();
 choices[10][0] = "Agencia estatal de radiocomunicaciones";
 choices[10][1] = "Ministerio  de Energia, Turismo y Agenda Digital";
 choices[10][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[10][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[10] = 1;
 units[10] = ['121'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4313. Similar a examen TIC MAP A 2004.";
 preguntaids[10] = 4313


//  Id pregunta: 9092 Año de creación de pregunta: 2014
 questions[11]= "12)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[11]= new Array();
 choices[11][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[11][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[11][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[11][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[11] = 2;
 units[11] = ['102'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9092. Examen TIC-A1 2013";
 preguntaids[11] = 9092


//  Id pregunta: 10396 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[12]= new Array();
 choices[12][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[12][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[12][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[12][3] = "Beneficios TIC para la Sociedad UE";
 answers[12] = 0;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 10396. ";
 preguntaids[12] = 10396


//  Id pregunta: 5573 Año de creación de pregunta: 2007
 questions[13]= "14)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n a la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Se configura en torno a una situaci&oacute;n real y actual, sin hacer referencias a evoluciones futuras.";
 choices[13][1] = "Sirve para conocer y predecir el conjunto de recursos (instalaciones, m&aacute;quinas, equipos, etc.) necesarios para atender la carga de trabajo esperada en el futuro.";
 choices[13][2] = "Es un proceso sistem&aacute;tico.";
 choices[13][3] = "Determina las necesidades de recursos para suministrar el nivel de servicio requerido, actual y futuro.";
 answers[13] = 0;
 units[13] = ['83'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 5573. ";
 preguntaids[13] = 5573


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[14]= "15)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[14]= new Array();
 choices[14][0] = "Los ocupados y los parados activos";
 choices[14][1] = "S&oacute;lo los ocupados";
 choices[14][2] = "Los ocupados y los inactivos";
 choices[14][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[14] = 0;
 units[14] = ['12'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 340. Modelo econ&oacute;mico";
 preguntaids[14] = 340


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[15]= "16)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[15]= new Array();
 choices[15][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[15][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[15][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[15][3] = "Ninguno de los anteriores";
 answers[15] = 2;
 units[15] = ['2'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 8433. ";
 preguntaids[15] = 8433


//  Id pregunta: 1418 Año de creación de pregunta: 2016
 questions[16]= "17)  El art&iacute;culo 2 de la Constituci&oacute;n Espa&ntilde;ola de 1978, despu&eacute;s de declarar la indisoluble unidad de la Naci&oacute;n espa&ntilde;ola, reconoce y garantiza:";
 choices[16]= new Array();
 choices[16][0] = "El derecho a la autonom&iacute;a de las regiones y naciones que la integran.";
 choices[16][1] = "El derecho a la autonom&iacute;a de las regiones y provincias que la integran.";
 choices[16][2] = "El derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[16][3] = "Ninguna es correcta.";
 answers[16] = 2;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 1418. ";
 preguntaids[16] = 1418


//  Id pregunta: 4077 Año de creación de pregunta: 2003
 questions[17]= "18)  &iquest;Qu&egrave; actividad del An&aacute;lisis del Sistema de Informaci&oacute;n s&oacute;lo se realiza en el caso de an&aacute;lisis orientado a objetos?";
 choices[17]= new Array();
 choices[17][0] = "ASI 6 - Elaboraci&oacute;n del Modelo de datos";
 choices[17][1] = "ASI 8 &ndash; Definici&oacute;n de Interfaces de Usuario";
 choices[17][2] = "ASI 4 &ndash; An&aacute;lisis de los Casos de Uso";
 choices[17][3] = "ASI 3 &ndash; Identificaci&oacute;n de Subsistemas de An&aacute;lisis";
 answers[17] = 2;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 4077. EXAMEN CASTILLA LA MANCHA";
 preguntaids[17] = 4077


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[18]= "19)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[18]= new Array();
 choices[18][0] = "Reponen";
 choices[18][1] = "Reajustan";
 choices[18][2] = "Devuelven o cancelan";
 choices[18][3] = "Todas las anteriores";
 answers[18] = 3;
 units[18] = ['10'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[18] = 9134


//  Id pregunta: 2201 Año de creación de pregunta: 2002
 questions[19]= "20)  Indicar la verdadera respecto a la estructura de un sistema de informaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o procedimientos";
 choices[19][1] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 choices[19][2] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o procedimientos";
 choices[19][3] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 answers[19] = 0;
 units[19] = ['24'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2201. ";
 preguntaids[19] = 2201


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[20]= "21)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[20]= new Array();
 choices[20][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[20][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[20][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[20][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[20] = 1;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[20] = 232


//  Id pregunta: 2543 Año de creación de pregunta: 2004
 questions[21]= "22)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[21]= new Array();
 choices[21][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[21][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[21][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = 1;
 units[21] = ['49'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2543. ";
 preguntaids[21] = 2543


//  Id pregunta: 6879 Año de creación de pregunta: 2010
 questions[22]= "23)  Un diagrama de transici&oacute;n de estados:";
 choices[22]= new Array();
 choices[22][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[22][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[22][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[22][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[22] = 3;
 units[22] = ['85'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6879. TIC A 2009";
 preguntaids[22] = 6879


//  Id pregunta: 1046 Año de creación de pregunta: 2016
 questions[23]= "24)  En virtud del Derecho de Acceso a que se refiere el art&iacute;culo 15 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[23]= new Array();
 choices[23][0] = "El interesado, previo pago de la tasa correspondiente, tendr&aacute; derecho a obtener informaci&oacute;n sobre sus datos de car&aacute;cter personal sometidos a tratamiento.";
 choices[23][1] = "El interesado tendr&aacute; derecho a que se le faciliten gratuitamente las claves de acceso o c&oacute;digos para el acceso a sus datos de car&aacute;cter personal o profesional que est&eacute;n siendo tratados.";
 choices[23][2] = "El interesado tendr&aacute; derecho a obtener informaci&oacute;n gratuita de sus datos de car&aacute;cter personal sometidos a tratamiento, pero en ning&uacute;n caso de las comunicaciones que se prevean hacer de ellos.";
 choices[23][3] = "El derecho de acceso a que se refiere este art&iacute;culo s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a doce meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute;n ejercitarlo antes.";
 answers[23] = 3;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1046. ";
 preguntaids[23] = 1046


//  Id pregunta: 9870 Año de creación de pregunta: 2015
 questions[24]= "25)  Indique la afirmaci&oacute;n incorrecta:";
 choices[24]= new Array();
 choices[24][0] = "ActiveX es una evoluci&oacute;n de las tecnolog&iacute;as Component Object Model (COM) y Object Linking and Embedding (OLE).";
 choices[24][1] = "La tecnolog&iacute;a ActiveX est&aacute; limitada al sistema operativo Windows.";
 choices[24][2] = "Para introducir un control ActiveX en una p&aacute;gina HTML es necesario utilizar la etiqueta &lt;object&gt;";
 choices[24][3] = "Todas las anteriores son correctas.";
 answers[24] = 1;
 units[24] = ['62'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9870. ";
 preguntaids[24] = 9870


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[25]= new Array();
 choices[25][0] = "23";
 choices[25][1] = "25";
 choices[25][2] = "14";
 choices[25][3] = "18";
 answers[25] = 1;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 163. Uni&oacute;n Europea";
 preguntaids[25] = 163


//  Id pregunta: 2873 Año de creación de pregunta: 2002
 questions[26]= "27)  En una operaci&oacute;n de grabaci&oacute;n sobre una cinta magn&eacute;tica:";
 choices[26]= new Array();
 choices[26][0] = "Se escribe un car&aacute;cter";
 choices[26][1] = "Se escribe un bloque";
 choices[26][2] = "Se lee un dato";
 choices[26][3] = "Se escribe un registro l&oacute;gico";
 answers[26] = 1;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2873. ";
 preguntaids[26] = 2873


//  Id pregunta: 10141 Año de creación de pregunta: 2015
 questions[27]= "28)  Respecto a Bluetooth es correcto que:";
 choices[27]= new Array();
 choices[27][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[27][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[27][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[27][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[27] = 1;
 units[27] = ['108'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10141. Examen TIC A1 2014";
 preguntaids[27] = 10141


//  Id pregunta: 8966 Año de creación de pregunta: 2013
 questions[28]= "29)  En los sistemas de videoconferencia las MCU:";
 choices[28]= new Array();
 choices[28][0] = "Son un componente obligatorio";
 choices[28][1] = "Son un componente opcional";
 choices[28][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[28][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[28] = 1;
 units[28] = ['122'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8966. ";
 preguntaids[28] = 8966


//  Id pregunta: 3457 Año de creación de pregunta: 2006
 questions[29]= "30)  Se&ntilde;ale la correcta:";
 choices[29]= new Array();
 choices[29][0] = "3DES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[29][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios.";
 choices[29][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[29][3] = "Todas las anteriores";
 answers[29] = 1;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3457. ";
 preguntaids[29] = 3457


//  Id pregunta: 2618 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[30]= new Array();
 choices[30][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[30][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[30][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diversos organismos";
 choices[30][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[30] = 0;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2618. ";
 preguntaids[30] = 2618


//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[31]= "32)  Una tarjeta de memoria";
 choices[31]= new Array();
 choices[31][0] = "Puede procesar informaci&oacute;n";
 choices[31][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[31][2] = "Nunca puede procesar informaci&oacute;n";
 choices[31][3] = "Son un tipo de tarjeta inteligente";
 answers[31] = 2;
 units[31] = ['119'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 7249. ";
 preguntaids[31] = 7249


//  Id pregunta: 2054 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[32]= new Array();
 choices[32][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[32][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[32][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[32][3] = "Todos los anteriores";
 answers[32] = 3;
 units[32] = ['48'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2054. ";
 preguntaids[32] = 2054


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[33]= new Array();
 choices[33][0] = "Agenda digital para Europa";
 choices[33][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[33][2] = "Juventud en movimiento";
 choices[33][3] = "Agenda Web 2.0";
 answers[33] = 3;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 476. Europa 2020";
 preguntaids[33] = 476


//  Id pregunta: 2866 Año de creación de pregunta: 2002
 questions[34]= "35)  En un sistema operativo Linux, &iquest;cu&aacute;l es el &uacute;ltimo script que se ejecuta antes de iniciarse el proceso 'login'?:";
 choices[34]= new Array();
 choices[34][0] = "rc.local";
 choices[34][1] = "autoexec.bat";
 choices[34][2] = "rc4";
 choices[34][3] = "prelogin";
 answers[34] = 0;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2866. ";
 preguntaids[34] = 2866


//  Id pregunta: 10931 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?";
 choices[35]= new Array();
 choices[35][0] = "autenticacion";
 choices[35][1] = "trazabilidad";
 choices[35][2] = "integridad";
 choices[35][3] = "disponibilidad";
 answers[35] = 3;
 units[35] = ['46'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 10931. ";
 preguntaids[35] = 10931


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[36]= "37)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[36][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[36][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[36][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[36] = 3;
 units[36] = ['14'];
 blocks[36] = ['A3'];
 comments[36] = "Id Pregunta: 369. Pol&iacute;ticas de igualdad";
 preguntaids[36] = 369


//  Id pregunta: 2854 Año de creación de pregunta: 2002
 questions[37]= "38)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[37]= new Array();
 choices[37][0] = "X.500";
 choices[37][1] = "ADSI";
 choices[37][2] = "LDAP";
 choices[37][3] = "Todas son falsas";
 answers[37] = 1;
 units[37] = ['58'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2854. ";
 preguntaids[37] = 2854


//  Id pregunta: 4224 Año de creación de pregunta: 2006
 questions[38]= "39)  &iquest;Qu&eacute; tipos de mantenimiento se definen en M&eacute;trica v3 (considerados o no)?";
 choices[38]= new Array();
 choices[38][0] = "Correctivo, adaptativo, preventivo y perfectivo";
 choices[38][1] = "Correctivo, adaptativo, evolutivo y perfectivo";
 choices[38][2] = "Correctivo, Adaptativo y evolutivo";
 choices[38][3] = "Correctivo, adaptativo y perfectivo";
 answers[38] = 1;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4224. ";
 preguntaids[38] = 4224


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[39]= "40)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[39]= new Array();
 choices[39][0] = "formular solicitudes";
 choices[39][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[39][2] = "presentar declaraciones responsables o comunicaciones";
 choices[39][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[39] = 1;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 228. Ley 39/2015";
 preguntaids[39] = 228


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; es el machine learning?";
 choices[40]= new Array();
 choices[40][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[40][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[40][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[40][3] = "Un paradigma en el desarrollo de mecanismos de control";
 answers[40] = 0;
 units[40] = ['73'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 755. Big Data y NoSQL";
 preguntaids[40] = 755


//  Id pregunta: 1286 Año de creación de pregunta: 2016
 questions[41]= "42)  Un ciudadano tiene que iniciar varios procedimientos desde la misma sede electr&oacute;nica, &iquest;en qu&eacute; momento seg&uacute;n el Real Decreto 1671/2009 tiene que otorgar consentimiento para que se puedan recabar los datos o documentos que ya obran en poder de las AAPP?";
 choices[41]= new Array();
 choices[41][0] = "De forma espec&iacute;fica e individualizada para cada procedimiento.";
 choices[41][1] = "Una &uacute;nica vez al configurar su cuenta.";
 choices[41][2] = "Una vez para todos los documentos o datos que est&eacute;n en cada administraci&oacute;n.";
 choices[41][3] = "No es posible otorgar ese consentimiento y tiene que presentar el mismo todos los documentos.";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 1286. ";
 preguntaids[41] = 1286


//  Id pregunta: 7247 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[42]= new Array();
 choices[42][0] = "TACACS+";
 choices[42][1] = "Radius";
 choices[42][2] = "Un grupo de trabajo peer-to-peer";
 choices[42][3] = "Diameter";
 answers[42] = 2;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7247. ";
 preguntaids[42] = 7247


//  Id pregunta: 3704 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l no es un tipo de mantenimiento software?:";
 choices[43]= new Array();
 choices[43][0] = "Continuo";
 choices[43][1] = "Correctivo";
 choices[43][2] = "Adaptativo";
 choices[43][3] = "Perfectivo";
 answers[43] = 0;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 3704. ";
 preguntaids[43] = 3704


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[44]= new Array();
 choices[44][0] = "Los principios rectores";
 choices[44][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[44][2] = "Los hitos para su desarrollo gradual";
 choices[44][3] = "Todos los anteriores";
 answers[44] = 3;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 460. Estrategia TIC";
 preguntaids[44] = 460


//  Id pregunta: 3182 Año de creación de pregunta: 2003
 questions[45]= "46)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "Una persona f&iacute;sica";
 choices[45][1] = "Una persona jur&iacute;dica";
 choices[45][2] = "Ambas";
 choices[45][3] = "S&oacute;lo el Estado";
 answers[45] = 2;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 3182. Ley 59/2003, art&iacute;culo 2.2";
 preguntaids[45] = 3182


//  Id pregunta: 7770 Año de creación de pregunta: 2010
 questions[46]= "47)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l se clasifica como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace:";
 choices[46]= new Array();
 choices[46][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol).";
 choices[46][1] = "IGRP (Interior Gateway Routing Protocol).";
 choices[46][2] = "OSPF (Open Shortest Path First).";
 choices[46][3] = "RIPv2 (Routing Information Protocol ver. 2";
 answers[46] = 0;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7770. ";
 preguntaids[46] = 7770


//  Id pregunta: 10407 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[47]= new Array();
 choices[47][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[47][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[47][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[47][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 10407. ";
 preguntaids[47] = 10407


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[48]= new Array();
 choices[48][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[48][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[48][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[48][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[48] = 1;
 units[48] = ['5'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 114. Uni&oacute;n Europea";
 preguntaids[48] = 114


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[49]= "50)  Respecto al protocolo OCSP, es FALSO que:";
 choices[49]= new Array();
 choices[49][0] = "Los mensajes OCSP son codificados en ASN.1.";
 choices[49][1] = "Est&aacute; definido en el RFC 2560.";
 choices[49][2] = "Tanto la petici&oacute;n como la respuesta deben ir firmadas.";
 choices[49][3] = "Puede usar SMTP como mecanismo de transporte.";
 answers[49] = 2;
 units[49] = ['78'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 796. AGE A2 2015";
 preguntaids[49] = 796


//  Id pregunta: 2227 Año de creación de pregunta: 2002
 questions[50]= "51)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[50]= new Array();
 choices[50][0] = "XGP3";
 choices[50][1] = "XGP4";
 choices[50][2] = "XGP5";
 choices[50][3] = "Todas las respuestas anteriores son correctas";
 answers[50] = 1;
 units[50] = ['43'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2227. ";
 preguntaids[50] = 2227


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[51]= new Array();
 choices[51][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[51][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[51][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[51][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[51] = 3;
 units[51] = ['10'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[51] = 9037


//  Id pregunta: 3631 Año de creación de pregunta: 2004
 questions[52]= "53)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[52]= new Array();
 choices[52][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[52][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[52][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[52][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[52] = 0;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3631. Pregunta Junta Andalucia - A";
 preguntaids[52] = 3631


//  Id pregunta: 10583 Año de creación de pregunta: 2015
 questions[53]= "54)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[53]= new Array();
 choices[53][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[53][1] = "Entregan resultados al cliente o a interesados";
 choices[53][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[53][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[53] = 1;
 units[53] = ['101'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 10583. ";
 preguntaids[53] = 10583


//  Id pregunta: 10812 Año de creación de pregunta: 2015
 questions[54]= "55)  En HTML5, para representar la leyenda de una figura se hace uso de la etiqueta:";
 choices[54]= new Array();
 choices[54][0] = "&lt;figure&gt;";
 choices[54][1] = "&lt;figcaption&gt;";
 choices[54][2] = "&lt;footer&gt;";
 choices[54][3] = "&lt;figlegend&gt;";
 answers[54] = 1;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 10812. ";
 preguntaids[54] = 10812


//  Id pregunta: 8920 Año de creación de pregunta: 2013
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[55]= new Array();
 choices[55][0] = "Autoridad limitada para la toma de decisiones";
 choices[55][1] = "Presupuestos plurianuales en todos los casos";
 choices[55][2] = "M&uacute;ltiples actores involucrados";
 choices[55][3] = "Coordinaci&oacute;n entre organismos";
 answers[55] = 1;
 units[55] = ['40'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 8920. ";
 preguntaids[55] = 8920


//  Id pregunta: 3734 Año de creación de pregunta: 2002
 questions[56]= "57)  A la hora de poner en explotaci&oacute;n un servicio:";
 choices[56]= new Array();
 choices[56][0] = "Conviene realizar las pruebas una vez est&eacute; el servicio en el entorno de explotaci&oacute;n, ya que es el mejor medio para detectar los errores.";
 choices[56][1] = "Conviene realizar las pruebas en el entorno de preexplotaci&oacute;n.";
 choices[56][2] = "Conviene realizar las pruebas en el entorno de desarrollo, ya que el de preexplotaci&oacute;n es s&oacute;lo para las pruebas de rendimiento.";
 choices[56][3] = "Conviene realizar algunas pruebas en el entorno de preexplotaci&oacute;n, y las restantes en el entorno de explotaci&oacute;n, junto a los usuarios.";
 answers[56] = 1;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3734. ";
 preguntaids[56] = 3734


//  Id pregunta: 2853 Año de creación de pregunta: 2002
 questions[57]= "58)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[57]= new Array();
 choices[57][0] = "fvi";
 choices[57][1] = "fred";
 choices[57][2] = "sed";
 choices[57][3] = "xlexp";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2853. sed (stream editor) es un editor de flujo, una potente herramienta de tratamiento de texto para el sistema operativoUnix que acepta como entrada un archivo, lo lee y modifica l&iacute;nea a l&iacute;nea de acuerdo a un script, mostrando el resultado por salida est&aacute;ndar (normalmente en pantalla, a menos que se realice una redirecci&oacute;n). Sed permite manipular flujos de datos, como por ejemplo cortar l&iacute;neas, buscar y reemplazar texto (con soporte de expresiones regulares), entre otras cosas";
 preguntaids[57] = 2853


//  Id pregunta: 5325 Año de creación de pregunta: 2006
 questions[58]= "59)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[58]= new Array();
 choices[58][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[58][1] = "clave";
 choices[58][2] = "acuerdo de nivel de servicio (SLA)";
 choices[58][3] = "dongle";
 answers[58] = 3;
 units[58] = ['41'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 5325. ";
 preguntaids[58] = 5325


//  Id pregunta: 6645 Año de creación de pregunta: 2009
 questions[59]= "60)  Indique cuales son las funciones fundamentales de la Comisi&oacute;n Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[59]= new Array();
 choices[59][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas. Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a. Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[59][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[59][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[59][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[59] = 0;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 6645. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[59] = 6645


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[60]= "61)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[60]= new Array();
 choices[60][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[60][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[60][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[60][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[60] = 0;
 units[60] = ['15'];
 blocks[60] = ['A3'];
 comments[60] = "Id Pregunta: 416. Mercado laboral";
 preguntaids[60] = 416


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[61]= "62)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[61][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "Ambas son incorrectas.";
 answers[61] = 0;
 units[61] = ['14'];
 blocks[61] = ['A3'];
 comments[61] = "Id Pregunta: 409. Pol&iacute;ticas de igualdad";
 preguntaids[61] = 409


//  Id pregunta: 2572 Año de creación de pregunta: 2002
 questions[62]= "63)  A Claude Shannon se le considera:";
 choices[62]= new Array();
 choices[62][0] = "el padre de la telem&aacute;tica moderna";
 choices[62][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[62][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[62][3] = "el creador del primer sistema operativo";
 answers[62] = 0;
 units[62] = ['104'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 2572. ";
 preguntaids[62] = 2572


//  Id pregunta: 1860 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre Fibre Channel";
 choices[63]= new Array();
 choices[63][0] = "Es una tecnolog&iacute;a utilizada para implementar SANs (Storage &Aacute;rea Networks).";
 choices[63][1] = "Funciona exclusivamente sobre fibra &oacute;ptica.";
 choices[63][2] = "Con Fibre Channel se pueden desplegar topolog&iacute;as punto a punto, en anillo e infraestructura conmutada.";
 choices[63][3] = "Los conmutadores Fibre Channel pueden comenzar a transmitir un frame antes de recibirlo en su totalidad.";
 answers[63] = 1;
 units[63] = ['50'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1860. ";
 preguntaids[63] = 1860


//  Id pregunta: 10739 Año de creación de pregunta: 2015
 questions[64]= "65)  De acuerdo a los 6 niveles definidos en CMMI para medir la capacidad de los procesos, &iquest;Qu&eacute; nivel corresponde a un proceso que adem&aacute;s de ser gestionado, se ajusta a la pol&iacute;tica de procesos que existe en la organizaci&oacute;n, alineada con las directivas de la empresa?";
 choices[64]= new Array();
 choices[64][0] = "Nivel 3 Definido";
 choices[64][1] = "Nivel 4 Cuantitativamente Gestionado";
 choices[64][2] = "Nivel 3 Predecible";
 choices[64][3] = "Nivel 5 Optimizado";
 answers[64] = 0;
 units[64] = ['92'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 10739. ";
 preguntaids[64] = 10739


//  Id pregunta: 2977 Año de creación de pregunta: 2002
 questions[65]= "66)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[65][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[65][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[65][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[65] = 3;
 units[65] = ['96', '97'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 2977. ";
 preguntaids[65] = 2977


//  Id pregunta: 7633 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[66]= new Array();
 choices[66][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[66][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[66][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[66][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[66] = 2;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7633. Map 2006";
 preguntaids[66] = 7633


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[67]= "68)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Acoso sexual.";
 choices[67][1] = "Acoso por raz&oacute;n de sexo.";
 choices[67][2] = "Acoso laboral.";
 choices[67][3] = "Acoso mental.";
 answers[67] = 1;
 units[67] = ['14'];
 blocks[67] = ['A3'];
 comments[67] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[67] = 377


//  Id pregunta: 5849 Año de creación de pregunta: 2007
 questions[68]= "69)  Los registros glue de una zona DNS son aquellos que:";
 choices[68]= new Array();
 choices[68][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[68][1] = "Son los registros que mantienen el espacio de nombres de la zona.";
 choices[68][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[68][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[68] = 1;
 units[68] = ['103'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5849. Examen 2006 JCYL";
 preguntaids[68] = 5849


//  Id pregunta: 7443 Año de creación de pregunta: 2010
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a facturae:";
 choices[69]= new Array();
 choices[69][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[69][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[69][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[69][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[69] = 3;
 units[69] = ['75'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7443. ";
 preguntaids[69] = 7443


//  Id pregunta: 1930 Año de creación de pregunta: 2016
 questions[70]= "71)  En el modelo referencial, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[70]= new Array();
 choices[70][0] = "Que todos los datos est&aacute;n referenciados por su clave y &eacute;sta que sea &uacute;nica.";
 choices[70][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[70][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias.";
 choices[70][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[70] = 1;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1930. ";
 preguntaids[70] = 1930


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[71]= new Array();
 choices[71][0] = "Cinco.";
 choices[71][1] = "Dos.";
 choices[71][2] = "Cuatro.";
 choices[71][3] = "Siete.";
 answers[71] = 0;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 40. Constituci&oacute;n de 1978";
 preguntaids[71] = 40


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[72]= "73)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[72]= new Array();
 choices[72][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[72][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[72][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[72][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[72] = 2;
 units[72] = ['7', '47'];
 blocks[72] = ['A2', 'B1'];
 comments[72] = "Id Pregunta: 9782. ";
 preguntaids[72] = 9782


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[73]= "74)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[73]= new Array();
 choices[73][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[73][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[73][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[73][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[73] = 0;
 units[73] = ['12'];
 blocks[73] = ['A3'];
 comments[73] = "Id Pregunta: 342. Modelo econ&oacute;mico";
 preguntaids[73] = 342


//  Id pregunta: 8000 Año de creación de pregunta: 2011
 questions[74]= "75)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[74]= new Array();
 choices[74][0] = "Sun Microsystems.";
 choices[74][1] = "Microsoft.";
 choices[74][2] = "Google.";
 choices[74][3] = "IBM.";
 answers[74] = 0;
 units[74] = ['64'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8000. Examen TIC A2 2010";
 preguntaids[74] = 8000


