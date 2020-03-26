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
//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[0][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[0][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[0][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[0] = 3;
 units[0] = ['19'];
 blocks[0] = ['A4'];
 comments[0] = "Id Pregunta: 440. AGE A1 2015";
 preguntaids[0] = 440


//  Id pregunta: 8738 Año de creación de pregunta: 2013
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes situaciones NO puede considerarse un incidente?";
 choices[1]= new Array();
 choices[1][0] = "Fallo hardware.";
 choices[1][1] = "Un usuario no autorizado de la cuenta de un usuario.";
 choices[1][2] = "Un evento cuyo impacto no genere una interrupci&oacute;n prolongada del servicio.";
 choices[1][3] = "Todos los anteriores se considerar&iacute;an incidentes.";
 answers[1] = 3;
 units[1] = ['45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8738. ";
 preguntaids[1] = 8738


//  Id pregunta: 6092 Año de creación de pregunta: 2003
 questions[2]= "3)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[2]= new Array();
 choices[2][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[2][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[2][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[2][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[2] = 1;
 units[2] = ['107'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6092. Examen TIC A1 MAP 2007";
 preguntaids[2] = 6092


//  Id pregunta: 10191 Año de creación de pregunta: 2015
 questions[3]= "4)  Para prevenir un ataque de SQL Injection:";
 choices[3]= new Array();
 choices[3][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[3][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[3][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[3][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[3] = 3;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 10191. Examen TIC A1 2014";
 preguntaids[3] = 10191


//  Id pregunta: 7748 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?";
 choices[4]= new Array();
 choices[4][0] = "UPDATE TABLE.";
 choices[4][1] = "ALTER TABLE.";
 choices[4][2] = "REVOKE ALL.";
 choices[4][3] = "ROLLBACK.";
 answers[4] = 1;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7748. ";
 preguntaids[4] = 7748


//  Id pregunta: 7350 Año de creación de pregunta: 2010
 questions[5]= "6)  Las siglas CAAT en relaci&oacute;n con los Sistemas de Informaci&oacute;n significan";
 choices[5]= new Array();
 choices[5][0] = "Computed-Assisted Audit Techniques";
 choices[5][1] = "Campaign Against Automotive Trenes";
 choices[5][2] = "Centro para la Administraci&oacute;n de Alternativas Tecnol&oacute;gicas";
 choices[5][3] = "Computer-Assisted Advanced Tools";
 answers[5] = 0;
 units[5] = ['36'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7350. Examen TIC B 2009";
 preguntaids[5] = 7350


//  Id pregunta: 5206 Año de creación de pregunta: 2006
 questions[6]= "7)  Sobre FDDI:";
 choices[6]= new Array();
 choices[6][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[6][1] = "Se conoce como X3T9.3";
 choices[6][2] = "Su equivalente en cobre es CDDI";
 choices[6][3] = "Todas son verdaderas";
 answers[6] = 2;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5206. ";
 preguntaids[6] = 5206


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[7]= "8)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[7]= new Array();
 choices[7][0] = "Sello electr&oacute;nico";
 choices[7][1] = "Sede electr&oacute;nica";
 choices[7][2] = "Servidor seguro (SSL/TLS)";
 choices[7][3] = "Empleado p&uacute;blico";
 answers[7] = 2;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 200. AGE A1 2015";
 preguntaids[7] = 200


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[8]= "9)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[8]= new Array();
 choices[8][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[8][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[8][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[8][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[8] = 1;
 units[8] = ['7'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[8] = 9455


//  Id pregunta: 2036 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Existe en Espa&ntilde;a alg&uacute;n centro operativo para realizar Pruebas de Conformidad de acuerdo con el plan CTS de la Uni&oacute;n Europea?:";
 choices[9]= new Array();
 choices[9][0] = "S&iacute;, ya existen varios en funcionamiento en Espa&ntilde;a";
 choices[9][1] = "No, por no haberse implantado este plan en Espa&ntilde;a";
 choices[9][2] = "No, s&oacute;lo existe un centro experimental creado en Bruselas desde 1993";
 choices[9][3] = "No, el plan CTS no se ha puesto todav&iacute;a en pr&aacute;ctica";
 answers[9] = 0;
 units[9] = ['48'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2036. ";
 preguntaids[9] = 2036


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[10]= new Array();
 choices[10][0] = "Reducir el gasto p&uacute;blico.";
 choices[10][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[10][2] = "Reducir el endeudamiento neto.";
 choices[10][3] = "Al Fondo de Contingencia.";
 answers[10] = 2;
 units[10] = ['11'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 325. Presupuestos generales";
 preguntaids[10] = 325


//  Id pregunta: 8614 Año de creación de pregunta: 2013
 questions[11]= "12)  Respecto a la Directiva INSPIRE, indique la respuesta FALSA:";
 choices[11]= new Array();
 choices[11][0] = "Se refiere a la Directiva 2007/2/CE";
 choices[11][1] = "Contiene 34 temas espaciales";
 choices[11][2] = "El Comit&eacute; INSPIRE publica sus Implementing Rules en forma de Reglamentos";
 choices[11][3] = "Dirigida a que las IDEs de los Estados Miembros sean compatibles e interoperables";
 answers[11] = 2;
 units[11] = ['71'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8614. ";
 preguntaids[11] = 8614


//  Id pregunta: 1321 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale cual de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[12]= new Array();
 choices[12][0] = "T&eacute;cnicas Matriciales.";
 choices[12][1] = "M&eacute;todo Albrecht.";
 choices[12][2] = "An&aacute;lisis de Impacto.";
 choices[12][3] = "Caminos de Acceso.";
 answers[12] = 0;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 1321. ";
 preguntaids[12] = 1321


//  Id pregunta: 9561 Año de creación de pregunta: 2014
 questions[13]= "14)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[13]= new Array();
 choices[13][0] = "Facilidad de representaci&oacute;n";
 choices[13][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[13][2] = "Modularidad";
 choices[13][3] = "Flexibilidad";
 answers[13] = 1;
 units[13] = ['68'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9561. Seg&uacute;n ASTIC: ventajas: facilidad de representaci&oacute;n, modularidad, flexibilidad, eficiencia;  desventajas: direcci&oacute;n de inferencia prefijada, hay dominios de conocimiento que  formulados en reglas dan lugar a bases de conocimiento muy grandes debido  a que el conocimiento se expresa mejor mediante restricciones";
 preguntaids[13] = 9561


//  Id pregunta: 9057 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[14]= new Array();
 choices[14][0] = "MISD y SISD";
 choices[14][1] = "SIMD y SISD";
 choices[14][2] = "MIMD y MISD";
 choices[14][3] = "SISD y MISD";
 answers[14] = 1;
 units[14] = ['49'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9057. ";
 preguntaids[14] = 9057


//  Id pregunta: 9903 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[15]= new Array();
 choices[15][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[15][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[15][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[15][3] = "Todas las anteriores.";
 answers[15] = 3;
 units[15] = ['7', '19'];
 blocks[15] = ['A2', 'A4'];
 comments[15] = "Id Pregunta: 9903. ";
 preguntaids[15] = 9903


//  Id pregunta: 3596 Año de creación de pregunta: 2004
 questions[16]= "17)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[16]= new Array();
 choices[16][0] = "Dise&ntilde;o";
 choices[16][1] = "Estudio de viabilidad";
 choices[16][2] = "An&aacute;lisis orientado a objetos";
 choices[16][3] = "An&aacute;lisis estructurado";
 answers[16] = 3;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3596. Examen Seguridad Social-A 2004";
 preguntaids[16] = 3596


//  Id pregunta: 10008 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[17]= new Array();
 choices[17][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[17][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[17][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[17][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[17] = 0;
 units[17] = ['74'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10008. Examen TIC A2 2014";
 preguntaids[17] = 10008


//  Id pregunta: 10662 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece las condiciones para la habilitaci&oacute;n del ejercicio de los derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[18]= new Array();
 choices[18][0] = "Ministerio de Energia, Turismo y Agenda Digital.";
 choices[18][1] = "CNMC.";
 choices[18][2] = "El Gobierno.";
 choices[18][3] = "La Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 answers[18] = 2;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10662. ";
 preguntaids[18] = 10662


//  Id pregunta: 4932 Año de creación de pregunta: 2002
 questions[19]= "20)  Un BALUN:";
 choices[19]= new Array();
 choices[19][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[19][1] = "Adapta un conector RJ45 y BNC.";
 choices[19][2] = "Es un conector entre RJ11 y RJ45.";
 choices[19][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[19] = 0;
 units[19] = ['104'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4932. ";
 preguntaids[19] = 4932


//  Id pregunta: 6296 Año de creación de pregunta: 2003
 questions[20]= "21)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al proceso unificado desarrollo de software (PUDS):";
 choices[20]= new Array();
 choices[20][0] = "Plantea un modelo de ciclo de vida iterativo e incremental, centrado en una arquitectura que gu&iacute;a el desarrollo del sistema.";
 choices[20][1] = "PUDS impulsa un control de calidad y una gesti&oacute;n de riesgos objetivos y continua.";
 choices[20][2] = "PUDS se compone de fases, iteraciones y ciclos";
 choices[20][3] = "Todas las anteriores son correctas";
 answers[20] = 3;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 6296. ";
 preguntaids[20] = 6296


//  Id pregunta: 5174 Año de creación de pregunta: 2003
 questions[21]= "22)  Indicar la afirmaci&oacute;n correcta:";
 choices[21]= new Array();
 choices[21][0] = "MPLS es un est&aacute;ndar ISO de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes orientadas a conexi&oacute;na las redes no orientadasa conexi&oacute;n";
 choices[21][1] = "Una red MPLS est&aacute; compuestapor dos tipos principales denodos, los LER (Label End Routers)y los LSR (Label Switching Routers)";
 choices[21][2] = "MPLS es un est&aacute;ndar IP del IETF de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes no orientadas a conexi&oacute;na las redes orientadasa conexi&oacute;n";
 choices[21][3] = "MPLS se implementahabitualmente como una soluci&oacute;n IPpura o de nivel 3";
 answers[21] = 3;
 units[21] = ['107'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5174. ";
 preguntaids[21] = 5174


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[22]= new Array();
 choices[22][0] = "De los derechos y deberes fundamentales.";
 choices[22][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[22][2] = "Derechos y libertades.";
 choices[22][3] = "De la Corona.";
 answers[22] = 0;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 48. Constituci&oacute;n de 1978";
 preguntaids[22] = 48


//  Id pregunta: 8982 Año de creación de pregunta: 2013
 questions[23]= "24)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[23]= new Array();
 choices[23][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[23][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[23][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[23][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[23] = 0;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 8982. Ley 59/2003, art&iacute;culo 33";
 preguntaids[23] = 8982


//  Id pregunta: 2639 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l es el significado de ASCII?:";
 choices[24]= new Array();
 choices[24][0] = "American System Code for Input Information";
 choices[24][1] = "Asynchonous System Code fot International Information";
 choices[24][2] = "American Standard Code for Input Information";
 choices[24][3] = "American Standard Code for Information Interchange";
 answers[24] = 3;
 units[24] = ['50'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2639. ";
 preguntaids[24] = 2639


//  Id pregunta: 9592 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[25]= new Array();
 choices[25][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[25][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[25][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[25][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[25] = 1;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9592. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[25] = 9592


//  Id pregunta: 5399 Año de creación de pregunta: 2006
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "NFS";
 choices[26][1] = "SMTP";
 choices[26][2] = "RPC";
 choices[26][3] = "UDP";
 answers[26] = 3;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5399. ";
 preguntaids[26] = 5399


//  Id pregunta: 8656 Año de creación de pregunta: 2013
 questions[27]= "28)  &iquest;Desde el punto de vista de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[27]= new Array();
 choices[27][0] = "La cinta est&aacute; orientada al almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[27][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[27][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[27][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[27] = 1;
 units[27] = ['53'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8656. ";
 preguntaids[27] = 8656


//  Id pregunta: 2491 Año de creación de pregunta: 2004
 questions[28]= "29)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[28]= new Array();
 choices[28][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[28][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE";
 choices[28][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[28][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[28] = 3;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 2491. Similar a examen TIC SS A 2003";
 preguntaids[28] = 2491


//  Id pregunta: 6792 Año de creación de pregunta: 2010
 questions[29]= "30)  El Organismo de Normalizaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n) desarrolla normas que deben adoptarse &iacute;ntegramente por los OrganismosNacionales de Normalizaci&oacute;n pertenecientes al CEN como normas nacionales.";
 choices[29][1] = "ISO (International Organization for Standardization) tiene la competencia exclusiva de la normalizaci&oacute;n internacional en elcampo de las Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[29][2] = "ISO desarrolla normas que, en la etapa previa a su publicaci&oacute;n como est&aacute;ndar internacional, reciben el nombre deISO/PIS (Preview Draft International Standard).";
 choices[29][3] = "CEN desarrolla en el campo de las Tecnolog&iacute;as de la Informaci&oacute;n Acuerdos de Trabajo (CWA) que tienen la categor&iacute;a deNormas Europeas (EN).";
 answers[29] = 0;
 units[29] = ['48'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 6792. TIC A 2009";
 preguntaids[29] = 6792


//  Id pregunta: 2883 Año de creación de pregunta: 2002
 questions[30]= "31)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[30]= new Array();
 choices[30][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[30][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[30][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[30][3] = "Todas las anteriores son ciertas";
 answers[30] = 1;
 units[30] = ['64', '65'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2883. ";
 preguntaids[30] = 2883


//  Id pregunta: 6367 Año de creación de pregunta: 2003
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[31]= new Array();
 choices[31][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[31][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[31][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[31][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[31] = 1;
 units[31] = ['100'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6367. Examen 2006 JCYL";
 preguntaids[31] = 6367


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[32]= "33)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[32]= new Array();
 choices[32][0] = "Las respuestas a) y b) son correctas.";
 choices[32][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[32][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[32][3] = "Las respuestas a) y b) no son correctas.";
 answers[32] = 0;
 units[32] = ['11'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 314. Presupuestos generales";
 preguntaids[32] = 314


//  Id pregunta: 1416 Año de creación de pregunta: 2016
 questions[33]= "34)  La Constituci&oacute;n Espa&ntilde;ola de 1978 se estructura en :";
 choices[33]= new Array();
 choices[33][0] = "169 art&iacute;culos, 9 disposiciones adicionales, 4 transitorias, 1 disposici&oacute;n final.";
 choices[33][1] = "167 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 choices[33][2] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 2 disposiciones finales.";
 choices[33][3] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 answers[33] = 3;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 1416. ";
 preguntaids[33] = 1416


//  Id pregunta: 5477 Año de creación de pregunta: 2007
 questions[34]= "35)  Identifique cu&aacute;l de las siguientes alternativas sobre lenguajes de comandos o de control de &oacute;rdenes del Sistema UNIX es correcta:";
 choices[34]= new Array();
 choices[34][0] = "Bourne Shell (desarrollado por AT&amp;T).";
 choices[34][1] = "Korn Shell (desarrollado por Berkeley y Korn).";
 choices[34][2] = "C Shell (desarrollado por AT&amp;T)";
 choices[34][3] = "Korn Shell (desarrollado por Korn).";
 answers[34] = 0;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5477. ";
 preguntaids[34] = 5477


//  Id pregunta: 9670 Año de creación de pregunta: 2014
 questions[35]= "36)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[35]= new Array();
 choices[35][0] = "Cuantifica la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n.";
 choices[35][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[35][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[35][3] = "A y B.";
 answers[35] = 3;
 units[35] = ['100'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 9670. ";
 preguntaids[35] = 9670


//  Id pregunta: 9885 Año de creación de pregunta: 2015
 questions[36]= "37)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[36]= new Array();
 choices[36][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[36][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[36][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[36][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[36] = 1;
 units[36] = ['7', '19'];
 blocks[36] = ['A2', 'A4'];
 comments[36] = "Id Pregunta: 9885. ";
 preguntaids[36] = 9885


//  Id pregunta: 10673 Año de creación de pregunta: 2015
 questions[37]= "38)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[37]= new Array();
 choices[37][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[37][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[37][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[37][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[37] = 0;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 10673. ";
 preguntaids[37] = 10673


//  Id pregunta: 7782 Año de creación de pregunta: 2010
 questions[38]= "39)  Respecto al correo electr&oacute;nico, &iquest;qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[38]= new Array();
 choices[38][0] = "IMAP es un protocolo de env&iacute;o de correo.";
 choices[38][1] = "POP es un protocolo de acceso a correo.";
 choices[38][2] = "SMTP es un protocolo de transporte de mensajes.";
 choices[38][3] = "MIME permite acentos en los mensajes de correo.";
 answers[38] = 0;
 units[38] = ['116'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7782. ";
 preguntaids[38] = 7782


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[39]= "40)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[39]= new Array();
 choices[39][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[39][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[39][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[39][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[39] = 1;
 units[39] = ['22'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 512. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[39] = 512


//  Id pregunta: 10352 Año de creación de pregunta: 2015
 questions[40]= "41)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[40]= new Array();
 choices[40][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[40][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[40][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[40][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[40] = 3;
 units[40] = ['85'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10352. ";
 preguntaids[40] = 10352


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[41]= new Array();
 choices[41][0] = "24 meses";
 choices[41][1] = "5 a&ntilde;os";
 choices[41][2] = "30 meses";
 choices[41][3] = "4 a&ntilde;os";
 answers[41] = 1;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[41] = 6124


//  Id pregunta: 2750 Año de creación de pregunta: 2002
 questions[42]= "43)  El data warehousing consiste b&aacute;sicamente en:";
 choices[42]= new Array();
 choices[42][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[42][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[42][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[42][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[42] = 2;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2750. ";
 preguntaids[42] = 2750


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[43]= "44)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[43]= new Array();
 choices[43][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[43][1] = "Clasificaci&oacute;n por cuenta.";
 choices[43][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[43][3] = "Clasificaci&oacute;n por intercambio.";
 answers[43] = 3;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 661. Junta de Extremadura A1 2015";
 preguntaids[43] = 661


//  Id pregunta: 4169 Año de creación de pregunta: 2006
 questions[44]= "45)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[44]= new Array();
 choices[44][0] = "Caja blanca";
 choices[44][1] = "Caja negra";
 choices[44][2] = "Integraci&oacute;n";
 choices[44][3] = "Aceptaci&oacute;n";
 answers[44] = 0;
 units[44] = ['85', '86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 4169. ";
 preguntaids[44] = 4169


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[45]= "46)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[45]= new Array();
 choices[45][0] = "Personas jur&iacute;dicas.";
 choices[45][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[45][2] = "Notarios y registradores.";
 choices[45][3] = "Todas las anteriores.";
 answers[45] = 3;
 units[45] = ['7', '19'];
 blocks[45] = ['A2', 'A4'];
 comments[45] = "Id Pregunta: 9887. ";
 preguntaids[45] = 9887


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[46]= "47)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[46]= new Array();
 choices[46][0] = "90";
 choices[46][1] = "50";
 choices[46][2] = "64";
 choices[46][3] = "60";
 answers[46] = 1;
 units[46] = ['5'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 151. Uni&oacute;n Europea";
 preguntaids[46] = 151


//  Id pregunta: 2064 Año de creación de pregunta: 2002
 questions[47]= "48)  En relaci&oacute;n con las pruebas de conformidad, si la comprobaci&oacute;n de que el producto satisface o no los requerimientos t&eacute;cnicos definidos en una norma es realizada por el consumidor, nos estamos refiriendo a:";
 choices[47]= new Array();
 choices[47][0] = "Comprobaci&oacute;n de pimera parte o &ldquo;first party testing&rdquo;";
 choices[47][1] = "Comprobaci&oacute;n de segunda parte o &ldquo; second party testing&rdquo;";
 choices[47][2] = "Comprobaci&oacute;n de tercera parte o &ldquo; third party testing&rdquo;";
 choices[47][3] = "Las pruebas de conformidad no pueden ser realizadas por los consumidores";
 answers[47] = 1;
 units[47] = ['48'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 2064. ";
 preguntaids[47] = 2064


//  Id pregunta: 6702 Año de creación de pregunta: 2009
 questions[48]= "49)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[48]= new Array();
 choices[48][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[48][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[48][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[48][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[48] = 0;
 units[48] = ['119'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 6702. MAP 2008 A1";
 preguntaids[48] = 6702


//  Id pregunta: 6342 Año de creación de pregunta: 2003
 questions[49]= "50)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA:";
 choices[49]= new Array();
 choices[49][0] = "Hibernate";
 choices[49][1] = "Biztalk";
 choices[49][2] = "Java Server Faces";
 choices[49][3] = "Spring";
 answers[49] = 1;
 units[49] = ['116'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6342. ";
 preguntaids[49] = 6342


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[50]= "51)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[50]= new Array();
 choices[50][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[50][1] = "Las comunicaciones comerciales";
 choices[50][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[50][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[50] = 0;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[50] = 5917


//  Id pregunta: 1415 Año de creación de pregunta: 2016
 questions[51]= "52)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:";
 choices[51]= new Array();
 choices[51][0] = "Sancionada y promulgada por el Rey.";
 choices[51][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[51][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[51][3] = "Ninguna es correcta.";
 answers[51] = 3;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 1415. ";
 preguntaids[51] = 1415


//  Id pregunta: 1457 Año de creación de pregunta: 2016
 questions[52]= "53)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres y promover su efectividad, que se define en la ley 3/2007 es:";
 choices[52]= new Array();
 choices[52][0] = "La Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[52][1] = "El Observatorio Nacional de Igualdad entre mujeres y hombres.";
 choices[52][2] = "La Comisi&oacute;n Nacional de Igualdad entre mujeres y hombres.";
 choices[52][3] = "El comit&eacute; de Igualdad efectiva entre mujeres y hombres.";
 answers[52] = 0;
 units[52] = ['14'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 1457. ";
 preguntaids[52] = 1457


//  Id pregunta: 10456 Año de creación de pregunta: 2015
 questions[53]= "54)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[53]= new Array();
 choices[53][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[53][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[53][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[53][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[53] = 1;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10456. ";
 preguntaids[53] = 10456


//  Id pregunta: 10710 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[54]= new Array();
 choices[54][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[54][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[54][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[54][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[54] = 2;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10710. ";
 preguntaids[54] = 10710


//  Id pregunta: 3860 Año de creación de pregunta: 2002
 questions[55]= "56)  Indicar aquella que no es una tarea del departamento de calidad:";
 choices[55]= new Array();
 choices[55][0] = "Desarrollo de pol&iacute;ticas, procedimientos y normas";
 choices[55][1] = "Certificaci&oacute;n y prueba del software";
 choices[55][2] = "Planificar la estrategia de la organizaci&oacute;n";
 choices[55][3] = "Auditor&iacute;as, revisiones e inspecciones";
 answers[55] = 2;
 units[55] = ['92', '93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3860. ";
 preguntaids[55] = 3860


//  Id pregunta: 1422 Año de creación de pregunta: 2016
 questions[56]= "57)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:";
 choices[56]= new Array();
 choices[56][0] = "De calamidad p&uacute;blica.";
 choices[56][1] = "De grave riesgo.";
 choices[56][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[56][3] = "En cualquiera de las situaciones anteriores.";
 answers[56] = 2;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 1422. ";
 preguntaids[56] = 1422


//  Id pregunta: 8177 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[57]= new Array();
 choices[57][0] = "Microstrategy OLAP Services.";
 choices[57][1] = "MDX OLAP server.";
 choices[57][2] = "Oracle Database OLAP.";
 choices[57][3] = "Mondrian OLAP Server.";
 answers[57] = 1;
 units[57] = ['72'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8177. Examen TIC A2 2010 interna";
 preguntaids[57] = 8177


//  Id pregunta: 3563 Año de creación de pregunta: 2004
 questions[58]= "59)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[58]= new Array();
 choices[58][0] = "UML";
 choices[58][1] = "XML";
 choices[58][2] = "HTML";
 choices[58][3] = "Ninguno de los anteriores";
 answers[58] = 0;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3563. Similar a examen TIC SS A 2003";
 preguntaids[58] = 3563


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[59]= "60)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Discriminaci&oacute;n indirecta.";
 choices[59][1] = "Discriminaci&oacute;n directa.";
 choices[59][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[59][3] = "Discriminaci&oacute;n abusiva.";
 answers[59] = 0;
 units[59] = ['14'];
 blocks[59] = ['A3'];
 comments[59] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[59] = 374


//  Id pregunta: 9701 Año de creación de pregunta: 2014
 questions[60]= "61)  &iquest;En qu&eacute; se basa el m&eacute;todo de Karner?";
 choices[60]= new Array();
 choices[60][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[60][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[60][2] = "Se aplica en Cocomo semipesado";
 choices[60][3] = "Variante del m&eacute;todo Mark II";
 answers[60] = 0;
 units[60] = ['94'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 9701. ";
 preguntaids[60] = 9701


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[61]= new Array();
 choices[61][0] = "23";
 choices[61][1] = "25";
 choices[61][2] = "14";
 choices[61][3] = "18";
 answers[61] = 1;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 163. Uni&oacute;n Europea";
 preguntaids[61] = 163


//  Id pregunta: 4448 Año de creación de pregunta: 2002
 questions[62]= "63)  &quot;Red con un alto grado de cohesi&oacute;n y transparencia que hace que el usuario no vea a las funciones como repartidas entre los distintos elementos de la red&quot;. Es la definici&oacute;n de:";
 choices[62]= new Array();
 choices[62][0] = "Sistema abierto";
 choices[62][1] = "Sistema distribuido";
 choices[62][2] = "Intranet";
 choices[62][3] = "Sistema aut&oacute;nomo";
 answers[62] = 1;
 units[62] = ['102'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4448. ";
 preguntaids[62] = 4448


//  Id pregunta: 4358 Año de creación de pregunta: 2004
 questions[63]= "64)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[63]= new Array();
 choices[63][0] = "10.2.40.64";
 choices[63][1] = "10.2.41.45";
 choices[63][2] = "10.2.40.63";
 choices[63][3] = "10.2.40.62";
 answers[63] = 3;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4358. ";
 preguntaids[63] = 4358


//  Id pregunta: 8302 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[64]= new Array();
 choices[64][0] = "SISD";
 choices[64][1] = "SIMD";
 choices[64][2] = "MISD";
 choices[64][3] = "MIMD";
 answers[64] = 2;
 units[64] = ['49'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8302. Examen UPM A2 2011";
 preguntaids[64] = 8302


//  Id pregunta: 10861 Año de creación de pregunta: 2015
 questions[65]= "66)  El JRE no contiene el nivel de:";
 choices[65]= new Array();
 choices[65][0] = "Herramientas de interfaz de usuario";
 choices[65][1] = "Despliegue";
 choices[65][2] = "Librer&iacute;as de integraci&oacute;n";
 choices[65][3] = "Contiene los 3 niveles";
 answers[65] = 3;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 10861. ";
 preguntaids[65] = 10861


//  Id pregunta: 5761 Año de creación de pregunta: 2007
 questions[66]= "67)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[66]= new Array();
 choices[66][0] = "activo";
 choices[66][1] = "salvaguarda";
 choices[66][2] = "amenaza";
 choices[66][3] = "vulnerabilidad";
 answers[66] = 3;
 units[66] = ['45'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 5761. ";
 preguntaids[66] = 5761


//  Id pregunta: 1533 Año de creación de pregunta: 2016
 questions[67]= "68)  Los certificados de identidad p&uacute;blica que est&aacute;n contenidos en el DNI electr&oacute;nico pueden ser revocados por:";
 choices[67]= new Array();
 choices[67][0] = "Compromiso de la clave p&uacute;blica de la Autoridad de Certificaci&oacute;n de la Direcci&oacute;n General de la Polic&iacute;a.";
 choices[67][1] = "Declaraci&oacute;n de que el ciudadano no tiene capacidad de firma (pr&oacute;digo).";
 choices[67][2] = "Tras la renovaci&oacute;n en todos los casos.";
 choices[67][3] = "Compromiso de la clave p&uacute;blica del ciudadano,";
 answers[67] = 1;
 units[67] = ['78'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1533. ";
 preguntaids[67] = 1533


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[68]= "69)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[68]= new Array();
 choices[68][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[68][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[68][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[68][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[68] = 0;
 units[68] = ['11'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 317. Presupuestos generales";
 preguntaids[68] = 317


//  Id pregunta: 7769 Año de creación de pregunta: 2010
 questions[69]= "70)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?";
 choices[69]= new Array();
 choices[69][0] = "Es una red que interconecta las redes Administrativas de los estados miembros y de las instituciones y agencias europeas.";
 choices[69][1] = "Es un instrumento vertebrador e integrador que ofrece a las Administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones.";
 choices[69][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet.";
 choices[69][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC.";
 answers[69] = 2;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 7769. ";
 preguntaids[69] = 7769


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[70]= "71)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[70]= new Array();
 choices[70][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[70][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[70][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[70][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[70] = 0;
 units[70] = ['8'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 256. Ley 39/2015";
 preguntaids[70] = 256


//  Id pregunta: 2218 Año de creación de pregunta: 2002
 questions[71]= "72)  La definici&oacute;n de un entorno com&uacute;n para portabilidad de Aplicaciones fuente (Homogeneidad de Compiladores, APIs&hellip;) es una de las preocupaciones fundamentales del X/Open (actualmente Open Group) que se conoce como:";
 choices[71]= new Array();
 choices[71][0] = "XTI";
 choices[71][1] = "CAE";
 choices[71][2] = "APA";
 choices[71][3] = "GOSIP";
 answers[71] = 1;
 units[71] = ['43'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2218. ";
 preguntaids[71] = 2218


//  Id pregunta: 8999 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[72]= new Array();
 choices[72][0] = "Relacional";
 choices[72][1] = "En red";
 choices[72][2] = "Jer&aacute;rquico";
 choices[72][3] = "Multidimensional";
 answers[72] = 2;
 units[72] = ['60'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8999. ";
 preguntaids[72] = 8999


//  Id pregunta: 911 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;A partir de qu&eacute; generaci&oacute;n empieza la telefonia m&oacute;vil digital?";
 choices[73]= new Array();
 choices[73][0] = "OG IMTS (lmproved Mobile Telephone System).";
 choices[73][1] = "IG TACS (Total Access Communication System).";
 choices[73][2] = "2G GSM (Global System for Mobile Communications).";
 choices[73][3] = "3G GPRS (Generat Packet Radio Service).";
 answers[73] = 2;
 units[73] = ['117'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 911. AGE A2 2015";
 preguntaids[73] = 911


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[74]= new Array();
 choices[74][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[74][1] = "Todas las respuestas son correctas.";
 choices[74][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[74][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[74] = 1;
 units[74] = ['11'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 292. Presupuestos generales";
 preguntaids[74] = 292


