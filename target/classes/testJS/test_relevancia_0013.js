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
//  Id pregunta: 1843 Año de creación de pregunta: 2016
 questions[0]= "1)  Las redes ATM emplean celdas de:";
 choices[0]= new Array();
 choices[0][0] = "Tama&ntilde;o variable: entre 5 y 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n.";
 choices[0][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n.";
 choices[0][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[0][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[0] = 1;
 units[0] = ['107'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1843. ";
 preguntaids[0] = 1843


//  Id pregunta: 4825 Año de creación de pregunta: 2002
 questions[1]= "2)  En los sistemas de conmutaci&oacute;n de paquetes:";
 choices[1]= new Array();
 choices[1][0] = "Se pueden distinguir dos tipos fundamentales : datagrama y circuito l&oacute;gico";
 choices[1][1] = "En estas redes existe un tiempo de espera producido por la sobrecarga de paquetes en algunos nodos";
 choices[1][2] = "Los tiempos de espera se reducen mediante diversas t&eacute;cnicas de encaminamiento";
 choices[1][3] = "Para evitar la congesti&oacute;n de la red se estudian las rutas &oacute;ptimas para cada par de nodos y se guardan en un nodo central";
 answers[1] = 2;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4825. ";
 preguntaids[1] = 4825


//  Id pregunta: 1224 Año de creación de pregunta: 2016
 questions[2]= "3)  NO es un formato de firma electr&oacute;nica recogida en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[2]= new Array();
 choices[2][0] = "XAdES";
 choices[2][1] = "PKCS#11";
 choices[2][2] = "PAdES";
 choices[2][3] = "XML-Dsig";
 answers[2] = 1;
 units[2] = ['44'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 1224. ";
 preguntaids[2] = 1224


//  Id pregunta: 1484 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l es la norma ISO (Organizaci&oacute;n Internacional de Estandarizaci&oacute;n) relativa a la documentaci&oacute;n para usuarios de software?";
 choices[3]= new Array();
 choices[3][0] = "ISO/IEC 26514:2008";
 choices[3][1] = "ISO 9001:2000";
 choices[3][2] = "ISO 30300";
 choices[3][3] = "ISO 27002";
 answers[3] = 0;
 units[3] = ['82'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 1484. ";
 preguntaids[3] = 1484


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[4]= "5)  La Poblaci&oacute;n Activa incluye a:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[4][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[4][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[4][3] = "Todo aquel que desea trabajar";
 answers[4] = 2;
 units[4] = ['15'];
 blocks[4] = ['A3'];
 comments[4] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[4] = 415


//  Id pregunta: 7314 Año de creación de pregunta: 2010
 questions[5]= "6)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[5]= new Array();
 choices[5][0] = "Establecimiento de Requisitos";
 choices[5][1] = "Identificaci&oacute;n de Requisitos";
 choices[5][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[5][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[5] = 0;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7314. ";
 preguntaids[5] = 7314


//  Id pregunta: 2395 Año de creación de pregunta: 2006
 questions[6]= "7)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD:";
 choices[6]= new Array();
 choices[6][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[6][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[6][2] = "Las comunicaciones al Consejo de Estado";
 choices[6][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[6] = 2;
 units[6] = ['35'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2395. ";
 preguntaids[6] = 2395


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[7]= "8)  El Parlamento Europeo celebrar&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[7][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[7][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[7][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[7] = 0;
 units[7] = ['5'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 112. Uni&oacute;n Europea";
 preguntaids[7] = 112


//  Id pregunta: 3434 Año de creación de pregunta: 2006
 questions[8]= "9)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[8]= new Array();
 choices[8][0] = "Data sparsity.";
 choices[8][1] = "Data cleansing.";
 choices[8][2] = "Data mining.";
 choices[8][3] = "Data explosion.";
 answers[8] = 0;
 units[8] = ['72'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3434. ";
 preguntaids[8] = 3434


//  Id pregunta: 6016 Año de creación de pregunta: 2003
 questions[9]= "10)  &Aacute;lvaro est&aacute; iniciando las tareas de planificaci&oacute;n de un nuevo proyecto software, y ha efectuado unos c&aacute;lculos previos de &ldquo;puntos de funci&oacute;n&rdquo;. La t&eacute;cnica de Puntos de Funci&oacute;n es una t&eacute;cnica indirecta para determinar:";
 choices[9]= new Array();
 choices[9][0] = "La calidad de una aplicaci&oacute;n software y la tasa de errores prevista.";
 choices[9][1] = "La dimensi&oacute;n de un proyecto inform&aacute;tico y su probable coste.";
 choices[9][2] = "La usabilidad de un interfaz y la previsi&oacute;n de errores de usuario.";
 choices[9][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n.";
 answers[9] = 1;
 units[9] = ['92'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6016. TIC B 2007";
 preguntaids[9] = 6016


//  Id pregunta: 950 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[10]= new Array();
 choices[10][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[10][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[10][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = 1;
 units[10] = ['34', '84'];
 blocks[10] = ['B1', 'B3'];
 comments[10] = "Id Pregunta: 950. Metodologias &aacute;giles";
 preguntaids[10] = 950


//  Id pregunta: 4212 Año de creación de pregunta: 2006
 questions[11]= "12)  La Planificaci&oacute;n de Sistemas de Informaci&oacute;n, seg&uacute;n M&Eacute;TRICA 3, tiene por objeto:";
 choices[11]= new Array();
 choices[11][0] = "Obtener un marco de referencia para el desarrollo de sistemas de informaci&oacute;n que respondan a los objetivos estrat&eacute;gicos y operativos de la organizaci&oacute;n.";
 choices[11][1] = "Recoger el conjunto de reglas que aseguran una decisi&oacute;n &oacute;ptima en cada momento.";
 choices[11][2] = "La previsi&oacute;n en fechas de la realizaci&oacute;n del conjunto de actividades que comprende la construcci&oacute;n del sistema, teniendo en cuenta los recursos a emplear y el coste de los mismos.";
 choices[11][3] = "Todo lo anterior.";
 answers[11] = 0;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4212. ";
 preguntaids[11] = 4212


//  Id pregunta: 8804 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[12]= new Array();
 choices[12][0] = "Fibra 62.5/125 um";
 choices[12][1] = "Fibra 50/125 um";
 choices[12][2] = "Fibra 200/380 um";
 choices[12][3] = "Fibra 10/125 um";
 answers[12] = 3;
 units[12] = ['106'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8804. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[12] = 8804


//  Id pregunta: 1705 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n M&eacute;trica v.3, las pruebas del sistema que consisten en determinar que los tiempos de respuesta est&aacute;n dentro de los intervalos establecidos en las especificaciones del sistema son:";
 choices[13]= new Array();
 choices[13][0] = "Pruebas de volumen.";
 choices[13][1] = "Pruebas de rendimiento.";
 choices[13][2] = "Pruebas de sobrecarga.";
 choices[13][3] = "Pruebas de operaci&oacute;n.";
 answers[13] = 1;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 1705. ";
 preguntaids[13] = 1705


//  Id pregunta: 2829 Año de creación de pregunta: 2002
 questions[14]= "15)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[14]= new Array();
 choices[14][0] = "Esquema externo";
 choices[14][1] = "Esquema legal";
 choices[14][2] = "Esquema conceptual";
 choices[14][3] = "Esquema interno";
 answers[14] = 1;
 units[14] = ['60'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2829. ";
 preguntaids[14] = 2829


//  Id pregunta: 3631 Año de creación de pregunta: 2004
 questions[15]= "16)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[15]= new Array();
 choices[15][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[15][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[15][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[15][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[15] = 0;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3631. Pregunta Junta Andalucia - A";
 preguntaids[15] = 3631


//  Id pregunta: 2181 Año de creación de pregunta: 2002
 questions[16]= "17)  En una auditor&iacute;a de comunicaciones al realizar un an&aacute;lisis detallado de los costes operativos, no ser&aacute; relevante considerar:";
 choices[16]= new Array();
 choices[16][0] = "Volumen de datos transmitidos";
 choices[16][1] = "Tiempos de duraci&oacute;n de conexi&oacute;n";
 choices[16][2] = "Protocolo de comunicaci&oacute;n";
 choices[16][3] = "Facilidades est&aacute;ticas y din&aacute;micas de conexi&oacute;n";
 answers[16] = 2;
 units[16] = ['36', '45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2181. ";
 preguntaids[16] = 2181


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[17]= new Array();
 choices[17][0] = "No se aplican directamente en los Estados.";
 choices[17][1] = "No son vinculantes.";
 choices[17][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[17][3] = "Tienen alcance general.";
 answers[17] = 0;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 176. Uni&oacute;n Europea";
 preguntaids[17] = 176


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[18][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[18][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[18][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[18] = 2;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 28. Constituci&oacute;n de 1978";
 preguntaids[18] = 28


//  Id pregunta: 6371 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[19][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[19][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[19][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[19] = 2;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6371. Examen 2006 JCYL";
 preguntaids[19] = 6371


//  Id pregunta: 10190 Año de creación de pregunta: 2015
 questions[20]= "21)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[20]= new Array();
 choices[20][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[20][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[20][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[20][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[20] = 2;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10190. Examen TIC A1 2014";
 preguntaids[20] = 10190


//  Id pregunta: 3927 Año de creación de pregunta: 2002
 questions[21]= "22)  Los criterios, ordenados de menor a mayor, para definir el nivel de cohesi&oacute;n son:";
 choices[21]= new Array();
 choices[21][0] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[21][1] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[21][2] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[21][3] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 answers[21] = 1;
 units[21] = ['89'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3927. ";
 preguntaids[21] = 3927


//  Id pregunta: 10604 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n la Ley 9/2014, cu&aacute;l de los siguientes NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicos dispuestos al p&uacute;blico:";
 choices[22]= new Array();
 choices[22][0] = "Derecho a la continuidad de servicio y a obtener compensaci&oacute;n por su interrupci&oacute;n.";
 choices[22][1] = "Derecho de acceso a servicio de emergencias de forma gratuita.";
 choices[22][2] = "Derecho a informaci&oacute;n veraz, eficaz, suficiente y transparente.";
 choices[22][3] = "Derecho a autorizar el desv&iacute;o automatizado de llamadas.";
 answers[22] = 3;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10604. Articulo 47";
 preguntaids[22] = 10604


//  Id pregunta: 9987 Año de creación de pregunta: 2015
 questions[23]= "24)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[23]= new Array();
 choices[23][0] = "Garantiza la confidencialidad de un documento.";
 choices[23][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[23][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[23][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[23] = 3;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 9987. Examen TIC A2 2014";
 preguntaids[23] = 9987


//  Id pregunta: 5182 Año de creación de pregunta: 2003
 questions[24]= "25)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[24]= new Array();
 choices[24][0] = "UDDI";
 choices[24][1] = "WSDL";
 choices[24][2] = "SOAP";
 choices[24][3] = "JAXP";
 answers[24] = 0;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 5182. ";
 preguntaids[24] = 5182


//  Id pregunta: 1090 Año de creación de pregunta: 2016
 questions[25]= "26)  De conformidad a lo previsto en el art&iacute;culo 22 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[25]= new Array();
 choices[25][0] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haberse recogido para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al r&eacute;gimen general de la Ley Org&aacute;nica citada.";
 choices[25][1] = "La recogida y tratamiento de datos de car&aacute;cter personal obtenidos durante una actuaci&oacute;n de las Fuerzas y Cuerpos de Seguridad podr&aacute;n incluirse, previa autorizaci&oacute;n del Consejo General del Poder Judicial, en todos los ficheros de titularidad p&uacute;blica.";
 choices[25][2] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad, ya sea con fines administrativos o policiales, se rigen por las previsiones contenidas en la Ley Org&aacute;nica 2/2006, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad del Estado.";
 choices[25][3] = "En ning&uacute;n caso pueden ser tratados los datos de car&aacute;cter personal creados por las Fuerzas y Cuerpos de Seguridad del Estado para fines administrativos.";
 answers[25] = 0;
 units[25] = ['35'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 1090. ";
 preguntaids[25] = 1090


//  Id pregunta: 3317 Año de creación de pregunta: 2004
 questions[26]= "27)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[26]= new Array();
 choices[26][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[26][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[26][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[26][3] = "Por medio de SQL embebido";
 answers[26] = 1;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3317. MAP-B 2003";
 preguntaids[26] = 3317


//  Id pregunta: 7734 Año de creación de pregunta: 2010
 questions[27]= "28)  En Java 2, el operador &gt;&gt;:";
 choices[27]= new Array();
 choices[27][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas.";
 choices[27][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo).";
 choices[27][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo).";
 choices[27][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos.";
 answers[27] = 2;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7734. ";
 preguntaids[27] = 7734


//  Id pregunta: 2370 Año de creación de pregunta: 2004
 questions[28]= "29)  Indique la respuesta falsa respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[28]= new Array();
 choices[28][0] = "Se protegen las creaciones originales literarias, art&iacute;sticas o cient&iacute;ficas expresadas por cualquier medio o soporte, tangible o intangible, actualmente conocido o que se invente en el futuro, comprendi&eacute;ndose entre ellas los programas de ordenador";
 choices[28][1] = "Se entender&aacute; por programa de ordenador toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n y fijaci&oacute;n";
 choices[28][2] = "Los derechos sobre los programas de ordenador, as&iacute; como sobre sus sucesivas versiones y los programas derivados, deber&aacute;n ser objeto de inscripci&oacute;n en el Registro de la Propiedad Intelectual.";
 choices[28][3] = "No estar&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador, incluidos los que sirven de fundamento a sus interfaces.";
 answers[28] = 2;
 units[28] = ['41'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2370. ";
 preguntaids[28] = 2370


//  Id pregunta: 6338 Año de creación de pregunta: 2003
 questions[29]= "30)  Indique cu&aacute;l de los siguientes formatos no se corresponde con un tipo de formato de imagen est&aacute;tica:";
 choices[29]= new Array();
 choices[29][0] = "PNG";
 choices[29][1] = "JPEG";
 choices[29][2] = "GIF";
 choices[29][3] = "MNG";
 answers[29] = 3;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 6338. ";
 preguntaids[29] = 6338


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cual NO es una de las herramientas incluidas en el servicio de portal de la Transparencia en la nube para entidades locales";
 choices[30]= new Array();
 choices[30][0] = "Gesti&oacute;n de solicitudes de acceso, para la tramitaci&oacute;n de los expedientes electr&oacute;nicos de derecho de acceso";
 choices[30][1] = "cita previa, permite la gesti&oacute;n de acceso de ciudadanos a oficinas presenciales";
 choices[30][2] = "Publicidad activa, para la captura de informaci&oacute;n desde diferentes fuentes";
 choices[30][3] = "Gestor de contenidos del portal";
 answers[30] = 1;
 units[30] = ['47'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 629. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[30] = 629


//  Id pregunta: 6717 Año de creación de pregunta: 2009
 questions[31]= "32)  &iquest;Qu&eacute; es WebDAV?";
 choices[31]= new Array();
 choices[31][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[31][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[31][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[31][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[31] = 0;
 units[31] = ['77'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6717. MAP 2008 A1";
 preguntaids[31] = 6717


//  Id pregunta: 6659 Año de creación de pregunta: 2009
 questions[32]= "33)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, la complejidad de los procesos elementales transaccionales no se determina utilizando el n&uacute;mero de:";
 choices[32]= new Array();
 choices[32][0] = "DET (Data Element Type)";
 choices[32][1] = "RET (Record Element Type)";
 choices[32][2] = "FTR (File Type Referenced)";
 choices[32][3] = "Todos los anteriores se utilizan";
 answers[32] = 1;
 units[32] = ['94'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6659. ";
 preguntaids[32] = 6659


//  Id pregunta: 10130 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[33]= new Array();
 choices[33][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[33][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[33][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[33][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[33] = 1;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 10130. Examen TIC A1 2014";
 preguntaids[33] = 10130


//  Id pregunta: 9417 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[34]= new Array();
 choices[34][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[34][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[34][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[34][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[34] = 0;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 9417. ";
 preguntaids[34] = 9417


//  Id pregunta: 3006 Año de creación de pregunta: 2002
 questions[35]= "36)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[35]= new Array();
 choices[35][0] = "Controles Java";
 choices[35][1] = "Applets";
 choices[35][2] = "Servlets";
 choices[35][3] = "Aplicaciones CGI";
 answers[35] = 1;
 units[35] = ['64', '65'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3006. ";
 preguntaids[35] = 3006


//  Id pregunta: 962 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley 40/2015 se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[36]= new Array();
 choices[36][0] = "la Administraci&oacute;n General del Estado";
 choices[36][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[36][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[36][3] = "el sector p&uacute;blico y privado institucional";
 answers[36] = 3;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 962. Ley 40/2015";
 preguntaids[36] = 962


//  Id pregunta: 9946 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;l es el RD sobre organizaci&oacute;n e instrumentos operativos de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos conocido como Gobernanza TIC?";
 choices[37]= new Array();
 choices[37][0] = "RD 37/2013";
 choices[37][1] = "RD 802/2014";
 choices[37][2] = "RD 806/2014";
 choices[37][3] = "RD 802/2015";
 answers[37] = 2;
 units[37] = ['26'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 9946. ";
 preguntaids[37] = 9946


//  Id pregunta: 1021 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[38]= new Array();
 choices[38][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[38][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[38][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[38][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[38] = 3;
 units[38] = ['4', '7', '8', '9'];
 blocks[38] = ['A1', 'A2'];
 comments[38] = "Id Pregunta: 1021. Ley 40/2015";
 preguntaids[38] = 1021


//  Id pregunta: 7010 Año de creación de pregunta: 2010
 questions[39]= "40)  Dentro del marco de la auditor&iacute;a de sistemas de informaci&oacute;n, los &ldquo;controles&rdquo; en funci&oacute;n del momento en que act&uacute;an podr&iacute;an clasificarse en:";
 choices[39]= new Array();
 choices[39][0] = "Proactivos, reactivos, concurrentes y recurrentes.";
 choices[39][1] = "Recurrentes, instant&aacute;neos, previos y posteriores.";
 choices[39][2] = "Concomitantes, recurrentes, duraderos e instant&aacute;neos.";
 choices[39][3] = "Reactivos, proactivos y concurrentes o concomitantes.";
 answers[39] = 3;
 units[39] = ['36'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 7010. ";
 preguntaids[39] = 7010


//  Id pregunta: 2435 Año de creación de pregunta: 2006
 questions[40]= "41)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "Portabilidad consiste en la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes.";
 choices[40][1] = "lnteroperabilidad consiste en la posibilidad de enlazar distintos ordenadores.";
 choices[40][2] = "Una de las principales ventajas de usar sistemas abiertos consiste en proteger la inversi&oacute;n en equipos f&iacute;sicos, software, formaci&oacute;n y usuarios.";
 choices[40][3] = "Con la utilizaci&oacute;n de sistemas abiertos se persigue evitar el 's&iacute;ndrome de cliente cautivo'.";
 answers[40] = 0;
 units[40] = ['43'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2435. ";
 preguntaids[40] = 2435


//  Id pregunta: 10785 Año de creación de pregunta: 2015
 questions[41]= "42)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[41][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[41][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[41][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[41] = 3;
 units[41] = ['26'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 10785. ";
 preguntaids[41] = 10785


//  Id pregunta: 8288 Año de creación de pregunta: 2011
 questions[42]= "43)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[42]= new Array();
 choices[42][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[42][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[42][2] = "PoE2.";
 choices[42][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[42] = 0;
 units[42] = ['112'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8288. Examen TIC A2 2010 interna";
 preguntaids[42] = 8288


//  Id pregunta: 7067 Año de creación de pregunta: 2010
 questions[43]= "44)  Para modificar la estructura de una tabla en SQL";
 choices[43]= new Array();
 choices[43][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[43][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[43][2] = "Las tablas se modifican con el comando ALTER.";
 choices[43][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[43] = 2;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7067. ";
 preguntaids[43] = 7067


//  Id pregunta: 10191 Año de creación de pregunta: 2015
 questions[44]= "45)  Para prevenir un ataque de SQL Injection:";
 choices[44]= new Array();
 choices[44][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[44][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[44][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[44][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[44] = 3;
 units[44] = ['119'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10191. Examen TIC A1 2014";
 preguntaids[44] = 10191


//  Id pregunta: 9897 Año de creación de pregunta: 2015
 questions[45]= "46)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[45]= new Array();
 choices[45][0] = "Enero de 2013.";
 choices[45][1] = "Junio de 2013.";
 choices[45][2] = "Diciembre de 2013.";
 choices[45][3] = "Enero de 2014.";
 answers[45] = 1;
 units[45] = ['7', '19'];
 blocks[45] = ['A2', 'A4'];
 comments[45] = "Id Pregunta: 9897. ";
 preguntaids[45] = 9897


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[46]= "47)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[46]= new Array();
 choices[46][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[46][1] = "Informado, sostenible y solidario.";
 choices[46][2] = "Inteligente, sostenible e integrador.";
 choices[46][3] = "Arm&oacute;nico, estable y social.";
 answers[46] = 2;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 9796. ";
 preguntaids[46] = 9796


//  Id pregunta: 8791 Año de creación de pregunta: 2013
 questions[47]= "48)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[47]= new Array();
 choices[47][0] = "Intercambio de Informaci&oacute;n en confianza";
 choices[47][1] = "Arquitectura de Interoperabilidad";
 choices[47][2] = "Evaluaci&oacute;n de las implicaciones, en materia TIC, de la nueva legislaci&oacute;n de la UE";
 choices[47][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[47] = 3;
 units[47] = ['43'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 8791. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";
 preguntaids[47] = 8791


//  Id pregunta: 8832 Año de creación de pregunta: 2013
 questions[48]= "49)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[48]= new Array();
 choices[48][0] = "Los Evolved Node-B";
 choices[48][1] = "Los Evolved RNC";
 choices[48][2] = "En las BSC";
 choices[48][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[48] = 0;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8832. ";
 preguntaids[48] = 8832


//  Id pregunta: 964 Año de creación de pregunta: 2016
 questions[49]= "50)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[49]= new Array();
 choices[49][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[49][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[49][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[49][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[49] = 1;
 units[49] = ['4', '7', '8', '9'];
 blocks[49] = ['A1', 'A2'];
 comments[49] = "Id Pregunta: 964. Ley 40/2015";
 preguntaids[49] = 964


//  Id pregunta: 2947 Año de creación de pregunta: 2002
 questions[50]= "51)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[50]= new Array();
 choices[50][0] = "ISO 7498";
 choices[50][1] = "ISO 9735";
 choices[50][2] = "ISO 9075";
 choices[50][3] = "ISO 9945-1";
 answers[50] = 2;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2947. ";
 preguntaids[50] = 2947


//  Id pregunta: 923 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[51]= new Array();
 choices[51][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[51][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[51][2] = "Gestionar el Registro de Operadores.";
 choices[51][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[51] = 3;
 units[51] = ['121'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 923. AGE A1 2015";
 preguntaids[51] = 923


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[52]= new Array();
 choices[52][0] = "Orientaci&oacute;n a objetos";
 choices[52][1] = "MapReduce";
 choices[52][2] = "Pipeline filtering";
 choices[52][3] = "Programaci&oacute;n funcional";
 answers[52] = 1;
 units[52] = ['73'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 757. Big Data y NoSQL";
 preguntaids[52] = 757


//  Id pregunta: 1730 Año de creación de pregunta: 2016
 questions[53]= "54)  En un Sistema de Gesti&oacute;n de Base de Datos (SGBD) debe garantizarse la total satisfacci&oacute;n la CONSISTENCIA, es decir que:";
 choices[53]= new Array();
 choices[53][0] = "Varios accesos simult&aacute;neos a cada Base de Datos sin conflictos.";
 choices[53][1] = "En todo momento, los valores de los datos no presenten contradicciones.";
 choices[53][2] = "Los valores de los datos sean aut&eacute;nticos, conforme a las reglas sem&aacute;nticas establecidas por dise&ntilde;o.";
 choices[53][3] = "En caso de fallo (hardware, alimentaci&oacute;n, etc) la Base de Datos vuelva a un estado &iacute;ntegro anterior al fallo.";
 answers[53] = 1;
 units[53] = ['60'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1730. ";
 preguntaids[53] = 1730


//  Id pregunta: 6876 Año de creación de pregunta: 2010
 questions[54]= "55)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[54]= new Array();
 choices[54][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[54][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[54][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[54][3] = "Red.es.";
 answers[54] = 0;
 units[54] = ['121'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6876. TIC A 2009";
 preguntaids[54] = 6876


//  Id pregunta: 9219 Año de creación de pregunta: 2014
 questions[55]= "56)  La norma ISO 27002";
 choices[55]= new Array();
 choices[55][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[55][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[55][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[55][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[55] = 1;
 units[55] = ['108'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9219. Examen TIC A1 2013";
 preguntaids[55] = 9219


//  Id pregunta: 5476 Año de creación de pregunta: 2007
 questions[56]= "57)  Durante el desarrollo de un proyecto de software se han detectado dos defectos similares. Uno de ellos se detect&oacute; en la fase de especificaci&oacute;n de requisitos, y el otro en la fase de implementaci&oacute;n. &iquest;Cu&aacute;l de las siguientes afirmaciones sobre este escenario es m&aacute;s probablemente cierta?:";
 choices[56]= new Array();
 choices[56][0] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de especificaci&oacute;n de requisitos.";
 choices[56][1] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de implementaci&oacute;n.";
 choices[56][2] = "El coste de corregir ambos defectos ser&aacute; aproximadamente el mismo.";
 choices[56][3] = "No existe relaci&oacute;n entre la fase en la que se detecta un defecto y el coste de su correcci&oacute;n.";
 answers[56] = 1;
 units[56] = ['92'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 5476. ";
 preguntaids[56] = 5476


//  Id pregunta: 9164 Año de creación de pregunta: 2014
 questions[57]= "58)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[57]= new Array();
 choices[57][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[57][1] = "Suplantaci&oacute;n de identidad.";
 choices[57][2] = "Denegaci&oacute;n de servicio.";
 choices[57][3] = "Manipulaci&oacute;n de un recurso.";
 answers[57] = 0;
 units[57] = ['120'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9164. Examen TIC A2 2013";
 preguntaids[57] = 9164


//  Id pregunta: 6930 Año de creación de pregunta: 2010
 questions[58]= "59)  Indique cual de entre las siguientes NO es una funci&oacute;n del LMS:";
 choices[58]= new Array();
 choices[58][0] = "Seguimiento de la actividad del alumno.";
 choices[58][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[58][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[58][3] = "Matriculaci&oacute;n en cursos.";
 answers[58] = 1;
 units[58] = ['70'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6930. ";
 preguntaids[58] = 6930


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[59]= "60)  El Factor de Sostenibilidad de la pensi&oacute;n de jubilaci&oacute;n, regulado en el art&iacute;culo 211 del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social:";
 choices[59]= new Array();
 choices[59][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[59][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[59][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[59][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[59] = 2;
 units[59] = ['14'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 359. Estado del Bienestar";
 preguntaids[59] = 359


//  Id pregunta: 9146 Año de creación de pregunta: 2014
 questions[60]= "61)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[60]= new Array();
 choices[60][0] = "ReFS";
 choices[60][1] = "NTFS";
 choices[60][2] = "HPFS";
 choices[60][3] = "CSFS";
 answers[60] = 0;
 units[60] = ['58'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9146. Examen TIC A2 2013";
 preguntaids[60] = 9146


//  Id pregunta: 6033 Año de creación de pregunta: 2003
 questions[61]= "62)  De los siguientes tipos de pruebas relacionados a continuaci&oacute;n, indique, seg&uacute;n M&eacute;trica v.3, aquel tipo de pruebas que cronol&oacute;gicamente se realiza en &uacute;ltimo lugar:";
 choices[61]= new Array();
 choices[61][0] = "Pruebas de integraci&oacute;n.";
 choices[61][1] = "Pruebas unitarias.";
 choices[61][2] = "Pruebas de implantaci&oacute;n.";
 choices[61][3] = "Pruebas de aceptaci&oacute;n.";
 answers[61] = 3;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6033. TIC B 2007";
 preguntaids[61] = 6033


//  Id pregunta: 6782 Año de creación de pregunta: 2010
 questions[62]= "63)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[62]= new Array();
 choices[62][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[62][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[62][2] = "Todos los datos relativos a una persona";
 choices[62][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[62] = 3;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 6782. Castilla La Mancha 2009";
 preguntaids[62] = 6782


//  Id pregunta: 5520 Año de creación de pregunta: 2007
 questions[63]= "64)  Los contratos de fabricaci&oacute;n, por los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser elaboradas con arreglo a caracter&iacute;sticas peculiares fijadas previamente por la Administraci&oacute;n, a&uacute;n cuando &eacute;sta se obligue a aportar, total o parcialmente, los materiales precisos, tienen la consideraci&oacute;n de contratos de:";
 choices[63]= new Array();
 choices[63][0] = "Obras.";
 choices[63][1] = "Suministro";
 choices[63][2] = "Servicios";
 choices[63][3] = "Bienes y servicios.";
 answers[63] = 1;
 units[63] = ['37'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 5520. ";
 preguntaids[63] = 5520


//  Id pregunta: 5814 Año de creación de pregunta: 2007
 questions[64]= "65)  Defina Throughput:";
 choices[64]= new Array();
 choices[64][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[64][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[64][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[64][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[64] = 0;
 units[64] = ['94'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 5814. Examen 2006 JCYL";
 preguntaids[64] = 5814


//  Id pregunta: 2993 Año de creación de pregunta: 2002
 questions[65]= "66)  ODBC:";
 choices[65]= new Array();
 choices[65][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[65][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[65][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[65][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[65] = 0;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2993. ";
 preguntaids[65] = 2993


//  Id pregunta: 7684 Año de creación de pregunta: 2010
 questions[66]= "67)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[66]= new Array();
 choices[66][0] = "Es independiente del lenguaje de programaci&oacute;n.";
 choices[66][1] = "Es independiente del sistema operativo.";
 choices[66][2] = "Es independiente de la base de datos.";
 choices[66][3] = "Es un tipo de API.";
 answers[66] = 0;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7684. Map 2007";
 preguntaids[66] = 7684


//  Id pregunta: 7254 Año de creación de pregunta: 2010
 questions[67]= "68)  Deficiencias dentro del sistema Kerberos";
 choices[67]= new Array();
 choices[67][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[67][1] = "Privacidad";
 choices[67][2] = "Integridad";
 choices[67][3] = "Todas las respuestas anteriores son incorrectos";
 answers[67] = 0;
 units[67] = ['120'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 7254. ";
 preguntaids[67] = 7254


//  Id pregunta: 6665 Año de creación de pregunta: 2009
 questions[68]= "69)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[68]= new Array();
 choices[68][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[68][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[68][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[68][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[68] = 1;
 units[68] = ['110'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6665. MAP 2008 A1";
 preguntaids[68] = 6665


//  Id pregunta: 7624 Año de creación de pregunta: 2010
 questions[69]= "70)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a su prestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[69]= new Array();
 choices[69][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad del territorio nacional.";
 choices[69][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado.";
 choices[69][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, y en todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[69][3] = "Ninguna de las anteriores es cierta.";
 answers[69] = 2;
 units[69] = ['121'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7624. Similar a Map 2006";
 preguntaids[69] = 7624


//  Id pregunta: 7694 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato raster?";
 choices[70]= new Array();
 choices[70][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[70][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[70][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[70][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[70] = 2;
 units[70] = ['71'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7694. Map 2007";
 preguntaids[70] = 7694


//  Id pregunta: 4942 Año de creación de pregunta: 2002
 questions[71]= "72)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[71]= new Array();
 choices[71][0] = "ET1";
 choices[71][1] = "ET2";
 choices[71][2] = "TR2";
 choices[71][3] = "AT";
 answers[71] = 2;
 units[71] = ['114'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4942. ";
 preguntaids[71] = 4942


//  Id pregunta: 5009 Año de creación de pregunta: 2002
 questions[72]= "73)  Nombre y caracter&iacute;sticas del mecanismo de encriptado y autenticaci&oacute;n especificado en el est&aacute;ndar 802.11:";
 choices[72]= new Array();
 choices[72][0] = "WAP, con clave de hasta 40 bits";
 choices[72][1] = "WEP, con clave de hasta 40 bits";
 choices[72][2] = "WEP, con clave de hasta 128 bits";
 choices[72][3] = "WTLS, con clave de hasta 128 bits";
 answers[72] = 2;
 units[72] = ['108'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5009. ";
 preguntaids[72] = 5009


//  Id pregunta: 9036 Año de creación de pregunta: 2014
 questions[73]= "74)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "Mesas de contrataci&oacute;n";
 choices[73][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[73][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[73][3] = "Todos los anteriores";
 answers[73] = 0;
 units[73] = ['10'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 9036. Art. 324, Art. 325 RD Legislativo 3/2011";
 preguntaids[73] = 9036


//  Id pregunta: 6549 Año de creación de pregunta: 2009
 questions[74]= "75)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[74][1] = "son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[74][2] = "son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[74][3] = "no existen como tales derechos";
 answers[74] = 0;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 6549. ";
 preguntaids[74] = 6549


