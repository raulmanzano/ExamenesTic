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
//  Id pregunta: 7149 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;ntas pautas se definen en total en las gu&iacute;as WCAG 2.0?";
 choices[0]= new Array();
 choices[0][0] = "12";
 choices[0][1] = "14";
 choices[0][2] = "25";
 choices[0][3] = "81";
 answers[0] = 0;
 units[0] = ['42'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 7149. ";
 preguntaids[0] = 7149


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[1]= "2)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[1]= new Array();
 choices[1][0] = "los Secretarios de Estado";
 choices[1][1] = "los Ministros";
 choices[1][2] = "los Subsecretarios";
 choices[1][3] = "los Secretarios generales";
 answers[1] = 2;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[1] = 1006


//  Id pregunta: 9947 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l es el &aacute;mbito de referencia de aplicaci&oacute;n se&ntilde;alado en el RD 806/2014?";
 choices[2]= new Array();
 choices[2][0] = "Administraci&oacute;n General del Estado.";
 choices[2][1] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[2][2] = "Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales.";
 choices[2][3] = "Conjunto del Sector P&uacute;blico.";
 answers[2] = 1;
 units[2] = ['26'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9947. ";
 preguntaids[2] = 9947


//  Id pregunta: 3730 Año de creación de pregunta: 2002
 questions[3]= "4)  A la extensi&oacute;n por la cual el acceso a software o datos por personas no autorizadas puede ser controlado se llama:";
 choices[3]= new Array();
 choices[3][0] = "Correcci&oacute;n";
 choices[3][1] = "Fiabilidad";
 choices[3][2] = "Eficiencia";
 choices[3][3] = "Integridad";
 answers[3] = 3;
 units[3] = ['93'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3730. ";
 preguntaids[3] = 3730


//  Id pregunta: 9789 Año de creación de pregunta: 2015
 questions[4]= "5)  Seg&uacute;n el criterio de subsidiariedad a la hora de implantar una infraestructura com&uacute;n, es m&aacute;s conveniente:";
 choices[4]= new Array();
 choices[4][0] = "Forzar su utilizaci&oacute;n por todos los entes implicados.";
 choices[4][1] = "Establecer su uso como voluntario.";
 choices[4][2] = "Recomendar la utilizaci&oacute;n parcial de la infraestructura.";
 choices[4][3] = "Ninguna de las anteriores.";
 answers[4] = 1;
 units[4] = ['47'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 9789. ";
 preguntaids[4] = 9789


//  Id pregunta: 8208 Año de creación de pregunta: 2011
 questions[5]= "6)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[5]= new Array();
 choices[5][0] = "(A, B, C), (A, B, D).";
 choices[5][1] = "(A, B, C), (B, D).";
 choices[5][2] = "(A, B, C),  (A, D).";
 choices[5][3] = "Ya est&aacute; en 2FN.";
 answers[5] = 1;
 units[5] = ['60', '61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8208. Examen TIC A2 2010 interna";
 preguntaids[5] = 8208


//  Id pregunta: 6403 Año de creación de pregunta: 2003
 questions[6]= "7)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[6]= new Array();
 choices[6][0] = "Nada";
 choices[6][1] = "Una lectura sucia";
 choices[6][2] = "Una lectura fantasma";
 choices[6][3] = "Una escritura sucia";
 answers[6] = 2;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6403. ";
 preguntaids[6] = 6403


//  Id pregunta: 9459 Año de creación de pregunta: 2014
 questions[7]= "8)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[7][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares.";
 choices[7][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[7][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[7] = 2;
 units[7] = ['27'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 9459. ";
 preguntaids[7] = 9459


//  Id pregunta: 1714 Año de creación de pregunta: 2016
 questions[8]= "9)  En un entorno JAVA, la conexi&oacute;n entre m&oacute;dulos que componen una aplicaci&oacute;n se verifica en:";
 choices[8]= new Array();
 choices[8][0] = "Tiempo de compilaci&oacute;n.";
 choices[8][1] = "Tiempo de ejecuci&oacute;n.";
 choices[8][2] = "Tiempo de verificaci&oacute;n.";
 choices[8][3] = "Tiempo de ensamblaje.";
 answers[8] = 1;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1714. ";
 preguntaids[8] = 1714


//  Id pregunta: 4093 Año de creación de pregunta: 2003
 questions[9]= "10)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[9]= new Array();
 choices[9][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[9][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[9][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[9][3] = "No existe la versi&oacute;n II de cocomo";
 answers[9] = 1;
 units[9] = ['94'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 4093. ";
 preguntaids[9] = 4093


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[10]= "11)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[10]= new Array();
 choices[10][0] = "61";
 choices[10][1] = "53";
 choices[10][2] = "65";
 choices[10][3] = "67";
 answers[10] = 2;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 76. Constituci&oacute;n de 1978";
 preguntaids[10] = 76


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[11]= new Array();
 choices[11][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[11][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[11][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[11][3] = "El Instituto de la Mujer de Extremadura.";
 answers[11] = 3;
 units[11] = ['14'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 360. Junta de Extremadura A1 2015";
 preguntaids[11] = 360


//  Id pregunta: 10016 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[12]= new Array();
 choices[12][0] = "EUPL";
 choices[12][1] = "GPL";
 choices[12][2] = "LGPL";
 choices[12][3] = "BSD";
 answers[12] = 3;
 units[12] = ['66'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10016. Examen TIC A2 2014";
 preguntaids[12] = 10016


//  Id pregunta: 5037 Año de creación de pregunta: 2002
 questions[13]= "14)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[13]= new Array();
 choices[13][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[13][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[13][2] = "desempe&ntilde;an funciones de proxy";
 choices[13][3] = "ninguna de las anteriores respuestas es correcta";
 answers[13] = 0;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5037. ";
 preguntaids[13] = 5037


//  Id pregunta: 5509 Año de creación de pregunta: 2007
 questions[14]= "15)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[14]= new Array();
 choices[14][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[14][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[14][2] = "La direcci&oacute;n IP del MAP.";
 choices[14][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[14] = 2;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 5509. ";
 preguntaids[14] = 5509


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[15]= "16)  La soberan&iacute;a nacional reside en:";
 choices[15]= new Array();
 choices[15][0] = "el Parlamento nacional.";
 choices[15][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[15][2] = "el pueblo espa&ntilde;ol.";
 choices[15][3] = "el Congreso y el Senado.";
 answers[15] = 2;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[15] = 82


//  Id pregunta: 5500 Año de creación de pregunta: 2007
 questions[16]= "17)  La tecnolog&iacute;a dominante hoy en d&iacute;a en el campo de las redes locales es:";
 choices[16]= new Array();
 choices[16][0] = "Ethernet.";
 choices[16][1] = "Arcnet";
 choices[16][2] = "Arpanet.";
 choices[16][3] = "Sarenet";
 answers[16] = 0;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5500. ";
 preguntaids[16] = 5500


//  Id pregunta: 8452 Año de creación de pregunta: 2011
 questions[17]= "18)  En los Esquemas de copo de nieve:";
 choices[17]= new Array();
 choices[17][0] = "Existe redundancia.";
 choices[17][1] = "No se ahorra espacio.";
 choices[17][2] = "No existe una tabla de hechos central.";
 choices[17][3] = "Las tablas est&aacute;n normalizadas.";
 answers[17] = 3;
 units[17] = ['72'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8452. ";
 preguntaids[17] = 8452


//  Id pregunta: 2093 Año de creación de pregunta: 2009
 questions[18]= "19)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[18]= new Array();
 choices[18][0] = "Es nombrado por las Cortes Generales";
 choices[18][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[18][2] = "Ostenta el rango de Subsecretario";
 choices[18][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[18] = 2;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2093. ";
 preguntaids[18] = 2093


//  Id pregunta: 10281 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes pasos NO corresponde al modelo de Mejora Continua del Servicio (CSI)?";
 choices[19]= new Array();
 choices[19][0] = "&iquest;Cual es la visi&oacute;n?";
 choices[19][1] = "&iquest;C&oacute;mo llegamos?";
 choices[19][2] = "&iquest;Hay presupuesto?";
 choices[19][3] = "&iquest; D&oacute;nde estamos ahora?";
 answers[19] = 2;
 units[19] = ['101'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 10281. ";
 preguntaids[19] = 10281


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[20]= "21)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[20]= new Array();
 choices[20][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[20][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[20][2] = "el sector p&uacute;blico institucional";
 choices[20][3] = "el sector privado corporativo";
 answers[20] = 3;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 214. Ley 39/2015";
 preguntaids[20] = 214


//  Id pregunta: 8479 Año de creación de pregunta: 2011
 questions[21]= "22)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[21]= new Array();
 choices[21][0] = "1 maestro y 7 esclavos";
 choices[21][1] = "1 maestro y 15 esclavos";
 choices[21][2] = "1 maestro y 16 esclavos";
 choices[21][3] = "1 maestro y 32 esclavos";
 answers[21] = 0;
 units[21] = ['108'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 8479. Examen UPM A2 2011";
 preguntaids[21] = 8479


//  Id pregunta: 9075 Año de creación de pregunta: 2014
 questions[22]= "23)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[22]= new Array();
 choices[22][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[22][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[22][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[22][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[22] = 2;
 units[22] = ['71'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9075. ";
 preguntaids[22] = 9075


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[23]= new Array();
 choices[23][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[23][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[23][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[23][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[23] = 3;
 units[23] = ['11'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 281. Presupuestos generales";
 preguntaids[23] = 281


//  Id pregunta: 10334 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[24]= new Array();
 choices[24][0] = "Native-Api Driver";
 choices[24][1] = "Network Protocol Driver";
 choices[24][2] = "Native Protocol Driver";
 choices[24][3] = "JDBC-OBDC Bridge";
 answers[24] = 1;
 units[24] = ['61'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10334. ";
 preguntaids[24] = 10334


//  Id pregunta: 1284 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Todas las Administraciones P&uacute;blicas,";
 choices[25][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica.";
 choices[25][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma.";
 choices[25][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[25] = 2;
 units[25] = ['47'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 1284. ";
 preguntaids[25] = 1284


//  Id pregunta: 2258 Año de creación de pregunta: 2002
 questions[26]= "27)  Los datos de car&aacute;cter personal que hagan referencia al origen racial, a la salud y a la vida sexual s&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando:";
 choices[26]= new Array();
 choices[26][0] = "Cuando lo disponga una Ley";
 choices[26][1] = "Si el afectado consiente expresamente.";
 choices[26][2] = "En los supuestos 'a' o 'b'.";
 choices[26][3] = "Nunca";
 answers[26] = 2;
 units[26] = ['35'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2258. ";
 preguntaids[26] = 2258


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique la afirmaci&oacute;n falsa:";
 choices[27]= new Array();
 choices[27][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[27][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[27][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[27][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[27] = 1;
 units[27] = ['22'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 509. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[27] = 509


//  Id pregunta: 3146 Año de creación de pregunta: 2002
 questions[28]= "29)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[28]= new Array();
 choices[28][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[28][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[28][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[28][3] = "Todo lo anterior es falso";
 answers[28] = 3;
 units[28] = ['122'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 3146. ";
 preguntaids[28] = 3146


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[29]= new Array();
 choices[29][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[29][1] = "Entrada en la Uni&oacute;n Europea";
 choices[29][2] = "Pactos de la Moncloa";
 choices[29][3] = "Ingreso en la ONU";
 answers[29] = 3;
 units[29] = ['12'];
 blocks[29] = ['A3'];
 comments[29] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[29] = 347


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[30]= new Array();
 choices[30][0] = "Jenkins";
 choices[30][1] = "Hudson";
 choices[30][2] = "SonarQube";
 choices[30][3] = "Todas lo son";
 answers[30] = 3;
 units[30] = ['92'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 835. Integraci&oacute;n continua";
 preguntaids[30] = 835


//  Id pregunta: 8060 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[31]= new Array();
 choices[31][0] = "Bluetooth";
 choices[31][1] = "PayPal Mobile";
 choices[31][2] = "NFC (Near Field Communication)";
 choices[31][3] = "3D Secure";
 answers[31] = 2;
 units[31] = ['75', '108'];
 blocks[31] = ['B2', 'B4'];
 comments[31] = "Id Pregunta: 8060. ";
 preguntaids[31] = 8060


//  Id pregunta: 3205 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[32]= new Array();
 choices[32][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[32][1] = "Seguridad";
 choices[32][2] = "Correo Electr&oacute;nico";
 choices[32][3] = "Transmisi&oacute;n de ficheros";
 answers[32] = 3;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3205. ";
 preguntaids[32] = 3205


//  Id pregunta: 2292 Año de creación de pregunta: 2009
 questions[33]= "34)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[33]= new Array();
 choices[33][0] = "Con consentimiento expreso del afectado";
 choices[33][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[33][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[33][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[33] = 1;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2292. ";
 preguntaids[33] = 2292


//  Id pregunta: 5290 Año de creación de pregunta: 2006
 questions[34]= "35)  Un servlet de Java tiene como principales caracter&iacute;sticas (se&ntilde;ale la falsa)";
 choices[34]= new Array();
 choices[34][0] = "su instalaci&oacute;n, gesti&oacute;n y ejecuci&oacute;n se realiza en un componente denominado contenedor";
 choices[34][1] = "requieren escaso c&oacute;digo para conseguir un nivel aceptable de presentaci&oacute;n, por lo cual han desplazado en parte a los JSPs";
 choices[34][2] = "Heredan de la clase abstracta HttpServlet";
 choices[34][3] = "Son todas correctas";
 answers[34] = 1;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5290. ";
 preguntaids[34] = 5290


//  Id pregunta: 7823 Año de creación de pregunta: 2010
 questions[35]= "36)  Los cifrados de clave p&uacute;blica:";
 choices[35]= new Array();
 choices[35][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos.";
 choices[35][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular.";
 choices[35][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora.";
 choices[35][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves.";
 answers[35] = 0;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7823. ";
 preguntaids[35] = 7823


//  Id pregunta: 1232 Año de creación de pregunta: 2016
 questions[36]= "37)  Tal y como indica la Ley 9/2014, General de Telecomunicaciones, en su art&iacute;culo 84, tienen competencia sancionadora (se&ntilde;ale la respuesta FALSA):";
 choices[36]= new Array();
 choices[36][0] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[36][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[36][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[36][3] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[36] = 2;
 units[36] = ['121'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1232. ";
 preguntaids[36] = 1232


//  Id pregunta: 5702 Año de creación de pregunta: 2007
 questions[37]= "38)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[37]= new Array();
 choices[37][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[37][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[37][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[37][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[37] = 1;
 units[37] = ['121'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5702. ";
 preguntaids[37] = 5702


//  Id pregunta: 8264 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[38]= new Array();
 choices[38][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[38][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[38][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[38][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[38] = 1;
 units[38] = ['7'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 8264. Examen TIC A2 2010 interna";
 preguntaids[38] = 8264


//  Id pregunta: 7303 Año de creación de pregunta: 2010
 questions[39]= "40)  Un contrato de suministros del Ministerio del Interior estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es:";
 choices[39]= new Array();
 choices[39][0] = "Igual o superior a 135.000 euros";
 choices[39][1] = "Superior a 125.000";
 choices[39][2] = "Igual o superior a 209.000";
 choices[39][3] = "Superior a 193.000";
 answers[39] = 0;
 units[39] = ['37'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 7303. Nuevos importes SARA";
 preguntaids[39] = 7303


//  Id pregunta: 5251 Año de creación de pregunta: 2006
 questions[40]= "41)  Un mensaje se puede cifrar";
 choices[40]= new Array();
 choices[40][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[40][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[40][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[40][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[40] = 0;
 units[40] = ['120'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5251. ";
 preguntaids[40] = 5251


//  Id pregunta: 10849 Año de creación de pregunta: 2015
 questions[41]= "42)  El incumplimiento por los operadores, o por los propietarios de los correspondientes recursos asociados, de las obligaciones establecidas para la utilizaci&oacute;n compartida de los tramos finales de las redes de acceso, se recoge en la Ley 9/2014, General de Telecomunicaciones como una infracci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Leve";
 choices[41][1] = "Grave";
 choices[41][2] = "Muy grave";
 choices[41][3] = "Dicha infracci&oacute;n no se encuentra recogida en la Ley 9/2014.";
 answers[41] = 1;
 units[41] = ['121'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 10849. ";
 preguntaids[41] = 10849


//  Id pregunta: 7202 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[42]= new Array();
 choices[42][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[42][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[42][2] = "Porque mejora el enrutamiento";
 choices[42][3] = "Por analog&iacute;a con Ethernet";
 answers[42] = 1;
 units[42] = ['107'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7202. Castilla La Mancha 2009";
 preguntaids[42] = 7202


//  Id pregunta: 2044 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[43]= new Array();
 choices[43][0] = "M&eacute;todo promethee";
 choices[43][1] = "Utilidad multiatributo";
 choices[43][2] = "Permutaci&oacute;n";
 choices[43][3] = "Ninguno de los anteriores";
 answers[43] = 3;
 units[43] = ['38'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2044. ";
 preguntaids[43] = 2044


//  Id pregunta: 8144 Año de creación de pregunta: 2011
 questions[44]= "45)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[44]= new Array();
 choices[44][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[44][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[44][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[44][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[44] = 0;
 units[44] = ['108'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8144. Examen TIC A2 2010 interna";
 preguntaids[44] = 8144


//  Id pregunta: 5689 Año de creación de pregunta: 2007
 questions[45]= "46)  En java, &iquest;c&oacute;mo se hace referencia al objeto actual sobre el que ha sido llamado el m&eacute;todo que se esta ejecutando?";
 choices[45]= new Array();
 choices[45][0] = "Con la referencia this.";
 choices[45][1] = "Con la referencia null.";
 choices[45][2] = "No es posible.";
 choices[45][3] = "Invocando el m&eacute;todo get.";
 answers[45] = 0;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 5689. ";
 preguntaids[45] = 5689


//  Id pregunta: 9828 Año de creación de pregunta: 2015
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[46]= new Array();
 choices[46][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[46][1] = "Sitio web din&aacute;mico.";
 choices[46][2] = "Una plataforma de e-learning.";
 choices[46][3] = "Todas las anteriores.";
 answers[46] = 3;
 units[46] = ['63'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9828. ";
 preguntaids[46] = 9828


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[47]= "48)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[47]= new Array();
 choices[47][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[47][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[47][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[47][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[47] = 2;
 units[47] = ['10', '75'];
 blocks[47] = ['A2', 'B2'];
 comments[47] = "Id Pregunta: 3050. ";
 preguntaids[47] = 3050


//  Id pregunta: 5339 Año de creación de pregunta: 2006
 questions[48]= "49)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[48]= new Array();
 choices[48][0] = "Carnivore";
 choices[48][1] = "Internet Key Exchange (IKE)";
 choices[48][2] = "Kerberos";
 choices[48][3] = "SSL";
 answers[48] = 0;
 units[48] = ['120'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5339. ";
 preguntaids[48] = 5339


//  Id pregunta: 7076 Año de creación de pregunta: 2010
 questions[49]= "50)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[49][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[49][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[49][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[49] = 2;
 units[49] = ['72'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7076. ";
 preguntaids[49] = 7076


//  Id pregunta: 7432 Año de creación de pregunta: 2010
 questions[50]= "51)  La plataforma de servicios de validaci&oacute;n y firma electr&oacute;nica con la que las Administraciones P&uacute;blicas disponen de los instrumentos necesarios para implementar la autenticaci&oacute;n y firma electr&oacute;nica avanzada se denomina:";
 choices[50]= new Array();
 choices[50][0] = "SVF";
 choices[50][1] = "@Firma";
 choices[50][2] = "ValidaFirma";
 choices[50][3] = "VerificaFirma";
 answers[50] = 1;
 units[50] = ['47'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 7432. ";
 preguntaids[50] = 7432


//  Id pregunta: 1032 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[51]= new Array();
 choices[51][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[51][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[51][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[51][3] = "Todas son correctas.";
 answers[51] = 3;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 1032. Ley 40/2015";
 preguntaids[51] = 1032


//  Id pregunta: 6443 Año de creación de pregunta: 2003
 questions[52]= "53)  Indique la respuesta falsa";
 choices[52]= new Array();
 choices[52][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[52][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[52][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[52][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[52] = 0;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 6443. ";
 preguntaids[52] = 6443


//  Id pregunta: 3878 Año de creación de pregunta: 2002
 questions[53]= "54)  La necesidad b&aacute;sica de la garant&iacute;a de calidad:";
 choices[53]= new Array();
 choices[53][0] = "Est&aacute; relacionada con el potencial de errores o defectos latentes en el producto software";
 choices[53][1] = "Est&aacute; relacionada con la necesidad de abaratar costes";
 choices[53][2] = "Est&aacute; relacionada con la disfunci&oacute;n recurrente";
 choices[53][3] = "Est&aacute; relacionada con la ley de Markov";
 answers[53] = 0;
 units[53] = ['92'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3878. ";
 preguntaids[53] = 3878


//  Id pregunta: 9099 Año de creación de pregunta: 2014
 questions[54]= "55)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[54]= new Array();
 choices[54][0] = "48 meses.";
 choices[54][1] = "24 meses.";
 choices[54][2] = "12 meses.";
 choices[54][3] = "6 meses.";
 answers[54] = 2;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 9099. Examen TIC-A1 2013";
 preguntaids[54] = 9099


//  Id pregunta: 2698 Año de creación de pregunta: 2002
 questions[55]= "56)  COM:";
 choices[55]= new Array();
 choices[55][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[55][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[55][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[55][3] = "Todas las respuestas anteriores son ciertas";
 answers[55] = 3;
 units[55] = ['63'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2698. ";
 preguntaids[55] = 2698


//  Id pregunta: 8376 Año de creación de pregunta: 2011
 questions[56]= "57)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[56]= new Array();
 choices[56][0] = "El c&oacute;digo fuente.";
 choices[56][1] = "El c&oacute;digo m&aacute;quina.";
 choices[56][2] = "El c&oacute;digo clase.";
 choices[56][3] = "El c&oacute;digo de enlazado.";
 answers[56] = 0;
 units[56] = ['85'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 8376. Examen UPM A2 2011";
 preguntaids[56] = 8376


//  Id pregunta: 1890 Año de creación de pregunta: 2016
 questions[57]= "58)  Se ha decidido establecer un Centro de Atenci&oacute;n de Usuarios (CAU) en la organizaci&oacute;n para atender las necesidades de los usuarios en cuanto a nuevas peticiones y problemas. &iquest;Que NO corresponde a los principios que deben regir dicho CAU?:";
 choices[57]= new Array();
 choices[57][0] = "Documentar las soluciones dadas a las incidencias creadas";
 choices[57][1] = "Generar una base de datos del conocimiento";
 choices[57][2] = "Disponer de un punto de contacto &uacute;nico al usuario final";
 choices[57][3] = "Detectar necesidades de los usuarios";
 answers[57] = 3;
 units[57] = ['101'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 1890. ";
 preguntaids[57] = 1890


//  Id pregunta: 8976 Año de creación de pregunta: 2013
 questions[58]= "59)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[58]= new Array();
 choices[58][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[58][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[58][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[58][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[58] = 1;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 8976. Examen TIC A1 2011";
 preguntaids[58] = 8976


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[59]= new Array();
 choices[59][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[59][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[59][2] = "A y B son correctas.";
 choices[59][3] = "A y B son incorrectas.";
 answers[59] = 2;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[59] = 1040


//  Id pregunta: 5881 Año de creación de pregunta: 2007
 questions[60]= "61)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[60]= new Array();
 choices[60][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[60][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[60][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[60][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[60] = 0;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 5881. ";
 preguntaids[60] = 5881


//  Id pregunta: 6731 Año de creación de pregunta: 2009
 questions[61]= "62)  &iquest;Qu&eacute; tecnolog&iacute;a de las siguientes es m&aacute;s adecuada para generar contenido HTML din&aacute;mico en una aplicaci&oacute;n Java EE?";
 choices[61]= new Array();
 choices[61][0] = "Servlets";
 choices[61][1] = "JSP";
 choices[61][2] = "JNI";
 choices[61][3] = "JAXP";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6731. ";
 preguntaids[61] = 6731


//  Id pregunta: 3499 Año de creación de pregunta: 2006
 questions[62]= "63)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[62]= new Array();
 choices[62][0] = "Reusabilidad";
 choices[62][1] = "Encapsulaci&oacute;n";
 choices[62][2] = "Abstracci&oacute;n";
 choices[62][3] = "Persistencia";
 answers[62] = 3;
 units[62] = ['85'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 3499. ";
 preguntaids[62] = 3499


//  Id pregunta: 6180 Año de creación de pregunta: 2003
 questions[63]= "64)  Seg&uacute;n la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento es:";
 choices[63]= new Array();
 choices[63][0] = "Encargado del tratamiento.";
 choices[63][1] = "Afectado o interesado.";
 choices[63][2] = "Cesionario de datos.";
 choices[63][3] = "Responsable del fichero.";
 answers[63] = 3;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 6180. Examen TIC A Castilla La Mancha 2007";
 preguntaids[63] = 6180


//  Id pregunta: 6190 Año de creación de pregunta: 2003
 questions[64]= "65)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[64]= new Array();
 choices[64][0] = "Tipo 1";
 choices[64][1] = "Tipo 2";
 choices[64][2] = "Tipo 3";
 choices[64][3] = "Tipo 4";
 answers[64] = 1;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 6190. Examen TIC A Castilla La Mancha 2007";
 preguntaids[64] = 6190


//  Id pregunta: 1234 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[65]= new Array();
 choices[65][0] = "16, 24, 32 &oacute; 40";
 choices[65][1] = "6, 12, 24 &oacute; 48";
 choices[65][2] = "4, 8, 16 &oacute; 40";
 choices[65][3] = "8, 16, 32 &oacute; 64";
 answers[65] = 0;
 units[65] = ['110'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1234. ";
 preguntaids[65] = 1234


//  Id pregunta: 6536 Año de creación de pregunta: 2003
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes opciones relativas a la tecnolog&iacute;a de web services es verdadera:";
 choices[66]= new Array();
 choices[66][0] = "UDDI se utiliza como lenguaje de definici&oacute;n de servicios web";
 choices[66][1] = "SOAP deriva de XML-RPC";
 choices[66][2] = "WSDL permita la localizaci&oacute;n y publicaci&oacute;n de servicios web";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 1;
 units[66] = ['55'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6536. ";
 preguntaids[66] = 6536


//  Id pregunta: 7451 Año de creación de pregunta: 2010
 questions[67]= "68)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[67]= new Array();
 choices[67][0] = "ITU-T";
 choices[67][1] = "ITU-R";
 choices[67][2] = "ITU-D";
 choices[67][3] = "ITU-C";
 answers[67] = 0;
 units[67] = ['48'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 7451. ";
 preguntaids[67] = 7451


//  Id pregunta: 10717 Año de creación de pregunta: 2015
 questions[68]= "69)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[68]= new Array();
 choices[68][0] = "crontab";
 choices[68][1] = "interfaces";
 choices[68][2] = "resolv.conf";
 choices[68][3] = "dns.conf";
 answers[68] = 2;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10717. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[68] = 10717


//  Id pregunta: 6373 Año de creación de pregunta: 2003
 questions[69]= "70)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[69]= new Array();
 choices[69][0] = "Fritz Machlup";
 choices[69][1] = "Charles Babbage";
 choices[69][2] = "Herman Hollerith";
 choices[69][3] = "Howard Aiken";
 answers[69] = 0;
 units[69] = ['21'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 6373. Examen 2006 JCYL";
 preguntaids[69] = 6373


//  Id pregunta: 8133 Año de creación de pregunta: 2011
 questions[70]= "71)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[70]= new Array();
 choices[70][0] = "Una relaci&oacute;n N:M.";
 choices[70][1] = "Una relaci&oacute;n 1:N.";
 choices[70][2] = "Una relaci&oacute;n 1:1.";
 choices[70][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite.";
 answers[70] = 0;
 units[70] = ['60', '61'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8133. Examen TIC A2 2010 interna";
 preguntaids[70] = 8133


//  Id pregunta: 1843 Año de creación de pregunta: 2016
 questions[71]= "72)  Las redes ATM emplean celdas de:";
 choices[71]= new Array();
 choices[71][0] = "Tama&ntilde;o variable: entre 5 y 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n.";
 choices[71][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n.";
 choices[71][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[71][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[71] = 1;
 units[71] = ['107'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1843. ";
 preguntaids[71] = 1843


//  Id pregunta: 2397 Año de creación de pregunta: 2006
 questions[72]= "73)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[72]= new Array();
 choices[72][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[72][1] = "una infracci&oacute;n muy grave.";
 choices[72][2] = "una infracci&oacute;n grave.";
 choices[72][3] = "una infracci&oacute;n leve.";
 answers[72] = 2;
 units[72] = ['35'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2397. ";
 preguntaids[72] = 2397


//  Id pregunta: 2668 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[73]= new Array();
 choices[73][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[73][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[73][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[73][3] = "No hay diferencia; son la misma arquitectura";
 answers[73] = 0;
 units[73] = ['55'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2668. ";
 preguntaids[73] = 2668


//  Id pregunta: 1105 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[74]= new Array();
 choices[74][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[74][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[74][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[74][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[74] = 3;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 1105. ";
 preguntaids[74] = 1105


