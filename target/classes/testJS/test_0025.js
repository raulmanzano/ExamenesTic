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
//  Id pregunta: 10293 Año de creación de pregunta: 2015
 questions[0]= "1)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[0]= new Array();
 choices[0][0] = "Nivel b&aacute;sico";
 choices[0][1] = "Nivel medio";
 choices[0][2] = "Nivel alto";
 choices[0][3] = "Nivel muy alto";
 answers[0] = 1;
 units[0] = ['35'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 10293. ";
 preguntaids[0] = 10293


//  Id pregunta: 4871 Año de creación de pregunta: 2002
 questions[1]= "2)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[1]= new Array();
 choices[1][0] = "Establecer y liberar los circuitos virtuales";
 choices[1][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[1][2] = "Generar y extraer las cabeceras de las celdas";
 choices[1][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[1] = 1;
 units[1] = ['107'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4871. ";
 preguntaids[1] = 4871


//  Id pregunta: 7116 Año de creación de pregunta: 2010
 questions[2]= "3)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[2]= new Array();
 choices[2][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[2][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[2][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[2][3] = "En dos diarios de tirada nacional";
 answers[2] = 2;
 units[2] = ['7'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 7116. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[2] = 7116


//  Id pregunta: 6224 Año de creación de pregunta: 2003
 questions[3]= "4)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[3]= new Array();
 choices[3][0] = "IEEE 802.2";
 choices[3][1] = "IEEE 802.3";
 choices[3][2] = "IEEE 802.4";
 choices[3][3] = "IEEE 802.5";
 answers[3] = 1;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6224. Examen TIC A Castilla La Mancha 2007";
 preguntaids[3] = 6224


//  Id pregunta: 4592 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[4]= new Array();
 choices[4][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[4][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[4][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[4][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[4] = 2;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4592. ";
 preguntaids[4] = 4592


//  Id pregunta: 3164 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[5]= new Array();
 choices[5][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[5][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[5][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[5][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[5] = 0;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 3164. Ley 34/2002, art&iacute;culo 21";
 preguntaids[5] = 3164


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[6]= "7)  En cu&aacute;l de la siguiente lista de opciones todos los elementos forman parte del paquete PrimitiveTypes de UML 2.5:";
 choices[6]= new Array();
 choices[6][0] = "Tiny, Boolean, String, UnlimitedNatural, Real";
 choices[6][1] = "Integer, Boolean, String, Float, Unreal";
 choices[6][2] = "Integer, Boolean, String, UnlimitedNatural, Real";
 choices[6][3] = "Integer, Array, String, Float, Real";
 answers[6] = 2;
 units[6] = ['74'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 766. AGE A2 2015";
 preguntaids[6] = 766


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[7]= new Array();
 choices[7][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[7][1] = "Todas las respuestas son correctas.";
 choices[7][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[7][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[7] = 1;
 units[7] = ['11'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 292. Presupuestos generales";
 preguntaids[7] = 292


//  Id pregunta: 4760 Año de creación de pregunta: 2002
 questions[8]= "9)  El servicio Archie se utiliza para:";
 choices[8]= new Array();
 choices[8][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[8][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[8][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[8][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[8] = 2;
 units[8] = ['103'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4760. ";
 preguntaids[8] = 4760


//  Id pregunta: 9453 Año de creación de pregunta: 2014
 questions[9]= "10)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[9]= new Array();
 choices[9][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[9][1] = "La no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[9][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[9][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[9] = 1;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 9453. A: grave; B: muy grave; C: grave; D: grave";
 preguntaids[9] = 9453


//  Id pregunta: 2914 Año de creación de pregunta: 2002
 questions[10]= "11)  Java ME es:";
 choices[10]= new Array();
 choices[10][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[10][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[10][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[10][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[10] = 1;
 units[10] = ['64', '65'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2914. ";
 preguntaids[10] = 2914


//  Id pregunta: 2462 Año de creación de pregunta: 2002
 questions[11]= "12)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[11]= new Array();
 choices[11][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[11][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[11][2] = "la direcci&oacute;n electr&oacute;nica &uacute;nica tendr&aacute; una vigencia de 5 a&ntilde;os";
 choices[11][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[11] = 2;
 units[11] = ['19'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 2462. ";
 preguntaids[11] = 2462


//  Id pregunta: 9284 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[12]= new Array();
 choices[12][0] = "ISO/IEC 12207:2008";
 choices[12][1] = "ISO 9001:2008";
 choices[12][2] = "ISO 29393:2009";
 choices[12][3] = "ISO 31000:2009";
 answers[12] = 0;
 units[12] = ['82'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 9284. Examen TIC A2 2013. Promocion interna";
 preguntaids[12] = 9284


//  Id pregunta: 9016 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[13]= new Array();
 choices[13][0] = "En actualizar la tabla de p&aacute;ginas, se pide una p&aacute;gina que ya est&aacute; en memoria";
 choices[13][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[13][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[13][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[13] = 0;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9016. ";
 preguntaids[13] = 9016


//  Id pregunta: 9245 Año de creación de pregunta: 2014
 questions[14]= "15)  El proceso mediante el cual los usuarios descubren, revelan, organizan y comprenden los requisitos que desean se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Validaci&oacute;n de los requisitos.";
 choices[14][1] = "Entrevista de especificaci&oacute;n de requisitos.";
 choices[14][2] = "Estudio de viabilidad de requisitos.";
 choices[14][3] = "Elicitaci&oacute;n de requisitos.";
 answers[14] = 3;
 units[14] = ['84'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 9245. Examen TIC A2 2013";
 preguntaids[14] = 9245


//  Id pregunta: 1661 Año de creación de pregunta: 2016
 questions[15]= "16)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[15]= new Array();
 choices[15][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[15][1] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[15][2] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[15][3] = "Presidencia del Gobierno.";
 answers[15] = 0;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 1661. ";
 preguntaids[15] = 1661


//  Id pregunta: 7028 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[16]= new Array();
 choices[16][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[16][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[16][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[16][3] = "Todos lo son";
 answers[16] = 3;
 units[16] = ['83'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 7028. ";
 preguntaids[16] = 7028


//  Id pregunta: 1849 Año de creación de pregunta: 2016
 questions[17]= "18)  Desde un punto de vista conceptual, indique cu&aacute;l de las siguientes afirmaciones sobre encaminadores (routers) y conmutadores (switches) es correcta:";
 choices[17]= new Array();
 choices[17][0] = "Los encaminadores son para redes ATM y los conmutadores para redes Ethernet.";
 choices[17][1] = "Los encaminadores trabajan en el nivel 3 y los conmutadores en el nivel 2.";
 choices[17][2] = "Ambos trabajan en los niveles 2 y 3, pero los conmutadores realizan tareas de filtrado IP.";
 choices[17][3] = "Son exactamente lo mismo.";
 answers[17] = 1;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 1849. ";
 preguntaids[17] = 1849


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[18]= new Array();
 choices[18][0] = "El BCE";
 choices[18][1] = "El Parlamento";
 choices[18][2] = "El Consejo";
 choices[18][3] = "La Comisi&oacute;n";
 answers[18] = 3;
 units[18] = ['17'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 433. Mercado &Uacute;nico Digital";
 preguntaids[18] = 433


//  Id pregunta: 4749 Año de creación de pregunta: 2002
 questions[19]= "20)  El protocolo que facilita un mecanismo para asignar din&aacute;micamente las direcciones IP, en el que las direcciones pueden ser rechazadas por los clientes, es:";
 choices[19]= new Array();
 choices[19][0] = "ARP";
 choices[19][1] = "RARP";
 choices[19][2] = "RIP";
 choices[19][3] = "DHCP";
 answers[19] = 3;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4749. ";
 preguntaids[19] = 4749


//  Id pregunta: 3039 Año de creación de pregunta: 2002
 questions[20]= "21)  Se&ntilde;ale el enunciado falso:";
 choices[20]= new Array();
 choices[20][0] = "Los ordenadores de primera generaci&oacute;n eran dif&iacute;ciles de programar porque no exist&iacute;an los lenguajes simb&oacute;licos";
 choices[20][1] = "Los ordenadores de segunda generaci&oacute;n quedaron limitados al campo cient&iacute;fico y de la defensa";
 choices[20][2] = "Como consecuencia de la aparici&oacute;n de los transistores disminuyeron las necesidades de refrigeraci&oacute;n";
 choices[20][3] = "El ordenador ENIAC estaba basado en tecnolog&iacute;as de v&aacute;lvulas de vac&iacute;o";
 answers[20] = 1;
 units[20] = ['55'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 3039. ";
 preguntaids[20] = 3039


//  Id pregunta: 6316 Año de creación de pregunta: 2003
 questions[21]= "22)  Acorde al modelo de calidad de McCall NO es un factor de calidad con caracter&iacute;sticas de explotaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Fiabilidad";
 choices[21][1] = "Extensibilidad";
 choices[21][2] = "Correcci&oacute;n";
 choices[21][3] = "Integridad";
 answers[21] = 1;
 units[21] = ['93'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6316. ";
 preguntaids[21] = 6316


//  Id pregunta: 10159 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[22]= new Array();
 choices[22][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[22][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[22][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[22][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[22] = 1;
 units[22] = ['63'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10159. Examen TIC A1 2014";
 preguntaids[22] = 10159


//  Id pregunta: 5849 Año de creación de pregunta: 2007
 questions[23]= "24)  Los registros glue de una zona DNS son aquellos que:";
 choices[23]= new Array();
 choices[23][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[23][1] = "Son los registros que mantienen el espacio de nombres de la zona.";
 choices[23][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[23][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[23] = 1;
 units[23] = ['103'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5849. Examen 2006 JCYL";
 preguntaids[23] = 5849


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[24]= new Array();
 choices[24][0] = "Reducir el gasto p&uacute;blico.";
 choices[24][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[24][2] = "Reducir el endeudamiento neto.";
 choices[24][3] = "Al Fondo de Contingencia.";
 answers[24] = 2;
 units[24] = ['11'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 325. Presupuestos generales";
 preguntaids[24] = 325


//  Id pregunta: 2510 Año de creación de pregunta: 2004
 questions[25]= "26)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[25]= new Array();
 choices[25][0] = "Perceptron";
 choices[25][1] = "Adaline";
 choices[25][2] = "Art";
 choices[25][3] = "Madaline";
 answers[25] = 2;
 units[25] = ['68'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2510. Examen TIC MAP B 2004";
 preguntaids[25] = 2510


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[26]= new Array();
 choices[26][0] = "Anual";
 choices[26][1] = "Mensual";
 choices[26][2] = "Semestral";
 choices[26][3] = "Trimestral";
 answers[26] = 3;
 units[26] = ['15'];
 blocks[26] = ['A3'];
 comments[26] = "Id Pregunta: 424. Mercado laboral";
 preguntaids[26] = 424


//  Id pregunta: 8178 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[27]= new Array();
 choices[27][0] = "ISO/IEC 9126";
 choices[27][1] = "ISO 8859";
 choices[27][2] = "ISO 14000";
 choices[27][3] = "ISO/IEC 14496";
 answers[27] = 0;
 units[27] = ['42'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8178. Examen TIC A2 2010 interna";
 preguntaids[27] = 8178


//  Id pregunta: 2057 Año de creación de pregunta: 2002
 questions[28]= "29)  A efectos de la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el:";
 choices[28]= new Array();
 choices[28][0] = "Encargado del tratamiento";
 choices[28][1] = "Afectado o interesado";
 choices[28][2] = "Responsable del fichero o tratamiento";
 choices[28][3] = "Decisor del tratamiento";
 answers[28] = 2;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2057. ";
 preguntaids[28] = 2057


//  Id pregunta: 10910 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[29]= new Array();
 choices[29][0] = "DHCPREQUEST";
 choices[29][1] = "DHCPACK";
 choices[29][2] = "DHCPDISCOVER";
 choices[29][3] = "DHCPOFFER";
 answers[29] = 2;
 units[29] = ['102'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10910. ";
 preguntaids[29] = 10910


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[30]= "31)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[30]= new Array();
 choices[30][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[30][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[30][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[30][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[30] = 2;
 units[30] = ['5'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[30] = 160


//  Id pregunta: 9312 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Para qu&eacute; se usa el framework ASP.NET?";
 choices[31]= new Array();
 choices[31][0] = "Para construir aplicaciones y servicios Web";
 choices[31][1] = "Para conectar las aplicaciones a la base de datos";
 choices[31][2] = "Para construir la interface de usuario";
 choices[31][3] = "Para conectar los programas";
 answers[31] = 0;
 units[31] = ['63'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9312. Examen TIC A2 UPM 2010";
 preguntaids[31] = 9312


//  Id pregunta: 5647 Año de creación de pregunta: 2007
 questions[32]= "33)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[32]= new Array();
 choices[32][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[32][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[32][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[32][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[32] = 1;
 units[32] = ['104'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5647. ";
 preguntaids[32] = 5647


//  Id pregunta: 2740 Año de creación de pregunta: 2002
 questions[33]= "34)  El algoritmo RSA se emplea para:";
 choices[33]= new Array();
 choices[33][0] = "Cifrar datos con una clave secreta";
 choices[33][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[33][2] = "Obtener un resumen (huella digital) de un documento";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = 1;
 units[33] = ['76'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2740. ";
 preguntaids[33] = 2740


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[34]= new Array();
 choices[34][0] = "absoluta de las Cortes Generales.";
 choices[34][1] = "absoluta del Congreso de los Diputados.";
 choices[34][2] = "simple de las Cortes Generales.";
 choices[34][3] = "simple del Congreso de los Diputados.";
 answers[34] = 3;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 1. Constituci&oacute;n de 1978";
 preguntaids[34] = 1


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[35]= new Array();
 choices[35][0] = "El rey, a propuesta del Gobierno.";
 choices[35][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[35][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[35][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[35] = 1;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[35] = 37


//  Id pregunta: 1424 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el art&iacute;culo 30 de la Constituci&oacute;n Espa&ntilde;ola, los deberes de los ciudadanos en los casos de grave riesgo, cat&aacute;strofe o calamidad p&uacute;blica, podr&aacute;n regularse:";
 choices[36]= new Array();
 choices[36][0] = "Por Ley Org&aacute;nica.";
 choices[36][1] = "Por Ley.";
 choices[36][2] = "Por Real Decreto-Ley.";
 choices[36][3] = "Ninguna es correcta.";
 answers[36] = 1;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 1424. ";
 preguntaids[36] = 1424


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[37]= "38)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Acoso sexual.";
 choices[37][1] = "Acoso por raz&oacute;n de sexo.";
 choices[37][2] = "Acoso laboral.";
 choices[37][3] = "Acoso mental.";
 answers[37] = 1;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[37] = 377


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[38]= "39)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[38]= new Array();
 choices[38][0] = "El Gobierno.";
 choices[38][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[38][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[38][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[38] = 2;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 33. Constituci&oacute;n de 1978";
 preguntaids[38] = 33


//  Id pregunta: 2806 Año de creación de pregunta: 2002
 questions[39]= "40)  En el editor vi de Unix para escribir el fichero que se est&aacute; editando y salir se utiliza el comando:";
 choices[39]= new Array();
 choices[39][0] = "ww";
 choices[39][1] = ":x";
 choices[39][2] = "Ctrl + w (presionar simult&aacute;neamente la tecla Control y la w)";
 choices[39][3] = "F10 (la tecla de funci&oacute;n F10)";
 answers[39] = 1;
 units[39] = ['57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2806. Tambi&eacute;n se puede utilizar :wq";
 preguntaids[39] = 2806


//  Id pregunta: 4248 Año de creación de pregunta: 2006
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es un criterio para abordar un proceso de ajuste dimensional?";
 choices[40]= new Array();
 choices[40][0] = "Interconectividad.";
 choices[40][1] = "Seguridad.";
 choices[40][2] = "Grado de conocimiento de los usuarios finales.";
 choices[40][3] = "Reducci&oacute;n del presupuesto.";
 answers[40] = 3;
 units[40] = ['95'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 4248. ";
 preguntaids[40] = 4248


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[41]= "42)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[41][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[41][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[41][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[41] = 1;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 1995. ";
 preguntaids[41] = 1995


//  Id pregunta: 3928 Año de creación de pregunta: 2002
 questions[42]= "43)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[42]= new Array();
 choices[42][0] = "Dise&ntilde;o de prototipos";
 choices[42][1] = "Tests finales";
 choices[42][2] = "An&aacute;lisis de requerimientos";
 choices[42][3] = "Ninguno de ellos";
 answers[42] = 2;
 units[42] = ['85', '86'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3928. ";
 preguntaids[42] = 3928


//  Id pregunta: 6538 Año de creación de pregunta: 2003
 questions[43]= "44)  Seg&uacute;n el RD 1720/2007, por el que se aprueba el desarrollo de la Ley Organica 15/1999 de protecci&oacute;n de datos de carater personal, ser&aacute; posible el tratamiento o la cesi&oacute;n de los datos de car&aacute;cter personal sin necesidad del consentimiento del interesado cuando";
 choices[43]= new Array();
 choices[43][0] = "En ningun caso. Siempre es necesario consentimiento del interesado.";
 choices[43][1] = "Lo autorice una norma con rango de ley o una norma dederecho comunitario.";
 choices[43][2] = "Los datos objeto de tratamiento o cesion figuran en fuentes accesibles al publico y el responsable del fichero tenga un interes legitimo para su conocimiento.";
 choices[43][3] = "La b) y la c) son correctas.";
 answers[43] = 3;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 6538. ";
 preguntaids[43] = 6538


//  Id pregunta: 8108 Año de creación de pregunta: 2011
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[44]= new Array();
 choices[44][0] = "SetRequest";
 choices[44][1] = "GetBulkRequest";
 choices[44][2] = "GetNextRequest";
 choices[44][3] = "Trap";
 answers[44] = 1;
 units[44] = ['114'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 8108. Examen TIC A2 2010 interna";
 preguntaids[44] = 8108


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[45]= new Array();
 choices[45][0] = "Principio de solo una vez";
 choices[45][1] = "Apertura y transparencia";
 choices[45][2] = "Confianza y seguridad";
 choices[45][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[45] = 3;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 483. Sociedad de la informaci&oacute;n";
 preguntaids[45] = 483


//  Id pregunta: 10855 Año de creación de pregunta: 2015
 questions[46]= "47)  XACML es:";
 choices[46]= new Array();
 choices[46][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[46][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[46][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[46][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[46] = 2;
 units[46] = ['119'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10855. ";
 preguntaids[46] = 10855


//  Id pregunta: 3934 Año de creación de pregunta: 2002
 questions[47]= "48)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[47]= new Array();
 choices[47][0] = "Iteraci&oacute;n";
 choices[47][1] = "Selecci&oacute;n";
 choices[47][2] = "Composici&oacute;n";
 choices[47][3] = "Opcionalidad";
 answers[47] = 3;
 units[47] = ['85', '86'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3934. ";
 preguntaids[47] = 3934


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[48]= "49)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[48]= new Array();
 choices[48][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[48][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[48][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[48][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[48] = 2;
 units[48] = ['7', '47'];
 blocks[48] = ['A2', 'B1'];
 comments[48] = "Id Pregunta: 9782. ";
 preguntaids[48] = 9782


//  Id pregunta: 7010 Año de creación de pregunta: 2010
 questions[49]= "50)  Dentro del marco de la auditor&iacute;a de sistemas de informaci&oacute;n, los &ldquo;controles&rdquo; en funci&oacute;n del momento en que act&uacute;an podr&iacute;an clasificarse en:";
 choices[49]= new Array();
 choices[49][0] = "Proactivos, reactivos, concurrentes y recurrentes.";
 choices[49][1] = "Recurrentes, instant&aacute;neos, previos y posteriores.";
 choices[49][2] = "Concomitantes, recurrentes, duraderos e instant&aacute;neos.";
 choices[49][3] = "Reactivos, proactivos y concurrentes o concomitantes.";
 answers[49] = 3;
 units[49] = ['36'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 7010. ";
 preguntaids[49] = 7010


//  Id pregunta: 6400 Año de creación de pregunta: 2003
 questions[50]= "51)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[50]= new Array();
 choices[50][0] = "An&aacute;lisis de riesgos";
 choices[50][1] = "An&aacute;lisis de impacto";
 choices[50][2] = "Disponibilidad";
 choices[50][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[50] = 1;
 units[50] = ['45'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 6400. Examen 2006 JCYL";
 preguntaids[50] = 6400


//  Id pregunta: 9344 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[51]= new Array();
 choices[51][0] = "ISO/IEC 26300:2006";
 choices[51][1] = "RFC 2373";
 choices[51][2] = "ISO/IEC 9899:1999";
 choices[51][3] = "ISO 9000";
 answers[51] = 0;
 units[51] = ['66'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 9344. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[51] = 9344


//  Id pregunta: 1855 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique cu&aacute;l de las siguientes afirmaciones sobre el protocolo SMTP es correcta:";
 choices[52]= new Array();
 choices[52][0] = "Ejecutando el comando telnet para acceder al servidor SMTP por el puerto 25 ser&iacute;a posible enviar correos electr&oacute;nicos.";
 choices[52][1] = "Es un protocolo que necesita autenticaci&oacute;n del usuario.";
 choices[52][2] = "El cuerpo de los mensajes debe estar compuesto por caracteres ASCII de 8 bits.";
 choices[52][3] = "El protocolo modificado con las extensiones MIME, que permite ampliar el tipo de archivos que se pueden enviar, se denomina ESMTP.";
 answers[52] = 0;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1855. ";
 preguntaids[52] = 1855


//  Id pregunta: 3780 Año de creación de pregunta: 2002
 questions[53]= "54)  El flujo de datos de un DFD:";
 choices[53]= new Array();
 choices[53][0] = "Tiene siempre flechas";
 choices[53][1] = "No tiene por qu&eacute; existir";
 choices[53][2] = "S&oacute;lo conecta procesos";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = 3;
 units[53] = ['85', '86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3780. ";
 preguntaids[53] = 3780


//  Id pregunta: 2904 Año de creación de pregunta: 2002
 questions[54]= "55)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[54]= new Array();
 choices[54][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[54][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[54][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[54][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[54] = 3;
 units[54] = ['68'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2904. ";
 preguntaids[54] = 2904


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[55]= new Array();
 choices[55][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[55][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[55][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[55][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[55] = 2;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 243. Ley 39/2015";
 preguntaids[55] = 243


//  Id pregunta: 5586 Año de creación de pregunta: 2007
 questions[56]= "57)  Un protocolo de comunicaci&oacute;n es:";
 choices[56]= new Array();
 choices[56][0] = "conjunto de reglas que gobiernan el formato de intercambio de mensajes entre niveles OSI de un mismo sistema.";
 choices[56][1] = "El conjunto de reglas que gobiernan c&oacute;mo va a proceder la comunicaci&oacute;n entre entidades pares de distintos sistemas.";
 choices[56][2] = "El conjunto de elementos f&iacute;sicos y l&oacute;gicos que relacionan dos niveles adyacentes de un sistema.";
 choices[56][3] = "Conjunto de primitivas y par&aacute;metros que concretan los servicios que se proporcionan a trav&eacute;s de la interfaz.";
 answers[56] = 1;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5586. ";
 preguntaids[56] = 5586


//  Id pregunta: 885 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; banda de frecuencia utilizan las etiquetas RFID HF (Alta Frecuencia)?";
 choices[57]= new Array();
 choices[57][0] = "125 kHz - 134 kHz";
 choices[57][1] = "13,553 MHz - 13,567 MHz";
 choices[57][2] = "400 MHz - 1000 MHz";
 choices[57][3] = "2,45 GHz - 5,4 GHz";
 answers[57] = 1;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 885. AGE A2 2015";
 preguntaids[57] = 885


//  Id pregunta: 9747 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[58]= new Array();
 choices[58][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[58][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[58][2] = "La latencia de acceso a los datos es menor";
 choices[58][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[58] = 3;
 units[58] = ['53'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9747. ";
 preguntaids[58] = 9747


//  Id pregunta: 9095 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[59]= new Array();
 choices[59][0] = "CORBA es un tipo de middleware.";
 choices[59][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[59][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[59][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[59] = 0;
 units[59] = ['55'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9095. Examen TIC-A1 2013";
 preguntaids[59] = 9095


//  Id pregunta: 5588 Año de creación de pregunta: 2007
 questions[60]= "61)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[60]= new Array();
 choices[60][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[60][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[60][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[60][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[60] = 2;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 5588. ";
 preguntaids[60] = 5588


//  Id pregunta: 5947 Año de creación de pregunta: 2007
 questions[61]= "62)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[61]= new Array();
 choices[61][0] = "Software libre";
 choices[61][1] = "Software propietario";
 choices[61][2] = "Software de dominio p&uacute;blico";
 choices[61][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de lasaplicaciones utilizadas para el ejercicio de potestades";
 answers[61] = 1;
 units[61] = ['41'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 5947. ";
 preguntaids[61] = 5947


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[62]= new Array();
 choices[62][0] = "Al Consejo Europeo.";
 choices[62][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[62][2] = "A la Comisi&oacute;n Europea.";
 choices[62][3] = "Al Parlamento Europeo.";
 answers[62] = 2;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 134. Uni&oacute;n Europea";
 preguntaids[62] = 134


//  Id pregunta: 2789 Año de creación de pregunta: 2002
 questions[63]= "64)  El SGBD permite la definici&oacute;n de la Base de Datos a tres niveles de abstracci&oacute;n: l&oacute;gico, f&iacute;sico y externo En el nivel l&oacute;gico:";
 choices[63]= new Array();
 choices[63][0] = "Se da una definici&oacute;n de las estructuras de datos que constituyen la base de datos";
 choices[63][1] = "Se elige una implementaci&oacute;n de cada una de las estructuras de datos";
 choices[63][2] = "Se definen vistas parciales de la base de datos para distintos grupos de usuarios";
 choices[63][3] = "Ninguna es cierta";
 answers[63] = 0;
 units[63] = ['60'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2789. ";
 preguntaids[63] = 2789


//  Id pregunta: 10134 Año de creación de pregunta: 2015
 questions[64]= "65)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[64]= new Array();
 choices[64][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[64][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[64][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[64][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[64] = 0;
 units[64] = ['53'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 10134. Examen TIC A1 2014";
 preguntaids[64] = 10134


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[65]= "66)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[65]= new Array();
 choices[65][0] = "Ley Org&aacute;nica.";
 choices[65][1] = "Ley de Bases.";
 choices[65][2] = "Ley ordinaria.";
 choices[65][3] = "Mandato.";
 answers[65] = 1;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 16. Constituci&oacute;n de 1978";
 preguntaids[65] = 16


//  Id pregunta: 3169 Año de creación de pregunta: 2002
 questions[66]= "67)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[66]= new Array();
 choices[66][0] = "30/1992";
 choices[66][1] = "34/2002";
 choices[66][2] = "30/2002";
 choices[66][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[66] = 1;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 3169. ";
 preguntaids[66] = 3169


//  Id pregunta: 10700 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[67]= new Array();
 choices[67][0] = "Flume";
 choices[67][1] = "Cassandra";
 choices[67][2] = "Galenicum";
 choices[67][3] = "Hbase";
 answers[67] = 2;
 units[67] = ['73'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10700. ";
 preguntaids[67] = 10700


//  Id pregunta: 1009 Año de creación de pregunta: 2016
 questions[68]= "69)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[68]= new Array();
 choices[68][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[68][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[68][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[68][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[68] = 2;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 1009. Ley 40/2015";
 preguntaids[68] = 1009


//  Id pregunta: 4712 Año de creación de pregunta: 2002
 questions[69]= "70)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[69]= new Array();
 choices[69][0] = "nivel de transporte";
 choices[69][1] = "nivel de enlace";
 choices[69][2] = "nivel de red";
 choices[69][3] = "son funciones presentes en varios niveles";
 answers[69] = 3;
 units[69] = ['109'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4712. ";
 preguntaids[69] = 4712


//  Id pregunta: 6860 Año de creación de pregunta: 2010
 questions[70]= "71)  En relaci&oacute;n con las metodolog&iacute;as &aacute;giles de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[70]= new Array();
 choices[70][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[70][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[70][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a &aacute;gil.";
 choices[70][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a &aacute;gil.";
 answers[70] = 0;
 units[70] = ['84'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6860. TIC A 2009";
 preguntaids[70] = 6860


//  Id pregunta: 9411 Año de creación de pregunta: 2014
 questions[71]= "72)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[71]= new Array();
 choices[71][0] = "No, nunca";
 choices[71][1] = "Solo el Product Owner";
 choices[71][2] = "Solo el Scrum Master";
 choices[71][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[71] = 0;
 units[71] = ['84'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 9411. ";
 preguntaids[71] = 9411


//  Id pregunta: 1029 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[72]= new Array();
 choices[72][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[72][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[72][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[72][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[72] = 0;
 units[72] = ['4', '7', '8', '9'];
 blocks[72] = ['A1', 'A2'];
 comments[72] = "Id Pregunta: 1029. Ley 40/2015";
 preguntaids[72] = 1029


//  Id pregunta: 2709 Año de creación de pregunta: 2002
 questions[73]= "74)  Considere un sistema con memoria virtual cuya CPU tiene una utilizaci&oacute;n del 15% y donde el dispositivo de paginaci&oacute;n est&aacute; ocupado el 97% del tiempo. &iquest;Qu&eacute; indican estas medidas?:";
 choices[73]= new Array();
 choices[73][0] = "El grado de multiprogramaci&oacute;n es demasiado bajo";
 choices[73][1] = "El dispositivo de paginaci&oacute;n es demasiado peque&ntilde;o";
 choices[73][2] = "La CPU es demasiado lenta";
 choices[73][3] = "El grado de multiprogramaci&oacute;n es demasiado alto";
 answers[73] = 3;
 units[73] = ['56'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2709. ";
 preguntaids[73] = 2709


//  Id pregunta: 8825 Año de creación de pregunta: 2013
 questions[74]= "75)  &iquest;Qu&eacute; m&eacute;todo de decisi&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[74]= new Array();
 choices[74][0] = "ELECTRE";
 choices[74][1] = "PROMETHEE";
 choices[74][2] = "TOPSIS";
 choices[74][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[74] = 0;
 units[74] = ['38'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 8825. ";
 preguntaids[74] = 8825


