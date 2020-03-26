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
//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[0]= "1)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[0]= new Array();
 choices[0][0] = "Reponen";
 choices[0][1] = "Reajustan";
 choices[0][2] = "Devuelven o cancelan";
 choices[0][3] = "Todas las anteriores";
 answers[0] = 3;
 units[0] = ['10'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[0] = 9134


//  Id pregunta: 7259 Año de creación de pregunta: 2010
 questions[1]= "2)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[1]= new Array();
 choices[1][0] = "Preventiva";
 choices[1][1] = "De detecci&oacute;n";
 choices[1][2] = "Disuasoria";
 choices[1][3] = "Correctiva";
 answers[1] = 1;
 units[1] = ['119'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7259. ";
 preguntaids[1] = 7259


//  Id pregunta: 1874 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), cuando el mecanismo de autenticaci&oacute;n de los usuarios autorizados a acceder a la historia cl&iacute;nica se base en la existencia de contrase&ntilde;as exigir&aacute;:";
 choices[2]= new Array();
 choices[2][0] = "Un procedimiento de asignaci&oacute;n, distribuci&oacute;n y almacenamiento que garantice su confidencialidad e integridad.";
 choices[2][1] = "Un procedimiento de asignaci&oacute;n y distribuci&oacute;n que garantice su confidencialidad e integridad.";
 choices[2][2] = "Un procedimiento que auto rice al responsable de seguridad al conocimiento de las contrase&ntilde;as.";
 choices[2][3] = "Un procedimiento que garantice una diligente distribuci&oacute;n y almacenamiento que minimice el tiempo de espera.";
 answers[2] = 0;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 1874. ";
 preguntaids[2] = 1874


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[3]= new Array();
 choices[3][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[3][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[3][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[3][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[3] = 3;
 units[3] = ['11'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[3] = 315


//  Id pregunta: 7996 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[4]= new Array();
 choices[4][0] = "Unity Application Block,";
 choices[4][1] = "Logging Application Block.";
 choices[4][2] = "Ajax Control Toolkit";
 choices[4][3] = "Cached XML Data Mapper";
 answers[4] = 0;
 units[4] = ['63', '124'];
 blocks[4] = ['B2', 'B4'];
 comments[4] = "Id Pregunta: 7996. Examen TIC A2 2010";
 preguntaids[4] = 7996


//  Id pregunta: 9798 Año de creación de pregunta: 2015
 questions[5]= "6)  Son principios del programa europeo ISA:";
 choices[5]= new Array();
 choices[5][0] = "La privacidad, la apertura y la seguridad.";
 choices[5][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[5][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[5][3] = "Todas las anteriores.";
 answers[5] = 3;
 units[5] = ['43', '19'];
 blocks[5] = ['B1', 'A4'];
 comments[5] = "Id Pregunta: 9798. ";
 preguntaids[5] = 9798


//  Id pregunta: 7687 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un medio de pago?";
 choices[6]= new Array();
 choices[6][0] = "Simultaneidad.";
 choices[6][1] = "Interactividad.";
 choices[6][2] = "No repudio.";
 choices[6][3] = "Automatizaci&oacute;n.";
 answers[6] = 2;
 units[6] = ['75'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7687. Map 2007";
 preguntaids[6] = 7687


//  Id pregunta: 6858 Año de creación de pregunta: 2010
 questions[7]= "8)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[7]= new Array();
 choices[7][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[7][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[7][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[7][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[7] = 3;
 units[7] = ['47'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 6858. TIC A 2009";
 preguntaids[7] = 6858


//  Id pregunta: 6780 Año de creación de pregunta: 2010
 questions[8]= "9)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[8]= new Array();
 choices[8][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[8][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[8][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[8][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[8] = 2;
 units[8] = ['45'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 6780. Castilla La Mancha 2009";
 preguntaids[8] = 6780


//  Id pregunta: 9492 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[9]= new Array();
 choices[9][0] = "2B1Q";
 choices[9][1] = "CAP";
 choices[9][2] = "DMT";
 choices[9][3] = "WDM";
 answers[9] = 3;
 units[9] = ['106'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9492. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";
 preguntaids[9] = 9492


//  Id pregunta: 10561 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito principal de la Gesti&oacute;n de Disponibilidad?";
 choices[10]= new Array();
 choices[10][0] = "Monitorizar e informar la disponibilidad de los componentes";
 choices[10][1] = "Asegurar que se cumplen todas las metas del acuerdo de nivel de servicios (SLA)";
 choices[10][2] = "Garantizar los niveles de disponibilidad de los servicios y de los componentes";
 choices[10][3] = "Asegurar que la disponibilidad del servicio satisface las necesidades acordadas con el negocio";
 answers[10] = 3;
 units[10] = ['101'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10561. ";
 preguntaids[10] = 10561


//  Id pregunta: 8556 Año de creación de pregunta: 2013
 questions[11]= "12)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[11]= new Array();
 choices[11][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[11][1] = "A traves de la ley de patentes";
 choices[11][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[11][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[11] = 3;
 units[11] = ['41'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 8556. ";
 preguntaids[11] = 8556


//  Id pregunta: 7908 Año de creación de pregunta: 2011
 questions[12]= "13)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[12]= new Array();
 choices[12][0] = "Funci&oacute;n diferenciada.";
 choices[12][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[12][2] = "L&iacute;neas de defensa.";
 choices[12][3] = "Continuidad de la actividad.";
 answers[12] = 3;
 units[12] = ['46'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 7908. Examen TIC A1 2010";
 preguntaids[12] = 7908


//  Id pregunta: 3676 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[13]= new Array();
 choices[13][0] = "Revisiones t&eacute;cnicas formales";
 choices[13][1] = "Guiones de recomendaciones";
 choices[13][2] = "Listas de control";
 choices[13][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[13] = 0;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3676. ";
 preguntaids[13] = 3676


//  Id pregunta: 3576 Año de creación de pregunta: 2004
 questions[14]= "15)  &iquest;Cu&aacute;ntos criterios y subcriterios de calidad considera el Modelo de Excelencia de la EFQM?";
 choices[14]= new Array();
 choices[14][0] = "Considera 9 criterios y 32 subcriterios";
 choices[14][1] = "Considera 11 criterios y 23 subcriterios, de forma an&aacute;loga a los factores y criterios de calidad del Modelo de McCall";
 choices[14][2] = "El modelo de la EFQM solo considera criterios de calidad, en concreto ocho criterios";
 choices[14][3] = "El modelo de la EFQM no habla de criterios y subcriterios, sino de factores de calidad y criterios de calidad, y considera 8 factores y 36 criterios";
 answers[14] = 0;
 units[14] = ['98'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3576. ";
 preguntaids[14] = 3576


//  Id pregunta: 6990 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[15]= new Array();
 choices[15][0] = "Complejo";
 choices[15][1] = "M&aacute;ximo";
 choices[15][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[15][3] = "Informal";
 answers[15] = 2;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6990. TIC-B 2009 bloque desarrollo";
 preguntaids[15] = 6990


//  Id pregunta: 861 Año de creación de pregunta: 2016
 questions[16]= "17)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[16]= new Array();
 choices[16][0] = "Gesti&oacute;n de la disponibilidad";
 choices[16][1] = "Gesti&oacute;n de la demanda";
 choices[16][2] = "Gesti&oacute;n de entregas";
 choices[16][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[16] = 0;
 units[16] = ['101'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 861. AGE A1 2015";
 preguntaids[16] = 861


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[17]= "18)  La estructura econ&oacute;mica espa&ntilde;ola es aproximadamente la siguiente:";
 choices[17]= new Array();
 choices[17][0] = "Sector primario (5-10%) Sector industrial(25-30%) Sector servicios(60-65%)";
 choices[17][1] = "Sector primario (3-5%) Sector industrial(15-20%) Sector servicios(65-75%)";
 choices[17][2] = "Sector primario (10-15%) Sector industrial(15-20%) Sector servicios(50-60%)";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = 1;
 units[17] = ['12'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 350. Modelo econ&oacute;mico";
 preguntaids[17] = 350


//  Id pregunta: 9543 Año de creación de pregunta: 2014
 questions[18]= "19)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[18]= new Array();
 choices[18][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[18][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[18][2] = "El responsable deber&aacute; contestar al interesado, proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[18][3] = "El responsable deber&aacute; contestar al interesado, proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[18] = 3;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 9543. Art&iacute;culo 32.3 del RD 1720/2007";
 preguntaids[18] = 9543


//  Id pregunta: 10944 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes dificultades no tiene que hacer frente el par telef&oacute;nico para la transmisi&oacute;n de alta velocidad de datos?";
 choices[19]= new Array();
 choices[19][0] = "Ruido impulsivo";
 choices[19][1] = "Ruido de fondo";
 choices[19][2] = "Diafon&iacute;a";
 choices[19][3] = "Medio costoso";
 answers[19] = 3;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10944. ";
 preguntaids[19] = 10944


//  Id pregunta: 1432 Año de creación de pregunta: 2016
 questions[20]= "21)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:";
 choices[20]= new Array();
 choices[20][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[20][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[20][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[20][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[20] = 0;
 units[20] = ['1'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 1432. ";
 preguntaids[20] = 1432


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[21]= "22)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[21]= new Array();
 choices[21][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[21][1] = "El Congreso de los Diputados.";
 choices[21][2] = "Las Cortes Generales.";
 choices[21][3] = "El Consejo de Ministros";
 answers[21] = 2;
 units[21] = ['1'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 36. Constituci&oacute;n de 1978";
 preguntaids[21] = 36


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale qu&eacute; servicio NO es ofrecido por el portal VALIDe:";
 choices[22]= new Array();
 choices[22][0] = "Validaci&oacute;n de sede electr&oacute;nica.";
 choices[22][1] = "Realizaci&oacute;n de firma electr&oacute;nica.";
 choices[22][2] = "Visualizaci&oacute;n de firma electr&oacute;nica.";
 choices[22][3] = "Renovaci&oacute;n de certificado electr&oacute;nico.";
 answers[22] = 3;
 units[22] = ['47'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 622. AGE A2 2015";
 preguntaids[22] = 622


//  Id pregunta: 9644 Año de creación de pregunta: 2014
 questions[23]= "24)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[23]= new Array();
 choices[23][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[23][1] = "Cifrado C&eacute;sar";
 choices[23][2] = "Criptoan&aacute;lisis";
 choices[23][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[23] = 2;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9644. ";
 preguntaids[23] = 9644


//  Id pregunta: 1671 Año de creación de pregunta: 2016
 questions[24]= "25)  La Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n, MAGERIT, establece unas dimensiones de valoraci&oacute;n de activos. Determine cu&aacute;l de las siguientes respuestas es correcta:";
 choices[24]= new Array();
 choices[24][0] = "Disponibilidad, integridad de los datos y confidencialidad de los datos.";
 choices[24][1] = "Disponibilidad, integridad de los datos, confidencialidad de los datos, eficacia y eficiencia.";
 choices[24][2] = "Eficacia, eficiencia, disponibilidad, integridad, confidencialidad, conformidad y fiabilidad.";
 choices[24][3] = "Disponibilidad, integridad de los datos, confidencialidad de los datos, autenticidad de los usuarios del servicio, autenticidad del origen de los datos, trazabilidad del servicio, trazabilidad de los datos.";
 answers[24] = 3;
 units[24] = ['45'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 1671. ";
 preguntaids[24] = 1671


//  Id pregunta: 1555 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En cu&aacute;l de los siguientes est&aacute;ndares NO se basa la metodolog&iacute;a M&eacute;trica Versi&oacute;n 3?:";
 choices[25]= new Array();
 choices[25][0] = "ISO 12.207";
 choices[25][1] = "ISO/IEC TR 15.504/SPICE";
 choices[25][2] = "UNE-EN-ISO 9001:2000";
 choices[25][3] = "ISO 17799";
 answers[25] = 3;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1555. ";
 preguntaids[25] = 1555


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano de seguimiento y control de los fondos de empleo de &aacute;mbito nacional?";
 choices[26]= new Array();
 choices[26][0] = "El Servicio P&uacute;blico de Empleo Estatal";
 choices[26][1] = "La Inspecci&oacute;n de Trabajo y Seguridad Social";
 choices[26][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[26][3] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 answers[26] = 3;
 units[26] = ['15'];
 blocks[26] = ['A3'];
 comments[26] = "Id Pregunta: 430. Modelo econ&oacute;mico";
 preguntaids[26] = 430


//  Id pregunta: 8090 Año de creación de pregunta: 2011
 questions[27]= "28)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[27]= new Array();
 choices[27][0] = "WWN";
 choices[27][1] = "MAC";
 choices[27][2] = "SPOF";
 choices[27][3] = "IP";
 answers[27] = 0;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8090. Analista Ayto. Madrid 2010";
 preguntaids[27] = 8090


//  Id pregunta: 8879 Año de creación de pregunta: 2013
 questions[28]= "29)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[28]= new Array();
 choices[28][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[28][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[28][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[28][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[28] = 2;
 units[28] = ['121'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8879. ";
 preguntaids[28] = 8879


//  Id pregunta: 7370 Año de creación de pregunta: 2010
 questions[29]= "30)  Los sistemas OLTP se utilizan para:";
 choices[29]= new Array();
 choices[29][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[29][1] = "Generar informes para la direcci&oacute;n.";
 choices[29][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[29][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[29] = 2;
 units[29] = ['72'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7370. Examen TIC B 2009";
 preguntaids[29] = 7370


//  Id pregunta: 2830 Año de creación de pregunta: 2002
 questions[30]= "31)  En la estructura del sistema operativo Unix:";
 choices[30]= new Array();
 choices[30][0] = "Una de las funciones del kernel o n&uacute;cleo es la de gestionar el sistema de archivos";
 choices[30][1] = "El tratamiento de cualquier dispositivo perif&eacute;rico como un archivo";
 choices[30][2] = "La shell muestra la interfaz entre el Unix y el usuario, incorpora una serie de utilidades para realizar las tareas solicitadas por el usuario";
 choices[30][3] = "Dentro del kernel existen dos subsistemas: la interfaz de llamadas al sistema, y el planificador (scheduler)";
 answers[30] = 1;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2830. ";
 preguntaids[30] = 2830


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[31]= new Array();
 choices[31][0] = "La Ley General Tributaria.";
 choices[31][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[31][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[31][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[31] = 2;
 units[31] = ['11'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 313. Presupuestos generales";
 preguntaids[31] = 313


//  Id pregunta: 7728 Año de creación de pregunta: 2010
 questions[32]= "33)  RDF (Resource Description Framework) es un:";
 choices[32]= new Array();
 choices[32][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la web.";
 choices[32][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos.";
 choices[32][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles.";
 choices[32][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n.";
 answers[32] = 0;
 units[32] = ['68'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7728. Map 2007";
 preguntaids[32] = 7728


//  Id pregunta: 1740 Año de creación de pregunta: 2016
 questions[33]= "34)  Se cuenta con 4 discos f&iacute;sicos que se desea configurar como una &uacute;nica unidad, por ejemplo /root. Se desea maximizar la capacidad &uacute;til de almacenamiento proporcionando alg&uacute;n mecanismo de redundancia ante fallos. Por favor, elija entre las siguientes la mejor opci&oacute;n a utilizar:";
 choices[33]= new Array();
 choices[33][0] = "RAID 0";
 choices[33][1] = "RAID 1";
 choices[33][2] = "RAID 0+1";
 choices[33][3] = "RAID 5";
 answers[33] = 3;
 units[33] = ['53'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1740. ";
 preguntaids[33] = 1740


//  Id pregunta: 2102 Año de creación de pregunta: 2002
 questions[34]= "35)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:";
 choices[34]= new Array();
 choices[34][0] = "ISO 7498";
 choices[34][1] = "ISO 9735";
 choices[34][2] = "ISO 9075";
 choices[34][3] = "ISO 9945-1";
 answers[34] = 0;
 units[34] = ['43'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2102. ";
 preguntaids[34] = 2102


//  Id pregunta: 6075 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[35]= new Array();
 choices[35][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[35][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[35][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[35][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[35] = 0;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6075. Examen TIC A1 MAP 2007";
 preguntaids[35] = 6075


//  Id pregunta: 2931 Año de creación de pregunta: 2002
 questions[36]= "37)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[36]= new Array();
 choices[36][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[36][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[36][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[36][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[36] = 2;
 units[36] = ['77', '78'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2931. ";
 preguntaids[36] = 2931


//  Id pregunta: 8732 Año de creación de pregunta: 2013
 questions[37]= "38)  Adem&aacute;s de los pliegos, &iquest;cu&aacute;l de los siguientes documentos forma parte del expediente de contrataci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Certificado de la existencia de cr&eacute;dito.";
 choices[37][1] = "Fiscalizaci&oacute;n de la intervenci&oacute;n.";
 choices[37][2] = "Aprobaci&oacute;n del gasto.";
 choices[37][3] = "Todos los anteriores.";
 answers[37] = 3;
 units[37] = ['37'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 8732. ";
 preguntaids[37] = 8732


//  Id pregunta: 2453 Año de creación de pregunta: 2006
 questions[38]= "39)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y por lo especialmente previsto por la LOPD?";
 choices[38]= new Array();
 choices[38][0] = "Los derivados del Registro Civil";
 choices[38][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[38][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[38][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[38] = 0;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2453. ";
 preguntaids[38] = 2453


//  Id pregunta: 10670 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n la Ley 9/2014, respecto a los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Podr&aacute;n ser modificados por el Gobierno.";
 choices[39][1] = "No podr&aacute;n sufrir ninguna modificaci&oacute;n tras ser aprobados.";
 choices[39][2] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; modificarlo, previo informe de la CNMC.";
 choices[39][3] = "Podr&aacute;n ser modificados por la CNMC.";
 answers[39] = 2;
 units[39] = ['121'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10670. ";
 preguntaids[39] = 10670


//  Id pregunta: 972 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[40]= new Array();
 choices[40][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[40][1] = "el C&oacute;digo Civil";
 choices[40][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[40][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[40] = 0;
 units[40] = ['4', '7', '8', '9'];
 blocks[40] = ['A1', 'A2'];
 comments[40] = "Id Pregunta: 972. Ley 40/2015";
 preguntaids[40] = 972


//  Id pregunta: 1594 Año de creación de pregunta: 2016
 questions[41]= "42)  En el sistema relacional de datos, los conceptos b&aacute;sicos son relaci&oacute;n, tupla, clave primaria y dominio. En este &aacute;mbito, se&ntilde;ale qu&eacute; es un dominio:";
 choices[41]= new Array();
 choices[41][0] = "El identificador &uacute;nico para la tabla";
 choices[41][1] = "Una colecci&oacute;n de valores, de los cuales uno o m&aacute;s atributos (columnas) obtienen sus valores reales";
 choices[41][2] = "Una colecci&oacute;n de valores, de los cuales una o m&aacute;s tuplas obtienen sus relaciones";
 choices[41][3] = "El n&uacute;mero de tuplas que contiene una relaci&oacute;n. Tambi&eacute;n es conocido por cardinalidad";
 answers[41] = 1;
 units[41] = ['61'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1594. ";
 preguntaids[41] = 1594


//  Id pregunta: 1032 Año de creación de pregunta: 2016
 questions[42]= "43)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[42]= new Array();
 choices[42][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[42][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[42][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[42][3] = "Todas son correctas.";
 answers[42] = 3;
 units[42] = ['4', '7', '8', '9'];
 blocks[42] = ['A1', 'A2'];
 comments[42] = "Id Pregunta: 1032. Ley 40/2015";
 preguntaids[42] = 1032


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique alguna certificaci&oacute;n en el &aacute;mbito empresarial que le cualifique profesionalmente para poder gestionar un proyecto de desarrollo:";
 choices[43]= new Array();
 choices[43][0] = "CMP.";
 choices[43][1] = "Oracle Certified Associate, Java SE 8 Programmer Certification.";
 choices[43][2] = "Certificaci&oacute;n ISO 9001:2008.";
 choices[43][3] = "PMP.";
 answers[43] = 3;
 units[43] = ['94'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 852. AGE A2 2015";
 preguntaids[43] = 852


//  Id pregunta: 8771 Año de creación de pregunta: 2013
 questions[44]= "45)  Los informes de auditor&iacute;a:";
 choices[44]= new Array();
 choices[44][0] = "Deben ser enviados al &oacute;rgano auditado para que establezca observaciones o alegaciones";
 choices[44][1] = "No ser&aacute; sometido a las observaciones o alegaciones del &oacute;rgano auditado porque esto pondr&iacute;a en peligro la independencia del procedimiento";
 choices[44][2] = "Incluir&aacute; los hechos, hallazgos, conclusiones y recomendaciones que se consideren m&aacute;s relevantes por parte de los auditores";
 choices[44][3] = "Ninguna de las anteriores es correcta";
 answers[44] = 0;
 units[44] = ['36'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 8771. ";
 preguntaids[44] = 8771


//  Id pregunta: 966 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[45]= new Array();
 choices[45][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[45][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[45][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[45][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[45] = 2;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 966. Ley 40/2015";
 preguntaids[45] = 966


//  Id pregunta: 10156 Año de creación de pregunta: 2015
 questions[46]= "47)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[46][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital.";
 choices[46][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[46][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[46] = 1;
 units[46] = ['47'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 10156. Examen TIC A1 2014";
 preguntaids[46] = 10156


//  Id pregunta: 6325 Año de creación de pregunta: 2003
 questions[47]= "48)  En la LAECSP se hace referencia a una serie de aspectos a reconsiderar a la hora de aplicar medios electr&oacute;nicos en la gesti&oacute;n de procedimientos. Entre dichos aspectos figura:";
 choices[47]= new Array();
 choices[47][0] = "Obligar al uso del DNIe a los ciudadanos";
 choices[47][1] = "Supresi&oacute;n o reducci&oacute;n de la documentaci&oacute;n requerida a los ciudadanos";
 choices[47][2] = "Integrar en los mismos el uso del correo electr&oacute;nico";
 choices[47][3] = "Ninguno de los anteriores";
 answers[47] = 1;
 units[47] = ['43', '44'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 6325. Art&iacute;culo 34 Ley 11/2007";
 preguntaids[47] = 6325


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[48]= new Array();
 choices[48][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[48][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[48][2] = "Servicio de seguridad gestionada";
 choices[48][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[48] = 1;
 units[48] = ['26'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 525. AGE A1 2015";
 preguntaids[48] = 525


//  Id pregunta: 2249 Año de creación de pregunta: 2002
 questions[49]= "50)  La utilizaci&oacute;n de cartuchos de t&oacute;ner reciclados en impresoras de la Administraci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "No es de inter&eacute;s para la Administraci&oacute;n, ya que estos cartuchos son m&aacute;s caros";
 choices[49][1] = "Es una pol&iacute;tica apropiada para la Administraci&oacute;n, siempre que se garantice la calidad de estos consumibles";
 choices[49][2] = "Debe reservarse para aquellas situaciones en que se utilicen conjuntamente con otros consumibles reciclados";
 choices[49][3] = "Es una situaci&oacute;n coyuntural para situaciones de insuficiencia presupuestaria";
 answers[49] = 1;
 units[49] = ['37'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2249. ";
 preguntaids[49] = 2249


//  Id pregunta: 4517 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[50]= new Array();
 choices[50][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[50][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[50][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[50][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[50] = 0;
 units[50] = ['105'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4517. ";
 preguntaids[50] = 4517


//  Id pregunta: 1461 Año de creación de pregunta: 2016
 questions[51]= "52)  Sin perjuicio de los requisitos que en materia de informaci&oacute;n se establezcan en la materia vigente, el prestador de servicios de la sociedad de la informaci&oacute;n ofrecer&aacute; de manera permanente, f&aacute;cil, directa y gratuita, una serie de informaci&oacute;n. &iquest;Cu&aacute;l NO est&aacute; incluido en esta obligaci&oacute;n, seg&uacute;n la Ley 34/2002, de 11 de julio?";
 choices[51]= new Array();
 choices[51][0] = "Nombre o denominaci&oacute;n social.";
 choices[51][1] = "Si la profesi&oacute;n est&aacute; regulada, los datos del Colegio Profesional al que pertenece.";
 choices[51][2] = "Los c&oacute;digos de conducta a los que, en su caso, est&eacute; adherido.";
 choices[51][3] = "Un n&uacute;mero de tel&eacute;fono donde poder establecer una comunicaci&oacute;n directa con el prestador.";
 answers[51] = 3;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 1461. ";
 preguntaids[51] = 1461


//  Id pregunta: 8461 Año de creación de pregunta: 2011
 questions[52]= "53)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[52]= new Array();
 choices[52][0] = "...gasto alguno para el afectado&rdquo;";
 choices[52][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[52][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[52][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[52] = 2;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 8461. ";
 preguntaids[52] = 8461


//  Id pregunta: 10074 Año de creación de pregunta: 2015
 questions[53]= "54)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[53]= new Array();
 choices[53][0] = "JOB";
 choices[53][1] = "COMMENT";
 choices[53][2] = "EXEC";
 choices[53][3] = "DD";
 answers[53] = 1;
 units[53] = ['60', '61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10074. Examen TIC A2 2014";
 preguntaids[53] = 10074


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[54]= "55)  La Mesa del Parlamento europeo estar&aacute; compuesta por:";
 choices[54]= new Array();
 choices[54][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[54][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[54][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[54][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[54] = 3;
 units[54] = ['5'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 146. Uni&oacute;n Europea";
 preguntaids[54] = 146


//  Id pregunta: 8144 Año de creación de pregunta: 2011
 questions[55]= "56)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[55]= new Array();
 choices[55][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[55][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[55][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[55][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[55] = 0;
 units[55] = ['108'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8144. Examen TIC A2 2010 interna";
 preguntaids[55] = 8144


//  Id pregunta: 3242 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[56]= new Array();
 choices[56][0] = "zx81.";
 choices[56][1] = "IBM XT.";
 choices[56][2] = "APPLE.";
 choices[56][3] = "Amstrad CPC 128.";
 answers[56] = 2;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3242. Junta Andaluc&iacute;a";
 preguntaids[56] = 3242


//  Id pregunta: 2395 Año de creación de pregunta: 2006
 questions[57]= "58)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD:";
 choices[57]= new Array();
 choices[57][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[57][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[57][2] = "Las comunicaciones al Consejo de Estado";
 choices[57][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[57] = 2;
 units[57] = ['35'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2395. ";
 preguntaids[57] = 2395


//  Id pregunta: 1241 Año de creación de pregunta: 2016
 questions[58]= "59)  En el &aacute;mbito de las redes inal&aacute;mbricas, la variante IEEE 802.11a:";
 choices[58]= new Array();
 choices[58][0] = "Opera dentro del rango de los 5 GHz.";
 choices[58][1] = "Es compatible con el Est&aacute;ndar 802.11b.";
 choices[58][2] = "Es compatible con el est&aacute;ndar 802.11g.";
 choices[58][3] = "Incorpora QoS (Calidad de Servicio).";
 answers[58] = 0;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1241. ";
 preguntaids[58] = 1241


//  Id pregunta: 1010 Año de creación de pregunta: 2016
 questions[59]= "60)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[59]= new Array();
 choices[59][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[59][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[59][2] = "el Ministerio del Interior";
 choices[59][3] = "la Administraci&oacute;n General del Estado";
 answers[59] = 0;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 1010. Ley 40/2015";
 preguntaids[59] = 1010


//  Id pregunta: 4299 Año de creación de pregunta: 2009
 questions[60]= "61)  El riesgo es, de acuerdo a MAGERIT V2:";
 choices[60]= new Array();
 choices[60][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[60][1] = "Resultado de una agresi&oacute;n";
 choices[60][2] = "Posibilidad de ocurrencia de un incidente";
 choices[60][3] = "el impacto ponderado con la tasa de ocurrencia (o expectativa de materializaci&oacute;n) de la amenaza";
 answers[60] = 3;
 units[60] = ['45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 4299. ";
 preguntaids[60] = 4299


//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[61]= "62)  Una tarjeta de memoria";
 choices[61]= new Array();
 choices[61][0] = "Puede procesar informaci&oacute;n";
 choices[61][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[61][2] = "Nunca puede procesar informaci&oacute;n";
 choices[61][3] = "Son un tipo de tarjeta inteligente";
 answers[61] = 2;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7249. ";
 preguntaids[61] = 7249


//  Id pregunta: 10790 Año de creación de pregunta: 2015
 questions[62]= "63)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Cl@ve PIN de varios usos";
 choices[62][1] = "Cl@ve Permanente sin SMS";
 choices[62][2] = "Cl@ve PIN de un solo uso";
 choices[62][3] = "b) y c) son correctos";
 answers[62] = 2;
 units[62] = ['47'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 10790. ";
 preguntaids[62] = 10790


//  Id pregunta: 920 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes es un ataque que se caracteriza porque el fraude est&aacute; dirigido principalmente a ejecutivos de alto nivel con objeto de obtener todo tipo de informaci&oacute;n confidencial para el acceso y control de los sistemas de informaci&oacute;n de la empresa?";
 choices[63]= new Array();
 choices[63][0] = "Hunting";
 choices[63][1] = "Stalking";
 choices[63][2] = "Whaling";
 choices[63][3] = "Trusting";
 answers[63] = 2;
 units[63] = ['120'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 920. AGE A2 2015";
 preguntaids[63] = 920


//  Id pregunta: 8801 Año de creación de pregunta: 2013
 questions[64]= "65)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[64]= new Array();
 choices[64][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[64][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[64][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[64][3] = "Ninguna de las respuestas es correcta.";
 answers[64] = 0;
 units[64] = ['114'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 8801. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[64] = 8801


//  Id pregunta: 2293 Año de creación de pregunta: 2002
 questions[65]= "66)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[65]= new Array();
 choices[65][0] = "12 meses";
 choices[65][1] = "6 meses";
 choices[65][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[65][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[65] = 3;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2293. ";
 preguntaids[65] = 2293


//  Id pregunta: 9734 Año de creación de pregunta: 2014
 questions[66]= "67)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[66]= new Array();
 choices[66][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[66][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[66][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[66][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[66] = 2;
 units[66] = ['121'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9734. ";
 preguntaids[66] = 9734


//  Id pregunta: 1746 Año de creación de pregunta: 2016
 questions[67]= "68)  El est&aacute;ndar IEEE 802.3ae define una versi&oacute;n de Ethernet con una velocidad nominal de:";
 choices[67]= new Array();
 choices[67][0] = "1 Gbit/s.";
 choices[67][1] = "100 Mbit/s.";
 choices[67][2] = "10 Gbit/s.";
 choices[67][3] = "1 Tbit/s.";
 answers[67] = 2;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1746. ";
 preguntaids[67] = 1746


//  Id pregunta: 6485 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Qu&eacute; sistemas de racionalizaci&oacute;n de compras incluye el RD Legislativo 3/2011 de contratos del sector p&uacute;blico (art&iacute;culo 194)?";
 choices[68]= new Array();
 choices[68][0] = "Acuerdos marco";
 choices[68][1] = "Sistemas din&aacute;micos de adquisici&oacute;n";
 choices[68][2] = "Centrales de contrataci&oacute;n";
 choices[68][3] = "Incluye las tres anteriores";
 answers[68] = 3;
 units[68] = ['37'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 6485. ";
 preguntaids[68] = 6485


//  Id pregunta: 1486 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un resultado del proceso de Construcci&oacute;n de Sistemas de Informaci&oacute;n de M&eacute;trica Versi&oacute;n 3?";
 choices[69]= new Array();
 choices[69][0] = "Procedimientos de seguridad y control de acceso.";
 choices[69][1] = "Especificaci&oacute;n de la formaci&oacute;n a usuarios finales.";
 choices[69][2] = "Procedimientos de migraci&oacute;n y carga inicial de datos.";
 choices[69][3] = "Sistema en producci&oacute;n.";
 answers[69] = 3;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 1486. ";
 preguntaids[69] = 1486


//  Id pregunta: 10435 Año de creación de pregunta: 2015
 questions[70]= "71)  Sobre qu&eacute; actos un licitador puede interponer el recurso especial en materia de contrataci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "&Uacute;nicamente los anuncios de licitaci&oacute;n y los pliegos de los contratos SARA.";
 choices[70][1] = "Los acuerdos de licitaci&oacute;n de cualquier contrato, sea o no SARA.";
 choices[70][2] = "Los anuncios de licitaci&oacute;n, los pliegos, los actos de tr&aacute;mite cualificados as&iacute; como los acuerdos de licitaci&oacute;n de los contratos SARA.";
 choices[70][3] = "Ninguna es verdadera.";
 answers[70] = 2;
 units[70] = ['37'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 10435. ";
 preguntaids[70] = 10435


//  Id pregunta: 2462 Año de creación de pregunta: 2002
 questions[71]= "72)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[71]= new Array();
 choices[71][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[71][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[71][2] = "la direcci&oacute;n electr&oacute;nica &uacute;nica tendr&aacute; una vigencia de 5 a&ntilde;os";
 choices[71][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[71] = 2;
 units[71] = ['19'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 2462. ";
 preguntaids[71] = 2462


//  Id pregunta: 5728 Año de creación de pregunta: 2007
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes aspectos NO son tratados en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?:";
 choices[72]= new Array();
 choices[72][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[72][1] = "promueve la elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[72][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a la informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[72][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[72] = 0;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 5728. ";
 preguntaids[72] = 5728


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[73]= "74)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[73]= new Array();
 choices[73][0] = "Carta de servicios electr&oacute;nicos";
 choices[73][1] = "Carta de servicios";
 choices[73][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[73][3] = "Debe disponer de todos los anteriores";
 answers[73] = 3;
 units[73] = ['2'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 8431. ";
 preguntaids[73] = 8431


//  Id pregunta: 10821 Año de creación de pregunta: 2015
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l no es una metodolog&iacute;a &aacute;gil:";
 choices[74]= new Array();
 choices[74][0] = "Lean Programming";
 choices[74][1] = "OpenUP";
 choices[74][2] = "MSF";
 choices[74][3] = "AUP";
 answers[74] = 2;
 units[74] = ['84'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 10821. ";
 preguntaids[74] = 10821


