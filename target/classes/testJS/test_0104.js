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
//  Id pregunta: 1692 Año de creación de pregunta: 2016
 questions[0]= "1)  En un DFD (Diagrama de Flujo de Datos), &iquest;de qu&eacute; tipos pueden ser los flujos de datos?";
 choices[0]= new Array();
 choices[0][0] = "Consulta, actualizaci&oacute;n, intercambio.";
 choices[0][1] = "Consulta, modificaci&oacute;n, borrado, di&aacute;logo.";
 choices[0][2] = "Consulta, actualizaci&oacute;n, di&aacute;logo.";
 choices[0][3] = "Consulta, modificaci&oacute;n, borrado, intercambio.";
 answers[0] = 2;
 units[0] = ['86'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 1692. ";
 preguntaids[0] = 1692


//  Id pregunta: 3880 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Qu&eacute; es EMACS?:";
 choices[1]= new Array();
 choices[1][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[1][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[1][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[1][3] = "Nada de lo anterior es correcto";
 answers[1] = 1;
 units[1] = ['66'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3880. ";
 preguntaids[1] = 3880


//  Id pregunta: 6036 Año de creación de pregunta: 2003
 questions[2]= "3)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[2]= new Array();
 choices[2][0] = "SAAJ";
 choices[2][1] = "JAXR";
 choices[2][2] = "SOAP";
 choices[2][3] = "STAX";
 answers[2] = 1;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6036. TIC B 2007";
 preguntaids[2] = 6036


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[3]= "4)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[3][1] = "Las inversiones reales y financieras.";
 choices[3][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[3][3] = "Las transferencias de capital y las inversiones reales.";
 answers[3] = 3;
 units[3] = ['11'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 287. Presupuestos generales";
 preguntaids[3] = 287


//  Id pregunta: 4858 Año de creación de pregunta: 2002
 questions[4]= "5)  En una red local en la que se tienen problemas de capacidad de la misma se ha decidido dividirla en dos segmentos. Indique cual de las opciones siguientes es la soluci&oacute;n t&eacute;cnica y econ&oacute;micamente m&aacute;s adecuada:";
 choices[4]= new Array();
 choices[4][0] = "Utilizaci&oacute;n de un gateway entre los segmentos";
 choices[4][1] = "Utilizaci&oacute;n de un repetidor entre los segmentos";
 choices[4][2] = "Utilizaci&oacute;n de un switch entre los segmentos";
 choices[4][3] = "Todas las opciones son igualmente adecuadas";
 answers[4] = 2;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4858. ";
 preguntaids[4] = 4858


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[5]= new Array();
 choices[5][0] = "Compatibilidad";
 choices[5][1] = "Interoperabilidad";
 choices[5][2] = "Reutilizaci&oacute;n";
 choices[5][3] = "Accesibilidad";
 answers[5] = 0;
 units[5] = ['22'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 504. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[5] = 504


//  Id pregunta: 7715 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente-servidor, est&aacute; encuadrado COM+ (Common Object Model Plus)?";
 choices[6]= new Array();
 choices[6][0] = "Modelos basados en llamadas a funciones (sockets).";
 choices[6][1] = "Modelos basados en llamadas a procedimientos remotos (RPC).";
 choices[6][2] = "Modelos basados en llamadas a objetos distribuidos.";
 choices[6][3] = "Modelos basados en agentes m&oacute;viles.";
 answers[6] = 2;
 units[6] = ['55'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7715. Map 2007";
 preguntaids[6] = 7715


//  Id pregunta: 4927 Año de creación de pregunta: 2002
 questions[7]= "8)  La topolog&iacute;a m&aacute;s com&uacute;n de dise&ntilde;o de redes SDH es:";
 choices[7]= new Array();
 choices[7][0] = "malla completa o parcial";
 choices[7][1] = "anillo";
 choices[7][2] = "estrella";
 choices[7][3] = "&aacute;rbol";
 answers[7] = 1;
 units[7] = ['112'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4927. ";
 preguntaids[7] = 4927


//  Id pregunta: 5325 Año de creación de pregunta: 2006
 questions[8]= "9)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[8]= new Array();
 choices[8][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[8][1] = "clave";
 choices[8][2] = "acuerdo de nivel de servicio (SLA)";
 choices[8][3] = "dongle";
 answers[8] = 3;
 units[8] = ['41'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 5325. ";
 preguntaids[8] = 5325


//  Id pregunta: 2671 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Qu&eacute; es Apache?:";
 choices[9]= new Array();
 choices[9][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[9][1] = "Un servidor web propiedad de Microsoft";
 choices[9][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[9][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[9] = 3;
 units[9] = ['66'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2671. ";
 preguntaids[9] = 2671


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[10]= new Array();
 choices[10][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[10][1] = "La delimitaci&oacute;n de su territorio.";
 choices[10][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[10][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[10] = 2;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 58. Constituci&oacute;n de 1978";
 preguntaids[10] = 58


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[11]= "12)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[11]= new Array();
 choices[11][0] = "61";
 choices[11][1] = "53";
 choices[11][2] = "65";
 choices[11][3] = "67";
 answers[11] = 2;
 units[11] = ['1'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 76. Constituci&oacute;n de 1978";
 preguntaids[11] = 76


//  Id pregunta: 3410 Año de creación de pregunta: 2006
 questions[12]= "13)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[12]= new Array();
 choices[12][0] = "Difusi&oacute;n actual";
 choices[12][1] = "Etapa de prototipos";
 choices[12][2] = "Sistemas expertos";
 choices[12][3] = "Etapa inicial";
 answers[12] = 0;
 units[12] = ['67'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3410. ";
 preguntaids[12] = 3410


//  Id pregunta: 10607 Año de creación de pregunta: 2015
 questions[13]= "14)  Se&ntilde;alar la FALSA de acuerdo a la Ley 9/2014. Entre las facultades del gobierno para la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, se encuentran:";
 choices[13]= new Array();
 choices[13][0] = "Aprobar los planes de utilizaci&oacute;n del espectro bas&aacute;ndose en las propuestas del MINETUR.";
 choices[13][1] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[13][2] = "La regulaci&oacute;n del procedimiento de determinaci&oacute;n de los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[13][3] = "La regulaci&oacute;n de las condiciones de otorgamiento de t&iacute;tulos habilitantes para uso del dominio p&uacute;blico para eventos de corta duraci&oacute;n.";
 answers[13] = 0;
 units[13] = ['121'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10607. Articulo 61";
 preguntaids[13] = 10607


//  Id pregunta: 6646 Año de creación de pregunta: 2009
 questions[14]= "15)  La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica depende de:";
 choices[14]= new Array();
 choices[14][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[14][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[14][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[14][3] = "Presidencia del Gobierno.";
 answers[14] = 0;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 6646. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[14] = 6646


//  Id pregunta: 7024 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[15]= new Array();
 choices[15][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[15][1] = "An&aacute;lisis DAFO";
 choices[15][2] = "Aprendizaje organizativo";
 choices[15][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[15] = 1;
 units[15] = ['83'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7024. ";
 preguntaids[15] = 7024


//  Id pregunta: 1710 Año de creación de pregunta: 2016
 questions[16]= "17)  Conforme al patr&oacute;n de dise&ntilde;o de aplicaciones MVC (Modelo-Vista-Controlador), se&ntilde;ale en qu&eacute; m&oacute;dulo/s se representa el acceso a los datos de las aplicaciones:";
 choices[16]= new Array();
 choices[16][0] = "Modelo.";
 choices[16][1] = "Vista.";
 choices[16][2] = "Controlador.";
 choices[16][3] = "Modelo y Controlador.";
 answers[16] = 0;
 units[16] = ['89'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 1710. ";
 preguntaids[16] = 1710


//  Id pregunta: 5585 Año de creación de pregunta: 2007
 questions[17]= "18)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[17]= new Array();
 choices[17][0] = "Red.";
 choices[17][1] = "Sesi&oacute;n.";
 choices[17][2] = "Enlace de datos.";
 choices[17][3] = "Transporte.";
 answers[17] = 2;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5585. ";
 preguntaids[17] = 5585


//  Id pregunta: 10854 Año de creación de pregunta: 2015
 questions[18]= "19)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[18]= new Array();
 choices[18][0] = "XAdES-A";
 choices[18][1] = "XAdES-C";
 choices[18][2] = "XAdES-X-L";
 choices[18][3] = "XAdES-X";
 answers[18] = 2;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10854. ";
 preguntaids[18] = 10854


//  Id pregunta: 1935 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; instrucci&oacute;n SQL se utiliza para extraer informaci&oacute;n de la Base de Datos?";
 choices[19]= new Array();
 choices[19][0] = "GET.";
 choices[19][1] = "EXPORT.";
 choices[19][2] = "SELECT.";
 choices[19][3] = "QUERY.";
 answers[19] = 2;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1935. ";
 preguntaids[19] = 1935


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[20]= new Array();
 choices[20][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[20][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[20][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[20][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[20] = 3;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 1894. ";
 preguntaids[20] = 1894


//  Id pregunta: 10823 Año de creación de pregunta: 2015
 questions[21]= "22)  Entre los diagramas de comportamiento de UML se encuentran:";
 choices[21]= new Array();
 choices[21][0] = "Diagrama de clases, diagrama de secuencia y diagrama de componentes.";
 choices[21][1] = "Diagrama de tiempos, diagrama de secuencia y diagrama de componentes.";
 choices[21][2] = "Diagrama de paquetes, diagrama de actividad y diagrama de perfil.";
 choices[21][3] = "Todas las anteriores son falsas";
 answers[21] = 3;
 units[21] = ['89'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 10823. ";
 preguntaids[21] = 10823


//  Id pregunta: 10700 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[22]= new Array();
 choices[22][0] = "Flume";
 choices[22][1] = "Cassandra";
 choices[22][2] = "Galenicum";
 choices[22][3] = "Hbase";
 answers[22] = 2;
 units[22] = ['73'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10700. ";
 preguntaids[22] = 10700


//  Id pregunta: 5006 Año de creación de pregunta: 2002
 questions[23]= "24)  MIB son unas siglas asociadas a:";
 choices[23]= new Array();
 choices[23][0] = "SGBD orientadas a objetos";
 choices[23][1] = "Lenguaje de programaci&oacute;n C++";
 choices[23][2] = "Sistemas de gesti&oacute;n de redes";
 choices[23][3] = "Sistemas OLAP";
 answers[23] = 2;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5006. ";
 preguntaids[23] = 5006


//  Id pregunta: 10519 Año de creación de pregunta: 2015
 questions[24]= "25)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/99, el encargado del tratamiento es:";
 choices[24]= new Array();
 choices[24][0] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada previa certificaci&oacute;n por la AEPD";
 choices[24][1] = "Persona f&iacute;sica, ya sea trabajador de una entidad p&uacute;blica, en cuyo caso ser&aacute; un funcionario o privada";
 choices[24][2] = "Persona f&iacute;sica, jur&iacute;dica o  entidad sin personalidad jur&iacute;dica, p&uacute;blica o privada, servicio o cualquier otro organismo";
 choices[24][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada, servicio o cualquier otro organismo";
 answers[24] = 3;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 10519. ";
 preguntaids[24] = 10519


//  Id pregunta: 10473 Año de creación de pregunta: 2015
 questions[25]= "26)  Los servicios WMS de OGC se consideran servicios de:";
 choices[25]= new Array();
 choices[25][0] = "Localizaci&oacute;n";
 choices[25][1] = "Descarga";
 choices[25][2] = "Transformaci&oacute;n";
 choices[25][3] = "Visualizaci&oacute;n";
 answers[25] = 3;
 units[25] = ['71'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10473. ";
 preguntaids[25] = 10473


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[26]= "27)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[26]= new Array();
 choices[26][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[26][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[26][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[26][3] = "todas son correctas";
 answers[26] = 3;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 230. Ley 39/2015";
 preguntaids[26] = 230


//  Id pregunta: 6037 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Qu&eacute; diagrama UML describe los mensajes que se pasan entre los objetos y el orden en el que lo hacen?:";
 choices[27]= new Array();
 choices[27][0] = "Diagrama de estado.";
 choices[27][1] = "Diagrama de actividad.";
 choices[27][2] = "Diagrama de despliegue.";
 choices[27][3] = "Diagrama de secuencia.";
 answers[27] = 3;
 units[27] = ['89'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6037. TIC B 2007";
 preguntaids[27] = 6037


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[28]= "29)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[28]= new Array();
 choices[28][0] = "La Ley Org&aacute;nica 2/2011";
 choices[28][1] = "La Ley Org&aacute;nica 2/2012";
 choices[28][2] = "La Ley Org&aacute;nica 3/2012";
 choices[28][3] = "La Ley Org&aacute;nica 2/2002";
 answers[28] = 1;
 units[28] = ['12'];
 blocks[28] = ['A3'];
 comments[28] = "Id Pregunta: 336. Modelo econ&oacute;mico";
 preguntaids[28] = 336


//  Id pregunta: 8428 Año de creación de pregunta: 2011
 questions[29]= "30)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[29]= new Array();
 choices[29][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[29][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[29][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[29][3] = "En uno de los dos";
 answers[29] = 3;
 units[29] = ['2'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 8428. ";
 preguntaids[29] = 8428


//  Id pregunta: 4200 Año de creación de pregunta: 2006
 questions[30]= "31)  Uno de los siguientes no es un tipo de flujo de datos que comunica un proceso con un almacen de mensajes. Se&ntilde;&aacute;lelo.";
 choices[30]= new Array();
 choices[30][0] = "De consulta.";
 choices[30][1] = "De control.";
 choices[30][2] = "De di&aacute;logo.";
 choices[30][3] = "De actualizaci&oacute;n.";
 answers[30] = 1;
 units[30] = ['89'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 4200. ";
 preguntaids[30] = 4200


//  Id pregunta: 5375 Año de creación de pregunta: 2006
 questions[31]= "32)  Para ver los saltos en la ruta entre dos servidores utilizo el comando";
 choices[31]= new Array();
 choices[31][0] = "ping";
 choices[31][1] = "netstat";
 choices[31][2] = "tracert o traceroute";
 choices[31][3] = "ipconfig / ifconfig";
 answers[31] = 2;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5375. ";
 preguntaids[31] = 5375


//  Id pregunta: 909 Año de creación de pregunta: 2016
 questions[32]= "33)  El conjunto de protocolos est&aacute;ndares adoptados por el Internet Architecture Board (IAB), para proporcionar seguridad al correo electr&oacute;nico sobre Internet se denomina:";
 choices[32]= new Array();
 choices[32][0] = "PEM";
 choices[32][1] = "CMS";
 choices[32][2] = "PGP";
 choices[32][3] = "S/MIME";
 answers[32] = 0;
 units[32] = ['116'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 909. AGE A2 2015";
 preguntaids[32] = 909


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[33]= "34)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[33]= new Array();
 choices[33][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[33][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[33][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[33][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[33] = 2;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 231. Ley 39/2015";
 preguntaids[33] = 231


//  Id pregunta: 8588 Año de creación de pregunta: 2013
 questions[34]= "35)  &iquest;Qu&eacute; es Parallel Sysplex?";
 choices[34]= new Array();
 choices[34][0] = "La soluci&oacute;n de clustering de IBM para z/OS";
 choices[34][1] = "Un tipo de registro l&oacute;gico";
 choices[34][2] = "Una aplicaci&oacute;n que permite conocer el estado de procesos de un sistema operativo";
 choices[34][3] = "Una herramienta de virtualizaci&oacute;n";
 answers[34] = 0;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8588. ";
 preguntaids[34] = 8588


//  Id pregunta: 9113 Año de creación de pregunta: 2014
 questions[35]= "36)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[35]= new Array();
 choices[35][0] = "Intrastructure e Hiperstructure.";
 choices[35][1] = "Basic y Complex.";
 choices[35][2] = "Infrastructure y Superstructure.";
 choices[35][3] = "Infrastructure y Substructure.";
 answers[35] = 2;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 9113. Examen TIC A2 2013";
 preguntaids[35] = 9113


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[36]= new Array();
 choices[36][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[36][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[36][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[36][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[36] = 1;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[36] = 452


//  Id pregunta: 10385 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;A partir de cuanto tiempo de retardo hace que la calidad de una videoconferencia sea cr&iacute;tica?";
 choices[37]= new Array();
 choices[37][0] = "50 ms";
 choices[37][1] = "150 ms";
 choices[37][2] = "300 ms";
 choices[37][3] = "600 ms";
 answers[37] = 2;
 units[37] = ['122'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10385. ";
 preguntaids[37] = 10385


//  Id pregunta: 2525 Año de creación de pregunta: 2004
 questions[38]= "39)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[38]= new Array();
 choices[38][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[38][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[38][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[38][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[38] = 2;
 units[38] = ['76'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2525. Similar a examen TIC SS A 2003. Puede haber colisiones aunque con una probabilidad muy baja.";
 preguntaids[38] = 2525


//  Id pregunta: 2845 Año de creación de pregunta: 2002
 questions[39]= "40)  En los ordenadores, por lo general, los programas que realizan tareas de arranque de la m&aacute;quina y de diagn&oacute;sticos se almacenan en:";
 choices[39]= new Array();
 choices[39][0] = "RAM";
 choices[39][1] = "ROM";
 choices[39][2] = "memoria interna del procesador";
 choices[39][3] = "disco duro asociado a la UAL y la UC";
 answers[39] = 1;
 units[39] = ['51'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2845. ";
 preguntaids[39] = 2845


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[40]= "41)  El sector Servicios NO incluye:";
 choices[40]= new Array();
 choices[40][0] = "El Comercio";
 choices[40][1] = "Los Transportes";
 choices[40][2] = "La Energ&iacute;a";
 choices[40][3] = "Las Comunicaciones";
 answers[40] = 2;
 units[40] = ['12'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 345. Modelo econ&oacute;mico";
 preguntaids[40] = 345


//  Id pregunta: 5116 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[41]= new Array();
 choices[41][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[41][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[41][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[41][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[41] = 0;
 units[41] = ['113'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5116. ";
 preguntaids[41] = 5116


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[42]= "43)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[42]= new Array();
 choices[42][0] = "Decretos Legislativos.";
 choices[42][1] = "Decretos-leyes.";
 choices[42][2] = "Leyes de bases.";
 choices[42][3] = "Reales Decretos del Consejo de Ministros.";
 answers[42] = 0;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 31. Constituci&oacute;n de 1978";
 preguntaids[42] = 31


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[43]= "44)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[43]= new Array();
 choices[43][0] = "TPDU.";
 choices[43][1] = "Paquete.";
 choices[43][2] = "Trama.";
 choices[43][3] = "TCDU.";
 answers[43] = 0;
 units[43] = ['105'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1129. ";
 preguntaids[43] = 1129


//  Id pregunta: 9154 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[44]= new Array();
 choices[44][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad.";
 choices[44][1] = "El esquema conceptual.";
 choices[44][2] = "Fichero diario.";
 choices[44][3] = "Triggers.";
 answers[44] = 2;
 units[44] = ['60'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9154. Examen TIC A2 2013";
 preguntaids[44] = 9154


//  Id pregunta: 6450 Año de creación de pregunta: 2003
 questions[45]= "46)  &iquest;Qu&eacute; directiva transpone la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones?";
 choices[45]= new Array();
 choices[45][0] = "Directiva 2006/24/CE";
 choices[45][1] = "Directiva 1999/93/CE";
 choices[45][2] = "Directiva 95/46/CE";
 choices[45][3] = "Directiva 2000/31/CE";
 answers[45] = 0;
 units[45] = ['100'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6450. ";
 preguntaids[45] = 6450


//  Id pregunta: 3833 Año de creación de pregunta: 2002
 questions[46]= "47)  En un DFD el elemento usado para representar una actividad que transforma los flujos de entrada en otros de salida es:";
 choices[46]= new Array();
 choices[46][0] = "El programa";
 choices[46][1] = "El proceso";
 choices[46][2] = "El nodo";
 choices[46][3] = "La entidad";
 answers[46] = 1;
 units[46] = ['85', '86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3833. ";
 preguntaids[46] = 3833


//  Id pregunta: 7583 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[47]= new Array();
 choices[47][0] = "An&aacute;lisis de Inventarios.";
 choices[47][1] = "Ingenier&iacute;a Inversa.";
 choices[47][2] = "Ingenier&iacute;a Directa.";
 choices[47][3] = "Ingenier&iacute;a Relacional.";
 answers[47] = 3;
 units[47] = ['97'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7583. Map 2006";
 preguntaids[47] = 7583


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[48]= new Array();
 choices[48][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[48][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[48][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[48][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[48] = 2;
 units[48] = ['7'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 1791. ";
 preguntaids[48] = 1791


//  Id pregunta: 6183 Año de creación de pregunta: 2003
 questions[49]= "50)  En la estimaci&oacute;n del retorno de la inversi&oacute;n, al calcular el Beneficio Neto Anual:";
 choices[49]= new Array();
 choices[49][0] = "Se deben ignorar los beneficios intangibles pues no se pueden traducir en un importe.";
 choices[49][1] = "Se deben tener en cuenta los gastos operacionales anuales.";
 choices[49][2] = "Se debe tener en cuenta el gasto inciail del desarrollo del sistema.";
 choices[49][3] = "Se debe tener en cuenta el total de la inversi&oacute;n realizada.";
 answers[49] = 1;
 units[49] = ['40'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 6183. Examen TIC A Castilla La Mancha 2007";
 preguntaids[49] = 6183


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[50]= "51)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[50]= new Array();
 choices[50][0] = "La Administraci&oacute;n General del Estado";
 choices[50][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[50][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[50][3] = "Todas las Administraciones P&uacute;blicas";
 answers[50] = 1;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[50] = 6948


//  Id pregunta: 9265 Año de creación de pregunta: 2014
 questions[51]= "52)  Indique la opci&oacute;n falsa:";
 choices[51]= new Array();
 choices[51][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[51][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[51][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[51][3] = "Todas son verdaderas.";
 answers[51] = 0;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9265. ";
 preguntaids[51] = 9265


//  Id pregunta: 8268 Año de creación de pregunta: 2011
 questions[52]= "53)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[52]= new Array();
 choices[52][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[52][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[52][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[52][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[52] = 1;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 8268. Examen TIC A2 2010 interna";
 preguntaids[52] = 8268


//  Id pregunta: 7955 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet?";
 choices[53]= new Array();
 choices[53][0] = "IETF.";
 choices[53][1] = "ICANN.";
 choices[53][2] = "IAB.";
 choices[53][3] = "IRTF.";
 answers[53] = 2;
 units[53] = ['48', '103'];
 blocks[53] = ['B1', 'B4'];
 comments[53] = "Id Pregunta: 7955. Examen TIC A2 2010";
 preguntaids[53] = 7955


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[54]= "55)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[54]= new Array();
 choices[54][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[54][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[54][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[54][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[54] = 0;
 units[54] = ['12'];
 blocks[54] = ['A3'];
 comments[54] = "Id Pregunta: 333. Modelo econ&oacute;mico";
 preguntaids[54] = 333


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[55]= "56)  El Presupuesto por programas sirve para saber...";
 choices[55]= new Array();
 choices[55][0] = "En qu&eacute; nos gastamos el dinero";
 choices[55][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[55][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[55][3] = "Qui&eacute;n se gasta el dinero";
 answers[55] = 2;
 units[55] = ['11'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 272. Presupuestos generales";
 preguntaids[55] = 272


//  Id pregunta: 10968 Año de creación de pregunta: 2015
 questions[56]= "57)  Se&ntilde;ale la FALSA en lo relativo a la tecnolog&iacute;a RAID de discos duros:";
 choices[56]= new Array();
 choices[56][0] = "En RAID 5 los bloques de paridad solo se leen cuando la lectura de un sector de datos provoca un error de CRC.";
 choices[56][1] = "Un RAID 6 ampl&iacute;a el nivel RAID 5 a&ntilde;adiendo otro bloque de paridad.";
 choices[56][2] = "El RAID 6 proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco.";
 choices[56][3] = "Un RAID 2 necesitar&iacute;a como m&iacute;nimo 32 discos (los necesarios para formar una palabra).";
 answers[56] = 3;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 10968. ";
 preguntaids[56] = 10968


//  Id pregunta: 8436 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[57]= new Array();
 choices[57][0] = "Conservaci&oacute;n";
 choices[57][1] = "Confidencialidad";
 choices[57][2] = "Trazabilidad";
 choices[57][3] = "Todas las anteriores lo son";
 answers[57] = 3;
 units[57] = ['2'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 8436. ";
 preguntaids[57] = 8436


//  Id pregunta: 9261 Año de creación de pregunta: 2014
 questions[58]= "59)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[58]= new Array();
 choices[58][0] = "8192";
 choices[58][1] = "1024";
 choices[58][2] = "512";
 choices[58][3] = "2048";
 answers[58] = 0;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9261. ";
 preguntaids[58] = 9261


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[59]= "60)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[59]= new Array();
 choices[59][0] = "Diez art&iacute;culos.";
 choices[59][1] = "Nueve art&iacute;culos.";
 choices[59][2] = "Once art&iacute;culos.";
 choices[59][3] = "Ocho art&iacute;culos.";
 answers[59] = 0;
 units[59] = ['1'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 96. Constituci&oacute;n de 1978";
 preguntaids[59] = 96


//  Id pregunta: 1000 Año de creación de pregunta: 2016
 questions[60]= "61)  Los Secretarios generales t&eacute;cnicos:";
 choices[60]= new Array();
 choices[60][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[60][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[60][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[60][3] = "todas son correctas";
 answers[60] = 3;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 1000. Ley 40/2015";
 preguntaids[60] = 1000


//  Id pregunta: 1922 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; sentencia de las siguientes es correcta?:";
 choices[61]= new Array();
 choices[61][0] = "Con SSL las cabeceras IP y del nivel de transporte (TCP y UDP) son cifradas y por tanto no accesibles desde la red";
 choices[61][1] = "SSL utiliza &uacute;nicamente sistemas de clave p&uacute;blica para cifrar";
 choices[61][2] = "Para utilizar SSL los routers tienen que ser compatibles con SSL";
 choices[61][3] = "EI servidor en una sesi&oacute;n SSL no tiene por que estar siempre autenticado";
 answers[61] = 3;
 units[61] = ['120'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1922. ";
 preguntaids[61] = 1922


//  Id pregunta: 10782 Año de creación de pregunta: 2015
 questions[62]= "63)  Se&ntilde;ale el contenido opcional de un &iacute;ndice de expediente electr&oacute;nico:";
 choices[62]= new Array();
 choices[62][0] = "Huella digital de cada documento electr&oacute;nico";
 choices[62][1] = "Fecha de generaci&oacute;n del &iacute;ndice";
 choices[62][2] = "Fecha de incorporaci&oacute;n al expediente de cada documento electr&oacute;nico";
 choices[62][3] = "Identificador de cada documento electr&oacute;nico";
 answers[62] = 2;
 units[62] = ['44'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 10782. ";
 preguntaids[62] = 10782


//  Id pregunta: 10707 Año de creación de pregunta: 2015
 questions[63]= "64)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[63]= new Array();
 choices[63][0] = "RFC 3161";
 choices[63][1] = "RFC 4510";
 choices[63][2] = "RFC 4120";
 choices[63][3] = "RFC 6101";
 answers[63] = 1;
 units[63] = ['77'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 10707. ";
 preguntaids[63] = 10707


//  Id pregunta: 6698 Año de creación de pregunta: 2009
 questions[64]= "65)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[64]= new Array();
 choices[64][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[64][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[64][2] = "P3P est&aacute; basado en CCXML";
 choices[64][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[64] = 2;
 units[64] = ['120'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 6698. MAP 2008 A1";
 preguntaids[64] = 6698


//  Id pregunta: 1562 Año de creación de pregunta: 2016
 questions[65]= "66)  En lenguaje Java, a&ntilde;adir metadatos al c&oacute;digo fuente que est&aacute;n disponibles para la aplicaci&oacute;n en tiempo de ejecuci&oacute;n se consigue con una caracter&iacute;stica denominada:";
 choices[65]= new Array();
 choices[65][0] = "CDATA.";
 choices[65][1] = "Closure.";
 choices[65][2] = "Annotation.";
 choices[65][3] = "Enum.";
 answers[65] = 2;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1562. ";
 preguntaids[65] = 1562


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[66]= new Array();
 choices[66][0] = "El 1 de junio de 1999.";
 choices[66][1] = "El 1 de mayo de 1999.";
 choices[66][2] = "El 1 de abril de 1999.";
 choices[66][3] = "El 1 de marzo de 1999.";
 answers[66] = 1;
 units[66] = ['5'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 186. Uni&oacute;n Europea";
 preguntaids[66] = 186


//  Id pregunta: 3708 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;les son los elementos de la t&eacute;cnica Historia de la Vida de las Entidades (HVE)?";
 choices[67]= new Array();
 choices[67][0] = "Entidades, eventos, efectos, primitivas, cajas vac&iacute;as.";
 choices[67][1] = "Entidades, eventos, resultados, nodos, cajas llenas.";
 choices[67][2] = "Entidades, eventos, resultados, primitivas, cajas llenas.";
 choices[67][3] = "Entidades, eventos, efectos, nodos, cajas vac&iacute;as.";
 answers[67] = 3;
 units[67] = ['86'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3708. ";
 preguntaids[67] = 3708


//  Id pregunta: 10384 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes protocolos se utiliza para videoconferencia sobre IP?";
 choices[68]= new Array();
 choices[68][0] = "ITU H.320";
 choices[68][1] = "ITU H.243";
 choices[68][2] = "ITU H.249";
 choices[68][3] = "ITU H.323";
 answers[68] = 3;
 units[68] = ['122'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10384. ";
 preguntaids[68] = 10384


//  Id pregunta: 9587 Año de creación de pregunta: 2014
 questions[69]= "70)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[69]= new Array();
 choices[69][0] = "Enlace.";
 choices[69][1] = "Red.";
 choices[69][2] = "Transporte.";
 choices[69][3] = "Aplicaci&oacute;n.";
 answers[69] = 2;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9587. TIC A2 2013 libre";
 preguntaids[69] = 9587


//  Id pregunta: 2386 Año de creación de pregunta: 2006
 questions[70]= "71)  Dentro del an&aacute;lisis de un sistema de informaci&oacute;n automatizado, de una aplicaci&oacute;n o de un proceso no se  realiza b&aacute;sicamente, dentro de un esquema de modelo conceptual de datos, la siguiente tarea:";
 choices[70]= new Array();
 choices[70][0] = "Estudio del sistema de informaci&oacute;n preexistente";
 choices[70][1] = "Dise&ntilde;o f&iacute;sico del modelo de datos.";
 choices[70][2] = "Dise&ntilde;o racional y normalizado del nuevo sistema de informaci&oacute;n";
 choices[70][3] = "Descripci&oacute;n generalizada de cada proceso.";
 answers[70] = 1;
 units[70] = ['30'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2386. ";
 preguntaids[70] = 2386


//  Id pregunta: 2381 Año de creación de pregunta: 2006
 questions[71]= "72)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[71]= new Array();
 choices[71][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[71][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[71][2] = "Es conocimiento f&aacute;cilmente transferible o comunicable.";
 choices[71][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[71] = 3;
 units[71] = ['25'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2381. ";
 preguntaids[71] = 2381


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[72]= "73)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[72]= new Array();
 choices[72][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[72][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[72][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[72][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[72] = 3;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 80. Constituci&oacute;n de 1978";
 preguntaids[72] = 80


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[73]= "74)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[73]= new Array();
 choices[73][0] = "Presentar la moci&oacute;n de censura.";
 choices[73][1] = "Presidir las sesiones del Parlamento.";
 choices[73][2] = "Organizar la Secretar&iacute;a General.";
 choices[73][3] = "Preparar las actividades de las Comisiones.";
 answers[73] = 1;
 units[73] = ['5'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 189. Uni&oacute;n Europea";
 preguntaids[73] = 189


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[74]= "75)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[74]= new Array();
 choices[74][0] = "Resoluci&oacute;n.";
 choices[74][1] = "Desistimiento o renuncia.";
 choices[74][2] = "Caducidad.";
 choices[74][3] = "Todas las anteriores.";
 answers[74] = 3;
 units[74] = ['7'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 202. Ley 39/2015";
 preguntaids[74] = 202


