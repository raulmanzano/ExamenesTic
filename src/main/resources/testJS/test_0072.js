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
//  Id pregunta: 10282 Año de creación de pregunta: 2015
 questions[0]= "1)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[0]= new Array();
 choices[0][0] = "No, no se puede";
 choices[0][1] = "S&iacute;, la clave es k = m XOR c";
 choices[0][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[0][3] = "S&iacute;, la clave es k = m XOR m";
 answers[0] = 1;
 units[0] = ['76'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10282. ";
 preguntaids[0] = 10282


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[1]= "2)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[1]= new Array();
 choices[1][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[1][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[1][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[1][3] = "las respuestas 'a' y 'b' son correctas";
 answers[1] = 0;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 2474. ";
 preguntaids[1] = 2474


//  Id pregunta: 6399 Año de creación de pregunta: 2003
 questions[2]= "3)  Firmar un mensaje electr&oacute;nico";
 choices[2]= new Array();
 choices[2][0] = "Es lo mismo que cifrarlo";
 choices[2][1] = "Garantiza la confidencialidad";
 choices[2][2] = "Es lo mismo que codificarlo";
 choices[2][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[2] = 3;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6399. Examen 2006 JCYL";
 preguntaids[2] = 6399


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[3]= "4)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[3]= new Array();
 choices[3][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[3][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[3][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[3][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[3] = 1;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7541. Map 2005";
 preguntaids[3] = 7541


//  Id pregunta: 10388 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[4]= new Array();
 choices[4][0] = "Juventud en movimiento";
 choices[4][1] = "Una Europa que utilice eficazmente los recursos";
 choices[4][2] = "Plataforma Europea contra la pobreza";
 choices[4][3] = "Agenda Clim&aacute;tica para Europa";
 answers[4] = 1;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 10388. ";
 preguntaids[4] = 10388


//  Id pregunta: 3181 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;Qu&eacute; tecnolog&iacute;a sustituy&oacute; a DES tras su ruptura?";
 choices[5]= new Array();
 choices[5][0] = "Rijndael";
 choices[5][1] = "RC-4";
 choices[5][2] = "MD5";
 choices[5][3] = "SEAL";
 answers[5] = 0;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3181. ";
 preguntaids[5] = 3181


//  Id pregunta: 5422 Año de creación de pregunta: 2007
 questions[6]= "7)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[6]= new Array();
 choices[6][0] = "Iniciaci&oacute;n";
 choices[6][1] = "Finalizaci&oacute;n";
 choices[6][2] = "Transici&oacute;n";
 choices[6][3] = "Elaboraci&oacute;n";
 answers[6] = 1;
 units[6] = ['84'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 5422. ";
 preguntaids[6] = 5422


//  Id pregunta: 1848 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento est&aacute; basado en el estado de los enlaces?";
 choices[7]= new Array();
 choices[7][0] = "RIP versi&oacute;n 1";
 choices[7][1] = "OSPF";
 choices[7][2] = "BGP";
 choices[7][3] = "RIP versi&oacute;n 2";
 answers[7] = 1;
 units[7] = ['102'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1848. ";
 preguntaids[7] = 1848


//  Id pregunta: 3083 Año de creación de pregunta: 2002
 questions[8]= "9)  Un sistema de almacenamiento RAID 0:";
 choices[8]= new Array();
 choices[8][0] = "Es un sistema tolerante a fallos de un disco";
 choices[8][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[8][2] = "Requiere al menos 5 discos";
 choices[8][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[8] = 3;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3083. ";
 preguntaids[8] = 3083


//  Id pregunta: 2652 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[9]= new Array();
 choices[9][0] = "Unicode";
 choices[9][1] = "ITU 396-4";
 choices[9][2] = "ANSI 328";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = 0;
 units[9] = ['74'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2652. ";
 preguntaids[9] = 2652


//  Id pregunta: 1077 Año de creación de pregunta: 2016
 questions[10]= "11)  La regla de &quot;Actualizaci&oacute;n de Vistas&quot; (Regla 6) de Codd establece que:";
 choices[10]= new Array();
 choices[10][0] = "Todas las vistas actualizadas deben actualizarse tambi&eacute;n en el cat&aacute;logo de datos.";
 choices[10][1] = "Todas las vistas que son te&oacute;ricamente actualizables se pueden actualizar por el sistema.";
 choices[10][2] = "La actualizaci&oacute;n de una vista se realiza manteniendo la integridad del conjunto de informaci&oacute;n del sistema.";
 choices[10][3] = "Todas las vistas que son actualizadas no requieren un cambio en su estructura l&oacute;gica.";
 answers[10] = 1;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1077. ";
 preguntaids[10] = 1077


//  Id pregunta: 4507 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al nivel de transporte?:";
 choices[11]= new Array();
 choices[11][0] = "Dividir en fragmentos mas peque&ntilde;os la informaci&oacute;n que acepta del nivel de sesi&oacute;n, y pasarlos al nivel de red";
 choices[11][1] = "Asegurar el trasvase de informaci&oacute;n entre los 2 extremos de la comunicaci&oacute;n";
 choices[11][2] = "Permitir la comunicaci&oacute;n simult&aacute;nea de varias sesiones de trabajo";
 choices[11][3] = "Transportar la informaci&oacute;n entre nodos de conmutaci&oacute;n conectados directamente entre si";
 answers[11] = 3;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4507. ";
 preguntaids[11] = 4507


//  Id pregunta: 2833 Año de creación de pregunta: 2002
 questions[12]= "13)  En la orientaci&oacute;n l&oacute;gica de la inteligencia artificial podemos afirmar que:";
 choices[12]= new Array();
 choices[12][0] = "El c&aacute;lculo proposicional entra en la sem&aacute;ntica de las proposiciones, distinguiendo en ella los componentes predicados y los t&eacute;rminos";
 choices[12][1] = "El c&aacute;lculo de predicados representa el lenguaje usual tomando como elemento b&aacute;sico de la formulaci&oacute;n una representaci&oacute;n matem&aacute;tica de las frases declarativas simples (proposiciones)";
 choices[12][2] = "En el c&aacute;lculo proposicional, una proposici&oacute;n es la unidad m&iacute;nima del lenguaje con un contenido de informaci&oacute;n, sobre cuyo significado es posible afirmar la verdad o falsedad";
 choices[12][3] = "Las clases de conectivas &quot;negaci&oacute;n y condicional&quot; pertenecen al c&aacute;lculo de predicados";
 answers[12] = 2;
 units[12] = ['67'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2833. ";
 preguntaids[12] = 2833


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; pa&iacute;s entr&oacute; a formar parte de la Uni&oacute;n Europea el mismo a&ntilde;o en que formaliz&oacute; su adhesi&oacute;n nuestro pa&iacute;s?";
 choices[13]= new Array();
 choices[13][0] = "Grecia";
 choices[13][1] = "Portugal";
 choices[13][2] = "Las alternativas a) y b) son correctas";
 choices[13][3] = "Ninguno";
 answers[13] = 1;
 units[13] = ['5'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 182. Uni&oacute;n Europea";
 preguntaids[13] = 182


//  Id pregunta: 9099 Año de creación de pregunta: 2014
 questions[14]= "15)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[14]= new Array();
 choices[14][0] = "48 meses.";
 choices[14][1] = "24 meses.";
 choices[14][2] = "12 meses.";
 choices[14][3] = "6 meses.";
 answers[14] = 2;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 9099. Examen TIC-A1 2013";
 preguntaids[14] = 9099


//  Id pregunta: 7205 Año de creación de pregunta: 2010
 questions[15]= "16)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[15]= new Array();
 choices[15][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[15][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[15][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[15][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[15] = 2;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7205. Castilla La Mancha 2009";
 preguntaids[15] = 7205


//  Id pregunta: 9903 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[16]= new Array();
 choices[16][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[16][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[16][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[16][3] = "Todas las anteriores.";
 answers[16] = 3;
 units[16] = ['7', '19'];
 blocks[16] = ['A2', 'A4'];
 comments[16] = "Id Pregunta: 9903. ";
 preguntaids[16] = 9903


//  Id pregunta: 6554 Año de creación de pregunta: 2003
 questions[17]= "18)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[17]= new Array();
 choices[17][0] = "abstraction inversion";
 choices[17][1] = "session fa&Ccedil;ade";
 choices[17][2] = "model view controler";
 choices[17][3] = "Data Access Objects";
 answers[17] = 0;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 6554. ";
 preguntaids[17] = 6554


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[18]= new Array();
 choices[18][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[18][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[18][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[18][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[18] = 2;
 units[18] = ['5'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 131. Uni&oacute;n Europea";
 preguntaids[18] = 131


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[19]= "20)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[19]= new Array();
 choices[19][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[19][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[19][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[19][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[19] = 0;
 units[19] = ['10'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 1976. ";
 preguntaids[19] = 1976


//  Id pregunta: 7124 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[20]= new Array();
 choices[20][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[20][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[20][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[20][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[20] = 2;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 7124. Art&iacute;culo 53 RD 1671/2009";
 preguntaids[20] = 7124


//  Id pregunta: 2569 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[21]= new Array();
 choices[21][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[21][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[21][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles";
 choices[21][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[21] = 3;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2569. ";
 preguntaids[21] = 2569


//  Id pregunta: 10803 Año de creación de pregunta: 2015
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l de los siguientes no es un operador b&aacute;sico en SQL:";
 choices[22]= new Array();
 choices[22][0] = "Proyecci&oacute;n";
 choices[22][1] = "Intersecci&oacute;n";
 choices[22][2] = "Producto cartesiano";
 choices[22][3] = "Uni&oacute;n";
 answers[22] = 1;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10803. ";
 preguntaids[22] = 10803


//  Id pregunta: 8321 Año de creación de pregunta: 2011
 questions[23]= "24)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[23]= new Array();
 choices[23][0] = "AEIC.";
 choices[23][1] = "LOM.";
 choices[23][2] = "LCMS.";
 choices[23][3] = "SCORM.";
 answers[23] = 3;
 units[23] = ['70'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8321. Examen UPM A2 2011";
 preguntaids[23] = 8321


//  Id pregunta: 3823 Año de creación de pregunta: 2002
 questions[24]= "25)  En las fases del proceso de prueba de software diga cu&aacute;l, seg&uacute;n M&eacute;trica v3, corresponde a la prueba que se realiza una vez ensamblado el software para comprobar que cumple las especificaciones:";
 choices[24]= new Array();
 choices[24][0] = "Prueba de integraci&oacute;n";
 choices[24][1] = "Prueba de unidad";
 choices[24][2] = "Prueba de aceptaci&oacute;n";
 choices[24][3] = "Prueba de validaci&oacute;n";
 answers[24] = 2;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3823. ";
 preguntaids[24] = 3823


//  Id pregunta: 3563 Año de creación de pregunta: 2004
 questions[25]= "26)  Ivar Jacobson, Jim Rumbaugh y Grady Booch fueron los creadores de:";
 choices[25]= new Array();
 choices[25][0] = "UML";
 choices[25][1] = "XML";
 choices[25][2] = "HTML";
 choices[25][3] = "Ninguno de los anteriores";
 answers[25] = 0;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3563. Similar a examen TIC SS A 2003";
 preguntaids[25] = 3563


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[26]= "27)  El Colegio de Comisarios se re&uacute;ne:";
 choices[26]= new Array();
 choices[26][0] = "Una vez por semana.";
 choices[26][1] = "Una vez al mes.";
 choices[26][2] = "Dos veces en semana.";
 choices[26][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[26] = 0;
 units[26] = ['5'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 135. Uni&oacute;n Europea";
 preguntaids[26] = 135


//  Id pregunta: 6487 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Qu&eacute; figura se incluy&oacute; en la ley de contratos del sector p&uacute;blico, 30/2007?";
 choices[27]= new Array();
 choices[27][0] = "El representante de adjudicaci&oacute;n";
 choices[27][1] = "El responsable de adjudicaci&oacute;n";
 choices[27][2] = "El responsable del contrato";
 choices[27][3] = "El representante de contrato";
 answers[27] = 2;
 units[27] = ['37'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6487. ";
 preguntaids[27] = 6487


//  Id pregunta: 7701 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSDAAPP v.3.0?";
 choices[28]= new Array();
 choices[28][0] = "Ponderaci&oacute;n Lineal.";
 choices[28][1] = "Permutaci&oacute;n.";
 choices[28][2] = "Prometh&eacute;e.";
 choices[28][3] = "Distancia al Ideal (TOPSIS).";
 answers[28] = 1;
 units[28] = ['38'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 7701. Map 2007";
 preguntaids[28] = 7701


//  Id pregunta: 7008 Año de creación de pregunta: 2010
 questions[29]= "30)  Seg&uacute;n la ISACA, una &ldquo;auditor&iacute;a de sistemas&rdquo; se puede definir como:";
 choices[29]= new Array();
 choices[29][0] = "Auditor&iacute;a que abarca la revisi&oacute;n y evaluaci&oacute;n de todos los aspectos de los sistemas autom&aacute;ticos de procesamiento de la informaci&oacute;n (o una parte de ellos), incluidos los procedimientos no autom&aacute;ticos relacionados con ellos y las interfaces correspondientes.";
 choices[29][1] = "Conjunto de actividades, t&eacute;cnicas, procedimientos y herramientas que nos permiten el control y mejora de los procesos de la organizaci&oacute;n en el campo de los sistemas de informaci&oacute;n.";
 choices[29][2] = "ISACA no ha dado una definici&oacute;n de Auditor&iacute;a porque es una organizaci&oacute;n sin &aacute;nimo de lucro que centra su actividad en la seguridad de los sistemas de informaci&oacute;n.";
 choices[29][3] = "La auditor&iacute;a que centra su actividad sobre los sistemas de una organizaci&oacute;n, incluyendo los sistemas el&eacute;ctricos, electr&oacute;nicos e inform&aacute;ticos, aplicando en los controles la normativa europea dictada por los organismos: CEN, CENELEC, EIS y ETSI.";
 answers[29] = 0;
 units[29] = ['36'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7008. ";
 preguntaids[29] = 7008


//  Id pregunta: 9474 Año de creación de pregunta: 2014
 questions[30]= "31)  Booch, Jacobson y Rumbaugh propusieron de forma conjunta PUDS como marco de trabajo gen&eacute;rico para el desarrollo de software.";
 choices[30]= new Array();
 choices[30][0] = "PUDS propone un proceso iterativo e incremental para el desarrollo de sw. La distribuci&oacute;n de la funcionalidad a implementar en distintos incrementos implica un mayor esfuerzo y dificultad en relaci&oacute;n con la gesti&oacute;n del riesgo.";
 choices[30][1] = "Cada ciclo de desarrollo comprende varias iteraciones. Cada iteraci&oacute;n se subdivide en 4 fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n y Transici&oacute;n";
 choices[30][2] = "Cada ciclo de desarrollo se subdivide en varias fases o flujos de trabajo fundamentales: planificaci&oacute;n, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n y pruebas y finalmente, evaluaci&oacute;n del ciclo.";
 choices[30][3] = "Los casos de uso gu&iacute;an el proceso de desarrollo, centrando la atenci&oacute;n en lo que el usuario quiere / espera del sistema";
 answers[30] = 3;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 9474. B: las interaciones no se dividen en fases; C: fases: inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n; flujos principales: modelo de negocio, requisitos, an&aacute;lisis y dise&ntilde;o, implementaci&oacute;n, dise&ntilde;o, pruebas; flujos secundarios: configuraci&oacute;n, gesti&oacute;n, entorno";
 preguntaids[30] = 9474


//  Id pregunta: 7023 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;les de las siguientes no es una fase definida en la planificaci&oacute;n estrat&eacute;gica?";
 choices[31]= new Array();
 choices[31][0] = "Formulaci&oacute;n de objetivos organizacionales";
 choices[31][1] = "An&aacute;lisis de las fortalezas y limitaciones de la empresa";
 choices[31][2] = "Reestructuraci&oacute;n de la empresa";
 choices[31][3] = "Formulaci&oacute;n de alternativas estrat&eacute;gicas";
 answers[31] = 2;
 units[31] = ['83'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7023. ";
 preguntaids[31] = 7023


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[32]= "33)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[32]= new Array();
 choices[32][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[32][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[32][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[32][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[32] = 0;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 9777. ";
 preguntaids[32] = 9777


//  Id pregunta: 4138 Año de creación de pregunta: 2003
 questions[33]= "34)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[33]= new Array();
 choices[33][0] = "Un filtro paso bajo es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[33][1] = "La ecualizaci&oacute;n del histograma es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[33][2] = "El &quot;filtro de mediana&quot; elige el p&iacute;xel siguiente al central de los valores de la ventana.";
 choices[33][3] = "El filtro paso alto suaviza la imagen.";
 answers[33] = 1;
 units[33] = ['80'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 4138. ";
 preguntaids[33] = 4138


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[34]= new Array();
 choices[34][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[34][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[34][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[34][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[34] = 3;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 25. Constituci&oacute;n de 1978";
 preguntaids[34] = 25


//  Id pregunta: 8366 Año de creación de pregunta: 2011
 questions[35]= "36)  En un modelo entidad-relaci&oacute;n cual es la definici&oacute;n b&aacute;sica que corresponde con el elemento entidad?:";
 choices[35]= new Array();
 choices[35][0] = "Es aquel objeto que existe en el mundo real con una identificaci&oacute;n distinta y con un significado propio";
 choices[35][1] = "Es aquella propiedad que tiene asignado un dominio";
 choices[35][2] = "Es el conjunto de valores que puede tomar un atributo";
 choices[35][3] = "Es la relaci&oacute;n que se establece entre los objetos del modelo";
 answers[35] = 0;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 8366. Analista Ayto. Madrid 2010";
 preguntaids[35] = 8366


//  Id pregunta: 1500 Año de creación de pregunta: 2016
 questions[36]= "37)  La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios, ha definido un marco para impulsar la mejora continua de los servicios p&uacute;blicos en la Administraci&oacute;n General del Estado constituido por seis programas. &iquest;Cu&aacute;l de los siguientes es uno de esos programas?";
 choices[36]= new Array();
 choices[36][0] = "Programa de an&aacute;lisis estructural del organismo.";
 choices[36][1] = "Programa de evaluaci&oacute;n de los costes del servicio p&uacute;blico.";
 choices[36][2] = "Programa del EFQM.";
 choices[36][3] = "Programa de Reconocimiento (Certificaci&oacute;n de Organizaciones y Premios).";
 answers[36] = 3;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 1500. ";
 preguntaids[36] = 1500


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[37][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[37][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[37][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[37] = 2;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 206. Ley 39/2015";
 preguntaids[37] = 206


//  Id pregunta: 4725 Año de creación de pregunta: 2002
 questions[38]= "39)  Indicar entre las siguientes normas del IEEE la que trata sobre redes Integradas de voz y datos:";
 choices[38]= new Array();
 choices[38][0] = "802.6";
 choices[38][1] = "802.7";
 choices[38][2] = "802.8";
 choices[38][3] = "802.9";
 answers[38] = 3;
 units[38] = ['101'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4725. ";
 preguntaids[38] = 4725


//  Id pregunta: 2079 Año de creación de pregunta: 2002
 questions[39]= "40)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[39]= new Array();
 choices[39][0] = "Asignar un peso a cada alternativa";
 choices[39][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[39][2] = "Ordenar las alternativas";
 choices[39][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[39] = 3;
 units[39] = ['38'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2079. ";
 preguntaids[39] = 2079


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[40]= new Array();
 choices[40][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[40][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[40][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[40][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[40] = 1;
 units[40] = ['14'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 355. Estado del Bienestar";
 preguntaids[40] = 355


//  Id pregunta: 7929 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;C&oacute;mo se denomina el informe elaborado por el Observatorio de Administraci&oacute;n Electr&oacute;nica para analizar de manera espec&iacute;fica, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[41]= new Array();
 choices[41][0] = "Informe PRINCESA.";
 choices[41][1] = "Informe TECNIMAP.";
 choices[41][2] = "Informe IRIA.";
 choices[41][3] = "Informe REINA.";
 answers[41] = 3;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 7929. Examen TIC A1 2010";
 preguntaids[41] = 7929


//  Id pregunta: 10666 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n la Ley 9/2014, indique la respuesta CORRECTA:";
 choices[42]= new Array();
 choices[42][0] = "El Ministerio de Energia, Turismo y Agenda Digital aprobar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[42][1] = "El otorgamiento de derechos se har&aacute; en 3 semanas m&aacute;ximo en cualquier caso.";
 choices[42][2] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; modificar mediante Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[42][3] = "La CNMC podr&aacute; fijar mediante circular las caracter&iacute;sticas de conservaci&oacute;n de numeraci&oacute;n.";
 answers[42] = 3;
 units[42] = ['121'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10666. ";
 preguntaids[42] = 10666


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[43]= new Array();
 choices[43][0] = "El Presidente del Senado";
 choices[43][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[43][2] = "El Presidente del Gobierno";
 choices[43][3] = "El Presidente de las Cortes Generales";
 answers[43] = 2;
 units[43] = ['1'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 92. Constituci&oacute;n de 1978";
 preguntaids[43] = 92


//  Id pregunta: 6815 Año de creación de pregunta: 2010
 questions[44]= "45)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[44]= new Array();
 choices[44][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[44][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[44][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[44][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[44] = 1;
 units[44] = ['84'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6815. TIC A 2009";
 preguntaids[44] = 6815


//  Id pregunta: 10287 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[45]= new Array();
 choices[45][0] = "CUDA";
 choices[45][1] = "OpenCL";
 choices[45][2] = "OpenStack";
 choices[45][3] = "MPI";
 answers[45] = 2;
 units[45] = ['49'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10287. Openstack es una soluci&oacute;n open source para montar clouds";
 preguntaids[45] = 10287


//  Id pregunta: 8526 Año de creación de pregunta: 2013
 questions[46]= "47)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[46]= new Array();
 choices[46][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[46][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[46][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 3;
 units[46] = ['10'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 8526. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";
 preguntaids[46] = 8526


//  Id pregunta: 8884 Año de creación de pregunta: 2013
 questions[47]= "48)  El diagrama de estructura de datos (DED):";
 choices[47]= new Array();
 choices[47][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[47][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[47][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[47][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[47] = 0;
 units[47] = ['85'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 8884. Examen AGE TIC A1 2011";
 preguntaids[47] = 8884


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[48]= "49)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[48]= new Array();
 choices[48][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[48][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[48][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[48][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[48] = 2;
 units[48] = ['7'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 226. Ley 39/2015";
 preguntaids[48] = 226


//  Id pregunta: 7047 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Qu&eacute; caracter&iacute;sticas se exige a un sistema OLTP?";
 choices[49]= new Array();
 choices[49][0] = "Capacidad del sistema para recuperar r&aacute;pidamente su funcionamiento en caso de fallo.";
 choices[49][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[49][2] = "Si una transacci&oacute;n resulta abortada, debe restituirse el anterior estado v&aacute;lido de los datos.";
 choices[49][3] = "Todas las anteriores.";
 answers[49] = 3;
 units[49] = ['89'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 7047. ";
 preguntaids[49] = 7047


//  Id pregunta: 8895 Año de creación de pregunta: 2013
 questions[50]= "51)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional:";
 choices[50]= new Array();
 choices[50][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[50][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[50][2] = "El producto cartesiano de una relaci&oacute;n de grado n y x tuplas y otra relaci&oacute;n de grado m y z tuplas es una relaci&oacute;n de grado n*m y de (x+z) tuplas";
 choices[50][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[50] = 2;
 units[50] = ['61'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8895. Examen AGE TIC A1 2011";
 preguntaids[50] = 8895


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[51]= "52)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[51]= new Array();
 choices[51][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[51][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[51][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[51][3] = "todas son correctas";
 answers[51] = 1;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[51] = 974


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[52]= "53)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[52]= new Array();
 choices[52][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[52][1] = "La CETIC";
 choices[52][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[52][3] = "El MHFP";
 answers[52] = 0;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 469. Estrategia TIC";
 preguntaids[52] = 469


//  Id pregunta: 8035 Año de creación de pregunta: 2011
 questions[53]= "54)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[53][1] = "Comprueban la funcionalidad de un programa.";
 choices[53][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[53][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[53] = 3;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 8035. Examen TIC A2 2010";
 preguntaids[53] = 8035


//  Id pregunta: 9168 Año de creación de pregunta: 2014
 questions[54]= "55)  El Lenguaje de Ontolog&iacute;as Web (OWL) proporciona tres sublenguajes, cada uno con nivel de expresividad mayor que el anterior. Se&ntilde;ale el que NO es correcto:";
 choices[54]= new Array();
 choices[54][0] = "OWL Lite.";
 choices[54][1] = "OWL DL.";
 choices[54][2] = "OWL Extension.";
 choices[54][3] = "OWL Full.";
 answers[54] = 2;
 units[54] = ['125'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9168. Examen TIC A2 2013";
 preguntaids[54] = 9168


//  Id pregunta: 1441 Año de creación de pregunta: 2016
 questions[55]= "56)  La LOPD en su art&iacute;culo 5, nos dice que los interesados a los que se soliciten datos personales deber&aacute;n ser previamente informados :";
 choices[55]= new Array();
 choices[55][0] = "De la posibilidad de consultar y rectificar sus datos.";
 choices[55][1] = "De la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 choices[55][2] = "De ejercitar los derechos de acceso y rectificaci&oacute;n.";
 choices[55][3] = "De ejercitar s&oacute;lo los derechos de cancelaci&oacute;n.";
 answers[55] = 1;
 units[55] = ['35'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 1441. ";
 preguntaids[55] = 1441


//  Id pregunta: 5807 Año de creación de pregunta: 2007
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[56]= new Array();
 choices[56][0] = "BPMN";
 choices[56][1] = "BPEL";
 choices[56][2] = "XPDL";
 choices[56][3] = "WSDL";
 answers[56] = 3;
 units[56] = ['55'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 5807. ";
 preguntaids[56] = 5807


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[57]= new Array();
 choices[57][0] = "117.5";
 choices[57][1] = "117.1";
 choices[57][2] = "116";
 choices[57][3] = "15";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 87. Constituci&oacute;n de 1978";
 preguntaids[57] = 87


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[58]= new Array();
 choices[58][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[58][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[58][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[58][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[58] = 0;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 63. Constituci&oacute;n de 1978";
 preguntaids[58] = 63


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[59]= "60)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[59]= new Array();
 choices[59][0] = "Polimorfismo.";
 choices[59][1] = "Herencia.";
 choices[59][2] = "Reusabilidad.";
 choices[59][3] = "Encapsulaci&oacute;n.";
 answers[59] = 3;
 units[59] = ['85'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7669. Map 2007";
 preguntaids[59] = 7669


//  Id pregunta: 3961 Año de creación de pregunta: 2002
 questions[60]= "61)  Se&ntilde;alar la respuesta correcta respecto a METRICA V3:";
 choices[60]= new Array();
 choices[60][0] = "No propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 choices[60][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos";
 choices[60][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de su propia metodolog&iacute;a";
 choices[60][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[60] = 2;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 3961. ";
 preguntaids[60] = 3961


//  Id pregunta: 2740 Año de creación de pregunta: 2002
 questions[61]= "62)  El algoritmo RSA se emplea para:";
 choices[61]= new Array();
 choices[61][0] = "Cifrar datos con una clave secreta";
 choices[61][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[61][2] = "Obtener un resumen (huella digital) de un documento";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 1;
 units[61] = ['76'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2740. ";
 preguntaids[61] = 2740


//  Id pregunta: 4965 Año de creación de pregunta: 2002
 questions[62]= "63)  Las diversas tecnolog&iacute;as usadas en red local y metropolitanas se han popularizado mediante diversos nombres y normas. Indique la opci&oacute;n correcta o si lo son todas ellas:";
 choices[62]= new Array();
 choices[62][0] = "Las redes Token Ring se caracterizan por tener una topolog&iacute;a en anillo l&oacute;gico y la norma que cumple es IEEE 802.4";
 choices[62][1] = "La red FDDI est&aacute; definida como una red en anillo f&iacute;sico y est&aacute; amparada por la norma ISO-9314";
 choices[62][2] = "Las redes Token Bus se caracterizan por tener una topolog&iacute;a en anillo f&iacute;sico y estar amparadas por la norma IEEE 802.3";
 choices[62][3] = "Todas las respuestas anteriores son ciertas";
 answers[62] = 1;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4965. ";
 preguntaids[62] = 4965


//  Id pregunta: 3643 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[63]= new Array();
 choices[63][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[63][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[63][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[63][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[63] = 0;
 units[63] = ['60'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3643. ";
 preguntaids[63] = 3643


//  Id pregunta: 5442 Año de creación de pregunta: 2007
 questions[64]= "65)  El &ldquo;paradigma imperativo&rdquo; en un lenguaje de programaci&oacute;n se basa en:";
 choices[64]= new Array();
 choices[64][0] = "La m&aacute;quina de Turing.";
 choices[64][1] = "El modelo de computador de Von Neumann.";
 choices[64][2] = "El Teorema de la Indecibilidad de G&ouml;del.";
 choices[64][3] = "La m&aacute;quina de Babbage.";
 answers[64] = 1;
 units[64] = ['51'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 5442. ";
 preguntaids[64] = 5442


//  Id pregunta: 2371 Año de creación de pregunta: 2004
 questions[65]= "66)  Una de las siguientes afirmaciones referentes a la normalizaci&oacute;n es falsa:";
 choices[65]= new Array();
 choices[65][0] = "Las normas espa&ntilde;olas se conocen por las siglas UNE (Una Norma Espa&ntilde;ola).";
 choices[65][1] = "Las normas europeas comienzan por las siglas EN.";
 choices[65][2] = "Las normas previas son las que se emiten cuando se considera que es prematuro promulgar formalmente una norma EN. Su codificaci&oacute;n comienza por las siglas ENV.";
 choices[65][3] = "AENOR es una entidad p&uacute;blica espa&ntilde;ola de normalizaci&oacute;n y certificaci&oacute;n";
 answers[65] = 3;
 units[65] = ['48'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2371. ENV: experimental; AENOR es una entidad privada sin fines lucrativos";
 preguntaids[65] = 2371


//  Id pregunta: 7924 Año de creación de pregunta: 2011
 questions[66]= "67)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[66]= new Array();
 choices[66][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[66][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[66][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[66][3] = "Quejas y reclamaciones.";
 answers[66] = 3;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 7924. Examen TIC A1 2010";
 preguntaids[66] = 7924


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[67]= "68)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[67]= new Array();
 choices[67][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[67][1] = "Publicidad de las normas.";
 choices[67][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[67][3] = "Coordinaci&oacute;n normativa.";
 answers[67] = 1;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 73. Constituci&oacute;n de 1978";
 preguntaids[67] = 73


//  Id pregunta: 9801 Año de creación de pregunta: 2015
 questions[68]= "69)  La LOPD:";
 choices[68]= new Array();
 choices[68][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[68][1] = "A y C son correctas";
 choices[68][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[68][3] = "A y C son incorrectas.";
 answers[68] = 2;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 9801. ";
 preguntaids[68] = 9801


//  Id pregunta: 1789 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Real Decreto 1720/2007 indique cu&aacute;l de las siguientes es una medida de seguridad de nivel medio:";
 choices[69]= new Array();
 choices[69][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 choices[69][1] = "La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[69][2] = "Deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan.";
 choices[69][3] = "Exclusivamente el personal autorizado en el documento de seguridad podr&aacute; tener acceso a los lugares donde se hallen instalados los equipos f&iacute;sicos que den soporte a los sistemas de informaci&oacute;n.";
 answers[69] = 3;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 1789. ";
 preguntaids[69] = 1789


//  Id pregunta: 1252 Año de creación de pregunta: 2016
 questions[70]= "71)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[70]= new Array();
 choices[70][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[70][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[70][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[70][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[70] = 2;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 1252. ";
 preguntaids[70] = 1252


//  Id pregunta: 8455 Año de creación de pregunta: 2011
 questions[71]= "72)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[71]= new Array();
 choices[71][0] = "Enveloped";
 choices[71][1] = "Detached";
 choices[71][2] = "Enveloping";
 choices[71][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[71] = 2;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8455. ";
 preguntaids[71] = 8455


//  Id pregunta: 1395 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[72]= new Array();
 choices[72][0] = "OSPF";
 choices[72][1] = "RIP";
 choices[72][2] = "BGP";
 choices[72][3] = "EGP";
 answers[72] = 0;
 units[72] = ['102'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1395. ";
 preguntaids[72] = 1395


//  Id pregunta: 7599 Año de creación de pregunta: 2010
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[73]= new Array();
 choices[73][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[73][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[73][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[73][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[73] = 2;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7599. Map 2006";
 preguntaids[73] = 7599


//  Id pregunta: 6457 Año de creación de pregunta: 2003
 questions[74]= "75)  Respecto a la Ley 56/2007 de Medidas de Impulso de la Sociendad de la Informaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Se enmarca dentro del Plan 2006-2010 para el desarrollo de la Sociedad de la Informaci&oacute;n y de convergencia con Europa y entre Comunidades Aut&oacute;nomas y Ciudades Aut&oacute;nomas, Plan Avanza.";
 choices[74][1] = "Modifica la Ley 34/2002 de SSI, la ley 59/2003 de FE y la Ley  de Propiedad Intelectual, entre otras";
 choices[74][2] = "Establece que en las relaciones con consumidores y usuarios, la factura electr&oacute;nica tendr&aacute; eficacia ejecutiva.";
 choices[74][3] = "Obliga a las empresas de sectores de especial incidencia a facilitar un medio de interlocuci&oacute;n telem&aacute;tica a los usuarios con certificados reconocidos de firma electr&oacute;nica.";
 answers[74] = 2;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 6457. Art&iacute;culo 2.3: No podr&aacute; tener eficacia ejecutiva";
 preguntaids[74] = 6457


