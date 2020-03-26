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
//  Id pregunta: 1231 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[0]= new Array();
 choices[0][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[0][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[0][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[0][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[0] = 3;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1231. ";
 preguntaids[0] = 1231


//  Id pregunta: 1347 Año de creación de pregunta: 2016
 questions[1]= "2)  EI Entity Framework es:";
 choices[1]= new Array();
 choices[1][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[1][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[1][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[1][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[1] = 0;
 units[1] = ['63'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1347. ";
 preguntaids[1] = 1347


//  Id pregunta: 1250 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta correcta relativa al protocolo iSCSI (Internet Small Computer System Interface), definido en la RFC 7143:";
 choices[2]= new Array();
 choices[2][0] = "Tanto iniciadores como destinos compatibles iSCSI deben implementar el m&eacute;todo de autenticaci&oacute;n CHAP (Challenge Handshake Authentication Protocol).";
 choices[2][1] = "Un nombre iSCSI consiste en una cadena de texto con tres campos: un designador de tipo, un espacio de nombres, y un nombre de dispositivo &uacute;nico dado por la IETF.";
 choices[2][2] = "En la RFC se definen s&oacute;lo dos designadores de tipo: el tipo &ldquo;iqn&rdquo; y el tipo &ldquo;eui&rdquo;.";
 choices[2][3] = "Debe utilizarse obligatoriamente iSNS (Internet Storage Name Service) para localizar los destinos iSCSI.";
 answers[2] = 0;
 units[2] = ['51'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1250. ";
 preguntaids[2] = 1250


//  Id pregunta: 1414 Año de creación de pregunta: 2016
 questions[3]= "4)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[3]= new Array();
 choices[3][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero solo visible por root.";
 choices[3][1] = "/etc /password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos.";
 choices[3][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible solo por root.";
 choices[3][3] = "/etc /passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios.";
 answers[3] = 2;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1414. ";
 preguntaids[3] = 1414


//  Id pregunta: 1342 Año de creación de pregunta: 2016
 questions[4]= "5)  Throwable es la superclase de todos los errores y excepciones de lava SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[4]= new Array();
 choices[4][0] = "java. lang";
 choices[4][1] = "java.error";
 choices[4][2] = "java.util";
 choices[4][3] = "Throwable no es una clase, es un interface, y este pertenece al paquete java.io.";
 answers[4] = 0;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1342. ";
 preguntaids[4] = 1342


//  Id pregunta: 1359 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada en Java?";
 choices[5]= new Array();
 choices[5][0] = "switch";
 choices[5][1] = "break";
 choices[5][2] = "continue";
 choices[5][3] = "Then";
 answers[5] = 3;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1359. ";
 preguntaids[5] = 1359


//  Id pregunta: 1355 Año de creación de pregunta: 2016
 questions[6]= "7)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;a qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[6]= new Array();
 choices[6][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[6][1] = "Algoritmos de regresi&oacute;n.";
 choices[6][2] = "Algoritmos de segmentaci&oacute;n.";
 choices[6][3] = "Algoritmos de asociaci&oacute;n.";
 answers[6] = 0;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1355. ";
 preguntaids[6] = 1355


//  Id pregunta: 1344 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale cual de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en lava que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[7]= new Array();
 choices[7][0] = "Flex";
 choices[7][1] = "JavaFX";
 choices[7][2] = "AJAX";
 choices[7][3] = "Silverlight";
 answers[7] = 1;
 units[7] = ['74'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1344. ";
 preguntaids[7] = 1344


//  Id pregunta: 1402 Año de creación de pregunta: 2016
 questions[8]= "9)  EI algoritmo SHA-l (RFC 3174) produce un resumen de salida de:";
 choices[8]= new Array();
 choices[8][0] = "128 bits";
 choices[8][1] = "160 bits";
 choices[8][2] = "224 bits";
 choices[8][3] = "256 bits";
 answers[8] = 1;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1402. ";
 preguntaids[8] = 1402


//  Id pregunta: 1275 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[9]= new Array();
 choices[9][0] = "5 a&ntilde;os.";
 choices[9][1] = "10 a&ntilde;os.";
 choices[9][2] = "Permanentemente.";
 choices[9][3] = "15 a&ntilde;os,";
 answers[9] = 3;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1275. ";
 preguntaids[9] = 1275


//  Id pregunta: 1357 Año de creación de pregunta: 2016
 questions[10]= "11)  En relaci&oacute;n con los servicios web y SOAP, las siglas MTOM se corresponden con:";
 choices[10]= new Array();
 choices[10][0] = "Mail Transmission Optimization Mechanism.";
 choices[10][1] = "Message Transmission Optimization Mechanism.";
 choices[10][2] = "Message Transport Optimization Module.";
 choices[10][3] = "Mail Transport Optimization Module.";
 answers[10] = 1;
 units[10] = ['55'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1357. ";
 preguntaids[10] = 1357


//  Id pregunta: 1307 Año de creación de pregunta: 2016
 questions[11]= "12)  Para desarrollar software en el sistema operativo Android, su propietario proporciona Android SDK y para desarrollar nativamente NDK, &iquest;qu&eacute; lenguajes soportan cada uno?";
 choices[11]= new Array();
 choices[11][0] = "Android SDK: ObjectiveC con Cocoa y NDK: desarrollo nativo en C/C++.";
 choices[11][1] = "Android SDK: Java y NDK: ObjectiveC con GNUstep como API de facto.";
 choices[11][2] = "Android SDK: Java con Java ME como API principal y NDK: ObjectiveC con GNUstep como API de facto.";
 choices[11][3] = "Android SDK: Java con una API propia y NDK: desarrollo nativo en C/C++ ..";
 answers[11] = 3;
 units[11] = ['59'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1307. ";
 preguntaids[11] = 1307


//  Id pregunta: 1465 Año de creación de pregunta: 2016
 questions[12]= "13)  Un sistema multiprocesador en el que todas las CPU comparten la memoria corresponde a un modelo del tipo:";
 choices[12]= new Array();
 choices[12][0] = "SMP.";
 choices[12][1] = "MPP o SMP.";
 choices[12][2] = "Ninguno, puesto que en un sistema multiprocesador las CPU nunca comparten memoria.";
 choices[12][3] = "MPP.";
 answers[12] = 0;
 units[12] = ['49'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1465. ";
 preguntaids[12] = 1465


//  Id pregunta: 1304 Año de creación de pregunta: 2016
 questions[13]= "14)  La lIamada POSIX que permite al sistema operativo crear un proceso hijo a partir de un proceso padre es:";
 choices[13]= new Array();
 choices[13][0] = "setpid";
 choices[13][1] = "fork";
 choices[13][2] = "trap";
 choices[13][3] = "exec";
 answers[13] = 1;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1304. ";
 preguntaids[13] = 1304


//  Id pregunta: 1346 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[14]= new Array();
 choices[14][0] = "Contexts and Dependency Injection.";
 choices[14][1] = "Common Display Interface.";
 choices[14][2] = "Context-Dependent Interface.";
 choices[14][3] = "Case-Driven Implementation.";
 answers[14] = 0;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1346. ";
 preguntaids[14] = 1346


//  Id pregunta: 1335 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[15]= new Array();
 choices[15][0] = "ISO/IEC 26300:2006";
 choices[15][1] = "RFC 2373";
 choices[15][2] = "ISO/IEC 9899:1999";
 choices[15][3] = "ISO 9000";
 answers[15] = 0;
 units[15] = ['66'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1335. ";
 preguntaids[15] = 1335


//  Id pregunta: 1343 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[16]= new Array();
 choices[16][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesion stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[16][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[16][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, sequen necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[16][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[16] = 0;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1343. ";
 preguntaids[16] = 1343


//  Id pregunta: 1223 Año de creación de pregunta: 2016
 questions[17]= "18)  Si a un mensaje le aplicamos una funci&oacute;n hash, ciframos el resultado con una clave privada y se lo enviamos a un tercero junto con el mensaje original conseguimos:";
 choices[17]= new Array();
 choices[17][0] = "Autenticaci&oacute;n, Integridad y No repudio en origen.";
 choices[17][1] = "Confidencialidad, Integridad y No repudio en origen.";
 choices[17][2] = "Autenticaci&oacute;n, Confidencialidad e Integridad.";
 choices[17][3] = "Autenticaci&oacute;n, Confidencialidad y No repudio en origen.";
 answers[17] = 0;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1223. ";
 preguntaids[17] = 1223


//  Id pregunta: 1225 Año de creación de pregunta: 2016
 questions[18]= "19)  SHA-1 produce un valor hash de:";
 choices[18]= new Array();
 choices[18][0] = "20 bytes.";
 choices[18][1] = "33 bytes.";
 choices[18][2] = "256 y 512 bits, respectivamente.";
 choices[18][3] = "256 bits.";
 answers[18] = 0;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1225. ";
 preguntaids[18] = 1225


//  Id pregunta: 1333 Año de creación de pregunta: 2016
 questions[19]= "20)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Undo.";
 choices[19][1] = "Rollback.";
 choices[19][2] = "Two Phase Commit.";
 choices[19][3] = "Commit.";
 answers[19] = 1;
 units[19] = ['60'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1333. ";
 preguntaids[19] = 1333


//  Id pregunta: 1278 Año de creación de pregunta: 2016
 questions[20]= "21)  Conforme a la Ley 59/2003, de Firma electr&oacute;nica, el prestador de servicios de certificaci&oacute;n que vaya a cesar en su actividad deber&aacute; comunicarlo a los firmantes que utilicen los certificados electr&oacute;nicos que haya expedido as&iacute; como a los solicitantes de certificados expedidos a favor de personas jur&iacute;dicas, con una antelaci&oacute;n al cese efectivo de la actividad, como m&iacute;nimo de:";
 choices[20]= new Array();
 choices[20][0] = "AI menos seis meses.";
 choices[20][1] = "Un a&ntilde;o natural.";
 choices[20][2] = "AI menos dos meses.";
 choices[20][3] = "AI menos dos semanas.";
 answers[20] = 2;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1278. ";
 preguntaids[20] = 1278


//  Id pregunta: 1298 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una version del sistema operativo Android?";
 choices[21]= new Array();
 choices[21][0] = "Kit Kat.";
 choices[21][1] = "Ice Cream Sandwich.";
 choices[21][2] = "Donut.";
 choices[21][3] = "Candy Marzipan.";
 answers[21] = 3;
 units[21] = ['59'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1298. ";
 preguntaids[21] = 1298


//  Id pregunta: 1277 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; certificados electr&oacute;nicos incluye el chip de la tarjeta del DNI electr&oacute;nico?";
 choices[22]= new Array();
 choices[22][0] = "De autenticaci&oacute;n y de firma.";
 choices[22][1] = "De componente, de autenticaci&oacute;n y de firma.";
 choices[22][2] = "De cifrado y de firma.";
 choices[22][3] = "De cifrado, de autenticaci&oacute;n y de firma.";
 answers[22] = 1;
 units[22] = ['78'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1277. ";
 preguntaids[22] = 1277


//  Id pregunta: 1362 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[23]= new Array();
 choices[23][0] = "true&gt; 2013";
 choices[23][1] = "&gt; 2013";
 choices[23][2] = "cat /dev/null &gt; 2013";
 choices[23][3] = "| &gt; 2013";
 answers[23] = 3;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1362. ";
 preguntaids[23] = 1362


//  Id pregunta: 1464 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Puede darse el caso de un sistema que sea, a la vez, multiusuario y monotarea?";
 choices[24]= new Array();
 choices[24][0] = "No, si es multiusuario, siempre ser&aacute; multitarea.";
 choices[24][1] = "S&iacute;, en ese caso se admiten varios usuarios al mismo tiempo, pero cada uno de ellos puede estar haciendo s&oacute;lo una tarea a la vez.";
 choices[24][2] = "S&iacute;, pero s&oacute;lo si el n&uacute;mero de usuarios es de 2, como m&aacute;ximo, ejecutando tareas alternativamente.";
 choices[24][3] = "S&iacute;, pero s&oacute;lo si se utiliza un sistema gesti&oacute;n de identidades que controle el acceso de los usuarios, de tal forma que act&uacute;e como sem&aacute;foro.";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1464. ";
 preguntaids[24] = 1464


//  Id pregunta: 1471 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;C&oacute;mo se llama la tecnolog&iacute;a de E/S incorporada en 2011 por Apple a sus nuevos iMac o MacBook Pro y que tiene una velocidad superior a FireWire 800 y USB 2.0?";
 choices[25]= new Array();
 choices[25][0] = "Thunderbolt.";
 choices[25][1] = "Lightningbolt.";
 choices[25][2] = "Applebolt.";
 choices[25][3] = "Strikingbolt.";
 answers[25] = 0;
 units[25] = ['59'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1471. ";
 preguntaids[25] = 1471


//  Id pregunta: 1407 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[26]= new Array();
 choices[26][0] = "Web 3.0.";
 choices[26][1] = "Taxonom&iacute;a.";
 choices[26][2] = "Labelling.";
 choices[26][3] = "Folcsonom&iacute;a.";
 answers[26] = 3;
 units[26] = ['74'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1407. ";
 preguntaids[26] = 1407


//  Id pregunta: 1229 Año de creación de pregunta: 2016
 questions[27]= "28)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[27]= new Array();
 choices[27][0] = "OWL";
 choices[27][1] = "RQUERY";
 choices[27][2] = "JQUERY";
 choices[27][3] = "SPARQL";
 answers[27] = 3;
 units[27] = ['74'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1229. ";
 preguntaids[27] = 1229


//  Id pregunta: 1345 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes productos lava dispone de un motor de workflow?";
 choices[28]= new Array();
 choices[28][0] = "Hibernate.";
 choices[28][1] = "Easy BPM.";
 choices[28][2] = "Spring.";
 choices[28][3] = "jBPM.";
 answers[28] = 3;
 units[28] = ['64'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1345. ";
 preguntaids[28] = 1345


//  Id pregunta: 1365 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[29]= new Array();
 choices[29][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[29][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[29][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[29][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[29] = 1;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1365. ";
 preguntaids[29] = 1365


//  Id pregunta: 1300 Año de creación de pregunta: 2016
 questions[30]= "31)  Para crear en Solaris 10 un enlace simb&oacute;lico que se denomine &quot;soft_link&quot; a un archivo denominado &quot;test&quot; y que se encuentra en el mismo directorio que el enlace, &iquest;qu&eacute; comando de los siguientes tenemos que ejecutar?:";
 choices[30]= new Array();
 choices[30][0] = "In test soft_link";
 choices[30][1] = "In -5 test soft_link";
 choices[30][2] = "In soft_link test";
 choices[30][3] = "In -5 soft_link test";
 answers[30] = 1;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1300. ";
 preguntaids[30] = 1300


//  Id pregunta: 1467 Año de creación de pregunta: 2016
 questions[31]= "32)  Android es un sistema operativo basado en:";
 choices[31]= new Array();
 choices[31][0] = "UNIX.";
 choices[31][1] = "Palm OS.";
 choices[31][2] = "Google.";
 choices[31][3] = "Linux.";
 answers[31] = 3;
 units[31] = ['59'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1467. ";
 preguntaids[31] = 1467


//  Id pregunta: 1334 Año de creación de pregunta: 2016
 questions[32]= "33)  AI problema en un SGBD en que dos transacciones paralelas intentan modificar el mismo objeto de la base de datos, leyendo ambas el valor antes de que la otra transacci&oacute;n lo actualice, se conoce como:";
 choices[32]= new Array();
 choices[32][0] = "Lectura sucia.";
 choices[32][1] = "Lectura fantasma.";
 choices[32][2] = "Lectura no repetible.";
 choices[32][3] = "Lectura comprometida.";
 answers[32] = 2;
 units[32] = ['60'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1334. ";
 preguntaids[32] = 1334


//  Id pregunta: 1470 Año de creación de pregunta: 2016
 questions[33]= "34)  Indicad cual de los siguientes sistemas de ficheros corresponde con un sistema espec&iacute;fico de ficheros de red:";
 choices[33]= new Array();
 choices[33][0] = "FAT32";
 choices[33][1] = "UDF";
 choices[33][2] = "NFS";
 choices[33][3] = "HFS";
 answers[33] = 2;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1470. ";
 preguntaids[33] = 1470


//  Id pregunta: 1374 Año de creación de pregunta: 2016
 questions[34]= "35)  Los conectores LC son:";
 choices[34]= new Array();
 choices[34][0] = "Conectores para Pcr.";
 choices[34][1] = "Conectores de par trenzado.";
 choices[34][2] = "Conectores exclusivos para Mainframe.";
 choices[34][3] = "Par trenzado.";
 answers[34] = 3;
 units[34] = ['51'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1374. ";
 preguntaids[34] = 1374


//  Id pregunta: 1403 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la recomendaci&oacute;n XMLDsig de W3C, la firma digital de tipo enveloped signature cumple que:";
 choices[35]= new Array();
 choices[35][0] = "La firma y el documento firmado son dos ficheros diferentes.";
 choices[35][1] = "EI documento firmado va dentro de la firma.";
 choices[35][2] = "La firma va al final del documento firmado como un elemento adiciona!.";
 choices[35][3] = "La firma se inserta en el primer elemento XML del documento.";
 answers[35] = 2;
 units[35] = ['77'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1403. ";
 preguntaids[35] = 1403


//  Id pregunta: 1371 Año de creación de pregunta: 2016
 questions[36]= "37)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[36]= new Array();
 choices[36][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[36][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[36][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[36][3] = "AI gateway para conectar una NAS a una red SAN.";
 answers[36] = 2;
 units[36] = ['53'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1371. ";
 preguntaids[36] = 1371


//  Id pregunta: 1276 Año de creación de pregunta: 2016
 questions[37]= "38)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda.";
 choices[37][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros.";
 choices[37][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[37][3] = "Es una competencia auton&oacute;mica,";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1276. ";
 preguntaids[37] = 1276


//  Id pregunta: 1373 Año de creación de pregunta: 2016
 questions[38]= "39)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[38]= new Array();
 choices[38][0] = "Fibra &oacute;ptica.";
 choices[38][1] = "Mainframes.";
 choices[38][2] = "Buses PCr.";
 choices[38][3] = "Conectores de fibra &oacute;ptica.";
 answers[38] = 0;
 units[38] = ['49'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1373. ";
 preguntaids[38] = 1373


//  Id pregunta: 1352 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cual de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[39]= new Array();
 choices[39][0] = "Joost";
 choices[39][1] = "Netflix";
 choices[39][2] = "Cassandra";
 choices[39][3] = "Hadoop";
 answers[39] = 3;
 units[39] = ['73'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1352. ";
 preguntaids[39] = 1352


//  Id pregunta: 1364 Año de creación de pregunta: 2016
 questions[40]= "41)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[40]= new Array();
 choices[40][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[40][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[40][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[40][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizara siempre que se actualicen las tablas involucradas en esa vista.";
 answers[40] = 2;
 units[40] = ['60'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1364. ";
 preguntaids[40] = 1364


//  Id pregunta: 1354 Año de creación de pregunta: 2016
 questions[41]= "42)  Los ETL son herramientas utilizadas habitualmente en .la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas, herramientas?";
 choices[41]= new Array();
 choices[41][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[41][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[41][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de paginas HTML.";
 choices[41][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[41] = 3;
 units[41] = ['72'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1354. ";
 preguntaids[41] = 1354


//  Id pregunta: 1399 Año de creación de pregunta: 2016
 questions[42]= "43)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[42]= new Array();
 choices[42][0] = "Contiene la clave privada.";
 choices[42][1] = "Cumple la sintaxis PKCS #21.";
 choices[42][2] = "Esta codificado en un Formato no binario.";
 choices[42][3] = "No se puede convertir a Formato .PEM.";
 answers[42] = 0;
 units[42] = ['77'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1399. ";
 preguntaids[42] = 1399


//  Id pregunta: 1228 Año de creación de pregunta: 2016
 questions[43]= "44)  En un contexto web, &iquest;qu&eacute; significa AJAX?";
 choices[43]= new Array();
 choices[43][0] = "Accelerated JAva eXtensions.";
 choices[43][1] = "Active JSON And XML.";
 choices[43][2] = "Asynchronous JAvaScript eXtensions.";
 choices[43][3] = "Asynchronous JavaScript and XML.";
 answers[43] = 3;
 units[43] = ['74'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1228. ";
 preguntaids[43] = 1228


//  Id pregunta: 1368 Año de creación de pregunta: 2016
 questions[44]= "45)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[44]= new Array();
 choices[44][0] = "Tape Management System.";
 choices[44][1] = "Transaction Multiplexing System.";
 choices[44][2] = "Tape Mapping System.";
 choices[44][3] = "Transaction Management System.";
 answers[44] = 0;
 units[44] = ['53'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1368. ";
 preguntaids[44] = 1368


//  Id pregunta: 1306 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Con que directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[45]= new Array();
 choices[45][0] = "Master";
 choices[45][1] = "MasterPage";
 choices[45][2] = "Master.Page";
 choices[45][3] = "Page";
 answers[45] = 0;
 units[45] = ['63'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1306. ";
 preguntaids[45] = 1306


//  Id pregunta: 1303 Año de creación de pregunta: 2016
 questions[46]= "47)  En UNIX, el atributo &quot;uid&quot; de un proceso:";
 choices[46]= new Array();
 choices[46][0] = "Indica el identificador del usuario que ha lanzado el proceso.";
 choices[46][1] = "Indica el grupo del usuario que ha lanzado el proceso.";
 choices[46][2] = "Indica el identificador del proceso.";
 choices[46][3] = "Indica la prioridad del proceso.";
 answers[46] = 0;
 units[46] = ['57'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1303. ";
 preguntaids[46] = 1303


//  Id pregunta: 1302 Año de creación de pregunta: 2016
 questions[47]= "48)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[47]= new Array();
 choices[47][0] = "Java";
 choices[47][1] = "Python";
 choices[47][2] = ".Net";
 choices[47][3] = "nesC";
 answers[47] = 3;
 units[47] = ['59'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1302. ";
 preguntaids[47] = 1302


//  Id pregunta: 1296 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale, de los siguientes, el sistema de ejecuci&oacute;n multi plataforma desarrollado por Adobe para crear aplicaciones RIA que se pueden ejecutar como aplicaciones de escritorio o de dispositivos m&oacute;viles:";
 choices[48]= new Array();
 choices[48][0] = "Android SDK";
 choices[48][1] = "Mahout";
 choices[48][2] = "InDesign";
 choices[48][3] = "AIR";
 answers[48] = 3;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1296. ";
 preguntaids[48] = 1296


//  Id pregunta: 1226 Año de creación de pregunta: 2016
 questions[49]= "50)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[49]= new Array();
 choices[49][0] = "Mediante claves sim&eacute;tricas.";
 choices[49][1] = "Mediante claves asim&eacute;tricas.";
 choices[49][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[49][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[49] = 0;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1226. ";
 preguntaids[49] = 1226


//  Id pregunta: 1469 Año de creación de pregunta: 2016
 questions[50]= "51)  Dentro de la arquitectura de desarrollo .NET de Microsoft, el n&uacute;cleo del Framework se denomina:";
 choices[50]= new Array();
 choices[50][0] = "MSIL";
 choices[50][1] = "Bytecode";
 choices[50][2] = "CIL";
 choices[50][3] = "CLR";
 answers[50] = 3;
 units[50] = ['63'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1469. ";
 preguntaids[50] = 1469


//  Id pregunta: 1337 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale de entre los siguientes cual NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[51]= new Array();
 choices[51][0] = "xUnit";
 choices[51][1] = "xUnit.net";
 choices[51][2] = "NUnit";
 choices[51][3] = "csUnit";
 answers[51] = 0;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1337. ";
 preguntaids[51] = 1337


//  Id pregunta: 1293 Año de creación de pregunta: 2016
 questions[52]= "53)  En los sistemas multiprocesador, los sistemas MIMD se caracterizan por:";
 choices[52]= new Array();
 choices[52][0] = "Varias unidades funcionales realizan diferentes operaciones sobre diferentes datos.";
 choices[52][1] = "Una &uacute;nica unidad funcional realiza varias operaciones sobre diferentes datos.";
 choices[52][2] = "Varias unidades funcionales realizan operaciones similares sobre datos diferentes.";
 choices[52][3] = "Una &uacute;nica unidad funcional realiza una &uacute;nica operaci&oacute;n sobre diferentes datos.";
 answers[52] = 0;
 units[52] = ['49'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1293. ";
 preguntaids[52] = 1293


//  Id pregunta: 1332 Año de creación de pregunta: 2016
 questions[53]= "54)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[53]= new Array();
 choices[53][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[53][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la , informaci&oacute;n de bloqueos.";
 choices[53][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[53][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[53] = 0;
 units[53] = ['60'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1332. ";
 preguntaids[53] = 1332


//  Id pregunta: 1353 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[54]= new Array();
 choices[54][0] = "SELECT";
 choices[54][1] = "DRILL";
 choices[54][2] = "CUBE";
 choices[54][3] = "MEMBER";
 answers[54] = 1;
 units[54] = ['60'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1353. ";
 preguntaids[54] = 1353


//  Id pregunta: 1369 Año de creación de pregunta: 2016
 questions[55]= "56)  La tasa de transferencia maxima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[55]= new Array();
 choices[55][0] = "300 MB/s.";
 choices[55][1] = "900 MB/s.";
 choices[55][2] = "600 MB/s.";
 choices[55][3] = "150 MB/s.";
 answers[55] = 2;
 units[55] = ['51'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1369. ";
 preguntaids[55] = 1369


//  Id pregunta: 1297 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[56]= new Array();
 choices[56][0] = "Petta byte (PS)";
 choices[56][1] = "Terabyte (TS)";
 choices[56][2] = "Yottabyte (YS)";
 choices[56][3] = "Zettabyte (ZS)";
 answers[56] = 2;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1297. ";
 preguntaids[56] = 1297


//  Id pregunta: 1295 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el est&aacute;ndar del nuevo USB 3.1, &iquest;Cu&aacute;l es su velocidad?";
 choices[57]= new Array();
 choices[57][0] = "12 Gbps";
 choices[57][1] = "8 Gbps";
 choices[57][2] = "6 Gbps";
 choices[57][3] = "10 Gbps";
 answers[57] = 3;
 units[57] = ['51'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1295. ";
 preguntaids[57] = 1295


//  Id pregunta: 1220 Año de creación de pregunta: 2016
 questions[58]= "59)  En el &aacute;mbito de la criptograf&iacute;a asim&eacute;trica, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[58]= new Array();
 choices[58][0] = "La clave p&uacute;blica sirve para firmar los documentos, antes de enviarlos.";
 choices[58][1] = "La clave privada sirve para cifrar la clave p&uacute;blica antes de firmar con esta &uacute;ltima un documento.";
 choices[58][2] = "La clave privada se ha de generar aleatoriamente a partir de la clave p&uacute;blica cada vez que se firma un documento.";
 choices[58][3] = "La clave p&uacute;blica sirve para comprobar la firma digital de un documento firmado.";
 answers[58] = 3;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1220. ";
 preguntaids[58] = 1220


//  Id pregunta: 1363 Año de creación de pregunta: 2016
 questions[59]= "60)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[59]= new Array();
 choices[59][0] = "Mediante cuotas de disco.";
 choices[59][1] = "Mediante el editor de directivas de grupo.";
 choices[59][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[59][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[59] = 0;
 units[59] = ['57'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 1363. ";
 preguntaids[59] = 1363


//  Id pregunta: 1273 Año de creación de pregunta: 2016
 questions[60]= "61)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[60]= new Array();
 choices[60][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root.";
 choices[60][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos.";
 choices[60][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root.";
 choices[60][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios.";
 answers[60] = 2;
 units[60] = ['57'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1273. ";
 preguntaids[60] = 1273


//  Id pregunta: 1331 Año de creación de pregunta: 2016
 questions[61]= "62)  EI termino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[61]= new Array();
 choices[61][0] = "Authentication, Consistency, Integrity, Durability.";
 choices[61][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[61][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[61][3] = "Availability, Consistency, Isolation, Durability.";
 answers[61] = 2;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1331. ";
 preguntaids[61] = 1331


//  Id pregunta: 1271 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes extensiones se corresponde con el est&aacute;ndar de documentos abiertos para aplicaciones ofim&aacute;ticas (OpenDocument) para documentos de texto (cuyo tipo MIME es application/vnd.oasis.opendocument.text):";
 choices[62]= new Array();
 choices[62][0] = ".ods";
 choices[62][1] = ".doc";
 choices[62][2] = ".txt";
 choices[62][3] = ".odt";
 answers[62] = 3;
 units[62] = ['66'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1271. ";
 preguntaids[62] = 1271


//  Id pregunta: 1203 Año de creación de pregunta: 2016
 questions[63]= "64)  Cu&aacute;l de las siguientes relaciones NO es correcta:";
 choices[63]= new Array();
 choices[63][0] = "1024 Petabytes = 1 Zettabyte.";
 choices[63][1] = "1024 Zettabytes = 1 Yottabyte.";
 choices[63][2] = "1024 Yottabytes = 1 Brontobyte.";
 choices[63][3] = "1024 Brontobytes = 1 Geopbyte.";
 answers[63] = 0;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1203. ";
 preguntaids[63] = 1203


//  Id pregunta: 1209 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;alar cu&aacute;l de las siguientes NO es una ventaja del uso de directorios LDAP para la autenticaci&oacute;n de usuarios:";
 choices[64]= new Array();
 choices[64][0] = "La mayor&iacute;a de aplicaciones comerciales permiten su integraci&oacute;n f&aacute;cilmente.";
 choices[64][1] = "Est&aacute;n optimizados para las b&uacute;squedas, que es la operaci&oacute;n m&aacute;s repetida a la hora de gestionar los usuarios.";
 choices[64][2] = "Permiten implantar sin ning&uacute;n mecanismo adicional Single Sign On, ya que todas las aplicaciones pueden tener la autenticaci&oacute;n a trav&eacute;s del LDAP.";
 choices[64][3] = "La replicaci&oacute;n con los directorios /etc/passwd est&aacute; automatizada, y por tanto la integraci&oacute;n con las aplicaciones comerciales.";
 answers[64] = 3;
 units[64] = ['77'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1209. ";
 preguntaids[64] = 1209


//  Id pregunta: 1372 Año de creación de pregunta: 2016
 questions[65]= "66)  Comparando NAS (Network-attacheda Storage) con SAN (Storage Area Network):";
 choices[65]= new Array();
 choices[65][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[65][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[65][2] = "Ambos operan a nivel de bloque.";
 choices[65][3] = "Ambos operan a nivel de fichero.";
 answers[65] = 0;
 units[65] = ['53'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1372. ";
 preguntaids[65] = 1372


//  Id pregunta: 1348 Año de creación de pregunta: 2016
 questions[66]= "67)  Elija la respuesta correcta:";
 choices[66]= new Array();
 choices[66][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[66][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[66][2] = "EI Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[66][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[66] = 0;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1348. ";
 preguntaids[66] = 1348


//  Id pregunta: 1349 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[67]= new Array();
 choices[67][0] = "Model View Controlar.";
 choices[67][1] = "Multiple Views canvas.";
 choices[67][2] = "Mobile Video Compatible.";
 choices[67][3] = "Mobile View Connector.";
 answers[67] = 0;
 units[67] = ['63'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1349. ";
 preguntaids[67] = 1349


//  Id pregunta: 1305 Año de creación de pregunta: 2016
 questions[68]= "69)  En el sistema operativo Linux, &iquest;Cu&aacute;l de las siguientes opciones busca la palabra &quot;Iibro&quot; dentro de ficheros?";
 choices[68]= new Array();
 choices[68][0] = "find -type f I xwygs grep &quot;libro&quot;";
 choices[68][1] = "find -type f I xaygs grep &quot;libro&quot;";
 choices[68][2] = "find -type f I xargs grep &quot;libro&quot;";
 choices[68][3] = "find -type f I xargp grep &quot;libro&quot;";
 answers[68] = 2;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1305. ";
 preguntaids[68] = 1305


//  Id pregunta: 1301 Año de creación de pregunta: 2016
 questions[69]= "70)  En el contexto de los sistemas operativos, &iquest;qu&eacute; es un Kernel Panic?";
 choices[69]= new Array();
 choices[69][0] = "No existe tal terminolog&iacute;a.";
 choices[69][1] = "Es un error de los dispositivos de entrada/salida.";
 choices[69][2] = "Es un error en el n&uacute;cleo del sistema.";
 choices[69][3] = "Es un tipo de error de memoria.";
 answers[69] = 2;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1301. ";
 preguntaids[69] = 1301


//  Id pregunta: 1361 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[70]= new Array();
 choices[70][0] = "Los ficheros abiertos.";
 choices[70][1] = "EI escritorio.";
 choices[70][2] = "Los procesos.";
 choices[70][3] = "Los puertos TCP/IP.";
 answers[70] = 2;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1361. ";
 preguntaids[70] = 1361


//  Id pregunta: 1280 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;De qu&eacute; material est&aacute; hecha la tarjeta f&iacute;sica del DNI-electr&oacute;nico?";
 choices[71]= new Array();
 choices[71][0] = "Policloruro de vinilo.";
 choices[71][1] = "Policarbonato.";
 choices[71][2] = "Polietileno de alta densidad.";
 choices[71][3] = "Fibra de vidrio.";
 answers[71] = 1;
 units[71] = ['78'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1280. ";
 preguntaids[71] = 1280


//  Id pregunta: 1356 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; es el &quot;Data staging Area&quot; en el contexto de los Data Warehouses?";
 choices[72]= new Array();
 choices[72][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extra en los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[72][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[72][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando estos no pueden ejecutarse en tiempo real.";
 choices[72][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[72] = 0;
 units[72] = ['72'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1356. ";
 preguntaids[72] = 1356


//  Id pregunta: 1370 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[73]= new Array();
 choices[73][0] = "33%";
 choices[73][1] = "20%";
 choices[73][2] = "50%";
 choices[73][3] = "0%";
 answers[73] = 0;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1370. ";
 preguntaids[73] = 1370


//  Id pregunta: 1299 Año de creación de pregunta: 2016
 questions[74]= "75)  De los siguientes comandos UNIX, indique el que permite mostrar el espacio libre disponible en el disco:";
 choices[74]= new Array();
 choices[74][0] = "df";
 choices[74][1] = "du";
 choices[74][2] = "ps";
 choices[74][3] = "wc";
 answers[74] = 0;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1299. ";
 preguntaids[74] = 1299


