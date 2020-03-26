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
//  Id pregunta: 6619 Año de creación de pregunta: 2009
 questions[0]= "1)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[0]= new Array();
 choices[0][0] = "4";
 choices[0][1] = "5.3";
 choices[0][2] = "5.5";
 choices[0][3] = "6";
 answers[0] = 0;
 units[0] = ['66'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6619. ";
 preguntaids[0] = 6619


//  Id pregunta: 3201 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[1]= new Array();
 choices[1][0] = "MySql";
 choices[1][1] = "PostgreSQL";
 choices[1][2] = "SQLite";
 choices[1][3] = "Zope";
 answers[1] = 3;
 units[1] = ['66'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3201. ";
 preguntaids[1] = 3201


//  Id pregunta: 5673 Año de creación de pregunta: 2007
 questions[2]= "3)  Respecto al software libre:";
 choices[2]= new Array();
 choices[2][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[2][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[2][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[2][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[2] = 0;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5673. ";
 preguntaids[2] = 5673


//  Id pregunta: 6013 Año de creación de pregunta: 2003
 questions[3]= "4)  El modelo de ciclo de vida de desarrollo de un sistema de informaci&oacute;n en el que una fase s&oacute;lo se considerafinalizada si su documentaci&oacute;n asociada ha sido completada es el denominado:";
 choices[3]= new Array();
 choices[3][0] = "En cascada.";
 choices[3][1] = "De prototipado.";
 choices[3][2] = "En espiral.";
 choices[3][3] = "Iterativo.";
 answers[3] = 0;
 units[3] = ['66'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6013. TIC B 2007";
 preguntaids[3] = 6013


//  Id pregunta: 7150 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[4]= new Array();
 choices[4][0] = "GIMP";
 choices[4][1] = "Celtx";
 choices[4][2] = "Nvu";
 choices[4][3] = "Rhythmbox";
 answers[4] = 0;
 units[4] = ['66'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7150. ";
 preguntaids[4] = 7150


//  Id pregunta: 2527 Año de creación de pregunta: 2004
 questions[5]= "6)  El lenguaje Java Script:";
 choices[5]= new Array();
 choices[5][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[5][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[5][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[5][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[5] = 1;
 units[5] = ['66'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2527. Examen TIC MAP B 2004";
 preguntaids[5] = 2527


//  Id pregunta: 2907 Año de creación de pregunta: 2002
 questions[6]= "7)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[6]= new Array();
 choices[6][0] = "Fuentes abiertas";
 choices[6][1] = "Gratuidad";
 choices[6][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[6][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[6] = 2;
 units[6] = ['66'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2907. ";
 preguntaids[6] = 2907


//  Id pregunta: 3285 Año de creación de pregunta: 2003
 questions[7]= "8)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[7]= new Array();
 choices[7][0] = "No puede venderlo";
 choices[7][1] = "Integrarlo en otro SW y venderlo como propietario";
 choices[7][2] = "Venderlo a otra empresa como software libre";
 choices[7][3] = "Venderlo a otra empresa como software propietario";
 answers[7] = 2;
 units[7] = ['66'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3285. ";
 preguntaids[7] = 3285


//  Id pregunta: 2671 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Qu&eacute; es Apache?:";
 choices[8]= new Array();
 choices[8][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[8][1] = "Un servidor web propiedad de Microsoft";
 choices[8][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[8][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[8] = 3;
 units[8] = ['66'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2671. ";
 preguntaids[8] = 2671


//  Id pregunta: 1728 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del software libre:";
 choices[9]= new Array();
 choices[9][0] = "Puede ser modificado.";
 choices[9][1] = "Se tiene acceso al c&oacute;digo fuente.";
 choices[9][2] = "Es gratuito.";
 choices[9][3] = "Puede ser redistribuido.";
 answers[9] = 2;
 units[9] = ['66'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 1728. ";
 preguntaids[9] = 1728


//  Id pregunta: 1677 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; caracter&iacute;sticas tiene el software libre cubierto por la GPL de GNU?";
 choices[10]= new Array();
 choices[10][0] = "Su uso, redistribuci&oacute;n o modificaci&oacute;n est&aacute;n prohibidos, requieren que se solicite una autorizaci&oacute;n.";
 choices[10][1] = "Se convierte en freeware, paquetes que se pueden distribuir pero no modificar.";
 choices[10][2] = "Se pude usar con cualquier prop&oacute;sito, adaptarlo a las necesidades, mejorar el programa, distribuir copias y est&aacute; protegido con copyleft.";
 choices[10][3] = "Se pude usar con cualquier prop&oacute;sito, adaptarlo a las necesidades, mejorar el programa y a partir de aqu&iacute; ya puede ser software privativo.";
 answers[10] = 2;
 units[10] = ['66'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1677. ";
 preguntaids[10] = 1677


//  Id pregunta: 2672 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Qu&eacute; es el abandonware?:";
 choices[11]= new Array();
 choices[11][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[11][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[11][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[11][3] = "Nada de lo anterior es cierto";
 answers[11] = 1;
 units[11] = ['66'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2672. ";
 preguntaids[11] = 2672


//  Id pregunta: 3218 Año de creación de pregunta: 2003
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[12]= new Array();
 choices[12][0] = "Redistribuci&oacute;n libre.";
 choices[12][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[12][2] = "Derecho de modificaci&oacute;n.";
 choices[12][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[12] = 3;
 units[12] = ['66'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3218. Junta Andaluc&iacute;a";
 preguntaids[12] = 3218


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l de las siguientes licencias le obliga a distribuir el c&oacute;digo fuente si &eacute;ste se ejecuta para ofrecer servicios a trav&eacute;s de una red de ordenadores:";
 choices[13]= new Array();
 choices[13][0] = "GNU GPL.";
 choices[13][1] = "AGPL.";
 choices[13][2] = "BSD.";
 choices[13][3] = "Creative Commons.";
 answers[13] = 1;
 units[13] = ['66'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 725. AGE A2 2015";
 preguntaids[13] = 725


//  Id pregunta: 6039 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[14]= new Array();
 choices[14][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[14][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[14][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[14][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[14] = 0;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6039. TIC B 2007";
 preguntaids[14] = 6039


//  Id pregunta: 6617 Año de creación de pregunta: 2009
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[15]= new Array();
 choices[15][0] = "SecureBSD";
 choices[15][1] = "NetBSD";
 choices[15][2] = "DesktopBSD";
 choices[15][3] = "DragonflyBSD";
 answers[15] = 0;
 units[15] = ['66'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6617. ";
 preguntaids[15] = 6617


//  Id pregunta: 6618 Año de creación de pregunta: 2009
 questions[16]= "17)  Acerca de OpenOffice, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[16]= new Array();
 choices[16][0] = "Gracias a la ingenier&iacute;a inversa, puede manejar archivos .doc de Microsoft Office.";
 choices[16][1] = "Se puede utilizar en la mayor&iacute;a de sistemas de tipo UNIX salvo en Mac OS X.";
 choices[16][2] = "Sun Microsystems financia su desarrollo.";
 choices[16][3] = "Su antecesor fue StarOffice.";
 answers[16] = 1;
 units[16] = ['66'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6618. ";
 preguntaids[16] = 6618


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l NO est&aacute; considerada como una licencia de software libre?";
 choices[17]= new Array();
 choices[17][0] = "Berkeley Database License.";
 choices[17][1] = "Intel Open Source License.";
 choices[17][2] = "Licencia de Ruby.";
 choices[17][3] = "Aladdin Free Public License.";
 answers[17] = 3;
 units[17] = ['66'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 724. AGE A2 2015";
 preguntaids[17] = 724


//  Id pregunta: 6015 Año de creación de pregunta: 2003
 questions[18]= "19)  Entre los agentes participantes en la gesti&oacute;n del proceso de desarrollo de un Sistema, el &ldquo;especialista en comunicaciones&rdquo; responde al perfil de:";
 choices[18]= new Array();
 choices[18][0] = "Jefe de Proyecto.";
 choices[18][1] = "Directivo.";
 choices[18][2] = "Consultor.";
 choices[18][3] = "Ninguna de las anteriores.";
 answers[18] = 2;
 units[18] = ['66'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6015. TIC B 2007";
 preguntaids[18] = 6015


//  Id pregunta: 5939 Año de creación de pregunta: 2007
 questions[19]= "20)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[19]= new Array();
 choices[19][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadassobre el software";
 choices[19][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente lost&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor delproducto";
 choices[19][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara enprogramas distribuidos bajo licencia no GPL";
 choices[19][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &quot;Copyleft&quot;";
 answers[19] = 2;
 units[19] = ['66'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 5939. ";
 preguntaids[19] = 5939


//  Id pregunta: 2562 Año de creación de pregunta: 2004
 questions[20]= "21)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[20]= new Array();
 choices[20][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[20][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[20][2] = "Podemos redistribuir todas las copias que queramos";
 choices[20][3] = "No se puede cobrar dinero por el software libre.";
 answers[20] = 3;
 units[20] = ['66'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2562. ";
 preguntaids[20] = 2562


//  Id pregunta: 3402 Año de creación de pregunta: 2006
 questions[21]= "22)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[21]= new Array();
 choices[21][0] = "Konqueror";
 choices[21][1] = "Kspread";
 choices[21][2] = "Apache";
 choices[21][3] = "Evolution";
 answers[21] = 1;
 units[21] = ['66'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3402. ";
 preguntaids[21] = 3402


//  Id pregunta: 6145 Año de creación de pregunta: 2003
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?:";
 choices[22]= new Array();
 choices[22][0] = "GIMP";
 choices[22][1] = "Jetspeed";
 choices[22][2] = "Konqueror";
 choices[22][3] = "Eclipse";
 answers[22] = 0;
 units[22] = ['66'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6145. Examen TIC A1 MAP 2007";
 preguntaids[22] = 6145


//  Id pregunta: 2487 Año de creación de pregunta: 2004
 questions[23]= "24)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[23]= new Array();
 choices[23][0] = "Libertad de distribuir copias";
 choices[23][1] = "Gratuidad";
 choices[23][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[23][3] = "C&oacute;digo abierto";
 answers[23] = 1;
 units[23] = ['66'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2487. Similar a examen TIC MAP A 2004";
 preguntaids[23] = 2487


//  Id pregunta: 1733 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cu&aacute;l de las siguientes es una herramienta de software libre para la monitorizaci&oacute;n de servidores y sus servicios.";
 choices[24]= new Array();
 choices[24][0] = "Nagios";
 choices[24][1] = "Open-view";
 choices[24][2] = "awstats";
 choices[24][3] = "amberpoint";
 answers[24] = 0;
 units[24] = ['66'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1733. ";
 preguntaids[24] = 1733


//  Id pregunta: 7152 Año de creación de pregunta: 2010
 questions[25]= "26)  Jboss es un servidor de aplicaciones desarrollado por:";
 choices[25]= new Array();
 choices[25][0] = "Red Hat";
 choices[25][1] = "Canonical";
 choices[25][2] = "Apache";
 choices[25][3] = "GNU";
 answers[25] = 0;
 units[25] = ['66'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7152. ";
 preguntaids[25] = 7152


//  Id pregunta: 1787 Año de creación de pregunta: 2016
 questions[26]= "27)  La Licencia P&uacute;blica General Reducida de GNU (LGPL) es una licencia de software que utiliza:";
 choices[26]= new Array();
 choices[26][0] = "Copyright.";
 choices[26][1] = "Copyleft d&eacute;bil.";
 choices[26][2] = "Copyleft fuerte.";
 choices[26][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[26] = 1;
 units[26] = ['66'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1787. ";
 preguntaids[26] = 1787


//  Id pregunta: 7155 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes aplicaciones es un motor de b&uacute;squeda apoyado por el Apache Software Foundation?";
 choices[27]= new Array();
 choices[27][0] = "Apache WatchDog";
 choices[27][1] = "Apache Velocity";
 choices[27][2] = "Apache Tomcat";
 choices[27][3] = "Apache Lucene";
 answers[27] = 3;
 units[27] = ['66'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7155. ";
 preguntaids[27] = 7155


//  Id pregunta: 1861 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes herramientas software para backup NO es de c&oacute;digo abierto?";
 choices[28]= new Array();
 choices[28][0] = "Bacula";
 choices[28][1] = "BackupPC";
 choices[28][2] = "Amanda";
 choices[28][3] = "NetBackup";
 answers[28] = 3;
 units[28] = ['66'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1861. ";
 preguntaids[28] = 1861


//  Id pregunta: 3199 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[29]= new Array();
 choices[29][0] = "Debian";
 choices[29][1] = "Gentoo";
 choices[29][2] = "Max";
 choices[29][3] = "FreeBSD";
 answers[29] = 3;
 units[29] = ['66'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3199. ";
 preguntaids[29] = 3199


//  Id pregunta: 1856 Año de creación de pregunta: 2016
 questions[30]= "31)  Indique cu&aacute;l de los siguientes es un servidor web basado en c&oacute;digo abierto:";
 choices[30]= new Array();
 choices[30][0] = "Internet Information Server";
 choices[30][1] = "WebSphere";
 choices[30][2] = "WebLogic";
 choices[30][3] = "Lighttpd";
 answers[30] = 3;
 units[30] = ['66'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1856. ";
 preguntaids[30] = 1856


//  Id pregunta: 1943 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes componentes forman parte de la suite ofim&aacute;tica libre OpenOffice.org?";
 choices[31]= new Array();
 choices[31][0] = "Todos los mencionados a continuaci&oacute;n.";
 choices[31][1] = "Base.";
 choices[31][2] = "Writer.";
 choices[31][3] = "Math";
 answers[31] = 0;
 units[31] = ['66'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1943. ";
 preguntaids[31] = 1943


//  Id pregunta: 3398 Año de creación de pregunta: 2006
 questions[32]= "33)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[32]= new Array();
 choices[32][0] = ".DOT";
 choices[32][1] = ".free";
 choices[32][2] = "Mono";
 choices[32][3] = "Gambas";
 answers[32] = 2;
 units[32] = ['66'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3398. ";
 preguntaids[32] = 3398


//  Id pregunta: 3405 Año de creación de pregunta: 2006
 questions[33]= "34)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[33]= new Array();
 choices[33][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[33][1] = "Hoja de c&aacute;lculo para KDE";
 choices[33][2] = "Sistema gestor de redes empresariales extendidas";
 choices[33][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[33] = 3;
 units[33] = ['66'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 3405. ";
 preguntaids[33] = 3405


//  Id pregunta: 3189 Año de creación de pregunta: 2003
 questions[34]= "35)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[34]= new Array();
 choices[34][0] = "MPL";
 choices[34][1] = "BSD";
 choices[34][2] = "GPL";
 choices[34][3] = "PPL";
 answers[34] = 2;
 units[34] = ['66'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3189. EXAMEN CASTILLA LA MANCHA";
 preguntaids[34] = 3189


//  Id pregunta: 6017 Año de creación de pregunta: 2003
 questions[35]= "36)  En la metodolog&iacute;a M&eacute;trica V3, la especificaci&oacute;n del Plan de Pruebas se inicia en el proceso denominado:";
 choices[35]= new Array();
 choices[35][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[35][1] = "Estudio de Viabilidad del Sistema.";
 choices[35][2] = "Dise&ntilde;o de Sistema de Informaci&oacute;n.";
 choices[35][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[35] = 0;
 units[35] = ['66'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6017. TIC B 2007";
 preguntaids[35] = 6017


//  Id pregunta: 3335 Año de creación de pregunta: 2004
 questions[36]= "37)  Respecto al software gratuito y al software libre podemos decir que";
 choices[36]= new Array();
 choices[36][0] = "El software gratuito siempre es libre";
 choices[36][1] = "El software libre siempre es gratuito";
 choices[36][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[36][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[36] = 3;
 units[36] = ['66'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3335. ";
 preguntaids[36] = 3335


//  Id pregunta: 7154 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Qu&eacute; es Putty?";
 choices[37]= new Array();
 choices[37][0] = "Un cliente SSH";
 choices[37][1] = "Un software de virtualizaci&oacute;n";
 choices[37][2] = "Una suite ofim&aacute;tica";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 0;
 units[37] = ['66'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7154. ";
 preguntaids[37] = 7154


//  Id pregunta: 3380 Año de creación de pregunta: 2006
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[38]= new Array();
 choices[38][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[38][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[38][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[38][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[38] = 3;
 units[38] = ['66'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3380. ";
 preguntaids[38] = 3380


//  Id pregunta: 3291 Año de creación de pregunta: 2003
 questions[39]= "40)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[39]= new Array();
 choices[39][0] = "Lynx";
 choices[39][1] = "Epiphany";
 choices[39][2] = "Firefox";
 choices[39][3] = "Internet Explorer";
 answers[39] = 3;
 units[39] = ['66'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3291. ";
 preguntaids[39] = 3291


//  Id pregunta: 1271 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l de las siguientes extensiones se corresponde con el est&aacute;ndar de documentos abiertos para aplicaciones ofim&aacute;ticas (OpenDocument) para documentos de texto (cuyo tipo MIME es application/vnd.oasis.opendocument.text):";
 choices[40]= new Array();
 choices[40][0] = ".ods";
 choices[40][1] = ".doc";
 choices[40][2] = ".txt";
 choices[40][3] = ".odt";
 answers[40] = 3;
 units[40] = ['66'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1271. ";
 preguntaids[40] = 1271


//  Id pregunta: 3287 Año de creación de pregunta: 2003
 questions[41]= "42)  Sobre el entorno WINE de Linux se puede decir que:";
 choices[41]= new Array();
 choices[41][0] = "Es un emulador de Windows";
 choices[41][1] = "Es una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[41][2] = "Permite ejecutar todas las aplicaciones de Windows 32 sobre Linux";
 choices[41][3] = "Es un sistema de gesti&oacute;n de ventanas para Linux con la apariencia de Windows";
 answers[41] = 1;
 units[41] = ['66'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3287. ";
 preguntaids[41] = 3287


//  Id pregunta: 3123 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[42]= new Array();
 choices[42][0] = "Lesser General Public License (LGPL)";
 choices[42][1] = "Modified BSD License";
 choices[42][2] = "Mozilla Public License (MPL)";
 choices[42][3] = "X11 License";
 answers[42] = 2;
 units[42] = ['66'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3123. ";
 preguntaids[42] = 3123


//  Id pregunta: 3404 Año de creación de pregunta: 2006
 questions[43]= "44)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[43]= new Array();
 choices[43][0] = "Impress";
 choices[43][1] = "Calc";
 choices[43][2] = "Math";
 choices[43][3] = "Text";
 answers[43] = 3;
 units[43] = ['66'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3404. ";
 preguntaids[43] = 3404


//  Id pregunta: 2746 Año de creación de pregunta: 2002
 questions[44]= "45)  El concepto de adware implica que:";
 choices[44]= new Array();
 choices[44][0] = "Normalmente no existe coste por ser un a&ntilde;adido sencillo a otro software ya existente";
 choices[44][1] = "Es un software que se vende a empresas de publicidad para que &eacute;stas puedan usarlo en sus campa&ntilde;as de lanzamiento de productos";
 choices[44][2] = "Es un parche que se puede descargar f&aacute;cilmente de la web normalmente para solucionar fallos puntuales de funcionamiento de programas de pago";
 choices[44][3] = "Es un software cuyo &uacute;nico coste de adquisici&oacute;n es 'soportar' la inclusi&oacute;n de banners y pop-ups publicitarios cada vez que se ejecute";
 answers[44] = 3;
 units[44] = ['66'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2746. ";
 preguntaids[44] = 2746


//  Id pregunta: 3284 Año de creación de pregunta: 2003
 questions[45]= "46)  Si estamos hablando de GNOME, nos referimos a:";
 choices[45]= new Array();
 choices[45][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[45][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[45][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[45][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[45] = 1;
 units[45] = ['66'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 3284. Junta Andaluc&iacute;a";
 preguntaids[45] = 3284


//  Id pregunta: 7153 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es un servidor de aplicaciones de software libre?";
 choices[46]= new Array();
 choices[46][0] = "Websphere";
 choices[46][1] = "WebLogic";
 choices[46][2] = "GlassFish";
 choices[46][3] = "Synaptic";
 answers[46] = 2;
 units[46] = ['66'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 7153. ";
 preguntaids[46] = 7153


//  Id pregunta: 6668 Año de creación de pregunta: 2009
 questions[47]= "48)  El sub-proyecto de &quot;Apache&quot; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[47]= new Array();
 choices[47][0] = "Watchdog";
 choices[47][1] = "Turbine";
 choices[47][2] = "Lucene";
 choices[47][3] = "Avalon";
 answers[47] = 2;
 units[47] = ['66'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 6668. MAP 2008 A1";
 preguntaids[47] = 6668


//  Id pregunta: 6616 Año de creación de pregunta: 2009
 questions[48]= "49)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[48][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[48][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[48][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[48] = 3;
 units[48] = ['66'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6616. ";
 preguntaids[48] = 6616


//  Id pregunta: 3399 Año de creación de pregunta: 2006
 questions[49]= "50)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[49]= new Array();
 choices[49][0] = "Es gratis";
 choices[49][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[49][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[49][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[49] = 0;
 units[49] = ['66'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3399. ";
 preguntaids[49] = 3399


//  Id pregunta: 6971 Año de creación de pregunta: 2010
 questions[50]= "51)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[50]= new Array();
 choices[50][0] = "Watchdog";
 choices[50][1] = "Turbine";
 choices[50][2] = "Lucene";
 choices[50][3] = "Avalon";
 answers[50] = 1;
 units[50] = ['66'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6971. TIC-B 2009 bloque desarrollo";
 preguntaids[50] = 6971


//  Id pregunta: 3191 Año de creación de pregunta: 2003
 questions[51]= "52)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[51]= new Array();
 choices[51][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[51][1] = "es un sistema operativo compatible con UNIX";
 choices[51][2] = "es un software libre";
 choices[51][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[51] = 0;
 units[51] = ['66'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3191. EXAMEN CASTILLA LA MANCHA";
 preguntaids[51] = 3191


//  Id pregunta: 6398 Año de creación de pregunta: 2003
 questions[52]= "53)  El modelo de desarrollo conocido como el bazar";
 choices[52]= new Array();
 choices[52][0] = "Fue promulgado por Linus Torvald";
 choices[52][1] = "No se aplica a desarrollos comerciales";
 choices[52][2] = "Se basa en la metodolog&iacute;a Extreme Programming";
 choices[52][3] = "Todas las respuestas anteriores son incorrectas";
 answers[52] = 3;
 units[52] = ['66'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6398. Examen 2006 JCYL";
 preguntaids[52] = 6398


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[53]= new Array();
 choices[53][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[53][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[53][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[53][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[53] = 3;
 units[53] = ['66'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 722. AGE A1 2015";
 preguntaids[53] = 722


//  Id pregunta: 2581 Año de creación de pregunta: 2002
 questions[54]= "55)  Apache:";
 choices[54]= new Array();
 choices[54][0] = "Es un servidor web disponible para plataformas Windows";
 choices[54][1] = "Es una licencia para software libre";
 choices[54][2] = "Es el servidor web libre m&aacute;s utilizado en sistemas Unix/Linux";
 choices[54][3] = "Todas las respuestas anteriores son correctas";
 answers[54] = 3;
 units[54] = ['66'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2581. ";
 preguntaids[54] = 2581


//  Id pregunta: 7091 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[55]= new Array();
 choices[55][0] = "El software libre es por definici&oacute;n gratuito";
 choices[55][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[55][2] = "No existe software libre para Windows";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = 3;
 units[55] = ['66'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7091. ";
 preguntaids[55] = 7091


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de las siguientes es una librer&iacute;a de c&oacute;digo abierto para crear y manipular archivos PDF, RTF, y HTML en Java:";
 choices[56]= new Array();
 choices[56][0] = "Json";
 choices[56][1] = "iText";
 choices[56][2] = "text-tomcat";
 choices[56][3] = "OpenXML";
 answers[56] = 1;
 units[56] = ['66'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 723. AGE A2 2015";
 preguntaids[56] = 723


//  Id pregunta: 6996 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[57]= new Array();
 choices[57][0] = "My Sql";
 choices[57][1] = "Php";
 choices[57][2] = "Rampart";
 choices[57][3] = "Addressing";
 answers[57] = 2;
 units[57] = ['66'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6996. TIC-B 2009 bloque desarrollo";
 preguntaids[57] = 6996


//  Id pregunta: 3286 Año de creación de pregunta: 2003
 questions[58]= "59)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[58]= new Array();
 choices[58][0] = "Sistemas de ayuda de KDE.";
 choices[58][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[58][2] = "Entorno de escritorio.";
 choices[58][3] = "Administradores de ventanas en LINUX.";
 answers[58] = 3;
 units[58] = ['66'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3286. Junta Andaluc&iacute;a";
 preguntaids[58] = 3286


//  Id pregunta: 6831 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[59]= new Array();
 choices[59][0] = "Thunderbird.";
 choices[59][1] = "Adobe Reader.";
 choices[59][2] = "OpenOffice.";
 choices[59][3] = "Firefox.";
 answers[59] = 1;
 units[59] = ['66'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6831. TIC A 2009";
 preguntaids[59] = 6831


//  Id pregunta: 1335 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[60]= new Array();
 choices[60][0] = "ISO/IEC 26300:2006";
 choices[60][1] = "RFC 2373";
 choices[60][2] = "ISO/IEC 9899:1999";
 choices[60][3] = "ISO 9000";
 answers[60] = 0;
 units[60] = ['66'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1335. ";
 preguntaids[60] = 1335


//  Id pregunta: 7151 Año de creación de pregunta: 2010
 questions[61]= "62)  De las siguientes aplicaciones, &iquest;Cu&aacute;l no es un servidor de aplicaciones?";
 choices[61]= new Array();
 choices[61][0] = "Apache Geronimo";
 choices[61][1] = "Jboss";
 choices[61][2] = "eXo";
 choices[61][3] = "Resin";
 answers[61] = 2;
 units[61] = ['66'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7151. ";
 preguntaids[61] = 7151


//  Id pregunta: 6014 Año de creación de pregunta: 2003
 questions[62]= "63)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, &iquest;en cu&aacute;l de las siguientes actividades del proceso de Planificaci&oacute;n del Sistema de Informaci&oacute;n participa el jefe del proyecto?:";
 choices[62]= new Array();
 choices[62][0] = "Definici&oacute;n y organizaci&oacute;n del plan de sistemas de informaci&oacute;n.";
 choices[62][1] = "Identificaci&oacute;n de requisitos.";
 choices[62][2] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 choices[62][3] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 answers[62] = 0;
 units[62] = ['66'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6014. TIC B 2007";
 preguntaids[62] = 6014


//  Id pregunta: 2589 Año de creación de pregunta: 2002
 questions[63]= "64)  Un programa shareware:";
 choices[63]= new Array();
 choices[63][0] = "Es software que podemos utilizar libremente";
 choices[63][1] = "Es software que podemos vender libremente";
 choices[63][2] = "Es software que podemos probar libremente";
 choices[63][3] = "No existe este concepto";
 answers[63] = 2;
 units[63] = ['66'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2589. ";
 preguntaids[63] = 2589


//  Id pregunta: 3401 Año de creación de pregunta: 2006
 questions[64]= "65)  Se&ntilde;ale aqu&eacute;l tipo de software que se aleja m&aacute;s del concepto de software libre:";
 choices[64]= new Array();
 choices[64][0] = "Software de dominio p&uacute;blico";
 choices[64][1] = "Software bajo licencia GPL";
 choices[64][2] = "Shareware";
 choices[64][3] = "Software de descarga gratuita";
 answers[64] = 2;
 units[64] = ['66'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3401. ";
 preguntaids[64] = 3401


//  Id pregunta: 3258 Año de creación de pregunta: 2003
 questions[65]= "66)  En que tres bibliotecas esta basado GTK+";
 choices[65]= new Array();
 choices[65][0] = "Bonobo, Nautilus, ATK";
 choices[65][1] = "Gnome-db/libgda";
 choices[65][2] = "Glib, Pango, ATK";
 choices[65][3] = "BCEL, Log4j";
 answers[65] = 2;
 units[65] = ['66'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3258. ";
 preguntaids[65] = 3258


//  Id pregunta: 3400 Año de creación de pregunta: 2006
 questions[66]= "67)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[66]= new Array();
 choices[66][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[66][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[66][2] = "No permite su integraci&oacute;n con software propietario";
 choices[66][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[66] = 0;
 units[66] = ['66'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3400. ";
 preguntaids[66] = 3400


//  Id pregunta: 2835 Año de creación de pregunta: 2002
 questions[67]= "68)  En la terminolog&iacute;a de software libre:";
 choices[67]= new Array();
 choices[67][0] = "El software libre no tiene porque ser gratis";
 choices[67][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[67][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[67][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[67] = 0;
 units[67] = ['66'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2835. ";
 preguntaids[67] = 2835


//  Id pregunta: 1942 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[68]= new Array();
 choices[68][0] = "Internet Information Server";
 choices[68][1] = "Weblogic";
 choices[68][2] = "Websphere";
 choices[68][3] = "Apache";
 answers[68] = 3;
 units[68] = ['66'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1942. ";
 preguntaids[68] = 1942


//  Id pregunta: 1941 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; caracter&iacute;sticas tiene el software libre cubierto por la GPL de GNU?";
 choices[69]= new Array();
 choices[69][0] = "Su usa, redistribuci&oacute;n o modificaci&oacute;n est&aacute;n prohibidos, requieren que se solicite una autorizaci&oacute;n.";
 choices[69][1] = "Se convierte en freeware, paquetes que se pueden distribuir pero no modificar.";
 choices[69][2] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa, distribuir copias y est&aacute; protegido con copylet.";
 choices[69][3] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa y a partir de aqu&iacute; ya puede ser software privativo.";
 answers[69] = 2;
 units[69] = ['66'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1941. ";
 preguntaids[69] = 1941


//  Id pregunta: 2570 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[70]= new Array();
 choices[70][0] = "Chat";
 choices[70][1] = "Correo electr&oacute;nico";
 choices[70][2] = "Peer to Peer";
 choices[70][3] = "B2C";
 answers[70] = 2;
 units[70] = ['66'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2570. ";
 preguntaids[70] = 2570


//  Id pregunta: 3880 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Qu&eacute; es EMACS?:";
 choices[71]= new Array();
 choices[71][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[71][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[71][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[71][3] = "Nada de lo anterior es correcto";
 answers[71] = 1;
 units[71] = ['66'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 3880. ";
 preguntaids[71] = 3880


//  Id pregunta: 3304 Año de creación de pregunta: 2004
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[72]= new Array();
 choices[72][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[72][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[72][2] = "Lucene es un motor de b&uacute;squeda";
 choices[72][3] = "Ninguna de las anteriores es cierta";
 answers[72] = 2;
 units[72] = ['66'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3304. ";
 preguntaids[72] = 3304


//  Id pregunta: 2553 Año de creación de pregunta: 2002
 questions[73]= "74)  Indique una caracter&iacute;stica del software libre:";
 choices[73]= new Array();
 choices[73][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[73][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[73][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[73][3] = "Todas las respuestas son correctas";
 answers[73] = 3;
 units[73] = ['66'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2553. ";
 preguntaids[73] = 2553


//  Id pregunta: 2011 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU?:";
 choices[74]= new Array();
 choices[74][0] = "MPL";
 choices[74][1] = "BSD";
 choices[74][2] = "GPL";
 choices[74][3] = "PPL";
 answers[74] = 2;
 units[74] = ['66'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2011. ";
 preguntaids[74] = 2011


