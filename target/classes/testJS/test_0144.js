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
//  Id pregunta: 2587 Año de creación de pregunta: 2009
 questions[0]= "1)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Salvaguarda del orden p&uacute;blico";
 choices[0][1] = "Salvaguarda del inter&eacute;s general";
 choices[0][2] = "Respeto a la dignidad de la persona";
 choices[0][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[0] = 1;
 units[0] = ['19'];
 blocks[0] = ['A4'];
 comments[0] = "Id Pregunta: 2587. Ley 34/2002, art&iacute;culo 8";
 preguntaids[0] = 2587


//  Id pregunta: 9882 Año de creación de pregunta: 2015
 questions[1]= "2)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas deroga expresamente:";
 choices[1]= new Array();
 choices[1][0] = "La Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[1][1] = "La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos.";
 choices[1][2] = "Ambas";
 choices[1][3] = "Ninguna de las dos Leyes se&ntilde;aladas.";
 answers[1] = 2;
 units[1] = ['7', '19'];
 blocks[1] = ['A2', 'A4'];
 comments[1] = "Id Pregunta: 9882. ";
 preguntaids[1] = 9882


//  Id pregunta: 6783 Año de creación de pregunta: 2010
 questions[2]= "3)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[2]= new Array();
 choices[2][0] = "Bajo, medio y alto";
 choices[2][1] = "B&aacute;sico, medio y alto";
 choices[2][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[2][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[2] = 1;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 6783. Castilla La Mancha 2009";
 preguntaids[2] = 6783


//  Id pregunta: 10055 Año de creación de pregunta: 2015
 questions[3]= "4)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[3]= new Array();
 choices[3][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[3][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[3][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[3][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[3] = 1;
 units[3] = ['74'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10055. Examen TIC A2 2014";
 preguntaids[3] = 10055


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[4]= new Array();
 choices[4][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[4][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[4][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[4][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[4] = 0;
 units[4] = ['14'];
 blocks[4] = ['A3'];
 comments[4] = "Id Pregunta: 373. Pol&iacute;ticas de igualdad";
 preguntaids[4] = 373


//  Id pregunta: 4035 Año de creación de pregunta: 2004
 questions[5]= "6)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[5]= new Array();
 choices[5][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[5][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[5][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[5][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[5] = 2;
 units[5] = ['92', '93'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 4035. ";
 preguntaids[5] = 4035


//  Id pregunta: 10972 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[6]= new Array();
 choices[6][0] = "Un Senador";
 choices[6][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[6][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[6][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[6] = 1;
 units[6] = ['22'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 10972. ";
 preguntaids[6] = 10972


//  Id pregunta: 8070 Año de creación de pregunta: 2011
 questions[7]= "8)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[7]= new Array();
 choices[7][0] = "Crecimiento tecnol&oacute;gico";
 choices[7][1] = "Crecimiento inteligente";
 choices[7][2] = "Crecimiento sostenible";
 choices[7][3] = "Crecimiento integrador";
 answers[7] = 0;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 8070. ";
 preguntaids[7] = 8070


//  Id pregunta: 3710 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Cu&aacute;ndo debe aplicarse un plan de garant&iacute;a de calidad?:";
 choices[8]= new Array();
 choices[8][0] = "En casos de proyectos de gran envergadura";
 choices[8][1] = "Cuando sea rentable econ&oacute;micamente";
 choices[8][2] = "Cuando el cliente as&iacute; lo solicite";
 choices[8][3] = "Cuando el coste de no aplicarlo sea mayor que el de aplicarlo";
 answers[8] = 3;
 units[8] = ['92'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3710. ";
 preguntaids[8] = 3710


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[9]= new Array();
 choices[9][0] = "Anualmente";
 choices[9][1] = "Bienalmente";
 choices[9][2] = "Cada cuatro a&ntilde;os";
 choices[9][3] = "No se define ninguna periodicidad";
 answers[9] = 1;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 474. Estrategia TIC";
 preguntaids[9] = 474


//  Id pregunta: 4725 Año de creación de pregunta: 2002
 questions[10]= "11)  Indicar entre las siguientes normas del IEEE la que trata sobre redes Integradas de voz y datos:";
 choices[10]= new Array();
 choices[10][0] = "802.6";
 choices[10][1] = "802.7";
 choices[10][2] = "802.8";
 choices[10][3] = "802.9";
 answers[10] = 3;
 units[10] = ['101'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 4725. ";
 preguntaids[10] = 4725


//  Id pregunta: 6947 Año de creación de pregunta: 2010
 questions[11]= "12)  La Orden PRE/878/2010 regula";
 choices[11]= new Array();
 choices[11][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[11][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[11][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[11][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[11] = 3;
 units[11] = ['19'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 6947. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";
 preguntaids[11] = 6947


//  Id pregunta: 5084 Año de creación de pregunta: 2002
 questions[12]= "13)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red Token Ring &oacute; IEEE 802.5:";
 choices[12]= new Array();
 choices[12][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[12][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[12][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[12][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[12] = 1;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5084. ";
 preguntaids[12] = 5084


//  Id pregunta: 8005 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[13]= new Array();
 choices[13][0] = "Accesibilidad";
 choices[13][1] = "Correcci&oacute;n";
 choices[13][2] = "Reusabilidad";
 choices[13][3] = "Interoperabilidad";
 answers[13] = 0;
 units[13] = ['92', '93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 8005. Examen TIC A2 2010";
 preguntaids[13] = 8005


//  Id pregunta: 8635 Año de creación de pregunta: 2013
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[14]= new Array();
 choices[14][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[14][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[14][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[14][3] = "Todos son Procesos Principales";
 answers[14] = 2;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8635. ";
 preguntaids[14] = 8635


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[15]= new Array();
 choices[15][0] = "&lt;canvas&gt;";
 choices[15][1] = "&lt;applet&gt;";
 choices[15][2] = "&lt;keygen&gt;";
 choices[15][3] = "&lt;audio&gt;";
 answers[15] = 1;
 units[15] = ['74'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9675. ";
 preguntaids[15] = 9675


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[16]= "17)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[16]= new Array();
 choices[16][0] = "Resoluci&oacute;n.";
 choices[16][1] = "Desistimiento o renuncia.";
 choices[16][2] = "Caducidad.";
 choices[16][3] = "Todas las anteriores.";
 answers[16] = 3;
 units[16] = ['7'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 202. Ley 39/2015";
 preguntaids[16] = 202


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes roles principales NO est&aacute; definido por Scrum Framework?";
 choices[17]= new Array();
 choices[17][0] = "Scrum Team.";
 choices[17][1] = "Scrum Manager.";
 choices[17][2] = "Scrum Master.";
 choices[17][3] = "Scrum Product Owner.";
 answers[17] = 1;
 units[17] = ['84'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 802. AGE A2 2015";
 preguntaids[17] = 802


//  Id pregunta: 5771 Año de creación de pregunta: 2007
 questions[18]= "19)  Cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo SOAP es falsa";
 choices[18]= new Array();
 choices[18][0] = "Atraviesa firewalls y routers";
 choices[18][1] = "Depende del sistema operativo y del procesador";
 choices[18][2] = "Es un est&aacute;ndar de la industria";
 choices[18][3] = "Utiliza los mismos est&aacute;ndares de la Web";
 answers[18] = 1;
 units[18] = ['55'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 5771. ";
 preguntaids[18] = 5771


//  Id pregunta: 3213 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[19][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[19][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[19][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[19] = 3;
 units[19] = ['59'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3213. ";
 preguntaids[19] = 3213


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[20]= "21)  El motor de JavaScript desarrollado en Java por Oracle, integrado con el JDK versi&oacute;n 8 se llama:";
 choices[20]= new Array();
 choices[20][0] = "Rhino.";
 choices[20][1] = "Nashorn.";
 choices[20][2] = "Bootstrap.";
 choices[20][3] = "Backbone JS.";
 answers[20] = 1;
 units[20] = ['74'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 767. AGE A2 2015";
 preguntaids[20] = 767


//  Id pregunta: 10191 Año de creación de pregunta: 2015
 questions[21]= "22)  Para prevenir un ataque de SQL Injection:";
 choices[21]= new Array();
 choices[21][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[21][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[21][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[21][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[21] = 3;
 units[21] = ['119'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 10191. Examen TIC A1 2014";
 preguntaids[21] = 10191


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[22]= "23)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[22]= new Array();
 choices[22][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[22][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[22][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[22][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[22] = 3;
 units[22] = ['5'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 196. Uni&oacute;n Europea";
 preguntaids[22] = 196


//  Id pregunta: 10826 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Equipo de seguridad";
 choices[23][1] = "Equipo de arquitectura";
 choices[23][2] = "Equipo de proyecto";
 choices[23][3] = "T&eacute;cnicos de comunicaciones";
 answers[23] = 0;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10826. ";
 preguntaids[23] = 10826


//  Id pregunta: 1892 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cual de las siguientes alternativas corresponde a los procesos de Desarrollo de Sistemas de Informaci&oacute;n dentro de la metodolog&iacute;a M&eacute;trica v3:";
 choices[24]= new Array();
 choices[24][0] = "Estudio de Viabilidad del Sistema, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[24][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Mantenimiento del Sistema de Informaci&oacute;n";
 choices[24][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n, Construcci&oacute;n del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[24][3] = "Estudio de Viabilidad del Sistema, An&aacute;lisis del Sistema de Informaci&oacute;n, Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[24] = 3;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 1892. ";
 preguntaids[24] = 1892


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[25]= "26)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[25]= new Array();
 choices[25][0] = "CO.PER.";
 choices[25][1] = "COMPER.";
 choices[25][2] = "CO.RE.PER.";
 choices[25][3] = "CO.PE.RRE.";
 answers[25] = 2;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 158. Uni&oacute;n Europea";
 preguntaids[25] = 158


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[26]= new Array();
 choices[26][0] = "Constitucional.";
 choices[26][1] = "Penal.";
 choices[26][2] = "Militar.";
 choices[26][3] = "Tribunales consuetudinarios.";
 answers[26] = 1;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 89. Constituci&oacute;n de 1978";
 preguntaids[26] = 89


//  Id pregunta: 8624 Año de creación de pregunta: 2013
 questions[27]= "28)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[27]= new Array();
 choices[27][0] = "Fue desarrollado por OASIS";
 choices[27][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas";
 choices[27][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[27][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[27] = 1;
 units[27] = ['75'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8624. ";
 preguntaids[27] = 8624


//  Id pregunta: 8294 Año de creación de pregunta: 2011
 questions[28]= "29)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[28]= new Array();
 choices[28][0] = "PKCS#10";
 choices[28][1] = "PKCS#12";
 choices[28][2] = "X.500";
 choices[28][3] = "X.509";
 answers[28] = 0;
 units[28] = ['78'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8294. Examen UPM A2 2011";
 preguntaids[28] = 8294


//  Id pregunta: 6072 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[29]= new Array();
 choices[29][0] = "WDSL";
 choices[29][1] = "SOAP";
 choices[29][2] = "UDDI";
 choices[29][3] = "XHTML";
 answers[29] = 2;
 units[29] = ['55'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6072. Examen TIC A1 MAP 2007";
 preguntaids[29] = 6072


//  Id pregunta: 7941 Año de creación de pregunta: 2011
 questions[30]= "31)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de:";
 choices[30]= new Array();
 choices[30][0] = "Enlace.";
 choices[30][1] = "Red.";
 choices[30][2] = "Transporte.";
 choices[30][3] = "Aplicaci&oacute;n.";
 answers[30] = 2;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7941. Examen TIC A2 2010";
 preguntaids[30] = 7941


//  Id pregunta: 5809 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Qui&eacute;n est&aacute; detr&aacute;s del conjunto de mejores pr&aacute;cticas COBIT?";
 choices[31]= new Array();
 choices[31][0] = "Information Systems Audit and Control Association (ISACA)";
 choices[31][1] = "IT Governance Institute (ITGI)";
 choices[31][2] = "La respuestas A) y B) son ambas correctas";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 2;
 units[31] = ['101'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 5809. ";
 preguntaids[31] = 5809


//  Id pregunta: 1100 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;En qu&eacute; zona del chip del DNI electr&oacute;nico se encuentra el certificado x509 de componente?";
 choices[32]= new Array();
 choices[32][0] = "Zona de seguridad.";
 choices[32][1] = "Zona aut&oacute;noma.";
 choices[32][2] = "Zona privada.";
 choices[32][3] = "Zona p&uacute;blica.";
 answers[32] = 3;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1100. ";
 preguntaids[32] = 1100


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[33]= "34)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[33]= new Array();
 choices[33][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[33][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[33][2] = "Un programa de igualdad.";
 choices[33][3] = "Un estatuto de igualdad.";
 answers[33] = 0;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 390. Pol&iacute;ticas de igualdad";
 preguntaids[33] = 390


//  Id pregunta: 10383 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo TCP WhoIS?";
 choices[34]= new Array();
 choices[34][0] = "43";
 choices[34][1] = "21";
 choices[34][2] = "23";
 choices[34][3] = "69";
 answers[34] = 0;
 units[34] = ['103'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10383. ";
 preguntaids[34] = 10383


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[35]= "36)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[35]= new Array();
 choices[35][0] = "18 miembros.";
 choices[35][1] = "Ninguna es correcta.";
 choices[35][2] = "22 miembros.";
 choices[35][3] = "21 miembros.";
 answers[35] = 1;
 units[35] = ['5'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 167. Uni&oacute;n Europea";
 preguntaids[35] = 167


//  Id pregunta: 1567 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; se entiende por tiempo de convergencia cuando hablamos de routers?";
 choices[36]= new Array();
 choices[36][0] = "Tiempo que tardan dos datagramas que siguen distinto encaminamiento en llegar al router final.";
 choices[36][1] = "Rapidez con la cual los routers de la red comparten informaci&oacute;n de enrutamiento.";
 choices[36][2] = "Tiempo que tarda un paquete en alcanzar su destino atravesando el m&iacute;nimo n&uacute;mero de routers posible.";
 choices[36][3] = "Tiempo medio que tarda un paquete en alcanzar cualquier nodo de la red, desde un mismo origen.";
 answers[36] = 1;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1567. ";
 preguntaids[36] = 1567


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[37]= new Array();
 choices[37][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[37][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[37][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[37][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[37] = 1;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 447. Agenda Digital";
 preguntaids[37] = 447


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[38]= new Array();
 choices[38][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[38][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[38][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[38][3] = "A las Diputaciones y a las Comarcas.";
 answers[38] = 0;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 59. Constituci&oacute;n de 1978";
 preguntaids[38] = 59


//  Id pregunta: 1856 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de los siguientes es un servidor web basado en c&oacute;digo abierto:";
 choices[39]= new Array();
 choices[39][0] = "Internet Information Server";
 choices[39][1] = "WebSphere";
 choices[39][2] = "WebLogic";
 choices[39][3] = "Lighttpd";
 answers[39] = 3;
 units[39] = ['66'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1856. ";
 preguntaids[39] = 1856


//  Id pregunta: 2559 Año de creación de pregunta: 2009
 questions[40]= "41)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[40]= new Array();
 choices[40][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[40][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[40][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[40][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[40] = 0;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 2559. ";
 preguntaids[40] = 2559


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[41]= "42)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[41]= new Array();
 choices[41][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[41][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[41][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[41][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[41] = 3;
 units[41] = ['12'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 328. Modelo econ&oacute;mico";
 preguntaids[41] = 328


//  Id pregunta: 8977 Año de creación de pregunta: 2013
 questions[42]= "43)  Los certificados incorporados al DNI-e:";
 choices[42]= new Array();
 choices[42][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[42][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[42][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[42][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL5+ definido en la norma ISO/IEC 15408.";
 answers[42] = 3;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 8977. Examen TIC A1 2011";
 preguntaids[42] = 8977


//  Id pregunta: 8089 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[43]= new Array();
 choices[43][0] = "TPC-C.";
 choices[43][1] = "TPC-R.";
 choices[43][2] = "TPC-H.";
 choices[43][3] = "TPC-A.";
 answers[43] = 0;
 units[43] = ['72'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8089. Analista Ayto. Madrid 2010";
 preguntaids[43] = 8089


//  Id pregunta: 5353 Año de creación de pregunta: 2006
 questions[44]= "45)  Las comunicaciones satelite son f&aacute;cilmente interceptables porque";
 choices[44]= new Array();
 choices[44][0] = "las transmisiones son continuas 24 horas al d&iacute;a";
 choices[44][1] = "la huella del sat&eacute;lite no cambia";
 choices[44][2] = "la huella del sat&eacute;lite es muy amplia";
 choices[44][3] = "la posici&oacute;n del sat&eacute;lite es conocida";
 answers[44] = 2;
 units[44] = ['108'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5353. ";
 preguntaids[44] = 5353


//  Id pregunta: 5566 Año de creación de pregunta: 2007
 questions[45]= "46)  Seg&uacute;n Magerit v.3 los elementos del an&aacute;lisis de riesgos son:";
 choices[45]= new Array();
 choices[45][0] = "Impacto, riesgos calculados y riesgos intr&iacute;nsecos.";
 choices[45][1] = "Activos, amenazas y salvaguardas.";
 choices[45][2] = "Vulnerabilidades, riesgos e impacto.";
 choices[45][3] = "Entorno, sistema de informaci&oacute;n, informaci&oacute;n, funciones y otros.";
 answers[45] = 1;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 5566. ";
 preguntaids[45] = 5566


//  Id pregunta: 6840 Año de creación de pregunta: 2010
 questions[46]= "47)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[46]= new Array();
 choices[46][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[46][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[46][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[46][3] = "La direcci&oacute;n MAC del router.";
 answers[46] = 3;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 6840. TIC A 2009";
 preguntaids[46] = 6840


//  Id pregunta: 7398 Año de creación de pregunta: 2010
 questions[47]= "48)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[47]= new Array();
 choices[47][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[47][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[47][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[47][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[47] = 2;
 units[47] = ['116'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 7398. Examen TIC B 2009";
 preguntaids[47] = 7398


//  Id pregunta: 5352 Año de creación de pregunta: 2006
 questions[48]= "49)  Qu&eacute; ataque es el m&aacute;s efectivo frente a una VPN IPSec";
 choices[48]= new Array();
 choices[48][0] = "Fuerza bruta";
 choices[48][1] = "Hombre en el medio";
 choices[48][2] = "An&aacute;lisis de tr&aacute;fico";
 choices[48][3] = "Replicaci&oacute;n (replay)";
 answers[48] = 1;
 units[48] = ['120'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5352. ";
 preguntaids[48] = 5352


//  Id pregunta: 3678 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del plan de contingencias?";
 choices[49]= new Array();
 choices[49][0] = "Minimizar las interrupciones en la operaci&oacute;n normal";
 choices[49][1] = "Limitar la extensi&oacute;n de las interrupciones y de los da&ntilde;os que produzcan";
 choices[49][2] = "Analizar da&ntilde;os y estimar costes";
 choices[49][3] = "Posibilitar la vuelta al servicio r&aacute;pida y sencilla";
 answers[49] = 2;
 units[49] = ['98'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3678. ";
 preguntaids[49] = 3678


//  Id pregunta: 8909 Año de creación de pregunta: 2013
 questions[50]= "51)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[50]= new Array();
 choices[50][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[50][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[50][2] = "Es lo mismo que la herencia repetida.";
 choices[50][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[50] = 1;
 units[50] = ['89'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 8909. ";
 preguntaids[50] = 8909


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[51]= "52)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[51]= new Array();
 choices[51][0] = "Relaciones base y vistas.";
 choices[51][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[51][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[51][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[51] = 3;
 units[51] = ['60'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 686. Junta de Extremadura A1 2015";
 preguntaids[51] = 686


//  Id pregunta: 7218 Año de creación de pregunta: 2010
 questions[52]= "53)  En un entorno UNIX/Linux, los procesos no interactivos o de background se denominan:";
 choices[52]= new Array();
 choices[52][0] = "Zombies";
 choices[52][1] = "Swaps";
 choices[52][2] = "Pipes";
 choices[52][3] = "Daemons";
 answers[52] = 3;
 units[52] = ['57'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7218. ";
 preguntaids[52] = 7218


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[53]= "54)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[53]= new Array();
 choices[53][0] = "De ocho a&ntilde;os.";
 choices[53][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "No existe un l&iacute;mite.";
 answers[53] = 0;
 units[53] = ['14'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 412. Pol&iacute;ticas de igualdad";
 preguntaids[53] = 412


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[54]= "55)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[54]= new Array();
 choices[54][0] = "Parcial.";
 choices[54][1] = "Sectorial.";
 choices[54][2] = "Tranversal.";
 choices[54][3] = "Vertical.";
 answers[54] = 2;
 units[54] = ['14'];
 blocks[54] = ['A3'];
 comments[54] = "Id Pregunta: 382. Pol&iacute;ticas de igualdad";
 preguntaids[54] = 382


//  Id pregunta: 2655 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[55]= new Array();
 choices[55][0] = "Segunda";
 choices[55][1] = "Tercera";
 choices[55][2] = "Cuarta";
 choices[55][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[55] = 2;
 units[55] = ['54'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2655. ";
 preguntaids[55] = 2655


//  Id pregunta: 1978 Año de creación de pregunta: 2016
 questions[56]= "57)  NO es un derecho de los ciudadanos frente a la administraci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Formular alegaciones y aportar documentos en cualquier momento del procedimiento, para que sean tenidos en cuenta por el &oacute;rgano competente al redactar la propuesta de resoluci&oacute;n.";
 choices[56][1] = "Identificar las autoridades y el personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[56][2] = "Conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 choices[56][3] = "Obtener copia de los documentos contenidos en los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[56] = 0;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 1978. ";
 preguntaids[56] = 1978


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[57]= new Array();
 choices[57][0] = "El Presidente del Gobierno.";
 choices[57][1] = "El Consejo de Ministros.";
 choices[57][2] = "40 Diputados.";
 choices[57][3] = "El Ministerio Fiscal.";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 43. Constituci&oacute;n de 1978";
 preguntaids[57] = 43


//  Id pregunta: 5284 Año de creación de pregunta: 2006
 questions[58]= "59)  Que es TRAM";
 choices[58]= new Array();
 choices[58][0] = "Una arquitectura web basada en software libre";
 choices[58][1] = "Una arquitectura web basada en j2ee";
 choices[58][2] = "Una arquitectura web basada en .Net";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = 3;
 units[58] = ['65'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 5284. ";
 preguntaids[58] = 5284


//  Id pregunta: 6850 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;En qu&eacute; fase del proyecto es mayor el nivel de coste y de personal?";
 choices[59]= new Array();
 choices[59][0] = "Al inicio del proyecto.";
 choices[59][1] = "Al final del proyecto.";
 choices[59][2] = "En las fases intermedias del proyecto.";
 choices[59][3] = "Tanto el coste como el personal debe ser homog&eacute;neo a lo largo del proyecto.";
 answers[59] = 2;
 units[59] = ['31'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 6850. ";
 preguntaids[59] = 6850


//  Id pregunta: 1427 Año de creación de pregunta: 2016
 questions[60]= "61)  De conformidad con el art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola el Gobierno se compone:";
 choices[60]= new Array();
 choices[60][0] = "Del Presidente, de los Vicepresidentes y de los dem&aacute;s miembros que establezca la ley.";
 choices[60][1] = "Del Presidente, de los Ministros, y de los dem&aacute;s miembros que establezca la ley.";
 choices[60][2] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y de los dem&aacute;s miembros que establezca la ley.";
 choices[60][3] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y los Secretarios Generales y de los dem&aacute;s miembros que establezca la ley.";
 answers[60] = 2;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 1427. ";
 preguntaids[60] = 1427


//  Id pregunta: 7061 Año de creación de pregunta: 2010
 questions[61]= "62)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[61]= new Array();
 choices[61][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[61][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[61][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[61][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[61] = 0;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7061. ";
 preguntaids[61] = 7061


//  Id pregunta: 10613 Año de creación de pregunta: 2015
 questions[62]= "63)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[62]= new Array();
 choices[62][0] = "Ministerio de Energia, Turismo y Agenda Digital.";
 choices[62][1] = "AGE.";
 choices[62][2] = "Organismos internacionales.";
 choices[62][3] = "CNMC.";
 answers[62] = 0;
 units[62] = ['121'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 10613. Articulo 69";
 preguntaids[62] = 10613


//  Id pregunta: 6300 Año de creación de pregunta: 2003
 questions[63]= "64)  Sobre la Programaci&oacute;n Extrema:";
 choices[63]= new Array();
 choices[63][0] = "Los proyectos que usan esta metodolog&iacute;a comienzan obteniendo Historias de usuario(User Stories) y desarrollando soluciones (Spike solutions) sobre una arquitectura general de la soluci&oacute;n (Architectural Spike)";
 choices[63][1] = "A partir de aqu&iacute;, se mantiene una reuni&oacute;n a la que acudir&aacute;n clientes/usuarios, desarrolladores y gestores para acordar entre todos lo que se debe hacer";
 choices[63][2] = "Las iteraciones sobre lo que se tiene que hacer generar&aacute;n pruebas que generar&aacute;n m&aacute;s iteraciones sobre el sistema.";
 choices[63][3] = "Todas las anteriores son correctas";
 answers[63] = 3;
 units[63] = ['82'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 6300. ";
 preguntaids[63] = 6300


//  Id pregunta: 2224 Año de creación de pregunta: 2002
 questions[64]= "65)  La estructura organizacional funcional de un &aacute;rea de desarrollo:";
 choices[64]= new Array();
 choices[64][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[64][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[64][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[64][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[64] = 0;
 units[64] = ['30'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2224. ";
 preguntaids[64] = 2224


//  Id pregunta: 1039 Año de creación de pregunta: 2016
 questions[65]= "66)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[65]= new Array();
 choices[65][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[65][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[65][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[65][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[65] = 2;
 units[65] = ['4', '7', '8', '9'];
 blocks[65] = ['A1', 'A2'];
 comments[65] = "Id Pregunta: 1039. Ley 40/2015";
 preguntaids[65] = 1039


//  Id pregunta: 3434 Año de creación de pregunta: 2006
 questions[66]= "67)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[66]= new Array();
 choices[66][0] = "Data sparsity.";
 choices[66][1] = "Data cleansing.";
 choices[66][2] = "Data mining.";
 choices[66][3] = "Data explosion.";
 answers[66] = 0;
 units[66] = ['72'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3434. ";
 preguntaids[66] = 3434


//  Id pregunta: 2278 Año de creación de pregunta: 2002
 questions[67]= "68)  Respecto al derecho de acceso, la Ley Org&aacute;nica de Protecci&oacute;n de Datos indica:";
 choices[67]= new Array();
 choices[67][0] = "El interesado tendr&aacute; derecho a solicitar y obtener, previo pago de los gastos incurridos, informaci&oacute;n de sus datos de car&aacute;cter personal sometidos a tratamiento, el origen de dichos datos, as&iacute; como las comunicaciones realizadas o que se prev&eacute;n hacer";
 choices[67][1] = "La informaci&oacute;n podr&aacute; obtenerse mediante la mera consulta de los datos por medio de su visualizaci&oacute;n, o la indicaci&oacute;n de los datos que son objeto de tratamiento mediante escrito, copia o fotocopia, certificada o no, en forma legible e inteligible";
 choices[67][2] = "El derecho de acceso a que se refiere este art&iacute;culo s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a doce meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute;n ejercitarlo cada 6 meses";
 choices[67][3] = "El derecho de acceso s&oacute;lo podr&aacute; ejercerse cuando as&iacute; lo autorice el Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[67] = 1;
 units[67] = ['35'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2278. ";
 preguntaids[67] = 2278


//  Id pregunta: 2701 Año de creación de pregunta: 2002
 questions[68]= "69)  Con 3 discos SCSI de 145 Gbytes en modalidad RAID 5, se obtiene una capacidad total neta de:";
 choices[68]= new Array();
 choices[68][0] = "145 Gbytes";
 choices[68][1] = "435 Gbytes";
 choices[68][2] = "290 Gbytes";
 choices[68][3] = "217.5 Gbytes";
 answers[68] = 2;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2701. ";
 preguntaids[68] = 2701


//  Id pregunta: 1419 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;De qu&eacute; trata el T&iacute;tulo VI de la Constituci&oacute;n Espa&ntilde;ola de 1978?:";
 choices[69]= new Array();
 choices[69][0] = "Del Gobierno y la Administraci&oacute;n.";
 choices[69][1] = "Del Poder Judicial.";
 choices[69][2] = "Econom&iacute;a y Hacienda.";
 choices[69][3] = "De las Relaciones del Gobierno y las Cortes Generales.";
 answers[69] = 1;
 units[69] = ['2'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 1419. ";
 preguntaids[69] = 1419


//  Id pregunta: 1360 Año de creación de pregunta: 2016
 questions[70]= "71)  RMAN es:";
 choices[70]= new Array();
 choices[70][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[70][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[70][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[70][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[70] = 2;
 units[70] = ['114'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1360. ";
 preguntaids[70] = 1360


//  Id pregunta: 3010 Año de creación de pregunta: 2002
 questions[71]= "72)  Que el bus de datos trabaje con 32 bits quiere decir que:";
 choices[71]= new Array();
 choices[71][0] = "Todos los dispositivos conectados al bus acceden a 32 bits en cada impulso de reloj del ordenador";
 choices[71][1] = "Todos los dispositivos conectados al bus acceden a 32 bits en dos impulsos de reloj del ordenador";
 choices[71][2] = "Todos los dispositivos conectados al bus acceden a 32 bits en cuatro impulsos de reloj del ordenador";
 choices[71][3] = "Ninguna de las anteriores, ya que el bus del ordenador puede trabajar a diferente velocidad que la CPU";
 answers[71] = 3;
 units[71] = ['52'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3010. ";
 preguntaids[71] = 3010


//  Id pregunta: 3598 Año de creación de pregunta: 2004
 questions[72]= "73)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[72]= new Array();
 choices[72][0] = "la programaci&oacute;n funcional";
 choices[72][1] = "El acoplamiento d&eacute;bil";
 choices[72][2] = "La ocultaci&oacute;n de la implementacion";
 choices[72][3] = "el polimorfismo";
 answers[72] = 0;
 units[72] = ['85'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 3598. ";
 preguntaids[72] = 3598


//  Id pregunta: 7839 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6) para el campo de direcciones IP?";
 choices[73]= new Array();
 choices[73][0] = "56 bits.";
 choices[73][1] = "16 bits.";
 choices[73][2] = "32 bits.";
 choices[73][3] = "64 bits.";
 answers[73] = 3;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7839. ";
 preguntaids[73] = 7839


//  Id pregunta: 3440 Año de creación de pregunta: 2006
 questions[74]= "75)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[74]= new Array();
 choices[74][0] = "Tablas de dimensiones.";
 choices[74][1] = "Tablas maestras.";
 choices[74][2] = "Tablas de hechos.";
 choices[74][3] = "Tablas externas.";
 answers[74] = 2;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3440. ";
 preguntaids[74] = 3440


