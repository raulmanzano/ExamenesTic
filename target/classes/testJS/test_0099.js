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
//  Id pregunta: 6859 Año de creación de pregunta: 2010
 questions[0]= "1)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[0]= new Array();
 choices[0][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[0][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[0][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[0][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[0] = 3;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 6859. TIC A 2009";
 preguntaids[0] = 6859


//  Id pregunta: 8637 Año de creación de pregunta: 2013
 questions[1]= "2)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[1]= new Array();
 choices[1][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[1][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[1][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[1][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[1] = 2;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 8637. ";
 preguntaids[1] = 8637


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[2]= "3)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[2]= new Array();
 choices[2][0] = "Ejecutivo";
 choices[2][1] = "Limitativo";
 choices[2][2] = "Estimativo";
 choices[2][3] = "Progresivo";
 answers[2] = 1;
 units[2] = ['11'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 265. Presupuestos generales";
 preguntaids[2] = 265


//  Id pregunta: 2476 Año de creación de pregunta: 2002
 questions[3]= "4)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[3]= new Array();
 choices[3][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[3][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[3][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[3][3] = "Funcionarios del Estado";
 answers[3] = 1;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 2476. ";
 preguntaids[3] = 2476


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[4]= "5)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[4]= new Array();
 choices[4][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[4][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[4][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[4][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[4] = 2;
 units[4] = ['7'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 231. Ley 39/2015";
 preguntaids[4] = 231


//  Id pregunta: 2541 Año de creación de pregunta: 2004
 questions[5]= "6)  Los tipos de tarjetas inteligentes son";
 choices[5]= new Array();
 choices[5][0] = "de acoplamiento";
 choices[5][1] = "de vecindad";
 choices[5][2] = "de proximidad";
 choices[5][3] = "todas las anteriores";
 answers[5] = 3;
 units[5] = ['78'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2541. ";
 preguntaids[5] = 2541


//  Id pregunta: 9184 Año de creación de pregunta: 2014
 questions[6]= "7)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[6]= new Array();
 choices[6][0] = "Similar a la de USB 2.0.";
 choices[6][1] = "10 veces superior a la de USB 2.0.";
 choices[6][2] = "480 Mbps.";
 choices[6][3] = "15 veces superior a la de USB 2.0.";
 answers[6] = 1;
 units[6] = ['51'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9184. Examen TIC A2 2013";
 preguntaids[6] = 9184


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[7]= new Array();
 choices[7][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[7][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[7][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[7][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[7] = 1;
 units[7] = ['12'];
 blocks[7] = ['A3'];
 comments[7] = "Id Pregunta: 331. Modelo econ&oacute;mico";
 preguntaids[7] = 331


//  Id pregunta: 1240 Año de creación de pregunta: 2016
 questions[8]= "9)  La longitud de clave que se usa en el cifrado opcional de DECT, el denominado DECT Standard Cipher (DSC) es:";
 choices[8]= new Array();
 choices[8][0] = "32 bits.";
 choices[8][1] = "64 bits.";
 choices[8][2] = "128 bits.";
 choices[8][3] = "256 bits.";
 answers[8] = 1;
 units[8] = ['117'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1240. ";
 preguntaids[8] = 1240


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[9]= "10)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[9]= new Array();
 choices[9][0] = "T&iacute;tulo I";
 choices[9][1] = "T&iacute;tulo II";
 choices[9][2] = "T&iacute;tulo III";
 choices[9][3] = "T&iacute;tulo IV";
 answers[9] = 1;
 units[9] = ['7', '19'];
 blocks[9] = ['A2', 'A4'];
 comments[9] = "Id Pregunta: 9889. ";
 preguntaids[9] = 9889


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[10]= new Array();
 choices[10][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[10][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[10][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[10][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[10] = 3;
 units[10] = ['22'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 499. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[10] = 499


//  Id pregunta: 3051 Año de creación de pregunta: 2002
 questions[11]= "12)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[11]= new Array();
 choices[11][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[11][1] = "Es muy cara de dise&ntilde;ar";
 choices[11][2] = "Es reprogramable f&aacute;cilmente";
 choices[11][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[11] = 2;
 units[11] = ['52'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3051. ";
 preguntaids[11] = 3051


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[12]= new Array();
 choices[12][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[12][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[12][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[12][3] = "Sancionar y publicar las leyes.";
 answers[12] = 2;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[12] = 72


//  Id pregunta: 5620 Año de creación de pregunta: 2007
 questions[13]= "14)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[13][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[13][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[13][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[13] = 0;
 units[13] = ['61'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5620. ";
 preguntaids[13] = 5620


//  Id pregunta: 9811 Año de creación de pregunta: 2015
 questions[14]= "15)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[14]= new Array();
 choices[14][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[14][1] = "Lock-in (cliente cautivo)";
 choices[14][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[14][3] = "Ninguno de los anteriores.";
 answers[14] = 1;
 units[14] = ['52'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9811. ";
 preguntaids[14] = 9811


//  Id pregunta: 3264 Año de creación de pregunta: 2003
 questions[15]= "16)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[15]= new Array();
 choices[15][0] = "TripleDES, RC4 y SHA-1";
 choices[15][1] = "DES, RC2 y MD5";
 choices[15][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[15][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5";
 answers[15] = 3;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3264. ";
 preguntaids[15] = 3264


//  Id pregunta: 10402 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[16]= new Array();
 choices[16][0] = "0.2";
 choices[16][1] = "0.33";
 choices[16][2] = "0.5";
 choices[16][3] = "0.8";
 answers[16] = 2;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 10402. ";
 preguntaids[16] = 10402


//  Id pregunta: 7741 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?";
 choices[17]= new Array();
 choices[17][0] = "Los XML Schemas utilizan sintaxis XML.";
 choices[17][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML.";
 choices[17][2] = "Los XML Schemas soportan namespaces.";
 choices[17][3] = "Los XML Schemas permiten definir tipos de datos.";
 answers[17] = 1;
 units[17] = ['74'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7741. ";
 preguntaids[17] = 7741


//  Id pregunta: 7790 Año de creación de pregunta: 2010
 questions[18]= "19)  Con respecto a los sistemas RFID (Radio Frecuency Identification), indique la respuesta incorrecta:";
 choices[18]= new Array();
 choices[18][0] = "Las etiquetas RFID pueden ser activas, semipasivas o pasivas";
 choices[18][1] = "Pueden funcionar en rangos de frecuencia baja (125 KHz), alta (13.56 MHz), ultraelevada (868 MHz) o de microondas (2.45 GHz)";
 choices[18][2] = "Necesitan tener una l&iacute;nea de visi&oacute;n directa para su correcto funcionamiento";
 choices[18][3] = "La tecnolog&iacute;a Near Field Communications (NFC) es un subconjunto de RFID";
 answers[18] = 2;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7790. ";
 preguntaids[18] = 7790


//  Id pregunta: 9029 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[19]= new Array();
 choices[19][0] = "256";
 choices[19][1] = "512";
 choices[19][2] = "1024";
 choices[19][3] = "2048";
 answers[19] = 2;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9029. ";
 preguntaids[19] = 9029


//  Id pregunta: 4439 Año de creación de pregunta: 2002
 questions[20]= "21)  Una Bridge CA:";
 choices[20]= new Array();
 choices[20][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[20][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[20][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[20][3] = "Todas son falsas";
 answers[20] = 2;
 units[20] = ['102'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4439. ";
 preguntaids[20] = 4439


//  Id pregunta: 4800 Año de creación de pregunta: 2002
 questions[21]= "22)  En el protocolo IPv6:";
 choices[21]= new Array();
 choices[21][0] = "El campo 'Traffic Class' tiene 8 bits de longitud";
 choices[21][1] = "El campo 'Priority' tiene 8 bits de longitud";
 choices[21][2] = "El campo 'Header CheckSum' tiene 8 bits de longitud";
 choices[21][3] = "El campo 'TOS' indica el tipo de servicio";
 answers[21] = 0;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4800. ";
 preguntaids[21] = 4800


//  Id pregunta: 1937 Año de creación de pregunta: 2016
 questions[22]= "23)  De las siguientes cuestiones de la arquitectura .NET indique cual es FALSA.";
 choices[22]= new Array();
 choices[22][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[22][1] = "Las clases ADO.NET permiten acceder a datos.";
 choices[22][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la plataforma.";
 choices[22][3] = "En la arquitectura .NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n";
 answers[22] = 2;
 units[22] = ['63'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1937. ";
 preguntaids[22] = 1937


//  Id pregunta: 2975 Año de creación de pregunta: 2002
 questions[23]= "24)  Los criptosistemas irreversibles:";
 choices[23]= new Array();
 choices[23][0] = "No existen actualmente dada la potencia de los sistemas actuales y la potencia de la computaci&oacute;n distribuida";
 choices[23][1] = "Se utilizan sobre todo para la autenticaci&oacute;n de entidades";
 choices[23][2] = "Se basan en funciones matem&aacute;ticas no invertibles computacionalmente, o carentes de inversa";
 choices[23][3] = "B y C son ciertas";
 answers[23] = 3;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2975. ";
 preguntaids[23] = 2975


//  Id pregunta: 1212 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; n&uacute;meros de puerto TCP tienen asignados por IANA los protocolos IMAP e IMAPS (IMAP4 sobre TLS/SSL)?";
 choices[24]= new Array();
 choices[24][0] = "IMAP 143 e IMAPS 993.";
 choices[24][1] = "IMAPS 143 e IMAP 993.";
 choices[24][2] = "IMAP 193 e IMAPS 443.";
 choices[24][3] = "IMAPS 193 e IMAP 443.";
 answers[24] = 0;
 units[24] = ['109'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1212. ";
 preguntaids[24] = 1212


//  Id pregunta: 6391 Año de creación de pregunta: 2003
 questions[25]= "26)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[25]= new Array();
 choices[25][0] = "Estudio de Viabilidad del Sistema";
 choices[25][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[25][2] = "Definici&oacute;n del Sistema";
 choices[25][3] = "Estudio del Sistema Actual";
 answers[25] = 0;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6391. Examen 2006 JCYL";
 preguntaids[25] = 6391


//  Id pregunta: 2413 Año de creación de pregunta: 2006
 questions[26]= "27)  El Plan de Contingencias:";
 choices[26]= new Array();
 choices[26][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[26][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[26][2] = "las dos primeras son ciertas";
 choices[26][3] = "las dos primeras son falsas";
 answers[26] = 2;
 units[26] = ['45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2413. ";
 preguntaids[26] = 2413


//  Id pregunta: 2175 Año de creación de pregunta: 2002
 questions[27]= "28)  En un An&aacute;lisis de Criticidad los elementos cr&iacute;ticos de un Sistema se clasifican seg&uacute;n:";
 choices[27]= new Array();
 choices[27][0] = "La probabilidad de mal funcionamiento de uno de ellos";
 choices[27][1] = "La estimaci&oacute;n de los costes de los da&ntilde;os derivados de su mal funcionamiento";
 choices[27][2] = "El tiempo durante el cu&aacute;l se puede asumir su carencia o mal funcionamiento";
 choices[27][3] = "El n&uacute;mero de elementos alternativos a cada elemento cr&iacute;tico";
 answers[27] = 2;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2175. ";
 preguntaids[27] = 2175


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[28]= new Array();
 choices[28][0] = "En 2011";
 choices[28][1] = "En 2013";
 choices[28][2] = "En 2015";
 choices[28][3] = "En 2016";
 answers[28] = 2;
 units[28] = ['17'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 438. Mercado &Uacute;nico Digital";
 preguntaids[28] = 438


//  Id pregunta: 7981 Año de creación de pregunta: 2011
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[29]= new Array();
 choices[29][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[29][1] = "Staffing Size.";
 choices[29][2] = "Catalogaci&oacute;n.";
 choices[29][3] = "Diagrama de Gantt.";
 answers[29] = 2;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7981. Examen TIC A2 2010";
 preguntaids[29] = 7981


//  Id pregunta: 10732 Año de creación de pregunta: 2015
 questions[30]= "31)  En relaci&oacute;n con las t&eacute;cnicas de planificaci&oacute;n de proyectos se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[30]= new Array();
 choices[30][0] = "Una diferencia entre PERT y CPM es que este &uacute;ltimo considera que los tiempos de las actividades se conocen en forma determin&iacute;stica y se pueden variar cambiando el nivel de recursos utilizados.";
 choices[30][1] = "PERT considera que cuando el n&uacute;mero de actividades de un proyecto es lo suficientemente elevado, la duraci&oacute;n del proyecto es una variable aleatoria que converge en una distribuci&oacute;n Normal.";
 choices[30][2] = "El diagrama de GANTT realiza la planificaci&oacute;n y la programaci&oacute;n al mismo tiempo.";
 choices[30][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[30] = 3;
 units[30] = ['31'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 10732. ";
 preguntaids[30] = 10732


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[31]= "32)  Los Reglamentos no se caracterizan por:";
 choices[31]= new Array();
 choices[31][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[31][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[31][2] = "Ser obligatorios.";
 choices[31][3] = "No poseer alcance general.";
 answers[31] = 3;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 178. Uni&oacute;n Europea";
 preguntaids[31] = 178


//  Id pregunta: 9439 Año de creación de pregunta: 2014
 questions[32]= "33)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[32]= new Array();
 choices[32][0] = "Fault Mangement";
 choices[32][1] = "Configuration Management";
 choices[32][2] = "Accounting Management";
 choices[32][3] = "Improvement Management";
 answers[32] = 3;
 units[32] = ['105'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9439. ";
 preguntaids[32] = 9439


//  Id pregunta: 10397 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[33]= new Array();
 choices[33][0] = "Confianza Digital";
 choices[33][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[33][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[33][3] = "Interoperabilidad y normas";
 answers[33] = 3;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 10397. ";
 preguntaids[33] = 10397


//  Id pregunta: 8864 Año de creación de pregunta: 2013
 questions[34]= "35)  El uso de la t&eacute;cnica de la media para combinar estimaciones software individuales es caracter&iacute;stico de los m&eacute;todos:";
 choices[34]= new Array();
 choices[34][0] = "Con base hist&oacute;rica";
 choices[34][1] = "Con base estad&iacute;stica";
 choices[34][2] = "Compuestos";
 choices[34][3] = "Lineales";
 answers[34] = 0;
 units[34] = ['94'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 8864. ";
 preguntaids[34] = 8864


//  Id pregunta: 8016 Año de creación de pregunta: 2011
 questions[35]= "36)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Mantenimiento adaptativo.";
 choices[35][1] = "Mantenimiento preventivo.";
 choices[35][2] = "Mantenimiento correctivo.";
 choices[35][3] = "Mantenimiento evolutivo.";
 answers[35] = 1;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 8016. Examen TIC A2 2010";
 preguntaids[35] = 8016


//  Id pregunta: 4419 Año de creación de pregunta: 2002
 questions[36]= "37)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[36]= new Array();
 choices[36][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[36][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[36][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[36][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[36] = 2;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 4419. ";
 preguntaids[36] = 4419


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[37]= "38)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[37]= new Array();
 choices[37][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[37][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[37][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[37][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[37] = 0;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 2555. ";
 preguntaids[37] = 2555


//  Id pregunta: 1362 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[38]= new Array();
 choices[38][0] = "true&gt; 2013";
 choices[38][1] = "&gt; 2013";
 choices[38][2] = "cat /dev/null &gt; 2013";
 choices[38][3] = "| &gt; 2013";
 answers[38] = 3;
 units[38] = ['57'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1362. ";
 preguntaids[38] = 1362


//  Id pregunta: 9300 Año de creación de pregunta: 2014
 questions[39]= "40)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[39]= new Array();
 choices[39][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[39][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[39][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[39][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[39] = 0;
 units[39] = ['72'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9300. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[39] = 9300


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[40]= new Array();
 choices[40][0] = "Reducir el gasto p&uacute;blico.";
 choices[40][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[40][2] = "Reducir el endeudamiento neto.";
 choices[40][3] = "Al Fondo de Contingencia.";
 answers[40] = 2;
 units[40] = ['11'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 325. Presupuestos generales";
 preguntaids[40] = 325


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[41]= new Array();
 choices[41][0] = "Tiene car&aacute;cter facultativo.";
 choices[41][1] = "Tiene car&aacute;cter potestativo.";
 choices[41][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[41][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[41] = 1;
 units[41] = ['22'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[41] = 500


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[42]= "43)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[42]= new Array();
 choices[42][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[42][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[42][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[42][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[42] = 2;
 units[42] = ['14'];
 blocks[42] = ['A3'];
 comments[42] = "Id Pregunta: 408. Pol&iacute;ticas de igualdad";
 preguntaids[42] = 408


//  Id pregunta: 5728 Año de creación de pregunta: 2007
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes aspectos NO son tratados en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?:";
 choices[43]= new Array();
 choices[43][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[43][1] = "promueve la elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[43][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a la informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[43][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 5728. ";
 preguntaids[43] = 5728


//  Id pregunta: 2227 Año de creación de pregunta: 2002
 questions[44]= "45)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[44]= new Array();
 choices[44][0] = "XGP3";
 choices[44][1] = "XGP4";
 choices[44][2] = "XGP5";
 choices[44][3] = "Todas las respuestas anteriores son correctas";
 answers[44] = 1;
 units[44] = ['43'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2227. ";
 preguntaids[44] = 2227


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[45]= "46)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[45]= new Array();
 choices[45][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[45][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[45][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[45][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[45] = 1;
 units[45] = ['7'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 7705. Map 2007";
 preguntaids[45] = 7705


//  Id pregunta: 5046 Año de creación de pregunta: 2002
 questions[46]= "47)  Se conoce como tiempo de vuelo a:";
 choices[46]= new Array();
 choices[46][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[46][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[46][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[46][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[46] = 1;
 units[46] = ['117'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5046. ";
 preguntaids[46] = 5046


//  Id pregunta: 3735 Año de creación de pregunta: 2002
 questions[47]= "48)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[47]= new Array();
 choices[47][0] = "Superiores (upper CASE).";
 choices[47][1] = "Inferiores (lower CASE).";
 choices[47][2] = "Las 2 anteriores son correctas.";
 choices[47][3] = "Todas son falsas.";
 answers[47] = 1;
 units[47] = ['97'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3735. ";
 preguntaids[47] = 3735


//  Id pregunta: 6664 Año de creación de pregunta: 2009
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[48]= new Array();
 choices[48][0] = "Vista de Componentes.";
 choices[48][1] = "Vista de Despliegue.";
 choices[48][2] = "Vista de Casos de Uso.";
 choices[48][3] = "Vista de Flujo de Datos.";
 answers[48] = 3;
 units[48] = ['89'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6664. MAP 2008 A1";
 preguntaids[48] = 6664


//  Id pregunta: 1255 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[49]= new Array();
 choices[49][0] = "Art&iacute;culo 70.";
 choices[49][1] = "Art&iacute;culo 54.";
 choices[49][2] = "Articulo 62.";
 choices[49][3] = "Articulo 55.";
 answers[49] = 1;
 units[49] = ['1'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 1255. ";
 preguntaids[49] = 1255


//  Id pregunta: 3140 Año de creación de pregunta: 2002
 questions[50]= "51)  Los c&oacute;decs DivX permiten:";
 choices[50]= new Array();
 choices[50][0] = "Escuchar la radio en un PC";
 choices[50][1] = "Ver la TV en un PC";
 choices[50][2] = "Conectar cualquier dispositivo Bluetooth a un PC";
 choices[50][3] = "Ver v&iacute;deos en un PC";
 answers[50] = 3;
 units[50] = ['53'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3140. ";
 preguntaids[50] = 3140


//  Id pregunta: 9132 Año de creación de pregunta: 2014
 questions[51]= "52)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[51]= new Array();
 choices[51][0] = "ASI";
 choices[51][1] = "DSI";
 choices[51][2] = "CSI";
 choices[51][3] = "MSI";
 answers[51] = 3;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 9132. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";
 preguntaids[51] = 9132


//  Id pregunta: 2119 Año de creación de pregunta: 2002
 questions[52]= "53)  En cuanto a las sanciones a aplicar por incumpimiento de la LOPD y las medidas de protecci&oacute;n asociadas:";
 choices[52]= new Array();
 choices[52][0] = "La prescripci&oacute;n de las sanciones es de 2 a&ntilde;os para sanciones leves, 3 para las graves y 4 para las muy graves";
 choices[52][1] = "Las infracciones muy graves ser&aacute;n sancionadas con multa de 300.001 a 600.000 euros.";
 choices[52][2] = "En ning&uacute;n caso se deber&aacute;n inmovilizar ni destruir los ficheros causantes de la sanci&oacute;n";
 choices[52][3] = "La cuant&iacute;a de la sanci&oacute;n est&aacute; prefijada, no depende de factores como el volumen de informaci&oacute;n, los derechos personales afectados, los beneficios obtenidos o la reincidencia";
 answers[52] = 1;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2119. ";
 preguntaids[52] = 2119


//  Id pregunta: 4133 Año de creación de pregunta: 2003
 questions[53]= "54)  M&eacute;todo de interpolaci&oacute;n en la correcci&oacute;n geom&eacute;trica:";
 choices[53]= new Array();
 choices[53][0] = "Vecino m&aacute;s pr&oacute;ximo.";
 choices[53][1] = "Bilineal.";
 choices[53][2] = "Bic&uacute;bica.";
 choices[53][3] = "Todos los anteriores.";
 answers[53] = 3;
 units[53] = ['100'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 4133. ";
 preguntaids[53] = 4133


//  Id pregunta: 9140 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[54]= new Array();
 choices[54][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[54][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[54][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[54][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[54] = 0;
 units[54] = ['101'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 9140. ";
 preguntaids[54] = 9140


//  Id pregunta: 9329 Año de creación de pregunta: 2014
 questions[55]= "56)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[55]= new Array();
 choices[55][0] = "siempre se ejecuta en segundo plano (background).";
 choices[55][1] = "siempre es de corta duraci&oacute;n.";
 choices[55][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[55][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[55] = 0;
 units[55] = ['57'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9329. ";
 preguntaids[55] = 9329


//  Id pregunta: 1420 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; T&iacute;tulo regula la Econom&iacute;a y la Hacienda en la Constituci&oacute;n Espa&ntilde;ola vigente en la actualidad?:";
 choices[56]= new Array();
 choices[56][0] = "El T&iacute;tulo IV.";
 choices[56][1] = "El T&iacute;tulo V.";
 choices[56][2] = "El T&iacute;tulo VI.";
 choices[56][3] = "El T&iacute;tulo VII.";
 answers[56] = 3;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 1420. ";
 preguntaids[56] = 1420


//  Id pregunta: 9652 Año de creación de pregunta: 2014
 questions[57]= "58)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios?";
 choices[57]= new Array();
 choices[57][0] = "CREATE VIEW.";
 choices[57][1] = "GRANT.";
 choices[57][2] = "CREATE PROFILE.";
 choices[57][3] = "CREATE ROLE.";
 answers[57] = 0;
 units[57] = ['61'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9652. Examen TIC A1 2013";
 preguntaids[57] = 9652


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[58]= new Array();
 choices[58][0] = "Anual";
 choices[58][1] = "Mensual";
 choices[58][2] = "Semestral";
 choices[58][3] = "Trimestral";
 answers[58] = 3;
 units[58] = ['15'];
 blocks[58] = ['A3'];
 comments[58] = "Id Pregunta: 424. Mercado laboral";
 preguntaids[58] = 424


//  Id pregunta: 6640 Año de creación de pregunta: 2009
 questions[59]= "60)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[59]= new Array();
 choices[59][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[59][1] = "100 kbps";
 choices[59][2] = "144 Kbps";
 choices[59][3] = "384 kbps";
 answers[59] = 3;
 units[59] = ['117'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 6640. ";
 preguntaids[59] = 6640


//  Id pregunta: 4497 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[60]= new Array();
 choices[60][0] = "SMTP-X.400";
 choices[60][1] = "TELNET-VT";
 choices[60][2] = "FTAM-FTP";
 choices[60][3] = "X.500-SNMP";
 answers[60] = 3;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4497. ";
 preguntaids[60] = 4497


//  Id pregunta: 5624 Año de creación de pregunta: 2007
 questions[61]= "62)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[61]= new Array();
 choices[61][0] = "R&aacute;ster.";
 choices[61][1] = "Vectorial.";
 choices[61][2] = "Sinusoidal.";
 choices[61][3] = "Vertical.";
 answers[61] = 1;
 units[61] = ['71'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 5624. ";
 preguntaids[61] = 5624


//  Id pregunta: 3659 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la m&aacute;s importante para un buen analista?:";
 choices[62]= new Array();
 choices[62][0] = "Capacidad de comprensi&oacute;n de conceptos abstractos";
 choices[62][1] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[62][2] = "Habilidad para evitar que 'los &aacute;rboles no dejen ver el bosque'";
 choices[62][3] = "Habilidad para relacionar aplicaciones hardware/software en el entorno usuario";
 answers[62] = 2;
 units[62] = ['85'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3659. ";
 preguntaids[62] = 3659


//  Id pregunta: 3699 Año de creación de pregunta: 2002
 questions[63]= "64)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[63]= new Array();
 choices[63][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[63][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[63][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[63][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[63] = 1;
 units[63] = ['91'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3699. ";
 preguntaids[63] = 3699


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[64]= "65)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[64]= new Array();
 choices[64][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[64][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[64][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[64][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[64] = 1;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7541. Map 2005";
 preguntaids[64] = 7541


//  Id pregunta: 4004 Año de creación de pregunta: 2002
 questions[65]= "66)  Los algoritmos de comprensi&oacute;n LZW son del tipo:";
 choices[65]= new Array();
 choices[65][0] = "Basados en diccionario";
 choices[65][1] = "RLE";
 choices[65][2] = "HUFFMAN";
 choices[65][3] = "JPEG";
 answers[65] = 0;
 units[65] = ['80'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 4004. ";
 preguntaids[65] = 4004


//  Id pregunta: 10400 Año de creación de pregunta: 2015
 questions[66]= "67)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[66]= new Array();
 choices[66][0] = "0.5";
 choices[66][1] = "0.8";
 choices[66][2] = "0.9";
 choices[66][3] = "1";
 answers[66] = 0;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 10400. ";
 preguntaids[66] = 10400


//  Id pregunta: 985 Año de creación de pregunta: 2016
 questions[67]= "68)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[67]= new Array();
 choices[67][0] = "los Subsecretarios y Secretarios generales";
 choices[67][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[67][2] = "los Secretarios de Estado";
 choices[67][3] = "los Subdirectores generales";
 answers[67] = 2;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 985. Ley 40/2015";
 preguntaids[67] = 985


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[68]= "69)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[68]= new Array();
 choices[68][0] = "La Administraci&oacute;n General del Estado";
 choices[68][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[68][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[68][3] = "Todas las Administraciones P&uacute;blicas";
 answers[68] = 1;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[68] = 6948


//  Id pregunta: 7899 Año de creación de pregunta: 2011
 questions[69]= "70)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[69]= new Array();
 choices[69][0] = "VAN (Valor Actual Neto).";
 choices[69][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[69][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[69][3] = "El m&eacute;todo del payback";
 answers[69] = 0;
 units[69] = ['40'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 7899. Examen TIC A2 2010";
 preguntaids[69] = 7899


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[70]= "71)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[70]= new Array();
 choices[70][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[70][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[70][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[70][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[70] = 1;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 136. Uni&oacute;n Europea";
 preguntaids[70] = 136


//  Id pregunta: 6603 Año de creación de pregunta: 2009
 questions[71]= "72)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[71]= new Array();
 choices[71][0] = "Emplean un alfabeto de salida con m&aacute;s s&iacute;mbolos que el alfabeto de entrada.";
 choices[71][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[71][2] = "Se sustituye cada car&aacute;cter del texto original siempre por otro car&aacute;cter determinado";
 choices[71][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[71] = 2;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 6603. ";
 preguntaids[71] = 6603


//  Id pregunta: 7225 Año de creación de pregunta: 2010
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[72]= new Array();
 choices[72][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[72][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[72][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases.";
 choices[72][3] = "No se permite herencia m&uacute;ltiple.";
 answers[72] = 2;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7225. ";
 preguntaids[72] = 7225


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[73]= "74)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[73][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[73][2] = "Ambas son correctas.";
 choices[73][3] = "Ambas son incorrectas.";
 answers[73] = 0;
 units[73] = ['14'];
 blocks[73] = ['A3'];
 comments[73] = "Id Pregunta: 409. Pol&iacute;ticas de igualdad";
 preguntaids[73] = 409


//  Id pregunta: 10134 Año de creación de pregunta: 2015
 questions[74]= "75)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[74]= new Array();
 choices[74][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[74][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[74][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[74][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[74] = 0;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10134. Examen TIC A1 2014";
 preguntaids[74] = 10134


