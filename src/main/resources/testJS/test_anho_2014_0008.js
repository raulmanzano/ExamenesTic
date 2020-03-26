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
//  Id pregunta: 9553 Año de creación de pregunta: 2014
 questions[0]= "1)  Las infracciones leves de la Ley Org&aacute;nica 15/1999:";
 choices[0]= new Array();
 choices[0][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[0][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[0][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[0][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[0] = 1;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 9553. Art&iacute;culos 45.1 y 47.1 de la Ley Org&aacute;nica 15/1999";
 preguntaids[0] = 9553


//  Id pregunta: 9589 Año de creación de pregunta: 2014
 questions[1]= "2)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[1]= new Array();
 choices[1][0] = "Los ficheros abiertos.";
 choices[1][1] = "El escritorio.";
 choices[1][2] = "Los procesos.";
 choices[1][3] = "Los puertos TCP/IP.";
 answers[1] = 2;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9589. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[1] = 9589


//  Id pregunta: 9545 Año de creación de pregunta: 2014
 questions[2]= "3)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[2]= new Array();
 choices[2][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[2][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[2][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[2][3] = "Todas son incorrectas";
 answers[2] = 1;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9545. Art&iacute;culo 18.2 y 18.4 de la Ley Org&aacute;nica 15/1999";
 preguntaids[2] = 9545


//  Id pregunta: 9585 Año de creación de pregunta: 2014
 questions[3]= "4)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[3]= new Array();
 choices[3][0] = "Cabecera siguiente.";
 choices[3][1] = "Enrutamiento.";
 choices[3][2] = "Longitud de la carga &uacute;til.";
 choices[3][3] = "L&iacute;mite de saltos.";
 answers[3] = 1;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9585. TIC A2 2013 libre";
 preguntaids[3] = 9585


//  Id pregunta: 9540 Año de creación de pregunta: 2014
 questions[4]= "5)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto:";
 choices[4]= new Array();
 choices[4][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[4][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[4][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[4][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[4] = 0;
 units[4] = ['35'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9540. Art&iacute;culo 10 de la Ley Org&aacute;nica 15/1999";
 preguntaids[4] = 9540


//  Id pregunta: 9544 Año de creación de pregunta: 2014
 questions[5]= "6)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[5]= new Array();
 choices[5][0] = "Para los ficheros mencionados en b) y c)";
 choices[5][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[5][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[5][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[5] = 0;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 9544. Art&iacute;culo 34 a) y b) del RD 1720/2007";
 preguntaids[5] = 9544


//  Id pregunta: 9564 Año de creación de pregunta: 2014
 questions[6]= "7)  En reglas, la inferencia mediante encadenamiento hacia adelante:";
 choices[6]= new Array();
 choices[6][0] = "Requiere en primer lugar que se introduzcan las premisas en la base de hechos";
 choices[6][1] = "Se crea un conjunto conflicto con las reglas cuyo consecuente es el objetivo de la inferencia";
 choices[6][2] = "La regla que se va a disparar siempre se elige de forma aleatoria";
 choices[6][3] = "Si la regla disparada es deductiva, se ejecuta la acci&oacute;n asociada";
 answers[6] = 0;
 units[6] = ['68'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9564. ";
 preguntaids[6] = 9564


//  Id pregunta: 9565 Año de creación de pregunta: 2014
 questions[7]= "8)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[7]= new Array();
 choices[7][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[7][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[7][2] = "Las neuronas se conectan mediante arcos";
 choices[7][3] = "Las neuronas se agrupan en capas";
 answers[7] = 1;
 units[7] = ['68'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9565. La neurona es el nivel b&aacute;sico de representaci&oacute;n.";
 preguntaids[7] = 9565


//  Id pregunta: 9532 Año de creación de pregunta: 2014
 questions[8]= "9)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[8]= new Array();
 choices[8][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[8][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[8][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[8][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[8] = 0;
 units[8] = ['66'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9532. https://www.gnu.org/licenses/gpl-faq.es.html#WhyMustIInclude";
 preguntaids[8] = 9532


//  Id pregunta: 9563 Año de creación de pregunta: 2014
 questions[9]= "10)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[9]= new Array();
 choices[9][0] = "Deducci&oacute;n de valores de slots";
 choices[9][1] = "Actualizaci&oacute;n de valores de slots";
 choices[9][2] = "Equiparaci&oacute;n";
 choices[9][3] = "Emparejamiento";
 answers[9] = 3;
 units[9] = ['68'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9563. ";
 preguntaids[9] = 9563


//  Id pregunta: 9535 Año de creación de pregunta: 2014
 questions[10]= "11)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[10]= new Array();
 choices[10][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[10][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[10][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[10][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[10] = 3;
 units[10] = ['66'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9535. ";
 preguntaids[10] = 9535


//  Id pregunta: 9592 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[11]= new Array();
 choices[11][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[11][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[11][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[11][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[11] = 1;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9592. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[11] = 9592


//  Id pregunta: 9586 Año de creación de pregunta: 2014
 questions[12]= "13)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[12]= new Array();
 choices[12][0] = "15 bits.";
 choices[12][1] = "8 bits.";
 choices[12][2] = "10 bits.";
 choices[12][3] = "3 bits.";
 answers[12] = 1;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9586. TIC A2 2013 libre";
 preguntaids[12] = 9586


//  Id pregunta: 9577 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[13]= new Array();
 choices[13][0] = "5.200 km";
 choices[13][1] = "20.200 km";
 choices[13][2] = "36.200 km";
 choices[13][3] = "45.200 km";
 answers[13] = 1;
 units[13] = ['71'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9577. TIC A2 2013 libre";
 preguntaids[13] = 9577


//  Id pregunta: 9604 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[14]= new Array();
 choices[14][0] = "110";
 choices[14][1] = "119";
 choices[14][2] = "161";
 choices[14][3] = "25";
 answers[14] = 2;
 units[14] = ['114'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 9604. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[14] = 9604


//  Id pregunta: 9547 Año de creación de pregunta: 2014
 questions[15]= "16)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[15]= new Array();
 choices[15][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[15][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[15][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[15][3] = "Todos ellos";
 answers[15] = 3;
 units[15] = ['35'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 9547. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";
 preguntaids[15] = 9547


//  Id pregunta: 9536 Año de creación de pregunta: 2014
 questions[16]= "17)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:  I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra forma  II) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[16]= new Array();
 choices[16][0] = "I) y II) son verdaderas";
 choices[16][1] = "I) es verdadera, II) es falsa";
 choices[16][2] = "I es falsa, II) es verdadera";
 choices[16][3] = "I) y II) son falsas";
 answers[16] = 3;
 units[16] = ['66'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9536. ";
 preguntaids[16] = 9536


//  Id pregunta: 9560 Año de creación de pregunta: 2014
 questions[17]= "18)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[17]= new Array();
 choices[17][0] = "Reactivos";
 choices[17][1] = "Predictivos";
 choices[17][2] = "Ambas";
 choices[17][3] = "Ninguna";
 answers[17] = 0;
 units[17] = ['67'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9560. Pueden ser reactivos /deliberativos; colaborativos /de interfaz; m&oacute;viles/ est&aacute;ticos; de informaci&oacute;n / h&iacute;bridos";
 preguntaids[17] = 9560


//  Id pregunta: 9552 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Es posible denegar temporalmente una transferencia internacional de datos personales previamente autorizada?";
 choices[18]= new Array();
 choices[18][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[18][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[18][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[18][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[18] = 0;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 9552. Art&iacute;culo 70.3 del RD 1720/2007";
 preguntaids[18] = 9552


//  Id pregunta: 9603 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[19]= new Array();
 choices[19][0] = "255,255,255,255";
 choices[19][1] = "FF::FF";
 choices[19][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[19][3] = "FF:FF:FF:FF:FF:FF";
 answers[19] = 3;
 units[19] = ['112'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 9603. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[19] = 9603


//  Id pregunta: 9529 Año de creación de pregunta: 2014
 questions[20]= "21)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:  int [] x = new int[25];";
 choices[20]= new Array();
 choices[20][0] = "x[24] es 0";
 choices[20][1] = "x[24] es indefinido";
 choices[20][2] = "x[25] es 0";
 choices[20][3] = "x[0] es igual a null";
 answers[20] = 0;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9529. ";
 preguntaids[20] = 9529


//  Id pregunta: 9575 Año de creación de pregunta: 2014
 questions[21]= "22)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[21]= new Array();
 choices[21][0] = "Masking";
 choices[21][1] = "Cluning";
 choices[21][2] = "Zoning";
 choices[21][3] = "Port Binding";
 answers[21] = 1;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9575. TIC A2 2013 libre";
 preguntaids[21] = 9575


//  Id pregunta: 9561 Año de creación de pregunta: 2014
 questions[22]= "23)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[22]= new Array();
 choices[22][0] = "Facilidad de representaci&oacute;n";
 choices[22][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[22][2] = "Modularidad";
 choices[22][3] = "Flexibilidad";
 answers[22] = 1;
 units[22] = ['68'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9561. Seg&uacute;n ASTIC: ventajas: facilidad de representaci&oacute;n, modularidad, flexibilidad, eficiencia;  desventajas: direcci&oacute;n de inferencia prefijada, hay dominios de conocimiento que  formulados en reglas dan lugar a bases de conocimiento muy grandes debido  a que el conocimiento se expresa mejor mediante restricciones";
 preguntaids[22] = 9561


//  Id pregunta: 9538 Año de creación de pregunta: 2014
 questions[23]= "24)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[23]= new Array();
 choices[23][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[23][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[23][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[23][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[23] = 2;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 9538. Art&iacute;culo 12.3 del RD 1720/2007";
 preguntaids[23] = 9538


//  Id pregunta: 9566 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;Cu&aacute;l NO es una sentencia del lenguaje JCL (Job Control Language)?";
 choices[24]= new Array();
 choices[24][0] = "EXEC";
 choices[24][1] = "DD";
 choices[24][2] = "JOB";
 choices[24][3] = "CALL";
 answers[24] = 3;
 units[24] = ['49'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9566. TIC A2 2013 libre";
 preguntaids[24] = 9566


//  Id pregunta: 9599 Año de creación de pregunta: 2014
 questions[25]= "26)  Los conectores LC son:";
 choices[25]= new Array();
 choices[25][0] = "Conectores para PCI.";
 choices[25][1] = "Conectores de par trenzado.";
 choices[25][2] = "Conectores exclusivos para Mainframe.";
 choices[25][3] = "Conectores de fibra &oacute;ptica.";
 answers[25] = 3;
 units[25] = ['104'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 9599. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[25] = 9599


//  Id pregunta: 9597 Año de creación de pregunta: 2014
 questions[26]= "27)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[26]= new Array();
 choices[26][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[26][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[26][2] = "Ambos operan a nivel de bloque.";
 choices[26][3] = "Ambos operan a nivel de fichero.";
 answers[26] = 0;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9597. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[26] = 9597


//  Id pregunta: 9557 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[27]= new Array();
 choices[27][0] = "B&uacute;squeda de profundida limitada";
 choices[27][1] = "B&uacute;squeda primero el mejor";
 choices[27][2] = "B&uacute;squeda de coste uniforme";
 choices[27][3] = "B&uacute;squeda bidireccional";
 answers[27] = 1;
 units[27] = ['67'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9557. A , C y D: m&eacute;todo ciego o no informado";
 preguntaids[27] = 9557


//  Id pregunta: 9534 Año de creación de pregunta: 2014
 questions[28]= "29)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:  &quot;Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&quot; &iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[28]= new Array();
 choices[28][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[28][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[28][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[28][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[28] = 1;
 units[28] = ['66'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9534. ";
 preguntaids[28] = 9534


//  Id pregunta: 9571 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Qu&eacute; tipo de mantenimiento debe realizarse como consecuencia de los cambios en el entorno de operaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "Operativo";
 choices[29][1] = "Correctivo";
 choices[29][2] = "Perfectivo";
 choices[29][3] = "Adaptativo";
 answers[29] = 3;
 units[29] = ['95'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 9571. TIC A2 2013 libre";
 preguntaids[29] = 9571


//  Id pregunta: 9554 Año de creación de pregunta: 2014
 questions[30]= "31)  En el contexto de la protecci&oacute;n de datos de car&aacute;cter personal, la figura del responsable de seguridad";
 choices[30]= new Array();
 choices[30][0] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[30][1] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 choices[30][2] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[30][3] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 answers[30] = 2;
 units[30] = ['35'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 9554. Art&iacute;culo 95 del RD 1720/2007";
 preguntaids[30] = 9554


//  Id pregunta: 9584 Año de creación de pregunta: 2014
 questions[31]= "32)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[31]= new Array();
 choices[31][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[31][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[31][2] = "Un adaptador fibra - par trenzado.";
 choices[31][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[31] = 1;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9584. TIC A2 2013 libre";
 preguntaids[31] = 9584


//  Id pregunta: 9581 Año de creación de pregunta: 2014
 questions[32]= "33)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha por contienda?";
 choices[32]= new Array();
 choices[32][0] = "Paso de testigo en anillo.";
 choices[32][1] = "CSMA no persistente.";
 choices[32][2] = "ALOHA ranurado.";
 choices[32][3] = "Contenci&oacute;n.";
 answers[32] = 1;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9581. TIC A2 2013 libre";
 preguntaids[32] = 9581


//  Id pregunta: 9582 Año de creación de pregunta: 2014
 questions[33]= "34)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[33]= new Array();
 choices[33][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[33][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[33][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[33][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[33] = 0;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9582. TIC A2 2013 libre";
 preguntaids[33] = 9582


//  Id pregunta: 9583 Año de creación de pregunta: 2014
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[34]= new Array();
 choices[34][0] = "GETREQUEST PDU";
 choices[34][1] = "SETRESPONSE PDU";
 choices[34][2] = "RESPONSE PDU";
 choices[34][3] = "INFORMREQUEST PDU";
 answers[34] = 1;
 units[34] = ['114'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9583. TIC A2 2013 libre";
 preguntaids[34] = 9583


//  Id pregunta: 9569 Año de creación de pregunta: 2014
 questions[35]= "36)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[35]= new Array();
 choices[35][0] = "MongoDB";
 choices[35][1] = "MariaDB";
 choices[35][2] = "HeidiSQL";
 choices[35][3] = "MarcoDB";
 answers[35] = 3;
 units[35] = ['60'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9569. TIC A2 2013 libre";
 preguntaids[35] = 9569


//  Id pregunta: 9551 Año de creación de pregunta: 2014
 questions[36]= "37)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[36]= new Array();
 choices[36][0] = "Tendr&aacute; vigencia indefinida";
 choices[36][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[36][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[36][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[36] = 3;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 9551. Art&iacute;culo 31.2 y 31.3 de la Ley O 15/1999";
 preguntaids[36] = 9551


//  Id pregunta: 9595 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[37]= new Array();
 choices[37][0] = "33%";
 choices[37][1] = "20%";
 choices[37][2] = "50%";
 choices[37][3] = "0%";
 answers[37] = 0;
 units[37] = ['53'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9595. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[37] = 9595


//  Id pregunta: 9590 Año de creación de pregunta: 2014
 questions[38]= "39)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[38]= new Array();
 choices[38][0] = "true &gt; 2013";
 choices[38][1] = "&gt; 2013";
 choices[38][2] = "cat /dev/null &gt; 2013";
 choices[38][3] = "| &gt; 2013";
 answers[38] = 3;
 units[38] = ['57'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9590. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[38] = 9590


//  Id pregunta: 9574 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes comandos de Solaris 11 NO devuelve informaci&oacute;n relativa a discos?";
 choices[39]= new Array();
 choices[39][0] = "iostat";
 choices[39][1] = "df";
 choices[39][2] = "sar";
 choices[39][3] = "nc";
 answers[39] = 3;
 units[39] = ['53'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9574. TIC A2 2013 libre";
 preguntaids[39] = 9574


//  Id pregunta: 9568 Año de creación de pregunta: 2014
 questions[40]= "41)  En Sql Server 2016 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[40]= new Array();
 choices[40][0] = "rdlccfg";
 choices[40][1] = "tsmrpt";
 choices[40][2] = "rptsetup";
 choices[40][3] = "rsconfig";
 answers[40] = 3;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9568. TIC A2 2013 libre";
 preguntaids[40] = 9568


//  Id pregunta: 9601 Año de creación de pregunta: 2014
 questions[41]= "42)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[41]= new Array();
 choices[41][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[41][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[41][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[41][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[41] = 0;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 9601. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[41] = 9601


//  Id pregunta: 9570 Año de creación de pregunta: 2014
 questions[42]= "43)  RMAN es:";
 choices[42]= new Array();
 choices[42][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[42][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[42][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[42][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[42] = 2;
 units[42] = ['61'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9570. TIC A2 2013 libre";
 preguntaids[42] = 9570


//  Id pregunta: 9572 Año de creación de pregunta: 2014
 questions[43]= "44)  En la herramienta de control de versiones Subversion, &iquest;con que comando se suben los cambios al repositorio?";
 choices[43]= new Array();
 choices[43][0] = "svn commit";
 choices[43][1] = "svn checkin";
 choices[43][2] = "svn checkout";
 choices[43][3] = "svn upload";
 answers[43] = 0;
 units[43] = ['84'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 9572. TIC A2 2013 libre";
 preguntaids[43] = 9572


//  Id pregunta: 9542 Año de creación de pregunta: 2014
 questions[44]= "45)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[44]= new Array();
 choices[44][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[44][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[44][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[44][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[44] = 2;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 9542. Art&iacute;culo 25.2 del RD 1720/2007";
 preguntaids[44] = 9542


//  Id pregunta: 9578 Año de creación de pregunta: 2014
 questions[45]= "46)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[45]= new Array();
 choices[45][0] = "Cassegrain";
 choices[45][1] = "Krenwinkel";
 choices[45][2] = "Gregorian";
 choices[45][3] = "Offset";
 answers[45] = 1;
 units[45] = ['71'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9578. TIC A2 2013 libre";
 preguntaids[45] = 9578


//  Id pregunta: 9543 Año de creación de pregunta: 2014
 questions[46]= "47)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[46]= new Array();
 choices[46][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[46][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[46][2] = "El responsable deber&aacute; contestar al interesado, proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[46][3] = "El responsable deber&aacute; contestar al interesado, proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[46] = 3;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9543. Art&iacute;culo 32.3 del RD 1720/2007";
 preguntaids[46] = 9543


//  Id pregunta: 9528 Año de creación de pregunta: 2014
 questions[47]= "48)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[47]= new Array();
 choices[47][0] = "next()";
 choices[47][1] = "nextValue()";
 choices[47][2] = "nextToken()";
 choices[47][3] = "Ninguno de los anteriores";
 answers[47] = 2;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9528. ";
 preguntaids[47] = 9528


//  Id pregunta: 9539 Año de creación de pregunta: 2014
 questions[48]= "49)  En cuanto al tratamiento de datos personales de menores";
 choices[48]= new Array();
 choices[48][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[48][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[48][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[48][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[48] = 3;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9539. Art&iacute;culo 13.1 del RD 1720/2007";
 preguntaids[48] = 9539


//  Id pregunta: 9559 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes mediante sistema de pizarra es cierta?";
 choices[49]= new Array();
 choices[49][0] = "El agente que escribe en la pizarra se convierte en coordinador de la misma";
 choices[49][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra, en lugar de esperar su turno";
 choices[49][2] = "Ambas son ciertas";
 choices[49][3] = "Ninguna es cierta";
 answers[49] = 3;
 units[49] = ['67'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9559. A: el agente y el coordinador son figuras diferentes; B: no lo puede escribir inmediatamente, sino que la pizarra es coordinada y arbitrada por un controlador.";
 preguntaids[49] = 9559


//  Id pregunta: 9537 Año de creación de pregunta: 2014
 questions[50]= "51)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[50]= new Array();
 choices[50][0] = "No, pero hay que licenciarlo como LGPL";
 choices[50][1] = "No, no proh&iacute;be a quienes distribuyan el software plantear demandas sobre patentes a otros licenciatarios";
 choices[50][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[50][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[50] = 2;
 units[50] = ['66'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9537. ";
 preguntaids[50] = 9537


//  Id pregunta: 9531 Año de creación de pregunta: 2014
 questions[51]= "52)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[51]= new Array();
 choices[51][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[51][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[51][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[51][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[51] = 1;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9531. ";
 preguntaids[51] = 9531


//  Id pregunta: 9593 Año de creación de pregunta: 2014
 questions[52]= "53)  Una sentencia JCL comienza con:";
 choices[52]= new Array();
 choices[52][0] = "//";
 choices[52][1] = "*+";
 choices[52][2] = "#&gt;";
 choices[52][3] = "$&gt;";
 answers[52] = 0;
 units[52] = ['49'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9593. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[52] = 9593


//  Id pregunta: 9550 Año de creación de pregunta: 2014
 questions[53]= "54)  Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[53]= new Array();
 choices[53][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[53][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[53][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[53][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[53] = 2;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 9550. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";
 preguntaids[53] = 9550


//  Id pregunta: 9558 Año de creación de pregunta: 2014
 questions[54]= "55)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[54]= new Array();
 choices[54][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[54][1] = "La estrategia del oponente es desconocida";
 choices[54][2] = "Interviene el azar";
 choices[54][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[54] = 2;
 units[54] = ['67'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9558. ";
 preguntaids[54] = 9558


//  Id pregunta: 9533 Año de creación de pregunta: 2014
 questions[55]= "56)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?  I) Puede distribuir el c&oacute;digo fuente original de Juan, mateniendo las notificaciones de copyright  II) Puede distribuir el c&oacute;digo fuente junto a los binarios  III) Puede distribuir los parches aplicados al c&oacute;digo fuente original  IV) Puede distribuir los parches aplicados al c&oacute;digo fuente original, junto con &eacute;ste";
 choices[55]= new Array();
 choices[55][0] = "I o II, y nada m&aacute;s";
 choices[55][1] = "S&oacute;lo II";
 choices[55][2] = "II o IV, pero nada m&aacute;s";
 choices[55][3] = "Cualquiera de las 4";
 answers[55] = 2;
 units[55] = ['66'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9533. https://www.gnu.org/licenses/gpl-faq.es.html#GPLRequireSourcePostedPublic";
 preguntaids[55] = 9533


//  Id pregunta: 9591 Año de creación de pregunta: 2014
 questions[56]= "57)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[56]= new Array();
 choices[56][0] = "Mediante cuotas de disco.";
 choices[56][1] = "Mediante el editor de directivas de grupo.";
 choices[56][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[56][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[56] = 0;
 units[56] = ['57'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9591. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[56] = 9591


//  Id pregunta: 9573 Año de creación de pregunta: 2014
 questions[57]= "58)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[57]= new Array();
 choices[57][0] = "Tape Management System.";
 choices[57][1] = "Transaction Multiplexing System.";
 choices[57][2] = "Tape Mapping System.";
 choices[57][3] = "Transaction Management System.";
 answers[57] = 0;
 units[57] = ['53'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9573. TIC A2 2013 libre";
 preguntaids[57] = 9573


//  Id pregunta: 9530 Año de creación de pregunta: 2014
 questions[58]= "59)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[58]= new Array();
 choices[58][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[58][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[58][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[58][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[58] = 0;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9530. ";
 preguntaids[58] = 9530


//  Id pregunta: 9541 Año de creación de pregunta: 2014
 questions[59]= "60)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[59]= new Array();
 choices[59][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[59][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[59][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[59][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[59] = 1;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 9541. Art&iacute;culo 11.2 d) de la Ley Org&aacute;nica 15/1999";
 preguntaids[59] = 9541


//  Id pregunta: 9587 Año de creación de pregunta: 2014
 questions[60]= "61)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[60]= new Array();
 choices[60][0] = "Enlace.";
 choices[60][1] = "Red.";
 choices[60][2] = "Transporte.";
 choices[60][3] = "Aplicaci&oacute;n.";
 answers[60] = 2;
 units[60] = ['53'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9587. TIC A2 2013 libre";
 preguntaids[60] = 9587


//  Id pregunta: 9546 Año de creación de pregunta: 2014
 questions[61]= "62)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[61]= new Array();
 choices[61][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[61][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[61][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[61][3] = "No es obligatorio en ning&uacute;n caso";
 answers[61] = 2;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 9546. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";
 preguntaids[61] = 9546


//  Id pregunta: 9600 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[62]= new Array();
 choices[62][0] = "4 bytes.";
 choices[62][1] = "6 bytes.";
 choices[62][2] = "12 bytes.";
 choices[62][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[62] = 0;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9600. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[62] = 9600


//  Id pregunta: 9562 Año de creación de pregunta: 2014
 questions[63]= "64)  En cuanto a las estrategias de inferencia en marcos";
 choices[63]= new Array();
 choices[63][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[63][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[63][2] = "Ambas son ciertas";
 choices[63][3] = "Ninguna es cierta";
 answers[63] = 2;
 units[63] = ['68'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9562. ";
 preguntaids[63] = 9562


//  Id pregunta: 9549 Año de creación de pregunta: 2014
 questions[64]= "65)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[64]= new Array();
 choices[64][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[64][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[64][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[64][3] = "No puede denegarse en ning&uacute;n caso";
 answers[64] = 1;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9549. Art&iacute;culo 23.1 y 23.3 de la Ley Org&aacute;nica 15/1999";
 preguntaids[64] = 9549


//  Id pregunta: 9556 Año de creación de pregunta: 2014
 questions[65]= "66)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[65]= new Array();
 choices[65][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[65][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[65][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[65][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[65] = 0;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 9556. Art&iacute;culos 2 y 33 del RD 428/1993";
 preguntaids[65] = 9556


//  Id pregunta: 9598 Año de creación de pregunta: 2014
 questions[66]= "67)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[66]= new Array();
 choices[66][0] = "Fibra &oacute;ptica.";
 choices[66][1] = "Mainframes.";
 choices[66][2] = "Buses PCI.";
 choices[66][3] = "Buses PCI.";
 answers[66] = 0;
 units[66] = ['104'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9598. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[66] = 9598


//  Id pregunta: 9548 Año de creación de pregunta: 2014
 questions[67]= "68)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[67]= new Array();
 choices[67][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial correspondiente la norma o acuerdo que lo regule";
 choices[67][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial correspondiente la norma o acuerdo que lo regule";
 choices[67][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[67][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[67] = 0;
 units[67] = ['35'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 9548. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";
 preguntaids[67] = 9548


//  Id pregunta: 9580 Año de creación de pregunta: 2014
 questions[68]= "69)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[68]= new Array();
 choices[68][0] = "802.19";
 choices[68][1] = "802.2";
 choices[68][2] = "802.21";
 choices[68][3] = "802.22";
 answers[68] = 3;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9580. TIC A2 2013 libre";
 preguntaids[68] = 9580


//  Id pregunta: 9602 Año de creación de pregunta: 2014
 questions[69]= "70)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[69]= new Array();
 choices[69][0] = "MIB (Management Information Base).";
 choices[69][1] = "NMD (Network Management database).";
 choices[69][2] = "NMS (Network Management System).";
 choices[69][3] = "Ninguna de los anteriores.";
 answers[69] = 0;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9602. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[69] = 9602


//  Id pregunta: 9596 Año de creación de pregunta: 2014
 questions[70]= "71)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[70]= new Array();
 choices[70][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[70][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[70][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[70][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[70] = 2;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9596. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[70] = 9596


//  Id pregunta: 9567 Año de creación de pregunta: 2014
 questions[71]= "72)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[71]= new Array();
 choices[71][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[71][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[71][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[71][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[71] = 2;
 units[71] = ['61'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9567. TIC A2 2013 libre";
 preguntaids[71] = 9567


//  Id pregunta: 9588 Año de creación de pregunta: 2014
 questions[72]= "73)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[72]= new Array();
 choices[72][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[72][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[72][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[72][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[72] = 3;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 9588. TIC A2 2013 libre";
 preguntaids[72] = 9588


//  Id pregunta: 9594 Año de creación de pregunta: 2014
 questions[73]= "74)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[73]= new Array();
 choices[73][0] = "300 MB/s.";
 choices[73][1] = "900 MB/s.";
 choices[73][2] = "600 MB/s.";
 choices[73][3] = "150 MB/s.";
 answers[73] = 2;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 9594. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[73] = 9594


//  Id pregunta: 9555 Año de creación de pregunta: 2014
 questions[74]= "75)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[74]= new Array();
 choices[74][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica";
 choices[74][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial";
 choices[74][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional";
 choices[74][3] = "En los tres casos anteriores";
 answers[74] = 3;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 9555. Art&iacute;culo 34 de la Ley Org&aacute;nica 15/1999";
 preguntaids[74] = 9555


