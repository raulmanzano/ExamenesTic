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
//  Id pregunta: 10681 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[0]= new Array();
 choices[0][0] = "2 veces al a&ntilde;o";
 choices[0][1] = "Cada a&ntilde;o";
 choices[0][2] = "Cada 2 a&ntilde;os";
 choices[0][3] = "Cada 3 a&ntilde;os";
 answers[0] = 1;
 units[0] = ['44'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 10681. ";
 preguntaids[0] = 10681


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[1]= "2)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[1]= new Array();
 choices[1][0] = "Presencia equilibrada.";
 choices[1][1] = "Presencia paritaria.";
 choices[1][2] = "Presencia consensuada.";
 choices[1][3] = "presencia horizontal.";
 answers[1] = 0;
 units[1] = ['14'];
 blocks[1] = ['A3'];
 comments[1] = "Id Pregunta: 405. Pol&iacute;ticas de igualdad";
 preguntaids[1] = 405


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[2]= "3)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[2]= new Array();
 choices[2][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[2][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[2][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[2][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[2] = 3;
 units[2] = ['14'];
 blocks[2] = ['A3'];
 comments[2] = "Id Pregunta: 363. Pol&iacute;ticas de igualdad";
 preguntaids[2] = 363


//  Id pregunta: 971 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[3][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[3][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[3][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[3] = 2;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 971. Ley 40/2015";
 preguntaids[3] = 971


//  Id pregunta: 3298 Año de creación de pregunta: 2004
 questions[4]= "5)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[4]= new Array();
 choices[4][0] = "Leer ficheros locales";
 choices[4][1] = "Cargar librer&iacute;as nativas";
 choices[4][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[4][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[4] = 2;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 3298. ";
 preguntaids[4] = 3298


//  Id pregunta: 2329 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[5]= new Array();
 choices[5][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[5][1] = "Inspecci&oacute;n de Datos";
 choices[5][2] = "Secretar&iacute;a General";
 choices[5][3] = "Ninguno de los anteriores";
 answers[5] = 2;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2329. Pregunta similar a la del ex&aacute;men de SS del 2003. Real Decreto 428/1993";
 preguntaids[5] = 2329


//  Id pregunta: 1846 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre el est&aacute;ndar IEEE 802.11";
 choices[6]= new Array();
 choices[6][0] = "Utiliza CSMA/CA como protocolo MAC";
 choices[6][1] = "La trama 802.11 contiene 4 direcciones MAC";
 choices[6][2] = "La trama 802.11 contiene 2 direcciones MAC";
 choices[6][3] = "Utiliza tramas de reconocimiento o confirmaci&oacute;n (ACK)";
 answers[6] = 2;
 units[6] = ['108'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1846. ";
 preguntaids[6] = 1846


//  Id pregunta: 9888 Año de creación de pregunta: 2015
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[7]= new Array();
 choices[7][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[7][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[7][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[7][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[7] = 1;
 units[7] = ['7', '19'];
 blocks[7] = ['A2', 'A4'];
 comments[7] = "Id Pregunta: 9888. ";
 preguntaids[7] = 9888


//  Id pregunta: 2158 Año de creación de pregunta: 2002
 questions[8]= "9)  En la funci&oacute;n de entrada de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[8]= new Array();
 choices[8][0] = "La interactividad con el operador";
 choices[8][1] = "La organizaci&oacute;n de la base de datos";
 choices[8][2] = "Control de errores";
 choices[8][3] = "Enfoque integrado";
 answers[8] = 1;
 units[8] = ['24'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2158. ";
 preguntaids[8] = 2158


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[9]= new Array();
 choices[9][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[9][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[9][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[9][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[9] = 1;
 units[9] = ['7'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 252. Ley 39/2015";
 preguntaids[9] = 252


//  Id pregunta: 3467 Año de creación de pregunta: 2006
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[10]= new Array();
 choices[10][0] = "MultOS";
 choices[10][1] = "Jini";
 choices[10][2] = "Java Card";
 choices[10][3] = "Windows SC";
 answers[10] = 1;
 units[10] = ['78'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3467. ";
 preguntaids[10] = 3467


//  Id pregunta: 8434 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[11]= new Array();
 choices[11][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[11][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[11][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[11][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[11] = 2;
 units[11] = ['2'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 8434. ";
 preguntaids[11] = 8434


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[12]= new Array();
 choices[12][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[12][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[12][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[12][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[12] = 3;
 units[12] = ['11'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 281. Presupuestos generales";
 preguntaids[12] = 281


//  Id pregunta: 9157 Año de creación de pregunta: 2014
 questions[13]= "14)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[13]= new Array();
 choices[13][0] = "Virtualizaci&oacute;n de escritorio.";
 choices[13][1] = "Virtualizaci&oacute;n de servidores.";
 choices[13][2] = "Sistemas SAN.";
 choices[13][3] = "Miner&iacute;a de datos.";
 answers[13] = 3;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9157. Examen TIC A2 2013";
 preguntaids[13] = 9157


//  Id pregunta: 9839 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de estas no es una novedad de M&eacute;trica v3 con respecto a M&eacute;trica v2?";
 choices[14]= new Array();
 choices[14][0] = "Propone un conjunto de t&eacute;cnicas para obtener los productos intermedios y finales.";
 choices[14][1] = "Cubre tanto el desarrollo estructurado como el desarrollo orientado a objetos.";
 choices[14][2] = "Su estructura est&aacute; basada en procesos de entrada, transformaci&oacute;n y salida seg&uacute;n ISO 12207.";
 choices[14][3] = "Se incluyen interfaces para aspectos de gesti&oacute;n.";
 answers[14] = 0;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 9839. ";
 preguntaids[14] = 9839


//  Id pregunta: 4622 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[15]= new Array();
 choices[15][0] = "IETF";
 choices[15][1] = "IESG";
 choices[15][2] = "ITU-T";
 choices[15][3] = "ICANN";
 answers[15] = 3;
 units[15] = ['103'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4622. ";
 preguntaids[15] = 4622


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[16]= "17)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[16]= new Array();
 choices[16][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[16][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[16][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[16][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[16] = 0;
 units[16] = ['7'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[16] = 254


//  Id pregunta: 10118 Año de creación de pregunta: 2015
 questions[17]= "18)  SAML (Security Assertion Markup Language):";
 choices[17]= new Array();
 choices[17][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[17][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[17][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[17][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[17] = 0;
 units[17] = ['123'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 10118. Examen TIC A1 2014";
 preguntaids[17] = 10118


//  Id pregunta: 4546 Año de creación de pregunta: 2002
 questions[18]= "19)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[18]= new Array();
 choices[18][0] = "mensaje de petici&oacute;n no reconocido";
 choices[18][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[18][2] = "versi&oacute;n HTTP no soportada";
 choices[18][3] = "el objeto pedido no se encuentra en el servidor";
 answers[18] = 3;
 units[18] = ['103'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4546. ";
 preguntaids[18] = 4546


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[19]= "20)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[19]= new Array();
 choices[19][0] = "CO.PER.";
 choices[19][1] = "COMPER.";
 choices[19][2] = "CO.RE.PER.";
 choices[19][3] = "CO.PE.RRE.";
 answers[19] = 2;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 158. Uni&oacute;n Europea";
 preguntaids[19] = 158


//  Id pregunta: 2000 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[20]= new Array();
 choices[20][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[20][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[20][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[20][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[20] = 3;
 units[20] = ['42'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2000. ";
 preguntaids[20] = 2000


//  Id pregunta: 10552 Año de creación de pregunta: 2015
 questions[21]= "22)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[21]= new Array();
 choices[21][0] = "Entregar servicios acordados";
 choices[21][1] = "Contratar proveedores TI";
 choices[21][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[21][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[21] = 2;
 units[21] = ['101'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 10552. ";
 preguntaids[21] = 10552


//  Id pregunta: 7532 Año de creación de pregunta: 2010
 questions[22]= "23)  Las SDU (Service Data Unit) son unidades de datos:";
 choices[22]= new Array();
 choices[22][0] = "Que se intercambian entre entidades hom&oacute;logas.";
 choices[22][1] = "Que proporcionan informaci&oacute;n de control entre niveles.";
 choices[22][2] = "Correspondientes a las primitivas de comunicaci&oacute;n.";
 choices[22][3] = "Que deben ser tratados por el nivel superior N+1 de forma transparente.";
 answers[22] = 3;
 units[22] = ['102'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7532. Map 2005";
 preguntaids[22] = 7532


//  Id pregunta: 9366 Año de creación de pregunta: 2014
 questions[23]= "24)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[23]= new Array();
 choices[23][0] = "Red A.";
 choices[23][1] = "Red B.";
 choices[23][2] = "Red C.";
 choices[23][3] = "Indistintamente en la red B o en la red C.";
 answers[23] = 2;
 units[23] = ['109'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9366. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[23] = 9366


//  Id pregunta: 2277 Año de creación de pregunta: 2002
 questions[24]= "25)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[24]= new Array();
 choices[24][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[24][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[24][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[24][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[24] = 3;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2277. ";
 preguntaids[24] = 2277


//  Id pregunta: 9076 Año de creación de pregunta: 2014
 questions[25]= "26)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[25]= new Array();
 choices[25][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[25][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[25][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[25][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[25] = 3;
 units[25] = ['71'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9076. ";
 preguntaids[25] = 9076


//  Id pregunta: 7358 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[26]= new Array();
 choices[26][0] = "Los protocolos de comunicaciones NAS est&aacute;n basados en ficheros";
 choices[26][1] = "Los dispositivos NAS tienen mayor rendimiento y fiabilidad que los DAS";
 choices[26][2] = "En una red SAN el modo de acceso es a m&aacute;s bajo nivel que en NAS y DAS";
 choices[26][3] = "La mayor&iacute;a de las SAN usan variantes del protocolo SCSI para la comunicaci&oacute;n entre servidores";
 answers[26] = 1;
 units[26] = ['53'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7358. Examen TIC B 2009";
 preguntaids[26] = 7358


//  Id pregunta: 1265 Año de creación de pregunta: 2016
 questions[27]= "28)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[27]= new Array();
 choices[27][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[27][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[27][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[27][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[27] = 2;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 1265. ";
 preguntaids[27] = 1265


//  Id pregunta: 8343 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[28]= new Array();
 choices[28][0] = "H.239";
 choices[28][1] = "H.264";
 choices[28][2] = "H.263";
 choices[28][3] = "H.240";
 answers[28] = 0;
 units[28] = ['122'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8343. Examen UC3M 2010";
 preguntaids[28] = 8343


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[29]= "30)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[29]= new Array();
 choices[29][0] = "Proveer de manera compartida servicios comunes";
 choices[29][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[29][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[29][3] = "Transparencia";
 answers[29] = 1;
 units[29] = ['28'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 548. Estrategia TIC";
 preguntaids[29] = 548


//  Id pregunta: 10471 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;En el contexto de los Sistemas de Informaci&oacute;n Geogr&aacute;fica &iquest;cu&aacute;l de los siguientes usos ser&iacute;a un mashup?";
 choices[30]= new Array();
 choices[30][0] = "B&uacute;squeda de una direcci&oacute;n (geocodificaci&oacute;n directa)";
 choices[30][1] = "Carga de una capa WMS externa usando la API de OpenLayers";
 choices[30][2] = "Descarga de datos vectoriales en GML o KML";
 choices[30][3] = "Todas las anteriores";
 answers[30] = 1;
 units[30] = ['71'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10471. ";
 preguntaids[30] = 10471


//  Id pregunta: 9772 Año de creación de pregunta: 2014
 questions[31]= "32)  Los controles detectivos tienen como objeto:";
 choices[31]= new Array();
 choices[31][0] = "reducir el riesgo ante una debilidad existente";
 choices[31][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[31][2] = "Solucionar problemas detectados por controles detectivos";
 choices[31][3] = "Reportar errores";
 answers[31] = 3;
 units[31] = ['45', '36'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 9772. ";
 preguntaids[31] = 9772


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[32]= "33)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[32][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[32][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[32][3] = "Todas las anteriores son ciertas";
 answers[32] = 3;
 units[32] = ['8'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 262. Ley 39/2015";
 preguntaids[32] = 262


//  Id pregunta: 3045 Año de creación de pregunta: 2002
 questions[33]= "34)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[33]= new Array();
 choices[33][0] = "El RISC tiene m&aacute;s registros";
 choices[33][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[33][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[33][3] = "Todas las respuestas anteriores son ciertas";
 answers[33] = 3;
 units[33] = ['50', '51'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3045. ";
 preguntaids[33] = 3045


//  Id pregunta: 10386 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Crecimiento inteligente";
 choices[34][1] = "Crecimiento sostenible";
 choices[34][2] = "Crecimiento innovador";
 choices[34][3] = "Crecimiento integrador";
 answers[34] = 0;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 10386. ";
 preguntaids[34] = 10386


//  Id pregunta: 6950 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[35]= new Array();
 choices[35][0] = "Spring Security";
 choices[35][1] = "JSF";
 choices[35][2] = "Struts";
 choices[35][3] = "Jbuilder";
 answers[35] = 0;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6950. TIC-B 2009 bloque desarrollo";
 preguntaids[35] = 6950


//  Id pregunta: 3895 Año de creación de pregunta: 2002
 questions[36]= "37)  El nivel b&aacute;sico de comprensi&oacute;n que determina el n&uacute;mero preciso de sonidos con valor distinto es el nivel:";
 choices[36]= new Array();
 choices[36][0] = "Ac&uacute;stico";
 choices[36][1] = "Fon&eacute;tico";
 choices[36][2] = "Fonol&oacute;gico";
 choices[36][3] = "L&eacute;xico-sint&aacute;ctico";
 answers[36] = 2;
 units[36] = ['81'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3895. ";
 preguntaids[36] = 3895


//  Id pregunta: 4984 Año de creación de pregunta: 2002
 questions[37]= "38)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[37]= new Array();
 choices[37][0] = "Recommendation File Contents";
 choices[37][1] = "Requisite File Coordination";
 choices[37][2] = "Request For Comments";
 choices[37][3] = "Register Full Condition";
 answers[37] = 2;
 units[37] = ['103'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4984. ";
 preguntaids[37] = 4984


//  Id pregunta: 10030 Año de creación de pregunta: 2015
 questions[38]= "39)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[38]= new Array();
 choices[38][0] = "Serializable.";
 choices[38][1] = "Repeatable Read (lecturas repetibles).";
 choices[38][2] = "Read Committed (lecturas comprometidas).";
 choices[38][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[38] = 3;
 units[38] = ['60', '61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10030. Examen TIC A2 2014";
 preguntaids[38] = 10030


//  Id pregunta: 9717 Año de creación de pregunta: 2014
 questions[39]= "40)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[39]= new Array();
 choices[39][0] = "&lt;head&gt;";
 choices[39][1] = "&lt;video&gt;";
 choices[39][2] = "&lt;music&gt;";
 choices[39][3] = "&lt;background&gt;";
 answers[39] = 1;
 units[39] = ['74'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9717. http://es.wikipedia.org/wiki/HTML5";
 preguntaids[39] = 9717


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[40]= "41)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[40]= new Array();
 choices[40][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[40][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[40][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[40][3] = "ratificados por Espa&ntilde;a y publicadas en el BOE, no son fuente de derecho.";
 answers[40] = 2;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 13. Constituci&oacute;n de 1978";
 preguntaids[40] = 13


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[41]= "42)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[41]= new Array();
 choices[41][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[41][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[41][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[41][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[41] = 2;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 354. Estado del Bienestar";
 preguntaids[41] = 354


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[42]= new Array();
 choices[42][0] = "23";
 choices[42][1] = "25";
 choices[42][2] = "14";
 choices[42][3] = "18";
 answers[42] = 1;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 163. Uni&oacute;n Europea";
 preguntaids[42] = 163


//  Id pregunta: 5693 Año de creación de pregunta: 2007
 questions[43]= "44)  El protocolo RIP:";
 choices[43]= new Array();
 choices[43][0] = "Es un protocolo de encaminamiento del tipo &quot;vector de distancia&quot;.";
 choices[43][1] = "Es un protocolo de encaminamiento del tipo &quot;estado del enlace&quot;.";
 choices[43][2] = "Es un protocolo de descarga de correo electr&oacute;nico desde un servidor web.";
 choices[43][3] = "Es un protocolo de interconexi&oacute;n de conmutadores.";
 answers[43] = 0;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5693. ";
 preguntaids[43] = 5693


//  Id pregunta: 9534 Año de creación de pregunta: 2014
 questions[44]= "45)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:  &quot;Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&quot; &iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[44]= new Array();
 choices[44][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[44][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[44][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[44][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[44] = 1;
 units[44] = ['66'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9534. ";
 preguntaids[44] = 9534


//  Id pregunta: 7560 Año de creación de pregunta: 2010
 questions[45]= "46)  En el entorno de la arquitectura GNOME, seleccione la afirmaci&oacute;n correcta en relaci&oacute;n con DII:";
 choices[45]= new Array();
 choices[45][0] = "Es un lenguaje para implementar interfaces CORBA.";
 choices[45][1] = "Es un servicio que ofrece objetos persistentes que representan la informaci&oacute;n IDL de los interfaces disponibles en CORBA.";
 choices[45][2] = "Es un protocolo de comunicaciones de CORBA.";
 choices[45][3] = "Es una interfaz que nos permite la construcci&oacute;n din&aacute;mica de invocaciones para un determinado objeto.";
 answers[45] = 3;
 units[45] = ['57'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7560. Map 2005";
 preguntaids[45] = 7560


//  Id pregunta: 1614 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale qu&eacute; lenguaje es el que incluye las operaciones de creaci&oacute;n, modificaci&oacute;n y eliminaci&oacute;n de las estructuras de la base:";
 choices[46]= new Array();
 choices[46][0] = "DDL";
 choices[46][1] = "DML";
 choices[46][2] = "DLC";
 choices[46][3] = "TCL";
 answers[46] = 0;
 units[46] = ['61'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1614. ";
 preguntaids[46] = 1614


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[47][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[47][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[47][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[47] = 1;
 units[47] = ['60'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 682. AGE A1 2015";
 preguntaids[47] = 682


//  Id pregunta: 6475 Año de creación de pregunta: 2003
 questions[48]= "49)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[48]= new Array();
 choices[48][0] = "Incrementar el n&uacute;mero de abonados";
 choices[48][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[48][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[48][3] = "Favorecer la competencia enlas redes de acceso";
 answers[48] = 0;
 units[48] = ['108'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 6475. ";
 preguntaids[48] = 6475


//  Id pregunta: 10398 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[49]= new Array();
 choices[49][0] = "6";
 choices[49][1] = "7";
 choices[49][2] = "8";
 choices[49][3] = "9";
 answers[49] = 0;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 10398. ";
 preguntaids[49] = 10398


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[50]= "51)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[50]= new Array();
 choices[50][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[50][1] = "Personas con nacionalidad europea.";
 choices[50][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[50][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[50] = 3;
 units[50] = ['5'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 198. Uni&oacute;n Europea";
 preguntaids[50] = 198


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[51]= new Array();
 choices[51][0] = "El estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[51][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[51][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[51][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 8. Constituci&oacute;n de 1978";
 preguntaids[51] = 8


//  Id pregunta: 9282 Año de creación de pregunta: 2014
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[52]= new Array();
 choices[52][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales.";
 choices[52][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[52][2] = "Valoraci&oacute;n de Alternativas.";
 choices[52][3] = "Definici&oacute;n del sistema.";
 answers[52] = 0;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 9282. Examen TIC A2 2013. Promocion interna";
 preguntaids[52] = 9282


//  Id pregunta: 3720 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Qu&eacute; debe contener de forma general un Plan de Contingencia (tambi&eacute;n denominado Plan de Desastre)?:";
 choices[53]= new Array();
 choices[53][0] = "Plan de viabilidad, procedimientos de emergencia ante fallos, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[53][1] = "Procedimientos de actuaci&oacute;n en caso de desastre, plan de copias de seguridad o de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[53][2] = "An&aacute;lisis de riesgos inform&aacute;ticos, plan de viabilidad, procedimientos de activaci&oacute;n en caso de desastre, plan de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[53][3] = "Plan de activaci&oacute;n de emergencia, procedimientos de emergencia ante fallos y procedimientos de traslado a instalaci&oacute;n alternativa";
 answers[53] = 1;
 units[53] = ['86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3720. ";
 preguntaids[53] = 3720


//  Id pregunta: 4739 Año de creación de pregunta: 2002
 questions[54]= "55)  El protocolo de control de enlace normalizado por ISO y que corresponde exclusivamente al nivel 2 de su modelo de referencia es el:";
 choices[54]= new Array();
 choices[54][0] = "37288";
 choices[54][1] = "37316";
 choices[54][2] = "37347";
 choices[54][3] = "37377";
 answers[54] = 0;
 units[54] = ['100'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4739. ";
 preguntaids[54] = 4739


//  Id pregunta: 9725 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[55]= new Array();
 choices[55][0] = "I.413";
 choices[55][1] = "I.411";
 choices[55][2] = "I.431";
 choices[55][3] = "I.314";
 answers[55] = 0;
 units[55] = ['110'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 9725. ";
 preguntaids[55] = 9725


//  Id pregunta: 4527 Año de creación de pregunta: 2002
 questions[56]= "57)  Dentro del modelo OSI la funci&oacute;n de 'permitir a un usuario entrar en un sistema remoto a tiempo compartido, o transferir ficheros entre dos m&aacute;quinas', corresponde al nivel:";
 choices[56]= new Array();
 choices[56][0] = "Nivel de red";
 choices[56][1] = "Nivel de transporte";
 choices[56][2] = "Nivel de sesi&oacute;n";
 choices[56][3] = "Nivel de presentaci&oacute;n";
 answers[56] = 2;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4527. ";
 preguntaids[56] = 4527


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[57][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[57][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[57][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[57] = 2;
 units[57] = ['7'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 206. Ley 39/2015";
 preguntaids[57] = 206


//  Id pregunta: 10772 Año de creación de pregunta: 2015
 questions[58]= "59)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[58]= new Array();
 choices[58][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[58][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[58][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[58][3] = "Todas las anteriores son falsas";
 answers[58] = 0;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 10772. ";
 preguntaids[58] = 10772


//  Id pregunta: 2650 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;ntos s&iacute;mbolos diferentes pueden representarse en EBCDIC?";
 choices[59]= new Array();
 choices[59][0] = "128";
 choices[59][1] = "64";
 choices[59][2] = "256";
 choices[59][3] = "512";
 answers[59] = 2;
 units[59] = ['51'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2650. ";
 preguntaids[59] = 2650


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[60]= new Array();
 choices[60][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[60][1] = "Directiva 2004/113/CE del Consejo.";
 choices[60][2] = "Todas son correctas.";
 choices[60][3] = "Todas son falsas.";
 answers[60] = 2;
 units[60] = ['14'];
 blocks[60] = ['A3'];
 comments[60] = "Id Pregunta: 385. Pol&iacute;ticas de igualdad";
 preguntaids[60] = 385


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[61]= "62)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[61]= new Array();
 choices[61][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[61][1] = "Unanimidad.";
 choices[61][2] = "Mayor&iacute;a cualificada.";
 choices[61][3] = "Mayor&iacute;a simple.";
 answers[61] = 3;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 187. Uni&oacute;n Europea";
 preguntaids[61] = 187


//  Id pregunta: 5082 Año de creación de pregunta: 2002
 questions[62]= "63)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?:";
 choices[62]= new Array();
 choices[62][0] = "No me afecta para nada";
 choices[62][1] = "La LSSI es aplicable";
 choices[62][2] = "S&oacute;lo para la publicidad";
 choices[62][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[62] = 1;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 5082. ";
 preguntaids[62] = 5082


//  Id pregunta: 9392 Año de creación de pregunta: 2014
 questions[63]= "64)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[63]= new Array();
 choices[63][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[63][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[63][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[63][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[63] = 2;
 units[63] = ['110'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9392. Examen TIC A2  2013";
 preguntaids[63] = 9392


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[64]= "65)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[64]= new Array();
 choices[64][0] = "Tres a&ntilde;os.";
 choices[64][1] = "Dos a&ntilde;os y medio.";
 choices[64][2] = "Cinco a&ntilde;os.";
 choices[64][3] = "Seis a&ntilde;os.";
 answers[64] = 2;
 units[64] = ['5'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 111. Uni&oacute;n Europea";
 preguntaids[64] = 111


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[65]= "66)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[65]= new Array();
 choices[65][0] = "El 23 de julio de 1952.";
 choices[65][1] = "El 18 de abril de 1951.";
 choices[65][2] = "El 16 de abril de 1948.";
 choices[65][3] = "d)Ninguna de las respuestas son correctas.";
 answers[65] = 0;
 units[65] = ['5'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 169. Uni&oacute;n Europea";
 preguntaids[65] = 169


//  Id pregunta: 9251 Año de creación de pregunta: 2014
 questions[66]= "67)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[66]= new Array();
 choices[66][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[66][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[66][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[66][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[66] = 1;
 units[66] = ['91'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 9251. Examen TIC A2 2013";
 preguntaids[66] = 9251


//  Id pregunta: 5361 Año de creación de pregunta: 2006
 questions[67]= "68)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[67]= new Array();
 choices[67][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[67][1] = "Hacer una copia de seguridad de todos los datos";
 choices[67][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[67][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[67] = 2;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5361. ";
 preguntaids[67] = 5361


//  Id pregunta: 1987 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una de las premisas que tiene que lograr un Sistema Operativo para ejecutar correctamente las secciones cr&iacute;ticas de sus procesos:";
 choices[68]= new Array();
 choices[68][0] = "Exclusi&oacute;n mutua";
 choices[68][1] = "Progreso";
 choices[68][2] = "Espera limitada";
 choices[68][3] = "Inclusi&oacute;n indefinida";
 answers[68] = 3;
 units[68] = ['56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1987. ";
 preguntaids[68] = 1987


//  Id pregunta: 7310 Año de creación de pregunta: 2010
 questions[69]= "70)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[69]= new Array();
 choices[69][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[69][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[69][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[69][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[69] = 1;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 7310. ";
 preguntaids[69] = 7310


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[70]= "71)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[70]= new Array();
 choices[70][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[70][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[70][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[70][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[70] = 2;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 242. Ley 39/2015";
 preguntaids[70] = 242


//  Id pregunta: 3107 Año de creación de pregunta: 2002
 questions[71]= "72)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[71]= new Array();
 choices[71][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[71][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[71][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[71][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[71] = 0;
 units[71] = ['60'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3107. ";
 preguntaids[71] = 3107


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[72]= "73)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[72]= new Array();
 choices[72][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[72][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[72][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[72][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[72] = 3;
 units[72] = ['11'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 324. Presupuestos generales";
 preguntaids[72] = 324


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[73]= new Array();
 choices[73][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[73][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[73][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[73][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[73] = 0;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 785. Reglamento 910/2014";
 preguntaids[73] = 785


//  Id pregunta: 9431 Año de creación de pregunta: 2014
 questions[74]= "75)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[74]= new Array();
 choices[74][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[74][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[74][2] = "Cuando ha recibido toda la trama";
 choices[74][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[74] = 0;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 9431. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";
 preguntaids[74] = 9431


