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
//  Id pregunta: 3562 Año de creación de pregunta: 2004
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[0]= new Array();
 choices[0][0] = "C.";
 choices[0][1] = "Smalltalk.";
 choices[0][2] = "Eiffel.";
 choices[0][3] = "ACTOR.";
 answers[0] = 0;
 units[0] = ['85', '89'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3562. Similar a examen TIC SS A 2003";
 preguntaids[0] = 3562


//  Id pregunta: 6151 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[1]= new Array();
 choices[1][0] = "UPDATE TABLE";
 choices[1][1] = "ALTER TABLE";
 choices[1][2] = "REVOKE ALL";
 choices[1][3] = "ROLLBACK";
 answers[1] = 1;
 units[1] = ['61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 6151. Examen TIC A1 MAP 2007";
 preguntaids[1] = 6151


//  Id pregunta: 5567 Año de creación de pregunta: 2007
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes es una de las cinco categor&iacute;as identificadas como recursos TIC por COBIT?";
 choices[2]= new Array();
 choices[2][0] = "La calidad.";
 choices[2][1] = "La planificaci&oacute;n.";
 choices[2][2] = "La tecnolog&iacute;a.";
 choices[2][3] = "Los est&aacute;ndares.";
 answers[2] = 2;
 units[2] = ['101'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 5567. ";
 preguntaids[2] = 5567


//  Id pregunta: 5227 Año de creación de pregunta: 2006
 questions[3]= "4)  &iquest;Qu&eacute; recomendaci&oacute;n del mundo Internet define el formato de los mensajes de correo electr&oacute;nico?";
 choices[3]= new Array();
 choices[3][0] = "RFC 821";
 choices[3][1] = "RFC 820";
 choices[3][2] = "RFC 822";
 choices[3][3] = "RFC 823";
 answers[3] = 2;
 units[3] = ['116'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5227. ";
 preguntaids[3] = 5227


//  Id pregunta: 2486 Año de creación de pregunta: 2004
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes no es un entorno de escritorio de Linux?";
 choices[4]= new Array();
 choices[4][0] = "Xfce";
 choices[4][1] = "Gnome";
 choices[4][2] = "KDE";
 choices[4][3] = "Metacity";
 answers[4] = 3;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2486. Metacity es el gestor de ventanas por defecto del entorno de escritorio GNOME";
 preguntaids[4] = 2486


//  Id pregunta: 9353 Año de creación de pregunta: 2014
 questions[5]= "6)  Elija la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[5][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[5][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[5][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[5] = 0;
 units[5] = ['63'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9353. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[5] = 9353


//  Id pregunta: 1053 Año de creación de pregunta: 2016
 questions[6]= "7)  En el ejercicio del Derecho de oposici&oacute;n, el responsable del fichero resolver&aacute; sobre la solicitud de oposici&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "En el plazo m&aacute;ximo de quince d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 choices[6][1] = "En el plazo m&aacute;ximo de veinte d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 choices[6][2] = "En el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud.";
 choices[6][3] = "En el plazo m&aacute;ximo de diez d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 answers[6] = 3;
 units[6] = ['35'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 1053. ";
 preguntaids[6] = 1053


//  Id pregunta: 2212 Año de creación de pregunta: 2009
 questions[7]= "8)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[7]= new Array();
 choices[7][0] = "Tipicidad";
 choices[7][1] = "Veracidad";
 choices[7][2] = "Finalidad";
 choices[7][3] = "Pertinencia";
 answers[7] = 0;
 units[7] = ['35'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2212. ";
 preguntaids[7] = 2212


//  Id pregunta: 1030 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[8]= new Array();
 choices[8][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[8][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[8][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[8][3] = "Todas son correctas.";
 answers[8] = 3;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 1030. Ley 40/2015";
 preguntaids[8] = 1030


//  Id pregunta: 6981 Año de creación de pregunta: 2010
 questions[9]= "10)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[9]= new Array();
 choices[9][0] = "Gesti&oacute;n de la Infraestructura";
 choices[9][1] = "Gesti&oacute;n de Soporte";
 choices[9][2] = "Gesti&oacute;n de Entrega";
 choices[9][3] = "Gesti&oacute;n de Aplicaciones";
 answers[9] = 0;
 units[9] = ['101'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6981. TIC-B 2009 bloque desarrollo";
 preguntaids[9] = 6981


//  Id pregunta: 8957 Año de creación de pregunta: 2013
 questions[10]= "11)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[10]= new Array();
 choices[10][0] = "Se alojan en un contenedor web";
 choices[10][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[10][2] = "Se pueden invocar desde una URL";
 choices[10][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[10] = 3;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8957. ";
 preguntaids[10] = 8957


//  Id pregunta: 8901 Año de creación de pregunta: 2013
 questions[11]= "12)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[11]= new Array();
 choices[11][0] = "Primera Forma Normal.";
 choices[11][1] = "Segunda Forma Normal.";
 choices[11][2] = "Tercera Forma Normal.";
 choices[11][3] = "Forma Normal de Boyce-Codd.";
 answers[11] = 0;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8901. ";
 preguntaids[11] = 8901


//  Id pregunta: 9653 Año de creación de pregunta: 2014
 questions[12]= "13)  Los sistemas de videoconferencia";
 choices[12]= new Array();
 choices[12][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326.";
 choices[12][1] = "pueden utilizar redes IP con el protocolo H.323.";
 choices[12][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[12][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328.";
 answers[12] = 1;
 units[12] = ['122'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9653. Examen TIC A1 2013";
 preguntaids[12] = 9653


//  Id pregunta: 9713 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[13]= new Array();
 choices[13][0] = "Si";
 choices[13][1] = "No";
 choices[13][2] = "Depende de la configuraci&oacute;n del FW";
 choices[13][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[13] = 1;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9713. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";
 preguntaids[13] = 9713


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[14]= "15)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[14]= new Array();
 choices[14][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[14][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[14][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[14][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[14] = 2;
 units[14] = ['14'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 372. Pol&iacute;ticas de igualdad";
 preguntaids[14] = 372


//  Id pregunta: 4279 Año de creación de pregunta: 2006
 questions[15]= "16)  El &quot; Desarrollo de Sistemas de Informaci&oacute;n&quot; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen";
 choices[15]= new Array();
 choices[15][0] = "Tres procesos";
 choices[15][1] = "Cuatro procesos";
 choices[15][2] = "Cinco procesos";
 choices[15][3] = "Seis procesos";
 answers[15] = 2;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 4279. ";
 preguntaids[15] = 4279


//  Id pregunta: 10703 Año de creación de pregunta: 2015
 questions[16]= "17)  Indique la FALSA respecto al concepto MapReduce.";
 choices[16]= new Array();
 choices[16][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[16][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[16][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[16][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[16] = 2;
 units[16] = ['73'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10703. ";
 preguntaids[16] = 10703


//  Id pregunta: 10578 Año de creación de pregunta: 2015
 questions[17]= "18)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de la capacidad";
 choices[17][1] = "Gesti&oacute;n de suministradores";
 choices[17][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[17][3] = "Gesti&oacute;n de cambios";
 answers[17] = 0;
 units[17] = ['101'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10578. ";
 preguntaids[17] = 10578


//  Id pregunta: 1158 Año de creación de pregunta: 2016
 questions[18]= "19)  Uno de los indicadores que hace patente una escasa calidad de un dise&ntilde;o software es el siguiente:";
 choices[18]= new Array();
 choices[18][0] = "Un alto acoplamiento entre sus m&oacute;dulos.";
 choices[18][1] = "Una alta cohesi&oacute;n entre los elementos de un m&oacute;dulo.";
 choices[18][2] = "No disponer de c&oacute;digo duplicado.";
 choices[18][3] = "No seguir un dise&ntilde;o en cascada.";
 answers[18] = 0;
 units[18] = ['88'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 1158. ";
 preguntaids[18] = 1158


//  Id pregunta: 10078 Año de creación de pregunta: 2015
 questions[19]= "20)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[19]= new Array();
 choices[19][0] = "IEEE 802.3ab";
 choices[19][1] = "IEEE 802.3at";
 choices[19][2] = "IEEE 802.3ap";
 choices[19][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[19] = 1;
 units[19] = ['112'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10078. Examen TIC A2 2014";
 preguntaids[19] = 10078


//  Id pregunta: 1837 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; protocolo se puede utilizar para encapsular el tr&aacute;fico que atraviesa el t&uacute;nel de VPN?";
 choices[20]= new Array();
 choices[20][0] = "IPX";
 choices[20][1] = "MPLS";
 choices[20][2] = "PPTP";
 choices[20][3] = "ATM";
 answers[20] = 2;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1837. ";
 preguntaids[20] = 1837


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[21]= new Array();
 choices[21][0] = "En 2015";
 choices[21][1] = "En 2013";
 choices[21][2] = "En 2016";
 choices[21][3] = "En 2007";
 answers[21] = 1;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 445. Agenda Digital";
 preguntaids[21] = 445


//  Id pregunta: 1693 Año de creación de pregunta: 2016
 questions[22]= "23)  Indicar cu&aacute;l de las siguientes respuestas no se corresponde con un elemento del diagrama de flujo de datos (DFD), seg&uacute;n M&eacute;trica v 3:";
 choices[22]= new Array();
 choices[22][0] = "Almac&eacute;n de datos.";
 choices[22][1] = "Flujo de datos.";
 choices[22][2] = "Entidad externa.";
 choices[22][3] = "Entidad interna.";
 answers[22] = 3;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1693. ";
 preguntaids[22] = 1693


//  Id pregunta: 6068 Año de creación de pregunta: 2003
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n deDatos, de conformidad con el art&iacute;culo 38 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n deDatos de car&aacute;cter personal:";
 choices[23]= new Array();
 choices[23][0] = "Un magistrado del Tribunal Constitucional.";
 choices[23][1] = "Un senador.";
 choices[23][2] = "Un representante de los usuarios y consumidores.";
 choices[23][3] = "Un miembro de la Real Academia de la Historia.";
 answers[23] = 0;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 6068. TIC B 2007";
 preguntaids[23] = 6068


//  Id pregunta: 8062 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[24]= new Array();
 choices[24][0] = "Responsable del fichero";
 choices[24][1] = "Responsable de la informaci&oacute;n";
 choices[24][2] = "Responsable del servicio";
 choices[24][3] = "Responsable de seguridad";
 answers[24] = 0;
 units[24] = ['46'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8062. El responsable del fichero es un concepto relacionado con la LOPD.";
 preguntaids[24] = 8062


//  Id pregunta: 8818 Año de creación de pregunta: 2013
 questions[25]= "26)  E-Line:";
 choices[25]= new Array();
 choices[25][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[25][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[25][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[25][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[25] = 2;
 units[25] = ['112'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8818. ";
 preguntaids[25] = 8818


//  Id pregunta: 1673 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, la realizaci&oacute;n de una auditor&iacute;a interna o externa que verifique el cumplimiento del reglamento es una medida de seguridad de:";
 choices[26]= new Array();
 choices[26][0] = "Nivel bajo para ficheros y tratamientos automatizados y nivel medio para ficheros y tratamientos no automatizados.";
 choices[26][1] = "Nivel medio para ficheros y tratamientos automatizados y nivel medio para ficheros y tratamientos no automatizados.";
 choices[26][2] = "Nivel bajo para ficheros y tratamientos automatizados y no est&aacute; contemplado para ficheros y tratamientos no automatizados.";
 choices[26][3] = "Nivel medio para ficheros y tratamientos automatizados y no est&aacute; contemplada para ficheros y tratamientos no automatizados.";
 answers[26] = 1;
 units[26] = ['35'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 1673. ";
 preguntaids[26] = 1673


//  Id pregunta: 9551 Año de creación de pregunta: 2014
 questions[27]= "28)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[27]= new Array();
 choices[27][0] = "Tendr&aacute; vigencia indefinida";
 choices[27][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[27][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[27][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[27] = 3;
 units[27] = ['35'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 9551. Art&iacute;culo 31.2 y 31.3 de la Ley O 15/1999";
 preguntaids[27] = 9551


//  Id pregunta: 1536 Año de creación de pregunta: 2016
 questions[28]= "29)  En el Real Decreto 1720/2007, se establecen las medidas de seguridad que se deben aplicar a los ficheros y tratamientos automatizados. Indica que medida se corresponde con una medida de nivel b&aacute;sico seg&uacute;n se establece en el citado Real Decreto:";
 choices[28]= new Array();
 choices[28][0] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[28][1] = "Exclusivamente el personal autorizado en el documento de seguridad podr&aacute; tener acceso a los lugares donde se hallen instalados los equipos f&iacute;sicos que den soporte a los sistemas de informaci&oacute;n.";
 choices[28][2] = "El responsable del fichero o tratamiento adoptar&aacute; las medidas necesarias para que el personal conozca de una forma comprensible las normas de seguridad que afecten al desarrollo de sus funciones as&iacute; como las consecuencias en que pudiera incurrir en caso de incumplimiento.";
 choices[28][3] = "En el documento de seguridad deber&aacute;n designarse uno o varios responsables de seguridad encargados de coordinar y controlar las medidas definidas en el mismo.";
 answers[28] = 2;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 1536. ";
 preguntaids[28] = 1536


//  Id pregunta: 1579 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al modelo de desarrollo en espiral:";
 choices[29]= new Array();
 choices[29][0] = "Fue propuesto por Mills en 1980.";
 choices[29][1] = "Cada ciclo de desarrollo se divide en 4 fases: &quot;definici&oacute;n de objetivos&quot;, &quot;evaluaci&oacute;n y reducci&oacute;n de riesgos&quot;, &quot;desarrollo y validaci&oacute;n&quot; y &quot;planificaci&oacute;n&quot;.";
 choices[29][2] = "El radio de la espiral representa el incremento del riesgo a lo largo del proyecto.";
 choices[29][3] = "El ciclo de vida completo se inicia con la fase de &quot;planificaci&oacute;n&quot;.";
 answers[29] = 1;
 units[29] = ['82'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 1579. ";
 preguntaids[29] = 1579


//  Id pregunta: 8033 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[30]= new Array();
 choices[30][0] = "Pruebas de Caja Blanca.";
 choices[30][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[30][2] = "Pruebas de Implantaci&oacute;n.";
 choices[30][3] = "Pruebas de Regresi&oacute;n.";
 answers[30] = 1;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 8033. Examen TIC A2 2010";
 preguntaids[30] = 8033


//  Id pregunta: 6625 Año de creación de pregunta: 2009
 questions[31]= "32)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "Adoptarse &uacute;nicamente las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[31][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[31][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[31][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[31] = 1;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6625. ";
 preguntaids[31] = 6625


//  Id pregunta: 2705 Año de creación de pregunta: 2002
 questions[32]= "33)  Con respecto a la manera de representar el modelo digital del terreno o DTM, un SIG puede ser:";
 choices[32]= new Array();
 choices[32][0] = "R&aacute;ster.";
 choices[32][1] = "Vectorial.";
 choices[32][2] = "Ambos.";
 choices[32][3] = "Ninguna es cierta.";
 answers[32] = 2;
 units[32] = ['71'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2705. ";
 preguntaids[32] = 2705


//  Id pregunta: 9798 Año de creación de pregunta: 2015
 questions[33]= "34)  Son principios del programa europeo ISA:";
 choices[33]= new Array();
 choices[33][0] = "La privacidad, la apertura y la seguridad.";
 choices[33][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[33][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[33][3] = "Todas las anteriores.";
 answers[33] = 3;
 units[33] = ['43', '19'];
 blocks[33] = ['B1', 'A4'];
 comments[33] = "Id Pregunta: 9798. ";
 preguntaids[33] = 9798


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[34]= "35)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[34]= new Array();
 choices[34][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[34][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[34][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[34][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[34] = 1;
 units[34] = ['26'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 524. AGE A1 2015";
 preguntaids[34] = 524


//  Id pregunta: 1362 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[35]= new Array();
 choices[35][0] = "true&gt; 2013";
 choices[35][1] = "&gt; 2013";
 choices[35][2] = "cat /dev/null &gt; 2013";
 choices[35][3] = "| &gt; 2013";
 answers[35] = 3;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1362. ";
 preguntaids[35] = 1362


//  Id pregunta: 6240 Año de creación de pregunta: 2003
 questions[36]= "37)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[36]= new Array();
 choices[36][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[36][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[36][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Energia, Turismo y Agenda Digital.";
 choices[36][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[36] = 1;
 units[36] = ['48'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 6240. Examen TIC A Castilla La Mancha 2007";
 preguntaids[36] = 6240


//  Id pregunta: 5881 Año de creación de pregunta: 2007
 questions[37]= "38)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[37]= new Array();
 choices[37][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[37][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[37][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[37][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[37] = 0;
 units[37] = ['121'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5881. ";
 preguntaids[37] = 5881


//  Id pregunta: 3071 Año de creación de pregunta: 2002
 questions[38]= "39)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[38]= new Array();
 choices[38][0] = "M&oacute;dulo";
 choices[38][1] = "M&oacute;dulo reentrante";
 choices[38][2] = "Transacci&oacute;n";
 choices[38][3] = "Actualizaci&oacute;n";
 answers[38] = 2;
 units[38] = ['58', '59', '60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3071. ";
 preguntaids[38] = 3071


//  Id pregunta: 6633 Año de creación de pregunta: 2009
 questions[39]= "40)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[39]= new Array();
 choices[39][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[39][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[39][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[39][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[39] = 1;
 units[39] = ['63'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6633. MAP 2008 A1";
 preguntaids[39] = 6633


//  Id pregunta: 1428 Año de creación de pregunta: 2016
 questions[40]= "41)  El Gobierno cesa, seg&uacute;n el art&iacute;culo 101 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[40]= new Array();
 choices[40][0] = "Antes de la celebraci&oacute;n de elecciones generales.";
 choices[40][1] = "En los casos de p&eacute;rdida de la confianza del Congreso de los Diputados y del Gobierno de la naci&oacute;n.";
 choices[40][2] = "Por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[40][3] = "Cu&aacute;ndo se den las causas previstas en el art&iacute;culo 4 de la Constituci&oacute;n espa&ntilde;ola.";
 answers[40] = 2;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 1428. ";
 preguntaids[40] = 1428


//  Id pregunta: 6962 Año de creación de pregunta: 2010
 questions[41]= "42)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[41]= new Array();
 choices[41][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[41][1] = "Estudio de la situaci&oacute;n actual";
 choices[41][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[41][3] = "Definici&oacute;n del Sistema";
 answers[41] = 0;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6962. TIC-B 2009 bloque desarrollo";
 preguntaids[41] = 6962


//  Id pregunta: 7770 Año de creación de pregunta: 2010
 questions[42]= "43)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l se clasifica como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace:";
 choices[42]= new Array();
 choices[42][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol).";
 choices[42][1] = "IGRP (Interior Gateway Routing Protocol).";
 choices[42][2] = "OSPF (Open Shortest Path First).";
 choices[42][3] = "RIPv2 (Routing Information Protocol ver. 2";
 answers[42] = 0;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7770. ";
 preguntaids[42] = 7770


//  Id pregunta: 10127 Año de creación de pregunta: 2015
 questions[43]= "44)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[43]= new Array();
 choices[43][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[43][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[43][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[43][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[43] = 2;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 10127. Examen TIC A1 2014";
 preguntaids[43] = 10127


//  Id pregunta: 6740 Año de creación de pregunta: 2009
 questions[44]= "45)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[44]= new Array();
 choices[44][0] = "Un determinado virus inform&aacute;tico";
 choices[44][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[44][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[44][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[44] = 2;
 units[44] = ['119'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6740. MAP 2008 A1";
 preguntaids[44] = 6740


//  Id pregunta: 3711 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;En cu&aacute;l de los siguientes grupos de m&eacute;tricas del software se debe encuadrar el modelo de An&aacute;lisis de Puntos de Funci&oacute;n?:";
 choices[45]= new Array();
 choices[45][0] = "M&eacute;tricas de complejidad";
 choices[45][1] = "M&eacute;tricas de productividad";
 choices[45][2] = "M&eacute;tricas de calidad";
 choices[45][3] = "M&eacute;tricas de riesgo";
 answers[45] = 1;
 units[45] = ['94'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3711. ";
 preguntaids[45] = 3711


//  Id pregunta: 8348 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Con qu&eacute; campo de la inform&aacute;tica se relaciona SHA-2?";
 choices[46]= new Array();
 choices[46][0] = "Data Mining";
 choices[46][1] = "La Criptograf&iacute;a";
 choices[46][2] = "El e-learning";
 choices[46][3] = "La gesti&oacute;n de versiones";
 answers[46] = 1;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8348. Examen UC3M 2010";
 preguntaids[46] = 8348


//  Id pregunta: 7228 Año de creación de pregunta: 2010
 questions[47]= "48)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[47]= new Array();
 choices[47][0] = "JDI";
 choices[47][1] = "JCI";
 choices[47][2] = "JTEE";
 choices[47][3] = "JNI";
 answers[47] = 3;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 7228. ";
 preguntaids[47] = 7228


//  Id pregunta: 6641 Año de creación de pregunta: 2009
 questions[48]= "49)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[48]= new Array();
 choices[48][0] = "CMDA o TDMA";
 choices[48][1] = "FDD o TDD";
 choices[48][2] = "FDMA u OFDMA";
 choices[48][3] = "TCDMA";
 answers[48] = 1;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 6641. ";
 preguntaids[48] = 6641


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[49]= new Array();
 choices[49][0] = "Al Gobierno de la naci&oacute;n";
 choices[49][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[49][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[49][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[49] = 3;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 241. Ley 39/2015";
 preguntaids[49] = 241


//  Id pregunta: 9119 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[50]= new Array();
 choices[50][0] = "Model View Controller.";
 choices[50][1] = "Multiple Views Canvas.";
 choices[50][2] = "Mobile Video Compatible.";
 choices[50][3] = "Mobile View Connector.";
 answers[50] = 0;
 units[50] = ['113'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9119. Examen TIC A2 2013";
 preguntaids[50] = 9119


//  Id pregunta: 9419 Año de creación de pregunta: 2014
 questions[51]= "52)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[51]= new Array();
 choices[51][0] = "salida-mecanismo";
 choices[51][1] = "salida-realimentaci&oacute;n";
 choices[51][2] = "control-realimentaci&oacute;n";
 choices[51][3] = "entrada-realimentaci&oacute;n";
 answers[51] = 1;
 units[51] = ['86'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 9419. Existen cinco tipos de interconexiones entre actividades, que son las siguientes: (1)  Control; (2)  Entrada; (3)   Control &ndash; Realimentaci&oacute;n; (4)  Entrada &ndash; Realimentaci&oacute;n; (5)  Salida &ndash; Mecanismo.";
 preguntaids[51] = 9419


//  Id pregunta: 6835 Año de creación de pregunta: 2010
 questions[52]= "53)  HTML est&aacute; estandarizado por:";
 choices[52]= new Array();
 choices[52][0] = "World Wide Web Consortium - W3C.";
 choices[52][1] = "Internet Engineering Task Force - IETF.";
 choices[52][2] = "Institute os Management Accountants - IMA.";
 choices[52][3] = "International Accounting Standard Board - IASB.";
 answers[52] = 0;
 units[52] = ['74'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6835. TIC A 2009";
 preguntaids[52] = 6835


//  Id pregunta: 1541 Año de creación de pregunta: 2016
 questions[53]= "54)  La direcci&oacute;n IP 0.0.0.0:";
 choices[53]= new Array();
 choices[53][0] = "Se usa para difusi&oacute;n en una subred local.";
 choices[53][1] = "Se usa para difundir un mensaje a todos los nodos de una red distante.";
 choices[53][2] = "La usa inicialmente un host cuando arranca.";
 choices[53][3] = "Se usa para pruebas de realimentaci&oacute;n.";
 answers[53] = 2;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1541. ";
 preguntaids[53] = 1541


//  Id pregunta: 9117 Año de creación de pregunta: 2014
 questions[54]= "55)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[54]= new Array();
 choices[54][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[54][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[54][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[54][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[54] = 3;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9117. Examen TIC A2 2013";
 preguntaids[54] = 9117


//  Id pregunta: 9906 Año de creación de pregunta: 2015
 questions[55]= "56)  La Ley 39/2015:";
 choices[55]= new Array();
 choices[55][0] = "Estipula la creaci&oacute;n del Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad.";
 choices[55][1] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.";
 choices[55][2] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad.";
 choices[55][3] = "No menciona ni el Esquema Nacional de Seguridad ni el Esquema Nacional de Interoperabilidad.";
 answers[55] = 1;
 units[55] = ['7', '19'];
 blocks[55] = ['A2', 'A4'];
 comments[55] = "Id Pregunta: 9906. ";
 preguntaids[55] = 9906


//  Id pregunta: 6542 Año de creación de pregunta: 2003
 questions[56]= "57)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[56]= new Array();
 choices[56][0] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[56][1] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[56][2] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[56][3] = "La b) y la c) son correctas";
 answers[56] = 3;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 6542. ";
 preguntaids[56] = 6542


//  Id pregunta: 4570 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[57]= new Array();
 choices[57][0] = "Convertir direcciones hardware en direcciones IP";
 choices[57][1] = "Convertir direcciones IP en direcciones hardware";
 choices[57][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[57][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[57] = 3;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4570. ";
 preguntaids[57] = 4570


//  Id pregunta: 3590 Año de creación de pregunta: 2002
 questions[58]= "59)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[58]= new Array();
 choices[58][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[58][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[58][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[58][3] = "Todas son falsas";
 answers[58] = 3;
 units[58] = ['84', '86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3590. ";
 preguntaids[58] = 3590


//  Id pregunta: 3238 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;Qu&eacute; es JDBC?:";
 choices[59]= new Array();
 choices[59][0] = "Un modelo de objetos ActiveX.";
 choices[59][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[59][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[59][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[59] = 3;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3238. Junta Andaluc&iacute;a";
 preguntaids[59] = 3238


//  Id pregunta: 6324 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;C&oacute;mo se puede determinar en el Plan General de Garant&iacute;a de Calidad (PGGC) el nivel de intensidad que sirve para graduar las funciones de garant&iacute;a de calidad aplicables a un proyecto?";
 choices[60]= new Array();
 choices[60][0] = "No es posible en el PGGC";
 choices[60][1] = "A trav&eacute;s de la determinaci&oacute;n del perfil de riesgos del proyecto.";
 choices[60][2] = "A trav&eacute;s del foco de intensidad y de sus cinco niveles.";
 choices[60][3] = "A trav&eacute;s del foco de inter&eacute;s en garant&iacute;a de calidad y para cada fase y productos asociados con el modelos de desarrollo elegido para el proyecto.";
 answers[60] = 3;
 units[60] = ['93'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 6324. ";
 preguntaids[60] = 6324


//  Id pregunta: 1010 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[61]= new Array();
 choices[61][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[61][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[61][2] = "el Ministerio del Interior";
 choices[61][3] = "la Administraci&oacute;n General del Estado";
 answers[61] = 0;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 1010. Ley 40/2015";
 preguntaids[61] = 1010


//  Id pregunta: 2277 Año de creación de pregunta: 2002
 questions[62]= "63)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[62]= new Array();
 choices[62][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[62][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[62][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[62][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[62] = 3;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2277. ";
 preguntaids[62] = 2277


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[63]= new Array();
 choices[63][0] = "Orientaci&oacute;n a objetos";
 choices[63][1] = "MapReduce";
 choices[63][2] = "Pipeline filtering";
 choices[63][3] = "Programaci&oacute;n funcional";
 answers[63] = 1;
 units[63] = ['73'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 757. Big Data y NoSQL";
 preguntaids[63] = 757


//  Id pregunta: 4975 Año de creación de pregunta: 2002
 questions[64]= "65)  Los agentes SNMP son:";
 choices[64]= new Array();
 choices[64][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n";
 choices[64][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[64][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[64][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[64] = 0;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4975. ";
 preguntaids[64] = 4975


//  Id pregunta: 7880 Año de creación de pregunta: 2011
 questions[65]= "66)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[65]= new Array();
 choices[65][0] = "El Plan AVANZA.";
 choices[65][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[65][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[65][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[65] = 1;
 units[65] = ['47'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 7880. Examen TIC A1 2010";
 preguntaids[65] = 7880


//  Id pregunta: 8427 Año de creación de pregunta: 2011
 questions[66]= "67)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[66]= new Array();
 choices[66][0] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[66][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[66][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[66][3] = "Todos los anteriores lo son";
 answers[66] = 3;
 units[66] = ['2'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 8427. ";
 preguntaids[66] = 8427


//  Id pregunta: 8544 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Cual de las siguientes no se corresponde con una gu&iacute;a de accesibilidad WAI?";
 choices[67]= new Array();
 choices[67][0] = "ATAG";
 choices[67][1] = "UAAG";
 choices[67][2] = "WAI-ARIA";
 choices[67][3] = "FAAG";
 answers[67] = 3;
 units[67] = ['42'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 8544. ";
 preguntaids[67] = 8544


//  Id pregunta: 1607 Año de creación de pregunta: 2016
 questions[68]= "69)  En M&eacute;trica 3, entre las actividades y tareas de Aseguramiento de la Calidad contempladas en el proceso ASI (An&aacute;lisis del Sistema de Informaci&oacute;n), se encuentra:";
 choices[68]= new Array();
 choices[68][0] = "Establecimiento del Plan de Aseguramiento de la calidad.";
 choices[68][1] = "Revisi&oacute;n del cat&aacute;logo de requisitos y la consistencia entre productos.";
 choices[68][2] = "Registro de la aceptaci&oacute;n de la arquitectura del sistema.";
 choices[68][3] = "Revisi&oacute;n del c&oacute;digo de componentes y procedimientos.";
 answers[68] = 1;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 1607. ";
 preguntaids[68] = 1607


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[69]= new Array();
 choices[69][0] = "Las sociedades mercantiles estatales.";
 choices[69][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[69][2] = "Las respuestas a) y b) son correctas.";
 choices[69][3] = "Las respuestas a) y b) no son correctas.";
 answers[69] = 2;
 units[69] = ['11'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 319. Presupuestos generales";
 preguntaids[69] = 319


//  Id pregunta: 9826 Año de creación de pregunta: 2015
 questions[70]= "71)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[70]= new Array();
 choices[70][0] = "Diffie Hellman";
 choices[70][1] = "RIPEMD";
 choices[70][2] = "Rabbit";
 choices[70][3] = "Blowfish";
 answers[70] = 0;
 units[70] = ['76'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9826. ";
 preguntaids[70] = 9826


//  Id pregunta: 10772 Año de creación de pregunta: 2015
 questions[71]= "72)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[71]= new Array();
 choices[71][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[71][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[71][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[71][3] = "Todas las anteriores son falsas";
 answers[71] = 0;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 10772. ";
 preguntaids[71] = 10772


//  Id pregunta: 1041 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n (articulo 157 de la ley 40/2015):";
 choices[72]= new Array();
 choices[72][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[72][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[72][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[72][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[72] = 1;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 1041. Ley 40/2015";
 preguntaids[72] = 1041


//  Id pregunta: 2895 Año de creación de pregunta: 2002
 questions[73]= "74)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[73]= new Array();
 choices[73][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[73][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[73][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[73][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[73] = 2;
 units[73] = ['68'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2895. ";
 preguntaids[73] = 2895


//  Id pregunta: 6966 Año de creación de pregunta: 2010
 questions[74]= "75)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[74]= new Array();
 choices[74][0] = "Se definen tres niveles: interno, medio y externo";
 choices[74][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[74][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[74][3] = "Existen dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[74] = 1;
 units[74] = ['60'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6966. TIC-B 2009 bloque desarrollo";
 preguntaids[74] = 6966


