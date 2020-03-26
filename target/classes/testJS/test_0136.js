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
//  Id pregunta: 6699 Año de creación de pregunta: 2009
 questions[0]= "1)  Determine cu&aacute;l de las afirmaciones siguiente NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[0]= new Array();
 choices[0][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la trasferencia de informaci&oacute;n entre dos extremos";
 choices[0][1] = "ATM es independiente del trasporte f&iacute;sico, las celdas ATM pueden ser trasportadas en redes SONET, SDH, T3/E3 &Oacute; T1/E1";
 choices[0][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha";
 choices[0][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n";
 answers[0] = 3;
 units[0] = ['110'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 6699. MAP 2008 A1";
 preguntaids[0] = 6699


//  Id pregunta: 7929 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;C&oacute;mo se denomina el informe elaborado por el Observatorio de Administraci&oacute;n Electr&oacute;nica para analizar de manera espec&iacute;fica, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[1]= new Array();
 choices[1][0] = "Informe PRINCESA.";
 choices[1][1] = "Informe TECNIMAP.";
 choices[1][2] = "Informe IRIA.";
 choices[1][3] = "Informe REINA.";
 answers[1] = 3;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 7929. Examen TIC A1 2010";
 preguntaids[1] = 7929


//  Id pregunta: 1975 Año de creación de pregunta: 2016
 questions[2]= "3)  Son causas de nulidad de los contratos de las Administraciones P&uacute;blicas:";
 choices[2]= new Array();
 choices[2][0] = "La invalidez de alguno de sus actos preparatorios por concurrir en los mismos alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[2][1] = "La nulidad de un acto que no sea preparatorio del contrato.";
 choices[2][2] = "La invalidez de la adjudicaci&oacute;n por concurrir en la misma alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[2][3] = "Las respuestas a) y c) son correctas.";
 answers[2] = 3;
 units[2] = ['10'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 1975. ";
 preguntaids[2] = 1975


//  Id pregunta: 4945 Año de creación de pregunta: 2002
 questions[3]= "4)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[3]= new Array();
 choices[3][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[3][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[3][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[3][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[3] = 3;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4945. ";
 preguntaids[3] = 4945


//  Id pregunta: 1013 Año de creación de pregunta: 2016
 questions[4]= "5)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[4]= new Array();
 choices[4][0] = "por Real Decreto";
 choices[4][1] = "reglamentariamente";
 choices[4][2] = "mediante Ley";
 choices[4][3] = "ninguna es correcta";
 answers[4] = 1;
 units[4] = ['4', '7', '8', '9'];
 blocks[4] = ['A1', 'A2'];
 comments[4] = "Id Pregunta: 1013. Ley 40/2015";
 preguntaids[4] = 1013


//  Id pregunta: 7284 Año de creación de pregunta: 2010
 questions[5]= "6)  La telefon&iacute;a IP";
 choices[5]= new Array();
 choices[5][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[5][1] = "Separa la red de datos de la voz";
 choices[5][2] = "Los procesos utilizados no dependen del tiempo";
 choices[5][3] = "A y C son correctas";
 answers[5] = 0;
 units[5] = ['122'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7284. ";
 preguntaids[5] = 7284


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es uno de los Ejes en torno a los cuales se articula La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo seg&uacute;n el Real Decreto Legislativo 3/2015?";
 choices[6]= new Array();
 choices[6][0] = "Orientaci&oacute;n";
 choices[6][1] = "Empleo p&uacute;blico";
 choices[6][2] = "Formaci&oacute;n";
 choices[6][3] = "Emprendimiento";
 answers[6] = 1;
 units[6] = ['15'];
 blocks[6] = ['A3'];
 comments[6] = "Id Pregunta: 428. Modelo econ&oacute;mico";
 preguntaids[6] = 428


//  Id pregunta: 2139 Año de creación de pregunta: 2004
 questions[7]= "8)  El t&eacute;rmino MAGERIT es un acr&oacute;nimo que procede de los siguientes t&eacute;rminos, o significa lo siguiente:";
 choices[7]= new Array();
 choices[7][0] = "Mercado Abierto y Gratuito a la Exportaci&oacute;n de Recursos Inform&aacute;ticos y de Telecomunicaciones";
 choices[7][1] = "Sistema Inform&aacute;tico propio, financiado y desarrollado por la Comunidad Aut&oacute;noma de Madrid (de aqu&iacute; el nombre de: &quot;Magerit&quot;)";
 choices[7][2] = "Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n";
 choices[7][3] = "Methot Aid for Gradual Employ Resource of Information Technology";
 answers[7] = 2;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2139. Examen TIC MAP B 2004";
 preguntaids[7] = 2139


//  Id pregunta: 8097 Año de creación de pregunta: 2011
 questions[8]= "9)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[8]= new Array();
 choices[8][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[8][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[8][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = 1;
 units[8] = ['117'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8097. Analista Ayto. Madrid 2010";
 preguntaids[8] = 8097


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[9]= new Array();
 choices[9][0] = "Principio de solo una vez";
 choices[9][1] = "Apertura y transparencia";
 choices[9][2] = "Confianza y seguridad";
 choices[9][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[9] = 3;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 483. Sociedad de la informaci&oacute;n";
 preguntaids[9] = 483


//  Id pregunta: 5463 Año de creación de pregunta: 2007
 questions[10]= "11)  En M&eacute;trica Versi&oacute;n 3, el an&aacute;lisis de los hechos inesperados y an&oacute;malos que se presentan durante la realizaci&oacute;n de las actividades y tareas del proyecto:";
 choices[10]= new Array();
 choices[10][0] = "No est&aacute; contemplado";
 choices[10][1] = "Se realiza en la interfaz de Aseguramiento de la Calidad.";
 choices[10][2] = "Se realiza en la interfaz de Gesti&oacute;n de Configuraci&oacute;n.";
 choices[10][3] = "Se realiza en la interfaz de Gesti&oacute;n de Proyectos.";
 answers[10] = 3;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 5463. ";
 preguntaids[10] = 5463


//  Id pregunta: 5172 Año de creación de pregunta: 2003
 questions[11]= "12)  En telefon&iacute;a movil GSM qu&eacute; dos bases de datos se utilizan para guardar datos del cliente";
 choices[11]= new Array();
 choices[11][0] = "VLR y HLR";
 choices[11][1] = "MSC y VLR";
 choices[11][2] = "NMC y OMC";
 choices[11][3] = "GMSC y NMC";
 answers[11] = 0;
 units[11] = ['117'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5172. ";
 preguntaids[11] = 5172


//  Id pregunta: 2704 Año de creación de pregunta: 2002
 questions[12]= "13)  Con referencia al modelo relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[12]= new Array();
 choices[12][0] = "El n&uacute;mero de dominios de una relaci&oacute;n define su grado";
 choices[12][1] = "La extensi&oacute;n u ocurrencia de una relaci&oacute;n es una tabla donde las filas corresponden a los atributos";
 choices[12][2] = "Cada atributo, o propiedad con inter&eacute;s informacional de una relaci&oacute;n, est&aacute; asociado a un dominio del que toma sus valores";
 choices[12][3] = "El orden de las filas dentro de una tabla es determinante";
 answers[12] = 2;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2704. ";
 preguntaids[12] = 2704


//  Id pregunta: 4825 Año de creación de pregunta: 2002
 questions[13]= "14)  En los sistemas de conmutaci&oacute;n de paquetes:";
 choices[13]= new Array();
 choices[13][0] = "Se pueden distinguir dos tipos fundamentales : datagrama y circuito l&oacute;gico";
 choices[13][1] = "En estas redes existe un tiempo de espera producido por la sobrecarga de paquetes en algunos nodos";
 choices[13][2] = "Los tiempos de espera se reducen mediante diversas t&eacute;cnicas de encaminamiento";
 choices[13][3] = "Para evitar la congesti&oacute;n de la red se estudian las rutas &oacute;ptimas para cada par de nodos y se guardan en un nodo central";
 answers[13] = 2;
 units[13] = ['112'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4825. ";
 preguntaids[13] = 4825


//  Id pregunta: 5688 Año de creación de pregunta: 2007
 questions[14]= "15)  En el caso de un dise&ntilde;o orientado a objetos, &iquest;se debe tener en cuenta la actividad DSI 6: DISE&Ntilde;O FISICO DE DATOS, seg&uacute;n m&eacute;trica V3?";
 choices[14]= new Array();
 choices[14][0] = "S&iacute; se debe tener en cuenta.";
 choices[14][1] = "No se aplica esta actividad.";
 choices[14][2] = "Se aplica esta actividad en funci&oacute;n de la arquitectura.";
 choices[14][3] = "Se aplica esta actividad en funci&oacute;n del gestor de base de datos.";
 answers[14] = 0;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 5688. ";
 preguntaids[14] = 5688


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[15]= new Array();
 choices[15][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[15][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[15][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[15][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[15] = 2;
 units[15] = ['22'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 494. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[15] = 494


//  Id pregunta: 3267 Año de creación de pregunta: 2003
 questions[16]= "17)  La escalabilidad vertical tiene que ver con:";
 choices[16]= new Array();
 choices[16][0] = "Granjas de servidores";
 choices[16][1] = "Servidores en rack";
 choices[16][2] = "Cluster de seridores";
 choices[16][3] = "Nada de lo anterior";
 answers[16] = 3;
 units[16] = ['49'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3267. ";
 preguntaids[16] = 3267


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[17]= "18)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Un informe de impacto de g&eacute;nero.";
 choices[17][1] = "Un programa de igualdad de oportunidades.";
 choices[17][2] = "Un plan de Igualdad de Oportunidades.";
 choices[17][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[17] = 0;
 units[17] = ['14'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 394. Pol&iacute;ticas de igualdad";
 preguntaids[17] = 394


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[18]= "19)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[18]= new Array();
 choices[18][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[18][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[18][2] = "La normativa reguladora de cada derecho.";
 choices[18][3] = "Ley 50/1997, del Gobierno.";
 answers[18] = 2;
 units[18] = ['11'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 278. Presupuestos generales";
 preguntaids[18] = 278


//  Id pregunta: 10081 Año de creación de pregunta: 2015
 questions[19]= "20)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[19]= new Array();
 choices[19][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[19][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[19][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[19][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[19] = 2;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10081. Examen TIC A2 2014";
 preguntaids[19] = 10081


//  Id pregunta: 1391 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique que direcci&oacute;n IPv6 de las siguientes NO es correcta:";
 choices[20]= new Array();
 choices[20][0] = "::1";
 choices[20][1] = "2022::0ab7::1528:67bb";
 choices[20][2] = "::..";
 choices[20][3] = "::212.200.31.255";
 answers[20] = 1;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1391. ";
 preguntaids[20] = 1391


//  Id pregunta: 6530 Año de creación de pregunta: 2003
 questions[21]= "22)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[21]= new Array();
 choices[21][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[21][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[21][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0";
 choices[21][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[21] = 3;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6530. ";
 preguntaids[21] = 6530


//  Id pregunta: 1106 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[22]= new Array();
 choices[22][0] = "6 meses.";
 choices[22][1] = "1 a&ntilde;o.";
 choices[22][2] = "2 a&ntilde;os.";
 choices[22][3] = "5 a&ntilde;os.";
 answers[22] = 1;
 units[22] = ['35'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 1106. ";
 preguntaids[22] = 1106


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[23]= "24)  El Factor de Sostenibilidad de la pensi&oacute;n de jubilaci&oacute;n, regulado en el art&iacute;culo 211 del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social:";
 choices[23]= new Array();
 choices[23][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[23][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[23][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[23][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[23] = 2;
 units[23] = ['14'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 359. Estado del Bienestar";
 preguntaids[23] = 359


//  Id pregunta: 1289 Año de creación de pregunta: 2016
 questions[24]= "25)  EI certificado de sede electr&oacute;nica, seg&uacute;n se establece en el Real Decreto 1671/2009:";
 choices[24]= new Array();
 choices[24][0] = "Identifica la sede y permite la firma electr&oacute;nica de documentos y tramites.";
 choices[24][1] = "Identifica la sede y permite a firma electr&oacute;nica de documentos.";
 choices[24][2] = "Identifica la sede, quedando excluida su aplicaci&oacute;n para la firma electr&oacute;nica de documentos y tramites,";
 choices[24][3] = "Identifica la sede y permite la firma electr&oacute;nica de tr&aacute;mites.";
 answers[24] = 2;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 1289. ";
 preguntaids[24] = 1289


//  Id pregunta: 3483 Año de creación de pregunta: 2006
 questions[25]= "26)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[25]= new Array();
 choices[25][0] = "SAN";
 choices[25][1] = "NAS";
 choices[25][2] = "RAID";
 choices[25][3] = "Cabina de discos";
 answers[25] = 1;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3483. ";
 preguntaids[25] = 3483


//  Id pregunta: 1196 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; podr&iacute;a usar el administrador de una base de datos SQL Server para supervisar el uso de los recursos del sistema?";
 choices[26]= new Array();
 choices[26][0] = "Los comandos cpustat y cputrack.";
 choices[26][1] = "El procedimiento almacenado sp_startmonitor.";
 choices[26][2] = "El monitor de sistema.";
 choices[26][3] = "El Enterprise SyMON 2.0.";
 answers[26] = 2;
 units[26] = ['61'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1196. ";
 preguntaids[26] = 1196


//  Id pregunta: 2749 Año de creación de pregunta: 2002
 questions[27]= "28)  El creador de HTML fue:";
 choices[27]= new Array();
 choices[27][0] = "Tim Berners-Lee";
 choices[27][1] = "Ivar Jacobson";
 choices[27][2] = "Grady Booch";
 choices[27][3] = "Todas son falsas";
 answers[27] = 0;
 units[27] = ['74'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2749. ";
 preguntaids[27] = 2749


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[28]= "29)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[28]= new Array();
 choices[28][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[28][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[28][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[28][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[28] = 1;
 units[28] = ['7'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 238. Ley 39/2015";
 preguntaids[28] = 238


//  Id pregunta: 5830 Año de creación de pregunta: 2007
 questions[29]= "30)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[29]= new Array();
 choices[29][0] = "Usando XSL";
 choices[29][1] = "Usando un DTD";
 choices[29][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[29][3] = "Usando XSLT";
 answers[29] = 1;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 5830. Examen 2006 JCYL";
 preguntaids[29] = 5830


//  Id pregunta: 8596 Año de creación de pregunta: 2013
 questions[30]= "31)  &iquest;De qu&eacute; tipo de registro del procesador es el &quot;registro de instrucci&oacute;n&quot;?";
 choices[30]= new Array();
 choices[30][0] = "Opaco";
 choices[30][1] = "Transparente";
 choices[30][2] = "De control";
 choices[30][3] = "Ninguna respuesta es v&aacute;lida.";
 answers[30] = 1;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8596. ";
 preguntaids[30] = 8596


//  Id pregunta: 1870 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), a un fichero que contenga: nombre, apellidos, direcci&oacute;n electr&oacute;nica laboral y tel&eacute;fono profesional, todo ello referido a varios proveedores de un hospital, se Ie deber&aacute;n aplicar:";
 choices[31]= new Array();
 choices[31][0] = "Las medidas de seguridad de nivel b&aacute;sico.";
 choices[31][1] = "Las medidas de seguridad de nivel medio.";
 choices[31][2] = "Las medidas de seguridad de nivel alto.";
 choices[31][3] = "Ninguna de las anteriores de correcta.";
 answers[31] = 3;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 1870. ";
 preguntaids[31] = 1870


//  Id pregunta: 5289 Año de creación de pregunta: 2006
 questions[32]= "33)  El Patr&oacute;n MVC";
 choices[32]= new Array();
 choices[32][0] = "Hace referencia al Modelo Vista Componente";
 choices[32][1] = "minimiza el acoplamiento entre los componentes de distintas capas";
 choices[32][2] = "El Modelo se encarga de la presentaci&oacute;n al usuario";
 choices[32][3] = "Todas son incorrectas";
 answers[32] = 1;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5289. ";
 preguntaids[32] = 5289


//  Id pregunta: 8517 Año de creación de pregunta: 2011
 questions[33]= "34)  Sistema de Grid Computing";
 choices[33]= new Array();
 choices[33][0] = "Globus Toolkit";
 choices[33][1] = "Nimbus";
 choices[33][2] = "Eucaliptus";
 choices[33][3] = "Gluster";
 answers[33] = 0;
 units[33] = ['49'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8517. ";
 preguntaids[33] = 8517


//  Id pregunta: 5546 Año de creación de pregunta: 2007
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[34]= new Array();
 choices[34][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[34][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[34][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[34][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[34] = 1;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 5546. ";
 preguntaids[34] = 5546


//  Id pregunta: 10406 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[35]= new Array();
 choices[35][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[35][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[35][2] = "Los dos anteriores son verdaderos";
 choices[35][3] = "Todas las respuestas son falsas";
 answers[35] = 2;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 10406. ";
 preguntaids[35] = 10406


//  Id pregunta: 8749 Año de creación de pregunta: 2013
 questions[36]= "37)  ISACA:";
 choices[36]= new Array();
 choices[36][0] = "Es la Information Security Audit and Control Association";
 choices[36][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[36][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 3;
 units[36] = ['45'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 8749. ";
 preguntaids[36] = 8749


//  Id pregunta: 1732 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos de gesti&oacute;n de redes est&aacute; basado en el modelo de referencia OSI de ISO:";
 choices[37]= new Array();
 choices[37][0] = "CMIP";
 choices[37][1] = "SNMP";
 choices[37][2] = "SGMP";
 choices[37][3] = "TL-1";
 answers[37] = 0;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1732. ";
 preguntaids[37] = 1732


//  Id pregunta: 3630 Año de creación de pregunta: 2002
 questions[38]= "39)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[38]= new Array();
 choices[38][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[38][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[38][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[38][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[38] = 1;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3630. ";
 preguntaids[38] = 3630


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[39]= new Array();
 choices[39][0] = "Un diputado y un senador, cada una de ellas";
 choices[39][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[39][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[39][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[39] = 2;
 units[39] = ['1'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 19. Constituci&oacute;n de 1978";
 preguntaids[39] = 19


//  Id pregunta: 5122 Año de creación de pregunta: 2003
 questions[40]= "41)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[40]= new Array();
 choices[40][0] = "ICMP";
 choices[40][1] = "SNMP.";
 choices[40][2] = "SMTP.";
 choices[40][3] = "MIME.";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5122. Junta Andaluc&iacute;a";
 preguntaids[40] = 5122


//  Id pregunta: 8225 Año de creación de pregunta: 2011
 questions[41]= "42)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[41]= new Array();
 choices[41][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[41][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[41][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[41][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[41] = 3;
 units[41] = ['106'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8225. Examen UPM A2 2011";
 preguntaids[41] = 8225


//  Id pregunta: 8982 Año de creación de pregunta: 2013
 questions[42]= "43)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[42]= new Array();
 choices[42][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[42][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[42][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[42][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[42] = 0;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 8982. Ley 59/2003, art&iacute;culo 33";
 preguntaids[42] = 8982


//  Id pregunta: 10277 Año de creación de pregunta: 2015
 questions[43]= "44)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[43]= new Array();
 choices[43][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[43][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[43][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[43][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[43] = 0;
 units[43] = ['101'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 10277. ";
 preguntaids[43] = 10277


//  Id pregunta: 6619 Año de creación de pregunta: 2009
 questions[44]= "45)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[44]= new Array();
 choices[44][0] = "4";
 choices[44][1] = "5.3";
 choices[44][2] = "5.5";
 choices[44][3] = "6";
 answers[44] = 0;
 units[44] = ['66'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6619. ";
 preguntaids[44] = 6619


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[45]= new Array();
 choices[45][0] = "Entre 1973 y 1978";
 choices[45][1] = "Entre 1992 y 1996";
 choices[45][2] = "Entre 1978 y 1985";
 choices[45][3] = "Entre 2008 y 2013";
 answers[45] = 2;
 units[45] = ['12'];
 blocks[45] = ['A3'];
 comments[45] = "Id Pregunta: 338. Modelo econ&oacute;mico";
 preguntaids[45] = 338


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[46]= "47)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[46]= new Array();
 choices[46][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[46][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[46][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[46][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[46] = 2;
 units[46] = ['101'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 864. AGE A1 2015";
 preguntaids[46] = 864


//  Id pregunta: 6384 Año de creación de pregunta: 2003
 questions[47]= "48)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[47]= new Array();
 choices[47][0] = "400 puntos sobre 1000";
 choices[47][1] = "500 puntos sobre 1000";
 choices[47][2] = "700 puntos sobre 1000";
 choices[47][3] = "900 puntos sobre 1000";
 answers[47] = 1;
 units[47] = ['93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6384. Examen 2006 JCYL";
 preguntaids[47] = 6384


//  Id pregunta: 10063 Año de creación de pregunta: 2015
 questions[48]= "49)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[48]= new Array();
 choices[48][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[48][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[48][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[48][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[48] = 3;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10063. Examen TIC A2 2014";
 preguntaids[48] = 10063


//  Id pregunta: 2661 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[49]= new Array();
 choices[49][0] = "El motor de base de datos JET de Access";
 choices[49][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[49][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[49][3] = "El Ayudante de Office";
 answers[49] = 3;
 units[49] = ['58', '68'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2661. ";
 preguntaids[49] = 2661


//  Id pregunta: 5500 Año de creación de pregunta: 2007
 questions[50]= "51)  La tecnolog&iacute;a dominante hoy en d&iacute;a en el campo de las redes locales es:";
 choices[50]= new Array();
 choices[50][0] = "Ethernet.";
 choices[50][1] = "Arcnet";
 choices[50][2] = "Arpanet.";
 choices[50][3] = "Sarenet";
 answers[50] = 0;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5500. ";
 preguntaids[50] = 5500


//  Id pregunta: 9670 Año de creación de pregunta: 2014
 questions[51]= "52)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[51]= new Array();
 choices[51][0] = "Cuantifica la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n.";
 choices[51][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[51][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[51][3] = "A y B.";
 answers[51] = 3;
 units[51] = ['100'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 9670. ";
 preguntaids[51] = 9670


//  Id pregunta: 1224 Año de creación de pregunta: 2016
 questions[52]= "53)  NO es un formato de firma electr&oacute;nica recogida en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[52]= new Array();
 choices[52][0] = "XAdES";
 choices[52][1] = "PKCS#11";
 choices[52][2] = "PAdES";
 choices[52][3] = "XML-Dsig";
 answers[52] = 1;
 units[52] = ['44'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 1224. ";
 preguntaids[52] = 1224


//  Id pregunta: 1462 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale c&oacute;mo se clasifica la situaci&oacute;n de dependencia conforme a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[53]= new Array();
 choices[53][0] = "En dos grados, cada uno dividido en dos niveles.";
 choices[53][1] = "En dos grados, cada uno dividido en tres niveles.";
 choices[53][2] = "En tres grados, cada uno dividido en dos niveles.";
 choices[53][3] = "En tres grados, cada uno dividido en tres niveles.";
 answers[53] = 2;
 units[53] = ['14'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 1462. ";
 preguntaids[53] = 1462


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[54]= "55)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[54]= new Array();
 choices[54][0] = "Pas&oacute; de 518 a 626.";
 choices[54][1] = "Pas&oacute; de 434 a 518.";
 choices[54][2] = "Pas&oacute; de 345 a 512.";
 choices[54][3] = "Pas&oacute; de 435 a 610.";
 answers[54] = 1;
 units[54] = ['5'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 164. Uni&oacute;n Europea";
 preguntaids[54] = 164


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[55]= "56)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[55]= new Array();
 choices[55][0] = "Cuatro.";
 choices[55][1] = "Una.";
 choices[55][2] = "Cinco.";
 choices[55][3] = "Nueve.";
 answers[55] = 0;
 units[55] = ['1'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 95. Constituci&oacute;n de 1978";
 preguntaids[55] = 95


//  Id pregunta: 1083 Año de creación de pregunta: 2016
 questions[56]= "57)  La Red SARA:";
 choices[56]= new Array();
 choices[56][0] = "Constituye la intranet corporativa de la Administraci&oacute;n General del Estado y de sus Organismos Aut&oacute;nomos y Entidades P&uacute;blicas dependientes.";
 choices[56][1] = "Es la Agrupaci&oacute;n de Servidores de Actualizaci&oacute;n de Redes Administrativas.";
 choices[56][2] = "Tiene por objeto ser la red de comunicaciones que interconecta las redes de todas las Administraciones P&uacute;blicas.";
 choices[56][3] = "Agrupa los Registros Administrativos Est&aacute;ndarizados en el &aacute;mbito de las Estados pertenecientes a la Uni&oacute;n Europea.";
 answers[56] = 2;
 units[56] = ['47'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 1083. ";
 preguntaids[56] = 1083


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Org&aacute;nica.";
 choices[57][1] = "Contable.";
 choices[57][2] = "Econ&oacute;mica.";
 choices[57][3] = "Por programas.";
 answers[57] = 2;
 units[57] = ['11'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 289. Presupuestos generales";
 preguntaids[57] = 289


//  Id pregunta: 6382 Año de creación de pregunta: 2003
 questions[58]= "59)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[58]= new Array();
 choices[58][0] = "N&uacute;mero de CPUs en el servidor";
 choices[58][1] = "Grado de paralelismo de las tablas";
 choices[58][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[58][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[58] = 3;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6382. Examen 2006 JCYL";
 preguntaids[58] = 6382


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[59]= new Array();
 choices[59][0] = "23";
 choices[59][1] = "25";
 choices[59][2] = "14";
 choices[59][3] = "18";
 answers[59] = 1;
 units[59] = ['5'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 163. Uni&oacute;n Europea";
 preguntaids[59] = 163


//  Id pregunta: 4368 Año de creación de pregunta: 2004
 questions[60]= "61)  El protocolo IPv6 define un campo de direcciones de:";
 choices[60]= new Array();
 choices[60][0] = "32 bits";
 choices[60][1] = "64 bits";
 choices[60][2] = "128 bits";
 choices[60][3] = "ninguna de las anteriores";
 answers[60] = 2;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4368. ";
 preguntaids[60] = 4368


//  Id pregunta: 10874 Año de creación de pregunta: 2015
 questions[61]= "62)  Al conectar un PC a un switch se debe usar;";
 choices[61]= new Array();
 choices[61][0] = "Straight-through cable";
 choices[61][1] = "Consola";
 choices[61][2] = "Crossover cable";
 choices[61][3] = "RJ 11";
 answers[61] = 0;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10874. ";
 preguntaids[61] = 10874


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el est&aacute;ndar IEEE 1219 para el mantenimiento del software, un cambio de tecnolog&iacute;a pertenecer&iacute;a a un tipo de mantenimiento:";
 choices[62]= new Array();
 choices[62][0] = "Preventivo.";
 choices[62][1] = "Correctivo.";
 choices[62][2] = "Perfectivo.";
 choices[62][3] = "Adaptativo.";
 answers[62] = 3;
 units[62] = ['96'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 854. AGE A2 2015";
 preguntaids[62] = 854


//  Id pregunta: 10122 Año de creación de pregunta: 2015
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[63]= new Array();
 choices[63][0] = "RAD.";
 choices[63][1] = "OpenUP.";
 choices[63][2] = "SSADM.";
 choices[63][3] = "UP.";
 answers[63] = 1;
 units[63] = ['84'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 10122. Examen TIC A1 2014";
 preguntaids[63] = 10122


//  Id pregunta: 8562 Año de creación de pregunta: 2013
 questions[64]= "65)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[64]= new Array();
 choices[64][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[64][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[64][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[64][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[64] = 1;
 units[64] = ['41'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 8562. ";
 preguntaids[64] = 8562


//  Id pregunta: 1432 Año de creación de pregunta: 2016
 questions[65]= "66)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:";
 choices[65]= new Array();
 choices[65][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[65][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[65][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[65][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[65] = 0;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 1432. ";
 preguntaids[65] = 1432


//  Id pregunta: 5726 Año de creación de pregunta: 2007
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[66]= new Array();
 choices[66][0] = "ext2";
 choices[66][1] = "swap";
 choices[66][2] = "SMB";
 choices[66][3] = "MSB";
 answers[66] = 2;
 units[66] = ['58'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5726. ";
 preguntaids[66] = 5726


//  Id pregunta: 8268 Año de creación de pregunta: 2011
 questions[67]= "68)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[67]= new Array();
 choices[67][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[67][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[67][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[67][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[67] = 1;
 units[67] = ['7'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 8268. Examen TIC A2 2010 interna";
 preguntaids[67] = 8268


//  Id pregunta: 3044 Año de creación de pregunta: 2002
 questions[68]= "69)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[68]= new Array();
 choices[68][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[68][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[68][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[68][3] = "El sistema operativo y las utilidades";
 answers[68] = 0;
 units[68] = ['49', '56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3044. ";
 preguntaids[68] = 3044


//  Id pregunta: 3169 Año de creación de pregunta: 2002
 questions[69]= "70)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[69]= new Array();
 choices[69][0] = "30/1992";
 choices[69][1] = "34/2002";
 choices[69][2] = "30/2002";
 choices[69][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[69] = 1;
 units[69] = ['19'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 3169. ";
 preguntaids[69] = 3169


//  Id pregunta: 10676 Año de creación de pregunta: 2015
 questions[70]= "71)  De entre los siguientes sujetos, &iquest;qui&eacute;n est&aacute; obligado a relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo seg&uacute;n el art&iacute;culo 14 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015?";
 choices[70]= new Array();
 choices[70][0] = "Personas jur&iacute;dicas.";
 choices[70][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[70][2] = "Notarios y registradores de la propiedad y mercantiles.";
 choices[70][3] = "Todos los anteriores.";
 answers[70] = 3;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 10676. ";
 preguntaids[70] = 10676


//  Id pregunta: 2441 Año de creación de pregunta: 2006
 questions[71]= "72)  Cu&aacute;l de las siguientes afirmaciones sobre normalizaci&oacute;n europea es incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "El Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI) elabora Especificaciones t&eacute;cnicas (TS), Informes t&eacute;cnicos (TR), Normas ETSI (ES) y Normas Europeas (EN).";
 choices[71][1] = "Los &Oacute;rganismos Nacionales de Normalizaci&oacute;n tienen la obligaci&oacute;n de adoptar &iacute;ntegramente las Normas Europeas (EN) elaboradas por CEN/CENELEC o ETSI.";
 choices[71][2] = "Las normas europeas (EN) elaboradas por CEN/CENELEC o ETSI son de obligado cumplimiento por los Estados Miembros.";
 choices[71][3] = "CEN/CENELEC elaboran Normas Europeas (EN) y Normas Experimentales Europeas (ENVs).";
 answers[71] = 2;
 units[71] = ['48'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2441. Las normas EN son de obligada transposici&oacute;n";
 preguntaids[71] = 2441


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[72]= "73)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[72]= new Array();
 choices[72][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[72][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[72][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[72][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[72] = 1;
 units[72] = ['14'];
 blocks[72] = ['A3'];
 comments[72] = "Id Pregunta: 392. Pol&iacute;ticas de igualdad";
 preguntaids[72] = 392


//  Id pregunta: 5044 Año de creación de pregunta: 2002
 questions[73]= "74)  S/MIME utiliza los siguientes algoritmos de  firma:";
 choices[73]= new Array();
 choices[73][0] = "RC2";
 choices[73][1] = "MD5";
 choices[73][2] = "RSA";
 choices[73][3] = "todos los anteriores";
 answers[73] = 3;
 units[73] = ['120'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5044. ";
 preguntaids[73] = 5044


//  Id pregunta: 4045 Año de creación de pregunta: 2003
 questions[74]= "75)  En el Mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[74]= new Array();
 choices[74][0] = "Estad&iacute;stica e Inventario de Cambios.";
 choices[74][1] = "Registro de cambios.";
 choices[74][2] = "Registro de la petici&oacute;n.";
 choices[74][3] = "Catalogo de peticiones.";
 answers[74] = 2;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4045. Junta Andaluc&iacute;a";
 preguntaids[74] = 4045


