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
//  Id pregunta: 9829 Año de creación de pregunta: 2015
 questions[0]= "1)  Indique la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Java es independiente de la plataforma.";
 choices[0][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[0][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[0][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[0] = 2;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9829. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";
 preguntaids[0] = 9829


//  Id pregunta: 9802 Año de creación de pregunta: 2015
 questions[1]= "2)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[1]= new Array();
 choices[1][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[1][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[1][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[1][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[1] = 2;
 units[1] = ['35'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 9802. ";
 preguntaids[1] = 9802


//  Id pregunta: 9816 Año de creación de pregunta: 2015
 questions[2]= "3)  Marque el lenguaje que est&aacute; basado en XML:";
 choices[2]= new Array();
 choices[2][0] = "XBRL";
 choices[2][1] = "SOAP";
 choices[2][2] = "UDDI";
 choices[2][3] = "XBGG";
 answers[2] = 0;
 units[2] = ['74'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9816. ";
 preguntaids[2] = 9816


//  Id pregunta: 9789 Año de creación de pregunta: 2015
 questions[3]= "4)  Seg&uacute;n el criterio de subsidiariedad a la hora de implantar una infraestructura com&uacute;n, es m&aacute;s conveniente:";
 choices[3]= new Array();
 choices[3][0] = "Forzar su utilizaci&oacute;n por todos los entes implicados.";
 choices[3][1] = "Establecer su uso como voluntario.";
 choices[3][2] = "Recomendar la utilizaci&oacute;n parcial de la infraestructura.";
 choices[3][3] = "Ninguna de las anteriores.";
 answers[3] = 1;
 units[3] = ['47'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 9789. ";
 preguntaids[3] = 9789


//  Id pregunta: 9787 Año de creación de pregunta: 2015
 questions[4]= "5)  El Esquema Nacional de Interoperabilidad:";
 choices[4]= new Array();
 choices[4][0] = "Incluye criterios y recomendaciones de seguridad, conservaci&oacute;n y normalizaci&oacute;n de la informaci&oacute;n.";
 choices[4][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[4][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[4][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[4] = 0;
 units[4] = ['43', '44'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9787. Art&iacute;culo 1, ENI RD 4/2010";
 preguntaids[4] = 9787


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[5]= "6)  No es objetivo de la Ley 39/2015:";
 choices[5]= new Array();
 choices[5][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[5][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[5][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[5][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[5] = 2;
 units[5] = ['7', '47'];
 blocks[5] = ['A2', 'B1'];
 comments[5] = "Id Pregunta: 9790. ";
 preguntaids[5] = 9790


//  Id pregunta: 9842 Año de creación de pregunta: 2015
 questions[6]= "7)  Indique cu&aacute;l de los siguientes procesos de M&eacute;trica v3 no incluye actividades de la interfaz para Gestion de la Configuraci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "ASI";
 choices[6][1] = "PSI";
 choices[6][2] = "MSI";
 choices[6][3] = "EVS";
 answers[6] = 1;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 9842. ";
 preguntaids[6] = 9842


//  Id pregunta: 9830 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;ale la respuesta correcta:";
 choices[7]= new Array();
 choices[7][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[7][1] = "Weblogic es un contenedor de servlets.";
 choices[7][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[7][3] = "Spring es un m&oacute;dulo de Java EE.";
 answers[7] = 2;
 units[7] = ['64'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9830. ";
 preguntaids[7] = 9830


//  Id pregunta: 9821 Año de creación de pregunta: 2015
 questions[8]= "9)  El DNIe 3.0:";
 choices[8]= new Array();
 choices[8][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[8][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[8][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[8][3] = "Todas las anteriores.";
 answers[8] = 1;
 units[8] = ['78'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9821. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma. C. Amplia la vigencia de los certificados (antes 30 meses).";
 preguntaids[8] = 9821


//  Id pregunta: 9792 Año de creación de pregunta: 2015
 questions[9]= "10)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[9]= new Array();
 choices[9][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[9][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[9][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[9][3] = "Ninguna de las anteriores.";
 answers[9] = 1;
 units[9] = ['46'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 9792. ENS, Anexo II (5.7.4 Firma electr&oacute;nica [mp.info.4])";
 preguntaids[9] = 9792


//  Id pregunta: 9793 Año de creación de pregunta: 2015
 questions[10]= "11)  Marque la que no es una medida del Esquema Nacional de Interoperabilidad para la recuperaci&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos:";
 choices[10]= new Array();
 choices[10][0] = "La asociaci&oacute;n de metadatos m&iacute;nimos obligatorios.";
 choices[10][1] = "La documentaci&oacute;n de los procedimientos que garanticen la interoperabilidad a medio y largo plazo.";
 choices[10][2] = "La identificaci&oacute;n &uacute;nica e inequ&iacute;voca de cada documento.";
 choices[10][3] = "El establecimiento de un per&iacute;odo de conservaci&oacute;n de m&iacute;nimo cinco a&ntilde;os.";
 answers[10] = 3;
 units[10] = ['43'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9793. Art&iacute;culo 21.f, RD 4/2010.";
 preguntaids[10] = 9793


//  Id pregunta: 9822 Año de creación de pregunta: 2015
 questions[11]= "12)  Indique cu&aacute;l es el orden correcto de las siguientes tecnolog&iacute;as de disco, de menor a mayor tiempo de latencia:";
 choices[11]= new Array();
 choices[11][0] = "SCSI, IDE y SATA.";
 choices[11][1] = "SATA, SSD y FC.";
 choices[11][2] = "SSD, SCSI e IDE.";
 choices[11][3] = "IDE, SSD y SAS.";
 answers[11] = 2;
 units[11] = ['53'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9822. ";
 preguntaids[11] = 9822


//  Id pregunta: 9807 Año de creación de pregunta: 2015
 questions[12]= "13)  Un directivo TIC:";
 choices[12]= new Array();
 choices[12][0] = "No puede ser un funcionario de otro cuerpo.";
 choices[12][1] = "No tiene como funci&oacute;n la gesti&oacute;n del cambio.";
 choices[12][2] = "Entre sus funciones se incluye la planificaci&oacute;n estrat&eacute;gica y la gesti&oacute;n de recursos.";
 choices[12][3] = "Todas las anteriores.";
 answers[12] = 2;
 units[12] = ['28'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9807. ";
 preguntaids[12] = 9807


//  Id pregunta: 9814 Año de creación de pregunta: 2015
 questions[13]= "14)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[13]= new Array();
 choices[13][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[13][1] = "Debe implementar una interfaz REST.";
 choices[13][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[13][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[13] = 2;
 units[13] = ['75'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9814. ";
 preguntaids[13] = 9814


//  Id pregunta: 9851 Año de creación de pregunta: 2015
 questions[14]= "15)  Se&ntilde;ale la opci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "RMI es un m&eacute;todo de invocaci&oacute;n remota para Java exclusivamente.";
 choices[14][1] = "CORBA o RMI pueden utilizarse para la comunicaci&oacute;n entre aplicaciones distribuidas de tecnolog&iacute;as distintas.";
 choices[14][2] = "Un Sistema de Comunicaci&oacute;n entre Procesos (IPC) es una capa de software que permite realizar llamadas a m&eacute;todos situados en m&aacute;quinas remotas.";
 choices[14][3] = "DCOM es una tecnolog&iacute;a de Sun Microsystems.";
 answers[14] = 0;
 units[14] = ['55'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9851. ";
 preguntaids[14] = 9851


//  Id pregunta: 9833 Año de creación de pregunta: 2015
 questions[15]= "16)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[15]= new Array();
 choices[15][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[15][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[15][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[15][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[15] = 3;
 units[15] = ['73'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9833. ";
 preguntaids[15] = 9833


//  Id pregunta: 9818 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l de &eacute;stas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[16]= new Array();
 choices[16][0] = "DER";
 choices[16][1] = "CERT";
 choices[16][2] = "PME";
 choices[16][3] = "Ninguno de los anteriores.";
 answers[16] = 0;
 units[16] = ['77'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9818. ";
 preguntaids[16] = 9818


//  Id pregunta: 9812 Año de creación de pregunta: 2015
 questions[17]= "18)  Amazon EC2 y RackSpace son ejemplos de:";
 choices[17]= new Array();
 choices[17][0] = "SaaS";
 choices[17][1] = "IaaS";
 choices[17][2] = "PaaS";
 choices[17][3] = "Nube h&iacute;bridas";
 answers[17] = 1;
 units[17] = ['52'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9812. ";
 preguntaids[17] = 9812


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[18]= "19)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[18]= new Array();
 choices[18][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[18][1] = "Informado, sostenible y solidario.";
 choices[18][2] = "Inteligente, sostenible e integrador.";
 choices[18][3] = "Arm&oacute;nico, estable y social.";
 answers[18] = 2;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 9796. ";
 preguntaids[18] = 9796


//  Id pregunta: 9798 Año de creación de pregunta: 2015
 questions[19]= "20)  Son principios del programa europeo ISA:";
 choices[19]= new Array();
 choices[19][0] = "La privacidad, la apertura y la seguridad.";
 choices[19][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[19][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[19][3] = "Todas las anteriores.";
 answers[19] = 3;
 units[19] = ['43', '19'];
 blocks[19] = ['B1', 'A4'];
 comments[19] = "Id Pregunta: 9798. ";
 preguntaids[19] = 9798


//  Id pregunta: 9815 Año de creación de pregunta: 2015
 questions[20]= "21)  Son principios arquitect&oacute;nicos de dise&ntilde;o de SOA:";
 choices[20]= new Array();
 choices[20][0] = "Encapsulaci&oacute;n, autonom&iacute;a y m&aacute;xima dependencia entre servicios.";
 choices[20][1] = "Optimizaci&oacute;n, abstracci&oacute;n y fiabilidad.";
 choices[20][2] = "Composici&oacute;n, descubrimiento y reutilizaci&oacute;n.";
 choices[20][3] = "Fuerte acoplamiento, contrato y madurez.";
 answers[20] = 2;
 units[20] = ['55'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9815. ";
 preguntaids[20] = 9815


//  Id pregunta: 9797 Año de creación de pregunta: 2015
 questions[21]= "22)  No es un objetivo de Europa 2020:";
 choices[21]= new Array();
 choices[21][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[21][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[21][2] = "Reducir al menos en 20 millones el n&uacute;mero de personas en situaci&oacute;n o riesgo de pobreza y exclusi&oacute;n social.";
 choices[21][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1990.";
 answers[21] = 1;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 9797. ";
 preguntaids[21] = 9797


//  Id pregunta: 9811 Año de creación de pregunta: 2015
 questions[22]= "23)  Indique cu&aacute;l de &eacute;stos es un problema asociado al cloud computing:";
 choices[22]= new Array();
 choices[22][0] = "Necesita de una mayor inversi&oacute;n inicial que una infraestructura in-house.";
 choices[22][1] = "Lock-in (cliente cautivo)";
 choices[22][2] = "Generalmente la implantaci&oacute;n es m&aacute;s lenta que con una infraestructura in-house.";
 choices[22][3] = "Ninguno de los anteriores.";
 answers[22] = 1;
 units[22] = ['52'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9811. ";
 preguntaids[22] = 9811


//  Id pregunta: 9850 Año de creación de pregunta: 2015
 questions[23]= "24)  Las fases por ciclo en el Modelo de Ciclo de Vida en espiral son:";
 choices[23]= new Array();
 choices[23][0] = "Planificaci&oacute;n, An&aacute;lisis de Riesgos, Ingenier&iacute;a y Evaluaci&oacute;n.";
 choices[23][1] = "Planificaci&oacute;n, Dise&ntilde;o, Codificaci&oacute;n e Integraci&oacute;n.";
 choices[23][2] = "Construcci&oacute;n y Transici&oacute;n.";
 choices[23][3] = "Adaptaci&oacute;n, Composici&oacute;n y Reemplazo.";
 answers[23] = 0;
 units[23] = ['82'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 9850. ";
 preguntaids[23] = 9850


//  Id pregunta: 9854 Año de creación de pregunta: 2015
 questions[24]= "25)  Indique la que no es una caracter&iacute;stica com&uacute;n de las &aacute;reas clave del proceso seg&uacute;n CMM:";
 choices[24]= new Array();
 choices[24][0] = "Verificaci&oacute;n de la implementaci&oacute;n.";
 choices[24][1] = "Actividades realizadas.";
 choices[24][2] = "Imposibilidad de realizaci&oacute;n.";
 choices[24][3] = "Medici&oacute;n y an&aacute;lisis.";
 answers[24] = 2;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9854. ";
 preguntaids[24] = 9854


//  Id pregunta: 9805 Año de creación de pregunta: 2015
 questions[25]= "26)  Un plan de emergencia es un plan por el que...";
 choices[25]= new Array();
 choices[25][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[25][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[25][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[25][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[25] = 3;
 units[25] = ['45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9805. ";
 preguntaids[25] = 9805


//  Id pregunta: 9804 Año de creación de pregunta: 2015
 questions[26]= "27)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[26]= new Array();
 choices[26][0] = "Anualmente";
 choices[26][1] = "Cada tres a&ntilde;os";
 choices[26][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[26][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[26] = 1;
 units[26] = ['37'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 9804. Art 70.2, texto refundido de la Ley de Contratos del Sector P&uacute;blico";
 preguntaids[26] = 9804


//  Id pregunta: 9845 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes es un framework de mejores pr&aacute;cticas dirigida al control y supervisi&oacute;n de tecnolog&iacute;a de la informaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "ISACA";
 choices[27][1] = "PNBOK";
 choices[27][2] = "COVIT";
 choices[27][3] = "Ninguna de las anteriores.";
 answers[27] = 3;
 units[27] = ['101'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 9845. ";
 preguntaids[27] = 9845


//  Id pregunta: 9838 Año de creación de pregunta: 2015
 questions[28]= "29)  BPMN (Business Process Model and Notation)...";
 choices[28]= new Array();
 choices[28][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[28][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[28][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[28][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[28] = 0;
 units[28] = ['86'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 9838. ";
 preguntaids[28] = 9838


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[29]= new Array();
 choices[29][0] = "Secure Transport Over bRoad toKens";
 choices[29][1] = "Security idenTity acrOss boRders linKed";
 choices[29][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[29][3] = "Safe noTes stOring encRypted Keys";
 answers[29] = 1;
 units[29] = ['77', '78'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9783. ";
 preguntaids[29] = 9783


//  Id pregunta: 9839 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Cu&aacute;l de estas no es una novedad de M&eacute;trica v3 con respecto a M&eacute;trica v2?";
 choices[30]= new Array();
 choices[30][0] = "Propone un conjunto de t&eacute;cnicas para obtener los productos intermedios y finales.";
 choices[30][1] = "Cubre tanto el desarrollo estructurado como el desarrollo orientado a objetos.";
 choices[30][2] = "Su estructura est&aacute; basada en procesos de entrada, transformaci&oacute;n y salida seg&uacute;n ISO 12207.";
 choices[30][3] = "Se incluyen interfaces para aspectos de gesti&oacute;n.";
 answers[30] = 0;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 9839. ";
 preguntaids[30] = 9839


//  Id pregunta: 9841 Año de creación de pregunta: 2015
 questions[31]= "32)  La actividad &ldquo;Elaboraci&oacute;n del Modelo de Datos&rdquo; forma parte del proceso de M&eacute;trica v3:";
 choices[31]= new Array();
 choices[31][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[31][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[31][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[31][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 answers[31] = 2;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 9841. ";
 preguntaids[31] = 9841


//  Id pregunta: 9834 Año de creación de pregunta: 2015
 questions[32]= "33)  Se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "Un proceso es equivalente a un hilo de ejecuci&oacute;n.";
 choices[32][1] = "Los hilos no pueden compartir entre ellos datos o espacios de direcciones.";
 choices[32][2] = "Se tarda m&aacute;s en eliminar un hilo que un proceso.";
 choices[32][3] = "Tanto los procesos como los hilos pueden crear sus propios hijos.";
 answers[32] = 3;
 units[32] = ['56'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9834. ";
 preguntaids[32] = 9834


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[33]= "34)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[33]= new Array();
 choices[33][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[33][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[33][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[33][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[33] = 3;
 units[33] = ['7', '77'];
 blocks[33] = ['A2', 'B2'];
 comments[33] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[33] = 9791


//  Id pregunta: 9828 Año de creación de pregunta: 2015
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[34]= new Array();
 choices[34][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[34][1] = "Sitio web din&aacute;mico.";
 choices[34][2] = "Una plataforma de e-learning.";
 choices[34][3] = "Todas las anteriores.";
 answers[34] = 3;
 units[34] = ['63'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9828. ";
 preguntaids[34] = 9828


//  Id pregunta: 9836 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[35]= new Array();
 choices[35][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[35][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[35][2] = "Externo, interno y conceptual.";
 choices[35][3] = "Externo, interno y l&oacute;gico.";
 answers[35] = 2;
 units[35] = ['60'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9836. ";
 preguntaids[35] = 9836


//  Id pregunta: 9832 Año de creación de pregunta: 2015
 questions[36]= "37)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[36]= new Array();
 choices[36][0] = "OLAP";
 choices[36][1] = "OLTP";
 choices[36][2] = "ETL";
 choices[36][3] = "OLTA";
 answers[36] = 0;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9832. ";
 preguntaids[36] = 9832


//  Id pregunta: 9853 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;les son los dos modelos de autoevaluaci&oacute;n seg&uacute;n ISO 9004?";
 choices[37]= new Array();
 choices[37][0] = "El de los Criterios Operativos y el de los Criterios Aumentados.";
 choices[37][1] = "El de Estimulaci&oacute;n y el de Mantenimiento.";
 choices[37][2] = "El de Aproximaci&oacute;n Formal y el de Aproximaci&oacute;n Reactiva.";
 choices[37][3] = "El de los Elementos Clave y el de los Elementos Detallados";
 answers[37] = 3;
 units[37] = ['92'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 9853. ";
 preguntaids[37] = 9853


//  Id pregunta: 9848 Año de creación de pregunta: 2015
 questions[38]= "39)  En Scrum, el prop&oacute;sito de la retrospectiva del Sprint es:";
 choices[38]= new Array();
 choices[38][0] = "Revisar el estado del producto que se ha desarrollado durante el Sprint.";
 choices[38][1] = "Realizar una mejora continua del proceso.";
 choices[38][2] = "Que el Scrum Master comunique al equipo lo que deben mejorar para el siguiente Sprint.";
 choices[38][3] = "Asignar las tareas del siguiente Sprint a los diferentes miembros del equipo.";
 answers[38] = 1;
 units[38] = ['84'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 9848. ";
 preguntaids[38] = 9848


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[39]= "40)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[39]= new Array();
 choices[39][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[39][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[39][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[39][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[39] = 2;
 units[39] = ['7', '47'];
 blocks[39] = ['A2', 'B1'];
 comments[39] = "Id Pregunta: 9782. ";
 preguntaids[39] = 9782


//  Id pregunta: 9835 Año de creación de pregunta: 2015
 questions[40]= "41)  El sistema operativo Android:";
 choices[40]= new Array();
 choices[40][0] = "Est&aacute; basado en el kernel de Linux.";
 choices[40][1] = "Est&aacute; basado en la distribuci&oacute;n &ldquo;Ubuntu Touch&rdquo;.";
 choices[40][2] = "Es una distribuci&oacute;n de Linux.";
 choices[40][3] = "Es el resultado de la combinaci&oacute;n de Linux y Firefox OS.";
 answers[40] = 0;
 units[40] = ['59'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9835. ";
 preguntaids[40] = 9835


//  Id pregunta: 9788 Año de creación de pregunta: 2015
 questions[41]= "42)  La red SARA:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[41][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[41][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[41][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[41] = 3;
 units[41] = ['114'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 9788. ";
 preguntaids[41] = 9788


//  Id pregunta: 9831 Año de creación de pregunta: 2015
 questions[42]= "43)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[42]= new Array();
 choices[42][0] = "SIC y SILG.";
 choices[42][1] = "SIGNA y SIANE.";
 choices[42][2] = "SIGMA y SIGPAC.";
 choices[42][3] = "SIGMAPA y SEGRO.";
 answers[42] = 1;
 units[42] = ['71'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9831. ";
 preguntaids[42] = 9831


//  Id pregunta: 9820 Año de creación de pregunta: 2015
 questions[43]= "44)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[43][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[43][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[43][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[43] = 1;
 units[43] = ['78'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9820. ";
 preguntaids[43] = 9820


//  Id pregunta: 9847 Año de creación de pregunta: 2015
 questions[44]= "45)  Indique la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "UML est&aacute; dise&ntilde;ado para utilizarse exclusivamente con la metodolog&iacute;a RUP.";
 choices[44][1] = "UML es un m&oacute;dulo de OMT (Object-Modeling Technique)";
 choices[44][2] = "UML es un lenguaje de programaci&oacute;n estructurada.";
 choices[44][3] = "UML puede describir m&eacute;todos o procesos.";
 answers[44] = 3;
 units[44] = ['89'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 9847. ";
 preguntaids[44] = 9847


//  Id pregunta: 9795 Año de creación de pregunta: 2015
 questions[45]= "46)  La Ley 56/2007 de medidas de Impulso de la Sociedad de la Informaci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Modifica las leyes 34/2002, 59/2003 y 7/1996.";
 choices[45][1] = "Introduce normativa sobre facturaci&oacute;n electr&oacute;nica.";
 choices[45][2] = "Elimina la intervenci&oacute;n del MINETUR para dirigirse a los prestadores de servicios de intermediaci&oacute;n.";
 choices[45][3] = "Todas las anteriores.";
 answers[45] = 3;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 9795. ";
 preguntaids[45] = 9795


//  Id pregunta: 9810 Año de creación de pregunta: 2015
 questions[46]= "47)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[46]= new Array();
 choices[46][0] = "El Real Decreto 1494/2007";
 choices[46][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[46][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[46][3] = "Todas las anteriores.";
 answers[46] = 3;
 units[46] = ['42'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9810. ";
 preguntaids[46] = 9810


//  Id pregunta: 9817 Año de creación de pregunta: 2015
 questions[47]= "48)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[47]= new Array();
 choices[47][0] = "IETF RFC 1738";
 choices[47][1] = "IETF RFC 1392";
 choices[47][2] = "IETF RFC 2616";
 choices[47][3] = "IETF RFC 4287";
 answers[47] = 3;
 units[47] = ['74'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9817. ";
 preguntaids[47] = 9817


//  Id pregunta: 9806 Año de creación de pregunta: 2015
 questions[48]= "49)  La ISO publica:";
 choices[48]= new Array();
 choices[48][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[48][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[48][2] = "A y B son correctas.";
 choices[48][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[48] = 0;
 units[48] = ['48'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9806. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";
 preguntaids[48] = 9806


//  Id pregunta: 9786 Año de creación de pregunta: 2015
 questions[49]= "50)  Elija la respuesta incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[49][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[49][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[49][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[49] = 1;
 units[49] = ['44'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 9786. Art&iacute;culo 1, ENI RD 4/2010: deben evitar discriminaci&oacute;n.";
 preguntaids[49] = 9786


//  Id pregunta: 9827 Año de creación de pregunta: 2015
 questions[50]= "51)  El planificador de Windows:";
 choices[50]= new Array();
 choices[50][0] = "Se ejecuta en el hilo de planificaci&oacute;n central del kernel.";
 choices[50][1] = "Su c&oacute;digo se ejecuta cuando se completa una operaci&oacute;n de E/S.";
 choices[50][2] = "Windows no tiene planificador.";
 choices[50][3] = "Est&aacute; escrito en Python.";
 answers[50] = 1;
 units[50] = ['58'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9827. ";
 preguntaids[50] = 9827


//  Id pregunta: 9800 Año de creación de pregunta: 2015
 questions[51]= "52)  Son europeos:";
 choices[51]= new Array();
 choices[51][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[51][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[51][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[51][3] = "La red SARA";
 answers[51] = 0;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 9800. ";
 preguntaids[51] = 9800


//  Id pregunta: 9825 Año de creación de pregunta: 2015
 questions[52]= "53)  El algoritmo Rijndael:";
 choices[52]= new Array();
 choices[52][0] = "Tiene un tama&ntilde;o de clave fijo de 128 bits.";
 choices[52][1] = "Tiene un tama&ntilde;o de bloque fijo de 256 bits.";
 choices[52][2] = "Tiene un tama&ntilde;o de clave de 128, 192 o 256 bits.";
 choices[52][3] = "Tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits.";
 answers[52] = 3;
 units[52] = ['76'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9825. AES tiene un tama&ntilde;o de clave de 128, 192 o 256 bits. Rijndael, en el que est&aacute; basado, tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits (m&iacute;nimo 128 bits y m&aacute;ximo 256 bits).";
 preguntaids[52] = 9825


//  Id pregunta: 9846 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Qu&eacute; es el fan-out en dise&ntilde;o estructurado?";
 choices[53]= new Array();
 choices[53][0] = "El grado de acoplamiento externo.";
 choices[53][1] = "El n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[53][2] = "El grado de absorci&oacute;n.";
 choices[53][3] = "El n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 answers[53] = 1;
 units[53] = ['89'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9846. ";
 preguntaids[53] = 9846


//  Id pregunta: 9801 Año de creación de pregunta: 2015
 questions[54]= "55)  La LOPD:";
 choices[54]= new Array();
 choices[54][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[54][1] = "A y C son correctas";
 choices[54][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[54][3] = "A y C son incorrectas.";
 answers[54] = 2;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9801. ";
 preguntaids[54] = 9801


//  Id pregunta: 9803 Año de creación de pregunta: 2015
 questions[55]= "56)  Los programas de ordenador...";
 choices[55]= new Array();
 choices[55][0] = "&hellip; nunca pueden ser objeto de una patente.";
 choices[55][1] = "&hellip; son patentables en la medida en que forman parte de una invenci&oacute;n.";
 choices[55][2] = "&hellip; pueden ser siempre patentables.";
 choices[55][3] = "&hellip; son patentables siempre y cuando est&eacute;n escritos en lenguaje de alto nivel.";
 answers[55] = 1;
 units[55] = ['41'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 9803. ";
 preguntaids[55] = 9803


//  Id pregunta: 9844 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Cu&aacute;l de estas publicaciones no pertenece a ITILv3?";
 choices[56]= new Array();
 choices[56][0] = "Mejora continua del servicio";
 choices[56][1] = "Evoluci&oacute;n del Servicio";
 choices[56][2] = "Dise&ntilde;o del Servicio";
 choices[56][3] = "Operaci&oacute;n del Servicio";
 answers[56] = 1;
 units[56] = ['101'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 9844. ";
 preguntaids[56] = 9844


//  Id pregunta: 9852 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[57]= new Array();
 choices[57][0] = "Orientaci&oacute;n hacia los resultados";
 choices[57][1] = "Liderazgo y coherencia en los objetivos";
 choices[57][2] = "Desarrollo de Alianzas";
 choices[57][3] = "Planificaci&oacute;n a corto plazo";
 answers[57] = 3;
 units[57] = ['98'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 9852. ";
 preguntaids[57] = 9852


//  Id pregunta: 9808 Año de creación de pregunta: 2015
 questions[58]= "59)  datos.gob.es...";
 choices[58]= new Array();
 choices[58][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[58][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[58][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[58][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[58] = 3;
 units[58] = ['27'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 9808. ";
 preguntaids[58] = 9808


//  Id pregunta: 9799 Año de creación de pregunta: 2015
 questions[59]= "60)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[59]= new Array();
 choices[59][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[59][1] = "Es la base legal del programa ISA.";
 choices[59][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[59][3] = "La Decisi&oacute;n establece un programa de medidas para la seguridad en las administraciones p&uacute;blicas europeas.";
 answers[59] = 1;
 units[59] = ['43', '19'];
 blocks[59] = ['B1', 'A4'];
 comments[59] = "Id Pregunta: 9799. ";
 preguntaids[59] = 9799


//  Id pregunta: 9849 Año de creación de pregunta: 2015
 questions[60]= "61)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[60]= new Array();
 choices[60][0] = "Intalio";
 choices[60][1] = "Scrum";
 choices[60][2] = "Tibco";
 choices[60][3] = "Adonis";
 answers[60] = 1;
 units[60] = ['86'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 9849. ";
 preguntaids[60] = 9849


//  Id pregunta: 9823 Año de creación de pregunta: 2015
 questions[61]= "62)  Elija la opci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "La copia de seguridad incremental hace una copia de seguridad de todos los archivos.";
 choices[61][1] = "La copia de seguridad diferencial hace una copia de seguridad de todos los archivos.";
 choices[61][2] = "La copia de seguridad diferencial requiere m&aacute;s espacio en cinta y tiempo que la copia de seguridad incremental.";
 choices[61][3] = "La copia de seguridad incremental hace una copia de seguridad solo de los archivos que han cambiado desde la &uacute;ltima copia de seguridad diferencial.";
 answers[61] = 2;
 units[61] = ['53'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9823. ";
 preguntaids[61] = 9823


//  Id pregunta: 9837 Año de creación de pregunta: 2015
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l de estas caracter&iacute;sticas no se corresponde con un agente inteligente:";
 choices[62]= new Array();
 choices[62][0] = "Pueden dar soluciones a diferentes problemas.";
 choices[62][1] = "Poseen capacidad de an&aacute;lisis.";
 choices[62][2] = "Tienen capacidad de aprender y mejorar a trav&eacute;s de la interacci&oacute;n.";
 choices[62][3] = "Ejecutan la misma acci&oacute;n de forma peri&oacute;dica.";
 answers[62] = 3;
 units[62] = ['67'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9837. ";
 preguntaids[62] = 9837


//  Id pregunta: 5524 Año de creación de pregunta: 2015
 questions[63]= "64)  JDBC es:";
 choices[63]= new Array();
 choices[63][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[63][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[63][2] = "Una API que permite la ejecuci&oacute;n de operaciones sobre una base de datos mediante lenguaje Java.";
 choices[63][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[63] = 2;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 5524. La A no es, porque podr&iacute;a no usar ODBC intermedio.";
 preguntaids[63] = 5524


//  Id pregunta: 9840 Año de creación de pregunta: 2015
 questions[64]= "65)  El proceso de M&eacute;trica v3 &ldquo;Planificaci&oacute;n de los Sistemas de Informaci&oacute;n&rdquo; (PSI) tiene como objetivo:";
 choices[64]= new Array();
 choices[64][0] = "Obtener una especificaci&oacute;n detallada del sistema de informaci&oacute;n.";
 choices[64][1] = "Proponer una arquitectura de la informaci&oacute;n a alto nivel.";
 choices[64][2] = "Analizar las necesidades del sistema y proponer una soluci&oacute;n a corto plazo.";
 choices[64][3] = "Obtener una nueva versi&oacute;n de un sistema de informaci&oacute;n preexistente.";
 answers[64] = 1;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 9840. ";
 preguntaids[64] = 9840


//  Id pregunta: 9794 Año de creación de pregunta: 2015
 questions[65]= "66)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[65]= new Array();
 choices[65][0] = "Deben cumplir el principio de persistencia.";
 choices[65][1] = "Deben utilizar el protocolo FTP.";
 choices[65][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[65][3] = "Deben usar una estructura consistente y fija.";
 answers[65] = 0;
 units[65] = ['44'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 9794. Anexo II (Esquema de URI)";
 preguntaids[65] = 9794


//  Id pregunta: 9813 Año de creación de pregunta: 2015
 questions[66]= "67)  SET es:";
 choices[66]= new Array();
 choices[66][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[66][1] = "Un sistema de micropagos.";
 choices[66][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[66][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[66] = 2;
 units[66] = ['75'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9813. ";
 preguntaids[66] = 9813


//  Id pregunta: 9785 Año de creación de pregunta: 2015
 questions[67]= "68)  Son mecanismos que facilitan la interoperabilidad:";
 choices[67]= new Array();
 choices[67][0] = "SCSP, SIR, SOAP y REST.";
 choices[67][1] = "SCSP, SIR y SAML.";
 choices[67][2] = "A y B son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = 2;
 units[67] = ['44'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 9785. ";
 preguntaids[67] = 9785


//  Id pregunta: 8528 Año de creación de pregunta: 2015
 questions[68]= "69)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[68]= new Array();
 choices[68][0] = "En el perfil del contratante y en el BOE.";
 choices[68][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[68][2] = "En el BOE y en el DOUE";
 choices[68][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[68] = 1;
 units[68] = ['10'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 8528. ";
 preguntaids[68] = 8528


//  Id pregunta: 9784 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[69]= new Array();
 choices[69][0] = "SCSP";
 choices[69][1] = "SIGP";
 choices[69][2] = "SAML";
 choices[69][3] = "SIR";
 answers[69] = 0;
 units[69] = ['44'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 9784. Sustituci&oacute;n de Certificados en Soporte Papel";
 preguntaids[69] = 9784


//  Id pregunta: 9843 Año de creación de pregunta: 2015
 questions[70]= "71)  Indique cu&aacute;l de &eacute;stas no es una t&eacute;cnica propuesta por M&eacute;trica v3:";
 choices[70]= new Array();
 choices[70][0] = "Factores Cr&iacute;ticos de &Eacute;xito (FCE).";
 choices[70][1] = "Modelo Entidad/Relaci&oacute;n";
 choices[70][2] = "Diagrama de componentes";
 choices[70][3] = "An&aacute;lisis de Puntos Funci&oacute;n.";
 answers[70] = 0;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 9843. FCE es una pr&aacute;ctica de M&eacute;trica v3";
 preguntaids[70] = 9843


//  Id pregunta: 9824 Año de creación de pregunta: 2015
 questions[71]= "72)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[71]= new Array();
 choices[71][0] = "IBATIS";
 choices[71][1] = "Hibernate";
 choices[71][2] = "CODD";
 choices[71][3] = "Todas lo son.";
 answers[71] = 2;
 units[71] = ['61'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9824. ";
 preguntaids[71] = 9824


//  Id pregunta: 9826 Año de creación de pregunta: 2015
 questions[72]= "73)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[72]= new Array();
 choices[72][0] = "Diffie Hellman";
 choices[72][1] = "RIPEMD";
 choices[72][2] = "Rabbit";
 choices[72][3] = "Blowfish";
 answers[72] = 0;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9826. ";
 preguntaids[72] = 9826


//  Id pregunta: 9809 Año de creación de pregunta: 2015
 questions[73]= "74)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[73]= new Array();
 choices[73][0] = "La gesti&oacute;n de tiempo del proyecto.";
 choices[73][1] = "La organizaci&oacute;n y definici&oacute;n del alcance total del proyecto.";
 choices[73][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[73][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[73] = 1;
 units[73] = ['31'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 9809. ";
 preguntaids[73] = 9809


//  Id pregunta: 9819 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[74]= new Array();
 choices[74][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[74][1] = "Mantener una base de datos de certificados";
 choices[74][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = 0;
 units[74] = ['78'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9819. B y C son exclusivamente para QTSPs";
 preguntaids[74] = 9819


