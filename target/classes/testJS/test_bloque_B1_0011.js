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
//  Id pregunta: 5987 Año de creación de pregunta: 2007
 questions[0]= "1)  La adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador, seg&uacute;n el RD Legislativo 3/2011, tiene categor&iacute;a de:";
 choices[0]= new Array();
 choices[0][0] = "Contrato de suministros";
 choices[0][1] = "Contrato de consultor&iacute;a y asistencia";
 choices[0][2] = "Contrato de servicios";
 choices[0][3] = "Contrato de arrendamiento";
 answers[0] = 0;
 units[0] = ['37'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 5987. ";
 preguntaids[0] = 5987


//  Id pregunta: 5920 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[1]= new Array();
 choices[1][0] = "IESG (Internet Engineering Steering Group)";
 choices[1][1] = "IETF (Internet Engineering Task Force)";
 choices[1][2] = "IAB (Internet Architecture Board)";
 choices[1][3] = "IANA (Internet Assigned Number Authority)";
 answers[1] = 1;
 units[1] = ['48'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5920. ";
 preguntaids[1] = 5920


//  Id pregunta: 5601 Año de creación de pregunta: 2007
 questions[2]= "3)  Se&ntilde;ale la que no sea una de las t&eacute;cnicas especificas para el an&aacute;lisis de riesgos que establece MAGERIT.";
 choices[2]= new Array();
 choices[2][0] = "An&aacute;lisis de procesos.";
 choices[2][1] = "An&aacute;lisis mediante tablas.";
 choices[2][2] = "An&aacute;lisis algor&iacute;tmico.";
 choices[2][3] = "&Aacute;rboles de ataque.";
 answers[2] = 0;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 5601. ";
 preguntaids[2] = 5601


//  Id pregunta: 5608 Año de creación de pregunta: 2007
 questions[3]= "4)  Seg&uacute;n la norma ISO/IEC 27002, el aseguramiento de que los usuarios autorizados tienen acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[3]= new Array();
 choices[3][0] = "Seguridad.";
 choices[3][1] = "Integridad.";
 choices[3][2] = "Disponibilidad.";
 choices[3][3] = "Confidencialidad.";
 answers[3] = 2;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 5608. ";
 preguntaids[3] = 5608


//  Id pregunta: 5714 Año de creación de pregunta: 2007
 questions[4]= "5)  En el contexto de Normas UNE, las siglas UNE significan";
 choices[4]= new Array();
 choices[4][0] = "Unidad de Normalizaci&oacute;n Espa&ntilde;ola";
 choices[4][1] = "Uni&oacute;n de Normas Espa&ntilde;olas";
 choices[4][2] = "Una Norma Espa&ntilde;ola";
 choices[4][3] = "Usuarios de Normas Espa&ntilde;olas";
 answers[4] = 2;
 units[4] = ['48'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 5714. ";
 preguntaids[4] = 5714


//  Id pregunta: 5847 Año de creación de pregunta: 2007
 questions[5]= "6)  Cual de los siguientes no es un activo en Magerit:";
 choices[5]= new Array();
 choices[5][0] = "www";
 choices[5][1] = "url";
 choices[5][2] = "anon";
 choices[5][3] = "edi";
 answers[5] = 1;
 units[5] = ['45'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 5847. Examen 2006 JCYL";
 preguntaids[5] = 5847


//  Id pregunta: 5622 Año de creación de pregunta: 2007
 questions[6]= "7)  Si modificamos un programa protegido por licencia GPL el resultado debemos protegerlo con una licencia";
 choices[6]= new Array();
 choices[6][0] = "EULA";
 choices[6][1] = "BSD";
 choices[6][2] = "GPL";
 choices[6][3] = "No podemos ponerlo licencia alguna";
 answers[6] = 2;
 units[6] = ['41'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 5622. ";
 preguntaids[6] = 5622


//  Id pregunta: 5609 Año de creación de pregunta: 2007
 questions[7]= "8)  Cual es el nombre con que se conoce en MAGERIT versi&oacute;n 3 a la persona de la organizaci&oacute;n, con buen conocimiento de personas y unidades implicadas en el proyecto de An&aacute;lisis de Gesti&oacute;n de Riesgos, que tiene la capacidad para conectar al equipo de proyecto con el grupo de usuarios?";
 choices[7]= new Array();
 choices[7][0] = "Promotor";
 choices[7][1] = "Enlace operacional";
 choices[7][2] = "Director de proyecto";
 choices[7][3] = "Responsable de servicios internos";
 answers[7] = 1;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 5609. ";
 preguntaids[7] = 5609


//  Id pregunta: 5829 Año de creación de pregunta: 2007
 questions[8]= "9)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[8]= new Array();
 choices[8][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[8][1] = "Asignaci&oacute;n de recursos.";
 choices[8][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[8][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[8] = 0;
 units[8] = ['48'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 5829. Examen 2006 JCYL";
 preguntaids[8] = 5829


//  Id pregunta: 5710 Año de creación de pregunta: 2007
 questions[9]= "10)  Seg&uacute;n Magerit, el conjunto de programas de seguridad que permite materializar las decisiones de gesti&oacute;n de riesgos es el";
 choices[9]= new Array();
 choices[9][0] = "mapa de riesgos";
 choices[9][1] = "informe de insuficiencias";
 choices[9][2] = "cuadro de mando";
 choices[9][3] = "plan de seguridad";
 answers[9] = 3;
 units[9] = ['45'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 5710. ";
 preguntaids[9] = 5710


//  Id pregunta: 5579 Año de creación de pregunta: 2007
 questions[10]= "11)  En el m&eacute;todo TOPSIS de decisi&oacute;n entre alternativas...";
 choices[10]= new Array();
 choices[10][0] = "La alternativa seleccionada debe ser aqu&eacute;lla que est&eacute; lo m&aacute;s cerca posible de la soluci&oacute;n ideal positiva y lo m&aacute;s lejos posible de la soluci&oacute;n ideal negativa.";
 choices[10][1] = "La idea es comparar cada permutaci&oacute;n posible de alternativas con la informaci&oacute;n ordinal de evaluaciones que aporta para cada criterio la matriz de decisi&oacute;n.";
 choices[10][2] = "En cada comparaci&oacute;n se asocia: &iacute;ndice de concordancia (mide argumentos a favor de la alternativa) e &iacute;ndice de discordancia (mide argumentos en contra).";
 choices[10][3] = "Se ignora la cuant&iacute;a de la diferencia entre alternativas para cada criterio, s&oacute;lo se&ntilde;ala si existe o no, y considera la importancia del criterio para el decisor.";
 answers[10] = 0;
 units[10] = ['38'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 5579. ";
 preguntaids[10] = 5579


//  Id pregunta: 5824 Año de creación de pregunta: 2007
 questions[11]= "12)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[11]= new Array();
 choices[11][0] = "Libertad de elecci&oacute;n";
 choices[11][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[11][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[11][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[11] = 2;
 units[11] = ['40'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 5824. Examen 2006 JCYL";
 preguntaids[11] = 5824


//  Id pregunta: 5711 Año de creación de pregunta: 2007
 questions[12]= "13)  Seg&uacute;n la LOPD de datos de car&aacute;cter personal, indicar cual de las siguientes infracciones es calificada como grave";
 choices[12]= new Array();
 choices[12][0] = "no atender los requerimientos o apercibimientos de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos o no proporcionar a aqu&eacute;lla cuantos documentos e informaciones sean solicitados por la misma.";
 choices[12][1] = "el impedimento del ejercicio de derechos de acceso y oposici&oacute;n y la negativa a facilitar informaci&oacute;n solicitada.";
 choices[12][2] = "no atender de forma sistem&aacute;tica el deber legal de notificaci&oacute;n de la inclusi&oacute;n de datos de car&aacute;cter personal en un fichero";
 choices[12][3] = "tratar los datos de car&aacute;cter personal de forma legitima";
 answers[12] = 0;
 units[12] = ['35'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 5711. ";
 preguntaids[12] = 5711


//  Id pregunta: 5664 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;A qu&eacute; se denomina riesgo en MAGERIT version 3?";
 choices[13]= new Array();
 choices[13][0] = "A la medida del da&ntilde;o probable sobre un sistema.";
 choices[13][1] = "Al suceso que puede afectar a un activo y causarle un da&ntilde;o.";
 choices[13][2] = "A la medida del da&ntilde;o sobre un activo derivado de la materializaci&oacute;n de una amenaza.";
 choices[13][3] = "Al recurso del sistema de informaci&oacute;n expuesto a un ataque.";
 answers[13] = 0;
 units[13] = ['45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 5664. ";
 preguntaids[13] = 5664


//  Id pregunta: 5604 Año de creación de pregunta: 2007
 questions[14]= "15)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[14]= new Array();
 choices[14][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[14][1] = "Es la m&aacute;s corta del proyecto.";
 choices[14][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[14][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[14] = 0;
 units[14] = ['33'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 5604. Castilla la mancha 2006";
 preguntaids[14] = 5604


//  Id pregunta: 5760 Año de creación de pregunta: 2007
 questions[15]= "16)  Seg&uacute;n la Norma UNE-ISO/IEC 27002:2009 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[15]= new Array();
 choices[15][0] = "seguridad de los servicios de red";
 choices[15][1] = "sincronizaci&oacute;n de relojes";
 choices[15][2] = "responsabilidades del usuario";
 choices[15][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[15] = 3;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 5760. ";
 preguntaids[15] = 5760


//  Id pregunta: 5826 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[16][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[16][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[16][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[16] = 2;
 units[16] = ['24'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 5826. Examen 2006 JCYL";
 preguntaids[16] = 5826


//  Id pregunta: 5893 Año de creación de pregunta: 2007
 questions[17]= "18)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[17]= new Array();
 choices[17][0] = "1 y 5.";
 choices[17][1] = "1 y 8.";
 choices[17][2] = "0 y 8.";
 choices[17][3] = "0 y 5.";
 answers[17] = 3;
 units[17] = ['33'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 5893. Castilla la Mancha B 2006";
 preguntaids[17] = 5893


//  Id pregunta: 5667 Año de creación de pregunta: 2007
 questions[18]= "19)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[18]= new Array();
 choices[18][0] = "ETSI";
 choices[18][1] = "CEN";
 choices[18][2] = "CENELEC";
 choices[18][3] = "CEPT";
 answers[18] = 0;
 units[18] = ['48'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 5667. ";
 preguntaids[18] = 5667


//  Id pregunta: 5755 Año de creación de pregunta: 2007
 questions[19]= "20)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[19]= new Array();
 choices[19][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[19][1] = "Diagrama de extrapolaci&oacute;n";
 choices[19][2] = "staffing size";
 choices[19][3] = "Joint Requirements Planning";
 answers[19] = 3;
 units[19] = ['31'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 5755. ";
 preguntaids[19] = 5755


//  Id pregunta: 5866 Año de creación de pregunta: 2007
 questions[20]= "21)  La definici&oacute;n de usabilidad seg&uacute;n el est&aacute;ndar ISO 9241-11:1998 es la siguiente:";
 choices[20]= new Array();
 choices[20][0] = "Grado en que un producto puede ser usado por una persona con alg&uacute;n tipo de discapacidad (f&iacute;sica, cognitiva o tecnol&oacute;gica) respecto a c&oacute;mo lo usar&iacute;a una persona sin discapacidad";
 choices[20][1] = "Capacidad de uso, es decir, caracter&iacute;stica que distingue a los objetos dise&ntilde;ados para su utilizaci&oacute;n de los que no.";
 choices[20][2] = "Grado en que un producto puede ser usado por los usuarios especificados para obtener los resultados especificados con efectividad, eficiencia, y satisfacci&oacute;n en un contexto de uso especificado";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 2;
 units[20] = ['42'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 5866. ";
 preguntaids[20] = 5866


//  Id pregunta: 5577 Año de creación de pregunta: 2007
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[21]= new Array();
 choices[21][0] = "El m&eacute;todo del Payback.";
 choices[21][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[21][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[21][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[21] = 3;
 units[21] = ['40'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 5577. Examen TIC MAP B 2006";
 preguntaids[21] = 5577


//  Id pregunta: 5854 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric Multiprocessing) y MPP(Massively Paralleling Multiprocessing) es falsa?";
 choices[22]= new Array();
 choices[22][0] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido ensegmentos que se comuniquen entre s&iacute;.";
 choices[22][1] = "MPP no sufre cuello de botella que sufre SMP en el acceso a memoria";
 choices[22][2] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[22][3] = "Un cluster esta compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[22] = 2;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 5854. Examen 2006 JCYL";
 preguntaids[22] = 5854


//  Id pregunta: 5986 Año de creación de pregunta: 2007
 questions[23]= "24)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el arrendamiento de un ordenador tiene la categor&iacute;a de:";
 choices[23]= new Array();
 choices[23][0] = "Contrato de &quot;leasing&quot;";
 choices[23][1] = "Contrato de servicios";
 choices[23][2] = "Contrato de suministros";
 choices[23][3] = "Contrato de arrendamiento";
 answers[23] = 2;
 units[23] = ['37'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 5986. ";
 preguntaids[23] = 5986


//  Id pregunta: 5665 Año de creación de pregunta: 2007
 questions[24]= "25)  &iquest;Cual de los siguientes ser&iacute;a el encuadre org&aacute;nico preferible de la auditoria inform&aacute;tica interna?";
 choices[24]= new Array();
 choices[24][0] = "Se adscribir&iacute;a al Departamento de Sistemas de Informaci&oacute;n, ya que el personal especializado necesario solo esta disponible en ese Departamento.";
 choices[24][1] = "Depender&iacute;a org&aacute;nicamente del Departamento de SI y funcionalmente del Departamento Financiero, por su labor auxiliar en la auditoria financiera de la organizaci&oacute;n.";
 choices[24][2] = "No deber&iacute;a existir, ya que al ser interna seria imposible que fuera independiente con respecto a los auditados.";
 choices[24][3] = "Se encuadrar&iacute;a dentro del staff, es decir, dentro de los &oacute;rganos de apoyo a la direcci&oacute;n existentes en la estructura organizativa, con el fin de garantizar la independencia necesaria.";
 answers[24] = 3;
 units[24] = ['36'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 5665. ";
 preguntaids[24] = 5665


//  Id pregunta: 5605 Año de creación de pregunta: 2007
 questions[25]= "26)  &iquest;Que parte del expediente de contrataci&oacute;n incluye los pactos y condiciones que definen los derechos y obligaciones de cada una de las partes del contrato?";
 choices[25]= new Array();
 choices[25][0] = "El Pliego de Prescripciones T&eacute;cnicas";
 choices[25][1] = "El Pliego T&eacute;cnico de Referencia";
 choices[25][2] = "El Pliego de Cl&aacute;usulas Administrativas";
 choices[25][3] = "La Memoria Justificativa";
 answers[25] = 2;
 units[25] = ['37'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 5605. ";
 preguntaids[25] = 5605


//  Id pregunta: 5767 Año de creación de pregunta: 2007
 questions[26]= "27)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[26]= new Array();
 choices[26][0] = "FDL";
 choices[26][1] = "GSL";
 choices[26][2] = "GPL";
 choices[26][3] = "GLL";
 answers[26] = 2;
 units[26] = ['41'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 5767. ";
 preguntaids[26] = 5767


//  Id pregunta: 5614 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;Cual es el miembro espa&ntilde;ol de ISO?";
 choices[27]= new Array();
 choices[27][0] = "IRANOR";
 choices[27][1] = "AENOR";
 choices[27][2] = "UNE";
 choices[27][3] = "CSl";
 answers[27] = 1;
 units[27] = ['48'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 5614. ";
 preguntaids[27] = 5614


//  Id pregunta: 5576 Año de creación de pregunta: 2007
 questions[28]= "29)  En el campo de la evaluaci&oacute;n de la seguridad de los sistemas de informaci&oacute;n, destacan los criterios TCSEC Indique cu&aacute;l es el nivel de protecci&oacute;n obligatoria conocido como &ldquo;Dominios de Seguridad&rdquo;:";
 choices[28]= new Array();
 choices[28][0] = "D";
 choices[28][1] = "C";
 choices[28][2] = "B1";
 choices[28][3] = "B3";
 answers[28] = 3;
 units[28] = ['30'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 5576. ";
 preguntaids[28] = 5576


//  Id pregunta: 5763 Año de creación de pregunta: 2007
 questions[29]= "30)  Las pruebas de auditoria que permiten medir el riesgo por deficiencia de los controles existentes o por su ausencia se denominan";
 choices[29]= new Array();
 choices[29][0] = "de cumplimiento";
 choices[29][1] = "de verificaci&oacute;n";
 choices[29][2] = "de adecuaci&oacute;n";
 choices[29][3] = "sustantivas";
 answers[29] = 3;
 units[29] = ['36'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 5763. ";
 preguntaids[29] = 5763


//  Id pregunta: 5856 Año de creación de pregunta: 2007
 questions[30]= "31)  El American Nacional Standard Institute (ANSI)";
 choices[30]= new Array();
 choices[30][0] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[30][1] = "Representa a Estados Unidos en la ISO";
 choices[30][2] = "Las respuestas a y b son ciertas";
 choices[30][3] = "las respuestas a y b son falsas";
 answers[30] = 2;
 units[30] = ['48'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 5856. Examen 2006 JCYL";
 preguntaids[30] = 5856


//  Id pregunta: 5868 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[31]= new Array();
 choices[31][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[31][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[31][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[31][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[31] = 1;
 units[31] = ['42'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 5868. ";
 preguntaids[31] = 5868


//  Id pregunta: 5612 Año de creación de pregunta: 2007
 questions[32]= "33)  Una de las medidas que se utiliza para cuantificar la rentabilidad de las inversiones en los proyectos TIC, es el VAN (valor actual neto), que se podr&iacute;a definir como:";
 choices[32]= new Array();
 choices[32][0] = "Ratio ente ingreso neto y costes";
 choices[32][1] = "Tiempo necesario para que el proyecto recupere el capital invertido.";
 choices[32][2] = "Tasa de descuento necesaria para que el valor actual sea cero.";
 choices[32][3] = "El valor actual de todos los ingresos menos el valor actual de todos los desembolsos de un proyecto, supuesto un determinado tipo de inter&eacute;s.";
 answers[32] = 3;
 units[32] = ['40'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 5612. ";
 preguntaids[32] = 5612


//  Id pregunta: 5857 Año de creación de pregunta: 2007
 questions[33]= "34)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[33]= new Array();
 choices[33][0] = "An&aacute;lisis de riesgos";
 choices[33][1] = "An&aacute;lisis de impacto";
 choices[33][2] = "Disponibilidad";
 choices[33][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[33] = 1;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 5857. Examen 2006 JCYL";
 preguntaids[33] = 5857


//  Id pregunta: 5828 Año de creación de pregunta: 2007
 questions[34]= "35)  IEFT (Internet Engineering Task Force) se encarga de:";
 choices[34]= new Array();
 choices[34][0] = "Coordinaci&oacute;n entre organizaciones como IEFT, IANA, etc.";
 choices[34][1] = "Asignaci&oacute;n de recursos";
 choices[34][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[34][3] = "Especificaci&oacute;n de est&aacute;ndares.";
 answers[34] = 3;
 units[34] = ['48'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 5828. Examen 2006 JCYL";
 preguntaids[34] = 5828


//  Id pregunta: 5880 Año de creación de pregunta: 2007
 questions[35]= "36)  El IETF (Internet Engineering Task Force) es uno de los organismos estandarizadores m&aacute;s destacados de Internet. Sus documentos oficiales son conocidos como";
 choices[35]= new Array();
 choices[35][0] = "Las series X y V (ejemplo la recomendaci&oacute;n X.25 o V.21bis)";
 choices[35][1] = "ISO (ejemplo ISO-9000)";
 choices[35][2] = "RFC (Request for Comments)";
 choices[35][3] = "Las respuestas A y C son verdaderas";
 answers[35] = 2;
 units[35] = ['48'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 5880. ";
 preguntaids[35] = 5880


//  Id pregunta: 5802 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un tipo de contrato administrativo?";
 choices[36]= new Array();
 choices[36][0] = "Obras";
 choices[36][1] = "Gesti&oacute;n de servicios publicos";
 choices[36][2] = "Arrendamiento de locales";
 choices[36][3] = "Servicios";
 answers[36] = 2;
 units[36] = ['37'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 5802. ";
 preguntaids[36] = 5802


//  Id pregunta: 5813 Año de creación de pregunta: 2009
 questions[37]= "38)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical.";
 choices[37]= new Array();
 choices[37][0] = "La LOPD obliga a informar a la Agencia Estatal de Protecci&oacute;n de Datos de su existencia y establece un nivel de seguridad clasificado como medio";
 choices[37][1] = "Solo podemos tener estos datos si existe consentimiento expreso de los afectados.";
 choices[37][2] = "Al no ser un partido pol&iacute;tico o sindicato no podemos tener este tipo de datos";
 choices[37][3] = "Solo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato";
 answers[37] = 3;
 units[37] = ['35'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 5813. ";
 preguntaids[37] = 5813


//  Id pregunta: 5706 Año de creación de pregunta: 2007
 questions[38]= "39)  El articulo 60 del RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que en ning&uacute;n caso podr&aacute;n contratar con la Administraci&oacute;n las personas en quienes concurra alguna de las circunstancias siguientes:";
 choices[38]= new Array();
 choices[38][0] = "haber dado lugar, por causa de la que hubiesen sido declarados culpables, a la suspensi&oacute;n de cualquier contrato celebrado con Ia Administraci&oacute;n";
 choices[38][1] = "no hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social impuestas por las disposiciones vigentes, en los t&eacute;rminos que reglamentariamente se determine.";
 choices[38][2] = "no hallarse debidamente clasificadas, en su caso conforme a lo dispuesto en la Ley de Contratos del Sector P&uacute;blico o no acreditar la suficiente solvencia econ&oacute;mica, practica y t&eacute;cnica.";
 choices[38][3] = "haber incurrido en falsedad al facilitar a la Administraci&oacute;n las declaraciones exigibles en el cumplimiento de las disposiciones de esta Ley y de sus normas de desarrollo.";
 answers[38] = 1;
 units[38] = ['37'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 5706. ";
 preguntaids[38] = 5706


//  Id pregunta: 5975 Año de creación de pregunta: 2007
 questions[39]= "40)  Una Directiva comunitaria que, en materia de salud en el trabajo, es aplicable directamente a los productosinform&aacute;ticos y establece disposiciones m&iacute;nimas de seguridad y salud relativas al trabajo con equipos que incluyenpantallas de visualizaci&oacute;n, es la:";
 choices[39]= new Array();
 choices[39][0] = "Directiva 90/270/CEE, de 29 de mayo";
 choices[39][1] = "Directiva 95/220/CEE, de 14 de abril";
 choices[39][2] = "Directiva 198/130/CEE, de 30 de octubre";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = 0;
 units[39] = ['42'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 5975. ";
 preguntaids[39] = 5975


//  Id pregunta: 5988 Año de creación de pregunta: 2007
 questions[40]= "41)  El requisito de que el desarrollo de un sistema se realice seg&uacute;n la metodolog&iacute;a M&eacute;trica v3 deber&aacute; figurar en el pliego de prescripciones t&eacute;cnicas:";
 choices[40]= new Array();
 choices[40][0] = "Aspectos deseables o valorables";
 choices[40][1] = "Conformidad con normas y est&aacute;ndares.";
 choices[40][2] = "Requisitos obligatorios de la contrataci&oacute;n.";
 choices[40][3] = "Criterios de adjudicaci&oacute;n del contrato.";
 answers[40] = 2;
 units[40] = ['37'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 5988. ";
 preguntaids[40] = 5988


//  Id pregunta: 5947 Año de creación de pregunta: 2007
 questions[41]= "42)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[41]= new Array();
 choices[41][0] = "Software libre";
 choices[41][1] = "Software propietario";
 choices[41][2] = "Software de dominio p&uacute;blico";
 choices[41][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de lasaplicaciones utilizadas para el ejercicio de potestades";
 answers[41] = 1;
 units[41] = ['41'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 5947. ";
 preguntaids[41] = 5947


//  Id pregunta: 5867 Año de creación de pregunta: 2007
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[42]= new Array();
 choices[42][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[42][1] = "Utilice soluciones provisionales";
 choices[42][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[42][3] = "Todas lo son";
 answers[42] = 3;
 units[42] = ['42'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 5867. ";
 preguntaids[42] = 5867


//  Id pregunta: 5603 Año de creación de pregunta: 2007
 questions[43]= "44)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el procedimiento de adjudicaci&oacute;n en el que solo podr&aacute;n participar los empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, hayan sido seleccionados por el &oacute;rgano de contrataci&oacute;n, se llama:";
 choices[43]= new Array();
 choices[43][0] = "Procedimiento Negociado.";
 choices[43][1] = "Procedimiento Restringido.";
 choices[43][2] = "Procedimiento Cerrado";
 choices[43][3] = "Procedimiento Abierto.";
 answers[43] = 1;
 units[43] = ['37'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 5603. ";
 preguntaids[43] = 5603


//  Id pregunta: 5985 Año de creación de pregunta: 2007
 questions[44]= "45)  Son &oacute;rganos de contrataci&oacute;n";
 choices[44]= new Array();
 choices[44][0] = "Los Ministros y los Secretarios de Estado";
 choices[44][1] = "Los representantes legales de los Organismos aut&oacute;nomos y dem&aacute;s Entidades p&uacute;blicas estatales y los Directores Generales de las distintas Entidades gestoras y Servicios comunes de la Seguridad Social.";
 choices[44][2] = "a) y b) son correctas";
 choices[44][3] = "El Subsecretario de Hacienda";
 answers[44] = 2;
 units[44] = ['37'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 5985. Art. 316 RD Legislativo 3/2011";
 preguntaids[44] = 5985


//  Id pregunta: 5839 Año de creación de pregunta: 2007
 questions[45]= "46)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[45]= new Array();
 choices[45][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[45][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[45][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[45][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[45] = 2;
 units[45] = ['43'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 5839. Examen 2006 JCYL";
 preguntaids[45] = 5839


//  Id pregunta: 5810 Año de creación de pregunta: 2007
 questions[46]= "47)  Los ficheros automatizados con datos de car&aacute;cter personal de nivel alto deber&aacute;n contener:";
 choices[46]= new Array();
 choices[46][0] = "Medidas de seguridad de nivel alto";
 choices[46][1] = "Medidas de seguridad de nivel alto y medio";
 choices[46][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y alto";
 choices[46][3] = "Ninguna de las anteriores es correcta";
 answers[46] = 2;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 5810. Examen 2006 JCYL";
 preguntaids[46] = 5810


//  Id pregunta: 5707 Año de creación de pregunta: 2007
 questions[47]= "48)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[47]= new Array();
 choices[47][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[47][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[47][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[47][3] = "Ninguno de los anteriores.";
 answers[47] = 1;
 units[47] = ['33'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 5707. Castilla la Mancha B 2006";
 preguntaids[47] = 5707


//  Id pregunta: 5895 Año de creación de pregunta: 2007
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[48]= new Array();
 choices[48][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[48][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[48][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa";
 choices[48][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[48] = 2;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 5895. LOPD, art&iacute;culo 48";
 preguntaids[48] = 5895


//  Id pregunta: 5611 Año de creación de pregunta: 2007
 questions[49]= "50)  En relaci&oacute;n con la licencia GPL (GNU Public License), una de las siguientes afirmaciones no es cierta.";
 choices[49]= new Array();
 choices[49][0] = "Permite redistribuir, ejecutar y mejorar los programas.";
 choices[49][1] = "Proh&iacute;be cobrar un precio por el acto f&iacute;sico de transferir una copia.";
 choices[49][2] = "No permite que incluya sus programas en programas propietarios.";
 choices[49][3] = "Fue creada por la Free Software Foundation.";
 answers[49] = 1;
 units[49] = ['41'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 5611. ";
 preguntaids[49] = 5611


//  Id pregunta: 5713 Año de creación de pregunta: 2007
 questions[50]= "51)  &iquest;En cu&aacute;l de las fases de la planificaci&oacute;n de una auditoria inform&aacute;tica pueden surgir ciertos problemas por coincidir las fechas de trabajo del personal de la empresa auditora con otros clientes?";
 choices[50]= new Array();
 choices[50][0] = "fase de planificaci&oacute;n estrat&eacute;gica";
 choices[50][1] = "fase de planificaci&oacute;n administrativa";
 choices[50][2] = "fase de planificaci&oacute;n t&eacute;cnica";
 choices[50][3] = "fase de planificaci&oacute;n operativa";
 answers[50] = 1;
 units[50] = ['36'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 5713. ";
 preguntaids[50] = 5713


//  Id pregunta: 5827 Año de creación de pregunta: 2007
 questions[51]= "52)  Los sistemas colaborativos buscan";
 choices[51]= new Array();
 choices[51][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[51][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n.";
 choices[51][2] = "Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto.";
 choices[51][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n.";
 answers[51] = 2;
 units[51] = ['24'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 5827. Examen 2006 JCYL";
 preguntaids[51] = 5827


//  Id pregunta: 5715 Año de creación de pregunta: 2007
 questions[52]= "53)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[52]= new Array();
 choices[52][0] = "el Comit&eacute; Mediador y Arbitral de la Propiedad intelectual";
 choices[52][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[52][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[52][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de la Propiedad Intelectual";
 answers[52] = 3;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 5715. ";
 preguntaids[52] = 5715


//  Id pregunta: 5666 Año de creación de pregunta: 2007
 questions[53]= "54)  &iquest;Cu&aacute;nto tiempo durar&aacute;n los derechos de explotaci&oacute;n de una obra?";
 choices[53]= new Array();
 choices[53][0] = "Hasta la muerte de su autor";
 choices[53][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[53][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[53][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[53] = 2;
 units[53] = ['41'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 5666. ";
 preguntaids[53] = 5666


//  Id pregunta: 5842 Año de creación de pregunta: 2007
 questions[54]= "55)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[54][1] = "Al valorar los recursos que se han consumido.";
 choices[54][2] = "Para ver la forma de materializar un desarrollo.";
 choices[54][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[54] = 3;
 units[54] = ['33'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 5842. Examen 2006 JCYL";
 preguntaids[54] = 5842


//  Id pregunta: 5883 Año de creación de pregunta: 2009
 questions[55]= "56)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 y el RD 1720/2007 ser&aacute; posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando la cesi&oacute;n sea entre Administraciones P&uacute;blicas y concurra uno de los siguientes supuestos:";
 choices[55]= new Array();
 choices[55][0] = "Tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos.";
 choices[55][1] = "Los datos de car&aacute;cter personal hayan sido recogidos o elaborados por una Administraci&oacute;n P&uacute;blica con destino a otra.";
 choices[55][2] = "La comunicaci&oacute;n se realice para el ejercicio de competencias id&eacute;nticas o que versen sobre las mismas materias";
 choices[55][3] = "Todas las anteriores son ciertas";
 answers[55] = 3;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 5883. ";
 preguntaids[55] = 5883


//  Id pregunta: 5906 Año de creación de pregunta: 2007
 questions[56]= "57)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[56]= new Array();
 choices[56][0] = "Gu&iacute;a ETSI";
 choices[56][1] = "Norma ETSI";
 choices[56][2] = "Recomendaci&oacute;n ETSI";
 choices[56][3] = "Especificaci&oacute;n t&eacute;cnica ETSI";
 answers[56] = 2;
 units[56] = ['48'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 5906. ";
 preguntaids[56] = 5906


//  Id pregunta: 5669 Año de creación de pregunta: 2007
 questions[57]= "58)  Una de las siguientes afirmaciones no es cierta respecto a Ia ISO (Organization International de Normalization).";
 choices[57]= new Array();
 choices[57][0] = "Es una red de los institutos de normas nacionales de mas de cien pa&iacute;ses.";
 choices[57][1] = "Es una organizaci&oacute;n no gubernamental.";
 choices[57][2] = "Todos sus miembros son parte de la estructura gubernamental de sus pa&iacute;ses, o son conferidos por mandato por su gobierno.";
 choices[57][3] = "La Secretaria Central esta en Ginebra, Suiza.";
 answers[57] = 2;
 units[57] = ['48'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 5669. ";
 preguntaids[57] = 5669


//  Id pregunta: 5956 Año de creación de pregunta: 2007
 questions[58]= "59)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicacionesdestinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea";
 choices[58][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto ladocumentaci&oacute;n t&eacute;cnica y los manuales de uso del programa";
 choices[58][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el usocolaborativo del software";
 choices[58][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de loselementos de los programas de ordenador";
 answers[58] = 1;
 units[58] = ['41'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 5956. ";
 preguntaids[58] = 5956


//  Id pregunta: 5762 Año de creación de pregunta: 2009
 questions[59]= "60)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[59]= new Array();
 choices[59][0] = "b&aacute;sico";
 choices[59][1] = "medio";
 choices[59][2] = "alto";
 choices[59][3] = "muy alto";
 answers[59] = 0;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 5762. ";
 preguntaids[59] = 5762


//  Id pregunta: 5712 Año de creación de pregunta: 2007
 questions[60]= "61)  El Responsable de Seguridad de un fichero con datos de car&aacute;cter personal revisar&aacute; el registro de accesos, al menos";
 choices[60]= new Array();
 choices[60][0] = "una vez al mes";
 choices[60][1] = "cada 45 d&iacute;as";
 choices[60][2] = "cuando ocurra una incidencia";
 choices[60][3] = "con anterioridad a la auditoria bienal";
 answers[60] = 0;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 5712. ";
 preguntaids[60] = 5712


//  Id pregunta: 5891 Año de creación de pregunta: 2007
 questions[61]= "62)  En cual de los siguientes casos se podr&aacute; utilizar el procedimiento negociado";
 choices[61]= new Array();
 choices[61][0] = "Cuando se trate de bienes o servicios declarados de contrataci&oacute;n centralizada.";
 choices[61][1] = "En casos de imperiosa urgencia.";
 choices[61][2] = "Cuando no se presenten proposiciones en respuesta a un procedimiento abierto o restringido o &eacute;stas sean irregulares o inaceptables.";
 choices[61][3] = "En todos los casos anteriores";
 answers[61] = 3;
 units[61] = ['37'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 5891. ";
 preguntaids[61] = 5891


//  Id pregunta: 5570 Año de creación de pregunta: 2007
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes elementos de un centro de contacto acepta la combinaci&oacute;n de la voz humana y pulsaciones en el teclado y provee respuestas en forma de voz?";
 choices[62]= new Array();
 choices[62][0] = "Sistema de respuesta de voz interactiva (IVR).";
 choices[62][1] = "Agente Virtual Inteligente (IVA).";
 choices[62][2] = "Distribuidor Autom&aacute;tico de Llamadas (ASR).";
 choices[62][3] = "Sistema de Reconocimiento Autom&aacute;tico del Lenguaje (ASR).";
 answers[62] = 0;
 units[62] = ['30'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 5570. ";
 preguntaids[62] = 5570


//  Id pregunta: 5966 Año de creación de pregunta: 2007
 questions[63]= "64)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece sobre la creaci&oacute;n de programas de ordenador por trabajadores asalariados en elejercicio de sus funciones en la empresa que";
 choices[63]= new Array();
 choices[63][0] = "No son titulares de los derechos de explotaci&oacute;n del programa, ni del c&oacute;digo fuente, ni del objeto, salvo pactoen contrario con la empresa";
 choices[63][1] = "Son titulares siempre de los derechos de explotaci&oacute;n del c&oacute;digo fuente del programa, no as&iacute; del c&oacute;digoobjeto, que necesariamente se habr&aacute; probado y validado en los sistemas inform&aacute;ticos de la empresa";
 choices[63][2] = "Siempre son titulares tanto del c&oacute;digo fuente como del objeto, as&iacute; como de toda la documentaci&oacute;npreparatoria que hayan generado durante su trabajo de creaci&oacute;n; el empresario tendr&aacute; derecho en todo casoa disponer de una copia de todo el software para su explotaci&oacute;n comercial";
 choices[63][3] = "El &uacute;nico y exclusivo titular de los derechos de explotaci&oacute;n del programa de ordenador creado es elempresario, en toda circunstancia legal";
 answers[63] = 0;
 units[63] = ['41'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 5966. ";
 preguntaids[63] = 5966


//  Id pregunta: 5764 Año de creación de pregunta: 2007
 questions[64]= "65)  Seg&uacute;n las pautas de conducta en el proceso de auditoria, los auditores pueden o deben hacer";
 choices[64]= new Array();
 choices[64][0] = "escribir los procedimientos";
 choices[64][1] = "realizar gesti&oacute;n de perfiles de usuarios";
 choices[64][2] = "realizar Ia documentaci&oacute;n";
 choices[64][3] = "verificar que se evaluan peri&oacute;dicamente riesgos o bien evaluarlos";
 answers[64] = 3;
 units[64] = ['36'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 5764. ";
 preguntaids[64] = 5764


//  Id pregunta: 5705 Año de creación de pregunta: 2007
 questions[65]= "66)  El RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que la adquisicion de programas de ordenador a medida:";
 choices[65]= new Array();
 choices[65][0] = "se considera contrato de obra.";
 choices[65][1] = "se considera contrato de servicios.";
 choices[65][2] = "se considera contrato de suministro.";
 choices[65][3] = "se considera contrato de consultoria y asistencia.";
 answers[65] = 1;
 units[65] = ['37'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 5705. ";
 preguntaids[65] = 5705


//  Id pregunta: 5661 Año de creación de pregunta: 2007
 questions[66]= "67)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[66]= new Array();
 choices[66][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[66][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[66][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[66][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[66] = 3;
 units[66] = ['33'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 5661. Castilla la Mancha 2006";
 preguntaids[66] = 5661


//  Id pregunta: 5610 Año de creación de pregunta: 2007
 questions[67]= "68)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[67]= new Array();
 choices[67][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[67][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[67][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[67][3] = "&Uacute;nicamente el responsable del fichero";
 answers[67] = 2;
 units[67] = ['35'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5610. ";
 preguntaids[67] = 5610


//  Id pregunta: 5896 Año de creación de pregunta: 2007
 questions[68]= "69)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[68]= new Array();
 choices[68][0] = "Multiling&uuml;ismo";
 choices[68][1] = "Subsidiariedad";
 choices[68][2] = "Eficiencia";
 choices[68][3] = "Accesibilidad";
 answers[68] = 2;
 units[68] = ['43'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 5896. ";
 preguntaids[68] = 5896


//  Id pregunta: 5905 Año de creación de pregunta: 2009
 questions[69]= "70)  Seg&uacute;n el RD 1720/2007, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &quot;Responsable del fichero o tratamiento&quot;?";
 choices[69]= new Array();
 choices[69][0] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[69][1] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. No podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[69][2] = "Persona jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[69][3] = "Persona f&iacute;sica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 answers[69] = 0;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 5905. ";
 preguntaids[69] = 5905


//  Id pregunta: 5761 Año de creación de pregunta: 2007
 questions[70]= "71)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[70]= new Array();
 choices[70][0] = "activo";
 choices[70][1] = "salvaguarda";
 choices[70][2] = "amenaza";
 choices[70][3] = "vulnerabilidad";
 answers[70] = 3;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 5761. ";
 preguntaids[70] = 5761


//  Id pregunta: 5816 Año de creación de pregunta: 2007
 questions[71]= "72)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[71]= new Array();
 choices[71][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[71][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[71][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[71][3] = "La citada ley no hace referencia a tal concepto";
 answers[71] = 2;
 units[71] = ['41'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5816. Examen 2006 JCYL";
 preguntaids[71] = 5816


//  Id pregunta: 5884 Año de creación de pregunta: 2007
 questions[72]= "73)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[72]= new Array();
 choices[72][0] = "El sector p&uacute;blico exclusivamente";
 choices[72][1] = "El sector privado exclusivamente";
 choices[72][2] = "Los sectores p&uacute;blico y privado";
 choices[72][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[72] = 2;
 units[72] = ['35'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 5884. ";
 preguntaids[72] = 5884


//  Id pregunta: 5569 Año de creación de pregunta: 2007
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n incorrecta. El departamento de seguridad inform&aacute;tica dentro de una organizaci&oacute;n especializada en tecnolog&iacute;as de informaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Debe ser independiente del departamento de sistemas.";
 choices[73][1] = "Debe ser independiente del departamento de comunicaciones.";
 choices[73][2] = "Debe ser independiente del departamento de desarrollo.";
 choices[73][3] = "Centra su actividad en la seguridad en las redes.";
 answers[73] = 3;
 units[73] = ['30'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 5569. ";
 preguntaids[73] = 5569


//  Id pregunta: 5668 Año de creación de pregunta: 2007
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[74]= new Array();
 choices[74][0] = "Inversi&oacute;n promedio.";
 choices[74][1] = "Coste de desarrollo actualizado.";
 choices[74][2] = "Beneficio neto.";
 choices[74][3] = "Valor actual.";
 answers[74] = 3;
 units[74] = ['33'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 5668. Castilla la Mancha 2006";
 preguntaids[74] = 5668


