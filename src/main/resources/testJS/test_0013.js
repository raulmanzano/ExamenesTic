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
//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[0]= "1)  La recusaci&oacute;n se plantear&aacute;...";
 choices[0]= new Array();
 choices[0][0] = "S&oacute;lo verbalmente";
 choices[0][1] = "S&oacute;lo por escrito";
 choices[0][2] = "Verbalmente o por escrito";
 choices[0][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[0] = 1;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[0] = 1026


//  Id pregunta: 4705 Año de creación de pregunta: 2002
 questions[1]= "2)  Entre las unidades de datos intercambiadas entre niveles pares y adyacentes del Modelo de Referencia OSI, cu&aacute;l de las siguientes combinaciones es cierta:";
 choices[1]= new Array();
 choices[1][0] = "PDU + PCI = SDU";
 choices[1][1] = "IDU + ICI = SDU";
 choices[1][2] = "SDU + PCI = PDU";
 choices[1][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[1] = 2;
 units[1] = ['105'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4705. ";
 preguntaids[1] = 4705


//  Id pregunta: 1485 Año de creación de pregunta: 2016
 questions[2]= "3)  En M&eacute;trica v3, la actividad del ASI &quot;Establecimiento de Requisitos&quot; se divide en varias tareas, en todas ellas, las t&eacute;cnicas y pr&aacute;cticas y los participantes son:";
 choices[2]= new Array();
 choices[2][0] = "Sesiones de Trabajo, Catalogaci&oacute;n y Casos de Uso, y los participantes: Usuarios Expertos y Analistas.";
 choices[2][1] = "Puestas en Com&uacute;n, Catalogaci&oacute;n y Casos de Uso, y los participantes: Usuarios Expertos y Analistas.";
 choices[2][2] = "Puestas en Com&uacute;n, Catalogaci&oacute;n y Casos de Uso, y los participantes: Gestores de Proyecto, Usuarios Expertos y Analistas.";
 choices[2][3] = "Sesiones de Trabajo, Catalogaci&oacute;n y Casos de Uso, y los participantes: Gestores de Proyecto, Usuarios Expertos y Analistas.";
 answers[2] = 0;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1485. ";
 preguntaids[2] = 1485


//  Id pregunta: 3139 Año de creación de pregunta: 2002
 questions[3]= "4)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[3]= new Array();
 choices[3][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[3][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[3][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[3][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[3] = 3;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3139. ";
 preguntaids[3] = 3139


//  Id pregunta: 2703 Año de creación de pregunta: 2002
 questions[4]= "5)  Con las siglas SCSI se identifica:";
 choices[4]= new Array();
 choices[4][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[4][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[4][2] = "Una arquitectura de ordenadores";
 choices[4][3] = "Una tarjeta de video";
 answers[4] = 1;
 units[4] = ['51'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2703. ";
 preguntaids[4] = 2703


//  Id pregunta: 5446 Año de creación de pregunta: 2007
 questions[5]= "6)  Un sistema ERP (Enterprise Resource Planning) b&aacute;sicamente act&uacute;a sobre:";
 choices[5]= new Array();
 choices[5][0] = "La capa de datos (SGBD).";
 choices[5][1] = "La capa de l&oacute;gica de negocio.";
 choices[5][2] = "La capa de presentaci&oacute;n.";
 choices[5][3] = "La capa de comunicaci&oacute;n";
 answers[5] = 1;
 units[5] = ['69'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 5446. ";
 preguntaids[5] = 5446


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[6]= "7)  La sede del Parlamento Europeo se encuentra en:";
 choices[6]= new Array();
 choices[6][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[6][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[6][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[6][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[6] = 1;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 171. Uni&oacute;n Europea";
 preguntaids[6] = 171


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[7]= new Array();
 choices[7][0] = "De oficio.";
 choices[7][1] = "A solicitud del interesado.";
 choices[7][2] = "De oficio o a solicitud del interesado.";
 choices[7][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[7] = 2;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 204. Ley 39/2015";
 preguntaids[7] = 204


//  Id pregunta: 3312 Año de creación de pregunta: 2004
 questions[8]= "9)  Acceso directo a memoria (DMA) es:";
 choices[8]= new Array();
 choices[8][0] = "Mecanismo por el que se transfieren datos entre un sistema de entrada/salida y el sistema de memoria sin la intervenci&oacute;n de la CPU.";
 choices[8][1] = "Un modo de funcionamiento opcional del hardware que permite acelerar el acceso a discos duros.";
 choices[8][2] = "Un modo de funcionamiento opcional del software que permite acelerar el acceso a discos duros.";
 choices[8][3] = "Un modo de acceso a dispositivos de entrada/salida en el que cada uno de ellos esta &quot;mapeado&quot; a una direcci&oacute;n de memoria.";
 answers[8] = 0;
 units[8] = ['52'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3312. ";
 preguntaids[8] = 3312


//  Id pregunta: 7133 Año de creación de pregunta: 2010
 questions[9]= "10)  En relaci&oacute;n a l&iacute;mites a los derechos exclusivos de la explotaci&oacute;n de un programa de ordenador por parte de quien sea su titular, establecidos en Ley de Propiedad Intelectual, se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[9]= new Array();
 choices[9][0] = "La realizaci&oacute;n de una copia de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulte necesaria para dicha utilizaci&oacute;n.";
 choices[9][1] = "La realizaci&oacute;n de copias privadas por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 choices[9][2] = "La realizaci&oacute;n de copias de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulten necesarias para dicha utilizaci&oacute;n.";
 choices[9][3] = "La realizaci&oacute;n de una copia privada por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 answers[9] = 0;
 units[9] = ['41'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 7133. Art&iacute;culo 100 RDL 1/1996";
 preguntaids[9] = 7133


//  Id pregunta: 4023 Año de creación de pregunta: 2002
 questions[10]= "11)  Los robots (entendidos como programas que recorren de forma autom&aacute;tica la estructura hipertexto de la web) se clasifican com&uacute;nmente en:";
 choices[10]= new Array();
 choices[10][0] = "est&aacute;ticos y din&aacute;micos";
 choices[10][1] = "spiders, knowbots y wanderers";
 choices[10][2] = "mantenimiento, esp&iacute;as y virus";
 choices[10][3] = "recopiladores de informaci&oacute;n y vigilantes";
 answers[10] = 1;
 units[10] = ['100'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 4023. ";
 preguntaids[10] = 4023


//  Id pregunta: 7121 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[11]= new Array();
 choices[11][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[11][1] = "Unidad administrativa suscriptora del certificado.";
 choices[11][2] = "Fechas de validez del certificado.";
 choices[11][3] = "Ninguna de las anteriores.";
 answers[11] = 1;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 7121. Art&iacute;culo 18 RD 1671/2009";
 preguntaids[11] = 7121


//  Id pregunta: 3750 Año de creación de pregunta: 2002
 questions[12]= "13)  Cuando se ejecuta un programa OO (Orientado a Objetos) ocurren tres tipos de sucesos, identifique el incorrecto:";
 choices[12]= new Array();
 choices[12][0] = "Se crean objetos cuando se necesitan.";
 choices[12][1] = "Los mensajes se mueven de un objeto a otro, o desde un usuario a un objeto, seg&uacute;n se va procesando informaci&oacute;n o respondiendo a entradas de usuario.";
 choices[12][2] = "Se borran los objetos cuando ya no son necesarios.";
 choices[12][3] = "Se renombran los objetos cuando ya no son necesarios.";
 answers[12] = 3;
 units[12] = ['85', '89'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3750. ";
 preguntaids[12] = 3750


//  Id pregunta: 3038 Año de creación de pregunta: 2002
 questions[13]= "14)  Se&ntilde;alar la sentencia correcta respecto de la ingenier&iacute;a del conocimiento:";
 choices[13]= new Array();
 choices[13][0] = "Las reglas de producci&oacute;n y las reglas deductivas son maneras de representaci&oacute;n param&eacute;trica del conocimiento";
 choices[13][1] = "Ejemplos de modelos de representaci&oacute;n del conocimiento en forma param&eacute;trica son el perceptr&oacute;n y las redes neuronales";
 choices[13][2] = "Uno de los algoritmos m&aacute;s utilizados en el proceso de entrenamiento viene dado por el filtrado de Waltz";
 choices[13][3] = "El razonamiento no mon&oacute;tono es un modelo de razonamiento cuyo objetivo es asignar medidas o factores de certeza a un conjunto de proposiciones intermedias a partir de las asignadas a las proposiciones iniciales";
 answers[13] = 1;
 units[13] = ['68'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3038. ";
 preguntaids[13] = 3038


//  Id pregunta: 4642 Año de creación de pregunta: 2002
 questions[14]= "15)  A la tecnolog&iacute;a que permite a un abonado disfrutar de servicios propios de su operadora cuando est&aacute; en itinerancia en otra operadora nacional o extranjera con la que se tengan acuerdos de roaming, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "USSD";
 choices[14][1] = "CAMEL";
 choices[14][2] = "VHE";
 choices[14][3] = "I-Roaming";
 answers[14] = 1;
 units[14] = ['117'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 4642. ";
 preguntaids[14] = 4642


//  Id pregunta: 6824 Año de creación de pregunta: 2010
 questions[15]= "16)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[15]= new Array();
 choices[15][0] = "UIT-T";
 choices[15][1] = "IETF";
 choices[15][2] = "ISO/IEC";
 choices[15][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[15] = 1;
 units[15] = ['114'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6824. ";
 preguntaids[15] = 6824


//  Id pregunta: 3432 Año de creación de pregunta: 2006
 questions[16]= "17)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-means?";
 choices[16]= new Array();
 choices[16][0] = "Clustering.";
 choices[16][1] = "Categorizaci&oacute;n.";
 choices[16][2] = "Predicci&oacute;n.";
 choices[16][3] = "Detecci&oacute;n de fraude.";
 answers[16] = 0;
 units[16] = ['72'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3432. ";
 preguntaids[16] = 3432


//  Id pregunta: 10701 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[17]= new Array();
 choices[17][0] = "Hive";
 choices[17][1] = "Cassandra";
 choices[17][2] = "Hbase";
 choices[17][3] = "ZoneKeeper";
 answers[17] = 1;
 units[17] = ['73'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10701. ";
 preguntaids[17] = 10701


//  Id pregunta: 5295 Año de creación de pregunta: 2006
 questions[18]= "19)  Tim Berners-Lee lider&oacute; un equipo de f&iacute;sicos en el CERN que cre&oacute;:";
 choices[18]= new Array();
 choices[18][0] = "El lenguaje PHP en 1993";
 choices[18][1] = "El lenguaje HTML en 1989";
 choices[18][2] = "El lenguaje Perl en 1979";
 choices[18][3] = "El lenguaje HTML en 1991";
 answers[18] = 1;
 units[18] = ['125'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5295. ";
 preguntaids[18] = 5295


//  Id pregunta: 9594 Año de creación de pregunta: 2014
 questions[19]= "20)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[19]= new Array();
 choices[19][0] = "300 MB/s.";
 choices[19][1] = "900 MB/s.";
 choices[19][2] = "600 MB/s.";
 choices[19][3] = "150 MB/s.";
 answers[19] = 2;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9594. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[19] = 9594


//  Id pregunta: 4928 Año de creación de pregunta: 2002
 questions[20]= "21)  UDDI:";
 choices[20]= new Array();
 choices[20][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[20][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[20][2] = "Significa User Definition Domain  Interface";
 choices[20][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[20] = 3;
 units[20] = ['74'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 4928. ";
 preguntaids[20] = 4928


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[21]= "22)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Discriminaci&oacute;n indirecta.";
 choices[21][1] = "Discriminaci&oacute;n directa.";
 choices[21][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[21][3] = "Discriminaci&oacute;n abusiva.";
 answers[21] = 0;
 units[21] = ['14'];
 blocks[21] = ['A3'];
 comments[21] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[21] = 374


//  Id pregunta: 1718 Año de creación de pregunta: 2016
 questions[22]= "23)  Los scriptlets se definen como:";
 choices[22]= new Array();
 choices[22][0] = "Expresiones entre las etiquetas &lt;%= y %&gt; que se eval&uacute;an y el resultado se convierte a una cadena embebida en JSP.";
 choices[22][1] = "Fragmentos de c&oacute;digo Java entre las etiquetas &lt;% y %&gt; y embebido en JSP";
 choices[22][2] = "Atributos generales entre etiquetas &lt;%@ y %&gt; asociados a un fragmento JavaScript";
 choices[22][3] = "Declaraciones de m&eacute;todos y variables entre etiquetas &lt;%! y %&gt; en una p&aacute;gina JSP.";
 answers[22] = 1;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1718. ";
 preguntaids[22] = 1718


//  Id pregunta: 8855 Año de creación de pregunta: 2013
 questions[23]= "24)  &iquest;Qui&eacute;n deber&iacute;a cerrar siempre las incidencias?";
 choices[23]= new Array();
 choices[23][0] = "El nivel 1 (CAU)";
 choices[23][1] = "El nivel 2 (resto de &aacute;reas del centro TIC)";
 choices[23][2] = "El nivel 3 (proveedores)";
 choices[23][3] = "Aquel nivel que resuelva la incidencia";
 answers[23] = 0;
 units[23] = ['30'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 8855. ";
 preguntaids[23] = 8855


//  Id pregunta: 9987 Año de creación de pregunta: 2015
 questions[24]= "25)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[24]= new Array();
 choices[24][0] = "Garantiza la confidencialidad de un documento.";
 choices[24][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[24][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[24][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[24] = 3;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 9987. Examen TIC A2 2014";
 preguntaids[24] = 9987


//  Id pregunta: 10149 Año de creación de pregunta: 2015
 questions[25]= "26)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[25]= new Array();
 choices[25][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[25][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[25][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[25][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[25] = 1;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 10149. Examen TIC A1 2014";
 preguntaids[25] = 10149


//  Id pregunta: 2460 Año de creación de pregunta: 2002
 questions[26]= "27)  El &quot;Real Decreto por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos&quot; es el:";
 choices[26]= new Array();
 choices[26][0] = "RD 263/1996";
 choices[26][1] = "RD 263/2003";
 choices[26][2] = "RD 209/2003";
 choices[26][3] = "RD 209/1996";
 answers[26] = 2;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 2460. ";
 preguntaids[26] = 2460


//  Id pregunta: 3222 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;C&uacute;al de los modelos de datos de Sistemas de Informaci&oacute;n Geogr&aacute;fica es m&aacute;s adecuado para representar l&iacute;neas con precisi&oacute;n y superficies rellenas?";
 choices[27]= new Array();
 choices[27][0] = "Modelo R&aacute;ster.";
 choices[27][1] = "Modelo Vectorial.";
 choices[27][2] = "Modelo R&aacute;ster y Modelo Vectorial.";
 choices[27][3] = "El modelo R&aacute;ster para l&iacute;neas y el modelo Vectorial para superficies.";
 answers[27] = 2;
 units[27] = ['71'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3222. ";
 preguntaids[27] = 3222


//  Id pregunta: 4628 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[28]= new Array();
 choices[28][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[28][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[28][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[28][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[28] = 3;
 units[28] = ['105'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4628. ";
 preguntaids[28] = 4628


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[29]= new Array();
 choices[29][0] = "10 d&iacute;as h&aacute;biles";
 choices[29][1] = "15 d&iacute;as h&aacute;biles";
 choices[29][2] = "15 d&iacute;as naturales";
 choices[29][3] = "1 mes";
 answers[29] = 3;
 units[29] = ['10'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 10779. ";
 preguntaids[29] = 10779


//  Id pregunta: 10487 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[30]= new Array();
 choices[30][0] = "Tema";
 choices[30][1] = "Portlet";
 choices[30][2] = "Ruta";
 choices[30][3] = "Hook";
 answers[30] = 2;
 units[30] = ['99'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 10487. ";
 preguntaids[30] = 10487


//  Id pregunta: 5095 Año de creación de pregunta: 2004
 questions[31]= "32)  El protocolo ARP";
 choices[31]= new Array();
 choices[31][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[31][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[31][2] = "Se utiliza en routers y bridges";
 choices[31][3] = "A y B son correctas";
 answers[31] = 0;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5095. ";
 preguntaids[31] = 5095


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[32]= "33)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[32]= new Array();
 choices[32][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[32][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[32][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[32][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[32] = 0;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 9777. ";
 preguntaids[32] = 9777


//  Id pregunta: 4179 Año de creación de pregunta: 2006
 questions[33]= "34)  &iquest;Qu&eacute; tres modelos utiliza OMT?";
 choices[33]= new Array();
 choices[33][0] = "Modelo de objetos , din&aacute;mico y funcional";
 choices[33][1] = "Modelo est&aacute;tico , din&aacute;mico y funcional";
 choices[33][2] = "Modelo de objetos , din&aacute;mico y transaccional";
 choices[33][3] = "Modelo de objetos, est&aacute;tico y de clases";
 answers[33] = 0;
 units[33] = ['85'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 4179. ";
 preguntaids[33] = 4179


//  Id pregunta: 8979 Año de creación de pregunta: 2013
 questions[34]= "35)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que";
 choices[34]= new Array();
 choices[34][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[34][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[34][2] = "Las respuestas a) y b) son correctas";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = 2;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 8979. Ley 34/2002, art&iacute;culo 17";
 preguntaids[34] = 8979


//  Id pregunta: 3319 Año de creación de pregunta: 2004
 questions[35]= "36)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[35]= new Array();
 choices[35][0] = "Kuck";
 choices[35][1] = "Treleaven";
 choices[35][2] = "Flynn";
 choices[35][3] = "Gajski y Pier";
 answers[35] = 2;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3319. ";
 preguntaids[35] = 3319


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[36]= "37)  La secci&oacute;n segunda, del cap&iacute;tulo segundo, del t&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola de 1978, se denomina:";
 choices[36]= new Array();
 choices[36][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[36][1] = "De los derechos y deberes fundamentales.";
 choices[36][2] = "De los derechos y libertades de los ciudadanos.";
 choices[36][3] = "De los derechos y deberes de los ciudadanos.";
 answers[36] = 3;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 53. Constituci&oacute;n de 1978";
 preguntaids[36] = 53


//  Id pregunta: 8779 Año de creación de pregunta: 2013
 questions[37]= "38)  Respecto a la tecnologia de multiplexaci&oacute;n WDM:";
 choices[37]= new Array();
 choices[37][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias m&aacute;s cortas.";
 choices[37][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo n&uacute;mero de canales";
 choices[37][2] = "Dense WDM y Coarse WDM son tecnolog&iacute;as no interoperables";
 choices[37][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[37] = 2;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8779. ";
 preguntaids[37] = 8779


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[38]= new Array();
 choices[38][0] = "11";
 choices[38][1] = "12";
 choices[38][2] = "14";
 choices[38][3] = "8";
 answers[38] = 1;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 21. Constituci&oacute;n de 1978";
 preguntaids[38] = 21


//  Id pregunta: 6091 Año de creación de pregunta: 2003
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[39]= new Array();
 choices[39][0] = "Simultaneidad";
 choices[39][1] = "Interactividad";
 choices[39][2] = "No repudio";
 choices[39][3] = "Automatizaci&oacute;n";
 answers[39] = 2;
 units[39] = ['75'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6091. Examen TIC A1 MAP 2007";
 preguntaids[39] = 6091


//  Id pregunta: 4044 Año de creación de pregunta: 2003
 questions[40]= "41)  En el contexto del dise&ntilde;o y la programaci&oacute;n de ordenadores, un m&oacute;dulo es:";
 choices[40]= new Array();
 choices[40][0] = "Una unidad intercambiable que realiza una funci&oacute;n espec&iacute;fica y tiene conexiones con el entorno.";
 choices[40][1] = "Una parte fija de un sistema inform&aacute;tico que realiza las operaciones aritm&eacute;tico-l&oacute;gicas.";
 choices[40][2] = "Una parte del entorno de un sistema inform&aacute;tico.";
 choices[40][3] = "Un ordenador dedicado a una tarea espec&iacute;fica o para un rango reducido de tareas.";
 answers[40] = 0;
 units[40] = ['89'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4044. Junta Andaluc&iacute;a";
 preguntaids[40] = 4044


//  Id pregunta: 8102 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[41]= new Array();
 choices[41][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[41][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[41][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[41][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[41] = 1;
 units[41] = ['104'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8102. Examen TIC A2 2010 interna";
 preguntaids[41] = 8102


//  Id pregunta: 8897 Año de creación de pregunta: 2013
 questions[42]= "43)  Aquellas pruebas que tienen como objetivo verificar el funcionamiento global del sistema de informaci&oacute;n completo se denominan:";
 choices[42]= new Array();
 choices[42][0] = "Pruebas unitarias.";
 choices[42][1] = "Pruebas de integraci&oacute;n.";
 choices[42][2] = "Pruebas del sistema.";
 choices[42][3] = "Pruebas de implantaci&oacute;n.";
 answers[42] = 2;
 units[42] = ['91'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 8897. Examen AGE TIC A1 2011";
 preguntaids[42] = 8897


//  Id pregunta: 4586 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[43]= new Array();
 choices[43][0] = "De las VLAN (Virtual Local Area Network)";
 choices[43][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[43][2] = "No existe dicho est&aacute;ndar";
 choices[43][3] = "Del canal D de la RDSI";
 answers[43] = 0;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4586. ";
 preguntaids[43] = 4586


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[44]= new Array();
 choices[44][0] = "De los derechos y deberes fundamentales.";
 choices[44][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[44][2] = "Derechos y libertades.";
 choices[44][3] = "De la Corona.";
 answers[44] = 0;
 units[44] = ['1'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 48. Constituci&oacute;n de 1978";
 preguntaids[44] = 48


//  Id pregunta: 5670 Año de creación de pregunta: 2007
 questions[45]= "46)  Los dispositivos NAS utilizan como protocolo para suministrar los archivos a los clientes:";
 choices[45]= new Array();
 choices[45][0] = "ADSL";
 choices[45][1] = "IP";
 choices[45][2] = "SCSI";
 choices[45][3] = "Fiber SCSI";
 answers[45] = 1;
 units[45] = ['53'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 5670. ";
 preguntaids[45] = 5670


//  Id pregunta: 4075 Año de creación de pregunta: 2003
 questions[46]= "47)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?";
 choices[46]= new Array();
 choices[46][0] = "Diagrama de despliegue.";
 choices[46][1] = "Diagrama de componentes.";
 choices[46][2] = "Diagrama de descomposici&oacute;n.";
 choices[46][3] = "Diagrama de estructura.";
 answers[46] = 0;
 units[46] = ['85', '89'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 4075. EXAMEN CASTILLA LA MANCHA";
 preguntaids[46] = 4075


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[47]= new Array();
 choices[47][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[47][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[47][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[47] = 1;
 units[47] = ['89'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 818. Junta de Extremadura A1 2015";
 preguntaids[47] = 818


//  Id pregunta: 1184 Año de creación de pregunta: 2016
 questions[48]= "49)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[48]= new Array();
 choices[48][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[48][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[48][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[48][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[48] = 1;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1184. ";
 preguntaids[48] = 1184


//  Id pregunta: 9365 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[49]= new Array();
 choices[49][0] = "No es v&aacute;lida.";
 choices[49][1] = "Unicast.";
 choices[49][2] = "Multicast.";
 choices[49][3] = "Loopback.";
 answers[49] = 2;
 units[49] = ['109'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 9365. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[49] = 9365


//  Id pregunta: 3974 Año de creación de pregunta: 2002
 questions[50]= "51)  Un proceso en un DFD&hellip;:";
 choices[50]= new Array();
 choices[50][0] = "Puede descomponerse en otros procesos";
 choices[50][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[50][2] = "Puede estar aislado";
 choices[50][3] = "Puede equivaler a una entidad externa";
 answers[50] = 0;
 units[50] = ['85', '86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3974. ";
 preguntaids[50] = 3974


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[51]= new Array();
 choices[51][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[51][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[51][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[51][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[51] = 0;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[51] = 993


//  Id pregunta: 10934 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[52]= new Array();
 choices[52][0] = "representante del Tribunal de Cuentas";
 choices[52][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[52][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[52][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[52] = 2;
 units[52] = ['22'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 10934. ";
 preguntaids[52] = 10934


//  Id pregunta: 1306 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Con que directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[53]= new Array();
 choices[53][0] = "Master";
 choices[53][1] = "MasterPage";
 choices[53][2] = "Master.Page";
 choices[53][3] = "Page";
 answers[53] = 0;
 units[53] = ['63'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1306. ";
 preguntaids[53] = 1306


//  Id pregunta: 2896 Año de creación de pregunta: 2002
 questions[54]= "55)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[54]= new Array();
 choices[54][0] = "Permanencia";
 choices[54][1] = "Facilidad de reproducci&oacute;n";
 choices[54][2] = "Funcionamiento uniforme";
 choices[54][3] = "Eficiencia";
 answers[54] = 3;
 units[54] = ['68'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2896. ";
 preguntaids[54] = 2896


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[55]= "56)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[55]= new Array();
 choices[55][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[55][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[55][2] = "el sector p&uacute;blico institucional";
 choices[55][3] = "el sector privado corporativo";
 answers[55] = 3;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 214. Ley 39/2015";
 preguntaids[55] = 214


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[56]= new Array();
 choices[56][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[56][1] = "Autorizar indultos generales.";
 choices[56][2] = "Sancionar las leyes.";
 choices[56][3] = "Promulgar las leyes.";
 answers[56] = 1;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 12. Constituci&oacute;n de 1978";
 preguntaids[56] = 12


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;C&oacute;mo se llaman las oficinas de la Uni&oacute;n Europea en d&oacute;nde se difunde informaci&oacute;n referente a la actividad del Parlamento Europeo?";
 choices[57]= new Array();
 choices[57][0] = "Euro-Info-Point";
 choices[57][1] = "Point-Euro-Info";
 choices[57][2] = "Euro-Point-Info";
 choices[57][3] = "Point-Info-Euro";
 answers[57] = 0;
 units[57] = ['5'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 181. Uni&oacute;n Europea";
 preguntaids[57] = 181


//  Id pregunta: 4907 Año de creación de pregunta: 2002
 questions[58]= "59)  En cuanto a la LGT, la prestaci&oacute;n de consentimiento expreso por parte del cliente o afectado  exige:";
 choices[58]= new Array();
 choices[58][0] = "Es valido el silencio por parte del destinatario";
 choices[58][1] = "La manifestaci&oacute;n de una voluntad libre, informada, espec&iacute;fica e inequ&iacute;voca (que no deje lugar a duda)";
 choices[58][2] = "Es v&aacute;lido el consentimiento oral";
 choices[58][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[58] = 1;
 units[58] = ['121'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4907. ";
 preguntaids[58] = 4907


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[59]= "60)  Con respecto a la EPA(Encuesta P&uacute;blica de Empleo) es falso que:";
 choices[59]= new Array();
 choices[59][0] = "La Epa cubre el espacio nacional";
 choices[59][1] = "El periodo de referencia de los resultados de la encuesta es cuatrimestral";
 choices[59][2] = "El INE utiliza la EPA para elaborar sus estad&iacute;sticas relativas al mercado laboral";
 choices[59][3] = "La encuesta va dirigida a poblaci&oacute;n que reside en viviendas familiares, excluy&eacute;ndose hospitales, hoteles, etc&hellip;";
 answers[59] = 1;
 units[59] = ['15'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 426. Modelo econ&oacute;mico";
 preguntaids[59] = 426


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[60]= new Array();
 choices[60][0] = "Quince miembros.";
 choices[60][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[60][2] = "Los miembros que determine el Consejo.";
 choices[60][3] = "Un Presidente y quince miembros.";
 answers[60] = 1;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 414. Uni&oacute;n Europea";
 preguntaids[60] = 414


//  Id pregunta: 6458 Año de creación de pregunta: 2003
 questions[61]= "62)  Respecto de la Ley 56/2007, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[61]= new Array();
 choices[61][0] = "Se incluir&aacute;n en los proyectos de infraestructuras de inter&eacute;s general canalizaciones para el despliegue de redes de comunicaciones, as&iacute; como  se preveer&aacute;n las instalaciones para asegurar la cobertura de comunicaciones m&oacute;viles.";
 choices[61][1] = "Se  especifica la creaci&oacute;n de una base de datos sobre servicios de la sociedad de la informaci&oacute;n  de comunicaciones electr&oacute;nicas en Espa&ntilde;a.";
 choices[61][2] = "En la oferta p&uacute;blica de contrataci&oacute;n electr&oacute;nica de transparencia garantizada no es necesario que una vez concluido el proceso la empresa informe a los participantes de la decisi&oacute;n adoptada.";
 choices[61][3] = "Aclara la valoraci&oacute;n de la firma electr&oacute;nica en juicio.";
 answers[61] = 2;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 6458. ";
 preguntaids[61] = 6458


//  Id pregunta: 10236 Año de creación de pregunta: 2015
 questions[62]= "63)  &iquest;C&oacute;mo se denomina a la restricci&oacute;n del Modelo L&oacute;gico Relacional por la que si en una relaci&oacute;n hay alguna clave ajena, sus valores deben coincidir con los valores de la clave primaria a la que hace referencia, o bien, deben ser completamente nulos?";
 choices[62]= new Array();
 choices[62][0] = "Aserci&oacute;n (ASSERTION)";
 choices[62][1] = "Verificaci&oacute;n (CHECK)";
 choices[62][2] = "Restricci&oacute;n de clave primaria";
 choices[62][3] = "Integridad referencial";
 answers[62] = 3;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10236. ";
 preguntaids[62] = 10236


//  Id pregunta: 1012 Año de creación de pregunta: 2016
 questions[63]= "64)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[63]= new Array();
 choices[63][0] = "la poblaci&oacute;n del territorio";
 choices[63][1] = "el volumen de gesti&oacute;n";
 choices[63][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[63][3] = "todas son correctas";
 answers[63] = 3;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 1012. Ley 40/2015";
 preguntaids[63] = 1012


//  Id pregunta: 978 Año de creación de pregunta: 2016
 questions[64]= "65)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento por parte de los organos jerarquicamente dependientes de las instrucciones u &oacute;rdenes de servicio de los organos administrativos de acuerdo a la ley 40/2015:";
 choices[64]= new Array();
 choices[64][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[64][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[64][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[64][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[64] = 0;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 978. Ley 40/2015";
 preguntaids[64] = 978


//  Id pregunta: 10843 Año de creación de pregunta: 2015
 questions[65]= "66)  Son protocolos de estado del enlace:";
 choices[65]= new Array();
 choices[65][0] = "OSPF y RIPv2";
 choices[65][1] = "IS-IS y OSPF";
 choices[65][2] = "IGRP y RIPv2";
 choices[65][3] = "RIPv2 e IS-IS";
 answers[65] = 1;
 units[65] = ['102'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 10843. ";
 preguntaids[65] = 10843


//  Id pregunta: 1657 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[66]= new Array();
 choices[66][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[66][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[66][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[66][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[66] = 0;
 units[66] = ['1'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 1657. ";
 preguntaids[66] = 1657


//  Id pregunta: 4117 Año de creación de pregunta: 2003
 questions[67]= "68)  Gesti&oacute;n de documentos y gesti&oacute;n de contenidos:";
 choices[67]= new Array();
 choices[67][0] = "Son la misma cosa.";
 choices[67][1] = "S&oacute;lo se diferencian en la tecnolog&iacute;a utilizada.";
 choices[67][2] = "En la gesti&oacute;n de documentos se suele presentar el documento en su formato original, mientras que en la gesti&oacute;n de contenidos se orienta hacia la creaci&oacute;n y edici&oacute;n din&aacute;mica de p&aacute;ginas.";
 choices[67][3] = "La gesti&oacute;n de contenidos es m&aacute;s reciente y suele estar enfocada hacia flujos de trabajo.";
 answers[67] = 2;
 units[67] = ['99'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4117. ";
 preguntaids[67] = 4117


//  Id pregunta: 10232 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[68]= new Array();
 choices[68][0] = "Intersecci&oacute;n";
 choices[68][1] = "Uni&oacute;n";
 choices[68][2] = "Proyecci&oacute;n";
 choices[68][3] = "Diferencia";
 answers[68] = 0;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10232. ";
 preguntaids[68] = 10232


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Org&aacute;nica.";
 choices[69][1] = "Contable.";
 choices[69][2] = "Econ&oacute;mica.";
 choices[69][3] = "Por programas.";
 answers[69] = 2;
 units[69] = ['11'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 289. Presupuestos generales";
 preguntaids[69] = 289


//  Id pregunta: 1812 Año de creación de pregunta: 2016
 questions[70]= "71)  Uno de los componentes de una granja de servidores son los monitores transaccionales que tienen como funci&oacute;n realizar la gesti&oacute;n de transacciones. Indique cu&aacute;l de las siguientes opciones es correcta como una de las partes que interviene en dicha gesti&oacute;n de transacciones:";
 choices[70]= new Array();
 choices[70][0] = "Gestor de aplicaci&oacute;n";
 choices[70][1] = "Gestor de servicio";
 choices[70][2] = "Gestor de registro";
 choices[70][3] = "Gestor de sesi&oacute;n";
 answers[70] = 2;
 units[70] = ['113'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1812. ";
 preguntaids[70] = 1812


//  Id pregunta: 4817 Año de creación de pregunta: 2002
 questions[71]= "72)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[71]= new Array();
 choices[71][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[71][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[71][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[71][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[71] = 1;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4817. ";
 preguntaids[71] = 4817


//  Id pregunta: 7400 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;Cu&aacute;l es el est&aacute;ndar WIMAX que permite movilidad conocido como: WIMAX m&oacute;vil?";
 choices[72]= new Array();
 choices[72][0] = "802.16d";
 choices[72][1] = "802.16";
 choices[72][2] = "802.16h";
 choices[72][3] = "802.16e";
 answers[72] = 3;
 units[72] = ['108'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7400. Examen TIC B 2009";
 preguntaids[72] = 7400


//  Id pregunta: 9546 Año de creación de pregunta: 2014
 questions[73]= "74)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[73]= new Array();
 choices[73][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[73][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[73][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[73][3] = "No es obligatorio en ning&uacute;n caso";
 answers[73] = 2;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 9546. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";
 preguntaids[73] = 9546


//  Id pregunta: 2152 Año de creación de pregunta: 2002
 questions[74]= "75)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[74]= new Array();
 choices[74][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[74][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[74][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[74][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[74] = 2;
 units[74] = ['41'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2152. ";
 preguntaids[74] = 2152


