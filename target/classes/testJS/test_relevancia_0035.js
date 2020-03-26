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
//  Id pregunta: 1013 Año de creación de pregunta: 2016
 questions[0]= "1)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[0]= new Array();
 choices[0][0] = "por Real Decreto";
 choices[0][1] = "reglamentariamente";
 choices[0][2] = "mediante Ley";
 choices[0][3] = "ninguna es correcta";
 answers[0] = 1;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 1013. Ley 40/2015";
 preguntaids[0] = 1013


//  Id pregunta: 7239 Año de creación de pregunta: 2010
 questions[1]= "2)  &iquest;Qu&eacute; actividad es propia del BCM?";
 choices[1]= new Array();
 choices[1][0] = "An&aacute;lisis de impacto de negocio";
 choices[1][1] = "An&aacute;lisis de riesgos";
 choices[1][2] = "Producci&oacute;n del plan de continuidad";
 choices[1][3] = "Todas";
 answers[1] = 3;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 7239. ";
 preguntaids[1] = 7239


//  Id pregunta: 3124 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[2]= new Array();
 choices[2][0] = "Diccionario de palabras vac&iacute;as";
 choices[2][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[2][2] = "Tesauro";
 choices[2][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[2] = 3;
 units[2] = ['61'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3124. ";
 preguntaids[2] = 3124


//  Id pregunta: 9144 Año de creación de pregunta: 2014
 questions[3]= "4)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones graves:";
 choices[3]= new Array();
 choices[3][0] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[3][1] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n.";
 choices[3][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[3][3] = "La ausencia de cita de la fuente.";
 answers[3] = 0;
 units[3] = ['27'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 9144. ";
 preguntaids[3] = 9144


//  Id pregunta: 10199 Año de creación de pregunta: 2015
 questions[4]= "5)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[4]= new Array();
 choices[4][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[4][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[4][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[4][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[4] = 3;
 units[4] = ['78'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10199. Examen TIC A1 2014";
 preguntaids[4] = 10199


//  Id pregunta: 4915 Año de creación de pregunta: 2002
 questions[5]= "6)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que:";
 choices[5]= new Array();
 choices[5][0] = "No es onerosa para el sujeto obligado";
 choices[5][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[5][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[5][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[5] = 2;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4915. ";
 preguntaids[5] = 4915


//  Id pregunta: 10780 Año de creación de pregunta: 2015
 questions[6]= "7)  Las RFCs son publicadas por:";
 choices[6]= new Array();
 choices[6][0] = "ITU";
 choices[6][1] = "W3C";
 choices[6][2] = "IAB";
 choices[6][3] = "IETF";
 answers[6] = 3;
 units[6] = ['48'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 10780. ";
 preguntaids[6] = 10780


//  Id pregunta: 7037 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Entrevistas";
 choices[7][1] = "An&aacute;lisis de Mercado";
 choices[7][2] = "Entorno de Bucles Adaptativo";
 choices[7][3] = "Brainstorming";
 answers[7] = 2;
 units[7] = ['84'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 7037. ";
 preguntaids[7] = 7037


//  Id pregunta: 977 Año de creación de pregunta: 2016
 questions[8]= "9)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[8]= new Array();
 choices[8][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[8][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[8][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[8][3] = "todas son correctas";
 answers[8] = 3;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 977. Ley 40/2015";
 preguntaids[8] = 977


//  Id pregunta: 10507 Año de creación de pregunta: 2015
 questions[9]= "10)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[9]= new Array();
 choices[9][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[9][1] = "En cada tarea debe haber un unico R y A";
 choices[9][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[9][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[9] = 1;
 units[9] = ['101'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10507. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";
 preguntaids[9] = 10507


//  Id pregunta: 4511 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no es un &aacute;rea funcional en el &aacute;mbito de la gesti&oacute;n de redes OSI mediante CMIP?:";
 choices[10]= new Array();
 choices[10][0] = "Fallos";
 choices[10][1] = "Seguridad";
 choices[10][2] = "Rendimiento";
 choices[10][3] = "Control remoto";
 answers[10] = 3;
 units[10] = ['114'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4511. ";
 preguntaids[10] = 4511


//  Id pregunta: 1602 Año de creación de pregunta: 2016
 questions[11]= "12)  En el modelado f&iacute;sico de un sistema Orientado a Objetos, los componentes y los nodos tienen semejanzas. Entre las semejanzas NO se encuentra que:";
 choices[11]= new Array();
 choices[11][0] = "Ambos pueden participar en relaciones de dependencia, generalizaci&oacute;n y asociaci&oacute;n.";
 choices[11][1] = "Ambos representan el empaquetamiento f&iacute;sico de los elementos l&oacute;gicos.";
 choices[11][2] = "Ambos pueden tener instancias.";
 choices[11][3] = "Ambos pueden participar en interacciones.";
 answers[11] = 1;
 units[11] = ['84'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1602. ";
 preguntaids[11] = 1602


//  Id pregunta: 1363 Año de creación de pregunta: 2016
 questions[12]= "13)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[12]= new Array();
 choices[12][0] = "Mediante cuotas de disco.";
 choices[12][1] = "Mediante el editor de directivas de grupo.";
 choices[12][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[12][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[12] = 0;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1363. ";
 preguntaids[12] = 1363


//  Id pregunta: 7747 Año de creación de pregunta: 2010
 questions[13]= "14)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[13]= new Array();
 choices[13][0] = "Proviene del SGML.";
 choices[13][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscrito exclusivamente a Internet.";
 choices[13][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano.";
 choices[13][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubran diferentes necesidades.";
 answers[13] = 2;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 7747. ";
 preguntaids[13] = 7747


//  Id pregunta: 6979 Año de creación de pregunta: 2010
 questions[14]= "15)  Entre las metodolog&iacute;as &aacute;giles de desarrollo de software no se encuentra:";
 choices[14]= new Array();
 choices[14][0] = "Adaptive Software Development (ASD)";
 choices[14][1] = "Merisse";
 choices[14][2] = "EXtreme Programming (XP)";
 choices[14][3] = "Feature Driven Development (FDD)";
 answers[14] = 1;
 units[14] = ['84'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6979. TIC-B 2009 bloque desarrollo";
 preguntaids[14] = 6979


//  Id pregunta: 969 Año de creación de pregunta: 2016
 questions[15]= "16)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[15]= new Array();
 choices[15][0] = "el Gobierno de la Naci&oacute;n";
 choices[15][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[15][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[15][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[15] = 3;
 units[15] = ['4', '7', '8', '9'];
 blocks[15] = ['A1', 'A2'];
 comments[15] = "Id Pregunta: 969. Ley 40/2015";
 preguntaids[15] = 969


//  Id pregunta: 1095 Año de creación de pregunta: 2016
 questions[16]= "17)  AJAX es:";
 choices[16]= new Array();
 choices[16][0] = "Un lenguaje de programaci&oacute;n basado en la codificaci&oacute;n de programas en XML.";
 choices[16][1] = "Una filosof&iacute;a o t&eacute;cnica de desarrollo de aplicaciones web que se apoya, entre otras tecnolog&iacute;as, en XML y JavaScript.";
 choices[16][2] = "Un servidor de aplicaciones Internet desarrollado en Java cuyas p&aacute;ginas web est&aacute;n escritas en XHTML.";
 choices[16][3] = "Una alternativa a SOAP en la descripci&oacute;n de webservices.";
 answers[16] = 1;
 units[16] = ['74'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 1095. ";
 preguntaids[16] = 1095


//  Id pregunta: 4529 Año de creación de pregunta: 2002
 questions[17]= "18)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar puntos de chequeo que permita reiniciar la transmisi&oacute;n a partir del punto m&aacute;s cercano al posible fallo y no desde el principio', corresponde al nivel:";
 choices[17]= new Array();
 choices[17][0] = "Nivel de red";
 choices[17][1] = "Nivel de transporte";
 choices[17][2] = "Nivel de sesi&oacute;n";
 choices[17][3] = "Nivel de presentaci&oacute;n";
 answers[17] = 2;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4529. ";
 preguntaids[17] = 4529


//  Id pregunta: 6487 Año de creación de pregunta: 2003
 questions[18]= "19)  &iquest;Qu&eacute; figura se incluy&oacute; en la ley de contratos del sector p&uacute;blico, 30/2007?";
 choices[18]= new Array();
 choices[18][0] = "El representante de adjudicaci&oacute;n";
 choices[18][1] = "El responsable de adjudicaci&oacute;n";
 choices[18][2] = "El responsable del contrato";
 choices[18][3] = "El representante de contrato";
 answers[18] = 2;
 units[18] = ['37'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 6487. ";
 preguntaids[18] = 6487


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[19]= "20)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[19][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[19][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[19][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[19] = 2;
 units[19] = ['26'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 526. AGE A1 2015";
 preguntaids[19] = 526


//  Id pregunta: 8973 Año de creación de pregunta: 2013
 questions[20]= "21)  Un valor 3 en la escala MOS (Mean Opinion Score) indica que la calidad de la se&ntilde;al es:";
 choices[20]= new Array();
 choices[20][0] = "Adecuada";
 choices[20][1] = "Pobre";
 choices[20][2] = "Buena";
 choices[20][3] = "Ninguna de las anteriores es correcta";
 answers[20] = 0;
 units[20] = ['122'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 8973. ";
 preguntaids[20] = 8973


//  Id pregunta: 6924 Año de creación de pregunta: 2010
 questions[21]= "22)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[21]= new Array();
 choices[21][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[21][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[21][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[21][3] = "Todas las anteriores son correctas.";
 answers[21] = 3;
 units[21] = ['122'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 6924. ";
 preguntaids[21] = 6924


//  Id pregunta: 7110 Año de creación de pregunta: 2010
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[22]= new Array();
 choices[22][0] = "La interoperabilidad como cualidad integral.";
 choices[22][1] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[22][2] = "Enfoque de soluciones multilaterales.";
 choices[22][3] = "Todos los anteriores son principios b&aacute;sicos del Esquema Nacional de Interoperabilidad.";
 answers[22] = 3;
 units[22] = ['43'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 7110. Art&iacute;culo 4 ENI";
 preguntaids[22] = 7110


//  Id pregunta: 8871 Año de creación de pregunta: 2013
 questions[23]= "24)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[23]= new Array();
 choices[23][0] = "Real Decreto 1066/2001";
 choices[23][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[23][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[23][3] = "Real Decreto 899/2009";
 answers[23] = 0;
 units[23] = ['121'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8871. ";
 preguntaids[23] = 8871


//  Id pregunta: 6922 Año de creación de pregunta: 2010
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[24]= new Array();
 choices[24][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[24][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[24][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario.";
 choices[24][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[24] = 1;
 units[24] = ['122'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 6922. ";
 preguntaids[24] = 6922


//  Id pregunta: 3727 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[25]= new Array();
 choices[25][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[25][1] = "Organizaci&oacute;n funcional";
 choices[25][2] = "Organizaci&oacute;n proyecto-staff";
 choices[25][3] = "Organizaci&oacute;n por aplicaciones";
 answers[25] = 0;
 units[25] = ['30'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 3727. ";
 preguntaids[25] = 3727


//  Id pregunta: 3926 Año de creación de pregunta: 2002
 questions[26]= "27)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[26]= new Array();
 choices[26][0] = "Modularidad, Independencia de los entornos";
 choices[26][1] = "Coherencia, concisi&oacute;n";
 choices[26][2] = "Trazabilidad, integridad, coherencia";
 choices[26][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[26] = 2;
 units[26] = ['93'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3926. ";
 preguntaids[26] = 3926


//  Id pregunta: 2634 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[27]= new Array();
 choices[27][0] = "RC-4";
 choices[27][1] = "IDEA";
 choices[27][2] = "Triple DES";
 choices[27][3] = "RSA";
 answers[27] = 3;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2634. ";
 preguntaids[27] = 2634


//  Id pregunta: 10486 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de un gestor documental?";
 choices[28]= new Array();
 choices[28][0] = "Creaci&oacute;n";
 choices[28][1] = "Redifusi&oacute;n";
 choices[28][2] = "Expurgo";
 choices[28][3] = "Todas lo son";
 answers[28] = 1;
 units[28] = ['99'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10486. ";
 preguntaids[28] = 10486


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[29]= new Array();
 choices[29][0] = "Las firmas electro?nicas cualificadas tendr&aacute;n un efecto juri?dico equivalente al de una firma manuscrita";
 choices[29][1] = "Una firma electro?nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera? reconocida como firma electro?nica cualificada en los dema?s Estados miembros";
 choices[29][2] = "No se denegara?n efectos juri?dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro?nica por el mero hecho de ser una firma electro?nica";
 choices[29][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[29] = 3;
 units[29] = ['77'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 787. Reglamento 910/2014";
 preguntaids[29] = 787


//  Id pregunta: 3527 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes es un principio de especificaci&oacute;n del software de acuerdo con R.S. Pressman?:";
 choices[30]= new Array();
 choices[30][0] = "Separar funcionalidad de implementaci&oacute;n";
 choices[30][1] = "La especificaci&oacute;n del sistema debe ser tolerante a la incompletitud y ampliable";
 choices[30][2] = "Una especificaci&oacute;n debe ser operativa";
 choices[30][3] = "Todos los anteriores son principios de especificaci&oacute;n del software";
 answers[30] = 3;
 units[30] = ['84'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3527. ";
 preguntaids[30] = 3527


//  Id pregunta: 8516 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[31]= new Array();
 choices[31][0] = "Apache Axis2";
 choices[31][1] = "Hibernate";
 choices[31][2] = "Struts";
 choices[31][3] = "TopLink";
 answers[31] = 0;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8516. ";
 preguntaids[31] = 8516


//  Id pregunta: 9048 Año de creación de pregunta: 2014
 questions[32]= "33)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "C";
 choices[32][1] = "Ensamblador";
 choices[32][2] = "Cobol";
 choices[32][3] = "Pascal";
 answers[32] = 1;
 units[32] = ['94'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 9048. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";
 preguntaids[32] = 9048


//  Id pregunta: 9666 Año de creación de pregunta: 2014
 questions[33]= "34)  Indique la opci&oacute;n verdadera.";
 choices[33]= new Array();
 choices[33][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[33][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[33][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[33][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps.";
 answers[33] = 3;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9666. Examen TIC A1 2013";
 preguntaids[33] = 9666


//  Id pregunta: 8790 Año de creación de pregunta: 2013
 questions[34]= "35)  &iquest;Cu&aacute;ntos principios fundamentales define la ISO 9004:2009?";
 choices[34]= new Array();
 choices[34][0] = "6";
 choices[34][1] = "7";
 choices[34][2] = "8";
 choices[34][3] = "Ninguno";
 answers[34] = 2;
 units[34] = ['92'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 8790. ";
 preguntaids[34] = 8790


//  Id pregunta: 6740 Año de creación de pregunta: 2009
 questions[35]= "36)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[35]= new Array();
 choices[35][0] = "Un determinado virus inform&aacute;tico";
 choices[35][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[35][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[35][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[35] = 2;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 6740. MAP 2008 A1";
 preguntaids[35] = 6740


//  Id pregunta: 4389 Año de creación de pregunta: 2002
 questions[36]= "37)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[36]= new Array();
 choices[36][0] = "criptoan&aacute;lisis lineal";
 choices[36][1] = "criptoan&aacute;lisis continuo";
 choices[36][2] = "sweep-attack";
 choices[36][3] = "fuerza bruta";
 answers[36] = 3;
 units[36] = ['119'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4389. ";
 preguntaids[36] = 4389


//  Id pregunta: 6597 Año de creación de pregunta: 2009
 questions[37]= "38)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Lenguaje de Consulta de datos.";
 choices[37][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[37][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[37][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[37] = 3;
 units[37] = ['61'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6597. MAP 2008 A2";
 preguntaids[37] = 6597


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[38]= "39)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[38]= new Array();
 choices[38][0] = "Firma electr&oacute;nica avanzada";
 choices[38][1] = "Firma electr&oacute;nica reconocida";
 choices[38][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = 1;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[38] = 2483


//  Id pregunta: 4878 Año de creación de pregunta: 2002
 questions[39]= "40)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[39]= new Array();
 choices[39][0] = "Es una direcci&oacute;n privada";
 choices[39][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[39][2] = "Es una direcci&oacute;n de clase C";
 choices[39][3] = "Es una direcci&oacute;n de clase D";
 answers[39] = 0;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4878. ";
 preguntaids[39] = 4878


//  Id pregunta: 3240 Año de creación de pregunta: 2003
 questions[40]= "41)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[40]= new Array();
 choices[40][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[40][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[40][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[40][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[40] = 0;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3240. ";
 preguntaids[40] = 3240


//  Id pregunta: 6214 Año de creación de pregunta: 2003
 questions[41]= "42)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Aseguramiento de la Calidad.";
 choices[41][1] = "Seguridad.";
 choices[41][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[41][3] = "Gesti&oacute;n de Proyectos.";
 answers[41] = 3;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6214. Examen TIC A Castilla La Mancha 2007";
 preguntaids[41] = 6214


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[42]= new Array();
 choices[42][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[42][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[42][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[42][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[42] = 3;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 481. Sociedad de la informaci&oacute;n";
 preguntaids[42] = 481


//  Id pregunta: 8212 Año de creación de pregunta: 2011
 questions[43]= "44)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[43]= new Array();
 choices[43][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[43][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[43][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[43][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[43] = 3;
 units[43] = ['60', '61'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8212. Examen TIC A2 2010 interna";
 preguntaids[43] = 8212


//  Id pregunta: 3800 Año de creación de pregunta: 2002
 questions[44]= "45)  El tiempo de programaci&oacute;n de un proyecto software depende principalmente de:";
 choices[44]= new Array();
 choices[44][0] = "Funcionalidad requerida";
 choices[44][1] = "Fiabilidad";
 choices[44][2] = "Tiempo de  respuesta";
 choices[44][3] = "Son ciertas todas las anteriores respuestas";
 answers[44] = 3;
 units[44] = ['94'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3800. ";
 preguntaids[44] = 3800


//  Id pregunta: 4665 Año de creación de pregunta: 2002
 questions[45]= "46)  De las siguientes funciones, &iquest;cu&aacute;l no es propia del protocolo de nivel de red?:";
 choices[45]= new Array();
 choices[45][0] = "Conmutaci&oacute;n";
 choices[45][1] = "Encaminamiento";
 choices[45][2] = "Multiplexaci&oacute;n";
 choices[45][3] = "Tarificaci&oacute;n";
 answers[45] = 3;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4665. ";
 preguntaids[45] = 4665


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[46]= "47)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "Con el a&ntilde;o anterior.";
 choices[46][1] = "Con los tres a&ntilde;os anteriores.";
 choices[46][2] = "Con el a&ntilde;o natural.";
 choices[46][3] = "Con los dos a&ntilde;os anteriores.";
 answers[46] = 2;
 units[46] = ['11'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 284. Presupuestos generales";
 preguntaids[46] = 284


//  Id pregunta: 5301 Año de creación de pregunta: 2006
 questions[47]= "48)  IRC es:";
 choices[47]= new Array();
 choices[47][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[47][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[47][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[47][3] = "b) y c) son correctas.";
 answers[47] = 2;
 units[47] = ['103'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5301. ";
 preguntaids[47] = 5301


//  Id pregunta: 7683 Año de creación de pregunta: 2010
 questions[48]= "49)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, &iquest;cada cu&aacute;nto tiempo, como m&iacute;nimo, la La Comisi&oacute;n Nacional de los Mercados y la Competencia llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea.?";
 choices[48]= new Array();
 choices[48][0] = "Cada a&ntilde;o.";
 choices[48][1] = "Cada dos a&ntilde;os.";
 choices[48][2] = "Cada cuatro a&ntilde;os.";
 choices[48][3] = "Cada seis a&ntilde;os.";
 answers[48] = 1;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 7683. Similar a Map 2007";
 preguntaids[48] = 7683


//  Id pregunta: 2152 Año de creación de pregunta: 2002
 questions[49]= "50)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[49]= new Array();
 choices[49][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[49][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[49][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[49][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[49] = 2;
 units[49] = ['41'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2152. ";
 preguntaids[49] = 2152


//  Id pregunta: 2279 Año de creación de pregunta: 2002
 questions[50]= "51)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[50]= new Array();
 choices[50][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[50][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[50][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[50][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[50] = 1;
 units[50] = ['35'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2279. ";
 preguntaids[50] = 2279


//  Id pregunta: 4171 Año de creación de pregunta: 2006
 questions[51]= "52)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[51]= new Array();
 choices[51][0] = "No tiene grupos repetitivos";
 choices[51][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[51][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[51][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[51] = 1;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 4171. ";
 preguntaids[51] = 4171


//  Id pregunta: 5887 Año de creación de pregunta: 2007
 questions[52]= "53)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[52]= new Array();
 choices[52][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[52][1] = "Firma electr&oacute;nica";
 choices[52][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[52][3] = "Todas las anteriores son ciertas";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 5887. Ley 56/2007";
 preguntaids[52] = 5887


//  Id pregunta: 10613 Año de creación de pregunta: 2015
 questions[53]= "54)  Seg&uacute;n la Ley 9/2014, las propuestas para la elaboraci&oacute;n de normativa relativa a las infraestructuras comunes de comunicaciones electr&oacute;nicas en el interior de edificios es funci&oacute;n de:";
 choices[53]= new Array();
 choices[53][0] = "Ministerio de Energia, Turismo y Agenda Digital.";
 choices[53][1] = "AGE.";
 choices[53][2] = "Organismos internacionales.";
 choices[53][3] = "CNMC.";
 answers[53] = 0;
 units[53] = ['121'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10613. Articulo 69";
 preguntaids[53] = 10613


//  Id pregunta: 1029 Año de creación de pregunta: 2016
 questions[54]= "55)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[54]= new Array();
 choices[54][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[54][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[54][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[54][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[54] = 0;
 units[54] = ['4', '7', '8', '9'];
 blocks[54] = ['A1', 'A2'];
 comments[54] = "Id Pregunta: 1029. Ley 40/2015";
 preguntaids[54] = 1029


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[55]= new Array();
 choices[55][0] = "Fue elaborada y aprobada por la CETIC";
 choices[55][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[55][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[55][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[55] = 1;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 456. Estrategia TIC";
 preguntaids[55] = 456


//  Id pregunta: 1569 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de entre los protocolos que componen SSL reside al nivel m&aacute;s bajo y proporciona el encapsulado a los protocolos del nivel superior:";
 choices[56]= new Array();
 choices[56][0] = "Record.";
 choices[56][1] = "Handshake.";
 choices[56][2] = "Alert.";
 choices[56][3] = "Change Cipher Spec.";
 answers[56] = 0;
 units[56] = ['120'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 1569. ";
 preguntaids[56] = 1569


//  Id pregunta: 9726 Año de creación de pregunta: 2014
 questions[57]= "58)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[57]= new Array();
 choices[57][0] = "E.122";
 choices[57][1] = "E.123";
 choices[57][2] = "E.231";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 1;
 units[57] = ['110'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 9726. ";
 preguntaids[57] = 9726


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cual NO es una misi&oacute;n del Punto de Acceso General (PAG)";
 choices[58]= new Array();
 choices[58][0] = "Orienta al ciudadano en su relaci&oacute;n con las AP, ofreciendo la informaci&oacute;n y los servicios a su disposici&oacute;n";
 choices[58][1] = "Ofrece de manera centralizada ayuda a las empresas y emprendedores para facilitar la creaci&oacute;n de empresas desde la red";
 choices[58][2] = "Acceso al cat&aacute;logo de todos los procedimientos administrativos da la AGE y resto de admisnitraciones+";
 choices[58][3] = "Fomenta el uso de la tramitaci&oacute;n electr&oacute;nica por los ciudadanos al simplificar el acceso a los servicios electr&oacute;nicos";
 answers[58] = 2;
 units[58] = ['47'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 625. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[58] = 625


//  Id pregunta: 7126 Año de creación de pregunta: 2010
 questions[59]= "60)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[59]= new Array();
 choices[59][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[59][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[59][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[59][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[59] = 0;
 units[59] = ['77'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 7126. Ley 59/2003, art&iacute;culo 3";
 preguntaids[59] = 7126


//  Id pregunta: 8133 Año de creación de pregunta: 2011
 questions[60]= "61)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[60]= new Array();
 choices[60][0] = "Una relaci&oacute;n N:M.";
 choices[60][1] = "Una relaci&oacute;n 1:N.";
 choices[60][2] = "Una relaci&oacute;n 1:1.";
 choices[60][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite.";
 answers[60] = 0;
 units[60] = ['60', '61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8133. Examen TIC A2 2010 interna";
 preguntaids[60] = 8133


//  Id pregunta: 1322 Año de creación de pregunta: 2016
 questions[61]= "62)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[61]= new Array();
 choices[61][0] = "Especialista en Comunicaciones.";
 choices[61][1] = "Usuarios expertos.";
 choices[61][2] = "T&eacute;cnicos de Comunicaciones.";
 choices[61][3] = "Grupo de Aseguramiento de la Calidad.";
 answers[61] = 3;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 1322. ";
 preguntaids[61] = 1322


//  Id pregunta: 9713 Año de creación de pregunta: 2014
 questions[62]= "63)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[62]= new Array();
 choices[62][0] = "Si";
 choices[62][1] = "No";
 choices[62][2] = "Depende de la configuraci&oacute;n del FW";
 choices[62][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[62] = 1;
 units[62] = ['119'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9713. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";
 preguntaids[62] = 9713


//  Id pregunta: 5604 Año de creación de pregunta: 2007
 questions[63]= "64)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[63]= new Array();
 choices[63][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[63][1] = "Es la m&aacute;s corta del proyecto.";
 choices[63][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[63][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[63] = 0;
 units[63] = ['33'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 5604. Castilla la mancha 2006";
 preguntaids[63] = 5604


//  Id pregunta: 8422 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[64]= new Array();
 choices[64][0] = "Drill-Across.";
 choices[64][1] = "Drill-In.";
 choices[64][2] = "Roll-Up.";
 choices[64][3] = "Rotaci&oacute;n.";
 answers[64] = 2;
 units[64] = ['72'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8422. Operador Ayto. Madrid 2010";
 preguntaids[64] = 8422


//  Id pregunta: 4778 Año de creación de pregunta: 2002
 questions[65]= "66)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[65]= new Array();
 choices[65][0] = "RDSI";
 choices[65][1] = "ADSL";
 choices[65][2] = "RTC";
 choices[65][3] = "TCP-IP";
 answers[65] = 1;
 units[65] = ['108'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4778. ";
 preguntaids[65] = 4778


//  Id pregunta: 1887 Año de creación de pregunta: 2016
 questions[66]= "67)  Cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[66]= new Array();
 choices[66][0] = "IPSEC es utilizada para el establecimiento de t&uacute;neles seguros a trav&eacute;s de Internet";
 choices[66][1] = "IPSEC se comporta igual con Ipv4 que con Ipv6";
 choices[66][2] = "Con IPSEC se garantiza la integridad y la autenticidad, siendo la confidencialidad opcional";
 choices[66][3] = "Cada conexi&oacute;n con IPSEC requiere de dos SA para que sea bidireccional";
 answers[66] = 1;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1887. ";
 preguntaids[66] = 1887


//  Id pregunta: 1045 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[67]= new Array();
 choices[67][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[67][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[67][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[67][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[67] = 0;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 1045. Ley 40/2015";
 preguntaids[67] = 1045


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[68]= "69)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[68]= new Array();
 choices[68][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[68][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[68][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[68][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[68] = 1;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[68] = 215


//  Id pregunta: 7030 Año de creación de pregunta: 2010
 questions[69]= "70)  Seg&uacute;n Pressman, &iquest;cu&aacute;l de los siguientes no es un objetivo que deba cumplir un modelo de an&aacute;lisis (especificaci&oacute;n)?";
 choices[69]= new Array();
 choices[69][0] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o software";
 choices[69][1] = "Definir el calendario de ejecuci&oacute;n del proyecto";
 choices[69][2] = "Definir un conjunto de requisitos que una vez el sistema est&eacute; construido se puedan validar";
 choices[69][3] = "Describir lo que el cliente quiere";
 answers[69] = 1;
 units[69] = ['84'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 7030. ";
 preguntaids[69] = 7030


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[70]= "71)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[70]= new Array();
 choices[70][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[70][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[70][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[70][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[70] = 3;
 units[70] = ['43'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 586. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[70] = 586


//  Id pregunta: 3848 Año de creación de pregunta: 2002
 questions[71]= "72)  Entre los objetivos de los DFDs se encuentra:";
 choices[71]= new Array();
 choices[71][0] = "Hacer referencia al entorno f&iacute;sico";
 choices[71][1] = "Crear un modelo funcional del sistema";
 choices[71][2] = "Representar el &quot;c&oacute;mo se va a hacer el sistema&quot; en lugar del &quot;qu&eacute; se va a hacer en el sistema&quot;";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = 1;
 units[71] = ['85', '86'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3848. ";
 preguntaids[71] = 3848


//  Id pregunta: 10141 Año de creación de pregunta: 2015
 questions[72]= "73)  Respecto a Bluetooth es correcto que:";
 choices[72]= new Array();
 choices[72][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[72][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[72][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[72][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[72] = 1;
 units[72] = ['108'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10141. Examen TIC A1 2014";
 preguntaids[72] = 10141


//  Id pregunta: 5747 Año de creación de pregunta: 2007
 questions[73]= "74)  Cual de los siguientes servicios o redes est&aacute;n sujetos al &aacute;mbito de aplicaci&oacute;n de la Ley 9/2014 General de Telecomunicaciones";
 choices[73]= new Array();
 choices[73][0] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n sonora";
 choices[73][1] = "los contenidos difundidos a trav&eacute;s del servicio de radiodifusi&oacute;n televisiva";
 choices[73][2] = "las redes de televisi&oacute;n por cable";
 choices[73][3] = "servicios que suministren contenidos transmitidos mediante redes y servicios de comunicaciones electr&oacute;nicas";
 answers[73] = 2;
 units[73] = ['121'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5747. ";
 preguntaids[73] = 5747


//  Id pregunta: 2221 Año de creación de pregunta: 2002
 questions[74]= "75)  La duraci&oacute;n de la protecci&oacute;n otorgada por el Texto Refundido de la Ley de Propiedad Intelectual, aprobada por Real Decreto Legislativo 1/1996, a los programas de ordenador es de:";
 choices[74]= new Array();
 choices[74][0] = "50 a&ntilde;os";
 choices[74][1] = "30 a&ntilde;os";
 choices[74][2] = "70 a&ntilde;os desde el fallecimiento del creador, si es una persona f&iacute;sica";
 choices[74][3] = "60 a&ntilde;os en todo caso";
 answers[74] = 2;
 units[74] = ['41'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2221. ";
 preguntaids[74] = 2221


