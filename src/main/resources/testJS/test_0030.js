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
//  Id pregunta: 8577 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[0]= new Array();
 choices[0][0] = "Con CPU particionada";
 choices[0][1] = "Con m&uacute;ltiples ALUS";
 choices[0][2] = "Como A) y como B)";
 choices[0][3] = "Ninguna respuesta es correcta";
 answers[0] = 2;
 units[0] = ['49'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8577. ";
 preguntaids[0] = 8577


//  Id pregunta: 10267 Año de creación de pregunta: 2015
 questions[1]= "2)  La definici&oacute;n de requerimientos funcionales para un nuevo servicio es parte de:";
 choices[1]= new Array();
 choices[1][0] = "Operaci&oacute;n del Servicio: Gesti&oacute;n de Aplicaciones";
 choices[1][1] = "Estrategia del Servicio: Gesti&oacute;n de la Cartera de Servicios";
 choices[1][2] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de la Arquitectura Tecnol&oacute;gica";
 choices[1][3] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de Soluciones del Servicio";
 answers[1] = 3;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10267. ITIL v3";
 preguntaids[1] = 10267


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[2]= "3)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[2]= new Array();
 choices[2][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[2][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[2][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[2][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[2] = 2;
 units[2] = ['89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 820. Junta de Extremadura A1 2015";
 preguntaids[2] = 820


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[3]= "4)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[3][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[3][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[3][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[3] = 3;
 units[3] = ['14'];
 blocks[3] = ['A3'];
 comments[3] = "Id Pregunta: 369. Pol&iacute;ticas de igualdad";
 preguntaids[3] = 369


//  Id pregunta: 1615 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de los siguientes controles es el m&aacute;s cr&iacute;tico sobre las actividades de administraci&oacute;n de bases de datos:";
 choices[4]= new Array();
 choices[4][0] = "Aprobaci&oacute;n de las actividades de Administrador de bases de datos";
 choices[4][1] = "Segregaci&oacute;n de tareas";
 choices[4][2] = "Revisi&oacute;n de logs de acceso y actividades";
 choices[4][3] = "Revisi&oacute;n del uso de las herramientas del Sistema Gestor de Base de Datos (SGBD)";
 answers[4] = 1;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1615. ";
 preguntaids[4] = 1615


//  Id pregunta: 4366 Año de creación de pregunta: 2004
 questions[5]= "6)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[5]= new Array();
 choices[5][0] = "El balanceador de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[5][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[5][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[5][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[5] = 1;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4366. ";
 preguntaids[5] = 4366


//  Id pregunta: 3534 Año de creación de pregunta: 2004
 questions[6]= "7)  La metodolog&iacute;a METRICA V3 considera que la t&eacute;cnica de estimaci&oacute;n del esfuerzo m&aacute;s adecuada en el desarrollo del software es:";
 choices[6]= new Array();
 choices[6][0] = "La t&eacute;cnica de los puntos de funci&oacute;n poligonial";
 choices[6][1] = "La t&eacute;cnica de los puntos de funci&oacute;n 3D";
 choices[6][2] = "La t&eacute;cnica de los puntos caracter&iacute;sticos";
 choices[6][3] = "La t&eacute;cnica de los puntos de funci&oacute;n";
 answers[6] = 3;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3534. Pregunta TIC-B 2004";
 preguntaids[6] = 3534


//  Id pregunta: 1518 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;ntas direcciones IP podr&aacute;n asignarse en la subred 136.145.9.32/28, sin considerar las direcciones de subred y de broadcast?";
 choices[7]= new Array();
 choices[7][0] = "256";
 choices[7][1] = "14";
 choices[7][2] = "16";
 choices[7][3] = "Es una direcci&oacute;n no enrutable.";
 answers[7] = 1;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1518. ";
 preguntaids[7] = 1518


//  Id pregunta: 2923 Año de creación de pregunta: 2002
 questions[8]= "9)  La arquitectura RISC:";
 choices[8]= new Array();
 choices[8][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[8][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[8][2] = "No es adaptable al sector de los microordenadores";
 choices[8][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[8] = 3;
 units[8] = ['50', '51'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2923. ";
 preguntaids[8] = 2923


//  Id pregunta: 4424 Año de creación de pregunta: 2005
 questions[9]= "10)  La intrusi&oacute;n de un caballo de troya (Trojan Horse) en un ordenador puede afectar, en primer lugar a:";
 choices[9]= new Array();
 choices[9][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[9][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[9][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[9][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[9] = 0;
 units[9] = ['120'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4424. ";
 preguntaids[9] = 4424


//  Id pregunta: 4695 Año de creación de pregunta: 2002
 questions[10]= "11)  El nivel de sesi&oacute;n del modelo de referencia OSI :";
 choices[10]= new Array();
 choices[10][0] = "Permite a un usuario que la sintaxis y la sem&aacute;ntica del mensaje sea entendida por el destinatario";
 choices[10][1] = "Se encarga de coordinar aplicaciones como el correo electr&oacute;nico o la transferencia de documentos";
 choices[10][2] = "Permite a un usuario entrar en un sistema remoto y, si es necesario, transferir ficheros entre dichos sistemas";
 choices[10][3] = "Asegura que todos los fragmentos del mensaje lleguen a su destino";
 answers[10] = 2;
 units[10] = ['105'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4695. ";
 preguntaids[10] = 4695


//  Id pregunta: 7617 Año de creación de pregunta: 2010
 questions[11]= "12)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtual de 2^20 y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos de p&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[11]= new Array();
 choices[11][0] = "32 kB.";
 choices[11][1] = "4 MB.";
 choices[11][2] = "1 MB.";
 choices[11][3] = "8 kB";
 answers[11] = 0;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7617. Map 2006";
 preguntaids[11] = 7617


//  Id pregunta: 7042 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[12]= new Array();
 choices[12][0] = "No existen clases sin instancias";
 choices[12][1] = "Invisible";
 choices[12][2] = "Hu&eacute;rfana";
 choices[12][3] = "Abstracta";
 answers[12] = 3;
 units[12] = ['85'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7042. ";
 preguntaids[12] = 7042


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[13]= "14)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[13]= new Array();
 choices[13][0] = "La Comisi&oacute;n Europea.";
 choices[13][1] = "El Consejo Europeo.";
 choices[13][2] = "El Consejo de Europa.";
 choices[13][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[13] = 0;
 units[13] = ['5'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[13] = 130


//  Id pregunta: 1029 Año de creación de pregunta: 2016
 questions[14]= "15)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[14]= new Array();
 choices[14][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[14][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[14][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[14][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[14] = 0;
 units[14] = ['4', '7', '8', '9'];
 blocks[14] = ['A1', 'A2'];
 comments[14] = "Id Pregunta: 1029. Ley 40/2015";
 preguntaids[14] = 1029


//  Id pregunta: 7149 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;ntas pautas se definen en total en las gu&iacute;as WCAG 2.0?";
 choices[15]= new Array();
 choices[15][0] = "12";
 choices[15][1] = "14";
 choices[15][2] = "25";
 choices[15][3] = "81";
 answers[15] = 0;
 units[15] = ['42'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 7149. ";
 preguntaids[15] = 7149


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[16]= new Array();
 choices[16][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[16][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[16][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[16][3] = "Sancionar y publicar las leyes.";
 answers[16] = 2;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[16] = 72


//  Id pregunta: 1748 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale a qu&eacute; se denomina Single sign-on (SSO):";
 choices[17]= new Array();
 choices[17][0] = "Es un protocolo de cifrado para autenticar al usuario.";
 choices[17][1] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[17][2] = "Esta asociado al cifrado basado en Secure Socket Layers (SSL).";
 choices[17][3] = "Permite a trav&eacute;s del protocolo de red HTTPS identificar a los usuarios en el acceso a servicios Web.";
 answers[17] = 1;
 units[17] = ['123'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1748. ";
 preguntaids[17] = 1748


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[18]= "19)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[18]= new Array();
 choices[18][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[18][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[18][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[18][3] = "todas son correctas";
 answers[18] = 3;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 230. Ley 39/2015";
 preguntaids[18] = 230


//  Id pregunta: 8436 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[19]= new Array();
 choices[19][0] = "Conservaci&oacute;n";
 choices[19][1] = "Confidencialidad";
 choices[19][2] = "Trazabilidad";
 choices[19][3] = "Todas las anteriores lo son";
 answers[19] = 3;
 units[19] = ['2'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 8436. ";
 preguntaids[19] = 8436


//  Id pregunta: 4897 Año de creación de pregunta: 2002
 questions[20]= "21)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[20]= new Array();
 choices[20][0] = "Nivel de red";
 choices[20][1] = "Nivel de transferencia de ficheros";
 choices[20][2] = "Nivel de transporte";
 choices[20][3] = "Nivel de aplicaci&oacute;n";
 answers[20] = 3;
 units[20] = ['105'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4897. ";
 preguntaids[20] = 4897


//  Id pregunta: 2417 Año de creación de pregunta: 2006
 questions[21]= "22)  La auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, o triple E, ha sido bautizada por la United Kingdom Audit Office como:";
 choices[21]= new Array();
 choices[21][0] = "VFN";
 choices[21][1] = "VAN";
 choices[21][2] = "TIR";
 choices[21][3] = "VFM";
 answers[21] = 3;
 units[21] = ['36'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2417. ";
 preguntaids[21] = 2417


//  Id pregunta: 4678 Año de creación de pregunta: 2002
 questions[22]= "23)  Dentro del modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se denominan primitivas a:";
 choices[22]= new Array();
 choices[22][0] = "Los servicios que al nivel inferior proporciona al nivel superior";
 choices[22][1] = "La interacci&oacute;n entre niveles adyacentes";
 choices[22][2] = "Los puntos de acceso al servicio";
 choices[22][3] = "Los multiples identificadores de conexi&oacute;n";
 answers[22] = 0;
 units[22] = ['105'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4678. ";
 preguntaids[22] = 4678


//  Id pregunta: 10969 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[23]= new Array();
 choices[23][0] = "El Portal de la Transparencia depende del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[23][1] = "La solicitud de acceso a la informaci&oacute;n no requerir&aacute; la identificaci&oacute;n del solicitante.";
 choices[23][2] = "No se admitir&aacute;n solicitudes de informaci&oacute;n para cuya divulgaci&oacute;n sea necesaria una acci&oacute;n previa de reelaboraci&oacute;n.";
 choices[23][3] = "La resoluci&oacute;n de la petici&oacute;n de acceso deber&aacute; notificarse al solicitante en el plazo m&aacute;ximo de 15 d&iacute;as h&aacute;biles.";
 answers[23] = 2;
 units[23] = ['22'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 10969. ";
 preguntaids[23] = 10969


//  Id pregunta: 5142 Año de creación de pregunta: 2003
 questions[24]= "25)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, sin poner una marca de copiado a los archivos se habla de:";
 choices[24]= new Array();
 choices[24][0] = "Copia de seguridad incremental.";
 choices[24][1] = "Copia de seguridad diaria.";
 choices[24][2] = "Copia de seguridad intermedia.";
 choices[24][3] = "Copia de seguridad diferencial.";
 answers[24] = 3;
 units[24] = ['100'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 5142. ";
 preguntaids[24] = 5142


//  Id pregunta: 4267 Año de creación de pregunta: 2006
 questions[25]= "26)  Indicar la falsa";
 choices[25]= new Array();
 choices[25][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[25][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[25][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[25][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[25] = 1;
 units[25] = ['81'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 4267. ";
 preguntaids[25] = 4267


//  Id pregunta: 10659 Año de creación de pregunta: 2015
 questions[26]= "27)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es regulada por el Gobierno para la administraci&oacute;n del espectro?";
 choices[26]= new Array();
 choices[26][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[26][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[26][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[26][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[26] = 1;
 units[26] = ['121'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10659. ";
 preguntaids[26] = 10659


//  Id pregunta: 8516 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[27]= new Array();
 choices[27][0] = "Apache Axis2";
 choices[27][1] = "Hibernate";
 choices[27][2] = "Struts";
 choices[27][3] = "TopLink";
 answers[27] = 0;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8516. ";
 preguntaids[27] = 8516


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[28]= new Array();
 choices[28][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[28][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[28][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[28][3] = "todas son correctas";
 answers[28] = 1;
 units[28] = ['4', '7', '8', '9'];
 blocks[28] = ['A1', 'A2'];
 comments[28] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[28] = 974


//  Id pregunta: 3359 Año de creación de pregunta: 2006
 questions[29]= "30)  Un sistema multiusuario es:";
 choices[29]= new Array();
 choices[29][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[29][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[29][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[29][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[29] = 2;
 units[29] = ['50'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3359. ";
 preguntaids[29] = 3359


//  Id pregunta: 5932 Año de creación de pregunta: 2007
 questions[30]= "31)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[30]= new Array();
 choices[30][0] = "Acoplamiento de control.";
 choices[30][1] = "Acoplamiento por estampado.";
 choices[30][2] = "Acoplamiento por contenido.";
 choices[30][3] = "Acoplamiento externo.";
 answers[30] = 2;
 units[30] = ['89'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 5932. examen TIC 2006";
 preguntaids[30] = 5932


//  Id pregunta: 5245 Año de creación de pregunta: 2006
 questions[31]= "32)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[31]= new Array();
 choices[31][0] = "un proxy de correo";
 choices[31][1] = "un cache web";
 choices[31][2] = "un server web";
 choices[31][3] = "todas las anteriores";
 answers[31] = 3;
 units[31] = ['120'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5245. ";
 preguntaids[31] = 5245


//  Id pregunta: 5000 Año de creación de pregunta: 2002
 questions[32]= "33)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[32]= new Array();
 choices[32][0] = "GSM";
 choices[32][1] = "TACS";
 choices[32][2] = "NMT";
 choices[32][3] = "Trunking";
 answers[32] = 3;
 units[32] = ['117'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5000. ";
 preguntaids[32] = 5000


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Org&aacute;nica.";
 choices[33][1] = "Contable.";
 choices[33][2] = "Econ&oacute;mica.";
 choices[33][3] = "Por programas.";
 answers[33] = 2;
 units[33] = ['11'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 289. Presupuestos generales";
 preguntaids[33] = 289


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[34]= new Array();
 choices[34][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[34][1] = "Publicidad de las normas.";
 choices[34][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[34][3] = "Coordinaci&oacute;n normativa.";
 answers[34] = 1;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 73. Constituci&oacute;n de 1978";
 preguntaids[34] = 73


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[35]= new Array();
 choices[35][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[35][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[35][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[35][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[35] = 2;
 units[35] = ['22'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 515. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[35] = 515


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[36]= "37)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[36]= new Array();
 choices[36][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[36][1] = "Programa de cartas de servicios";
 choices[36][2] = "Programa para la mejora continua de las organizaciones.";
 choices[36][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[36] = 2;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 454. Direcci&oacute;n p&uacute;blica";
 preguntaids[36] = 454


//  Id pregunta: 9903 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[37]= new Array();
 choices[37][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[37][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[37][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[37][3] = "Todas las anteriores.";
 answers[37] = 3;
 units[37] = ['7', '19'];
 blocks[37] = ['A2', 'A4'];
 comments[37] = "Id Pregunta: 9903. ";
 preguntaids[37] = 9903


//  Id pregunta: 4143 Año de creación de pregunta: 2003
 questions[38]= "39)  Tenemos dos discos sobre los que est&aacute; instalada una base de datos, y adem&aacute;s en el disco 2 se ubica el fichero de log backup. Sabiendo que la copia de la base de datos es posterior a la del fichero de log cual ser&iacute;a la forma de proceder si el disco 2 cae";
 choices[38]= new Array();
 choices[38][0] = "Restaurar la base completa con su &uacute;ltima copia y rehacer las transacciones manualmente a partir de esa fecha";
 choices[38][1] = "Restaurar la base y recuperar autom&aacute;ticamente del fichero de log";
 choices[38][2] = "Restaurar la parte de las tablas y ficheros del disco dos y luego manualmente rehacer las transcciones";
 choices[38][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[38] = 0;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4143. ";
 preguntaids[38] = 4143


//  Id pregunta: 5152 Año de creación de pregunta: 2003
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[39]= new Array();
 choices[39][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[39][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[39][2] = "El cable UTP de categor&iacute;a 3";
 choices[39][3] = "El cable STP de 150Ohm";
 answers[39] = 1;
 units[39] = ['104'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5152. ";
 preguntaids[39] = 5152


//  Id pregunta: 5332 Año de creación de pregunta: 2006
 questions[40]= "41)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[40]= new Array();
 choices[40][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[40][1] = "huellas del cerebro (brain fingerprinting)";
 choices[40][2] = "ingenier&iacute;a social";
 choices[40][3] = "subterfugio";
 answers[40] = 2;
 units[40] = ['120'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5332. ";
 preguntaids[40] = 5332


//  Id pregunta: 10489 Año de creación de pregunta: 2015
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos NO est&aacute; desarrollado en Java?";
 choices[41]= new Array();
 choices[41][0] = "Liferay";
 choices[41][1] = "Alfresco";
 choices[41][2] = "Drupal";
 choices[41][3] = "OpenCMS";
 answers[41] = 2;
 units[41] = ['99'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10489. ";
 preguntaids[41] = 10489


//  Id pregunta: 3535 Año de creación de pregunta: 2004
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida, hace enfasis en el control de riesgos?";
 choices[42]= new Array();
 choices[42][0] = "Espiral";
 choices[42][1] = "Cascada";
 choices[42][2] = "Ambos";
 choices[42][3] = "Ninguno";
 answers[42] = 0;
 units[42] = ['82'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3535. Pregunta TIC-B 2003";
 preguntaids[42] = 3535


//  Id pregunta: 7138 Año de creación de pregunta: 2010
 questions[43]= "44)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[43]= new Array();
 choices[43][0] = "150.001 hasta 600.000 euros";
 choices[43][1] = "150.001 hasta 300.000 euros";
 choices[43][2] = "300.001 hasta 600.000 euros";
 choices[43][3] = "600.001 hasta 1,000.000 euros";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 7138. Ley 34/2002, art&iacute;culo 39";
 preguntaids[43] = 7138


//  Id pregunta: 6003 Año de creación de pregunta: 2003
 questions[44]= "45)  Seg&uacute;n la arquitectura est&aacute;ndar de los SGBD, ANSI/X3/SPARC &iquest;en qu&eacute; nivel se define el esquema de la base dedatos?:";
 choices[44]= new Array();
 choices[44][0] = "Nivel conceptual.";
 choices[44][1] = "Nivel f&iacute;sico.";
 choices[44][2] = "Nivel de aplicaci&oacute;n.";
 choices[44][3] = "Nivel l&oacute;gico.";
 answers[44] = 0;
 units[44] = ['60'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6003. TIC B 2007";
 preguntaids[44] = 6003


//  Id pregunta: 2739 Año de creación de pregunta: 2002
 questions[45]= "46)  El acr&oacute;nimo XML corresponde a:";
 choices[45]= new Array();
 choices[45][0] = "Extensible Markup Language";
 choices[45][1] = "Extended Markup Language";
 choices[45][2] = "Expressions Markup Language";
 choices[45][3] = "Extension Markup Language";
 answers[45] = 0;
 units[45] = ['74'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2739. ";
 preguntaids[45] = 2739


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[46]= "47)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[46]= new Array();
 choices[46][0] = "l Consejo General del Poder Judicial";
 choices[46][1] = "El pleno de Tribunal Constitucional";
 choices[46][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[46][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[46] = 3;
 units[46] = ['1'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 9. Constituci&oacute;n de 1978";
 preguntaids[46] = 9


//  Id pregunta: 4605 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Qu&eacute; es fibra oscura?:";
 choices[47]= new Array();
 choices[47][0] = "Fibra &oacute;ptica que ha perdido sus propiedades y que se ha vuelto opaca";
 choices[47][1] = "Ramal de fibra &oacute;ptica que alquila un particular a un Operador de Telecomunicaciones sin electr&oacute;nica u optr&oacute;nica";
 choices[47][2] = "Un terminador de fibra &oacute;ptica para igualar la impedancia de la l&iacute;nea";
 choices[47][3] = "Fibra &oacute;ptica con impurezas";
 answers[47] = 1;
 units[47] = ['106'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4605. ";
 preguntaids[47] = 4605


//  Id pregunta: 6050 Año de creación de pregunta: 2003
 questions[48]= "49)  El &ldquo;throughput&rdquo;, como medida de rendimiento de un sistema inform&aacute;tico, se define mejor como:";
 choices[48]= new Array();
 choices[48][0] = "Tiempo transcurrido entre la realizaci&oacute;n de una petici&oacute;n al sistema y la recepci&oacute;n de la respuesta.";
 choices[48][1] = "El n&uacute;mero de usuarios simult&aacute;neos trabajando en el sistema.";
 choices[48][2] = "El porcentaje de tiempo de los dispositivos est&aacute;n trabajando en tareas del sistema, no imputables a ning&uacute;n trabajo de usuario.";
 choices[48][3] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado. Por ejemplo, transacciones por segundo.";
 answers[48] = 3;
 units[48] = ['56'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6050. TIC B 2007";
 preguntaids[48] = 6050


//  Id pregunta: 4717 Año de creación de pregunta: 2002
 questions[49]= "50)  HDLC es un protocolo:";
 choices[49]= new Array();
 choices[49][0] = "De enlace, orientado a car&aacute;cter";
 choices[49][1] = "De enlace orientado a bit";
 choices[49][2] = "F&iacute;sico, en serie";
 choices[49][3] = "F&iacute;sico, en paralelo";
 answers[49] = 1;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4717. ";
 preguntaids[49] = 4717


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[50]= "51)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[50]= new Array();
 choices[50][0] = "solo mediante ley";
 choices[50][1] = "reglamentariamente";
 choices[50][2] = "mediante ley o reglamentariamente";
 choices[50][3] = "ninguna es correcta";
 answers[50] = 1;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 213. Ley 39/2015";
 preguntaids[50] = 213


//  Id pregunta: 7643 Año de creación de pregunta: 2010
 questions[51]= "52)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NO garantiza:";
 choices[51]= new Array();
 choices[51][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadores registrados a nivel nacional.";
 choices[51][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red p&uacute;blica de comunicaciones electr&oacute;nicas desde una ubicaci&oacute;n fija siempre que sus solicitudes se consideren razonables en los t&eacute;rminos que mediante real decreto se determinen y que, incluir&aacute;n, entre otros factores, el coste de su provisi&oacute;n.";
 choices[51][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, que se actualice, como m&iacute;nimo, una vez al a&ntilde;o.";
 choices[51][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[51] = 0;
 units[51] = ['121'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7643. Similar a Map 2006";
 preguntaids[51] = 7643


//  Id pregunta: 3333 Año de creación de pregunta: 2004
 questions[52]= "53)  &iquest;Qu&eacute; es un JNI?";
 choices[52]= new Array();
 choices[52][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[52][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[52][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[52][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[52] = 3;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3333. ";
 preguntaids[52] = 3333


//  Id pregunta: 9688 Año de creación de pregunta: 2014
 questions[53]= "54)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[53][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[53][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[53][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[53] = 3;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9688. ";
 preguntaids[53] = 9688


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[54]= new Array();
 choices[54][0] = "En t&iacute;tulos-valores.";
 choices[54][1] = "Las respuestas a) y b) son correctas.";
 choices[54][2] = "Las respuestas a) y b) no son correctas.";
 choices[54][3] = "En cuenta.";
 answers[54] = 1;
 units[54] = ['11'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 316. Presupuestos generales";
 preguntaids[54] = 316


//  Id pregunta: 1888 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA, en relaci&oacute;n a los beneficios que aporta la buena Gobernabilidad de las TIC?:";
 choices[55]= new Array();
 choices[55][0] = "Mejora la calidad del servicio";
 choices[55][1] = "Optimiza los costes";
 choices[55][2] = "Mejora la transparencia";
 choices[55][3] = "Reduce los riesgos";
 answers[55] = 2;
 units[55] = ['101'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1888. ";
 preguntaids[55] = 1888


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[56]= "57)  En lo relativo a la pensi&oacute;n de jubilaci&oacute;n y envejecimiento activo, seg&uacute;n el art&iacute;culo 214 del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social:";
 choices[56]= new Array();
 choices[56][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[56][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[56][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[56][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[56] = 0;
 units[56] = ['14'];
 blocks[56] = ['A3'];
 comments[56] = "Id Pregunta: 358. Estado del Bienestar";
 preguntaids[56] = 358


//  Id pregunta: 5141 Año de creación de pregunta: 2004
 questions[57]= "58)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[57]= new Array();
 choices[57][0] = "Uso excesivo de CPU";
 choices[57][1] = "Acceso no autorizado a datos";
 choices[57][2] = "a) y b)";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 1;
 units[57] = ['119'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5141. ";
 preguntaids[57] = 5141


//  Id pregunta: 6408 Año de creación de pregunta: 2003
 questions[58]= "59)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[58]= new Array();
 choices[58][0] = "EJB Container y Web Container";
 choices[58][1] = "EJB Container, Web Container y Application Client Container";
 choices[58][2] = "b) y Applet Container";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = 2;
 units[58] = ['64'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6408. ";
 preguntaids[58] = 6408


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[59]= new Array();
 choices[59][0] = "Los principios rectores";
 choices[59][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[59][2] = "Los hitos para su desarrollo gradual";
 choices[59][3] = "Todos los anteriores";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 460. Estrategia TIC";
 preguntaids[59] = 460


//  Id pregunta: 10520 Año de creación de pregunta: 2015
 questions[60]= "61)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[60]= new Array();
 choices[60][0] = "LSR";
 choices[60][1] = "LER";
 choices[60][2] = "LSP";
 choices[60][3] = "FEC";
 answers[60] = 0;
 units[60] = ['107'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10520. ";
 preguntaids[60] = 10520


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[61]= "62)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[61]= new Array();
 choices[61][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[61][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[61][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[61][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[61] = 0;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[61] = 69


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[62]= "63)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[62]= new Array();
 choices[62][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[62][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[62][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[62][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[62] = 0;
 units[62] = ['7'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[62] = 254


//  Id pregunta: 1428 Año de creación de pregunta: 2016
 questions[63]= "64)  El Gobierno cesa, seg&uacute;n el art&iacute;culo 101 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[63]= new Array();
 choices[63][0] = "Antes de la celebraci&oacute;n de elecciones generales.";
 choices[63][1] = "En los casos de p&eacute;rdida de la confianza del Congreso de los Diputados y del Gobierno de la naci&oacute;n.";
 choices[63][2] = "Por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[63][3] = "Cu&aacute;ndo se den las causas previstas en el art&iacute;culo 4 de la Constituci&oacute;n espa&ntilde;ola.";
 answers[63] = 2;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 1428. ";
 preguntaids[63] = 1428


//  Id pregunta: 6419 Año de creación de pregunta: 2003
 questions[64]= "65)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[64]= new Array();
 choices[64][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[64][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[64][2] = "A y B son correctas";
 choices[64][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[64] = 2;
 units[64] = ['10'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 6419. ";
 preguntaids[64] = 6419


//  Id pregunta: 8063 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[65]= new Array();
 choices[65][0] = "Seguridad transversal";
 choices[65][1] = "Gesti&oacute;n de riesgos";
 choices[65][2] = "L&iacute;neas de defensa";
 choices[65][3] = "Funci&oacute;n diferenciada";
 answers[65] = 0;
 units[65] = ['46'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 8063. ";
 preguntaids[65] = 8063


//  Id pregunta: 10081 Año de creación de pregunta: 2015
 questions[66]= "67)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[66]= new Array();
 choices[66][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[66][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[66][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[66][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[66] = 2;
 units[66] = ['105'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 10081. Examen TIC A2 2014";
 preguntaids[66] = 10081


//  Id pregunta: 4334 Año de creación de pregunta: 2004
 questions[67]= "68)  Indique a qu&eacute; velocidad aproximada dentro de la Jerarqu&iacute;a Digital S&iacute;ncrona corresponde a un contenedor OC-3 de la Jerarqu&iacute;a SONET:";
 choices[67]= new Array();
 choices[67][0] = "52 Mbps";
 choices[67][1] = "155 Mbps";
 choices[67][2] = "384 Mpbs";
 choices[67][3] = "Ninguno de los anteriores";
 answers[67] = 1;
 units[67] = ['110'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4334. ";
 preguntaids[67] = 4334


//  Id pregunta: 2223 Año de creación de pregunta: 2002
 questions[68]= "69)  La escalabilidad es:";
 choices[68]= new Array();
 choices[68][0] = "Un caso particular de la portabilidad";
 choices[68][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[68][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[68][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[68] = 2;
 units[68] = ['43'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2223. ";
 preguntaids[68] = 2223


//  Id pregunta: 1350 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[69]= new Array();
 choices[69][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, solo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[69][1] = "Es uno del los ejes del modelo EFQM.";
 choices[69][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[69][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[69] = 2;
 units[69] = ['98'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 1350. ";
 preguntaids[69] = 1350


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[70]= "71)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[70]= new Array();
 choices[70][0] = "Estrasburgo.";
 choices[70][1] = "Bruselas.";
 choices[70][2] = "Luxemburgo.";
 choices[70][3] = "Holanda.";
 answers[70] = 0;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 115. Uni&oacute;n Europea";
 preguntaids[70] = 115


//  Id pregunta: 3630 Año de creación de pregunta: 2002
 questions[71]= "72)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[71]= new Array();
 choices[71][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[71][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[71][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[71][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[71] = 1;
 units[71] = ['100'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3630. ";
 preguntaids[71] = 3630


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


//  Id pregunta: 895 Año de creación de pregunta: 2016
 questions[73]= "74)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[73]= new Array();
 choices[73][0] = "192.228.0.0";
 choices[73][1] = "192.228.8.0";
 choices[73][2] = "192.228.16.0";
 choices[73][3] = "192.228.17.0";
 answers[73] = 2;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 895. Junta de Extremadura A1 2015";
 preguntaids[73] = 895


//  Id pregunta: 1050 Año de creación de pregunta: 2016
 questions[74]= "75)  Los certificados de clave p&uacute;blica";
 choices[74]= new Array();
 choices[74][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[74][1] = "Tienen en torno a 1 Mbytes.";
 choices[74][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA.";
 choices[74][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[74] = 0;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1050. ";
 preguntaids[74] = 1050


