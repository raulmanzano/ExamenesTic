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
//  Id pregunta: 8298 Año de creación de pregunta: 2011
 questions[0]= "1)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[0]= new Array();
 choices[0][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[0][1] = "En el Registro Civil.";
 choices[0][2] = "En el Registro Mercantil.";
 choices[0][3] = "En el Registro General del Ministerio de Justicia.";
 answers[0] = 0;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8298. Examen UPM A2 2011";
 preguntaids[0] = 8298


//  Id pregunta: 8230 Año de creación de pregunta: 2011
 questions[1]= "2)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[1]= new Array();
 choices[1][0] = "Bluetooth";
 choices[1][1] = "HomeRF";
 choices[1][2] = "HiperLAN/2";
 choices[1][3] = "IrLMP";
 answers[1] = 1;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8230. Examen UPM A2 2011";
 preguntaids[1] = 8230


//  Id pregunta: 8330 Año de creación de pregunta: 2011
 questions[2]= "3)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[2]= new Array();
 choices[2][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[2][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[2][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[2][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[2] = 0;
 units[2] = ['63'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8330. Examen UPM A2 2011";
 preguntaids[2] = 8330


//  Id pregunta: 8290 Año de creación de pregunta: 2011
 questions[3]= "4)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[3]= new Array();
 choices[3][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[3][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[3][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[3][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[3] = 2;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 8290. Examen UPM A2 2011";
 preguntaids[3] = 8290


//  Id pregunta: 8307 Año de creación de pregunta: 2011
 questions[4]= "5)  La longitud m&aacute;xima de un datagrama IP es:";
 choices[4]= new Array();
 choices[4][0] = "32 KB";
 choices[4][1] = "64 KB";
 choices[4][2] = "128 KB";
 choices[4][3] = "512 KB";
 answers[4] = 1;
 units[4] = ['109'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8307. Examen UPM A2 2011";
 preguntaids[4] = 8307


//  Id pregunta: 8239 Año de creación de pregunta: 2011
 questions[5]= "6)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[5]= new Array();
 choices[5][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[5][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[5][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[5][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[5] = 2;
 units[5] = ['123'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8239. Examen UPM A2 2011";
 preguntaids[5] = 8239


//  Id pregunta: 8224 Año de creación de pregunta: 2011
 questions[6]= "7)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[6]= new Array();
 choices[6][0] = "Firma digital";
 choices[6][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[6][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[6][3] = "Seguridad Wi-Fi";
 answers[6] = 1;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 8224. Examen UPM A2 2011";
 preguntaids[6] = 8224


//  Id pregunta: 8321 Año de creación de pregunta: 2011
 questions[7]= "8)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[7]= new Array();
 choices[7][0] = "AEIC.";
 choices[7][1] = "LOM.";
 choices[7][2] = "LCMS.";
 choices[7][3] = "SCORM.";
 answers[7] = 3;
 units[7] = ['70'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8321. Examen UPM A2 2011";
 preguntaids[7] = 8321


//  Id pregunta: 8319 Año de creación de pregunta: 2011
 questions[8]= "9)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con:";
 choices[8]= new Array();
 choices[8][0] = "Data Marts.";
 choices[8][1] = "Metadata.";
 choices[8][2] = "Middleware.";
 choices[8][3] = "Cubos OLAP.";
 answers[8] = 0;
 units[8] = ['72'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8319. Examen UPM A2 2011";
 preguntaids[8] = 8319


//  Id pregunta: 8308 Año de creación de pregunta: 2011
 questions[9]= "10)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[9]= new Array();
 choices[9][0] = "Nombre de usuario y shell";
 choices[9][1] = "Contrase&ntilde;a de usuario y home";
 choices[9][2] = "uid y shell";
 choices[9][3] = "gid y home";
 answers[9] = 2;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8308. Examen UPM A2 2011";
 preguntaids[9] = 8308


//  Id pregunta: 8228 Año de creación de pregunta: 2011
 questions[10]= "11)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[10]= new Array();
 choices[10][0] = "Agente de usuario";
 choices[10][1] = "Servidor proxy";
 choices[10][2] = "Agente de usuario inverso";
 choices[10][3] = "Agente proxy";
 answers[10] = 3;
 units[10] = ['110'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8228. Examen UPM A2 2011";
 preguntaids[10] = 8228


//  Id pregunta: 8238 Año de creación de pregunta: 2011
 questions[11]= "12)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[11]= new Array();
 choices[11][0] = "Es el elemento que conmuta etiquetas.";
 choices[11][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[11][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[11][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[11] = 0;
 units[11] = ['107'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8238. Examen UPM A2 2011";
 preguntaids[11] = 8238


//  Id pregunta: 8333 Año de creación de pregunta: 2011
 questions[12]= "13)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[12]= new Array();
 choices[12][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[12][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[12][2] = "a y b son correctas.";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = 0;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 8333. Examen UPM A2 2011";
 preguntaids[12] = 8333


//  Id pregunta: 8314 Año de creación de pregunta: 2011
 questions[13]= "14)  Respecto al modelo en espiral es falso que:";
 choices[13]= new Array();
 choices[13][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[13][1] = "Se compone de ciclos.";
 choices[13][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[13][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[13] = 2;
 units[13] = ['82'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 8314. Examen UPM A2 2011";
 preguntaids[13] = 8314


//  Id pregunta: 8313 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[14]= new Array();
 choices[14][0] = "CLRUN";
 choices[14][1] = "CLRNET";
 choices[14][2] = "COLR";
 choices[14][3] = "CLR";
 answers[14] = 3;
 units[14] = ['63'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8313. Examen UPM A2 2011";
 preguntaids[14] = 8313


//  Id pregunta: 8315 Año de creación de pregunta: 2011
 questions[15]= "16)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;c&oacute;mo se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[15]= new Array();
 choices[15][0] = "WT (Window Toolkit)";
 choices[15][1] = "AWT (Abstract Window Toolkit)";
 choices[15][2] = "JWS (Java Window Set)";
 choices[15][3] = "WS (Windows Set)";
 answers[15] = 1;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8315. Examen UPM A2 2011";
 preguntaids[15] = 8315


//  Id pregunta: 8324 Año de creación de pregunta: 2011
 questions[16]= "17)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[16]= new Array();
 choices[16][0] = "&lt;% y %&gt;";
 choices[16][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[16][2] = "&lt;!- --&gt;";
 choices[16][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[16] = 0;
 units[16] = ['63'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8324. Examen UPM A2 2011";
 preguntaids[16] = 8324


//  Id pregunta: 8323 Año de creación de pregunta: 2011
 questions[17]= "18)  El objeto anchor de Javascript indica...";
 choices[17]= new Array();
 choices[17][0] = "Los enlaces internos del documento";
 choices[17][1] = "Los v&iacute;nculos externos del documento";
 choices[17][2] = "Array con todas las anclas del documento";
 choices[17][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[17] = 0;
 units[17] = ['62'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8323. Examen UPM A2 2011";
 preguntaids[17] = 8323


//  Id pregunta: 8332 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[18]= new Array();
 choices[18][0] = "ISO 9001";
 choices[18][1] = "ISO 9000";
 choices[18][2] = "ISO 9004";
 choices[18][3] = "ISO 19011";
 answers[18] = 0;
 units[18] = ['92'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 8332. Examen UPM A2 2011";
 preguntaids[18] = 8332


//  Id pregunta: 8331 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[19]= new Array();
 choices[19][0] = "Para dar confianza";
 choices[19][1] = "Para asegurar que el software funciona";
 choices[19][2] = "Para evaluar el proceso de desarrollo de software";
 choices[19][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[19] = 3;
 units[19] = ['92'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 8331. Examen UPM A2 2011";
 preguntaids[19] = 8331


//  Id pregunta: 8247 Año de creación de pregunta: 2011
 questions[20]= "21)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[20]= new Array();
 choices[20][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[20][1] = "Tiempo de vida (8 bits)";
 choices[20][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[20][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[20] = 0;
 units[20] = ['107'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8247. Examen UPM A2 2011";
 preguntaids[20] = 8247


//  Id pregunta: 8329 Año de creación de pregunta: 2011
 questions[21]= "22)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[21]= new Array();
 choices[21][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[21][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[21][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[21][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[21] = 0;
 units[21] = ['63'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8329. Examen UPM A2 2011";
 preguntaids[21] = 8329


//  Id pregunta: 8234 Año de creación de pregunta: 2011
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI?";
 choices[22]= new Array();
 choices[22][0] = "Proxy";
 choices[22][1] = "Firewall de filtrado de paquetes";
 choices[22][2] = "Antivirus";
 choices[22][3] = "Filtro anti SPAM";
 answers[22] = 1;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8234. Examen UPM A2 2011";
 preguntaids[22] = 8234


//  Id pregunta: 8320 Año de creación de pregunta: 2011
 questions[23]= "24)  No todos los componentes de un Diagrama de Flujo de Datos (DFD) se pueden conectar mediante flujos de datos &iquest;qu&eacute; conexi&oacute;n de las siguientes est&aacute; permitida?";
 choices[23]= new Array();
 choices[23][0] = "Proceso con proceso";
 choices[23][1] = "Almac&eacute;n con almac&eacute;n";
 choices[23][2] = "Entidad Externa con Almac&eacute;n";
 choices[23][3] = "Entidad Externa con Entidad Externa";
 answers[23] = 0;
 units[23] = ['86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 8320. Examen UPM A2 2011";
 preguntaids[23] = 8320


//  Id pregunta: 8326 Año de creación de pregunta: 2011
 questions[24]= "25)  En programaci&oacute;n orientada a objetos &iquest;qu&eacute; son las clases abstractas?";
 choices[24]= new Array();
 choices[24][0] = "Aquellas que se dividen en subclases";
 choices[24][1] = "Aquellas que est&aacute;n predefinidas";
 choices[24][2] = "Las que no tienen instancias";
 choices[24][3] = "Las que no son reutilizables";
 answers[24] = 2;
 units[24] = ['85'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 8326. Examen UPM A2 2011";
 preguntaids[24] = 8326


//  Id pregunta: 8317 Año de creación de pregunta: 2011
 questions[25]= "26)  En el contexto de la Web 2.0, a la p&aacute;gina Web o aplicaci&oacute;n que usa o combina datos, presentaciones y funcionalidad procedentes de una o m&aacute;s fuentes para crear nuevos servicios, se conoce como:";
 choices[25]= new Array();
 choices[25][0] = "folcsonom&iacute;a";
 choices[25][1] = "mashup";
 choices[25][2] = "podcast";
 choices[25][3] = "Wiki";
 answers[25] = 1;
 units[25] = ['125'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 8317. Examen UPM A2 2011";
 preguntaids[25] = 8317


//  Id pregunta: 8304 Año de creación de pregunta: 2011
 questions[26]= "27)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root:";
 choices[26]= new Array();
 choices[26][0] = "who | grep root | wc -l";
 choices[26][1] = "who root | wc -l";
 choices[26][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[26][3] = "who &lt;grep -v root&gt;wc";
 answers[26] = 0;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8304. Examen UPM A2 2011";
 preguntaids[26] = 8304


//  Id pregunta: 8318 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[27]= new Array();
 choices[27][0] = "WAI";
 choices[27][1] = "WCAG";
 choices[27][2] = "ATAG";
 choices[27][3] = "UAAG";
 answers[27] = 0;
 units[27] = ['42'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8318. Examen UPM A2 2011";
 preguntaids[27] = 8318


//  Id pregunta: 8232 Año de creación de pregunta: 2011
 questions[28]= "29)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[28]= new Array();
 choices[28][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[28][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[28][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[28][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[28] = 1;
 units[28] = ['103'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8232. Examen UPM A2 2011";
 preguntaids[28] = 8232


//  Id pregunta: 8328 Año de creación de pregunta: 2011
 questions[29]= "30)  Los procesos de un Data Warehouse son:";
 choices[29]= new Array();
 choices[29][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[29][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[29][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[29][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[29] = 1;
 units[29] = ['72'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8328. Examen UPM A2 2011";
 preguntaids[29] = 8328


//  Id pregunta: 8249 Año de creación de pregunta: 2011
 questions[30]= "31)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[30]= new Array();
 choices[30][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[30][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[30][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[30][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[30] = 3;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8249. Examen UPM A2 2011";
 preguntaids[30] = 8249


//  Id pregunta: 8305 Año de creación de pregunta: 2011
 questions[31]= "32)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[31]= new Array();
 choices[31][0] = "De menor longitud que la cadena inicial";
 choices[31][1] = "De la misma longitud que la cadena inicial";
 choices[31][2] = "De mayor longitud que la cadena inicial";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 3;
 units[31] = ['76'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8305. Examen UPM A2 2011";
 preguntaids[31] = 8305


//  Id pregunta: 8316 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[32]= new Array();
 choices[32][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[32][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[32][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[32][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[32] = 3;
 units[32] = ['64'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8316. Examen UPM A2 2011";
 preguntaids[32] = 8316


//  Id pregunta: 8293 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Que puerto utiliza NNTP?";
 choices[33]= new Array();
 choices[33][0] = "119";
 choices[33][1] = "53";
 choices[33][2] = "137";
 choices[33][3] = "139";
 answers[33] = 0;
 units[33] = ['103'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8293. Examen UPM A2 2011";
 preguntaids[33] = 8293


//  Id pregunta: 8302 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[34]= new Array();
 choices[34][0] = "SISD";
 choices[34][1] = "SIMD";
 choices[34][2] = "MISD";
 choices[34][3] = "MIMD";
 answers[34] = 2;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8302. Examen UPM A2 2011";
 preguntaids[34] = 8302


//  Id pregunta: 8229 Año de creación de pregunta: 2011
 questions[35]= "36)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[35]= new Array();
 choices[35][0] = "4 (2 de bajada y 2 para subida)";
 choices[35][1] = "3 (2 de bajada y 1 de subida)";
 choices[35][2] = "2 (1 de bajada y 1 de subida)";
 choices[35][3] = "5 (3 de bajada y 2 de subida)";
 answers[35] = 0;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 8229. Examen UPM A2 2011";
 preguntaids[35] = 8229


//  Id pregunta: 8309 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[36]= new Array();
 choices[36][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[36][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;.";
 choices[36][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;.";
 choices[36][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[36] = 0;
 units[36] = ['74'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8309. Examen UPM A2 2011";
 preguntaids[36] = 8309


//  Id pregunta: 8233 Año de creación de pregunta: 2011
 questions[37]= "38)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[37]= new Array();
 choices[37][0] = "Capa IP";
 choices[37][1] = "Capa de Aplicaci&oacute;n";
 choices[37][2] = "Capa de Sesi&oacute;n";
 choices[37][3] = "Capa de Transporte";
 answers[37] = 0;
 units[37] = ['119'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 8233. Examen UPM A2 2011";
 preguntaids[37] = 8233


//  Id pregunta: 8335 Año de creación de pregunta: 2011
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 3 de la Ley 59/2003, de 19 de diciembre, de Firma Electr&oacute;nica, una &quot;firma electr&oacute;nica que permite identificar al firmante y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control&quot; es una:";
 choices[38]= new Array();
 choices[38][0] = "Firma electr&oacute;nica";
 choices[38][1] = "Firma electr&oacute;nica avanzada";
 choices[38][2] = "Firma electr&oacute;nica reconocida";
 choices[38][3] = "Firma electr&oacute;nica validada";
 answers[38] = 1;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8335. Examen UPM A2 2011";
 preguntaids[38] = 8335


//  Id pregunta: 8250 Año de creación de pregunta: 2011
 questions[39]= "40)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de:";
 choices[39]= new Array();
 choices[39][0] = "M&aacute;scara de subred";
 choices[39][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[39][2] = "Servidor SMTP";
 choices[39][3] = "Software antivirus";
 answers[39] = 3;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 8250. Examen UPM A2 2011";
 preguntaids[39] = 8250


//  Id pregunta: 8226 Año de creación de pregunta: 2011
 questions[40]= "41)  Los tipos de direcciones en IPv6 son los siguientes:";
 choices[40]= new Array();
 choices[40][0] = "Unicast, Multicast y Anycast";
 choices[40][1] = "Unicast y Multicast";
 choices[40][2] = "Somecast y Groupcast";
 choices[40][3] = "Somecast, Multicast y Worldcast";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8226. Examen UPM A2 2011";
 preguntaids[40] = 8226


//  Id pregunta: 8289 Año de creación de pregunta: 2011
 questions[41]= "42)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[41]= new Array();
 choices[41][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[41][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[41][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[41][3] = "Ninguna de las anteriores.";
 answers[41] = 2;
 units[41] = ['103'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8289. Examen UPM A2 2011";
 preguntaids[41] = 8289


//  Id pregunta: 8248 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[42]= new Array();
 choices[42][0] = "iSCSI";
 choices[42][1] = "sSCSI";
 choices[42][2] = "iFCP";
 choices[42][3] = "FCIP";
 answers[42] = 3;
 units[42] = ['53'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8248. Examen UPM A2 2011";
 preguntaids[42] = 8248


//  Id pregunta: 8306 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[43]= new Array();
 choices[43][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[43][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[43][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[43][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 8306. Examen UPM A2 2011";
 preguntaids[43] = 8306


//  Id pregunta: 8235 Año de creación de pregunta: 2011
 questions[44]= "45)  Un acceso RDSI primario consta de";
 choices[44]= new Array();
 choices[44][0] = "Dos canales B y un canal D";
 choices[44][1] = "Dos canales B y ning&uacute;n canal D";
 choices[44][2] = "Treinta canales B y un canal D";
 choices[44][3] = "Treinta canales B y dos canales D";
 answers[44] = 2;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8235. Examen UPM A2 2011";
 preguntaids[44] = 8235


//  Id pregunta: 8244 Año de creación de pregunta: 2011
 questions[45]= "46)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[45][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[45][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar la red por alg&uacute;n motivo.";
 choices[45][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[45] = 2;
 units[45] = ['117'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8244. Examen UPM A2 2011";
 preguntaids[45] = 8244


//  Id pregunta: 8225 Año de creación de pregunta: 2011
 questions[46]= "47)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[46]= new Array();
 choices[46][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[46][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[46][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[46][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[46] = 3;
 units[46] = ['106'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8225. Examen UPM A2 2011";
 preguntaids[46] = 8225


//  Id pregunta: 8240 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[47]= new Array();
 choices[47][0] = "Home Agent.";
 choices[47][1] = "Agent Advertisement.";
 choices[47][2] = "Mobility Agent.";
 choices[47][3] = "Agent Discovery.";
 answers[47] = 0;
 units[47] = ['107'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8240. Examen UPM A2 2011";
 preguntaids[47] = 8240


//  Id pregunta: 8303 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[48]= new Array();
 choices[48][0] = "RARP";
 choices[48][1] = "DHCP";
 choices[48][2] = "ARP";
 choices[48][3] = "Proxy RARP";
 answers[48] = 2;
 units[48] = ['109'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8303. Examen UPM A2 2011";
 preguntaids[48] = 8303


//  Id pregunta: 8301 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;En qu&eacute; sentencia de SQL, OLAP proporciona mayor velocidad de procesamiento?";
 choices[49]= new Array();
 choices[49][0] = "INSERT";
 choices[49][1] = "UPDATE";
 choices[49][2] = "DELETE";
 choices[49][3] = "SELECT";
 answers[49] = 3;
 units[49] = ['61'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8301. Examen UPM A2 2011";
 preguntaids[49] = 8301


//  Id pregunta: 8246 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[50]= new Array();
 choices[50][0] = "Spread spectrum con secuencia directa";
 choices[50][1] = "Spread spectrum con salto de frecuencia";
 choices[50][2] = "Spread spectrum con secuencia indirecta";
 choices[50][3] = "Spread spectrum sobre TCP/IP";
 answers[50] = 1;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 8246. Examen UPM A2 2011";
 preguntaids[50] = 8246


//  Id pregunta: 8295 Año de creación de pregunta: 2011
 questions[51]= "52)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[51]= new Array();
 choices[51][0] = "53 TCP";
 choices[51][1] = "453 TCP";
 choices[51][2] = "456 UDP";
 choices[51][3] = "53 UDP";
 answers[51] = 0;
 units[51] = ['103'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8295. Examen UPM A2 2011";
 preguntaids[51] = 8295


//  Id pregunta: 8310 Año de creación de pregunta: 2011
 questions[52]= "53)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[52]= new Array();
 choices[52][0] = "ISO 8879";
 choices[52][1] = "RFC 8879";
 choices[52][2] = "IEEE 8879";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = 0;
 units[52] = ['74'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8310. Examen UPM A2 2011";
 preguntaids[52] = 8310


//  Id pregunta: 8299 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (DDL) de SQL?";
 choices[53]= new Array();
 choices[53][0] = "ROLLBACK";
 choices[53][1] = "UPDATE";
 choices[53][2] = "GRANT";
 choices[53][3] = "TRUNCATE";
 answers[53] = 3;
 units[53] = ['61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8299. Examen UPM A2 2011";
 preguntaids[53] = 8299


//  Id pregunta: 8231 Año de creación de pregunta: 2011
 questions[54]= "55)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[54]= new Array();
 choices[54][0] = "802.6";
 choices[54][1] = "802.7";
 choices[54][2] = "802.8";
 choices[54][3] = "802.9";
 answers[54] = 2;
 units[54] = ['112'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 8231. Examen UPM A2 2011";
 preguntaids[54] = 8231


//  Id pregunta: 8251 Año de creación de pregunta: 2011
 questions[55]= "56)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[55]= new Array();
 choices[55][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[55][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[55][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[55][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[55] = 0;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8251. Examen UPM A2 2011";
 preguntaids[55] = 8251


//  Id pregunta: 8236 Año de creación de pregunta: 2011
 questions[56]= "57)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[56]= new Array();
 choices[56][0] = "802.11a-2.4Ghz";
 choices[56][1] = "802.11b -2.4Ghz";
 choices[56][2] = "802.11g-5Ghz";
 choices[56][3] = "802.11x-2.4Ghz";
 answers[56] = 1;
 units[56] = ['108'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8236. Examen UPM A2 2011";
 preguntaids[56] = 8236


//  Id pregunta: 8311 Año de creación de pregunta: 2011
 questions[57]= "58)  &iquest;Qu&eacute; comando de Unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "jobs";
 choices[57][1] = "fg";
 choices[57][2] = "pg";
 choices[57][3] = "bg";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8311. Examen UPM A2 2011";
 preguntaids[57] = 8311


//  Id pregunta: 8227 Año de creación de pregunta: 2011
 questions[58]= "59)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[58]= new Array();
 choices[58][0] = "1-8 MHz";
 choices[58][1] = "4-8 GHz";
 choices[58][2] = "12-18 GHz";
 choices[58][3] = "4-8 MHz";
 answers[58] = 2;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 8227. Examen UPM A2 2011";
 preguntaids[58] = 8227


//  Id pregunta: 8291 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[59]= new Array();
 choices[59][0] = "Hop-By-Hop Options";
 choices[59][1] = "Routing (Type 0)";
 choices[59][2] = "Fragment";
 choices[59][3] = "Authentication Header";
 answers[59] = 3;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8291. Examen UPM A2 2011";
 preguntaids[59] = 8291


//  Id pregunta: 8296 Año de creación de pregunta: 2011
 questions[60]= "61)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[60]= new Array();
 choices[60][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[60][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[60][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[60][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[60] = 2;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 8296. Examen UPM A2 2011";
 preguntaids[60] = 8296


//  Id pregunta: 8322 Año de creación de pregunta: 2011
 questions[61]= "62)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[61]= new Array();
 choices[61][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[61][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[61][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[61][3] = "Todas las anteriores son falsas";
 answers[61] = 0;
 units[61] = ['63'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8322. Examen UPM A2 2011";
 preguntaids[61] = 8322


//  Id pregunta: 8327 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l de estos procesos de M&eacute;trica 3 contiene actividades diferentes dependiendo de si se trata de un desarrollo estructurado u orientado a objetos?";
 choices[62]= new Array();
 choices[62][0] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 choices[62][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[62][2] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[62][3] = "Ninguno de los anteriores";
 answers[62] = 1;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 8327. Examen UPM A2 2011";
 preguntaids[62] = 8327


//  Id pregunta: 8243 Año de creación de pregunta: 2011
 questions[63]= "64)  &iquest;A qu&eacute; componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;?";
 choices[63]= new Array();
 choices[63][0] = "Proxy Server.";
 choices[63][1] = "Account Server.";
 choices[63][2] = "Redirect Server.";
 choices[63][3] = "Registrar Server.";
 answers[63] = 3;
 units[63] = ['122'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8243. Examen UPM A2 2011";
 preguntaids[63] = 8243


//  Id pregunta: 8294 Año de creación de pregunta: 2011
 questions[64]= "65)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[64]= new Array();
 choices[64][0] = "PKCS#10";
 choices[64][1] = "PKCS#12";
 choices[64][2] = "X.500";
 choices[64][3] = "X.509";
 answers[64] = 0;
 units[64] = ['78'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8294. Examen UPM A2 2011";
 preguntaids[64] = 8294


//  Id pregunta: 8237 Año de creación de pregunta: 2011
 questions[65]= "66)  El protocolo OCSP, se utiliza en:";
 choices[65]= new Array();
 choices[65][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[65][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[65][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[65][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[65] = 0;
 units[65] = ['78'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8237. Examen UPM A2 2011";
 preguntaids[65] = 8237


//  Id pregunta: 8241 Año de creación de pregunta: 2011
 questions[66]= "67)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[66]= new Array();
 choices[66][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[66][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[66][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[66][3] = "No";
 answers[66] = 0;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8241. Examen UPM A2 2011";
 preguntaids[66] = 8241


//  Id pregunta: 8300 Año de creación de pregunta: 2011
 questions[67]= "68)  MAGERIT es";
 choices[67]= new Array();
 choices[67][0] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de riesgos de sistemas de informaci&oacute;n.";
 choices[67][1] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de centros de recuperaci&oacute;n de desastres de sistemas de informaci&oacute;n.";
 choices[67][2] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de sistemas de archivo de sistemas de informaci&oacute;n.";
 choices[67][3] = "Una metodolog&iacute;a de An&aacute;lisis y gesti&oacute;n de evaluaci&oacute;n de rendimiento de sistemas de informaci&oacute;n.";
 answers[67] = 0;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 8300. Examen UPM A2 2011";
 preguntaids[67] = 8300


//  Id pregunta: 8242 Año de creación de pregunta: 2011
 questions[68]= "69)  El permiso de Unix 500 pemiite:";
 choices[68]= new Array();
 choices[68][0] = "Lectura y escritura para el propietario del archivo";
 choices[68][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[68][2] = "Lectura y escritura para todos los usuarios";
 choices[68][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[68] = 1;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8242. Examen UPM A2 2011";
 preguntaids[68] = 8242


//  Id pregunta: 8312 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[69]= new Array();
 choices[69][0] = "Para construir aplicaciones y servicios Web";
 choices[69][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[69][2] = "Para construir la interface del usuario";
 choices[69][3] = "Para conectar los programas";
 answers[69] = 0;
 units[69] = ['63'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8312. Examen UPM A2 2011";
 preguntaids[69] = 8312


//  Id pregunta: 8292 Año de creación de pregunta: 2011
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[70]= new Array();
 choices[70][0] = "mkboot disk.";
 choices[70][1] = "bootfp disk.";
 choices[70][2] = "ww and rawrite.";
 choices[70][3] = "dd and rawrite.";
 answers[70] = 3;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8292. Examen UPM A2 2011";
 preguntaids[70] = 8292


//  Id pregunta: 8325 Año de creación de pregunta: 2011
 questions[71]= "72)  Las extensiones del Data Mining son:";
 choices[71]= new Array();
 choices[71][0] = "Web Mining y Text Mining.";
 choices[71][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[71][2] = "Text Mining e Hipertext Mining.";
 choices[71][3] = "Web Mining e Hipertext Mining.";
 answers[71] = 0;
 units[71] = ['72'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8325. Examen UPM A2 2011";
 preguntaids[71] = 8325


//  Id pregunta: 8245 Año de creación de pregunta: 2011
 questions[72]= "73)  Indique el puerto utilizado por el protocolo LDAP sobre SSL:";
 choices[72]= new Array();
 choices[72][0] = "563";
 choices[72][1] = "443";
 choices[72][2] = "336";
 choices[72][3] = "636";
 answers[72] = 3;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8245. Examen UPM A2 2011";
 preguntaids[72] = 8245


//  Id pregunta: 8334 Año de creación de pregunta: 2011
 questions[73]= "74)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[73]= new Array();
 choices[73][0] = "GPL";
 choices[73][1] = "BSD";
 choices[73][2] = "EULA";
 choices[73][3] = "GNU";
 answers[73] = 0;
 units[73] = ['66'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8334. Examen UPM A2 2011";
 preguntaids[73] = 8334


//  Id pregunta: 8297 Año de creación de pregunta: 2011
 questions[74]= "75)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[74]= new Array();
 choices[74][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[74][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[74][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[74][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[74] = 1;
 units[74] = ['35'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 8297. Examen UPM A2 2011";
 preguntaids[74] = 8297


