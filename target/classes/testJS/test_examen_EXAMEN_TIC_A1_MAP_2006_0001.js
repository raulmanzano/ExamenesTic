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
//  Id pregunta: 5904 Año de creación de pregunta: 2007
 questions[0]= "1)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[0]= new Array();
 choices[0][0] = "Diagramas de casos de uso.";
 choices[0][1] = "Diagramas de estados.";
 choices[0][2] = "Diagramas de interacci&oacute;n.";
 choices[0][3] = "Diagramas de flujo de datos.";
 answers[0] = 2;
 units[0] = ['88'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 5904. examen TIC 2006";
 preguntaids[0] = 5904


//  Id pregunta: 7582 Año de creación de pregunta: 2010
 questions[1]= "2)  En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[1]= new Array();
 choices[1][0] = "Contiene definiciones de todos los objetos de datos gestionados por el software.";
 choices[1][1] = "Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones.";
 choices[1][2] = "Almacena tan s&oacute;lo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos.";
 choices[1][3] = "Contiene procedimientos almacenados.";
 answers[1] = 0;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7582. Map 2006";
 preguntaids[1] = 7582


//  Id pregunta: 7606 Año de creación de pregunta: 2010
 questions[2]= "3)  El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de las TIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &laquo;Gesti&oacute;n de la Calidad&raquo; se encuentra definido en el dominio de:";
 choices[2]= new Array();
 choices[2][0] = "Alinear, Planificar y Organizar";
 choices[2][1] = "Construir, Adquirir e Implementar";
 choices[2][2] = "Entregar, dar Servicio y Soporte.";
 choices[2][3] = "Supervisar, Evaluar y Valorar";
 answers[2] = 0;
 units[2] = ['101'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 7606. Similar a Map 2006";
 preguntaids[2] = 7606


//  Id pregunta: 5910 Año de creación de pregunta: 2007
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[3]= new Array();
 choices[3][0] = "An&aacute;lisis de inventarios.";
 choices[3][1] = "Ingenier&iacute;a inversa.";
 choices[3][2] = "Ingenier&iacute;a directa.";
 choices[3][3] = "Ingenier&iacute;a relacional.";
 answers[3] = 3;
 units[3] = ['97'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 5910. examen TIC 2006";
 preguntaids[3] = 5910


//  Id pregunta: 7578 Año de creación de pregunta: 2010
 questions[4]= "5)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &laquo;Responsable del fichero o tratamiento&raquo;?";
 choices[4]= new Array();
 choices[4][0] = "Persona f&iacute;sica que decide sobre la finalidad, contenido, cesi&oacute;n y uso del tratamiento.";
 choices[4][1] = "Persona f&iacute;sica u &oacute;rgano administrativo, que decide sobre la finalidad, contenido, cesi&oacute;n y uso del tratamiento.";
 choices[4][2] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decide sobre la finalidad, contenido y uso del tratamiento.";
 choices[4][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica, servicio o cualquier otro organismo que, solo o conjuntamente con otros, trate datos personales.";
 answers[4] = 2;
 units[4] = ['35'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 7578. Map 2006";
 preguntaids[4] = 7578


//  Id pregunta: 7597 Año de creación de pregunta: 2010
 questions[5]= "6)  El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal establece para los ficheros temporales que:";
 choices[5]= new Array();
 choices[5][0] = "No se les aplica el citado reglamento, dado que se borran tras su utilizaci&oacute;n temporal.";
 choices[5][1] = "Deber&aacute;n cumplir el nivel de seguridad que les corresponda con arreglo a los criterios establecidos en el Reglamento.";
 choices[5][2] = "Les corresponde un nivel de seguridad bajo.";
 choices[5][3] = "Se mantendr&aacute;n almacenados durante un a&ntilde;o, incluidas sus copias de seguridad.";
 answers[5] = 1;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7597. Similar a Map 2006";
 preguntaids[5] = 7597


//  Id pregunta: 7625 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en J2EE (Java 2 Enterprise Edition)?";
 choices[6]= new Array();
 choices[6][0] = "WAR (Web Archive).";
 choices[6][1] = "EAR (Enterprise Archive).";
 choices[6][2] = "BAR (Bean Archive).";
 choices[6][3] = "JAR (Java Archive).";
 answers[6] = 2;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7625. Map 2006";
 preguntaids[6] = 7625


//  Id pregunta: 7584 Año de creación de pregunta: 2010
 questions[7]= "8)  El protocolo IPv6 Internet Protocol version 6:";
 choices[7]= new Array();
 choices[7][0] = "Tiene direcciones de red de 64 bits de longitud.";
 choices[7][1] = "Recomienda que si el datagrama tiene varias cabeceras de extensi&oacute;n, la cabecera de encaminamiento (routing header) aparezca siempre antes que la cabecera de opciones salto a salto (hop-by-hop header).";
 choices[7][2] = "Aunque su cabecera es m&aacute;s grande que la del protocolo IPv4 (Internet Protocol version 4), tiene menos campos. Esto hace que, por lo general, los routers (encaminadores) realicen menos procesamiento sobre los datagramas, consiguiendo as&iacute; un encaminamiento m&aacute;s eficiente.";
 choices[7][3] = "El campo etiqueta de flujo (flow label) basta para identificar un&iacute;vocamente a un flujo de paquetes.";
 answers[7] = 2;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7584. Map 2006";
 preguntaids[7] = 7584


//  Id pregunta: 7594 Año de creación de pregunta: 2010
 questions[8]= "9)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29. Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a la configuraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignable dentro de dicho rango?";
 choices[8]= new Array();
 choices[8][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[8][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada: 192.168.20.1.";
 choices[8][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.25.";
 choices[8][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada: 192.168.20.1.";
 answers[8] = 2;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7594. Map 2006";
 preguntaids[8] = 7594


//  Id pregunta: 7608 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java Web Start?";
 choices[9]= new Array();
 choices[9][0] = "Permite ejecutar aplicaciones independientemente de cu&aacute;l sea la plataforma cliente.";
 choices[9][1] = "Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente.";
 choices[9][2] = "Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridad del cliente.";
 choices[9][3] = "La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar los componentes actualizados.";
 answers[9] = 2;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7608. Map 2006";
 preguntaids[9] = 7608


//  Id pregunta: 7627 Año de creación de pregunta: 2010
 questions[10]= "11)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Para representar un fichero de 2 MB:";
 choices[10]= new Array();
 choices[10][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[10][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[10][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[10][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[10] = 2;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 7627. Map 2006";
 preguntaids[10] = 7627


//  Id pregunta: 7612 Año de creación de pregunta: 2010
 questions[11]= "12)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &laquo;Gesti&oacute;n de la Tecnolog&iacute;a&raquo; pertenece al criterio:";
 choices[11]= new Array();
 choices[11][0] = "Alianzas y recursos.";
 choices[11][1] = "Pol&iacute;tica y estrategia.";
 choices[11][2] = "Procesos.";
 choices[11][3] = "Resultados clave.";
 answers[11] = 0;
 units[11] = ['98'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 7612. Map 2006";
 preguntaids[11] = 7612


//  Id pregunta: 7596 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar las especificaciones de est&aacute;ndares en Internet?";
 choices[12]= new Array();
 choices[12][0] = "IESG (Internet Engineering Steering Group).";
 choices[12][1] = "IETF (Internet Engineering Task Force).";
 choices[12][2] = "IAB (Internet Architecture Board).";
 choices[12][3] = "IANA (Internet Assigned Number Authority).";
 answers[12] = 1;
 units[12] = ['48'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 7596. Map 2006";
 preguntaids[12] = 7596


//  Id pregunta: 5923 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[13]= new Array();
 choices[13][0] = "Objetos, casos de uso y actividades.";
 choices[13][1] = "Actores, objetos y relaciones.";
 choices[13][2] = "Casos de uso, actores y relaciones.";
 choices[13][3] = "Actores, casos de uso y actividades.";
 answers[13] = 2;
 units[13] = ['89'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 5923. examen TIC 2006";
 preguntaids[13] = 5923


//  Id pregunta: 5974 Año de creación de pregunta: 2007
 questions[14]= "15)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[14]= new Array();
 choices[14][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[14][1] = "Reestructuraci&oacute;n del software.";
 choices[14][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[14][3] = "Ingenier&iacute;a avanzada.";
 answers[14] = 1;
 units[14] = ['97'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 5974. examen TIC 2006";
 preguntaids[14] = 5974


//  Id pregunta: 7600 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[15]= new Array();
 choices[15][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 de dicha Ley.";
 choices[15][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de los se&ntilde;alados en &eacute;l.";
 choices[15][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley.";
 choices[15][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los medios aludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en el art&iacute;culo 21 de dicha Ley.";
 answers[15] = 2;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 7600. Similar a Map 2006";
 preguntaids[15] = 7600


//  Id pregunta: 7573 Año de creación de pregunta: 2010
 questions[16]= "17)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad/Relaci&oacute;n), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[16]= new Array();
 choices[16][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos.";
 choices[16][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo.";
 choices[16][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo.";
 choices[16][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece.";
 answers[16] = 2;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 7573. Map 2006";
 preguntaids[16] = 7573


//  Id pregunta: 7610 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[17]= new Array();
 choices[17][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo.";
 choices[17][1] = "Tiempo medio de cambio.";
 choices[17][2] = "Puntos de funci&oacute;n.";
 choices[17][3] = "N&uacute;mero de p&eacute;rdidas de integridad.";
 answers[17] = 2;
 units[17] = ['93'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7610. Map 2006";
 preguntaids[17] = 7610


//  Id pregunta: 7576 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and Electronics Engineers) 802.11 es cierta?";
 choices[18]= new Array();
 choices[18][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-Sequence Spread Spectrum).";
 choices[18][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-Hopping Spread Spectrum).";
 choices[18][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal FrequencyDivision Multiplexing).";
 choices[18][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing).";
 answers[18] = 0;
 units[18] = ['108'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 7576. Map 2006";
 preguntaids[18] = 7576


//  Id pregunta: 7581 Año de creación de pregunta: 2010
 questions[19]= "20)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3 de Quinlan)";
 choices[19]= new Array();
 choices[19][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a";
 choices[19][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n";
 choices[19][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado";
 choices[19][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas e inclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[19] = 1;
 units[19] = ['68'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7581. Map 2006";
 preguntaids[19] = 7581


//  Id pregunta: 7592 Año de creación de pregunta: 2010
 questions[20]= "21)  Dentro de la orientaci&oacute;n a objetos, &iquest;qu&eacute; t&eacute;rmino expresa que los datos de un objeto s&oacute;lo pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos?";
 choices[20]= new Array();
 choices[20][0] = "Reusabilidad.";
 choices[20][1] = "Encapsulaci&oacute;n.";
 choices[20][2] = "Persistencia.";
 choices[20][3] = "Herencia.";
 answers[20] = 1;
 units[20] = ['85'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 7592. Map 2006";
 preguntaids[20] = 7592


//  Id pregunta: 7616 Año de creación de pregunta: 2010
 questions[21]= "22)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos, &iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint).";
 choices[21][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones.";
 choices[21][2] = "Rollback de la transacci&oacute;n.";
 choices[21][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones.";
 answers[21] = 1;
 units[21] = ['60'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7616. Map 2006";
 preguntaids[21] = 7616


//  Id pregunta: 7623 Año de creación de pregunta: 2010
 questions[22]= "23)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientes protocolos:";
 choices[22]= new Array();
 choices[22][0] = "ARP (Address Resolution Protocol).";
 choices[22][1] = "RARP (Reverse Address Resolution Protocol).";
 choices[22][2] = "BOOTP (Bootstrap Protocol).";
 choices[22][3] = "IGMP (Internet Group Management Protocol).";
 answers[22] = 2;
 units[22] = ['112'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7623. Map 2006";
 preguntaids[22] = 7623


//  Id pregunta: 7591 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000, relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular el comercio electr&oacute;nico en el mercado interior?";
 choices[23]= new Array();
 choices[23][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas.";
 choices[23][1] = "Las comunicaciones comerciales.";
 choices[23][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios.";
 choices[23][3] = "Los contratos por v&iacute;a electr&oacute;nica.";
 answers[23] = 0;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 7591. Map 2006";
 preguntaids[23] = 7591


//  Id pregunta: 7586 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[24]= new Array();
 choices[24][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (International Telecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el par telef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logra mediante el empleo de unos filtros denominados &laquo;splitters&raquo;.";
 choices[24][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrierless Amplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos de estandarizaci&oacute;n se decantaron por esta &uacute;ltima.";
 choices[24][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5, que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access).";
 choices[24][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &laquo;G.Lite&raquo; o &laquo;ADSL Lite&raquo; es una variante de ADSL que proporciona menor caudal, pero tiene la ventaja de no requerir splitters.";
 answers[24] = 2;
 units[24] = ['106'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7586. Map 2006";
 preguntaids[24] = 7586


//  Id pregunta: 7620 Año de creación de pregunta: 2010
 questions[25]= "26)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neas de c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes 4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en el c&oacute;digo C el ratio es 128 LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[25]= new Array();
 choices[25][0] = "148";
 choices[25][1] = "250";
 choices[25][2] = "460";
 choices[25][3] = "210";
 answers[25] = 2;
 units[25] = ['94'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7620. Map 2006";
 preguntaids[25] = 7620


//  Id pregunta: 7599 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[26]= new Array();
 choices[26][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[26][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[26][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[26][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[26] = 2;
 units[26] = ['74'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7599. Map 2006";
 preguntaids[26] = 7599


//  Id pregunta: 7603 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes direcciones IP de host pertenece a cualquiera de los rangos de direcciones IP p&uacute;blicas?";
 choices[27]= new Array();
 choices[27][0] = "10.172.13.65";
 choices[27][1] = "172.16.223.125";
 choices[27][2] = "172.64.12.29";
 choices[27][3] = "192.168.23.252";
 answers[27] = 2;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7603. Map 2006";
 preguntaids[27] = 7603


//  Id pregunta: 7624 Año de creación de pregunta: 2010
 questions[28]= "29)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, define el Servicio Universal en su T&iacute;tulo III, como el conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible. En relaci&oacute;n a su prestaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[28]= new Array();
 choices[28][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia podr&aacute; designar uno o m&aacute;s operadores diferentes para la prestaci&oacute;n de los diversos elementos del servicio universal, de manera que quede cubierta la totalidad del territorio nacional.";
 choices[28][1] = "Corresponde su prestaci&oacute;n, en todo caso, al operador u operadores con poder significativo en aquellos mercados considerados de referencia en relaci&oacute;n al servicio considerado.";
 choices[28][2] = "El sistema de designaci&oacute;n de operadores encargados de garantizar la prestaci&oacute;n de los servicios, prestaciones y ofertas del servicio universal se establecer&aacute; mediante real decreto, y en todo caso, contemplar&aacute; un mecanismo de licitaci&oacute;n p&uacute;blica para dichos servicios, prestaciones y ofertas.";
 choices[28][3] = "Ninguna de las anteriores es cierta.";
 answers[28] = 2;
 units[28] = ['121'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7624. Similar a Map 2006";
 preguntaids[28] = 7624


//  Id pregunta: 7609 Año de creación de pregunta: 2010
 questions[29]= "30)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[29]= new Array();
 choices[29][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica.";
 choices[29][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos.";
 choices[29][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados.";
 choices[29][3] = "XML Schema no tiene tipos predefinidos.";
 answers[29] = 1;
 units[29] = ['68'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7609. Map 2006";
 preguntaids[29] = 7609


//  Id pregunta: 7572 Año de creación de pregunta: 2010
 questions[30]= "31)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos pueden tener un per&iacute;odo m&aacute;ximo de validez de:";
 choices[30]= new Array();
 choices[30][0] = "Dos a&ntilde;os.";
 choices[30][1] = "Cuatro a&ntilde;os.";
 choices[30][2] = "Cinco a&ntilde;os.";
 choices[30][3] = "La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica no establece expl&iacute;citamente un per&iacute;odo m&aacute;ximo de validez para este tipo de certificados.";
 answers[30] = 2;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7572. Similar a Map 2006";
 preguntaids[30] = 7572


//  Id pregunta: 7630 Año de creación de pregunta: 2010
 questions[31]= "32)  El modelo ITIL (Information Technology Infrastructure Library) se utiliza para identificar y administrar los servicios de tecnolog&iacute;as de la informaci&oacute;n que presta una organizaci&oacute;n. &iquest;Cu&aacute;l de los siguientes NO forma parte del conjunto de procesos y funciones identificados por ITIL?";
 choices[31]= new Array();
 choices[31][0] = "Gesti&oacute;n de incidencias.";
 choices[31][1] = "Gesti&oacute;n de la seguridad TI";
 choices[31][2] = "Gesti&oacute;n de aplicaciones.";
 choices[31][3] = "Desarrollo de aplicaciones.";
 answers[31] = 3;
 units[31] = ['101'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7630. Similar a Map 2006";
 preguntaids[31] = 7630


//  Id pregunta: 7595 Año de creación de pregunta: 2010
 questions[32]= "33)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN (Gateway GPRS Support Node)?";
 choices[32]= new Array();
 choices[32][0] = "La gesti&oacute;n de la movilidad.";
 choices[32][1] = "El cifrado y autenticaci&oacute;n.";
 choices[32][2] = "La conexi&oacute;n al HLR (Home Location Register).";
 choices[32][3] = "La conexi&oacute;n a los ISP (Internet Service Provider).";
 answers[32] = 3;
 units[32] = ['106'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7595. Map 2006";
 preguntaids[32] = 7595


//  Id pregunta: 7588 Año de creación de pregunta: 2010
 questions[33]= "34)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization).";
 choices[33][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation).";
 choices[33][2] = "SNA (System Network Architecture), de IBM.";
 choices[33][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union-Telecommunications).";
 answers[33] = 3;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7588. Map 2006";
 preguntaids[33] = 7588


//  Id pregunta: 7601 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[34]= new Array();
 choices[34][0] = "Objetos, casos de uso y actividades.";
 choices[34][1] = "Actores, objetos y relaciones.";
 choices[34][2] = "Casos de uso, actores y relaciones.";
 choices[34][3] = "Actores, casos de uso y actividades.";
 answers[34] = 2;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7601. Map 2006";
 preguntaids[34] = 7601


//  Id pregunta: 7615 Año de creación de pregunta: 2010
 questions[35]= "36)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[35]= new Array();
 choices[35][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &laquo;Permitir ordenaci&oacute;n&raquo; en el Generador de propiedades y generar una rutina de tratamiento del evento SortCommand.";
 choices[35][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculados por cada control en las plantillas del control DataList.";
 choices[35][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador de propiedades.";
 choices[35][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del control DataGrid.";
 answers[35] = 2;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7615. Map 2006";
 preguntaids[35] = 7615


//  Id pregunta: 7617 Año de creación de pregunta: 2010
 questions[36]= "37)  Sea un sistema de memoria virtual paginada con direcciones l&oacute;gicas de 32 bits que proporcionan un espacio virtual de 2^20 y con una memoria f&iacute;sica de 32 MB. &iquest;Cu&aacute;nto ocupar&aacute; la tabla de marcos de p&aacute;gina que emplea el sistema operativo si cada entrada de la misma ocupa 32 bits?";
 choices[36]= new Array();
 choices[36][0] = "32 kB.";
 choices[36][1] = "4 MB.";
 choices[36][2] = "1 MB.";
 choices[36][3] = "8 kB";
 answers[36] = 0;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 7617. Map 2006";
 preguntaids[36] = 7617


//  Id pregunta: 7587 Año de creación de pregunta: 2010
 questions[37]= "38)  Seg&uacute;n el RD 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas:";
 choices[37]= new Array();
 choices[37][0] = "No requieren la aplicaci&oacute;n de niveles de seguridad.";
 choices[37][1] = "Deben reunir las medidas calificadas como de nivel b&aacute;sico.";
 choices[37][2] = "Deben reunir las medidas calificadas como de nivel medio.";
 choices[37][3] = "Deben reunir las medidas calificadas como de nivel alto.";
 answers[37] = 2;
 units[37] = ['35'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 7587. Similar a Map 2006";
 preguntaids[37] = 7587


//  Id pregunta: 7589 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R({A,B,C,D}, {A--&gt;B, B--&gt;C, C--&gt;D})?";
 choices[38]= new Array();
 choices[38][0] = "Primera FN.";
 choices[38][1] = "Segunda FN.";
 choices[38][2] = "Tercera FN.";
 choices[38][3] = "FNBC (Forma Normal de Boyce-Codd).";
 answers[38] = 1;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7589. Map 2006";
 preguntaids[38] = 7589


//  Id pregunta: 7575 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) y UDP (User Datagram Protocol) es cierta?";
 choices[39]= new Array();
 choices[39][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores.";
 choices[39][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos.";
 choices[39][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP (Internet Protocol), que es un protocolo de red no fiable.";
 choices[39][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite.";
 answers[39] = 3;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 7575. Map 2006";
 preguntaids[39] = 7575


//  Id pregunta: 7619 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[40]= new Array();
 choices[40][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[40][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta.";
 choices[40][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International Standards Organization/International Electrotechnical Commission).";
 choices[40][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[40] = 1;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7619. Map 2006";
 preguntaids[40] = 7619


//  Id pregunta: 7636 Año de creación de pregunta: 2010
 questions[41]= "42)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, en lo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicaciones destinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea.";
 choices[41][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto la documentaci&oacute;n t&eacute;cnica y los manuales de uso del programa.";
 choices[41][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el uso colaborativo del software.";
 choices[41][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de los elementos de los programas de ordenador.";
 answers[41] = 1;
 units[41] = ['41'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 7636. Map 2006";
 preguntaids[41] = 7636


//  Id pregunta: 7585 Año de creación de pregunta: 2010
 questions[42]= "43)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[42]= new Array();
 choices[42][0] = "802.11e.";
 choices[42][1] = "802.11f.";
 choices[42][2] = "802.11h.";
 choices[42][3] = "802.11i.";
 answers[42] = 1;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7585. Map 2006";
 preguntaids[42] = 7585


//  Id pregunta: 7569 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[43]= new Array();
 choices[43][0] = "Multiling&uuml;ismo.";
 choices[43][1] = "Subsidiariedad.";
 choices[43][2] = "Eficiencia.";
 choices[43][3] = "Accesibilidad.";
 answers[43] = 2;
 units[43] = ['43'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 7569. Map 2006";
 preguntaids[43] = 7569


//  Id pregunta: 7590 Año de creación de pregunta: 2010
 questions[44]= "45)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[44]= new Array();
 choices[44][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[44][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[44][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[44][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[44] = 0;
 units[44] = ['61'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7590. Map 2006";
 preguntaids[44] = 7590


//  Id pregunta: 7568 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[45]= new Array();
 choices[45][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministro de Industria, Turismo y Comercio.";
 choices[45][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno.";
 choices[45][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa.";
 choices[45][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[45] = 2;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 7568. Map 2006";
 preguntaids[45] = 7568


//  Id pregunta: 7613 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 - Internet Control Message Protocol version 4?";
 choices[46]= new Array();
 choices[46][0] = "32";
 choices[46][1] = "64";
 choices[46][2] = "128";
 choices[46][3] = "256";
 answers[46] = 1;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7613. Map 2006";
 preguntaids[46] = 7613


//  Id pregunta: 5932 Año de creación de pregunta: 2007
 questions[47]= "48)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[47]= new Array();
 choices[47][0] = "Acoplamiento de control.";
 choices[47][1] = "Acoplamiento por estampado.";
 choices[47][2] = "Acoplamiento por contenido.";
 choices[47][3] = "Acoplamiento externo.";
 answers[47] = 2;
 units[47] = ['89'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 5932. examen TIC 2006";
 preguntaids[47] = 5932


//  Id pregunta: 7634 Año de creación de pregunta: 2010
 questions[48]= "49)  Seg&uacute;n lo establecido por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la realizaci&oacute;n de emisiones radioel&eacute;ctricas no autorizadas que vulneren o perjudiquen el desarrollo o implantaci&oacute;n de lo establecido en los Planes de utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico o en el Cuadro Nacional de Atribuci&oacute;n de Frecuencias:";
 choices[48]= new Array();
 choices[48][0] = "Es una infracci&oacute;n muy grave.";
 choices[48][1] = "Es una infracci&oacute;n grave.";
 choices[48][2] = "Es una infracci&oacute;n leve.";
 choices[48][3] = "No es una infracci&oacute;n.";
 answers[48] = 0;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7634. Similar a Map 2006";
 preguntaids[48] = 7634


//  Id pregunta: 7593 Año de creación de pregunta: 2010
 questions[49]= "50)  De acuerdo al apartado quinto de la Resoluci&oacute;n de 6 de febrero de 2006, de la Secretar&iacute;a General para la Administraci&oacute;n P&uacute;blica, por la que se aprueban directrices para el desarrollo de los programas del marco general para la mejora de la calidad, &iquest;cu&aacute;l de los siguientes es un modelo de gesti&oacute;n de calidad reconocido en la adaptaci&oacute;n realizada por el Ministerio de Administraciones P&uacute;blicas?";
 choices[49]= new Array();
 choices[49][0] = "ISO 9004:2000 de Calidad Estructural.";
 choices[49][1] = "UNE 7128-32 para la Gesti&oacute;n Continua de la Calidad.";
 choices[49][2] = "EFQM (European Foundation for Quality Management) de Excelencia.";
 choices[49][3] = "DEMING de Calidad Total.";
 answers[49] = 2;
 units[49] = ['98'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7593. Map 2006";
 preguntaids[49] = 7593


//  Id pregunta: 7583 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[50]= new Array();
 choices[50][0] = "An&aacute;lisis de Inventarios.";
 choices[50][1] = "Ingenier&iacute;a Inversa.";
 choices[50][2] = "Ingenier&iacute;a Directa.";
 choices[50][3] = "Ingenier&iacute;a Relacional.";
 answers[50] = 3;
 units[50] = ['97'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 7583. Map 2006";
 preguntaids[50] = 7583


//  Id pregunta: 7631 Año de creación de pregunta: 2010
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &laquo;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&raquo; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[51]= new Array();
 choices[51][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n.";
 choices[51][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n.";
 choices[51][2] = "Acuerdo de Nivel de Servicio.";
 choices[51][3] = "Plan de Mantenimiento.";
 answers[51] = 0;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 7631. Map 2006";
 preguntaids[51] = 7631


//  Id pregunta: 7618 Año de creación de pregunta: 2010
 questions[52]= "53)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[52]= new Array();
 choices[52][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadas sobre el software.";
 choices[52][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente los t&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor del producto.";
 choices[52][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara en programas distribuidos bajo licencia no GPL.";
 choices[52][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &laquo;Copyleft&raquo;.";
 answers[52] = 2;
 units[52] = ['66'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7618. Map 2006";
 preguntaids[52] = 7618


//  Id pregunta: 7605 Año de creación de pregunta: 2010
 questions[53]= "54)  En una aplicaci&oacute;n sobre Arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[53]= new Array();
 choices[53][0] = "En el servidor de aplicaciones.";
 choices[53][1] = "En el servidor de datos.";
 choices[53][2] = "En el cliente.";
 choices[53][3] = "En el servidor http/ssl (Hipertext Transfer Protocol/Secure Sockets Layer).";
 answers[53] = 0;
 units[53] = ['62'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7605. Map 2006";
 preguntaids[53] = 7605


//  Id pregunta: 7626 Año de creación de pregunta: 2010
 questions[54]= "55)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[54]= new Array();
 choices[54][0] = "Software libre.";
 choices[54][1] = "Software propietario.";
 choices[54][2] = "Software de dominio p&uacute;blico.";
 choices[54][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de las aplicaciones utilizadas para el ejercicio de potestades.";
 answers[54] = 1;
 units[54] = ['41'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 7626. Map 2006";
 preguntaids[54] = 7626


//  Id pregunta: 7579 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[55]= new Array();
 choices[55][0] = "Gu&iacute;a ETSI.";
 choices[55][1] = "Norma ETSI.";
 choices[55][2] = "Recomendaci&oacute;n ETSI.";
 choices[55][3] = "Especificaci&oacute;n t&eacute;cnica ETSI.";
 answers[55] = 2;
 units[55] = ['48'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7579. Map 2006";
 preguntaids[55] = 7579


//  Id pregunta: 7629 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[56]= new Array();
 choices[56][0] = "Modo ECB (Electronic Code Book Mode).";
 choices[56][1] = "Modo CFB (Cipher Feedback Mode).";
 choices[56][2] = "Modo BBM (Bit Block Mode).";
 choices[56][3] = "Modo CBC (Cipher Block Chaining Mode).";
 answers[56] = 2;
 units[56] = ['76'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7629. Map 2006";
 preguntaids[56] = 7629


//  Id pregunta: 7604 Año de creación de pregunta: 2010
 questions[57]= "58)  Una red ATM (Asynchronous Transfer Mode):";
 choices[57]= new Array();
 choices[57][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes.";
 choices[57][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real.";
 choices[57][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuar funciones de encaminamiento de las c&eacute;lulas.";
 choices[57][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas.";
 answers[57] = 2;
 units[57] = ['107'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7604. Map 2006";
 preguntaids[57] = 7604


//  Id pregunta: 7602 Año de creación de pregunta: 2010
 questions[58]= "59)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, &iquest;c&oacute;mo se punt&uacute;a el subcriterio 9b, &laquo;Indicadores Clave del Rendimiento de la Organizaci&oacute;n&raquo;, en el proceso de autoevaluaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "Entre 0 y 100 y se multiplica por 0,50.";
 choices[58][1] = "Entre 0 y 100 y se multiplica por 0,25.";
 choices[58][2] = "Entre 0 y 50 y se multiplica por 0,50.";
 choices[58][3] = "Entre 0 y 50 y se multiplica por 0,25.";
 answers[58] = 0;
 units[58] = ['98'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 7602. Map 2006";
 preguntaids[58] = 7602


//  Id pregunta: 7571 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes NO es uno de los 14 paquetes de nivel superior que se establecen en la norma 19115 de ISO (International Standards Organization) sobre metadatos de un sistema GIS (Geographycal Information System)?";
 choices[59]= new Array();
 choices[59][0] = "Informaci&oacute;n sobre restricciones.";
 choices[59][1] = "Informaci&oacute;n sobre formato.";
 choices[59][2] = "Informaci&oacute;n sobre extensi&oacute;n.";
 choices[59][3] = "Informaci&oacute;n sobre contenidos.";
 answers[59] = 1;
 units[59] = ['71'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7571. Map 2006";
 preguntaids[59] = 7571


//  Id pregunta: 7574 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[60]= new Array();
 choices[60][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo.";
 choices[60][1] = "EUROMARC es la versi&oacute;n europea de dicho formato.";
 choices[60][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60.";
 choices[60][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic Description).";
 answers[60] = 2;
 units[60] = ['68'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 7574. Map 2006";
 preguntaids[60] = 7574


//  Id pregunta: 7570 Año de creación de pregunta: 2010
 questions[61]= "62)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema a otro usuario?";
 choices[61]= new Array();
 choices[61][0] = "CONNECT y RESOURCE.";
 choices[61][1] = "DBA.";
 choices[61][2] = "GRANT ANY ROLE.";
 choices[61][3] = "SELECT ANY TABLE.";
 answers[61] = 2;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 7570. Map 2006";
 preguntaids[61] = 7570


//  Id pregunta: 7577 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[62]= new Array();
 choices[62][0] = "Diagramas de casos de uso.";
 choices[62][1] = "Diagramas de estados.";
 choices[62][2] = "Diagramas de interacci&oacute;n.";
 choices[62][3] = "Diagramas de flujo de datos.";
 answers[62] = 2;
 units[62] = ['86'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 7577. Map 2006";
 preguntaids[62] = 7577


//  Id pregunta: 7611 Año de creación de pregunta: 2010
 questions[63]= "64)  En el dise&ntilde;o estructurado, &iquest;qu&eacute; tipo de acoplamiento sucede cuando un m&oacute;dulo debe utilizar datos e informaci&oacute;n de control internos de otro m&oacute;dulo?";
 choices[63]= new Array();
 choices[63][0] = "Acoplamiento de control.";
 choices[63][1] = "Acoplamiento por estampado.";
 choices[63][2] = "Acoplamiento por contenido.";
 choices[63][3] = "Acoplamiento externo.";
 answers[63] = 2;
 units[63] = ['85'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 7611. Map 2006";
 preguntaids[63] = 7611


//  Id pregunta: 7580 Año de creación de pregunta: 2010
 questions[64]= "65)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[64]= new Array();
 choices[64][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, debe existir un valor de K en R1 cuyo valor sea igual al valor de A.";
 choices[64][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K.";
 choices[64][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo.";
 choices[64][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo.";
 answers[64] = 1;
 units[64] = ['61'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7580. Map 2006";
 preguntaids[64] = 7580


//  Id pregunta: 7598 Año de creación de pregunta: 2010
 questions[65]= "66)  Seg&uacute;n la norma espa&ntilde;ola UNE 66-904, que recoge los costes totales de calidad, el &laquo;coste resultante de un bien o servicio que no cumple los requisitos de calidad, y cuyo fallo se pone de manifiesto antes de su entrega&raquo;, es un:";
 choices[65]= new Array();
 choices[65][0] = "Costes de prevenci&oacute;n";
 choices[65][1] = "Coste de fallos internos";
 choices[65][2] = "Coste de evaluaci&oacute;n";
 choices[65][3] = "Coste de fallos externos";
 answers[65] = 2;
 units[65] = ['93'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7598. Map 2006";
 preguntaids[65] = 7598


//  Id pregunta: 7632 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (Joint Photographic Experts Group)?";
 choices[66]= new Array();
 choices[66][0] = "B&aacute;sico/secuencial.";
 choices[66][1] = "Jer&aacute;rquico.";
 choices[66][2] = "Progresivo.";
 choices[66][3] = "Conjugado modificado.";
 answers[66] = 3;
 units[66] = ['80'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7632. Map 2006";
 preguntaids[66] = 7632


//  Id pregunta: 7607 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[67]= new Array();
 choices[67][0] = "No precisa se&ntilde;al de reloj externa.";
 choices[67][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros.";
 choices[67][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas.";
 choices[67][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus.";
 answers[67] = 1;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7607. Map 2006";
 preguntaids[67] = 7607


//  Id pregunta: 5898 Año de creación de pregunta: 2007
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes NO es uno de los 14 paquetes de nivel superior que se establecen en la norma 19115 de ISO (International Standards Organization) sobre metadatos de un sistema GIS (Geographycal Information System)?";
 choices[68]= new Array();
 choices[68][0] = "Informaci&oacute;n sobre restricciones.";
 choices[68][1] = "Informaci&oacute;n sobre formato.";
 choices[68][2] = "Informaci&oacute;n sobre extensi&oacute;n.";
 choices[68][3] = "Informaci&oacute;n sobre contenidos.";
 answers[68] = 1;
 units[68] = ['71'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 5898. TIC A1, examen 2006";
 preguntaids[68] = 5898


//  Id pregunta: 7614 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[69]= new Array();
 choices[69][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas de tiempo real.";
 choices[69][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y v&iacute;deo interactivos.";
 choices[69][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889.";
 choices[69][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol) con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece este protocolo.";
 answers[69] = 0;
 units[69] = ['110'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7614. Map 2006";
 preguntaids[69] = 7614


//  Id pregunta: 7635 Año de creación de pregunta: 2010
 questions[70]= "71)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase applet:";
 choices[70]= new Array();
 choices[70][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start.";
 choices[70][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n.";
 choices[70][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet.";
 choices[70][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente.";
 answers[70] = 1;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 7635. Map 2006";
 preguntaids[70] = 7635


//  Id pregunta: 7633 Año de creación de pregunta: 2010
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[71]= new Array();
 choices[71][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[71][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[71][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[71][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[71] = 2;
 units[71] = ['104'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 7633. Map 2006";
 preguntaids[71] = 7633


//  Id pregunta: 7628 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[72]= new Array();
 choices[72][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[72][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[72][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[72][3] = "La arquitectura de componentes de GNOME estaba basada en Bonobo, pero en la actualidad se considera obsoleta";
 answers[72] = 0;
 units[72] = ['57'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7628. Similar a Map 2006";
 preguntaids[72] = 7628


//  Id pregunta: 7622 Año de creación de pregunta: 2010
 questions[73]= "74)  De entre las t&eacute;cnicas de compresi&oacute;n de im&aacute;genes digitales por codificaci&oacute;n predictiva en las que se elimina la redundancia entre p&iacute;xeles consecutivos, aquella que forma una predicci&oacute;n del p&iacute;xel a codificar en funci&oacute;n de los p&iacute;xeles ya codificados y guarda el error de predicci&oacute;n cuantificado, recibe el nombre de:";
 choices[73]= new Array();
 choices[73][0] = "Dithering.";
 choices[73][1] = "RLE (Run Length Encoding).";
 choices[73][2] = "Bit Plane.";
 choices[73][3] = "DPCM (Differential Pulse Code Modulation).";
 answers[73] = 3;
 units[73] = ['80'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7622. Map 2006";
 preguntaids[73] = 7622


//  Id pregunta: 7621 Año de creación de pregunta: 2010
 questions[74]= "75)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &laquo;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&raquo; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[74]= new Array();
 choices[74][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos.";
 choices[74][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos.";
 choices[74][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos.";
 choices[74][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos.";
 answers[74] = 3;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7621. Map 2006";
 preguntaids[74] = 7621


