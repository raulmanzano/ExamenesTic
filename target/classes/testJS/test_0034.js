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
//  Id pregunta: 4537 Año de creación de pregunta: 2002
 questions[0]= "1)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[0]= new Array();
 choices[0][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[0][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[0][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[0][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[0] = 1;
 units[0] = ['102'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4537. ";
 preguntaids[0] = 4537


//  Id pregunta: 4361 Año de creación de pregunta: 2004
 questions[1]= "2)  En un switch ethernet";
 choices[1]= new Array();
 choices[1][0] = "todos los puertos trabajan a la misma velocidad";
 choices[1][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[1][2] = "hace labores de enrutamiento a nivel wan";
 choices[1][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[1] = 1;
 units[1] = ['102'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4361. ";
 preguntaids[1] = 4361


//  Id pregunta: 1846 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta sobre el est&aacute;ndar IEEE 802.11";
 choices[2]= new Array();
 choices[2][0] = "Utiliza CSMA/CA como protocolo MAC";
 choices[2][1] = "La trama 802.11 contiene 4 direcciones MAC";
 choices[2][2] = "La trama 802.11 contiene 2 direcciones MAC";
 choices[2][3] = "Utiliza tramas de reconocimiento o confirmaci&oacute;n (ACK)";
 answers[2] = 2;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1846. ";
 preguntaids[2] = 1846


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[3]= new Array();
 choices[3][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[3][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[3][2] = "Fecha de otorgamiento.";
 choices[3][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[3] = 1;
 units[3] = ['43'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 595. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[3] = 595


//  Id pregunta: 7785 Año de creación de pregunta: 2010
 questions[4]= "5)  En java, el atributo &laquo;final&raquo; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella.";
 choices[4][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas.";
 choices[4][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set.";
 choices[4][3] = "Que forma parte del interface que implementa la clase.";
 answers[4] = 1;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7785. ";
 preguntaids[4] = 7785


//  Id pregunta: 2977 Año de creación de pregunta: 2002
 questions[5]= "6)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[5][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[5][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[5][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[5] = 3;
 units[5] = ['96', '97'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 2977. ";
 preguntaids[5] = 2977


//  Id pregunta: 1175 Año de creación de pregunta: 2016
 questions[6]= "7)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[6]= new Array();
 choices[6][0] = "EntityConnection.";
 choices[6][1] = "SqlConnection.";
 choices[6][2] = "SqlCeConnection.";
 choices[6][3] = "OleOdbcConnection.";
 answers[6] = 3;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1175. ";
 preguntaids[6] = 1175


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[7]= new Array();
 choices[7][0] = "El Parlamento y el Consejo.";
 choices[7][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[7][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[7][3] = "La Comisi&oacute;n y el Consejo.";
 answers[7] = 2;
 units[7] = ['5'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 194. Uni&oacute;n Europea";
 preguntaids[7] = 194


//  Id pregunta: 9093 Año de creación de pregunta: 2014
 questions[8]= "9)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[8]= new Array();
 choices[8][0] = "SIR.";
 choices[8][1] = "ORVE.";
 choices[8][2] = "SICRES 3.0.";
 choices[8][3] = "SVDR.";
 answers[8] = 1;
 units[8] = ['47'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 9093. Examen TIC-A1 2013";
 preguntaids[8] = 9093


//  Id pregunta: 9282 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[9]= new Array();
 choices[9][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales.";
 choices[9][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[9][2] = "Valoraci&oacute;n de Alternativas.";
 choices[9][3] = "Definici&oacute;n del sistema.";
 answers[9] = 0;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 9282. Examen TIC A2 2013. Promocion interna";
 preguntaids[9] = 9282


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[10]= "11)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[10]= new Array();
 choices[10][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[10][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[10][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[10][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[10] = 2;
 units[10] = ['7'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 231. Ley 39/2015";
 preguntaids[10] = 231


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[11]= new Array();
 choices[11][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[11][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[11][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[11][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[11] = 1;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 236. Ley 39/2015";
 preguntaids[11] = 236


//  Id pregunta: 2739 Año de creación de pregunta: 2002
 questions[12]= "13)  El acr&oacute;nimo XML corresponde a:";
 choices[12]= new Array();
 choices[12][0] = "Extensible Markup Language";
 choices[12][1] = "Extended Markup Language";
 choices[12][2] = "Expressions Markup Language";
 choices[12][3] = "Extension Markup Language";
 answers[12] = 0;
 units[12] = ['74'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2739. ";
 preguntaids[12] = 2739


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[13]= "14)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[13]= new Array();
 choices[13][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[13][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[13][2] = "Ambas son correctas.";
 choices[13][3] = "A y B son incorrectas.";
 answers[13] = 2;
 units[13] = ['14'];
 blocks[13] = ['A3'];
 comments[13] = "Id Pregunta: 381. Pol&iacute;ticas de igualdad";
 preguntaids[13] = 381


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[14]= "15)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[14]= new Array();
 choices[14][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[14][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[14][2] = "A y B son correctas.";
 choices[14][3] = "A y B son incorrectas.";
 answers[14] = 2;
 units[14] = ['4', '7', '8', '9'];
 blocks[14] = ['A1', 'A2'];
 comments[14] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[14] = 1040


//  Id pregunta: 5997 Año de creación de pregunta: 2003
 questions[15]= "16)  En un sistema con memoria virtual, la pol&iacute;tica de reemplazo &oacute;ptima es aqu&eacute;lla que aconseja reemplazar la p&aacute;gina:";
 choices[15]= new Array();
 choices[15][0] = "Que m&aacute;s tiempo lleva en memoria.";
 choices[15][1] = "Que m&aacute;s tiempo vaya a tardar en ser referenciada.";
 choices[15][2] = "Que lleva m&aacute;s tiempo sin ser referenciada.";
 choices[15][3] = "Que ha sido utilizada con menos frecuencia.";
 answers[15] = 1;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5997. TIC B 2007";
 preguntaids[15] = 5997


//  Id pregunta: 6476 Año de creación de pregunta: 2003
 questions[16]= "17)  &iquest;Qu&eacute; es el blended learning?";
 choices[16]= new Array();
 choices[16][0] = "Un modelo de referencia del e-learning";
 choices[16][1] = "Una modalidad de e-learning que incluye ense&ntilde;anza presencial";
 choices[16][2] = "Una inciativa para estandarizar el e-learning";
 choices[16][3] = "Una clase de ense&ntilde;anza virtual";
 answers[16] = 1;
 units[16] = ['70'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6476. ";
 preguntaids[16] = 6476


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[17]= new Array();
 choices[17][0] = "11";
 choices[17][1] = "12";
 choices[17][2] = "14";
 choices[17][3] = "8";
 answers[17] = 1;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 21. Constituci&oacute;n de 1978";
 preguntaids[17] = 21


//  Id pregunta: 4485 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[18]= new Array();
 choices[18][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[18][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[18][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[18][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[18] = 3;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4485. ";
 preguntaids[18] = 4485


//  Id pregunta: 4617 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Qu&eacute; mecanismo de acceso al medio utiliza una red Token Ring?:";
 choices[19]= new Array();
 choices[19][0] = "Interrogaci&oacute;n y respuesta (Polling Selecting)";
 choices[19][1] = "Paso de testigo";
 choices[19][2] = "CSMA/CD";
 choices[19][3] = "DQDB";
 answers[19] = 1;
 units[19] = ['104'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4617. ";
 preguntaids[19] = 4617


//  Id pregunta: 9099 Año de creación de pregunta: 2014
 questions[20]= "21)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[20]= new Array();
 choices[20][0] = "48 meses.";
 choices[20][1] = "24 meses.";
 choices[20][2] = "12 meses.";
 choices[20][3] = "6 meses.";
 answers[20] = 2;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 9099. Examen TIC-A1 2013";
 preguntaids[20] = 9099


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[21]= "22)  Son servicios declarados compartidos:";
 choices[21]= new Array();
 choices[21][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[21][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[21][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[21][3] = "Todos los anteriores";
 answers[21] = 3;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 466. Estrategia TIC";
 preguntaids[21] = 466


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[22]= "23)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[22]= new Array();
 choices[22][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[22][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[22][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[22][3] = "todas son correctas";
 answers[22] = 3;
 units[22] = ['7'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 230. Ley 39/2015";
 preguntaids[22] = 230


//  Id pregunta: 9894 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la Ley 39/2015, &iquest;para cu&aacute;l de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica?";
 choices[23]= new Array();
 choices[23][0] = "Iniciar un procedimiento.";
 choices[23][1] = "Interponer un recurso.";
 choices[23][2] = "Desistir de acciones.";
 choices[23][3] = "Renunciar a derechos.";
 answers[23] = 0;
 units[23] = ['7', '19'];
 blocks[23] = ['A2', 'A4'];
 comments[23] = "Id Pregunta: 9894. ";
 preguntaids[23] = 9894


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[24]= "25)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[24]= new Array();
 choices[24][0] = "25 parlamentarios.";
 choices[24][1] = "29 parlamentarios.";
 choices[24][2] = "18 parlamentarios.";
 choices[24][3] = "23 parlamentarios.";
 answers[24] = 0;
 units[24] = ['5'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 188. Uni&oacute;n Europea";
 preguntaids[24] = 188


//  Id pregunta: 6436 Año de creación de pregunta: 2003
 questions[25]= "26)  Indicar la respuesta verdadera";
 choices[25]= new Array();
 choices[25][0] = "El formato PDF417 permite almacenar hasta 2710 caracteres y soporta detecci&oacute;n y correcci&oacute;n de errores";
 choices[25][1] = "PCR (Printed Character Recognition) son los sistemas que pueden reconocer informaci&oacute;n gr&aacute;fica codificada en braille";
 choices[25][2] = "Las siglas ICR responden a Intelligent Computer Redefinition";
 choices[25][3] = "Ninguna es verdadera";
 answers[25] = 0;
 units[25] = ['81'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6436. ";
 preguntaids[25] = 6436


//  Id pregunta: 6105 Año de creación de pregunta: 2003
 questions[26]= "27)  El CMM-CMMI es:";
 choices[26]= new Array();
 choices[26][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;nen centros de proceso de datos";
 choices[26][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos";
 choices[26][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[26][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[26] = 2;
 units[26] = ['101'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6105. Examen TIC A1 MAP 2007";
 preguntaids[26] = 6105


//  Id pregunta: 9713 Año de creación de pregunta: 2014
 questions[27]= "28)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[27]= new Array();
 choices[27][0] = "Si";
 choices[27][1] = "No";
 choices[27][2] = "Depende de la configuraci&oacute;n del FW";
 choices[27][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[27] = 1;
 units[27] = ['119'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9713. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";
 preguntaids[27] = 9713


//  Id pregunta: 1623 Año de creación de pregunta: 2016
 questions[28]= "29)  En las redes Ethernet las especificaciones del medio son variadas. Para la especificaci&oacute;n 1000Base-T, indique qu&eacute; cable se utiliza:";
 choices[28]= new Array();
 choices[28][0] = "FTP";
 choices[28][1] = "Coaxial fino";
 choices[28][2] = "UTP-5";
 choices[28][3] = "UTP-3";
 answers[28] = 2;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1623. ";
 preguntaids[28] = 1623


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[29]= new Array();
 choices[29][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[29][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[29][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[29] = 2;
 units[29] = ['11'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 311. Presupuestos generales";
 preguntaids[29] = 311


//  Id pregunta: 1785 Año de creación de pregunta: 2016
 questions[30]= "31)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, otorga la equivalencia funcional con la firma manuscrita respecto de los datos consignados en forma electr&oacute;nica a:";
 choices[30]= new Array();
 choices[30][0] = "La firma electr&oacute;nica general.";
 choices[30][1] = "La firma electr&oacute;nica avanzada.";
 choices[30][2] = "La firma electr&oacute;nica reconocida";
 choices[30][3] = "La firma electr&oacute;nica autenticada.";
 answers[30] = 2;
 units[30] = ['77'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1785. ";
 preguntaids[30] = 1785


//  Id pregunta: 1920 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; funci&oacute;n realiza el splitter en la conexi&oacute;n ADSL?";
 choices[31]= new Array();
 choices[31][0] = "Para discriminar dos bandas de frecuencias";
 choices[31][1] = "Para ecualizar la se&ntilde;al vocal";
 choices[31][2] = "EI splitter solo se utiliza en las conexiones HDSL";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 0;
 units[31] = ['106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 1920. ";
 preguntaids[31] = 1920


//  Id pregunta: 4260 Año de creación de pregunta: 2006
 questions[32]= "33)  &iquest;La agudeza visual del hombre es capaz de identificar pixeles de?";
 choices[32]= new Array();
 choices[32][0] = "50&micro;m";
 choices[32][1] = "10&micro;m";
 choices[32][2] = "100&micro;m";
 choices[32][3] = "70&micro;m";
 answers[32] = 2;
 units[32] = ['80'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 4260. ";
 preguntaids[32] = 4260


//  Id pregunta: 1669 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;El lenguaje de programaci&oacute;n java tiene APIs para el protocolo de comunicaciones seguras Secure Sockets Layer (SSL)?.";
 choices[33]= new Array();
 choices[33][0] = "S&iacute;, por ejemplo, la Java Secure Socket Extensi&oacute;n (JSSE) que incluye clases que pueden ser instanciadas para crear canales seguros.";
 choices[33][1] = "En la actualidad para realizar las funciones de encriptaci&oacute;n de la informaci&oacute;n solo est&aacute; disponible la clase SSLSocket.";
 choices[33][2] = "Java solo admite SSL para programar clientes web.";
 choices[33][3] = "S&iacute;, cuenta con las CRL o listas de revocaci&oacute;n de certificados.";
 answers[33] = 0;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1669. ";
 preguntaids[33] = 1669


//  Id pregunta: 3361 Año de creación de pregunta: 2006
 questions[34]= "35)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[34]= new Array();
 choices[34][0] = "PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[34][1] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[34][2] = "PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[34][3] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 answers[34] = 0;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3361. ";
 preguntaids[34] = 3361


//  Id pregunta: 7043 Año de creación de pregunta: 2001
 questions[35]= "36)  &iquest;Qu&eacute; dos tipos de atributos puede tener un objeto?";
 choices[35]= new Array();
 choices[35][0] = "Atributos de clase y atributos de instancia";
 choices[35][1] = "Atributos visibles y atributos ciegos";
 choices[35][2] = "Atributos heredados y atributos no heredados";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 0;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7043. ";
 preguntaids[35] = 7043


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[36]= new Array();
 choices[36][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[36][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[36][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[36][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[36] = 1;
 units[36] = ['11'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 263. Direcci&oacute;n p&uacute;blica";
 preguntaids[36] = 263


//  Id pregunta: 1484 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l es la norma ISO (Organizaci&oacute;n Internacional de Estandarizaci&oacute;n) relativa a la documentaci&oacute;n para usuarios de software?";
 choices[37]= new Array();
 choices[37][0] = "ISO/IEC 26514:2008";
 choices[37][1] = "ISO 9001:2000";
 choices[37][2] = "ISO 30300";
 choices[37][3] = "ISO 27002";
 answers[37] = 0;
 units[37] = ['82'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1484. ";
 preguntaids[37] = 1484


//  Id pregunta: 8623 Año de creación de pregunta: 2013
 questions[38]= "39)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[38]= new Array();
 choices[38][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[38][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[38][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[38][3] = "Todas son verdaderas";
 answers[38] = 0;
 units[38] = ['75'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8623. ";
 preguntaids[38] = 8623


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[39]= "40)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[39]= new Array();
 choices[39][0] = "solo mediante ley";
 choices[39][1] = "reglamentariamente";
 choices[39][2] = "mediante ley o reglamentariamente";
 choices[39][3] = "ninguna es correcta";
 answers[39] = 0;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[39] = 212


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[40]= "41)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[40]= new Array();
 choices[40][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[40][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[40][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[40][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[40] = 2;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[40] = 488


//  Id pregunta: 3801 Año de creación de pregunta: 2002
 questions[41]= "42)  En an&aacute;lisis estructurado, el principal objetivo de un DFD es:";
 choices[41]= new Array();
 choices[41][0] = "Construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[41][1] = "Representar gr&aacute;ficamente las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[41][2] = "Describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[41][3] = "Establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[41] = 0;
 units[41] = ['85', '86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3801. ";
 preguntaids[41] = 3801


//  Id pregunta: 7201 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[42]= new Array();
 choices[42][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[42][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[42][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[42][3] = "Es un servicio punto a punto";
 answers[42] = 2;
 units[42] = ['117'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7201. Castilla La Mancha 2009";
 preguntaids[42] = 7201


//  Id pregunta: 9688 Año de creación de pregunta: 2014
 questions[43]= "44)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[43][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[43][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[43][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[43] = 3;
 units[43] = ['77'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9688. ";
 preguntaids[43] = 9688


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[44]= "45)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[44]= new Array();
 choices[44][0] = "Interoperabilidad";
 choices[44][1] = "Integridad";
 choices[44][2] = "Capital humano";
 choices[44][3] = "Trazabilidad";
 answers[44] = 2;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 486. Sociedad de la informaci&oacute;n";
 preguntaids[44] = 486


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique la afirmaci&oacute;n falsa:";
 choices[45]= new Array();
 choices[45][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[45][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[45][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[45][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[45] = 1;
 units[45] = ['22'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 509. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[45] = 509


//  Id pregunta: 1634 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l de los siguientes NO es un paquete que se curse en el nivel 3 del protocolo X.25 en la fase de establecimiento de la conexi&oacute;n";
 choices[46]= new Array();
 choices[46][0] = "CALL REQUEST";
 choices[46][1] = "INCOMING CALL";
 choices[46][2] = "CLEAR INDICATION";
 choices[46][3] = "CALL CONECTED";
 answers[46] = 2;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1634. ";
 preguntaids[46] = 1634


//  Id pregunta: 3912 Año de creación de pregunta: 2002
 questions[47]= "48)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[47]= new Array();
 choices[47][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos";
 choices[47][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[47][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[47][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[47] = 0;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3912. ";
 preguntaids[47] = 3912


//  Id pregunta: 10159 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[48]= new Array();
 choices[48][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[48][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[48][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[48][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[48] = 1;
 units[48] = ['63'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10159. Examen TIC A1 2014";
 preguntaids[48] = 10159


//  Id pregunta: 8755 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[49]= new Array();
 choices[49][0] = "Un control de desarrollo es el que comprueba que el resultado obtenido concuerda con las especificaciones iniciales.";
 choices[49][1] = "Un control de proceso asegura que la explotaci&oacute;n se realiza con las versiones adecuadas de los programas y de los datos.";
 choices[49][2] = "Un control de continuaci&oacute;n determina que se evita la p&eacute;rdida o corrupci&oacute;n de informaci&oacute;n efectuando las salvaguardas y recuperaciones necesarias.";
 choices[49][3] = "Un control de configuraci&oacute;n asegura que la explotaci&oacute;n se realiza con las versiones adecuadas de los programas y de los datos.";
 answers[49] = 3;
 units[49] = ['36'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 8755. ";
 preguntaids[49] = 8755


//  Id pregunta: 4080 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Qu&eacute; relaci&oacute;n hay entre usuarios y actores en la t&eacute;cnica de los casos de uso?";
 choices[50]= new Array();
 choices[50][0] = "Un usuario se identifica &uacute;nicamente con un actor";
 choices[50][1] = "Un usuario solamente puede ser varios actores";
 choices[50][2] = "Un actor solamente puede ser varios usuarios";
 choices[50][3] = "Un actor puede ser varios usuarios y un usuario varios actores";
 answers[50] = 3;
 units[50] = ['89'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 4080. EXAMEN CASTILLA LA MANCHA";
 preguntaids[50] = 4080


//  Id pregunta: 6551 Año de creación de pregunta: 2003
 questions[51]= "52)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[51]= new Array();
 choices[51][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[51][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[51][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[51][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[51] = 2;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 6551. ";
 preguntaids[51] = 6551


//  Id pregunta: 4139 Año de creación de pregunta: 2003
 questions[52]= "53)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[52]= new Array();
 choices[52][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[52][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[52][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[52][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[52] = 3;
 units[52] = ['81'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 4139. ";
 preguntaids[52] = 4139


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[53]= "54)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[53]= new Array();
 choices[53][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[53][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[53][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[53][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[53] = 3;
 units[53] = ['14'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 363. Pol&iacute;ticas de igualdad";
 preguntaids[53] = 363


//  Id pregunta: 6506 Año de creación de pregunta: 2003
 questions[54]= "55)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[54]= new Array();
 choices[54][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[54][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[54][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[54][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[54] = 3;
 units[54] = ['119'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 6506. ";
 preguntaids[54] = 6506


//  Id pregunta: 3418 Año de creación de pregunta: 2006
 questions[55]= "56)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[55]= new Array();
 choices[55][0] = "Redes neuronales; representaci&oacute;n por marcos y sistemas basados en restricciones";
 choices[55][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[55][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[55][3] = "Algoritmos gen&eacute;ticos; redes neuronales y perceptr&oacute;n";
 answers[55] = 3;
 units[55] = ['68'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 3418. ";
 preguntaids[55] = 3418


//  Id pregunta: 9164 Año de creación de pregunta: 2014
 questions[56]= "57)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[56]= new Array();
 choices[56][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[56][1] = "Suplantaci&oacute;n de identidad.";
 choices[56][2] = "Denegaci&oacute;n de servicio.";
 choices[56][3] = "Manipulaci&oacute;n de un recurso.";
 answers[56] = 0;
 units[56] = ['120'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 9164. Examen TIC A2 2013";
 preguntaids[56] = 9164


//  Id pregunta: 1984 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura de servicios Web NO es correcta?";
 choices[57]= new Array();
 choices[57][0] = "Es un software que soporta interacciones m&aacute;quina a m&aacute;quina de forma interoperable.";
 choices[57][1] = "Tiene una interfaz descrita en un determinado formato SOAP, con la que se interact&uacute;a mediante el intercambio de mensajes.";
 choices[57][2] = "Posee un servicio de registro donde se publican los formatos de los servicios web a consultar.";
 choices[57][3] = "EI organismo W3C no especifica c&oacute;mo se implementan los servicios web, sino que define modelos conceptuales y principales aspectos a considerar en la utilizaci&oacute;n de servicios web.";
 answers[57] = 1;
 units[57] = ['55'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1984. ";
 preguntaids[57] = 1984


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[58]= new Array();
 choices[58][0] = "10 d&iacute;as.";
 choices[58][1] = "15 d&iacute;as.";
 choices[58][2] = "1 mes.";
 choices[58][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[58] = 0;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[58] = 207


//  Id pregunta: 1041 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n (articulo 157 de la ley 40/2015):";
 choices[59]= new Array();
 choices[59][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[59][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[59][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[59][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[59] = 1;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 1041. Ley 40/2015";
 preguntaids[59] = 1041


//  Id pregunta: 9319 Año de creación de pregunta: 2014
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[60]= new Array();
 choices[60][0] = "Pago mediante cargo en cuenta";
 choices[60][1] = "Pago con tarjeta";
 choices[60][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[60][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[60] = 3;
 units[60] = ['10'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 9319. ";
 preguntaids[60] = 9319


//  Id pregunta: 6263 Año de creación de pregunta: 2003
 questions[61]= "62)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[61]= new Array();
 choices[61][0] = "Debilidades";
 choices[61][1] = "Amenazas";
 choices[61][2] = "Fortalezas";
 choices[61][3] = "Oportunidades";
 answers[61] = 3;
 units[61] = ['83'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6263. ";
 preguntaids[61] = 6263


//  Id pregunta: 7958 Año de creación de pregunta: 2011
 questions[62]= "63)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[62]= new Array();
 choices[62][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[62][1] = "El n&uacute;mero de canales de alta velocidad disponibles.";
 choices[62][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[62][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[62] = 3;
 units[62] = ['108'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7958. Examen TIC A2 2010";
 preguntaids[62] = 7958


//  Id pregunta: 2182 Año de creación de pregunta: 2002
 questions[63]= "64)  En una auditor&iacute;a de un sistema EDI, &iquest;cu&aacute;les son las principales &aacute;reas de revisi&oacute;n y evaluaci&oacute;n, en las que los auditores y el personal especializado de soporte deben centrarse?:";
 choices[63]= new Array();
 choices[63][0] = "Conocimiento del negocio, evaluaci&oacute;n de controles y pruebas";
 choices[63][1] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de los controles generales, evaluaci&oacute;n de los controles de operaci&oacute;n, pruebas, uso de herramientas asistidas por ordenador (CAAT)";
 choices[63][2] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de controles y pruebas";
 choices[63][3] = "Conocimiento del negocio, controles administrativos y de gesti&oacute;n, evaluaci&oacute;n del riesgo, evaluaci&oacute;n del los controles de operci&oacute;n, pruebas y uso de herramientas asistidas por ordenador (CAAT)";
 answers[63] = 1;
 units[63] = ['36', '45'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2182. ";
 preguntaids[63] = 2182


//  Id pregunta: 9630 Año de creación de pregunta: 2014
 questions[64]= "65)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[64]= new Array();
 choices[64][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[64][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[64][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[64][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[64] = 3;
 units[64] = ['43'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9630. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos.";
 preguntaids[64] = 9630


//  Id pregunta: 2192 Año de creación de pregunta: 2002
 questions[65]= "66)  Estrategia es:";
 choices[65]= new Array();
 choices[65][0] = "Conjunto de reglas que aseguran la toma de una decisi&oacute;n buena en cada momento";
 choices[65][1] = "La toma de decisiones basada en aspectos contingenciales";
 choices[65][2] = "Actividad ligada a la alta direcci&oacute;n de las organizaciones en todas sus actividades, seg&uacute;n las necesidades de dicha organizaci&oacute;n";
 choices[65][3] = "Arte o traza de dirigir un asunto";
 answers[65] = 3;
 units[65] = ['28'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2192. ";
 preguntaids[65] = 2192


//  Id pregunta: 5805 Año de creación de pregunta: 2007
 questions[66]= "67)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[66]= new Array();
 choices[66][0] = "4G";
 choices[66][1] = "3.5G";
 choices[66][2] = "5G";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 1;
 units[66] = ['117'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5805. ";
 preguntaids[66] = 5805


//  Id pregunta: 8525 Año de creación de pregunta: 2012
 questions[67]= "68)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[67]= new Array();
 choices[67][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[67][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[67][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial.";
 choices[67][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[67] = 2;
 units[67] = ['10'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 8525. Art. 40 RD Legislativo 3/2011";
 preguntaids[67] = 8525


//  Id pregunta: 6230 Año de creación de pregunta: 2003
 questions[68]= "69)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[68]= new Array();
 choices[68][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[68][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[68][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[68][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[68] = 0;
 units[68] = ['115'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6230. Examen TIC A Castilla La Mancha 2007";
 preguntaids[68] = 6230


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[69]= "70)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[69]= new Array();
 choices[69][0] = "Los cr&eacute;ditos";
 choices[69][1] = "Las partidas presupuestarias";
 choices[69][2] = "Los derechos";
 choices[69][3] = "Las obligaciones";
 answers[69] = 3;
 units[69] = ['11'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[69] = 270


//  Id pregunta: 2875 Año de creación de pregunta: 2002
 questions[70]= "71)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[70]= new Array();
 choices[70][0] = "M&eacute;todo de la varianza";
 choices[70][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[70][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[70][3] = "M&eacute;todo de Kohonen";
 answers[70] = 2;
 units[70] = ['68'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2875. ";
 preguntaids[70] = 2875


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[71]= "72)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[71]= new Array();
 choices[71][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[71][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[71][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[71][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[71] = 1;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 7705. Map 2007";
 preguntaids[71] = 7705


//  Id pregunta: 6040 Año de creación de pregunta: 2003
 questions[72]= "73)  &iquest;Cu&aacute;l es el organismo acreditador espa&ntilde;ol dentro de la Infraestructura de la Calidad?";
 choices[72]= new Array();
 choices[72][0] = "AENOR";
 choices[72][1] = "ENAC";
 choices[72][2] = "Cualquier organismo de certificaci&oacute;n.";
 choices[72][3] = "Cualquier organismo certificado por el CEN (Centro Europeo de Normalizaci&oacute;n).";
 answers[72] = 1;
 units[72] = ['98'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 6040. TIC B 2007";
 preguntaids[72] = 6040


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[73]= "74)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[73]= new Array();
 choices[73][0] = "Municipios, provincias y CCAA.";
 choices[73][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[73][2] = "En CCAA, 50 provincias y municipios.";
 choices[73][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[73] = 2;
 units[73] = ['1'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[73] = 85


//  Id pregunta: 6243 Año de creación de pregunta: 2003
 questions[74]= "75)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[74]= new Array();
 choices[74][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[74][1] = "Control, Eficiencia y Servicios";
 choices[74][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[74][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[74] = 3;
 units[74] = ['84'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 6243. ";
 preguntaids[74] = 6243


