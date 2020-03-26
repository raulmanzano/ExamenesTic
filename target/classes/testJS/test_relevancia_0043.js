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
//  Id pregunta: 7736 Año de creación de pregunta: 2010
 questions[0]= "1)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[0]= new Array();
 choices[0][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministro de Industria, Turismo y Comercio.";
 choices[0][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno.";
 choices[0][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa.";
 choices[0][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[0] = 2;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 7736. ";
 preguntaids[0] = 7736


//  Id pregunta: 1142 Año de creación de pregunta: 2016
 questions[1]= "2)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[1]= new Array();
 choices[1][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[1][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[1][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[1][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[1] = 0;
 units[1] = ['91'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 1142. ";
 preguntaids[1] = 1142


//  Id pregunta: 8363 Año de creación de pregunta: 2011
 questions[2]= "3)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[2]= new Array();
 choices[2][0] = "Insercci&oacute;n";
 choices[2][1] = "Burbuja";
 choices[2][2] = "Selecci&oacute;n";
 choices[2][3] = "Combinaci&oacute;n";
 answers[2] = 1;
 units[2] = ['67', '68'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8363. Analista Ayto. Madrid 2010";
 preguntaids[2] = 8363


//  Id pregunta: 1663 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale c&oacute;mo se denomina el proceso que administra el almacenamiento en un sistema de directorio electr&oacute;nico:";
 choices[3]= new Array();
 choices[3][0] = "DSA";
 choices[3][1] = "UPN";
 choices[3][2] = "DSE";
 choices[3][3] = "DAP";
 answers[3] = 0;
 units[3] = ['77'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1663. ";
 preguntaids[3] = 1663


//  Id pregunta: 10702 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[4]= new Array();
 choices[4][0] = "Hive";
 choices[4][1] = "Cassandra";
 choices[4][2] = "Hbase";
 choices[4][3] = "ZoneKeeper";
 answers[4] = 2;
 units[4] = ['73'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10702. ";
 preguntaids[4] = 10702


//  Id pregunta: 9818 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;Cu&aacute;l de &eacute;stas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[5]= new Array();
 choices[5][0] = "DER";
 choices[5][1] = "CERT";
 choices[5][2] = "PME";
 choices[5][3] = "Ninguno de los anteriores.";
 answers[5] = 0;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 9818. ";
 preguntaids[5] = 9818


//  Id pregunta: 1313 Año de creación de pregunta: 2016
 questions[6]= "7)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[6]= new Array();
 choices[6][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (5.1).";
 choices[6][1] = "Las actividades que intervienen en el desarrollo de un S.L";
 choices[6][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un 5.1.";
 choices[6][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un 5.1.";
 answers[6] = 2;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1313. ";
 preguntaids[6] = 1313


//  Id pregunta: 7163 Año de creación de pregunta: 2010
 questions[7]= "8)  Generalmente el auditor inform&aacute;tico elevar&aacute; su informe a";
 choices[7]= new Array();
 choices[7][0] = "La direcci&oacute;n de la Organizaci&oacute;n";
 choices[7][1] = "La direcci&oacute;n de Inform&aacute;tica";
 choices[7][2] = "La direcci&oacute;n del departamento que este auditando";
 choices[7][3] = "Al Departamento de Asuntos Econ&oacute;micos";
 answers[7] = 0;
 units[7] = ['36'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 7163. Castilla La Mancha 2009";
 preguntaids[7] = 7163


//  Id pregunta: 967 Año de creación de pregunta: 2016
 questions[8]= "9)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[8]= new Array();
 choices[8][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[8][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[8][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[8][3] = "todas son correctas";
 answers[8] = 3;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 967. Ley 40/2015";
 preguntaids[8] = 967


//  Id pregunta: 2862 Año de creación de pregunta: 2002
 questions[9]= "10)  En un sistema de informaci&oacute;n geogr&aacute;fica tipo r&aacute;ster, indique cu&aacute;l de las siguientes es una operaci&oacute;n con varias capas:";
 choices[9]= new Array();
 choices[9][0] = "Vectorizaci&oacute;n.";
 choices[9][1] = "Filtrado.";
 choices[9][2] = "Scanning.";
 choices[9][3] = "Overlay.";
 answers[9] = 3;
 units[9] = ['71'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2862. ";
 preguntaids[9] = 2862


//  Id pregunta: 2023 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas sobre el sistema operativo Unix es falsa?:";
 choices[10]= new Array();
 choices[10][0] = "Fue escrito en los laboratorios Bell de ATT por Ken Thompson en 1969";
 choices[10][1] = "Ultrix es una versi&oacute;n modificada del Unix comercializada por un determinado fabricante de sistemas inform&aacute;ticos";
 choices[10][2] = "Es el sistema operativo con mayor cantidad de software ofim&aacute;tico desarrollado para &eacute;l";
 choices[10][3] = "La Universidad de Berkeley adapt&oacute; una versi&oacute;n ampliamente utilizada en los primeros a&ntilde;os en los ambientes universitarios";
 answers[10] = 2;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2023. ";
 preguntaids[10] = 2023


//  Id pregunta: 10454 Año de creación de pregunta: 2015
 questions[11]= "12)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[11]= new Array();
 choices[11][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[11][1] = "Notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[11][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[11][3] = "Todas son verdaderas.";
 answers[11] = 2;
 units[11] = ['77'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10454. ";
 preguntaids[11] = 10454


//  Id pregunta: 8084 Año de creación de pregunta: 2011
 questions[12]= "13)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[12]= new Array();
 choices[12][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[12][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[12][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[12][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[12] = 0;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8084. Analista Ayto. Madrid 2010";
 preguntaids[12] = 8084


//  Id pregunta: 5134 Año de creación de pregunta: 2003
 questions[13]= "14)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[13]= new Array();
 choices[13][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[13][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[13][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[13][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[13] = 0;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5134. Junta Andaluc&iacute;a";
 preguntaids[13] = 5134


//  Id pregunta: 10633 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n la Ley 9/2014, los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas tendr&aacute;n derecho a:";
 choices[14]= new Array();
 choices[14][0] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea en las llamadas que genere, mediante procedimiento sencillo y gratuito.";
 choices[14][1] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea origen en las llamadas entrantes, mediante un procedimiento sencillo y gratuito.";
 choices[14][2] = "Rechazar las llamadas entrantes en que la l&iacute;nea origen no aparezca identificada, mediante un procedimiento sencillo y gratuito.";
 choices[14][3] = "Todas las anteriores.";
 answers[14] = 3;
 units[14] = ['121'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 10633. Articulo 47";
 preguntaids[14] = 10633


//  Id pregunta: 6736 Año de creación de pregunta: 2009
 questions[15]= "16)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[15]= new Array();
 choices[15][0] = "GPRS";
 choices[15][1] = "UMTS";
 choices[15][2] = "GSM";
 choices[15][3] = "DECT";
 answers[15] = 1;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6736. MAP 2008 A1";
 preguntaids[15] = 6736


//  Id pregunta: 4810 Año de creación de pregunta: 2002
 questions[16]= "17)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[16]= new Array();
 choices[16][0] = "P&aacute;ginas Web-HTTP";
 choices[16][1] = "Correo electr&oacute;nico-SNMP";
 choices[16][2] = "Grupos de noticias-NNTP";
 choices[16][3] = "Transferencia de ficheros-FTP";
 answers[16] = 1;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 4810. ";
 preguntaids[16] = 4810


//  Id pregunta: 1416 Año de creación de pregunta: 2016
 questions[17]= "18)  La Constituci&oacute;n Espa&ntilde;ola de 1978 se estructura en :";
 choices[17]= new Array();
 choices[17][0] = "169 art&iacute;culos, 9 disposiciones adicionales, 4 transitorias, 1 disposici&oacute;n final.";
 choices[17][1] = "167 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 choices[17][2] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 2 disposiciones finales.";
 choices[17][3] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 answers[17] = 3;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 1416. ";
 preguntaids[17] = 1416


//  Id pregunta: 5471 Año de creación de pregunta: 2007
 questions[18]= "19)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[18]= new Array();
 choices[18][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[18][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[18][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[18][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[18] = 0;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 5471. ";
 preguntaids[18] = 5471


//  Id pregunta: 1033 Año de creación de pregunta: 2016
 questions[19]= "20)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[19]= new Array();
 choices[19][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[19][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[19][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[19][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[19] = 2;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 1033. Ley 40/2015";
 preguntaids[19] = 1033


//  Id pregunta: 10807 Año de creación de pregunta: 2015
 questions[20]= "21)  Un ejemplo de cliente de correo electr&oacute;nico de SW libre es:";
 choices[20]= new Array();
 choices[20][0] = "Amarok";
 choices[20][1] = "Firefox";
 choices[20][2] = "KeePass";
 choices[20][3] = "Thunderbird";
 answers[20] = 3;
 units[20] = ['66'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10807. ";
 preguntaids[20] = 10807


//  Id pregunta: 5060 Año de creación de pregunta: 2002
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[21]= new Array();
 choices[21][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[21][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[21][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[21][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[21] = 2;
 units[21] = ['112'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5060. ";
 preguntaids[21] = 5060


//  Id pregunta: 10629 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n la Ley 9/2014, un usuario final podr&aacute; resolver un contrato de redes y servicios de telecomunicaciones:";
 choices[22]= new Array();
 choices[22][0] = "Solo al finalizar el contrato";
 choices[22][1] = "Anticipadamente con penalizaci&oacute;n";
 choices[22][2] = "Anticipadamente sin penalizaci&oacute;n.";
 choices[22][3] = "Ninguna de las anteriores.";
 answers[22] = 3;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 10629. Articulo 47. Sin penalizaci&oacute;n en el supuesto de modificaci&oacute;n de las condiciones.";
 preguntaids[22] = 10629


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[23]= "24)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[23]= new Array();
 choices[23][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[23][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[23][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[23][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[23] = 1;
 units[23] = ['14'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 392. Pol&iacute;ticas de igualdad";
 preguntaids[23] = 392


//  Id pregunta: 6782 Año de creación de pregunta: 2010
 questions[24]= "25)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[24]= new Array();
 choices[24][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[24][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[24][2] = "Todos los datos relativos a una persona";
 choices[24][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[24] = 3;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 6782. Castilla La Mancha 2009";
 preguntaids[24] = 6782


//  Id pregunta: 4566 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes protocolos reporta los problemas de entrega y encaminamiento en IP?:";
 choices[25]= new Array();
 choices[25][0] = "TCP";
 choices[25][1] = "ICMP";
 choices[25][2] = "RIP";
 choices[25][3] = "UDP";
 answers[25] = 1;
 units[25] = ['109'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4566. ";
 preguntaids[25] = 4566


//  Id pregunta: 4076 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;En q&uacute;e proceso de M&eacute;trica V3 se llevaria a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procesamientos de migraci&oacute;n y carga inicial de datos?";
 choices[26]= new Array();
 choices[26][0] = "CSI.";
 choices[26][1] = "DSI";
 choices[26][2] = "IAS.";
 choices[26][3] = "DCS.";
 answers[26] = 0;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4076. EXAMEN CASTILLA LA MANCHA";
 preguntaids[26] = 4076


//  Id pregunta: 5286 Año de creación de pregunta: 2006
 questions[27]= "28)  &iquest;Qu&eacute; tecnolog&iacute;a es util para crear interfaces de usuario?";
 choices[27]= new Array();
 choices[27][0] = "JSF";
 choices[27][1] = "AJAX";
 choices[27][2] = "Ambas son utiles para crear interface de usuario";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 2;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 5286. ";
 preguntaids[27] = 5286


//  Id pregunta: 1946 Año de creación de pregunta: 2016
 questions[28]= "29)  Las herramientas de miner&iacute;a de datos:";
 choices[28]= new Array();
 choices[28][0] = "Se utilizan en entornos altamente transaccionales.";
 choices[28][1] = "Emplean m&eacute;todos de b&uacute;squeda por asociaciones, secuencias, clasificaciones, pron&oacute;sticos, y/o agrupamientos.";
 choices[28][2] = "Trabajan exclusivamente con bases de datos Oracle y Adabas.";
 choices[28][3] = "Se denominan tambi&eacute;n sistemas OLTP.";
 answers[28] = 1;
 units[28] = ['72'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1946. ";
 preguntaids[28] = 1946


//  Id pregunta: 9530 Año de creación de pregunta: 2014
 questions[29]= "30)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[29]= new Array();
 choices[29][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[29][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[29][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[29][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[29] = 0;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9530. ";
 preguntaids[29] = 9530


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[30]= "31)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[30]= new Array();
 choices[30][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[30][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[30][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[30][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[30] = 3;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[30] = 10052


//  Id pregunta: 1000 Año de creación de pregunta: 2016
 questions[31]= "32)  Los Secretarios generales t&eacute;cnicos:";
 choices[31]= new Array();
 choices[31][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[31][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[31][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[31][3] = "todas son correctas";
 answers[31] = 3;
 units[31] = ['4', '7', '8', '9'];
 blocks[31] = ['A1', 'A2'];
 comments[31] = "Id Pregunta: 1000. Ley 40/2015";
 preguntaids[31] = 1000


//  Id pregunta: 1673 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, la realizaci&oacute;n de una auditor&iacute;a interna o externa que verifique el cumplimiento del reglamento es una medida de seguridad de:";
 choices[32]= new Array();
 choices[32][0] = "Nivel bajo para ficheros y tratamientos automatizados y nivel medio para ficheros y tratamientos no automatizados.";
 choices[32][1] = "Nivel medio para ficheros y tratamientos automatizados y nivel medio para ficheros y tratamientos no automatizados.";
 choices[32][2] = "Nivel bajo para ficheros y tratamientos automatizados y no est&aacute; contemplado para ficheros y tratamientos no automatizados.";
 choices[32][3] = "Nivel medio para ficheros y tratamientos automatizados y no est&aacute; contemplada para ficheros y tratamientos no automatizados.";
 answers[32] = 1;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 1673. ";
 preguntaids[32] = 1673


//  Id pregunta: 7216 Año de creación de pregunta: 2010
 questions[33]= "34)  El sistema operativo Ubuntu est&aacute; desarrollado por:";
 choices[33]= new Array();
 choices[33][0] = "Red Hat";
 choices[33][1] = "Novell";
 choices[33][2] = "Canonical";
 choices[33][3] = "MIT";
 answers[33] = 2;
 units[33] = ['57'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 7216. ";
 preguntaids[33] = 7216


//  Id pregunta: 980 Año de creación de pregunta: 2016
 questions[34]= "35)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3 de la ley 40/2015, as&iacute; como los de:";
 choices[34]= new Array();
 choices[34][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[34][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[34][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[34][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[34] = 2;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 980. Ley 40/2015";
 preguntaids[34] = 980


//  Id pregunta: 8685 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[35]= new Array();
 choices[35][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[35][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[35][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[35][3] = "Todas las anteriores son correctas.";
 answers[35] = 0;
 units[35] = ['57'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8685. ";
 preguntaids[35] = 8685


//  Id pregunta: 3173 Año de creación de pregunta: 2002
 questions[36]= "37)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID-3 se caracterizan por:";
 choices[36]= new Array();
 choices[36][0] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad en un disco dedicado";
 choices[36][1] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad distribuido";
 choices[36][2] = "Garantizar la disponibilidad de los datos mediante la redundancia completa en discos espejo";
 choices[36][3] = "Garantizar la disponibilidad de los datos mediante el control de paridad redundante";
 answers[36] = 0;
 units[36] = ['53'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3173. ";
 preguntaids[36] = 3173


//  Id pregunta: 7856 Año de creación de pregunta: 2011
 questions[37]= "38)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[37]= new Array();
 choices[37][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[37][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[37][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[37][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[37] = 2;
 units[37] = ['86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 7856. Examen TIC A1 2010";
 preguntaids[37] = 7856


//  Id pregunta: 2088 Año de creación de pregunta: 2002
 questions[38]= "39)  El benchmark es adecuado cuando:";
 choices[38]= new Array();
 choices[38][0] = "Vamos a adquirir aplicaciones a medida";
 choices[38][1] = "Los entornos de las diversas opciones difieren";
 choices[38][2] = "Queremos desarrollar un proyecto innovador";
 choices[38][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[38] = 3;
 units[38] = ['39'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2088. ";
 preguntaids[38] = 2088


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[39]= new Array();
 choices[39][0] = "El Consejo Europeo.";
 choices[39][1] = "El Parlamento Europeo.";
 choices[39][2] = "El Consejo.";
 choices[39][3] = "La Comisi&oacute;n.";
 answers[39] = 3;
 units[39] = ['5'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 184. Uni&oacute;n Europea";
 preguntaids[39] = 184


//  Id pregunta: 989 Año de creación de pregunta: 2016
 questions[40]= "41)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[40]= new Array();
 choices[40][0] = "los Ministros y los Secretarios de Estado";
 choices[40][1] = "los Subsecretarios y Secretarios generales";
 choices[40][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[40][3] = "los Directores generales";
 answers[40] = 2;
 units[40] = ['4', '7', '8', '9'];
 blocks[40] = ['A1', 'A2'];
 comments[40] = "Id Pregunta: 989. Ley 40/2015";
 preguntaids[40] = 989


//  Id pregunta: 6750 Año de creación de pregunta: 2009
 questions[41]= "42)  La Ley 9/2014, General de Telecomunicaciones, establece los derechos de los consumidores y usuarios finales. &iquest;Cu&aacute;l de entre los siguientes apartados NO es contemplado por dicha ley como un derecho del usuario individual?";
 choices[41]= new Array();
 choices[41][0] = "Introducir cl&aacute;usulas de modificaci&oacute;n de los contratos con los operadores, para evitar un trato abusivo";
 choices[41][1] = "A recibir facturas no desglosadas cuando as&iacute; lo solicitasen";
 choices[41][2] = "A detener el desv&iacute;o autom&aacute;tico de llamadas efectuado a su terminal por parte de un tercero";
 choices[41][3] = "A impedir, mediante un procedimiento sencillo y gratuito, la prestaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en la llamadas entrantes y a rechazar las llamadas en que dicha l&iacute;nea no aparezca identificada";
 answers[41] = 0;
 units[41] = ['121'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 6750. MAP 2008 A1";
 preguntaids[41] = 6750


//  Id pregunta: 2367 Año de creación de pregunta: 2004
 questions[42]= "43)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[42]= new Array();
 choices[42][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[42][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[42][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[42][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[42] = 2;
 units[42] = ['35'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2367. ";
 preguntaids[42] = 2367


//  Id pregunta: 1438 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n lo establecido en la LOPD en su Titulo II &iquest;Cu&aacute;l de los siguientes es un principio de la protecci&oacute;n de datos?:";
 choices[43]= new Array();
 choices[43][0] = "Calidad de los datos.";
 choices[43][1] = "Impugnaci&oacute;n de valoraciones.";
 choices[43][2] = "Derecho de acceso.";
 choices[43][3] = "Derecho a indemnizaci&oacute;n.";
 answers[43] = 0;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 1438. ";
 preguntaids[43] = 1438


//  Id pregunta: 1258 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[44]= new Array();
 choices[44][0] = "Indirecta.";
 choices[44][1] = "Directa.";
 choices[44][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[44][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[44] = 1;
 units[44] = ['14'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 1258. ";
 preguntaids[44] = 1258


//  Id pregunta: 6519 Año de creación de pregunta: 2003
 questions[45]= "46)  De los siguientes ataques, cu&aacute;l se corresponde con la obtenci&oacute;n de informaci&oacute;n de una red sin modificar la informaci&oacute;n";
 choices[45]= new Array();
 choices[45][0] = "Explot";
 choices[45][1] = "Snooping";
 choices[45][2] = "Wardriving";
 choices[45][3] = "Teardrop";
 answers[45] = 1;
 units[45] = ['120'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 6519. ";
 preguntaids[45] = 6519


//  Id pregunta: 10343 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T para infraestructuras de claves p&uacute;blicas?";
 choices[46]= new Array();
 choices[46][0] = "X.500";
 choices[46][1] = "X.509v3";
 choices[46][2] = "X.CRL";
 choices[46][3] = "OCSP";
 answers[46] = 1;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10343. X.500 es un conjunto de est&aacute;ndares de la ITU-T sobre servicios de directorio";
 preguntaids[46] = 10343


//  Id pregunta: 5036 Año de creación de pregunta: 2002
 questions[47]= "48)  Respecto a las Infraestructuras Comunes de Telecomunicaciones (ICTs):";
 choices[47]= new Array();
 choices[47][0] = "Pueden ser llevadas a cabo y firmadas por cualquier persona independientemente de su formaci&oacute;n acad&eacute;mica";
 choices[47][1] = "&Uacute;nicamente pueden ser firmadas por ingenieros de telecomunicaci&oacute;n, y deben ser visadas por el Colegio de Ingenieros de Telecomunicaci&oacute;n";
 choices[47][2] = "Tienen distinta legislaci&oacute;n en Espa&ntilde;a seg&uacute;n la comunidad aut&oacute;noma de que se trate";
 choices[47][3] = "Nada de lo anterior es cierto";
 answers[47] = 1;
 units[47] = ['121'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5036. ";
 preguntaids[47] = 5036


//  Id pregunta: 10533 Año de creación de pregunta: 2015
 questions[48]= "49)  En relaci&oacute;n con los diagramas de casos de uso, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[48]= new Array();
 choices[48][0] = "Las relaciones entre casos de uso y actores pueden ser de tipo usa o extiende";
 choices[48][1] = "Las relaciones s&oacute;lo pueden ser entre actores y casos de uso";
 choices[48][2] = "Los elementos principales son: casos de uso, relaciones, actores y extensiones";
 choices[48][3] = "M&eacute;trica no contempla su uso";
 answers[48] = 2;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 10533. ";
 preguntaids[48] = 10533


//  Id pregunta: 6885 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[49]= new Array();
 choices[49][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[49][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia.";
 choices[49][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[49][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[49] = 3;
 units[49] = ['35'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 6885. TIC A 2009";
 preguntaids[49] = 6885


//  Id pregunta: 8035 Año de creación de pregunta: 2011
 questions[50]= "51)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[50]= new Array();
 choices[50][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[50][1] = "Comprueban la funcionalidad de un programa.";
 choices[50][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[50][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[50] = 3;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 8035. Examen TIC A2 2010";
 preguntaids[50] = 8035


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[51]= new Array();
 choices[51][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[51][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[51][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[51][3] = "El Senado se compone de 350 senadores.";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 39. Constituci&oacute;n de 1978";
 preguntaids[51] = 39


//  Id pregunta: 5747 Año de creación de pregunta: 2007
 questions[52]= "53)  Cual de los siguientes servicios o redes est&aacute;n sujetos al &aacute;mbito de aplicaci&oacute;n de la Ley 9/2014 General de Telecomunicaciones";
 choices[52]= new Array();
 choices[52][0] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n sonora";
 choices[52][1] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n televisiva";
 choices[52][2] = "las redes de televisi&oacute;n por cable";
 choices[52][3] = "servicios que suministren contenidos transmitidos mediante redes y servicios de comunicaciones electr&oacute;nicas";
 answers[52] = 2;
 units[52] = ['121'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5747. ";
 preguntaids[52] = 5747


//  Id pregunta: 9080 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[53]= new Array();
 choices[53][0] = "Modelo en estrella.";
 choices[53][1] = "Modelo Copo de nieve.";
 choices[53][2] = "Constelaciones.";
 choices[53][3] = "Todos son modelos dimensionales.";
 answers[53] = 3;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9080. ";
 preguntaids[53] = 9080


//  Id pregunta: 8808 Año de creación de pregunta: 2013
 questions[54]= "55)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[54]= new Array();
 choices[54][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[54][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[54][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[54][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre";
 answers[54] = 3;
 units[54] = ['112'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8808. ";
 preguntaids[54] = 8808


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[55]= new Array();
 choices[55][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[55][1] = "De nivel alto.";
 choices[55][2] = "De nivel medio y nivel alto.";
 choices[55][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[55] = 3;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 564. Junta de Extremadura A1 2015";
 preguntaids[55] = 564


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[56][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[56][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[56][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[56] = 2;
 units[56] = ['22'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[56] = 502


//  Id pregunta: 5422 Año de creación de pregunta: 2007
 questions[57]= "58)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[57]= new Array();
 choices[57][0] = "Iniciaci&oacute;n";
 choices[57][1] = "Finalizaci&oacute;n";
 choices[57][2] = "Transici&oacute;n";
 choices[57][3] = "Elaboraci&oacute;n";
 answers[57] = 1;
 units[57] = ['84'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 5422. ";
 preguntaids[57] = 5422


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[58]= new Array();
 choices[58][0] = "Un Reglamento.";
 choices[58][1] = "Un Decreto.";
 choices[58][2] = "Una Ley.";
 choices[58][3] = "Un Real-Decreto.";
 answers[58] = 2;
 units[58] = ['5'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[58] = 190


//  Id pregunta: 7999 Año de creación de pregunta: 2011
 questions[59]= "60)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[59]= new Array();
 choices[59][0] = "App_Data.";
 choices[59][1] = "Bin.";
 choices[59][2] = "App_WebReferences";
 choices[59][3] = "Compilation";
 answers[59] = 1;
 units[59] = ['63', '124'];
 blocks[59] = ['B2', 'B4'];
 comments[59] = "Id Pregunta: 7999. Examen TIC A2 2010";
 preguntaids[59] = 7999


//  Id pregunta: 5077 Año de creación de pregunta: 2002
 questions[60]= "61)  Sobre los algoritmos Hash o funci&oacute;n resumen:";
 choices[60]= new Array();
 choices[60][0] = "Todos tienen una clave de longitud de 160 bits";
 choices[60][1] = "La longitud de la clave depender&aacute; del algoritmo utilizado";
 choices[60][2] = "Es imposible que la longitud de la clave sea menos de 160";
 choices[60][3] = "Da igual la longitud de clave";
 answers[60] = 1;
 units[60] = ['120'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5077. ";
 preguntaids[60] = 5077


//  Id pregunta: 8093 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[61]= new Array();
 choices[61][0] = "JNDI";
 choices[61][1] = "JAAS";
 choices[61][2] = "JMS";
 choices[61][3] = "JNI";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8093. Analista Ayto. Madrid 2010";
 preguntaids[61] = 8093


//  Id pregunta: 2912 Año de creación de pregunta: 2002
 questions[62]= "63)  Indique una caracter&iacute;stica falsa de Java:";
 choices[62]= new Array();
 choices[62][0] = "Es interpretado y portable a distintas plataformas";
 choices[62][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[62][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[62][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[62] = 3;
 units[62] = ['64', '65'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2912. ";
 preguntaids[62] = 2912


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[63]= "64)  Son bases de datos NoSQL orientadas a objetos:";
 choices[63]= new Array();
 choices[63][0] = "GemStone";
 choices[63][1] = "Zope Object DB";
 choices[63][2] = "Las dos anteriores";
 choices[63][3] = "Solo B)";
 answers[63] = 2;
 units[63] = ['73'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 747. Big Data y NoSQL";
 preguntaids[63] = 747


//  Id pregunta: 5845 Año de creación de pregunta: 2007
 questions[64]= "65)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[64]= new Array();
 choices[64][0] = "Estudio de Viabilidad del Sistema";
 choices[64][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[64][2] = "Concepci&oacute;n del Sistema";
 choices[64][3] = "Estudio del Sistema Actual";
 answers[64] = 0;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 5845. Examen 2006 JCYL";
 preguntaids[64] = 5845


//  Id pregunta: 4526 Año de creación de pregunta: 2002
 questions[65]= "66)  Dentro del modelo OSI la funci&oacute;n de 'mantener la secuencialidad de la informaci&oacute;n', corresponde al nivel:";
 choices[65]= new Array();
 choices[65][0] = "Nivel de red";
 choices[65][1] = "Nivel de transporte";
 choices[65][2] = "Nivel de sesi&oacute;n";
 choices[65][3] = "Nivel de presentaci&oacute;n";
 answers[65] = 0;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4526. ";
 preguntaids[65] = 4526


//  Id pregunta: 7490 Año de creación de pregunta: 2010
 questions[66]= "67)  El t&eacute;rmino JigSaw se refiere a:";
 choices[66]= new Array();
 choices[66][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor.";
 choices[66][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos.";
 choices[66][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse.";
 choices[66][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos.";
 answers[66] = 0;
 units[66] = ['39'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 7490. Map 2005";
 preguntaids[66] = 7490


//  Id pregunta: 10745 Año de creación de pregunta: 2015
 questions[67]= "68)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[67]= new Array();
 choices[67][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[67][1] = "Producitividad, complejidad y objetiva.";
 choices[67][2] = "Complejidad y tama&ntilde;o.";
 choices[67][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[67] = 0;
 units[67] = ['94'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 10745. ";
 preguntaids[67] = 10745


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[68]= new Array();
 choices[68][0] = "a) Los cuatro ejercicios siguientes.";
 choices[68][1] = "b) El ejercicio siguiente.";
 choices[68][2] = "c) Los dos ejercicios siguientes.";
 choices[68][3] = "d) Los tres ejercicios siguientes.";
 answers[68] = 3;
 units[68] = ['11'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 274. Presupuestos generales";
 preguntaids[68] = 274


//  Id pregunta: 3373 Año de creación de pregunta: 2006
 questions[69]= "70)  El Bourne shell:";
 choices[69]= new Array();
 choices[69][0] = "Est&aacute; basado en el lenguaje C";
 choices[69][1] = "Es posterior al shell de korn";
 choices[69][2] = "No es un shell de Unix s&oacute;lo de Linux";
 choices[69][3] = "Es el shell m&aacute;s antiguo";
 answers[69] = 3;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3373. ";
 preguntaids[69] = 3373


//  Id pregunta: 10734 Año de creación de pregunta: 2015
 questions[70]= "71)  Se&ntilde;ale la FALSA respecto al Diagrama de Extrapolaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Se basa en la hip&oacute;tesis de que si existe una desviaci&oacute;n, su tendencia es a permanecer o empeorar a no ser que se tomen las medidas oportunas.";
 choices[70][1] = "Trata de estimar la nueva fecha de fin del proyecto extrapolando la tendencia constatada en un momento determinado del desarrollo.";
 choices[70][2] = "Se utiliza para obtener previsiones de las desviaciones en el esfuerzo de desarrollo de un proyecto y para realizar el seguimiento del proyecto.";
 choices[70][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[70] = 2;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 10734. ";
 preguntaids[70] = 10734


//  Id pregunta: 1655 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[71]= new Array();
 choices[71][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[71][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[71][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[71][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[71] = 3;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 1655. ";
 preguntaids[71] = 1655


//  Id pregunta: 5893 Año de creación de pregunta: 2007
 questions[72]= "73)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[72]= new Array();
 choices[72][0] = "1 y 5.";
 choices[72][1] = "1 y 8.";
 choices[72][2] = "0 y 8.";
 choices[72][3] = "0 y 5.";
 answers[72] = 3;
 units[72] = ['33'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 5893. Castilla la Mancha B 2006";
 preguntaids[72] = 5893


//  Id pregunta: 10905 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP?";
 choices[73]= new Array();
 choices[73][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta.";
 choices[73][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error.";
 choices[73][2] = "El cliente esperar&aacute; indefinidamente la respuesta.";
 choices[73][3] = "La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[73] = 0;
 units[73] = ['120'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10905. ";
 preguntaids[73] = 10905


//  Id pregunta: 4703 Año de creación de pregunta: 2002
 questions[74]= "75)  El PLCP se incorpora como subnivel de:";
 choices[74]= new Array();
 choices[74][0] = "Nivel 2 de 802.11";
 choices[74][1] = "Nivel 1 de 802.11";
 choices[74][2] = "Nivel 1 de 802.3";
 choices[74][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[74] = 1;
 units[74] = ['108'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4703. ";
 preguntaids[74] = 4703


