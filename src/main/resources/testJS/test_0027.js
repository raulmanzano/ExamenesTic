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
//  Id pregunta: 1313 Año de creación de pregunta: 2016
 questions[0]= "1)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[0]= new Array();
 choices[0][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (5.1).";
 choices[0][1] = "Las actividades que intervienen en el desarrollo de un S.L";
 choices[0][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un 5.1.";
 choices[0][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un 5.1.";
 answers[0] = 2;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 1313. ";
 preguntaids[0] = 1313


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[1]= "2)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[1][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[1][2] = "el sector p&uacute;blico institucional";
 choices[1][3] = "el sector privado corporativo";
 answers[1] = 3;
 units[1] = ['7'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 214. Ley 39/2015";
 preguntaids[1] = 214


//  Id pregunta: 7495 Año de creación de pregunta: 2010
 questions[2]= "3)  La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[2]= new Array();
 choices[2][0] = "100.255.255.255.";
 choices[2][1] = "0.0.0.255.";
 choices[2][2] = "100.0.0.0.";
 choices[2][3] = "100.254.254.255.";
 answers[2] = 0;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 7495. Map 2005";
 preguntaids[2] = 7495


//  Id pregunta: 9901 Año de creación de pregunta: 2015
 questions[3]= "4)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[3]= new Array();
 choices[3][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[3][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[3][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[3][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local, Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[3] = 2;
 units[3] = ['7', '19'];
 blocks[3] = ['A2', 'A4'];
 comments[3] = "Id Pregunta: 9901. ";
 preguntaids[3] = 9901


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[4]= new Array();
 choices[4][0] = "El 1 de junio de 1999.";
 choices[4][1] = "El 1 de mayo de 1999.";
 choices[4][2] = "El 1 de abril de 1999.";
 choices[4][3] = "El 1 de marzo de 1999.";
 answers[4] = 1;
 units[4] = ['5'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 186. Uni&oacute;n Europea";
 preguntaids[4] = 186


//  Id pregunta: 9487 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[5]= new Array();
 choices[5][0] = "Filtro de mediana";
 choices[5][1] = "Realce logar&iacute;tmico";
 choices[5][2] = "Filtro paso bajo";
 choices[5][3] = "Filtro paso alto";
 answers[5] = 1;
 units[5] = ['80'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9487. ";
 preguntaids[5] = 9487


//  Id pregunta: 9559 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes mediante sistema de pizarra es cierta?";
 choices[6]= new Array();
 choices[6][0] = "El agente que escribe en la pizarra se convierte en coordinador de la misma";
 choices[6][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra, en lugar de esperar su turno";
 choices[6][2] = "Ambas son ciertas";
 choices[6][3] = "Ninguna es cierta";
 answers[6] = 3;
 units[6] = ['67'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9559. A: el agente y el coordinador son figuras diferentes; B: no lo puede escribir inmediatamente, sino que la pizarra es coordinada y arbitrada por un controlador.";
 preguntaids[6] = 9559


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[7]= "8)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[7]= new Array();
 choices[7][0] = "Interchange of Data between Administrations (IDA)";
 choices[7][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[7][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[7][3] = "Interoperability Electronic European Solution (IEES)";
 answers[7] = 1;
 units[7] = ['43'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 581. AGE A1 2015";
 preguntaids[7] = 581


//  Id pregunta: 6103 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ITIL (Information Technology Infrastructure Library) es cierta?";
 choices[8]= new Array();
 choices[8][0] = "ITIL es una Biblioteca de Infraestructura de Tecnolog&iacute;as de la Informaci&oacute;n que se ha convertido en elest&aacute;ndar mundial de facto en la Gesti&oacute;n de Servicios Inform&aacute;ticos.";
 choices[8][1] = "ITIL es una iniciativa de la Comisi&oacute;n Europea cuyo objetivo es la elaboraci&oacute;n de una definici&oacute;n de laestructura organizacional de una organizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n";
 choices[8][2] = "La fundaci&oacute;n holandesa &quot;Exameninstituut voor Informatica&quot; (EXIN) y la inglesa &quot;Information SystemsExamination Board&quot; (ISEB) han desarrollado juntas la &uacute;ltima versi&oacute;n de ITIL";
 choices[8][3] = "ITIL es una metodolog&iacute;a para la Gesti&oacute;n de Servicios Inform&aacute;ticos que no tiene aplicaci&oacute;n en laAdministraci&oacute;n P&uacute;blica";
 answers[8] = 0;
 units[8] = ['101'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 6103. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6103


//  Id pregunta: 6506 Año de creación de pregunta: 2003
 questions[9]= "10)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[9]= new Array();
 choices[9][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[9][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[9][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[9][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[9] = 3;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6506. ";
 preguntaids[9] = 6506


//  Id pregunta: 2107 Año de creación de pregunta: 2002
 questions[10]= "11)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Overlap";
 choices[10][1] = "Swaping";
 choices[10][2] = "Throughput";
 choices[10][3] = "Overhead";
 answers[10] = 3;
 units[10] = ['39'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2107. ";
 preguntaids[10] = 2107


//  Id pregunta: 942 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Gu&iacute;a de Comunicaci&oacute;n Digital, si el uso de gr&aacute;ficos o enlaces JavaScript debe estar disponible, entonces se deber&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "Bloquear el acceso a la p&aacute;gina en caso de que el Navegador no los soporte para evitar incumplimientos normativos.";
 choices[11][1] = "Notificarse por medio de un texto alternativo por cuestiones de Accesibilidad.";
 choices[11][2] = "Forzar el navegador para que muestre estos contenidos para una p&aacute;gina de confianza.";
 choices[11][3] = "Impedir el acceso de Navegadores anteriores a Internet Explorer 9 que no permite reproducir elementos tecnol&oacute;gicamente compatibles o Flash.";
 answers[11] = 1;
 units[11] = ['125'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 942. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[11] = 942


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[12]= "13)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[12]= new Array();
 choices[12][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[12][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[12][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[12][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[12] = 2;
 units[12] = ['5'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 110. Uni&oacute;n Europea";
 preguntaids[12] = 110


//  Id pregunta: 5371 Año de creación de pregunta: 2006
 questions[13]= "14)  Respecto al protocolo IP";
 choices[13]= new Array();
 choices[13][0] = "IPv6 no permite OSPF";
 choices[13][1] = "IPv4 no permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[13][2] = "IPv6 permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[13][3] = "ninguna de las anteriores";
 answers[13] = 2;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5371. ";
 preguntaids[13] = 5371


//  Id pregunta: 2301 Año de creación de pregunta: 2002
 questions[14]= "15)  Se&ntilde;alar la opci&oacute;n falsa. Seg&uacute;n la Ley de Protecci&oacute;n de Datos no ser&aacute; necesario el consentimiento del afectado para la cesi&oacute;n de sus datos personales cuando:";
 choices[14]= new Array();
 choices[14][0] = "Hayan sido obtenidos de fuentes accesibles al p&uacute;blico";
 choices[14][1] = "La cesi&oacute;n es a los tribunales en el ejercicio de sus potestades";
 choices[14][2] = "No son utilizados para los fines para los que fueron recabados";
 choices[14][3] = "La cesi&oacute;n es para la realizaci&oacute;n de estudios epidemiol&oacute;gicos";
 answers[14] = 2;
 units[14] = ['35'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2301. ";
 preguntaids[14] = 2301


//  Id pregunta: 1118 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el gestor de vol&uacute;menes l&oacute;gicos de Linux LVM 2.0 (Logical Volume Manager Versi&oacute;n 2)?";
 choices[15]= new Array();
 choices[15][0] = "Un volumen l&oacute;gico (LV) puede pertenecer a distintos grupos de vol&uacute;menes l&oacute;gicos (LVG).";
 choices[15][1] = "Un disco f&iacute;sico solo puede pertenecer a un volumen f&iacute;sico (PV).";
 choices[15][2] = "Un grupo de LVG se puede formar a partir de varios PV.";
 choices[15][3] = "El n&uacute;mero de LV incluidos en un grupo de LVG debe ser siempre par.";
 answers[15] = 2;
 units[15] = ['57'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1118. ";
 preguntaids[15] = 1118


//  Id pregunta: 10003 Año de creación de pregunta: 2015
 questions[16]= "17)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[16]= new Array();
 choices[16][0] = "WS-Security permite crear servicios web seguros.";
 choices[16][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[16][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[16][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[16] = 3;
 units[16] = ['55'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10003. Examen TIC A2 2014";
 preguntaids[16] = 10003


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[17]= new Array();
 choices[17][0] = "Al Consejo Europeo.";
 choices[17][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[17][2] = "A la Comisi&oacute;n Europea.";
 choices[17][3] = "Al Parlamento Europeo.";
 answers[17] = 2;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 116. Uni&oacute;n Europea";
 preguntaids[17] = 116


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[18]= "19)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[18]= new Array();
 choices[18][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[18][1] = "La libertad sexual y religiosa.";
 choices[18][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[18][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[18] = 0;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 81. Constituci&oacute;n de 1978";
 preguntaids[18] = 81


//  Id pregunta: 6630 Año de creación de pregunta: 2009
 questions[19]= "20)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[19]= new Array();
 choices[19][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[19][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[19][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[19][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[19] = 0;
 units[19] = ['35'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 6630. MAP 2008 A2";
 preguntaids[19] = 6630


//  Id pregunta: 9294 Año de creación de pregunta: 2014
 questions[20]= "21)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[20]= new Array();
 choices[20][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[20][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[20][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[20][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[20] = 3;
 units[20] = ['63'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9294. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[20] = 9294


//  Id pregunta: 8953 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[21]= new Array();
 choices[21][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[21][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[21][2] = "Una API de desarrollo en Java";
 choices[21][3] = "Java EE Blueprints no existe";
 answers[21] = 1;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8953. ";
 preguntaids[21] = 8953


//  Id pregunta: 5826 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[22][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[22][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[22][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[22] = 2;
 units[22] = ['24'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 5826. Examen 2006 JCYL";
 preguntaids[22] = 5826


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[23]= new Array();
 choices[23][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[23][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[23][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[23][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[23] = 1;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7541. Map 2005";
 preguntaids[23] = 7541


//  Id pregunta: 5109 Año de creación de pregunta: 2003
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes protocolos se usa para se&ntilde;alizaci&oacute;n en VoIP?";
 choices[24]= new Array();
 choices[24][0] = "POTS";
 choices[24][1] = "RSVP";
 choices[24][2] = "DTMF";
 choices[24][3] = "SIP";
 answers[24] = 3;
 units[24] = ['107'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5109. ";
 preguntaids[24] = 5109


//  Id pregunta: 10696 Año de creación de pregunta: 2015
 questions[25]= "26)  Seg&uacute;n Popek y Goldberg, &iquest;Qu&eacute; caracteristicas debe de tener un sistema para que sea virtualizable?";
 choices[25]= new Array();
 choices[25][0] = "Equivalencia.";
 choices[25][1] = "Control de Recursos.";
 choices[25][2] = "Eficiencia.";
 choices[25][3] = "Todos los anteriores.";
 answers[25] = 3;
 units[25] = ['54'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10696. ";
 preguntaids[25] = 10696


//  Id pregunta: 1254 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[26]= new Array();
 choices[26][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[26][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[26][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[26][3] = "Sancionar y publicar las leyes.";
 answers[26] = 2;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 1254. ";
 preguntaids[26] = 1254


//  Id pregunta: 10722 Año de creación de pregunta: 2015
 questions[27]= "28)  Entre las ventajas de los ensamblados en .NET, en relaci&oacute;n a las distintas versiones de una aplicaci&oacute;n, se puede citar:";
 choices[27]= new Array();
 choices[27][0] = "No existe ninguna ventaja con respecto a las versiones previas";
 choices[27][1] = "Se facilitan utilidades para poder instalar y desinstalar del registro los ensamblados.";
 choices[27][2] = "El CRL proporciona en tiempo de ejecuci&oacute;n, informaci&oacute;n sobre las incompatibilidades entre las distintas versiones de los ensamblados.";
 choices[27][3] = "Ninguna de las anteriores es cierta.";
 answers[27] = 3;
 units[27] = ['63'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10722. ";
 preguntaids[27] = 10722


//  Id pregunta: 3205 Año de creación de pregunta: 2003
 questions[28]= "29)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[28][1] = "Seguridad";
 choices[28][2] = "Correo Electr&oacute;nico";
 choices[28][3] = "Transmisi&oacute;n de ficheros";
 answers[28] = 3;
 units[28] = ['77'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3205. ";
 preguntaids[28] = 3205


//  Id pregunta: 10462 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;les son las tres opciones principales en los modelos de dise&ntilde;o de ITIL v3?";
 choices[29]= new Array();
 choices[29][0] = "Modelo tradicional: presupone una mayor estabilidad del servicio.";
 choices[29][1] = "Modelo &Aacute;gil o RAD: principalmente incremental e iterativo que se basa en la creaci&oacute;n de prototipos.";
 choices[29][2] = "Modelo basado en soluciones software est&aacute;ndar ya empaquetadas.";
 choices[29][3] = "Todos son modelos de ITIL versi&oacute;n 3.";
 answers[29] = 3;
 units[29] = ['101'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10462. ";
 preguntaids[29] = 10462


//  Id pregunta: 6679 Año de creación de pregunta: 2009
 questions[30]= "31)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[30]= new Array();
 choices[30][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[30][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[30][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[30][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[30] = 2;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 6679. MAP 2008 A1";
 preguntaids[30] = 6679


//  Id pregunta: 7844 Año de creación de pregunta: 2011
 questions[31]= "32)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[31]= new Array();
 choices[31][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[31][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[31][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[31][3] = "El gestor de archivos oficial de GNOME.";
 answers[31] = 1;
 units[31] = ['66'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7844. Examen TIC A1 2010";
 preguntaids[31] = 7844


//  Id pregunta: 2171 Año de creación de pregunta: 2002
 questions[32]= "33)  En relaci&oacute;n con la auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[32]= new Array();
 choices[32][0] = "Al contrario de lo que ocurre en el sector privado, en el sector p&uacute;blico es muy sencillo realizar comparaciones entre los distintos servicios y administraciones p&uacute;blicas";
 choices[32][1] = "La auditor&iacute;a de econom&iacute;a consiste en medir los costes de desarrollo, mantenimiento y operaci&oacute;n de un sistema de informaci&oacute;n, incluyendo equipos y personal";
 choices[32][2] = "La auditor&iacute;a de eficacia es una medida de la correcta utilizaci&oacute;n de los equipos, instalaciones y personal que participan en el sistema de informaci&oacute;n. Es una medida de la calidad t&eacute;cnica del sistema de informaci&oacute;n";
 choices[32][3] = "La eficiencia se eval&uacute;a determinando si los requisitos del dise&ntilde;o se han cumplido y los usuarios est&aacute;n satisfechos con el sistema";
 answers[32] = 1;
 units[32] = ['36', '45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2171. ";
 preguntaids[32] = 2171


//  Id pregunta: 7310 Año de creación de pregunta: 2010
 questions[33]= "34)  En un DFD, entre 2 procesos existir&aacute; un almac&eacute;n de datos cuando:";
 choices[33]= new Array();
 choices[33][0] = "La comunicaci&oacute;n entre ellos sea s&iacute;ncrona";
 choices[33][1] = "La comunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[33][2] = "Existir&aacute; siempre que haya comunicaci&oacute;n entre los procesos";
 choices[33][3] = "Es el analista el que decide si tiene que existir o no el almac&eacute;n de datos";
 answers[33] = 1;
 units[33] = ['85'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 7310. ";
 preguntaids[33] = 7310


//  Id pregunta: 8429 Año de creación de pregunta: 2011
 questions[34]= "35)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "Los est&aacute;ndares abiertos";
 choices[34][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[34][2] = "Los dos anteriores";
 choices[34][3] = "Los dos primeros y los que determine la autoridad compentente mediante disposici&oacute;n publicada en la sede judicial";
 answers[34] = 2;
 units[34] = ['2'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 8429. ";
 preguntaids[34] = 8429


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[35]= new Array();
 choices[35][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[35][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[35][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 1;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 463. Estrategia TIC";
 preguntaids[35] = 463


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[36]= new Array();
 choices[36][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[36][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[36][2] = "A y B son correctas.";
 choices[36][3] = "A y B son incorrectas.";
 answers[36] = 2;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[36] = 1040


//  Id pregunta: 7305 Año de creación de pregunta: 2010
 questions[37]= "38)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[37]= new Array();
 choices[37][0] = "La compra de un ERP";
 choices[37][1] = "El mantenimiento de las licencias del SGBD";
 choices[37][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[37][3] = "El alquiler del sistema de telecomunicaciones";
 answers[37] = 2;
 units[37] = ['37'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 7305. ";
 preguntaids[37] = 7305


//  Id pregunta: 7664 Año de creación de pregunta: 2010
 questions[38]= "39)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (&laquo;Datawarehouses&raquo;):";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[38][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[38][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[38][3] = "Son colecciones de datos.";
 answers[38] = 1;
 units[38] = ['72'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7664. Map 2007";
 preguntaids[38] = 7664


//  Id pregunta: 7135 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no ser&aacute; considerada una infracci&oacute;n de los derechos de autor, de acuerdo a la Ley de Propiedad Intelectual?";
 choices[39]= new Array();
 choices[39][0] = "Poner en circulaci&oacute;n una o m&aacute;s copias de un programa de ordenador conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, sin autorizaci&oacute;n del titular de los derechos.";
 choices[39][1] = "Tener con fines comerciales una o m&aacute;s copias de un programa de ordenador, conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, , sin autorizaci&oacute;n del titular de los derechos.";
 choices[39][2] = "Poner en circulaci&oacute;n o tener con fines comerciales cualquier instrumento que tenga, entre otros usos, facilitar la supresi&oacute;n o neutralizaci&oacute;n no autorizadas de cualquier dispositivo t&eacute;cnico utilizado para proteger un programa de ordenador, sin autorizaci&oacute;n del titular de los derechos.";
 choices[39][3] = "Todas las anteriores son consideradas infracciones, seg&uacute;n la Ley de Propiedad Intelectual.";
 answers[39] = 2;
 units[39] = ['41'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 7135. Art&iacute;culo 102 RDL 1/1996";
 preguntaids[39] = 7135


//  Id pregunta: 3431 Año de creación de pregunta: 2006
 questions[40]= "41)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[40]= new Array();
 choices[40][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[40][1] = "Descubrimiento de fraude.";
 choices[40][2] = "Descubrimiento de patrones en los datos.";
 choices[40][3] = "Todas las anteriores.";
 answers[40] = 3;
 units[40] = ['72'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3431. ";
 preguntaids[40] = 3431


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[41]= "42)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[41][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[41][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[41][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[41] = 3;
 units[41] = ['22'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 511. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[41] = 511


//  Id pregunta: 1201 Año de creación de pregunta: 2016
 questions[42]= "43)  En Linux, el comando utilizado para obtener un an&aacute;lisis del estado del sistema, un detalle general de los procesos, E/S, uso de memoria, swap, estado del sistema y actividad de la CPU es:";
 choices[42]= new Array();
 choices[42][0] = "free";
 choices[42][1] = "iostat";
 choices[42][2] = "lsof";
 choices[42][3] = "vmstat";
 answers[42] = 3;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1201. ";
 preguntaids[42] = 1201


//  Id pregunta: 7748 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?";
 choices[43]= new Array();
 choices[43][0] = "UPDATE TABLE.";
 choices[43][1] = "ALTER TABLE.";
 choices[43][2] = "REVOKE ALL.";
 choices[43][3] = "ROLLBACK.";
 answers[43] = 1;
 units[43] = ['61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7748. ";
 preguntaids[43] = 7748


//  Id pregunta: 3765 Año de creación de pregunta: 2002
 questions[44]= "45)  Diferentes t&eacute;cnicas para expresar la l&oacute;gica interna de los procesos primitivos son:";
 choices[44]= new Array();
 choices[44][0] = "Lenguaje narrativo, tablas de decisi&oacute;n y pseudoc&oacute;digo";
 choices[44][1] = "Pre/post condiciones, diagramas de flujo, lenguajes formales";
 choices[44][2] = "Todas las anteriores son t&eacute;cnicas usadas v&aacute;lidas";
 choices[44][3] = "Ninguna de las anteriores es una t&eacute;cnica usada v&aacute;lida";
 answers[44] = 2;
 units[44] = ['85', '86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3765. ";
 preguntaids[44] = 3765


//  Id pregunta: 1938 Año de creación de pregunta: 2016
 questions[45]= "46)  En el framework .NET, (_que c&oacute;digo se genera como salida del compilador just in time?";
 choices[45]= new Array();
 choices[45][0] = "Bytecode";
 choices[45][1] = "IL (intemediate language)";
 choices[45][2] = "C&oacute;digo m&aacute;quina";
 choices[45][3] = "C&oacute;digo ensamblador";
 answers[45] = 2;
 units[45] = ['63'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1938. ";
 preguntaids[45] = 1938


//  Id pregunta: 6610 Año de creación de pregunta: 2009
 questions[46]= "47)  &iquest;Cu&aacute;l es la longitud efectiva aproximada de clave del algoritmo Triple DES?";
 choices[46]= new Array();
 choices[46][0] = "112 (2x56) bits";
 choices[46][1] = "128 (2x64) bits";
 choices[46][2] = "168 (3x56) bits";
 choices[46][3] = "192 (3x64) bits";
 answers[46] = 0;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6610. ";
 preguntaids[46] = 6610


//  Id pregunta: 10389 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[47]= new Array();
 choices[47][0] = "Juventud en movimiento";
 choices[47][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[47][2] = "Agenda Digital para Europa";
 choices[47][3] = "Todas las anteriores";
 answers[47] = 3;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 10389. ";
 preguntaids[47] = 10389


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[48]= new Array();
 choices[48][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[48][1] = "Solamente el Congreso.";
 choices[48][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[48][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[48] = 0;
 units[48] = ['1'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 4. Constituci&oacute;n de 1978";
 preguntaids[48] = 4


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[49]= "50)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[49]= new Array();
 choices[49][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[49][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[49][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[49][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[49] = 2;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 1062. ";
 preguntaids[49] = 1062


//  Id pregunta: 3580 Año de creación de pregunta: 2002
 questions[50]= "51)  En la m&eacute;trica de productividad COCOMO, el modelo b&aacute;sico:";
 choices[50]= new Array();
 choices[50][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[50][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[50][2] = "Considera el impacto de los factores de influencia de las fases de desarrollo (an&aacute;lisis funcional y dise&ntilde;o t&eacute;cnico)";
 choices[50][3] = "Nada de lo anterior es correcto";
 answers[50] = 0;
 units[50] = ['94'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3580. ";
 preguntaids[50] = 3580


//  Id pregunta: 1451 Año de creación de pregunta: 2016
 questions[51]= "52)  La resistencia, excusa o negativa a la actuaci&oacute;n inspectora de los &oacute;rganos facultados para llevarla a cabo con arreglo a la LSSI art&iacute;culo 38 constituye una infracci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Leve.";
 choices[51][1] = "Grave.";
 choices[51][2] = "Muy grave.";
 choices[51][3] = "No constituye infracci&oacute;n.";
 answers[51] = 1;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 1451. ";
 preguntaids[51] = 1451


//  Id pregunta: 4320 Año de creación de pregunta: 2004
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?:";
 choices[52]= new Array();
 choices[52][0] = "DNS: Sistema de nombres de dominio";
 choices[52][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[52][2] = "FTP: Protocolo de transferencia de archivos";
 choices[52][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[52] = 3;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4320. Examen TIC MAP B 2004";
 preguntaids[52] = 4320


//  Id pregunta: 9729 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes respuestas NO se emplea para realizar pruebas de carga?";
 choices[53]= new Array();
 choices[53][0] = "Jmeter";
 choices[53][1] = "Loadrunner";
 choices[53][2] = "Grinder";
 choices[53][3] = "Turbine";
 answers[53] = 3;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9729. Examen TIC A2 2013 libre";
 preguntaids[53] = 9729


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[54][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[54][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[54][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[54] = 0;
 units[54] = ['1'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 45. Constituci&oacute;n de 1978";
 preguntaids[54] = 45


//  Id pregunta: 1859 Año de creación de pregunta: 2016
 questions[55]= "56)  La organizaci&oacute;n de discos RAID 4 necesita:";
 choices[55]= new Array();
 choices[55][0] = "4 discos f&iacute;sicos como m&iacute;nimo.";
 choices[55][1] = "3 discos f&iacute;sicos como m&iacute;nimo.";
 choices[55][2] = "2 discos f&iacute;sicos como m&iacute;nimo.";
 choices[55][3] = "No tiene limitaci&oacute;n en el n&uacute;mero m&iacute;nimo de discos f&iacute;sicos.";
 answers[55] = 1;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1859. ";
 preguntaids[55] = 1859


//  Id pregunta: 7708 Año de creación de pregunta: 2010
 questions[56]= "57)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[56]= new Array();
 choices[56][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la clave primaria de otra relaci&oacute;n.";
 choices[56][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla.";
 choices[56][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas.";
 choices[56][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena pueden ser nulos.";
 answers[56] = 3;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7708. Map 2007";
 preguntaids[56] = 7708


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[57]= "58)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[57]= new Array();
 choices[57][0] = "Subsecretario";
 choices[57][1] = "Subdirector general";
 choices[57][2] = "Secretario de Estado";
 choices[57][3] = "ninguna es correcta";
 answers[57] = 0;
 units[57] = ['4', '7', '8', '9'];
 blocks[57] = ['A1', 'A2'];
 comments[57] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[57] = 987


//  Id pregunta: 6168 Año de creación de pregunta: 2003
 questions[58]= "59)  &iquest;Qu&eacute; actividades econ&oacute;micas NO caen dentro del &aacute;mbito de la directiva 2000/31/CE?";
 choices[58]= new Array();
 choices[58][0] = "La radiodifusi&oacute;n de televisi&oacute;n o de radio";
 choices[58][1] = "Los servicios de transmisi&oacute;n de informaci&oacute;n a trav&eacute;s de una red de comunicaci&oacute;n";
 choices[58][2] = "La venta de mercanc&iacute;as en l&iacute;nea";
 choices[58][3] = "El env&iacute;o de comunicaciones comerciales por correo electr&oacute;nico";
 answers[58] = 0;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 6168. Directiva 200/31/CE, consideraci&oacute;n 18)";
 preguntaids[58] = 6168


//  Id pregunta: 870 Año de creación de pregunta: 2016
 questions[59]= "60)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[59]= new Array();
 choices[59][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[59][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[59][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[59][3] = "Todas las respuestas son correctas.";
 answers[59] = 0;
 units[59] = ['101'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 870. Junta de Extremadura A1 2015";
 preguntaids[59] = 870


//  Id pregunta: 7069 Año de creación de pregunta: 2010
 questions[60]= "61)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[60]= new Array();
 choices[60][0] = "Calcular la media de cualquier atributo.";
 choices[60][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[60][2] = "Calcular la suma de los valores de un atributo.";
 choices[60][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[60] = 1;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7069. ";
 preguntaids[60] = 7069


//  Id pregunta: 5002 Año de creación de pregunta: 2002
 questions[61]= "62)  Los terminales dise&ntilde;ados para conectarse directamente a la RDSI, como los tel&eacute;fonos digitales RDSI, un ordenador equipado con tarjeta adaptadora a RDSI y software &ldquo;driver&rdquo; de la tarjeta adaptadora a RDSI se denominan:";
 choices[61]= new Array();
 choices[61][0] = "ET1";
 choices[61][1] = "ET2";
 choices[61][2] = "TR2";
 choices[61][3] = "AT";
 answers[61] = 0;
 units[61] = ['114'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5002. ";
 preguntaids[61] = 5002


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[62]= "63)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[62]= new Array();
 choices[62][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[62][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[62][2] = "Ministerio de la Presidencia";
 choices[62][3] = "Ministerio de Fomento";
 answers[62] = 2;
 units[62] = ['22'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 507. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[62] = 507


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[63]= "64)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[63]= new Array();
 choices[63][0] = "De los interesados en el procedimiento";
 choices[63][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[63][2] = "Disposiciones generales";
 choices[63][3] = "De los actos administrativos";
 answers[63] = 2;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[63] = 220


//  Id pregunta: 10207 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Qu&eacute; niveles de Complemento de Destino engloban los puestos del grupo A1?";
 choices[64]= new Array();
 choices[64][0] = "18 a 28";
 choices[64][1] = "18 a 30";
 choices[64][2] = "20 a 30";
 choices[64][3] = "26 a 30";
 answers[64] = 2;
 units[64] = ['26'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 10207. ";
 preguntaids[64] = 10207


//  Id pregunta: 4003 Año de creación de pregunta: 2002
 questions[65]= "66)  Las herramientas CVS y RCS son:";
 choices[65]= new Array();
 choices[65][0] = "herramientas de gesti&oacute;n de contenidos.";
 choices[65][1] = "herramientas ofim&aacute;ticas de dise&ntilde;os gr&aacute;ficos.";
 choices[65][2] = "herramientas de control de versiones.";
 choices[65][3] = "herramientas de control de configuraci&oacute;n.";
 answers[65] = 2;
 units[65] = ['95'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 4003. ";
 preguntaids[65] = 4003


//  Id pregunta: 5847 Año de creación de pregunta: 2007
 questions[66]= "67)  Cual de los siguientes no es un activo en Magerit:";
 choices[66]= new Array();
 choices[66][0] = "www";
 choices[66][1] = "url";
 choices[66][2] = "anon";
 choices[66][3] = "edi";
 answers[66] = 1;
 units[66] = ['45'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 5847. Examen 2006 JCYL";
 preguntaids[66] = 5847


//  Id pregunta: 8314 Año de creación de pregunta: 2011
 questions[67]= "68)  Respecto al modelo en espiral es falso que:";
 choices[67]= new Array();
 choices[67][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[67][1] = "Se compone de ciclos.";
 choices[67][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[67][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[67] = 2;
 units[67] = ['82'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 8314. Examen UPM A2 2011";
 preguntaids[67] = 8314


//  Id pregunta: 8222 Año de creación de pregunta: 2011
 questions[68]= "69)  Seg&uacute;n M&eacute;trica v3 &iquest;cu&aacute;l de las siguientes NO es un tipo de relaci&oacute;n del diagrama de clases?";
 choices[68]= new Array();
 choices[68][0] = "Inclusi&oacute;n";
 choices[68][1] = "Agregaci&oacute;n";
 choices[68][2] = "Herencia";
 choices[68][3] = "Composici&oacute;n";
 answers[68] = 0;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 8222. Examen TIC A2 2010 interna";
 preguntaids[68] = 8222


//  Id pregunta: 5357 Año de creación de pregunta: 2006
 questions[69]= "70)  Si pido a alguien su nombre le estoy pidiendo";
 choices[69]= new Array();
 choices[69][0] = "Identificaci&oacute;n";
 choices[69][1] = "Autorizaci&oacute;n";
 choices[69][2] = "Autenticaci&oacute;n";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 0;
 units[69] = ['120'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5357. ";
 preguntaids[69] = 5357


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[70]= "71)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[70]= new Array();
 choices[70][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[70][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[70][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[70][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[70] = 3;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 80. Constituci&oacute;n de 1978";
 preguntaids[70] = 80


//  Id pregunta: 5798 Año de creación de pregunta: 2007
 questions[71]= "72)  Un detector de intrusiones act&uacute;a a:";
 choices[71]= new Array();
 choices[71][0] = "nivel f&iacute;sico";
 choices[71][1] = "nivel de enlace";
 choices[71][2] = "nivel de red";
 choices[71][3] = "nivel de aplicaci&oacute;n";
 answers[71] = 3;
 units[71] = ['119', '120'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5798. ";
 preguntaids[71] = 5798


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[72]= new Array();
 choices[72][0] = "De los derechos y deberes fundamentales.";
 choices[72][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[72][2] = "Derechos y libertades.";
 choices[72][3] = "De la Corona.";
 answers[72] = 2;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[72] = 74


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[73]= new Array();
 choices[73][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[73][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[73][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[73][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[73] = 3;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 303. Presupuestos generales";
 preguntaids[73] = 303


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[74]= new Array();
 choices[74][0] = "Crecimiento inteligente.";
 choices[74][1] = "Crecimiento inclusivo.";
 choices[74][2] = "Crecimiento sostenible.";
 choices[74][3] = "Crecimiento integrador.";
 answers[74] = 1;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 105. Uni&oacute;n Europea";
 preguntaids[74] = 105


