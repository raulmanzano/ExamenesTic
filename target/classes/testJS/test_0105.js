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
//  Id pregunta: 973 Año de creación de pregunta: 2016
 questions[0]= "1)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[0]= new Array();
 choices[0][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[0][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[0][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[0][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[0] = 3;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 973. Ley 40/2015";
 preguntaids[0] = 973


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[1]= new Array();
 choices[1][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[1][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[1][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = 1;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 463. Estrategia TIC";
 preguntaids[1] = 463


//  Id pregunta: 3333 Año de creación de pregunta: 2004
 questions[2]= "3)  &iquest;Qu&eacute; es un JNI?";
 choices[2]= new Array();
 choices[2][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[2][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[2][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[2][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[2] = 3;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3333. ";
 preguntaids[2] = 3333


//  Id pregunta: 7130 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[3]= new Array();
 choices[3][0] = "15 d&iacute;as";
 choices[3][1] = "1 mes";
 choices[3][2] = "2 meses";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = 3;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 7130. Ley 34/2002, art&iacute;culo 6";
 preguntaids[3] = 7130


//  Id pregunta: 2454 Año de creación de pregunta: 2006
 questions[4]= "5)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[4]= new Array();
 choices[4][0] = "X/OPEN";
 choices[4][1] = "ACE";
 choices[4][2] = "OSF";
 choices[4][3] = "IEEE";
 answers[4] = 3;
 units[4] = ['43'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2454. ";
 preguntaids[4] = 2454


//  Id pregunta: 5322 Año de creación de pregunta: 2006
 questions[5]= "6)  Los datos de usuario es mejor guardarlos";
 choices[5]= new Array();
 choices[5][0] = "en la segunda partici&oacute;n o disco duro";
 choices[5][1] = "en la partici&oacute;n m&aacute;s cercana a la de la unidad de backup";
 choices[5][2] = "en la primera partici&oacute;n del disco duro";
 choices[5][3] = "ninguna de las anteriores";
 answers[5] = 0;
 units[5] = ['100'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 5322. ";
 preguntaids[5] = 5322


//  Id pregunta: 7127 Año de creación de pregunta: 2010
 questions[6]= "7)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[6]= new Array();
 choices[6][0] = "Ministerio de Defensa";
 choices[6][1] = "Ministerio del Interior";
 choices[6][2] = "Ministerio de Presidencia";
 choices[6][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[6] = 1;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7127. RD 1553/2005, art&iacute;culo 3";
 preguntaids[6] = 7127


//  Id pregunta: 9732 Año de creación de pregunta: 2014
 questions[7]= "8)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[7]= new Array();
 choices[7][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante";
 choices[7][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general.";
 choices[7][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[7][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa";
 answers[7] = 2;
 units[7] = ['121'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9732. ";
 preguntaids[7] = 9732


//  Id pregunta: 8071 Año de creación de pregunta: 2011
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[8]= new Array();
 choices[8][0] = "AIF";
 choices[8][1] = "IDA";
 choices[8][2] = "ISA";
 choices[8][3] = "IMA";
 answers[8] = 2;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 8071. ";
 preguntaids[8] = 8071


//  Id pregunta: 8403 Año de creación de pregunta: 2011
 questions[9]= "10)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[9]= new Array();
 choices[9][0] = "Contiene las instrucciones del programa.";
 choices[9][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[9][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[9][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[9] = 2;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8403. Operador Ayto. Madrid 2010";
 preguntaids[9] = 8403


//  Id pregunta: 1511 Año de creación de pregunta: 2016
 questions[10]= "11)  De entre los siguientes, &iquest;Cu&aacute;l es el nivel m&aacute;s bajo de aislamiento?";
 choices[10]= new Array();
 choices[10][0] = "Read Commited (lectura confirmada).";
 choices[10][1] = "Repeatable Read (lectura repetible).";
 choices[10][2] = "Serializable.";
 choices[10][3] = "Read Uncommited (lectura no confirmada).";
 answers[10] = 3;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1511. ";
 preguntaids[10] = 1511


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta correcta. En relaci&oacute;n a los formatos admitidos por las organizaciones para las firmas/sellos electr&oacute;nicos basadas en certificados electr&oacute;nicos, seg&uacute;n la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos, &eacute;stos se ajustar&aacute;n a:";
 choices[11]= new Array();
 choices[11][0] = "Los formatos CAdES, XAdES y PAdES en las versiones establecidas en la Norma T&eacute;cnica de Interoperabilidad de Pol&iacute;tica de firma del 2011.";
 choices[11][1] = "Lo establecido en la NTI de Cat&aacute;logo de est&aacute;ndares.";
 choices[11][2] = "La Decisi&oacute;n de Ejecuci&oacute;n UE 2015/1506 de conformidad con el Reglamento 910/2014 del Parlamento Europeo y del Consejo";
 choices[11][3] = "Todas las respuestas son correctas.";
 answers[11] = 3;
 units[11] = ['43'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 597. NTI";
 preguntaids[11] = 597


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[12][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[12][2] = "Fomentar el despliegue de redes y servicios";
 choices[12][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[12] = 0;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 449. Agenda Digital para Espa&ntilde;a";
 preguntaids[12] = 449


//  Id pregunta: 5312 Año de creación de pregunta: 2006
 questions[13]= "14)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[13]= new Array();
 choices[13][0] = "Common Management Information Protocol (CMIP)";
 choices[13][1] = "Network Data Management Protocol (NDMP)";
 choices[13][2] = "Point-to-Point Protocol (PPP)";
 choices[13][3] = "Bootstrap Protocol (BOOTP)";
 answers[13] = 1;
 units[13] = ['45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 5312. ";
 preguntaids[13] = 5312


//  Id pregunta: 7124 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[14]= new Array();
 choices[14][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[14][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[14][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[14][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[14] = 2;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 7124. Art&iacute;culo 53 RD 1671/2009";
 preguntaids[14] = 7124


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[15]= "16)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[15]= new Array();
 choices[15][0] = "T&iacute;tulo I";
 choices[15][1] = "T&iacute;tulo II";
 choices[15][2] = "T&iacute;tulo III";
 choices[15][3] = "T&iacute;tulo IV";
 answers[15] = 1;
 units[15] = ['7', '19'];
 blocks[15] = ['A2', 'A4'];
 comments[15] = "Id Pregunta: 9889. ";
 preguntaids[15] = 9889


//  Id pregunta: 6748 Año de creación de pregunta: 2009
 questions[16]= "17)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[16]= new Array();
 choices[16][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[16][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[16][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[16][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[16] = 2;
 units[16] = ['24'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 6748. MAP 2008 A1";
 preguntaids[16] = 6748


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[17]= "18)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[17]= new Array();
 choices[17][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[17][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[17][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[17][3] = "Todas las anteriores son ciertas";
 answers[17] = 3;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 5889. ";
 preguntaids[17] = 5889


//  Id pregunta: 10614 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la Ley 9/2014, la reasignaci&oacute;n del uso de bandas de frecuencias con el objetivo de alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico es facultad de:";
 choices[18]= new Array();
 choices[18][0] = "El gobierno.";
 choices[18][1] = "La CNMC.";
 choices[18][2] = "El Ayuntamiento de la localidad.";
 choices[18][3] = "Los organismos internacionales.";
 answers[18] = 0;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10614. Articulo 61";
 preguntaids[18] = 10614


//  Id pregunta: 5497 Año de creación de pregunta: 2007
 questions[19]= "20)  Un Puente o Bridge:";
 choices[19]= new Array();
 choices[19][0] = "S&oacute;lo funcionan con TCP/IP.";
 choices[19][1] = "Puede dividir una red en dos segmentos.";
 choices[19][2] = "Permiten establecer una Topolog&iacute;a en Estrella en una red en BUS al garantizar la compatibilidad en el nivel 2 de OSI.";
 choices[19][3] = "Encaminan la informaci&oacute;n hacia el destino siguiendo el trayecto m&aacute;s corto por la red.";
 answers[19] = 1;
 units[19] = ['102'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5497. ";
 preguntaids[19] = 5497


//  Id pregunta: 2443 Año de creación de pregunta: 2006
 questions[20]= "21)  Una norma europea es:";
 choices[20]= new Array();
 choices[20][0] = "Una norma aprobada por un organismo de normalizaci&oacute;n con el que la Uni&oacute;n Europea ha establecido acuerdos";
 choices[20][1] = "De obligado cumplimiento en la Uni&oacute;n Europea";
 choices[20][2] = "Una norma homologada por un organismo de normalizaci&oacute;n con sede en la Uni&oacute;n Europea";
 choices[20][3] = "Una norma elaborada por el Comit&eacute; Europeo de Normalizaci&oacute;n (CEN)";
 answers[20] = 0;
 units[20] = ['48'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2443. ";
 preguntaids[20] = 2443


//  Id pregunta: 9616 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[21]= new Array();
 choices[21][0] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[21][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[21][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[21][3] = "Ministerio de Fomento";
 answers[21] = 1;
 units[21] = ['41'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 9616. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte.";
 preguntaids[21] = 9616


//  Id pregunta: 9493 Año de creación de pregunta: 2014
 questions[22]= "23)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[22]= new Array();
 choices[22][0] = "3 Mbps";
 choices[22][1] = "2 Mbps";
 choices[22][2] = "5 Mbps";
 choices[22][3] = "1 Mbps";
 answers[22] = 0;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 9493. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";
 preguntaids[22] = 9493


//  Id pregunta: 6475 Año de creación de pregunta: 2003
 questions[23]= "24)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[23]= new Array();
 choices[23][0] = "Incrementar el n&uacute;mero de abonados";
 choices[23][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[23][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[23][3] = "Favorecer la competencia enlas redes de acceso";
 answers[23] = 0;
 units[23] = ['108'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6475. ";
 preguntaids[23] = 6475


//  Id pregunta: 1526 Año de creación de pregunta: 2016
 questions[24]= "25)  Mediante un sistema criptogr&aacute;fico sim&eacute;trico, un usuario A (con claves p&uacute;blica Pa y privada Ka) desea comunicarse con otro usuario B (con claves p&uacute;blica Pb y privada Kb). &iquest;De qu&eacute; forma podr&iacute;a A enviarle un mensaje (M) a B de manera que s&oacute;lo pueda verlo B y garantizando que ha sido A el que lo ha enviado?";
 choices[24]= new Array();
 choices[24][0] = "Kb(Pa(M)).";
 choices[24][1] = "Pb(Ka(M)).";
 choices[24][2] = "Pb(M).";
 choices[24][3] = "Ka(M).";
 answers[24] = 1;
 units[24] = ['76'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1526. ";
 preguntaids[24] = 1526


//  Id pregunta: 10396 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[25]= new Array();
 choices[25][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[25][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[25][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[25][3] = "Beneficios TIC para la Sociedad UE";
 answers[25] = 0;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 10396. ";
 preguntaids[25] = 10396


//  Id pregunta: 4244 Año de creación de pregunta: 2006
 questions[26]= "27)  La migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional:";
 choices[26]= new Array();
 choices[26][0] = "Consiste simplemente en mover los programas entre diferentes tipos de ordenador.";
 choices[26][1] = "No debe implicar modificaciones en la filosof&iacute;a de negocio de la organizaci&oacute;n.";
 choices[26][2] = "Se limita s&oacute;lo a las aplicaciones de usuario.";
 choices[26][3] = "Debe englobar todos los productos l&oacute;gicos o software de la instalaci&oacute;n a migrar.";
 answers[26] = 3;
 units[26] = ['95'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4244. ";
 preguntaids[26] = 4244


//  Id pregunta: 1732 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos de gesti&oacute;n de redes est&aacute; basado en el modelo de referencia OSI de ISO:";
 choices[27]= new Array();
 choices[27][0] = "CMIP";
 choices[27][1] = "SNMP";
 choices[27][2] = "SGMP";
 choices[27][3] = "TL-1";
 answers[27] = 0;
 units[27] = ['105'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 1732. ";
 preguntaids[27] = 1732


//  Id pregunta: 1703 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale cu&aacute;les son los participantes en la Tarea de Generaci&oacute;n del C&oacute;digo de los Procedimientos de Operaci&oacute;n y Seguridad, seg&uacute;n M&eacute;trica v.3:";
 choices[28]= new Array();
 choices[28][0] = "T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administrador de la Base de Datos y Programadores.";
 choices[28][1] = "Jefe de Proyecto, T&eacute;cnico de Sistemas, Administrador Base de Datos y Programadores.";
 choices[28][2] = "Jefe de Proyecto, Auditor de Sistemas, Equipo Operaci&oacute;n y Administrador Base de Datos.";
 choices[28][3] = "T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administrador de la Base de Datos y responsable de Seguridad.";
 answers[28] = 0;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 1703. ";
 preguntaids[28] = 1703


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[29]= "30)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[29]= new Array();
 choices[29][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[29][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[29][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[29][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[29] = 0;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 9777. ";
 preguntaids[29] = 9777


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[30]= new Array();
 choices[30][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[30][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[30][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[30][3] = "El software funcionando es la medida principal del progreso.";
 answers[30] = 2;
 units[30] = ['34'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 552. AGE A1 2015";
 preguntaids[30] = 552


//  Id pregunta: 5887 Año de creación de pregunta: 2007
 questions[31]= "32)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[31]= new Array();
 choices[31][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[31][1] = "Firma electr&oacute;nica";
 choices[31][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[31][3] = "Todas las anteriores son ciertas";
 answers[31] = 3;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 5887. Ley 56/2007";
 preguntaids[31] = 5887


//  Id pregunta: 6034 Año de creación de pregunta: 2003
 questions[32]= "33)  Despu&eacute;s de un cambio en un sistema de informaci&oacute;n, &iquest;qu&eacute; pruebas es necesario realizar para comprobar que los cambios realizados no han afectado a otros componentes no modificados?:";
 choices[32]= new Array();
 choices[32][0] = "Pruebas de implantaci&oacute;n.";
 choices[32][1] = "Pruebas de sostenibilidad.";
 choices[32][2] = "Pruebas de regresi&oacute;n.";
 choices[32][3] = "Pruebas del sistema.";
 answers[32] = 2;
 units[32] = ['92'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6034. TIC B 2007";
 preguntaids[32] = 6034


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[33]= new Array();
 choices[33][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[33][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[33][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[33][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[33] = 1;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[33] = 452


//  Id pregunta: 6233 Año de creación de pregunta: 2003
 questions[34]= "35)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[34]= new Array();
 choices[34][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[34][1] = "No es necesario verificar la identidad de los usuarios";
 choices[34][2] = "No permite cifrado de datos.";
 choices[34][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[34] = 3;
 units[34] = ['119'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 6233. Examen TIC A Castilla La Mancha 2007";
 preguntaids[34] = 6233


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[35]= "36)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[35]= new Array();
 choices[35][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[35][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[35][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[35][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[35] = 3;
 units[35] = ['11'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 326. Presupuestos generales";
 preguntaids[35] = 326


//  Id pregunta: 10273 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Qu&eacute; representa el Modelo de Servicio en V?";
 choices[36]= new Array();
 choices[36][0] = "Una estrategia para la realizaci&oacute;n con &eacute;xito de todos los proyectos de gesti&oacute;n de servicios";
 choices[36][1] = "La ruta de acceso para la Entrega y Soporte del Servicio para una eficiente y eficaz utilizaci&oacute;n de los recursos";
 choices[36][2] = "Los niveles de pruebas requeridos para la entrega del servicio";
 choices[36][3] = "La perspectiva empresarial que tienen los Clientes y Usuarios de los servicios";
 answers[36] = 2;
 units[36] = ['101'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10273. ";
 preguntaids[36] = 10273


//  Id pregunta: 8017 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[37]= new Array();
 choices[37][0] = "Read Commited (lectura confirmada).";
 choices[37][1] = "Serializable.";
 choices[37][2] = "Read uncornmited (lectura no confirmada),";
 choices[37][3] = "Repeatable read (lectura repetible).";
 answers[37] = 3;
 units[37] = ['60', '61'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8017. Examen TIC A2 2010";
 preguntaids[37] = 8017


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta falsa:";
 choices[38]= new Array();
 choices[38][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[38][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[38][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[38][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[38] = 2;
 units[38] = ['5'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 106. Uni&oacute;n Europea";
 preguntaids[38] = 106


//  Id pregunta: 2845 Año de creación de pregunta: 2002
 questions[39]= "40)  En los ordenadores, por lo general, los programas que realizan tareas de arranque de la m&aacute;quina y de diagn&oacute;sticos se almacenan en:";
 choices[39]= new Array();
 choices[39][0] = "RAM";
 choices[39][1] = "ROM";
 choices[39][2] = "memoria interna del procesador";
 choices[39][3] = "disco duro asociado a la UAL y la UC";
 answers[39] = 1;
 units[39] = ['51'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2845. ";
 preguntaids[39] = 2845


//  Id pregunta: 8900 Año de creación de pregunta: 2013
 questions[40]= "41)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[40]= new Array();
 choices[40][0] = "Primera Forma Normal.";
 choices[40][1] = "Segunda Forma Normal.";
 choices[40][2] = "Tercera Forma Normal.";
 choices[40][3] = "Forma Normal de Boyce-Codd.";
 answers[40] = 1;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8900. ";
 preguntaids[40] = 8900


//  Id pregunta: 4734 Año de creación de pregunta: 2002
 questions[41]= "42)  El protocolo ARP es:";
 choices[41]= new Array();
 choices[41][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[41][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[41][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[41][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[41] = 2;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4734. ";
 preguntaids[41] = 4734


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[42]= "43)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[42]= new Array();
 choices[42][0] = "P&uacute;blica.";
 choices[42][1] = "Privada.";
 choices[42][2] = "A y B son correctas.";
 choices[42][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[42] = 2;
 units[42] = ['14'];
 blocks[42] = ['A3'];
 comments[42] = "Id Pregunta: 398. Pol&iacute;ticas de igualdad";
 preguntaids[42] = 398


//  Id pregunta: 6467 Año de creación de pregunta: 2003
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[43]= new Array();
 choices[43][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[43][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[43][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[43][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[43] = 1;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 6467. ";
 preguntaids[43] = 6467


//  Id pregunta: 3893 Año de creación de pregunta: 2002
 questions[44]= "45)  El m&eacute;todo de recuperaci&oacute;n de la informaci&oacute;n basado en ficheros auxiliares de t&eacute;rminos (claves o &iacute;ndices  de palabras) o ficheros de apuntadores (referencias de los documentos base) es propio de:";
 choices[44]= new Array();
 choices[44][0] = "Modelo booleano";
 choices[44][1] = "Indexaci&oacute;n y recuperaci&oacute;n autom&aacute;tica vectorial";
 choices[44][2] = "&Iacute;ndices invertidos";
 choices[44][3] = "Retroalimentaci&oacute;n";
 answers[44] = 2;
 units[44] = ['100'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3893. ";
 preguntaids[44] = 3893


//  Id pregunta: 994 Año de creación de pregunta: 2016
 questions[45]= "46)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en la ley 40/2015, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[45]= new Array();
 choices[45][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[45][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[45][2] = "a y b son correctas";
 choices[45][3] = "a y b son incorrectas";
 answers[45] = 2;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 994. Ley 40/2015";
 preguntaids[45] = 994


//  Id pregunta: 966 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[46]= new Array();
 choices[46][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[46][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[46][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[46][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[46] = 2;
 units[46] = ['4', '7', '8', '9'];
 blocks[46] = ['A1', 'A2'];
 comments[46] = "Id Pregunta: 966. Ley 40/2015";
 preguntaids[46] = 966


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[47]= "48)  A tenor de lo que expresa la Ley 59/2003 en su art&iacute;culo 31 relativo a infracciones, se&ntilde;ale cu&aacute;l de las siguientes ser&iacute;a considerada muy grave:";
 choices[47]= new Array();
 choices[47][0] = "La falta de constituci&oacute;n por los prestadores que expidan certificados reconocidos de la garant&iacute;a econ&oacute;mica para afrontar el riesgo de la responsabilidad por los da&ntilde;os y perjuicios que pueda ocasionar el uso de los certificados que expidan.";
 choices[47][1] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el prestador de servicios de certificaci&oacute;n haya expedido un certificado reconocido, y que este hecho haya causado da&ntilde;os graves al usuario.";
 choices[47][2] = "El incumplimiento de las resoluciones dictadas por el Ministerio de Ciencia y Tecnolog&iacute;a para asegurar que el prestador de servicios de certificaci&oacute;n se ajuste a esta Ley.";
 choices[47][3] = "La resistencia, obstrucci&oacute;n, excusa o negativa injustificada a la actuaci&oacute;n inspectora de los &oacute;rganos facultados en esta Ley.";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 443. AGE A2 2015";
 preguntaids[47] = 443


//  Id pregunta: 2848 Año de creación de pregunta: 2002
 questions[48]= "49)  En relaci&oacute;n con el concepto de memoria virtual, una de las siguientes afirmaciones es falsa. Indique cu&aacute;l:";
 choices[48]= new Array();
 choices[48][0] = "El mecanismo de traducci&oacute;n de las direcciones de las memorias virtuales se basa en una memoria asociativa que contiene la tabla de p&aacute;ginas f&iacute;sicas y sus equivalentes l&oacute;gicas";
 choices[48][1] = "Generalmente existe una memoria asociativa de alta velocidad que sirve para albergar aquellos elementos de la tabla de p&aacute;ginas/segmentos utilizadas m&aacute;s recientemente";
 choices[48][2] = "La viabilidad de la memoria virtual se basa en el principio de la proximidad de las referencias a memorias";
 choices[48][3] = "La memoria virtual paginada da lugar a la fragmentaci&oacute;n externa";
 answers[48] = 3;
 units[48] = ['56'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2848. ";
 preguntaids[48] = 2848


//  Id pregunta: 4761 Año de creación de pregunta: 2002
 questions[49]= "50)  El servicio de directorio definido por la ITU-T:";
 choices[49]= new Array();
 choices[49][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[49][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[49][2] = "Es soportado por un sistema de ficheros en red";
 choices[49][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[49] = 3;
 units[49] = ['116'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4761. ";
 preguntaids[49] = 4761


//  Id pregunta: 3372 Año de creación de pregunta: 2006
 questions[50]= "51)  El comando de Unix 'tee'";
 choices[50]= new Array();
 choices[50][0] = "Muestra el archivo byte a byte incluyendo caracteres no imprimibles";
 choices[50][1] = "Descompone la entrada en 2 flujos de salida, una es la salida est&aacute;ndar y la otra un archivo";
 choices[50][2] = "No existe";
 choices[50][3] = "Busca un patr&oacute;n en uno o m&aacute;s archivos";
 answers[50] = 1;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3372. ";
 preguntaids[50] = 3372


//  Id pregunta: 3030 Año de creación de pregunta: 2002
 questions[51]= "52)  Se puede acceder directamente a la memoria principal del ordenador por varios m&eacute;todos. Entre ellos se encuentra:";
 choices[51]= new Array();
 choices[51][0] = "Bus multiplexado";
 choices[51][1] = "Robo de ciclo";
 choices[51][2] = "Memoria segmentada";
 choices[51][3] = "Accesos aleatorios";
 answers[51] = 1;
 units[51] = ['56'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3030. ";
 preguntaids[51] = 3030


//  Id pregunta: 9902 Año de creación de pregunta: 2015
 questions[52]= "53)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[52]= new Array();
 choices[52][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[52][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[52][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[52][3] = "Todas las anteriores.";
 answers[52] = 3;
 units[52] = ['7', '19'];
 blocks[52] = ['A2', 'A4'];
 comments[52] = "Id Pregunta: 9902. ";
 preguntaids[52] = 9902


//  Id pregunta: 7118 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[53]= new Array();
 choices[53][0] = "No";
 choices[53][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[53][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[53][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[53] = 2;
 units[53] = ['7'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 7118. Art&iacute;culo 3.3 RD 1671/2009";
 preguntaids[53] = 7118


//  Id pregunta: 6128 Año de creación de pregunta: 2003
 questions[54]= "55)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[54]= new Array();
 choices[54][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[54][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[54][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[54][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[54] = 2;
 units[54] = ['85'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6128. Examen TIC A1 MAP 2007";
 preguntaids[54] = 6128


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[55]= "56)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[55]= new Array();
 choices[55][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[55][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[55][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[55][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[55] = 1;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[55] = 232


//  Id pregunta: 3238 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Qu&eacute; es JDBC?:";
 choices[56]= new Array();
 choices[56][0] = "Un modelo de objetos ActiveX.";
 choices[56][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[56][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[56][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[56] = 3;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3238. Junta Andaluc&iacute;a";
 preguntaids[56] = 3238


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[57]= "58)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[57]= new Array();
 choices[57][0] = "2.400 euros";
 choices[57][1] = "4.000 euros";
 choices[57][2] = "3.200 euros";
 choices[57][3] = "1.600 euros";
 answers[57] = 1;
 units[57] = ['37'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 573. AGE A1 2015";
 preguntaids[57] = 573


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[58]= "59)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[58][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[58][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[58][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[58] = 1;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 1995. ";
 preguntaids[58] = 1995


//  Id pregunta: 10748 Año de creación de pregunta: 2015
 questions[59]= "60)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, el documento de alto nivel con todos los requerimientos del proyectos priorizados seg&uacute;n retorno de inversi&oacute;n (ROI), se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Sprint Backlog";
 choices[59][1] = "Sprint Chart";
 choices[59][2] = "Product Backlog";
 choices[59][3] = "Burn Down Chart";
 answers[59] = 2;
 units[59] = ['84'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10748. ";
 preguntaids[59] = 10748


//  Id pregunta: 2050 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Qu&eacute; se entiende por capacidad?:";
 choices[60]= new Array();
 choices[60][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[60][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[60][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[60][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[60] = 0;
 units[60] = ['39'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2050. ";
 preguntaids[60] = 2050


//  Id pregunta: 3346 Año de creación de pregunta: 2006
 questions[61]= "62)  En la clasificaci&oacute;n de arquitectura de ordenadores de Flynn, los procesadores vectoriales corresponden a la clase de ordenadores:";
 choices[61]= new Array();
 choices[61][0] = "SISD ( Single Instruction Single Data)";
 choices[61][1] = "SIMD ( Single Instruction Multiple Data)";
 choices[61][2] = "MIMD (Multiple Instruction Multiple Data)";
 choices[61][3] = "MISD ( Multiple Instruction Single Data)";
 answers[61] = 1;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3346. ";
 preguntaids[61] = 3346


//  Id pregunta: 5388 Año de creación de pregunta: 2006
 questions[62]= "63)  MPLS";
 choices[62]= new Array();
 choices[62][0] = "Da soporte al desarrollo de Redes Privadas Virtuales (VPNs) extremo a extremo";
 choices[62][1] = "Se configura internamente en la red de un operador de telecomunicaciones (ISP)";
 choices[62][2] = "Dadas sus capacidades de calidad de servicio (QoS) es recomendado en redes LAN empresariales";
 choices[62][3] = "todas las anteriores";
 answers[62] = 1;
 units[62] = ['107'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5388. ";
 preguntaids[62] = 5388


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[63]= new Array();
 choices[63][0] = "10 d&iacute;as.";
 choices[63][1] = "15 d&iacute;as.";
 choices[63][2] = "1 mes.";
 choices[63][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[63] = 0;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[63] = 207


//  Id pregunta: 1419 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;De qu&eacute; trata el T&iacute;tulo VI de la Constituci&oacute;n Espa&ntilde;ola de 1978?:";
 choices[64]= new Array();
 choices[64][0] = "Del Gobierno y la Administraci&oacute;n.";
 choices[64][1] = "Del Poder Judicial.";
 choices[64][2] = "Econom&iacute;a y Hacienda.";
 choices[64][3] = "De las Relaciones del Gobierno y las Cortes Generales.";
 answers[64] = 1;
 units[64] = ['2'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 1419. ";
 preguntaids[64] = 1419


//  Id pregunta: 2143 Año de creación de pregunta: 2004
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una fase en un proceso de auditor&iacute;a de la gesti&oacute;n de la seguridad inform&aacute;tica de una instalaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Evaluaci&oacute;n de la adecuaci&oacute;n de los controles establecidos";
 choices[65][1] = "Realizaci&oacute;n de entrevistas a usuarios";
 choices[65][2] = "Adquisici&oacute;n del conocimiento necesario mediante la identificaci&oacute;n y documentaci&oacute;n del entorno y de la gesti&oacute;n";
 choices[65][3] = "Ejecuci&oacute;n de pruebas sustantivas";
 answers[65] = 3;
 units[65] = ['45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2143. Examen TIC MAP B 2004";
 preguntaids[65] = 2143


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n a la tecnolog&iacute;a LINQ to DataSet:";
 choices[66]= new Array();
 choices[66][0] = "No se pueden utilizar las colecciones de objeto IEnumerable, debido a su incompatibilidad con IEnumerable&lt;T&gt;.";
 choices[66][1] = "Facilita y acelera las consultas en datos almacenados en cach&eacute; en un objeto DataSet.";
 choices[66][2] = "LINQ proviene de Language-Integrated Query.";
 choices[66][3] = "Es una innovaci&oacute;n introducida en Visual Studio 2008 y .NET Framework versi&oacute;n 3.5.";
 answers[66] = 0;
 units[66] = ['63'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 707. AGE A2 2015";
 preguntaids[66] = 707


//  Id pregunta: 9987 Año de creación de pregunta: 2015
 questions[67]= "68)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[67]= new Array();
 choices[67][0] = "Garantiza la confidencialidad de un documento.";
 choices[67][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[67][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[67][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[67] = 3;
 units[67] = ['7'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 9987. Examen TIC A2 2014";
 preguntaids[67] = 9987


//  Id pregunta: 9981 Año de creación de pregunta: 2015
 questions[68]= "69)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[68]= new Array();
 choices[68][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[68][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[68][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[68][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[68] = 1;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 9981. Examen TIC A2 2014";
 preguntaids[68] = 9981


//  Id pregunta: 9592 Año de creación de pregunta: 2014
 questions[69]= "70)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[69]= new Array();
 choices[69][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[69][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[69][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[69][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[69] = 1;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9592. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[69] = 9592


//  Id pregunta: 3601 Año de creación de pregunta: 2004
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[70]= new Array();
 choices[70][0] = "Integridad";
 choices[70][1] = "Sencillez";
 choices[70][2] = "Mantenibilidad";
 choices[70][3] = "Portabilidad";
 answers[70] = 1;
 units[70] = ['93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3601. ";
 preguntaids[70] = 3601


//  Id pregunta: 2316 Año de creación de pregunta: 2002
 questions[71]= "72)  Una amenaza es, de acuerdo a MAGERIT:";
 choices[71]= new Array();
 choices[71][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[71][1] = "Resultado de una agresi&oacute;n";
 choices[71][2] = "Evento que puede desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales";
 choices[71][3] = "Posibilidad de ocurrencia de un incidente";
 answers[71] = 2;
 units[71] = ['36'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2316. ";
 preguntaids[71] = 2316


//  Id pregunta: 3072 Año de creación de pregunta: 2002
 questions[72]= "73)  Un Data Mart es:";
 choices[72]= new Array();
 choices[72][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[72][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[72][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[72][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[72] = 1;
 units[72] = ['72', '73'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3072. ";
 preguntaids[72] = 3072


//  Id pregunta: 5822 Año de creación de pregunta: 2007
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes protocolos hace referencia a redes inal&aacute;mbricas?";
 choices[73]= new Array();
 choices[73][0] = "802.1";
 choices[73][1] = "802.3";
 choices[73][2] = "802.11b";
 choices[73][3] = "802.3u";
 answers[73] = 2;
 units[73] = ['108'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5822. Examen 2006 JCYL";
 preguntaids[73] = 5822


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[74]= "75)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[74]= new Array();
 choices[74][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[74][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[74][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[74][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[74] = 0;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[74] = 68


