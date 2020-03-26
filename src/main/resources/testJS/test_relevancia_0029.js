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
//  Id pregunta: 10880 Año de creación de pregunta: 2015
 questions[0]= "1)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[0]= new Array();
 choices[0][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[0][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[0][2] = "Traduce una direccion local interna en una global interna";
 choices[0][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[0] = 1;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10880. ";
 preguntaids[0] = 10880


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[1]= "2)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[1]= new Array();
 choices[1][0] = "En sentencias switch para alterar el control de flujo.";
 choices[1][1] = "Para manejar excepciones.";
 choices[1][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[1][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[1] = 1;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 718. Junta de Extremadura A1 2015";
 preguntaids[1] = 718


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[2][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[2][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[2][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[2] = 3;
 units[2] = ['11'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 321. Presupuestos generales";
 preguntaids[2] = 321


//  Id pregunta: 3953 Año de creación de pregunta: 2002
 questions[3]= "4)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[3]= new Array();
 choices[3][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[3][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[3][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[3][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[3] = 2;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 3953. ";
 preguntaids[3] = 3953


//  Id pregunta: 7011 Año de creación de pregunta: 2010
 questions[4]= "5)  El c&oacute;digo &eacute;tico definido por ISACA resultar&aacute; de aplicaci&oacute;n a:";
 choices[4]= new Array();
 choices[4][0] = "Solamente a las personas certificadas como CISA y CISM.";
 choices[4][1] = "A los profesionales certificados CISA y CISM y a los miembros de la ISACA.";
 choices[4][2] = "A los miembros de la ISACA, que obligatoriamente ser&aacute;n profesionales con las certificaciones CISA y CISM, en lo que se refiere a la aplicaci&oacute;n de las pr&aacute;cticas definidas dentro de COBIT.";
 choices[4][3] = "A todos los profesionales que trabajen realizando auditor&iacute;as de sistemas de informaci&oacute;n y que para ello empleen como referencia los manuales del COBIT.";
 answers[4] = 1;
 units[4] = ['36'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 7011. ";
 preguntaids[4] = 7011


//  Id pregunta: 7752 Año de creación de pregunta: 2010
 questions[5]= "6)  En el modelo COCOMO, la estimaci&oacute;n del esfuerzo anual b&aacute;sico para el mantenimiento de los sistemas de informaci&oacute;n, (MM)am, conocido el esfuerzo estimado de desarrollo, (MM)d, es:";
 choices[5]= new Array();
 choices[5][0] = "(MM)am = 1.8 (DSI) (MM)d.";
 choices[5][1] = "(MM)am = 2.0 (ADF) (MM)d.";
 choices[5][2] = "(MM)am = 3.2 (FSP) (MM)d.";
 choices[5][3] = "(MM)am = 1.0 (ACT) (MM)d.";
 answers[5] = 3;
 units[5] = ['94'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7752. ";
 preguntaids[5] = 7752


//  Id pregunta: 9892 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[6]= new Array();
 choices[6][0] = "La Administraci&oacute;n.";
 choices[6][1] = "El ciudadano en todo caso.";
 choices[6][2] = "Habitualmente el ciudadano.";
 choices[6][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[6] = 2;
 units[6] = ['7', '19'];
 blocks[6] = ['A2', 'A4'];
 comments[6] = "Id Pregunta: 9892. ";
 preguntaids[6] = 9892


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[7]= new Array();
 choices[7][0] = "Ley 3/2015";
 choices[7][1] = "Ley 6/2007";
 choices[7][2] = "Ley 5/1984";
 choices[7][3] = "Ley 5/2006";
 answers[7] = 0;
 units[7] = ['22'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 510. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[7] = 510


//  Id pregunta: 3871 Año de creación de pregunta: 2002
 questions[8]= "9)  La garant&iacute;a de que en un determinado software bajo prueba se han ejecutado todos los bucles en sus partes internas y condiciones de retorno, y se han ejecutado todas las decisiones l&oacute;gicas en sus variantes verdadera y falsa, corresponde a:";
 choices[8]= new Array();
 choices[8][0] = "Los tests estructurales";
 choices[8][1] = "Los tests funcionales";
 choices[8][2] = "Las revisiones t&eacute;cnicas formales";
 choices[8][3] = "Las revisiones de usuario";
 answers[8] = 0;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3871. ";
 preguntaids[8] = 3871


//  Id pregunta: 7525 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia en M&Eacute;TRICA versi&oacute;n 3?";
 choices[9]= new Array();
 choices[9][0] = "ISO/IEC TR 16.502/SPICE.";
 choices[9][1] = "ISO 12.207.";
 choices[9][2] = "IEEE 600.11990.";
 choices[9][3] = "UNE-EN-ISO 9001:2000.";
 answers[9] = 1;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7525. Map 2005";
 preguntaids[9] = 7525


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[10]= "11)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[10]= new Array();
 choices[10][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[10][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[10][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[10][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[10] = 2;
 units[10] = ['7', '47'];
 blocks[10] = ['A2', 'B1'];
 comments[10] = "Id Pregunta: 9782. ";
 preguntaids[10] = 9782


//  Id pregunta: 2238 Año de creación de pregunta: 2009
 questions[11]= "12)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[11]= new Array();
 choices[11][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[11][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[11][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[11][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[11] = 2;
 units[11] = ['35'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2238. ";
 preguntaids[11] = 2238


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[12][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[12][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[12][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[12] = 1;
 units[12] = ['14'];
 blocks[12] = ['A3'];
 comments[12] = "Id Pregunta: 1534. ";
 preguntaids[12] = 1534


//  Id pregunta: 6827 Año de creación de pregunta: 2010
 questions[13]= "14)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[13]= new Array();
 choices[13][0] = "Planificaci&oacute;n del alcance.";
 choices[13][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[13][2] = "Definici&oacute;n del alcance.";
 choices[13][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[13] = 3;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6827. TIC A 2009";
 preguntaids[13] = 6827


//  Id pregunta: 9968 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n escrita de los &oacute;rganos o entidades de derecho p&uacute;blico, firmada por su responsable, mediante la que se da publicidad que los sistemas a que se refieren cumplen con las exigencias del Esquema Nacional de Seguridad aprobado por Real Decreto 3/2010, de 8 de enero&quot;?";
 choices[14]= new Array();
 choices[14][0] = "Informe de auditor&iacute;a";
 choices[14][1] = "Declaraci&oacute;n de conformidad";
 choices[14][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[14][3] = "Formalizaci&oacute;n de la conformidad";
 answers[14] = 1;
 units[14] = ['46'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9968. ";
 preguntaids[14] = 9968


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; es el machine learning?";
 choices[15]= new Array();
 choices[15][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[15][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[15][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[15][3] = "Un paradigma en el desarrollo de mecanismos de control";
 answers[15] = 0;
 units[15] = ['73'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 755. Big Data y NoSQL";
 preguntaids[15] = 755


//  Id pregunta: 10412 Año de creación de pregunta: 2015
 questions[16]= "17)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[16]= new Array();
 choices[16][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[16][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[16][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[16][3] = "Todas son verdaderas.";
 answers[16] = 3;
 units[16] = ['64'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10412. ";
 preguntaids[16] = 10412


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[17]= "18)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[17]= new Array();
 choices[17][0] = "Permite que los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[17][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[17][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[17][3] = "Todas las anteriores son correctas.";
 answers[17] = 3;
 units[17] = ['47'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 637. Estado del Bienestar";
 preguntaids[17] = 637


//  Id pregunta: 1330 Año de creación de pregunta: 2016
 questions[18]= "19)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[18]= new Array();
 choices[18][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[18][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[18][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[18][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[18] = 0;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 1330. ";
 preguntaids[18] = 1330


//  Id pregunta: 10104 Año de creación de pregunta: 2015
 questions[19]= "20)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[19]= new Array();
 choices[19][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[19][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[19][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[19][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[19] = 3;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10104. Examen TIC A2 2014";
 preguntaids[19] = 10104


//  Id pregunta: 5590 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes clases de servicio es m&aacute;s adecuada en ATM para la transmisi&oacute;n de video comprimido en tiempo real?";
 choices[20]= new Array();
 choices[20][0] = "UBR";
 choices[20][1] = "VBR-NTR";
 choices[20][2] = "VBR-RT";
 choices[20][3] = "CBR";
 answers[20] = 2;
 units[20] = ['107'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5590. ";
 preguntaids[20] = 5590


//  Id pregunta: 10703 Año de creación de pregunta: 2015
 questions[21]= "22)  Indique la FALSA respecto al concepto MapReduce.";
 choices[21]= new Array();
 choices[21][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[21][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[21][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[21][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[21] = 2;
 units[21] = ['73'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10703. ";
 preguntaids[21] = 10703


//  Id pregunta: 3685 Año de creación de pregunta: 2002
 questions[22]= "23)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[22]= new Array();
 choices[22][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[22][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[22][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[22] = 3;
 units[22] = ['92'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3685. ";
 preguntaids[22] = 3685


//  Id pregunta: 7905 Año de creación de pregunta: 2011
 questions[23]= "24)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[23]= new Array();
 choices[23][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[23][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[23][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[23][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[23] = 0;
 units[23] = ['53'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7905. Examen TIC A1 2010";
 preguntaids[23] = 7905


//  Id pregunta: 6262 Año de creación de pregunta: 2003
 questions[24]= "25)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[24]= new Array();
 choices[24][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[24][1] = "Componentes de Software Reutilizables";
 choices[24][2] = "Modelado L&oacute;gico de Datos";
 choices[24][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[24] = 2;
 units[24] = ['90'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6262. ";
 preguntaids[24] = 6262


//  Id pregunta: 6273 Año de creación de pregunta: 2003
 questions[25]= "26)  En el modelo EFQM:";
 choices[25]= new Array();
 choices[25][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[25][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[25][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[25][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[25] = 1;
 units[25] = ['98'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6273. ";
 preguntaids[25] = 6273


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[26]= "27)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[26][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[26][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[26][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sistema Nacional de Salud.";
 answers[26] = 2;
 units[26] = ['47'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 635. Estado del Bienestar";
 preguntaids[26] = 635


//  Id pregunta: 7789 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[27]= new Array();
 choices[27][0] = "ln.";
 choices[27][1] = "mkdir.";
 choices[27][2] = "ls.";
 choices[27][3] = "mv.";
 answers[27] = 0;
 units[27] = ['57'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7789. ";
 preguntaids[27] = 7789


//  Id pregunta: 8304 Año de creación de pregunta: 2011
 questions[28]= "29)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root:";
 choices[28]= new Array();
 choices[28][0] = "who | grep root | wc -l";
 choices[28][1] = "who root | wc -l";
 choices[28][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[28][3] = "who &lt;grep -v root&gt;wc";
 answers[28] = 0;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8304. Examen UPM A2 2011";
 preguntaids[28] = 8304


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[29]= "30)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Discriminaci&oacute;n indirecta.";
 choices[29][1] = "Discriminaci&oacute;n directa.";
 choices[29][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[29][3] = "Discriminaci&oacute;n abusiva.";
 answers[29] = 0;
 units[29] = ['14'];
 blocks[29] = ['A3'];
 comments[29] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[29] = 374


//  Id pregunta: 4352 Año de creación de pregunta: 2004
 questions[30]= "31)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[30]= new Array();
 choices[30][0] = "El router de la red";
 choices[30][1] = "Toda la red";
 choices[30][2] = "El propio equipo";
 choices[30][3] = "Usualmente el servidor";
 answers[30] = 2;
 units[30] = ['109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4352. ";
 preguntaids[30] = 4352


//  Id pregunta: 10219 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[31]= new Array();
 choices[31][0] = "Navegable";
 choices[31][1] = "Legible y entendible";
 choices[31][2] = "Predecible";
 choices[31][3] = "Ayuda a la entrada de datos";
 answers[31] = 0;
 units[31] = ['42'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 10219. La pauta 'Navegable' pertenece al principio de Operabilidad";
 preguntaids[31] = 10219


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[32]= "33)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[32]= new Array();
 choices[32][0] = "Enero de 2015.";
 choices[32][1] = "Enero de 2016.";
 choices[32][2] = "Diciembre de 2016.";
 choices[32][3] = "Diciembre de 2015.";
 answers[32] = 0;
 units[32] = ['10'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[32] = 10125


//  Id pregunta: 10681 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[33]= new Array();
 choices[33][0] = "2 veces al a&ntilde;o";
 choices[33][1] = "Cada a&ntilde;o";
 choices[33][2] = "Cada 2 a&ntilde;os";
 choices[33][3] = "Cada 3 a&ntilde;os";
 answers[33] = 1;
 units[33] = ['44'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 10681. ";
 preguntaids[33] = 10681


//  Id pregunta: 6331 Año de creación de pregunta: 2003
 questions[34]= "35)  El RD 1720/2007 deroga ..";
 choices[34]= new Array();
 choices[34][0] = "RD 994/1999";
 choices[34][1] = "RD 263/1996";
 choices[34][2] = "RD 1332/1994";
 choices[34][3] = "a y c";
 answers[34] = 3;
 units[34] = ['29'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 6331. ";
 preguntaids[34] = 6331


//  Id pregunta: 10014 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[35]= new Array();
 choices[35][0] = "Denegaci&oacute;n de servicio.";
 choices[35][1] = "Hombre intermedio.";
 choices[35][2] = "Fuerza Bruta.";
 choices[35][3] = "Ingenier&iacute;a social.";
 answers[35] = 0;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10014. Examen TIC A2 2014";
 preguntaids[35] = 10014


//  Id pregunta: 2796 Año de creación de pregunta: 2002
 questions[36]= "37)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[36]= new Array();
 choices[36][0] = "Desarrollo de aplicaciones multiusuario";
 choices[36][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[36][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[36][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[36] = 1;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2796. ";
 preguntaids[36] = 2796


//  Id pregunta: 6553 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;Cual de las siguientes empresas no est&aacute; entre las que desarrollaron originalmente el protocolo WS-Security?";
 choices[37]= new Array();
 choices[37][0] = "IBM";
 choices[37][1] = "Microsoft";
 choices[37][2] = "VeriSign";
 choices[37][3] = "SUN";
 answers[37] = 3;
 units[37] = ['120'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6553. ";
 preguntaids[37] = 6553


//  Id pregunta: 8298 Año de creación de pregunta: 2011
 questions[38]= "39)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[38]= new Array();
 choices[38][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[38][1] = "En el Registro Civil.";
 choices[38][2] = "En el Registro Mercantil.";
 choices[38][3] = "En el Registro General del Ministerio de Justicia.";
 answers[38] = 0;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 8298. Examen UPM A2 2011";
 preguntaids[38] = 8298


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[39]= "40)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "Peters";
 choices[39][1] = "Hollingsworth";
 choices[39][2] = "Manuel Castells";
 choices[39][3] = "Gaebler";
 answers[39] = 1;
 units[39] = ['20'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 490. Direcci&oacute;n p&uacute;blica";
 preguntaids[39] = 490


//  Id pregunta: 1140 Año de creación de pregunta: 2016
 questions[40]= "41)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[40]= new Array();
 choices[40][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[40][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[40][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[40][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[40] = 2;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1140. ";
 preguntaids[40] = 1140


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[41]= new Array();
 choices[41][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[41][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[41][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[41][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[41] = 1;
 units[41] = ['22'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[41] = 518


//  Id pregunta: 3463 Año de creación de pregunta: 2006
 questions[42]= "43)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol):";
 choices[42]= new Array();
 choices[42][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[42][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[42][2] = "Se define en el RFC 6960";
 choices[42][3] = "Todas las anteriores respuestas son ciertas";
 answers[42] = 3;
 units[42] = ['76'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3463. ";
 preguntaids[42] = 3463


//  Id pregunta: 9033 Año de creación de pregunta: 2014
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[43]= new Array();
 choices[43][0] = "a) Publicidad y transparencia";
 choices[43][1] = "b) Salvaguarda de la libre competencia";
 choices[43][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[43][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[43] = 3;
 units[43] = ['10'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 9033. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";
 preguntaids[43] = 9033


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[44]= new Array();
 choices[44][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[44][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[44][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[44][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[44] = 0;
 units[44] = ['4', '7', '8', '9'];
 blocks[44] = ['A1', 'A2'];
 comments[44] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[44] = 993


//  Id pregunta: 3786 Año de creación de pregunta: 2002
 questions[45]= "46)  El modelo de ciclo de vida en cascada:";
 choices[45]= new Array();
 choices[45][0] = "Se compone de una serie de fases en paralelo, siendo necesario que concluyan todas ellas para iniciar la fase del nivel siguiente";
 choices[45][1] = "No contempla la divisi&oacute;n en fases, sino que es una secuencia encadenada de acciones e interacciones";
 choices[45][2] = "Est&aacute; especialmente indicado para sistemas dise&ntilde;ados con orientaci&oacute;n a objetos";
 choices[45][3] = "Se compone de una serie de fases que se suceden secuencialmente, gener&aacute;ndose en cada fase resultados que ser&aacute;n necesarios para iniciar la siguiente fase";
 answers[45] = 3;
 units[45] = ['82'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3786. ";
 preguntaids[45] = 3786


//  Id pregunta: 7559 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &laquo;Personas&raquo; en el modelo EFQM?";
 choices[46]= new Array();
 choices[46][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos.";
 choices[46][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n.";
 choices[46][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n.";
 choices[46][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n.";
 answers[46] = 2;
 units[46] = ['98'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 7559. Map 2005";
 preguntaids[46] = 7559


//  Id pregunta: 6373 Año de creación de pregunta: 2003
 questions[47]= "48)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[47]= new Array();
 choices[47][0] = "Fritz Machlup";
 choices[47][1] = "Charles Babbage";
 choices[47][2] = "Herman Hollerith";
 choices[47][3] = "Howard Aiken";
 answers[47] = 0;
 units[47] = ['21'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 6373. Examen 2006 JCYL";
 preguntaids[47] = 6373


//  Id pregunta: 1690 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n FALSA. Las caracter&iacute;sticas de una sesi&oacute;n de trabajo tipo JAD (Joint Application Design), seg&uacute;n M&eacute;trica versi&oacute;n 3, se pueden resumir en:";
 choices[48]= new Array();
 choices[48][0] = "Se establece un equipo de trabajo cuyos componentes y responsabilidades est&aacute;n perfectamente identificados y su fin es conseguir el consenso entre las necesidades de los usuarios y los servicios del sistema en producci&oacute;n.";
 choices[48][1] = "Se llevan a cabo pocas reuniones, de larga duraci&oacute;n y muy bien preparadas.";
 choices[48][2] = "Durante la propia sesi&oacute;n se elaboran los modelos empleando diagramas f&aacute;ciles de entender y mantener, directamente sobre herramientas CASE.";
 choices[48][3] = "Se realiza un cronograma con las actuaciones a desarrollar.";
 answers[48] = 3;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1690. ";
 preguntaids[48] = 1690


//  Id pregunta: 1769 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale c&oacute;mo se denomina, En telefon&iacute;a m&oacute;vil, el procedimiento mediante el cual se consigue que una conexi&oacute;n se mantenga cuando el m&oacute;vil cambia de celda, dentro del alcance de una misma central de conmutaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Roaming";
 choices[49][1] = "Hand-over";
 choices[49][2] = "Clustering";
 choices[49][3] = "Trunking";
 answers[49] = 1;
 units[49] = ['117'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 1769. ";
 preguntaids[49] = 1769


//  Id pregunta: 3912 Año de creación de pregunta: 2002
 questions[50]= "51)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[50]= new Array();
 choices[50][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos";
 choices[50][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[50][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[50][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[50] = 0;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3912. ";
 preguntaids[50] = 3912


//  Id pregunta: 5378 Año de creación de pregunta: 2006
 questions[51]= "52)  No es cierto que la herramienta Nagios";
 choices[51]= new Array();
 choices[51][0] = "Puede monitorizar servicios TCP";
 choices[51][1] = "Es una alternativa a Bigbrother";
 choices[51][2] = "Puede utilizar agentes distintos a SNMP";
 choices[51][3] = "Puede ser instalada en Windows";
 answers[51] = 3;
 units[51] = ['114'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5378. ";
 preguntaids[51] = 5378


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[52]= "53)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[52]= new Array();
 choices[52][0] = "Cuatro.";
 choices[52][1] = "Una.";
 choices[52][2] = "Cinco.";
 choices[52][3] = "Nueve.";
 answers[52] = 0;
 units[52] = ['1'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 95. Constituci&oacute;n de 1978";
 preguntaids[52] = 95


//  Id pregunta: 7740 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?";
 choices[53]= new Array();
 choices[53][0] = "Zona p&uacute;blica.";
 choices[53][1] = "Zona privada.";
 choices[53][2] = "Zona de seguridad.";
 choices[53][3] = "Zona compartida.";
 answers[53] = 2;
 units[53] = ['78'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7740. ";
 preguntaids[53] = 7740


//  Id pregunta: 965 Año de creación de pregunta: 2016
 questions[54]= "55)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "la Administraci&oacute;n General del Estado";
 choices[54][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[54][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[54][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[54] = 3;
 units[54] = ['4', '7', '8', '9'];
 blocks[54] = ['A1', 'A2'];
 comments[54] = "Id Pregunta: 965. Ley 40/2015";
 preguntaids[54] = 965


//  Id pregunta: 4140 Año de creación de pregunta: 2003
 questions[55]= "56)  Si por cada t&eacute;rmino, bien sea palabra clave, frase especial o &iacute;tem del tesauro, existe una lista de todos los documentos en los que aparece, a la que se suele a&ntilde;adir la longitud de esa lista (n&uacute;mero de referencias contenidas), estamos hablando de un siste";
 choices[55]= new Array();
 choices[55][0] = "De &iacute;ndices m&uacute;ltiples.";
 choices[55][1] = "De &iacute;ndices";
 choices[55][2] = "De listas.";
 choices[55][3] = "De &iacute;ndices invertidos.";
 answers[55] = 3;
 units[55] = ['99', '1'];
 blocks[55] = ['B3', 'A1'];
 comments[55] = "Id Pregunta: 4140. ";
 preguntaids[55] = 4140


//  Id pregunta: 5933 Año de creación de pregunta: 2007
 questions[56]= "57)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &quot;Gesti&oacute;n de la Tecnolog&iacute;a&quot; pertenece al criterio:";
 choices[56]= new Array();
 choices[56][0] = "Alianzas y Recursos";
 choices[56][1] = "Pol&iacute;tica y Estrategia";
 choices[56][2] = "Procesos";
 choices[56][3] = "Resultados Clave";
 answers[56] = 0;
 units[56] = ['98'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 5933. ";
 preguntaids[56] = 5933


//  Id pregunta: 10018 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[57]= new Array();
 choices[57][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[57][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[57][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[57][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[57] = 1;
 units[57] = ['82'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10018. Examen TIC A2 2014";
 preguntaids[57] = 10018


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes es una librer&iacute;a de c&oacute;digo abierto para crear y manipular archivos PDF, RTF, y HTML en Java:";
 choices[58]= new Array();
 choices[58][0] = "Json";
 choices[58][1] = "iText";
 choices[58][2] = "text-tomcat";
 choices[58][3] = "OpenXML";
 answers[58] = 1;
 units[58] = ['66'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 723. AGE A2 2015";
 preguntaids[58] = 723


//  Id pregunta: 7850 Año de creación de pregunta: 2011
 questions[59]= "60)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[59][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[59][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[59][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[59] = 1;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7850. Examen TIC A1 2010";
 preguntaids[59] = 7850


//  Id pregunta: 4451 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;A qu&eacute; nivel de OSI es equivalente el protocolo IP (Internet Protocol)?:";
 choices[60]= new Array();
 choices[60][0] = "Enlace";
 choices[60][1] = "Red";
 choices[60][2] = "Transporte";
 choices[60][3] = "Comunicaci&oacute;n";
 answers[60] = 1;
 units[60] = ['105'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4451. ";
 preguntaids[60] = 4451


//  Id pregunta: 6500 Año de creación de pregunta: 2003
 questions[61]= "62)  Las areas funcionales definidas por ISO que todo sistema de gesti&oacute;n de red debe cubrir son:";
 choices[61]= new Array();
 choices[61][0] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Contabilidad, Gesti&oacute;n de Seguridad";
 choices[61][1] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[61][2] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Mantenimiento, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 0;
 units[61] = ['114'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6500. ";
 preguntaids[61] = 6500


//  Id pregunta: 1400 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la respuesta FALSA, respecto al protocolo IPSEC:";
 choices[62]= new Array();
 choices[62][0] = "EI protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[62][1] = "EI protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[62][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[62][3] = "IPSEC ESP es incompatible con el modo transporte, solo se puede utilizar en modo t&uacute;nel.";
 answers[62] = 3;
 units[62] = ['119'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1400. ";
 preguntaids[62] = 1400


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[63]= new Array();
 choices[63][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[63][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[63][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[63][3] = "A las Diputaciones y a las Comarcas.";
 answers[63] = 0;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 59. Constituci&oacute;n de 1978";
 preguntaids[63] = 59


//  Id pregunta: 8363 Año de creación de pregunta: 2011
 questions[64]= "65)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[64]= new Array();
 choices[64][0] = "Insercci&oacute;n";
 choices[64][1] = "Burbuja";
 choices[64][2] = "Selecci&oacute;n";
 choices[64][3] = "Combinaci&oacute;n";
 answers[64] = 1;
 units[64] = ['67', '68'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8363. Analista Ayto. Madrid 2010";
 preguntaids[64] = 8363


//  Id pregunta: 1790 Año de creación de pregunta: 2016
 questions[65]= "66)  La norma SICRES 3.0 recoge:";
 choices[65]= new Array();
 choices[65][0] = "El modelo de Datos para el intercambio de asientos y entre las Entidades Registrales con independencia del Sistema de Registro origen o destino, y de la tecnolog&iacute;a de intercambio.";
 choices[65][1] = "El formato est&aacute;ndar para el intercambio de informaci&oacute;n del inventario de informaci&oacute;n administrativa que debe mantener cada administraci&oacute;n p&uacute;blica.";
 choices[65][2] = "El formato est&aacute;ndar para el dise&ntilde;o de los servicios de interoperabilidad, para el intercambio de datos y documentos.";
 choices[65][3] = "El formato est&aacute;ndar para el intercambio de documentos electr&oacute;nicos.";
 answers[65] = 0;
 units[65] = ['44'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 1790. ";
 preguntaids[65] = 1790


//  Id pregunta: 6708 Año de creación de pregunta: 2009
 questions[66]= "67)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[66]= new Array();
 choices[66][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes";
 choices[66][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos";
 choices[66][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original";
 choices[66][3] = "Las funciones hash requieren el uso de claves de cifrado";
 answers[66] = 1;
 units[66] = ['76'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6708. MAP 2008 A1";
 preguntaids[66] = 6708


//  Id pregunta: 9899 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[67]= new Array();
 choices[67][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[67][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[67][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[67][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[67] = 0;
 units[67] = ['7', '19'];
 blocks[67] = ['A2', 'A4'];
 comments[67] = "Id Pregunta: 9899. ";
 preguntaids[67] = 9899


//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[68]= "69)  La recusaci&oacute;n se plantear&aacute;...";
 choices[68]= new Array();
 choices[68][0] = "S&oacute;lo verbalmente";
 choices[68][1] = "S&oacute;lo por escrito";
 choices[68][2] = "Verbalmente o por escrito";
 choices[68][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[68] = 1;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[68] = 1026


//  Id pregunta: 6924 Año de creación de pregunta: 2010
 questions[69]= "70)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[69]= new Array();
 choices[69][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[69][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[69][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[69][3] = "Todas las anteriores son correctas.";
 answers[69] = 3;
 units[69] = ['122'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 6924. ";
 preguntaids[69] = 6924


//  Id pregunta: 2290 Año de creación de pregunta: 2009
 questions[70]= "71)  Seg&uacute;n la Ley org&aacute;nica 15/1999:";
 choices[70]= new Array();
 choices[70][0] = "existen derechos de cancelaci&oacute;n, rectificaci&oacute;n, acceso y oposici&oacute;n, sobre los que se podr&aacute; exigir contraprestaci&oacute;n en los casos que proceda";
 choices[70][1] = "los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haber sido recogidos para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al regimen general de la ley";
 choices[70][2] = "la Agencia de Protecci&oacute;n de Datos es un ente de derecho p&uacute;blico con personalidad jur&iacute;dica propia y que depende de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[70][3] = "Todas las respuestas anteriores son correctas";
 answers[70] = 1;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2290. ";
 preguntaids[70] = 2290


//  Id pregunta: 10046 Año de creación de pregunta: 2015
 questions[71]= "72)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[71]= new Array();
 choices[71][0] = "Abstracci&oacute;n.";
 choices[71][1] = "Polimorfismo.";
 choices[71][2] = "Herencia.";
 choices[71][3] = "Encapsulamiento.";
 answers[71] = 3;
 units[71] = ['89'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10046. Examen TIC A2 2014";
 preguntaids[71] = 10046


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[72]= "73)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[72]= new Array();
 choices[72][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[72][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[72][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[72][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[72] = 1;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 66. Constituci&oacute;n de 1978";
 preguntaids[72] = 66


//  Id pregunta: 10836 Año de creación de pregunta: 2015
 questions[73]= "74)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[73]= new Array();
 choices[73][0] = "Procesos";
 choices[73][1] = "Gobierno";
 choices[73][2] = "Informaci&oacute;n";
 choices[73][3] = "Estructuras organizacionales";
 answers[73] = 1;
 units[73] = ['101'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 10836. ";
 preguntaids[73] = 10836


//  Id pregunta: 6682 Año de creación de pregunta: 2009
 questions[74]= "75)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[74]= new Array();
 choices[74][0] = "BPML";
 choices[74][1] = "BPEL";
 choices[74][2] = "BPMN";
 choices[74][3] = "XPDL";
 answers[74] = 3;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6682. MAP 2008 A1";
 preguntaids[74] = 6682


