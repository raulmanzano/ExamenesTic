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
//  Id pregunta: 1018 Año de creación de pregunta: 2016
 questions[0]= "1)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[0]= new Array();
 choices[0][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[0][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[0][2] = "el Subdirector General que el Delegado designe";
 choices[0][3] = "el Secretario de Estado";
 answers[0] = 0;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 1018. Ley 40/2015";
 preguntaids[0] = 1018


//  Id pregunta: 10000 Año de creación de pregunta: 2015
 questions[1]= "2)  El comando utilizado en el lenguaje de programaci&oacute;n Objective-C para imprimir mensajes en pantalla es:";
 choices[1]= new Array();
 choices[1][0] = "NSLog";
 choices[1][1] = "WRLog";
 choices[1][2] = "Writeln";
 choices[1][3] = "Printline";
 answers[1] = 0;
 units[1] = ['59'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10000. Examen TIC A2 2014";
 preguntaids[1] = 10000


//  Id pregunta: 1885 Año de creación de pregunta: 2016
 questions[2]= "3)  En el contexto de seguridad en redes, que se entiende por cortatuegos:";
 choices[2]= new Array();
 choices[2][0] = "Un sistema que separa, en cuanto a seguridad se refiere, una m&aacute;quina o sub red del resto";
 choices[2][1] = "Es un programa que se instala en un anfitri&oacute;n de la red interna para proteger los accesos a la misma.";
 choices[2][2] = "Es un sistema que se instala en la red externa para controlar los accesos a la red interna";
 choices[2][3] = "Es software o dispositivo que realiza una acci&oacute;n en representaci&oacute;n de otro, garantizado as! su seguridad.";
 answers[2] = 0;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1885. ";
 preguntaids[2] = 1885


//  Id pregunta: 6233 Año de creación de pregunta: 2003
 questions[3]= "4)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[3]= new Array();
 choices[3][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[3][1] = "No es necesario verificar la identidad de los usuarios";
 choices[3][2] = "No permite cifrado de datos.";
 choices[3][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[3] = 3;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6233. Examen TIC A Castilla La Mancha 2007";
 preguntaids[3] = 6233


//  Id pregunta: 10204 Año de creación de pregunta: 2015
 questions[4]= "5)  El proyecto SCSP, del Ministerio de Hacienda y Administraciones P&uacute;blicas:";
 choices[4]= new Array();
 choices[4][0] = "Es un conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel.";
 choices[4][1] = "Es un cat&aacute;logo de interfaces de interoperabilidad para el consumo de datos del Directorio Com&uacute;n de Organismos y Oficinas.";
 choices[4][2] = "Permite la conexi&oacute;n en tiempo real de m&uacute;ltiples salas de videconferencia.";
 choices[4][3] = "Es un diagramador de procedimientos administrativos, para su integraci&oacute;n en las sedes electr&oacute;nicas.";
 answers[4] = 0;
 units[4] = ['47'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 10204. Examen TIC A1 2014";
 preguntaids[4] = 10204


//  Id pregunta: 7899 Año de creación de pregunta: 2011
 questions[5]= "6)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[5]= new Array();
 choices[5][0] = "VAN (Valor Actual Neto).";
 choices[5][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[5][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[5][3] = "El m&eacute;todo del payback";
 answers[5] = 0;
 units[5] = ['40'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7899. Examen TIC A2 2010";
 preguntaids[5] = 7899


//  Id pregunta: 6635 Año de creación de pregunta: 2009
 questions[6]= "7)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[6]= new Array();
 choices[6][0] = "CLS";
 choices[6][1] = "MSIL";
 choices[6][2] = "Bytecode";
 choices[6][3] = "JIT";
 answers[6] = 0;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6635. MAP 2008 A2";
 preguntaids[6] = 6635


//  Id pregunta: 7686 Año de creación de pregunta: 2010
 questions[7]= "8)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[7]= new Array();
 choices[7][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[7][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[7][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[7][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[7] = 3;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7686. Map 2007";
 preguntaids[7] = 7686


//  Id pregunta: 9937 Año de creación de pregunta: 2015
 questions[8]= "9)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[8]= new Array();
 choices[8][0] = "Centros externos de monitorizaci&oacute;n.";
 choices[8][1] = "Prestadores de servicios de certificaci&oacute;n.";
 choices[8][2] = "Otros: como son las Ventanillas &Uacute;nicas Empresariales.";
 choices[8][3] = "Todos los anteriores son tipos de PdP.";
 answers[8] = 3;
 units[8] = ['44'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9937. ";
 preguntaids[8] = 9937


//  Id pregunta: 887 Año de creación de pregunta: 2016
 questions[9]= "10)  El est&aacute;ndar del ADSL2+ (ADSL2 Plus) es:";
 choices[9]= new Array();
 choices[9][0] = "ITU G.993.3";
 choices[9][1] = "ITU G.992.4";
 choices[9][2] = "ITU G.992.5";
 choices[9][3] = "ITU G.993.6";
 answers[9] = 2;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 887. AGE A2 2015";
 preguntaids[9] = 887


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[10]= new Array();
 choices[10][0] = "Orientaci&oacute;n a objetos";
 choices[10][1] = "MapReduce";
 choices[10][2] = "Pipeline filtering";
 choices[10][3] = "Programaci&oacute;n funcional";
 answers[10] = 1;
 units[10] = ['73'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 757. Big Data y NoSQL";
 preguntaids[10] = 757


//  Id pregunta: 6134 Año de creación de pregunta: 2003
 questions[11]= "12)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[11]= new Array();
 choices[11][0] = "S&iacute;";
 choices[11][1] = "No";
 choices[11][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[11][3] = "Depende de la configuraci&oacute;n del switch";
 answers[11] = 0;
 units[11] = ['105', '107', '109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 6134. Examen TIC A1 MAP 2007";
 preguntaids[11] = 6134


//  Id pregunta: 9801 Año de creación de pregunta: 2015
 questions[12]= "13)  La LOPD:";
 choices[12]= new Array();
 choices[12][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[12][1] = "A y C son correctas";
 choices[12][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[12][3] = "A y C son incorrectas.";
 answers[12] = 2;
 units[12] = ['35'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9801. ";
 preguntaids[12] = 9801


//  Id pregunta: 8136 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[13]= new Array();
 choices[13][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[13][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[13][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[13][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[13] = 3;
 units[13] = ['107'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 8136. Examen TIC A2 2010 interna";
 preguntaids[13] = 8136


//  Id pregunta: 6857 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[14]= new Array();
 choices[14][0] = "XML, SOAP y WSDL";
 choices[14][1] = "XML, SOAP y UDDI";
 choices[14][2] = "XML, WSDL y UDDI";
 choices[14][3] = "SOAP, WSDL y UDDI";
 answers[14] = 0;
 units[14] = ['55', '74'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6857. ";
 preguntaids[14] = 6857


//  Id pregunta: 9201 Año de creación de pregunta: 2014
 questions[15]= "16)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema:";
 choices[15]= new Array();
 choices[15][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[15][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[15][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[15][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[15] = 0;
 units[15] = ['120'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9201. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[15] = 9201


//  Id pregunta: 6464 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[16]= new Array();
 choices[16][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[16][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[16][2] = "Resilient Packet Ring";
 choices[16][3] = "Traspaso entre redes";
 answers[16] = 1;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6464. ";
 preguntaids[16] = 6464


//  Id pregunta: 5762 Año de creación de pregunta: 2009
 questions[17]= "18)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[17]= new Array();
 choices[17][0] = "b&aacute;sico";
 choices[17][1] = "medio";
 choices[17][2] = "alto";
 choices[17][3] = "muy alto";
 answers[17] = 0;
 units[17] = ['35'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 5762. ";
 preguntaids[17] = 5762


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[18]= "19)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[18]= new Array();
 choices[18][0] = "Transparencia e innovaci&oacute;n";
 choices[18][1] = "Seguridad y reutilizaci&oacute;n";
 choices[18][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[18][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[18] = 3;
 units[18] = ['28'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 549. Estrategia TIC";
 preguntaids[18] = 549


//  Id pregunta: 8948 Año de creación de pregunta: 2013
 questions[19]= "20)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[19][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[19][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[19][3] = "Todas las anteriores son falsas";
 answers[19] = 0;
 units[19] = ['62'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8948. ";
 preguntaids[19] = 8948


//  Id pregunta: 3666 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes tareas no pertenece a la actividad 'Ejecuci&oacute;n de las pruebas del sistema'?:";
 choices[20]= new Array();
 choices[20][0] = "Preparaci&oacute;n del entorno de las pruebas del sistema";
 choices[20][1] = "Evaluaci&oacute;n del resultado de las pruebas del sistema";
 choices[20][2] = "Preparaci&oacute;n de pruebas de aceptaci&oacute;n del sistema";
 choices[20][3] = "Realizaci&oacute;n de las pruebas del sistema";
 answers[20] = 2;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3666. ";
 preguntaids[20] = 3666


//  Id pregunta: 6866 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad vigente?";
 choices[21]= new Array();
 choices[21][0] = "Legal, organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[21][1] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[21][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[21][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[21] = 0;
 units[21] = ['43'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 6866. TIC A 2009";
 preguntaids[21] = 6866


//  Id pregunta: 7599 Año de creación de pregunta: 2010
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[22]= new Array();
 choices[22][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[22][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[22][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[22][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[22] = 2;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 7599. Map 2006";
 preguntaids[22] = 7599


//  Id pregunta: 1876 Año de creación de pregunta: 2016
 questions[23]= "24)  De acuerdo con el RD 1720/2007, de 21 de diciembre, (por el que se aprueba el Reglamento de Desarrollo de LOPD), la designaci&oacute;n como responsable de seguridad:";
 choices[23]= new Array();
 choices[23][0] = "Implica que asume la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[23][1] = "Implica que comparte la responsabilidad que corresponde al responsable del fichero o al encargado de tratamiento.";
 choices[23][2] = "En ning&uacute;n caso supone una exoneraci&oacute;n de la responsabilidad que corresponde al responsable del fichero o al encargado del tratamiento.";
 choices[23][3] = "Siempre debe recaer en el responsable de los sistemas de la informaci&oacute;n.";
 answers[23] = 2;
 units[23] = ['35'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1876. ";
 preguntaids[23] = 1876


//  Id pregunta: 7934 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[24]= new Array();
 choices[24][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite.";
 choices[24][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[24][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto.";
 choices[24][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[24] = 0;
 units[24] = ['47'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 7934. Examen TIC A2 2010";
 preguntaids[24] = 7934


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[25]= new Array();
 choices[25][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[25][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[25][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[25][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[25] = 1;
 units[25] = ['22'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[25] = 518


//  Id pregunta: 10641 Año de creación de pregunta: 2015
 questions[26]= "27)  Seg&uacute;n la Ley 9/2014, el Gobierno regular&aacute; las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico, que ser&aacute;n (1) no discriminatorias, (2) proporcionadas, (3) neutrales y (4) transparentes.";
 choices[26]= new Array();
 choices[26][0] = "Son ciertas 1, 2 y 3";
 choices[26][1] = "Son ciertas 1, 2, y 4";
 choices[26][2] = "Son ciertas 1, 3, y 4";
 choices[26][3] = "Son todas ciertas";
 answers[26] = 1;
 units[26] = ['121'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10641. Articulo 61";
 preguntaids[26] = 10641


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[27]= "28)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[27]= new Array();
 choices[27][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[27][1] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[27][2] = "El Presidente del Gobierno";
 choices[27][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[27] = 1;
 units[27] = ['26'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 536. Gobernanza TIC";
 preguntaids[27] = 536


//  Id pregunta: 9648 Año de creación de pregunta: 2014
 questions[28]= "29)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure)";
 choices[28]= new Array();
 choices[28][0] = "Permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales.";
 choices[28][1] = "Est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[28][2] = "Aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[28][3] = "No est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.";
 answers[28] = 2;
 units[28] = ['124'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9648. Examen TIC A1 2013";
 preguntaids[28] = 9648


//  Id pregunta: 5767 Año de creación de pregunta: 2007
 questions[29]= "30)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[29]= new Array();
 choices[29][0] = "FDL";
 choices[29][1] = "GSL";
 choices[29][2] = "GPL";
 choices[29][3] = "GLL";
 answers[29] = 2;
 units[29] = ['41'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 5767. ";
 preguntaids[29] = 5767


//  Id pregunta: 1599 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta. En la actividad &quot;Elaboraci&oacute;n de los Manuales de Usuario&quot; de M&eacute;trica v3:";
 choices[30]= new Array();
 choices[30][0] = "Se genera la documentaci&oacute;n de usuario final conforme a los requisitos definidos en el proceso Estudio de Viabilidad del Sistema";
 choices[30][1] = "Se especifican todas las interfaces entre el sistema y el usuario, tales como formatos de pantallas, di&aacute;logos, formatos de informes y formularios de entrada";
 choices[30][2] = "Se especifica la formaci&oacute;n necesaria para que los usuarios finales sean capaces de utilizar el sistema de forma satisfactoria";
 choices[30][3] = "Se genera la documentaci&oacute;n de usuario final o explotaci&oacute;n conforme a los requisitos definidos en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[30] = 3;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1599. ";
 preguntaids[30] = 1599


//  Id pregunta: 7718 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l es la naturaleza jur&iacute;dica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[31]= new Array();
 choices[31][0] = "Organismo aut&oacute;nomo.";
 choices[31][1] = "Entidad P&uacute;blica Empresarial.";
 choices[31][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica.";
 choices[31][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;n adicional d&eacute;cima de la LOFAGE).";
 answers[31] = 2;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 7718. Map 2007";
 preguntaids[31] = 7718


//  Id pregunta: 10395 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[32]= new Array();
 choices[32][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[32][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[32][2] = "Confianza y Seguridad";
 choices[32][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[32] = 3;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 10395. ";
 preguntaids[32] = 10395


//  Id pregunta: 5992 Año de creación de pregunta: 2007
 questions[33]= "34)  Seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, son procedimientos de adjudicaci&oacute;n de los contratos:";
 choices[33]= new Array();
 choices[33][0] = "El ordinario, el de urgencia y el de emergencia.";
 choices[33][1] = "La adjudicaci&oacute;n directa, el concurso y la subasta.";
 choices[33][2] = "El procedimiento abierto, el restringido y el negociado.";
 choices[33][3] = "El procedimiento general y el simplificado";
 answers[33] = 2;
 units[33] = ['37'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 5992. ";
 preguntaids[33] = 5992


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[34]= "35)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[34]= new Array();
 choices[34][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[34][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[34][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[34][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[34] = 3;
 units[34] = ['63'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[34] = 10052


//  Id pregunta: 5354 Año de creación de pregunta: 2006
 questions[35]= "36)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[35]= new Array();
 choices[35][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[35][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[35][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[35][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[35] = 1;
 units[35] = ['120'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5354. ";
 preguntaids[35] = 5354


//  Id pregunta: 7433 Año de creación de pregunta: 2010
 questions[36]= "37)  Entre los servicios comunes que se ofrecen en la plataforma de intermediaci&oacute;n de servicios se encuentran:";
 choices[36]= new Array();
 choices[36][0] = "Servicio de validaci&oacute;n de normas y est&aacute;ndares";
 choices[36][1] = "Servicio de autenticaci&oacute;n de informes";
 choices[36][2] = "Servicio de verificaci&oacute;n de Datos de Identidad y Residencia";
 choices[36][3] = "Todas las anteriores son correctas";
 answers[36] = 2;
 units[36] = ['47'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 7433. ";
 preguntaids[36] = 7433


//  Id pregunta: 3545 Año de creación de pregunta: 2004
 questions[37]= "38)  Las pruebas que se realizan con los componentes modificados con el fin de comprobar que no introducen ning&uacute;n error adicional en los componentes no modificados se denominan:";
 choices[37]= new Array();
 choices[37][0] = "Pruebas unitarias";
 choices[37][1] = "Pruebas de sistema";
 choices[37][2] = "Pruebas de regresi&oacute;n";
 choices[37][3] = "Pruebas de aceptaci&oacute;n";
 answers[37] = 2;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3545. Similar a examen TIC SS A 2004";
 preguntaids[37] = 3545


//  Id pregunta: 4228 Año de creación de pregunta: 2006
 questions[38]= "39)  En el modelo de McCall. Cu&aacute;l de los siguientes elementos no se considera un factor de calidad";
 choices[38]= new Array();
 choices[38][0] = "Reusabilidad";
 choices[38][1] = "Modularidad";
 choices[38][2] = "Flexibilidad";
 choices[38][3] = "Eficiencia";
 answers[38] = 1;
 units[38] = ['92'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4228. ";
 preguntaids[38] = 4228


//  Id pregunta: 6290 Año de creación de pregunta: 2003
 questions[39]= "40)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[39]= new Array();
 choices[39][0] = "5";
 choices[39][1] = "7";
 choices[39][2] = "9";
 choices[39][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[39] = 3;
 units[39] = ['82'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6290. ";
 preguntaids[39] = 6290


//  Id pregunta: 8880 Año de creación de pregunta: 2013
 questions[40]= "41)  El Fondo nacional del servicio universal tiene por finalidad garantizar la financiaci&oacute;n del servicio universal. La aportaci&oacute;n de activos en met&aacute;lico a dicho Fondo la realiza:";
 choices[40]= new Array();
 choices[40][0] = "El Gobierno a trav&eacute;s de los Presupuestos Generales del Estado.";
 choices[40][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[40][2] = "Las Comunidades Aut&oacute;nomas.";
 choices[40][3] = "Los operadores con obligaciones de contribuir a la financiaci&oacute;n del servicio universal.";
 answers[40] = 3;
 units[40] = ['121'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8880. Examen Xunta Galicia 2011 TIC A1";
 preguntaids[40] = 8880


//  Id pregunta: 4046 Año de creación de pregunta: 2003
 questions[41]= "42)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[41]= new Array();
 choices[41][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[41][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[41][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[41][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[41] = 1;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 4046. Junta Andaluc&iacute;a";
 preguntaids[41] = 4046


//  Id pregunta: 3684 Año de creación de pregunta: 2002
 questions[42]= "43)  Indicar la afirmaci&oacute;n falsa sobre dise&ntilde;o estructurado:";
 choices[42]= new Array();
 choices[42][0] = "Se define el concepto del dise&ntilde;o estructurado como el proceso de definici&oacute;n de la arquitectura software: componentes, m&oacute;dulos, interfaces, procedimientos de prueba y datos de un sistema que se crean para satisfacer unos requisitos especificados.";
 choices[42][1] = "Podemos entender por cohesi&oacute;n la caracter&iacute;stica que presenta un m&oacute;dulo perteneciente a una aplicaci&oacute;n de ejecutar una tarea &uacute;nica y bien definida, encadenada a otras en una secuencia concreta para constituir un procedimiento dentro del logical.";
 choices[42][2] = "Por oposici&oacute;n al concepto de cohesi&oacute;n, que es una medida de la coherencia y/o complejidad funcional interna de un m&oacute;dulo, encontramos el acoplamiento, como medida de la complejidad externa del mismo de acuerdo a sus interfaces.";
 choices[42][3] = "Todas las respuestas anteriores son verdaderas.";
 answers[42] = 3;
 units[42] = ['89'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3684. ";
 preguntaids[42] = 3684


//  Id pregunta: 5747 Año de creación de pregunta: 2007
 questions[43]= "44)  Cual de los siguientes servicios o redes est&aacute;n sujetos al &aacute;mbito de aplicaci&oacute;n de la Ley 9/2014 General de Telecomunicaciones";
 choices[43]= new Array();
 choices[43][0] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n sonora";
 choices[43][1] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n televisiva";
 choices[43][2] = "las redes de televisi&oacute;n por cable";
 choices[43][3] = "servicios que suministren contenidos transmitidos mediante redes y servicios de comunicaciones electr&oacute;nicas";
 answers[43] = 2;
 units[43] = ['121'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5747. ";
 preguntaids[43] = 5747


//  Id pregunta: 992 Año de creación de pregunta: 2016
 questions[44]= "45)  De acuerdo a la ley 40/2015, los estatutos de los Organismos p&uacute;blicos son determinados por sus respectivos:";
 choices[44]= new Array();
 choices[44][0] = "&oacute;rganos superiores";
 choices[44][1] = "&oacute;rganos directivos";
 choices[44][2] = "&oacute;rganos superiores y directivos";
 choices[44][3] = "ninguna es correcta";
 answers[44] = 3;
 units[44] = ['4', '7', '8', '9'];
 blocks[44] = ['A1', 'A2'];
 comments[44] = "Id Pregunta: 992. Ley 40/2015";
 preguntaids[44] = 992


//  Id pregunta: 3159 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[45]= new Array();
 choices[45][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[45][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[45][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[45][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[45] = 2;
 units[45] = ['112'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 3159. ";
 preguntaids[45] = 3159


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[46]= "47)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[46][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[46][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[46][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[46] = 1;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[46] = 9455


//  Id pregunta: 2515 Año de creación de pregunta: 2004
 questions[47]= "48)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[47]= new Array();
 choices[47][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[47][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[47][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[47][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[47] = 0;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 2515. Examen TIC MAP B 2004";
 preguntaids[47] = 2515


//  Id pregunta: 10913 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP?";
 choices[48]= new Array();
 choices[48][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos";
 choices[48][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[48][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[48][3] = "Aumentando el espesor de los hilos de cobre";
 answers[48] = 0;
 units[48] = ['104'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10913. ";
 preguntaids[48] = 10913


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[49]= "50)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[49]= new Array();
 choices[49][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[49][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[49][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[49][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[49] = 1;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 485. Sociedad de la informaci&oacute;n";
 preguntaids[49] = 485


//  Id pregunta: 912 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; modulaci&oacute;n usa el est&aacute;ndar HSPA+?";
 choices[50]= new Array();
 choices[50][0] = "BPSK";
 choices[50][1] = "64-QAM";
 choices[50][2] = "ADPCM";
 choices[50][3] = "FSK";
 answers[50] = 1;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 912. AGE A2 2015";
 preguntaids[50] = 912


//  Id pregunta: 4194 Año de creación de pregunta: 2006
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n son orientados a objetos puros?";
 choices[51]= new Array();
 choices[51][0] = "Object-Pascal.";
 choices[51][1] = "C++.";
 choices[51][2] = "Trellis.";
 choices[51][3] = "CLOS.";
 answers[51] = 2;
 units[51] = ['89'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 4194. ";
 preguntaids[51] = 4194


//  Id pregunta: 9555 Año de creación de pregunta: 2014
 questions[52]= "53)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[52]= new Array();
 choices[52][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica";
 choices[52][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial";
 choices[52][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional";
 choices[52][3] = "En los tres casos anteriores";
 answers[52] = 3;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 9555. Art&iacute;culo 34 de la Ley Org&aacute;nica 15/1999";
 preguntaids[52] = 9555


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[53]= "54)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[53]= new Array();
 choices[53][0] = "Los ocupados y los parados activos";
 choices[53][1] = "S&oacute;lo los ocupados";
 choices[53][2] = "Los ocupados y los inactivos";
 choices[53][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[53] = 0;
 units[53] = ['12'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 340. Modelo econ&oacute;mico";
 preguntaids[53] = 340


//  Id pregunta: 3943 Año de creación de pregunta: 2002
 questions[54]= "55)  Para cada proyecto se debe seleccionar el modelo de ciclo de vida que sea m&aacute;s apropiado:";
 choices[54]= new Array();
 choices[54][0] = "Falso";
 choices[54][1] = "Cierto";
 choices[54][2] = "S&oacute;lo si es necesario evaluar los riesgos";
 choices[54][3] = "S&oacute;lo si se elige METRICA";
 answers[54] = 1;
 units[54] = ['82'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3943. ";
 preguntaids[54] = 3943


//  Id pregunta: 10930 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[55]= new Array();
 choices[55][0] = "ElGamal";
 choices[55][1] = "DSA";
 choices[55][2] = "RSA";
 choices[55][3] = "DES";
 answers[55] = 3;
 units[55] = ['119'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 10930. ";
 preguntaids[55] = 10930


//  Id pregunta: 1436 Año de creación de pregunta: 2016
 questions[56]= "57)  Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad seg&uacute;n la LOPD art&iacute;culo 44 es una infracci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "No es infracci&oacute;n.";
 choices[56][1] = "Leve.";
 choices[56][2] = "Grave.";
 choices[56][3] = "Muy Grave.";
 answers[56] = 2;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 1436. ";
 preguntaids[56] = 1436


//  Id pregunta: 5473 Año de creación de pregunta: 2007
 questions[57]= "58)  Se denomina &ldquo;Partici&oacute;n equivalente&rdquo; a:";
 choices[57]= new Array();
 choices[57][0] = "Una t&eacute;cnica de programaci&oacute;n modular donde el dominio de la aplicaci&oacute;n se subdivide en &aacute;reas funcionales de aproximadamente el mismo tama&ntilde;o";
 choices[57][1] = "Una t&eacute;cnica de pruebas de &ldquo;caja negra&rdquo; que divide el dominio de un programa en clases de datos de las que se pueden derivar casos de prueba.";
 choices[57][2] = "Una t&eacute;cnica de dise&ntilde;o orientado a objetos para mejorar la estructura de los programas reemplazando la herencia con mecanismos de delegaci&oacute;n.";
 choices[57][3] = "Una t&eacute;cnica de gesti&oacute;n del desarrollo de proyectos para la atribuci&oacute;n de la responsabilidad sobre las pruebas de la aplicaci&oacute;n";
 answers[57] = 1;
 units[57] = ['93'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 5473. ";
 preguntaids[57] = 5473


//  Id pregunta: 889 Año de creación de pregunta: 2016
 questions[58]= "59)  En relaci&oacute;n con el est&aacute;ndar 802.11ac se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[58]= new Array();
 choices[58][0] = "puede funcionar con 80 MHz o incluso 160 MHz.";
 choices[58][1] = "se conoce como WIFI 5G o WiFi Gigabit, y es una mejora del IEEE 802.11n.";
 choices[58][2] = "opera en el espectro de 2,4 GHz.";
 choices[58][3] = "los componentes utilizados consumen menos energ&iacute;a que los utilizados en el est&aacute;ndar 802.11n.";
 answers[58] = 2;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 889. AGE A2 2015";
 preguntaids[58] = 889


//  Id pregunta: 916 Año de creación de pregunta: 2016
 questions[59]= "60)  WS-Security contiene especificaciones sobre:";
 choices[59]= new Array();
 choices[59][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[59][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[59][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[59][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[59] = 1;
 units[59] = ['119'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 916. AGE A1 2015";
 preguntaids[59] = 916


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[60]= "61)  No es competencia del Servicio P&uacute;blico de Empleo Estatal";
 choices[60]= new Array();
 choices[60][0] = "Elaborar y elevar al Ministerio de Empleo y Seguridad Social las propuestas normativas de &aacute;mbito estatal en materia de empleo que procedan.";
 choices[60][1] = "Elaborar el proyecto de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo y de los Planes Anuales de Pol&iacute;tica de Empleo en colaboraci&oacute;n con las comunidades aut&oacute;nomas.";
 choices[60][2] = "Gestionar el Observatorio de las Relaciones Laborales del Servicio P&uacute;blico de Empleo Estatal";
 choices[60][3] = "Coordinar las actuaciones conjuntas de los servicios p&uacute;blicos de empleo en el desarrollo del Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo.";
 answers[60] = 2;
 units[60] = ['15'];
 blocks[60] = ['A3'];
 comments[60] = "Id Pregunta: 429. Modelo econ&oacute;mico";
 preguntaids[60] = 429


//  Id pregunta: 4632 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[61]= new Array();
 choices[61][0] = "Spread spectrum con secuencia directa";
 choices[61][1] = "Spread spectrum con salto de frecuencia";
 choices[61][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 1;
 units[61] = ['108'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4632. ";
 preguntaids[61] = 4632


//  Id pregunta: 2647 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[62]= new Array();
 choices[62][0] = "Conocimiento del sistema superior al del experto";
 choices[62][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[62][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[62][3] = "Todas las anteriores";
 answers[62] = 1;
 units[62] = ['68'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2647. ";
 preguntaids[62] = 2647


//  Id pregunta: 9473 Año de creación de pregunta: 2014
 questions[63]= "64)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[63]= new Array();
 choices[63][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados por otra transacci&oacute;n que finalmente aborta.";
 choices[63][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[63][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[63][3] = "Todas las anteriores";
 answers[63] = 1;
 units[63] = ['60'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9473. A: Lectura sucia";
 preguntaids[63] = 9473


//  Id pregunta: 3785 Año de creación de pregunta: 2002
 questions[64]= "65)  El modelo de cascada&hellip;:";
 choices[64]= new Array();
 choices[64][0] = "Es una evoluci&oacute;n del modelo por etapas";
 choices[64][1] = "Se conoce como el &quot;modelo antiguo&quot;";
 choices[64][2] = "Es similar al iterativo";
 choices[64][3] = "No admite realimentaci&oacute;n entre etapas";
 answers[64] = 0;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3785. ";
 preguntaids[64] = 3785


//  Id pregunta: 3468 Año de creación de pregunta: 2006
 questions[65]= "66)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[65]= new Array();
 choices[65][0] = "Aplicaci&oacute;n";
 choices[65][1] = "Transporte";
 choices[65][2] = "Red";
 choices[65][3] = "Sesi&oacute;n";
 answers[65] = 0;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3468. ";
 preguntaids[65] = 3468


//  Id pregunta: 2825 Año de creación de pregunta: 2002
 questions[66]= "67)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[66]= new Array();
 choices[66][0] = "Superset o superconjunto";
 choices[66][1] = "Package o paquete";
 choices[66][2] = "Superclass o Superclase";
 choices[66][3] = "Colection o Colecci&oacute;n";
 answers[66] = 1;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2825. ";
 preguntaids[66] = 2825


//  Id pregunta: 3562 Año de creación de pregunta: 2004
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[67]= new Array();
 choices[67][0] = "C.";
 choices[67][1] = "Smalltalk.";
 choices[67][2] = "Eiffel.";
 choices[67][3] = "ACTOR.";
 answers[67] = 0;
 units[67] = ['85', '89'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 3562. Similar a examen TIC SS A 2003";
 preguntaids[67] = 3562


//  Id pregunta: 10914 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[68]= new Array();
 choices[68][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[68][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[68][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[68][3] = "Se trata de una suite propietaria";
 answers[68] = 1;
 units[68] = ['119'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 10914. ";
 preguntaids[68] = 10914


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[69]= "70)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[69]= new Array();
 choices[69][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[69][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[69][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[69][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[69] = 0;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 559. AGE A1 2015";
 preguntaids[69] = 559


//  Id pregunta: 6412 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[70]= new Array();
 choices[70][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[70][1] = "Utiliza modelos de datos multidimensionales.";
 choices[70][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[70][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[70] = 2;
 units[70] = ['72'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6412. ";
 preguntaids[70] = 6412


//  Id pregunta: 10772 Año de creación de pregunta: 2015
 questions[71]= "72)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[71]= new Array();
 choices[71][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[71][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[71][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[71][3] = "Todas las anteriores son falsas";
 answers[71] = 0;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 10772. ";
 preguntaids[71] = 10772


//  Id pregunta: 1001 Año de creación de pregunta: 2016
 questions[72]= "73)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[72]= new Array();
 choices[72][0] = "Director General";
 choices[72][1] = "Secretario general";
 choices[72][2] = "Subdirector general";
 choices[72][3] = "Subsecretario";
 answers[72] = 0;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 1001. Ley 40/2015";
 preguntaids[72] = 1001


//  Id pregunta: 10465 Año de creación de pregunta: 2015
 questions[73]= "74)  El 5&ordm; principio de marco de trabajo CobiT v5 establece:";
 choices[73]= new Array();
 choices[73][0] = "Este principio se centra en el Gobierno TI dejando la gesti&oacute;n a otras metodolog&iacute;as como ITIL.";
 choices[73][1] = "Establece una clara distinci&oacute;n entre Gobierno y Gesti&oacute;n.";
 choices[73][2] = "No existe interacci&oacute;n alguna entre Gobierno y Gesti&oacute;n.";
 choices[73][3] = "El Gobierno contiene cuatro dominios, seg&uacute;n las &aacute;reas de responsabilidad de Planificar, Construir, Ejecutar y Supervisar (Plan, Build, Run and Monitor, PBRM).";
 answers[73] = 1;
 units[73] = ['101'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 10465. ";
 preguntaids[73] = 10465


//  Id pregunta: 7661 Año de creación de pregunta: 2010
 questions[74]= "75)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo que especifica la forma de encapsular los datos que se van a intercambiar?";
 choices[74]= new Array();
 choices[74][0] = "SSL Handshake.";
 choices[74][1] = "SSL Record.";
 choices[74][2] = "Cipher Secure Layer.";
 choices[74][3] = "Secure Stocker Layer.";
 answers[74] = 1;
 units[74] = ['120'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7661. Map 2006";
 preguntaids[74] = 7661


