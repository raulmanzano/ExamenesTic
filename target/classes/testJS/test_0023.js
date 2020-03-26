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
//  Id pregunta: 8328 Año de creación de pregunta: 2011
 questions[0]= "1)  Los procesos de un Data Warehouse son:";
 choices[0]= new Array();
 choices[0][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[0][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[0][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[0][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[0] = 1;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8328. Examen UPM A2 2011";
 preguntaids[0] = 8328


//  Id pregunta: 6332 Año de creación de pregunta: 2003
 questions[1]= "2)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[1]= new Array();
 choices[1][0] = "Huellas dactilares";
 choices[1][1] = "Iris del ojo";
 choices[1][2] = "Patr&oacute;n facial";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = 3;
 units[1] = ['74'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 6332. No recoge huella dactilar completa, s&oacute;lo las minucias";
 preguntaids[1] = 6332


//  Id pregunta: 2364 Año de creación de pregunta: 2004
 questions[2]= "3)  En referencia a los niveles permitidos para el grupo A, indique la respuesta FALSA:";
 choices[2]= new Array();
 choices[2][0] = "El grupo A abarca el rango de niveles del 20 al 30";
 choices[2][1] = "El grupo A abarca el rango de niveles del 26 al 30";
 choices[2][2] = "El nivel 30 corresponde a Subdirectores Generales y asimilados";
 choices[2][3] = "El nivel 26 corresponde a Jefes de Servicio y asimilados";
 answers[2] = 1;
 units[2] = ['28'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2364. A2: 18-26; A1: 26-30";
 preguntaids[2] = 2364


//  Id pregunta: 5040 Año de creación de pregunta: 2002
 questions[3]= "4)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[3]= new Array();
 choices[3][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[3][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[3][2] = "Unen dos redes locales a nivel de red, ya que se suele decir que son equipos h&iacute;bridos";
 choices[3][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[3] = 2;
 units[3] = ['102'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5040. ";
 preguntaids[3] = 5040


//  Id pregunta: 1178 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la manera de proceder en el lenguaje PHP, para poder utilizar dentro de una funci&oacute;n una variable que se define globalmente en una p&aacute;gina:";
 choices[4]= new Array();
 choices[4][0] = "No se debe declarar expl&iacute;citamente, puesto que las variables globales son accesibles directamente desde cualquier funci&oacute;n definida en la misma p&aacute;gina.";
 choices[4][1] = "Se puede usar el array $GLOBALVars para acceder al contenido de la variable.";
 choices[4][2] = "Se podr&iacute;a declarar la variable como global al principio de la funci&oacute;n mediante el uso de la palabra reservada &ldquo;global&rdquo; seguido del nombre de la variable a utilizar.";
 choices[4][3] = "Se debe declarar la variable como &quot;static&quot;.";
 answers[4] = 2;
 units[4] = ['65'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1178. ";
 preguntaids[4] = 1178


//  Id pregunta: 7166 Año de creación de pregunta: 2010
 questions[5]= "6)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[5]= new Array();
 choices[5][0] = "ITU";
 choices[5][1] = "IEC";
 choices[5][2] = "ETSI";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 0;
 units[5] = ['48'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7166. Castilla La Mancha 2009";
 preguntaids[5] = 7166


//  Id pregunta: 5065 Año de creación de pregunta: 2002
 questions[6]= "7)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[6]= new Array();
 choices[6][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[6][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[6][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[6][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[6] = 3;
 units[6] = ['114'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 5065. ";
 preguntaids[6] = 5065


//  Id pregunta: 1352 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique cual de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[7]= new Array();
 choices[7][0] = "Joost";
 choices[7][1] = "Netflix";
 choices[7][2] = "Cassandra";
 choices[7][3] = "Hadoop";
 answers[7] = 3;
 units[7] = ['73'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1352. ";
 preguntaids[7] = 1352


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[8][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[8][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[8][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[8] = 1;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 46. Constituci&oacute;n de 1978";
 preguntaids[8] = 46


//  Id pregunta: 9800 Año de creación de pregunta: 2015
 questions[9]= "10)  Son europeos:";
 choices[9]= new Array();
 choices[9][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[9][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[9][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[9][3] = "La red SARA";
 answers[9] = 0;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 9800. ";
 preguntaids[9] = 9800


//  Id pregunta: 9453 Año de creación de pregunta: 2014
 questions[10]= "11)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[10]= new Array();
 choices[10][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[10][1] = "La no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[10][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[10][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[10] = 1;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 9453. A: grave; B: muy grave; C: grave; D: grave";
 preguntaids[10] = 9453


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[11]= new Array();
 choices[11][0] = "IEEE";
 choices[11][1] = "ISO";
 choices[11][2] = "IEC";
 choices[11][3] = "ANSI";
 answers[11] = 3;
 units[11] = ['48'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[11] = 8350


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[12]= "13)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[12]= new Array();
 choices[12][0] = "El Tratado de Maastrich.";
 choices[12][1] = "El Tratado de Amsterdam.";
 choices[12][2] = "El Tratado de Par&iacute;s.";
 choices[12][3] = "El Tratado de Roma.";
 answers[12] = 3;
 units[12] = ['5'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 162. Uni&oacute;n Europea";
 preguntaids[12] = 162


//  Id pregunta: 9250 Año de creación de pregunta: 2014
 questions[13]= "14)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[13]= new Array();
 choices[13][0] = "S&iacute;, mediante un flujo de datos.";
 choices[13][1] = "S&iacute;, mediante un flujo de control.";
 choices[13][2] = "Si, mediante un proceso iterativo.";
 choices[13][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[13] = 1;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 9250. Examen TIC A2 2013";
 preguntaids[13] = 9250


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta falsa:";
 choices[14]= new Array();
 choices[14][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[14][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[14][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[14][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[14] = 2;
 units[14] = ['5'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 106. Uni&oacute;n Europea";
 preguntaids[14] = 106


//  Id pregunta: 9672 Año de creación de pregunta: 2014
 questions[15]= "16)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[15]= new Array();
 choices[15][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[15][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[15][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[15][3] = "Todas las anteriores.";
 answers[15] = 3;
 units[15] = ['100'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 9672. ";
 preguntaids[15] = 9672


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[16]= "17)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[16]= new Array();
 choices[16][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[16][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[16][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[16][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[16] = 1;
 units[16] = ['7'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[16] = 215


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[17]= new Array();
 choices[17][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[17][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[17][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[17][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[17] = 1;
 units[17] = ['7'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 252. Ley 39/2015";
 preguntaids[17] = 252


//  Id pregunta: 6419 Año de creación de pregunta: 2003
 questions[18]= "19)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[18]= new Array();
 choices[18][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[18][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[18][2] = "A y B son correctas";
 choices[18][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[18] = 2;
 units[18] = ['10'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 6419. ";
 preguntaids[18] = 6419


//  Id pregunta: 2565 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[19]= new Array();
 choices[19][0] = "Circuitos integrados especializados";
 choices[19][1] = "Advanced Set Instructions Complex";
 choices[19][2] = "Nada";
 choices[19][3] = "Procesadores generales";
 answers[19] = 0;
 units[19] = ['50'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2565. Application-Specific Integrated Circuit";
 preguntaids[19] = 2565


//  Id pregunta: 7796 Año de creación de pregunta: 2010
 questions[20]= "21)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[20]= new Array();
 choices[20][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n.";
 choices[20][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n.";
 choices[20][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n.";
 choices[20][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n.";
 answers[20] = 1;
 units[20] = ['101'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 7796. ";
 preguntaids[20] = 7796


//  Id pregunta: 9731 Año de creación de pregunta: 2014
 questions[21]= "22)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[21]= new Array();
 choices[21][0] = "10 d&iacute;as";
 choices[21][1] = "15 d&iacute;as";
 choices[21][2] = "1 mes";
 choices[21][3] = "3 meses";
 answers[21] = 1;
 units[21] = ['121'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9731. ";
 preguntaids[21] = 9731


//  Id pregunta: 5417 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[22]= new Array();
 choices[22][0] = "iReport";
 choices[22][1] = "SaintReport";
 choices[22][2] = "JasperReports";
 choices[22][3] = "xStream";
 answers[22] = 2;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5417. ";
 preguntaids[22] = 5417


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[23]= "24)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[23]= new Array();
 choices[23][0] = "apud acta";
 choices[23][1] = "presencialmente";
 choices[23][2] = "electr&oacute;nicamente";
 choices[23][3] = "todas son correctas";
 answers[23] = 3;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 235. Ley 39/2015";
 preguntaids[23] = 235


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;C&oacute;mo se llaman las oficinas de la Uni&oacute;n Europea en d&oacute;nde se difunde informaci&oacute;n referente a la actividad del Parlamento Europeo?";
 choices[24]= new Array();
 choices[24][0] = "Euro-Info-Point";
 choices[24][1] = "Point-Euro-Info";
 choices[24][2] = "Euro-Point-Info";
 choices[24][3] = "Point-Info-Euro";
 answers[24] = 0;
 units[24] = ['5'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 181. Uni&oacute;n Europea";
 preguntaids[24] = 181


//  Id pregunta: 10943 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Para que se utiliza el sistema de multiplexaci&oacute;n CWDM?";
 choices[25]= new Array();
 choices[25][0] = "dar soporte a aplicaciones de redes de &aacute;rea metropolitana, donde se busca no tanto alcanzar largas distancias sino reducci&oacute;n de costes";
 choices[25][1] = "se utiliza para el transporte de grandes cantidades de informaci&oacute;n a larga distancia";
 choices[25][2] = "Actualmente no se utiliza";
 choices[25][3] = "El sistema CWDM es interoperable con DWDM.";
 answers[25] = 0;
 units[25] = ['106'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10943. ";
 preguntaids[25] = 10943


//  Id pregunta: 7533 Año de creación de pregunta: 2010
 questions[26]= "27)  Dentro del kernel de Unix, el n&uacute;cleo dependiente:";
 choices[26]= new Array();
 choices[26][0] = "Controla la ejecuci&oacute;n de procesos.";
 choices[26][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n.";
 choices[26][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos.";
 choices[26][3] = "Se encarga de las interrupciones.";
 answers[26] = 3;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7533. Map 2005";
 preguntaids[26] = 7533


//  Id pregunta: 4069 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de 11 aristas y 9 nodos?";
 choices[27]= new Array();
 choices[27][0] = "6";
 choices[27][1] = "12";
 choices[27][2] = "8";
 choices[27][3] = "4";
 answers[27] = 3;
 units[27] = ['93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 4069. ";
 preguntaids[27] = 4069


//  Id pregunta: 8194 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Reverberaci&oacute;n.";
 choices[28][1] = "Ruido blanco";
 choices[28][2] = "Afon&iacute;a";
 choices[28][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[28] = 1;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 8194. Examen TIC A2 2010 interna";
 preguntaids[28] = 8194


//  Id pregunta: 2162 Año de creación de pregunta: 2002
 questions[29]= "30)  En la planificaci&oacute;n de proyectos:";
 choices[29]= new Array();
 choices[29][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-) presentan dependencias pero no informaci&oacute;n temporal.";
 choices[29][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-) presentan dependencias e informaci&oacute;n temporal.";
 choices[29][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[29][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[29] = 0;
 units[29] = ['33'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2162. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";
 preguntaids[29] = 2162


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[30]= "31)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[30]= new Array();
 choices[30][0] = "P&uacute;blica.";
 choices[30][1] = "Privada.";
 choices[30][2] = "A y B son correctas.";
 choices[30][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[30] = 2;
 units[30] = ['14'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 398. Pol&iacute;ticas de igualdad";
 preguntaids[30] = 398


//  Id pregunta: 1385 Año de creación de pregunta: 2016
 questions[31]= "32)  EI puerto 69 es utilizado por:";
 choices[31]= new Array();
 choices[31][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[31][1] = "Finger.";
 choices[31][2] = "IMAP (Internet Message Access Protocol).";
 choices[31][3] = "SFTP (Secure File Transfer Protocol).";
 answers[31] = 0;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1385. ";
 preguntaids[31] = 1385


//  Id pregunta: 7060 Año de creación de pregunta: 2010
 questions[32]= "33)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[32]= new Array();
 choices[32][0] = "Orientado a objetos";
 choices[32][1] = "Relacional";
 choices[32][2] = "De lista invertida";
 choices[32][3] = "Jer&aacute;rquica";
 answers[32] = 2;
 units[32] = ['61'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7060. Un ejemplo de BD de lista invertida es ADABAS";
 preguntaids[32] = 7060


//  Id pregunta: 2228 Año de creación de pregunta: 2002
 questions[33]= "34)  La Ley de Pareto:";
 choices[33]= new Array();
 choices[33][0] = "Se conoce como &lsquo;ley del 90/10&rsquo;";
 choices[33][1] = "Se conoce como &lsquo;ley del 80/20&rsquo;";
 choices[33][2] = "Dice que con el 90% de esfuerzo se resuelven el 10% de los problemas";
 choices[33][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; correctas";
 answers[33] = 1;
 units[33] = ['29'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2228. ";
 preguntaids[33] = 2228


//  Id pregunta: 10714 Año de creación de pregunta: 2015
 questions[34]= "35)  En el entorno gr&aacute;fico KDE, &iquest;Qu&eacute; aplicaci&oacute;n permite generar informes?";
 choices[34]= new Array();
 choices[34][0] = "Kchart";
 choices[34][1] = "Kugar";
 choices[34][2] = "Kplato";
 choices[34][3] = "Kspread";
 answers[34] = 1;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10714. ";
 preguntaids[34] = 10714


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[35]= new Array();
 choices[35][0] = "La CETIC";
 choices[35][1] = "Los Ministerios";
 choices[35][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[35][3] = "Ninguno de los anteriores";
 answers[35] = 1;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 471. Estrategia TIC";
 preguntaids[35] = 471


//  Id pregunta: 1462 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale c&oacute;mo se clasifica la situaci&oacute;n de dependencia conforme a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[36]= new Array();
 choices[36][0] = "En dos grados, cada uno dividido en dos niveles.";
 choices[36][1] = "En dos grados, cada uno dividido en tres niveles.";
 choices[36][2] = "En tres grados, cada uno dividido en dos niveles.";
 choices[36][3] = "En tres grados, cada uno dividido en tres niveles.";
 answers[36] = 2;
 units[36] = ['14'];
 blocks[36] = ['A3'];
 comments[36] = "Id Pregunta: 1462. ";
 preguntaids[36] = 1462


//  Id pregunta: 9900 Año de creación de pregunta: 2015
 questions[37]= "38)  La Ley 39/2015 impone:";
 choices[37]= new Array();
 choices[37][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[37][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[37][2] = "Ambas";
 choices[37][3] = "Ninguna de las anteriores.";
 answers[37] = 0;
 units[37] = ['7', '19'];
 blocks[37] = ['A2', 'A4'];
 comments[37] = "Id Pregunta: 9900. ";
 preguntaids[37] = 9900


//  Id pregunta: 7191 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes elementos NO est&aacute; incluido en el directorio privado WEB-INF de una aplicaci&oacute;n Web?";
 choices[38]= new Array();
 choices[38][0] = "Un archivo web.xml";
 choices[38][1] = "Un subdirectorio llamado classes";
 choices[38][2] = "Documentos de Microsoft Office";
 choices[38][3] = "Un subdirectorio lib para contener los archivos JAR utilizados por la aplicaci&oacute;n Web";
 answers[38] = 2;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7191. Castilla La Mancha 2009";
 preguntaids[38] = 7191


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[39]= new Array();
 choices[39][0] = "A los ministros.";
 choices[39][1] = "Las respuestas a) y b) son correctas.";
 choices[39][2] = "Las respuestas a) y b) no son correctas.";
 choices[39][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[39] = 1;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 279. Presupuestos generales";
 preguntaids[39] = 279


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[40]= new Array();
 choices[40][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[40][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[40][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[40][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[40] = 1;
 units[40] = ['5'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[40] = 120


//  Id pregunta: 6257 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes opciones no es una herramienta de Dise&ntilde;o de Sistemas en Tiempo Real?";
 choices[41]= new Array();
 choices[41][0] = "DARTS.";
 choices[41][1] = "UML - RT.";
 choices[41][2] = "Rational Rose - RT.";
 choices[41][3] = "PERTS.";
 answers[41] = 0;
 units[41] = ['86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6257. ";
 preguntaids[41] = 6257


//  Id pregunta: 3232 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[42]= new Array();
 choices[42][0] = "Enrutamiento";
 choices[42][1] = "Asignaci&oacute;n de responsabilidades";
 choices[42][2] = "Generaci&oacute;n de formularios";
 choices[42][3] = "Gesti&oacute;n de procedimiento";
 answers[42] = 2;
 units[42] = ['72'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3232. ";
 preguntaids[42] = 3232


//  Id pregunta: 1751 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l es el puerto por defecto de SMTP:";
 choices[43]= new Array();
 choices[43][0] = "21";
 choices[43][1] = "23";
 choices[43][2] = "25";
 choices[43][3] = "80";
 answers[43] = 2;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1751. ";
 preguntaids[43] = 1751


//  Id pregunta: 7157 Año de creación de pregunta: 2010
 questions[44]= "45)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[44]= new Array();
 choices[44][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[44][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[44][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[44][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[44] = 1;
 units[44] = ['85'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 7157. ";
 preguntaids[44] = 7157


//  Id pregunta: 4937 Año de creación de pregunta: 2002
 questions[45]= "46)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[45]= new Array();
 choices[45][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[45][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[45][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[45][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[45] = 0;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4937. ";
 preguntaids[45] = 4937


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[46]= "47)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[46]= new Array();
 choices[46][0] = "Cinco a&ntilde;os.";
 choices[46][1] = "Cuatro a&ntilde;os.";
 choices[46][2] = "Tres a&ntilde;os.";
 choices[46][3] = "Seis meses.";
 answers[46] = 2;
 units[46] = ['5'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 123. Uni&oacute;n Europea";
 preguntaids[46] = 123


//  Id pregunta: 1923 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes organismos de Internet gestiona la definici&oacute;n de pol&iacute;ticas para la asignaci&oacute;n de nombres simb&oacute;licos o dominios en Internet?:";
 choices[47]= new Array();
 choices[47][0] = "lANA";
 choices[47][1] = "ICANN";
 choices[47][2] = "RIPE";
 choices[47][3] = "IETF";
 answers[47] = 0;
 units[47] = ['103'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1923. ";
 preguntaids[47] = 1923


//  Id pregunta: 4182 Año de creación de pregunta: 2006
 questions[48]= "49)  &iquest;Qu&eacute; se entiende por diagrama de despliegue en UML?";
 choices[48]= new Array();
 choices[48][0] = "Mostrar las relaciones f&iacute;sicas entre los componenetes del sistema a desarrollar.";
 choices[48][1] = "Mostrar las relaciones entre procesos.";
 choices[48][2] = "Describir el comportamiento din&aacute;mico del sistema.";
 choices[48][3] = "Describir el comportamineto dinamico haciendo enfasis en los mensajes intercambiados.";
 answers[48] = 0;
 units[48] = ['85'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 4182. ";
 preguntaids[48] = 4182


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[49]= new Array();
 choices[49][0] = "La CETIC";
 choices[49][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[49][2] = "La DTIC";
 choices[49][3] = "El MHFP";
 answers[49] = 0;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 468. Estrategia TIC";
 preguntaids[49] = 468


//  Id pregunta: 9070 Año de creación de pregunta: 2014
 questions[50]= "51)  KML:";
 choices[50]= new Array();
 choices[50][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[50][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[50][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[50][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[50] = 0;
 units[50] = ['71'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9070. ";
 preguntaids[50] = 9070


//  Id pregunta: 7376 Año de creación de pregunta: 2010
 questions[51]= "52)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[51]= new Array();
 choices[51][0] = "Autoridad de Registro";
 choices[51][1] = "Autoridad de Certificaci&oacute;n";
 choices[51][2] = "Autoridad de Revocaci&oacute;n";
 choices[51][3] = "Autoridad de Usurpaci&oacute;n";
 answers[51] = 0;
 units[51] = ['78'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 7376. Examen TIC B 2009";
 preguntaids[51] = 7376


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[52]= "53)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[52]= new Array();
 choices[52][0] = "La Administraci&oacute;n General del Estado";
 choices[52][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[52][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[52][3] = "Todas las Administraciones P&uacute;blicas";
 answers[52] = 1;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[52] = 6948


//  Id pregunta: 5291 Año de creación de pregunta: 2006
 questions[53]= "54)  A la hora de empaquetar aplicaciones J2EE utilizaremos";
 choices[53]= new Array();
 choices[53][0] = ".jar";
 choices[53][1] = ".jar y .war dependiendo del contenido y recursos que utilicemos";
 choices[53][2] = "b) es correcta y adem&aacute;s .ear, aunque fundamentalmente se restringe para los EJBs";
 choices[53][3] = "El empaquetamiento no se determina en J2EE";
 answers[53] = 2;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 5291. ";
 preguntaids[53] = 5291


//  Id pregunta: 9286 Año de creación de pregunta: 2014
 questions[54]= "55)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[54]= new Array();
 choices[54][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[54][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[54][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[54][3] = "EVS 1 - Establecimiento del Alcance del Sistema.";
 answers[54] = 2;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 9286. Examen TIC A2 2013. Promocion interna";
 preguntaids[54] = 9286


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[55]= new Array();
 choices[55][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[55][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[55][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[55][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[55] = 0;
 units[55] = ['46'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[55] = 619


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[56]= new Array();
 choices[56][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[56][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[56][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[56][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[56] = 0;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 477. Sociedad de la informaci&oacute;n";
 preguntaids[56] = 477


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[57]= new Array();
 choices[57][0] = "Art. 13, L.O.3/2007.";
 choices[57][1] = "Art. 14, L.O.3/2007.";
 choices[57][2] = "Art. 11, L.O.3/2007.";
 choices[57][3] = "Ninguna es correcta.";
 answers[57] = 2;
 units[57] = ['14'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[57] = 378


//  Id pregunta: 6901 Año de creación de pregunta: 2010
 questions[58]= "59)  WebDav es:";
 choices[58]= new Array();
 choices[58][0] = "Un est&aacute;ndar para la descripci&oacute;n de servicios web.";
 choices[58][1] = "Un protocolo para la edici&oacute;n distribuida de archivos.";
 choices[58][2] = "Un grupo de trabajo de la W3C para la definici&oacute;n de arquitecturas de servicios web.";
 choices[58][3] = "Una herramienta de CRM basada en software libre.";
 answers[58] = 1;
 units[58] = ['99'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6901. TIC A 2009";
 preguntaids[58] = 6901


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola de 1978 establece que &ldquo;La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos&rdquo;?";
 choices[59]= new Array();
 choices[59][0] = "Art&iacute;culo 9.";
 choices[59][1] = "Art&iacute;culo 55.";
 choices[59][2] = "Art&iacute;culo 30.";
 choices[59][3] = "Art&iacute;culo 18.";
 answers[59] = 3;
 units[59] = ['1'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 55. Constituci&oacute;n de 1978";
 preguntaids[59] = 55


//  Id pregunta: 5318 Año de creación de pregunta: 2006
 questions[60]= "61)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[60]= new Array();
 choices[60][0] = "CORBA";
 choices[60][1] = "SOAP";
 choices[60][2] = "RMI";
 choices[60][3] = "DCOM";
 answers[60] = 1;
 units[60] = ['85'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 5318. ";
 preguntaids[60] = 5318


//  Id pregunta: 2251 Año de creación de pregunta: 2002
 questions[61]= "62)  La vulnerabilidad es, de acuerdo a MAGERIT:";
 choices[61]= new Array();
 choices[61][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente (lo que podr&iacute;a pasar)";
 choices[61][1] = "Causa potencial de un incidente que puede causar da&ntilde;os a un sistema de informaci&oacute;n o a una   organizaci&oacute;n.";
 choices[61][2] = "Estimaci&oacute;n del grado de exposici&oacute;n a que una amenaza se materialice sobre uno o m&aacute;s activos  causando  da&ntilde;os o perjuicios  a la Organizaci&oacute;n.";
 choices[61][3] = "Ausencias  o ineficacias  de  las salvaguardas  pertinentes  para  salvaguardar  el valor propio  o acumulado  sobre un  activo";
 answers[61] = 3;
 units[61] = ['45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2251. A: impacto; B: amenaza; C: riesgo";
 preguntaids[61] = 2251


//  Id pregunta: 1487 Año de creación de pregunta: 2016
 questions[62]= "63)  Los usuarios de una aplicaci&oacute;n piden modificaciones sobre &eacute;sta que afectan al m&oacute;dulo de pagos. Una vez realizados los cambios se realizan pruebas para comprobar que no ha afectado al m&oacute;dulo de RRHH que no ha sido modificado. &iquest;De qu&eacute; tipo de pruebas estamos hablando?";
 choices[62]= new Array();
 choices[62][0] = "Unitarias.";
 choices[62][1] = "Sistemas.";
 choices[62][2] = "Aceptaci&oacute;n.";
 choices[62][3] = "Regresi&oacute;n.";
 answers[62] = 3;
 units[62] = ['92'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 1487. ";
 preguntaids[62] = 1487


//  Id pregunta: 6448 Año de creación de pregunta: 2003
 questions[63]= "64)  Indicar la respuesta falsa sobre modelos de recuperaci&oacute;n de informaci&oacute;n";
 choices[63]= new Array();
 choices[63][0] = "En general, el modelo vectorial se comporta peor que el probabil&iacute;stico cuando se usa contra colecciones gen&eacute;ricas de documentos";
 choices[63][1] = "Las redes neuronales son muy &uacute;tiles en un sistema de recuperaci&oacute;n de informaci&oacute;n por su potencia reconociendo patrones";
 choices[63][2] = "Las redes de inferencia y las redes de confianza son modelos basados en redes bayesianas";
 choices[63][3] = "Los modelos estructurados permiten combinar la especificaci&oacute;n de consultas con la informaci&oacute;n de la estructura del documento";
 answers[63] = 0;
 units[63] = ['100'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 6448. ";
 preguntaids[63] = 6448


//  Id pregunta: 6119 Año de creación de pregunta: 2003
 questions[64]= "65)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece como infracci&oacute;n leve:";
 choices[64]= new Array();
 choices[64][0] = "La realizaci&oacute;n de actividades sin t&iacute;tulo habilitante cuando sea legalmente necesario";
 choices[64][1] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en lanormativa reguladora de las telecomunicaciones, sea necesaria";
 choices[64][2] = "No facilitar los datos requeridos por la Administraci&oacute;n o retrasar injustificadamente su aportaci&oacute;n cuando resulte exigible conforme a lo previsto por la normativa reguladora de las comunicaciones electr&oacute;nicas.";
 choices[64][3] = "La transferencia de t&iacute;tulos habilitantes o cesi&oacute;n de derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico, sin cumplir con los requisitos establecidos a tal efecto por la normativa de desarrollo de esta Ley";
 answers[64] = 2;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 6119. Examen TIC A1 MAP 2007";
 preguntaids[64] = 6119


//  Id pregunta: 4968 Año de creación de pregunta: 2002
 questions[65]= "66)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[65]= new Array();
 choices[65][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[65][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[65][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[65][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[65] = 1;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4968. ";
 preguntaids[65] = 4968


//  Id pregunta: 1228 Año de creación de pregunta: 2016
 questions[66]= "67)  En un contexto web, &iquest;qu&eacute; significa AJAX?";
 choices[66]= new Array();
 choices[66][0] = "Accelerated JAva eXtensions.";
 choices[66][1] = "Active JSON And XML.";
 choices[66][2] = "Asynchronous JAvaScript eXtensions.";
 choices[66][3] = "Asynchronous JavaScript and XML.";
 answers[66] = 3;
 units[66] = ['74'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1228. ";
 preguntaids[66] = 1228


//  Id pregunta: 8785 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO?";
 choices[67]= new Array();
 choices[67][0] = "Semiacoplado";
 choices[67][1] = "Empotrado";
 choices[67][2] = "Acoplado";
 choices[67][3] = "Org&aacute;nico";
 answers[67] = 2;
 units[67] = ['94'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 8785. Examen TIC A2 2011";
 preguntaids[67] = 8785


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano de seguimiento y control de los fondos de empleo de &aacute;mbito nacional?";
 choices[68]= new Array();
 choices[68][0] = "El Servicio P&uacute;blico de Empleo Estatal";
 choices[68][1] = "La Inspecci&oacute;n de Trabajo y Seguridad Social";
 choices[68][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[68][3] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 answers[68] = 3;
 units[68] = ['15'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 430. Modelo econ&oacute;mico";
 preguntaids[68] = 430


//  Id pregunta: 2928 Año de creación de pregunta: 2002
 questions[69]= "70)  La clave p&uacute;blica forma parte de un:";
 choices[69]= new Array();
 choices[69][0] = "Sistema criptogr&aacute;fico sim&eacute;trico";
 choices[69][1] = "Sistema criptogr&aacute;fico anal&oacute;gico";
 choices[69][2] = "Sistema criptogr&aacute;fico asim&eacute;trico";
 choices[69][3] = "Sistema criptogr&aacute;fico propietario de la Administraci&oacute;n P&uacute;blica";
 answers[69] = 2;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2928. ";
 preguntaids[69] = 2928


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[70]= "71)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[70]= new Array();
 choices[70][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[70][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[70][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[70][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[70] = 3;
 units[70] = ['11'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 321. Presupuestos generales";
 preguntaids[70] = 321


//  Id pregunta: 10756 Año de creación de pregunta: 2015
 questions[71]= "72)  Las direcciones IPv6 que permiten la configuraci&oacute;n autom&aacute;tica cuando no hay routers presentes son:";
 choices[71]= new Array();
 choices[71][0] = "Global Multicast";
 choices[71][1] = "Link Unique Address";
 choices[71][2] = "Link Local";
 choices[71][3] = "Este procedimiento no est&aacute; permitido por el protocolo IPv6";
 answers[71] = 2;
 units[71] = ['109'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 10756. ";
 preguntaids[71] = 10756


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[72]= "73)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[72]= new Array();
 choices[72][0] = "El 23 de julio de 1952.";
 choices[72][1] = "El 18 de abril de 1951.";
 choices[72][2] = "El 16 de abril de 1948.";
 choices[72][3] = "d)Ninguna de las respuestas son correctas.";
 answers[72] = 0;
 units[72] = ['5'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 169. Uni&oacute;n Europea";
 preguntaids[72] = 169


//  Id pregunta: 2362 Año de creación de pregunta: 2003
 questions[73]= "74)  WAI se refiere a:";
 choices[73]= new Array();
 choices[73][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[73][1] = "Interfaces para redes de &aacute;rea local.";
 choices[73][2] = "Interfaces para redes metropolitanas.";
 choices[73][3] = "Interfaces de acceso Wi-Fi.";
 answers[73] = 0;
 units[73] = ['42'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2362. ";
 preguntaids[73] = 2362


//  Id pregunta: 10490 Año de creación de pregunta: 2015
 questions[74]= "75)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[74]= new Array();
 choices[74][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[74][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[74][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[74][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[74] = 0;
 units[74] = ['99'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 10490. ";
 preguntaids[74] = 10490


