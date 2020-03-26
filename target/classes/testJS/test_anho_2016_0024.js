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
//  Id pregunta: 1780 Año de creación de pregunta: 2016
 questions[0]= "1)  En el &aacute;mbito de ITIL, el Control es una de las actividades de la Gesti&oacute;n de la Configuraci&oacute;n. &iquest;De qu&eacute; se trata esta actividad?";
 choices[0]= new Array();
 choices[0][0] = "La actualizaci&oacute;n de los cambios de Elementos de Configuraci&oacute;n y sus relaciones en la Base de Datos de Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[0][1] = "Comprobar si los Elementos de Configuraci&oacute;n y sus atributos se reflejan correctamente en la Base de Datos de Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[0][2] = "Implantar nuevos Elementos de Configuraci&oacute;n en el entorno de explotaci&oacute;n.";
 choices[0][3] = "Hacer inventario de los Elementos de Configuraci&oacute;n.";
 answers[0] = 0;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 1780. ";
 preguntaids[0] = 1780


//  Id pregunta: 1748 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale a qu&eacute; se denomina Single sign-on (SSO):";
 choices[1]= new Array();
 choices[1][0] = "Es un protocolo de cifrado para autenticar al usuario.";
 choices[1][1] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[1][2] = "Esta asociado al cifrado basado en Secure Socket Layers (SSL).";
 choices[1][3] = "Permite a trav&eacute;s del protocolo de red HTTPS identificar a los usuarios en el acceso a servicios Web.";
 answers[1] = 1;
 units[1] = ['123'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 1748. ";
 preguntaids[1] = 1748


//  Id pregunta: 1776 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique cu&aacute;l de las siguientes es una raz&oacute;n com&uacute;n por la que los proyectos se exceden en presupuesto o en fechas:";
 choices[2]= new Array();
 choices[2][0] = "Coste de los especialistas de Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[2][1] = "Indisponibilidad de la &uacute;ltima tecnolog&iacute;a.";
 choices[2][2] = "Subestimaci&oacute;n del esfuerzo requerido.";
 choices[2][3] = "Falta de automatizaci&oacute;n de las herramientas de desarrollo.";
 answers[2] = 2;
 units[2] = ['31'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 1776. ";
 preguntaids[2] = 1776


//  Id pregunta: 1735 Año de creación de pregunta: 2016
 questions[3]= "4)  RedHat Enterprise Linux 4 utiliza CRON para la programaci&oacute;n de la ejecuci&oacute;n de tareas. En ese entorno seleccione la opci&oacute;n correcta:";
 choices[3]= new Array();
 choices[3][0] = "Si se ha programado la siguiente tarea &quot;10 4 1 * * /root/scripts/backup.sh&quot;, los asteriscos se han utilizado para especificar &quot;todos los valores v&aacute;lidos&quot; para ese campo.";
 choices[3][1] = "Para que funcione la ejecuci&oacute;n de tareas peri&oacute;dicas programadas, el servicio crontab debe estar ejecut&aacute;ndose en el sistema.";
 choices[3][2] = "La ejecuci&oacute;n de tareas puede especificarse con una precisi&oacute;n de segundos.";
 choices[3][3] = "Cuando se programa la ejecuci&oacute;n de una nueva tarea es necesario reiniciar el servicio para que se tenga en cuenta esta nueva tarea.";
 answers[3] = 0;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1735. ";
 preguntaids[3] = 1735


//  Id pregunta: 1786 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n el art. 98 del Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, &iquest;cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador?";
 choices[4]= new Array();
 choices[4][0] = "60 a&ntilde;os";
 choices[4][1] = "50 a&ntilde;os";
 choices[4][2] = "80 a&ntilde;os";
 choices[4][3] = "Ninguna es correcta";
 answers[4] = 0;
 units[4] = ['41'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 1786. ";
 preguntaids[4] = 1786


//  Id pregunta: 1766 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique cu&aacute;l de las siguientes capas NO se corresponde con las definidas en el protocolo WAP:";
 choices[5]= new Array();
 choices[5][0] = "De aplicaci&oacute;n, WAE";
 choices[5][1] = "De presentaci&oacute;n, WPP";
 choices[5][2] = "De seguridad, WTSL";
 choices[5][3] = "De transporte, WDP";
 answers[5] = 1;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1766. ";
 preguntaids[5] = 1766


//  Id pregunta: 1779 Año de creación de pregunta: 2016
 questions[6]= "7)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;l es otro t&eacute;rmino para el concepto tiempo de disponibilidad (Uptime)?";
 choices[6]= new Array();
 choices[6][0] = "Tiempo Medio entre Fallos (MTBF)";
 choices[6][1] = "Tiempo Medio de Reparaci&oacute;n (MTTR)";
 choices[6][2] = "Tiempo Medio entre Incidentes del Sistema (MTBSI)";
 choices[6][3] = "Relaci&oacute;n entre MTBF y MTBSI";
 answers[6] = 0;
 units[6] = ['101'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1779. ";
 preguntaids[6] = 1779


//  Id pregunta: 1772 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l es el sistema de compresi&oacute;n de se&ntilde;al utilizado para la distribuci&oacute;n de televisi&oacute;n digital terrestre (TDT):";
 choices[7]= new Array();
 choices[7][0] = "MPEG-3 y MPEG-4 combinados, en funci&oacute;n del formato de se&ntilde;al utilizado: 4:3 &oacute; 16:9";
 choices[7][1] = "MPEG-4";
 choices[7][2] = "MPEG-2";
 choices[7][3] = "MPEG-3";
 answers[7] = 2;
 units[7] = ['115'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1772. ";
 preguntaids[7] = 1772


//  Id pregunta: 1742 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO se corresponde con las especificaciones de ANSI para cables de Categor&iacute;a 6:";
 choices[8]= new Array();
 choices[8][0] = "Alcanza frecuencias de hasta 500 MHz en cada par.";
 choices[8][1] = "Se emplea para Gigabit Ethernet.";
 choices[8][2] = "Caracterizan los cables de pares trenzados.";
 choices[8][3] = "Se define en la especificaci&oacute;n ANSI/TIA/EIA-568-B2-1";
 answers[8] = 0;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1742. ";
 preguntaids[8] = 1742


//  Id pregunta: 1792 Año de creación de pregunta: 2016
 questions[9]= "10)  Un ejemplo de servicio de interoperabilidad es el Servicio de Verificaci&oacute;n de Identidad. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[9]= new Array();
 choices[9][0] = "Permite la verificaci&oacute;n de los datos de identidad de un ciudadano sin que &eacute;ste presente la fotocopia del documento de identidad para aportar al expediente.";
 choices[9][1] = "Se puede utilizar siempre que el ciudadano preste su consentimiento para ello.";
 choices[9][2] = "Es una informaci&oacute;n facilitada por la Direcci&oacute;n General de la Polic&iacute;a a trav&eacute;s de la Plataforma de intermediaci&oacute;n de la Administraci&oacute;n General del Estado.";
 choices[9][3] = "Se puede utilizar en cualquier momento de la tramitaci&oacute;n de un expediente administrativo, y por ser utilizado por una administraci&oacute;n p&uacute;blica no requiere consentimiento expreso del ciudadano.";
 answers[9] = 3;
 units[9] = ['43'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 1792. ";
 preguntaids[9] = 1792


//  Id pregunta: 1790 Año de creación de pregunta: 2016
 questions[10]= "11)  La norma SICRES 3.0 recoge:";
 choices[10]= new Array();
 choices[10][0] = "El modelo de Datos para el intercambio de asientos y entre las Entidades Registrales con independencia del Sistema de Registro origen o destino, y de la tecnolog&iacute;a de intercambio.";
 choices[10][1] = "El formato est&aacute;ndar para el intercambio de informaci&oacute;n del inventario de informaci&oacute;n administrativa que debe mantener cada administraci&oacute;n p&uacute;blica.";
 choices[10][2] = "El formato est&aacute;ndar para el dise&ntilde;o de los servicios de interoperabilidad, para el intercambio de datos y documentos.";
 choices[10][3] = "El formato est&aacute;ndar para el intercambio de documentos electr&oacute;nicos.";
 answers[10] = 0;
 units[10] = ['44'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 1790. ";
 preguntaids[10] = 1790


//  Id pregunta: 1799 Año de creación de pregunta: 2016
 questions[11]= "12)  Refiri&eacute;ndonos al concepto de claves for&aacute;neas en un modelo relacional, indique cu&aacute;l de las siguientes opciones NO es correcta:";
 choices[11]= new Array();
 choices[11][0] = "La clave for&aacute;nea puede hacer referencia a la clave primaria de la misma tabla.";
 choices[11][1] = "La clave for&aacute;nea puede tener valores nulos.";
 choices[11][2] = "La clave for&aacute;nea puede tener valores duplicados.";
 choices[11][3] = "La clave for&aacute;nea puede estar formada por una parte de la clave primaria a la que hace referencia.";
 answers[11] = 3;
 units[11] = ['61'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1799. ";
 preguntaids[11] = 1799


//  Id pregunta: 1731 Año de creación de pregunta: 2016
 questions[12]= "13)  La planificaci&oacute;n de las copias de seguridad vendr&aacute; derivada de un estudio previo de an&aacute;lisis y gesti&oacute;n de riesgos basado en una metodolog&iacute;a. Indicar la metodolog&iacute;a elaborada por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica que se deber&iacute;a emplear para este estudio:";
 choices[12]= new Array();
 choices[12][0] = "SOROLLA";
 choices[12][1] = "MAGERIT";
 choices[12][2] = "NEDAES";
 choices[12][3] = "BADARAL";
 answers[12] = 1;
 units[12] = ['45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 1731. ";
 preguntaids[12] = 1731


//  Id pregunta: 1734 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta respecto del formato de disco &oacute;ptico Blu-ray:";
 choices[13]= new Array();
 choices[13][0] = "Se accede a trav&eacute;s de un l&aacute;ser de color rojo de 650 nan&oacute;metros.";
 choices[13][1] = "Dispone en su superficie de una capa de policarbonato de 0,6 mil&iacute;metros.";
 choices[13][2] = "Presenta menor resistencia a ralladuras y tolera peor la suciedad que el formato DVD.";
 choices[13][3] = "Soporta los formatos de compresi&oacute;n MPEG-2 y MPEG-4.";
 answers[13] = 3;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1734. ";
 preguntaids[13] = 1734


//  Id pregunta: 1783 Año de creación de pregunta: 2016
 questions[14]= "15)  En el contexto del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, indique cu&aacute;l es el t&eacute;rmino para definir aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Interoperabilidad Organizativa.";
 choices[14][1] = "Interoperabilidad Sem&aacute;ntica.";
 choices[14][2] = "Interoperabilidad T&eacute;cnica.";
 choices[14][3] = "Interoperabilidad en el Tiempo.";
 answers[14] = 1;
 units[14] = ['43'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 1783. ";
 preguntaids[14] = 1783


//  Id pregunta: 1774 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n el art. 149.3 de la Constituci&oacute;n Espa&ntilde;ola, el derecho estatal ser&aacute; supletorio del derecho de las Comunidades Aut&oacute;nomas:";
 choices[15]= new Array();
 choices[15][0] = "En lo no asumido por &eacute;stas.";
 choices[15][1] = "En todo caso.";
 choices[15][2] = "En lo no atribuido a &eacute;stas de modo expreso.";
 choices[15][3] = "Seg&uacute;n lo dispongan sus respectivos Estatutos.";
 answers[15] = 1;
 units[15] = ['3'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 1774. ";
 preguntaids[15] = 1774


//  Id pregunta: 1733 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique cu&aacute;l de las siguientes es una herramienta de software libre para la monitorizaci&oacute;n de servidores y sus servicios.";
 choices[16]= new Array();
 choices[16][0] = "Nagios";
 choices[16][1] = "Open-view";
 choices[16][2] = "awstats";
 choices[16][3] = "amberpoint";
 answers[16] = 0;
 units[16] = ['66'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1733. ";
 preguntaids[16] = 1733


//  Id pregunta: 1778 Año de creación de pregunta: 2016
 questions[17]= "18)  La familia de normas ISO9000 establece los requisitos gen&eacute;ricos para la implantaci&oacute;n de sistemas de gesti&oacute;n de la calidad, aplicables en organizaciones de cualquier tipo. Dentro de esta familia, la norma ISO9004 contiene:";
 choices[17]= new Array();
 choices[17][0] = "Principios b&aacute;sicos que debe cumplir el sistema de gesti&oacute;n de la calidad y cu&aacute;l es la terminolog&iacute;a que utiliza.";
 choices[17][1] = "Requisitos para un sistema de gesti&oacute;n de la calidad orientado hacia la satisfacci&oacute;n de los clientes.";
 choices[17][2] = "Recomendaciones sobre la aplicaci&oacute;n de la calidad incluyendo los procesos de mejora continua.";
 choices[17][3] = "Gu&iacute;a para realizar las auditor&iacute;as de calidad.";
 answers[17] = 2;
 units[17] = ['98'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 1778. ";
 preguntaids[17] = 1778


//  Id pregunta: 1762 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale qui&eacute;n gestiona la ra&iacute;z del DNS:";
 choices[18]= new Array();
 choices[18][0] = "IANA";
 choices[18][1] = "ESNIC";
 choices[18][2] = "INIC";
 choices[18][3] = "ITU";
 answers[18] = 0;
 units[18] = ['103'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1762. ";
 preguntaids[18] = 1762


//  Id pregunta: 1756 Año de creación de pregunta: 2016
 questions[19]= "20)  Un uso muy ineficaz de la capacidad de conexi&oacute;n y un retardo m&iacute;nimo son caracter&iacute;sticas t&iacute;picas de:";
 choices[19]= new Array();
 choices[19][0] = "Conmutaci&oacute;n de circuitos.";
 choices[19][1] = "Conmutaci&oacute;n de paquetes.";
 choices[19][2] = "Conmutaci&oacute;n de mensajes.";
 choices[19][3] = "Conmutaci&oacute;n de tiempo.";
 answers[19] = 0;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 1756. ";
 preguntaids[19] = 1756


//  Id pregunta: 1728 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del software libre:";
 choices[20]= new Array();
 choices[20][0] = "Puede ser modificado.";
 choices[20][1] = "Se tiene acceso al c&oacute;digo fuente.";
 choices[20][2] = "Es gratuito.";
 choices[20][3] = "Puede ser redistribuido.";
 answers[20] = 2;
 units[20] = ['66'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1728. ";
 preguntaids[20] = 1728


//  Id pregunta: 1767 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale qu&eacute; ley o leyes recomienda la ITU-T en su recomendaci&oacute;n G.711 para codificaci&oacute;n de frecuencias de se&ntilde;ales vocales:";
 choices[21]= new Array();
 choices[21][0] = "Ley A y Ley &quot;Mu&quot;.";
 choices[21][1] = "Ley A y Ley &quot;Gamma&quot;.";
 choices[21][2] = "Ley &quot;Mu&quot; y Ley &quot;Gamma&quot;";
 choices[21][3] = "Ley &quot;Gamma&quot;.";
 answers[21] = 0;
 units[21] = ['110'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1767. ";
 preguntaids[21] = 1767


//  Id pregunta: 1775 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[22]= new Array();
 choices[22][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[22][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[22][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[22][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[22] = 1;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 1775. ";
 preguntaids[22] = 1775


//  Id pregunta: 1754 Año de creación de pregunta: 2016
 questions[23]= "24)  Indicar la respuesta err&oacute;nea en relaci&oacute;n al concepto de Benchmark:";
 choices[23]= new Array();
 choices[23][0] = "La tarea de ejecutar un Benchmark originalmente se reduc&iacute;a a estimar el tiempo de proceso que lleva la ejecuci&oacute;n de un programa (medida por lo general en miles o millones de operaciones por segundo).";
 choices[23][1] = "Es una metodolog&iacute;a bastante frecuente para comparar diferentes sistemas inform&aacute;ticos frente a una carga caracter&iacute;stica de una instalaci&oacute;n concreta que permite realizar mediciones en el ambiente real.";
 choices[23][2] = "Esta metodolog&iacute;a se basa en la utilizaci&oacute;n de programas para simular la realidad. Al igual que la teor&iacute;a de colas es aplicable a fen&oacute;menos de espera y requiere que est&eacute;n establecidos los niveles de servicio, de igual forma necesita una proyecci&oacute;n del comportamiento del sistema.";
 choices[23][3] = "Las principales dificultades que se plantean en relaci&oacute;n con el Benchmark radica en determinar la carga caracter&iacute;stica y en valorar el aprovechamiento que hacen los programas de las peculiaridades de los distintos software utilizados.";
 answers[23] = 2;
 units[23] = ['39'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1754. ";
 preguntaids[23] = 1754


//  Id pregunta: 1745 Año de creación de pregunta: 2016
 questions[24]= "25)  El standard Ethernet IEEE 802.3 est&aacute; basado en una t&eacute;cnica de Acceso al Medio por Detecci&oacute;n de Portadora (CSMA-Carrier Sense Multiple Access), se&ntilde;ale cu&aacute;l es:";
 choices[24]= new Array();
 choices[24][0] = "CSMA/CA";
 choices[24][1] = "CSMA/CD";
 choices[24][2] = "CSMA/CR";
 choices[24][3] = "CSMA/CP";
 answers[24] = 1;
 units[24] = ['112'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 1745. ";
 preguntaids[24] = 1745


//  Id pregunta: 1759 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de los siguientes NO es, actualmente, un tama&ntilde;o de clave v&aacute;lido para el algoritmo de cifrado AES:";
 choices[25]= new Array();
 choices[25][0] = "128 bits";
 choices[25][1] = "192 bits";
 choices[25][2] = "256 bits";
 choices[25][3] = "512 bits";
 answers[25] = 3;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1759. ";
 preguntaids[25] = 1759


//  Id pregunta: 1752 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n correcta. La cabecera de IPv6 es:";
 choices[26]= new Array();
 choices[26][0] = "Menor que la de IPv4.";
 choices[26][1] = "Mayor que la de IPv4.";
 choices[26][2] = "Igual que la de IPv4.";
 choices[26][3] = "No hay cabecera propiamente dicha.";
 answers[26] = 1;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1752. ";
 preguntaids[26] = 1752


//  Id pregunta: 1741 Año de creación de pregunta: 2016
 questions[27]= "28)  En relaci&oacute;n con las definiciones de RAID (Redundant Array of Inexpensive Disks), indique la respuesta err&oacute;nea:";
 choices[27]= new Array();
 choices[27][0] = "Un RAID 6 es similar a RAID 5, salvo que calcula dos bloques de paridad independientes por cada escritura, mandando cada uno de los bloques de paridad a un disco diferente.";
 choices[27][1] = "Un RAID 4 Consiste en &ldquo;stripping&rdquo; a nivel de bloque, como RAID o m&aacute;s un disco de paridad dedicado. Cada bloque escrito es dividido en partes, se obtiene un bloque de paridad que permite recomponer el bloque inicial en caso de p&eacute;rdida de alguna de las partes.";
 choices[27][2] = "Un RAID 2 divide los bits a nivel de bloque. Por cada &ldquo;palabra&rdquo; enviada a escritura calcula un c&oacute;digo de Hamming que permite recuperar la informaci&oacute;n en caso de fallo de un disco y env&iacute;a posteriormente cada bloque a su disco correspondiente para mantener la paridad.";
 choices[27][3] = "Un RAID 5 Este nivel de RAID es similar a RAID 4, salvo que no utiliza un disco de paridad dedicado, sino que distribuye los bloques de paridad por todos los discos del array.";
 answers[27] = 2;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1741. ";
 preguntaids[27] = 1741


//  Id pregunta: 1751 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l es el puerto por defecto de SMTP:";
 choices[28]= new Array();
 choices[28][0] = "21";
 choices[28][1] = "23";
 choices[28][2] = "25";
 choices[28][3] = "80";
 answers[28] = 2;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1751. ";
 preguntaids[28] = 1751


//  Id pregunta: 1770 Año de creación de pregunta: 2016
 questions[29]= "30)  En la tecnolog&iacute;a GSM, qu&eacute; canal de se&ntilde;alizaci&oacute;n utiliza la estaci&oacute;n base para avisar al terminal m&oacute;vil de una nueva llamada entrante";
 choices[29]= new Array();
 choices[29][0] = "Stand-Alone Dedicated Control Channel, SDCCH";
 choices[29][1] = "Random Access Channel, RACH";
 choices[29][2] = "Broadcast Control Channel, BCCH";
 choices[29][3] = "Paging channel (PCH)";
 answers[29] = 3;
 units[29] = ['117'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1770. ";
 preguntaids[29] = 1770


//  Id pregunta: 1777 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la gesti&oacute;n de riesgos?";
 choices[30]= new Array();
 choices[30][0] = "Aumentar el presupuesto de seguridad de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[30][1] = "Transparencia hacia la empresa de los riesgos significativos";
 choices[30][2] = "Conocimiento de las &uacute;ltimas herramientas en materia de seguridad";
 choices[30][3] = "Conducir un an&aacute;lisis de riesgo detallado";
 answers[30] = 1;
 units[30] = ['45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 1777. ";
 preguntaids[30] = 1777


//  Id pregunta: 1794 Año de creación de pregunta: 2016
 questions[31]= "32)  El proyecto STORK es un:";
 choices[31]= new Array();
 choices[31][0] = "Proyecto para conseguir el reconocimiento paneuropeo de las identidades electr&oacute;nicas y, en concreto, la aceptaci&oacute;n del DNI electr&oacute;nico e identificadores similares en Servicios de Administraci&oacute;n Electr&oacute;nica de otras administraciones europeas.";
 choices[31][1] = "Proyecto para conseguir la interoperabilidad del documento de identificaci&oacute;n nacional entre los estados de la Uni&oacute;n Europea.";
 choices[31][2] = "Proyecto para conseguir la interconexi&oacute;n de las redes administrativas europeas.";
 choices[31][3] = "Proyecto para conseguir el reconocimiento paneuropeo de la definici&oacute;n y metadatos requeridos del documento electr&oacute;nico, con el fin &uacute;ltimo de la interconexi&oacute;n de registros administrativos.";
 answers[31] = 0;
 units[31] = ['77'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1794. ";
 preguntaids[31] = 1794


//  Id pregunta: 1785 Año de creación de pregunta: 2016
 questions[32]= "33)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, otorga la equivalencia funcional con la firma manuscrita respecto de los datos consignados en forma electr&oacute;nica a:";
 choices[32]= new Array();
 choices[32][0] = "La firma electr&oacute;nica general.";
 choices[32][1] = "La firma electr&oacute;nica avanzada.";
 choices[32][2] = "La firma electr&oacute;nica reconocida";
 choices[32][3] = "La firma electr&oacute;nica autenticada.";
 answers[32] = 2;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1785. ";
 preguntaids[32] = 1785


//  Id pregunta: 1796 Año de creación de pregunta: 2016
 questions[33]= "34)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:";
 choices[33]= new Array();
 choices[33][0] = "Sede Electr&oacute;nica";
 choices[33][1] = "Empleado P&uacute;blico";
 choices[33][2] = "De Componente";
 choices[33][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[33] = 3;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 1796. ";
 preguntaids[33] = 1796


//  Id pregunta: 1740 Año de creación de pregunta: 2016
 questions[34]= "35)  Se cuenta con 4 discos f&iacute;sicos que se desea configurar como una &uacute;nica unidad, por ejemplo /root. Se desea maximizar la capacidad &uacute;til de almacenamiento proporcionando alg&uacute;n mecanismo de redundancia ante fallos. Por favor, elija entre las siguientes la mejor opci&oacute;n a utilizar:";
 choices[34]= new Array();
 choices[34][0] = "RAID 0";
 choices[34][1] = "RAID 1";
 choices[34][2] = "RAID 0+1";
 choices[34][3] = "RAID 5";
 answers[34] = 3;
 units[34] = ['53'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1740. ";
 preguntaids[34] = 1740


//  Id pregunta: 1726 Año de creación de pregunta: 2016
 questions[35]= "36)  Desde el punto de vista de la administraci&oacute;n, &iquest;cu&aacute;l es la opci&oacute;n adecuada para la distribuci&oacute;n de particiones del Sistema Operativo de servidor?";
 choices[35]= new Array();
 choices[35][0] = "Una partici&oacute;n para rutinas y programas del sistema operativo y para el log; otra partici&oacute;n de dump; y otra para los datos de usuario.";
 choices[35][1] = "Una partici&oacute;n para rutinas y programas del sistema operativo, para el log, y de dump; y otra para los datos de usuario.";
 choices[35][2] = "Una partici&oacute;n para rutinas y programas del sistema operativo y de dump; y otra para el log y los datos de usuario.";
 choices[35][3] = "Una partici&oacute;n para rutinas y programas del sistema operativo; otra para el log; otra de dump; y otra para los datos de usuario.";
 answers[35] = 3;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1726. ";
 preguntaids[35] = 1726


//  Id pregunta: 1797 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique cu&aacute;l de las siguientes afirmaciones con respecto al sellado de tiempo es correcta:";
 choices[36]= new Array();
 choices[36][0] = "Es una firma electr&oacute;nica realizada por una TSA que nos permite demostrar que los datos suministrados han existido y no han sido alterados desde un instante espec&iacute;fico en el tiempo";
 choices[36][1] = "Es una firma electr&oacute;nica realizada por una TSA que nos permite demostrar que un documento electr&oacute;nico ha sido firmado en un momento en el tiempo concreto.";
 choices[36][2] = "Es una firma electr&oacute;nica realizada por una TSA que garantiza fehacientemente la fecha y hora de una sede electr&oacute;nica.";
 choices[36][3] = "Es una firma electr&oacute;nica sincronizada con el ROA que garantiza fehacientemente la fecha y hora de una sede electr&oacute;nica.";
 answers[36] = 0;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1797. ";
 preguntaids[36] = 1797


//  Id pregunta: 1765 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l es la recomendaci&oacute;n de la ITU, que regula el ADSL2+:";
 choices[37]= new Array();
 choices[37][0] = "ITU-T G.821.5";
 choices[37][1] = "ITU-T G.711";
 choices[37][2] = "ITU-T G.992.5";
 choices[37][3] = "ITU-T G.707";
 answers[37] = 2;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 1765. ";
 preguntaids[37] = 1765


//  Id pregunta: 1730 Año de creación de pregunta: 2016
 questions[38]= "39)  En un Sistema de Gesti&oacute;n de Base de Datos (SGBD) debe garantizarse la total satisfacci&oacute;n la CONSISTENCIA, es decir que:";
 choices[38]= new Array();
 choices[38][0] = "Varios accesos simult&aacute;neos a cada Base de Datos sin conflictos.";
 choices[38][1] = "En todo momento, los valores de los datos no presenten contradicciones.";
 choices[38][2] = "Los valores de los datos sean aut&eacute;nticos, conforme a las reglas sem&aacute;nticas establecidas por dise&ntilde;o.";
 choices[38][3] = "En caso de fallo (hardware, alimentaci&oacute;n, etc) la Base de Datos vuelva a un estado &iacute;ntegro anterior al fallo.";
 answers[38] = 1;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1730. ";
 preguntaids[38] = 1730


//  Id pregunta: 1736 Año de creación de pregunta: 2016
 questions[39]= "40)  El Lenguaje de Control de Trabajos (JCL), es un conjunto de especificaciones que constituyen un lenguaje de programaci&oacute;n de tareas para el sistema operativo que gobierna un equipo inform&aacute;tico, usado en Mainframes. Entre sus caracter&iacute;sticas indicar la respuesta err&oacute;nea:";
 choices[39]= new Array();
 choices[39][0] = "Las sentencias JCL comienzan con //";
 choices[39][1] = "A partir de la columna 52 se considera comentario";
 choices[39][2] = "La primera sentencia es JOB";
 choices[39][3] = "Todas las sentencias han de escribirse en MAY&Uacute;SCULAS";
 answers[39] = 1;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1736. ";
 preguntaids[39] = 1736


//  Id pregunta: 1761 Año de creación de pregunta: 2016
 questions[40]= "41)  Cu&aacute;l de las siguientes especificaciones de Internet y XML ha sido publicada en el seno del Consorcio OASIS:";
 choices[40]= new Array();
 choices[40][0] = "UBL (Universal Business Language)";
 choices[40][1] = "XHTML (eXtensible Hypertext Markup Language)";
 choices[40][2] = "OWL (Web Ontology Language)";
 choices[40][3] = "XPointer (XML Pointer Language)";
 answers[40] = 0;
 units[40] = ['74'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1761. ";
 preguntaids[40] = 1761


//  Id pregunta: 1758 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes algoritmos es de cifrado asim&eacute;trico:";
 choices[41]= new Array();
 choices[41][0] = "Cast5";
 choices[41][1] = "Twofish";
 choices[41][2] = "Idea";
 choices[41][3] = "ElGamal";
 answers[41] = 3;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1758. ";
 preguntaids[41] = 1758


//  Id pregunta: 1727 Año de creación de pregunta: 2016
 questions[42]= "43)  En RedHat Enterprise Linux si se est&aacute; en modo multiusuario completo y se est&aacute; utilizando una interfaz gr&aacute;fica de login (X-based login screen) se est&aacute; en:";
 choices[42]= new Array();
 choices[42][0] = "Nivel de ejecuci&oacute;n 1";
 choices[42][1] = "Nivel de ejecuci&oacute;n 3";
 choices[42][2] = "Nivel de ejecuci&oacute;n 5";
 choices[42][3] = "Nivel de ejecuci&oacute;n 6";
 answers[42] = 2;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1727. ";
 preguntaids[42] = 1727


//  Id pregunta: 1757 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale qu&eacute; longitud tiene la cabecera de MPLS (Multiprotocol Label Switching):";
 choices[43]= new Array();
 choices[43][0] = "20 bits.";
 choices[43][1] = "32 bits.";
 choices[43][2] = "53 Bytes.";
 choices[43][3] = "53 bits.";
 answers[43] = 1;
 units[43] = ['107'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1757. ";
 preguntaids[43] = 1757


//  Id pregunta: 1737 Año de creación de pregunta: 2016
 questions[44]= "45)  Indique cu&aacute;l de las siguientes NO es una herramienta que permita evaluar el rendimiento de aplicaciones web:";
 choices[44]= new Array();
 choices[44][0] = "awstats";
 choices[44][1] = "siege";
 choices[44][2] = "loadRunner";
 choices[44][3] = "Jmeter";
 answers[44] = 0;
 units[44] = ['87'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1737. ";
 preguntaids[44] = 1737


//  Id pregunta: 1793 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique cu&aacute;l de los siguientes servicios NO se ofrece por la plataforma @firma:";
 choices[45]= new Array();
 choices[45][0] = "Funcionalidades de verificaci&oacute;n.";
 choices[45][1] = "Funcionalidades de firma.";
 choices[45][2] = "Sellado de tiempo (TSA).";
 choices[45][3] = "Servicios de intermediaci&oacute;n de documentos.";
 answers[45] = 3;
 units[45] = ['47'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 1793. ";
 preguntaids[45] = 1793


//  Id pregunta: 1771 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de los siguientes est&aacute;ndares regula la tecnolog&iacute;a WiMAX.";
 choices[46]= new Array();
 choices[46][0] = "IEEE 802.3";
 choices[46][1] = "IEEE 802.11";
 choices[46][2] = "IEEE 802.15";
 choices[46][3] = "IEEE 802.16";
 answers[46] = 3;
 units[46] = ['106'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1771. ";
 preguntaids[46] = 1771


//  Id pregunta: 1760 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale c&oacute;mo se denomina el protocolo sucesor de SSL (Secure Sockets Layer), estandarizado por el IETF:";
 choices[47]= new Array();
 choices[47][0] = "TSL";
 choices[47][1] = "TLS";
 choices[47][2] = "IPSEC";
 choices[47][3] = "SECIP";
 answers[47] = 1;
 units[47] = ['120'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1760. ";
 preguntaids[47] = 1760


//  Id pregunta: 1747 Año de creación de pregunta: 2016
 questions[48]= "49)  Seleccione la respuesta correcta:";
 choices[48]= new Array();
 choices[48][0] = "RMON monitoriza el tr&aacute;fico de los routers de una red.";
 choices[48][1] = "SMON monitoriza el tr&aacute;fico de los routers de una red.";
 choices[48][2] = "El standard RMON se define en la RFC 2613";
 choices[48][3] = "SMON ofrece informaci&oacute;n sobre las redes locales virtuales VLAN";
 answers[48] = 0;
 units[48] = ['114'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1747. ";
 preguntaids[48] = 1747


//  Id pregunta: 1781 Año de creación de pregunta: 2016
 questions[49]= "50)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;les de los siguientes procesos incluye la necesidad de realizar una Evaluaci&oacute;n y Gesti&oacute;n de Riesgo? 1. Gesti&oacute;n de Continuidad de Servicios de TI 2. Gesti&oacute;n de Seguridad de la Informaci&oacute;n 3. Gesti&oacute;n del Nivel de Servicio";
 choices[49]= new Array();
 choices[49][0] = "Todos.";
 choices[49][1] = "S&oacute;lo 1 y 3.";
 choices[49][2] = "S&oacute;lo 2 y 3.";
 choices[49][3] = "S&oacute;lo 1 y 2.";
 answers[49] = 3;
 units[49] = ['101'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 1781. ";
 preguntaids[49] = 1781


//  Id pregunta: 1753 Año de creación de pregunta: 2016
 questions[50]= "51)  A la hora de crear un CPD, se&ntilde;ale qu&eacute; consideraci&oacute;n NO debe tener en cuenta:";
 choices[50]= new Array();
 choices[50][0] = "Todos los cables tendidos bajo el suelo de un CPD deber&iacute;an ser LSZH";
 choices[50][1] = "El CPD deber&iacute;a contar con dos acometidas el&eacute;ctricas independientes.";
 choices[50][2] = "El CPD no deber&iacute;a ubicarse sobre un aparcamiento o estacionamiento de coches.";
 choices[50][3] = "Dentro de un CPD, en el &aacute;rea de ordenadores, deber&iacute;a utilizarse para la extinci&oacute;n de incendios polvo seco.";
 answers[50] = 3;
 units[50] = ['50'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1753. ";
 preguntaids[50] = 1753


//  Id pregunta: 1749 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique cu&aacute;l de los siguientes conceptos se corresponde con una primitiva de servicio entre niveles del modelo OSI:";
 choices[51]= new Array();
 choices[51][0] = "RECEIVE";
 choices[51][1] = "INDICATION";
 choices[51][2] = "SEND";
 choices[51][3] = "ECHO";
 answers[51] = 1;
 units[51] = ['105'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1749. ";
 preguntaids[51] = 1749


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[52]= new Array();
 choices[52][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[52][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[52][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[52][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[52] = 2;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 1791. ";
 preguntaids[52] = 1791


//  Id pregunta: 1729 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale qu&eacute; m&oacute;dulo criptogr&aacute;fico debe tener instalado un ordenador para que el usuario pueda utilizar el DNI electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "No es necesario ning&uacute;n m&oacute;dulo criptogr&aacute;fico.";
 choices[53][1] = "Debe estar instalado &quot;Cryptographic Service Provider&quot; (CSP) o el m&oacute;dulo PKCS#11 indistintamente.";
 choices[53][2] = "En los entornos UNIX / Linux o MAC debe estar instalado el m&oacute;dulo PKCS#11.";
 choices[53][3] = "En un entorno Microsoft Windows debe estar instalado el m&oacute;dulo PKCS#11.";
 answers[53] = 2;
 units[53] = ['76'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1729. ";
 preguntaids[53] = 1729


//  Id pregunta: 1763 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale qu&eacute; puerto est&aacute;ndar est&aacute; asociado al protocolo HTTPS (HyperText Transfer Protocol):";
 choices[54]= new Array();
 choices[54][0] = "161";
 choices[54][1] = "115";
 choices[54][2] = "443";
 choices[54][3] = "22";
 answers[54] = 2;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1763. ";
 preguntaids[54] = 1763


//  Id pregunta: 1795 Año de creación de pregunta: 2016
 questions[55]= "56)  Los certificados electr&oacute;nicos reconocidos incorporados al DNI electr&oacute;nico tendr&aacute;n un per&iacute;odo de vigencia de:";
 choices[55]= new Array();
 choices[55][0] = "24 meses";
 choices[55][1] = "30 meses";
 choices[55][2] = "5 a&ntilde;os";
 choices[55][3] = "El per&iacute;odo de validez del documento nacional de identidad.";
 answers[55] = 2;
 units[55] = ['78'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1795. ";
 preguntaids[55] = 1795


//  Id pregunta: 1789 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Real Decreto 1720/2007 indique cu&aacute;l de las siguientes es una medida de seguridad de nivel medio:";
 choices[56]= new Array();
 choices[56][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 choices[56][1] = "La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[56][2] = "Deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan.";
 choices[56][3] = "Exclusivamente el personal autorizado en el documento de seguridad podr&aacute; tener acceso a los lugares donde se hallen instalados los equipos f&iacute;sicos que den soporte a los sistemas de informaci&oacute;n.";
 answers[56] = 3;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 1789. ";
 preguntaids[56] = 1789


//  Id pregunta: 1755 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique de los siguientes protocolos de encaminamiento cu&aacute;l se engloba dentro de la categor&iacute;a EGP (Exterior Gateway Protocols):";
 choices[57]= new Array();
 choices[57][0] = "IS-IS (Intermediate System to Intermediate System)";
 choices[57][1] = "OSPF (Open Shortest Path First)";
 choices[57][2] = "BGP (Border Gateway Protocol)";
 choices[57][3] = "RIP (Routing Information Protocol)";
 answers[57] = 2;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 1755. ";
 preguntaids[57] = 1755


//  Id pregunta: 1764 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes opciones ordena correctamente las siguientes tecnolog&iacute;as, de menor a mayor, en cuanto a ancho de banda m&aacute;ximo de bajada:";
 choices[58]= new Array();
 choices[58][0] = "RDSI, ADSL, HDSL, VDSL.";
 choices[58][1] = "HDSL, RDSI, ADSL, VDSL.";
 choices[58][2] = "RDSI, HDSL, ADSL, VDSL.";
 choices[58][3] = "RDSI, HDSL, VDSL, ADSL.";
 answers[58] = 2;
 units[58] = ['114'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1764. ";
 preguntaids[58] = 1764


//  Id pregunta: 1784 Año de creación de pregunta: 2016
 questions[59]= "60)  En el contexto del Real Decreto 3/2010, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, en las decisiones en materia de seguridad deber&aacute;n tenerse en cuenta una serie de principios b&aacute;sicos. Indique cu&aacute;les son los principios b&aacute;sicos contemplados en el Esquema Nacional de Seguridad (ENS):";
 choices[59]= new Array();
 choices[59][0] = "&ldquo;Seguridad integral&rdquo;, &ldquo;Gesti&oacute;n de riesgos&rdquo;, &ldquo;Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n&rdquo;, &ldquo;L&iacute;neas de defensa&rdquo;, &ldquo;Reevaluaci&oacute;n peri&oacute;dica&rdquo;, &ldquo;Funci&oacute;n diferenciada&rdquo;.";
 choices[59][1] = "&ldquo;An&aacute;lisis y gesti&oacute;n de los riesgos&rdquo;, &ldquo;Gesti&oacute;n de personal&rdquo;, &ldquo;Profesionalidad&rdquo;, &ldquo;Seguridad por defecto&rdquo;, &ldquo;Integridad y actualizaci&oacute;n del sistema&rdquo;, &ldquo;Continuidad de la Actividad&rdquo;.";
 choices[59][2] = "&ldquo;Mecanismos de control&rdquo;, &ldquo;Actualizaci&oacute;n permanente&rdquo;, &ldquo;Formaci&oacute;n&rdquo;, &ldquo;Ciclo de vida de servicios y sistemas&rdquo;, &ldquo;Auditor&iacute;as&rdquo;.";
 choices[59][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[59] = 0;
 units[59] = ['46'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 1784. ";
 preguntaids[59] = 1784


//  Id pregunta: 1768 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l de los siguientes no es un protocolo de VoIP:";
 choices[60]= new Array();
 choices[60][0] = "MGCP";
 choices[60][1] = "SIP";
 choices[60][2] = "H323";
 choices[60][3] = "TDM";
 answers[60] = 3;
 units[60] = ['122'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1768. ";
 preguntaids[60] = 1768


//  Id pregunta: 1750 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale qu&eacute; servicio NO es b&aacute;sico dentro de la arquitectura de comunicaciones TCP/IP:";
 choices[61]= new Array();
 choices[61][0] = "Transferencia de archivos.";
 choices[61][1] = "Terminal virtual.";
 choices[61][2] = "Correo.";
 choices[61][3] = "Acceso a archivos.";
 answers[61] = 3;
 units[61] = ['109'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1750. ";
 preguntaids[61] = 1750


//  Id pregunta: 1782 Año de creación de pregunta: 2016
 questions[62]= "63)  El art. 9 del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, se refiere al inventario de informaci&oacute;n administrativa, y establece que las administraciones p&uacute;blicas deber&aacute;n mantener en &eacute;l:";
 choices[62]= new Array();
 choices[62][0] = "Los procedimientos administrativos y servicios que prestan de forma clasificada y estructurados en familias, con indicaci&oacute;n del nivel de informatizaci&oacute;n de los mismos.";
 choices[62][1] = "La relaci&oacute;n actualizada de los &oacute;rganos de direcci&oacute;n de los organismos y entidades de la administraci&oacute;n p&uacute;blica.";
 choices[62][2] = "La relaci&oacute;n de los documentos o datos que puede facilitar a otras administraciones a trav&eacute;s de un nodo de interoperabilidad, indicando las condiciones de acceso y uso del mismo.";
 choices[62][3] = "La relaci&oacute;n de sedes electr&oacute;nicas que complementan la red de oficinas de registro y atenci&oacute;n al ciudadano.";
 answers[62] = 0;
 units[62] = ['43'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 1782. ";
 preguntaids[62] = 1782


//  Id pregunta: 1788 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art. 20 de la Ley org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, en las disposiciones de creaci&oacute;n o modificaci&oacute;n de los ficheros de las administraciones p&uacute;blicas NO es necesario que se recoja:";
 choices[63]= new Array();
 choices[63][0] = "La finalidad del fichero y los usos previstos para &eacute;l.";
 choices[63][1] = "El procedimiento de recogida de los datos de car&aacute;cter personal.";
 choices[63][2] = "Las cesiones de datos de car&aacute;cter personal y, en su caso, las transferencias de datos que se prevean a pa&iacute;ses terceros.";
 choices[63][3] = "El destino de los datos para el caso de supresi&oacute;n del fichero y las previsiones a adoptar para su destrucci&oacute;n.";
 answers[63] = 3;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 1788. ";
 preguntaids[63] = 1788


//  Id pregunta: 1725 Año de creación de pregunta: 2016
 questions[64]= "65)  Indicar el significado del comando &lsquo;ps&rsquo; de UNIX:";
 choices[64]= new Array();
 choices[64][0] = "Muestra los usuarios que actualmente est&aacute;n autenticados en el sistema.";
 choices[64][1] = "Muestra un listado con los archivos y directorios.";
 choices[64][2] = "Permite visualizar el estado de uno o varios procesos.";
 choices[64][3] = "Encontrar archivos en un determinado directorio a partir de diversas reglas de b&uacute;squeda.";
 answers[64] = 2;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1725. ";
 preguntaids[64] = 1725


//  Id pregunta: 1732 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos de gesti&oacute;n de redes est&aacute; basado en el modelo de referencia OSI de ISO:";
 choices[65]= new Array();
 choices[65][0] = "CMIP";
 choices[65][1] = "SNMP";
 choices[65][2] = "SGMP";
 choices[65][3] = "TL-1";
 answers[65] = 0;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1732. ";
 preguntaids[65] = 1732


//  Id pregunta: 1787 Año de creación de pregunta: 2016
 questions[66]= "67)  La Licencia P&uacute;blica General Reducida de GNU (LGPL) es una licencia de software que utiliza:";
 choices[66]= new Array();
 choices[66][0] = "Copyright.";
 choices[66][1] = "Copyleft d&eacute;bil.";
 choices[66][2] = "Copyleft fuerte.";
 choices[66][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[66] = 1;
 units[66] = ['66'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1787. ";
 preguntaids[66] = 1787


//  Id pregunta: 1746 Año de creación de pregunta: 2016
 questions[67]= "68)  El est&aacute;ndar IEEE 802.3ae define una versi&oacute;n de Ethernet con una velocidad nominal de:";
 choices[67]= new Array();
 choices[67][0] = "1 Gbit/s.";
 choices[67][1] = "100 Mbit/s.";
 choices[67][2] = "10 Gbit/s.";
 choices[67][3] = "1 Tbit/s.";
 answers[67] = 2;
 units[67] = ['112'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1746. ";
 preguntaids[67] = 1746


//  Id pregunta: 1798 Año de creación de pregunta: 2016
 questions[68]= "69)  En un modelo relacional existen restricciones inherentes (propias del modelo) y restricciones sem&aacute;nticas (de usuario). Indique cu&aacute;l de las siguientes opciones NO es una restricci&oacute;n sem&aacute;ntica:";
 choices[68]= new Array();
 choices[68][0] = "Unicidad de valor en un atributo";
 choices[68][1] = "Obligatoriedad de que un atributo no admita nulos";
 choices[68][2] = "Integridad referencial";
 choices[68][3] = "Obligatoriedad de existencia de clave primaria.";
 answers[68] = 3;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1798. ";
 preguntaids[68] = 1798


//  Id pregunta: 1738 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre las siguientes definiciones, en relaci&oacute;n con los par&aacute;metros de rendimiento, indique la respuesta err&oacute;nea:";
 choices[69]= new Array();
 choices[69][0] = "Throghput: Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado.";
 choices[69][1] = "Solapamiento: Porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente.";
 choices[69][2] = "Overhead: Porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados por tareas del sistema.";
 choices[69][3] = "Frecuencia de paginaci&oacute;n: N&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio.";
 answers[69] = 3;
 units[69] = ['39'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 1738. ";
 preguntaids[69] = 1738


//  Id pregunta: 1773 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el art. 9.2 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[70]= new Array();
 choices[70][0] = "Corresponde a la Administraci&oacute;n General del Estado promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[70][1] = "Corresponde al gobierno central promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[70][2] = "Corresponde a los poderes p&uacute;blicos promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[70][3] = "Corresponde las Cortes Generales promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 answers[70] = 2;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 1773. ";
 preguntaids[70] = 1773


//  Id pregunta: 1743 Año de creación de pregunta: 2016
 questions[71]= "72)  En la resoluci&oacute;n del 22 de noviembre de 2005, de la Secretaria de Estado de Telecomunicaci&oacute;n y para la Sociedad de la Informaci&oacute;n, se publicaron los requisitos t&eacute;cnicos de la interfaz reglamentaria Ir-14 relativa a los sistemas de acceso inal&aacute;mbrico fijo (LMDS/FWA) para Espa&ntilde;a. Se&ntilde;ale qu&eacute; banda de frecuencias son las asignadas:";
 choices[71]= new Array();
 choices[71][0] = "2,4 a 2,6 Ghz.";
 choices[71][1] = "202,5 a 226,6 Ghz.";
 choices[71][2] = "24,5 a 26,5 Ghz.";
 choices[71][3] = "3.400 a 3.800 MHz.";
 answers[71] = 2;
 units[71] = ['106'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1743. ";
 preguntaids[71] = 1743


//  Id pregunta: 1739 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale c&oacute;mo se denomina el protocolo de interconexi&oacute;n en redes SAN que opera a nivel de gateway y que permite el despliegue de servicios Fibre Channel sobre una red TCP/IP:";
 choices[72]= new Array();
 choices[72][0] = "FCIP (Fibre Channel Internet Protocol).";
 choices[72][1] = "iFCP (Internet Fibre Channel Protocol).";
 choices[72][2] = "iSCSI (Internet Small Computer System Interface).";
 choices[72][3] = "WDM (Wave Division Multiplexing).";
 answers[72] = 1;
 units[72] = ['53'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1739. ";
 preguntaids[72] = 1739


//  Id pregunta: 1744 Año de creación de pregunta: 2016
 questions[73]= "74)  Una Unidad de Acceso Multiestaci&oacute;n o MAU es un dispositivo que administra la comunicaci&oacute;n entre los equipos conectados a una red de topolog&iacute;a:";
 choices[73]= new Array();
 choices[73][0] = "En anillo";
 choices[73][1] = "En Bus";
 choices[73][2] = "En Estrella";
 choices[73][3] = "En Bucle";
 answers[73] = 0;
 units[73] = ['102'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 1744. ";
 preguntaids[73] = 1744


//  Id pregunta: 1769 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale c&oacute;mo se denomina, En telefon&iacute;a m&oacute;vil, el procedimiento mediante el cual se consigue que una conexi&oacute;n se mantenga cuando el m&oacute;vil cambia de celda, dentro del alcance de una misma central de conmutaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Roaming";
 choices[74][1] = "Hand-over";
 choices[74][2] = "Clustering";
 choices[74][3] = "Trunking";
 answers[74] = 1;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 1769. ";
 preguntaids[74] = 1769


