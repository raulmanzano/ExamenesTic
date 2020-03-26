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
//  Id pregunta: 5607 Año de creación de pregunta: 2007
 questions[0]= "1)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[0]= new Array();
 choices[0][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[0][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[0][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[0][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[0] = 0;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 5607. ";
 preguntaids[0] = 5607


//  Id pregunta: 5954 Año de creación de pregunta: 2007
 questions[1]= "2)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, frecuencias o canales radioel&eacute;ctricos no adecuada al correspondiente plan de utilizaci&oacute;n del espectro radioel&eacute;ctrico o al Cuadro Nacional de Atribuci&oacute;n de Frecuencia:";
 choices[1]= new Array();
 choices[1][0] = "Es una infracci&oacute;n muy grave";
 choices[1][1] = "Es una infracci&oacute;n grave";
 choices[1][2] = "Es una infracci&oacute;n leve";
 choices[1][3] = "No es una infracci&oacute;n";
 answers[1] = 0;
 units[1] = ['121'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5954. ";
 preguntaids[1] = 5954


//  Id pregunta: 9285 Año de creación de pregunta: 2014
 questions[2]= "3)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[2]= new Array();
 choices[2][0] = "Especialista en Comunicaciones";
 choices[2][1] = "Usuarios expertos";
 choices[2][2] = "T&eacute;cnicos de Comunicaciones.";
 choices[2][3] = "Grupo de Aseguramiento de la Calidad";
 answers[2] = 3;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 9285. Examen TIC A2 2013. Promocion interna";
 preguntaids[2] = 9285


//  Id pregunta: 4924 Año de creación de pregunta: 2002
 questions[3]= "4)  La tecnolog&iacute;a de red de &aacute;rea local Switched Ethernet:";
 choices[3]= new Array();
 choices[3][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[3][1] = "Se basa en el concepto de Microsegmentaci&oacute;n (se reduce el dominio de colisi&oacute;n de tal forma que solo dos nodos coexisten en cada dominio de colisi&oacute;n)";
 choices[3][2] = "Las dos anteriores son falsas";
 choices[3][3] = "Las dos anteriores son correctas";
 answers[3] = 1;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4924. ";
 preguntaids[3] = 4924


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[4]= "5)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[4]= new Array();
 choices[4][0] = "Tres a&ntilde;os.";
 choices[4][1] = "Cuatro a&ntilde;os.";
 choices[4][2] = "Cinco a&ntilde;os.";
 choices[4][3] = "Seis a&ntilde;os.";
 answers[4] = 3;
 units[4] = ['5'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[4] = 143


//  Id pregunta: 5861 Año de creación de pregunta: 2007
 questions[5]= "6)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[5]= new Array();
 choices[5][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[5][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[5][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[5][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[5] = 3;
 units[5] = ['78'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5861. ";
 preguntaids[5] = 5861


//  Id pregunta: 2100 Año de creación de pregunta: 2002
 questions[6]= "7)  El m&eacute;todo Promethee:";
 choices[6]= new Array();
 choices[6][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[6][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[6][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[6][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[6] = 0;
 units[6] = ['38'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2100. ";
 preguntaids[6] = 2100


//  Id pregunta: 7865 Año de creación de pregunta: 2011
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[7]= new Array();
 choices[7][0] = "Mercado &uacute;nico digital din&aacute;mico.";
 choices[7][1] = "Acceso ultrarr&aacute;pido a Internet.";
 choices[7][2] = "Nativos digitales.";
 choices[7][3] = "Inclusi&oacute;n digital.";
 answers[7] = 2;
 units[7] = ['16'];
 blocks[7] = ['A3'];
 comments[7] = "Id Pregunta: 7865. Examen TIC A1 2010";
 preguntaids[7] = 7865


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[8]= "9)  El pacto fiscal europeo de 2012 incluye:";
 choices[8]= new Array();
 choices[8][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[8][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[8][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[8][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[8] = 0;
 units[8] = ['5'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 102. Uni&oacute;n Europea";
 preguntaids[8] = 102


//  Id pregunta: 1141 Año de creación de pregunta: 2016
 questions[9]= "10)  Seleccione de los siguientes participantes de M&Eacute;TRICA v3 el que se NO se agrupa dentro del perfil de Analista:";
 choices[9]= new Array();
 choices[9][0] = "Equipo de Soporte T&eacute;cnico.";
 choices[9][1] = "Grupo de Aseguramiento de la Calidad.";
 choices[9][2] = "Administrador de Bases de Datos.";
 choices[9][3] = "T&eacute;cnico de Sistemas.";
 answers[9] = 3;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1141. ";
 preguntaids[9] = 1141


//  Id pregunta: 7696 Año de creación de pregunta: 2010
 questions[10]= "11)  Seg&uacute;n la Ley 39/2015, con respecto a las notificaciones telem&aacute;ticas, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido en un plazo de:";
 choices[10]= new Array();
 choices[10][0] = "10 d&iacute;as naturales.";
 choices[10][1] = "10 d&iacute;as h&aacute;biles.";
 choices[10][2] = "20 d&iacute;as naturales.";
 choices[10][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido.";
 answers[10] = 0;
 units[10] = ['7'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 7696. Map 2007";
 preguntaids[10] = 7696


//  Id pregunta: 2403 Año de creación de pregunta: 2006
 questions[11]= "12)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[11]= new Array();
 choices[11][0] = "En todo caso";
 choices[11][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[11][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[11][3] = "Nunca";
 answers[11] = 1;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2403. ";
 preguntaids[11] = 2403


//  Id pregunta: 1434 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el art&iacute;culo 81 de la Constituci&oacute;n Espa&ntilde;ola &iquest;qu&eacute; mayor&iacute;a del Congreso ser&aacute; necesaria para la aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas en una votaci&oacute;n final sobre el conjunto del proyecto?";
 choices[12]= new Array();
 choices[12][0] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a simple.";
 choices[12][1] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a ordinaria.";
 choices[12][2] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a cualificada.";
 choices[12][3] = "Las leyes org&aacute;nicas exigir&aacute;n mayor&iacute;a absoluta.";
 answers[12] = 3;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 1434. ";
 preguntaids[12] = 1434


//  Id pregunta: 4233 Año de creación de pregunta: 2006
 questions[13]= "14)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[13]= new Array();
 choices[13][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[13][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[13][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[13][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[13] = 2;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4233. ";
 preguntaids[13] = 4233


//  Id pregunta: 9523 Año de creación de pregunta: 2014
 questions[14]= "15)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[14]= new Array();
 choices[14][0] = "getHeaderValues() of HttpServletRequest";
 choices[14][1] = "getHeaderValue() of ServletRequest";
 choices[14][2] = "getHeader() of HttpServletRequest";
 choices[14][3] = "getHeader() of ServletRequest";
 answers[14] = 2;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9523. ";
 preguntaids[14] = 9523


//  Id pregunta: 7745 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?";
 choices[15]= new Array();
 choices[15][0] = "Entidad externa.";
 choices[15][1] = "Proceso.";
 choices[15][2] = "Funci&oacute;n.";
 choices[15][3] = "Almac&eacute;n de datos.";
 answers[15] = 2;
 units[15] = ['89'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7745. ";
 preguntaids[15] = 7745


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[16]= "17)  La iniciativa legislativa corresponde:";
 choices[16]= new Array();
 choices[16][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[16][1] = "Al rey y al Gobierno.";
 choices[16][2] = "Al Congreso, al Senado y al Rey.";
 choices[16][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[16] = 3;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 86. Constituci&oacute;n de 1978";
 preguntaids[16] = 86


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[17]= new Array();
 choices[17][0] = "Versi&oacute;n digital prioritaria.";
 choices[17][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[17][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[17][3] = "Apertura y transparencia.";
 answers[17] = 0;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[17] = 109


//  Id pregunta: 10857 Año de creación de pregunta: 2015
 questions[18]= "19)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[18]= new Array();
 choices[18][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[18][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[18][2] = "WCF usa siempre SOAP.";
 choices[18][3] = "Las tres anteriores son ciertas.";
 answers[18] = 2;
 units[18] = ['63'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10857. ";
 preguntaids[18] = 10857


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[19]= "20)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[19]= new Array();
 choices[19][0] = "Diciembre de 1987.";
 choices[19][1] = "Septiembre de 1989.";
 choices[19][2] = "Octubre de 1990.";
 choices[19][3] = "Noviembre de 1980.";
 answers[19] = 1;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 156. Uni&oacute;n Europea";
 preguntaids[19] = 156


//  Id pregunta: 5901 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[20]= new Array();
 choices[20][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo";
 choices[20][1] = "EUROMARC es la versi&oacute;n europea de dicho formato";
 choices[20][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60";
 choices[20][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic";
 answers[20] = 2;
 units[20] = ['100'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 5901. ";
 preguntaids[20] = 5901


//  Id pregunta: 7670 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &laquo;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&raquo;?";
 choices[21]= new Array();
 choices[21][0] = "Desarrollo de sistemas de informaci&oacute;n.";
 choices[21][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[21][2] = "An&aacute;lisis de sistema de informaci&oacute;n.";
 choices[21][3] = "Mantenimiento de sistemas de informaci&oacute;n.";
 answers[21] = 0;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 7670. Map 2007";
 preguntaids[21] = 7670


//  Id pregunta: 10146 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;C&uacute;al de las siguientes opciones es un sistema de gesti&oacute;n de contenidos?";
 choices[22]= new Array();
 choices[22][0] = "MongoDB";
 choices[22][1] = "Redis";
 choices[22][2] = "Cassandra";
 choices[22][3] = "Drupal";
 answers[22] = 3;
 units[22] = ['99'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10146. Examen TIC A1 2014";
 preguntaids[22] = 10146


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[23]= new Array();
 choices[23][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[23][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[23][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[23][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[23] = 1;
 units[23] = ['11'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 302. Presupuestos generales";
 preguntaids[23] = 302


//  Id pregunta: 5164 Año de creación de pregunta: 2003
 questions[24]= "25)  Con la API de Servlet con respecto a cookies se puede:";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo se pueden leer cookies";
 choices[24][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[24][2] = "Se pueden crear cookies";
 choices[24][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[24] = 2;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5164. ";
 preguntaids[24] = 5164


//  Id pregunta: 8120 Año de creación de pregunta: 2011
 questions[25]= "26)  Seg&uacute;n MAGERlT /2 los activos se agrupan en capas que van de la capa 1 a la capa 5. &iquest;En qu&eacute; capa se encuentra el Hardware?";
 choices[25]= new Array();
 choices[25][0] = "Capa 1";
 choices[25][1] = "Capa 2";
 choices[25][2] = "Capa 3";
 choices[25][3] = "Capa 4";
 answers[25] = 1;
 units[25] = ['32'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 8120. Examen TIC A2 2010";
 preguntaids[25] = 8120


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[26][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[26][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[26][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[26] = 0;
 units[26] = ['22'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 497. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[26] = 497


//  Id pregunta: 1461 Año de creación de pregunta: 2016
 questions[27]= "28)  Sin perjuicio de los requisitos que en materia de informaci&oacute;n se establezcan en la materia vigente, el prestador de servicios de la sociedad de la informaci&oacute;n ofrecer&aacute; de manera permanente, f&aacute;cil, directa y gratuita, una serie de informaci&oacute;n. &iquest;Cu&aacute;l NO est&aacute; incluido en esta obligaci&oacute;n, seg&uacute;n la Ley 34/2002, de 11 de julio?";
 choices[27]= new Array();
 choices[27][0] = "Nombre o denominaci&oacute;n social.";
 choices[27][1] = "Si la profesi&oacute;n est&aacute; regulada, los datos del Colegio Profesional al que pertenece.";
 choices[27][2] = "Los c&oacute;digos de conducta a los que, en su caso, est&eacute; adherido.";
 choices[27][3] = "Un n&uacute;mero de tel&eacute;fono donde poder establecer una comunicaci&oacute;n directa con el prestador.";
 answers[27] = 3;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 1461. ";
 preguntaids[27] = 1461


//  Id pregunta: 3067 Año de creación de pregunta: 2002
 questions[28]= "29)  TTP:";
 choices[28]= new Array();
 choices[28][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[28][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[28][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[28][3] = "Todas son falsas";
 answers[28] = 2;
 units[28] = ['77', '78'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3067. ";
 preguntaids[28] = 3067


//  Id pregunta: 10420 Año de creación de pregunta: 2015
 questions[29]= "30)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[29]= new Array();
 choices[29][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[29][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[29][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[29][3] = "El versionado ha sido siempre 1.x.";
 answers[29] = 2;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10420. ";
 preguntaids[29] = 10420


//  Id pregunta: 5729 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n llamado &quot;modelo en cascada&quot;?";
 choices[30]= new Array();
 choices[30][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[30][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[30][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[30][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[30] = 3;
 units[30] = ['76'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5729. ";
 preguntaids[30] = 5729


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[31]= new Array();
 choices[31][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[31] = 0;
 units[31] = ['11'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 300. Presupuestos generales";
 preguntaids[31] = 300


//  Id pregunta: 8819 Año de creación de pregunta: 2013
 questions[32]= "33)  En un circuito virtual:";
 choices[32]= new Array();
 choices[32][0] = "El Equipo de Terminaci&oacute;n del Circuito de Datos (ETCD) es un nodo frontera de red, a trav&eacute;s del cual los datos del usuario atraviesan la misma hasta llegar al ETCD remoto.";
 choices[32][1] = "La Central de Conmutaci&oacute;n de Paquetes es la encargada del paso de paquetes al siguiente nodo dentro del circuito virtual establecido.";
 choices[32][2] = "Un Circuito de Datos es la conexi&oacute;n virtual establecida entre los dos ETCD (Equipos de Terminaci&oacute;n del Circuito de Datos) involucrados en una transmisi&oacute;n.";
 choices[32][3] = "Todas son correctas.";
 answers[32] = 3;
 units[32] = ['112'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8819. ";
 preguntaids[32] = 8819


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[33]= "34)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[33]= new Array();
 choices[33][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[33][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[33][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[33][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[33] = 1;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[33] = 215


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[34]= new Array();
 choices[34][0] = "El 5 de Octubre de 2015";
 choices[34][1] = "El 15 de Octubre de 2015";
 choices[34][2] = "El 15 de Septiembre de 2015";
 choices[34][3] = "El 2 de Octubre de 2015";
 answers[34] = 2;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 459. Estrategia TIC";
 preguntaids[34] = 459


//  Id pregunta: 6671 Año de creación de pregunta: 2009
 questions[35]= "36)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[35]= new Array();
 choices[35][0] = "Strategy.";
 choices[35][1] = "State.";
 choices[35][2] = "Observer.";
 choices[35][3] = "Command.";
 answers[35] = 2;
 units[35] = ['89'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6671. MAP 2008 A1";
 preguntaids[35] = 6671


//  Id pregunta: 3659 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la m&aacute;s importante para un buen analista?:";
 choices[36]= new Array();
 choices[36][0] = "Capacidad de comprensi&oacute;n de conceptos abstractos";
 choices[36][1] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[36][2] = "Habilidad para evitar que 'los &aacute;rboles no dejen ver el bosque'";
 choices[36][3] = "Habilidad para relacionar aplicaciones hardware/software en el entorno usuario";
 answers[36] = 2;
 units[36] = ['85'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3659. ";
 preguntaids[36] = 3659


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[37]= "38)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[37]= new Array();
 choices[37][0] = "Primario, que incluye la agricultura y la pesca";
 choices[37][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[37][2] = "Minero, junto con las exportaciones de comercio";
 choices[37][3] = "Servicios";
 answers[37] = 3;
 units[37] = ['12'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 343. Modelo econ&oacute;mico";
 preguntaids[37] = 343


//  Id pregunta: 8808 Año de creación de pregunta: 2013
 questions[38]= "39)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[38]= new Array();
 choices[38][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[38][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[38][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[38][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre";
 answers[38] = 3;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 8808. ";
 preguntaids[38] = 8808


//  Id pregunta: 9797 Año de creación de pregunta: 2015
 questions[39]= "40)  No es un objetivo de Europa 2020:";
 choices[39]= new Array();
 choices[39][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[39][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[39][2] = "Reducir al menos en 20 millones el n&uacute;mero de personas en situaci&oacute;n o riesgo de pobreza y exclusi&oacute;n social.";
 choices[39][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1990.";
 answers[39] = 1;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 9797. ";
 preguntaids[39] = 9797


//  Id pregunta: 10637 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a los derechos relativos a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[40]= new Array();
 choices[40][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[40][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[40][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[40][3] = "Todas las anteriores.";
 answers[40] = 3;
 units[40] = ['121'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10637. ";
 preguntaids[40] = 10637


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[41]= "42)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[41]= new Array();
 choices[41][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[41][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[41][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[41][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[41] = 0;
 units[41] = ['92'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 836. Integraci&oacute;n continua";
 preguntaids[41] = 836


//  Id pregunta: 1845 Año de creación de pregunta: 2016
 questions[42]= "43)  Los equipos Bluetooth emplean:";
 choices[42]= new Array();
 choices[42][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[42][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencia.";
 choices[42][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[42][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[42] = 1;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1845. ";
 preguntaids[42] = 1845


//  Id pregunta: 6646 Año de creación de pregunta: 2009
 questions[43]= "44)  La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica depende de:";
 choices[43]= new Array();
 choices[43][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[43][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[43][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[43][3] = "Presidencia del Gobierno.";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 6646. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[43] = 6646


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[44]= "45)  El Presupuesto por programas sirve para saber...";
 choices[44]= new Array();
 choices[44][0] = "En qu&eacute; nos gastamos el dinero";
 choices[44][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[44][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[44][3] = "Qui&eacute;n se gasta el dinero";
 answers[44] = 2;
 units[44] = ['11'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 272. Presupuestos generales";
 preguntaids[44] = 272


//  Id pregunta: 4544 Año de creación de pregunta: 2002
 questions[45]= "46)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[45]= new Array();
 choices[45][0] = "intranet";
 choices[45][1] = "collaboration-net";
 choices[45][2] = "teleworking-net";
 choices[45][3] = "extranet";
 answers[45] = 3;
 units[45] = ['113'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4544. ";
 preguntaids[45] = 4544


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[46]= new Array();
 choices[46][0] = "Art&iacute;culo 14 CE.";
 choices[46][1] = "Art&iacute;culo 9.2 CE.";
 choices[46][2] = "Art&iacute;culo 9.1 CE.";
 choices[46][3] = "Art&iacute;culo 13 CE.";
 answers[46] = 1;
 units[46] = ['14'];
 blocks[46] = ['A3'];
 comments[46] = "Id Pregunta: 387. Pol&iacute;ticas de igualdad";
 preguntaids[46] = 387


//  Id pregunta: 2853 Año de creación de pregunta: 2002
 questions[47]= "48)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[47]= new Array();
 choices[47][0] = "fvi";
 choices[47][1] = "fred";
 choices[47][2] = "sed";
 choices[47][3] = "xlexp";
 answers[47] = 2;
 units[47] = ['57'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2853. sed (stream editor) es un editor de flujo, una potente herramienta de tratamiento de texto para el sistema operativoUnix que acepta como entrada un archivo, lo lee y modifica l&iacute;nea a l&iacute;nea de acuerdo a un script, mostrando el resultado por salida est&aacute;ndar (normalmente en pantalla, a menos que se realice una redirecci&oacute;n). Sed permite manipular flujos de datos, como por ejemplo cortar l&iacute;neas, buscar y reemplazar texto (con soporte de expresiones regulares), entre otras cosas";
 preguntaids[47] = 2853


//  Id pregunta: 4032 Año de creación de pregunta: 2003
 questions[48]= "49)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de";
 choices[48]= new Array();
 choices[48][0] = "la planificaci&oacute;n operativa";
 choices[48][1] = "el control anal&iacute;tico del gasto";
 choices[48][2] = "la planificaci&oacute;n estrat&eacute;gica";
 choices[48][3] = "la planificaci&oacute;n t&aacute;ctica";
 answers[48] = 0;
 units[48] = ['83'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 4032. EXAMEN CASTILLA LA MANCHA";
 preguntaids[48] = 4032


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[49]= "50)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[49]= new Array();
 choices[49][0] = "Leve";
 choices[49][1] = "Grave";
 choices[49][2] = "Muy grave";
 choices[49][3] = "No constituye infracci&oacute;n";
 answers[49] = 0;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[49] = 3279


//  Id pregunta: 10553 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[50]= new Array();
 choices[50][0] = "Controlar todos los proveedores externos de TI";
 choices[50][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[50][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[50][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[50] = 1;
 units[50] = ['101'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10553. ";
 preguntaids[50] = 10553


//  Id pregunta: 7778 Año de creación de pregunta: 2010
 questions[51]= "52)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[51]= new Array();
 choices[51][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria.";
 choices[51][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos.";
 choices[51][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol.";
 choices[51][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol.";
 answers[51] = 2;
 units[51] = ['74'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7778. ";
 preguntaids[51] = 7778


//  Id pregunta: 5490 Año de creación de pregunta: 2007
 questions[52]= "53)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[52]= new Array();
 choices[52][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[52][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[52][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[52][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[52] = 3;
 units[52] = ['30'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 5490. ";
 preguntaids[52] = 5490


//  Id pregunta: 6538 Año de creación de pregunta: 2003
 questions[53]= "54)  Seg&uacute;n el RD 1720/2007, por el que se aprueba el desarrollo de la Ley Organica 15/1999 de protecci&oacute;n de datos de carater personal, ser&aacute; posible el tratamiento o la cesi&oacute;n de los datos de car&aacute;cter personal sin necesidad del consentimiento del interesado cuando";
 choices[53]= new Array();
 choices[53][0] = "En ningun caso. Siempre es necesario consentimiento del interesado.";
 choices[53][1] = "Lo autorice una norma con rango de ley o una norma dederecho comunitario.";
 choices[53][2] = "Los datos objeto de tratamiento o cesion figuran en fuentes accesibles al publico y el responsable del fichero tenga un interes legitimo para su conocimiento.";
 choices[53][3] = "La b) y la c) son correctas.";
 answers[53] = 3;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 6538. ";
 preguntaids[53] = 6538


//  Id pregunta: 8508 Año de creación de pregunta: 2011
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[54]= new Array();
 choices[54][0] = "Postgres";
 choices[54][1] = "Hibernate";
 choices[54][2] = "TopLink";
 choices[54][3] = "Ibatis";
 answers[54] = 0;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8508. ";
 preguntaids[54] = 8508


//  Id pregunta: 1064 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[55]= new Array();
 choices[55][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[55][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[55][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[55][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en dos cada canal.";
 answers[55] = 2;
 units[55] = ['117'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 1064. ";
 preguntaids[55] = 1064


//  Id pregunta: 6417 Año de creación de pregunta: 2003
 questions[56]= "57)  La sindicaci&oacute;n de contenidos web:";
 choices[56]= new Array();
 choices[56][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[56][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[56][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[56][3] = "Todas son correctas";
 answers[56] = 3;
 units[56] = ['74'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6417. ";
 preguntaids[56] = 6417


//  Id pregunta: 6284 Año de creación de pregunta: 2007
 questions[57]= "58)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[57]= new Array();
 choices[57][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[57][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[57][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[57][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[57] = 1;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6284. ";
 preguntaids[57] = 6284


//  Id pregunta: 9153 Año de creación de pregunta: 2014
 questions[58]= "59)  CODASYL, modelo de Sistemas Gestores de Bases de datos en red, es acr&oacute;nimo de:";
 choices[58]= new Array();
 choices[58][0] = "Conference on Data Systems Languages.";
 choices[58][1] = "Concurrent Database Systems Languages.";
 choices[58][2] = "Coherent Data Symmetric Location.";
 choices[58][3] = "CODe And Systematic Language.";
 answers[58] = 0;
 units[58] = ['60'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9153. Examen TIC A2 2013";
 preguntaids[58] = 9153


//  Id pregunta: 1570 Año de creación de pregunta: 2016
 questions[59]= "60)  A los efectos de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, se&ntilde;ale cu&aacute;l NO es un servicio de la sociedad de la informaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos o de mercados y centros comerciales virtuales.";
 choices[59][1] = "El teletexto televisivo y otros servicios equivalentes como las gu&iacute;as electr&oacute;nicas de programas ofrecidas a trav&eacute;s de las plataformas televisivas.";
 choices[59][2] = "El v&iacute;deo bajo demanda, como servicio en que el usuario puede seleccionar a trav&eacute;s de la red, tanto el programa deseado como el momento de su suministro y recepci&oacute;n.";
 choices[59][3] = "El suministro de informaci&oacute;n por v&iacute;a telem&aacute;tica.";
 answers[59] = 1;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 1570. ";
 preguntaids[59] = 1570


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[60]= "61)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[60]= new Array();
 choices[60][0] = "El presidente de las Cortes Generales.";
 choices[60][1] = "El Presidente del Gobierno.";
 choices[60][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[60] = 3;
 units[60] = ['11'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 318. Presupuestos generales";
 preguntaids[60] = 318


//  Id pregunta: 10839 Año de creación de pregunta: 2015
 questions[61]= "62)  El protocolo TCP se encuentra especificado en:";
 choices[61]= new Array();
 choices[61][0] = "RFC 793";
 choices[61][1] = "RFC 739";
 choices[61][2] = "RFC 791";
 choices[61][3] = "RFC 719";
 answers[61] = 0;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10839. ";
 preguntaids[61] = 10839


//  Id pregunta: 7290 Año de creación de pregunta: 2010
 questions[62]= "63)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[62]= new Array();
 choices[62][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[62][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[62][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = 2;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 7290. ";
 preguntaids[62] = 7290


//  Id pregunta: 8998 Año de creación de pregunta: 2014
 questions[63]= "64)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[63]= new Array();
 choices[63][0] = "MariaBD";
 choices[63][1] = "Apache Cassandra";
 choices[63][2] = "Heidi";
 choices[63][3] = "Ingres";
 answers[63] = 1;
 units[63] = ['73'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8998. ";
 preguntaids[63] = 8998


//  Id pregunta: 4601 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[64]= new Array();
 choices[64][0] = "Un TR1";
 choices[64][1] = "Un TR2";
 choices[64][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[64][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[64] = 1;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4601. ";
 preguntaids[64] = 4601


//  Id pregunta: 6662 Año de creación de pregunta: 2009
 questions[65]= "66)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[65]= new Array();
 choices[65][0] = "Un mes";
 choices[65][1] = "Dos meses";
 choices[65][2] = "Tres meses";
 choices[65][3] = "Seis meses";
 answers[65] = 0;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 6662. MAP 2008 A1";
 preguntaids[65] = 6662


//  Id pregunta: 8573 Año de creación de pregunta: 2013
 questions[66]= "67)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[66]= new Array();
 choices[66][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[66][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[66][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[66][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[66] = 3;
 units[66] = ['49'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8573. ";
 preguntaids[66] = 8573


//  Id pregunta: 5381 Año de creación de pregunta: 2006
 questions[67]= "68)  El estandar 802.11k se centra en";
 choices[67]= new Array();
 choices[67][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[67][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[67][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[67][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[67] = 3;
 units[67] = ['108'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 5381. ";
 preguntaids[67] = 5381


//  Id pregunta: 9343 Año de creación de pregunta: 2014
 questions[68]= "69)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Undo.";
 choices[68][1] = "Rollback.";
 choices[68][2] = "Two Phase Commit.";
 choices[68][3] = "Commit.";
 answers[68] = 1;
 units[68] = ['60'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9343. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[68] = 9343


//  Id pregunta: 5409 Año de creación de pregunta: 2006
 questions[69]= "70)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[69]= new Array();
 choices[69][0] = "BNC";
 choices[69][1] = "N-series";
 choices[69][2] = "TNC";
 choices[69][3] = "SMA-series";
 answers[69] = 1;
 units[69] = ['104'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5409. ";
 preguntaids[69] = 5409


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[70]= "71)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[70]= new Array();
 choices[70][0] = "Ejecutivo";
 choices[70][1] = "Limitativo";
 choices[70][2] = "Estimativo";
 choices[70][3] = "Progresivo";
 answers[70] = 2;
 units[70] = ['11'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 264. Presupuestos generales";
 preguntaids[70] = 264


//  Id pregunta: 7581 Año de creación de pregunta: 2010
 questions[71]= "72)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3 de Quinlan)";
 choices[71]= new Array();
 choices[71][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a";
 choices[71][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n";
 choices[71][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado";
 choices[71][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas e inclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[71] = 1;
 units[71] = ['68'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 7581. Map 2006";
 preguntaids[71] = 7581


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre todas las AP de forma segura y con conformidad legal?";
 choices[72]= new Array();
 choices[72][0] = "SIR";
 choices[72][1] = "REC";
 choices[72][2] = "GEISER";
 choices[72][3] = "ORVE";
 answers[72] = 0;
 units[72] = ['47'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 627. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[72] = 627


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[73]= "74)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[73]= new Array();
 choices[73][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[73][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[73][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[73][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[73] = 2;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 322. Presupuestos generales";
 preguntaids[73] = 322


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[74]= new Array();
 choices[74][0] = "Consumidores";
 choices[74][1] = "PYMES y Start-ups";
 choices[74][2] = "La Industria";
 choices[74][3] = "Todos los anteriores";
 answers[74] = 3;
 units[74] = ['17'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 434. Mercado &Uacute;nico Digital";
 preguntaids[74] = 434


