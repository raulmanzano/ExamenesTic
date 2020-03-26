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
//  Id pregunta: 7683 Año de creación de pregunta: 2010
 questions[0]= "1)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, &iquest;cada cu&aacute;nto tiempo, como m&iacute;nimo, la La Comisi&oacute;n Nacional de los Mercados y la Competencia llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea.?";
 choices[0]= new Array();
 choices[0][0] = "Cada a&ntilde;o.";
 choices[0][1] = "Cada dos a&ntilde;os.";
 choices[0][2] = "Cada cuatro a&ntilde;os.";
 choices[0][3] = "Cada seis a&ntilde;os.";
 answers[0] = 1;
 units[0] = ['121'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7683. Similar a Map 2007";
 preguntaids[0] = 7683


//  Id pregunta: 5096 Año de creación de pregunta: 2004
 questions[1]= "2)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[1]= new Array();
 choices[1][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[1][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[1][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[1][3] = "Elimina el checksum del paquete";
 answers[1] = 2;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5096. ";
 preguntaids[1] = 5096


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[2]= "3)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[2]= new Array();
 choices[2][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[2][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[2][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[2][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[2] = 2;
 units[2] = ['8'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 260. Ley 39/2015";
 preguntaids[2] = 260


//  Id pregunta: 9408 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[3]= new Array();
 choices[3][0] = "Feature Driven Development";
 choices[3][1] = "Lean Software Development";
 choices[3][2] = "Adaptive Software Development";
 choices[3][3] = "Kanban";
 answers[3] = 1;
 units[3] = ['84'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9408. Principios LSD: (1) Eliminar desperdicios; (2)  Amplificar el aprendizaje; (3) Decidir lo m&aacute;s tarde posible; (4) Entrega lo m&aacute;s r&aacute;pido posible; (5) Capacitar, potenciar, al equipo; (6) Construir con integridad; (7) Ver el todo";
 preguntaids[3] = 9408


//  Id pregunta: 4055 Año de creación de pregunta: 2003
 questions[4]= "5)  &iquest; Cu&aacute;l de las siguientes no es una t&eacute;cnica contemplada en Metrica v3?";
 choices[4]= new Array();
 choices[4][0] = "SADT";
 choices[4][1] = "HVE (historia de la vida de las entidades)";
 choices[4][2] = "T&eacute;cnicas matriciales";
 choices[4][3] = "Diagrama de transici&oacute;n de estados";
 answers[4] = 1;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 4055. ";
 preguntaids[4] = 4055


//  Id pregunta: 2895 Año de creación de pregunta: 2002
 questions[5]= "6)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[5]= new Array();
 choices[5][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[5][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[5][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[5][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[5] = 2;
 units[5] = ['68'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2895. ";
 preguntaids[5] = 2895


//  Id pregunta: 1911 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n a la direcci&oacute;n MAC, &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[6]= new Array();
 choices[6][0] = "La direcci&oacute;n MAC contiene el c&oacute;digo de fabricante de 24 bits";
 choices[6][1] = "La direcci&oacute;n MAC contiene el c&oacute;digo de identidad de red de 24 bits";
 choices[6][2] = "Es utilizada en el nivel de enlace de datos de la torre de protocolos OSI";
 choices[6][3] = "La direcci&oacute;n MAC contiene el c&oacute;diqo de serie que es elegido por cada fabricante a su discreci&oacute;n.";
 answers[6] = 1;
 units[6] = ['102'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1911. ";
 preguntaids[6] = 1911


//  Id pregunta: 6930 Año de creación de pregunta: 2010
 questions[7]= "8)  Indique cual de entre las siguientes NO es una funci&oacute;n del LMS:";
 choices[7]= new Array();
 choices[7][0] = "Seguimiento de la actividad del alumno.";
 choices[7][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[7][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[7][3] = "Matriculaci&oacute;n en cursos.";
 answers[7] = 1;
 units[7] = ['70'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6930. ";
 preguntaids[7] = 6930


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[8]= "9)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[8]= new Array();
 choices[8][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[8][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[8][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[8][3] = "Todas son ciertas";
 answers[8] = 3;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[8] = 3475


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[9]= "10)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[9]= new Array();
 choices[9][0] = "Carta de servicios electr&oacute;nicos";
 choices[9][1] = "Carta de servicios";
 choices[9][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[9][3] = "Debe disponer de todos los anteriores";
 answers[9] = 3;
 units[9] = ['2'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 8431. ";
 preguntaids[9] = 8431


//  Id pregunta: 5588 Año de creación de pregunta: 2007
 questions[10]= "11)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[10]= new Array();
 choices[10][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[10][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[10][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[10][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[10] = 2;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 5588. ";
 preguntaids[10] = 5588


//  Id pregunta: 4638 Año de creación de pregunta: 2002
 questions[11]= "12)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[11]= new Array();
 choices[11][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[11][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[11][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[11][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[11] = 3;
 units[11] = ['104'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4638. ";
 preguntaids[11] = 4638


//  Id pregunta: 8528 Año de creación de pregunta: 2015
 questions[12]= "13)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[12]= new Array();
 choices[12][0] = "En el perfil del contratante y en el BOE.";
 choices[12][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[12][2] = "En el BOE y en el DOUE";
 choices[12][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[12] = 1;
 units[12] = ['10'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 8528. ";
 preguntaids[12] = 8528


//  Id pregunta: 4440 Año de creación de pregunta: 2002
 questions[13]= "14)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[13]= new Array();
 choices[13][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[13][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[13][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[13][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[13] = 2;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4440. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";
 preguntaids[13] = 4440


//  Id pregunta: 5407 Año de creación de pregunta: 2006
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[14]= new Array();
 choices[14][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras";
 choices[14][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir";
 choices[14][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones";
 choices[14][3] = "ICMP garantiza la entrega fiable de un paquete IP";
 answers[14] = 1;
 units[14] = ['109'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5407. IPv6 no a&ntilde;ade CHECKSUM en su cabecera. La comprobaci&oacute;n de integridad se asume asegurada por checksum de la capa de enlace y checksum de nivel superiores (as&iacute; routers no necesitan recalcular checksum cada vez que alg&uacute;n campo cabecera cambia).";
 preguntaids[14] = 5407


//  Id pregunta: 7762 Año de creación de pregunta: 2010
 questions[15]= "16)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[15]= new Array();
 choices[15][0] = "Strategy.";
 choices[15][1] = "State.";
 choices[15][2] = "Observer.";
 choices[15][3] = "Command.";
 answers[15] = 2;
 units[15] = ['89'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 7762. ";
 preguntaids[15] = 7762


//  Id pregunta: 7657 Año de creación de pregunta: 2010
 questions[16]= "17)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[16]= new Array();
 choices[16][0] = "Warnier-Orr.";
 choices[16][1] = "Rumbaugh.";
 choices[16][2] = "Jacobson.";
 choices[16][3] = "Booch.";
 answers[16] = 2;
 units[16] = ['84'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 7657. Map 2006";
 preguntaids[16] = 7657


//  Id pregunta: 4771 Año de creación de pregunta: 2002
 questions[17]= "18)  El tr&aacute;fico vocal GSM suele calcularse para estimaciones de potencias y coberturas de se&ntilde;al en base a una f&oacute;rmula. &iquest;Cu&aacute;l es?:";
 choices[17]= new Array();
 choices[17][0] = "La f&oacute;rmula de Poisson";
 choices[17][1] = "La f&oacute;rmula de Okumura-Hata";
 choices[17][2] = "La f&oacute;rmula Erlang B";
 choices[17][3] = "La f&oacute;rmula Erlang C";
 answers[17] = 2;
 units[17] = ['117'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4771. ";
 preguntaids[17] = 4771


//  Id pregunta: 5603 Año de creación de pregunta: 2007
 questions[18]= "19)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el procedimiento de adjudicaci&oacute;n en el que solo podr&aacute;n participar los empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, hayan sido seleccionados por el &oacute;rgano de contrataci&oacute;n, se llama:";
 choices[18]= new Array();
 choices[18][0] = "Procedimiento Negociado.";
 choices[18][1] = "Procedimiento Restringido.";
 choices[18][2] = "Procedimiento Cerrado";
 choices[18][3] = "Procedimiento Abierto.";
 answers[18] = 1;
 units[18] = ['37'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 5603. ";
 preguntaids[18] = 5603


//  Id pregunta: 7547 Año de creación de pregunta: 2010
 questions[19]= "20)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[19]= new Array();
 choices[19][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g la de 2,4 GHz.";
 choices[19][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps.";
 choices[19][2] = "802.11i se refiere a mejoras de seguridad.";
 choices[19][3] = "802.11e se refiere a calidad de servicio.";
 answers[19] = 1;
 units[19] = ['108'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7547. Map 2005";
 preguntaids[19] = 7547


//  Id pregunta: 6039 Año de creación de pregunta: 2003
 questions[20]= "21)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[20]= new Array();
 choices[20][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[20][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[20][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[20][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[20] = 0;
 units[20] = ['66'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6039. TIC B 2007";
 preguntaids[20] = 6039


//  Id pregunta: 8432 Año de creación de pregunta: 2011
 questions[21]= "22)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "El &oacute;rgano titular de la sede";
 choices[21][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[21][2] = "El &oacute;rgano que origine la informaci&oacute;n que se deba incluir en la sede judicial electr&oacute;nica";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = 2;
 units[21] = ['2'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 8432. ";
 preguntaids[21] = 8432


//  Id pregunta: 1320 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[22]= new Array();
 choices[22][0] = "ISO/IEC 12207:2008";
 choices[22][1] = "ISO 9001:2008";
 choices[22][2] = "ISO 29393:2009";
 choices[22][3] = "ISO 31000:2009";
 answers[22] = 0;
 units[22] = ['82'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1320. ";
 preguntaids[22] = 1320


//  Id pregunta: 8098 Año de creación de pregunta: 2011
 questions[23]= "24)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[23]= new Array();
 choices[23][0] = "TDMA/ TDD";
 choices[23][1] = "GFSK";
 choices[23][2] = "FSK";
 choices[23][3] = "CDMA";
 answers[23] = 0;
 units[23] = ['108'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8098. Analista Ayto. Madrid 2010";
 preguntaids[23] = 8098


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[24][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[24][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[24][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[24] = 1;
 units[24] = ['14'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 1534. ";
 preguntaids[24] = 1534


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[25]= "26)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Principio de transparencia.";
 choices[25][1] = "Principio de cooperaci&oacute;n.";
 choices[25][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[25][3] = "Principio de lealtad institucional.";
 answers[25] = 1;
 units[25] = ['11'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 320. Presupuestos generales";
 preguntaids[25] = 320


//  Id pregunta: 4156 Año de creación de pregunta: 2006
 questions[26]= "27)  Una Planificaci&oacute;n Estrat&eacute;gica se caracteriza por:";
 choices[26]= new Array();
 choices[26][0] = "Fijar los objetivos generales de la organizaci&oacute;n.";
 choices[26][1] = "Llevarse a cabo por los altos directivos de la organizaci&oacute;n y por los responsables de los escalones intermedios.";
 choices[26][2] = "Definir las pol&iacute;ticas y estrategias de la organizaci&oacute;n a corto plazo para la consecuci&oacute;n de los objetivos concretos que se hayan fijado.";
 choices[26][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[26] = 0;
 units[26] = ['83'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4156. ";
 preguntaids[26] = 4156


//  Id pregunta: 10816 Año de creación de pregunta: 2015
 questions[27]= "28)  Camellia es un algoritmo:";
 choices[27]= new Array();
 choices[27][0] = "Sim&eacute;trico de bloque";
 choices[27][1] = "Sim&eacute;trico de flujo";
 choices[27][2] = "Asim&eacute;trico";
 choices[27][3] = "De funci&oacute;n hash";
 answers[27] = 0;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10816. ";
 preguntaids[27] = 10816


//  Id pregunta: 2692 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Qu&eacute; se entiende por solapamiento de componentes?:";
 choices[28]= new Array();
 choices[28][0] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[28][1] = "Es el porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[28][2] = "Es la cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[28][3] = "Es el n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio o para reorganizar el mismo";
 answers[28] = 0;
 units[28] = ['56'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2692. ";
 preguntaids[28] = 2692


//  Id pregunta: 10635 Año de creación de pregunta: 2015
 questions[29]= "30)  Identifique la respuesta incorrecta sobre derechos del usuario final de la LGT (9/2014):";
 choices[29]= new Array();
 choices[29][0] = "Tiene derecho a celebrar contratos con operadores.";
 choices[29][1] = "Tiene derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros.";
 choices[29][2] = "Tiene derecho a una factura en papel, clara y detallada.";
 choices[29][3] = "Tiene derecho a acceder a los servicios de emergencia.";
 answers[29] = 2;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10635. Articulo 47";
 preguntaids[29] = 10635


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[30]= new Array();
 choices[30][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[30][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[30][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[30][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[30] = 3;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 321. Presupuestos generales";
 preguntaids[30] = 321


//  Id pregunta: 2587 Año de creación de pregunta: 2009
 questions[31]= "32)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "Salvaguarda del orden p&uacute;blico";
 choices[31][1] = "Salvaguarda del inter&eacute;s general";
 choices[31][2] = "Respeto a la dignidad de la persona";
 choices[31][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[31] = 1;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 2587. Ley 34/2002, art&iacute;culo 8";
 preguntaids[31] = 2587


//  Id pregunta: 2867 Año de creación de pregunta: 2002
 questions[32]= "33)  En un sistema operativo Linux, el runlevel 6:";
 choices[32]= new Array();
 choices[32][0] = "Pone a la m&aacute;quina en modo multiusuario";
 choices[32][1] = "Pone a la m&aacute;quina en modo monousuario";
 choices[32][2] = "Prepara a la m&aacute;quina para reiniciar";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = 2;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2867. ";
 preguntaids[32] = 2867


//  Id pregunta: 4762 Año de creación de pregunta: 2002
 questions[33]= "34)  El subnivel MAC del nivel de enlace de datos de la pila de protocolos OSI proporciona:";
 choices[33]= new Array();
 choices[33][0] = "Las direcciones de los puntos de acceso al servicio";
 choices[33][1] = "Servicios orientados a la conexi&oacute;n";
 choices[33][2] = "Servicios orientados a la conexi&oacute;n con reconocimiento";
 choices[33][3] = "La direcci&oacute;n f&iacute;sica de un dispositivo de la red";
 answers[33] = 3;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4762. ";
 preguntaids[33] = 4762


//  Id pregunta: 9836 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[34]= new Array();
 choices[34][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[34][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[34][2] = "Externo, interno y conceptual.";
 choices[34][3] = "Externo, interno y l&oacute;gico.";
 answers[34] = 2;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9836. ";
 preguntaids[34] = 9836


//  Id pregunta: 7782 Año de creación de pregunta: 2010
 questions[35]= "36)  Respecto al correo electr&oacute;nico, &iquest;qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[35]= new Array();
 choices[35][0] = "IMAP es un protocolo de env&iacute;o de correo.";
 choices[35][1] = "POP es un protocolo de acceso a correo.";
 choices[35][2] = "SMTP es un protocolo de transporte de mensajes.";
 choices[35][3] = "MIME permite acentos en los mensajes de correo.";
 answers[35] = 0;
 units[35] = ['116'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7782. ";
 preguntaids[35] = 7782


//  Id pregunta: 8577 Año de creación de pregunta: 2013
 questions[36]= "37)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[36]= new Array();
 choices[36][0] = "Con CPU particionada";
 choices[36][1] = "Con m&uacute;ltiples ALUS";
 choices[36][2] = "Como A) y como B)";
 choices[36][3] = "Ninguna respuesta es correcta";
 answers[36] = 2;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8577. ";
 preguntaids[36] = 8577


//  Id pregunta: 5890 Año de creación de pregunta: 2007
 questions[37]= "38)  Seg&uacute;n el Real Decreto 522/2006";
 choices[37]= new Array();
 choices[37][0] = "En procedimientos administrativos de la Administraci&oacute;n General del Estado se suprome la aportaci&oacute;n de fotocopias de documentos de identidad";
 choices[37][1] = "En los procedimientos administrativos de la Administraci&oacute;n General del Estado se suprime la exigencia de aportar el certificado de empadronamiento, como documento probatorio del domicilio y residencia.";
 choices[37][2] = "Se regula la expedici&oacute;n del documento nacional de identidad electr&oacute;nico y sus certificados de firma electr&oacute;nica";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 0;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 5890. ";
 preguntaids[37] = 5890


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[38]= "39)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[38]= new Array();
 choices[38][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[38][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[38][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[38][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[38] = 0;
 units[38] = ['65'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 721. Junta de Extremadura A1 2015";
 preguntaids[38] = 721


//  Id pregunta: 7458 Año de creación de pregunta: 2010
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[39]= new Array();
 choices[39][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[39][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[39][2] = "AES es implementable tanto en hardware como en software";
 choices[39][3] = "Todas las anteriores son FALSAS.";
 answers[39] = 2;
 units[39] = ['76'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7458. ";
 preguntaids[39] = 7458


//  Id pregunta: 6449 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[40]= new Array();
 choices[40][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[40][1] = "Consultas transaccionales (transactional queries)";
 choices[40][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[40][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[40] = 3;
 units[40] = ['100'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6449. ";
 preguntaids[40] = 6449


//  Id pregunta: 2946 Año de creación de pregunta: 2002
 questions[41]= "42)  La multiprogramaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Se basa en el concepto de tiempo compartido";
 choices[41][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[41][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[41][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[41] = 1;
 units[41] = ['56'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2946. ";
 preguntaids[41] = 2946


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[42]= new Array();
 choices[42][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[42][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[42][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[42][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[42] = 2;
 units[42] = ['7'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 208. Ley 39/2015";
 preguntaids[42] = 208


//  Id pregunta: 9103 Año de creación de pregunta: 2014
 questions[43]= "44)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[43]= new Array();
 choices[43][0] = "son desarrollados por muchos fabricantes.";
 choices[43][1] = "usan memoria distribuida y no compartida.";
 choices[43][2] = "son soluciones altamente propietarias.";
 choices[43][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[43] = 2;
 units[43] = ['50'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9103. Examen TIC-A1 2013";
 preguntaids[43] = 9103


//  Id pregunta: 8762 Año de creación de pregunta: 2013
 questions[44]= "45)  &iquest;Cu&aacute;l es el &oacute;rgano especializado en el control interno y en la evaluaci&oacute;n de los servicios de cada uno de los Ministerios y de sus organismos p&uacute;blicos dependientes?";
 choices[44]= new Array();
 choices[44][0] = "La IGAE";
 choices[44][1] = "La Inspecci&oacute;n General de los Servicios de cada Ministerio";
 choices[44][2] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[44][3] = "La Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 answers[44] = 1;
 units[44] = ['36'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 8762. ";
 preguntaids[44] = 8762


//  Id pregunta: 4413 Año de creación de pregunta: 2002
 questions[45]= "46)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[45]= new Array();
 choices[45][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[45][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[45][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[45][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[45] = 0;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4413. ";
 preguntaids[45] = 4413


//  Id pregunta: 979 Año de creación de pregunta: 2016
 questions[46]= "47)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[46]= new Array();
 choices[46][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[46][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[46][2] = "a y b son correctas";
 choices[46][3] = "a y b son incorrectas";
 answers[46] = 2;
 units[46] = ['4', '7', '8', '9'];
 blocks[46] = ['A1', 'A2'];
 comments[46] = "Id Pregunta: 979. Ley 40/2015";
 preguntaids[46] = 979


//  Id pregunta: 1084 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique la frase correcta acerca de los sistemas CRM,&rdquo;Customer relationship management&rdquo; y ERP &ldquo;Enterprise resource planning&rdquo;.";
 choices[47]= new Array();
 choices[47][0] = "La contabilidad financiera es un m&oacute;dulo caracter&iacute;stico de los sistemas CRM anal&iacute;ticos.";
 choices[47][1] = "El uso de t&eacute;cnicas de data mining en los CRM operacionales permite analizar tendencias en el comportamiento de los clientes.";
 choices[47][2] = "Los sistemas ERP son sistemas transaccionales que se implementan &uacute;nicamente sobre arquitecturas cliente servidor.";
 choices[47][3] = "Las parametrizaciones incorporadas en los ERP los hacen m&aacute;s flexibles pero impiden su actualizaci&oacute;n.";
 answers[47] = 1;
 units[47] = ['69'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1084. ";
 preguntaids[47] = 1084


//  Id pregunta: 7871 Año de creación de pregunta: 2011
 questions[48]= "49)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF:";
 choices[48]= new Array();
 choices[48][0] = "0x100000001.";
 choices[48][1] = "0xFFFFFFFF.";
 choices[48][2] = "0xFFFE0001.";
 choices[48][3] = "0xFFFE0002";
 answers[48] = 2;
 units[48] = ['56'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7871. Examen TIC A1 2010";
 preguntaids[48] = 7871


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[49]= new Array();
 choices[49][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[49][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[49][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[49][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[49] = 2;
 units[49] = ['22'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[49] = 502


//  Id pregunta: 1535 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la LOPD, &iquest;qu&eacute; es el Registro General de Protecci&oacute;n de Datos?";
 choices[50]= new Array();
 choices[50][0] = "Se trata de un fichero gen&eacute;rico, presente en cada una de las diferentes Agencias de Protecci&oacute;n de Datos, en el que se inscriben, a su vez, los ficheros de datos personales.";
 choices[50][1] = "Es la denominaci&oacute;n oficial del registro electr&oacute;nico de la Agencia Espa&ntilde;ola de Protecci&oacute;n de datos.";
 choices[50][2] = "Es un &oacute;rgano integrado en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[50][3] = "Es la denominaci&oacute;n oficial del conjunto de buenas pr&aacute;cticas para la protecci&oacute;n de datos personales, establecidas por la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[50] = 2;
 units[50] = ['35'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 1535. ";
 preguntaids[50] = 1535


//  Id pregunta: 2903 Año de creación de pregunta: 2002
 questions[51]= "52)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[51]= new Array();
 choices[51][0] = "Deducci&oacute;n de valores de ranuras";
 choices[51][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[51][2] = "Herencia de ranuras";
 choices[51][3] = "Equiparaci&oacute;n de marcos";
 answers[51] = 2;
 units[51] = ['68'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2903. ";
 preguntaids[51] = 2903


//  Id pregunta: 2876 Año de creación de pregunta: 2002
 questions[52]= "53)  En una representaci&oacute;n de tipo simb&oacute;lico de un Sistema Experto Basado en el Conocimiento, al conjunto de campos de informaci&oacute;n (ranuras) que describen un objeto se le da el nombre de:";
 choices[52]= new Array();
 choices[52][0] = "Regla de producci&oacute;n";
 choices[52][1] = "Restricci&oacute;n";
 choices[52][2] = "Red sem&aacute;ntica";
 choices[52][3] = "Marco";
 answers[52] = 3;
 units[52] = ['68'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2876. ";
 preguntaids[52] = 2876


//  Id pregunta: 10238 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[53]= new Array();
 choices[53][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[53][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[53][2] = "Los 2 respuestas anteriores son correctas";
 choices[53][3] = "Ninguna de las anteriores es correcta";
 answers[53] = 2;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10238. ";
 preguntaids[53] = 10238


//  Id pregunta: 6345 Año de creación de pregunta: 2003
 questions[54]= "55)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[54]= new Array();
 choices[54][0] = "JAX-RPC";
 choices[54][1] = "SAAJ";
 choices[54][2] = "JAXR";
 choices[54][3] = "JAXP";
 answers[54] = 3;
 units[54] = ['116'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6345. ";
 preguntaids[54] = 6345


//  Id pregunta: 925 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[55]= new Array();
 choices[55][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[55][1] = "La Direcci&oacute;n de la Competencia.";
 choices[55][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[55][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[55] = 0;
 units[55] = ['121'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 925. Junta de Extremadura A1 2015";
 preguntaids[55] = 925


//  Id pregunta: 8239 Año de creación de pregunta: 2011
 questions[56]= "57)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[56]= new Array();
 choices[56][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[56][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[56][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[56][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[56] = 2;
 units[56] = ['123'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 8239. Examen UPM A2 2011";
 preguntaids[56] = 8239


//  Id pregunta: 9109 Año de creación de pregunta: 2014
 questions[57]= "58)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Top-down.";
 choices[57][1] = "Sandwich.";
 choices[57][2] = "Big-Bang";
 choices[57][3] = "Bottom-up.";
 answers[57] = 2;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 9109. Examen TIC A2 2013";
 preguntaids[57] = 9109


//  Id pregunta: 5426 Año de creación de pregunta: 2007
 questions[58]= "59)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[58]= new Array();
 choices[58][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[58][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[58][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[58][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[58] = 2;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 5426. ";
 preguntaids[58] = 5426


//  Id pregunta: 8737 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;A qu&eacute; norma ISO corresponde el est&aacute;ndar del ITU X.200?";
 choices[59]= new Array();
 choices[59][0] = "ISO 9945";
 choices[59][1] = "ISO 7498";
 choices[59][2] = "ISO 9126";
 choices[59][3] = "ISO 15408";
 answers[59] = 1;
 units[59] = ['48'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 8737. ";
 preguntaids[59] = 8737


//  Id pregunta: 9180 Año de creación de pregunta: 2014
 questions[60]= "61)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[60]= new Array();
 choices[60][0] = "Ley ordinaria.";
 choices[60][1] = "Orden Ministerial.";
 choices[60][2] = "Ley org&aacute;nica.";
 choices[60][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[60] = 1;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 9180. Examen TIC A2 2013";
 preguntaids[60] = 9180


//  Id pregunta: 10922 Año de creación de pregunta: 2015
 questions[61]= "62)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[61]= new Array();
 choices[61][0] = "El virus suele utilizar canales encubiertos.";
 choices[61][1] = "El virus presenta un mecanismo de replicaci&oacute;n.";
 choices[61][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[61][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[61] = 1;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10922. ";
 preguntaids[61] = 10922


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la afirmaci&oacute;n falsa:";
 choices[62]= new Array();
 choices[62][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[62][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[62][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[62][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[62] = 1;
 units[62] = ['22'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 509. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[62] = 509


//  Id pregunta: 1634 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique cu&aacute;l de los siguientes NO es un paquete que se curse en el nivel 3 del protocolo X.25 en la fase de establecimiento de la conexi&oacute;n";
 choices[63]= new Array();
 choices[63][0] = "CALL REQUEST";
 choices[63][1] = "INCOMING CALL";
 choices[63][2] = "CLEAR INDICATION";
 choices[63][3] = "CALL CONECTED";
 answers[63] = 2;
 units[63] = ['114'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1634. ";
 preguntaids[63] = 1634


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[64]= new Array();
 choices[64][0] = "Quince miembros.";
 choices[64][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[64][2] = "Los miembros que determine el Consejo.";
 choices[64][3] = "Un Presidente y quince miembros.";
 answers[64] = 1;
 units[64] = ['5'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 414. Uni&oacute;n Europea";
 preguntaids[64] = 414


//  Id pregunta: 9459 Año de creación de pregunta: 2014
 questions[65]= "66)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[65]= new Array();
 choices[65][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[65][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares.";
 choices[65][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[65][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[65] = 2;
 units[65] = ['27'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 9459. ";
 preguntaids[65] = 9459


//  Id pregunta: 10047 Año de creación de pregunta: 2015
 questions[66]= "67)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[66]= new Array();
 choices[66][0] = "JSR 342.";
 choices[66][1] = "JSR 366.";
 choices[66][2] = "JSR 324.";
 choices[66][3] = "JSR 224.";
 answers[66] = 0;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10047. Examen TIC A2 2014";
 preguntaids[66] = 10047


//  Id pregunta: 10387 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[67]= new Array();
 choices[67][0] = "Crecimiento inteligente";
 choices[67][1] = "Crecimiento sostenible";
 choices[67][2] = "Crecimiento integrador";
 choices[67][3] = "Todas las anteriores";
 answers[67] = 3;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 10387. ";
 preguntaids[67] = 10387


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[68]= "69)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[68]= new Array();
 choices[68][0] = "El derecho a un permiso.";
 choices[68][1] = "Una prestaci&oacute;n por paternidad.";
 choices[68][2] = "Ambas son correctas.";
 choices[68][3] = "18 d&iacute;as de permiso.";
 answers[68] = 2;
 units[68] = ['14'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 403. Pol&iacute;ticas de igualdad";
 preguntaids[68] = 403


//  Id pregunta: 997 Año de creación de pregunta: 2016
 questions[69]= "70)  Respecto a las unidades administrativas del articulo 56 de la Ley 40/2015:";
 choices[69]= new Array();
 choices[69][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[69][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[69][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = 1;
 units[69] = ['4', '7', '8', '9'];
 blocks[69] = ['A1', 'A2'];
 comments[69] = "Id Pregunta: 997. Ley 40/2015";
 preguntaids[69] = 997


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[70]= "71)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[70]= new Array();
 choices[70][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[70][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[70][2] = "Funcionarios e interinos.";
 choices[70][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[70] = 3;
 units[70] = ['20'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 492. Junta de Extremadura A1 2015";
 preguntaids[70] = 492


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[71]= "72)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[71]= new Array();
 choices[71][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[71][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[71][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[71][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[71] = 0;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[71] = 97


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[72]= "73)  Los criptosistemas pueden clasificarse en:";
 choices[72]= new Array();
 choices[72][0] = "Concretos, Estables e Inestables.";
 choices[72][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[72][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[72][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[72] = 3;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 779. Junta de Extremadura A1 2015";
 preguntaids[72] = 779


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[73]= new Array();
 choices[73][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[73][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[73][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[73][3] = "La tasa de desempleo ronda el 20%";
 answers[73] = 2;
 units[73] = ['12'];
 blocks[73] = ['A3'];
 comments[73] = "Id Pregunta: 346. Modelo econ&oacute;mico";
 preguntaids[73] = 346


//  Id pregunta: 1422 Año de creación de pregunta: 2016
 questions[74]= "75)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:";
 choices[74]= new Array();
 choices[74][0] = "De calamidad p&uacute;blica.";
 choices[74][1] = "De grave riesgo.";
 choices[74][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[74][3] = "En cualquiera de las situaciones anteriores.";
 answers[74] = 2;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 1422. ";
 preguntaids[74] = 1422


