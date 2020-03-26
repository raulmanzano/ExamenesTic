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
//  Id pregunta: 10496 Año de creación de pregunta: 2015
 questions[0]= "1)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[0]= new Array();
 choices[0][0] = "ISO 15408 - Common criteria";
 choices[0][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[0][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[0][3] = "RFC 5246 - IPSEC";
 answers[0] = 3;
 units[0] = ['45', '78', '119'];
 blocks[0] = ['B1', 'B2', 'B4'];
 comments[0] = "Id Pregunta: 10496. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";
 preguntaids[0] = 10496


//  Id pregunta: 5075 Año de creación de pregunta: 2002
 questions[1]= "2)  SOAP:";
 choices[1]= new Array();
 choices[1][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[1][1] = "Fue propuesta originalmente por Microsoft";
 choices[1][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[1][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[1] = 3;
 units[1] = ['113'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5075. ";
 preguntaids[1] = 5075


//  Id pregunta: 3130 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[2]= new Array();
 choices[2][0] = "Sun Microsystems";
 choices[2][1] = "OSF (Open Group)";
 choices[2][2] = "Departamento de Defensa de EE.UU.";
 choices[2][3] = "MIT (Massachusets Institute of Technology)";
 answers[2] = 1;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3130. ";
 preguntaids[2] = 3130


//  Id pregunta: 3544 Año de creación de pregunta: 2004
 questions[3]= "4)  Se desea desarrollar un proyecto con programaci&oacute;n orientada a objetos en el que va a ser necesario utilizar herencia m&uacute;ltiple. &iquest;Qu&eacute; lenguaje no vamos a poder usar?";
 choices[3]= new Array();
 choices[3][0] = "Python.";
 choices[3][1] = "C++.";
 choices[3][2] = "Eiffel.";
 choices[3][3] = "Smalltalk.";
 answers[3] = 3;
 units[3] = ['89'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3544. Similar a examen TIC MAP A 2004";
 preguntaids[3] = 3544


//  Id pregunta: 9926 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[4]= new Array();
 choices[4][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[4][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[4][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[4][3] = "Todas las anteriores se deben incluir.";
 answers[4] = 3;
 units[4] = ['44'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9926. ";
 preguntaids[4] = 9926


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[5]= "6)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[5]= new Array();
 choices[5][0] = "los Secretarios de Estado";
 choices[5][1] = "los Ministros";
 choices[5][2] = "los Subsecretarios";
 choices[5][3] = "los Secretarios generales";
 answers[5] = 2;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[5] = 1006


//  Id pregunta: 1979 Año de creación de pregunta: 2016
 questions[6]= "7)  En la presentaci&oacute;n telem&aacute;tica de documentos, una administraci&oacute;n p&uacute;blica deber&aacute; admitir como v&aacute;lida la acreditaci&oacute;n de la identidad del firmante:";
 choices[6]= new Array();
 choices[6][0] = "Siempre que se real ice con el documento nacional de identidad electr&oacute;nico.";
 choices[6][1] = "Siempre que se realice can el documento nacional de identidad electr&oacute;nico y la administraci&oacute;n tenga convenio con la plataforma @firma.";
 choices[6][2] = "Si la firma se ha realizado can un certificado valido independientemente del prestador de servicios de certificaci&oacute;n.";
 choices[6][3] = "Solo si el certificado pertenece a una persona jur&iacute;dica.";
 answers[6] = 0;
 units[6] = ['7'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 1979. ";
 preguntaids[6] = 1979


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[7]= "8)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[7]= new Array();
 choices[7][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[7][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[7][2] = "Ninguna es correcta.";
 choices[7][3] = "A y B son correctas.";
 answers[7] = 0;
 units[7] = ['14'];
 blocks[7] = ['A3'];
 comments[7] = "Id Pregunta: 404. Pol&iacute;ticas de igualdad";
 preguntaids[7] = 404


//  Id pregunta: 8263 Año de creación de pregunta: 2011
 questions[8]= "9)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[8]= new Array();
 choices[8][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[8][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[8][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[8][3] = "39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas";
 answers[8] = 1;
 units[8] = ['10'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 8263. Examen TIC A2 2010 interna";
 preguntaids[8] = 8263


//  Id pregunta: 6075 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[9]= new Array();
 choices[9][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[9][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[9][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[9][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[9] = 0;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6075. Examen TIC A1 MAP 2007";
 preguntaids[9] = 6075


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[10]= new Array();
 choices[10][0] = "Cincuenta y cuatro.";
 choices[10][1] = "Cincuenta.";
 choices[10][2] = "Cincuenta y cinco.";
 choices[10][3] = "Cincuenta y dos.";
 answers[10] = 0;
 units[10] = ['5'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 141. Uni&oacute;n Europea";
 preguntaids[10] = 141


//  Id pregunta: 9890 Año de creación de pregunta: 2015
 questions[11]= "12)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[11]= new Array();
 choices[11][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[11][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[11][2] = "Ambas";
 choices[11][3] = "Ninguna de las anteriores.";
 answers[11] = 0;
 units[11] = ['7', '19'];
 blocks[11] = ['A2', 'A4'];
 comments[11] = "Id Pregunta: 9890. ";
 preguntaids[11] = 9890


//  Id pregunta: 8130 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[12]= new Array();
 choices[12][0] = "El Diccionario de Datos.";
 choices[12][1] = "El Diagrama de Flujo de Datos.";
 choices[12][2] = "Las especificaciones de procesos.";
 choices[12][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[12] = 3;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 8130. Examen TIC A2 2010 interna";
 preguntaids[12] = 8130


//  Id pregunta: 10969 Año de creación de pregunta: 2015
 questions[13]= "14)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[13]= new Array();
 choices[13][0] = "El Portal de la Transparencia depende del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[13][1] = "La solicitud de acceso a la informaci&oacute;n no requerir&aacute; la identificaci&oacute;n del solicitante.";
 choices[13][2] = "No se admitir&aacute;n solicitudes de informaci&oacute;n para cuya divulgaci&oacute;n sea necesaria una acci&oacute;n previa de reelaboraci&oacute;n.";
 choices[13][3] = "La resoluci&oacute;n de la petici&oacute;n de acceso deber&aacute; notificarse al solicitante en el plazo m&aacute;ximo de 15 d&iacute;as h&aacute;biles.";
 answers[13] = 2;
 units[13] = ['22'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 10969. ";
 preguntaids[13] = 10969


//  Id pregunta: 2389 Año de creación de pregunta: 2006
 questions[14]= "15)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[14]= new Array();
 choices[14][0] = "En entorno de microinform&aacute;tica";
 choices[14][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[14][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[14][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[14] = 2;
 units[14] = ['30'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2389. ";
 preguntaids[14] = 2389


//  Id pregunta: 1489 Año de creación de pregunta: 2016
 questions[15]= "16)  En relaci&oacute;n con los modelos para la gesti&oacute;n de la calidad del software, se&ntilde;ale la opci&oacute;n verdadera:";
 choices[15]= new Array();
 choices[15][0] = "El SEI public&oacute; en el a&ntilde;o 2010 la versi&oacute;n 1.3 de CMMI que contiene cambios, especialmente en lo que se refiere a alta madurez (niveles 4 y 5).";
 choices[15][1] = "Las pruebas en el modelo CMMI DEV est&aacute;n tratadas en las &aacute;reas de proceso &quot;Administraci&oacute;n Cuantitativa del Proyecto&quot; y &quot;Validaci&oacute;n&quot;.";
 choices[15][2] = "El nivel de Madurez 3 de modelo CMMI es el nivel &quot;Optimizado&quot;, se caracteriza porque las organizaciones disponen de un conjunto de m&eacute;tricas significativas de calidad y productividad, que se usan de modo sistem&aacute;tico para la toma de decisiones y la gesti&oacute;n de riesgos.";
 choices[15][3] = "En su cuarta edici&oacute;n, COBIT tiene 4 objetivos de alto nivel que cubren 21 objetivos de control (espec&iacute;ficos o detallados) clasificados en cuatro dominios.";
 answers[15] = 0;
 units[15] = ['93'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 1489. ";
 preguntaids[15] = 1489


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[16]= new Array();
 choices[16][0] = "El nombre del firmante o un seudo?nimo";
 choices[16][1] = "Los datos de validacio?n de la firma electro?nica";
 choices[16][2] = "La firma electro?nica cualificada o el sello electro?nico cualificado del prestador de servicios de confianza expedidor";
 choices[16][3] = "La localizacio?n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[16] = 2;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 784. Reglamento 910/2014";
 preguntaids[16] = 784


//  Id pregunta: 5655 Año de creación de pregunta: 2007
 questions[17]= "18)  &iquest;Que nivel del modelo CMMi se caracteriza porque el proceso de software para las actividades administrativas y t&eacute;cnicas est&aacute; documentado, homogeneizado e integrado?";
 choices[17]= new Array();
 choices[17][0] = "Nivel 2 (Gestionado)";
 choices[17][1] = "Nivel 3 (Definido)";
 choices[17][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[17][3] = "Nivel 5 (Optimizado)";
 answers[17] = 1;
 units[17] = ['92'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 5655. ";
 preguntaids[17] = 5655


//  Id pregunta: 2361 Año de creación de pregunta: 2004
 questions[18]= "19)  Respecto a las pautas de accesibilidad de la iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[18]= new Array();
 choices[18][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[18][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[18][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[18][3] = "Todas las anteriores afirmaciones son falsas";
 answers[18] = 1;
 units[18] = ['42'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2361. ";
 preguntaids[18] = 2361


//  Id pregunta: 10149 Año de creación de pregunta: 2015
 questions[19]= "20)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[19]= new Array();
 choices[19][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[19][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[19][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[19][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[19] = 1;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 10149. Examen TIC A1 2014";
 preguntaids[19] = 10149


//  Id pregunta: 6137 Año de creación de pregunta: 2003
 questions[20]= "21)  En Java 2 el operador &gt;&gt;:";
 choices[20]= new Array();
 choices[20][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[20][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[20][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[20][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[20] = 2;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6137. Examen TIC A1 MAP 2007";
 preguntaids[20] = 6137


//  Id pregunta: 2401 Año de creación de pregunta: 2006
 questions[21]= "22)  Seg&uacute;n lo establecido en la LOPD &iquest;Cual de los siguientes son derechos de las personas?";
 choices[21]= new Array();
 choices[21][0] = "Secreto profesional y control previo de los tratamientos";
 choices[21][1] = "Consentimiento expreso para el tratamiento de datos especialmente protegidos y derecho de Informaci&oacute;n";
 choices[21][2] = "Acceso, rectificaci&oacute;n, cancelaci&oacute;n, oposici&oacute;n e impugnaci&oacute;n";
 choices[21][3] = "Confidencialidad e integridad de la Informaci&oacute;n";
 answers[21] = 2;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2401. ";
 preguntaids[21] = 2401


//  Id pregunta: 5751 Año de creación de pregunta: 2007
 questions[22]= "23)  Dentro de la ingenier&iacute;a del software orientada a objetos, &iquest;Como se denomina la relaci&oacute;n entre un componente y su interfaz?";
 choices[22]= new Array();
 choices[22][0] = "agregaci&oacute;n";
 choices[22][1] = "realizaci&oacute;n";
 choices[22][2] = "polimorfismo";
 choices[22][3] = "presentaci&oacute;n";
 answers[22] = 1;
 units[22] = ['85'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 5751. ";
 preguntaids[22] = 5751


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[23]= "24)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[23]= new Array();
 choices[23][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[23][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[23][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[23][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[23] = 1;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 480. Sociedad de la informaci&oacute;n";
 preguntaids[23] = 480


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[24]= "25)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[24]= new Array();
 choices[24][0] = "10 d&iacute;as h&aacute;biles";
 choices[24][1] = "15 d&iacute;as h&aacute;biles";
 choices[24][2] = "15 d&iacute;as naturales";
 choices[24][3] = "1 mes";
 answers[24] = 3;
 units[24] = ['10'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 10779. ";
 preguntaids[24] = 10779


//  Id pregunta: 7612 Año de creación de pregunta: 2010
 questions[25]= "26)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &laquo;Gesti&oacute;n de la Tecnolog&iacute;a&raquo; pertenece al criterio:";
 choices[25]= new Array();
 choices[25][0] = "Alianzas y recursos.";
 choices[25][1] = "Pol&iacute;tica y estrategia.";
 choices[25][2] = "Procesos.";
 choices[25][3] = "Resultados clave.";
 answers[25] = 0;
 units[25] = ['98'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7612. Map 2006";
 preguntaids[25] = 7612


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[26]= new Array();
 choices[26][0] = "24 meses";
 choices[26][1] = "5 a&ntilde;os";
 choices[26][2] = "30 meses";
 choices[26][3] = "4 a&ntilde;os";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[26] = 6124


//  Id pregunta: 3488 Año de creación de pregunta: 2006
 questions[27]= "28)  Grupo de microchips dise&ntilde;ados para trabajar como una unidad para desarrollar una o varias funciones relacionadas";
 choices[27]= new Array();
 choices[27][0] = "BIOS";
 choices[27][1] = "Chip cluster";
 choices[27][2] = "Chipset";
 choices[27][3] = "Estado s&oacute;lido";
 answers[27] = 2;
 units[27] = ['50'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3488. ";
 preguntaids[27] = 3488


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[28]= "29)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[28]= new Array();
 choices[28][0] = "Reponen";
 choices[28][1] = "Reajustan";
 choices[28][2] = "Devuelven o cancelan";
 choices[28][3] = "Todas las anteriores";
 answers[28] = 3;
 units[28] = ['10'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[28] = 9134


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[29]= "30)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[29]= new Array();
 choices[29][0] = "Interoperabilidad";
 choices[29][1] = "Integridad";
 choices[29][2] = "Capital humano";
 choices[29][3] = "Trazabilidad";
 answers[29] = 2;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 486. Sociedad de la informaci&oacute;n";
 preguntaids[29] = 486


//  Id pregunta: 6566 Año de creación de pregunta: 2003
 questions[30]= "31)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[30]= new Array();
 choices[30][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[30][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[30][2] = "No, no dispone de esa capacidad";
 choices[30][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[30] = 3;
 units[30] = ['78'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6566. ";
 preguntaids[30] = 6566


//  Id pregunta: 10843 Año de creación de pregunta: 2015
 questions[31]= "32)  Son protocolos de estado del enlace:";
 choices[31]= new Array();
 choices[31][0] = "OSPF y RIPv2";
 choices[31][1] = "IS-IS y OSPF";
 choices[31][2] = "IGRP y RIPv2";
 choices[31][3] = "RIPv2 e IS-IS";
 answers[31] = 1;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10843. ";
 preguntaids[31] = 10843


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[32]= "33)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[32]= new Array();
 choices[32][0] = "Ejecuci&oacute;n";
 choices[32][1] = "Adjudicaci&oacute;n";
 choices[32][2] = "Licitaci&oacute;n";
 choices[32][3] = "Formalizaci&oacute;n";
 answers[32] = 3;
 units[32] = ['37'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 571. AGE A1 2015";
 preguntaids[32] = 571


//  Id pregunta: 7266 Año de creación de pregunta: 2010
 questions[33]= "34)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[33]= new Array();
 choices[33][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[33][1] = "Servicios de directorio";
 choices[33][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[33][3] = "Todas las respuestas anteriores son correctas";
 answers[33] = 3;
 units[33] = ['78'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7266. ";
 preguntaids[33] = 7266


//  Id pregunta: 8208 Año de creación de pregunta: 2011
 questions[34]= "35)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[34]= new Array();
 choices[34][0] = "(A, B, C), (A, B, D).";
 choices[34][1] = "(A, B, C), (B, D).";
 choices[34][2] = "(A, B, C),  (A, D).";
 choices[34][3] = "Ya est&aacute; en 2FN.";
 answers[34] = 1;
 units[34] = ['60', '61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8208. Examen TIC A2 2010 interna";
 preguntaids[34] = 8208


//  Id pregunta: 1417 Año de creación de pregunta: 2016
 questions[35]= "36)  Espa&ntilde;a se constituye en un Estado social y democr&aacute;tico de Derecho, que propugna como valores superiores de su ordenamiento jur&iacute;dico, seg&uacute;n el art&iacute;culo 1 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[35]= new Array();
 choices[35][0] = "La Monarqu&iacute;a Parlamentaria.";
 choices[35][1] = "El Pluralismo Pol&iacute;tico.";
 choices[35][2] = "La soberan&iacute;a nacional.";
 choices[35][3] = "La libertad sindical.";
 answers[35] = 1;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 1417. ";
 preguntaids[35] = 1417


//  Id pregunta: 9109 Año de creación de pregunta: 2014
 questions[36]= "37)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Top-down.";
 choices[36][1] = "Sandwich.";
 choices[36][2] = "Big-Bang";
 choices[36][3] = "Bottom-up.";
 answers[36] = 2;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9109. Examen TIC A2 2013";
 preguntaids[36] = 9109


//  Id pregunta: 9419 Año de creación de pregunta: 2014
 questions[37]= "38)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[37]= new Array();
 choices[37][0] = "salida-mecanismo";
 choices[37][1] = "salida-realimentaci&oacute;n";
 choices[37][2] = "control-realimentaci&oacute;n";
 choices[37][3] = "entrada-realimentaci&oacute;n";
 answers[37] = 1;
 units[37] = ['86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 9419. Existen cinco tipos de interconexiones entre actividades, que son las siguientes: (1)  Control; (2)  Entrada; (3)   Control &ndash; Realimentaci&oacute;n; (4)  Entrada &ndash; Realimentaci&oacute;n; (5)  Salida &ndash; Mecanismo.";
 preguntaids[37] = 9419


//  Id pregunta: 6232 Año de creación de pregunta: 2009
 questions[38]= "39)  Seg&uacute;n la legislaci&oacute;n aplicable, forma parte del servicio universal:";
 choices[38]= new Array();
 choices[38][0] = "Una conexi&oacute;n que deber&aacute; permitir comunicaciones en banda ancha, en los t&eacute;rminos que se definan por la normativa vigente";
 choices[38][1] = "Una conexi&oacute;n con acceso a servicios de televisi&oacute;n sobre IP";
 choices[38][2] = "Una conexi&oacute;n a telefon&iacute;a m&oacute;vil GSM";
 choices[38][3] = "Una conexi&oacute;n que permita comunicaciones de datos a velocidad suficiente para acceder de forma fucional a Internet y a otras redes de &aacute;mbito privado";
 answers[38] = 0;
 units[38] = ['121'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6232. Examen TIC A Castilla La Mancha 2007";
 preguntaids[38] = 6232


//  Id pregunta: 10268 Año de creación de pregunta: 2015
 questions[39]= "40)  Hay 7 diferentes estrategias de externalizaci&oacute;n que una compa&ntilde;&iacute;a puede emplear, &iquest;cu&aacute;l es la forma m&aacute;s reciente de outsourcing?";
 choices[39]= new Array();
 choices[39][0] = "Outsourcing del Proceso de Conocimiento";
 choices[39][1] = "Asociaci&oacute;n o multi-sourcing";
 choices[39][2] = "Outsourcing de Procesos de Negocio (Business Process Outsourcing BPO)";
 choices[39][3] = "Provisi&oacute;n de Servicios de Aplicaci&oacute;n";
 answers[39] = 0;
 units[39] = ['101'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10268. ";
 preguntaids[39] = 10268


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[40]= "41)  El EtherType del protocolo FCoE (Fibre Channel Over Ethernet) es:";
 choices[40]= new Array();
 choices[40][0] = "0&times;8906";
 choices[40][1] = "0x86DD";
 choices[40][2] = "0&times;0806";
 choices[40][3] = "0x809B";
 answers[40] = 0;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 651. AGE A2 2015";
 preguntaids[40] = 651


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[41]= "42)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[41]= new Array();
 choices[41][0] = "A la persona demandante.";
 choices[41][1] = "A la persona demandada.";
 choices[41][2] = "Al &oacute;rgano judicial.";
 choices[41][3] = "Al &oacute;rgano administrativo.";
 answers[41] = 1;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 380. Pol&iacute;ticas de igualdad";
 preguntaids[41] = 380


//  Id pregunta: 7401 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xSDL?";
 choices[42]= new Array();
 choices[42][0] = "HDSL";
 choices[42][1] = "VDSL";
 choices[42][2] = "ADSL";
 choices[42][3] = "EDSL";
 answers[42] = 3;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7401. Examen TIC B 2009";
 preguntaids[42] = 7401


//  Id pregunta: 8070 Año de creación de pregunta: 2011
 questions[43]= "44)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[43]= new Array();
 choices[43][0] = "Crecimiento tecnol&oacute;gico";
 choices[43][1] = "Crecimiento inteligente";
 choices[43][2] = "Crecimiento sostenible";
 choices[43][3] = "Crecimiento integrador";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 8070. ";
 preguntaids[43] = 8070


//  Id pregunta: 3594 Año de creación de pregunta: 2004
 questions[44]= "45)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[44]= new Array();
 choices[44][0] = "M&eacute;tricas de productividad";
 choices[44][1] = "M&eacute;tricas de fiabilidad";
 choices[44][2] = "M&eacute;tricas de rendimiento";
 choices[44][3] = "M&eacute;tricas de Complejidad";
 answers[44] = 2;
 units[44] = ['93'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3594. ";
 preguntaids[44] = 3594


//  Id pregunta: 6323 Año de creación de pregunta: 2003
 questions[45]= "46)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[45]= new Array();
 choices[45][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[45][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[45][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = 1;
 units[45] = ['93'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6323. ";
 preguntaids[45] = 6323


//  Id pregunta: 7801 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[46]= new Array();
 choices[46][0] = "Miembros Plenos.";
 choices[46][1] = "Miembros Coordinadores.";
 choices[46][2] = "Miembros Asociados.";
 choices[46][3] = "Miembros Consejeros.";
 answers[46] = 1;
 units[46] = ['48'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 7801. ";
 preguntaids[46] = 7801


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[47]= "48)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[47]= new Array();
 choices[47][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[47][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[47][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[47][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[47] = 2;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 90. Constituci&oacute;n de 1978";
 preguntaids[47] = 90


//  Id pregunta: 7157 Año de creación de pregunta: 2010
 questions[48]= "49)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[48]= new Array();
 choices[48][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[48][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[48][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[48][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[48] = 1;
 units[48] = ['85'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 7157. ";
 preguntaids[48] = 7157


//  Id pregunta: 6294 Año de creación de pregunta: 2003
 questions[49]= "50)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al modelo de ciclo de vida en espiral:";
 choices[49]= new Array();
 choices[49][0] = "Fue propuesto por Boehm para solventar los principales problemas de los modelos tradicionales";
 choices[49][1] = "Considera diferentes alternativas para alcanzar los objetivos del proyecto";
 choices[49][2] = "La dimensi&oacute;n radial indica los costes de desarrollo acumulativo";
 choices[49][3] = "Todas las anteriores son correctas";
 answers[49] = 3;
 units[49] = ['82'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6294. ";
 preguntaids[49] = 6294


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[50]= new Array();
 choices[50][0] = "Cuatro.";
 choices[50][1] = "Una.";
 choices[50][2] = "Cinco.";
 choices[50][3] = "Nueve.";
 answers[50] = 0;
 units[50] = ['1'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 95. Constituci&oacute;n de 1978";
 preguntaids[50] = 95


//  Id pregunta: 5184 Año de creación de pregunta: 2003
 questions[51]= "52)  Respecto de Java y JavaScript se puede decir";
 choices[51]= new Array();
 choices[51][0] = "Los dos son lenguajes interpretados";
 choices[51][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado";
 choices[51][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[51][3] = "Ambos son compilados";
 answers[51] = 1;
 units[51] = ['62'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 5184. ";
 preguntaids[51] = 5184


//  Id pregunta: 4271 Año de creación de pregunta: 2006
 questions[52]= "53)  En el analisis documental &iquest;qu&eacute; nivel no se emplea ?";
 choices[52]= new Array();
 choices[52][0] = "asiento";
 choices[52][1] = "indizaci&oacute;n";
 choices[52][2] = "resumen";
 choices[52][3] = "todos ellos se emplean";
 answers[52] = 3;
 units[52] = ['99'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 4271. ";
 preguntaids[52] = 4271


//  Id pregunta: 6705 Año de creación de pregunta: 2009
 questions[53]= "54)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[53]= new Array();
 choices[53][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[53][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[53][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[53][3] = "Antes del 31 de diciembre de 2008";
 answers[53] = 1;
 units[53] = ['42'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 6705. MAP 2008 A1";
 preguntaids[53] = 6705


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[54]= "55)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[54]= new Array();
 choices[54][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[54][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[54][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[54][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[54] = 0;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 559. AGE A1 2015";
 preguntaids[54] = 559


//  Id pregunta: 6876 Año de creación de pregunta: 2010
 questions[55]= "56)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[55]= new Array();
 choices[55][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[55][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[55][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[55][3] = "Red.es.";
 answers[55] = 0;
 units[55] = ['121'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6876. TIC A 2009";
 preguntaids[55] = 6876


//  Id pregunta: 2729 Año de creación de pregunta: 2002
 questions[56]= "57)  Dentro de las arquitecturas que podemos encontrar en el mundo del ordenador personal, en la denominada ISA (Industry Standard Architecture ) su bus de datos trabaja con:";
 choices[56]= new Array();
 choices[56][0] = "32 bits";
 choices[56][1] = "8 bits";
 choices[56][2] = "16 bits";
 choices[56][3] = "64 bits";
 answers[56] = 2;
 units[56] = ['51'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2729. ";
 preguntaids[56] = 2729


//  Id pregunta: 5887 Año de creación de pregunta: 2007
 questions[57]= "58)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[57]= new Array();
 choices[57][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[57][1] = "Firma electr&oacute;nica";
 choices[57][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[57][3] = "Todas las anteriores son ciertas";
 answers[57] = 3;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 5887. Ley 56/2007";
 preguntaids[57] = 5887


//  Id pregunta: 10356 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;A qu&eacute; fase corresponde la Tarea &ldquo;Presentaci&oacute;n y aprobaci&oacute;n del Sistema de Informaci&oacute;n&rdquo; seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[58]= new Array();
 choices[58][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[58][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[58][2] = "Aseguramiento de la Calidad";
 choices[58][3] = "Gesti&oacute;n de Proyectos";
 answers[58] = 1;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10356. ";
 preguntaids[58] = 10356


//  Id pregunta: 8862 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "M&eacute;todo Albrecht";
 choices[59][1] = "M&eacute;todo MARK II";
 choices[59][2] = "La a) y la b) son correctas";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = 2;
 units[59] = ['94'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 8862. ";
 preguntaids[59] = 8862


//  Id pregunta: 7130 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[60]= new Array();
 choices[60][0] = "15 d&iacute;as";
 choices[60][1] = "1 mes";
 choices[60][2] = "2 meses";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = 3;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 7130. Ley 34/2002, art&iacute;culo 6";
 preguntaids[60] = 7130


//  Id pregunta: 6358 Año de creación de pregunta: 2003
 questions[61]= "62)  A ra&iacute;z del esc&aacute;ndalo ENRON se vio el problema de que la misma empresa realizara la Auditor&iacute;a y Consultor&iacute;a. Los Auditores a veces no &quot;contaban&quot; todo lo que ve&iacute;an porque las situaciones con las que se encontraban hab&iacute;an sido fruto del trabajo de sus compa&ntilde;eros consultores. La diferencia entre auditor y consultor era de lo m&aacute;s difuso (A veces eran los mismos). Cual de estas cuatro tesis es la correcta:";
 choices[61]= new Array();
 choices[61][0] = "En la Auditor&iacute;a Inform&aacute;tica el inter&eacute;s del cliente no es objeto del informe. Estamos hablando de una revisi&oacute;n, an&aacute;lisis, evaluaci&oacute;n orientada a describir una situaci&oacute;n. Es l&iacute;cito realizar una Auditor&iacute;a Inform&aacute;tica pensando en la Consultor&iacute;a que va a venir puesto que la detecci&oacute;n de un problema es la antesala de una propuesta de soluci&oacute;n";
 choices[61][1] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente. No obstante las empresas son entes flexibles, por lo que la Auditor&iacute;a no debe cargar las tintas en problemas sencillos que se pueden arreglar con sencillas consultor&iacute;as hechas por los mismos auditores.";
 choices[61][2] = "En la Auditor&iacute;a Inform&aacute;tica hay que anteponer el inter&eacute;s del cliente al de los consultores. Una Auditor&iacute;a Inform&aacute;tica emite un informe escrito que resume una situaci&oacute;n desde un punto de vista independiente, mientras que una Consultor&iacute;a suele requerir mayor pronunciamiento y mejor definici&oacute;n de las soluciones.";
 choices[61][3] = "Auditor&iacute;a y Consultor&iacute;a deben estar perfectamente divididos, deben llevarla diferentes empresas y diferentes personas";
 answers[61] = 2;
 units[61] = ['31'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 6358. Examen 2006 JCYL";
 preguntaids[61] = 6358


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[62]= "63)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[62]= new Array();
 choices[62][0] = "La Comisi&oacute;n.";
 choices[62][1] = "El Consejo de Europa.";
 choices[62][2] = "El Consejo Europeo.";
 choices[62][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[62] = 3;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 121. Uni&oacute;n Europea";
 preguntaids[62] = 121


//  Id pregunta: 2731 Año de creación de pregunta: 2002
 questions[63]= "64)  Dentro de los discos &oacute;pticos, los denominados WORM:";
 choices[63]= new Array();
 choices[63][0] = "Permiten escribir, borrar y leer datos de la misma forma que un disco  duro magn&eacute;tico";
 choices[63][1] = "Permiten al usuario escribir sobre un disco de forma imborrable";
 choices[63][2] = "No permiten al usuario escribir sobre el disco, pero s&iacute; puede leerse";
 choices[63][3] = "Permiten al usuario escribir sobre un disco y el borrado por una sola vez";
 answers[63] = 1;
 units[63] = ['50'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2731. ";
 preguntaids[63] = 2731


//  Id pregunta: 8210 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[64]= new Array();
 choices[64][0] = "Mergesort";
 choices[64][1] = "Bubblesort";
 choices[64][2] = "Quicksort";
 choices[64][3] = "Insertionsort";
 answers[64] = 2;
 units[64] = ['100'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 8210. Examen TIC A2 2010 interna";
 preguntaids[64] = 8210


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[65]= new Array();
 choices[65][0] = "Tres meses.";
 choices[65][1] = "Nueve meses.";
 choices[65][2] = "Cuatro meses.";
 choices[65][3] = "Seis meses.";
 answers[65] = 0;
 units[65] = ['11'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[65] = 285


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[66]= "67)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[66]= new Array();
 choices[66][0] = "Leve";
 choices[66][1] = "Grave";
 choices[66][2] = "Muy grave";
 choices[66][3] = "No constituye infracci&oacute;n";
 answers[66] = 0;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[66] = 3279


//  Id pregunta: 1980 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 34/2002 de SSI-CE, los prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a deber&aacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Notificar al Ministerio del Interior los correos electr&oacute;nicos registrados e identificando el nombre y DNI de los usuarios.";
 choices[67][1] = "Comunicar al Ministerio de Ciencia y Tecnolog&iacute;a en el plazo de un mes, al menos, un nombre de dominio o direcci&oacute;n de internet que utilicen para su identificaci&oacute;n en internet";
 choices[67][2] = "Comunicar al registro mercantil, en el plazo de un mes, al menos, un nombre de dominio o direcci&oacute;n de internet que utilicen para su identificaci&oacute;n en internet";
 choices[67][3] = "Comunicar al Registro de la Propiedad en el plazo de un mes, los nombres de dominio o direcciones de internet que utilicen.";
 answers[67] = 2;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 1980. ";
 preguntaids[67] = 1980


//  Id pregunta: 1293 Año de creación de pregunta: 2016
 questions[68]= "69)  En los sistemas multiprocesador, los sistemas MIMD se caracterizan por:";
 choices[68]= new Array();
 choices[68][0] = "Varias unidades funcionales realizan diferentes operaciones sobre diferentes datos.";
 choices[68][1] = "Una &uacute;nica unidad funcional realiza varias operaciones sobre diferentes datos.";
 choices[68][2] = "Varias unidades funcionales realizan operaciones similares sobre datos diferentes.";
 choices[68][3] = "Una &uacute;nica unidad funcional realiza una &uacute;nica operaci&oacute;n sobre diferentes datos.";
 answers[68] = 0;
 units[68] = ['49'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1293. ";
 preguntaids[68] = 1293


//  Id pregunta: 964 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[69]= new Array();
 choices[69][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[69][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[69][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[69][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[69] = 1;
 units[69] = ['4', '7', '8', '9'];
 blocks[69] = ['A1', 'A2'];
 comments[69] = "Id Pregunta: 964. Ley 40/2015";
 preguntaids[69] = 964


//  Id pregunta: 7996 Año de creación de pregunta: 2011
 questions[70]= "71)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[70]= new Array();
 choices[70][0] = "Unity Application Block,";
 choices[70][1] = "Logging Application Block.";
 choices[70][2] = "Ajax Control Toolkit";
 choices[70][3] = "Cached XML Data Mapper";
 answers[70] = 0;
 units[70] = ['63', '124'];
 blocks[70] = ['B2', 'B4'];
 comments[70] = "Id Pregunta: 7996. Examen TIC A2 2010";
 preguntaids[70] = 7996


//  Id pregunta: 8578 Año de creación de pregunta: 2013
 questions[71]= "72)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[71]= new Array();
 choices[71][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[71][1] = "Datos de alcance global y local";
 choices[71][2] = "Datos de alcance externo e interno";
 choices[71][3] = "No existe la arquitectura MMC";
 answers[71] = 1;
 units[71] = ['49'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8578. ";
 preguntaids[71] = 8578


//  Id pregunta: 7327 Año de creación de pregunta: 2010
 questions[72]= "73)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[72]= new Array();
 choices[72][0] = "Gesti&oacute;n de Requisitos y gestion cuantitativa";
 choices[72][1] = "Gestion de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[72][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[72][3] = "Gesti&oacute;n Integrada del Software y Revision entre pares";
 answers[72] = 3;
 units[72] = ['92'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 7327. ";
 preguntaids[72] = 7327


//  Id pregunta: 2794 Año de creación de pregunta: 2002
 questions[73]= "74)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[73]= new Array();
 choices[73][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[73][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[73][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[73][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[73] = 0;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2794. ";
 preguntaids[73] = 2794


//  Id pregunta: 1895 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[74]= new Array();
 choices[74][0] = "EI modelo EFQM de Excelencia punt&uacute;a m&aacute;s los procesos que las pol&iacute;ticas y estrategias";
 choices[74][1] = "En el modelo EFQM de Excelencia, en el apartado de los resultados, solo se tiene en cuenta los beneficios empresariales";
 choices[74][2] = "Uno de los ocho principios en que se basan las normas de la familia ISO 9000:2000 es &quot;el enfoque basado en procesos&rdquo;";
 choices[74][3] = "La ISO 9004:2000 no establece los requisitos que debe cumplir un sistema de calidad de certificaci&oacute;n.";
 answers[74] = 1;
 units[74] = ['98'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 1895. ";
 preguntaids[74] = 1895


