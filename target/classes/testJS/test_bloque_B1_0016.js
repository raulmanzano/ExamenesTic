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
//  Id pregunta: 8115 Año de creación de pregunta: 2011
 questions[0]= "1)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[0]= new Array();
 choices[0][0] = "Debe disponer de puertas de acceso grandes.";
 choices[0][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[0][2] = "Debe evitar tener ventanas.";
 choices[0][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[0] = 1;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8115. Examen TIC A2 2010";
 preguntaids[0] = 8115


//  Id pregunta: 8044 Año de creación de pregunta: 2011
 questions[1]= "2)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:";
 choices[1]= new Array();
 choices[1][0] = "La Presidencia del Gobierno";
 choices[1][1] = "El Ministerio de la Presidencia.";
 choices[1][2] = "La Red SARA.";
 choices[1][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[1] = 1;
 units[1] = ['43'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8044. Examen TIC A2 2010";
 preguntaids[1] = 8044


//  Id pregunta: 7934 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[2]= new Array();
 choices[2][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite.";
 choices[2][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[2][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto.";
 choices[2][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[2] = 0;
 units[2] = ['47'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 7934. Examen TIC A2 2010";
 preguntaids[2] = 7934


//  Id pregunta: 7900 Año de creación de pregunta: 2011
 questions[3]= "4)  De las siguientes sentencias, indicar la correcta:";
 choices[3]= new Array();
 choices[3][0] = "Cuanto mayor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[3][1] = "Cuanto menor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[3][2] = "Cuando el Payback es mayor que el m&aacute;ximo per&iacute;odo definido por la empresa, entonces se debe aceptar el proyecto.";
 choices[3][3] = "El Payback de un sistema, no muestra si es atractivo o no para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 answers[3] = 1;
 units[3] = ['40'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 7900. Examen TIC A2 2010";
 preguntaids[3] = 7900


//  Id pregunta: 8046 Año de creación de pregunta: 2011
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma:";
 choices[4]= new Array();
 choices[4][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[4][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[4][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[4][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado.";
 answers[4] = 2;
 units[4] = ['47'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 8046. Examen TIC A2 2010";
 preguntaids[4] = 8046


//  Id pregunta: 8119 Año de creación de pregunta: 2011
 questions[5]= "6)  La segunda versi&oacute;n de la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT v2) define un conjunto de procesos para realizar el an&aacute;lisis y gesti&oacute;n de riesgos, &iquest;Cu&aacute;l de las siguientes actividades pertenece al proceso P1 &quot;Planificaci&oacute;n&quot;?";
 choices[5]= new Array();
 choices[5][0] = "Lanzamiento del proyecto.";
 choices[5][1] = "Toma de decisiones.";
 choices[5][2] = "Ejecuci&oacute;n del plan.";
 choices[5][3] = "Estimaci&oacute;n del estado de riesgo.";
 answers[5] = 0;
 units[5] = ['32'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 8119. Examen TIC A2 2010";
 preguntaids[5] = 8119


//  Id pregunta: 8065 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[6]= new Array();
 choices[6][0] = "Medidas de protecci&oacute;n";
 choices[6][1] = "Marco organizativo";
 choices[6][2] = "Marco operacional";
 choices[6][3] = "Marco tecnol&oacute;gico";
 answers[6] = 3;
 units[6] = ['46'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 8065. ";
 preguntaids[6] = 8065


//  Id pregunta: 7710 Año de creación de pregunta: 2010
 questions[7]= "8)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[7]= new Array();
 choices[7][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[7][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos.";
 choices[7][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos.";
 choices[7][3] = "Serie I &ndash; red digital de servicios integrados.";
 answers[7] = 3;
 units[7] = ['48'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 7710. Map 2007";
 preguntaids[7] = 7710


//  Id pregunta: 7955 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet?";
 choices[8]= new Array();
 choices[8][0] = "IETF.";
 choices[8][1] = "ICANN.";
 choices[8][2] = "IAB.";
 choices[8][3] = "IRTF.";
 answers[8] = 2;
 units[8] = ['48', '103'];
 blocks[8] = ['B1', 'B4'];
 comments[8] = "Id Pregunta: 7955. Examen TIC A2 2010";
 preguntaids[8] = 7955


//  Id pregunta: 8178 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[9]= new Array();
 choices[9][0] = "ISO/IEC 9126";
 choices[9][1] = "ISO 8859";
 choices[9][2] = "ISO 14000";
 choices[9][3] = "ISO/IEC 14496";
 answers[9] = 0;
 units[9] = ['42'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 8178. Examen TIC A2 2010 interna";
 preguntaids[9] = 8178


//  Id pregunta: 8041 Año de creación de pregunta: 2011
 questions[10]= "11)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[10]= new Array();
 choices[10][0] = "B&aacute;sico";
 choices[10][1] = "Medio";
 choices[10][2] = "Alto";
 choices[10][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[10] = 2;
 units[10] = ['35'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 8041. Examen TIC A2 2010";
 preguntaids[10] = 8041


//  Id pregunta: 7914 Año de creación de pregunta: 2011
 questions[11]= "12)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[11]= new Array();
 choices[11][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[11][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[11][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[11][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[11] = 0;
 units[11] = ['40'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 7914. Examen TIC A1 2010";
 preguntaids[11] = 7914


//  Id pregunta: 8045 Año de creación de pregunta: 2011
 questions[12]= "13)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[12]= new Array();
 choices[12][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[12][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento.";
 choices[12][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento.";
 choices[12][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[12] = 1;
 units[12] = ['44'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 8045. Examen TIC A2 2010";
 preguntaids[12] = 8045


//  Id pregunta: 7898 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[13]= new Array();
 choices[13][0] = "Seguridad.";
 choices[13][1] = "Subsidiariedad.";
 choices[13][2] = "Compatibilidad del hardware.";
 choices[13][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[13] = 2;
 units[13] = ['43'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 7898. Examen TIC A1 2010";
 preguntaids[13] = 7898


//  Id pregunta: 7766 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[14]= new Array();
 choices[14][0] = "TAW3 Online.";
 choices[14][1] = "TAW3 Web Start.";
 choices[14][2] = "TAW3 Onsite.";
 choices[14][3] = "TAW3 en un clic.";
 answers[14] = 2;
 units[14] = ['42'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 7766. ";
 preguntaids[14] = 7766


//  Id pregunta: 7880 Año de creación de pregunta: 2011
 questions[15]= "16)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[15]= new Array();
 choices[15][0] = "El Plan AVANZA.";
 choices[15][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[15][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[15][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[15] = 1;
 units[15] = ['47'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7880. Examen TIC A1 2010";
 preguntaids[15] = 7880


//  Id pregunta: 7928 Año de creación de pregunta: 2011
 questions[16]= "17)  El Esquema Nacional de Interoperatibilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?:";
 choices[16]= new Array();
 choices[16][0] = "Licencia IDABC.";
 choices[16][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[16][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[16][3] = "Licencia Shareware.";
 answers[16] = 2;
 units[16] = ['43'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 7928. Examen TIC A1 2010";
 preguntaids[16] = 7928


//  Id pregunta: 7882 Año de creación de pregunta: 2011
 questions[17]= "18)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[17]= new Array();
 choices[17][0] = "M&eacute;todo Delphi.";
 choices[17][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[17][2] = "M&eacute;todo de Saaty.";
 choices[17][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[17] = 3;
 units[17] = ['38'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 7882. Examen TIC A1 2010";
 preguntaids[17] = 7882


//  Id pregunta: 8257 Año de creación de pregunta: 2011
 questions[18]= "19)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n do Datos de Car&aacute;cter Personal (LOPD) es de aplicaci&oacute;n a:";
 choices[18]= new Array();
 choices[18][0] = "&Uacute;nicamente los datos almacenados electr&oacute;nicamente, susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por lo sectores p&uacute;blico y privado.";
 choices[18][1] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por el sector p&uacute;blico, de forma obligatoria, y por el sector privado, como recomendaci&oacute;n.";
 choices[18][2] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, almacenados tanto en el sector p&uacute;blico como el privado, quedando excluidos los posibles usos posteriores de tales datos";
 choices[18][3] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por los sectores p&uacute;blico y privado";
 answers[18] = 3;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8257. Examen TIC A2 2010 interna";
 preguntaids[18] = 8257


//  Id pregunta: 8018 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos usados en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es de tipo anal&iacute;tico?";
 choices[19]= new Array();
 choices[19][0] = "Benchmarking.";
 choices[19][1] = "Teor&iacute;a de colas.";
 choices[19][2] = "Simulaci&oacute;n.";
 choices[19][3] = "Reglas basadas en la experiencia.";
 answers[19] = 1;
 units[19] = ['39', '40'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 8018. Examen TIC A2 2010";
 preguntaids[19] = 8018


//  Id pregunta: 7746 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[20]= new Array();
 choices[20][0] = "El W3C tiene una sede en Espa&ntilde;a.";
 choices[20][1] = "W3C es un organismo estadounidense.";
 choices[20][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C.";
 choices[20][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios web.";
 answers[20] = 1;
 units[20] = ['42'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 7746. ";
 preguntaids[20] = 7746


//  Id pregunta: 8006 Año de creación de pregunta: 2011
 questions[21]= "22)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA:";
 choices[21]= new Array();
 choices[21][0] = "WAVE.";
 choices[21][1] = "TrueCrypt.";
 choices[21][2] = "CSS Analyser.";
 choices[21][3] = "TAW.";
 answers[21] = 1;
 units[21] = ['42'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 8006. Examen TIC A2 2010";
 preguntaids[21] = 8006


//  Id pregunta: 7822 Año de creación de pregunta: 2010
 questions[22]= "23)  El m&eacute;todo de Saaty o AHP:";
 choices[22]= new Array();
 choices[22][0] = "Es relativo a accesibilidad web.";
 choices[22][1] = "Es relativo a la decisi&oacute;n multicriterio.";
 choices[22][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n.";
 choices[22][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo.";
 answers[22] = 1;
 units[22] = ['38'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 7822. ";
 preguntaids[22] = 7822


//  Id pregunta: 8042 Año de creación de pregunta: 2011
 questions[23]= "24)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean:";
 choices[23]= new Array();
 choices[23][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo.";
 choices[23][1] = "Por Real Decreto del Presidente del Gobierno.";
 choices[23][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate.";
 choices[23][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[23] = 0;
 units[23] = ['43'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 8042. Examen TIC A2 2010";
 preguntaids[23] = 8042


//  Id pregunta: 8043 Año de creación de pregunta: 2011
 questions[24]= "25)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra:";
 choices[24]= new Array();
 choices[24][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n.";
 choices[24][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede.";
 choices[24][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede.";
 choices[24][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[24] = 3;
 units[24] = ['43'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8043. Examen TIC A2 2010";
 preguntaids[24] = 8043


//  Id pregunta: 8213 Año de creación de pregunta: 2011
 questions[25]= "26)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[25]= new Array();
 choices[25][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[25][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[25][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[25][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[25] = 1;
 units[25] = ['31'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 8213. Examen TIC A2 2010 interna";
 preguntaids[25] = 8213


//  Id pregunta: 8204 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[26]= new Array();
 choices[26][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[26][1] = "PERT";
 choices[26][2] = "CPM";
 choices[26][3] = "El histograma de recursos";
 answers[26] = 0;
 units[26] = ['31'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 8204. Examen TIC A2 2010 interna";
 preguntaids[26] = 8204


//  Id pregunta: 7836 Año de creación de pregunta: 2010
 questions[27]= "28)  Indique la respuesta INCORRECTA:";
 choices[27]= new Array();
 choices[27][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[27][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos.";
 choices[27][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general.";
 choices[27][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 -C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n-.";
 answers[27] = 1;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 7836. ";
 preguntaids[27] = 7836


//  Id pregunta: 7899 Año de creación de pregunta: 2011
 questions[28]= "29)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[28]= new Array();
 choices[28][0] = "VAN (Valor Actual Neto).";
 choices[28][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[28][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[28][3] = "El m&eacute;todo del payback";
 answers[28] = 0;
 units[28] = ['40'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 7899. Examen TIC A2 2010";
 preguntaids[28] = 7899


//  Id pregunta: 7727 Año de creación de pregunta: 2010
 questions[29]= "30)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[29]= new Array();
 choices[29][0] = "Un experto en la materia.";
 choices[29][1] = "Un miembro de la Real Academia de la Historia.";
 choices[29][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica.";
 choices[29][3] = "Un representante de la Administraci&oacute;n Local.";
 answers[29] = 2;
 units[29] = ['35'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7727. Map 2007";
 preguntaids[29] = 7727


//  Id pregunta: 8067 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?";
 choices[30]= new Array();
 choices[30][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[30][1] = "Documento electr&oacute;nico";
 choices[30][2] = "Expediente electr&oacute;nico";
 choices[30][3] = "Sede electr&oacute;nica";
 answers[30] = 3;
 units[30] = ['43'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 8067. ";
 preguntaids[30] = 8067


//  Id pregunta: 7754 Año de creación de pregunta: 2010
 questions[31]= "32)  Seg&uacute;n el m&eacute;todo del camino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[31]= new Array();
 choices[31][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone de todos los recursos necesarios.";
 choices[31][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[31][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar la duraci&oacute;n total del proyecto.";
 choices[31][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[31] = 3;
 units[31] = ['33'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 7754. ";
 preguntaids[31] = 7754


//  Id pregunta: 8261 Año de creación de pregunta: 2011
 questions[32]= "33)  En relaci&oacute;n con la inscripci&oacute;n de ficheros en el Registro General de Protecci&oacute;n de datos, la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[32]= new Array();
 choices[32][0] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; inscrito a todos los efectos";
 choices[32][1] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; desestimada la solicitud, con posibilidad de Interposici&oacute;n del correspondiente recurso especial en materia de protecci&oacute;n de datos de car&aacute;cter personal.";
 choices[32][2] = "Debe contestar en el plazo m&aacute;ximo de 10 d&iacute;as, prorrogables hasta 1 mes, por motivos justificados, con obligaci&oacute;n de resolver. En caso de no contestar en tal plazo, se entender&aacute; Inscrito a todos los efectos.";
 choices[32][3] = "No realiza la inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos sino que emite un Informe preceptivo y no vinculante, en un plazo de 1 mes, sobre la adecuaci&oacute;n de la solicitud. En el caso de no emitirlo en dicho plazo se entender&aacute; como favorable a todos los efectos.";
 answers[32] = 0;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 8261. Examen TIC A2 2010 interna";
 preguntaids[32] = 8261


//  Id pregunta: 8258 Año de creación de pregunta: 2011
 questions[33]= "34)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[33]= new Array();
 choices[33][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[33][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[33][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[33][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[33] = 0;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 8258. Examen TIC A2 2010 interna";
 preguntaids[33] = 8258


//  Id pregunta: 7913 Año de creación de pregunta: 2011
 questions[34]= "35)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[34]= new Array();
 choices[34][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[34][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[34][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[34][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[34] = 3;
 units[34] = ['41'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 7913. Examen TIC A1 2010";
 preguntaids[34] = 7913


//  Id pregunta: 7777 Año de creación de pregunta: 2010
 questions[35]= "36)  Seg&uacute;n Magerit versi&oacute;n 3 en un proyecto de an&aacute;lisis de gesti&oacute;n de riesgos, qu&eacute; producto de salida de los citados a continuaci&oacute;n NO se genera en la tarea de Planificaci&oacute;n del proyecto:";
 choices[35]= new Array();
 choices[35][0] = "Relaci&oacute;n de participantes en los grupos de interlocutores.";
 choices[35][1] = "Plan de entrevistas.";
 choices[35][2] = "Informe de recursos necesarios.";
 choices[35][3] = "Especificaci&oacute;n detallada de los objetivos del proyecto.";
 answers[35] = 3;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 7777. ";
 preguntaids[35] = 7777


//  Id pregunta: 7787 Año de creación de pregunta: 2010
 questions[36]= "37)  El JTC es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[36]= new Array();
 choices[36][0] = "CEN y CENELEC.";
 choices[36][1] = "ISO e IEC.";
 choices[36][2] = "CEN y ETSI.";
 choices[36][3] = "ISO y CIE.";
 answers[36] = 1;
 units[36] = ['48'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 7787. ";
 preguntaids[36] = 7787


//  Id pregunta: 7902 Año de creación de pregunta: 2011
 questions[37]= "38)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[37][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[37][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[37][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[37] = 3;
 units[37] = ['41'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 7902. Examen TIC A1 2010";
 preguntaids[37] = 7902


//  Id pregunta: 7892 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[38]= new Array();
 choices[38][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[38][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2012.";
 choices[38][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[38][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[38] = 1;
 units[38] = ['42'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 7892. Examen TIC A1 2010";
 preguntaids[38] = 7892


//  Id pregunta: 7884 Año de creación de pregunta: 2011
 questions[39]= "40)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[39]= new Array();
 choices[39][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[39][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[39][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[39][3] = "Los certificados de sede electr&oacute;nica.";
 answers[39] = 3;
 units[39] = ['47'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 7884. Examen TIC A1 2010";
 preguntaids[39] = 7884


//  Id pregunta: 7908 Año de creación de pregunta: 2011
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[40]= new Array();
 choices[40][0] = "Funci&oacute;n diferenciada.";
 choices[40][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[40][2] = "L&iacute;neas de defensa.";
 choices[40][3] = "Continuidad de la actividad.";
 answers[40] = 3;
 units[40] = ['46'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 7908. Examen TIC A1 2010";
 preguntaids[40] = 7908


//  Id pregunta: 7894 Año de creación de pregunta: 2011
 questions[41]= "42)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[41]= new Array();
 choices[41][0] = "Infracci&oacute;n leve.";
 choices[41][1] = "Infracci&oacute;n notable.";
 choices[41][2] = "Infracci&oacute;n grave.";
 choices[41][3] = "Infracci&oacute;n muy grave.";
 answers[41] = 2;
 units[41] = ['35'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 7894. Examen TIC A1 2010";
 preguntaids[41] = 7894


//  Id pregunta: 8014 Año de creación de pregunta: 2011
 questions[42]= "43)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[42]= new Array();
 choices[42][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[42][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[42][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[42][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[42] = 3;
 units[42] = ['42'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 8014. Examen TIC A2 2010";
 preguntaids[42] = 8014


//  Id pregunta: 8184 Año de creación de pregunta: 2011
 questions[43]= "44)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[43]= new Array();
 choices[43][0] = "Administraci&oacute;n de seguridad";
 choices[43][1] = "Programaci&oacute;n de aplicaciones";
 choices[43][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[43][3] = "Aseguramiento de la calidad";
 answers[43] = 1;
 units[43] = ['30'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 8184. Examen TIC A2 2010 interna";
 preguntaids[43] = 8184


//  Id pregunta: 7775 Año de creación de pregunta: 2010
 questions[44]= "45)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Real Decreto 1720/2007, de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[44]= new Array();
 choices[44][0] = "Un mes.";
 choices[44][1] = "Dos meses.";
 choices[44][2] = "Tres meses.";
 choices[44][3] = "Seis meses.";
 answers[44] = 0;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 7775. ";
 preguntaids[44] = 7775


//  Id pregunta: 7718 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Cu&aacute;l es la naturaleza jur&iacute;dica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[45]= new Array();
 choices[45][0] = "Organismo aut&oacute;nomo.";
 choices[45][1] = "Entidad P&uacute;blica Empresarial.";
 choices[45][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica.";
 choices[45][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;n adicional d&eacute;cima de la LOFAGE).";
 answers[45] = 2;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 7718. Map 2007";
 preguntaids[45] = 7718


//  Id pregunta: 8256 Año de creación de pregunta: 2011
 questions[46]= "47)  Una empresa crea legalmente un fichero de datos personales que utiliza para su tratamiento, pero sin llevar a cabo una correcta actualizaci&oacute;n cuando se producen cambios en los mismos. De entre los &quot;principios de protecci&oacute;n de datos&quot; incluidos en la Ley 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;cu&aacute;l se estar&iacute;a incumpliendo?";
 choices[46]= new Array();
 choices[46][0] = "Calidad de los datos";
 choices[46][1] = "Veracidad de la informaci&oacute;n.";
 choices[46][2] = "Actualizaci&oacute;n peri&oacute;dica";
 choices[46][3] = "Seguimiento de los datos.";
 answers[46] = 0;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 8256. Examen TIC A2 2010 interna";
 preguntaids[46] = 8256


//  Id pregunta: 7763 Año de creación de pregunta: 2010
 questions[47]= "48)  Las caracter&iacute;sticas del m&eacute;todo Delphi son:";
 choices[47]= new Array();
 choices[47][0] = "Confidencialidad, integridad del grupo y disponibilidad.";
 choices[47][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica.";
 choices[47][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia.";
 choices[47][3] = "Convergencia, coherencia del grupo y salvaguarda.";
 answers[47] = 1;
 units[47] = ['31'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 7763. ";
 preguntaids[47] = 7763


//  Id pregunta: 7917 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;C&uacute;al de las siguientes organizaciones realiza actuaciones para la persecuci&oacute;n legal de la pirater&iacute;a inform&aacute;tica y para evitar la violaci&oacute;n de los derechos de copyright?:";
 choices[48]= new Array();
 choices[48][0] = "BSA ( Business Software Alliance).";
 choices[48][1] = "GSC ( General Software Committee).";
 choices[48][2] = "DRG (Digital Right Group).";
 choices[48][3] = "SSC (Secure Software Commission).";
 answers[48] = 0;
 units[48] = ['41'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 7917. Examen TIC A1 2010";
 preguntaids[48] = 7917


//  Id pregunta: 7874 Año de creación de pregunta: 2011
 questions[49]= "50)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[49]= new Array();
 choices[49][0] = "0,5 ; 0,7 ; 1";
 choices[49][1] = "0,227 ; 0,318 ; 0,454";
 choices[49][2] = "0; 0,4; 1";
 choices[49][3] = "1 ; 1,4 ; 2";
 answers[49] = 2;
 units[49] = ['38'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 7874. Examen TIC A1 2010";
 preguntaids[49] = 7874


//  Id pregunta: 8063 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[50]= new Array();
 choices[50][0] = "Seguridad transversal";
 choices[50][1] = "Gesti&oacute;n de riesgos";
 choices[50][2] = "L&iacute;neas de defensa";
 choices[50][3] = "Funci&oacute;n diferenciada";
 answers[50] = 0;
 units[50] = ['46'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8063. ";
 preguntaids[50] = 8063


//  Id pregunta: 7736 Año de creación de pregunta: 2010
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministro de Industria, Turismo y Comercio.";
 choices[51][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno.";
 choices[51][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa.";
 choices[51][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[51] = 2;
 units[51] = ['35'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 7736. ";
 preguntaids[51] = 7736


//  Id pregunta: 7729 Año de creación de pregunta: 2010
 questions[52]= "53)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones, en relaci&oacute;n con la duraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la persona titular del derecho, es cierta?";
 choices[52]= new Array();
 choices[52][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n del programa.";
 choices[52][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 de enero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa.";
 choices[52][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa.";
 choices[52][3] = "Cuando el autor sea una persona natural, durar&aacute; toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 answers[52] = 3;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 7729. Map 2007";
 preguntaids[52] = 7729


//  Id pregunta: 8259 Año de creación de pregunta: 2011
 questions[53]= "54)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[53]= new Array();
 choices[53][0] = "El encargado del fichero o del tratamiento.";
 choices[53][1] = "El responsable del fichero o del tratamiento.";
 choices[53][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[53][3] = "El propietario del fichero o del tratamiento.";
 answers[53] = 1;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 8259. Examen TIC A2 2010 interna";
 preguntaids[53] = 8259


//  Id pregunta: 7896 Año de creación de pregunta: 2011
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[54]= new Array();
 choices[54][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[54][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[54][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[54][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[54] = 1;
 units[54] = ['47'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 7896. Examen TIC A1 2010";
 preguntaids[54] = 7896


//  Id pregunta: 7806 Año de creación de pregunta: 2010
 questions[55]= "56)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[55]= new Array();
 choices[55][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez.";
 choices[55][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n.";
 choices[55][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez.";
 choices[55][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n.";
 answers[55] = 2;
 units[55] = ['25'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7806. ";
 preguntaids[55] = 7806


//  Id pregunta: 7893 Año de creación de pregunta: 2011
 questions[56]= "57)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[56]= new Array();
 choices[56][0] = "Una Secretar&iacute;a de Estado.";
 choices[56][1] = "Una Subsecretar&iacute;a.";
 choices[56][2] = "Una Subdirecci&oacute;n General.";
 choices[56][3] = "Una Direcci&oacute;n General.";
 answers[56] = 3;
 units[56] = ['47'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 7893. Examen TIC A1 2010";
 preguntaids[56] = 7893


//  Id pregunta: 8087 Año de creación de pregunta: 2011
 questions[57]= "58)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastres se le denomina:";
 choices[57]= new Array();
 choices[57][0] = "RTO";
 choices[57][1] = "RPO";
 choices[57][2] = "SDO";
 choices[57][3] = "RDO";
 answers[57] = 1;
 units[57] = ['45'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 8087. Analista Ayto. Madrid 2010";
 preguntaids[57] = 8087


//  Id pregunta: 7760 Año de creación de pregunta: 2010
 questions[58]= "59)  BSA es:";
 choices[58]= new Array();
 choices[58][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web.";
 choices[58][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente.";
 choices[58][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software.";
 choices[58][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo.";
 answers[58] = 2;
 units[58] = ['41'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 7760. ";
 preguntaids[58] = 7760


//  Id pregunta: 8120 Año de creación de pregunta: 2011
 questions[59]= "60)  Seg&uacute;n MAGERlT /2 los activos se agrupan en capas que van de la capa 1 a la capa 5. &iquest;En qu&eacute; capa se encuentra el Hardware?";
 choices[59]= new Array();
 choices[59][0] = "Capa 1";
 choices[59][1] = "Capa 2";
 choices[59][2] = "Capa 3";
 choices[59][3] = "Capa 4";
 answers[59] = 1;
 units[59] = ['32'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 8120. Examen TIC A2 2010";
 preguntaids[59] = 8120


//  Id pregunta: 8114 Año de creación de pregunta: 2011
 questions[60]= "61)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de riesgos.";
 choices[60][1] = "An&aacute;lisis de salvaguardias.";
 choices[60][2] = "An&aacute;lisis de riesgos.";
 choices[60][3] = "Gesti&oacute;n de salvaguardias.";
 answers[60] = 2;
 units[60] = ['45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 8114. Examen TIC A2 2010 interna";
 preguntaids[60] = 8114


//  Id pregunta: 8066 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[61]= new Array();
 choices[61][0] = "La interoperabilidad como cualidad integral";
 choices[61][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[61][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[61][3] = "El enfoque de soluciones multilaterales";
 answers[61] = 1;
 units[61] = ['43'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 8066. ";
 preguntaids[61] = 8066


//  Id pregunta: 8125 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;C&oacute;mo se conoce a la disciplina en la que se estudian y aplican t&eacute;cnicas que permiten el ocultamiento de informaci&oacute;n o archivos, dentro de otros, llamados portadores, de modo que NO se perciba su existencia?";
 choices[62]= new Array();
 choices[62][0] = "Esteganograf&iacute;a.";
 choices[62][1] = "Criptograf&iacute;a.";
 choices[62][2] = "Criptoan&aacute;lisis.";
 choices[62][3] = "Estegan&aacute;lisis.";
 answers[62] = 0;
 units[62] = ['41'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 8125. Examen TIC A2 2010";
 preguntaids[62] = 8125


//  Id pregunta: 8179 Año de creación de pregunta: 2011
 questions[63]= "64)  En el contexto de las tareas de explotaci&oacute;n de sistemas de informaci&oacute;n, se denominan tareas u operaciones &quot;lights-out&quot; a:";
 choices[63]= new Array();
 choices[63][0] = "Las tareas u operaciones automatizadas, que se llevan a cabo sin intervenci&oacute;n humana, de forma desatendida";
 choices[63][1] = "Las tareas incluidas en el plan de contingencias, a llevar a cabo en caso de corte del suminstro el&eacute;ctrico.";
 choices[63][2] = "Las tareas que no se pueden automatizar, por lo que necesariamente requieren personal para su realizaci&oacute;n.";
 choices[63][3] = "Las tareas criticas, que requieren su Inclusi&oacute;n especifica en el plan de contingencias, en una localizaci&oacute;n f&iacute;sica alternativa a la habitual.";
 answers[63] = 0;
 units[63] = ['30'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 8179. Examen TIC A2 2010 interna";
 preguntaids[63] = 8179


//  Id pregunta: 8172 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[64]= new Array();
 choices[64][0] = "Uso equiparable";
 choices[64][1] = "Uso flexible";
 choices[64][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[64][3] = "Robusto";
 answers[64] = 3;
 units[64] = ['42'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 8172. Examen TIC A2 2010 interna";
 preguntaids[64] = 8172


//  Id pregunta: 8064 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes principios no aparece como b&aacute;sico en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[65]= new Array();
 choices[65][0] = "Seguridad integral";
 choices[65][1] = "An&aacute;lisis de riesgos";
 choices[65][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[65][3] = "Funci&oacute;n diferenciada";
 answers[65] = 1;
 units[65] = ['46'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 8064. El principio es gesti&oacute;n de riesgos, no an&aacute;lisis de riesgos.";
 preguntaids[65] = 8064


//  Id pregunta: 8260 Año de creación de pregunta: 2011
 questions[66]= "67)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[66]= new Array();
 choices[66][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[66][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[66][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[66][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[66] = 2;
 units[66] = ['35'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 8260. Examen TIC A2 2010 interna";
 preguntaids[66] = 8260


//  Id pregunta: 7709 Año de creación de pregunta: 2010
 questions[67]= "68)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad cr&iacute;tica es una actividad:";
 choices[67]= new Array();
 choices[67][0] = "Con un alto riesgo de incrementar su duraci&oacute;n.";
 choices[67][1] = "Con dependencia de otra actividad y de la que depende al menos una actividad.";
 choices[67][2] = "En el camino cr&iacute;tico.";
 choices[67][3] = "Cuya duraci&oacute;n no puede modificarse.";
 answers[67] = 2;
 units[67] = ['31'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 7709. Map 2007";
 preguntaids[67] = 7709


//  Id pregunta: 8254 Año de creación de pregunta: 2011
 questions[68]= "69)  La protecci&oacute;n de datos personales encuentra una de sus bases en:";
 choices[68]= new Array();
 choices[68][0] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, en concreto, en Ley Org&aacute;nica 15/1999 de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD).";
 choices[68][1] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, inici&aacute;ndose en la Ley Org&aacute;nica 5/1992, de 29 de octubre, de Regulaci&oacute;n del Tratamiento Automatizado de Datos de car&aacute;cter personal (LORTAD)";
 choices[68][2] = "La Carta Europea de Derechos Fundamentales de la Uni&oacute;n Europea, por la que se reconoce el derecho a la protecci&oacute;n de datos personales como un derecho fundamental.";
 choices[68][3] = "La protecci&oacute;n de los derechos de autor en el mundo digital, en tanto el autor sea una persona f&iacute;sica";
 answers[68] = 2;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 8254. Examen TIC A2 2010 interna";
 preguntaids[68] = 8254


//  Id pregunta: 8062 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[69]= new Array();
 choices[69][0] = "Responsable del fichero";
 choices[69][1] = "Responsable de la informaci&oacute;n";
 choices[69][2] = "Responsable del servicio";
 choices[69][3] = "Responsable de seguridad";
 answers[69] = 0;
 units[69] = ['46'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8062. El responsable del fichero es un concepto relacionado con la LOPD.";
 preguntaids[69] = 8062


//  Id pregunta: 7792 Año de creación de pregunta: 2010
 questions[70]= "71)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[70]= new Array();
 choices[70][0] = "Puntuaciones normalizadas.";
 choices[70][1] = "Factor de ponderaci&oacute;n de los criterios.";
 choices[70][2] = "Coeficiente de concordancia.";
 choices[70][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n.";
 answers[70] = 2;
 units[70] = ['38'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 7792. ";
 preguntaids[70] = 7792


//  Id pregunta: 7801 Año de creación de pregunta: 2010
 questions[71]= "72)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[71]= new Array();
 choices[71][0] = "Miembros Plenos.";
 choices[71][1] = "Miembros Coordinadores.";
 choices[71][2] = "Miembros Asociados.";
 choices[71][3] = "Miembros Consejeros.";
 answers[71] = 1;
 units[71] = ['48'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 7801. ";
 preguntaids[71] = 7801


//  Id pregunta: 8189 Año de creación de pregunta: 2011
 questions[72]= "73)  El tipo de mantenimiento de equipos que se realiza en las instalaciones del prestador del servicio de mantenimiento y NO en las Instalaciones del cliente, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Out-side";
 choices[72][1] = "Off-side";
 choices[72][2] = "In-site";
 choices[72][3] = "On-site";
 answers[72] = 3;
 units[72] = ['26'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 8189. Examen TIC A2 2010 interna";
 preguntaids[72] = 8189


//  Id pregunta: 7701 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSDAAPP v.3.0?";
 choices[73]= new Array();
 choices[73][0] = "Ponderaci&oacute;n Lineal.";
 choices[73][1] = "Permutaci&oacute;n.";
 choices[73][2] = "Prometh&eacute;e.";
 choices[73][3] = "Distancia al Ideal (TOPSIS).";
 answers[73] = 1;
 units[73] = ['38'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 7701. Map 2007";
 preguntaids[73] = 7701


//  Id pregunta: 7816 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[74]= new Array();
 choices[74][0] = "ATAG.";
 choices[74][1] = "UAAG.";
 choices[74][2] = "WCED.";
 choices[74][3] = "WCAG.";
 answers[74] = 2;
 units[74] = ['42'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 7816. ";
 preguntaids[74] = 7816


