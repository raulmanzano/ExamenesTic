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
//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[0]= "1)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[0]= new Array();
 choices[0][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[0][1] = "Uno de sus miembros.";
 choices[0][2] = "La Comisi&oacute;n.";
 choices[0][3] = "Todas las respuestas son correctas.";
 answers[0] = 3;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 170. Uni&oacute;n Europea";
 preguntaids[0] = 170


//  Id pregunta: 6122 Año de creación de pregunta: 2003
 questions[1]= "2)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[1]= new Array();
 choices[1][0] = "Nivel 2";
 choices[1][1] = "Nivel 3";
 choices[1][2] = "Nivel 4";
 choices[1][3] = "Nivel 5";
 answers[1] = 1;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 6122. Examen TIC A1 MAP 2007";
 preguntaids[1] = 6122


//  Id pregunta: 6414 Año de creación de pregunta: 2003
 questions[2]= "3)  &iquest;Cu&aacute;l es una de las diferencias entre ROLAP y MOLAP?";
 choices[2]= new Array();
 choices[2][0] = "El grado de interactividad.";
 choices[2][1] = "El preprocesado de los datos desde las bases de datos relacionales a la base de datos multidimensional.";
 choices[2][2] = "El soporte de sistemas para la toma de decisiones.";
 choices[2][3] = "La presentaci&oacute;n de vistas de los datos sobre un n&uacute;mero de dimensiones.";
 answers[2] = 1;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6414. ";
 preguntaids[2] = 6414


//  Id pregunta: 7750 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)?";
 choices[3]= new Array();
 choices[3][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica.";
 choices[3][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido.";
 choices[3][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado.";
 choices[3][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet.";
 answers[3] = 3;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7750. ";
 preguntaids[3] = 7750


//  Id pregunta: 4313 Año de creación de pregunta: 2004
 questions[4]= "5)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[4]= new Array();
 choices[4][0] = "Agencia estatal de radiocomunicaciones";
 choices[4][1] = "Ministerio  de Energia, Turismo y Agenda Digital";
 choices[4][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[4][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[4] = 1;
 units[4] = ['121'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4313. Similar a examen TIC MAP A 2004.";
 preguntaids[4] = 4313


//  Id pregunta: 1477 Año de creación de pregunta: 2016
 questions[5]= "6)  La metodolog&iacute;a M&eacute;trica V3 posee una serie de interfaces. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[5]= new Array();
 choices[5][0] = "Aseguramiento de la Calidad.";
 choices[5][1] = "Seguridad.";
 choices[5][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[5][3] = "Gesti&oacute;n del Mantenimiento.";
 answers[5] = 3;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1477. ";
 preguntaids[5] = 1477


//  Id pregunta: 4769 Año de creación de pregunta: 2002
 questions[6]= "7)  El topolog&iacute;a denominada FDDI (Fiber Distributed Data Interface) utiliza un m&eacute;todo de acceso al medio:";
 choices[6]= new Array();
 choices[6][0] = "Tipo CSMA/CD: se emite en cualquier momento y se detectan las colisiones";
 choices[6][1] = "Tipo  &lsquo;paso de testigo&rsquo; (Token Passing): es necesario la posesi&oacute;n del testigo para emitir";
 choices[6][2] = "Tipo TDM (multiplexaci&oacute;n por divisi&oacute;n en el tiempo): se asignan diferentes slots de tiempo a cada estaci&oacute;n";
 choices[6][3] = "Tipo FDM: la frecuencia de luz emitida por cada estaci&oacute;n es diferente con lo que no hay colisiones";
 answers[6] = 1;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4769. ";
 preguntaids[6] = 4769


//  Id pregunta: 8181 Año de creación de pregunta: 2011
 questions[7]= "8)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[7]= new Array();
 choices[7][0] = "Listado de todos los equipos";
 choices[7][1] = "Listado de software usado en cada equipo.";
 choices[7][2] = "Esquema de la red.";
 choices[7][3] = "Todos son necesarios.";
 answers[7] = 3;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8181. Examen TIC A2 2010 interna";
 preguntaids[7] = 8181


//  Id pregunta: 6929 Año de creación de pregunta: 2010
 questions[8]= "9)  Dentro de una soluci&oacute;n e-learning, d&oacute;nde se encuadrar&iacute;a un sistema LMS:";
 choices[8]= new Array();
 choices[8][0] = "Plataforma de formaci&oacute;n.";
 choices[8][1] = "Contenidos de formaci&oacute;n.";
 choices[8][2] = "Herramientas de comunicaci&oacute;n.";
 choices[8][3] = "Ninguna de las anteriores.";
 answers[8] = 0;
 units[8] = ['70'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6929. ";
 preguntaids[8] = 6929


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[9]= "10)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[9]= new Array();
 choices[9][0] = "Ejecutivo";
 choices[9][1] = "Limitativo";
 choices[9][2] = "Estimativo";
 choices[9][3] = "Progresivo";
 answers[9] = 2;
 units[9] = ['11'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 264. Presupuestos generales";
 preguntaids[9] = 264


//  Id pregunta: 955 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[10]= new Array();
 choices[10][0] = "De 1 a  4";
 choices[10][1] = "De 3 a  7";
 choices[10][2] = "De 5 a  9";
 choices[10][3] = "De 7 a 11";
 answers[10] = 2;
 units[10] = ['34', '84'];
 blocks[10] = ['B1', 'B3'];
 comments[10] = "Id Pregunta: 955. Metodologias &aacute;giles";
 preguntaids[10] = 955


//  Id pregunta: 1854 Año de creación de pregunta: 2016
 questions[11]= "12)  En la arquitectura de Linux, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[11]= new Array();
 choices[11][0] = "La capa de programas y utilidades trabaja en modo usuario.";
 choices[11][1] = "La biblioteca est&aacute;ndar se sit&uacute;a por encima de la capa de kernel y trabaja en modo kernel.";
 choices[11][2] = "La biblioteca est&aacute;ndar accede a la capa de kernel mediante la interfaz de llamadas al sistema.";
 choices[11][3] = "El kernel se sit&uacute;a por encima de la capa del hardware.";
 answers[11] = 1;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1854. ";
 preguntaids[11] = 1854


//  Id pregunta: 6771 Año de creación de pregunta: 2009
 questions[12]= "13)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Red SARA?";
 choices[12]= new Array();
 choices[12][0] = "Fiabilidad, porque dispone de un Centro de Soporte 24 x 7";
 choices[12][1] = "Seguridad, fundamentalmente por el establecimiento de VPNs";
 choices[12][2] = "Calidad de Servicio (QoS) (porque se basa en tecnolog&iacute;a VPLS)";
 choices[12][3] = "Flexibilidad, proporcionada por una pol&iacute;tica de gesti&oacute;n descentralizada";
 answers[12] = 3;
 units[12] = ['47'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 6771. ";
 preguntaids[12] = 6771


//  Id pregunta: 978 Año de creación de pregunta: 2016
 questions[13]= "14)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento por parte de los organos jerarquicamente dependientes de las instrucciones u &oacute;rdenes de servicio de los organos administrativos de acuerdo a la ley 40/2015:";
 choices[13]= new Array();
 choices[13][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[13][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[13][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[13][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[13] = 0;
 units[13] = ['4', '7', '8', '9'];
 blocks[13] = ['A1', 'A2'];
 comments[13] = "Id Pregunta: 978. Ley 40/2015";
 preguntaids[13] = 978


//  Id pregunta: 1673 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, la realizaci&oacute;n de una auditor&iacute;a interna o externa que verifique el cumplimiento del reglamento es una medida de seguridad de:";
 choices[14]= new Array();
 choices[14][0] = "Nivel bajo para ficheros y tratamientos automatizados y nivel medio para ficheros y tratamientos no automatizados.";
 choices[14][1] = "Nivel medio para ficheros y tratamientos automatizados y nivel medio para ficheros y tratamientos no automatizados.";
 choices[14][2] = "Nivel bajo para ficheros y tratamientos automatizados y no est&aacute; contemplado para ficheros y tratamientos no automatizados.";
 choices[14][3] = "Nivel medio para ficheros y tratamientos automatizados y no est&aacute; contemplada para ficheros y tratamientos no automatizados.";
 answers[14] = 1;
 units[14] = ['35'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 1673. ";
 preguntaids[14] = 1673


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Estimaci&oacute;n del riesgo";
 choices[15][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[15][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[15][3] = "Mapa de riesgos";
 answers[15] = 3;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 608. AGE A1 2015";
 preguntaids[15] = 608


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[16]= "17)  En la realizaci&oacute;n de DFDs:";
 choices[16]= new Array();
 choices[16][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[16][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[16][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[16][3] = "Todas las respuestas anteriores son correctas";
 answers[16] = 3;
 units[16] = ['85', '86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3821. ";
 preguntaids[16] = 3821


//  Id pregunta: 9404 Año de creación de pregunta: 2014
 questions[17]= "18)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[17]= new Array();
 choices[17][0] = "Entorno de desarrollo";
 choices[17][1] = "Modelado de negocio";
 choices[17][2] = "Pruebas";
 choices[17][3] = "Despliegue";
 answers[17] = 0;
 units[17] = ['82'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 9404. ";
 preguntaids[17] = 9404


//  Id pregunta: 9195 Año de creación de pregunta: 2014
 questions[18]= "19)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[18]= new Array();
 choices[18][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[18][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[18][2] = "El protocolo AH proporciona confidencialidad.";
 choices[18][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[18] = 2;
 units[18] = ['119'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9195. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[18] = 9195


//  Id pregunta: 2293 Año de creación de pregunta: 2002
 questions[19]= "20)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[19]= new Array();
 choices[19][0] = "12 meses";
 choices[19][1] = "6 meses";
 choices[19][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[19][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[19] = 3;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2293. ";
 preguntaids[19] = 2293


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[20]= "21)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[20]= new Array();
 choices[20][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[20][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[20][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[20][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[20] = 3;
 units[20] = ['14'];
 blocks[20] = ['A3'];
 comments[20] = "Id Pregunta: 388. Pol&iacute;ticas de igualdad";
 preguntaids[20] = 388


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[21]= new Array();
 choices[21][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[21][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[21][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[21][3] = "El Senado se compone de 350 senadores.";
 answers[21] = 0;
 units[21] = ['1'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 39. Constituci&oacute;n de 1978";
 preguntaids[21] = 39


//  Id pregunta: 7318 Año de creación de pregunta: 2010
 questions[22]= "23)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[22]= new Array();
 choices[22][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[22][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[22][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[22][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[22] = 2;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 7318. ";
 preguntaids[22] = 7318


//  Id pregunta: 5209 Año de creación de pregunta: 2006
 questions[23]= "24)  Respecto a los protocolos de routing:";
 choices[23]= new Array();
 choices[23][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[23][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[23][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[23][3] = "Todas son falsas";
 answers[23] = 0;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5209. ";
 preguntaids[23] = 5209


//  Id pregunta: 5728 Año de creación de pregunta: 2007
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes aspectos NO son tratados en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?:";
 choices[24]= new Array();
 choices[24][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[24][1] = "promueve la elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[24][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a la informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[24][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[24] = 0;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 5728. ";
 preguntaids[24] = 5728


//  Id pregunta: 8065 Año de creación de pregunta: 2011
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[25]= new Array();
 choices[25][0] = "Medidas de protecci&oacute;n";
 choices[25][1] = "Marco organizativo";
 choices[25][2] = "Marco operacional";
 choices[25][3] = "Marco tecnol&oacute;gico";
 answers[25] = 3;
 units[25] = ['46'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 8065. ";
 preguntaids[25] = 8065


//  Id pregunta: 9174 Año de creación de pregunta: 2014
 questions[26]= "27)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[26]= new Array();
 choices[26][0] = "5 a&ntilde;os.";
 choices[26][1] = "10 a&ntilde;os.";
 choices[26][2] = "Permanentemente.";
 choices[26][3] = "15 a&ntilde;os.";
 answers[26] = 3;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9174. Examen TIC A2 2013";
 preguntaids[26] = 9174


//  Id pregunta: 5757 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;En cual de las siguientes fases del modelo de ciclo de vida de un proyecto de tecnolog&iacute;as de Ia informaci&oacute;n se asignan los recursos materiales para cada una de las funciones?";
 choices[27]= new Array();
 choices[27][0] = "fase de definici&oacute;n";
 choices[27][1] = "fase de dise&ntilde;o";
 choices[27][2] = "fase de construccion";
 choices[27][3] = "fase de operaci&oacute;n";
 answers[27] = 1;
 units[27] = ['82'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 5757. ";
 preguntaids[27] = 5757


//  Id pregunta: 5993 Año de creación de pregunta: 2007
 questions[28]= "29)  Cuando, a causa de su especificidad t&eacute;cnica, el suministro de un producto o la prestaci&oacute;n de un servicio s&oacute;lo pueda encomendarse a un &uacute;nico proveedor, el procedimiento de adjudicaci&oacute;n del contrato ser&aacute;:";
 choices[28]= new Array();
 choices[28][0] = "Negociado";
 choices[28][1] = "Restringido";
 choices[28][2] = "Directo";
 choices[28][3] = "Por subasta";
 answers[28] = 0;
 units[28] = ['37'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 5993. ";
 preguntaids[28] = 5993


//  Id pregunta: 1801 Año de creación de pregunta: 2016
 questions[29]= "30)  Existen diferentes tipos de relaciones para un sistema de gesti&oacute;n de bases de datos relacional. Indique cu&aacute;l es la opci&oacute;n correcta que define a las del tipo instant&aacute;neas.";
 choices[29]= new Array();
 choices[29][0] = "Son relaciones con nombre y derivadas. Son reales: est&aacute;n representadas no s&oacute;lo por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre, sino tambi&eacute;n por sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[29][1] = "Son relaciones con nombre y derivadas. Son virtuales: est&aacute;n representadas por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre y no poseen sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[29][2] = "Son relaciones sin nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 choices[29][3] = "Son relaciones que pueden o no tener nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 answers[29] = 0;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1801. ";
 preguntaids[29] = 1801


//  Id pregunta: 8170 Año de creación de pregunta: 2011
 questions[30]= "31)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[30]= new Array();
 choices[30][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[30][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[30][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[30][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[30] = 0;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8170. Examen TIC A2 2010 interna";
 preguntaids[30] = 8170


//  Id pregunta: 6095 Año de creación de pregunta: 2003
 questions[31]= "32)  La norma ISO 27002 recoge:";
 choices[31]= new Array();
 choices[31][0] = "Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n";
 choices[31][1] = "La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI)";
 choices[31][2] = "Normativa aplicable para el desarrollo de aplicaciones militares";
 choices[31][3] = "Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar)";
 answers[31] = 0;
 units[31] = ['45'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6095. Examen TIC A1 MAP 2007";
 preguntaids[31] = 6095


//  Id pregunta: 5524 Año de creación de pregunta: 2015
 questions[32]= "33)  JDBC es:";
 choices[32]= new Array();
 choices[32][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[32][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[32][2] = "Una API que permite la ejecuci&oacute;n de operaciones sobre una base de datos mediante lenguaje Java.";
 choices[32][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[32] = 2;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5524. La A no es, porque podr&iacute;a no usar ODBC intermedio.";
 preguntaids[32] = 5524


//  Id pregunta: 1455 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la LOPD. &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca del documento de seguridad?";
 choices[33]= new Array();
 choices[33][0] = "El responsable de los ficheros con datos personales, elaborar&aacute; un &uacute;nico documento de seguridad que cubra todos los ficheros de los que es responsable.";
 choices[33][1] = "Entre los aspectos optativos a incluir dentro del documento se encuentra la descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan.";
 choices[33][2] = "Deber&aacute; incluir siempre las medidas que es necesario adoptar para el transporte de soportes y documentos.";
 choices[33][3] = "Ser&aacute; obligatorio incluir en todo caso la identificaci&oacute;n del responsable o responsables de seguridad.";
 answers[33] = 2;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 1455. ";
 preguntaids[33] = 1455


//  Id pregunta: 1571 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, se&ntilde;ale cu&aacute;les se consideran datos especialmente protegidos:";
 choices[34]= new Array();
 choices[34][0] = "El n&uacute;mero de matr&iacute;cula de un veh&iacute;culo";
 choices[34][1] = "La fecha de nacimiento";
 choices[34][2] = "La afiliaci&oacute;n sindical";
 choices[34][3] = "El n&uacute;mero de tel&eacute;fono";
 answers[34] = 2;
 units[34] = ['35'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 1571. ";
 preguntaids[34] = 1571


//  Id pregunta: 9734 Año de creación de pregunta: 2014
 questions[35]= "36)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[35]= new Array();
 choices[35][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[35][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[35][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[35][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[35] = 2;
 units[35] = ['121'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9734. ";
 preguntaids[35] = 9734


//  Id pregunta: 7246 Año de creación de pregunta: 2010
 questions[36]= "37)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[36]= new Array();
 choices[36][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[36][1] = "MAC usa un sistema de etiquetado";
 choices[36][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[36][3] = "Todas las respuestas anteriores son correctas";
 answers[36] = 3;
 units[36] = ['119'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 7246. ";
 preguntaids[36] = 7246


//  Id pregunta: 977 Año de creación de pregunta: 2016
 questions[37]= "38)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[37]= new Array();
 choices[37][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[37][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[37][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[37][3] = "todas son correctas";
 answers[37] = 3;
 units[37] = ['4', '7', '8', '9'];
 blocks[37] = ['A1', 'A2'];
 comments[37] = "Id Pregunta: 977. Ley 40/2015";
 preguntaids[37] = 977


//  Id pregunta: 6163 Año de creación de pregunta: 2003
 questions[38]= "39)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[38]= new Array();
 choices[38][0] = "Zona privada";
 choices[38][1] = "Zona de control";
 choices[38][2] = "Zona de seguridad";
 choices[38][3] = "Zona p&uacute;blica";
 answers[38] = 1;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6163. ";
 preguntaids[38] = 6163


//  Id pregunta: 6881 Año de creación de pregunta: 2010
 questions[39]= "40)  La planificaci&oacute;n de las redes radioel&eacute;ctricas:";
 choices[39]= new Array();
 choices[39][0] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n a la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[39][1] = "La realiza cada operador, si bien debe presentarla para su aprobaci&oacute;n al Ayuntamiento correspondiente.";
 choices[39][2] = "La realiza la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de no causar interferencias entre diferentes servicios.";
 choices[39][3] = "Se realiza en comisi&oacute;n paritaria entre el operador y la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n con objeto de evitar interferencias entre diferentes servicios.";
 answers[39] = 0;
 units[39] = ['121'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 6881. TIC A 2009";
 preguntaids[39] = 6881


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[40]= new Array();
 choices[40][0] = "Publicidad.";
 choices[40][1] = "Constituci&oacute;n.";
 choices[40][2] = "Legalidad.";
 choices[40][3] = "Creaci&oacute;n.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[40] = 42


//  Id pregunta: 4898 Año de creación de pregunta: 2002
 questions[41]= "42)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[41]= new Array();
 choices[41][0] = "11 Mbps";
 choices[41][1] = "11 MBps";
 choices[41][2] = "54 Mbps";
 choices[41][3] = "54 MBps";
 answers[41] = 2;
 units[41] = ['108', '112'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4898. ";
 preguntaids[41] = 4898


//  Id pregunta: 5247 Año de creación de pregunta: 2006
 questions[42]= "43)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[42]= new Array();
 choices[42][0] = "El primer puerto libre del firewall";
 choices[42][1] = "El puerto 80";
 choices[42][2] = "El primer puerto libre desde el 80";
 choices[42][3] = "No es necesario abrir puerto alguno";
 answers[42] = 1;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5247. ";
 preguntaids[42] = 5247


//  Id pregunta: 1443 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de los siguientes datos sensibles NO est&aacute; especialmente protegido por la LOPD en su art&iacute;culo 7:";
 choices[43]= new Array();
 choices[43][0] = "De salud.";
 choices[43][1] = "Administrativos.";
 choices[43][2] = "De religi&oacute;n.";
 choices[43][3] = "De origen racial.";
 answers[43] = 1;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 1443. ";
 preguntaids[43] = 1443


//  Id pregunta: 6350 Año de creación de pregunta: 2003
 questions[44]= "45)  Las celdas ATM";
 choices[44]= new Array();
 choices[44][0] = "Tienen un tama&ntilde;o fijo de 53 Bytes";
 choices[44][1] = "Tienen un tama&ntilde;o variable m&aacute;ximo de 53 Bytes";
 choices[44][2] = "Tienen un tama&ntilde;o fijo de 48 Bytes";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 0;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6350. ";
 preguntaids[44] = 6350


//  Id pregunta: 6520 Año de creación de pregunta: 2003
 questions[45]= "46)  Indique cu&aacute;l de estos productos no forman parte de los que proporcionan seguridad en el correo electr&oacute;nico";
 choices[45]= new Array();
 choices[45][0] = "PGP";
 choices[45][1] = "PEM";
 choices[45][2] = "MOSS";
 choices[45][3] = "Single MIME";
 answers[45] = 3;
 units[45] = ['119'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6520. ";
 preguntaids[45] = 6520


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[46]= new Array();
 choices[46][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[46][1] = "El Gobierno.";
 choices[46][2] = "El Presidente del Gobierno.";
 choices[46][3] = "El Consejo de Ministros.";
 answers[46] = 1;
 units[46] = ['11'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 306. Presupuestos generales";
 preguntaids[46] = 306


//  Id pregunta: 6857 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[47]= new Array();
 choices[47][0] = "XML, SOAP y WSDL";
 choices[47][1] = "XML, SOAP y UDDI";
 choices[47][2] = "XML, WSDL y UDDI";
 choices[47][3] = "SOAP, WSDL y UDDI";
 answers[47] = 0;
 units[47] = ['55', '74'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 6857. ";
 preguntaids[47] = 6857


//  Id pregunta: 9890 Año de creación de pregunta: 2015
 questions[48]= "49)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[48]= new Array();
 choices[48][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[48][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[48][2] = "Ambas";
 choices[48][3] = "Ninguna de las anteriores.";
 answers[48] = 0;
 units[48] = ['7', '19'];
 blocks[48] = ['A2', 'A4'];
 comments[48] = "Id Pregunta: 9890. ";
 preguntaids[48] = 9890


//  Id pregunta: 5234 Año de creación de pregunta: 2006
 questions[49]= "50)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T que designa a la tecnolog&iacute;a HDSL?";
 choices[49]= new Array();
 choices[49][0] = "G 992.1";
 choices[49][1] = "G 991.2";
 choices[49][2] = "G 992.2";
 choices[49][3] = "G 991.1";
 answers[49] = 3;
 units[49] = ['108'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5234. ";
 preguntaids[49] = 5234


//  Id pregunta: 8269 Año de creación de pregunta: 2011
 questions[50]= "51)  Dentro del contexto que marca la Ley 39/2015, un expediente electr&oacute;nico es:";
 choices[50]= new Array();
 choices[50][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[50][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[50][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de informaci&oacute;n que contengan";
 choices[50][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[50] = 2;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 8269. Examen TIC A2 2010 interna";
 preguntaids[50] = 8269


//  Id pregunta: 10465 Año de creación de pregunta: 2015
 questions[51]= "52)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[51]= new Array();
 choices[51][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[51][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[51][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[51][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[51] = 1;
 units[51] = ['101'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10465. ";
 preguntaids[51] = 10465


//  Id pregunta: 10461 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[52]= new Array();
 choices[52][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[52][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[52][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[52][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[52] = 1;
 units[52] = ['101'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 10461. ";
 preguntaids[52] = 10461


//  Id pregunta: 9288 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[53]= new Array();
 choices[53][0] = "Cuestionarios";
 choices[53][1] = "Casos de uso.";
 choices[53][2] = "Matriz de trazabilidad de requisitos.";
 choices[53][3] = "Prototipos";
 answers[53] = 2;
 units[53] = ['84'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9288. Examen TIC A2 2013. Promocion interna";
 preguntaids[53] = 9288


//  Id pregunta: 10963 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Qu&eacute; consecuencias tiene la declaraci&oacute;n judicial de existencia de cesi&oacute;n ilegal de trabajadores, en caso de que un trabajador de una empresa externa demande judicialmente y obtenga un pronunciamiento en tal sentido?";
 choices[54]= new Array();
 choices[54][0] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores produce autom&aacute;ticamente la incorporaci&oacute;n del trabajador demandante a la plantilla de la Administraci&oacute;n, como trabajador fijo, manteniendo las condiciones laborales que ten&iacute;a reconocida con la empresa contratista";
 choices[54][1] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores no produce efectos sobre la relaci&oacute;n laboral entre el trabajador que demande y la empresa contratista, sin perjuicio de las responsabilidades disciplinarias y en su caso penales del funcionario responsable de la irregularidad";
 choices[54][2] = "El trabajador podr&aacute; optar por incorporarse a la plantilla de la Administraci&oacute;n, como trabajador indefinido no fijo, y podr&aacute;n derivarse responsabilidades disciplinarias y penales contra el funcionario responsable de la irregularidad, entre otras posibles consecuencias";
 choices[54][3] = "El trabajador continuar&aacute; prestando servicios en la empresa contratista, si bien tendr&aacute; las mismas condiciones, econ&oacute;micas y de horario, mientras dure la contrata con la Administraci&oacute;n, que el funcionario responsable del servicio externalizado";
 answers[54] = 2;
 units[54] = ['37'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 10963. ";
 preguntaids[54] = 10963


//  Id pregunta: 10551 Año de creación de pregunta: 2015
 questions[55]= "56)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[55]= new Array();
 choices[55][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[55][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[55][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[55][3] = "Analizar inversiones en servicios";
 answers[55] = 1;
 units[55] = ['101'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10551. ";
 preguntaids[55] = 10551


//  Id pregunta: 5218 Año de creación de pregunta: 2006
 questions[56]= "57)  &iquest;C&oacute;mo se denomina a la configuraci&oacute;n de una red de cable en la que la fibra llega hasta los derivadores (&quot;taps&quot;)?";
 choices[56]= new Array();
 choices[56][0] = "Fiber to the bridger";
 choices[56][1] = "Fiber to the curb";
 choices[56][2] = "Fiber to the home";
 choices[56][3] = "Fiber to the last amplifier";
 answers[56] = 1;
 units[56] = ['115'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5218. ";
 preguntaids[56] = 5218


//  Id pregunta: 1804 Año de creación de pregunta: 2016
 questions[57]= "58)  El an&aacute;lisis multidimensional se fundamenta en modelar la informaci&oacute;n en dimensiones, hechos y medidas. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[57]= new Array();
 choices[57][0] = "Las dimensiones corresponden a un conjunto de elementos con caracter&iacute;sticas comunes que responden a una pregunta de negocio. Representan diferentes perspectivas de an&aacute;lisis.";
 choices[57][1] = "Los hechos identifican los valores de las medidas de negocio para una combinaci&oacute;n concreta de dimensiones.";
 choices[57][2] = "Se entiende por granularidad de la informaci&oacute;n almacenada en una tabla de hechos, el nivel de detalle de dichos datos.";
 choices[57][3] = "Las dimensiones se organizan en jerarqu&iacute;as. Cada dimensi&oacute;n est&aacute; en una &uacute;nica jerarqu&iacute;a.";
 answers[57] = 3;
 units[57] = ['72'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1804. ";
 preguntaids[57] = 1804


//  Id pregunta: 7934 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[58]= new Array();
 choices[58][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite.";
 choices[58][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[58][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto.";
 choices[58][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[58] = 0;
 units[58] = ['47'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 7934. Examen TIC A2 2010";
 preguntaids[58] = 7934


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[59]= "60)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[59]= new Array();
 choices[59][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[59][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[59][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[59][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[59] = 2;
 units[59] = ['45'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[59] = 611


//  Id pregunta: 8221 Año de creación de pregunta: 2011
 questions[60]= "61)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[60]= new Array();
 choices[60][0] = "Pruebas globales.";
 choices[60][1] = "Pruebas Integradas.";
 choices[60][2] = "Pruebas funcionales.";
 choices[60][3] = "Pruebas unitarias.";
 answers[60] = 2;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 8221. Examen TIC A2 2010 interna";
 preguntaids[60] = 8221


//  Id pregunta: 1057 Año de creación de pregunta: 2016
 questions[61]= "62)  El Texto Refundido de la Ley de la Protecci&oacute;n Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[61]= new Array();
 choices[61][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[61][1] = "50 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[61][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[61][3] = "50 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la personalidad del autor.";
 answers[61] = 2;
 units[61] = ['41'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 1057. ";
 preguntaids[61] = 1057


//  Id pregunta: 3288 Año de creación de pregunta: 2003
 questions[62]= "63)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[62]= new Array();
 choices[62][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad";
 choices[62][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[62][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[62][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[62] = 0;
 units[62] = ['67'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3288. ";
 preguntaids[62] = 3288


//  Id pregunta: 3079 Año de creación de pregunta: 2002
 questions[63]= "64)  Un proveedor de servicios OLE DB es:";
 choices[63]= new Array();
 choices[63][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[63][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[63][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[63][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[63] = 0;
 units[63] = ['63'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3079. ";
 preguntaids[63] = 3079


//  Id pregunta: 981 Año de creación de pregunta: 2016
 questions[64]= "65)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n segun la ley 40/2015 a:";
 choices[64]= new Array();
 choices[64][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[64][1] = "el Consejo de Estado";
 choices[64][2] = "el Congreso";
 choices[64][3] = "las Cortes Generales";
 answers[64] = 0;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 981. Ley 40/2015";
 preguntaids[64] = 981


//  Id pregunta: 8486 Año de creación de pregunta: 2011
 questions[65]= "66)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[65]= new Array();
 choices[65][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[65][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[65][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[65][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[65] = 0;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 8486. ";
 preguntaids[65] = 8486


//  Id pregunta: 2497 Año de creación de pregunta: 2004
 questions[66]= "67)  En relaci&oacute;n a la definici&oacute;n y caracter&iacute;sticas de una base de datos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[66]= new Array();
 choices[66][0] = "En una base de datos se admite la redundancia controlada";
 choices[66][1] = "En una base de datos no debe darse la redundancia l&oacute;gica";
 choices[66][2] = "En una base de datos puede existir la redundancia f&iacute;sica";
 choices[66][3] = "En una base de datos puede admitirse la redundancia l&oacute;gica pero no f&iacute;sica";
 answers[66] = 3;
 units[66] = ['60'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2497. Examen TIC MAP B 2004";
 preguntaids[66] = 2497


//  Id pregunta: 3868 Año de creación de pregunta: 2002
 questions[67]= "68)  La documentaci&oacute;n en el modelo en cascada:";
 choices[67]= new Array();
 choices[67][0] = "Rige la aplicaci&oacute;n del modelo";
 choices[67][1] = "Contempla todos los productos de las fases; informes, programas, pruebas";
 choices[67][2] = "Determina la finalizaci&oacute;n de una etapa y el paso a la siguiente";
 choices[67][3] = "Todas las respuestas anteriores son ciertas";
 answers[67] = 3;
 units[67] = ['82'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3868. ";
 preguntaids[67] = 3868


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[68]= "69)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[68]= new Array();
 choices[68][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[68][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[68][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[68][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[68] = 0;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[68] = 254


//  Id pregunta: 6415 Año de creación de pregunta: 2003
 questions[69]= "70)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[69]= new Array();
 choices[69][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[69][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[69][2] = "Se basa en JavaScript y XML";
 choices[69][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[69] = 1;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6415. ";
 preguntaids[69] = 6415


//  Id pregunta: 1533 Año de creación de pregunta: 2016
 questions[70]= "71)  Los certificados de identidad p&uacute;blica que est&aacute;n contenidos en el DNI electr&oacute;nico pueden ser revocados por:";
 choices[70]= new Array();
 choices[70][0] = "Compromiso de la clave p&uacute;blica de la Autoridad de Certificaci&oacute;n de la Direcci&oacute;n General de la Polic&iacute;a.";
 choices[70][1] = "Declaraci&oacute;n de que el ciudadano no tiene capacidad de firma (pr&oacute;digo).";
 choices[70][2] = "Tras la renovaci&oacute;n en todos los casos.";
 choices[70][3] = "Compromiso de la clave p&uacute;blica del ciudadano,";
 answers[70] = 1;
 units[70] = ['78'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1533. ";
 preguntaids[70] = 1533


//  Id pregunta: 1352 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cual de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[71]= new Array();
 choices[71][0] = "Joost";
 choices[71][1] = "Netflix";
 choices[71][2] = "Cassandra";
 choices[71][3] = "Hadoop";
 answers[71] = 3;
 units[71] = ['73'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1352. ";
 preguntaids[71] = 1352


//  Id pregunta: 1029 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[72]= new Array();
 choices[72][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[72][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[72][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[72][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[72] = 0;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 1029. Ley 40/2015";
 preguntaids[72] = 1029


//  Id pregunta: 984 Año de creación de pregunta: 2016
 questions[73]= "74)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[73]= new Array();
 choices[73][0] = "los Subsecretarios y los Secretarios generales";
 choices[73][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[73][2] = "los Secretarios de Estado y los Directores generales";
 choices[73][3] = "los Ministros y los Secretarios de Estado";
 answers[73] = 3;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 984. Ley 40/2015";
 preguntaids[73] = 984


//  Id pregunta: 2057 Año de creación de pregunta: 2002
 questions[74]= "75)  A efectos de la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el:";
 choices[74]= new Array();
 choices[74][0] = "Encargado del tratamiento";
 choices[74][1] = "Afectado o interesado";
 choices[74][2] = "Responsable del fichero o tratamiento";
 choices[74][3] = "Decisor del tratamiento";
 answers[74] = 2;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2057. ";
 preguntaids[74] = 2057


