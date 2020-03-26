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
//  Id pregunta: 1811 Año de creación de pregunta: 2016
 questions[0]= "1)  En una arquitectura de 3 capas existen los componentes intermedios llamados middleware. Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como una de las capas o niveles de comunicaci&oacute;n en los que se estructuran los middleware:";
 choices[0]= new Array();
 choices[0][0] = "Protocolo de transporte";
 choices[0][1] = "Canal de enlace de datos";
 choices[0][2] = "Protocolo de servicio";
 choices[0][3] = "Sistema operativo en red";
 answers[0] = 1;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1811. ";
 preguntaids[0] = 1811


//  Id pregunta: 1793 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique cu&aacute;l de los siguientes servicios NO se ofrece por la plataforma @firma:";
 choices[1]= new Array();
 choices[1][0] = "Funcionalidades de verificaci&oacute;n.";
 choices[1][1] = "Funcionalidades de firma.";
 choices[1][2] = "Sellado de tiempo (TSA).";
 choices[1][3] = "Servicios de intermediaci&oacute;n de documentos.";
 answers[1] = 3;
 units[1] = ['47'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 1793. ";
 preguntaids[1] = 1793


//  Id pregunta: 1805 Año de creación de pregunta: 2016
 questions[2]= "3)  Los tipos de motores de b&uacute;squeda que centran sus resultados en b&uacute;squedas que realizan sobre otros buscadores, obteniendo inicialmente un conjunto de resultados de otro buscador, y a continuaci&oacute;n refinan esos resultados presentando una selecci&oacute;n propia, se denominan:";
 choices[2]= new Array();
 choices[2][0] = "Metabuscadores.";
 choices[2][1] = "Multibuscadores.";
 choices[2][2] = "Directorios.";
 choices[2][3] = "Spider o crawlers.";
 answers[2] = 0;
 units[2] = ['103'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1805. ";
 preguntaids[2] = 1805


//  Id pregunta: 1803 Año de creación de pregunta: 2016
 questions[3]= "4)  En el contexto del DCL (Lenguaje de control de datos), indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[3]= new Array();
 choices[3][0] = "La sentencia para controlar el nivel de aislamiento es SET TRANSACTION ISOLATION LEVEL";
 choices[3][1] = "La sentencia GRANT se utiliza para conceder privilegios de seguridad sobre objetos de la base de datos a usuarios espec&iacute;ficos.";
 choices[3][2] = "Los privilegios que se han concedido con la sentencia GRANT pueden ser retirados con la sentencia REMOVE.";
 choices[3][3] = "En la ejecuci&oacute;n de una transacci&oacute;n la sentencia COMMIT [WORK]. Termina la transacci&oacute;n actual grabando permanentemente las modificaciones.";
 answers[3] = 2;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1803. ";
 preguntaids[3] = 1803


//  Id pregunta: 1778 Año de creación de pregunta: 2016
 questions[4]= "5)  La familia de normas ISO9000 establece los requisitos gen&eacute;ricos para la implantaci&oacute;n de sistemas de gesti&oacute;n de la calidad, aplicables en organizaciones de cualquier tipo. Dentro de esta familia, la norma ISO9004 contiene:";
 choices[4]= new Array();
 choices[4][0] = "Principios b&aacute;sicos que debe cumplir el sistema de gesti&oacute;n de la calidad y cu&aacute;l es la terminolog&iacute;a que utiliza.";
 choices[4][1] = "Requisitos para un sistema de gesti&oacute;n de la calidad orientado hacia la satisfacci&oacute;n de los clientes.";
 choices[4][2] = "Recomendaciones sobre la aplicaci&oacute;n de la calidad incluyendo los procesos de mejora continua.";
 choices[4][3] = "Gu&iacute;a para realizar las auditor&iacute;as de calidad.";
 answers[4] = 2;
 units[4] = ['98'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 1778. ";
 preguntaids[4] = 1778


//  Id pregunta: 1832 Año de creación de pregunta: 2016
 questions[5]= "6)  Dentro de la familia de est&aacute;ndares ISO 27000, &iquest;qu&eacute; norma se encarga de ayudar a las organizaciones a medir, a informar y, por lo tanto, a mejorar sistem&aacute;ticamente la eficacia de su Sistema de Informaci&oacute;n de Gesti&oacute;n de la Seguridad (SGSI)?";
 choices[5]= new Array();
 choices[5][0] = "ISO 27001";
 choices[5][1] = "ISO 27002";
 choices[5][2] = "ISO 27003";
 choices[5][3] = "ISO 27004";
 answers[5] = 3;
 units[5] = ['46'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 1832. ";
 preguntaids[5] = 1832


//  Id pregunta: 1801 Año de creación de pregunta: 2016
 questions[6]= "7)  Existen diferentes tipos de relaciones para un sistema de gesti&oacute;n de bases de datos relacional. Indique cu&aacute;l es la opci&oacute;n correcta que define a las del tipo instant&aacute;neas.";
 choices[6]= new Array();
 choices[6][0] = "Son relaciones con nombre y derivadas. Son reales: est&aacute;n representadas no s&oacute;lo por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre, sino tambi&eacute;n por sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[6][1] = "Son relaciones con nombre y derivadas. Son virtuales: est&aacute;n representadas por su definici&oacute;n en t&eacute;rminos de otras relaciones con nombre y no poseen sus propios datos almacenados. Son relaciones de s&oacute;lo de lectura y se refrescan peri&oacute;dicamente.";
 choices[6][2] = "Son relaciones sin nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 choices[6][3] = "Son relaciones que pueden o no tener nombre y resultantes de alguna consulta espec&iacute;fica y no persisten en la base de datos.";
 answers[6] = 0;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1801. ";
 preguntaids[6] = 1801


//  Id pregunta: 1804 Año de creación de pregunta: 2016
 questions[7]= "8)  El an&aacute;lisis multidimensional se fundamenta en modelar la informaci&oacute;n en dimensiones, hechos y medidas. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[7]= new Array();
 choices[7][0] = "Las dimensiones corresponden a un conjunto de elementos con caracter&iacute;sticas comunes que responden a una pregunta de negocio. Representan diferentes perspectivas de an&aacute;lisis.";
 choices[7][1] = "Los hechos identifican los valores de las medidas de negocio para una combinaci&oacute;n concreta de dimensiones.";
 choices[7][2] = "Se entiende por granularidad de la informaci&oacute;n almacenada en una tabla de hechos, el nivel de detalle de dichos datos.";
 choices[7][3] = "Las dimensiones se organizan en jerarqu&iacute;as. Cada dimensi&oacute;n est&aacute; en una &uacute;nica jerarqu&iacute;a.";
 answers[7] = 3;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1804. ";
 preguntaids[7] = 1804


//  Id pregunta: 1774 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el art. 149.3 de la Constituci&oacute;n Espa&ntilde;ola, el derecho estatal ser&aacute; supletorio del derecho de las Comunidades Aut&oacute;nomas:";
 choices[8]= new Array();
 choices[8][0] = "En lo no asumido por &eacute;stas.";
 choices[8][1] = "En todo caso.";
 choices[8][2] = "En lo no atribuido a &eacute;stas de modo expreso.";
 choices[8][3] = "Seg&uacute;n lo dispongan sus respectivos Estatutos.";
 answers[8] = 1;
 units[8] = ['3'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 1774. ";
 preguntaids[8] = 1774


//  Id pregunta: 1775 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[9]= new Array();
 choices[9][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[9][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[9][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[9][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[9] = 1;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 1775. ";
 preguntaids[9] = 1775


//  Id pregunta: 1784 Año de creación de pregunta: 2016
 questions[10]= "11)  En el contexto del Real Decreto 3/2010, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, en las decisiones en materia de seguridad deber&aacute;n tenerse en cuenta una serie de principios b&aacute;sicos. Indique cu&aacute;les son los principios b&aacute;sicos contemplados en el Esquema Nacional de Seguridad (ENS):";
 choices[10]= new Array();
 choices[10][0] = "&ldquo;Seguridad integral&rdquo;, &ldquo;Gesti&oacute;n de riesgos&rdquo;, &ldquo;Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n&rdquo;, &ldquo;L&iacute;neas de defensa&rdquo;, &ldquo;Reevaluaci&oacute;n peri&oacute;dica&rdquo;, &ldquo;Funci&oacute;n diferenciada&rdquo;.";
 choices[10][1] = "&ldquo;An&aacute;lisis y gesti&oacute;n de los riesgos&rdquo;, &ldquo;Gesti&oacute;n de personal&rdquo;, &ldquo;Profesionalidad&rdquo;, &ldquo;Seguridad por defecto&rdquo;, &ldquo;Integridad y actualizaci&oacute;n del sistema&rdquo;, &ldquo;Continuidad de la Actividad&rdquo;.";
 choices[10][2] = "&ldquo;Mecanismos de control&rdquo;, &ldquo;Actualizaci&oacute;n permanente&rdquo;, &ldquo;Formaci&oacute;n&rdquo;, &ldquo;Ciclo de vida de servicios y sistemas&rdquo;, &ldquo;Auditor&iacute;as&rdquo;.";
 choices[10][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[10] = 0;
 units[10] = ['46'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 1784. ";
 preguntaids[10] = 1784


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[11]= new Array();
 choices[11][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[11][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[11][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[11][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[11] = 2;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 1791. ";
 preguntaids[11] = 1791


//  Id pregunta: 1789 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el Real Decreto 1720/2007 indique cu&aacute;l de las siguientes es una medida de seguridad de nivel medio:";
 choices[12]= new Array();
 choices[12][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 choices[12][1] = "La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[12][2] = "Deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan.";
 choices[12][3] = "Exclusivamente el personal autorizado en el documento de seguridad podr&aacute; tener acceso a los lugares donde se hallen instalados los equipos f&iacute;sicos que den soporte a los sistemas de informaci&oacute;n.";
 answers[12] = 3;
 units[12] = ['35'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 1789. ";
 preguntaids[12] = 1789


//  Id pregunta: 1818 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como un modelo de desarrollo de software en el &aacute;mbito de Ingenier&iacute;a de software";
 choices[13]= new Array();
 choices[13][0] = "Modelo incremental.";
 choices[13][1] = "Modelo lineal.";
 choices[13][2] = "Modelo espiral.";
 choices[13][3] = "Modelo relacional.";
 answers[13] = 3;
 units[13] = ['84'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 1818. ";
 preguntaids[13] = 1818


//  Id pregunta: 1843 Año de creación de pregunta: 2016
 questions[14]= "15)  Las redes ATM emplean celdas de:";
 choices[14]= new Array();
 choices[14][0] = "Tama&ntilde;o variable: entre 5 y 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n.";
 choices[14][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n.";
 choices[14][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[14][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[14] = 1;
 units[14] = ['107'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 1843. ";
 preguntaids[14] = 1843


//  Id pregunta: 1839 Año de creación de pregunta: 2016
 questions[15]= "16)  El protocolo IPv6, &iquest;cu&aacute;ntas direcciones de red distintas posibilita?";
 choices[15]= new Array();
 choices[15][0] = "2 elevado a 64";
 choices[15][1] = "2 elevado a 128";
 choices[15][2] = "2 elevado a 32";
 choices[15][3] = "2 elevado a 256";
 answers[15] = 1;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 1839. ";
 preguntaids[15] = 1839


//  Id pregunta: 1802 Año de creación de pregunta: 2016
 questions[16]= "17)  En SQL, &iquest;cu&aacute;l de las siguientes sentencias es correcta?";
 choices[16]= new Array();
 choices[16][0] = "TRUNCATE TABLE, borra la tabla de la base de datos";
 choices[16][1] = "TRUNCATE TABLE es funcionalmente igual a DELETE TABLE";
 choices[16][2] = "TRUNCATE TABLE debe ser usado con la cl&aacute;usula WHERE";
 choices[16][3] = "Ninguna de las anteriores es correcta";
 answers[16] = 0;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1802. ";
 preguntaids[16] = 1802


//  Id pregunta: 1812 Año de creación de pregunta: 2016
 questions[17]= "18)  Uno de los componentes de una granja de servidores son los monitores transaccionales que tienen como funci&oacute;n realizar la gesti&oacute;n de transacciones. Indique cu&aacute;l de las siguientes opciones es correcta como una de las partes que interviene en dicha gesti&oacute;n de transacciones:";
 choices[17]= new Array();
 choices[17][0] = "Gestor de aplicaci&oacute;n";
 choices[17][1] = "Gestor de servicio";
 choices[17][2] = "Gestor de registro";
 choices[17][3] = "Gestor de sesi&oacute;n";
 answers[17] = 2;
 units[17] = ['113'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1812. ";
 preguntaids[17] = 1812


//  Id pregunta: 1825 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l es la opci&oacute;n correcta que representa el proceso de M&eacute;trica 3 donde se realiza la actividad de Valoraci&oacute;n de Alternativas";
 choices[18]= new Array();
 choices[18][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[18][1] = "An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[18][2] = "Estudio de la Viabilidad del Sistema";
 choices[18][3] = "Mantenimiento del Sistema";
 answers[18] = 2;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 1825. ";
 preguntaids[18] = 1825


//  Id pregunta: 1777 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes es un objetivo de la gesti&oacute;n de riesgos?";
 choices[19]= new Array();
 choices[19][0] = "Aumentar el presupuesto de seguridad de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[19][1] = "Transparencia hacia la empresa de los riesgos significativos";
 choices[19][2] = "Conocimiento de las &uacute;ltimas herramientas en materia de seguridad";
 choices[19][3] = "Conducir un an&aacute;lisis de riesgo detallado";
 answers[19] = 1;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 1777. ";
 preguntaids[19] = 1777


//  Id pregunta: 1821 Año de creación de pregunta: 2016
 questions[20]= "21)  En ingenier&iacute;a de software el modelo de prototipos pertenece a los modelos de desarrollo evolutivo. Indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[20]= new Array();
 choices[20][0] = "En un modelo prototipo de la fase de construcci&oacute;n se puede volver a la fase de dise&ntilde;o.";
 choices[20][1] = "En un modelo prototipo de la fase de dise&ntilde;o se puede volver a la fase de evaluaci&oacute;n.";
 choices[20][2] = "En un modelo prototipo de la fase de an&aacute;lisis se puede volver a la fase de construcci&oacute;n.";
 choices[20][3] = "Ninguna de las opciones anteriores es correcta.";
 answers[20] = 0;
 units[20] = ['90'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 1821. ";
 preguntaids[20] = 1821


//  Id pregunta: 1829 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l es la opci&oacute;n correcta que representa a uno de los procesos que es necesario tener implantado para alcanzar el nivel 2 de CMMI (Capability Maturity Model Integration), en el que los proyectos est&aacute;n siendo gestionados y controlados durante su desarrollo";
 choices[21]= new Array();
 choices[21][0] = "Gesti&oacute;n de riesgos";
 choices[21][1] = "Gesti&oacute;n de proveedores";
 choices[21][2] = "Gesti&oacute;n cuantitativa de proyectos";
 choices[21][3] = "Innovaci&oacute;n organizacional";
 answers[21] = 1;
 units[21] = ['93'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 1829. ";
 preguntaids[21] = 1829


//  Id pregunta: 1786 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el art. 98 del Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, &iquest;cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador?";
 choices[22]= new Array();
 choices[22][0] = "60 a&ntilde;os";
 choices[22][1] = "50 a&ntilde;os";
 choices[22][2] = "80 a&ntilde;os";
 choices[22][3] = "Ninguna es correcta";
 answers[22] = 0;
 units[22] = ['41'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 1786. ";
 preguntaids[22] = 1786


//  Id pregunta: 1782 Año de creación de pregunta: 2016
 questions[23]= "24)  El art. 9 del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, se refiere al inventario de informaci&oacute;n administrativa, y establece que las administraciones p&uacute;blicas deber&aacute;n mantener en &eacute;l:";
 choices[23]= new Array();
 choices[23][0] = "Los procedimientos administrativos y servicios que prestan de forma clasificada y estructurados en familias, con indicaci&oacute;n del nivel de informatizaci&oacute;n de los mismos.";
 choices[23][1] = "La relaci&oacute;n actualizada de los &oacute;rganos de direcci&oacute;n de los organismos y entidades de la administraci&oacute;n p&uacute;blica.";
 choices[23][2] = "La relaci&oacute;n de los documentos o datos que puede facilitar a otras administraciones a trav&eacute;s de un nodo de interoperabilidad, indicando las condiciones de acceso y uso del mismo.";
 choices[23][3] = "La relaci&oacute;n de sedes electr&oacute;nicas que complementan la red de oficinas de registro y atenci&oacute;n al ciudadano.";
 answers[23] = 0;
 units[23] = ['43'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1782. ";
 preguntaids[23] = 1782


//  Id pregunta: 1806 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones sobre RSS NO es correcta";
 choices[24]= new Array();
 choices[24][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web";
 choices[24][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias";
 choices[24][2] = "RSS es parte de la familia de los formatos XML";
 choices[24][3] = "Es un acr&oacute;nimo de Really Simple Syndication";
 answers[24] = 1;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1806. ";
 preguntaids[24] = 1806


//  Id pregunta: 1779 Año de creación de pregunta: 2016
 questions[25]= "26)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;l es otro t&eacute;rmino para el concepto tiempo de disponibilidad (Uptime)?";
 choices[25]= new Array();
 choices[25][0] = "Tiempo Medio entre Fallos (MTBF)";
 choices[25][1] = "Tiempo Medio de Reparaci&oacute;n (MTTR)";
 choices[25][2] = "Tiempo Medio entre Incidentes del Sistema (MTBSI)";
 choices[25][3] = "Relaci&oacute;n entre MTBF y MTBSI";
 answers[25] = 0;
 units[25] = ['101'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1779. ";
 preguntaids[25] = 1779


//  Id pregunta: 1817 Año de creación de pregunta: 2016
 questions[26]= "27)  Entre las diferentes caracter&iacute;sticas que tienen las aplicaciones de Internet enriquecidas, indique cu&aacute;l de las siguientes opciones NO es correcta";
 choices[26]= new Array();
 choices[26][0] = "Las aplicaciones de Internet enriquecidas utilizan un navegador web estandarizado para ejecutarse.";
 choices[26][1] = "Las aplicaciones de Internet enriquecidas pueden ser usadas desde cualquier ordenador con conexi&oacute;n a Internet pero con dependencia del sistema operativo que &eacute;ste utilice.";
 choices[26][2] = "Las aplicaciones de Internet enriquecidas utilizan una arquitectura cliente/servidor as&iacute;ncrona.";
 choices[26][3] = "Las aplicaciones de Internet enriquecidas surgen como una combinaci&oacute;n de las ventajas que ofrecen las aplicaciones web y las aplicaciones tradicionales.";
 answers[26] = 1;
 units[26] = ['74'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1817. ";
 preguntaids[26] = 1817


//  Id pregunta: 1773 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el art. 9.2 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[27]= new Array();
 choices[27][0] = "Corresponde a la Administraci&oacute;n General del Estado promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[27][1] = "Corresponde al gobierno central promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[27][2] = "Corresponde a los poderes p&uacute;blicos promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[27][3] = "Corresponde las Cortes Generales promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 answers[27] = 2;
 units[27] = ['1'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 1773. ";
 preguntaids[27] = 1773


//  Id pregunta: 1831 Año de creación de pregunta: 2016
 questions[28]= "29)  El contenido de la norma ISO 27001 se divide en secciones, &iquest;cu&aacute;l de las siguientes NO se corresponde con una secci&oacute;n de la misma?";
 choices[28]= new Array();
 choices[28][0] = "Mejora del SGSI";
 choices[28][1] = "Auditor&iacute;as internas";
 choices[28][2] = "Responsabilidad de la Direcci&oacute;n";
 choices[28][3] = "Plan de seguridad";
 answers[28] = 3;
 units[28] = ['46'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 1831. ";
 preguntaids[28] = 1831


//  Id pregunta: 1835 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes campos NO se encuentra en un certificado electr&oacute;nico que siga el est&aacute;ndar X.509?";
 choices[29]= new Array();
 choices[29][0] = "Nombre del certificador.";
 choices[29][1] = "Periodo de validez.";
 choices[29][2] = "Clave privada del sujeto.";
 choices[29][3] = "Clave p&uacute;blica del sujeto.";
 answers[29] = 2;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1835. ";
 preguntaids[29] = 1835


//  Id pregunta: 1822 Año de creación de pregunta: 2016
 questions[30]= "31)  Entre las distintas fases de la ingenier&iacute;a de requisitos, indique cu&aacute;l es la opci&oacute;n correcta que refleja la fase en la que se comprueba que los requisitos implementados se corresponden con los que inicialmente se pretend&iacute;an:";
 choices[30]= new Array();
 choices[30][0] = "Implementar requisitos";
 choices[30][1] = "Verificar requisitos";
 choices[30][2] = "Analizar requisitos";
 choices[30][3] = "Validar requisitos";
 answers[30] = 3;
 units[30] = ['84'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1822. ";
 preguntaids[30] = 1822


//  Id pregunta: 1826 Año de creación de pregunta: 2016
 questions[31]= "32)  En la programaci&oacute;n orientada a objetos existe el concepto de polimorfismo. Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[31]= new Array();
 choices[31][0] = "El polimorfismo es una caracter&iacute;stica que permite que m&eacute;todos diferentes, asociados a objetos distintos, puedan compartir el mismo nombre.";
 choices[31][1] = "El polimorfismo es una caracter&iacute;stica que permite que atributos diferentes, asociados a m&eacute;todos distintos, puedan compartir el mismo nombre.";
 choices[31][2] = "El polimorfismo es una caracter&iacute;stica que permite que objetos diferentes, asociados a clases distintas, puedan compartir el mismo nombre.";
 choices[31][3] = "Ninguna de las opciones es correcta.";
 answers[31] = 0;
 units[31] = ['86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1826. ";
 preguntaids[31] = 1826


//  Id pregunta: 1830 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; se entiende por IP Spoofing?";
 choices[32]= new Array();
 choices[32][0] = "Es un ataque que se basa en la ejecuci&oacute;n de c&oacute;digo &ldquo;Script&rdquo; arbitrario en un navegador.";
 choices[32][1] = "Es un ataque que pretende provocar un direccionamiento err&oacute;neo en los equipos afectados, mediante la traducci&oacute;n err&oacute;nea de los nombres de dominio a direcciones IP.";
 choices[32][2] = "Es un ataque que consiste en modificar la cabecera de los paquetes enviados a un determinado sistema inform&aacute;tico para simular que proceden de un equipo distinto al que verdaderamente los ha originado.";
 choices[32][3] = "Es un ataque que se compone de un conjunto de actuaciones que persiguen colapsar determinados equipos o redes inform&aacute;ticas, para impedir que puedan ofrecer sus servicios a sus clientes y usuarios.";
 answers[32] = 2;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 1830. ";
 preguntaids[32] = 1830


//  Id pregunta: 1815 Año de creación de pregunta: 2016
 questions[33]= "34)  Los patrones de dise&ntilde;o se agrupan en diferentes categor&iacute;as. Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de estas categor&iacute;as:";
 choices[33]= new Array();
 choices[33][0] = "Estructurales";
 choices[33][1] = "De an&aacute;lisis";
 choices[33][2] = "De comportamiento";
 choices[33][3] = "De creaci&oacute;n";
 answers[33] = 1;
 units[33] = ['89'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 1815. ";
 preguntaids[33] = 1815


//  Id pregunta: 1776 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique cu&aacute;l de las siguientes es una raz&oacute;n com&uacute;n por la que los proyectos se exceden en presupuesto o en fechas:";
 choices[34]= new Array();
 choices[34][0] = "Coste de los especialistas de Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[34][1] = "Indisponibilidad de la &uacute;ltima tecnolog&iacute;a.";
 choices[34][2] = "Subestimaci&oacute;n del esfuerzo requerido.";
 choices[34][3] = "Falta de automatizaci&oacute;n de las herramientas de desarrollo.";
 answers[34] = 2;
 units[34] = ['31'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 1776. ";
 preguntaids[34] = 1776


//  Id pregunta: 1836 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones es la correcta dentro de un sistema de cifrado sim&eacute;trico?";
 choices[35]= new Array();
 choices[35][0] = "Se utiliza un par de claves, una para cifrar y otra para descifrar.";
 choices[35][1] = "Los extremos que se comunican deben conocer la clave privada.";
 choices[35][2] = "Utilizan longitudes de claves mayores que el cifrado asim&eacute;trico.";
 choices[35][3] = "Es m&aacute;s lento que el cifrado asim&eacute;trico.";
 answers[35] = 1;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1836. ";
 preguntaids[35] = 1836


//  Id pregunta: 1810 Año de creación de pregunta: 2016
 questions[36]= "37)  Entre los diferentes tipos de servidores que existen, indique en cu&aacute;l de ellos es correcto que se realicen las funciones de un servicio de cortafuegos.";
 choices[36]= new Array();
 choices[36][0] = "Servidor de acceso remoto";
 choices[36][1] = "Servidor web";
 choices[36][2] = "Servidor de red";
 choices[36][3] = "Servidor de comunicaciones";
 answers[36] = 2;
 units[36] = ['119'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1810. ";
 preguntaids[36] = 1810


//  Id pregunta: 1785 Año de creación de pregunta: 2016
 questions[37]= "38)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, otorga la equivalencia funcional con la firma manuscrita respecto de los datos consignados en forma electr&oacute;nica a:";
 choices[37]= new Array();
 choices[37][0] = "La firma electr&oacute;nica general.";
 choices[37][1] = "La firma electr&oacute;nica avanzada.";
 choices[37][2] = "La firma electr&oacute;nica reconocida";
 choices[37][3] = "La firma electr&oacute;nica autenticada.";
 answers[37] = 2;
 units[37] = ['77'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1785. ";
 preguntaids[37] = 1785


//  Id pregunta: 1847 Año de creación de pregunta: 2016
 questions[38]= "39)  Dadas las IPs de dos hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0), &iquest;est&aacute;n en la misma subred?";
 choices[38]= new Array();
 choices[38][0] = "S&iacute;";
 choices[38][1] = "No";
 choices[38][2] = "Depende de la direcci&oacute;n de la puerta de enlace";
 choices[38][3] = "Depende de la configuraci&oacute;n del conmutador";
 answers[38] = 0;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 1847. ";
 preguntaids[38] = 1847


//  Id pregunta: 1808 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de los siguientes es un modelo de almacenamiento de datos en un Sistema de Informaci&oacute;n Geogr&aacute;fica (SIG).";
 choices[39]= new Array();
 choices[39][0] = "Modelo raster";
 choices[39][1] = "Modelo de superposici&oacute;n de mapas";
 choices[39][2] = "Modelo dublincore";
 choices[39][3] = "Modelo geoparser";
 answers[39] = 0;
 units[39] = ['71'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1808. ";
 preguntaids[39] = 1808


//  Id pregunta: 1841 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre el modelo de capas OSI:";
 choices[40]= new Array();
 choices[40][0] = "La capa de enlace se encarga de determinar los enlaces por donde enviar los paquetes.";
 choices[40][1] = "La capa de sesi&oacute;n est&aacute; por encima de la capa de presentaci&oacute;n.";
 choices[40][2] = "El nivel que realiza la funci&oacute;n de obtener la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el nivel 3.";
 choices[40][3] = "La compresi&oacute;n y el cifrado de los datos es una tarea de la capa de aplicaci&oacute;n.";
 answers[40] = 2;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1841. ";
 preguntaids[40] = 1841


//  Id pregunta: 1833 Año de creación de pregunta: 2016
 questions[41]= "42)  Dentro del &aacute;mbito de Kerberos, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[41]= new Array();
 choices[41][0] = "Es un protocolo de autenticaci&oacute;n de usuarios dentro de una red.";
 choices[41][1] = "Est&aacute; basado en el Protocolo de Needham-Schroeder.";
 choices[41][2] = "Mantiene una base de datos de claves secretas de todos los usuarios.";
 choices[41][3] = "El env&iacute;o de las contrase&ntilde;as desde el Centro de Distribuci&oacute;n de Claves (KDC) y el Servidor de Autenticaci&oacute;n (AS) se hace de manera no encriptada.";
 answers[41] = 3;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1833. ";
 preguntaids[41] = 1833


//  Id pregunta: 1823 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las t&eacute;cnicas para la obtenci&oacute;n de requisitos en la ingenier&iacute;a de requisitos";
 choices[42]= new Array();
 choices[42][0] = "Estudio de riesgos";
 choices[42][1] = "Observaci&oacute;n";
 choices[42][2] = "Prototipos";
 choices[42][3] = "Entrevistas";
 answers[42] = 0;
 units[42] = ['84'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 1823. ";
 preguntaids[42] = 1823


//  Id pregunta: 1797 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones con respecto al sellado de tiempo es correcta:";
 choices[43]= new Array();
 choices[43][0] = "Es una firma electr&oacute;nica realizada por una TSA que nos permite demostrar que los datos suministrados han existido y no han sido alterados desde un instante espec&iacute;fico en el tiempo";
 choices[43][1] = "Es una firma electr&oacute;nica realizada por una TSA que nos permite demostrar que un documento electr&oacute;nico ha sido firmado en un momento en el tiempo concreto.";
 choices[43][2] = "Es una firma electr&oacute;nica realizada por una TSA que garantiza fehacientemente la fecha y hora de una sede electr&oacute;nica.";
 choices[43][3] = "Es una firma electr&oacute;nica sincronizada con el ROA que garantiza fehacientemente la fecha y hora de una sede electr&oacute;nica.";
 answers[43] = 0;
 units[43] = ['77'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1797. ";
 preguntaids[43] = 1797


//  Id pregunta: 1788 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el art. 20 de la Ley org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, en las disposiciones de creaci&oacute;n o modificaci&oacute;n de los ficheros de las administraciones p&uacute;blicas NO es necesario que se recoja:";
 choices[44]= new Array();
 choices[44][0] = "La finalidad del fichero y los usos previstos para &eacute;l.";
 choices[44][1] = "El procedimiento de recogida de los datos de car&aacute;cter personal.";
 choices[44][2] = "Las cesiones de datos de car&aacute;cter personal y, en su caso, las transferencias de datos que se prevean a pa&iacute;ses terceros.";
 choices[44][3] = "El destino de los datos para el caso de supresi&oacute;n del fichero y las previsiones a adoptar para su destrucci&oacute;n.";
 answers[44] = 3;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 1788. ";
 preguntaids[44] = 1788


//  Id pregunta: 1845 Año de creación de pregunta: 2016
 questions[45]= "46)  Los equipos Bluetooth emplean:";
 choices[45]= new Array();
 choices[45][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[45][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencia.";
 choices[45][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[45][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[45] = 1;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 1845. ";
 preguntaids[45] = 1845


//  Id pregunta: 1787 Año de creación de pregunta: 2016
 questions[46]= "47)  La Licencia P&uacute;blica General Reducida de GNU (LGPL) es una licencia de software que utiliza:";
 choices[46]= new Array();
 choices[46][0] = "Copyright.";
 choices[46][1] = "Copyleft d&eacute;bil.";
 choices[46][2] = "Copyleft fuerte.";
 choices[46][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[46] = 1;
 units[46] = ['66'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1787. ";
 preguntaids[46] = 1787


//  Id pregunta: 1820 Año de creación de pregunta: 2016
 questions[47]= "48)  El proceso de desarrollo de software RUP (Rational Unified Process) est&aacute; basado en distintos principios clave. Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerado uno de esos principios:";
 choices[47]= new Array();
 choices[47][0] = "Equilibrio de las prioridades.";
 choices[47][1] = "Colaboraci&oacute;n entre equipos.";
 choices[47][2] = "Desarrollo secuencial.";
 choices[47][3] = "Asegurar la calidad.";
 answers[47] = 2;
 units[47] = ['82'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 1820. ";
 preguntaids[47] = 1820


//  Id pregunta: 1809 Año de creación de pregunta: 2016
 questions[48]= "49)  Teniendo en cuenta las caracter&iacute;sticas del protocolo XMPP (Extensible Messaging and Presence Protocol), indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[48]= new Array();
 choices[48][0] = "XMPP ha sido formalizado como una tecnolog&iacute;a de mensajer&iacute;a instant&aacute;nea est&aacute;ndar";
 choices[48][1] = "XMPP es totalmente centralizado, para la puesta en marcha de XMPP se requiere obligatoriamente un servidor central";
 choices[48][2] = "XMPP no permite la encriptaci&oacute;n de las comunicaciones";
 choices[48][3] = "XMPP no es extensible, al no permitir crear funcionalidades personalizadas";
 answers[48] = 0;
 units[48] = ['125'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 1809. ";
 preguntaids[48] = 1809


//  Id pregunta: 1838 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l es el tama&ntilde;o de bloque del algoritmo DES?";
 choices[49]= new Array();
 choices[49][0] = "64 bits";
 choices[49][1] = "56 bits";
 choices[49][2] = "128 bits";
 choices[49][3] = "256 bits";
 answers[49] = 0;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1838. ";
 preguntaids[49] = 1838


//  Id pregunta: 1795 Año de creación de pregunta: 2016
 questions[50]= "51)  Los certificados electr&oacute;nicos reconocidos incorporados al DNI electr&oacute;nico tendr&aacute;n un per&iacute;odo de vigencia de:";
 choices[50]= new Array();
 choices[50][0] = "24 meses";
 choices[50][1] = "30 meses";
 choices[50][2] = "5 a&ntilde;os";
 choices[50][3] = "El per&iacute;odo de validez del documento nacional de identidad.";
 answers[50] = 2;
 units[50] = ['78'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1795. ";
 preguntaids[50] = 1795


//  Id pregunta: 1816 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique cu&aacute;l de las siguientes definiciones referidas a la t&eacute;cnica AJAX (Asynchronous JavaScript And XML) es correcta";
 choices[51]= new Array();
 choices[51][0] = "AJAX es una plataforma v&aacute;lida s&oacute;lo para plataformas JEE.";
 choices[51][1] = "AJAX no representa una tecnolog&iacute;a en s&iacute; misma, sino que se trata de la combinaci&oacute;n de un grupo de tecnolog&iacute;as ya existentes.";
 choices[51][2] = "AJAX utiliza siempre el formato XML para la transferencia de datos solicitados al servidor.";
 choices[51][3] = "En las aplicaciones desarrolladas con AJAX no es posible realizar cambios sobre las p&aacute;ginas si no se realiza la recarga de p&aacute;gina.";
 answers[51] = 1;
 units[51] = ['74'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1816. ";
 preguntaids[51] = 1816


//  Id pregunta: 1813 Año de creación de pregunta: 2016
 questions[52]= "53)  En una arquitectura SOA existe una capa en la que se realiza la funci&oacute;n de monitorizaci&oacute;n y control de servicios. Indique cu&aacute;l es la opci&oacute;n correcta que define dicha capa.";
 choices[52]= new Array();
 choices[52][0] = "Capa de control";
 choices[52][1] = "Capa de servicios";
 choices[52][2] = "Capa de SOA Governance";
 choices[52][3] = "Capa de SOA Enterprise Service Bus";
 answers[52] = 2;
 units[52] = ['55'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1813. ";
 preguntaids[52] = 1813


//  Id pregunta: 1790 Año de creación de pregunta: 2016
 questions[53]= "54)  La norma SICRES 3.0 recoge:";
 choices[53]= new Array();
 choices[53][0] = "El modelo de Datos para el intercambio de asientos y entre las Entidades Registrales con independencia del Sistema de Registro origen o destino, y de la tecnolog&iacute;a de intercambio.";
 choices[53][1] = "El formato est&aacute;ndar para el intercambio de informaci&oacute;n del inventario de informaci&oacute;n administrativa que debe mantener cada administraci&oacute;n p&uacute;blica.";
 choices[53][2] = "El formato est&aacute;ndar para el dise&ntilde;o de los servicios de interoperabilidad, para el intercambio de datos y documentos.";
 choices[53][3] = "El formato est&aacute;ndar para el intercambio de documentos electr&oacute;nicos.";
 answers[53] = 0;
 units[53] = ['44'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 1790. ";
 preguntaids[53] = 1790


//  Id pregunta: 1796 Año de creación de pregunta: 2016
 questions[54]= "55)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:";
 choices[54]= new Array();
 choices[54][0] = "Sede Electr&oacute;nica";
 choices[54][1] = "Empleado P&uacute;blico";
 choices[54][2] = "De Componente";
 choices[54][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[54] = 3;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 1796. ";
 preguntaids[54] = 1796


//  Id pregunta: 1794 Año de creación de pregunta: 2016
 questions[55]= "56)  El proyecto STORK es un:";
 choices[55]= new Array();
 choices[55][0] = "Proyecto para conseguir el reconocimiento paneuropeo de las identidades electr&oacute;nicas y, en concreto, la aceptaci&oacute;n del DNI electr&oacute;nico e identificadores similares en Servicios de Administraci&oacute;n Electr&oacute;nica de otras administraciones europeas.";
 choices[55][1] = "Proyecto para conseguir la interoperabilidad del documento de identificaci&oacute;n nacional entre los estados de la Uni&oacute;n Europea.";
 choices[55][2] = "Proyecto para conseguir la interconexi&oacute;n de las redes administrativas europeas.";
 choices[55][3] = "Proyecto para conseguir el reconocimiento paneuropeo de la definici&oacute;n y metadatos requeridos del documento electr&oacute;nico, con el fin &uacute;ltimo de la interconexi&oacute;n de registros administrativos.";
 answers[55] = 0;
 units[55] = ['77'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1794. ";
 preguntaids[55] = 1794


//  Id pregunta: 1842 Año de creación de pregunta: 2016
 questions[56]= "57)  El nombre del est&aacute;ndar WiMAX proviene de:";
 choices[56]= new Array();
 choices[56][0] = "Wireless Media for &Aacute;rea eXtent";
 choices[56][1] = "Worldwide Interoperability for Microwave Access";
 choices[56][2] = "WiFi MAXimun";
 choices[56][3] = "Wireless Model Access eXtensive";
 answers[56] = 1;
 units[56] = ['107'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1842. ";
 preguntaids[56] = 1842


//  Id pregunta: 1819 Año de creación de pregunta: 2016
 questions[57]= "58)  La ingenier&iacute;a de software est&aacute; formada por m&eacute;todos, herramientas y procedimientos. Indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[57]= new Array();
 choices[57][0] = "Los m&eacute;todos definen la secuencia en la que se deben aplicar los procedimientos.";
 choices[57][1] = "Los m&eacute;todos proporcionan informaci&oacute;n para conocer c&oacute;mo construir el software.";
 choices[57][2] = "Los procedimientos suministran herramientas para la ejecuci&oacute;n de los m&eacute;todos.";
 choices[57][3] = "Los procedimientos aportan los m&eacute;todos para la definici&oacute;n de las herramientas.";
 answers[57] = 1;
 units[57] = ['84'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 1819. ";
 preguntaids[57] = 1819


//  Id pregunta: 1846 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre el est&aacute;ndar IEEE 802.11";
 choices[58]= new Array();
 choices[58][0] = "Utiliza CSMA/CA como protocolo MAC";
 choices[58][1] = "La trama 802.11 contiene 4 direcciones MAC";
 choices[58][2] = "La trama 802.11 contiene 2 direcciones MAC";
 choices[58][3] = "Utiliza tramas de reconocimiento o confirmaci&oacute;n (ACK)";
 answers[58] = 2;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 1846. ";
 preguntaids[58] = 1846


//  Id pregunta: 1840 Año de creación de pregunta: 2016
 questions[59]= "60)  En el contexto de los tipos de redes, indique cu&aacute;l de las siguientes afirmaciones NO es correcta";
 choices[59]= new Array();
 choices[59][0] = "WAN significa Wireless Area Network";
 choices[59][1] = "PAN significa Personal &Aacute;rea Network";
 choices[59][2] = "MAN significa Metropolitan &Aacute;rea Network";
 choices[59][3] = "SAN significa Storage Area Network";
 answers[59] = 0;
 units[59] = ['112'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 1840. ";
 preguntaids[59] = 1840


//  Id pregunta: 1837 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; protocolo se puede utilizar para encapsular el tr&aacute;fico que atraviesa el t&uacute;nel de VPN?";
 choices[60]= new Array();
 choices[60][0] = "IPX";
 choices[60][1] = "MPLS";
 choices[60][2] = "PPTP";
 choices[60][3] = "ATM";
 answers[60] = 2;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1837. ";
 preguntaids[60] = 1837


//  Id pregunta: 1844 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique cu&aacute;l de las siguientes afirmaciones es correcta sobre MPLS (Multiprotocol Label Switching)";
 choices[61]= new Array();
 choices[61][0] = "Opera entre la capa de enlace y la capa de red.";
 choices[61][1] = "Opera entre la capa de transporte y la capa de red.";
 choices[61][2] = "Complementa los servicios de TLS/SSL.";
 choices[61][3] = "Requiere una capa f&iacute;sica espec&iacute;fica.";
 answers[61] = 0;
 units[61] = ['107'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1844. ";
 preguntaids[61] = 1844


//  Id pregunta: 1828 Año de creación de pregunta: 2016
 questions[62]= "63)  Teniendo en cuenta que las cajas negras son un tipo de prueba de software, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[62]= new Array();
 choices[62][0] = "Las cajas negras son un tipo de pruebas de software que se hacen sobre las funciones internas de un m&oacute;dulo.";
 choices[62][1] = "Las cajas negras son un tipo de pruebas de software que dan m&aacute;s importancia al funcionamiento interno que a las entradas y salidas.";
 choices[62][2] = "Las cajas negras son un tipo de pruebas de software que se ocupan de probar si se cumplen los requisitos funcionales de la aplicaci&oacute;n.";
 choices[62][3] = "Ninguna de las opciones es correcta.";
 answers[62] = 2;
 units[62] = ['92'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 1828. ";
 preguntaids[62] = 1828


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[63]= new Array();
 choices[63][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[63][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[63][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[63][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[63] = 1;
 units[63] = ['97'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1827. ";
 preguntaids[63] = 1827


//  Id pregunta: 1798 Año de creación de pregunta: 2016
 questions[64]= "65)  En un modelo relacional existen restricciones inherentes (propias del modelo) y restricciones sem&aacute;nticas (de usuario). Indique cu&aacute;l de las siguientes opciones NO es una restricci&oacute;n sem&aacute;ntica:";
 choices[64]= new Array();
 choices[64][0] = "Unicidad de valor en un atributo";
 choices[64][1] = "Obligatoriedad de que un atributo no admita nulos";
 choices[64][2] = "Integridad referencial";
 choices[64][3] = "Obligatoriedad de existencia de clave primaria.";
 answers[64] = 3;
 units[64] = ['61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1798. ";
 preguntaids[64] = 1798


//  Id pregunta: 1800 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique cu&aacute;l de las siguientes opciones NO es correcta para ser considerada como una de las caracter&iacute;sticas de las Bases de Datos XML nativas";
 choices[65]= new Array();
 choices[65][0] = "Las Bases de Datos XML nativas son bases de datos centradas en documentos";
 choices[65][1] = "Las Bases de Datos XML nativas permiten la creaci&oacute;n de &iacute;ndices";
 choices[65][2] = "Las Bases de Datos XML nativas soportan s&oacute;lo el lenguaje de consulta XML";
 choices[65][3] = "Las Bases de Datos XML nativas no tienen ning&uacute;n modelo de almacenamiento f&iacute;sico subyacente concreto";
 answers[65] = 2;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1800. ";
 preguntaids[65] = 1800


//  Id pregunta: 1783 Año de creación de pregunta: 2016
 questions[66]= "67)  En el contexto del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, indique cu&aacute;l es el t&eacute;rmino para definir aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Interoperabilidad Organizativa.";
 choices[66][1] = "Interoperabilidad Sem&aacute;ntica.";
 choices[66][2] = "Interoperabilidad T&eacute;cnica.";
 choices[66][3] = "Interoperabilidad en el Tiempo.";
 answers[66] = 1;
 units[66] = ['43'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 1783. ";
 preguntaids[66] = 1783


//  Id pregunta: 1807 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;En qu&eacute; consiste el podcasting?";
 choices[67]= new Array();
 choices[67][0] = "Se trata de un formato XML para sindicar o compartir contenido en la web. Se utiliza para difundir informaci&oacute;n actualizada frecuentemente a usuarios que se han suscrito a la fuente de contenidos.";
 choices[67][1] = "Creaci&oacute;n de sitios web cuyas p&aacute;ginas pueden ser editadas por m&uacute;ltiples voluntarios a trav&eacute;s del navegador web. Los usuarios pueden crear, modificar o borrar un mismo texto que comparten.";
 choices[67][2] = "Comunidad cuyos v&iacute;nculos, interacciones y relaciones tienen lugar no en un espacio f&iacute;sico sino en un espacio virtual como Internet.";
 choices[67][3] = "Distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo, que puede incluir texto como subt&iacute;tulos y notas) mediante un sistema de redifusi&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 answers[67] = 3;
 units[67] = ['74'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1807. ";
 preguntaids[67] = 1807


//  Id pregunta: 1781 Año de creación de pregunta: 2016
 questions[68]= "69)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;les de los siguientes procesos incluye la necesidad de realizar una Evaluaci&oacute;n y Gesti&oacute;n de Riesgo? 1. Gesti&oacute;n de Continuidad de Servicios de TI 2. Gesti&oacute;n de Seguridad de la Informaci&oacute;n 3. Gesti&oacute;n del Nivel de Servicio";
 choices[68]= new Array();
 choices[68][0] = "Todos.";
 choices[68][1] = "S&oacute;lo 1 y 3.";
 choices[68][2] = "S&oacute;lo 2 y 3.";
 choices[68][3] = "S&oacute;lo 1 y 2.";
 answers[68] = 3;
 units[68] = ['101'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 1781. ";
 preguntaids[68] = 1781


//  Id pregunta: 1780 Año de creación de pregunta: 2016
 questions[69]= "70)  En el &aacute;mbito de ITIL, el Control es una de las actividades de la Gesti&oacute;n de la Configuraci&oacute;n. &iquest;De qu&eacute; se trata esta actividad?";
 choices[69]= new Array();
 choices[69][0] = "La actualizaci&oacute;n de los cambios de Elementos de Configuraci&oacute;n y sus relaciones en la Base de Datos de Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[69][1] = "Comprobar si los Elementos de Configuraci&oacute;n y sus atributos se reflejan correctamente en la Base de Datos de Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[69][2] = "Implantar nuevos Elementos de Configuraci&oacute;n en el entorno de explotaci&oacute;n.";
 choices[69][3] = "Hacer inventario de los Elementos de Configuraci&oacute;n.";
 answers[69] = 0;
 units[69] = ['101'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 1780. ";
 preguntaids[69] = 1780


//  Id pregunta: 1799 Año de creación de pregunta: 2016
 questions[70]= "71)  Refiri&eacute;ndonos al concepto de claves for&aacute;neas en un modelo relacional, indique cu&aacute;l de las siguientes opciones NO es correcta:";
 choices[70]= new Array();
 choices[70][0] = "La clave for&aacute;nea puede hacer referencia a la clave primaria de la misma tabla.";
 choices[70][1] = "La clave for&aacute;nea puede tener valores nulos.";
 choices[70][2] = "La clave for&aacute;nea puede tener valores duplicados.";
 choices[70][3] = "La clave for&aacute;nea puede estar formada por una parte de la clave primaria a la que hace referencia.";
 answers[70] = 3;
 units[70] = ['61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1799. ";
 preguntaids[70] = 1799


//  Id pregunta: 1824 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como uno de los tipos de diagramas que se usan en UML (Lenguaje Unificado de Modelado)";
 choices[71]= new Array();
 choices[71][0] = "Diagrama de colaboraci&oacute;n";
 choices[71][1] = "Diagrama de estados";
 choices[71][2] = "Diagrama de atributos";
 choices[71][3] = "Diagrama de distribuci&oacute;n";
 answers[71] = 2;
 units[71] = ['85'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 1824. ";
 preguntaids[71] = 1824


//  Id pregunta: 1834 Año de creación de pregunta: 2016
 questions[72]= "73)  Para establecer una comunicaci&oacute;n segura, el protocolo SSL usa:";
 choices[72]= new Array();
 choices[72][0] = "Una clave de sesi&oacute;n y un vector inicial";
 choices[72][1] = "Una clave de sesi&oacute;n";
 choices[72][2] = "Una clave p&uacute;blica y una privada";
 choices[72][3] = "Una clave sim&eacute;trica tipo Diffie-Hellman";
 answers[72] = 0;
 units[72] = ['120'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1834. ";
 preguntaids[72] = 1834


//  Id pregunta: 1792 Año de creación de pregunta: 2016
 questions[73]= "74)  Un ejemplo de servicio de interoperabilidad es el Servicio de Verificaci&oacute;n de Identidad. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Permite la verificaci&oacute;n de los datos de identidad de un ciudadano sin que &eacute;ste presente la fotocopia del documento de identidad para aportar al expediente.";
 choices[73][1] = "Se puede utilizar siempre que el ciudadano preste su consentimiento para ello.";
 choices[73][2] = "Es una informaci&oacute;n facilitada por la Direcci&oacute;n General de la Polic&iacute;a a trav&eacute;s de la Plataforma de intermediaci&oacute;n de la Administraci&oacute;n General del Estado.";
 choices[73][3] = "Se puede utilizar en cualquier momento de la tramitaci&oacute;n de un expediente administrativo, y por ser utilizado por una administraci&oacute;n p&uacute;blica no requiere consentimiento expreso del ciudadano.";
 answers[73] = 3;
 units[73] = ['43'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 1792. ";
 preguntaids[73] = 1792


//  Id pregunta: 1814 Año de creación de pregunta: 2016
 questions[74]= "75)  La arquitectura de una Aplicaci&oacute;n Web H&iacute;brida (Mashup) est&aacute; compuesta por diferentes partes. Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de esas partes.";
 choices[74]= new Array();
 choices[74][0] = "Sitio web";
 choices[74][1] = "Interface de usuario";
 choices[74][2] = "Servidor de aplicaciones";
 choices[74][3] = "Proveedor de contenidos";
 answers[74] = 2;
 units[74] = ['74'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1814. ";
 preguntaids[74] = 1814


