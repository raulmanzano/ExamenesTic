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
//  Id pregunta: 6987 Año de creación de pregunta: 2010
 questions[0]= "1)  En el marco de trabajo de la gesti&oacute;n de proyectos no se realiza:";
 choices[0]= new Array();
 choices[0][0] = "Gesti&oacute;n del tiempo.";
 choices[0][1] = "Gesti&oacute;n de la calidad.";
 choices[0][2] = "Gesti&oacute;n del cambio.";
 choices[0][3] = "Gesti&oacute;n de contenidos.";
 answers[0] = 3;
 units[0] = ['33'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 6987. TIC-B 2009 bloque desarrollo";
 preguntaids[0] = 6987


//  Id pregunta: 10866 Año de creación de pregunta: 2015
 questions[1]= "2)  UDDI se corresponde con las siglas:";
 choices[1]= new Array();
 choices[1][0] = "Universal Description, Discovery and Integration";
 choices[1][1] = "Uniform Description, Discovery and Integration";
 choices[1][2] = "Universal Description, Discovery and Information";
 choices[1][3] = "Unic Description, Discovery and Information";
 answers[1] = 0;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10866. ";
 preguntaids[1] = 10866


//  Id pregunta: 3079 Año de creación de pregunta: 2002
 questions[2]= "3)  Un proveedor de servicios OLE DB es:";
 choices[2]= new Array();
 choices[2][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[2][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[2][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[2][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[2] = 0;
 units[2] = ['63'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3079. ";
 preguntaids[2] = 3079


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[3]= "4)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[3]= new Array();
 choices[3][0] = "10 d&iacute;as h&aacute;biles";
 choices[3][1] = "15 d&iacute;as h&aacute;biles";
 choices[3][2] = "15 d&iacute;as naturales";
 choices[3][3] = "1 mes";
 answers[3] = 3;
 units[3] = ['10'];
 blocks[3] = ['A2'];
 comments[3] = "Id Pregunta: 10779. ";
 preguntaids[3] = 10779


//  Id pregunta: 4648 Año de creación de pregunta: 2002
 questions[4]= "5)  BGP es un protocolo que se usa para:";
 choices[4]= new Array();
 choices[4][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[4][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[4][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[4][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[4] = 2;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4648. ";
 preguntaids[4] = 4648


//  Id pregunta: 10956 Año de creación de pregunta: 2015
 questions[5]= "6)  El contrato &quot;servicios consolidados de telecomunicaciones de la Administraci&oacute;n General del Estado, fase 1&quot;&hellip; Seleccione la verdadera:";
 choices[5]= new Array();
 choices[5][0] = "participan todos los Ministerios";
 choices[5][1] = "incluye tarifa plana para todos los servicios demandados";
 choices[5][2] = "supone un ahorro superior a los 124 millones de euros en 4 a&ntilde;os";
 choices[5][3] = "incluye todos los servicios de los anteriores contratos de sus participantes";
 answers[5] = 2;
 units[5] = ['37'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 10956. ";
 preguntaids[5] = 10956


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano de seguimiento y control de los fondos de empleo de &aacute;mbito nacional?";
 choices[6]= new Array();
 choices[6][0] = "El Servicio P&uacute;blico de Empleo Estatal";
 choices[6][1] = "La Inspecci&oacute;n de Trabajo y Seguridad Social";
 choices[6][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[6][3] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 answers[6] = 3;
 units[6] = ['15'];
 blocks[6] = ['A3'];
 comments[6] = "Id Pregunta: 430. Modelo econ&oacute;mico";
 preguntaids[6] = 430


//  Id pregunta: 1452 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la LSSI en su anexo de definiciones?";
 choices[7]= new Array();
 choices[7][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica.";
 choices[7][1] = "El v&iacute;deo bajo demanda.";
 choices[7][2] = "El teletexto televisivo.";
 choices[7][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos.";
 answers[7] = 2;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 1452. ";
 preguntaids[7] = 1452


//  Id pregunta: 3578 Año de creación de pregunta: 2004
 questions[8]= "9)  Una Organizaci&oacute;n que este en el nivel 1 (Inicial) del Modelo de Capacidad de Madurez (CMM: Computer Capability Model) en el desarrollo del software, est&aacute;:";
 choices[8]= new Array();
 choices[8][0] = "En una fase preliminar de determinaci&oacute;n de la viabilidad del proyecto";
 choices[8][1] = "En una situaci&oacute;n donde el proyecto esta conforme a sus especificaciones originales y no ha sufrido todav&iacute;a modificaciones";
 choices[8][2] = "En una situaci&oacute;n ideal, con altos estandares de gesti&oacute;n y calidad implementados";
 choices[8][3] = "En una situaci&oacute;n en la que no se hace ning&uacute;n esfuerzo en la garant&iacute;a de calidad y gesti&oacute;n de proyectos";
 answers[8] = 3;
 units[8] = ['92'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3578. Pregunta TIC-B 2003";
 preguntaids[8] = 3578


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[9]= "10)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[9]= new Array();
 choices[9][0] = "El Delegado del Gobierno.";
 choices[9][1] = "El Subdelegado del Gobierno.";
 choices[9][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[9][3] = "El Gobernador Civil.";
 answers[9] = 2;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 34. Constituci&oacute;n de 1978";
 preguntaids[9] = 34


//  Id pregunta: 9884 Año de creación de pregunta: 2015
 questions[10]= "11)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[10]= new Array();
 choices[10][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[10][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[10][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[10][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[10] = 0;
 units[10] = ['7', '19'];
 blocks[10] = ['A2', 'A4'];
 comments[10] = "Id Pregunta: 9884. ";
 preguntaids[10] = 9884


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[11]= "12)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Acoso sexual.";
 choices[11][1] = "Acoso por raz&oacute;n de sexo.";
 choices[11][2] = "Acoso laboral.";
 choices[11][3] = "Acoso mental.";
 answers[11] = 1;
 units[11] = ['14'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[11] = 377


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[12]= "13)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[12]= new Array();
 choices[12][0] = "Rey.";
 choices[12][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[12][2] = "Constituci&oacute;n.";
 choices[12][3] = "Pueblo.";
 answers[12] = 3;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 78. Constituci&oacute;n de 1978";
 preguntaids[12] = 78


//  Id pregunta: 8918 Año de creación de pregunta: 2013
 questions[13]= "14)  En el contexto de la rentabilidad de la inversi&oacute;n de un proyecto:";
 choices[13]= new Array();
 choices[13][0] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es mayor que su rentabilidad esperada";
 choices[13][1] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es igual que su rentabilidad esperada";
 choices[13][2] = "Una inversi&oacute;n se realiza si su rentabilidad comprometida es igual que su rentabilidad esperada";
 choices[13][3] = "Una inversi&oacute;n se realiza si su rentabilidad esperada es mayor que su rentabilidad exigida";
 answers[13] = 3;
 units[13] = ['40'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 8918. ";
 preguntaids[13] = 8918


//  Id pregunta: 7049 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Qu&eacute; se entiende por acoplamiento en el contexto del dise&ntilde;o de un sistema transaccional?";
 choices[14]= new Array();
 choices[14][0] = "Indica el grado de interdependencia entre los m&oacute;dulos.";
 choices[14][1] = "Indica la relaci&oacute;n que existe entre los elementos de un mismo m&oacute;dulo.";
 choices[14][2] = "Indica c&oacute;mo se relacionan las entidades de datos del sistema.";
 choices[14][3] = "Ninguna de las anteriores.";
 answers[14] = 0;
 units[14] = ['89'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 7049. ";
 preguntaids[14] = 7049


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[15]= new Array();
 choices[15][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[15][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[15][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[15][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[15] = 1;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[15] = 120


//  Id pregunta: 7727 Año de creación de pregunta: 2010
 questions[16]= "17)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[16]= new Array();
 choices[16][0] = "Un experto en la materia.";
 choices[16][1] = "Un miembro de la Real Academia de la Historia.";
 choices[16][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica.";
 choices[16][3] = "Un representante de la Administraci&oacute;n Local.";
 answers[16] = 2;
 units[16] = ['35'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 7727. Map 2007";
 preguntaids[16] = 7727


//  Id pregunta: 8961 Año de creación de pregunta: 2013
 questions[17]= "18)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[17]= new Array();
 choices[17][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[17][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[17][2] = "Se ejecutan en contenedores EJB";
 choices[17][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[17] = 0;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8961. ";
 preguntaids[17] = 8961


//  Id pregunta: 7101 Año de creación de pregunta: 2010
 questions[18]= "19)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[18]= new Array();
 choices[18][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[18][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[18][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[18][3] = "Todas las anteriores";
 answers[18] = 0;
 units[18] = ['46'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 7101. Art&iacute;culo 19 ENS";
 preguntaids[18] = 7101


//  Id pregunta: 4600 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; define la norma X.400?:";
 choices[19]= new Array();
 choices[19][0] = "Sistema de tratamiento de alarmas";
 choices[19][1] = "Sistema de tratamiento de mensajes";
 choices[19][2] = "Sistema de transferencia de ficheros";
 choices[19][3] = "Sistema de gesti&oacute;n de red";
 answers[19] = 1;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4600. ";
 preguntaids[19] = 4600


//  Id pregunta: 3949 Año de creación de pregunta: 2002
 questions[20]= "21)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[20]= new Array();
 choices[20][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[20][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[20][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[20][3] = "Los criterios para calificar al software";
 answers[20] = 1;
 units[20] = ['93'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3949. ";
 preguntaids[20] = 3949


//  Id pregunta: 9582 Año de creación de pregunta: 2014
 questions[21]= "22)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[21]= new Array();
 choices[21][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[21][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[21][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[21][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[21] = 0;
 units[21] = ['114'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9582. TIC A2 2013 libre";
 preguntaids[21] = 9582


//  Id pregunta: 4504 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes es un m&eacute;todo de modulaci&oacute;n &oacute;ptica?:";
 choices[22]= new Array();
 choices[22][0] = "Modulaci&oacute;n directa";
 choices[22][1] = "Modulaci&oacute;n indirecta";
 choices[22][2] = "Modulaci&oacute;n de fase";
 choices[22][3] = "Modulaci&oacute;n interna";
 answers[22] = 0;
 units[22] = ['106'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4504. ";
 preguntaids[22] = 4504


//  Id pregunta: 2690 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Qu&eacute; se entiende por modo supervisor?:";
 choices[23]= new Array();
 choices[23][0] = "Sistema en el que no se precisa 'password' para acceder al sistema, por tratarse del supervisor";
 choices[23][1] = "Sistema en el que la palabra clave de acceso al sistema permite acceder a todos los elementos del sistema inform&aacute;tico";
 choices[23][2] = "Dispositivos que pueden modificar el modo de operaci&oacute;n y prohibir determinadas ejecuciones importantes";
 choices[23][3] = "Es un modo del sistema operativo mediante el cual s&oacute;lo &eacute;l es capaz de acceder a los recursos del ordenador mediante instrucciones que no est&aacute;n disponibles para los programas de usuario";
 answers[23] = 3;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2690. ";
 preguntaids[23] = 2690


//  Id pregunta: 1852 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;A qu&eacute; categor&iacute;a de la taxonom&iacute;a de Flynn pertenecen los microprocesadores multin&uacute;cleo?";
 choices[24]= new Array();
 choices[24][0] = "SISD";
 choices[24][1] = "SIMD";
 choices[24][2] = "MISD";
 choices[24][3] = "MIMD";
 answers[24] = 3;
 units[24] = ['49'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1852. ";
 preguntaids[24] = 1852


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[25]= new Array();
 choices[25][0] = "Publicidad.";
 choices[25][1] = "Constituci&oacute;n.";
 choices[25][2] = "Legalidad.";
 choices[25][3] = "Creaci&oacute;n.";
 answers[25] = 0;
 units[25] = ['1'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[25] = 42


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[26]= new Array();
 choices[26][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[26][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[26][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[26][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[26] = 0;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 63. Constituci&oacute;n de 1978";
 preguntaids[26] = 63


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[27]= "28)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[27]= new Array();
 choices[27][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[27][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[27][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[27][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[27] = 1;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 485. Sociedad de la informaci&oacute;n";
 preguntaids[27] = 485


//  Id pregunta: 2285 Año de creación de pregunta: 2002
 questions[28]= "29)  Se entiende por disponibilidad de la informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[28][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[28][2] = "Aseguramiento de que los usuarios autorizados tienen acceso cuando lo  requieran a la informaci&oacute;n y sus activos asociados.";
 choices[28][3] = "Procedimiento o mecanismo tecnol&oacute;gico que reduce el riesgo.";
 answers[28] = 2;
 units[28] = ['45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2285. ";
 preguntaids[28] = 2285


//  Id pregunta: 2141 Año de creación de pregunta: 2004
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[29][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[29][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[29][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[29] = 2;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2141. Examen TIC MAP B 2004";
 preguntaids[29] = 2141


//  Id pregunta: 2044 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[30]= new Array();
 choices[30][0] = "M&eacute;todo promethee";
 choices[30][1] = "Utilidad multiatributo";
 choices[30][2] = "Permutaci&oacute;n";
 choices[30][3] = "Ninguno de los anteriores";
 answers[30] = 3;
 units[30] = ['38'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2044. ";
 preguntaids[30] = 2044


//  Id pregunta: 4289 Año de creación de pregunta: 2002
 questions[31]= "32)  La implantaci&oacute;n de SARA aporta:";
 choices[31]= new Array();
 choices[31][0] = "Servicios b&aacute;sicos horizontales";
 choices[31][1] = "Servicios sectoriales de los departamentos ministeriales";
 choices[31][2] = "Servicios horizontales de car&aacute;cter  avanzado";
 choices[31][3] = "Todas las respuestas anteriores son correctas";
 answers[31] = 3;
 units[31] = ['114'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4289. ";
 preguntaids[31] = 4289


//  Id pregunta: 7357 Año de creación de pregunta: 2010
 questions[32]= "33)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[32]= new Array();
 choices[32][0] = "Diaria";
 choices[32][1] = "Intermedia";
 choices[32][2] = "Incremental";
 choices[32][3] = "Diferencial";
 answers[32] = 2;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 7357. Examen TIC B 2009";
 preguntaids[32] = 7357


//  Id pregunta: 8437 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[33]= new Array();
 choices[33][0] = "Enfoque de soluciones multilaterales";
 choices[33][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[33][2] = "Interoperabilidad sem&aacute;ntica";
 choices[33][3] = "Ninguno de los anteriores";
 answers[33] = 0;
 units[33] = ['43'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 8437. ";
 preguntaids[33] = 8437


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[34]= "35)  La secci&oacute;n segunda, del cap&iacute;tulo segundo, del t&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola de 1978, se denomina:";
 choices[34]= new Array();
 choices[34][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[34][1] = "De los derechos y deberes fundamentales.";
 choices[34][2] = "De los derechos y libertades de los ciudadanos.";
 choices[34][3] = "De los derechos y deberes de los ciudadanos.";
 answers[34] = 3;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 53. Constituci&oacute;n de 1978";
 preguntaids[34] = 53


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[35]= "36)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[35]= new Array();
 choices[35][0] = "Pas&oacute; de 518 a 626.";
 choices[35][1] = "Pas&oacute; de 434 a 518.";
 choices[35][2] = "Pas&oacute; de 345 a 512.";
 choices[35][3] = "Pas&oacute; de 435 a 610.";
 answers[35] = 1;
 units[35] = ['5'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 164. Uni&oacute;n Europea";
 preguntaids[35] = 164


//  Id pregunta: 5636 Año de creación de pregunta: 2007
 questions[36]= "37)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[36]= new Array();
 choices[36][0] = "Pruebas unitarias.";
 choices[36][1] = "Pruebas singulares.";
 choices[36][2] = "Pruebas de integraci&oacute;n.";
 choices[36][3] = "Pruebas de regresi&oacute;n.";
 answers[36] = 1;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 5636. ";
 preguntaids[36] = 5636


//  Id pregunta: 1110 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale, de los siguientes est&aacute;ndares, cu&aacute;l NO est&aacute; recogido en la Norma T&eacute;cnica de Interoperabilidad NTI de Cat&aacute;logo de est&aacute;ndares en la categor&iacute;a de &quot;Formatos ficheros - Cartograf&iacute;a y sistemas de informaci&oacute;n geogr&aacute;fica&quot;:";
 choices[37]= new Array();
 choices[37][0] = "SVG";
 choices[37][1] = "WFS";
 choices[37][2] = "GML";
 choices[37][3] = "WMS";
 answers[37] = 0;
 units[37] = ['44'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 1110. ";
 preguntaids[37] = 1110


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[38]= new Array();
 choices[38][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[38][1] = "Solamente el Congreso.";
 choices[38][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[38][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[38] = 0;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 4. Constituci&oacute;n de 1978";
 preguntaids[38] = 4


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[39]= "40)  El sector p&uacute;blico institucional se integra por:";
 choices[39]= new Array();
 choices[39][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[39][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[39][2] = "las Universidades p&uacute;blicas";
 choices[39][3] = "todas son correctas";
 answers[39] = 3;
 units[39] = ['4', '7', '8', '9'];
 blocks[39] = ['A1', 'A2'];
 comments[39] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[39] = 963


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[40]= new Array();
 choices[40][0] = "En 2011";
 choices[40][1] = "En 2013";
 choices[40][2] = "En 2015";
 choices[40][3] = "En 2016";
 answers[40] = 2;
 units[40] = ['17'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 438. Mercado &Uacute;nico Digital";
 preguntaids[40] = 438


//  Id pregunta: 6946 Año de creación de pregunta: 2010
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[41]= new Array();
 choices[41][0] = "Digitalizaci&oacute;n de documentos";
 choices[41][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[41][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[41][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[41] = 3;
 units[41] = ['43'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 6946. Disposici&oacute;n adicional primera";
 preguntaids[41] = 6946


//  Id pregunta: 4440 Año de creación de pregunta: 2002
 questions[42]= "43)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[42]= new Array();
 choices[42][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[42][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[42][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[42][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[42] = 2;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4440. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";
 preguntaids[42] = 4440


//  Id pregunta: 1484 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l es la norma ISO (Organizaci&oacute;n Internacional de Estandarizaci&oacute;n) relativa a la documentaci&oacute;n para usuarios de software?";
 choices[43]= new Array();
 choices[43][0] = "ISO/IEC 26514:2008";
 choices[43][1] = "ISO 9001:2000";
 choices[43][2] = "ISO 30300";
 choices[43][3] = "ISO 27002";
 answers[43] = 0;
 units[43] = ['82'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 1484. ";
 preguntaids[43] = 1484


//  Id pregunta: 2493 Año de creación de pregunta: 2004
 questions[44]= "45)  En UNIX, &iquest;qui&eacute;n es el due&ntilde;o del proceso una vez ejecutada la instrucci&oacute;n lpr?";
 choices[44]= new Array();
 choices[44][0] = "root";
 choices[44][1] = "el usuario que la ha ejecutado";
 choices[44][2] = "el programa de control de la cola de impresora";
 choices[44][3] = "scheduler";
 answers[44] = 2;
 units[44] = ['57'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2493. Similar a examen TIC SS A 2003";
 preguntaids[44] = 2493


//  Id pregunta: 10397 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[45]= new Array();
 choices[45][0] = "Confianza Digital";
 choices[45][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[45][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[45][3] = "Interoperabilidad y normas";
 answers[45] = 3;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 10397. ";
 preguntaids[45] = 10397


//  Id pregunta: 10245 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[46]= new Array();
 choices[46][0] = "SEND";
 choices[46][1] = "FACTURAE";
 choices[46][2] = "COMPRAE";
 choices[46][3] = "TESORO-E";
 answers[46] = 0;
 units[46] = ['75'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10245. ";
 preguntaids[46] = 10245


//  Id pregunta: 8775 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;C&uacute;al de los siguientes aspectos NO se recoge en las cl&aacute;sulas sobre contrataci&oacute;n p&uacute;blica de SCE del manual EPHOS-2?";
 choices[47]= new Array();
 choices[47][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la ISO 80211";
 choices[47][1] = "El cableado deber&aacute; estar de acuerdo con los requisitos del nivel f&iacute;sico de la ISO 802.x";
 choices[47][2] = "Se debe detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[47][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos o rosetas del cableado horizontal";
 answers[47] = 0;
 units[47] = ['104'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8775. ";
 preguntaids[47] = 8775


//  Id pregunta: 6113 Año de creación de pregunta: 2003
 questions[48]= "49)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[48]= new Array();
 choices[48][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[48][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos";
 choices[48][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos";
 choices[48][3] = "Serie I &ndash; red digital de servicios integrados";
 answers[48] = 3;
 units[48] = ['48', '104'];
 blocks[48] = ['B1', 'B4'];
 comments[48] = "Id Pregunta: 6113. Examen TIC A1 MAP 2007";
 preguntaids[48] = 6113


//  Id pregunta: 6138 Año de creación de pregunta: 2003
 questions[49]= "50)  Se&ntilde;ale cual de los siguientes NO es un modelo de ciclo de vida del software:";
 choices[49]= new Array();
 choices[49][0] = "Cascada";
 choices[49][1] = "Espiral";
 choices[49][2] = "Prototipado";
 choices[49][3] = "Escalera";
 answers[49] = 3;
 units[49] = ['82'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6138. Examen TIC A1 MAP 2007";
 preguntaids[49] = 6138


//  Id pregunta: 5066 Año de creación de pregunta: 2002
 questions[50]= "51)  Separaci&oacute;n del tr&aacute;fico de voz y datos, reutilizaci&oacute;n de infraestructuras existentes,  necesidad de proximidad a la central local, inversiones en equipamientos del usuario&hellip;, son todas caracter&iacute;sticas propias de las tecnolog&iacute;as:";
 choices[50]= new Array();
 choices[50][0] = "de los m&oacute;dems de cable";
 choices[50][1] = "de los dispositivos WAP";
 choices[50][2] = "de xDSL";
 choices[50][3] = "de LMDS";
 answers[50] = 2;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5066. ";
 preguntaids[50] = 5066


//  Id pregunta: 2386 Año de creación de pregunta: 2006
 questions[51]= "52)  Dentro del an&aacute;lisis de un sistema de informaci&oacute;n automatizado, de una aplicaci&oacute;n o de un proceso no se  realiza b&aacute;sicamente, dentro de un esquema de modelo conceptual de datos, la siguiente tarea:";
 choices[51]= new Array();
 choices[51][0] = "Estudio del sistema de informaci&oacute;n preexistente";
 choices[51][1] = "Dise&ntilde;o f&iacute;sico del modelo de datos.";
 choices[51][2] = "Dise&ntilde;o racional y normalizado del nuevo sistema de informaci&oacute;n";
 choices[51][3] = "Descripci&oacute;n generalizada de cada proceso.";
 answers[51] = 1;
 units[51] = ['30'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2386. ";
 preguntaids[51] = 2386


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[52]= "53)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[52]= new Array();
 choices[52][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[52][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[52][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[52][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[52] = 2;
 units[52] = ['14'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 354. Estado del Bienestar";
 preguntaids[52] = 354


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[53]= "54)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[53]= new Array();
 choices[53][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[53][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[53][2] = "Un programa de igualdad.";
 choices[53][3] = "Un estatuto de igualdad.";
 answers[53] = 0;
 units[53] = ['14'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 390. Pol&iacute;ticas de igualdad";
 preguntaids[53] = 390


//  Id pregunta: 5577 Año de creación de pregunta: 2007
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[54]= new Array();
 choices[54][0] = "El m&eacute;todo del Payback.";
 choices[54][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[54][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[54][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[54] = 3;
 units[54] = ['40'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 5577. Examen TIC MAP B 2006";
 preguntaids[54] = 5577


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[55]= "56)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[55]= new Array();
 choices[55][0] = "De los interesados en el procedimiento";
 choices[55][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[55][2] = "Disposiciones generales";
 choices[55][3] = "De los actos administrativos";
 answers[55] = 2;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[55] = 220


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[56]= "57)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[56]= new Array();
 choices[56][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[56][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[56][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[56][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[56] = 0;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[56] = 97


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[57]= "58)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[57]= new Array();
 choices[57][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[57][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[57][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[57][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[57] = 3;
 units[57] = ['11'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[57] = 315


//  Id pregunta: 9654 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Existe un Estatuto espec&iacute;fico del personal directivo de la Administraci&oacute;n General del Estado?";
 choices[58]= new Array();
 choices[58][0] = "S&iacute;. El Estatuto B&aacute;sico del Empleado P&uacute;blico.";
 choices[58][1] = "S&iacute;. La Ley de Altos Cargos de la Administraci&oacute;n General del Estado.";
 choices[58][2] = "No. A&uacute;n no se ha desarrollado la previsi&oacute;n del Estatuto B&aacute;sico del Empleado P&uacute;blico a este respecto.";
 choices[58][3] = "No existe, porque no est&aacute; normativamente previsto.";
 answers[58] = 2;
 units[58] = ['28'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 9654. Examen TIC A1 2013";
 preguntaids[58] = 9654


//  Id pregunta: 3182 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Una persona f&iacute;sica";
 choices[59][1] = "Una persona jur&iacute;dica";
 choices[59][2] = "Ambas";
 choices[59][3] = "S&oacute;lo el Estado";
 answers[59] = 2;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 3182. Ley 59/2003, art&iacute;culo 2.2";
 preguntaids[59] = 3182


//  Id pregunta: 7847 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[60]= new Array();
 choices[60][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[60][1] = "Corresponde al Ministerio de Energia, Turismo y Agenda Digital el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[60][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[60][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[60] = 1;
 units[60] = ['121'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7847. Examen TIC A1 2010";
 preguntaids[60] = 7847


//  Id pregunta: 6403 Año de creación de pregunta: 2003
 questions[61]= "62)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[61]= new Array();
 choices[61][0] = "Nada";
 choices[61][1] = "Una lectura sucia";
 choices[61][2] = "Una lectura fantasma";
 choices[61][3] = "Una escritura sucia";
 answers[61] = 2;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6403. ";
 preguntaids[61] = 6403


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[62]= "63)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[62]= new Array();
 choices[62][0] = "Integrar la estrategia TIC con la de negocio";
 choices[62][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[62][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[62][3] = "Todas las anteriores";
 answers[62] = 3;
 units[62] = ['26'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 534. Gobernanza TIC";
 preguntaids[62] = 534


//  Id pregunta: 5303 Año de creación de pregunta: 2006
 questions[63]= "64)  Las siglas NNTP corresponden a:";
 choices[63]= new Array();
 choices[63][0] = "Native News Transport Protocol";
 choices[63][1] = "Native Network Transport Protocol";
 choices[63][2] = "Network News Transport Protocol";
 choices[63][3] = "Todas las anteriores son falsas";
 answers[63] = 2;
 units[63] = ['103'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5303. ";
 preguntaids[63] = 5303


//  Id pregunta: 1547 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&oacute;mo se denomina a la conversi&oacute;n impl&iacute;cita de cualquier tipo de valor al tipo objeto en el lenguaje C#?";
 choices[64]= new Array();
 choices[64][0] = "Casting.";
 choices[64][1] = "Boxing.";
 choices[64][2] = "Unboxing.";
 choices[64][3] = "Down-casting.";
 answers[64] = 1;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1547. ";
 preguntaids[64] = 1547


//  Id pregunta: 6446 Año de creación de pregunta: 2003
 questions[65]= "66)  &iquest;Cu&aacute;l es la principal l&iacute;nea de trabajo en el campo de la recuperaci&oacute;n de la informaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Aproximaciones sem&aacute;nticas";
 choices[65][1] = "Estad&iacute;sticas";
 choices[65][2] = "Las respuestas a) y b) son verdaderas";
 choices[65][3] = "Las respuestas a) y b) son falsas";
 answers[65] = 2;
 units[65] = ['100'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6446. ";
 preguntaids[65] = 6446


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[66]= "67)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[66]= new Array();
 choices[66][0] = "Al Gobierno.";
 choices[66][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[66][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[66][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[66] = 2;
 units[66] = ['11'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 294. Presupuestos generales";
 preguntaids[66] = 294


//  Id pregunta: 4763 Año de creación de pregunta: 2002
 questions[67]= "68)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[67]= new Array();
 choices[67][0] = "Shannon";
 choices[67][1] = "Oppenheim";
 choices[67][2] = "Shafer";
 choices[67][3] = "Nyquist";
 answers[67] = 3;
 units[67] = ['104'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4763. ";
 preguntaids[67] = 4763


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[68]= new Array();
 choices[68][0] = "Una ley ordinaria.";
 choices[68][1] = "Una ley org&aacute;nica.";
 choices[68][2] = "Una ley de bases.";
 choices[68][3] = "Una ley de transferencia.";
 answers[68] = 1;
 units[68] = ['1'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 7. Constituci&oacute;n de 1978";
 preguntaids[68] = 7


//  Id pregunta: 2235 Año de creación de pregunta: 2002
 questions[69]= "70)  Dentro del &aacute;rea de sistemas, la sub&aacute;rea de sistemas operativos, software base y sistemas corporativos NO se responsabiliza de:";
 choices[69]= new Array();
 choices[69][0] = "Servicio de Correo";
 choices[69][1] = "Dise&ntilde;o y dimensionamiento de las bases de datos.";
 choices[69][2] = "Inventario de aplicaciones que corren sobre los sistemas corporativos";
 choices[69][3] = "Creaci&oacute;n de manuales procedimientos para operaci&oacute;n.";
 answers[69] = 1;
 units[69] = ['30'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2235. ";
 preguntaids[69] = 2235


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; es MongoDB?";
 choices[70]= new Array();
 choices[70][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[70][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[70][2] = "Un sistema gestor de base de datos relacional.";
 choices[70][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[70] = 1;
 units[70] = ['73'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 733. AGE A1 2015";
 preguntaids[70] = 733


//  Id pregunta: 6405 Año de creación de pregunta: 2003
 questions[71]= "72)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[71]= new Array();
 choices[71][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[71][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[71][2] = "Es la especificacion del framework .NET";
 choices[71][3] = "Todas son falsas";
 answers[71] = 1;
 units[71] = ['63'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 6405. ";
 preguntaids[71] = 6405


//  Id pregunta: 5763 Año de creación de pregunta: 2007
 questions[72]= "73)  Las pruebas de auditoria que permiten medir el riesgo por deficiencia de los controles existentes o por su ausencia se denominan";
 choices[72]= new Array();
 choices[72][0] = "de cumplimiento";
 choices[72][1] = "de verificaci&oacute;n";
 choices[72][2] = "de adecuaci&oacute;n";
 choices[72][3] = "sustantivas";
 answers[72] = 3;
 units[72] = ['36'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 5763. ";
 preguntaids[72] = 5763


//  Id pregunta: 5220 Año de creación de pregunta: 2006
 questions[73]= "74)  &iquest;Cu&aacute;l es el n&uacute;mero aproximado de usuarios a los que da servicio cada ONT (&quot;Optical Network Termination&quot;) en una red de cable?";
 choices[73]= new Array();
 choices[73][0] = "50";
 choices[73][1] = "500";
 choices[73][2] = "5";
 choices[73][3] = "50";
 answers[73] = 1;
 units[73] = ['115'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5220. ";
 preguntaids[73] = 5220


//  Id pregunta: 2619 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[74]= new Array();
 choices[74][0] = "De consulta e informe.";
 choices[74][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[74][2] = "De an&aacute;lisis predictivo.";
 choices[74][3] = "De inteligencia artificial.";
 answers[74] = 2;
 units[74] = ['72'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2619. ";
 preguntaids[74] = 2619


