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
//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[0]= "1)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[0]= new Array();
 choices[0][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[0][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[0][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[0][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[0] = 2;
 units[0] = ['7', '47'];
 blocks[0] = ['A2', 'B1'];
 comments[0] = "Id Pregunta: 9782. ";
 preguntaids[0] = 9782


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[1]= new Array();
 choices[1][0] = "El Tratado de Lisboa";
 choices[1][1] = "El Tratado de Amsterdam";
 choices[1][2] = "El Tratado de Niza";
 choices[1][3] = "El Acta &Uacute;nica Europea";
 answers[1] = 1;
 units[1] = ['15'];
 blocks[1] = ['A3'];
 comments[1] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[1] = 420


//  Id pregunta: 8908 Año de creación de pregunta: 2013
 questions[2]= "3)  &iquest;Cu&aacute;l es el est&aacute;ndar para UML 2?";
 choices[2]= new Array();
 choices[2][0] = "ISO/IEC 19501.";
 choices[2][1] = "ISO/IEC 19505.";
 choices[2][2] = "ISO/IEC 80211.";
 choices[2][3] = "ISO/IEC 80216.";
 answers[2] = 1;
 units[2] = ['89'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 8908. ";
 preguntaids[2] = 8908


//  Id pregunta: 7143 Año de creación de pregunta: 2010
 questions[3]= "4)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[3]= new Array();
 choices[3][0] = "RD 1494/2007";
 choices[3][1] = "RD 1497/2004";
 choices[3][2] = "RD 1449/2007";
 choices[3][3] = "RD 1479/2007";
 answers[3] = 0;
 units[3] = ['42'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 7143. ";
 preguntaids[3] = 7143


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[4]= "5)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[4]= new Array();
 choices[4][0] = "Ejecutivo";
 choices[4][1] = "Limitativo";
 choices[4][2] = "Estimativo";
 choices[4][3] = "Progresivo";
 answers[4] = 1;
 units[4] = ['11'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 265. Presupuestos generales";
 preguntaids[4] = 265


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[5]= "6)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[5]= new Array();
 choices[5][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[5][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[5][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[5][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[5] = 2;
 units[5] = ['26'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 527. AGE A1 2015";
 preguntaids[5] = 527


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[6]= "7)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[6]= new Array();
 choices[6][0] = "En sentencias switch para alterar el control de flujo.";
 choices[6][1] = "Para manejar excepciones.";
 choices[6][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[6][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[6] = 1;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 718. Junta de Extremadura A1 2015";
 preguntaids[6] = 718


//  Id pregunta: 9449 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[7]= new Array();
 choices[7][0] = "Una parte del espectro radioel&eacute;ctrico que usaba la TDT ha quedado liberada para otros servicios de comunicaciones";
 choices[7][1] = "Una parte del espectro digital.";
 choices[7][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[7][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[7] = 0;
 units[7] = ['115'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 9449. Examen TIC A1 2011";
 preguntaids[7] = 9449


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[8]= "9)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[8]= new Array();
 choices[8][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[8][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[8][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[8][3] = "A las Diputaciones y a las Comarcas.";
 answers[8] = 0;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 59. Constituci&oacute;n de 1978";
 preguntaids[8] = 59


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[9]= "10)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[9]= new Array();
 choices[9][0] = "Directiva 95/46/CE";
 choices[9][1] = "Directiva 1999/93/CE";
 choices[9][2] = "Directiva 2000/31/CE";
 choices[9][3] = "Directiva 2003/98/CE";
 answers[9] = 1;
 units[9] = ['77'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 790. Reglamento 910/2014";
 preguntaids[9] = 790


//  Id pregunta: 4460 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[10]= new Array();
 choices[10][0] = "Mediante mensajes SNMP";
 choices[10][1] = "Mediante mensajes LAP-B";
 choices[10][2] = "Mediante mensajes CMIP";
 choices[10][3] = "Mediante Data Streams";
 answers[10] = 0;
 units[10] = ['114'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4460. ";
 preguntaids[10] = 4460


//  Id pregunta: 10392 Año de creación de pregunta: 2015
 questions[11]= "12)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[11]= new Array();
 choices[11][0] = "0.05";
 choices[11][1] = "0.01";
 choices[11][2] = "0.1";
 choices[11][3] = "0.2";
 answers[11] = 2;
 units[11] = ['19'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 10392. ";
 preguntaids[11] = 10392


//  Id pregunta: 1726 Año de creación de pregunta: 2016
 questions[12]= "13)  Desde el punto de vista de la administraci&oacute;n, &iquest;cu&aacute;l es la opci&oacute;n adecuada para la distribuci&oacute;n de particiones del Sistema Operativo de servidor?";
 choices[12]= new Array();
 choices[12][0] = "Una partici&oacute;n para rutinas y programas del sistema operativo y para el log; otra partici&oacute;n de dump; y otra para los datos de usuario.";
 choices[12][1] = "Una partici&oacute;n para rutinas y programas del sistema operativo, para el log, y de dump; y otra para los datos de usuario.";
 choices[12][2] = "Una partici&oacute;n para rutinas y programas del sistema operativo y de dump; y otra para el log y los datos de usuario.";
 choices[12][3] = "Una partici&oacute;n para rutinas y programas del sistema operativo; otra para el log; otra de dump; y otra para los datos de usuario.";
 answers[12] = 3;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1726. ";
 preguntaids[12] = 1726


//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[13]= "14)  Acerca de las Autoridades de sellado de tiempo:";
 choices[13]= new Array();
 choices[13][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[13][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[13][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[13][3] = "Ninguna de las anteriores es correcta.";
 answers[13] = 1;
 units[13] = ['78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[13] = 6868


//  Id pregunta: 7442 Año de creación de pregunta: 2010
 questions[14]= "15)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[14]= new Array();
 choices[14][0] = "3D Secure";
 choices[14][1] = "UCAF";
 choices[14][2] = "Urbinet";
 choices[14][3] = "SET";
 answers[14] = 2;
 units[14] = ['75'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7442. ";
 preguntaids[14] = 7442


//  Id pregunta: 10933 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[15]= new Array();
 choices[15][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a 150.000 euros";
 choices[15][1] = "cuando al menos el 40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de 5.000 euros.";
 choices[15][2] = "No tienen que cumplir la ley de transparencia";
 choices[15][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[15] = 1;
 units[15] = ['22'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 10933. ";
 preguntaids[15] = 10933


//  Id pregunta: 5296 Año de creación de pregunta: 2006
 questions[16]= "17)  Internet 2:";
 choices[16]= new Array();
 choices[16][0] = "Es una red telem&aacute;tica superpuesta a la red Internet y que hace las funciones de backup.";
 choices[16][1] = "Es una red de fibra &oacute;ptica cuyo backbone est&aacute; constituido por GigaPop.";
 choices[16][2] = "Prev&eacute; velocidades de hasta 622 Mbps para usuarios particulares.";
 choices[16][3] = "Ninguna respuesta es correcta";
 answers[16] = 2;
 units[16] = ['103'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5296. ";
 preguntaids[16] = 5296


//  Id pregunta: 10558 Año de creación de pregunta: 2015
 questions[17]= "18)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de registrar las relaciones entre los componentes del servicio?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de niveles del servicio";
 choices[17][1] = "Gesti&oacute;n de porfolio de servicios";
 choices[17][2] = "Gesti&oacute;n de activos y configuraci&oacute;n del servicio (SACM)";
 choices[17][3] = "Gesti&oacute;n de incidencias";
 answers[17] = 2;
 units[17] = ['101'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10558. ";
 preguntaids[17] = 10558


//  Id pregunta: 6679 Año de creación de pregunta: 2009
 questions[18]= "19)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[18]= new Array();
 choices[18][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[18][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[18][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[18][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[18] = 2;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 6679. MAP 2008 A1";
 preguntaids[18] = 6679


//  Id pregunta: 9463 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[19]= new Array();
 choices[19][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[19][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[19][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 2;
 units[19] = ['61'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9463. B: El c&aacute;lculo relacional es de tipo declarativo.";
 preguntaids[19] = 9463


//  Id pregunta: 1575 Año de creación de pregunta: 2016
 questions[20]= "21)  En el &aacute;mbito del modelo TCP/IP, se&ntilde;ale cu&aacute;l de las siguientes siglas identifica un algoritmo de encaminamiento:";
 choices[20]= new Array();
 choices[20][0] = "NTP (Network Time Protocol)";
 choices[20][1] = "RIP (Routing Information Protocol)";
 choices[20][2] = "RPC (Remote Procedure Call)";
 choices[20][3] = "FTP (File Transfer Protocol)";
 answers[20] = 1;
 units[20] = ['109'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 1575. ";
 preguntaids[20] = 1575


//  Id pregunta: 4518 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[21]= new Array();
 choices[21][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[21][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[21][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[21][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[21] = 2;
 units[21] = ['106'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4518. ";
 preguntaids[21] = 4518


//  Id pregunta: 3137 Año de creación de pregunta: 2002
 questions[22]= "23)  La definici&oacute;n de la ofim&aacute;tica como la utilizaci&oacute;n de tecnolog&iacute;a para mejorar la realizaci&oacute;n de funciones de oficina se debe a:";
 choices[22]= new Array();
 choices[22][0] = "Hammer y Sirbu";
 choices[22][1] = "Olson y Lucas";
 choices[22][2] = "Eli y Nutt";
 choices[22][3] = "Carter y Huzan";
 answers[22] = 0;
 units[22] = ['52'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3137. ";
 preguntaids[22] = 3137


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[23]= "24)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[23]= new Array();
 choices[23][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[23][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[23][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[23][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[23] = 0;
 units[23] = ['12'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 329. Modelo econ&oacute;mico";
 preguntaids[23] = 329


//  Id pregunta: 2719 Año de creación de pregunta: 2002
 questions[24]= "25)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[24]= new Array();
 choices[24][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[24][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[24][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[24][3] = "Incorpora un microprocesador con memoria";
 answers[24] = 2;
 units[24] = ['77'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2719. ";
 preguntaids[24] = 2719


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[25]= "26)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[25][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[25][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[25][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[25] = 3;
 units[25] = ['22'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 511. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[25] = 511


//  Id pregunta: 7120 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[26]= new Array();
 choices[26][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[26][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[26][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[26][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[26] = 3;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 7120. Art&iacute;culo 6 RD 1671/2009";
 preguntaids[26] = 7120


//  Id pregunta: 8836 Año de creación de pregunta: 2013
 questions[27]= "28)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[27]= new Array();
 choices[27][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[27][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[27][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[27][3] = "La modulaci&oacute;n utilizada en GMS es GMSK";
 answers[27] = 2;
 units[27] = ['117'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8836. ";
 preguntaids[27] = 8836


//  Id pregunta: 2771 Año de creación de pregunta: 2002
 questions[28]= "29)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[28]= new Array();
 choices[28][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[28][1] = "Interfaz lenguaje de datos de usuario";
 choices[28][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[28][3] = "Interfaz lenguaje de datos interno";
 answers[28] = 2;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2771. ";
 preguntaids[28] = 2771


//  Id pregunta: 7848 Año de creación de pregunta: 2011
 questions[29]= "30)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[29]= new Array();
 choices[29][0] = "YAWL.";
 choices[29][1] = "ETL.";
 choices[29][2] = "XPDL.";
 choices[29][3] = "BPEL.";
 answers[29] = 1;
 units[29] = ['86'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 7848. Examen TIC A1 2010";
 preguntaids[29] = 7848


//  Id pregunta: 1432 Año de creación de pregunta: 2016
 questions[30]= "31)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:";
 choices[30]= new Array();
 choices[30][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[30][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[30][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[30][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[30] = 0;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 1432. ";
 preguntaids[30] = 1432


//  Id pregunta: 2145 Año de creación de pregunta: 2004
 questions[31]= "32)  Organismos de normalizaci&oacute;n europeos son";
 choices[31]= new Array();
 choices[31][0] = "CEN";
 choices[31][1] = "OSI";
 choices[31][2] = "IEEE";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 0;
 units[31] = ['48'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2145. ";
 preguntaids[31] = 2145


//  Id pregunta: 10786 Año de creación de pregunta: 2015
 questions[32]= "33)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[32]= new Array();
 choices[32][0] = "Ley 39/2015";
 choices[32][1] = "Ley 40/2015";
 choices[32][2] = "Ley 29/2015";
 choices[32][3] = "Ley 30/2015";
 answers[32] = 0;
 units[32] = ['7'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 10786. ";
 preguntaids[32] = 10786


//  Id pregunta: 10436 Año de creación de pregunta: 2015
 questions[33]= "34)  El valor estimado del contrato:";
 choices[33]= new Array();
 choices[33][0] = "Nos permite determinar si el contrato est&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[33][1] = "No incluye el IVA";
 choices[33][2] = "Incluye pr&oacute;rrogas y cualquier modificaci&oacute;n prevista sobre el presupuesto base de licitaci&oacute;n.";
 choices[33][3] = "Todas las respuestas son ciertas.";
 answers[33] = 3;
 units[33] = ['37'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 10436. ";
 preguntaids[33] = 10436


//  Id pregunta: 9431 Año de creación de pregunta: 2014
 questions[34]= "35)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[34]= new Array();
 choices[34][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[34][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[34][2] = "Cuando ha recibido toda la trama";
 choices[34][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[34] = 0;
 units[34] = ['112'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 9431. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";
 preguntaids[34] = 9431


//  Id pregunta: 1479 Año de creación de pregunta: 2016
 questions[35]= "36)  Un sistema distribuido, en oposici&oacute;n a un sistema monol&iacute;tico, permite mejorar:";
 choices[35]= new Array();
 choices[35][0] = "La velocidad de proceso del sistema.";
 choices[35][1] = "La escalabilidad del sistema.";
 choices[35][2] = "La portabilidad del sistema.";
 choices[35][3] = "La usabilidad del sistema.";
 answers[35] = 1;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1479. ";
 preguntaids[35] = 1479


//  Id pregunta: 8184 Año de creación de pregunta: 2011
 questions[36]= "37)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[36]= new Array();
 choices[36][0] = "Administraci&oacute;n de seguridad";
 choices[36][1] = "Programaci&oacute;n de aplicaciones";
 choices[36][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[36][3] = "Aseguramiento de la calidad";
 answers[36] = 1;
 units[36] = ['30'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 8184. Examen TIC A2 2010 interna";
 preguntaids[36] = 8184


//  Id pregunta: 950 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[37]= new Array();
 choices[37][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[37][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[37][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 1;
 units[37] = ['34', '84'];
 blocks[37] = ['B1', 'B3'];
 comments[37] = "Id Pregunta: 950. Metodologias &aacute;giles";
 preguntaids[37] = 950


//  Id pregunta: 7696 Año de creación de pregunta: 2010
 questions[38]= "39)  Seg&uacute;n la Ley 39/2015, con respecto a las notificaciones telem&aacute;ticas, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido en un plazo de:";
 choices[38]= new Array();
 choices[38][0] = "10 d&iacute;as naturales.";
 choices[38][1] = "10 d&iacute;as h&aacute;biles.";
 choices[38][2] = "20 d&iacute;as naturales.";
 choices[38][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido.";
 answers[38] = 0;
 units[38] = ['7'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 7696. Map 2007";
 preguntaids[38] = 7696


//  Id pregunta: 5235 Año de creación de pregunta: 2006
 questions[39]= "40)  La separaci&oacute;n entre subportadoras en la modulaci&oacute;n DMT de ADSL es de:";
 choices[39]= new Array();
 choices[39][0] = "4,3125 KHz";
 choices[39][1] = "4,3215 KHz";
 choices[39][2] = "4,315 KHz";
 choices[39][3] = "4,3175 KHz";
 answers[39] = 0;
 units[39] = ['108'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5235. ";
 preguntaids[39] = 5235


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[40]= "41)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[40]= new Array();
 choices[40][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[40][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[40][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[40][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[40] = 3;
 units[40] = ['20'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 489. Direcci&oacute;n p&uacute;blica";
 preguntaids[40] = 489


//  Id pregunta: 6272 Año de creación de pregunta: 2003
 questions[41]= "42)  Entre los beneficios del Ajuste Dimensional encontramos:";
 choices[41]= new Array();
 choices[41][0] = "Mayores costes.";
 choices[41][1] = "Tiempo de respuesta inconsistente.";
 choices[41][2] = "Integridad de datos.";
 choices[41][3] = "Interfaz de usuario m&aacute;s compleja.";
 answers[41] = 2;
 units[41] = ['95'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6272. ";
 preguntaids[41] = 6272


//  Id pregunta: 4072 Año de creación de pregunta: 2003
 questions[42]= "43)  &iquest;Cu&aacute;l no pertenece al an&aacute;lisis DAFO?";
 choices[42]= new Array();
 choices[42][0] = "debilidades";
 choices[42][1] = "Amenazas";
 choices[42][2] = "Flexibilidad";
 choices[42][3] = "Oportunidades";
 answers[42] = 2;
 units[42] = ['83'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4072. ";
 preguntaids[42] = 4072


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la respuesta falsa";
 choices[43]= new Array();
 choices[43][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[43][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[43][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[43][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[43] = 3;
 units[43] = ['22'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 516. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[43] = 516


//  Id pregunta: 1968 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la gesti&oacute;n documental es cierta?";
 choices[44]= new Array();
 choices[44][0] = "Gestiona diferentes tipos de datos: textos, sonidos, im&aacute;genes, etc.";
 choices[44][1] = "Todas son ciertas.";
 choices[44][2] = "Fomenta el uso racional de los recursos, la seguridad y la fiabilidad de la informaci&oacute;n.";
 choices[44][3] = "Aumenta de la productividad al organismo que la utiliza.";
 answers[44] = 1;
 units[44] = ['99'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1968. ";
 preguntaids[44] = 1968


//  Id pregunta: 1041 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n (articulo 157 de la ley 40/2015):";
 choices[45]= new Array();
 choices[45][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[45][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[45][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[45][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[45] = 1;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 1041. Ley 40/2015";
 preguntaids[45] = 1041


//  Id pregunta: 1254 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[46]= new Array();
 choices[46][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[46][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[46][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[46][3] = "Sancionar y publicar las leyes.";
 answers[46] = 2;
 units[46] = ['1'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 1254. ";
 preguntaids[46] = 1254


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[47]= "48)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[47]= new Array();
 choices[47][0] = "Discriminaci&oacute;n indirecta.";
 choices[47][1] = "Discriminaci&oacute;n directa.";
 choices[47][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[47][3] = "Discriminaci&oacute;n abusiva.";
 answers[47] = 0;
 units[47] = ['14'];
 blocks[47] = ['A3'];
 comments[47] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[47] = 374


//  Id pregunta: 1287 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale cual de las siguientes respuestas NO corresponde a una Norma T&eacute;cnica de Interoperabilidad seg&uacute;n el Real Decreto 4/2010 (Esquema Nacional de Interoperabilidad) en su Disposici&oacute;n adicional primera:";
 choices[48]= new Array();
 choices[48][0] = "Catalogo de est&aacute;ndares.";
 choices[48][1] = "Requisitos de conexi&oacute;n a la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas.";
 choices[48][2] = "Modelo de Datos para el intercambio de asientos entre las Entidades Registrales.";
 choices[48][3] = "Protocolos de comunicaci&oacute;n de red.";
 answers[48] = 3;
 units[48] = ['43'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 1287. ";
 preguntaids[48] = 1287


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[49][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[49][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[49][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[49] = 3;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 103. Uni&oacute;n Europea";
 preguntaids[49] = 103


//  Id pregunta: 3685 Año de creación de pregunta: 2002
 questions[50]= "51)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[50]= new Array();
 choices[50][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[50][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[50][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[50][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[50] = 3;
 units[50] = ['92'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3685. ";
 preguntaids[50] = 3685


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[51]= "52)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[51]= new Array();
 choices[51][0] = "Estrasburgo.";
 choices[51][1] = "Bruselas.";
 choices[51][2] = "Luxemburgo.";
 choices[51][3] = "Holanda.";
 answers[51] = 0;
 units[51] = ['5'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 115. Uni&oacute;n Europea";
 preguntaids[51] = 115


//  Id pregunta: 9848 Año de creación de pregunta: 2015
 questions[52]= "53)  En Scrum, el prop&oacute;sito de la retrospectiva del Sprint es:";
 choices[52]= new Array();
 choices[52][0] = "Revisar el estado del producto que se ha desarrollado durante el Sprint.";
 choices[52][1] = "Realizar una mejora continua del proceso.";
 choices[52][2] = "Que el Scrum Master comunique al equipo lo que deben mejorar para el siguiente Sprint.";
 choices[52][3] = "Asignar las tareas del siguiente Sprint a los diferentes miembros del equipo.";
 answers[52] = 1;
 units[52] = ['84'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 9848. ";
 preguntaids[52] = 9848


//  Id pregunta: 9301 Año de creación de pregunta: 2014
 questions[53]= "54)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[53]= new Array();
 choices[53][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[53][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[53][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[53][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[53] = 3;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 9301. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[53] = 9301


//  Id pregunta: 3414 Año de creación de pregunta: 2006
 questions[54]= "55)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[54]= new Array();
 choices[54][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[54][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[54][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[54][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[54] = 3;
 units[54] = ['68'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3414. ";
 preguntaids[54] = 3414


//  Id pregunta: 10393 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[55]= new Array();
 choices[55][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[55][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[55][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[55][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[55] = 2;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 10393. ";
 preguntaids[55] = 10393


//  Id pregunta: 1698 Año de creación de pregunta: 2016
 questions[56]= "57)  En terminolog&iacute;a de bases de datos, el lenguaje de definici&oacute;n de datos (LDD) es empleado para:";
 choices[56]= new Array();
 choices[56][0] = "Capacitar a los usuarios a acceder o manipular los datos seg&uacute;n est&eacute;n organizados por su modelo de datos.";
 choices[56][1] = "Conceder o suprimir privilegios a los usuarios, es decir, el control del acceso a los datos.";
 choices[56][2] = "Determinar la organizaci&oacute;n interna del modelo l&oacute;gico de los datos en una base de datos.";
 choices[56][3] = "Representar el flujo de datos entre procesos y almacenes de datos l&oacute;gicos.";
 answers[56] = 2;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1698. ";
 preguntaids[56] = 1698


//  Id pregunta: 4571 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[57]= new Array();
 choices[57][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[57][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[57][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[57][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[57] = 1;
 units[57] = ['105'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4571. ";
 preguntaids[57] = 4571


//  Id pregunta: 10349 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[58]= new Array();
 choices[58][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[58][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[58][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[58][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[58] = 2;
 units[58] = ['82'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10349. ";
 preguntaids[58] = 10349


//  Id pregunta: 3629 Año de creación de pregunta: 2002
 questions[59]= "60)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[59]= new Array();
 choices[59][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[59][1] = "Los indices se almacenan dentro de la base de datos";
 choices[59][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[59][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[59] = 3;
 units[59] = ['100'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3629. ";
 preguntaids[59] = 3629


//  Id pregunta: 10790 Año de creación de pregunta: 2015
 questions[60]= "61)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Cl@ve PIN de varios usos";
 choices[60][1] = "Cl@ve Permanente sin SMS";
 choices[60][2] = "Cl@ve PIN de un solo uso";
 choices[60][3] = "b) y c) son correctos";
 answers[60] = 2;
 units[60] = ['47'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 10790. ";
 preguntaids[60] = 10790


//  Id pregunta: 2911 Año de creación de pregunta: 2002
 questions[61]= "62)  Indique la respuesta falsa relativa a la monitorizaci&oacute;n del sistema operativo:";
 choices[61]= new Array();
 choices[61][0] = "Se puede hacer en tiempo real utilizando monitores del sistema";
 choices[61][1] = "Incluye herramientas de seguridad para asignar o denegar permisos de usuario en el sistema";
 choices[61][2] = "Se puede hacer a posteriori, utilizando herramientas que realicen an&aacute;lisis estad&iacute;sticos de los logs del sistema";
 choices[61][3] = "Permite detectar los cuellos de botella del sistema";
 answers[61] = 1;
 units[61] = ['56'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2911. ";
 preguntaids[61] = 2911


//  Id pregunta: 4039 Año de creación de pregunta: 2003
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[62]= new Array();
 choices[62][0] = "Eiffel";
 choices[62][1] = "C++";
 choices[62][2] = "Smalltalk";
 choices[62][3] = "C";
 answers[62] = 3;
 units[62] = ['85'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 4039. ";
 preguntaids[62] = 4039


//  Id pregunta: 9025 Año de creación de pregunta: 2014
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[63]= new Array();
 choices[63][0] = "Metacity de GNOME";
 choices[63][1] = "KWIN de KDE";
 choices[63][2] = "GTK de CDE";
 choices[63][3] = "Enlightenment de GNOME";
 answers[63] = 2;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 9025. Examen TIC A1 2013";
 preguntaids[63] = 9025


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[64]= new Array();
 choices[64][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[64][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[64][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[64][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[64] = 2;
 units[64] = ['12'];
 blocks[64] = ['A3'];
 comments[64] = "Id Pregunta: 334. Modelo econ&oacute;mico";
 preguntaids[64] = 334


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[65]= "66)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[65]= new Array();
 choices[65][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[65][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[65][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[65][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[65] = 3;
 units[65] = ['11'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 324. Presupuestos generales";
 preguntaids[65] = 324


//  Id pregunta: 9619 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[66]= new Array();
 choices[66][0] = "BSA (Business  Software Alliance)";
 choices[66][1] = "OpenMG (Open Mobile Group)";
 choices[66][2] = "OMA (Open Mobile Alliance)";
 choices[66][3] = "The Open Group";
 answers[66] = 2;
 units[66] = ['41'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 9619. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";
 preguntaids[66] = 9619


//  Id pregunta: 7368 Año de creación de pregunta: 2010
 questions[67]= "68)  En Oracle, un tablespace es:";
 choices[67]= new Array();
 choices[67][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[67][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[67][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[67][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[67] = 3;
 units[67] = ['61'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7368. Examen TIC B 2009";
 preguntaids[67] = 7368


//  Id pregunta: 6031 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;En cu&aacute;l de los siguientes procesos de M&eacute;trica v.3 se obtiene como producto de alguna de sus tareas los Procedimientos de Migraci&oacute;n y Carga Inicial de Datos?:";
 choices[68]= new Array();
 choices[68][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[68][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[68][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[68][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[68] = 2;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6031. TIC B 2007";
 preguntaids[68] = 6031


//  Id pregunta: 999 Año de creación de pregunta: 2016
 questions[69]= "70)  La organizaci&oacute;n en Departamentos ministeriales de la Administracion General del Estado no obsta a la existencia de:";
 choices[69]= new Array();
 choices[69][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[69][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[69][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[69][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[69] = 3;
 units[69] = ['4', '7', '8', '9'];
 blocks[69] = ['A1', 'A2'];
 comments[69] = "Id Pregunta: 999. Ley 40/2015";
 preguntaids[69] = 999


//  Id pregunta: 10421 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[70]= new Array();
 choices[70][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[70][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[70][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[70][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[70] = 1;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 10421. ";
 preguntaids[70] = 10421


//  Id pregunta: 1981 Año de creación de pregunta: 2016
 questions[71]= "72)  En el procesamiento cooperativo de arquitecturas cliente-servidor, &iquest;Cu&aacute;l de los siguientes NO es propio de dicho procesamiento cooperativo?";
 choices[71]= new Array();
 choices[71][0] = "Multiple Server";
 choices[71][1] = "Cooperaci&oacute;n de procesos paralelos";
 choices[71][2] = "Cooperaci&oacute;n de base de datos";
 choices[71][3] = "Cooperaci&oacute;n de balanceadores";
 answers[71] = 3;
 units[71] = ['55'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1981. ";
 preguntaids[71] = 1981


//  Id pregunta: 4140 Año de creación de pregunta: 2003
 questions[72]= "73)  Si por cada t&eacute;rmino, bien sea palabra clave, frase especial o &iacute;tem del tesauro, existe una lista de todos los documentos en los que aparece, a la que se suele a&ntilde;adir la longitud de esa lista (n&uacute;mero de referencias contenidas), estamos hablando de un siste";
 choices[72]= new Array();
 choices[72][0] = "De &iacute;ndices m&uacute;ltiples.";
 choices[72][1] = "De &iacute;ndices";
 choices[72][2] = "De listas.";
 choices[72][3] = "De &iacute;ndices invertidos.";
 answers[72] = 3;
 units[72] = ['99', '1'];
 blocks[72] = ['B3', 'A1'];
 comments[72] = "Id Pregunta: 4140. ";
 preguntaids[72] = 4140


//  Id pregunta: 8298 Año de creación de pregunta: 2011
 questions[73]= "74)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[73]= new Array();
 choices[73][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[73][1] = "En el Registro Civil.";
 choices[73][2] = "En el Registro Mercantil.";
 choices[73][3] = "En el Registro General del Ministerio de Justicia.";
 answers[73] = 0;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 8298. Examen UPM A2 2011";
 preguntaids[73] = 8298


//  Id pregunta: 2649 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[74]= new Array();
 choices[74][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[74][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[74][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[74][3] = "Todos las respuestas anteriores son correctas";
 answers[74] = 0;
 units[74] = ['54'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2649. ";
 preguntaids[74] = 2649


