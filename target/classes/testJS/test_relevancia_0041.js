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
//  Id pregunta: 6012 Año de creación de pregunta: 2003
 questions[0]= "1)  En M&eacute;trica 3, entre los productos finales obtenidos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n (PSI) NO se incluye:";
 choices[0]= new Array();
 choices[0][0] = "La arquitectura de informaci&oacute;n.";
 choices[0][1] = "La arquitectura tecnol&oacute;gica.";
 choices[0][2] = "El modelo de sistemas de informaci&oacute;n.";
 choices[0][3] = "El an&aacute;lisis del sistema de informaci&oacute;n.";
 answers[0] = 3;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6012. TIC B 2007";
 preguntaids[0] = 6012


//  Id pregunta: 9799 Año de creación de pregunta: 2015
 questions[1]= "2)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[1]= new Array();
 choices[1][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[1][1] = "Es la base legal del programa ISA.";
 choices[1][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[1][3] = "La Decisi&oacute;n establece un programa de medidas para la seguridad en las administraciones p&uacute;blicas europeas.";
 answers[1] = 1;
 units[1] = ['43', '19'];
 blocks[1] = ['B1', 'A4'];
 comments[1] = "Id Pregunta: 9799. ";
 preguntaids[1] = 9799


//  Id pregunta: 8007 Año de creación de pregunta: 2011
 questions[2]= "3)  Entre las t&eacute;cnicas m&aacute;s com&uacute;nmente usadas en Datamining, &iquest;cu&aacute;l de las siguientes clasifica cada registro en un conjunto de datos basado en una combinaci&oacute;n de las clases de los k registros m&aacute;s similares a &eacute;l en un conjunto de datos hist&oacute;ricos (donde k &gt;=1)?";
 choices[2]= new Array();
 choices[2][0] = "Redes neuronales artificiales.";
 choices[2][1] = "&Aacute;rboles de decisi&oacute;n.";
 choices[2][2] = "M&eacute;todo del vecino m&aacute;s cercano.";
 choices[2][3] = "Regla de Inducci&oacute;n.";
 answers[2] = 2;
 units[2] = ['72'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8007. Examen TIC A2 2010";
 preguntaids[2] = 8007


//  Id pregunta: 10952 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Qu&eacute; normativa supondr&aacute; la aprobaci&oacute;n de una nueva ley de contratos?";
 choices[3]= new Array();
 choices[3][0] = "El Reglamento de la Intervenci&oacute;n General del Estado";
 choices[3][1] = "El Acuerdo sobre Libre Comercio de la OCDE";
 choices[3][2] = "Las nuevas Directivas europeas en materia de contrataci&oacute;n";
 choices[3][3] = "El Reglamento funcional del Tribunal Administrativo Central de Recursos Contractuales";
 answers[3] = 2;
 units[3] = ['37'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 10952. ";
 preguntaids[3] = 10952


//  Id pregunta: 7339 Año de creación de pregunta: 2010
 questions[4]= "5)  Dentro de las t&eacute;cnicas para medir la complejidad del software NO se encuentra:";
 choices[4]= new Array();
 choices[4][0] = "La t&eacute;cnica de McCabe";
 choices[4][1] = "La t&eacute;cnica de McCall";
 choices[4][2] = "La t&eacute;cnica de Halstead";
 choices[4][3] = "La t&eacute;cnica de Bang";
 answers[4] = 1;
 units[4] = ['93'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 7339. ";
 preguntaids[4] = 7339


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[5]= "6)  En M&eacute;trica v3, la elaboraci&oacute;n de un cat&aacute;logo detallado de requisitos que describa de forma precisa el sistema de informaci&oacute;n, compete a personas con perfil:";
 choices[5]= new Array();
 choices[5][0] = "Consultor.";
 choices[5][1] = "Jefe de Proyecto.";
 choices[5][2] = "Directivo.";
 choices[5][3] = "Analista.";
 answers[5] = 3;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 823. AGE A2 2015";
 preguntaids[5] = 823


//  Id pregunta: 2309 Año de creación de pregunta: 2002
 questions[6]= "7)  Si un grupo de personas constituyen una asociaci&oacute;n (por ejemplo de antiguos alumnos, o de padres de alumnos) y recaban informaci&oacute;n de car&aacute;cter personal de sus miembros, almacen&aacute;ndola en un fichero:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo deber&aacute;n registrar el fichero en la Agencia de Protecci&oacute;n de Datos si el contenido de &eacute;stos es lo suficientemente sensible";
 choices[6][1] = "Seg&uacute;n la finalidad para la que se use y seg&uacute;n el tama&ntilde;o de dicho fichero podr&aacute;n estar exentos de de registrar el fichero";
 choices[6][2] = "Tienen que registrar el fichero en la Agencia de Protecci&oacute;n de Datos";
 choices[6][3] = "Deber&iacute;an registrar el fichero, pero dado que la Agencia de Protecci&oacute;n de Datos s&oacute;lo se ocupa en la pr&aacute;ctica de grandes casos de fraude pueden pasar sin ser sancionados sin ning&uacute;n tipo de problema";
 answers[6] = 2;
 units[6] = ['35'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2309. ";
 preguntaids[6] = 2309


//  Id pregunta: 995 Año de creación de pregunta: 2016
 questions[7]= "8)  Segun la ley 40/2015 los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[7]= new Array();
 choices[7][0] = "los &oacute;rganos administrativos";
 choices[7][1] = "las entidades dependientes";
 choices[7][2] = "las unidades administrativas";
 choices[7][3] = "los servicios comunes";
 answers[7] = 2;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 995. Ley 40/2015";
 preguntaids[7] = 995


//  Id pregunta: 8539 Año de creación de pregunta: 2011
 questions[8]= "9)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[8]= new Array();
 choices[8][0] = "601,01 a 60.101,21 euros";
 choices[8][1] = "901,01 a 60.101,21 euros";
 choices[8][2] = "600 a 40.000 euros";
 choices[8][3] = "900 a 40.000 euros";
 answers[8] = 3;
 units[8] = ['35'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 8539. ";
 preguntaids[8] = 8539


//  Id pregunta: 6609 Año de creación de pregunta: 2009
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[9]= new Array();
 choices[9][0] = "Definici&oacute;n del tipo de contenido";
 choices[9][1] = "Resumen del mensaje";
 choices[9][2] = "Sello de tiempo";
 choices[9][3] = "Atributos identificativos del certificado del firmante";
 answers[9] = 2;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 6609. ";
 preguntaids[9] = 6609


//  Id pregunta: 2388 Año de creación de pregunta: 2006
 questions[10]= "11)  Cual de las siguientes funciones corresponde al &aacute;rea de Sistemas Operativos, Software Base y Sistemas Corporativos";
 choices[10]= new Array();
 choices[10][0] = "Control y monitorizaci&oacute;n de la plataforma";
 choices[10][1] = "Optimizaci&oacute;n de la operativa diaria";
 choices[10][2] = "Salvaguarda de datos.";
 choices[10][3] = "Todas ellas";
 answers[10] = 3;
 units[10] = ['30'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2388. ";
 preguntaids[10] = 2388


//  Id pregunta: 8991 Año de creación de pregunta: 2013
 questions[11]= "12)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[11]= new Array();
 choices[11][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller)";
 choices[11][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[11][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[11][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE";
 answers[11] = 0;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8991. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[11] = 8991


//  Id pregunta: 970 Año de creación de pregunta: 2016
 questions[12]= "13)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[12]= new Array();
 choices[12][0] = "personalidad jur&iacute;dica propia";
 choices[12][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[12][2] = "personalidad jur&iacute;dica plena";
 choices[12][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[12] = 1;
 units[12] = ['4', '7', '8', '9'];
 blocks[12] = ['A1', 'A2'];
 comments[12] = "Id Pregunta: 970. Ley 40/2015";
 preguntaids[12] = 970


//  Id pregunta: 1449 Año de creación de pregunta: 2016
 questions[13]= "14)  Cu&aacute;l NO es una funci&oacute;n de la Agencia de Protecci&oacute;n de Dato (entendi&eacute;ndose Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos) seg&uacute;n el art&iacute;culo 37 de la LOPD:";
 choices[13]= new Array();
 choices[13][0] = "Velar por el cumplimiento de la legislaci&oacute;n sobre protecci&oacute;n de datos y controlar su aplicaci&oacute;n.";
 choices[13][1] = "Emitir las autorizaciones previstas en la Ley o en sus disposiciones reglamentarias.";
 choices[13][2] = "Ejercer la potestad sancionadora en los t&eacute;rminos previstos.";
 choices[13][3] = "Es el &uacute;nico &oacute;rgano con la potestad de modificar la cuant&iacute;a de las sanciones.";
 answers[13] = 3;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 1449. ";
 preguntaids[13] = 1449


//  Id pregunta: 3672 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes modelos se basan en la idea 'No puedo decirte lo que quiero, pero lo reconocer&eacute; en cuanto lo vea'?:";
 choices[14]= new Array();
 choices[14][0] = "Modelo en cascada";
 choices[14][1] = "Modelo por etapas";
 choices[14][2] = "Modelo en espiral";
 choices[14][3] = "Modelo de prototipado evolutivo";
 answers[14] = 3;
 units[14] = ['82'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3672. ";
 preguntaids[14] = 3672


//  Id pregunta: 3791 Año de creación de pregunta: 2002
 questions[15]= "16)  El modelo en cascada, si hablamos de una fase en la que es necesario, aparte de otras labores, el analizar, entender y documentar el problema que el usuario trata de resolver con el sistema de informaci&oacute;n o aplicaci&oacute;n, nos estamos refiriendo a la fase de:";
 choices[15]= new Array();
 choices[15][0] = "Planificaci&oacute;n";
 choices[15][1] = "An&aacute;lisis";
 choices[15][2] = "Dise&ntilde;o";
 choices[15][3] = "Codificaci&oacute;n";
 answers[15] = 1;
 units[15] = ['82'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3791. ";
 preguntaids[15] = 3791


//  Id pregunta: 2232 Año de creación de pregunta: 2009
 questions[16]= "17)  La LOPD no es de aplicaci&oacute;n a:";
 choices[16]= new Array();
 choices[16][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[16][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[16][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[16][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[16] = 3;
 units[16] = ['35'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2232. ";
 preguntaids[16] = 2232


//  Id pregunta: 10723 Año de creación de pregunta: 2015
 questions[17]= "18)  En .NET, la biblioteca de clases";
 choices[17]= new Array();
 choices[17][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[17][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[17][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[17][3] = "Todas las anteriores son falsas.";
 answers[17] = 2;
 units[17] = ['63'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10723. ";
 preguntaids[17] = 10723


//  Id pregunta: 10621 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la Ley 9/2014, mediante Real Decreto se regular&aacute;n derechos:";
 choices[18]= new Array();
 choices[18][0] = "Continuidad servicio.";
 choices[18][1] = "Continuidad servicio y obtener compensaci&oacute;n autom&aacute;tica sin interrupci&oacute;n.";
 choices[18][2] = "Continuidad servicio y obtener compensaci&oacute;n proporcional al tiempo de interrupci&oacute;n.";
 choices[18][3] = "Continuidad servicio, sin compensaci&oacute;n.";
 answers[18] = 1;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10621. Articulo 47";
 preguntaids[18] = 10621


//  Id pregunta: 8705 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Qu&eacute; incluye Windows 8?";
 choices[19]= new Array();
 choices[19][0] = "Una nueva pantalla de Inicio.";
 choices[19][1] = "Una nueva tienda de aplicaciones.";
 choices[19][2] = "Su intefaz de usuario se ha modificado para hacerlo m&aacute;s adecuado para pantallas t&aacute;ctiles.";
 choices[19][3] = "Todas son correctas.";
 answers[19] = 3;
 units[19] = ['58'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8705. ";
 preguntaids[19] = 8705


//  Id pregunta: 5277 Año de creación de pregunta: 2006
 questions[20]= "21)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[20]= new Array();
 choices[20][0] = "html y 80";
 choices[20][1] = "http y 80";
 choices[20][2] = "http y 8080";
 choices[20][3] = "ftp y 80";
 answers[20] = 1;
 units[20] = ['113'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5277. ";
 preguntaids[20] = 5277


//  Id pregunta: 2012 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de entre las siguientes es una condici&oacute;n indispensable para la creaci&oacute;n de un fichero de las Administraciones P&uacute;blicas?:";
 choices[21]= new Array();
 choices[21][0] = "La existencia de un C&oacute;digo Tipo regulando su uso";
 choices[21][1] = "La aprobaci&oacute;n de dicha creaci&oacute;n mediante Acuerdo del Consejo de Ministros";
 choices[21][2] = "La publicaci&oacute;n de una disposici&oacute;n general en el &quot;Bolet&iacute;n Oficial del Estado&quot; o diario oficial correspondiente";
 choices[21][3] = "Una resoluci&oacute;n del Director de la Agencia de Protecci&oacute;n de Datos autoriz&aacute;ndola";
 answers[21] = 2;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2012. ";
 preguntaids[21] = 2012


//  Id pregunta: 8127 Año de creación de pregunta: 2011
 questions[22]= "23)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA:";
 choices[22]= new Array();
 choices[22][0] = "Lluirex - Valencia";
 choices[22][1] = "MAX - Madrid";
 choices[22][2] = "LinKat - Catalu&ntilde;a";
 choices[22][3] = "mEDUxa - Baleares";
 answers[22] = 3;
 units[22] = ['66'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8127. Examen TIC A2 2010 interna";
 preguntaids[22] = 8127


//  Id pregunta: 5170 Año de creación de pregunta: 2003
 questions[23]= "24)  En las redes basadas en servidores centrales que utilizan el modelo b&aacute;sico cliente-servidor:";
 choices[23]= new Array();
 choices[23][0] = "Un ordenador pone sus recursos a disposici&oacute;n del resto de ordenadores de la red, de forma que cada estaci&oacute;n recupera datos del servidor y los procesa como si fuesen locales";
 choices[23][1] = "Cada ordenador conectado a la red puede compartir la informaci&oacute;n y los recursos determinados previamente con los dem&aacute;s ordenadores de la red";
 choices[23][2] = "Los ordenadores utilizan enlaces a trav&eacute;s de los puertos serie o paralelo para transferir archivos o compartir perif&eacute;ricos";
 choices[23][3] = "Los ordenadores se encuentran conectados permanentemente entre s&iacute;, a trav&eacute;s de un sistema cerrado punto a punto";
 answers[23] = 0;
 units[23] = ['112'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5170. ";
 preguntaids[23] = 5170


//  Id pregunta: 3908 Año de creación de pregunta: 2002
 questions[24]= "25)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[24]= new Array();
 choices[24][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[24][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[24][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[24][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[24] = 1;
 units[24] = ['85', '89'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3908. ";
 preguntaids[24] = 3908


//  Id pregunta: 4083 Año de creación de pregunta: 2003
 questions[25]= "26)  El plan de sistemas de informaci&oacute;n de M&eacute;trica v3";
 choices[25]= new Array();
 choices[25][0] = "debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[25][1] = "incluye actividades tales como 'generaci&oacute;n de especificaciones de construcci&oacute;n', 'dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema',y 'especificaci&oacute;n t&eacute;cnica del plan de pruebas'";
 choices[25][2] = "tiene una perspectiva estrat&eacute;gica y opertaiva, pero no tecnol&oacute;gica";
 choices[25][3] = "no requeire la participaci&oacute;n del responasble de mantenimiento";
 answers[25] = 2;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 4083. EXAMEN CASTILLA LA MANCHA";
 preguntaids[25] = 4083


//  Id pregunta: 3524 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;l no es una innovaci&oacute;n aplicable al modelo en cascada que permita mejorar algunas de las deficiencias del modelo y aumentar su eficacia?:";
 choices[26]= new Array();
 choices[26][0] = "Utilizaci&oacute;n de herramientas CASE";
 choices[26][1] = "Codificaci&oacute;n y pruebas de los m&oacute;dulos de m&aacute;s bajo nivel en primer lugar";
 choices[26][2] = "Realizaci&oacute;n de fases en paralelo";
 choices[26][3] = "Utilizar t&eacute;cnicas de an&aacute;lisis de riesgos y de coste-beneficio";
 answers[26] = 1;
 units[26] = ['82'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3524. ";
 preguntaids[26] = 3524


//  Id pregunta: 10784 Año de creación de pregunta: 2015
 questions[27]= "28)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[27]= new Array();
 choices[27][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[27][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[27][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[27][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[27] = 2;
 units[27] = ['26'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 10784. ";
 preguntaids[27] = 10784


//  Id pregunta: 6548 Año de creación de pregunta: 2009
 questions[28]= "29)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "son derechos independientes, de tal forma que no puede entenderse que el ejercicio de ninguno de ellos sea requisito previo para el ejercicio de otro";
 choices[28][1] = "son derechos dependientes, por lo que debe entenderse la necesidad de establecer un orden entre estos para su ejercicio";
 choices[28][2] = "son derechos dependientes, por lo que deben ejercerse es el oreden citado (acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n)";
 choices[28][3] = "El RD 1720/2007 no trata de estos derechos";
 answers[28] = 0;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 6548. ";
 preguntaids[28] = 6548


//  Id pregunta: 7134 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Puede el cesionario titular de derechos de explotaci&oacute;n realizar o autorizar la realizaci&oacute;n de versiones sucesivas de un programa o programas derivados del mismo, sin permiso del autor?";
 choices[29]= new Array();
 choices[29][0] = "No, salvo pacto en contrario";
 choices[29][1] = "S&iacute;, salvo pacto en contrario";
 choices[29][2] = "S&iacute;, en cualquier caso";
 choices[29][3] = "No, en ning&uacute;n caso";
 answers[29] = 1;
 units[29] = ['41'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7134. Art&iacute;culo 100 RDL 1/1996";
 preguntaids[29] = 7134


//  Id pregunta: 9698 Año de creación de pregunta: 2014
 questions[30]= "31)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[30]= new Array();
 choices[30][0] = "Avanzado";
 choices[30][1] = "Reconocido";
 choices[30][2] = "Seguro";
 choices[30][3] = "Exportable";
 answers[30] = 1;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9698. ";
 preguntaids[30] = 9698


//  Id pregunta: 2698 Año de creación de pregunta: 2002
 questions[31]= "32)  COM:";
 choices[31]= new Array();
 choices[31][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[31][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[31][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[31][3] = "Todas las respuestas anteriores son ciertas";
 answers[31] = 3;
 units[31] = ['63'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2698. ";
 preguntaids[31] = 2698


//  Id pregunta: 1828 Año de creación de pregunta: 2016
 questions[32]= "33)  Teniendo en cuenta que las cajas negras son un tipo de prueba de software, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[32]= new Array();
 choices[32][0] = "Las cajas negras son un tipo de pruebas de software que se hacen sobre las funciones internas de un m&oacute;dulo.";
 choices[32][1] = "Las cajas negras son un tipo de pruebas de software que dan m&aacute;s importancia al funcionamiento interno que a las entradas y salidas.";
 choices[32][2] = "Las cajas negras son un tipo de pruebas de software que se ocupan de probar si se cumplen los requisitos funcionales de la aplicaci&oacute;n.";
 choices[32][3] = "Ninguna de las opciones es correcta.";
 answers[32] = 2;
 units[32] = ['92'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1828. ";
 preguntaids[32] = 1828


//  Id pregunta: 9861 Año de creación de pregunta: 2015
 questions[33]= "34)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[33]= new Array();
 choices[33][0] = "PEAP";
 choices[33][1] = "EAP-SIM";
 choices[33][2] = "EAP-PAP";
 choices[33][3] = "EAP-TTLS";
 answers[33] = 2;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9861. ";
 preguntaids[33] = 9861


//  Id pregunta: 10620 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n la Ley 9/2014, qu&eacute; no regula el Gobierno, respecto al espectro:";
 choices[34]= new Array();
 choices[34][0] = "Niveles de emisi&oacute;n.";
 choices[34][1] = "Asignaci&oacute;n de bandas de frecuencia.";
 choices[34][2] = "Los contenidos enviados dentro del espectro.";
 choices[34][3] = "Establecer condiciones no discriminatorias.";
 answers[34] = 2;
 units[34] = ['121'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10620. Articulo 61";
 preguntaids[34] = 10620


//  Id pregunta: 2482 Año de creación de pregunta: 2009
 questions[35]= "36)  Respecto a la LSSI puede decirse que:";
 choices[35]= new Array();
 choices[35][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[35][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[35][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[35][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[35] = 3;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 2482. Ley 34/2002, art&iacute;culo 21";
 preguntaids[35] = 2482


//  Id pregunta: 9355 Año de creación de pregunta: 2014
 questions[36]= "37)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[36]= new Array();
 choices[36][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[36][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[36][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[36][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[36] = 3;
 units[36] = ['72'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9355. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[36] = 9355


//  Id pregunta: 7543 Año de creación de pregunta: 2010
 questions[37]= "38)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[37]= new Array();
 choices[37][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento.";
 choices[37][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos.";
 choices[37][2] = "Un lenguaje para establecer restricciones en los documentos XML.";
 choices[37][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n.";
 answers[37] = 0;
 units[37] = ['74'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7543. Map 2005";
 preguntaids[37] = 7543


//  Id pregunta: 1690 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n FALSA. Las caracter&iacute;sticas de una sesi&oacute;n de trabajo tipo JAD (Joint Application Design), seg&uacute;n M&eacute;trica versi&oacute;n 3, se pueden resumir en:";
 choices[38]= new Array();
 choices[38][0] = "Se establece un equipo de trabajo cuyos componentes y responsabilidades est&aacute;n perfectamente identificados y su fin es conseguir el consenso entre las necesidades de los usuarios y los servicios del sistema en producci&oacute;n.";
 choices[38][1] = "Se llevan a cabo pocas reuniones, de larga duraci&oacute;n y muy bien preparadas.";
 choices[38][2] = "Durante la propia sesi&oacute;n se elaboran los modelos empleando diagramas f&aacute;ciles de entender y mantener, directamente sobre herramientas CASE.";
 choices[38][3] = "Se realiza un cronograma con las actuaciones a desarrollar.";
 answers[38] = 3;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 1690. ";
 preguntaids[38] = 1690


//  Id pregunta: 7505 Año de creación de pregunta: 2010
 questions[39]= "40)  En el modelo de comunicaciones TCP/IP, cuando un cliente inicia una sesi&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "El campo SYN del primer segmento TCP es igual a 0.";
 choices[39][1] = "El campo SYN del primer segmento TCP es igual a 1.";
 choices[39][2] = "El campo RST del primer segmento TCP es igual a 1.";
 choices[39][3] = "El campo PSH del primer segmento TCP es igual a 1.";
 answers[39] = 1;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7505. Map 2005";
 preguntaids[39] = 7505


//  Id pregunta: 4518 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[40]= new Array();
 choices[40][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[40][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[40][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[40][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[40] = 2;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4518. ";
 preguntaids[40] = 4518


//  Id pregunta: 5398 Año de creación de pregunta: 2006
 questions[41]= "42)  El entorno Microsoft, WebDAV";
 choices[41]= new Array();
 choices[41][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[41][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[41][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[41][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[41] = 1;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5398. ";
 preguntaids[41] = 5398


//  Id pregunta: 4558 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es protocolo OSI de nivel de aplicaci&oacute;n?:";
 choices[42]= new Array();
 choices[42][0] = "Transferencia de ficheros FTAM";
 choices[42][1] = "Correo electr&oacute;nico X.400";
 choices[42][2] = "Servicios de Directorio X.500";
 choices[42][3] = "Transferencia de correo electr&oacute;nico SMTP";
 answers[42] = 3;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4558. SMTP es protocolo del nivel de aplicaci&oacute;n del modelo TCP/IP";
 preguntaids[42] = 4558


//  Id pregunta: 1876 Año de creación de pregunta: 2016
 questions[43]= "44)  De acuerdo con el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), la designaci&oacute;n como responsable de seguridad:";
 choices[43]= new Array();
 choices[43][0] = "Implica que asume la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[43][1] = "Implica que comparte la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[43][2] = "En ning&uacute;n caso supone una exoneraci&oacute;n de la responsabilidad que corresponde al responsable del fichero o al encargado del tratamiento.";
 choices[43][3] = "Siempre debe recaer en el responsable de los sistemas de la informaci&oacute;n.";
 answers[43] = 2;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 1876. ";
 preguntaids[43] = 1876


//  Id pregunta: 4359 Año de creación de pregunta: 2004
 questions[44]= "45)  Las cabeceras de extensi&oacute;n";
 choices[44]= new Array();
 choices[44][0] = "Pertenecen al protocolo ipv4";
 choices[44][1] = "Son todas obligatorias";
 choices[44][2] = "Perminten definir la ruta que siga un paquete IPv6";
 choices[44][3] = "Definen las opciones en una red Token Ring";
 answers[44] = 2;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 4359. ";
 preguntaids[44] = 4359


//  Id pregunta: 2302 Año de creación de pregunta: 2002
 questions[45]= "46)  Se&ntilde;alar la respuesta correcta si hablamos de eficacia y eficiencia:";
 choices[45]= new Array();
 choices[45][0] = "La eficacia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participan en &eacute;l";
 choices[45][1] = "La eficiencia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participa en &eacute;l";
 choices[45][2] = "La eficiencia es la medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios";
 choices[45][3] = "La eficacia &oacute;ptima se logra cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[45] = 1;
 units[45] = ['40'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2302. ";
 preguntaids[45] = 2302


//  Id pregunta: 9387 Año de creación de pregunta: 2014
 questions[46]= "47)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[46][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[46][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[46][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[46] = 0;
 units[46] = ['107'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9387. Examen TIC A2  2013";
 preguntaids[46] = 9387


//  Id pregunta: 10728 Año de creación de pregunta: 2015
 questions[47]= "48)  Al redistribuir una obra derivada de un programa con licencia GPL, &iquest;cu&aacute;l de los siguientes elementos no es necesario incluir?:";
 choices[47]= new Array();
 choices[47][0] = "La licencia.";
 choices[47][1] = "La lista de modificaciones.";
 choices[47][2] = "El autor de las modificaciones.";
 choices[47][3] = "Es obligatorio incluir todos los anteriores.";
 answers[47] = 3;
 units[47] = ['66'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 10728. ";
 preguntaids[47] = 10728


//  Id pregunta: 3340 Año de creación de pregunta: 2004
 questions[48]= "49)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[48]= new Array();
 choices[48][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[48][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[48][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[48][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[48] = 0;
 units[48] = ['72'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3340. ";
 preguntaids[48] = 3340


//  Id pregunta: 10381 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes ataques se basa en la suplantaci&oacute;n de identidad mediante t&eacute;cnicas de ingenier&iacute;a social?";
 choices[49]= new Array();
 choices[49][0] = "Phishing";
 choices[49][1] = "Man in the middle";
 choices[49][2] = "Eavesdropping";
 choices[49][3] = "Sniffing";
 answers[49] = 0;
 units[49] = ['120'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 10381. ";
 preguntaids[49] = 10381


//  Id pregunta: 5230 Año de creación de pregunta: 2006
 questions[50]= "51)  Con respecto a la tecnolog&iacute;a VDSL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[50]= new Array();
 choices[50][0] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 52 Mbit/s en sentido descendente y 6,4 Mbit/s en sentido ascendente.";
 choices[50][1] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 54 Mbit/s en sentido descendente y 8,2 Mbit/s en sentido ascendente.";
 choices[50][2] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 30 Mbit/s.";
 choices[50][3] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 25 Mbit/s.";
 answers[50] = 0;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5230. ";
 preguntaids[50] = 5230


//  Id pregunta: 6730 Año de creación de pregunta: 2009
 questions[51]= "52)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[51]= new Array();
 choices[51][0] = "JSTL y EL";
 choices[51][1] = "Scriptlets";
 choices[51][2] = "JavaScript";
 choices[51][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[51] = 0;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 6730. ";
 preguntaids[51] = 6730


//  Id pregunta: 3088 Año de creación de pregunta: 2002
 questions[52]= "53)  Un sistema operativo debe evolucionar f&aacute;cilmente porque:";
 choices[52]= new Array();
 choices[52][0] = "Hay frecuentes actualizaciones de hardware, y nuevos tipos del mismo; hay nuevos servicios que implican nuevos mecanismos de control; y se presentan siempre fallos no previstos que es necesario corregir";
 choices[52][1] = "No debe evolucionar f&aacute;cilmente, pues debe estar prevista desde su generaci&oacute;n la incorporaci&oacute;n de nuevos elementos de hardware";
 choices[52][2] = "No debe evolucionar f&aacute;cilmente, para evitar la f&aacute;cil generaci&oacute;n de versiones no autorizadas por el propietario";
 choices[52][3] = "Hay frecuentes desapariciones y apariciones de empresas de software, que podr&iacute;an dar lugar a una descontinuidad de versiones";
 answers[52] = 0;
 units[52] = ['56'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3088. ";
 preguntaids[52] = 3088


//  Id pregunta: 8649 Año de creación de pregunta: 2013
 questions[53]= "54)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[53]= new Array();
 choices[53][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[53][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[53][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[53][3] = "Todas las anteriores son verdaderas.";
 answers[53] = 3;
 units[53] = ['41'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 8649. ";
 preguntaids[53] = 8649


//  Id pregunta: 6572 Año de creación de pregunta: 2003
 questions[54]= "55)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[54]= new Array();
 choices[54][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[54][1] = "Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[54][2] = "No tiene valor jur&iacute;dico";
 choices[54][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[54] = 1;
 units[54] = ['78'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6572. ";
 preguntaids[54] = 6572


//  Id pregunta: 7967 Año de creación de pregunta: 2011
 questions[55]= "56)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP:";
 choices[55]= new Array();
 choices[55][0] = "Intercambio din&aacute;mico de claves.";
 choices[55][1] = "Autenticaci&oacute;n 802.1x";
 choices[55][2] = "Preshared Keys (PSK).";
 choices[55][3] = "Encriptaci&oacute;n AES.";
 answers[55] = 2;
 units[55] = ['108'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7967. Examen TIC A2 2010";
 preguntaids[55] = 7967


//  Id pregunta: 991 Año de creación de pregunta: 2016
 questions[56]= "57)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "un &oacute;rgano superior";
 choices[56][1] = "un &oacute;rgano directivo";
 choices[56][2] = "un &oacute;rgano superior o directivo";
 choices[56][3] = "ninguna es correcta";
 answers[56] = 2;
 units[56] = ['4', '7', '8', '9'];
 blocks[56] = ['A1', 'A2'];
 comments[56] = "Id Pregunta: 991. Ley 40/2015";
 preguntaids[56] = 991


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[57]= new Array();
 choices[57][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[57][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[57][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[57] = 1;
 units[57] = ['26'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 532. Gobernanza TIC";
 preguntaids[57] = 532


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[58]= new Array();
 choices[58][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[58][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[58][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[58][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[58] = 0;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 26. Constituci&oacute;n de 1978";
 preguntaids[58] = 26


//  Id pregunta: 8980 Año de creación de pregunta: 2013
 questions[59]= "60)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[59]= new Array();
 choices[59][0] = "Grupos de consumidores o usuarios afectados";
 choices[59][1] = "El Ministerio Fiscal";
 choices[59][2] = "El Instituto Nacional de Consumo";
 choices[59][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 8980. Ley 34/2002, art&iacute;culo 31";
 preguntaids[59] = 8980


//  Id pregunta: 5256 Año de creación de pregunta: 2006
 questions[60]= "61)  El puerto reservado para el protocolo SMTP es";
 choices[60]= new Array();
 choices[60][0] = "80";
 choices[60][1] = "25";
 choices[60][2] = "110";
 choices[60][3] = "69";
 answers[60] = 1;
 units[60] = ['103'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5256. ";
 preguntaids[60] = 5256


//  Id pregunta: 4959 Año de creación de pregunta: 2002
 questions[61]= "62)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[61]= new Array();
 choices[61][0] = "Entre 60 KHz y 3 GHz";
 choices[61][1] = "Sobre los 100 MHz";
 choices[61][2] = "Entre 4 y 11 GHz";
 choices[61][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[61] = 0;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4959. ";
 preguntaids[61] = 4959


//  Id pregunta: 7699 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?";
 choices[62]= new Array();
 choices[62][0] = "Aseguramiento de la calidad.";
 choices[62][1] = "Gesti&oacute;n de proyectos.";
 choices[62][2] = "Gesti&oacute;n de la configuraci&oacute;n.";
 choices[62][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[62] = 3;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7699. Map 2007";
 preguntaids[62] = 7699


//  Id pregunta: 5180 Año de creación de pregunta: 2003
 questions[63]= "64)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[63]= new Array();
 choices[63][0] = "IMODE";
 choices[63][1] = "OFDM";
 choices[63][2] = "BLUETOOTH";
 choices[63][3] = "WIFI";
 answers[63] = 2;
 units[63] = ['107'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5180. ";
 preguntaids[63] = 5180


//  Id pregunta: 2603 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[64]= new Array();
 choices[64][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[64][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[64][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[64][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[64] = 0;
 units[64] = ['76'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2603. ";
 preguntaids[64] = 2603


//  Id pregunta: 1832 Año de creación de pregunta: 2016
 questions[65]= "66)  Dentro de la familia de est&aacute;ndares ISO 27000, &iquest;qu&eacute; norma se encarga de ayudar a las organizaciones a medir, a informar y, por lo tanto, a mejorar sistem&aacute;ticamente la eficacia de su Sistema de Informaci&oacute;n de Gesti&oacute;n de la Seguridad (SGSI)?";
 choices[65]= new Array();
 choices[65][0] = "ISO 27001";
 choices[65][1] = "ISO 27002";
 choices[65][2] = "ISO 27003";
 choices[65][3] = "ISO 27004";
 answers[65] = 3;
 units[65] = ['46'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 1832. ";
 preguntaids[65] = 1832


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[66]= new Array();
 choices[66][0] = "Ley 50/1997, del Gobierno.";
 choices[66][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[66][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[66][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[66] = 1;
 units[66] = ['11'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 291. Presupuestos generales";
 preguntaids[66] = 291


//  Id pregunta: 8084 Año de creación de pregunta: 2011
 questions[67]= "68)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[67]= new Array();
 choices[67][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[67][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[67][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[67][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[67] = 0;
 units[67] = ['114'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8084. Analista Ayto. Madrid 2010";
 preguntaids[67] = 8084


//  Id pregunta: 2402 Año de creación de pregunta: 2006
 questions[68]= "69)  &iquest;Se pueden tratar datos de fuentes accesibles al p&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "Si, ya que as&iacute; lo establece la LOPD";
 choices[68][1] = "No, no est&aacute; permitido por la LOPD";
 choices[68][2] = "Si, cuando se publique el reglamento que lo desarrolle";
 choices[68][3] = "No, ya que no es una fuente de recogida de datos";
 answers[68] = 0;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2402. ";
 preguntaids[68] = 2402


//  Id pregunta: 7570 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema a otro usuario?";
 choices[69]= new Array();
 choices[69][0] = "CONNECT y RESOURCE.";
 choices[69][1] = "DBA.";
 choices[69][2] = "GRANT ANY ROLE.";
 choices[69][3] = "SELECT ANY TABLE.";
 answers[69] = 2;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 7570. Map 2006";
 preguntaids[69] = 7570


//  Id pregunta: 4019 Año de creación de pregunta: 2004
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[70]= new Array();
 choices[70][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[70][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[70][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[70][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[70] = 2;
 units[70] = ['92', '93', '98'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4019. Pregunta Junta Andalucia - A";
 preguntaids[70] = 4019


//  Id pregunta: 4291 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[71]= new Array();
 choices[71][0] = "MAGERIT es un &oacute;rgano encargado de establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[71][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[71][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[71][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[71] = 0;
 units[71] = ['45'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 4291. ";
 preguntaids[71] = 4291


//  Id pregunta: 9290 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[72]= new Array();
 choices[72][0] = "La persistencia";
 choices[72][1] = "Los procesos de transformaci&oacute;n.";
 choices[72][2] = "El flujo de la informaci&oacute;n.";
 choices[72][3] = "La herencia";
 answers[72] = 3;
 units[72] = ['85', '86'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 9290. Examen TIC A2 2013. Promocion interna";
 preguntaids[72] = 9290


//  Id pregunta: 2444 Año de creación de pregunta: 2006
 questions[73]= "74)  Se&ntilde;ale la respuesta falsa respecto a los CTS (Conformance Testing Services):";
 choices[73]= new Array();
 choices[73][0] = "Los centros de prueba CTS pueden comercializar herramientas de ensayo para que las empresas puedan realizar sus propias pruebas";
 choices[73][1] = "En Espa&ntilde;a, coordinados por AENOR, existen varios centros de prueba CTS";
 choices[73][2] = "Cada servicio de pruebas debe ofrecerse en m&aacute;s de dos Estados miembros, que deber&aacute;n velar por el reconocimiento mutuo de los resultados de las pruebas";
 choices[73][3] = "El programa CTS se basa en los principios de independencia, reconocimiento mutuo y armonizaci&oacute;n";
 answers[73] = 2;
 units[73] = ['48'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2444. ";
 preguntaids[73] = 2444


//  Id pregunta: 5684 Año de creación de pregunta: 2007
 questions[74]= "75)  &iquest;Qu&eacute; son las siguientes herramientas comerciales: DESIGNER de Oracle, EASY CASE de Evergreen, PREDICT CASE de Software AG y ROSE de Rational?";
 choices[74]= new Array();
 choices[74][0] = "Herramientas CASE de pruebas y generaci&oacute;n de c&oacute;digo.";
 choices[74][1] = "Herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[74][2] = "Herramientas para la m&eacute;trica de software.";
 choices[74][3] = "Herramientas CASE de an&aacute;lisis y dise&ntilde;o.";
 answers[74] = 3;
 units[74] = ['86'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 5684. ";
 preguntaids[74] = 5684


