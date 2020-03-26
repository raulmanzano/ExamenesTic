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
//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[0]= "1)  Entre los sistemas de informaci&oacute;n transversales que se utilizan para facilitar la recogida global de datos sobre Recursos TIC en la Administraci&oacute;n del Estado encontramos al sistema de informaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "AWR.";
 choices[0][1] = "Acceda.";
 choices[0][2] = "REINA.";
 choices[0][3] = "EJIE.";
 answers[0] = 2;
 units[0] = ['47'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 624. AGE A2 2015";
 preguntaids[0] = 624


//  Id pregunta: 1742 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO se corresponde con las especificaciones de ANSI para cables de Categor&iacute;a 6:";
 choices[1]= new Array();
 choices[1][0] = "Alcanza frecuencias de hasta 500 MHz en cada par.";
 choices[1][1] = "Se emplea para Gigabit Ethernet.";
 choices[1][2] = "Caracterizan los cables de pares trenzados.";
 choices[1][3] = "Se define en la especificaci&oacute;n ANSI/TIA/EIA-568-B2-1";
 answers[1] = 0;
 units[1] = ['104'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1742. ";
 preguntaids[1] = 1742


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[2]= "3)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[2]= new Array();
 choices[2][0] = "La Administraci&oacute;n General del Estado";
 choices[2][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[2][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[2][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[2] = 1;
 units[2] = ['26'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 535. Gobernanza TIC";
 preguntaids[2] = 535


//  Id pregunta: 2058 Año de creación de pregunta: 2002
 questions[3]= "4)  A la ley org&aacute;nica que en Espa&ntilde;a regula el uso de la inform&aacute;tica para garantizar la intimidad personal de las personas, se le conoce como la:";
 choices[3]= new Array();
 choices[3][0] = "LOGSE";
 choices[3][1] = "LOPD";
 choices[3][2] = "LOT";
 choices[3][3] = "LOSDAT";
 answers[3] = 1;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2058. ";
 preguntaids[3] = 2058


//  Id pregunta: 7443 Año de creación de pregunta: 2010
 questions[4]= "5)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a facturae:";
 choices[4]= new Array();
 choices[4][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[4][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[4][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[4][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[4] = 3;
 units[4] = ['75'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7443. ";
 preguntaids[4] = 7443


//  Id pregunta: 2688 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[5]= new Array();
 choices[5][0] = "HTML es un subconjunto de SGML";
 choices[5][1] = "SGML es un subconjunto de HTML";
 choices[5][2] = "SGML se inspir&oacute; en HTML";
 choices[5][3] = "No tienen relaci&oacute;n";
 answers[5] = 0;
 units[5] = ['74'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2688. ";
 preguntaids[5] = 2688


//  Id pregunta: 3059 Año de creación de pregunta: 2002
 questions[6]= "7)  Si hablamos de formas normales en el modelo relacional, una de las siguientes afirmaciones es falsa:";
 choices[6]= new Array();
 choices[6][0] = "Una informaci&oacute;n est&aacute; en primera forma normal si no incluye ning&uacute;n grupo repetitivo";
 choices[6][1] = "La cuarta forma normal elimina dependencias monovaluadas";
 choices[6][2] = "La segunda forma normal, implica, adem&aacute;s de estar en primera forma normal, que en una relaci&oacute;n cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves, y no con partes de &eacute;stas";
 choices[6][3] = "La quinta forma normal elimina dependencias combinacionales";
 answers[6] = 1;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3059. ";
 preguntaids[6] = 3059


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[7]= "8)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[7]= new Array();
 choices[7][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[7][1] = "La CETIC";
 choices[7][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[7][3] = "El MHFP";
 answers[7] = 0;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 469. Estrategia TIC";
 preguntaids[7] = 469


//  Id pregunta: 9817 Año de creación de pregunta: 2015
 questions[8]= "9)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[8]= new Array();
 choices[8][0] = "IETF RFC 1738";
 choices[8][1] = "IETF RFC 1392";
 choices[8][2] = "IETF RFC 2616";
 choices[8][3] = "IETF RFC 4287";
 answers[8] = 3;
 units[8] = ['74'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9817. ";
 preguntaids[8] = 9817


//  Id pregunta: 7718 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l es la naturaleza jur&iacute;dica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[9]= new Array();
 choices[9][0] = "Organismo aut&oacute;nomo.";
 choices[9][1] = "Entidad P&uacute;blica Empresarial.";
 choices[9][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica.";
 choices[9][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;n adicional d&eacute;cima de la LOFAGE).";
 answers[9] = 2;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 7718. Map 2007";
 preguntaids[9] = 7718


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[10]= "11)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[10]= new Array();
 choices[10][0] = "Cifrada";
 choices[10][1] = "Conjunta";
 choices[10][2] = "Sistem&aacute;tica";
 choices[10][3] = "Todas son correctas";
 answers[10] = 3;
 units[10] = ['11'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 268. Presupuestos generales";
 preguntaids[10] = 268


//  Id pregunta: 5357 Año de creación de pregunta: 2006
 questions[11]= "12)  Si pido a alguien su nombre le estoy pidiendo";
 choices[11]= new Array();
 choices[11][0] = "Identificaci&oacute;n";
 choices[11][1] = "Autorizaci&oacute;n";
 choices[11][2] = "Autenticaci&oacute;n";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 0;
 units[11] = ['120'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5357. ";
 preguntaids[11] = 5357


//  Id pregunta: 8002 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor?";
 choices[12]= new Array();
 choices[12][0] = "JavaScript";
 choices[12][1] = "Applets";
 choices[12][2] = "JSP";
 choices[12][3] = "VisualScript";
 answers[12] = 2;
 units[12] = ['62'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8002. Examen TIC A2 2010";
 preguntaids[12] = 8002


//  Id pregunta: 9526 Año de creación de pregunta: 2014
 questions[13]= "14)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[13]= new Array();
 choices[13][0] = "RMI";
 choices[13][1] = "JTS";
 choices[13][2] = "JMAPI";
 choices[13][3] = "JTA";
 answers[13] = 3;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9526. JTA: Java Transaction Api; Remote Method Invocation; Java Topology Suite; Java Messaging Application Programming Interface.";
 preguntaids[13] = 9526


//  Id pregunta: 6552 Año de creación de pregunta: 2003
 questions[14]= "15)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[14]= new Array();
 choices[14][0] = "Servidor de aplicaciones";
 choices[14][1] = "Proxy";
 choices[14][2] = "Servidor LDAP";
 choices[14][3] = "Servidor de base de datos";
 answers[14] = 1;
 units[14] = ['119'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6552. ";
 preguntaids[14] = 6552


//  Id pregunta: 7865 Año de creación de pregunta: 2011
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[15]= new Array();
 choices[15][0] = "Mercado &uacute;nico digital din&aacute;mico.";
 choices[15][1] = "Acceso ultrarr&aacute;pido a Internet.";
 choices[15][2] = "Nativos digitales.";
 choices[15][3] = "Inclusi&oacute;n digital.";
 answers[15] = 2;
 units[15] = ['16'];
 blocks[15] = ['A3'];
 comments[15] = "Id Pregunta: 7865. Examen TIC A1 2010";
 preguntaids[15] = 7865


//  Id pregunta: 1309 Año de creación de pregunta: 2016
 questions[16]= "17)  Ethernet realiza la difusi&oacute;n recibiendo tramas con la siguiente direcci&oacute;n MAC de destino:";
 choices[16]= new Array();
 choices[16][0] = "00: 00: 00: 00: 00:FF";
 choices[16][1] = "FF:FF:FF:FF:FF:FF";
 choices[16][2] = "FF: 00: 00: 00: 00:FF";
 choices[16][3] = "00:00:00:00:00:00";
 answers[16] = 1;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1309. ";
 preguntaids[16] = 1309


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[17]= "18)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[17]= new Array();
 choices[17][0] = "Un plan de igualdad.";
 choices[17][1] = "Un informe de impacto de g&eacute;nero.";
 choices[17][2] = "Un programa de igualdad.";
 choices[17][3] = "Todas son correctas.";
 answers[17] = 1;
 units[17] = ['14'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 406. Pol&iacute;ticas de igualdad";
 preguntaids[17] = 406


//  Id pregunta: 4306 Año de creación de pregunta: 2004
 questions[18]= "19)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[18]= new Array();
 choices[18][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[18][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[18][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[18][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[18] = 2;
 units[18] = ['113'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4306. ";
 preguntaids[18] = 4306


//  Id pregunta: 1138 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;A qu&eacute; tipo de metodolog&iacute;as asignar&iacute;a SCRUM?";
 choices[19]= new Array();
 choices[19][0] = "Metodolog&iacute;as de Tiempo Real.";
 choices[19][1] = "Metodolog&iacute;as &Aacute;giles.";
 choices[19][2] = "Metodolog&iacute;as Orientadas a Objetos.";
 choices[19][3] = "Metodolog&iacute;as Estructuradas Orientadas a Datos Jer&aacute;rquicos.";
 answers[19] = 1;
 units[19] = ['84'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 1138. ";
 preguntaids[19] = 1138


//  Id pregunta: 10508 Año de creación de pregunta: 2015
 questions[20]= "21)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[20]= new Array();
 choices[20][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[20][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[20][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[20][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[20] = 0;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10508. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";
 preguntaids[20] = 10508


//  Id pregunta: 2617 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[21]= new Array();
 choices[21][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[21][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[21][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[21][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[21] = 0;
 units[21] = ['74'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2617. Es Wireless Markup Language";
 preguntaids[21] = 2617


//  Id pregunta: 5946 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[22]= new Array();
 choices[22][0] = "WAR (Web Archive)";
 choices[22][1] = "EAR (Enterprise Archive)";
 choices[22][2] = "BAR (Bean Archive)";
 choices[22][3] = "JAR (Java Archive)";
 answers[22] = 2;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5946. ";
 preguntaids[22] = 5946


//  Id pregunta: 8357 Año de creación de pregunta: 2011
 questions[23]= "24)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[23]= new Array();
 choices[23][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[23][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[23][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[23][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[23] = 0;
 units[23] = ['124'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8357. Analista Ayto. Madrid 2010";
 preguntaids[23] = 8357


//  Id pregunta: 6388 Año de creación de pregunta: 2003
 questions[24]= "25)  Cual de las siguientes afirmaciones no es correcta a la hora de definir una tabla en Oracle";
 choices[24]= new Array();
 choices[24][0] = "S&oacute;lo deben ser num&eacute;ricas aquellas columnas que sean susceptibles de operaciones aritm&eacute;ticas";
 choices[24][1] = "Una &ldquo;clave inteligente&rdquo; o clave compuesta es m&aacute;s eficiente que una clave compuesta por varias columnas";
 choices[24][2] = "Oracle interpreta por defecto todos los objetos en may&uacute;scula a no ser que se escriba su nombre entre comillas dobles.";
 choices[24][3] = "La ordenaci&oacute;n de columnas num&eacute;ricas es diferente de la ordenaci&oacute;n de las columnas alfanum&eacute;ricas";
 answers[24] = 1;
 units[24] = ['61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 6388. Examen 2006 JCYL";
 preguntaids[24] = 6388


//  Id pregunta: 3956 Año de creación de pregunta: 2002
 questions[25]= "26)  Sea una interrelaci&oacute;n 1:N entre dos entidades A y B. Si para toda ocurrencia de A pueden existir, o no, una o varias ocurrencias de B asociadas, y para una ocurrencia de B existe una ocurrencia de A asociada, se dice que esta interrelaci&oacute;n es:";
 choices[25]= new Array();
 choices[25][0] = "Obligatoria en A y opcional en B";
 choices[25][1] = "Obligatoria en B y opcional en A";
 choices[25][2] = "Obligatoria en ambos extremos";
 choices[25][3] = "Opcional en ambos extremos";
 answers[25] = 1;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3956. ";
 preguntaids[25] = 3956


//  Id pregunta: 8784 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[26]= new Array();
 choices[26][0] = "1000BASE-SX";
 choices[26][1] = "1000BASE-LX";
 choices[26][2] = "1000BASE-TX";
 choices[26][3] = "1000BASE-CX";
 answers[26] = 1;
 units[26] = ['106'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8784. Examen TIC A2 2011";
 preguntaids[26] = 8784


//  Id pregunta: 6619 Año de creación de pregunta: 2009
 questions[27]= "28)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[27]= new Array();
 choices[27][0] = "4";
 choices[27][1] = "5.3";
 choices[27][2] = "5.5";
 choices[27][3] = "6";
 answers[27] = 0;
 units[27] = ['66'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6619. ";
 preguntaids[27] = 6619


//  Id pregunta: 8796 Año de creación de pregunta: 2013
 questions[28]= "29)  Sobre los canales no estructurados en Europa:";
 choices[28]= new Array();
 choices[28][0] = "El H11 trabaja a 384 Kbps, agrupando 6 canales de 64 Kbps";
 choices[28][1] = "El H0 trabaja a 1536 Kbps, agrupando 24 canales de 64 Kbps";
 choices[28][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 Kbps";
 choices[28][3] = "El H0 trabaja 384 Kbps, agrupando 6 canales de 64 Kbps";
 answers[28] = 3;
 units[28] = ['114'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8796. ";
 preguntaids[28] = 8796


//  Id pregunta: 10921 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Qu&eacute; especificaci&oacute;n permite los enlaces bidireccionales como mecanismo hipertextual en un documento XML?";
 choices[29]= new Array();
 choices[29][0] = "DTD";
 choices[29][1] = "XUA";
 choices[29][2] = "XLL";
 choices[29][3] = "XSL";
 answers[29] = 2;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10921. ";
 preguntaids[29] = 10921


//  Id pregunta: 9476 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[30]= new Array();
 choices[30][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprime otros";
 choices[30][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[30][2] = "Los lenguajes orientados a objetos son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[30][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[30] = 1;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 9476. ";
 preguntaids[30] = 9476


//  Id pregunta: 7687 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un medio de pago?";
 choices[31]= new Array();
 choices[31][0] = "Simultaneidad.";
 choices[31][1] = "Interactividad.";
 choices[31][2] = "No repudio.";
 choices[31][3] = "Automatizaci&oacute;n.";
 answers[31] = 2;
 units[31] = ['75'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7687. Map 2007";
 preguntaids[31] = 7687


//  Id pregunta: 990 Año de creación de pregunta: 2016
 questions[32]= "33)  De acuerdo al articulo 55 de la ley 40/2015, tienen la condici&oacute;n de alto cargo los siguientes organos de la organizacion central de la Administracion general del Estado:";
 choices[32]= new Array();
 choices[32][0] = "los &oacute;rganos superiores";
 choices[32][1] = "los &oacute;rganos superiores y directivos";
 choices[32][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[32][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[32] = 2;
 units[32] = ['4', '7', '8', '9'];
 blocks[32] = ['A1', 'A2'];
 comments[32] = "Id Pregunta: 990. Ley 40/2015";
 preguntaids[32] = 990


//  Id pregunta: 5607 Año de creación de pregunta: 2007
 questions[33]= "34)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[33]= new Array();
 choices[33][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[33][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[33][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[33][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[33] = 0;
 units[33] = ['92'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 5607. ";
 preguntaids[33] = 5607


//  Id pregunta: 10655 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta falsa acerca de los Planes Nacionales de Numeraci&oacute;n, Direccionamiento y Denominaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Elabora la propuesta del Plan el Ministerio de Energia, Turismo y Agenda Digital.";
 choices[34][1] = "Lo aprueba el Gobierno por Real Decreto.";
 choices[34][2] = "Lo modifica el Ministerio de Energia, Turismo y Agenda Digital por Orden Ministerial.";
 choices[34][3] = "La modificaci&oacute;n exige el informe previo de la ORECE.";
 answers[34] = 3;
 units[34] = ['121'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 10655. ";
 preguntaids[34] = 10655


//  Id pregunta: 10638 Año de creación de pregunta: 2015
 questions[35]= "36)  Seg&uacute;n la Ley 9/2014, a qui&eacute;n corresponde establecer los procedimientos y plazos para la habilitaci&oacute;n del ejercicio de los derechos de uso del Dominio P&uacute;blico Radioel&eacute;ctrico";
 choices[35]= new Array();
 choices[35][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[35][1] = "Gobierno de Espa&ntilde;a.";
 choices[35][2] = "CNMC.";
 choices[35][3] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 answers[35] = 1;
 units[35] = ['121'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 10638. ";
 preguntaids[35] = 10638


//  Id pregunta: 5081 Año de creación de pregunta: 2002
 questions[36]= "37)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:";
 choices[36]= new Array();
 choices[36][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[36][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[36][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[36][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[36] = 1;
 units[36] = ['112'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5081. ";
 preguntaids[36] = 5081


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[37]= "38)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[37]= new Array();
 choices[37][0] = "El Jefe del Estado.";
 choices[37][1] = "El Tribunal Constitucional.";
 choices[37][2] = "El Congreso de los Diputados.";
 choices[37][3] = "Las Cortes Generales.";
 answers[37] = 2;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 65. Constituci&oacute;n de 1978";
 preguntaids[37] = 65


//  Id pregunta: 8789 Año de creación de pregunta: 2013
 questions[38]= "39)  &iquest;Qu&eacute; afirmaci&oacute;n es falsa sobre Garant&iacute;a de Calidad?";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute; delineada en un documento de estructura.";
 choices[38][1] = "El objetivo es asegurarle al cliente la calidad de un producto.";
 choices[38][2] = "La estructura se presenta en un manual de garant&iacute;a de calidad";
 choices[38][3] = "La garant&iacute;a de calidad no se extiende a problemas de seguridad";
 answers[38] = 3;
 units[38] = ['92'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 8789. ";
 preguntaids[38] = 8789


//  Id pregunta: 3743 Año de creación de pregunta: 2002
 questions[39]= "40)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[39]= new Array();
 choices[39][0] = "Dise&ntilde;o detallado";
 choices[39][1] = "Codificaci&oacute;n";
 choices[39][2] = "Requisitos del sistema software";
 choices[39][3] = "Dise&ntilde;o preliminar";
 answers[39] = 1;
 units[39] = ['82'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3743. ";
 preguntaids[39] = 3743


//  Id pregunta: 10299 Año de creación de pregunta: 2015
 questions[40]= "41)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[40]= new Array();
 choices[40][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[40][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[40][2] = "Las respuestas a) y b) son falsas";
 choices[40][3] = "Las respuestas a) y b) son verdaderas";
 answers[40] = 3;
 units[40] = ['46'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 10299. ";
 preguntaids[40] = 10299


//  Id pregunta: 3602 Año de creación de pregunta: 2004
 questions[41]= "42)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[41]= new Array();
 choices[41][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[41][1] = "Documentaci&oacute;n";
 choices[41][2] = "Diccionario de datos";
 choices[41][3] = "todas las anteriores";
 answers[41] = 3;
 units[41] = ['84', '86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3602. ";
 preguntaids[41] = 3602


//  Id pregunta: 5439 Año de creación de pregunta: 2007
 questions[42]= "43)  Los comandos y distribuci&oacute;n de memoria de una tarjeta criptogr&aacute;fica se especifican en el est&aacute;ndar";
 choices[42]= new Array();
 choices[42][0] = "ISO 7816-2";
 choices[42][1] = "ISO 7816-3";
 choices[42][2] = "ISO 7816-4";
 choices[42][3] = "ISO 7816-5";
 answers[42] = 2;
 units[42] = ['78'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 5439. ";
 preguntaids[42] = 5439


//  Id pregunta: 8370 Año de creación de pregunta: 2011
 questions[43]= "44)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[43]= new Array();
 choices[43][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[43][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[43][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[43][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[43] = 0;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 8370. Analista Ayto. Madrid 2010";
 preguntaids[43] = 8370


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[44]= "45)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[44]= new Array();
 choices[44][0] = "Personas jur&iacute;dicas.";
 choices[44][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[44][2] = "Notarios y registradores.";
 choices[44][3] = "Todas las anteriores.";
 answers[44] = 3;
 units[44] = ['7', '19'];
 blocks[44] = ['A2', 'A4'];
 comments[44] = "Id Pregunta: 9887. ";
 preguntaids[44] = 9887


//  Id pregunta: 2397 Año de creación de pregunta: 2006
 questions[45]= "46)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[45]= new Array();
 choices[45][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[45][1] = "una infracci&oacute;n muy grave.";
 choices[45][2] = "una infracci&oacute;n grave.";
 choices[45][3] = "una infracci&oacute;n leve.";
 answers[45] = 2;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2397. ";
 preguntaids[45] = 2397


//  Id pregunta: 3645 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[46]= new Array();
 choices[46][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[46][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[46][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[46][3] = "Todas son falsas";
 answers[46] = 2;
 units[46] = ['91'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3645. ";
 preguntaids[46] = 3645


//  Id pregunta: 1512 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; comando me permite visualizar las tablas de enrutamiento de mi equipo?";
 choices[47]= new Array();
 choices[47][0] = "netstat -ar";
 choices[47][1] = "traceroute";
 choices[47][2] = "arp -p";
 choices[47][3] = "/etc/services &ndash;p";
 answers[47] = 0;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1512. ";
 preguntaids[47] = 1512


//  Id pregunta: 8308 Año de creación de pregunta: 2011
 questions[48]= "49)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[48]= new Array();
 choices[48][0] = "Nombre de usuario y shell";
 choices[48][1] = "Contrase&ntilde;a de usuario y home";
 choices[48][2] = "uid y shell";
 choices[48][3] = "gid y home";
 answers[48] = 2;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8308. Examen UPM A2 2011";
 preguntaids[48] = 8308


//  Id pregunta: 6698 Año de creación de pregunta: 2009
 questions[49]= "50)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[49]= new Array();
 choices[49][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[49][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[49][2] = "P3P est&aacute; basado en CCXML";
 choices[49][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[49] = 2;
 units[49] = ['120'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6698. MAP 2008 A1";
 preguntaids[49] = 6698


//  Id pregunta: 8114 Año de creación de pregunta: 2011
 questions[50]= "51)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[50]= new Array();
 choices[50][0] = "Gesti&oacute;n de riesgos.";
 choices[50][1] = "An&aacute;lisis de salvaguardias.";
 choices[50][2] = "An&aacute;lisis de riesgos.";
 choices[50][3] = "Gesti&oacute;n de salvaguardias.";
 answers[50] = 2;
 units[50] = ['45'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8114. Examen TIC A2 2010 interna";
 preguntaids[50] = 8114


//  Id pregunta: 3913 Año de creación de pregunta: 2002
 questions[51]= "52)  Las &quot;Collaboration Responsabilities Cards&quot; se usan en:";
 choices[51]= new Array();
 choices[51][0] = "La localizaci&oacute;n de objetos.";
 choices[51][1] = "La direcci&oacute;n de reuniones.";
 choices[51][2] = "La negociaci&oacute;n.";
 choices[51][3] = "Los diagramas generales de un sistema.";
 answers[51] = 0;
 units[51] = ['85', '89'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3913. ";
 preguntaids[51] = 3913


//  Id pregunta: 3242 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[52]= new Array();
 choices[52][0] = "zx81.";
 choices[52][1] = "IBM XT.";
 choices[52][2] = "APPLE.";
 choices[52][3] = "Amstrad CPC 128.";
 answers[52] = 2;
 units[52] = ['56'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 3242. Junta Andaluc&iacute;a";
 preguntaids[52] = 3242


//  Id pregunta: 2587 Año de creación de pregunta: 2009
 questions[53]= "54)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[53]= new Array();
 choices[53][0] = "Salvaguarda del orden p&uacute;blico";
 choices[53][1] = "Salvaguarda del inter&eacute;s general";
 choices[53][2] = "Respeto a la dignidad de la persona";
 choices[53][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[53] = 1;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 2587. Ley 34/2002, art&iacute;culo 8";
 preguntaids[53] = 2587


//  Id pregunta: 9025 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[54]= new Array();
 choices[54][0] = "Metacity de GNOME";
 choices[54][1] = "KWIN de KDE";
 choices[54][2] = "GTK de CDE";
 choices[54][3] = "Enlightenment de GNOME";
 answers[54] = 2;
 units[54] = ['57'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9025. Examen TIC A1 2013";
 preguntaids[54] = 9025


//  Id pregunta: 6627 Año de creación de pregunta: 2009
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[55]= new Array();
 choices[55][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[55][1] = "Un Senador propuesto por el Senado";
 choices[55][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[55][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[55] = 2;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 6627. ";
 preguntaids[55] = 6627


//  Id pregunta: 1749 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique cu&aacute;l de los siguientes conceptos se corresponde con una primitiva de servicio entre niveles del modelo OSI:";
 choices[56]= new Array();
 choices[56][0] = "RECEIVE";
 choices[56][1] = "INDICATION";
 choices[56][2] = "SEND";
 choices[56][3] = "ECHO";
 answers[56] = 1;
 units[56] = ['105'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1749. ";
 preguntaids[56] = 1749


//  Id pregunta: 7628 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[57]= new Array();
 choices[57][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[57][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[57][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[57][3] = "La arquitectura de componentes de GNOME estaba basada en Bonobo, pero en la actualidad se considera obsoleta";
 answers[57] = 0;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7628. Similar a Map 2006";
 preguntaids[57] = 7628


//  Id pregunta: 9254 Año de creación de pregunta: 2014
 questions[58]= "59)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[58]= new Array();
 choices[58][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[58][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[58][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[58][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[58] = 0;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 9254. Examen TIC A2 2013";
 preguntaids[58] = 9254


//  Id pregunta: 10269 Año de creación de pregunta: 2015
 questions[59]= "60)  &iquest;Cu&aacute;l es la secuencia de eventos CORRECTA para elegir una herramienta tecnol&oacute;gica?";
 choices[59]= new Array();
 choices[59][0] = "Seleccionar; Requerimientos; Criterios de Selecci&oacute;n, Evaluaci&oacute;n";
 choices[59][1] = "Criterios de Selecci&oacute;n; Requerimientos; Evaluaci&oacute;n; Seleccionar";
 choices[59][2] = "Requerimientos; Selecci&oacute;n de Criterios, Seleccionar, Evaluar";
 choices[59][3] = "Requerimientos; Selecci&oacute;n de Criterios; Evaluar; Seleccionar";
 answers[59] = 3;
 units[59] = ['101'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10269. ";
 preguntaids[59] = 10269


//  Id pregunta: 2948 Año de creación de pregunta: 2002
 questions[60]= "61)  La principal diferencia entre HTML y XML es que:";
 choices[60]= new Array();
 choices[60][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[60][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[60][2] = "XML es un subconjunto de HTML";
 choices[60][3] = "B y C son ciertas";
 answers[60] = 1;
 units[60] = ['74'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2948. ";
 preguntaids[60] = 2948


//  Id pregunta: 5899 Año de creación de pregunta: 2007
 questions[61]= "62)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[61]= new Array();
 choices[61][0] = "Dos a&ntilde;os";
 choices[61][1] = "Tres a&ntilde;os";
 choices[61][2] = "Cuatro a&ntilde;os";
 choices[61][3] = "Cinco a&ntilde;os";
 answers[61] = 3;
 units[61] = ['77'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 5899. ";
 preguntaids[61] = 5899


//  Id pregunta: 9082 Año de creación de pregunta: 2014
 questions[62]= "63)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[62]= new Array();
 choices[62][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[62][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[62][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[62][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[62] = 1;
 units[62] = ['105'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9082. ";
 preguntaids[62] = 9082


//  Id pregunta: 9990 Año de creación de pregunta: 2015
 questions[63]= "64)  Globus Toolkit es:";
 choices[63]= new Array();
 choices[63][0] = "Un framework de IBM que proporciona caracter&iacute;sticas para desarrollar, hacer debug y testear aplicaciones AJAX.";
 choices[63][1] = "Un conjunto de herramientas open source para construir grids computacionales.";
 choices[63][2] = "Un framework que contiene APIs y widgets para facilitar el desarrollo de aplicaciones Web que utilicen tecnolog&iacute;a AJAX y programaci&oacute;n paralela.";
 choices[63][3] = "Una librer&iacute;a Python, modular y extensible, que ofrece una API para desarrollar aplicaciones distribuidas.";
 answers[63] = 1;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9990. Examen TIC A2 2014";
 preguntaids[63] = 9990


//  Id pregunta: 4184 Año de creación de pregunta: 2006
 questions[64]= "65)  En el an&aacute;lisis orientado a objetos, una clase que no tenga instancias se denomina:";
 choices[64]= new Array();
 choices[64][0] = "No puede darse";
 choices[64][1] = "Clase padre";
 choices[64][2] = "Subclase";
 choices[64][3] = "Clase abstracta";
 answers[64] = 3;
 units[64] = ['85'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4184. ";
 preguntaids[64] = 4184


//  Id pregunta: 1707 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique en qu&eacute; procesos de M&eacute;trica v.3, NO se llevan a cabo actividades relacionadas con la interfaz de Gesti&oacute;n de Configuraci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Estudio de viabilidad del sistema.";
 choices[65][1] = "Construcci&oacute;n del sistema de informaci&oacute;n.";
 choices[65][2] = "Mantenimiento de sistemas de informaci&oacute;n.";
 choices[65][3] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 answers[65] = 3;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 1707. ";
 preguntaids[65] = 1707


//  Id pregunta: 7236 Año de creación de pregunta: 2010
 questions[66]= "67)  Una actividad propia de la gesti&oacute;n de problemas es";
 choices[66]= new Array();
 choices[66][0] = "La prevenci&oacute;n proactiva de los problemas";
 choices[66][1] = "Generaci&oacute;n de informaci&oacute;n ejecutiva";
 choices[66][2] = "Identificaci&oacute;n de tendencias";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = 3;
 units[66] = ['101'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 7236. ";
 preguntaids[66] = 7236


//  Id pregunta: 2995 Año de creación de pregunta: 2002
 questions[67]= "68)  OnNow:";
 choices[67]= new Array();
 choices[67][0] = "Es una tecnolog&iacute;a que permite a un PC encenderse r&aacute;pidamente";
 choices[67][1] = "Es una caracter&iacute;stica de los sistemas Z/series de IBM que permite el reemplazo en caliente de todas sus partes y su operaci&oacute;n 24x7";
 choices[67][2] = "Es una caracter&iacute;stica de Linux orientada a aumentar la redundancia y confiabilidad en la operaci&oacute;n del sistema";
 choices[67][3] = "Todas las respuestas anteriores son ciertas";
 answers[67] = 0;
 units[67] = ['52'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2995. ";
 preguntaids[67] = 2995


//  Id pregunta: 9187 Año de creación de pregunta: 2014
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[68]= new Array();
 choices[68][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[68][1] = "Clave WEP.";
 choices[68][2] = "Selecci&oacute;n del canal.";
 choices[68][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[68] = 1;
 units[68] = ['119'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9187. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[68] = 9187


//  Id pregunta: 7670 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &laquo;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&raquo;?";
 choices[69]= new Array();
 choices[69][0] = "Desarrollo de sistemas de informaci&oacute;n.";
 choices[69][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[69][2] = "An&aacute;lisis de sistema de informaci&oacute;n.";
 choices[69][3] = "Mantenimiento de sistemas de informaci&oacute;n.";
 answers[69] = 0;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 7670. Map 2007";
 preguntaids[69] = 7670


//  Id pregunta: 7643 Año de creación de pregunta: 2010
 questions[70]= "71)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NO garantiza:";
 choices[70]= new Array();
 choices[70][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadores registrados a nivel nacional.";
 choices[70][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red p&uacute;blica de comunicaciones electr&oacute;nicas desde una ubicaci&oacute;n fija siempre que sus solicitudes se consideren razonables en los t&eacute;rminos que mediante real decreto se determinen y que, incluir&aacute;n, entre otros factores, el coste de su provisi&oacute;n.";
 choices[70][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, que se actualice, como m&iacute;nimo, una vez al a&ntilde;o.";
 choices[70][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfaga razonablemente las necesidades de los usuarios finales.";
 answers[70] = 0;
 units[70] = ['121'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7643. Similar a Map 2006";
 preguntaids[70] = 7643


//  Id pregunta: 5290 Año de creación de pregunta: 2006
 questions[71]= "72)  Un servlet de Java tiene como principales caracter&iacute;sticas (se&ntilde;ale la falsa)";
 choices[71]= new Array();
 choices[71][0] = "su instalaci&oacute;n, gesti&oacute;n y ejecuci&oacute;n se realiza en un componente denominado contenedor";
 choices[71][1] = "requieren escaso c&oacute;digo para conseguir un nivel aceptable de presentaci&oacute;n, por lo cual han desplazado en parte a los JSPs";
 choices[71][2] = "Heredan de la clase abstracta HttpServlet";
 choices[71][3] = "Son todas correctas";
 answers[71] = 1;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 5290. ";
 preguntaids[71] = 5290


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[72]= "73)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[72]= new Array();
 choices[72][0] = "Con el a&ntilde;o anterior.";
 choices[72][1] = "Con los tres a&ntilde;os anteriores.";
 choices[72][2] = "Con el a&ntilde;o natural.";
 choices[72][3] = "Con los dos a&ntilde;os anteriores.";
 answers[72] = 2;
 units[72] = ['11'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 284. Presupuestos generales";
 preguntaids[72] = 284


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un framework RESTful que fomenta el dise&ntilde;o web multidispositivo incluyendo dispositivos m&oacute;viles?";
 choices[73]= new Array();
 choices[73][0] = "iBATIS";
 choices[73][1] = "Batik";
 choices[73][2] = "Web API";
 choices[73][3] = "Apache JAMES";
 answers[73] = 2;
 units[73] = ['62'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 700. AGE A2 2015";
 preguntaids[73] = 700


//  Id pregunta: 7374 Año de creación de pregunta: 2010
 questions[74]= "75)  &iquest;Qu&eacute; algoritmo de cifrado fue designado por la Administraci&oacute;n Federal Americana como est&aacute;ndar de cifrado sucesor del algoritmo DES?";
 choices[74]= new Array();
 choices[74][0] = "Triple DES";
 choices[74][1] = "AES";
 choices[74][2] = "IDEA";
 choices[74][3] = "Blowfish";
 answers[74] = 1;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7374. Examen TIC B 2009";
 preguntaids[74] = 7374


