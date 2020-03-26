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
//  Id pregunta: 8447 Año de creación de pregunta: 2011
 questions[0]= "1)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "SHOE";
 choices[0][1] = "DAML + OIL";
 choices[0][2] = "WDML";
 choices[0][3] = "RDF";
 answers[0] = 2;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8447. ";
 preguntaids[0] = 8447


//  Id pregunta: 970 Año de creación de pregunta: 2016
 questions[1]= "2)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[1]= new Array();
 choices[1][0] = "personalidad jur&iacute;dica propia";
 choices[1][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[1][2] = "personalidad jur&iacute;dica plena";
 choices[1][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[1] = 1;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 970. Ley 40/2015";
 preguntaids[1] = 970


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[2]= "3)  No es objetivo de la Ley 39/2015:";
 choices[2]= new Array();
 choices[2][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[2][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[2][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[2][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[2] = 2;
 units[2] = ['7', '47'];
 blocks[2] = ['A2', 'B1'];
 comments[2] = "Id Pregunta: 9790. ";
 preguntaids[2] = 9790


//  Id pregunta: 8786 Año de creación de pregunta: 2013
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[3]= new Array();
 choices[3][0] = "Dise&ntilde;o Arquitectura";
 choices[3][1] = "Dise&ntilde;o Preliminar";
 choices[3][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[3][3] = "Post-Arquitectura";
 answers[3] = 0;
 units[3] = ['94'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 8786. ";
 preguntaids[3] = 8786


//  Id pregunta: 7007 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[4]= new Array();
 choices[4][0] = "Facade, Composite, Bridge";
 choices[4][1] = "Strategy, Proxy, Iterator";
 choices[4][2] = "Builder, Abstract Factory, Prototype";
 choices[4][3] = "MVC, Session, Router";
 answers[4] = 2;
 units[4] = ['89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 7007. TIC-B 2009 bloque desarrollo";
 preguntaids[4] = 7007


//  Id pregunta: 2600 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[5]= new Array();
 choices[5][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[5][1] = "Es un sistema operativo compatible con Unix";
 choices[5][2] = "Es software libre";
 choices[5][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[5] = 0;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2600. ";
 preguntaids[5] = 2600


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[6]= "7)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[6]= new Array();
 choices[6][0] = "Cinco a&ntilde;os.";
 choices[6][1] = "Seis a&ntilde;os.";
 choices[6][2] = "Cuatro a&ntilde;os.";
 choices[6][3] = "Tres a&ntilde;os.";
 answers[6] = 0;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 125. Uni&oacute;n Europea";
 preguntaids[6] = 125


//  Id pregunta: 1473 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[7]= new Array();
 choices[7][0] = "AJAX";
 choices[7][1] = "ASD";
 choices[7][2] = "SOFTAG";
 choices[7][3] = "FDR";
 answers[7] = 1;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 1473. ";
 preguntaids[7] = 1473


//  Id pregunta: 6478 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Qu&eacute; estructura tiene el nuevo RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[8]= new Array();
 choices[8][0] = "Un t&iacute;tulo preliminar y cuatro cap&iacute;tulos";
 choices[8][1] = "Cinco libros y Siete cap&iacute;tulos";
 choices[8][2] = "Un t&iacute;tulo preliminar y cinco libros";
 choices[8][3] = "Un art&iacute;culo &uacute;nico y un anexo";
 answers[8] = 2;
 units[8] = ['37'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 6478. ";
 preguntaids[8] = 6478


//  Id pregunta: 10648 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley 9/2014 General de Telecomunicaciones es correcta?:";
 choices[9]= new Array();
 choices[9][0] = "Mediante real decreto el Gobierno otorgar&aacute; los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[9][1] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; fijar, mediante orden ministerial, las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros.";
 choices[9][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia, previo informe del Ministerio de Energia, Turismo y Agenda Digital, podr&aacute; modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[9][3] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n tomar&aacute;n en consideraci&oacute;n los n&uacute;meros, direcciones y nombres necesarios para permitir la efectiva prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 answers[9] = 3;
 units[9] = ['121'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10648. ";
 preguntaids[9] = 10648


//  Id pregunta: 7521 Año de creación de pregunta: 2010
 questions[10]= "11)  &iquest;A qu&eacute; nivel pertenecen las medidas de seguridad que, de acuerdo con el RD 1720/2007, deben ser adoptadas en los ficheros correspondientes a los servicios financieros, gestionados por Entidades Financieras?";
 choices[10]= new Array();
 choices[10][0] = "Nivel b&aacute;sico.";
 choices[10][1] = "Nivel alto.";
 choices[10][2] = "Nivel medio.";
 choices[10][3] = "Nivel superior.";
 answers[10] = 2;
 units[10] = ['35'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 7521. Similar a Map 2005";
 preguntaids[10] = 7521


//  Id pregunta: 3609 Año de creación de pregunta: 2002
 questions[11]= "12)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[11][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[11][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[11][3] = "No se incluyen los gastos de comunicaciones";
 answers[11] = 1;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3609. ";
 preguntaids[11] = 3609


//  Id pregunta: 10157 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "Contenidos y econom&iacute;a digital.";
 choices[12][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[12][2] = "Confianza en el &aacute;mbito digital.";
 choices[12][3] = "Servicios p&uacute;blicos en la nube.";
 answers[12] = 3;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 10157. Examen TIC A1 2014";
 preguntaids[12] = 10157


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[13]= new Array();
 choices[13][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[13][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[13][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[13][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[13] = 0;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 464. Estrategia TIC";
 preguntaids[13] = 464


//  Id pregunta: 8930 Año de creación de pregunta: 2013
 questions[14]= "15)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[14]= new Array();
 choices[14][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[14][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[14][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[14][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[14] = 3;
 units[14] = ['84'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8930. ";
 preguntaids[14] = 8930


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[15]= "16)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[15]= new Array();
 choices[15][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[15][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[15][2] = "Quejas y reclamaciones.";
 choices[15][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[15] = 1;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[15] = 6829


//  Id pregunta: 5395 Año de creación de pregunta: 2006
 questions[16]= "17)  En el formato gr&aacute;fico JPEG &iquest;Cu&aacute;l de estas opciones no es verdadera?";
 choices[16]= new Array();
 choices[16][0] = "Permite seleccionar la mayor o menor p&eacute;rdida de calidad en la compresi&oacute;n";
 choices[16][1] = "Usa el mismo algoritmo de compresi&oacute;n que el ZIP";
 choices[16][2] = "Su nombre oficial es ISO/IEC IS 10918";
 choices[16][3] = "La &uacute;ltima versi&oacute;n es JPEG 2000";
 answers[16] = 1;
 units[16] = ['62'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 5395. ";
 preguntaids[16] = 5395


//  Id pregunta: 5859 Año de creación de pregunta: 2007
 questions[17]= "18)  En relaci&oacute;n a los modelos vectorial frente a r&aacute;ster en un SIG, se&ntilde;ale la opci&oacute;n verdadera.";
 choices[17]= new Array();
 choices[17][0] = "Las operaciones de c&aacute;lculo se simplifican al utilizar modelos vectoriales.";
 choices[17][1] = "No se deben mezclar datos raster con datos vectoriales entre capas o las prestaciones globales del SIG se ver&aacute;n comprometidas.";
 choices[17][2] = "La precisi&oacute;n gr&aacute;fica del modelo raster supera al modelo vectorial, al no tener que reescalar nada.";
 choices[17][3] = "La cartograf&iacute;a digital tradicional es fundamentalmente de tipo vectorial.";
 answers[17] = 3;
 units[17] = ['71'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5859. ";
 preguntaids[17] = 5859


//  Id pregunta: 4073 Año de creación de pregunta: 2003
 questions[18]= "19)  &iquest;Cu&aacute;ntas variables explicativas adicionales (o drivers) existen en cocomo II?";
 choices[18]= new Array();
 choices[18][0] = "15";
 choices[18][1] = "17";
 choices[18][2] = "22";
 choices[18][3] = "10";
 answers[18] = 1;
 units[18] = ['94'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 4073. ";
 preguntaids[18] = 4073


//  Id pregunta: 9802 Año de creación de pregunta: 2015
 questions[19]= "20)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[19]= new Array();
 choices[19][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[19][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[19][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[19][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[19] = 2;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 9802. ";
 preguntaids[19] = 9802


//  Id pregunta: 1321 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cual de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[20]= new Array();
 choices[20][0] = "T&eacute;cnicas Matriciales.";
 choices[20][1] = "M&eacute;todo Albrecht.";
 choices[20][2] = "An&aacute;lisis de Impacto.";
 choices[20][3] = "Caminos de Acceso.";
 answers[20] = 0;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 1321. ";
 preguntaids[20] = 1321


//  Id pregunta: 3857 Año de creación de pregunta: 2002
 questions[21]= "22)  EXCELERATOR, SADT, TAGS..., son herramientas para:";
 choices[21]= new Array();
 choices[21][0] = "Confecci&oacute;n de prototipos";
 choices[21][1] = "An&aacute;lisis de requerimientos";
 choices[21][2] = "Auditor&iacute;a de Sistemas de Informaci&oacute;n";
 choices[21][3] = "Ninguna de las anteriores es cierta";
 answers[21] = 1;
 units[21] = ['84'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3857. ";
 preguntaids[21] = 3857


//  Id pregunta: 6421 Año de creación de pregunta: 2003
 questions[22]= "23)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[22]= new Array();
 choices[22][0] = "LocalDomain";
 choices[22][1] = "EuroDomain";
 choices[22][2] = "EuroNet";
 choices[22][3] = "EuroGate";
 answers[22] = 2;
 units[22] = ['114'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 6421. ";
 preguntaids[22] = 6421


//  Id pregunta: 8312 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[23]= new Array();
 choices[23][0] = "Para construir aplicaciones y servicios Web";
 choices[23][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[23][2] = "Para construir la interface del usuario";
 choices[23][3] = "Para conectar los programas";
 answers[23] = 0;
 units[23] = ['63'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8312. Examen UPM A2 2011";
 preguntaids[23] = 8312


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[24]= "25)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[24]= new Array();
 choices[24][0] = "El Segundo.";
 choices[24][1] = "El Primero.";
 choices[24][2] = "El Preliminar.";
 choices[24][3] = "El Tercero.";
 answers[24] = 2;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 93. Constituci&oacute;n de 1978";
 preguntaids[24] = 93


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[25]= new Array();
 choices[25][0] = "En 2011";
 choices[25][1] = "En 2013";
 choices[25][2] = "En 2015";
 choices[25][3] = "En 2016";
 answers[25] = 2;
 units[25] = ['17'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 438. Mercado &Uacute;nico Digital";
 preguntaids[25] = 438


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[26]= new Array();
 choices[26][0] = "las Cortes generales.";
 choices[26][1] = "los partidos pol&iacute;ticos.";
 choices[26][2] = "los sindicatos.";
 choices[26][3] = "las Comunidades Aut&oacute;nomas.";
 answers[26] = 1;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 52. Constituci&oacute;n de 1978";
 preguntaids[26] = 52


//  Id pregunta: 9865 Año de creación de pregunta: 2015
 questions[27]= "28)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[27]= new Array();
 choices[27][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[27][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[27][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[27][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[27] = 0;
 units[27] = ['121'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9865. ";
 preguntaids[27] = 9865


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[28]= new Array();
 choices[28][0] = "En 1988.";
 choices[28][1] = "En 1981.";
 choices[28][2] = "En 1982.";
 choices[28][3] = "En 1986.";
 answers[28] = 3;
 units[28] = ['5'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 193. Uni&oacute;n Europea";
 preguntaids[28] = 193


//  Id pregunta: 10467 Año de creación de pregunta: 2015
 questions[29]= "30)  Indique la respuesta INCORRECTA sobre VxLAN:";
 choices[29]= new Array();
 choices[29][0] = "Son las siglas en ingl&eacute;s de Virtual eXtended Local Area Network.";
 choices[29][1] = "Es un protocolo de encapsulamiento para crear redes de nivel 2 sobre el nivel 3.";
 choices[29][2] = "Al disponer de un identificador de segmento de red de 24 bits, permite una mayor escalabilidad que el est&aacute;ndar 802.1q.";
 choices[29][3] = "Permite direccionar hasta 16 millones de segmentos.";
 answers[29] = 0;
 units[29] = ['52'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10467. ";
 preguntaids[29] = 10467


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[30]= "31)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[30]= new Array();
 choices[30][0] = "Tres a&ntilde;os.";
 choices[30][1] = "Dos a&ntilde;os y medio.";
 choices[30][2] = "Cinco a&ntilde;os.";
 choices[30][3] = "Seis a&ntilde;os.";
 answers[30] = 3;
 units[30] = ['5'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 113. Uni&oacute;n Europea";
 preguntaids[30] = 113


//  Id pregunta: 6599 Año de creación de pregunta: 2009
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[31]= new Array();
 choices[31][0] = "FIFO";
 choices[31][1] = "Aleatoria";
 choices[31][2] = "SJF";
 choices[31][3] = "NRU";
 answers[31] = 2;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6599. ";
 preguntaids[31] = 6599


//  Id pregunta: 3859 Año de creación de pregunta: 2002
 questions[32]= "33)  Hist&oacute;ricamente, el primer modelo de desarrollo de software fue:";
 choices[32]= new Array();
 choices[32][0] = "Cascada";
 choices[32][1] = "Code and Fix";
 choices[32][2] = "En espiral";
 choices[32][3] = "Desarrollo de prototipos";
 answers[32] = 1;
 units[32] = ['82'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3859. ";
 preguntaids[32] = 3859


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[33]= "34)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[33]= new Array();
 choices[33][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[33][1] = "Protecci&oacute;n de su salud.";
 choices[33][2] = "Ninguna es correcta.";
 choices[33][3] = "A y B son correctas.";
 answers[33] = 1;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 410. Pol&iacute;ticas de igualdad";
 preguntaids[33] = 410


//  Id pregunta: 5793 Año de creación de pregunta: 2007
 questions[34]= "35)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[34]= new Array();
 choices[34][0] = "SMTP";
 choices[34][1] = "SNMP";
 choices[34][2] = "ARP";
 choices[34][3] = "HTTP";
 answers[34] = 1;
 units[34] = ['109'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 5793. ";
 preguntaids[34] = 5793


//  Id pregunta: 8794 Año de creación de pregunta: 2013
 questions[35]= "36)  La red S-TESTA:";
 choices[35]= new Array();
 choices[35][0] = "Es accesible directamente desde cada Ministerio.";
 choices[35][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[35][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[35][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[35] = 2;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8794. ";
 preguntaids[35] = 8794


//  Id pregunta: 5196 Año de creación de pregunta: 2006
 questions[36]= "37)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[36]= new Array();
 choices[36][0] = "Utiliza un conector BNC.";
 choices[36][1] = "Su impedancia es de 50 Ohm";
 choices[36][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[36][3] = "Todas son falsas";
 answers[36] = 0;
 units[36] = ['104'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5196. ";
 preguntaids[36] = 5196


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[37]= "38)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[37]= new Array();
 choices[37][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[37][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[37][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[37][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[37] = 3;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 227. Ley 39/2015";
 preguntaids[37] = 227


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[38]= "39)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[38]= new Array();
 choices[38][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[38][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[38][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[38][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[38] = 1;
 units[38] = ['7'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 9456. ";
 preguntaids[38] = 9456


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[39]= "40)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "Almacenamiento orientado a columnas";
 choices[39][1] = "Framework MapReduce";
 choices[39][2] = "OLTP";
 choices[39][3] = "Bases de datos clave-valor";
 answers[39] = 2;
 units[39] = ['73'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 735. AGE A1 2015";
 preguntaids[39] = 735


//  Id pregunta: 6994 Año de creación de pregunta: 2010
 questions[40]= "41)  El modelo CMMI est&aacute; enfocado en tres &aacute;reas: &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[40]= new Array();
 choices[40][0] = "Desarrollo de servicios y productos - CMMI para el desarrollo (CMMI - DEV)";
 choices[40][1] = "Adquisici&oacute;n de productos y servicios - CMMI para la adquisici&oacute;n (CMMI - ACQ)";
 choices[40][2] = "Establecimiento de Servicios, Gesti&oacute;n y entrega - CMMI para los servicios (CMMI - SVC)";
 choices[40][3] = "Establecimiento de la calidad de servicios y productos - CMMI para la calidad (CMMI - QUA)";
 answers[40] = 3;
 units[40] = ['98'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6994. TIC-B 2009 bloque desarrollo";
 preguntaids[40] = 6994


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[41]= new Array();
 choices[41][0] = "Dos Cap&iacute;tulos.";
 choices[41][1] = "Tres Cap&iacute;tulos.";
 choices[41][2] = "Un Cap&iacute;tulo.";
 choices[41][3] = "Cuatro Cap&iacute;tulos.";
 answers[41] = 1;
 units[41] = ['1'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 49. Constituci&oacute;n de 1978";
 preguntaids[41] = 49


//  Id pregunta: 8426 Año de creación de pregunta: 2011
 questions[42]= "43)  Seg&uacute;n la ley 18/2011, las Administraciones competentes en materia de justicia asegurar&aacute;n el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de un sistema de varios canales que cuente, al menos, con ciertos medios. Se&ntilde;ale cual no es uno de ellos.";
 choices[42]= new Array();
 choices[42][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[42][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[42][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[42][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[42] = 1;
 units[42] = ['2'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 8426. ";
 preguntaids[42] = 8426


//  Id pregunta: 2665 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[43]= new Array();
 choices[43][0] = "Si";
 choices[43][1] = "No, pero reglas y restricciones si";
 choices[43][2] = "No, pero reglas y marcos si";
 choices[43][3] = "No";
 answers[43] = 0;
 units[43] = ['68'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2665. ";
 preguntaids[43] = 2665


//  Id pregunta: 6630 Año de creación de pregunta: 2009
 questions[44]= "45)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[44]= new Array();
 choices[44][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[44][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[44][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[44][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[44] = 0;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 6630. MAP 2008 A2";
 preguntaids[44] = 6630


//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[45]= "46)  Acerca de las Autoridades de sellado de tiempo:";
 choices[45]= new Array();
 choices[45][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[45][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[45][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[45][3] = "Ninguna de las anteriores es correcta.";
 answers[45] = 1;
 units[45] = ['78'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[45] = 6868


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[46]= "47)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[46]= new Array();
 choices[46][0] = "Consejos y Servicios.";
 choices[46][1] = "Servicios permanentes y no permanentes.";
 choices[46][2] = "Direcciones Generales.";
 choices[46][3] = "Direcciones ministeriales.";
 answers[46] = 2;
 units[46] = ['5'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 138. Uni&oacute;n Europea";
 preguntaids[46] = 138


//  Id pregunta: 6064 Año de creación de pregunta: 2003
 questions[47]= "48)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[47]= new Array();
 choices[47][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[47][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[47][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[47][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[47] = 0;
 units[47] = ['117'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6064. TIC B 2007";
 preguntaids[47] = 6064


//  Id pregunta: 8523 Año de creación de pregunta: 2011
 questions[48]= "49)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[48]= new Array();
 choices[48][0] = "Impugnaci&oacute;n de valoraciones";
 choices[48][1] = "Derecho de acceso";
 choices[48][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[48][3] = "Derecho de rectificaci&oacute;n";
 answers[48] = 2;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 8523. ";
 preguntaids[48] = 8523


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[49]= "50)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[49]= new Array();
 choices[49][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[49][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[49][2] = "el sector p&uacute;blico institucional";
 choices[49][3] = "el sector privado corporativo";
 answers[49] = 3;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 214. Ley 39/2015";
 preguntaids[49] = 214


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[50]= new Array();
 choices[50][0] = "La Ley General Tributaria.";
 choices[50][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[50][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[50][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[50] = 2;
 units[50] = ['11'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 313. Presupuestos generales";
 preguntaids[50] = 313


//  Id pregunta: 5635 Año de creación de pregunta: 2007
 questions[51]= "52)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[51]= new Array();
 choices[51][0] = "Metodolog&iacute;a.";
 choices[51][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[51][2] = "Ingenier&iacute;a Inversa.";
 choices[51][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[51] = 1;
 units[51] = ['82'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 5635. ";
 preguntaids[51] = 5635


//  Id pregunta: 5075 Año de creación de pregunta: 2002
 questions[52]= "53)  SOAP:";
 choices[52]= new Array();
 choices[52][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[52][1] = "Fue propuesta originalmente por Microsoft";
 choices[52][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[52][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[52] = 3;
 units[52] = ['113'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5075. ";
 preguntaids[52] = 5075


//  Id pregunta: 7661 Año de creación de pregunta: 2010
 questions[53]= "54)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo que especifica la forma de encapsular los datos que se van a intercambiar?";
 choices[53]= new Array();
 choices[53][0] = "SSL Handshake.";
 choices[53][1] = "SSL Record.";
 choices[53][2] = "Cipher Secure Layer.";
 choices[53][3] = "Secure Stocker Layer.";
 answers[53] = 1;
 units[53] = ['120'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7661. Map 2006";
 preguntaids[53] = 7661


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n:";
 choices[54]= new Array();
 choices[54][0] = "verbalmente";
 choices[54][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[54][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[54][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[54] = 2;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 250. Ley 39/2015";
 preguntaids[54] = 250


//  Id pregunta: 2389 Año de creación de pregunta: 2006
 questions[55]= "56)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[55]= new Array();
 choices[55][0] = "En entorno de microinform&aacute;tica";
 choices[55][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[55][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[55][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[55] = 2;
 units[55] = ['30'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2389. ";
 preguntaids[55] = 2389


//  Id pregunta: 10786 Año de creación de pregunta: 2015
 questions[56]= "57)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[56]= new Array();
 choices[56][0] = "Ley 39/2015";
 choices[56][1] = "Ley 40/2015";
 choices[56][2] = "Ley 29/2015";
 choices[56][3] = "Ley 30/2015";
 answers[56] = 0;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 10786. ";
 preguntaids[56] = 10786


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;les de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?";
 choices[57]= new Array();
 choices[57][0] = "De m&eacute;todos y de funciones.";
 choices[57][1] = "De bloque y de flujo.";
 choices[57][2] = "De ocultamiento y de resumen.";
 choices[57][3] = "De funciones y de flujo.";
 answers[57] = 1;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 777. AGE A2 2015";
 preguntaids[57] = 777


//  Id pregunta: 10972 Año de creación de pregunta: 2015
 questions[58]= "59)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[58]= new Array();
 choices[58][0] = "Un Senador";
 choices[58][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[58][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[58][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[58] = 1;
 units[58] = ['22'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 10972. ";
 preguntaids[58] = 10972


//  Id pregunta: 4807 Año de creación de pregunta: 2002
 questions[59]= "60)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[59]= new Array();
 choices[59][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[59][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[59][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[59][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[59] = 3;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4807. ";
 preguntaids[59] = 4807


//  Id pregunta: 9898 Año de creación de pregunta: 2015
 questions[60]= "61)  &iquest;Qu&eacute; Ley establece el Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas?";
 choices[60]= new Array();
 choices[60][0] = "Ley 40/2015.";
 choices[60][1] = "Ley 40/2014.";
 choices[60][2] = "Ley 39/2015.";
 choices[60][3] = "Ley 41/2015.";
 answers[60] = 2;
 units[60] = ['7', '19'];
 blocks[60] = ['A2', 'A4'];
 comments[60] = "Id Pregunta: 9898. ";
 preguntaids[60] = 9898


//  Id pregunta: 5127 Año de creación de pregunta: 2003
 questions[61]= "62)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[61]= new Array();
 choices[61][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[61][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[61][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[61][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[61] = 1;
 units[61] = ['106'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5127. ";
 preguntaids[61] = 5127


//  Id pregunta: 7286 Año de creación de pregunta: 2010
 questions[62]= "63)  IPv6";
 choices[62]= new Array();
 choices[62][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[62][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[62][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = 2;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7286. ";
 preguntaids[62] = 7286


//  Id pregunta: 6893 Año de creación de pregunta: 2010
 questions[63]= "64)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[63]= new Array();
 choices[63][0] = "Un applet.";
 choices[63][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[63][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[63][3] = "Un JavaBean.";
 answers[63] = 1;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6893. TIC A 2009";
 preguntaids[63] = 6893


//  Id pregunta: 3924 Año de creación de pregunta: 2002
 questions[64]= "65)  Los almacenes de datos de un DFD:";
 choices[64]= new Array();
 choices[64][0] = "Representan datos en movimiento";
 choices[64][1] = "Respresentan datos almacenados en dispositivo de acceso r&aacute;pido";
 choices[64][2] = "Comprenden cualquier tipo de almac&eacute;n accesible por odenador ya sea local o remoto";
 choices[64][3] = "Pueden representar un caj&oacute;n de papeles, un archivador manual, un fichero o una base de datos";
 answers[64] = 3;
 units[64] = ['85', '86'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3924. ";
 preguntaids[64] = 3924


//  Id pregunta: 978 Año de creación de pregunta: 2016
 questions[65]= "66)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento por parte de los organos jerarquicamente dependientes de las instrucciones u &oacute;rdenes de servicio de los organos administrativos de acuerdo a la ley 40/2015:";
 choices[65]= new Array();
 choices[65][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[65][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[65][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[65][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[65] = 0;
 units[65] = ['4', '7', '8', '9'];
 blocks[65] = ['A1', 'A2'];
 comments[65] = "Id Pregunta: 978. Ley 40/2015";
 preguntaids[65] = 978


//  Id pregunta: 7921 Año de creación de pregunta: 2011
 questions[66]= "67)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[66]= new Array();
 choices[66][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[66][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[66][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[66][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[66] = 3;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7921. Examen TIC A1 2010";
 preguntaids[66] = 7921


//  Id pregunta: 9998 Año de creación de pregunta: 2015
 questions[67]= "68)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[67]= new Array();
 choices[67][0] = "SQLite.";
 choices[67][1] = "Oracle Pocket.";
 choices[67][2] = "SQL Server compact.";
 choices[67][3] = "MySQL micro edition.";
 answers[67] = 0;
 units[67] = ['60'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9998. Examen TIC A2 2014";
 preguntaids[67] = 9998


//  Id pregunta: 10527 Año de creación de pregunta: 2015
 questions[68]= "69)  Cuando la CNMC detecta operadores con poder significativo en los mercados de referencia, &iquest;cu&aacute;l de las siguientes no es una medida que pueda tomar?";
 choices[68]= new Array();
 choices[68][0] = "Imponer obligaciones de transparencia: informaci&oacute;n sobre contabilidad, especificaciones o precios";
 choices[68][1] = "Obligar a la separaci&oacute;n de cuentas";
 choices[68][2] = "Control de precios";
 choices[68][3] = "Promover intervencion judicial de la empresa";
 answers[68] = 3;
 units[68] = ['121'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10527. Dicha medida no aparece en la LGT";
 preguntaids[68] = 10527


//  Id pregunta: 8620 Año de creación de pregunta: 2013
 questions[69]= "70)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[69]= new Array();
 choices[69][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[69][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[69][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[69][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[69] = 0;
 units[69] = ['19'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 8620. Examen TIC A2 2011";
 preguntaids[69] = 8620


//  Id pregunta: 2138 Año de creación de pregunta: 2004
 questions[70]= "71)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[70]= new Array();
 choices[70][0] = "Tiempo de CPU por trabajo.";
 choices[70][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[70][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[70][3] = "Troughput.";
 answers[70] = 3;
 units[70] = ['39'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2138. ";
 preguntaids[70] = 2138


//  Id pregunta: 9614 Año de creación de pregunta: 2014
 questions[71]= "72)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[71][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[71][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[71][3] = "Todas las respuestas anteriores son falsas";
 answers[71] = 2;
 units[71] = ['41'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 9614. Consultar Art. 100 del Real Decreto Legislativo 1/1996";
 preguntaids[71] = 9614


//  Id pregunta: 10645 Año de creación de pregunta: 2015
 questions[72]= "73)  Seg&uacute;n la Ley 9/2014, cu&aacute;les de las siguientes son facultades del Gobierno para la administraci&oacute;n del espectro:";
 choices[72]= new Array();
 choices[72][0] = "La regulaci&oacute;n del procedimiento para la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[72][1] = "La regulaci&oacute;n del procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencias para alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico.";
 choices[72][2] = "La regulaci&oacute;n del uso del espectro radioel&eacute;ctrico para controlar el uso de los operadores.";
 choices[72][3] = "a y b son correctas.";
 answers[72] = 3;
 units[72] = ['121'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10645. ";
 preguntaids[72] = 10645


//  Id pregunta: 6885 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[73]= new Array();
 choices[73][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[73][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia.";
 choices[73][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[73][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[73] = 3;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 6885. TIC A 2009";
 preguntaids[73] = 6885


//  Id pregunta: 7784 Año de creación de pregunta: 2010
 questions[74]= "75)  Con respecto a ITIL, el proceso &laquo;Configuration Management&raquo; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en qu&eacute; fase de las citadas seguidamente est&aacute; incluido?";
 choices[74]= new Array();
 choices[74][0] = "Dise&ntilde;o.";
 choices[74][1] = "Operaci&oacute;n.";
 choices[74][2] = "Transici&oacute;n.";
 choices[74][3] = "Mejora continua.";
 answers[74] = 2;
 units[74] = ['101'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7784. ";
 preguntaids[74] = 7784


