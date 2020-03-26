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
//  Id pregunta: 8232 Año de creación de pregunta: 2011
 questions[0]= "1)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[0]= new Array();
 choices[0][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[0][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[0][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[0][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[0] = 1;
 units[0] = ['103'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8232. Examen UPM A2 2011";
 preguntaids[0] = 8232


//  Id pregunta: 7821 Año de creación de pregunta: 2010
 questions[1]= "2)  En relaci&oacute;n a &laquo;Internet Assigned Numbers Authority&raquo; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[1]= new Array();
 choices[1][0] = "IANA coordina a nivel global el &laquo;DNS root&raquo;.";
 choices[1][1] = "IANA gestiona el dominio .int (top-level).";
 choices[1][2] = "IANA asigna las direcciones IP.";
 choices[1][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board.";
 answers[1] = 2;
 units[1] = ['103'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7821. ";
 preguntaids[1] = 7821


//  Id pregunta: 5835 Año de creación de pregunta: 2007
 questions[2]= "3)  El hipertexto es:";
 choices[2]= new Array();
 choices[2][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[2][1] = "Un documento HTML.";
 choices[2][2] = "Un documento HTML, XML o SGML.";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 0;
 units[2] = ['103'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5835. Examen 2006 JCYL";
 preguntaids[2] = 5835


//  Id pregunta: 6918 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[3]= new Array();
 choices[3][0] = "GPL";
 choices[3][1] = "GNU LGPL";
 choices[3][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[3][3] = "MGPL";
 answers[3] = 0;
 units[3] = ['103'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6918. ";
 preguntaids[3] = 6918


//  Id pregunta: 8293 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Que puerto utiliza NNTP?";
 choices[4]= new Array();
 choices[4][0] = "119";
 choices[4][1] = "53";
 choices[4][2] = "137";
 choices[4][3] = "139";
 answers[4] = 0;
 units[4] = ['103'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8293. Examen UPM A2 2011";
 preguntaids[4] = 8293


//  Id pregunta: 6394 Año de creación de pregunta: 2003
 questions[5]= "6)  Los registros glue de una zona DNS son aquellos que";
 choices[5]= new Array();
 choices[5][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[5][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[5][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[5][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[5] = 1;
 units[5] = ['103'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6394. Examen 2006 JCYL";
 preguntaids[5] = 6394


//  Id pregunta: 7955 Año de creación de pregunta: 2011
 questions[6]= "7)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet?";
 choices[6]= new Array();
 choices[6][0] = "IETF.";
 choices[6][1] = "ICANN.";
 choices[6][2] = "IAB.";
 choices[6][3] = "IRTF.";
 answers[6] = 2;
 units[6] = ['48', '103'];
 blocks[6] = ['B1', 'B4'];
 comments[6] = "Id Pregunta: 7955. Examen TIC A2 2010";
 preguntaids[6] = 7955


//  Id pregunta: 7807 Año de creación de pregunta: 2010
 questions[7]= "8)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[7]= new Array();
 choices[7][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments).";
 choices[7][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto.";
 choices[7][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII.";
 choices[7][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;.";
 answers[7] = 3;
 units[7] = ['103'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7807. ";
 preguntaids[7] = 7807


//  Id pregunta: 7171 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[8]= new Array();
 choices[8][0] = "GET";
 choices[8][1] = "HEAD";
 choices[8][2] = "POST";
 choices[8][3] = "SERVICE";
 answers[8] = 1;
 units[8] = ['103'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7171. Castilla La Mancha 2009";
 preguntaids[8] = 7171


//  Id pregunta: 6917 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[9]= new Array();
 choices[9][0] = "SAMBA";
 choices[9][1] = "CIFS";
 choices[9][2] = "MSRPC";
 choices[9][3] = "Ninguna de las anteriores.";
 answers[9] = 1;
 units[9] = ['103'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 6917. ";
 preguntaids[9] = 6917


//  Id pregunta: 10501 Año de creación de pregunta: 2015
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a los c&oacute;digos HTTP";
 choices[10]= new Array();
 choices[10][0] = "Los c&oacute;digos que comienzan por 4 (4xx) informan de un error en el cliente";
 choices[10][1] = "El c&oacute;digo 401 informa que el recurso no se ha encontrado";
 choices[10][2] = "El c&oacute;digo 403 informa de una redirecci&oacute;n en el recurso accedido";
 choices[10][3] = "El c&oacute;digo 404 indica que no hay autorizaci&oacute;n para acceder al recurso";
 answers[10] = 0;
 units[10] = ['103'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 10501. ";
 preguntaids[10] = 10501


//  Id pregunta: 5849 Año de creación de pregunta: 2007
 questions[11]= "12)  Los registros glue de una zona DNS son aquellos que:";
 choices[11]= new Array();
 choices[11][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[11][1] = "Son los registros que mantienen el espacio de nombres de la zona.";
 choices[11][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[11][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[11] = 1;
 units[11] = ['103'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 5849. Examen 2006 JCYL";
 preguntaids[11] = 5849


//  Id pregunta: 8506 Año de creación de pregunta: 2011
 questions[12]= "13)  Indica cual de estas afirmaciones es cierta";
 choices[12]= new Array();
 choices[12][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[12][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[12][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = 1;
 units[12] = ['103'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8506. Teleco Ayto. Madrid 2010";
 preguntaids[12] = 8506


//  Id pregunta: 6916 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[13]= new Array();
 choices[13][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[13][1] = "Dos: NFSv3 y NFSv4.";
 choices[13][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[13][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[13] = 0;
 units[13] = ['103'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 6916. ";
 preguntaids[13] = 6916


//  Id pregunta: 6336 Año de creación de pregunta: 2003
 questions[14]= "15)  Indique cu&aacute;l de los siguientes no es un servicio b&aacute;sico de la red SARA de las administraciones:";
 choices[14]= new Array();
 choices[14][0] = "SMTP";
 choices[14][1] = "PROXY";
 choices[14][2] = "DHCP";
 choices[14][3] = "DNS";
 answers[14] = 2;
 units[14] = ['103'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 6336. ";
 preguntaids[14] = 6336


//  Id pregunta: 6335 Año de creación de pregunta: 2003
 questions[15]= "16)  Indique que respuesta no es correcta. La red transeuropea sTESTA:";
 choices[15]= new Array();
 choices[15][0] = "Corresponde con una de las infraestructuras y servicios comunes de IDABC.";
 choices[15][1] = "Conecta a trav&eacute;s de Internet las redes administrativas de los Estados Miembros y las instituciones europeas.";
 choices[15][2] = "Permite el acceso a los servicios paneuropeos de Administraci&oacute;n Electr&oacute;nica mediante el enlace SARA-sTESTA.";
 choices[15][3] = "Ahorra a los Departamentos de la Administraci&oacute;n el coste de enlaces independientes con administraciones de otros estados miembros";
 answers[15] = 1;
 units[15] = ['103'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6335. ";
 preguntaids[15] = 6335


//  Id pregunta: 8505 Año de creación de pregunta: 2011
 questions[16]= "17)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[16]= new Array();
 choices[16][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[16][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[16][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[16][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[16] = 1;
 units[16] = ['103'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 8505. Teleco Ayto. Madrid 2010";
 preguntaids[16] = 8505


//  Id pregunta: 6718 Año de creación de pregunta: 2009
 questions[17]= "18)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[17]= new Array();
 choices[17][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[17][1] = "IANA gestiona el dominio .int (top-level)";
 choices[17][2] = "IANA asigna las direcciones IP";
 choices[17][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[17] = 2;
 units[17] = ['103'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6718. MAP 2008 A1";
 preguntaids[17] = 6718


//  Id pregunta: 5838 Año de creación de pregunta: 2007
 questions[18]= "19)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[18]= new Array();
 choices[18][0] = "Internic.es";
 choices[18][1] = "Red.es";
 choices[18][2] = "Mityc.es";
 choices[18][3] = "Netsol.es";
 answers[18] = 1;
 units[18] = ['103'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5838. Examen 2006 JCYL";
 preguntaids[18] = 5838


//  Id pregunta: 8507 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[19]= new Array();
 choices[19][0] = "Wowza Media Server";
 choices[19][1] = "Icecast";
 choices[19][2] = "Darwin Streaming Server";
 choices[19][3] = "FlowCast";
 answers[19] = 3;
 units[19] = ['103'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8507. Teleco Ayto. Madrid 2010";
 preguntaids[19] = 8507


//  Id pregunta: 6096 Año de creación de pregunta: 2003
 questions[20]= "21)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[20]= new Array();
 choices[20][0] = "El puerto 20";
 choices[20][1] = "El puerto 21";
 choices[20][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[20][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[20] = 3;
 units[20] = ['103'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 6096. Examen TIC A1 MAP 2007";
 preguntaids[20] = 6096


//  Id pregunta: 6132 Año de creación de pregunta: 2003
 questions[21]= "22)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[21]= new Array();
 choices[21][0] = "El nombre del recurso";
 choices[21][1] = "El tipo del recurso";
 choices[21][2] = "Donde se encuentra el recurso";
 choices[21][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[21] = 1;
 units[21] = ['103'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6132. Examen TIC A1 MAP 2007";
 preguntaids[21] = 6132


//  Id pregunta: 7440 Año de creación de pregunta: 2010
 questions[22]= "23)  La Entidad P&uacute;blica Empresarial responsable de la gesti&oacute;n del Registro de nombres de dominio de Internet bajo el c&oacute;digo de pa&iacute;s .es se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Oepm.es";
 choices[22][1] = "Red.es";
 choices[22][2] = "Funciona.es";
 choices[22][3] = "060.es";
 answers[22] = 1;
 units[22] = ['103'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7440. ";
 preguntaids[22] = 7440


//  Id pregunta: 7838 Año de creación de pregunta: 2010
 questions[23]= "24)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[23]= new Array();
 choices[23][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar.";
 choices[23][1] = "Proporciona confidencialidad pero no integridad";
 choices[23][2] = "No admite compresi&oacute;n";
 choices[23][3] = "Trabaja tanto sobre TCP como sobre UDP.";
 answers[23] = 0;
 units[23] = ['103'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7838. ";
 preguntaids[23] = 7838


//  Id pregunta: 9363 Año de creación de pregunta: 2014
 questions[24]= "25)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[24]= new Array();
 choices[24][0] = "Cabecera.";
 choices[24][1] = "Checksum.";
 choices[24][2] = "Registros de recursos de Respuesta.";
 choices[24][3] = "Registros de recursos de Autoridad.";
 answers[24] = 1;
 units[24] = ['103'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9363. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[24] = 9363


//  Id pregunta: 6801 Año de creación de pregunta: 2010
 questions[25]= "26)  Un servidor de telnet permite:";
 choices[25]= new Array();
 choices[25][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[25][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[25][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[25][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[25] = 0;
 units[25] = ['103'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 6801. TIC A 2009";
 preguntaids[25] = 6801


//  Id pregunta: 8504 Año de creación de pregunta: 2011
 questions[26]= "27)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[26]= new Array();
 choices[26][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[26][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[26][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[26][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[26] = 0;
 units[26] = ['103'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8504. Teleco Ayto. Madrid 2010";
 preguntaids[26] = 8504


//  Id pregunta: 8029 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[27]= new Array();
 choices[27][0] = "RIPv2.";
 choices[27][1] = "EIGRP.";
 choices[27][2] = "IGRP.";
 choices[27][3] = "OSPF.";
 answers[27] = 2;
 units[27] = ['102', '103'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8029. Examen TIC A2 2010";
 preguntaids[27] = 8029


//  Id pregunta: 10383 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo TCP WhoIS?";
 choices[28]= new Array();
 choices[28][0] = "43";
 choices[28][1] = "21";
 choices[28][2] = "23";
 choices[28][3] = "69";
 answers[28] = 0;
 units[28] = ['103'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 10383. ";
 preguntaids[28] = 10383


//  Id pregunta: 5653 Año de creación de pregunta: 2007
 questions[29]= "30)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[29]= new Array();
 choices[29][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[29][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[29][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[29][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[29] = 3;
 units[29] = ['103'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5653. ";
 preguntaids[29] = 5653


//  Id pregunta: 6505 Año de creación de pregunta: 2003
 questions[30]= "31)  Alguno de los &oacute;rganos a trav&eacute;s del cu&aacute;l ISOC ejerce sus funciones son:";
 choices[30]= new Array();
 choices[30][0] = "IAB para la asignaci&oacute;n de recursos. IEFT para la especificaci&oacute;n de est&aacute;ndares.";
 choices[30][1] = "IEFT para la especificaci&oacute;n de est&aacute;ndares. IESG para la supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[30][2] = "IAB para la supervisi&oacute;n y aprobaci&oacute;n de normas. IESG para la coordinaci&oacute;n";
 choices[30][3] = "IEFT para la coordinaci&oacute;n. IANA para la asignaci&oacute;n de recursos";
 answers[30] = 2;
 units[30] = ['103'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 6505. ";
 preguntaids[30] = 6505


//  Id pregunta: 8289 Año de creación de pregunta: 2011
 questions[31]= "32)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[31]= new Array();
 choices[31][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[31][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[31][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[31][3] = "Ninguna de las anteriores.";
 answers[31] = 2;
 units[31] = ['103'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 8289. Examen UPM A2 2011";
 preguntaids[31] = 8289


//  Id pregunta: 6749 Año de creación de pregunta: 2009
 questions[32]= "33)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[32]= new Array();
 choices[32][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments)";
 choices[32][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto";
 choices[32][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII";
 choices[32][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;";
 answers[32] = 3;
 units[32] = ['103'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 6749. MAP 2008 A1";
 preguntaids[32] = 6749


//  Id pregunta: 5773 Año de creación de pregunta: 2007
 questions[33]= "34)  &iquest;Que entidad publica empresarial tiene atribuida la autoridad de asignaci&oacute;n de nombres de dominio .es?:";
 choices[33]= new Array();
 choices[33][0] = "Red.es";
 choices[33][1] = "FNMT";
 choices[33][2] = "dominios.es";
 choices[33][3] = "Red Iris";
 answers[33] = 0;
 units[33] = ['103'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5773. ";
 preguntaids[33] = 5773


//  Id pregunta: 7408 Año de creación de pregunta: 2010
 questions[34]= "35)  Una conexi&oacute;n FTP puede funcionar en modo activo o pasivo. Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[34]= new Array();
 choices[34][0] = "El modo pasivo sirve, para que una vez iniciada una transferencia de archivos, poder iniciar otra transferencia sin tener que esperar a la finalizaci&oacute;n de la primera";
 choices[34][1] = "El modo pasivo es muy recomendable cuando el cliente tiene una conexi&oacute;n con cortafuegos, ya que en esta modalidad, tanto el canal de control como el canal de datos los abre el cliente";
 choices[34][2] = "En el modo pasivo se fuerza que, tanto el cliente como el servidor usen los puertos 20 y 21 para el env&iacute;o de los datos y la informaci&oacute;n de control rec&iacute;procamente y evitar problemas con los cortafuegos";
 choices[34][3] = "El modo pasivo, facilita que tanto la informaci&oacute;n de control como la de datos se transmita por el mismo puerto (el 21 en el servidor y cualquier puerto en el cliente)";
 answers[34] = 1;
 units[34] = ['103'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 7408. Examen TIC B 2009";
 preguntaids[34] = 7408


//  Id pregunta: 7820 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Qu&eacute; es WebDAV?";
 choices[35]= new Array();
 choices[35][0] = "Sistema seguro de compartici&oacute;n de carpetas sobre HTTP.";
 choices[35][1] = "Sistema web de creaci&oacute;n de formularios.";
 choices[35][2] = "Sistema web seguro de compartici&oacute;n de procesamiento.";
 choices[35][3] = "Sistema web de mensajer&iacute;a y alertas.";
 answers[35] = 0;
 units[35] = ['103'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 7820. ";
 preguntaids[35] = 7820


//  Id pregunta: 10067 Año de creación de pregunta: 2015
 questions[36]= "37)  El comando ping es el acr&oacute;nimo de:";
 choices[36]= new Array();
 choices[36][0] = "Packet Internet Group.";
 choices[36][1] = "Packet Internet Gangway.";
 choices[36][2] = "Packet Internet Gate.";
 choices[36][3] = "Packet Internet Groper.";
 answers[36] = 3;
 units[36] = ['103'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10067. Examen TIC A2 2014";
 preguntaids[36] = 10067


//  Id pregunta: 6915 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[37]= new Array();
 choices[37][0] = "ONC RPC";
 choices[37][1] = "XDR";
 choices[37][2] = "NIS";
 choices[37][3] = "XML";
 answers[37] = 1;
 units[37] = ['103'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 6915. ";
 preguntaids[37] = 6915


//  Id pregunta: 7693 Año de creación de pregunta: 2010
 questions[38]= "39)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el servidor en el modo PASV del Protocolo de Transferencia de Ficheros FTP (&laquo;File Transfer Protocol&raquo;):";
 choices[38]= new Array();
 choices[38][0] = "El puerto 20.";
 choices[38][1] = "El puerto 21.";
 choices[38][2] = "Un puerto por encima de 1023 elegido al azar por el cliente.";
 choices[38][3] = "Un puerto por encima de 1023 elegido al azar por el servidor.";
 answers[38] = 3;
 units[38] = ['103'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7693. Similar a Map 2007";
 preguntaids[38] = 7693


//  Id pregunta: 5834 Año de creación de pregunta: 2007
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[39]= new Array();
 choices[39][0] = "Cookies.";
 choices[39][1] = "Spam.";
 choices[39][2] = "Netnannies.";
 choices[39][3] = "Brownies.";
 answers[39] = 3;
 units[39] = ['103'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5834. Examen 2006 JCYL";
 preguntaids[39] = 5834


//  Id pregunta: 6921 Año de creación de pregunta: 2010
 questions[40]= "41)  En cuanto a SFTP, se puede afirmar:";
 choices[40]= new Array();
 choices[40][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[40][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[40][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[40][3] = "Todas las respuestas anteriores son correctas.";
 answers[40] = 2;
 units[40] = ['103'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 6921. ";
 preguntaids[40] = 6921


//  Id pregunta: 8295 Año de creación de pregunta: 2011
 questions[41]= "42)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[41]= new Array();
 choices[41][0] = "53 TCP";
 choices[41][1] = "453 TCP";
 choices[41][2] = "456 UDP";
 choices[41][3] = "53 UDP";
 answers[41] = 0;
 units[41] = ['103'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8295. Examen UPM A2 2011";
 preguntaids[41] = 8295


//  Id pregunta: 6121 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?:";
 choices[42]= new Array();
 choices[42][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[42][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas webs de noticias";
 choices[42][2] = "RSS es parte de la familia de los formatos XML";
 choices[42][3] = "Es un acr&oacute;nimo de &quot;Really Simple Syndication&quot;";
 answers[42] = 1;
 units[42] = ['103'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 6121. Examen TIC A1 MAP 2007";
 preguntaids[42] = 6121


//  Id pregunta: 7667 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?";
 choices[43]= new Array();
 choices[43][0] = "ADSL.";
 choices[43][1] = "Grupos noticias (news).";
 choices[43][2] = "FTP.";
 choices[43][3] = "IRC.";
 answers[43] = 0;
 units[43] = ['103'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7667. Map 2007";
 preguntaids[43] = 7667


//  Id pregunta: 7773 Año de creación de pregunta: 2010
 questions[44]= "45)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &laquo;Domain Name System&raquo;):";
 choices[44]= new Array();
 choices[44][0] = "HINFO &laquo;Host Information&raquo;.";
 choices[44][1] = "SOA &laquo;Start Of Authority&raquo;.";
 choices[44][2] = "TTL &laquo;Time-To-Live&raquo;.";
 choices[44][3] = "WKS &laquo;Well-Know-Services&raquo;.";
 answers[44] = 2;
 units[44] = ['103'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 7773. ";
 preguntaids[44] = 7773


//  Id pregunta: 10082 Año de creación de pregunta: 2015
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[45]= new Array();
 choices[45][0] = "SetRequest PDU";
 choices[45][1] = "InformRequest PDU";
 choices[45][2] = "Report PDU";
 choices[45][3] = "GetBackRequest PDU";
 answers[45] = 3;
 units[45] = ['103'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10082. Examen TIC A2 2014";
 preguntaids[45] = 10082


//  Id pregunta: 9714 Año de creación de pregunta: 2014
 questions[46]= "47)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[46]= new Array();
 choices[46][0] = "The Outer Router";
 choices[46][1] = "The Ominous Router";
 choices[46][2] = "The Onion Router";
 choices[46][3] = "Ninguna es correcta";
 answers[46] = 2;
 units[46] = ['103'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9714. http://es.wikipedia.org/wiki/Tor";
 preguntaids[46] = 9714


//  Id pregunta: 6393 Año de creación de pregunta: 2003
 questions[47]= "48)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es";
 choices[47]= new Array();
 choices[47][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[47][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[47][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[47][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[47] = 2;
 units[47] = ['103'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 6393. Examen 2006 JCYL";
 preguntaids[47] = 6393


//  Id pregunta: 9389 Año de creación de pregunta: 2014
 questions[48]= "49)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[48]= new Array();
 choices[48][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[48][1] = "Europa y Norte de &Aacute;frica.";
 choices[48][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[48][3] = "Europa, Oriente Medio y Asia Central.";
 answers[48] = 3;
 units[48] = ['103'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9389. Examen TIC A2  2013";
 preguntaids[48] = 9389


//  Id pregunta: 6887 Año de creación de pregunta: 2010
 questions[49]= "50)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[49]= new Array();
 choices[49][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[49][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[49][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[49][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[49] = 1;
 units[49] = ['103'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6887. TIC A 2009";
 preguntaids[49] = 6887


//  Id pregunta: 10085 Año de creación de pregunta: 2015
 questions[50]= "51)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[50]= new Array();
 choices[50][0] = "2121";
 choices[50][1] = "2020";
 choices[50][2] = "980";
 choices[50][3] = "990";
 answers[50] = 3;
 units[50] = ['103'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10085. Examen TIC A2 2014";
 preguntaids[50] = 10085


//  Id pregunta: 7957 Año de creación de pregunta: 2011
 questions[51]= "52)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[51]= new Array();
 choices[51][0] = "IANA.";
 choices[51][1] = "NIST.";
 choices[51][2] = "ICANN.";
 choices[51][3] = "IETF.";
 answers[51] = 2;
 units[51] = ['103'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 7957. Examen TIC A2 2010";
 preguntaids[51] = 7957


//  Id pregunta: 8476 Año de creación de pregunta: 2011
 questions[52]= "53)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[52]= new Array();
 choices[52][0] = "2965";
 choices[52][1] = "8080";
 choices[52][2] = "1065";
 choices[52][3] = "1265";
 answers[52] = 0;
 units[52] = ['103'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8476. ";
 preguntaids[52] = 8476


//  Id pregunta: 10054 Año de creación de pregunta: 2015
 questions[53]= "54)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[53]= new Array();
 choices[53][0] = "Crear colecciones.";
 choices[53][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[53][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[53][3] = "Desbloquear un recurso.";
 answers[53] = 2;
 units[53] = ['103'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10054. Examen TIC A2 2014";
 preguntaids[53] = 10054


//  Id pregunta: 7942 Año de creación de pregunta: 2011
 questions[54]= "55)  El protocolo FTP es un protocolo:";
 choices[54]= new Array();
 choices[54][0] = "Seguro.";
 choices[54][1] = "Orientado a conexi&oacute;n.";
 choices[54][2] = "De nivel de enlace.";
 choices[54][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red.";
 answers[54] = 1;
 units[54] = ['103'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 7942. Examen TIC A2 2010";
 preguntaids[54] = 7942


//  Id pregunta: 6073 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[55]= new Array();
 choices[55][0] = "ADSL";
 choices[55][1] = "Grupos noticias (news)";
 choices[55][2] = "FTP";
 choices[55][3] = "IRC";
 answers[55] = 0;
 units[55] = ['103'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6073. Examen TIC A1 MAP 2007";
 preguntaids[55] = 6073


//  Id pregunta: 5848 Año de creación de pregunta: 2007
 questions[56]= "57)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[56]= new Array();
 choices[56][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[56][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[56][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[56][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[56] = 2;
 units[56] = ['103'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5848. Examen 2006 JCYL";
 preguntaids[56] = 5848


//  Id pregunta: 6919 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[57]= new Array();
 choices[57][0] = "TCP, al igual que FTP";
 choices[57][1] = "TCP, a diferencia de FTP que usa UDP";
 choices[57][2] = "UDP, a diferencia de FTP que usa TCP";
 choices[57][3] = "UDP, al igual que FTP.";
 answers[57] = 2;
 units[57] = ['103'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6919. ";
 preguntaids[57] = 6919


//  Id pregunta: 7927 Año de creación de pregunta: 2011
 questions[58]= "59)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[58]= new Array();
 choices[58][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[58][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[58][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[58][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[58] = 1;
 units[58] = ['103'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7927. Examen TIC A1 2010";
 preguntaids[58] = 7927


//  Id pregunta: 5592 Año de creación de pregunta: 2007
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[59]= new Array();
 choices[59][0] = "Arquitectura abierta";
 choices[59][1] = "Control centralizado";
 choices[59][2] = "Basada en TCP/IP";
 choices[59][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[59] = 1;
 units[59] = ['103'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5592. ";
 preguntaids[59] = 5592


