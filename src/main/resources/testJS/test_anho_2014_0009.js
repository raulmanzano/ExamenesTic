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
//  Id pregunta: 9642 Año de creación de pregunta: 2014
 questions[0]= "1)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[0]= new Array();
 choices[0][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[0][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[0][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[0][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[0] = 0;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9642. ";
 preguntaids[0] = 9642


//  Id pregunta: 9618 Año de creación de pregunta: 2014
 questions[1]= "2)  En relaci&oacute;n con las tecnolog&iacute;as de gesti&oacute;n de derechos digitales, se&ntilde;ale la respuesta incorrecta:";
 choices[1]= new Array();
 choices[1][0] = "El sistema DRM creado por Apple recibe el nombre de FairPlay";
 choices[1][1] = "El sistema DRM creado por Microsoft recibe el nombre de Windows Media DRM";
 choices[1][2] = "El sistema DRM creado por Sony recibe el nombre de OpenMG";
 choices[1][3] = "El sistema DRM creado por RealNetworks es PlayReady";
 answers[1] = 3;
 units[1] = ['41'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 9618. El esquema DRM desarrollado por RealNetworks es Helix DRM, aunque Helix ya no est&aacute; suportado por RealNetworks";
 preguntaids[1] = 9618


//  Id pregunta: 9672 Año de creación de pregunta: 2014
 questions[2]= "3)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[2]= new Array();
 choices[2][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[2][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[2][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = 3;
 units[2] = ['100'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 9672. ";
 preguntaids[2] = 9672


//  Id pregunta: 9664 Año de creación de pregunta: 2014
 questions[3]= "4)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para";
 choices[3]= new Array();
 choices[3][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles.";
 choices[3][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[3][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[3][3] = "detectar errores de condiciones de carrera (race condition bugs).";
 answers[3] = 3;
 units[3] = ['93'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9664. Examen TIC A1 2013";
 preguntaids[3] = 9664


//  Id pregunta: 9627 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;C&uacute;al de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?";
 choices[4]= new Array();
 choices[4][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[4][1] = "Reutilizaci&oacute;n";
 choices[4][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[4][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[4] = 3;
 units[4] = ['43'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9627. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";
 preguntaids[4] = 9627


//  Id pregunta: 9647 Año de creación de pregunta: 2014
 questions[5]= "6)  De acuerdo con el m&eacute;todo del Valor Actual Neto, &iquest;ser&iacute;a recomendable&nbsp; realizar una inversi&oacute;n en dos a&ntilde;os, con capital inicial aportado de 1 M&euro; y flujos de caja esperados de 0,1M&euro; y 0,9M&euro; en el primer y segundo a&ntilde;o de inversi&oacute;n, con un tipo de descuento del 1%?";
 choices[5]= new Array();
 choices[5][0] = "No.";
 choices[5][1] = "No se puede deducir del enunciado";
 choices[5][2] = "S&iacute;.";
 choices[5][3] = "Debe mantenerse cuatro a&ntilde;os como m&iacute;nimo";
 answers[5] = 0;
 units[5] = ['40'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 9647. Examen TIC A1 2013";
 preguntaids[5] = 9647


//  Id pregunta: 9662 Año de creación de pregunta: 2014
 questions[6]= "7)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n.";
 choices[6]= new Array();
 choices[6][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[6][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[6][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica.";
 choices[6][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[6] = 2;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 9662. Examen TIC A1 2013";
 preguntaids[6] = 9662


//  Id pregunta: 9676 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Cu&aacute;l no es una novedad de HTML 5?";
 choices[7]= new Array();
 choices[7][0] = "Application Cache";
 choices[7][1] = "Elementos sem&aacute;nticos.";
 choices[7][2] = "Web workers";
 choices[7][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[7] = 3;
 units[7] = ['74'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9676. ";
 preguntaids[7] = 9676


//  Id pregunta: 9623 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[8]= new Array();
 choices[8][0] = "ZEUS";
 choices[8][1] = "HERA";
 choices[8][2] = "BOBBY";
 choices[8][3] = "TAW";
 answers[8] = 0;
 units[8] = ['42'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9623. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";
 preguntaids[8] = 9623


//  Id pregunta: 9650 Año de creación de pregunta: 2014
 questions[9]= "10)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[9]= new Array();
 choices[9][0] = "Se hace incompatible el uso de servicios web.";
 choices[9][1] = "Los servicios encapsulan sus funcionalidades.";
 choices[9][2] = "Los servicios mantienen un fuerte acoplamiento.";
 choices[9][3] = "Los servicios dependen fuertemente de la plataforma subyacente.";
 answers[9] = 1;
 units[9] = ['55'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9650. Examen TIC A1 2013";
 preguntaids[9] = 9650


//  Id pregunta: 9677 Año de creación de pregunta: 2014
 questions[10]= "11)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[10]= new Array();
 choices[10][0] = "XOP XML-binary Optimized Protocol";
 choices[10][1] = "XOP XML-binary Optimized Packaging";
 choices[10][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[10][3] = "REST Represantional State Transfer";
 answers[10] = 2;
 units[10] = ['55'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9677. ";
 preguntaids[10] = 9677


//  Id pregunta: 9670 Año de creación de pregunta: 2014
 questions[11]= "12)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[11]= new Array();
 choices[11][0] = "Cuantifica la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n.";
 choices[11][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[11][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[11][3] = "A y B.";
 answers[11] = 3;
 units[11] = ['100'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9670. ";
 preguntaids[11] = 9670


//  Id pregunta: 9613 Año de creación de pregunta: 2014
 questions[12]= "13)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[12]= new Array();
 choices[12][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[12][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[12][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[12][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[12] = 2;
 units[12] = ['41'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9613. Consultar Art. 96 del Real Decreto Legislativo 1/1996";
 preguntaids[12] = 9613


//  Id pregunta: 9617 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Qu&eacute; nombre recibe la tecnolog&iacute;a de Gesti&oacute;n de derechos digitales creada por la compa&ntilde;&iacute;a Apple?";
 choices[13]= new Array();
 choices[13][0] = "FairPlay";
 choices[13][1] = "Apple Verisign";
 choices[13][2] = "Apple DRM";
 choices[13][3] = "Apple Store DRM";
 answers[13] = 0;
 units[13] = ['41'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 9617. Se usa desde la tienda online iTunes Store para ser reproducido en iPod e iTunes";
 preguntaids[13] = 9617


//  Id pregunta: 9622 Año de creación de pregunta: 2014
 questions[14]= "15)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[14][1] = "La&nbsp;opci&oacute;n a es&nbsp;cierta, pero para nivel A";
 choices[14][2] = "La&nbsp;opci&oacute;n a es&nbsp;cierta, pero para nivel AAA";
 choices[14][3] = "La&nbsp;opci&oacute;n a es&nbsp;cierta, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[14] = 3;
 units[14] = ['42'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9622. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";
 preguntaids[14] = 9622


//  Id pregunta: 9610 Año de creación de pregunta: 2014
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[15]= new Array();
 choices[15][0] = "El servidor puede alojar un interprete de scripting";
 choices[15][1] = "El cliente puede alojar un interprerte de scripting";
 choices[15][2] = "Para usar el driver JDBC se necesita descargar un plug-in proporcionado por cada fabricante";
 choices[15][3] = "Un script del lado del cliente no puede solicitarle al servidor su certificado para establecer un canal autenticado bidireccionalmente";
 answers[15] = 2;
 units[15] = ['62'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 9610. ";
 preguntaids[15] = 9610


//  Id pregunta: 9616 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[16]= new Array();
 choices[16][0] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[16][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[16][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[16][3] = "Ministerio de Fomento";
 answers[16] = 1;
 units[16] = ['41'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 9616. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte.";
 preguntaids[16] = 9616


//  Id pregunta: 9607 Año de creación de pregunta: 2014
 questions[17]= "18)  No es una ventaja de la capa de aplicaci&oacute;n";
 choices[17]= new Array();
 choices[17][0] = "Compartici&oacute;n de objetos";
 choices[17][1] = "Independencia de la arquitectura de almacenamiento";
 choices[17][2] = "Redistribuci&oacute;n autom&aacute;tica de versiones firmadas";
 choices[17][3] = "Escalabilidad horizontal";
 answers[17] = 2;
 units[17] = ['62'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9607. ";
 preguntaids[17] = 9607


//  Id pregunta: 9667 Año de creación de pregunta: 2014
 questions[18]= "19)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen";
 choices[18]= new Array();
 choices[18][0] = "TIFF.";
 choices[18][1] = "GIF.";
 choices[18][2] = "PNG.";
 choices[18][3] = "JPEG.";
 answers[18] = 2;
 units[18] = ['80'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9667. Examen TIC A1 2013";
 preguntaids[18] = 9667


//  Id pregunta: 9643 Año de creación de pregunta: 2014
 questions[19]= "20)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[19]= new Array();
 choices[19][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[19][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[19][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[19][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[19] = 0;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9643. ";
 preguntaids[19] = 9643


//  Id pregunta: 9646 Año de creación de pregunta: 2014
 questions[20]= "21)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta.";
 choices[20]= new Array();
 choices[20][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[20][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[20][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[20][3] = "Las anteriores a) b) y c) son correctas.";
 answers[20] = 3;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 9646. Examen TIC A1 2013";
 preguntaids[20] = 9646


//  Id pregunta: 9656 Año de creación de pregunta: 2014
 questions[21]= "22)  La Ley 23/2006 de 7 de julio modifica el RDL 1/1996 de 12 de abril por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual con motivo de";
 choices[21]= new Array();
 choices[21][0] = "La trasposici&oacute;n de la Directiva 2001/29/CE.";
 choices[21][1] = "La entrada en vigor de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[21][2] = "La regulaci&oacute;n de un canon digital en los programas de ordenador.";
 choices[21][3] = "El establecimiento de la prohibici&oacute;n de hacer copias privadas.";
 answers[21] = 0;
 units[21] = ['41'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 9656. Examen TIC A1 2013";
 preguntaids[21] = 9656


//  Id pregunta: 9648 Año de creación de pregunta: 2014
 questions[22]= "23)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure)";
 choices[22]= new Array();
 choices[22][0] = "Permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales.";
 choices[22][1] = "Est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[22][2] = "Aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[22][3] = "No est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.";
 answers[22] = 2;
 units[22] = ['124'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9648. Examen TIC A1 2013";
 preguntaids[22] = 9648


//  Id pregunta: 9641 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Qu&eacute; es Kleopatra?";
 choices[23]= new Array();
 choices[23][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[23][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[23][2] = "Un navegador del entorno KDE";
 choices[23][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[23] = 1;
 units[23] = ['76'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9641. ";
 preguntaids[23] = 9641


//  Id pregunta: 9626 Año de creación de pregunta: 2014
 questions[24]= "25)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[24]= new Array();
 choices[24][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[24][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[24][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[24][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[24] = 0;
 units[24] = ['43'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 9626. El programa ISA abarca el per&iacute;odo 2010-2015";
 preguntaids[24] = 9626


//  Id pregunta: 9633 Año de creación de pregunta: 2014
 questions[25]= "26)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[25]= new Array();
 choices[25][0] = "Technical Especifications";
 choices[25][1] = "Technical Reports";
 choices[25][2] = "Technical Corrigendum";
 choices[25][3] = "Gu&iacute;as ISO";
 answers[25] = 1;
 units[25] = ['48'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9633. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";
 preguntaids[25] = 9633


//  Id pregunta: 9640 Año de creación de pregunta: 2014
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[26]= new Array();
 choices[26][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[26][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[26][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[26][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[26] = 1;
 units[26] = ['31'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 9640. ";
 preguntaids[26] = 9640


//  Id pregunta: 9673 Año de creación de pregunta: 2014
 questions[27]= "28)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[27]= new Array();
 choices[27][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[27][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[27][2] = "Ninguna de las anteriores.";
 choices[27][3] = "A y B.";
 answers[27] = 3;
 units[27] = ['100'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 9673. ";
 preguntaids[27] = 9673


//  Id pregunta: 9624 Año de creación de pregunta: 2014
 questions[28]= "29)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[28]= new Array();
 choices[28][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[28][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[28][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[28][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[28] = 1;
 units[28] = ['42'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 9624. Consultar Art. 2 del Real Decreto";
 preguntaids[28] = 9624


//  Id pregunta: 9620 Año de creación de pregunta: 2014
 questions[29]= "30)  En relaci&oacute;n con el mecanismo de protecci&oacute;n de derechos de autor por huella digital, &iquest;c&oacute;mo se consigue que los datos del usuario que ha adquirido los derechos de uso del objeto no sean conocidos por el vendedor?";
 choices[29]= new Array();
 choices[29][0] = "Mediante el uso de https para asegurar la privacidad de la comunicaci&oacute;n";
 choices[29][1] = "Mediante el uso de un sistema de huella digital asim&eacute;trica, que emplea criptograf&iacute;a asim&eacute;trica";
 choices[29][2] = "Mediante el uso de un sistema de huella digital an&oacute;nima, utilizando un tercero de confianza que conoce tanto la identidad del comprador como del vendedor";
 choices[29][3] = "No es posible, el vendedor debe conocer los datos del comprador para poder transmitirle los derechos de uso del objeto";
 answers[29] = 2;
 units[29] = ['41'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 9620. La huella digital es un mecanismo para defender los derechos de autor y combatir la copia no autorizada de contenidos que consiste en introducir una serie de bits imperceptibles sobre un producto de soporte electr&oacute;nico (CD-ROM, DVD.)";
 preguntaids[29] = 9620


//  Id pregunta: 9636 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Qu&eacute; tipos de holguras puede tener una actividad en un proyecto?";
 choices[30]= new Array();
 choices[30][0] = "Dos: Holgura libre y Holgura total";
 choices[30][1] = "Dos: Holgura independiente y holgura dependiente";
 choices[30][2] = "Tres: Holgura libre, Holgura Independiente y Holgura Total";
 choices[30][3] = "Cuatro: Holgura independentiente, holgura de seguridad, holgura libre y holgura total";
 answers[30] = 3;
 units[30] = ['33'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 9636. ";
 preguntaids[30] = 9636


//  Id pregunta: 9614 Año de creación de pregunta: 2014
 questions[31]= "32)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[31][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[31][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[31][3] = "Todas las respuestas anteriores son falsas";
 answers[31] = 2;
 units[31] = ['41'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 9614. Consultar Art. 100 del Real Decreto Legislativo 1/1996";
 preguntaids[31] = 9614


//  Id pregunta: 9638 Año de creación de pregunta: 2014
 questions[32]= "33)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[32]= new Array();
 choices[32][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[32][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[32][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[32][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[32] = 3;
 units[32] = ['31'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 9638. ";
 preguntaids[32] = 9638


//  Id pregunta: 9655 Año de creación de pregunta: 2014
 questions[33]= "34)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix";
 choices[33]= new Array();
 choices[33][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz.";
 choices[33][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido  y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario.";
 choices[33][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz.";
 choices[33][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido.";
 answers[33] = 2;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9655. Examen TIC A1 2013";
 preguntaids[33] = 9655


//  Id pregunta: 9674 Año de creación de pregunta: 2014
 questions[34]= "35)  Ordene las siguientes t&eacute;cnicas de respaldo de menor a mayor tiempo de recuperaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "full, diferencial, incremental";
 choices[34][1] = "full, incremental, diferencial";
 choices[34][2] = "incremental, diferencial, full";
 choices[34][3] = "diferencial, incremental, full";
 answers[34] = 0;
 units[34] = ['100'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 9674. ";
 preguntaids[34] = 9674


//  Id pregunta: 9619 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[35]= new Array();
 choices[35][0] = "BSA (Business  Software Alliance)";
 choices[35][1] = "OpenMG (Open Mobile Group)";
 choices[35][2] = "OMA (Open Mobile Alliance)";
 choices[35][3] = "The Open Group";
 answers[35] = 2;
 units[35] = ['41'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 9619. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";
 preguntaids[35] = 9619


//  Id pregunta: 9635 Año de creación de pregunta: 2014
 questions[36]= "37)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[36]= new Array();
 choices[36][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[36][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[36][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[36][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases";
 answers[36] = 1;
 units[36] = ['33'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 9635. ";
 preguntaids[36] = 9635


//  Id pregunta: 9605 Año de creación de pregunta: 2014
 questions[37]= "38)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[37]= new Array();
 choices[37][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[37][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[37][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[37][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[37] = 0;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9605. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[37] = 9605


//  Id pregunta: 9669 Año de creación de pregunta: 2014
 questions[38]= "39)  En el &aacute;mbito de la continuidad de negocio, el &quot;objetivo de prestaci&oacute;n de servicios&quot; se define como:";
 choices[38]= new Array();
 choices[38][0] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[38][1] = "El nivel de servicios a proveer durante el modo de proceso alterno.";
 choices[38][2] = "Ninguna de las anteriores.";
 choices[38][3] = "A y B.";
 answers[38] = 1;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 9669. ";
 preguntaids[38] = 9669


//  Id pregunta: 9668 Año de creación de pregunta: 2014
 questions[39]= "40)  En el &aacute;mbito de la continuidad de negocio, la &quot;ventana de interrupci&oacute;n&quot; se define como:";
 choices[39]= new Array();
 choices[39][0] = "La cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[39][1] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[39][2] = "Se determina en funci&oacute;n de la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n de las operaciones";
 choices[39][3] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 answers[39] = 1;
 units[39] = ['100'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 9668. ";
 preguntaids[39] = 9668


//  Id pregunta: 9649 Año de creación de pregunta: 2014
 questions[40]= "41)  Indique cu&aacute;l de los siguientes es un organismo europeo de normalizaci&oacute;n.";
 choices[40]= new Array();
 choices[40][0] = "CENELEC";
 choices[40][1] = "IEC";
 choices[40][2] = "ISO";
 choices[40][3] = "IEEE";
 answers[40] = 0;
 units[40] = ['48'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 9649. Examen TIC A1 2013";
 preguntaids[40] = 9649


//  Id pregunta: 9625 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[41][1] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[41][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y y Funci&oacute;n P&uacute;blica";
 choices[41][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[41] = 2;
 units[41] = ['42'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 9625. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";
 preguntaids[41] = 9625


//  Id pregunta: 9606 Año de creación de pregunta: 2014
 questions[42]= "43)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Pl/sql";
 choices[42][1] = "Queryscript";
 choices[42][2] = "Jquery";
 choices[42][3] = "PyScripter";
 answers[42] = 2;
 units[42] = ['62'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 9606. PyScripter es un entorno de desarrollo, no un lenguaje";
 preguntaids[42] = 9606


//  Id pregunta: 9671 Año de creación de pregunta: 2014
 questions[43]= "44)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[43]= new Array();
 choices[43][0] = "Determina la frecuencia de las copias de respaldo.";
 choices[43][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[43][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[43][3] = "A y B.";
 answers[43] = 3;
 units[43] = ['100'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 9671. ";
 preguntaids[43] = 9671


//  Id pregunta: 9608 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Cual no es una funci&oacute;n del servidor de aplicaciones?";
 choices[44]= new Array();
 choices[44][0] = "Multiplexar accesos a la base de datos mediante el gestor transaccional";
 choices[44][1] = "Aislar la l&oacute;gica de negocio de la capa de persistencia";
 choices[44][2] = "Reutilizar objetos de aplicaciones de departamentos distintos";
 choices[44][3] = "Adecuar los mapeos objeto-relacionales a las particularidades del diccionario de datos";
 answers[44] = 3;
 units[44] = ['62'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9608. ";
 preguntaids[44] = 9608


//  Id pregunta: 9611 Año de creación de pregunta: 2014
 questions[45]= "46)  Por motivos estrat&eacute;gicos, se acuerda terminar un portal de admnistraci&oacute;n electr&oacute;nica dos meses antes de lo previsto. No hay disponibilidad de m&aacute;s recursos humanos ni de ampliar el horario de trabajo ni de conseguir fondos para contratar personal externo. El Jefe de Proyecto deber&aacute; negociar entonces con el cliente del portal:";
 choices[45]= new Array();
 choices[45][0] = "Una reducci&oacute;n del alcance previsto, eliminando algunas funcionalidades adicionales o no cr&iacute;ticas,  hasta que cuadre en el tiempo previsto.";
 choices[45][1] = "Una demora en el tiempo ya que no se puede acometer sin m&aacute;s recursos la tarea indicada";
 choices[45][2] = "Que el portal se haga usando herramientas de creaci&oacute;n r&aacute;pida de portales electr&oacute;nicos";
 choices[45][3] = "Una disminuci&oacute;n de la calidad, admitiendo una serie de errores motivados por lo acelerado de la entrega";
 answers[45] = 0;
 units[45] = ['33'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 9611. ";
 preguntaids[45] = 9611


//  Id pregunta: 9629 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[46]= new Array();
 choices[46][0] = "Multiling&uuml;ismo";
 choices[46][1] = "Accesibilidad";
 choices[46][2] = "Empleo de soluciones de software libre";
 choices[46][3] = "Uso de est&aacute;ndares abiertos";
 answers[46] = 2;
 units[46] = ['43'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9629. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";
 preguntaids[46] = 9629


//  Id pregunta: 9665 Año de creación de pregunta: 2014
 questions[47]= "48)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal";
 choices[47]= new Array();
 choices[47][0] = "Est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[47][1] = "No pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal.";
 choices[47][2] = "Pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales.";
 choices[47][3] = "No permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales.";
 answers[47] = 2;
 units[47] = ['35'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 9665. Examen TIC A1 2013";
 preguntaids[47] = 9665


//  Id pregunta: 9657 Año de creación de pregunta: 2014
 questions[48]= "49)  Para determinar la viabilidad de un proyecto a partir de las estimaciones coste/beneficio, METRICA 3 calcula su rentabilidad a trav&eacute;s de";
 choices[48]= new Array();
 choices[48][0] = "El m&eacute;todo de la cadena de reemplazo.";
 choices[48][1] = "El m&eacute;todo de la anualidad equivalente.";
 choices[48][2] = "M&eacute;todos de coste total de propiedad (TCO).";
 choices[48][3] = "M&eacute;todos de Retorno de la Inversi&oacute;n o del Valor Actual Neto";
 answers[48] = 3;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 9657. Examen TIC A1 2013";
 preguntaids[48] = 9657


//  Id pregunta: 9634 Año de creación de pregunta: 2014
 questions[49]= "50)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[49][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[49][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[49][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[49] = 3;
 units[49] = ['48'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 9634. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";
 preguntaids[49] = 9634


//  Id pregunta: 9661 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[50]= new Array();
 choices[50][0] = "Kexi.";
 choices[50][1] = "Kivio.";
 choices[50][2] = "Konqueror.";
 choices[50][3] = "Kugar.";
 answers[50] = 3;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9661. Examen TIC A1 2013";
 preguntaids[50] = 9661


//  Id pregunta: 9679 Año de creación de pregunta: 2014
 questions[51]= "52)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[51][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[51][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[51][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[51] = 0;
 units[51] = ['55'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9679. ";
 preguntaids[51] = 9679


//  Id pregunta: 9652 Año de creación de pregunta: 2014
 questions[52]= "53)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios?";
 choices[52]= new Array();
 choices[52][0] = "CREATE VIEW.";
 choices[52][1] = "GRANT.";
 choices[52][2] = "CREATE PROFILE.";
 choices[52][3] = "CREATE ROLE.";
 answers[52] = 0;
 units[52] = ['61'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 9652. Examen TIC A1 2013";
 preguntaids[52] = 9652


//  Id pregunta: 9658 Año de creación de pregunta: 2014
 questions[53]= "54)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[53]= new Array();
 choices[53][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235.";
 choices[53][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[53][2] = "permite audioconferencia pero no videoconferencia.";
 choices[53][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[53] = 0;
 units[53] = ['122'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9658. Examen TIC A1 2013";
 preguntaids[53] = 9658


//  Id pregunta: 9628 Año de creación de pregunta: 2014
 questions[54]= "55)  Ordene en sentido cronol&oacute;gico ascendente los siguientes programas europeos relacionados con la administraci&oacute;n electr&oacute;nica:";
 choices[54]= new Array();
 choices[54][0] = "IDA I, IDA II, ISA, IDABC";
 choices[54][1] = "IDA I, IDA II, IDABC, ISA";
 choices[54][2] = "IDA, IDABC I, IDABC II, ISA";
 choices[54][3] = "IDA, ISA, IDABC I, IDABC II";
 answers[54] = 1;
 units[54] = ['43'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9628. IDA I (1995-1998), IDA II (1999-2004), IDABC (2005-2009), ISA (2010-2015)";
 preguntaids[54] = 9628


//  Id pregunta: 9654 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Existe un Estatuto espec&iacute;fico del personal directivo de la Administraci&oacute;n General del Estado?";
 choices[55]= new Array();
 choices[55][0] = "S&iacute;. El Estatuto B&aacute;sico del Empleado P&uacute;blico.";
 choices[55][1] = "S&iacute;. La Ley de Altos Cargos de la Administraci&oacute;n General del Estado.";
 choices[55][2] = "No. A&uacute;n no se ha desarrollado la previsi&oacute;n del Estatuto B&aacute;sico del Empleado P&uacute;blico a este respecto.";
 choices[55][3] = "No existe, porque no est&aacute; normativamente previsto.";
 answers[55] = 2;
 units[55] = ['28'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 9654. Examen TIC A1 2013";
 preguntaids[55] = 9654


//  Id pregunta: 9621 Año de creación de pregunta: 2014
 questions[56]= "57)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[56]= new Array();
 choices[56][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[56][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[56][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[56][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[56] = 2;
 units[56] = ['42'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9621. Consultar WCAG Pauta 2.3 Convulsiones";
 preguntaids[56] = 9621


//  Id pregunta: 9660 Año de creación de pregunta: 2014
 questions[57]= "58)  En el &aacute;mbito de COBIT 5, el proceso de Gestionar la Calidad se encuentra encuadrado en el dominio de";
 choices[57]= new Array();
 choices[57][0] = "Alinear, Planificar y Organizar";
 choices[57][1] = "Monitorizar y Evaluar.";
 choices[57][2] = "Construir, Adquirir e Implementar";
 choices[57][3] = "Monitorizar y Evaluar.";
 answers[57] = 0;
 units[57] = ['101'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 9660. Examen TIC A1 2013";
 preguntaids[57] = 9660


//  Id pregunta: 9653 Año de creación de pregunta: 2014
 questions[58]= "59)  Los sistemas de videoconferencia";
 choices[58]= new Array();
 choices[58][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326.";
 choices[58][1] = "pueden utilizar redes IP con el protocolo H.323.";
 choices[58][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[58][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328.";
 answers[58] = 1;
 units[58] = ['122'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9653. Examen TIC A1 2013";
 preguntaids[58] = 9653


//  Id pregunta: 9637 Año de creación de pregunta: 2014
 questions[59]= "60)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a retrasar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[59]= new Array();
 choices[59][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[59][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[59][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[59][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[59] = 3;
 units[59] = ['31'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 9637. ";
 preguntaids[59] = 9637


//  Id pregunta: 9645 Año de creación de pregunta: 2014
 questions[60]= "61)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[60]= new Array();
 choices[60][0] = "El sistema lo rechaza";
 choices[60][1] = "Las claves generadas se ven alteradas y se descubre el intento de intrusi&oacute;n";
 choices[60][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[60][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[60] = 1;
 units[60] = ['76'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9645. ";
 preguntaids[60] = 9645


//  Id pregunta: 9631 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[61]= new Array();
 choices[61][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 choices[61][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[61][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[61][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital y AENOR";
 answers[61] = 1;
 units[61] = ['48'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 9631. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo.";
 preguntaids[61] = 9631


//  Id pregunta: 9632 Año de creación de pregunta: 2014
 questions[62]= "63)  Dentro de las recomendaciones de la UIT-T (Uni&oacute;n Internacional de Telecomunicaciones), se&ntilde;ale la correspondencia incorrecta:";
 choices[62]= new Array();
 choices[62][0] = "Serie V: Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[62][1] = "Serie X: Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[62][2] = "Serie E: Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[62][3] = "Serie I: Red digital de servicios integrados";
 answers[62] = 2;
 units[62] = ['48'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 9632. Serie E: Explotaci&oacute;n general de la red, servicio telef&oacute;nico, explotaci&oacute;n del servicio y factores humanos";
 preguntaids[62] = 9632


//  Id pregunta: 9651 Año de creación de pregunta: 2014
 questions[63]= "64)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[63]= new Array();
 choices[63][0] = "Business";
 choices[63][1] = "Essentials";
 choices[63][2] = "Foundation";
 choices[63][3] = "Standard";
 answers[63] = 0;
 units[63] = ['58'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9651. Examen TIC A1 2013";
 preguntaids[63] = 9651


//  Id pregunta: 9639 Año de creación de pregunta: 2014
 questions[64]= "65)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[64]= new Array();
 choices[64][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[64][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[64][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[64][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[64] = 0;
 units[64] = ['31'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9639. ";
 preguntaids[64] = 9639


//  Id pregunta: 9678 Año de creación de pregunta: 2014
 questions[65]= "66)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[65]= new Array();
 choices[65][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[65][1] = "Es una alternativa a XML en AJAX.";
 choices[65][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[65][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[65] = 2;
 units[65] = ['55'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9678. ";
 preguntaids[65] = 9678


//  Id pregunta: 9630 Año de creación de pregunta: 2014
 questions[66]= "67)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[66]= new Array();
 choices[66][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[66][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[66][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[66][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[66] = 3;
 units[66] = ['43'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 9630. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos.";
 preguntaids[66] = 9630


//  Id pregunta: 9644 Año de creación de pregunta: 2014
 questions[67]= "68)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[67]= new Array();
 choices[67][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[67][1] = "Cifrado C&eacute;sar";
 choices[67][2] = "Criptoan&aacute;lisis";
 choices[67][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[67] = 2;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9644. ";
 preguntaids[67] = 9644


//  Id pregunta: 9659 Año de creación de pregunta: 2014
 questions[68]= "69)  En el direccionamiento IPv4, clase C";
 choices[68]= new Array();
 choices[68][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles.";
 choices[68][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles.";
 choices[68][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles.";
 choices[68][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles.";
 answers[68] = 0;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9659. Examen TIC A1 2013";
 preguntaids[68] = 9659


//  Id pregunta: 9666 Año de creación de pregunta: 2014
 questions[69]= "70)  Indique la opci&oacute;n verdadera.";
 choices[69]= new Array();
 choices[69][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[69][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[69][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[69][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps.";
 answers[69] = 3;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9666. Examen TIC A1 2013";
 preguntaids[69] = 9666


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[70]= new Array();
 choices[70][0] = "&lt;canvas&gt;";
 choices[70][1] = "&lt;applet&gt;";
 choices[70][2] = "&lt;keygen&gt;";
 choices[70][3] = "&lt;audio&gt;";
 answers[70] = 1;
 units[70] = ['74'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9675. ";
 preguntaids[70] = 9675


//  Id pregunta: 9615 Año de creación de pregunta: 2014
 questions[71]= "72)  &iquest;Cu&aacute;l es la normativa que crea la Comisi&oacute;n de Propiedad Intelectual?";
 choices[71]= new Array();
 choices[71][0] = "Ley 2/2011, de Econom&iacute;a Sostenible";
 choices[71][1] = "Real Decreto 1889/2011, de regulaci&oacute;n del funcionamiento de la Comisi&oacute;n de Propiedad Intelectual";
 choices[71][2] = "Real Decreto Legislativo 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 choices[71][3] = "Real Decreto 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 answers[71] = 0;
 units[71] = ['41'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 9615. La Ley 2/2011 crea la Comisi&oacute;n de Propiedad Intelectual, y el Real Decreto 1889/2011 regula su funcionamiento";
 preguntaids[71] = 9615


//  Id pregunta: 9612 Año de creación de pregunta: 2014
 questions[72]= "73)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual y el derecho de transformaci&oacute;n, se&ntilde;ale la respuesta correcta";
 choices[72]= new Array();
 choices[72][0] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&iacute;an al autor de la obra original";
 choices[72][1] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&aacute;n al autor de esta &uacute;ltima";
 choices[72][2] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden a partes iguales entre el autor de la obra original y el de la obra producto de la transformaci&oacute;n";
 choices[72][3] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden tanto al autor de la obra original como al de la obra producto de la transformaci&oacute;n, en la proporci&oacute;n que &eacute;stos determinen";
 answers[72] = 1;
 units[72] = ['41'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 9612. Consultar Art. 21 del Real Decreto Legislativo 1/1996";
 preguntaids[72] = 9612


//  Id pregunta: 9663 Año de creación de pregunta: 2014
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[73]= new Array();
 choices[73][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga.";
 choices[73][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[73][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[73][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[73] = 1;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 9663. Examen TIC A1 2013";
 preguntaids[73] = 9663


//  Id pregunta: 9609 Año de creación de pregunta: 2014
 questions[74]= "75)  &iquest;Cual no es un lenguaje de scripting?";
 choices[74]= new Array();
 choices[74][0] = "JScript";
 choices[74][1] = "Node.js";
 choices[74][2] = "Groovy";
 choices[74][3] = "Hack";
 answers[74] = 1;
 units[74] = ['62'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9609. Node.js es un entorno de desarrollo, no un lenguaje";
 preguntaids[74] = 9609


