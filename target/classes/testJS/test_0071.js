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
//  Id pregunta: 4710 Año de creación de pregunta: 2002
 questions[0]= "1)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[0]= new Array();
 choices[0][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[0][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[0][2] = "secuestro de una conexi&oacute;n TCP/IP por ejemplo durante una sesi&oacute;n Telnet permitiendo a un atacante inyectar comandos o realizar un DoS durante dicha sesi&oacute;n.";
 choices[0][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[0] = 2;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4710. ";
 preguntaids[0] = 4710


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[1]= new Array();
 choices[1][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[1][1] = "Solamente el Congreso.";
 choices[1][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[1][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[1] = 0;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 4. Constituci&oacute;n de 1978";
 preguntaids[1] = 4


//  Id pregunta: 9767 Año de creación de pregunta: 2014
 questions[2]= "3)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[2]= new Array();
 choices[2][0] = "v4";
 choices[2][1] = "V4.1";
 choices[2][2] = "v5";
 choices[2][3] = "v6";
 answers[2] = 2;
 units[2] = ['36'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9767. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";
 preguntaids[2] = 9767


//  Id pregunta: 5175 Año de creación de pregunta: 2003
 questions[3]= "4)  Indicar la afirmaci&oacute;n falsa";
 choices[3]= new Array();
 choices[3][0] = "Los Servicios Web son m&aacute;s simples que la arquitectura CORBA";
 choices[3][1] = "Es muy dif&iacute;cil hacer interactuar una plataforma en COMcon otra en CORBA";
 choices[3][2] = "No es posible  que un  objeto CORBA  se  comunique  con un  objeto  JavaRMI,";
 choices[3][3] = "CORBA tiene m&uacute;ltiples implementaciones";
 answers[3] = 2;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5175. ";
 preguntaids[3] = 5175


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "El rey, a propuesta del Gobierno.";
 choices[4][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[4][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[4][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[4] = 1;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[4] = 37


//  Id pregunta: 1017 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Delegados del Gobierno en las Comunidades Autonomas (se&ntilde;ala la incorrecta):";
 choices[5]= new Array();
 choices[5][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[5][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[5][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[5][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[5] = 2;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 1017. Ley 40/2015";
 preguntaids[5] = 1017


//  Id pregunta: 8915 Año de creación de pregunta: 2013
 questions[6]= "7)  Respecto al est&aacute;ndar de servicios de directorio X.500, se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[6]= new Array();
 choices[6][0] = "El DIB se divide en distintos trozos de informaci&oacute;n que se estructuran en una jerarqu&iacute;a en &aacute;rbol denominada DIT";
 choices[6][1] = "Cada parte del DIB se almacena en un servidor denominado DSA";
 choices[6][2] = "El intercambio de informaci&oacute;n entre dos DSA est&aacute; basado en los protocolos DSP y DOP";
 choices[6][3] = "El DSA se comunica con el DIB utilizando el protocolo DAP";
 answers[6] = 3;
 units[6] = ['116'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8915. ";
 preguntaids[6] = 8915


//  Id pregunta: 5158 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Qu&eacute; es falso respecto a un applet?";
 choices[7]= new Array();
 choices[7][0] = "Utiliza clases de la librer&iacute;a Java.applet";
 choices[7][1] = "Tienen un m&eacute;todo paint()";
 choices[7][2] = "Se pueden visualizar mediante appletviewer";
 choices[7][3] = "Necesitan m&eacute;todo main()";
 answers[7] = 3;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5158. ";
 preguntaids[7] = 5158


//  Id pregunta: 10396 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[8]= new Array();
 choices[8][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[8][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[8][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[8][3] = "Beneficios TIC para la Sociedad UE";
 answers[8] = 0;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 10396. ";
 preguntaids[8] = 10396


//  Id pregunta: 1035 Año de creación de pregunta: 2016
 questions[9]= "10)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[9]= new Array();
 choices[9][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[9][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[9][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[9][3] = "Todas son correctas.";
 answers[9] = 3;
 units[9] = ['4', '7', '8', '9'];
 blocks[9] = ['A1', 'A2'];
 comments[9] = "Id Pregunta: 1035. Ley 40/2015";
 preguntaids[9] = 1035


//  Id pregunta: 6254 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[10]= new Array();
 choices[10][0] = "RMI";
 choices[10][1] = "JINI";
 choices[10][2] = "EJB";
 choices[10][3] = "CORBA";
 answers[10] = 3;
 units[10] = ['85'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6254. ";
 preguntaids[10] = 6254


//  Id pregunta: 8684 Año de creación de pregunta: 2013
 questions[11]= "12)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[11]= new Array();
 choices[11][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[11][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[11][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[11][3] = "Todas son correctas.";
 answers[11] = 3;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8684. ";
 preguntaids[11] = 8684


//  Id pregunta: 5431 Año de creación de pregunta: 2007
 questions[12]= "13)  Respecto del Marco Europeo de Interoperabilidad (MEI) v2, es falsa la afirmacion:";
 choices[12]= new Array();
 choices[12][0] = "Las dimensiones de interoperabilidad son tres: t&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[12][1] = "Define como principios  entre otros la subsidiariedad, la transparencia y el uso de est&aacute;ndares abiertos.";
 choices[12][2] = "Se elabora dentro del programa IDABC";
 choices[12][3] = "Define un total de doce principios";
 answers[12] = 0;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 5431. Las dimensiones de interoperabilidad son 4: organizativa, sem&aacute;ntica, t&eacute;cnica y legal";
 preguntaids[12] = 5431


//  Id pregunta: 9412 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[13]= new Array();
 choices[13][0] = "SCRUM";
 choices[13][1] = "Lean Software Development";
 choices[13][2] = "Kanban";
 choices[13][3] = "Feature Driven Development";
 answers[13] = 3;
 units[13] = ['84'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 9412. FDD define 5 procesos: Proceso 1 &ndash; Desarrollar el modelo global (Develop overall model), Proceso 2 &ndash; Construir una lista de caracter&iacute;sticas (Build feature list), Proceso 3 &ndash; Planificar (Plan by feature), Proceso 4 &ndash; Dise&ntilde;ar (Design by feature) y Proceso 5 &ndash; Construir (Build by feature).";
 preguntaids[13] = 9412


//  Id pregunta: 10916 Año de creación de pregunta: 2015
 questions[14]= "15)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[14]= new Array();
 choices[14][0] = "3DES y AES";
 choices[14][1] = "AES y DH";
 choices[14][2] = "3DES y PSK";
 choices[14][3] = "IKE y PSK";
 answers[14] = 0;
 units[14] = ['119'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10916. ";
 preguntaids[14] = 10916


//  Id pregunta: 10618 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n la Ley 9/2014, la regulaci&oacute;n del procedimiento para la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[15]= new Array();
 choices[15][0] = "Al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[15][1] = "A la CNMC.";
 choices[15][2] = "Al Gobierno.";
 choices[15][3] = "Ninguno de los anteriores.";
 answers[15] = 2;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10618. Articulo 61";
 preguntaids[15] = 10618


//  Id pregunta: 6267 Año de creación de pregunta: 2003
 questions[16]= "17)  Dentro de los distintos elementos de UML, &iquest;cu&aacute;l de los siguientes es un elemento estructural?";
 choices[16]= new Array();
 choices[16][0] = "Clase.";
 choices[16][1] = "Interacci&oacute;n.";
 choices[16][2] = "M&aacute;quina de estados.";
 choices[16][3] = "Paquete.";
 answers[16] = 0;
 units[16] = ['89'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6267. ";
 preguntaids[16] = 6267


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[17]= "18)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[17]= new Array();
 choices[17][0] = "La Ley Org&aacute;nica 2/2011";
 choices[17][1] = "La Ley Org&aacute;nica 2/2012";
 choices[17][2] = "La Ley Org&aacute;nica 3/2012";
 choices[17][3] = "La Ley Org&aacute;nica 2/2002";
 answers[17] = 1;
 units[17] = ['12'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 336. Modelo econ&oacute;mico";
 preguntaids[17] = 336


//  Id pregunta: 10973 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[18]= new Array();
 choices[18][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado por un per&iacute;odo renovable de cinco a&ntilde;os mediante Real Decreto.";
 choices[18][1] = "El Consejo de Transparencia y Buen Gobierno deber&aacute; elevar anualmente al Congreso de los Diputados una memoria sobre el desarrollo de sus actividades.";
 choices[18][2] = "La condici&oacute;n de miembro de la Comisi&oacute;n del Consejo de Transparencia y Buen Gobierno no exigir&aacute; dedicaci&oacute;n exclusiva ni dar&aacute; derecho a remuneraci&oacute;n.";
 choices[18][3] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n leve a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 answers[18] = 2;
 units[18] = ['22'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 10973. ";
 preguntaids[18] = 10973


//  Id pregunta: 2951 Año de creación de pregunta: 2002
 questions[19]= "20)  La suma de (-19) y (-10) en complemento a 2 es:";
 choices[19]= new Array();
 choices[19][0] = "&quot;100011&quot;";
 choices[19][1] = "Se produce &quot;overflow&quot;";
 choices[19][2] = "&quot;100010&quot;";
 choices[19][3] = "&quot;110010&quot;";
 answers[19] = 0;
 units[19] = ['50'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2951. ";
 preguntaids[19] = 2951


//  Id pregunta: 9184 Año de creación de pregunta: 2014
 questions[20]= "21)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[20]= new Array();
 choices[20][0] = "Similar a la de USB 2.0.";
 choices[20][1] = "10 veces superior a la de USB 2.0.";
 choices[20][2] = "480 Mbps.";
 choices[20][3] = "15 veces superior a la de USB 2.0.";
 answers[20] = 1;
 units[20] = ['51'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9184. Examen TIC A2 2013";
 preguntaids[20] = 9184


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[21]= "22)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[21]= new Array();
 choices[21][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[21][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[21][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[21][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[21] = 1;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 560. AGE A1 2015";
 preguntaids[21] = 560


//  Id pregunta: 6562 Año de creación de pregunta: 2003
 questions[22]= "23)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[22]= new Array();
 choices[22][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[22][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[22][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[22][3] = "Ninguna de las anteriores es correcta";
 answers[22] = 0;
 units[22] = ['67'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6562. ";
 preguntaids[22] = 6562


//  Id pregunta: 6762 Año de creación de pregunta: 2009
 questions[23]= "24)  Respecto a la virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[23]= new Array();
 choices[23][0] = "La virtualizaci&oacute;n se utilizaba en el entorno de los mainframes antes de que se popularizara sobre arquitecturas como ix86 &oacute; amd64";
 choices[23][1] = "Una de las virtudes de la virtualizaci&oacute;n es su bajo requerimiento de memoria RAM";
 choices[23][2] = "El ahorro de energ&iacute;a es una de las razones que impulsa el uso de la virtualizaci&oacute;n en entornos de servidor";
 choices[23][3] = "Xen es una herramienta de virtualizaci&oacute;n de software libre que naci&oacute; en el departamento de computaci&oacute;n de la Universidad de Cambridge";
 answers[23] = 1;
 units[23] = ['124'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6762. ";
 preguntaids[23] = 6762


//  Id pregunta: 10405 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de Inclusi&oacute;n y alfabetizaci&oacute;n digital y profesionales TIC de la Agenda Digital Espa&ntilde;ola?";
 choices[24]= new Array();
 choices[24][0] = "Plan de Inclusi&oacute;n Digital y Empleabilidad";
 choices[24][1] = "Plan de Alfabetizaci&oacute;n Digital";
 choices[24][2] = "Plan de Alfabetizaci&oacute;n Digital y Empleabilidad";
 choices[24][3] = "Plan Integral de Inclusi&oacute;n Digital";
 answers[24] = 0;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 10405. ";
 preguntaids[24] = 10405


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[25]= "26)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[25]= new Array();
 choices[25][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[25][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[25][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[25][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[25] = 3;
 units[25] = ['11'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[25] = 315


//  Id pregunta: 6684 Año de creación de pregunta: 2009
 questions[26]= "27)  En el M&eacute;todo ALBRETCH de los puntos de funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[26]= new Array();
 choices[26][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[26][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[26][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[26][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[26] = 0;
 units[26] = ['94'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6684. ";
 preguntaids[26] = 6684


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[27]= "28)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[27]= new Array();
 choices[27][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[27][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[27][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[27][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[27] = 1;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 480. Sociedad de la informaci&oacute;n";
 preguntaids[27] = 480


//  Id pregunta: 9904 Año de creación de pregunta: 2015
 questions[28]= "29)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[28]= new Array();
 choices[28][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[28][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[28][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[28][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[28] = 1;
 units[28] = ['7', '19'];
 blocks[28] = ['A2', 'A4'];
 comments[28] = "Id Pregunta: 9904. ";
 preguntaids[28] = 9904


//  Id pregunta: 8482 Año de creación de pregunta: 2011
 questions[29]= "30)  &iquest;Cu&aacute;l es el tama&ntilde;o de las celdas ATM?";
 choices[29]= new Array();
 choices[29][0] = "48 octetos";
 choices[29][1] = "64 octetos";
 choices[29][2] = "53 octetos";
 choices[29][3] = "32 octetos";
 answers[29] = 2;
 units[29] = ['107'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8482. Examen UPM A2 2011";
 preguntaids[29] = 8482


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Con otra expresi&oacute;n m&aacute;s familiar es com&uacute;nmente conocido el Consejo de la Uni&oacute;n Europea?";
 choices[30]= new Array();
 choices[30][0] = "Parlamento Europeo";
 choices[30][1] = "Consejo de Jefes de Estado";
 choices[30][2] = "Consejo de Jefes de Estado y de Gobierno";
 choices[30][3] = "Consejo de Ministros";
 answers[30] = 3;
 units[30] = ['5'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 180. Uni&oacute;n Europea";
 preguntaids[30] = 180


//  Id pregunta: 8454 Año de creación de pregunta: 2011
 questions[31]= "32)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[31]= new Array();
 choices[31][0] = "Lucifer";
 choices[31][1] = "Serpent";
 choices[31][2] = "Seal";
 choices[31][3] = "Shark";
 answers[31] = 2;
 units[31] = ['76'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8454. ";
 preguntaids[31] = 8454


//  Id pregunta: 7025 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Qu&eacute; diferencia existe entre factores de &eacute;xito y objetivos de la organizaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Los factores de &eacute;xito son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los objetivos son los &ldquo;medios&rdquo; para lograr dicho &eacute;xito";
 choices[32][1] = "Los objetivos son los estudios de mercado mientras que los factores de &eacute;xito son las variaciones en los mercados que modifican dichos estudios";
 choices[32][2] = "Los objetivos son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los factores de &eacute;xito son los &ldquo;medios&rdquo; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = 2;
 units[32] = ['83'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 7025. ";
 preguntaids[32] = 7025


//  Id pregunta: 2559 Año de creación de pregunta: 2009
 questions[33]= "34)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[33]= new Array();
 choices[33][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[33][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[33][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[33][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[33] = 0;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 2559. ";
 preguntaids[33] = 2559


//  Id pregunta: 3799 Año de creación de pregunta: 2002
 questions[34]= "35)  El plan de sistemas de informaci&oacute;n de METRICA V3:";
 choices[34]= new Array();
 choices[34][0] = "Debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos 5 a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[34][1] = "Incluye actividades tales como &quot;generaci&oacute;n de especificaciones de construcci&oacute;n&quot;, &quot;dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema&quot; y &quot;especificaciones t&eacute;cnicas del plan de pruebas&quot;";
 choices[34][2] = "Tiene una perspectiva estrat&eacute;gica y operativa, pero no tecnol&oacute;gica";
 choices[34][3] = "No requiere la participaci&oacute;n del responsable de mantenimiento";
 answers[34] = 2;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3799. ";
 preguntaids[34] = 3799


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[35]= new Array();
 choices[35][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[35][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[35][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[35][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[35] = 1;
 units[35] = ['11'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 263. Direcci&oacute;n p&uacute;blica";
 preguntaids[35] = 263


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


//  Id pregunta: 3435 Año de creación de pregunta: 2006
 questions[37]= "38)  El termino ETL se refiere a:";
 choices[37]= new Array();
 choices[37][0] = "Extraction, Transfer &amp; Labeling.";
 choices[37][1] = "Explanation, Transformation &amp; Loading.";
 choices[37][2] = "Extraction, Transformation &amp; Loading.";
 choices[37][3] = "Extraction, Transfer &amp; Loading.";
 answers[37] = 2;
 units[37] = ['72'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3435. ";
 preguntaids[37] = 3435


//  Id pregunta: 5356 Año de creación de pregunta: 2006
 questions[38]= "39)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[38]= new Array();
 choices[38][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[38][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[38][2] = "Usa claves de 128 bits";
 choices[38][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[38] = 1;
 units[38] = ['120'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5356. ";
 preguntaids[38] = 5356


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "14";
 choices[39][1] = "11";
 choices[39][2] = "12";
 choices[39][3] = "15";
 answers[39] = 0;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 465. Estrategia TIC";
 preguntaids[39] = 465


//  Id pregunta: 2585 Año de creación de pregunta: 2009
 questions[40]= "41)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[40]= new Array();
 choices[40][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[40][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[40][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[40][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[40] = 0;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 2585. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";
 preguntaids[40] = 2585


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[41]= "42)  Se consideran interesados en el procedimiento administrativo:";
 choices[41]= new Array();
 choices[41][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[41][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[41][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[41][3] = "todas son correctas";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[41] = 222


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[42]= "43)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[42]= new Array();
 choices[42][0] = "Leve";
 choices[42][1] = "Grave";
 choices[42][2] = "Muy grave";
 choices[42][3] = "No constituye infracci&oacute;n";
 answers[42] = 0;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 3297. ";
 preguntaids[42] = 3297


//  Id pregunta: 7975 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[43]= new Array();
 choices[43][0] = "ISO 14000-1";
 choices[43][1] = "ISO 18001";
 choices[43][2] = "ISO 19005-1";
 choices[43][3] = "ISO 690";
 answers[43] = 2;
 units[43] = ['80'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7975. Examen TIC A2 2010";
 preguntaids[43] = 7975


//  Id pregunta: 2315 Año de creación de pregunta: 2002
 questions[44]= "45)  En la LOPD, una infracci&oacute;n muy grave es:";
 choices[44]= new Array();
 choices[44][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de la ley";
 choices[44][1] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada";
 choices[44][2] = "Proceder a la recogida de datos de car&aacute;cter personal sin el consentimiento expreso de las personas afectadas en los casos en que &eacute;ste sea exigible";
 choices[44][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[44] = 3;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2315. ";
 preguntaids[44] = 2315


//  Id pregunta: 8166 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[45]= new Array();
 choices[45][0] = "Javascripts";
 choices[45][1] = "Applets";
 choices[45][2] = "JSP";
 choices[45][3] = "VisualScript";
 answers[45] = 2;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8166. Examen TIC A2 2010 interna";
 preguntaids[45] = 8166


//  Id pregunta: 9250 Año de creación de pregunta: 2014
 questions[46]= "47)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[46]= new Array();
 choices[46][0] = "S&iacute;, mediante un flujo de datos.";
 choices[46][1] = "S&iacute;, mediante un flujo de control.";
 choices[46][2] = "Si, mediante un proceso iterativo.";
 choices[46][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[46] = 1;
 units[46] = ['91'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 9250. Examen TIC A2 2013";
 preguntaids[46] = 9250


//  Id pregunta: 1426 Año de creación de pregunta: 2016
 questions[47]= "48)  De conformidad con el art&iacute;culo 62 de la Constituci&oacute;n Espa&ntilde;ola, corresponde al Rey:";
 choices[47]= new Array();
 choices[47][0] = "Convocar y disolver las Cortes Generales y convocar elecciones en los t&eacute;rminos previstos en la Constituci&oacute;n.";
 choices[47][1] = "Sancionar y promulgar las leyes y ordenar la publicaci&oacute;n de las &Oacute;rdenes Ministeriales.";
 choices[47][2] = "El mando supremo de los Cuerpos y Fuerzas de Seguridad del Estado.";
 choices[47][3] = "Ejercer el derecho de gracia de acuerdo con los Tratados Internacionales.";
 answers[47] = 0;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 1426. ";
 preguntaids[47] = 1426


//  Id pregunta: 9643 Año de creación de pregunta: 2014
 questions[48]= "49)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[48]= new Array();
 choices[48][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[48][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[48][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[48][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[48] = 0;
 units[48] = ['76'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9643. ";
 preguntaids[48] = 9643


//  Id pregunta: 877 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de los siguientes es un lenguaje de consulta sobre grafos RDF en la web sem&aacute;ntica:";
 choices[49]= new Array();
 choices[49][0] = "RDFQL";
 choices[49][1] = "SWL";
 choices[49][2] = "SPARQL";
 choices[49][3] = "SQLWS";
 answers[49] = 2;
 units[49] = ['103'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 877. AGE A2 2015";
 preguntaids[49] = 877


//  Id pregunta: 5937 Año de creación de pregunta: 2007
 questions[50]= "51)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[50][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[50][2] = "Rollback de la transacci&oacute;n";
 choices[50][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[50] = 1;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 5937. ";
 preguntaids[50] = 5937


//  Id pregunta: 5154 Año de creación de pregunta: 2003
 questions[51]= "52)  &iquest;Cu&aacute;les son los tipos de direcciones unicast especiales de IPv6?";
 choices[51]= new Array();
 choices[51][0] = "de &aacute;mbito local y de &aacute;mbito privado";
 choices[51][1] = "Loopback, inespec&iacute;fica, compatibles, mapeadas a IPv4, de &aacute;mbito local, de &aacute;mbito privado y  globales";
 choices[51][2] = "Compatibles, mapeadas a IPv4 y globales";
 choices[51][3] = "Compatibles, mapeadas a IPv4, locales y globales";
 answers[51] = 1;
 units[51] = ['109'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5154. ";
 preguntaids[51] = 5154


//  Id pregunta: 6830 Año de creación de pregunta: 2010
 questions[52]= "53)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[52]= new Array();
 choices[52][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[52][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[52][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[52][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[52] = 3;
 units[52] = ['48'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 6830. TIC A 2009";
 preguntaids[52] = 6830


//  Id pregunta: 2821 Año de creación de pregunta: 2002
 questions[53]= "54)  En el subsistema de E/S, &iquest;qu&eacute; diferencia a una 'operaci&oacute;n de entrada/salida' de una 'transferencia elemental'?:";
 choices[53]= new Array();
 choices[53][0] = "La primera transfiere uno o varios bloques de datos y la segunda s&oacute;lo mueve un dato o una palabra de control";
 choices[53][1] = "La primera no comprueba el estado del perif&eacute;rico y la segunda s&iacute; lo hace";
 choices[53][2] = "La primera se realiza por hardware y la segunda por software";
 choices[53][3] = "La primera sincroniza la UCP y el controlador del perif&eacute;rico mediante se&ntilde;ales el&eacute;ctricas, y la segunda no lo hace";
 answers[53] = 0;
 units[53] = ['56'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2821. ";
 preguntaids[53] = 2821


//  Id pregunta: 1932 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n correcta acerca de La Forma Normal de Boyce-Codd (FNBC):";
 choices[54]= new Array();
 choices[54][0] = "Requiere que existan dependencias funcionales no triviales de los atributos que no sean un conjunto de la clave candidata.";
 choices[54][1] = "Es una versi&oacute;n ligeramente menos fuerte que la 3FN (Tercera Forma Normal).";
 choices[54][2] = "Una relaci&oacute;n esta en FNBC si esta en 3FN y solo si, todo determinante es una clave candidata.";
 choices[54][3] = "Es una versi&oacute;n ligeramente menos fuerte que la 2FN (Segunda Forma Normal).";
 answers[54] = 2;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1932. ";
 preguntaids[54] = 1932


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[55]= "56)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[55]= new Array();
 choices[55][0] = "La Comisi&oacute;n Europea.";
 choices[55][1] = "El Consejo Europeo.";
 choices[55][2] = "El Consejo de Europa.";
 choices[55][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[55] = 0;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[55] = 130


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[56]= "57)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[56]= new Array();
 choices[56][0] = "solo mediante ley";
 choices[56][1] = "reglamentariamente";
 choices[56][2] = "mediante ley o reglamentariamente";
 choices[56][3] = "ninguna es correcta";
 answers[56] = 0;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[56] = 212


//  Id pregunta: 7241 Año de creación de pregunta: 2010
 questions[57]= "58)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[57]= new Array();
 choices[57][0] = "RD 951/2003";
 choices[57][1] = "RD 952/2003";
 choices[57][2] = "RD 951/2005";
 choices[57][3] = "RD 951/2006";
 answers[57] = 2;
 units[57] = ['92'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 7241. ";
 preguntaids[57] = 7241


//  Id pregunta: 2132 Año de creación de pregunta: 2004
 questions[58]= "59)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[58]= new Array();
 choices[58][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[58][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[58][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[58][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[58] = 2;
 units[58] = ['36', '45'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2132. Similar a examen TIC SS A 2003";
 preguntaids[58] = 2132


//  Id pregunta: 1008 Año de creación de pregunta: 2016
 questions[59]= "60)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[59]= new Array();
 choices[59][0] = "la capital del pa&iacute;s";
 choices[59][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[59][2] = "cada una de las provincias";
 choices[59][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[59] = 1;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 1008. Ley 40/2015";
 preguntaids[59] = 1008


//  Id pregunta: 10794 Año de creación de pregunta: 2015
 questions[60]= "61)  La tecnolog&iacute;a NFC opera a una frecuencia de:";
 choices[60]= new Array();
 choices[60][0] = "1,63 MHz";
 choices[60][1] = "13,56 MHz";
 choices[60][2] = "2,45 GHz";
 choices[60][3] = "5,4 GHz";
 answers[60] = 1;
 units[60] = ['51'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 10794. ";
 preguntaids[60] = 10794


//  Id pregunta: 8720 Año de creación de pregunta: 2013
 questions[61]= "62)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es:";
 choices[61]= new Array();
 choices[61][0] = "32MB";
 choices[61][1] = "1GB";
 choices[61][2] = "2GB";
 choices[61][3] = "4GB";
 answers[61] = 3;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8720. Examen TICA2-2011";
 preguntaids[61] = 8720


//  Id pregunta: 4360 Año de creación de pregunta: 2004
 questions[62]= "63)  Indique la afirmaci&oacute;n falsa. De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el servicio universal debe garantizar:";
 choices[62]= new Array();
 choices[62][0] = "La puesta a disposici&oacute;n de los abonados de una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y que se actualice, como m&iacute;nimo, una vez al a&ntilde;o";
 choices[62][1] = "La obtenci&oacute;n por todos los usuarios finales de una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija as&iacute; como el acceso a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico debiendo incluir entre otros el acceso funcional a internet.";
 choices[62][2] = "La existencia de una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago";
 choices[62][3] = "La obtenci&oacute;n por todos los usuarios finales de telefon&iacute;a m&oacute;vil en condiciones de igualdad y no discriminaci&oacute;n, con una calidad determinada que ser&aacute; fijada reglamentariamente y a un precio asequible.";
 answers[62] = 3;
 units[62] = ['121'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4360. Examen TIC MAP B 2004";
 preguntaids[62] = 4360


//  Id pregunta: 9804 Año de creación de pregunta: 2015
 questions[63]= "64)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[63]= new Array();
 choices[63][0] = "Anualmente";
 choices[63][1] = "Cada tres a&ntilde;os";
 choices[63][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[63][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[63] = 1;
 units[63] = ['37'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 9804. Art 70.2, texto refundido de la Ley de Contratos del Sector P&uacute;blico";
 preguntaids[63] = 9804


//  Id pregunta: 2935 Año de creación de pregunta: 2002
 questions[64]= "65)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[64]= new Array();
 choices[64][0] = "El boot-strap";
 choices[64][1] = "El dispatcher";
 choices[64][2] = "El scheduler";
 choices[64][3] = "Ninguno de los anteriores";
 answers[64] = 2;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2935. ";
 preguntaids[64] = 2935


//  Id pregunta: 5888 Año de creación de pregunta: 2007
 questions[65]= "66)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[65]= new Array();
 choices[65][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[65][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[65][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[65][3] = "Todas las anteriores son ciertas";
 answers[65] = 3;
 units[65] = ['19'];
 blocks[65] = ['A4'];
 comments[65] = "Id Pregunta: 5888. Ley 56/2007";
 preguntaids[65] = 5888


//  Id pregunta: 1234 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[66]= new Array();
 choices[66][0] = "16, 24, 32 &oacute; 40";
 choices[66][1] = "6, 12, 24 &oacute; 48";
 choices[66][2] = "4, 8, 16 &oacute; 40";
 choices[66][3] = "8, 16, 32 &oacute; 64";
 answers[66] = 0;
 units[66] = ['110'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1234. ";
 preguntaids[66] = 1234


//  Id pregunta: 9877 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[67]= new Array();
 choices[67][0] = "Por contienda.";
 choices[67][1] = "Por contenci&oacute;n.";
 choices[67][2] = "Por paso de testigo.";
 choices[67][3] = "Por detecci&oacute;n de portadora.";
 answers[67] = 1;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9877. ";
 preguntaids[67] = 9877


//  Id pregunta: 1762 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale qui&eacute;n gestiona la ra&iacute;z del DNS:";
 choices[68]= new Array();
 choices[68][0] = "IANA";
 choices[68][1] = "ESNIC";
 choices[68][2] = "INIC";
 choices[68][3] = "ITU";
 answers[68] = 0;
 units[68] = ['103'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1762. ";
 preguntaids[68] = 1762


//  Id pregunta: 3040 Año de creación de pregunta: 2002
 questions[69]= "70)  Se&ntilde;ale el enunciado falso:";
 choices[69]= new Array();
 choices[69][0] = "Los sistemas transaccionales deben bloquear los registros que vayan a modificar";
 choices[69][1] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado es cuando se actualizan las bases de datos y se suelen liberar los registros intervinientes";
 choices[69][2] = "Todos los aspectos de una transacci&oacute;n deben completarse o el sistema debe actuar como si ninguna se hubiera completado";
 choices[69][3] = "Los efectos de una transacci&oacute;n deben ser visibles por las dem&aacute;s transacciones antes que la transacci&oacute;n se complete";
 answers[69] = 3;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3040. ";
 preguntaids[69] = 3040


//  Id pregunta: 2676 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Qu&eacute; es el UART?:";
 choices[70]= new Array();
 choices[70][0] = "Universal Asynchronous Receiver Transmitter. Es un microprocesador que act&uacute;a de interfaz entre el bus (paralelo) de la CPU y el puerto serie";
 choices[70][1] = "Universal Asynchronous Receiver Transmitter. Es un dispositivo que adapta terminales as&iacute;ncronos a una red X.25";
 choices[70][2] = "Universal Audio Receiver Transmitter. Es un microprocesador incluido en la tarjeta de sonido que act&uacute;a como receptor y transmisor de las se&ntilde;ales de audio";
 choices[70][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[70] = 0;
 units[70] = ['56'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2676. ";
 preguntaids[70] = 2676


//  Id pregunta: 4391 Año de creación de pregunta: 2002
 questions[71]= "72)  ASP significa:";
 choices[71]= new Array();
 choices[71][0] = "Application Service Provider";
 choices[71][1] = "Active Server Pages";
 choices[71][2] = "Las 2 respuestas anteriores son correctas";
 choices[71][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[71] = 2;
 units[71] = ['62'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 4391. ";
 preguntaids[71] = 4391


//  Id pregunta: 9180 Año de creación de pregunta: 2014
 questions[72]= "73)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[72]= new Array();
 choices[72][0] = "Ley ordinaria.";
 choices[72][1] = "Orden Ministerial.";
 choices[72][2] = "Ley org&aacute;nica.";
 choices[72][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[72] = 1;
 units[72] = ['7'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 9180. Examen TIC A2 2013";
 preguntaids[72] = 9180


//  Id pregunta: 1484 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l es la norma ISO (Organizaci&oacute;n Internacional de Estandarizaci&oacute;n) relativa a la documentaci&oacute;n para usuarios de software?";
 choices[73]= new Array();
 choices[73][0] = "ISO/IEC 26514:2008";
 choices[73][1] = "ISO 9001:2000";
 choices[73][2] = "ISO 30300";
 choices[73][3] = "ISO 27002";
 answers[73] = 0;
 units[73] = ['82'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1484. ";
 preguntaids[73] = 1484


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[74]= "75)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[74]= new Array();
 choices[74][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[74][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[74][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[74][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[74] = 2;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 780. Junta de Extremadura A1 2015";
 preguntaids[74] = 780


