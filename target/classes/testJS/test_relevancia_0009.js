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
//  Id pregunta: 1828 Año de creación de pregunta: 2016
 questions[0]= "1)  Teniendo en cuenta que las cajas negras son un tipo de prueba de software, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "Las cajas negras son un tipo de pruebas de software que se hacen sobre las funciones internas de un m&oacute;dulo.";
 choices[0][1] = "Las cajas negras son un tipo de pruebas de software que dan m&aacute;s importancia al funcionamiento interno que a las entradas y salidas.";
 choices[0][2] = "Las cajas negras son un tipo de pruebas de software que se ocupan de probar si se cumplen los requisitos funcionales de la aplicaci&oacute;n.";
 choices[0][3] = "Ninguna de las opciones es correcta.";
 answers[0] = 2;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 1828. ";
 preguntaids[0] = 1828


//  Id pregunta: 7335 Año de creación de pregunta: 2010
 questions[1]= "2)  En el modelo COCOMO un proyecto semiacoplado hace referencia a:";
 choices[1]= new Array();
 choices[1][0] = "Aquel en el que el esfuerzo y el coste del proyecto se calcula en funci&oacute;n de las LOC y adem&aacute;s a&ntilde;ade una evaluaci&oacute;n subjetiva";
 choices[1][1] = "Proyectos peque&ntilde;os y sencillos con un equipo de trabajo estable, con buena experiencia y que cuenten con unos requerimientos poco r&iacute;gidos";
 choices[1][2] = "Proyectos de complejidad media, equipos con distintos niveles de experiencia y dentro de un software con terminales y bases de datos";
 choices[1][3] = "Proyectos que deban desarrollarse para ser acoplados en un hardware y software estricto y con restricciones operativas";
 answers[1] = 2;
 units[1] = ['93'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7335. ";
 preguntaids[1] = 7335


//  Id pregunta: 10970 Año de creación de pregunta: 2015
 questions[2]= "3)  Seg&uacute;n la ley 19/2013 de transparencia y en lo relativo al ejercicio del derecho de acceso de la informaci&oacute;n p&uacute;blica, se&ntilde;ale la FALSA:";
 choices[2]= new Array();
 choices[2][0] = "Ser&aacute;n motivadas las resoluciones que denieguen el acceso, las que concedan el acceso parcial o a trav&eacute;s de una modalidad distinta a la solicitada y las que permitan el acceso cuando haya habido oposici&oacute;n de un tercero.";
 choices[2][1] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[2][2] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica no agotan la v&iacute;a administrativa y a&uacute;n son recurribles en alzada ante el Secretario de Estado de Funci&oacute;n P&uacute;blica.";
 choices[2][3] = "El plazo para resolver una solicitud de acceso ser&aacute; de un mes ampliable otro mes si as&iacute; fuera necesario.";
 answers[2] = 2;
 units[2] = ['22'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 10970. ";
 preguntaids[2] = 10970


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[3]= "4)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[3]= new Array();
 choices[3][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[3][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[3][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[3][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[3] = 3;
 units[3] = ['5'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 165. Uni&oacute;n Europea";
 preguntaids[3] = 165


//  Id pregunta: 967 Año de creación de pregunta: 2016
 questions[4]= "5)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[4]= new Array();
 choices[4][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[4][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[4][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[4][3] = "todas son correctas";
 answers[4] = 3;
 units[4] = ['4', '7', '8', '9'];
 blocks[4] = ['A1', 'A2'];
 comments[4] = "Id Pregunta: 967. Ley 40/2015";
 preguntaids[4] = 967


//  Id pregunta: 6726 Año de creación de pregunta: 2009
 questions[5]= "6)  &iquest;Qu&eacute; es JNDI?";
 choices[5]= new Array();
 choices[5][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[5][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[5][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 0;
 units[5] = ['64'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6726. ";
 preguntaids[5] = 6726


//  Id pregunta: 1709 Año de creación de pregunta: 2016
 questions[6]= "7)  Dentro de la Actividad MSI 3 (Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n), se&ntilde;ale cu&aacute;les son las tareas asignadas a esta actividad seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[6]= new Array();
 choices[6][0] = "Identificaci&oacute;n de Elementos Afectados, Establecimiento del Plan de Acci&oacute;n, Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n.";
 choices[6][1] = "An&aacute;lisis de Impacto de los Cambios, Mantenimiento de los M&oacute;dulos, Planificaci&oacute;n de los Planes de Contingencia.";
 choices[6][2] = "Identificaci&oacute;n de los Cambios, Validaci&oacute;n Pruebas de Regresi&oacute;n, Aprobaci&oacute;n y Cierre de las Peticiones.";
 choices[6][3] = "Verificaci&oacute;n y Estudio de la Petici&oacute;n, Estudio de la Propuesta de Petici&oacute;n.";
 answers[6] = 0;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1709. ";
 preguntaids[6] = 1709


//  Id pregunta: 5874 Año de creación de pregunta: 2007
 questions[7]= "8)  Indicar cual no es un Dominio de COBIT:";
 choices[7]= new Array();
 choices[7][0] = "Planificaci&oacute;n y organizaci&oacute;n";
 choices[7][1] = "Control y calidad";
 choices[7][2] = "Entrega y soporte";
 choices[7][3] = "Adquisici&oacute;n e implementaci&oacute;n";
 answers[7] = 1;
 units[7] = ['101'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 5874. ";
 preguntaids[7] = 5874


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[8]= "9)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[8]= new Array();
 choices[8][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[8][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[8][2] = "Los interesados en el procedimiento";
 choices[8][3] = "Las alternativas b) y c) son correctas";
 answers[8] = 1;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[8] = 1022


//  Id pregunta: 6460 Año de creación de pregunta: 2003
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[9]= new Array();
 choices[9][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[9][1] = "Es el est&aacute;ndar 802.17";
 choices[9][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[9][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[9] = 3;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6460. ";
 preguntaids[9] = 6460


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[10]= "11)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[10]= new Array();
 choices[10][0] = "Conformidad";
 choices[10][1] = "Responsabilidad";
 choices[10][2] = "Adquisici&oacute;n";
 choices[10][3] = "Desempe&ntilde;o";
 answers[10] = 0;
 units[10] = ['26'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 533. Gobernanza TIC";
 preguntaids[10] = 533


//  Id pregunta: 2637 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l es el API de Java dedicada al procesamiento de XML?:";
 choices[11]= new Array();
 choices[11][0] = "JXML";
 choices[11][1] = "JML";
 choices[11][2] = "JAXP";
 choices[11][3] = "Todas son falsas";
 answers[11] = 2;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2637. ";
 preguntaids[11] = 2637


//  Id pregunta: 5949 Año de creación de pregunta: 2007
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[12]= new Array();
 choices[12][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux";
 choices[12][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos";
 choices[12][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK";
 choices[12][3] = "La arquitectura actual de componentes de GNOME se denomina Bonobo";
 answers[12] = 0;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5949. ";
 preguntaids[12] = 5949


//  Id pregunta: 2279 Año de creación de pregunta: 2002
 questions[13]= "14)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[13]= new Array();
 choices[13][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[13][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[13][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[13][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[13] = 1;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2279. ";
 preguntaids[13] = 2279


//  Id pregunta: 5328 Año de creación de pregunta: 2006
 questions[14]= "15)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[14]= new Array();
 choices[14][0] = "Tunel";
 choices[14][1] = "Red Privada Virtual (VPN)";
 choices[14][2] = "IPSec";
 choices[14][3] = "SSL";
 answers[14] = 0;
 units[14] = ['120'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5328. ";
 preguntaids[14] = 5328


//  Id pregunta: 8316 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[15]= new Array();
 choices[15][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[15][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[15][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[15][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[15] = 3;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8316. Examen UPM A2 2011";
 preguntaids[15] = 8316


//  Id pregunta: 1416 Año de creación de pregunta: 2016
 questions[16]= "17)  La Constituci&oacute;n Espa&ntilde;ola de 1978 se estructura en :";
 choices[16]= new Array();
 choices[16][0] = "169 art&iacute;culos, 9 disposiciones adicionales, 4 transitorias, 1 disposici&oacute;n final.";
 choices[16][1] = "167 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 choices[16][2] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 2 disposiciones finales.";
 choices[16][3] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 answers[16] = 3;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 1416. ";
 preguntaids[16] = 1416


//  Id pregunta: 1001 Año de creación de pregunta: 2016
 questions[17]= "18)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[17]= new Array();
 choices[17][0] = "Director General";
 choices[17][1] = "Secretario general";
 choices[17][2] = "Subdirector general";
 choices[17][3] = "Subsecretario";
 answers[17] = 0;
 units[17] = ['4', '7', '8', '9'];
 blocks[17] = ['A1', 'A2'];
 comments[17] = "Id Pregunta: 1001. Ley 40/2015";
 preguntaids[17] = 1001


//  Id pregunta: 9667 Año de creación de pregunta: 2014
 questions[18]= "19)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen";
 choices[18]= new Array();
 choices[18][0] = "TIFF.";
 choices[18][1] = "GIF.";
 choices[18][2] = "PNG.";
 choices[18][3] = "JPEG.";
 answers[18] = 2;
 units[18] = ['80'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9667. Examen TIC A1 2013";
 preguntaids[18] = 9667


//  Id pregunta: 4955 Año de creación de pregunta: 2002
 questions[19]= "20)  La utilizaci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico mediante redes de sat&eacute;lites:";
 choices[19]= new Array();
 choices[19][0] = "Se regula de acuerdo al derecho p&uacute;blico";
 choices[19][1] = "Se regula mediante derecho internacional";
 choices[19][2] = "Su gesti&oacute;n no puede darse en concesi&oacute;n";
 choices[19][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[19] = 1;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4955. ";
 preguntaids[19] = 4955


//  Id pregunta: 4175 Año de creación de pregunta: 2006
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[20]= new Array();
 choices[20][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[20][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[20][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[20][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[20] = 0;
 units[20] = ['85', '86'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 4175. ";
 preguntaids[20] = 4175


//  Id pregunta: 1513 Año de creación de pregunta: 2016
 questions[21]= "22)  Si accedemos a un sitio https y recibimos un aviso de que la autoridad de certificaci&oacute;n que ha emitido el certificado de servidor no es reconocida por nosotros, y aun as&iacute; aceptamos establecer comunicaci&oacute;n con ese servidor, &iquest;la comunicaci&oacute;n entre cliente y servidor ser&aacute; cifrada?";
 choices[21]= new Array();
 choices[21][0] = "No, puesto que el certificado no es v&aacute;lido.";
 choices[21][1] = "S&iacute;, puesto que el certificado permite cifrar esa comunicaci&oacute;n, aunque haya sido emitido por una autoridad en la que no confiamos.";
 choices[21][2] = "No, puesto que aunque hayamos aceptado ese certificado no podemos utilizarlo para hacer el cifrado de informaci&oacute;n.";
 choices[21][3] = "S&iacute;, porque al aceptar el cifrado se va a realizar con un certificado de cliente.";
 answers[21] = 1;
 units[21] = ['120'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1513. ";
 preguntaids[21] = 1513


//  Id pregunta: 8801 Año de creación de pregunta: 2013
 questions[22]= "23)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[22]= new Array();
 choices[22][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[22][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[22][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[22][3] = "Ninguna de las respuestas es correcta.";
 answers[22] = 0;
 units[22] = ['114'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 8801. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";
 preguntaids[22] = 8801


//  Id pregunta: 7037 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[23]= new Array();
 choices[23][0] = "Entrevistas";
 choices[23][1] = "An&aacute;lisis de Mercado";
 choices[23][2] = "Entorno de Bucles Adaptativo";
 choices[23][3] = "Brainstorming";
 answers[23] = 2;
 units[23] = ['84'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 7037. ";
 preguntaids[23] = 7037


//  Id pregunta: 8461 Año de creación de pregunta: 2011
 questions[24]= "25)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[24]= new Array();
 choices[24][0] = "...gasto alguno para el afectado&rdquo;";
 choices[24][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[24][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[24][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[24] = 2;
 units[24] = ['35'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8461. ";
 preguntaids[24] = 8461


//  Id pregunta: 4313 Año de creación de pregunta: 2004
 questions[25]= "26)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[25]= new Array();
 choices[25][0] = "Agencia estatal de radiocomunicaciones";
 choices[25][1] = "Ministerio  de Energia, Turismo y Agenda Digital";
 choices[25][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[25][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[25] = 1;
 units[25] = ['121'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4313. Similar a examen TIC MAP A 2004.";
 preguntaids[25] = 4313


//  Id pregunta: 5480 Año de creación de pregunta: 2007
 questions[26]= "27)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[26]= new Array();
 choices[26][0] = "Usuario daemon.";
 choices[26][1] = "Usuario adm.";
 choices[26][2] = "Usuario bin.";
 choices[26][3] = "Usuario root.";
 answers[26] = 3;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5480. ";
 preguntaids[26] = 5480


//  Id pregunta: 9279 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[27]= new Array();
 choices[27][0] = "Jefe de Proyecto";
 choices[27][1] = "Consultor";
 choices[27][2] = "Analista";
 choices[27][3] = "Programador";
 answers[27] = 0;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 9279. Examen TIC A2 2013. Promocion interna";
 preguntaids[27] = 9279


//  Id pregunta: 1351 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[28]= new Array();
 choices[28][0] = "Alternativas textuales.";
 choices[28][1] = "Distinguible.";
 choices[28][2] = "Predecible.";
 choices[28][3] = "Compatible.";
 answers[28] = 2;
 units[28] = ['42'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 1351. ";
 preguntaids[28] = 1351


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[29]= new Array();
 choices[29][0] = "Jenkins";
 choices[29][1] = "Hudson";
 choices[29][2] = "SonarQube";
 choices[29][3] = "Todas lo son";
 answers[29] = 3;
 units[29] = ['92'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 835. Integraci&oacute;n continua";
 preguntaids[29] = 835


//  Id pregunta: 10116 Año de creación de pregunta: 2015
 questions[30]= "31)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[30]= new Array();
 choices[30][0] = "OM2";
 choices[30][1] = "OM3";
 choices[30][2] = "OM4";
 choices[30][3] = "OM5";
 answers[30] = 2;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 10116. Examen TIC A2 2014";
 preguntaids[30] = 10116


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[31]= new Array();
 choices[31][0] = "Siempre en formato electr&oacute;nico.";
 choices[31][1] = "Siempre en formato papel.";
 choices[31][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[31][3] = "La ley no regula el formato del expediente.";
 answers[31] = 0;
 units[31] = ['7'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 205. Ley 39/2015";
 preguntaids[31] = 205


//  Id pregunta: 3371 Año de creación de pregunta: 2006
 questions[32]= "33)  El permiso de Unix 500 permite:";
 choices[32]= new Array();
 choices[32][0] = "Lectura y escritura para el propietario del archivo";
 choices[32][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[32][2] = "Lectura y escritura para todos los usuarios";
 choices[32][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[32] = 1;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3371. ";
 preguntaids[32] = 3371


//  Id pregunta: 6552 Año de creación de pregunta: 2003
 questions[33]= "34)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[33]= new Array();
 choices[33][0] = "Servidor de aplicaciones";
 choices[33][1] = "Proxy";
 choices[33][2] = "Servidor LDAP";
 choices[33][3] = "Servidor de base de datos";
 answers[33] = 1;
 units[33] = ['119'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 6552. ";
 preguntaids[33] = 6552


//  Id pregunta: 9252 Año de creación de pregunta: 2014
 questions[34]= "35)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "Total y exclusiva.";
 choices[34][1] = "Parcial y superpuesta.";
 choices[34][2] = "Parcial y exclusiva.";
 choices[34][3] = "Total y superpuesta.";
 answers[34] = 2;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9252. Examen TIC A2 2013";
 preguntaids[34] = 9252


//  Id pregunta: 7957 Año de creación de pregunta: 2011
 questions[35]= "36)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[35]= new Array();
 choices[35][0] = "IANA.";
 choices[35][1] = "NIST.";
 choices[35][2] = "ICANN.";
 choices[35][3] = "IETF.";
 answers[35] = 2;
 units[35] = ['103'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7957. Examen TIC A2 2010";
 preguntaids[35] = 7957


//  Id pregunta: 1950 Año de creación de pregunta: 2016
 questions[36]= "37)  En relaci&oacute;n con la metodolog&iacute;a &aacute;gil de desarrollo de software. &iquest;cu&aacute;l de las siguientes afirmaciones NO es correcta?:";
 choices[36]= new Array();
 choices[36][0] = "Prioriza la generaci&oacute;n de documentaci&oacute;n t&eacute;cnica.";
 choices[36][1] = "Se desarrolla software en breves lapsos de tiempo.";
 choices[36][2] = "Promueve iteraciones en el desarrollo.";
 choices[36][3] = "Intenta satisfacer al cliente mediante la entrega temprana y continua de software.";
 answers[36] = 0;
 units[36] = ['84'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 1950. ";
 preguntaids[36] = 1950


//  Id pregunta: 6176 Año de creación de pregunta: 2003
 questions[37]= "38)  El modelo CMMI:";
 choices[37]= new Array();
 choices[37][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[37][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[37][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[37][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[37] = 2;
 units[37] = ['33'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 6176. Examen TIC A Castilla La Mancha 2007";
 preguntaids[37] = 6176


//  Id pregunta: 4135 Año de creación de pregunta: 2003
 questions[38]= "39)  Principal inconveniente del teletexto:";
 choices[38]= new Array();
 choices[38][0] = "El juego de colores es reducido.";
 choices[38][1] = "Carece de interactividad real.";
 choices[38][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[38][3] = "Necesita un decodificador caro y voluminoso.";
 answers[38] = 1;
 units[38] = ['80'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 4135. ";
 preguntaids[38] = 4135


//  Id pregunta: 8207 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[39]= new Array();
 choices[39][0] = "CREATE";
 choices[39][1] = "ALTER";
 choices[39][2] = "DELETE";
 choices[39][3] = "DROP";
 answers[39] = 2;
 units[39] = ['60', '61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8207. Examen TIC A2 2010 interna";
 preguntaids[39] = 8207


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[40]= "41)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[40]= new Array();
 choices[40][0] = "Los ocupados y los parados activos";
 choices[40][1] = "S&oacute;lo los ocupados";
 choices[40][2] = "Los ocupados y los inactivos";
 choices[40][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[40] = 0;
 units[40] = ['12'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 340. Modelo econ&oacute;mico";
 preguntaids[40] = 340


//  Id pregunta: 2448 Año de creación de pregunta: 2006
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[41]= new Array();
 choices[41][0] = "Impide la descarga de contenido protegido";
 choices[41][1] = "Impide la copia de contenido protegido";
 choices[41][2] = "Garantiza la no modificaci&oacute;n del contenido protegido";
 choices[41][3] = "Se asegura de que el comprador ha pagado por el contenido";
 answers[41] = 0;
 units[41] = ['41'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2448. ";
 preguntaids[41] = 2448


//  Id pregunta: 5349 Año de creación de pregunta: 2006
 questions[42]= "43)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[42]= new Array();
 choices[42][0] = "Un ticket de autenticaci&oacute;n";
 choices[42][1] = "Un ticket de autorizaci&oacute;n";
 choices[42][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[42][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[42] = 1;
 units[42] = ['120'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5349. ";
 preguntaids[42] = 5349


//  Id pregunta: 2258 Año de creación de pregunta: 2002
 questions[43]= "44)  Los datos de car&aacute;cter personal que hagan referencia al origen racial, a la salud y a la vida sexual s&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando:";
 choices[43]= new Array();
 choices[43][0] = "Cuando lo disponga una Ley";
 choices[43][1] = "Si el afectado consiente expresamente.";
 choices[43][2] = "En los supuestos 'a' o 'b'.";
 choices[43][3] = "Nunca";
 answers[43] = 2;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2258. ";
 preguntaids[43] = 2258


//  Id pregunta: 10414 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[44]= new Array();
 choices[44][0] = "Servicios: ASP.NET y WCF.";
 choices[44][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[44][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[44][3] = "Aplicaciones en la nube: Azure.";
 answers[44] = 2;
 units[44] = ['63'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10414. ";
 preguntaids[44] = 10414


//  Id pregunta: 5455 Año de creación de pregunta: 2007
 questions[45]= "46)  Si tiene que desarrollar un procesador de textos siguiendo un modelo de ciclo de vida incremental, &iquest;qu&eacute; funcionalidad abordar&iacute;a primero?";
 choices[45]= new Array();
 choices[45][0] = "Las funciones de edici&oacute;n m&aacute;s sofisticadas.";
 choices[45][1] = "La gesti&oacute;n b&aacute;sica de archivos y producci&oacute;n de documentos.";
 choices[45][2] = "La m&aacute;s sencilla, para ir de menor a mayor complejidad.";
 choices[45][3] = "La funcionalidad m&aacute;s independiente del usuario, como por ejemplo, la correcci&oacute;n ortogr&aacute;fica y gramatical";
 answers[45] = 1;
 units[45] = ['82'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 5455. ";
 preguntaids[45] = 5455


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[46]= "47)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[46]= new Array();
 choices[46][0] = "Son vinculantes solamente.";
 choices[46][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[46][2] = "Son preceptivos y vinculantes.";
 choices[46][3] = "Son preceptivos y no vinculantes.";
 answers[46] = 1;
 units[46] = ['5'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 175. Uni&oacute;n Europea";
 preguntaids[46] = 175


//  Id pregunta: 3532 Año de creación de pregunta: 2004
 questions[47]= "48)  El estudio de Viabilidad del Sistema:";
 choices[47]= new Array();
 choices[47][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[47][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[47][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[47][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[47] = 0;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3532. Pregunta TIC-B 2004";
 preguntaids[47] = 3532


//  Id pregunta: 10298 Año de creación de pregunta: 2015
 questions[48]= "49)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[48]= new Array();
 choices[48][0] = "200 p&iacute;xeles por pulgada";
 choices[48][1] = "125 p&iacute;xeles por pulgada";
 choices[48][2] = "256 p&iacute;xeles por pulgada";
 choices[48][3] = "80 p&iacute;xeles por pulgada";
 answers[48] = 0;
 units[48] = ['43'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 10298. ";
 preguntaids[48] = 10298


//  Id pregunta: 4425 Año de creación de pregunta: 2005
 questions[49]= "50)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[49]= new Array();
 choices[49][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[49][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[49][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[49][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[49] = 1;
 units[49] = ['120'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4425. ";
 preguntaids[49] = 4425


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[50]= "51)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[50]= new Array();
 choices[50][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[50][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[50][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[50][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[50] = 2;
 units[50] = ['26'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 527. AGE A1 2015";
 preguntaids[50] = 527


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es registro de funcionarios habilitados?";
 choices[51]= new Array();
 choices[51][0] = "@podera";
 choices[51][1] = "Habilit@";
 choices[51][2] = "Representa";
 choices[51][3] = "Autentica";
 answers[51] = 1;
 units[51] = ['47'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 630. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[51] = 630


//  Id pregunta: 2882 Año de creación de pregunta: 2002
 questions[52]= "53)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[52]= new Array();
 choices[52][0] = "El n&uacute;mero de i-nodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[52][1] = "El n&uacute;mero de i-nodo y el nombre del fichero";
 choices[52][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el principio de los datos";
 choices[52][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[52] = 1;
 units[52] = ['57'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2882. ";
 preguntaids[52] = 2882


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[53]= new Array();
 choices[53][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[53][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[53][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[53][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[53] = 2;
 units[53] = ['26'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 528. AGE A1 2015";
 preguntaids[53] = 528


//  Id pregunta: 9966 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[54]= new Array();
 choices[54][0] = "500";
 choices[54][1] = "600";
 choices[54][2] = "700";
 choices[54][3] = "800";
 answers[54] = 3;
 units[54] = ['46'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9966. ";
 preguntaids[54] = 9966


//  Id pregunta: 7240 Año de creación de pregunta: 2010
 questions[55]= "56)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[55]= new Array();
 choices[55][0] = "Programa de Cartas de Servicio";
 choices[55][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[55][2] = "Programa de Quejas y Sugerencias";
 choices[55][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[55] = 3;
 units[55] = ['92'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 7240. ";
 preguntaids[55] = 7240


//  Id pregunta: 5352 Año de creación de pregunta: 2006
 questions[56]= "57)  Qu&eacute; ataque es el m&aacute;s efectivo frente a una VPN IPSec";
 choices[56]= new Array();
 choices[56][0] = "Fuerza bruta";
 choices[56][1] = "Hombre en el medio";
 choices[56][2] = "An&aacute;lisis de tr&aacute;fico";
 choices[56][3] = "Replicaci&oacute;n (replay)";
 answers[56] = 1;
 units[56] = ['120'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5352. ";
 preguntaids[56] = 5352


//  Id pregunta: 10576 Año de creación de pregunta: 2015
 questions[57]= "58)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[57]= new Array();
 choices[57][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[57][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[57][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[57][3] = "Personas, asociados (partners), productos, procesos";
 answers[57] = 3;
 units[57] = ['101'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10576. ";
 preguntaids[57] = 10576


//  Id pregunta: 2087 Año de creación de pregunta: 2002
 questions[58]= "59)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[58]= new Array();
 choices[58][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[58][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[58][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[58][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[58] = 0;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2087. ";
 preguntaids[58] = 2087


//  Id pregunta: 10605 Año de creación de pregunta: 2015
 questions[59]= "60)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del dominio p&uacute;blico radiol&eacute;ctrico?";
 choices[59]= new Array();
 choices[59][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[59][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[59][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[59][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[59] = 2;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10605. Articulo 61";
 preguntaids[59] = 10605


//  Id pregunta: 7044 Año de creación de pregunta: 2010
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[60]= new Array();
 choices[60][0] = "Abstracci&oacute;n";
 choices[60][1] = "Encapsulaci&oacute;n";
 choices[60][2] = "Independencia";
 choices[60][3] = "Modularidad";
 answers[60] = 2;
 units[60] = ['85'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7044. ";
 preguntaids[60] = 7044


//  Id pregunta: 6547 Año de creación de pregunta: 2009
 questions[61]= "62)  Seg&uacute;n el Real Decreto 1720/2007, que se entiende por &quot;Fichero no automatizado&quot;";
 choices[61]= new Array();
 choices[61][0] = "Todo conjunto organizado de datos de car&aacute;cter personal, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso.";
 choices[61][1] = "Todo conjunto de datos de car&aacute;cter personal organizado de forma no automatizada y estructurado conforme a criterios espec&iacute;ficos relativos a personas f&iacute;sicas, que permitan acceder sin esfuerzos desproporcionados a sus datos personales, ya sea aqu&eacute;l centralizado, descentralizado o repartido de forma funcional o geogr&aacute;fica";
 choices[61][2] = "Todo conjunto organizado de datos, que permita el acceso a los datos con arreglo a criterios determinados, cualquiera que fuere la forma o modalidad de su creaci&oacute;n, almacenamiento, organizaci&oacute;n y acceso.";
 choices[61][3] = "No existe tal definici&oacute;n en el nombrado Real Decreto";
 answers[61] = 1;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 6547. ";
 preguntaids[61] = 6547


//  Id pregunta: 8358 Año de creación de pregunta: 2011
 questions[62]= "63)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[62]= new Array();
 choices[62][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura";
 choices[62][1] = "Ofrece la maxima seguridad de los datos almacenados";
 choices[62][2] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas";
 choices[62][3] = "Puede ser implementado tanto en Hardware como en Software";
 answers[62] = 2;
 units[62] = ['53'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8358. Analista Ayto. Madrid 2010";
 preguntaids[62] = 8358


//  Id pregunta: 8579 Año de creación de pregunta: 2013
 questions[63]= "64)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[63]= new Array();
 choices[63][0] = "Fuertemente acoplados.";
 choices[63][1] = "Muy desacoplados";
 choices[63][2] = "Un procesador no depende de lo que hace otro";
 choices[63][3] = "Todas las respuestas con correctas";
 answers[63] = 0;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8579. ";
 preguntaids[63] = 8579


//  Id pregunta: 6129 Año de creación de pregunta: 2003
 questions[64]= "65)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola deProtecci&oacute;n de Datos";
 choices[64]= new Array();
 choices[64][0] = "Un experto en la materia";
 choices[64][1] = "Un miembro de la Real Academia de la Historia";
 choices[64][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica";
 choices[64][3] = "Un representante de la Administraci&oacute;n Local";
 answers[64] = 2;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 6129. Examen TIC A1 MAP 2007";
 preguntaids[64] = 6129


//  Id pregunta: 8876 Año de creación de pregunta: 2013
 questions[65]= "66)  Seg&uacute;n la ley 9/2014, el derecho de uso del dominio p&uacute;blico radioel&eacute;ctrico es otorgado por:";
 choices[65]= new Array();
 choices[65][0] = "La Agencia Estatal de Radiocomunicaciones";
 choices[65][1] = "MINETUR (actual Ministerio de Energ&iacute;a, Turismo y Agenda Digital)";
 choices[65][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[65][3] = "El Gobierno";
 answers[65] = 1;
 units[65] = ['121'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8876. ";
 preguntaids[65] = 8876


//  Id pregunta: 9741 Año de creación de pregunta: 2014
 questions[66]= "67)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[66]= new Array();
 choices[66][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[66][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[66][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[66][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[66] = 1;
 units[66] = ['49'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9741. ";
 preguntaids[66] = 9741


//  Id pregunta: 10440 Año de creación de pregunta: 2015
 questions[67]= "68)  En un contrato tramitado por urgencia por su necesidad inaplazable o cuya adjudicaci&oacute;n se deba acelerar por inter&eacute;s p&uacute;blico:";
 choices[67]= new Array();
 choices[67][0] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as h&aacute;biles.";
 choices[67][1] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as h&aacute;biles.";
 choices[67][2] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 15 d&iacute;as naturales.";
 choices[67][3] = "El plazo de inicio de la ejecuci&oacute;n no puede superar los 10 d&iacute;as naturales.";
 answers[67] = 0;
 units[67] = ['37'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 10440. ";
 preguntaids[67] = 10440


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[68]= new Array();
 choices[68][0] = "Fue elaborada y aprobada por la CETIC";
 choices[68][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[68][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[68][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[68] = 1;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 456. Estrategia TIC";
 preguntaids[68] = 456


//  Id pregunta: 5560 Año de creación de pregunta: 2009
 questions[69]= "70)  En GNU/Linux se utilizan diversos programas para la gesti&oacute;n de versiones, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[69]= new Array();
 choices[69][0] = "mercurial";
 choices[69][1] = "ksafe";
 choices[69][2] = "git";
 choices[69][3] = "bazaar";
 answers[69] = 1;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 5560. ";
 preguntaids[69] = 5560


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[70]= "71)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[70]= new Array();
 choices[70][0] = "solo mediante ley";
 choices[70][1] = "reglamentariamente";
 choices[70][2] = "mediante ley o reglamentariamente";
 choices[70][3] = "ninguna es correcta";
 answers[70] = 0;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[70] = 212


//  Id pregunta: 5233 Año de creación de pregunta: 2006
 questions[71]= "72)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[71]= new Array();
 choices[71][0] = "HDSL";
 choices[71][1] = "SDSL";
 choices[71][2] = "VDSL";
 choices[71][3] = "SHDSL";
 answers[71] = 2;
 units[71] = ['108'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5233. ";
 preguntaids[71] = 5233


//  Id pregunta: 7104 Año de creación de pregunta: 2010
 questions[72]= "73)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[72]= new Array();
 choices[72][0] = "Bajo, Medio o Alto";
 choices[72][1] = "Limitado, Grave o Muy Grave";
 choices[72][2] = "B&aacute;sico, Medio o Alto";
 choices[72][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[72] = 0;
 units[72] = ['46'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 7104. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";
 preguntaids[72] = 7104


//  Id pregunta: 3538 Año de creación de pregunta: 2004
 questions[73]= "74)  Una de las siguientes t&eacute;cnicas no se considera habitualmente como m&eacute;todo para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico:";
 choices[73]= new Array();
 choices[73][0] = "De prueba y error sobre distintas implantaciones";
 choices[73][1] = "Anal&iacute;ticas";
 choices[73][2] = "De simulaci&oacute;n";
 choices[73][3] = "De &quot;bench-mark&quot;";
 answers[73] = 0;
 units[73] = ['84'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3538. ";
 preguntaids[73] = 3538


//  Id pregunta: 10406 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[74]= new Array();
 choices[74][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[74][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[74][2] = "Los dos anteriores son verdaderos";
 choices[74][3] = "Todas las respuestas son falsas";
 answers[74] = 2;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 10406. ";
 preguntaids[74] = 10406


