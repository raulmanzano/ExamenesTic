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
//  Id pregunta: 5093 Año de creación de pregunta: 2003
 questions[0]= "1)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[0]= new Array();
 choices[0][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[0][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[0][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[0][3] = "No es nada de lo anterior";
 answers[0] = 1;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5093. ";
 preguntaids[0] = 5093


//  Id pregunta: 2771 Año de creación de pregunta: 2002
 questions[1]= "2)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[1]= new Array();
 choices[1][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[1][1] = "Interfaz lenguaje de datos de usuario";
 choices[1][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[1][3] = "Interfaz lenguaje de datos interno";
 answers[1] = 2;
 units[1] = ['60'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2771. ";
 preguntaids[1] = 2771


//  Id pregunta: 8536 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[2]= new Array();
 choices[2][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[2][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[2][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[2][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[2] = 0;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 8536. ";
 preguntaids[2] = 8536


//  Id pregunta: 7830 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Qu&eacute; es Atom?";
 choices[3]= new Array();
 choices[3][0] = "Sistema de an&aacute;lisis XML.";
 choices[3][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos.";
 choices[3][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas.";
 choices[3][3] = "Sintaxis de una DTD.";
 answers[3] = 1;
 units[3] = ['125'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 7830. ";
 preguntaids[3] = 7830


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[4]= new Array();
 choices[4][0] = "En t&iacute;tulos-valores.";
 choices[4][1] = "Las respuestas a) y b) son correctas.";
 choices[4][2] = "Las respuestas a) y b) no son correctas.";
 choices[4][3] = "En cuenta.";
 answers[4] = 1;
 units[4] = ['11'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 316. Presupuestos generales";
 preguntaids[4] = 316


//  Id pregunta: 2109 Año de creación de pregunta: 2009
 questions[5]= "6)  El Registro General de Protecci&oacute;n de Datos:";
 choices[5]= new Array();
 choices[5][0] = "Inscribe de oficio las autorizaciones de transferencias internacionales de datos";
 choices[5][1] = "Da libre acceso a los ficheros de datos personales";
 choices[5][2] = "Inscribe &uacute;nicamente los ficheros automatizados de las AAPP";
 choices[5][3] = "Es el &Oacute;rgano ante el que se ejerce el derecho de informaci&oacute;n, acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 answers[5] = 0;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2109. ";
 preguntaids[5] = 2109


//  Id pregunta: 9534 Año de creación de pregunta: 2014
 questions[6]= "7)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:  &quot;Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&quot; &iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[6]= new Array();
 choices[6][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[6][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[6][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[6][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[6] = 1;
 units[6] = ['66'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 9534. ";
 preguntaids[6] = 9534


//  Id pregunta: 3565 Año de creación de pregunta: 2004
 questions[7]= "8)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[7]= new Array();
 choices[7][0] = "caja negra";
 choices[7][1] = "caja blanca";
 choices[7][2] = "caja roja";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 0;
 units[7] = ['91', '93'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3565. Similar a examen TIC SS A 2003";
 preguntaids[7] = 3565


//  Id pregunta: 4596 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[8]= new Array();
 choices[8][0] = "Debido al relleno de bits";
 choices[8][1] = "La eficiencia de ambos protocolos es la misma";
 choices[8][2] = "Debido al relleno de caracteres";
 choices[8][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[8] = 0;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4596. ";
 preguntaids[8] = 4596


//  Id pregunta: 7527 Año de creación de pregunta: 2010
 questions[9]= "10)  En JDBC, &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[9]= new Array();
 choices[9][0] = "Driver Tipo 1.";
 choices[9][1] = "Driver Tipo 2.";
 choices[9][2] = "Driver Tipo 3.";
 choices[9][3] = "Driver Tipo 4.";
 answers[9] = 0;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7527. Map 2005";
 preguntaids[9] = 7527


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[10]= new Array();
 choices[10][0] = "En 1988.";
 choices[10][1] = "En 1981.";
 choices[10][2] = "En 1982.";
 choices[10][3] = "En 1986.";
 answers[10] = 3;
 units[10] = ['5'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 193. Uni&oacute;n Europea";
 preguntaids[10] = 193


//  Id pregunta: 9863 Año de creación de pregunta: 2015
 questions[11]= "12)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[11]= new Array();
 choices[11][0] = "AP (Authentication Provider)";
 choices[11][1] = "SP (Service Provider)";
 choices[11][2] = "IdP (Identity Provider)";
 choices[11][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[11] = 0;
 units[11] = ['119', '120'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9863. ";
 preguntaids[11] = 9863


//  Id pregunta: 4402 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Qu&eacute; es el spyware?:";
 choices[12]= new Array();
 choices[12][0] = "SW de alto secreto usado por los servicios de inteligencia de cada pa&iacute;s";
 choices[12][1] = "SW que diversas compa&ntilde;&iacute;as introducen en tu ordenador cuando te descargas algo de internet, para ver tus programas y tus usos y sacar estudios de mercado";
 choices[12][2] = "Es otro nombre de las conocidas cookies";
 choices[12][3] = "La denominaci&oacute;n es err&oacute;nea, no se refiere a nada";
 answers[12] = 1;
 units[12] = ['119'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4402. ";
 preguntaids[12] = 4402


//  Id pregunta: 5934 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[13]= new Array();
 choices[13][0] = "32";
 choices[13][1] = "64";
 choices[13][2] = "128";
 choices[13][3] = "256";
 answers[13] = 0;
 units[13] = ['105', '109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5934. ";
 preguntaids[13] = 5934


//  Id pregunta: 6122 Año de creación de pregunta: 2003
 questions[14]= "15)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[14]= new Array();
 choices[14][0] = "Nivel 2";
 choices[14][1] = "Nivel 3";
 choices[14][2] = "Nivel 4";
 choices[14][3] = "Nivel 5";
 answers[14] = 1;
 units[14] = ['105'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6122. Examen TIC A1 MAP 2007";
 preguntaids[14] = 6122


//  Id pregunta: 9897 Año de creación de pregunta: 2015
 questions[15]= "16)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[15]= new Array();
 choices[15][0] = "Enero de 2013.";
 choices[15][1] = "Junio de 2013.";
 choices[15][2] = "Diciembre de 2013.";
 choices[15][3] = "Enero de 2014.";
 answers[15] = 1;
 units[15] = ['7', '19'];
 blocks[15] = ['A2', 'A4'];
 comments[15] = "Id Pregunta: 9897. ";
 preguntaids[15] = 9897


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[16]= new Array();
 choices[16][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[16][1] = "Todas las respuestas son correctas.";
 choices[16][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[16][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[16] = 1;
 units[16] = ['11'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 292. Presupuestos generales";
 preguntaids[16] = 292


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[17]= "18)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[17]= new Array();
 choices[17][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[17][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[17][2] = "Veintiocho Jueces y ocho Abogados Generales.";
 choices[17][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[17] = 2;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 174. Uni&oacute;n Europea";
 preguntaids[17] = 174


//  Id pregunta: 10388 Año de creación de pregunta: 2015
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[18]= new Array();
 choices[18][0] = "Juventud en movimiento";
 choices[18][1] = "Una Europa que utilice eficazmente los recursos";
 choices[18][2] = "Plataforma Europea contra la pobreza";
 choices[18][3] = "Agenda Clim&aacute;tica para Europa";
 answers[18] = 1;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 10388. ";
 preguntaids[18] = 10388


//  Id pregunta: 6076 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (Manifesto for Agile Software Development)?:";
 choices[19]= new Array();
 choices[19][0] = "Aceptamos requisitos cambiantes s&oacute;lo en las primeras etapas del desarrollo.";
 choices[19][1] = "Los procesos &aacute;giles promueven el desarrollo sostenido.";
 choices[19][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses,con preferencia por los periodos m&aacute;s cortos posibles.";
 choices[19][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[19] = 0;
 units[19] = ['84'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6076. Examen TIC A1 MAP 2007";
 preguntaids[19] = 6076


//  Id pregunta: 9861 Año de creación de pregunta: 2015
 questions[20]= "21)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[20]= new Array();
 choices[20][0] = "PEAP";
 choices[20][1] = "EAP-SIM";
 choices[20][2] = "EAP-PAP";
 choices[20][3] = "EAP-TTLS";
 answers[20] = 2;
 units[20] = ['119'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 9861. ";
 preguntaids[20] = 9861


//  Id pregunta: 4797 Año de creación de pregunta: 2002
 questions[21]= "22)  En el protocolo HTTP, el m&eacute;todo de cliente TRACE:";
 choices[21]= new Array();
 choices[21][0] = "Pide al servidor que se declare a s&iacute; mismo dentro de la cabecera";
 choices[21][1] = "Se utiliza para depuracion y diagnostico, conteniendo informaci&oacute;n del servidor y lo que a&ntilde;aden servidores intermedios";
 choices[21][2] = "No existe";
 choices[21][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[21] = 1;
 units[21] = ['103'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4797. ";
 preguntaids[21] = 4797


//  Id pregunta: 8884 Año de creación de pregunta: 2013
 questions[22]= "23)  El diagrama de estructura de datos (DED):";
 choices[22]= new Array();
 choices[22][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[22][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[22][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[22][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[22] = 0;
 units[22] = ['85'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 8884. Examen AGE TIC A1 2011";
 preguntaids[22] = 8884


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[23]= "24)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[23]= new Array();
 choices[23][0] = "El Segundo.";
 choices[23][1] = "El Primero.";
 choices[23][2] = "El Preliminar.";
 choices[23][3] = "El Tercero.";
 answers[23] = 2;
 units[23] = ['1'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 93. Constituci&oacute;n de 1978";
 preguntaids[23] = 93


//  Id pregunta: 977 Año de creación de pregunta: 2016
 questions[24]= "25)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[24]= new Array();
 choices[24][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[24][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[24][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[24][3] = "todas son correctas";
 answers[24] = 3;
 units[24] = ['4', '7', '8', '9'];
 blocks[24] = ['A1', 'A2'];
 comments[24] = "Id Pregunta: 977. Ley 40/2015";
 preguntaids[24] = 977


//  Id pregunta: 7123 Año de creación de pregunta: 2010
 questions[25]= "26)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[25]= new Array();
 choices[25][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[25][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[25][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[25][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[25] = 1;
 units[25] = ['7'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 7123. Art&iacute;culo 43 RD 1671/2009";
 preguntaids[25] = 7123


//  Id pregunta: 1775 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[26]= new Array();
 choices[26][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[26][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[26][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[26][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[26] = 1;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 1775. ";
 preguntaids[26] = 1775


//  Id pregunta: 8174 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[27]= new Array();
 choices[27][0] = "SOLAP.";
 choices[27][1] = "DOLAP.";
 choices[27][2] = "WOLAP.";
 choices[27][3] = "RTOLAP.";
 answers[27] = 2;
 units[27] = ['72'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8174. Examen TIC A2 2010 interna";
 preguntaids[27] = 8174


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[28]= new Array();
 choices[28][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[28][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[28][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[28][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[28] = 3;
 units[28] = ['11'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[28] = 315


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[29]= "30)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[29]= new Array();
 choices[29][0] = "Relaciones base y vistas.";
 choices[29][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[29][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[29][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[29] = 3;
 units[29] = ['60'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 686. Junta de Extremadura A1 2015";
 preguntaids[29] = 686


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[30]= "31)  Entre los sistemas de informaci&oacute;n transversales que se utilizan para facilitar la recogida global de datos sobre Recursos TIC en la Administraci&oacute;n del Estado encontramos al sistema de informaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "AWR.";
 choices[30][1] = "Acceda.";
 choices[30][2] = "REINA.";
 choices[30][3] = "EJIE.";
 answers[30] = 2;
 units[30] = ['47'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 624. AGE A2 2015";
 preguntaids[30] = 624


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Real Decreto Legislativo 3/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley de Empleo, son instrumentos de coordinaci&oacute;n del Sistema Nacional de Empleo los siguientes. Se&ntilde;ale la falsa:";
 choices[31]= new Array();
 choices[31][0] = "La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo";
 choices[31][1] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 choices[31][2] = "Los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[31][3] = "El Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo";
 answers[31] = 1;
 units[31] = ['15'];
 blocks[31] = ['A3'];
 comments[31] = "Id Pregunta: 427. Modelo econ&oacute;mico";
 preguntaids[31] = 427


//  Id pregunta: 6400 Año de creación de pregunta: 2003
 questions[32]= "33)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[32]= new Array();
 choices[32][0] = "An&aacute;lisis de riesgos";
 choices[32][1] = "An&aacute;lisis de impacto";
 choices[32][2] = "Disponibilidad";
 choices[32][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[32] = 1;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 6400. Examen 2006 JCYL";
 preguntaids[32] = 6400


//  Id pregunta: 5063 Año de creación de pregunta: 2002
 questions[33]= "34)  Se&ntilde;ale la norma de IEEE que se refiere a redes LAN con CSMA/CD:";
 choices[33]= new Array();
 choices[33][0] = "802.1";
 choices[33][1] = "802.2";
 choices[33][2] = "802.3";
 choices[33][3] = "802.4";
 answers[33] = 2;
 units[33] = ['112'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5063. ";
 preguntaids[33] = 5063


//  Id pregunta: 3005 Año de creación de pregunta: 2002
 questions[34]= "35)  Para Unix un archivo de compone de:";
 choices[34]= new Array();
 choices[34][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[34][1] = "Una secuencia de bytes";
 choices[34][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[34][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[34] = 1;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3005. ";
 preguntaids[34] = 3005


//  Id pregunta: 8099 Año de creación de pregunta: 2011
 questions[35]= "36)  La regla 2 de Codd es la del:";
 choices[35]= new Array();
 choices[35][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[35][1] = "Acceso garantizado";
 choices[35][2] = "Actualizaci&oacute;n de vistas";
 choices[35][3] = "Integridad referencial";
 answers[35] = 1;
 units[35] = ['60', '61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8099. Analista Ayto. Madrid 2010";
 preguntaids[35] = 8099


//  Id pregunta: 8268 Año de creación de pregunta: 2011
 questions[36]= "37)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[36]= new Array();
 choices[36][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[36][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[36][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[36][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[36] = 1;
 units[36] = ['7'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 8268. Examen TIC A2 2010 interna";
 preguntaids[36] = 8268


//  Id pregunta: 6760 Año de creación de pregunta: 2009
 questions[37]= "38)  &iquest;Cu&aacute;l de estos no es un producto de virtualizaci&oacute;n de VMWare?";
 choices[37]= new Array();
 choices[37][0] = "VMWare Parallels";
 choices[37][1] = "VMWare ESXi";
 choices[37][2] = "VMWare Workstation";
 choices[37][3] = "VMWare Fusion";
 answers[37] = 0;
 units[37] = ['124'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6760. ";
 preguntaids[37] = 6760


//  Id pregunta: 7896 Año de creación de pregunta: 2011
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[38]= new Array();
 choices[38][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[38][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[38][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[38][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[38] = 1;
 units[38] = ['47'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 7896. Examen TIC A1 2010";
 preguntaids[38] = 7896


//  Id pregunta: 10391 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[39]= new Array();
 choices[39][0] = "2% del PIB";
 choices[39][1] = "3%del PIB";
 choices[39][2] = "5% del PIB";
 choices[39][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[39] = 1;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 10391. ";
 preguntaids[39] = 10391


//  Id pregunta: 5013 Año de creación de pregunta: 2002
 questions[40]= "41)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[40]= new Array();
 choices[40][0] = "El acceso telef&oacute;nico conmutado";
 choices[40][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[40][2] = "Utilizar l&iacute;neas privadas";
 choices[40][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[40] = 1;
 units[40] = ['113'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5013. ";
 preguntaids[40] = 5013


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[41]= "42)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[41]= new Array();
 choices[41][0] = "apud acta";
 choices[41][1] = "presencialmente";
 choices[41][2] = "electr&oacute;nicamente";
 choices[41][3] = "todas son correctas";
 answers[41] = 3;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 235. Ley 39/2015";
 preguntaids[41] = 235


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[42]= new Array();
 choices[42][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[42][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[42][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[42][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[42] = 2;
 units[42] = ['22'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 494. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[42] = 494


//  Id pregunta: 1743 Año de creación de pregunta: 2016
 questions[43]= "44)  En la resoluci&oacute;n del 22 de noviembre de 2005, de la Secretaria de Estado de Telecomunicaci&oacute;n y para la Sociedad de la Informaci&oacute;n, se publicaron los requisitos t&eacute;cnicos de la interfaz reglamentaria Ir-14 relativa a los sistemas de acceso inal&aacute;mbrico fijo (LMDS/FWA) para Espa&ntilde;a. Se&ntilde;ale qu&eacute; banda de frecuencias son las asignadas:";
 choices[43]= new Array();
 choices[43][0] = "2,4 a 2,6 Ghz.";
 choices[43][1] = "202,5 a 226,6 Ghz.";
 choices[43][2] = "24,5 a 26,5 Ghz.";
 choices[43][3] = "3.400 a 3.800 MHz.";
 answers[43] = 2;
 units[43] = ['106'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1743. ";
 preguntaids[43] = 1743


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[44]= new Array();
 choices[44][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[44][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[44][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[44][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[44] = 3;
 units[44] = ['10'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[44] = 9037


//  Id pregunta: 8688 Año de creación de pregunta: 2013
 questions[45]= "46)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[45]= new Array();
 choices[45][0] = "Se orienta al usuario novel y promedio.";
 choices[45][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[45][2] = "Su patrocinador es Canonical.";
 choices[45][3] = "Todas son correctas.";
 answers[45] = 3;
 units[45] = ['57'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8688. ";
 preguntaids[45] = 8688


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[46]= new Array();
 choices[46][0] = "11";
 choices[46][1] = "12";
 choices[46][2] = "14";
 choices[46][3] = "8";
 answers[46] = 1;
 units[46] = ['1'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 21. Constituci&oacute;n de 1978";
 preguntaids[46] = 21


//  Id pregunta: 10814 Año de creación de pregunta: 2015
 questions[47]= "48)  RSS son las siglas de:";
 choices[47]= new Array();
 choices[47][0] = "Really Simple Sindication";
 choices[47][1] = "Rich Simple Summary";
 choices[47][2] = "RDF Simple Summary";
 choices[47][3] = "Todas las anteriores son correctas";
 answers[47] = 0;
 units[47] = ['74'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 10814. ";
 preguntaids[47] = 10814


//  Id pregunta: 10308 Año de creación de pregunta: 2015
 questions[48]= "49)  Seleccione la opci&oacute;n verdadera";
 choices[48]= new Array();
 choices[48][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[48][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[48][2] = "ACCEDA permite crear un registro en la nube";
 choices[48][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[48] = 0;
 units[48] = ['46'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 10308. Geiser es una soluci&oacute;n de registro integral";
 preguntaids[48] = 10308


//  Id pregunta: 9778 Año de creación de pregunta: 2014
 questions[49]= "50)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[49]= new Array();
 choices[49][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[49][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[49][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[49][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[49] = 2;
 units[49] = ['45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 9778. ";
 preguntaids[49] = 9778


//  Id pregunta: 9434 Año de creación de pregunta: 2014
 questions[50]= "51)  En el encaminamiento por estado de los enlaces cada router:";
 choices[50]= new Array();
 choices[50][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos.";
 choices[50][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[50][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[50][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[50] = 3;
 units[50] = ['112'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9434. ";
 preguntaids[50] = 9434


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[51]= "52)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[51]= new Array();
 choices[51][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[51][1] = "La CETIC";
 choices[51][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[51][3] = "El MHFP";
 answers[51] = 0;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 469. Estrategia TIC";
 preguntaids[51] = 469


//  Id pregunta: 1669 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;El lenguaje de programaci&oacute;n java tiene APIs para el protocolo de comunicaciones seguras Secure Sockets Layer (SSL)?.";
 choices[52]= new Array();
 choices[52][0] = "S&iacute;, por ejemplo, la Java Secure Socket Extensi&oacute;n (JSSE) que incluye clases que pueden ser instanciadas para crear canales seguros.";
 choices[52][1] = "En la actualidad para realizar las funciones de encriptaci&oacute;n de la informaci&oacute;n solo est&aacute; disponible la clase SSLSocket.";
 choices[52][2] = "Java solo admite SSL para programar clientes web.";
 choices[52][3] = "S&iacute;, cuenta con las CRL o listas de revocaci&oacute;n de certificados.";
 answers[52] = 0;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1669. ";
 preguntaids[52] = 1669


//  Id pregunta: 4649 Año de creación de pregunta: 2002
 questions[53]= "54)  Cada cabecera de IPv6 tiene una longitud de:";
 choices[53]= new Array();
 choices[53][0] = "32 bytes";
 choices[53][1] = "36 bytes";
 choices[53][2] = "n&uacute;mero de bytes variable seg&uacute;n el tipo de cabecera";
 choices[53][3] = "40 bytes";
 answers[53] = 3;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4649. ";
 preguntaids[53] = 4649


//  Id pregunta: 8585 Año de creación de pregunta: 2013
 questions[54]= "55)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[54]= new Array();
 choices[54][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[54][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[54][2] = "El balanceo de carga solo puede implementarse por software";
 choices[54][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[54] = 2;
 units[54] = ['50'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8585. Examen TIC-A1 2011";
 preguntaids[54] = 8585


//  Id pregunta: 5620 Año de creación de pregunta: 2007
 questions[55]= "56)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[55]= new Array();
 choices[55][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[55][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[55][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[55][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[55] = 0;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 5620. ";
 preguntaids[55] = 5620


//  Id pregunta: 6931 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[56]= new Array();
 choices[56][0] = "SCORM 1.0";
 choices[56][1] = "SCORM 1.1";
 choices[56][2] = "SCORM 1.2";
 choices[56][3] = "SCORM 2004, si bien ADL ofrece ya una siguiente generaci&oacute;n de e-learning standard llamada Experience API";
 answers[56] = 3;
 units[56] = ['70'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6931. ";
 preguntaids[56] = 6931


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[57]= "58)  La ley de Okun se refiere a:";
 choices[57]= new Array();
 choices[57][0] = "La relaci&oacute;n emp&iacute;rica entre las variables tasa de desempleo y producci&oacute;n de un pa&iacute;s.";
 choices[57][1] = "La relaci&oacute;n inversa entre la inflaci&oacute;n y el desempleo de un pa&iacute;s.";
 choices[57][2] = "La relaci&oacute;n entre la tasa de desempleo y el n&uacute;mero de vacantes sin cubrir respecto del total de empleos.";
 choices[57][3] = "Las relaciones entre los insumos capital (K), trabajo (L) y tecnolog&iacute;a o productividad total de los factores (PTF)";
 answers[57] = 0;
 units[57] = ['15'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 425. Modelo econ&oacute;mico";
 preguntaids[57] = 425


//  Id pregunta: 1137 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; interfaces define M&eacute;trica v3?";
 choices[58]= new Array();
 choices[58][0] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n del Mantenimiento y Gesti&oacute;n de Proyectos.";
 choices[58][1] = "Aseguramiento de la Calidad, Gesti&oacute;n del Capital Humano, Seguridad y Gesti&oacute;n de Proyectos.";
 choices[58][2] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 choices[58][3] = "Seguridad, Mejora Continua, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 answers[58] = 2;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 1137. ";
 preguntaids[58] = 1137


//  Id pregunta: 990 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo al articulo 55 de la ley 40/2015, tienen la condici&oacute;n de alto cargo los siguientes organos de la organizacion central de la Administracion general del Estado:";
 choices[59]= new Array();
 choices[59][0] = "los &oacute;rganos superiores";
 choices[59][1] = "los &oacute;rganos superiores y directivos";
 choices[59][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[59][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[59] = 2;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 990. Ley 40/2015";
 preguntaids[59] = 990


//  Id pregunta: 5849 Año de creación de pregunta: 2007
 questions[60]= "61)  Los registros glue de una zona DNS son aquellos que:";
 choices[60]= new Array();
 choices[60][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[60][1] = "Son los registros que mantienen el espacio de nombres de la zona.";
 choices[60][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[60][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[60] = 1;
 units[60] = ['103'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5849. Examen 2006 JCYL";
 preguntaids[60] = 5849


//  Id pregunta: 2978 Año de creación de pregunta: 2002
 questions[61]= "62)  Los mecanismos de inferencia usados en los sistemas expertos incluyen:";
 choices[61]= new Array();
 choices[61][0] = "La reducci&oacute;n con encadenamiento (chaining), herencia, inducci&oacute;n y abducci&oacute;n";
 choices[61][1] = "Redes sem&aacute;nticas, planificadores (skeletal planners), pizarras (blackboards) y reglas de producci&oacute;n";
 choices[61][2] = "Aserciones y &aacute;rboles de decisi&oacute;n";
 choices[61][3] = "Shells, correspondencia heur&iacute;stica y conjuntos borrosos (fuzzy)";
 answers[61] = 3;
 units[61] = ['68'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2978. ";
 preguntaids[61] = 2978


//  Id pregunta: 3885 Año de creación de pregunta: 2002
 questions[62]= "63)  Al nivel b&aacute;sico de comprensi&oacute;n que determina la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Nivel fonol&oacute;gico";
 choices[62][1] = "Nivel l&eacute;xico-sint&aacute;ctico";
 choices[62][2] = "Nivel pros&oacute;dico";
 choices[62][3] = "Nivel sem&aacute;ntico-pragm&aacute;tico";
 answers[62] = 3;
 units[62] = ['81'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3885. ";
 preguntaids[62] = 3885


//  Id pregunta: 6660 Año de creación de pregunta: 2009
 questions[63]= "64)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[63]= new Array();
 choices[63][0] = "HINFO &quot;Host Information&quot;";
 choices[63][1] = "SOA &quot; Start Of Authority&quot;";
 choices[63][2] = "TTL &quot;Time-To- Live&quot;";
 choices[63][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[63] = 2;
 units[63] = ['116'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6660. MAP 2008 A1";
 preguntaids[63] = 6660


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[64]= "65)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[64]= new Array();
 choices[64][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[64][1] = "Ninguna de las respuestas es correcta.";
 choices[64][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[64][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[64] = 0;
 units[64] = ['5'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 154. Uni&oacute;n Europea";
 preguntaids[64] = 154


//  Id pregunta: 7118 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[65]= new Array();
 choices[65][0] = "No";
 choices[65][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[65][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[65][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[65] = 2;
 units[65] = ['7'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 7118. Art&iacute;culo 3.3 RD 1671/2009";
 preguntaids[65] = 7118


//  Id pregunta: 4703 Año de creación de pregunta: 2002
 questions[66]= "67)  El PLCP se incorpora como subnivel de:";
 choices[66]= new Array();
 choices[66][0] = "Nivel 2 de 802.11";
 choices[66][1] = "Nivel 1 de 802.11";
 choices[66][2] = "Nivel 1 de 802.3";
 choices[66][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[66] = 1;
 units[66] = ['108'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4703. ";
 preguntaids[66] = 4703


//  Id pregunta: 3243 Año de creación de pregunta: 2004
 questions[67]= "68)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[67]= new Array();
 choices[67][0] = "Es utilizado para firmar digitalmente";
 choices[67][1] = "Fue propuesto por Diffie y Hellman";
 choices[67][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[67][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[67] = 1;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3243. ";
 preguntaids[67] = 3243


//  Id pregunta: 9320 Año de creación de pregunta: 2014
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[68]= new Array();
 choices[68][0] = "Ley 11/2007";
 choices[68][1] = "Real Decreto 1619/2012";
 choices[68][2] = "Ley 25/2013";
 choices[68][3] = "Real Decreto Legislativo 3/2011";
 answers[68] = 0;
 units[68] = ['10'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 9320. ";
 preguntaids[68] = 9320


//  Id pregunta: 6405 Año de creación de pregunta: 2003
 questions[69]= "70)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[69]= new Array();
 choices[69][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[69][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[69][2] = "Es la especificacion del framework .NET";
 choices[69][3] = "Todas son falsas";
 answers[69] = 1;
 units[69] = ['63'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6405. ";
 preguntaids[69] = 6405


//  Id pregunta: 879 Año de creación de pregunta: 2016
 questions[70]= "71)  La velocidad de transmisi&oacute;n del cable de pares trenzados CAT6 empleado en el cableado de redes locales, es de:";
 choices[70]= new Array();
 choices[70][0] = "Hasta 56 Mbps.";
 choices[70][1] = "Hasta 100 Mbps.";
 choices[70][2] = "Hasta 1,2 Gbps.";
 choices[70][3] = "Hasta 10 Gbps.";
 answers[70] = 2;
 units[70] = ['104'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 879. AGE A2 2015";
 preguntaids[70] = 879


//  Id pregunta: 3543 Año de creación de pregunta: 2004
 questions[71]= "72)  Son interfaces de Metrica v.3:";
 choices[71]= new Array();
 choices[71][0] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Perfiles, Aseguramiento de la Calidad";
 choices[71][1] = "Gesti&oacute;n de Perfiles, Gesti&oacute;n de Proyectos, Seguridad, Gesti&oacute;n de Configuraci&oacute;n";
 choices[71][2] = "Gesti&oacute;n de Proyectos, Seguridad, Aseguramiento de la Calidad";
 choices[71][3] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Configuraci&oacute;n, Seguridad, Aseguramiento de la Calidad";
 answers[71] = 2;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3543. Similar a examen TIC MAP A 2004. JMRP: La pregunta es correcta. La opci&oacute;n correcta no menciona todos los interfaces de M&eacute;trica3 pero eso no hace que sea incorrecta";
 preguntaids[71] = 3543


//  Id pregunta: 2539 Año de creación de pregunta: 2004
 questions[72]= "73)  Con respecto a la seguridad:";
 choices[72]= new Array();
 choices[72][0] = "PGP basa su modelo en la existencia de una entidad de certificacion";
 choices[72][1] = "Si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[72][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = 3;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2539. ";
 preguntaids[72] = 2539


//  Id pregunta: 1015 Año de creación de pregunta: 2016
 questions[73]= "74)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[73]= new Array();
 choices[73][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[73][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[73][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[73][3] = "ninguna es correcta";
 answers[73] = 2;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 1015. Ley 40/2015";
 preguntaids[73] = 1015


//  Id pregunta: 4882 Año de creación de pregunta: 2002
 questions[74]= "75)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[74]= new Array();
 choices[74][0] = "100 metros";
 choices[74][1] = "185 metros";
 choices[74][2] = "200 metros";
 choices[74][3] = "500 metros";
 answers[74] = 0;
 units[74] = ['104'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4882. ";
 preguntaids[74] = 4882


