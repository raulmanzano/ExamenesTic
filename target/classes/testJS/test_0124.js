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
//  Id pregunta: 10006 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[0]= new Array();
 choices[0][0] = "Request.";
 choices[0][1] = "Invoke.";
 choices[0][2] = "Response.";
 choices[0][3] = "Confirmation.";
 answers[0] = 1;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10006. Examen TIC A2 2014";
 preguntaids[0] = 10006


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[1]= "2)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[1]= new Array();
 choices[1][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[1][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[1][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[1][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[1] = 0;
 units[1] = ['10'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 1976. ";
 preguntaids[1] = 1976


//  Id pregunta: 8595 Año de creación de pregunta: 2013
 questions[2]= "3)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[2]= new Array();
 choices[2][0] = "Una UART";
 choices[2][1] = "El controlador de puerto paralelo";
 choices[2][2] = "Reloj de tiempo real";
 choices[2][3] = "Todas las anteriores";
 answers[2] = 3;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8595. ";
 preguntaids[2] = 8595


//  Id pregunta: 10014 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[3]= new Array();
 choices[3][0] = "Denegaci&oacute;n de servicio.";
 choices[3][1] = "Hombre intermedio.";
 choices[3][2] = "Fuerza Bruta.";
 choices[3][3] = "Ingenier&iacute;a social.";
 answers[3] = 0;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10014. Examen TIC A2 2014";
 preguntaids[3] = 10014


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[4]= "5)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[4]= new Array();
 choices[4][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[4][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[4][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[4][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[4] = 3;
 units[4] = ['7', '77'];
 blocks[4] = ['A2', 'B2'];
 comments[4] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[4] = 9791


//  Id pregunta: 7666 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?";
 choices[5]= new Array();
 choices[5][0] = "WSDL.";
 choices[5][1] = "SOAP.";
 choices[5][2] = "UDDI.";
 choices[5][3] = "XHTML.";
 answers[5] = 2;
 units[5] = ['74'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7666. Similar a Map 2007";
 preguntaids[5] = 7666


//  Id pregunta: 2062 Año de creación de pregunta: 2002
 questions[6]= "7)  Al hablar de &quot;Metodolog&iacute;a de planificaci&oacute;n de capacidad&quot;, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "La metodolog&iacute;a Bench-Mark se usa para comparar distintos sistemas inform&aacute;ticos frente a una carga caracter&iacute;stica de una instalaci&oacute;n concreta que permite realizar mediciones en el ambiente real";
 choices[6][1] = "La metodolog&iacute;a de proyecci&oacute;n lineal se basa en leyes como las de Parkinson y Murphy";
 choices[6][2] = "La metodolog&iacute;a de proyecci&oacute;n lineal se puede aplicar para explicar fen&oacute;menos de comportamiento no lineal";
 choices[6][3] = "La metodolog&iacute;a Bench-Mark se basa en la utilizaci&oacute;n de programas para simular la realidad";
 answers[6] = 0;
 units[6] = ['29'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2062. ";
 preguntaids[6] = 2062


//  Id pregunta: 4233 Año de creación de pregunta: 2006
 questions[7]= "8)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[7]= new Array();
 choices[7][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[7][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[7][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[7][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[7] = 2;
 units[7] = ['93'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 4233. ";
 preguntaids[7] = 4233


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[8]= new Array();
 choices[8][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[8][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[8][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[8][3] = "El pago de subsidios a parados";
 answers[8] = 3;
 units[8] = ['15'];
 blocks[8] = ['A3'];
 comments[8] = "Id Pregunta: 421. Mercado laboral";
 preguntaids[8] = 421


//  Id pregunta: 2624 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes entornos UNIX no puede ser considerado como SVR4?:";
 choices[9]= new Array();
 choices[9][0] = "4.2 BSD";
 choices[9][1] = "Solaris 2.3";
 choices[9][2] = "Unixware";
 choices[9][3] = "HP-UX";
 answers[9] = 0;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2624. ";
 preguntaids[9] = 2624


//  Id pregunta: 8529 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[10]= new Array();
 choices[10][0] = "Identificaci&oacute;n de la necesidad de dise&ntilde;o no centrado en el humano";
 choices[10][1] = "Evaluaci&oacute;n de los dise&ntilde;os frente a los requisitos";
 choices[10][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[10][3] = "Entender y especificar el contexto de uso.";
 answers[10] = 0;
 units[10] = ['42'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 8529. ";
 preguntaids[10] = 8529


//  Id pregunta: 4456 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN con CSMA/CD?:";
 choices[11]= new Array();
 choices[11][0] = "802.1";
 choices[11][1] = "802.2";
 choices[11][2] = "802.3";
 choices[11][3] = "802.4";
 answers[11] = 2;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4456. ";
 preguntaids[11] = 4456


//  Id pregunta: 1535 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la LOPD, &iquest;qu&eacute; es el Registro General de Protecci&oacute;n de Datos?";
 choices[12]= new Array();
 choices[12][0] = "Se trata de un fichero gen&eacute;rico, presente en cada una de las diferentes Agencias de Protecci&oacute;n de Datos, en el que se inscriben, a su vez, los ficheros de datos personales.";
 choices[12][1] = "Es la denominaci&oacute;n oficial del registro electr&oacute;nico de la Agencia Espa&ntilde;ola de Protecci&oacute;n de datos.";
 choices[12][2] = "Es un &oacute;rgano integrado en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[12][3] = "Es la denominaci&oacute;n oficial del conjunto de buenas pr&aacute;cticas para la protecci&oacute;n de datos personales, establecidas por la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[12] = 2;
 units[12] = ['35'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 1535. ";
 preguntaids[12] = 1535


//  Id pregunta: 5736 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes opciones NO es un contenedor para la arquitectura J2EE?";
 choices[13]= new Array();
 choices[13][0] = "contenedor web";
 choices[13][1] = "contenedor EJB";
 choices[13][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[13][3] = "contenedor de base de datos";
 answers[13] = 3;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5736. ";
 preguntaids[13] = 5736


//  Id pregunta: 6375 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes es la declaraci&oacute;n correcta de la versi&oacute;n de XML?";
 choices[14]= new Array();
 choices[14][0] = "&lt;xml version=&quot;1.0&quot; /&gt;";
 choices[14][1] = "&lt;?xml version=&quot;1.0&quot; /&gt;";
 choices[14][2] = "&lt;?xml version=&quot;1.0&quot;?&gt;";
 choices[14][3] = "&lt;?xml version=&quot;1.0&quot;?/&gt;";
 answers[14] = 2;
 units[14] = ['74'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6375. Examen 2006 JCYL";
 preguntaids[14] = 6375


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[15]= "16)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[15]= new Array();
 choices[15][0] = "X.";
 choices[15][1] = "XIX.";
 choices[15][2] = "XV.";
 choices[15][3] = "XIII.";
 answers[15] = 1;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[15] = 147


//  Id pregunta: 3660 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes es una particularidad del dise&ntilde;o orientado a objetos?";
 choices[16]= new Array();
 choices[16][0] = "Modularidad.";
 choices[16][1] = "Ocultaci&oacute;n de la informaci&oacute;n.";
 choices[16][2] = "Abstracci&oacute;n.";
 choices[16][3] = "Todos lo son.";
 answers[16] = 3;
 units[16] = ['89'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3660. ";
 preguntaids[16] = 3660


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[17][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[17][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[17][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[17] = 3;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 440. AGE A1 2015";
 preguntaids[17] = 440


//  Id pregunta: 10659 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es regulada por el Gobierno para la administraci&oacute;n del espectro?";
 choices[18]= new Array();
 choices[18][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[18][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[18][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[18][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[18] = 1;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10659. ";
 preguntaids[18] = 10659


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[19]= new Array();
 choices[19][0] = "El 1 de junio de 1999.";
 choices[19][1] = "El 1 de mayo de 1999.";
 choices[19][2] = "El 1 de abril de 1999.";
 choices[19][3] = "El 1 de marzo de 1999.";
 answers[19] = 1;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 186. Uni&oacute;n Europea";
 preguntaids[19] = 186


//  Id pregunta: 9154 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[20]= new Array();
 choices[20][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad.";
 choices[20][1] = "El esquema conceptual.";
 choices[20][2] = "Fichero diario.";
 choices[20][3] = "Triggers.";
 answers[20] = 2;
 units[20] = ['60'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9154. Examen TIC A2 2013";
 preguntaids[20] = 9154


//  Id pregunta: 8976 Año de creación de pregunta: 2013
 questions[21]= "22)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[21]= new Array();
 choices[21][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[21][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[21][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[21][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[21] = 1;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 8976. Examen TIC A1 2011";
 preguntaids[21] = 8976


//  Id pregunta: 8264 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[22]= new Array();
 choices[22][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[22][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[22][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[22][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[22] = 1;
 units[22] = ['7'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 8264. Examen TIC A2 2010 interna";
 preguntaids[22] = 8264


//  Id pregunta: 3807 Año de creación de pregunta: 2002
 questions[23]= "24)  En el modelo de estimaci&oacute;n de costes de desarrollo de software (COCOMO) la evaluaci&oacute;n se hace en funci&oacute;n de lo que se conoce como DSI (Delivered Source Instructions). &iquest;Qu&eacute; tipo de instrucciones no se incluyen en este concepto?:";
 choices[23]= new Array();
 choices[23][0] = "Las correspondientes a control de trabajos o procedimientos JCL";
 choices[23][1] = "La de declaraci&oacute;n de datos";
 choices[23][2] = "Las instrucciones de formateo de pantallas";
 choices[23][3] = "Se incluyen todas las anteriores";
 answers[23] = 3;
 units[23] = ['94'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3807. ";
 preguntaids[23] = 3807


//  Id pregunta: 7349 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[24]= new Array();
 choices[24][0] = "Dos a&ntilde;os";
 choices[24][1] = "Cuatro a&ntilde;os";
 choices[24][2] = "30 meses";
 choices[24][3] = "60 meses";
 answers[24] = 3;
 units[24] = ['30'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 7349. Examen TIC B 2009";
 preguntaids[24] = 7349


//  Id pregunta: 2761 Año de creación de pregunta: 2002
 questions[25]= "26)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[25]= new Array();
 choices[25][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[25][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[25][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[25][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[25] = 2;
 units[25] = ['74'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2761. ";
 preguntaids[25] = 2761


//  Id pregunta: 4241 Año de creación de pregunta: 2006
 questions[26]= "27)  La distribucci&oacute;n Rayleigh se utiliza en el modelo de estimaci&oacute;n del esfuerzo de desarrollo de un proyecto SW propuesto por:";
 choices[26]= new Array();
 choices[26][0] = "Putnam";
 choices[26][1] = "Walston-Felix";
 choices[26][2] = "Esterling";
 choices[26][3] = "McCall";
 answers[26] = 0;
 units[26] = ['94'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4241. ";
 preguntaids[26] = 4241


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[27]= new Array();
 choices[27][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[27][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[27][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[27][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[27] = 2;
 units[27] = ['22'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 505. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[27] = 505


//  Id pregunta: 8810 Año de creación de pregunta: 2013
 questions[28]= "29)  Una red de anillo en contienda.";
 choices[28]= new Array();
 choices[28][0] = "Nunca se pasa un testigo";
 choices[28][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[28][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[28][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[28] = 1;
 units[28] = ['112'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8810. ";
 preguntaids[28] = 8810


//  Id pregunta: 9865 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[29]= new Array();
 choices[29][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[29][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[29][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[29][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[29] = 0;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9865. ";
 preguntaids[29] = 9865


//  Id pregunta: 7022 Año de creación de pregunta: 2010
 questions[30]= "31)  No es una dificultad del modelo de ciclo de vida en espiral:";
 choices[30]= new Array();
 choices[30][0] = "Dificultad a la hora de definir requisitos";
 choices[30][1] = "Dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[30][2] = "Necesidad de elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[30][3] = "Adaptar su aplicabilidad al software contratado";
 answers[30] = 0;
 units[30] = ['82'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7022. ";
 preguntaids[30] = 7022


//  Id pregunta: 10609 Año de creación de pregunta: 2015
 questions[31]= "32)  Seg&uacute;n la Ley 9/2014, los planes nacionales de numeraci&oacute;n se aprueban mediante:";
 choices[31]= new Array();
 choices[31][0] = "Orden Ministerial del MINETUR.";
 choices[31][1] = "Resoluci&oacute;n de la CNMC.";
 choices[31][2] = "Real Decreto.";
 choices[31][3] = "Ninguna de las anteriores.";
 answers[31] = 2;
 units[31] = ['121'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10609. Articulo 19";
 preguntaids[31] = 10609


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[32]= "33)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[32]= new Array();
 choices[32][0] = "La mujeres.";
 choices[32][1] = "Lo hombres.";
 choices[32][2] = "Todas las personas.";
 choices[32][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[32] = 2;
 units[32] = ['14'];
 blocks[32] = ['A3'];
 comments[32] = "Id Pregunta: 393. Pol&iacute;ticas de igualdad";
 preguntaids[32] = 393


//  Id pregunta: 1904 Año de creación de pregunta: 2016
 questions[33]= "34)  En el contexto de TCP/IP, &iquest;qu&eacute; se entiende por encapsulamiento?";
 choices[33]= new Array();
 choices[33][0] = "La partici&oacute;n del paquete a enviar en trozos acordes con la Unidad Maxima de Transferencia que soporta la red por la que se va a enviar";
 choices[33][1] = "EI cifrado de las direcciones IP de origen y destino";
 choices[33][2] = "La adici&oacute;n de informaci&oacute;n de control en cada nivel antes de pasarla al nivel inferior.";
 choices[33][3] = "La encriptaci&oacute;n de los octetos de informaci&oacute;n de los paquetes IP.";
 answers[33] = 2;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1904. ";
 preguntaids[33] = 1904


//  Id pregunta: 4624 Año de creación de pregunta: 2002
 questions[34]= "35)  En RDSI, &iquest;qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[34]= new Array();
 choices[34][0] = "R";
 choices[34][1] = "S";
 choices[34][2] = "T";
 choices[34][3] = "U";
 answers[34] = 2;
 units[34] = ['114'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4624. ";
 preguntaids[34] = 4624


//  Id pregunta: 7241 Año de creación de pregunta: 2010
 questions[35]= "36)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[35]= new Array();
 choices[35][0] = "RD 951/2003";
 choices[35][1] = "RD 952/2003";
 choices[35][2] = "RD 951/2005";
 choices[35][3] = "RD 951/2006";
 answers[35] = 2;
 units[35] = ['92'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7241. ";
 preguntaids[35] = 7241


//  Id pregunta: 8079 Año de creación de pregunta: 2011
 questions[36]= "37)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[36]= new Array();
 choices[36][0] = "a) 172.16.20.0";
 choices[36][1] = "172.16.24.45";
 choices[36][2] = "Ambas respuestas son correctas";
 choices[36][3] = "Ninguna respuesta es correcta";
 answers[36] = 2;
 units[36] = ['105'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8079. Analista Ayto. Madrid 2010";
 preguntaids[36] = 8079


//  Id pregunta: 6743 Año de creación de pregunta: 2009
 questions[37]= "38)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[37]= new Array();
 choices[37][0] = "Miembros Plenos";
 choices[37][1] = "Miembros Coordinadores";
 choices[37][2] = "Miembros Asociados";
 choices[37][3] = "Miembros Consejeros";
 answers[37] = 1;
 units[37] = ['48'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 6743. MAP 2008 A1";
 preguntaids[37] = 6743


//  Id pregunta: 3096 Año de creación de pregunta: 2002
 questions[38]= "39)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[38]= new Array();
 choices[38][0] = "Homogeneidad de datos almacenados.";
 choices[38][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[38][2] = "Total organizaci&oacute;n.";
 choices[38][3] = "Facilidad para responder a consultas complejas.";
 answers[38] = 1;
 units[38] = ['72', '73'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3096. ";
 preguntaids[38] = 3096


//  Id pregunta: 10389 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[39]= new Array();
 choices[39][0] = "Juventud en movimiento";
 choices[39][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[39][2] = "Agenda Digital para Europa";
 choices[39][3] = "Todas las anteriores";
 answers[39] = 3;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 10389. ";
 preguntaids[39] = 10389


//  Id pregunta: 6290 Año de creación de pregunta: 2003
 questions[40]= "41)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[40]= new Array();
 choices[40][0] = "5";
 choices[40][1] = "7";
 choices[40][2] = "9";
 choices[40][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[40] = 3;
 units[40] = ['82'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6290. ";
 preguntaids[40] = 6290


//  Id pregunta: 7122 Año de creación de pregunta: 2010
 questions[41]= "42)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante...";
 choices[41]= new Array();
 choices[41][0] = "Orden del Ministerio de Presidencia";
 choices[41][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[41][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[41][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[41] = 3;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 7122. Art&iacute;culo 19 RD 1671/2009";
 preguntaids[41] = 7122


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[42]= "43)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[42]= new Array();
 choices[42][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[42][1] = "mediante resoluci&oacute;n judicial especial";
 choices[42][2] = "&uacute;nicamente mediante poder notarial";
 choices[42][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[42] = 3;
 units[42] = ['7'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 229. Ley 39/2015";
 preguntaids[42] = 229


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[43]= "44)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[43]= new Array();
 choices[43][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[43][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[43][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[43][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[43] = 1;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 487. Sociedad de la informaci&oacute;n";
 preguntaids[43] = 487


//  Id pregunta: 2899 Año de creación de pregunta: 2002
 questions[44]= "45)  Indique la afirmaci&oacute;n falsa sobre sistemas en tiempo real.";
 choices[44]= new Array();
 choices[44][0] = "El sistema operativo de tiempo real deber&aacute; contar con gesti&oacute;n de memoria virtual.";
 choices[44][1] = "Los sistemas de tiempo real se basan en la realimentaci&oacute;n de la informaci&oacute;n.";
 choices[44][2] = "El sistema deber&aacute; permanecer pr&aacute;cticamente inactivo para poder atender con la mayor rapidez posible cualquier evento de entrada.";
 choices[44][3] = "El sistema operativo de tiempo real deber&aacute; contar con bloqueo de los procesos cuando est&eacute;n espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 answers[44] = 0;
 units[44] = ['86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 2899. ";
 preguntaids[44] = 2899


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[45]= "46)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[45]= new Array();
 choices[45][0] = "Principio de transparencia.";
 choices[45][1] = "Principio de cooperaci&oacute;n.";
 choices[45][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[45][3] = "Principio de lealtad institucional.";
 answers[45] = 1;
 units[45] = ['11'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 320. Presupuestos generales";
 preguntaids[45] = 320


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[46]= new Array();
 choices[46][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la Ley 39/2015";
 choices[46][1] = "la Ley 39/2015, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[46][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la Ley 39/2015";
 choices[46][3] = "la Ley 39/2015, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[46] = 0;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 218. Ley 39/2015";
 preguntaids[46] = 218


//  Id pregunta: 7189 Año de creación de pregunta: 2010
 questions[47]= "48)  UMLSec:";
 choices[47]= new Array();
 choices[47][0] = "Se utiliza en el desarrollo de software para modelizar pol&iacute;ticas de control de acceso, integr&aacute;ndolas en el sistema desarrollado.";
 choices[47][1] = "Es una metodolog&iacute;a para el an&aacute;lisis y la gesti&oacute;n de riesgos en proyectos de desarrollo orientado a objetos.";
 choices[47][2] = "Es sin&oacute;nimo de SecureUML.";
 choices[47][3] = "Ninguna de las anteriores.";
 answers[47] = 3;
 units[47] = ['89'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7189. Castilla La Mancha 2009";
 preguntaids[47] = 7189


//  Id pregunta: 8710 Año de creación de pregunta: 2013
 questions[48]= "49)  Si se quisiera un middleware para un grid se elegir&iacute;a:";
 choices[48]= new Array();
 choices[48][0] = "Globus Toolkit.";
 choices[48][1] = "Cluster Veritas.";
 choices[48][2] = "Arduino.";
 choices[48][3] = "Data protector.";
 answers[48] = 0;
 units[48] = ['49'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8710. Examen TICA2-2011";
 preguntaids[48] = 8710


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[49]= "50)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[49]= new Array();
 choices[49][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[49][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[49][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[49][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[49] = 1;
 units[49] = ['7'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 1972. ";
 preguntaids[49] = 1972


//  Id pregunta: 10119 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes servicios transforma un texto original en un hipertexto con v&iacute;nculos geogr&aacute;ficos?:";
 choices[50]= new Array();
 choices[50][0] = "Coberturas en Web (WCS).";
 choices[50][1] = "Nom&eacute;nclator (Gazetteer).";
 choices[50][2] = "Cat&aacute;logo (CSW).";
 choices[50][3] = "Geoparser.";
 answers[50] = 3;
 units[50] = ['71'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10119. Examen TIC A1 2014";
 preguntaids[50] = 10119


//  Id pregunta: 7139 Año de creación de pregunta: 2010
 questions[51]= "52)  El Watermarking es una t&eacute;cnica para comprobar la legalidad del software, &iquest;De qu&eacute; tipo?";
 choices[51]= new Array();
 choices[51][0] = "An&oacute;nima";
 choices[51][1] = "Esteganogr&aacute;fica";
 choices[51][2] = "Asim&eacute;trica";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = 1;
 units[51] = ['41'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 7139. ";
 preguntaids[51] = 7139


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[52]= "53)  El sector Servicios NO incluye:";
 choices[52]= new Array();
 choices[52][0] = "El Comercio";
 choices[52][1] = "Los Transportes";
 choices[52][2] = "La Energ&iacute;a";
 choices[52][3] = "Las Comunicaciones";
 answers[52] = 2;
 units[52] = ['12'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 345. Modelo econ&oacute;mico";
 preguntaids[52] = 345


//  Id pregunta: 1325 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale cual de las siguientes NO es un tipo de conexi&oacute;n v&aacute;lida entre un proceso y un almac&eacute;n de datos de un DFD (diagrama de flujo de datos), seg&uacute;n M&eacute;trica v3:";
 choices[53]= new Array();
 choices[53][0] = "Flujo de consulta.";
 choices[53][1] = "Flujo de actualizaci&oacute;n.";
 choices[53][2] = "Flujo de dialogo.";
 choices[53][3] = "Flujo de sincronizaci&oacute;n";
 answers[53] = 3;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 1325. ";
 preguntaids[53] = 1325


//  Id pregunta: 9885 Año de creación de pregunta: 2015
 questions[54]= "55)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[54]= new Array();
 choices[54][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[54][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[54][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[54][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[54] = 1;
 units[54] = ['7', '19'];
 blocks[54] = ['A2', 'A4'];
 comments[54] = "Id Pregunta: 9885. ";
 preguntaids[54] = 9885


//  Id pregunta: 2694 Año de creación de pregunta: 2002
 questions[55]= "56)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[55]= new Array();
 choices[55][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[55][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[55][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[55][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[55] = 0;
 units[55] = ['72'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2694. ";
 preguntaids[55] = 2694


//  Id pregunta: 2666 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;Qu&eacute; arquitectura monoprocesador se caracteriza por ejecutar una instruccion sobre varios datos de manera simult&aacute;nea?:";
 choices[56]= new Array();
 choices[56][0] = "SIMD";
 choices[56][1] = "MIMD";
 choices[56][2] = "SISD";
 choices[56][3] = "MISD";
 answers[56] = 0;
 units[56] = ['49'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2666. ";
 preguntaids[56] = 2666


//  Id pregunta: 6062 Año de creación de pregunta: 2003
 questions[57]= "58)  En ADSL, las velocidades de datos dependen de diversos factores. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[57]= new Array();
 choices[57][0] = "Longitud de la l&iacute;nea de cobre.";
 choices[57][1] = "La presencia de derivaciones puenteadas.";
 choices[57][2] = "La informaci&oacute;n de se&ntilde;alizaci&oacute;n que se debe transmitir simult&aacute;neamente.";
 choices[57][3] = "La interferencia de acoplamientos cruzados.";
 answers[57] = 2;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6062. TIC B 2007";
 preguntaids[57] = 6062


//  Id pregunta: 8312 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[58]= new Array();
 choices[58][0] = "Para construir aplicaciones y servicios Web";
 choices[58][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[58][2] = "Para construir la interface del usuario";
 choices[58][3] = "Para conectar los programas";
 answers[58] = 0;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8312. Examen UPM A2 2011";
 preguntaids[58] = 8312


//  Id pregunta: 2625 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un lenguaje espec&iacute;fico de la ingenier&iacute;a del conocimiento?:";
 choices[59]= new Array();
 choices[59][0] = "C++";
 choices[59][1] = "Java";
 choices[59][2] = "PROLOG";
 choices[59][3] = "PASCAL";
 answers[59] = 2;
 units[59] = ['68'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2625. ";
 preguntaids[59] = 2625


//  Id pregunta: 6897 Año de creación de pregunta: 2010
 questions[60]= "61)  ADO.NET es:";
 choices[60]= new Array();
 choices[60][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[60][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[60][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[60][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[60] = 2;
 units[60] = ['63'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6897. TIC A 2009";
 preguntaids[60] = 6897


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[61]= new Array();
 choices[61][0] = "A los ministros.";
 choices[61][1] = "Las respuestas a) y b) son correctas.";
 choices[61][2] = "Las respuestas a) y b) no son correctas.";
 choices[61][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[61] = 1;
 units[61] = ['11'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 279. Presupuestos generales";
 preguntaids[61] = 279


//  Id pregunta: 5115 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Qu&eacute; es Javascript7:";
 choices[62]= new Array();
 choices[62][0] = "Un compilador de Java.";
 choices[62][1] = "Un generador de applets Java";
 choices[62][2] = "Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[62][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[62] = 3;
 units[62] = ['62'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 5115. Junta Andaluc&iacute;a";
 preguntaids[62] = 5115


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[63]= "64)  Cu&aacute;l de los siguientes NO es una forma b&aacute;sica de funcionamiento o modo de operaci&oacute;n con los bloques de mensajes en los algoritmos sim&eacute;tricos de cifrado:";
 choices[63]= new Array();
 choices[63][0] = "Cipher Block Chainning (CBC).";
 choices[63][1] = "Cipher FeedBack (CFB).";
 choices[63][2] = "Output FeedBack (OFB).";
 choices[63][3] = "Quadruple Block Cipher (QBC).";
 answers[63] = 3;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 778. AGE A2 2015";
 preguntaids[63] = 778


//  Id pregunta: 1997 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[64]= new Array();
 choices[64][0] = "PROS@.";
 choices[64][1] = "ISTMO.";
 choices[64][2] = "SSD-AAPP.";
 choices[64][3] = "Ninguna de las anteriores.";
 answers[64] = 2;
 units[64] = ['38'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 1997. ";
 preguntaids[64] = 1997


//  Id pregunta: 1431 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes NO es una potestad de las Cortes Generales declarada en el art&iacute;culo 66 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[65]= new Array();
 choices[65][0] = "La potestad legislativa del Estado.";
 choices[65][1] = "Aprobar sus Presupuestos.";
 choices[65][2] = "La potestad reglamentaria del Estado.";
 choices[65][3] = "Controlar la acci&oacute;n del Gobierno.";
 answers[65] = 2;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 1431. ";
 preguntaids[65] = 1431


//  Id pregunta: 6446 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Cu&aacute;l es la principal l&iacute;nea de trabajo en el campo de la recuperaci&oacute;n de la informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Aproximaciones sem&aacute;nticas";
 choices[66][1] = "Estad&iacute;sticas";
 choices[66][2] = "Las respuestas a) y b) son verdaderas";
 choices[66][3] = "Las respuestas a) y b) son falsas";
 answers[66] = 2;
 units[66] = ['100'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 6446. ";
 preguntaids[66] = 6446


//  Id pregunta: 7893 Año de creación de pregunta: 2011
 questions[67]= "68)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[67]= new Array();
 choices[67][0] = "Una Secretar&iacute;a de Estado.";
 choices[67][1] = "Una Subsecretar&iacute;a.";
 choices[67][2] = "Una Subdirecci&oacute;n General.";
 choices[67][3] = "Una Direcci&oacute;n General.";
 answers[67] = 3;
 units[67] = ['47'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 7893. Examen TIC A1 2010";
 preguntaids[67] = 7893


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[68]= new Array();
 choices[68][0] = "A nivel de secci&oacute;n de programa.";
 choices[68][1] = "A nivel de grupo de programa.";
 choices[68][2] = "Ninguna de las respuestas es correcta.";
 choices[68][3] = "A nivel de programa.";
 answers[68] = 3;
 units[68] = ['11'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 275. Presupuestos generales";
 preguntaids[68] = 275


//  Id pregunta: 4995 Año de creación de pregunta: 2002
 questions[69]= "70)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[69]= new Array();
 choices[69][0] = "Adaptativos y redundantes";
 choices[69][1] = "Tipo 'source routing'";
 choices[69][2] = "Tipo 'spanning tree'";
 choices[69][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[69] = 2;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4995. ";
 preguntaids[69] = 4995


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[70]= "71)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[70]= new Array();
 choices[70][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[70][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[70][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[70][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[70] = 3;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 209. Ley 39/2015";
 preguntaids[70] = 209


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[71]= "72)  El plan nacional de ciudades inteligentes...";
 choices[71]= new Array();
 choices[71][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[71][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[71][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[71][3] = "No existe";
 answers[71] = 1;
 units[71] = ['19'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 453. Ciudades Inteligentes";
 preguntaids[71] = 453


//  Id pregunta: 10935 Año de creación de pregunta: 2015
 questions[72]= "73)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[72]= new Array();
 choices[72][0] = "transparencia";
 choices[72][1] = "responsabilidad";
 choices[72][2] = "universalidad";
 choices[72][3] = "publicidad del procedimiento";
 answers[72] = 2;
 units[72] = ['7'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 10935. ";
 preguntaids[72] = 10935


//  Id pregunta: 10942 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[73]= new Array();
 choices[73][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[73][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[73][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[73][3] = "Ninguna es correcta";
 answers[73] = 2;
 units[73] = ['104'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10942. ";
 preguntaids[73] = 10942


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[74]= "75)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[74]= new Array();
 choices[74][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[74][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[74][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[74][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[74] = 2;
 units[74] = ['12'];
 blocks[74] = ['A3'];
 comments[74] = "Id Pregunta: 332. Modelo econ&oacute;mico";
 preguntaids[74] = 332


