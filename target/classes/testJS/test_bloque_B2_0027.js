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
//  Id pregunta: 6584 Año de creación de pregunta: 2009
 questions[0]= "1)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[0]= new Array();
 choices[0][0] = "Web Service Protocol Stack.";
 choices[0][1] = "Web Service Protocol Set.";
 choices[0][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[0][3] = "SOAP (Simple Object Access Protocol).";
 answers[0] = 0;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6584. MAP 2008 A2";
 preguntaids[0] = 6584


//  Id pregunta: 6566 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[1]= new Array();
 choices[1][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[1][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[1][2] = "No, no dispone de esa capacidad";
 choices[1][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[1] = 3;
 units[1] = ['78'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 6566. ";
 preguntaids[1] = 6566


//  Id pregunta: 6619 Año de creación de pregunta: 2009
 questions[2]= "3)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[2]= new Array();
 choices[2][0] = "4";
 choices[2][1] = "5.3";
 choices[2][2] = "5.5";
 choices[2][3] = "6";
 answers[2] = 0;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6619. ";
 preguntaids[2] = 6619


//  Id pregunta: 6633 Año de creación de pregunta: 2009
 questions[3]= "4)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[3]= new Array();
 choices[3][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[3][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[3][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[3][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[3] = 1;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6633. MAP 2008 A1";
 preguntaids[3] = 6633


//  Id pregunta: 6562 Año de creación de pregunta: 2003
 questions[4]= "5)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[4]= new Array();
 choices[4][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[4][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[4][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[4][3] = "Ninguna de las anteriores es correcta";
 answers[4] = 0;
 units[4] = ['67'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 6562. ";
 preguntaids[4] = 6562


//  Id pregunta: 6587 Año de creación de pregunta: 2009
 questions[5]= "6)  Referido a OLAP, &iquest;cu&aacute;l es el significado m&aacute;s aproximado de Drill-Across?";
 choices[5]= new Array();
 choices[5][0] = "Navegar hacia un mayor nivel de agregaci&oacute;n.";
 choices[5][1] = "Moverse entre cubos.";
 choices[5][2] = "Descender a un menor nivel de agregaci&oacute;n.";
 choices[5][3] = "Elecci&oacute;n del n&uacute;mero de dimensiones a visualizar.";
 answers[5] = 1;
 units[5] = ['72'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6587. ";
 preguntaids[5] = 6587


//  Id pregunta: 6569 Año de creación de pregunta: 2003
 questions[6]= "7)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[6]= new Array();
 choices[6][0] = "El ciudadano";
 choices[6][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[6][2] = "La Direcci&oacute;n General de la Polic&iacute;a";
 choices[6][3] = "Es una zona p&uacute;blica";
 answers[6] = 2;
 units[6] = ['78'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6569. ";
 preguntaids[6] = 6569


//  Id pregunta: 6570 Año de creación de pregunta: 2003
 questions[7]= "8)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[7]= new Array();
 choices[7][0] = "Zona p&uacute;blica";
 choices[7][1] = "Zona de seguridad";
 choices[7][2] = "Zona privada";
 choices[7][3] = "Zona confidencial";
 answers[7] = 3;
 units[7] = ['78'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 6570. ";
 preguntaids[7] = 6570


//  Id pregunta: 6618 Año de creación de pregunta: 2009
 questions[8]= "9)  Acerca de OpenOffice, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[8]= new Array();
 choices[8][0] = "Gracias a la ingenier&iacute;a inversa, puede manejar archivos .doc de Microsoft Office.";
 choices[8][1] = "Se puede utilizar en la mayor&iacute;a de sistemas de tipo UNIX salvo en Mac OS X.";
 choices[8][2] = "Sun Microsystems financia su desarrollo.";
 choices[8][3] = "Su antecesor fue StarOffice.";
 answers[8] = 1;
 units[8] = ['66'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6618. ";
 preguntaids[8] = 6618


//  Id pregunta: 6531 Año de creación de pregunta: 2003
 questions[9]= "10)  Indique cu&aacute;l de las siguientes opciones es err&oacute;nea:";
 choices[9]= new Array();
 choices[9][0] = "Un sistema de almacenamiento NAS tiene la ventaja de que no sobrecarga la red";
 choices[9][1] = "En un sistema de almacenamiento DAS se aprovechan los excedentes de los nodos";
 choices[9][2] = "Las siglas SAN hacen referencia a &quot;Storage Area Network&quot;";
 choices[9][3] = "Un dispositivo NAS comparte ficheros, mientras que en una SAN se comparten dispositivos de bloques";
 answers[9] = 0;
 units[9] = ['53'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 6531. ";
 preguntaids[9] = 6531


//  Id pregunta: 6612 Año de creación de pregunta: 2009
 questions[10]= "11)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[10]= new Array();
 choices[10][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[10][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[10][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[10][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[10] = 1;
 units[10] = ['76'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6612. ";
 preguntaids[10] = 6612


//  Id pregunta: 6592 Año de creación de pregunta: 2009
 questions[11]= "12)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[11]= new Array();
 choices[11][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[11][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[11][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[11][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[11] = 2;
 units[11] = ['74'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 6592. MAP 2008 A1";
 preguntaids[11] = 6592


//  Id pregunta: 6529 Año de creación de pregunta: 2003
 questions[12]= "13)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[12]= new Array();
 choices[12][0] = "Dos discos";
 choices[12][1] = "Tres discos";
 choices[12][2] = "Un disco";
 choices[12][3] = "Cuatro discos";
 answers[12] = 1;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 6529. ";
 preguntaids[12] = 6529


//  Id pregunta: 6526 Año de creación de pregunta: 2003
 questions[13]= "14)  Indique cu&aacute;l de las siguientes respuestas es err&oacute;nea:";
 choices[13]= new Array();
 choices[13][0] = "Un m&oacute;dulo SODIMM posee 200 contactos";
 choices[13][1] = "Existen m&oacute;dulos DIMM de 194 contactos";
 choices[13][2] = "Existen  m&oacute;dulos DIMM de 184 contactos";
 choices[13][3] = "Las siglas DIMM hacen referencia a &quot;Dual Inline Memory Module&quot;";
 answers[13] = 1;
 units[13] = ['52'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6526. ";
 preguntaids[13] = 6526


//  Id pregunta: 6564 Año de creación de pregunta: 2003
 questions[14]= "15)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[14]= new Array();
 choices[14][0] = "Certificado de autenticaci&oacute;n";
 choices[14][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[14][2] = "Datos biom&eacute;tricos";
 choices[14][3] = "Claves privadas del ciudadano";
 answers[14] = 1;
 units[14] = ['78'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6564. ";
 preguntaids[14] = 6564


//  Id pregunta: 6534 Año de creación de pregunta: 2003
 questions[15]= "16)  Indique cu&aacute;l de los siguientes no se trata de un principio gu&iacute;a que defina reglas b&aacute;sicas para el desarrollo, mantenimiento y uso de arquitecturas SOA:";
 choices[15]= new Array();
 choices[15][0] = "Conceptualizaci&oacute;n";
 choices[15][1] = "Interoperabilidad";
 choices[15][2] = "Componentizaci&oacute;n";
 choices[15][3] = "Reutilizaci&oacute;n";
 answers[15] = 0;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6534. ";
 preguntaids[15] = 6534


//  Id pregunta: 6533 Año de creación de pregunta: 2003
 questions[16]= "17)  Acerca de los sistemas operativos, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[16]= new Array();
 choices[16][0] = "Un  S.O. en Red da la visi&oacute;n de estar ejecut&aacute;ndose en una &uacute;nica m&aacute;quina, no en m&aacute;quinas independientes";
 choices[16][1] = "Los S.O. Distribuidos se ejecutan sobre un conjunto de nodos independientes conectados en red, pero no hacen creer al usuario que se trate de un sistema centralizado";
 choices[16][2] = "En un S.O. en Red cada m&aacute;quina ejecuta una copia del S.O.";
 choices[16][3] = "Los sistemas operativos distribuidos fueron el punto de partida para la implementaci&oacute;n de sistemas operativos centralizados";
 answers[16] = 2;
 units[16] = ['55'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6533. ";
 preguntaids[16] = 6533


//  Id pregunta: 6610 Año de creación de pregunta: 2009
 questions[17]= "18)  &iquest;Cu&aacute;l es la longitud efectiva aproximada de clave del algoritmo Triple DES?";
 choices[17]= new Array();
 choices[17][0] = "112 (2x56) bits";
 choices[17][1] = "128 (2x64) bits";
 choices[17][2] = "168 (3x56) bits";
 choices[17][3] = "192 (3x64) bits";
 answers[17] = 0;
 units[17] = ['76'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 6610. ";
 preguntaids[17] = 6610


//  Id pregunta: 6571 Año de creación de pregunta: 2003
 questions[18]= "19)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[18]= new Array();
 choices[18][0] = "Claves privadas del ciudadano";
 choices[18][1] = "Certificado de autenticaci&oacute;n";
 choices[18][2] = "Claves p&uacute;blicas del ciudadano";
 choices[18][3] = "Certificado de firma";
 answers[18] = 2;
 units[18] = ['78'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6571. ";
 preguntaids[18] = 6571


//  Id pregunta: 6574 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[19]= new Array();
 choices[19][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[19][1] = "A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[19][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[19][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[19] = 1;
 units[19] = ['78'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6574. ";
 preguntaids[19] = 6574


//  Id pregunta: 6582 Año de creación de pregunta: 2009
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[20]= new Array();
 choices[20][0] = "JAXB";
 choices[20][1] = "AWT";
 choices[20][2] = "AXIS";
 choices[20][3] = "WSE";
 answers[20] = 1;
 units[20] = ['55'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6582. MAP 2008 A2";
 preguntaids[20] = 6582


//  Id pregunta: 6557 Año de creación de pregunta: 2003
 questions[21]= "22)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[21]= new Array();
 choices[21][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[21][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[21][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[21][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[21] = 2;
 units[21] = ['77'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6557. ";
 preguntaids[21] = 6557


//  Id pregunta: 6615 Año de creación de pregunta: 2009
 questions[22]= "23)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[22]= new Array();
 choices[22][0] = "Fenomenol&oacute;gica";
 choices[22][1] = "Facial";
 choices[22][2] = "De Bradley";
 choices[22][3] = "Perceptr&oacute;n";
 answers[22] = 3;
 units[22] = ['67'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6615. ";
 preguntaids[22] = 6615


//  Id pregunta: 6609 Año de creación de pregunta: 2009
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[23]= new Array();
 choices[23][0] = "Definici&oacute;n del tipo de contenido";
 choices[23][1] = "Resumen del mensaje";
 choices[23][2] = "Sello de tiempo";
 choices[23][3] = "Atributos identificativos del certificado del firmante";
 answers[23] = 2;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 6609. ";
 preguntaids[23] = 6609


//  Id pregunta: 6580 Año de creación de pregunta: 2003
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[24]= new Array();
 choices[24][0] = "Funciona s&oacute;lo sobre HTTP";
 choices[24][1] = "Tiene como base XML";
 choices[24][2] = "La cabecera header es opcional";
 choices[24][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[24] = 0;
 units[24] = ['55'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 6580. ";
 preguntaids[24] = 6580


//  Id pregunta: 6596 Año de creación de pregunta: 2009
 questions[25]= "26)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript";
 choices[25]= new Array();
 choices[25][0] = "Microsoft";
 choices[25][1] = "SUN";
 choices[25][2] = "Netscape";
 choices[25][3] = "W3C";
 answers[25] = 2;
 units[25] = ['62'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6596. MAP 2008 A1";
 preguntaids[25] = 6596


//  Id pregunta: 6606 Año de creación de pregunta: 2009
 questions[26]= "27)  &iquest;Qu&eacute; es el efecto avalancha en una funci&oacute;n hash?";
 choices[26]= new Array();
 choices[26][0] = "Una peque&ntilde;a variaci&oacute;n en la longitud del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[26][1] = "Una peque&ntilde;a variaci&oacute;n del contenido del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[26][2] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una peque&ntilde;a variaci&oacute;n en la longitud del resumen";
 choices[26][3] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una gran variaci&oacute;n en el contenido del resumen";
 answers[26] = 3;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6606. ";
 preguntaids[26] = 6606


//  Id pregunta: 6583 Año de creación de pregunta: 2009
 questions[27]= "28)  Seleccione la opci&oacute;n correcta:";
 choices[27]= new Array();
 choices[27][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[27][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[27][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[27][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[27] = 2;
 units[27] = ['55'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6583. MAP 2008 A2";
 preguntaids[27] = 6583


//  Id pregunta: 6530 Año de creación de pregunta: 2003
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[28]= new Array();
 choices[28][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[28][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[28][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0";
 choices[28][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[28] = 3;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 6530. ";
 preguntaids[28] = 6530


//  Id pregunta: 6579 Año de creación de pregunta: 2003
 questions[29]= "30)  Cu&aacute;l de los siguientes no se encuentra entre los beneficios que puede obtener una organizaci&oacute;n que adopte SOA:";
 choices[29]= new Array();
 choices[29][0] = "Mejora en la interoperabilidad de servicios";
 choices[29][1] = "Facilidad para el desarrollo de aplicaciones fuertemente acopladas";
 choices[29][2] = "Facilidad para abordar modelos de negocios basados en colaboraci&oacute;n con otros entes (socios, proveedores)";
 choices[29][3] = "Poder para reemplazar elementos de la capa de aplicaci&oacute;n sin disrupci&oacute;n en el proceso de negocio";
 answers[29] = 1;
 units[29] = ['55'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6579. ";
 preguntaids[29] = 6579


//  Id pregunta: 6593 Año de creación de pregunta: 2009
 questions[30]= "31)  El XSLT transforma:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo de XML a XML";
 choices[30][1] = "De XML a otro documento";
 choices[30][2] = "S&oacute;lo de XML a HTML";
 choices[30][3] = "De un documento a XML";
 answers[30] = 1;
 units[30] = ['74'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 6593. MAP 2008 A1";
 preguntaids[30] = 6593


//  Id pregunta: 6578 Año de creación de pregunta: 2003
 questions[31]= "32)  BPEL se corresponde con:";
 choices[31]= new Array();
 choices[31][0] = "Un lenguaje estandarizado por OASIS para la composici&oacute;n de servicios web";
 choices[31][1] = "Un formato XML que se utiliza para describir servicios Web";
 choices[31][2] = "Un protocolo est&aacute;ndar creado por Microsoft, IBM y otros, que define c&oacute;mo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML";
 choices[31][3] = "Un consorcio internacional sin fines de lucro que orienta el desarrollo, la convergencia y la adopci&oacute;n de los est&aacute;ndares e-business";
 answers[31] = 0;
 units[31] = ['55'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 6578. ";
 preguntaids[31] = 6578


//  Id pregunta: 6523 Año de creación de pregunta: 2003
 questions[32]= "33)  Una soluci&oacute;n basada en Grid Computing ser&iacute;a adecuada para:";
 choices[32]= new Array();
 choices[32][0] = "Obtener rendimientos de pico";
 choices[32][1] = "Aplicaciones multiproceso";
 choices[32][2] = "Entornos de trabajo con productividad sostenida";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = 2;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6523. ";
 preguntaids[32] = 6523


//  Id pregunta: 6599 Año de creación de pregunta: 2009
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos NO sirve para seleccionar la p&aacute;gina a descargar tras un fallo de p&aacute;gina?";
 choices[33]= new Array();
 choices[33][0] = "FIFO";
 choices[33][1] = "Aleatoria";
 choices[33][2] = "SJF";
 choices[33][3] = "NRU";
 answers[33] = 2;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 6599. ";
 preguntaids[33] = 6599


//  Id pregunta: 6572 Año de creación de pregunta: 2003
 questions[34]= "35)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[34]= new Array();
 choices[34][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[34][1] = "Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[34][2] = "No tiene valor jur&iacute;dico";
 choices[34][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[34] = 1;
 units[34] = ['78'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6572. ";
 preguntaids[34] = 6572


//  Id pregunta: 6605 Año de creación de pregunta: 2009
 questions[35]= "36)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[35]= new Array();
 choices[35][0] = "Sirve para firmar documentos";
 choices[35][1] = "Sirve para autenticar";
 choices[35][2] = "Sirve para cifrar";
 choices[35][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[35] = 2;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6605. ";
 preguntaids[35] = 6605


//  Id pregunta: 6555 Año de creación de pregunta: 2003
 questions[36]= "37)  En una arquitectura Java EE, &iquest;d&oacute;nde situar&iacute;a un JSP?";
 choices[36]= new Array();
 choices[36][0] = "En el servidor web";
 choices[36][1] = "En el contenedor web";
 choices[36][2] = "En el contenedor de EJBs";
 choices[36][3] = "En el navegador Web";
 answers[36] = 1;
 units[36] = ['64'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6555. ";
 preguntaids[36] = 6555


//  Id pregunta: 6611 Año de creación de pregunta: 2009
 questions[37]= "38)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[37]= new Array();
 choices[37][0] = "64, 128, 256 bits";
 choices[37][1] = "128, 192, 256 bits";
 choices[37][2] = "128, 256, 512 bits";
 choices[37][3] = "128, 256, 384 bits";
 answers[37] = 1;
 units[37] = ['76'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6611. ";
 preguntaids[37] = 6611


//  Id pregunta: 6594 Año de creación de pregunta: 2009
 questions[38]= "39)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[38]= new Array();
 choices[38][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[38][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[38][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[38][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[38] = 1;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6594. MAP 2008 A2";
 preguntaids[38] = 6594


//  Id pregunta: 6601 Año de creación de pregunta: 2009
 questions[39]= "40)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[39]= new Array();
 choices[39][0] = "S&iacute;, siempre";
 choices[39][1] = "No, en ning&uacute;n caso";
 choices[39][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[39][3] = "S&iacute;, si es firma electr&oacute;nica cualificada";
 answers[39] = 3;
 units[39] = ['77'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 6601. Reglamento 910/2014";
 preguntaids[39] = 6601


//  Id pregunta: 6524 Año de creación de pregunta: 2003
 questions[40]= "41)  Una soluci&oacute;n RISC se caracteriza por:";
 choices[40]= new Array();
 choices[40][0] = "Pocos formatos de instrucci&oacute;n (longitud fija)";
 choices[40][1] = "Muchos modos de direccionamiento";
 choices[40][2] = "Dos instrucciones de almacenamiento (load/store)";
 choices[40][3] = "Tanto a) como c)";
 answers[40] = 3;
 units[40] = ['49'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6524. ";
 preguntaids[40] = 6524


//  Id pregunta: 6581 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[41]= new Array();
 choices[41][0] = "SOAP";
 choices[41][1] = "UDDI";
 choices[41][2] = "XFSS";
 choices[41][3] = "HTTP";
 answers[41] = 2;
 units[41] = ['55'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 6581. ";
 preguntaids[41] = 6581


//  Id pregunta: 6603 Año de creación de pregunta: 2009
 questions[42]= "43)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[42]= new Array();
 choices[42][0] = "Emplean un alfabeto de salida con m&aacute;s s&iacute;mbolos que el alfabeto de entrada.";
 choices[42][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[42][2] = "Se sustituye cada car&aacute;cter del texto original siempre por otro car&aacute;cter determinado";
 choices[42][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[42] = 2;
 units[42] = ['76'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 6603. ";
 preguntaids[42] = 6603


//  Id pregunta: 6604 Año de creación de pregunta: 2009
 questions[43]= "44)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica monogr&aacute;mica?";
 choices[43]= new Array();
 choices[43][0] = "Cada letra del mensaje original es sustituido por s&oacute;lo una otra letra, n&uacute;mero o s&iacute;mbolo";
 choices[43][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[43][2] = "Cada letra del mensaje original puede ser sustituida por m&aacute;s de una letra, n&uacute;mero o s&iacute;mbolo";
 choices[43][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[43] = 0;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6604. ";
 preguntaids[43] = 6604


//  Id pregunta: 6560 Año de creación de pregunta: 2003
 questions[44]= "45)  Indique la respuesta incorrecta en relaci&oacute;n a Sistemas de Informaci&oacute;n Geogr&aacute;ficos:";
 choices[44]= new Array();
 choices[44][0] = "El t&eacute;rmino Clearinghouse se refiere al conjunto de datos marco utilizado en el Proyecto Dublin Core.";
 choices[44][1] = "El est&aacute;ndar m&aacute;s extendido para la implementaci&oacute;n de servicios de cat&aacute;logo es el ISO 23950.";
 choices[44][2] = "ISO 19110 se ocupa de la metodolog&iacute;a de catalogaci&oacute;n de objetos geogr&aacute;ficos.";
 choices[44][3] = "ISO ha producido el ISO 19115 Metadatos.";
 answers[44] = 0;
 units[44] = ['71'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6560. ";
 preguntaids[44] = 6560


//  Id pregunta: 6532 Año de creación de pregunta: 2003
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[45]= new Array();
 choices[45][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[45][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[45][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[45][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[45] = 3;
 units[45] = ['54'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 6532. ";
 preguntaids[45] = 6532


//  Id pregunta: 6586 Año de creación de pregunta: 2009
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un tipo de modelo de datos multidimensional?";
 choices[46]= new Array();
 choices[46][0] = "HOLAP.";
 choices[46][1] = "DOLAP.";
 choices[46][2] = "MOLAP.";
 choices[46][3] = "ROLAP.";
 answers[46] = 1;
 units[46] = ['72'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6586. ";
 preguntaids[46] = 6586


//  Id pregunta: 6554 Año de creación de pregunta: 2003
 questions[47]= "48)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[47]= new Array();
 choices[47][0] = "abstraction inversion";
 choices[47][1] = "session fa&Ccedil;ade";
 choices[47][2] = "model view controler";
 choices[47][3] = "Data Access Objects";
 answers[47] = 0;
 units[47] = ['64'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 6554. ";
 preguntaids[47] = 6554


//  Id pregunta: 6588 Año de creación de pregunta: 2009
 questions[48]= "49)  &iquest;Qu&eacute; es abiword?";
 choices[48]= new Array();
 choices[48][0] = "Un comando para contar palabras o bytes en archivos de texto.";
 choices[48][1] = "Un procesador de texto";
 choices[48][2] = "Un conversor de formatos multimedia.";
 choices[48][3] = "Un editor de archivos de sonido.";
 answers[48] = 1;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6588. ";
 preguntaids[48] = 6588


//  Id pregunta: 6616 Año de creación de pregunta: 2009
 questions[49]= "50)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[49]= new Array();
 choices[49][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[49][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[49][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[49][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[49] = 3;
 units[49] = ['66'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6616. ";
 preguntaids[49] = 6616


//  Id pregunta: 6634 Año de creación de pregunta: 2009
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[50]= new Array();
 choices[50][0] = "Windows Presentation Foundation";
 choices[50][1] = "ASP.NET";
 choices[50][2] = "ADO.NET";
 choices[50][3] = "ACY.NET";
 answers[50] = 3;
 units[50] = ['63'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6634. MAP 2008 A1";
 preguntaids[50] = 6634


//  Id pregunta: 6559 Año de creación de pregunta: 2003
 questions[51]= "52)  Indique la respuesta incorrecta respecto a GIS modelo de datos vectorial.";
 choices[51]= new Array();
 choices[51][0] = "La caracter&iacute;stica mas importante del modelo vectorial frente al r&aacute;ster es la capacidad de gestion topol&oacute;gica de sus elementos.";
 choices[51][1] = "La mayor riqueza y capacidad de representaci&oacute;n de la realidad espacial, se traduce en una mayor complejidad de este modelo vectorial en comparaci&oacute;n con el sencillo modelo r&aacute;ster.";
 choices[51][2] = "En el modelo de datos vectorial podemos hablar por tanto de una georreferenciaci&oacute;n continua, sin que la resoluci&oacute;n suponga una limitaci&oacute;n como suced&iacute;a en el modelo r&aacute;ster.";
 choices[51][3] = "Ninguna de las anteriores.";
 answers[51] = 3;
 units[51] = ['71'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 6559. ";
 preguntaids[51] = 6559


//  Id pregunta: 6567 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[52][1] = "La plataforma @firma";
 choices[52][2] = "La Entidad P&uacute;blica Red.es";
 choices[52][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[52] = 3;
 units[52] = ['78'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6567. Real Decreto 415/2016";
 preguntaids[52] = 6567


//  Id pregunta: 6527 Año de creación de pregunta: 2003
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[53]= new Array();
 choices[53][0] = "El bus ISA es posterior al bus PCI";
 choices[53][1] = "El bus EISA es anterior al bus ISA";
 choices[53][2] = "El bus PCI es anterior al bus AGP";
 choices[53][3] = "El bus USB es posterior al bus AGP";
 answers[53] = 2;
 units[53] = ['52'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6527. ";
 preguntaids[53] = 6527


//  Id pregunta: 6595 Año de creación de pregunta: 2009
 questions[54]= "55)  Elija la opci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[54][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[54][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[54][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[54] = 2;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6595. MAP 2008 A2";
 preguntaids[54] = 6595


//  Id pregunta: 6535 Año de creación de pregunta: 2003
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de los siguientes es el protocolo utilizado para el registro y publicaci&oacute;n de servicios web:";
 choices[55]= new Array();
 choices[55][0] = "SOAP";
 choices[55][1] = "UDDI";
 choices[55][2] = "WSDL";
 choices[55][3] = "UDIT";
 answers[55] = 1;
 units[55] = ['55'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6535. ";
 preguntaids[55] = 6535


//  Id pregunta: 6590 Año de creación de pregunta: 2009
 questions[56]= "57)  Desde un repositorio oficial de SUSE Linux Enterprise Server usted se descarga los archivos binarios de una aplicaci&oacute;n empaquetados del modo est&aacute;ndar de esta distribuci&oacute;n. &iquest;Cu&aacute;l es la extensi&oacute;n del archivo?";
 choices[56]= new Array();
 choices[56][0] = "rpm";
 choices[56][1] = "tar.gz";
 choices[56][2] = "deb";
 choices[56][3] = "tgz";
 answers[56] = 0;
 units[56] = ['57'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 6590. ";
 preguntaids[56] = 6590


//  Id pregunta: 6607 Año de creación de pregunta: 2009
 questions[57]= "58)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[57]= new Array();
 choices[57][0] = "64 bits";
 choices[57][1] = "128 bits";
 choices[57][2] = "160 bits";
 choices[57][3] = "224 bits";
 answers[57] = 2;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 6607. ";
 preguntaids[57] = 6607


//  Id pregunta: 6525 Año de creación de pregunta: 2003
 questions[58]= "59)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[58]= new Array();
 choices[58][0] = "Muchos modos de direccionamiento";
 choices[58][1] = "Unidad de control cableada";
 choices[58][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[58][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[58] = 1;
 units[58] = ['49'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6525. ";
 preguntaids[58] = 6525


//  Id pregunta: 6597 Año de creación de pregunta: 2009
 questions[59]= "60)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Lenguaje de Consulta de datos.";
 choices[59][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[59][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[59][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[59] = 3;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6597. MAP 2008 A2";
 preguntaids[59] = 6597


//  Id pregunta: 6528 Año de creación de pregunta: 2003
 questions[60]= "61)  La velocidad de transmisi&oacute;n seg&uacute;n la Recomendaci&oacute;n V.34 de la UIT-T es:";
 choices[60]= new Array();
 choices[60][0] = "33,2 Kbps";
 choices[60][1] = "33,4 Kbps";
 choices[60][2] = "33,6 Kbps";
 choices[60][3] = "33,8 Kbps";
 answers[60] = 2;
 units[60] = ['52'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6528. ";
 preguntaids[60] = 6528


//  Id pregunta: 6589 Año de creación de pregunta: 2009
 questions[61]= "62)  &iquest;Cu&aacute;l de estos sistemas de archivos no est&aacute; soportado de forma nativa por el kernel de Linux?";
 choices[61]= new Array();
 choices[61][0] = "ZFS";
 choices[61][1] = "XFS";
 choices[61][2] = "ext4";
 choices[61][3] = "ReiserFS";
 answers[61] = 0;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6589. ZFS es un sistema de archivos desarrollado por Sun para Solaris";
 preguntaids[61] = 6589


//  Id pregunta: 6608 Año de creación de pregunta: 2009
 questions[62]= "63)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[62]= new Array();
 choices[62][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[62][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[62][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[62][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[62] = 1;
 units[62] = ['77'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6608. ";
 preguntaids[62] = 6608


//  Id pregunta: 6576 Año de creación de pregunta: 2003
 questions[63]= "64)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[63]= new Array();
 choices[63][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[63][1] = "Chip RFID";
 choices[63][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[63][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[63] = 1;
 units[63] = ['78'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6576. ";
 preguntaids[63] = 6576


//  Id pregunta: 6573 Año de creación de pregunta: 2003
 questions[64]= "65)  Los certificados del DNI electr&oacute;nico:";
 choices[64]= new Array();
 choices[64][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[64][1] = "Se expiden siempre y vienen activados";
 choices[64][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[64][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[64] = 3;
 units[64] = ['78'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 6573. ";
 preguntaids[64] = 6573


//  Id pregunta: 6558 Año de creación de pregunta: 2003
 questions[65]= "66)  Indique la respuesta no correcta respecto a GIS modelo de datos r&aacute;ster.";
 choices[65]= new Array();
 choices[65][0] = "En el modelo de datos r&aacute;ster, la regi&oacute;n a modelizar se considera dividida seg&uacute;n una matriz o malla rectangular de celdas (p&iacute;xeles) de id&eacute;ntico tama&ntilde;o y de formageneralmente cuadrada.";
 choices[65][1] = "Como cr&iacute;ticas al modelo deben se&ntilde;alarse la carencia de informaci&oacute;n topol&oacute;gica acerca de las relaciones espaciales entre las entidades.";
 choices[65][2] = "En el modelo de datos r&aacute;ster permite una representaci&oacute;n expl&iacute;cita de entidades f&iacute;sicas del mundo real.";
 choices[65][3] = "Ofrece escasa eficiencia de cara a la representaci&oacute;n de la variabilidad espacial, al estar basado en una frecuencia de muestreo constante.";
 answers[65] = 2;
 units[65] = ['71'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6558. ";
 preguntaids[65] = 6558


//  Id pregunta: 6602 Año de creación de pregunta: 2009
 questions[66]= "67)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[66]= new Array();
 choices[66][0] = "Solamente si es firma reconocida";
 choices[66][1] = "Solamente si es firma cualificada";
 choices[66][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[66][3] = "Ninguna de las anteriores es correcta";
 answers[66] = 2;
 units[66] = ['77'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 6602. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";
 preguntaids[66] = 6602


//  Id pregunta: 6565 Año de creación de pregunta: 2003
 questions[67]= "68)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[67]= new Array();
 choices[67][0] = "Zona de seguridad";
 choices[67][1] = "Zona p&uacute;blica";
 choices[67][2] = "Zona privada";
 choices[67][3] = "Zona confidencial";
 answers[67] = 0;
 units[67] = ['78'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6565. ";
 preguntaids[67] = 6565


//  Id pregunta: 6617 Año de creación de pregunta: 2009
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[68]= new Array();
 choices[68][0] = "SecureBSD";
 choices[68][1] = "NetBSD";
 choices[68][2] = "DesktopBSD";
 choices[68][3] = "DragonflyBSD";
 answers[68] = 0;
 units[68] = ['66'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6617. ";
 preguntaids[68] = 6617


//  Id pregunta: 6568 Año de creación de pregunta: 2003
 questions[69]= "70)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre:";
 choices[69]= new Array();
 choices[69][0] = "Zona p&uacute;blica";
 choices[69][1] = "Zona de seguridad";
 choices[69][2] = "Zona privada";
 choices[69][3] = "Zona confidencial";
 answers[69] = 1;
 units[69] = ['78'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6568. ";
 preguntaids[69] = 6568


//  Id pregunta: 6536 Año de creación de pregunta: 2003
 questions[70]= "71)  Se&ntilde;ale cu&aacute;l de las siguientes opciones relativas a la tecnolog&iacute;a de web services es verdadera:";
 choices[70]= new Array();
 choices[70][0] = "UDDI se utiliza como lenguaje de definici&oacute;n de servicios web";
 choices[70][1] = "SOAP deriva de XML-RPC";
 choices[70][2] = "WSDL permita la localizaci&oacute;n y publicaci&oacute;n de servicios web";
 choices[70][3] = "Ninguna de las anteriores";
 answers[70] = 1;
 units[70] = ['55'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6536. ";
 preguntaids[70] = 6536


//  Id pregunta: 6556 Año de creación de pregunta: 2003
 questions[71]= "72)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[71]= new Array();
 choices[71][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[71][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[71][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[71][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[71] = 2;
 units[71] = ['77'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 6556. ";
 preguntaids[71] = 6556


//  Id pregunta: 6591 Año de creación de pregunta: 2009
 questions[72]= "73)  &iquest;En cu&aacute;l de los siguientes archivos de un sistema GNU/Linux se encuentra la asignaci&oacute;n entre particiones de disco duro y directorios donde son montadas?";
 choices[72]= new Array();
 choices[72][0] = "mountd.conf";
 choices[72][1] = "fstab";
 choices[72][2] = "filesystems";
 choices[72][3] = ".mnt-conf";
 answers[72] = 1;
 units[72] = ['57'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6591. ";
 preguntaids[72] = 6591


//  Id pregunta: 6577 Año de creación de pregunta: 2003
 questions[73]= "74)  Las siglas UDDI corresponden a:";
 choices[73]= new Array();
 choices[73][0] = "Universal Description and Discovery Interface";
 choices[73][1] = "Universal Description, Discovery and Integration";
 choices[73][2] = "Universal Definition, Discovery and Integration";
 choices[73][3] = "Universal Definition and Discovery Interface";
 answers[73] = 1;
 units[73] = ['55'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6577. ";
 preguntaids[73] = 6577


//  Id pregunta: 6575 Año de creación de pregunta: 2003
 questions[74]= "75)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[74]= new Array();
 choices[74][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[74][1] = "La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[74][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[74][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[74] = 3;
 units[74] = ['78'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6575. ";
 preguntaids[74] = 6575


