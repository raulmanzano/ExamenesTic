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
//  Id pregunta: 6777 Año de creación de pregunta: 2010
 questions[0]= "1)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Verificaci&oacute;n";
 choices[0][1] = "Validaci&oacute;n";
 choices[0][2] = "Gesti&oacute;n de requisitos";
 choices[0][3] = "Desarrollo de requisitos";
 answers[0] = 3;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6777. Castilla La Mancha 2009";
 preguntaids[0] = 6777


//  Id pregunta: 6895 Año de creación de pregunta: 2010
 questions[1]= "2)  En un diagrama de flujo de datos:";
 choices[1]= new Array();
 choices[1][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto con otro almac&eacute;n como con un proceso.";
 choices[1][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto con una entidad externa como con un proceso.";
 choices[1][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos con un proceso.";
 choices[1][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos con un almac&eacute;n.";
 answers[1] = 2;
 units[1] = ['86'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 6895. TIC A 2009";
 preguntaids[1] = 6895


//  Id pregunta: 6953 Año de creación de pregunta: 2010
 questions[2]= "3)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[2]= new Array();
 choices[2][0] = "T&eacute;cnicos de sistemas";
 choices[2][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[2][2] = "Programadores";
 choices[2][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[2] = 1;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 6953. TIC-B 2009 bloque desarrollo";
 preguntaids[2] = 6953


//  Id pregunta: 6806 Año de creación de pregunta: 2010
 questions[3]= "4)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[3]= new Array();
 choices[3][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[3][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[3][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[3][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[3] = 2;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 6806. TIC A 2009";
 preguntaids[3] = 6806


//  Id pregunta: 6991 Año de creación de pregunta: 2010
 questions[4]= "5)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[4]= new Array();
 choices[4][0] = "Ingenier&iacute;a hacia delante.";
 choices[4][1] = "Reestructuraci&oacute;n.";
 choices[4][2] = "Reingenier&iacute;a.";
 choices[4][3] = "Ingenier&iacute;a inversa.";
 answers[4] = 1;
 units[4] = ['97'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 6991. TIC-B 2009 bloque desarrollo";
 preguntaids[4] = 6991


//  Id pregunta: 6813 Año de creación de pregunta: 2010
 questions[5]= "6)  La redocumentaci&oacute;n es:";
 choices[5]= new Array();
 choices[5][0] = "Una forma de ingenier&iacute;a inversa.";
 choices[5][1] = "Es el proceso mediante el que se produce documentaci&oacute;n desde un sistema en desarrollo.";
 choices[5][2] = "Es el mismo concepto que humanware.";
 choices[5][3] = "Es la identificaci&oacute;n de los componentes de un sistema y sus relaciones.";
 answers[5] = 0;
 units[5] = ['97'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 6813. TIC A 2009";
 preguntaids[5] = 6813


//  Id pregunta: 6674 Año de creación de pregunta: 2009
 questions[6]= "7)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[6]= new Array();
 choices[6][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[6][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[6][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[6][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[6] = 0;
 units[6] = ['84'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 6674. MAP 2008 A1";
 preguntaids[6] = 6674


//  Id pregunta: 6738 Año de creación de pregunta: 2009
 questions[7]= "8)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[7]= new Array();
 choices[7][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[7][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[7][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[7][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[7] = 1;
 units[7] = ['92'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6738. MAP 2008 A1";
 preguntaids[7] = 6738


//  Id pregunta: 6963 Año de creación de pregunta: 2010
 questions[8]= "9)  Se&ntilde;ale la sentencia correcta:";
 choices[8]= new Array();
 choices[8][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[8][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[8][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[8][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[8] = 3;
 units[8] = ['93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 6963. TIC-B 2009 bloque desarrollo";
 preguntaids[8] = 6963


//  Id pregunta: 6960 Año de creación de pregunta: 2010
 questions[9]= "10)  En dise&ntilde;o y programaci&oacute;n de software &iquest;Cu&aacute;l de los siguientes es un tipo de acoplamiento?";
 choices[9]= new Array();
 choices[9][0] = "De marca";
 choices[9][1] = "De presentaci&oacute;n";
 choices[9][2] = "De clases";
 choices[9][3] = "De herencia";
 answers[9] = 0;
 units[9] = ['89'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 6960. TIC-B 2009 bloque desarrollo";
 preguntaids[9] = 6960


//  Id pregunta: 6683 Año de creación de pregunta: 2009
 questions[10]= "11)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, &iquest;cu&aacute;les de los siguientes tipos de procesos elementales se tienen en cuenta?";
 choices[10]= new Array();
 choices[10][0] = "Procesos elementales de datos";
 choices[10][1] = "Procesos elementales de informaci&oacute;n";
 choices[10][2] = "Procesos elementales transaccionales";
 choices[10][3] = "La A y la B son ciertas";
 answers[10] = 3;
 units[10] = ['94'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6683. ";
 preguntaids[10] = 6683


//  Id pregunta: 6775 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[11]= new Array();
 choices[11][0] = "Procesos";
 choices[11][1] = "Personas";
 choices[11][2] = "Resultados en los clientes";
 choices[11][3] = "Resultados en los proveedores";
 answers[11] = 3;
 units[11] = ['98'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6775. Castilla La Mancha 2009";
 preguntaids[11] = 6775


//  Id pregunta: 6863 Año de creación de pregunta: 2010
 questions[12]= "13)  Seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, pueden identificarse 4 tipos de mantenimiento de sistemas de informaci&oacute;n, entre los que NO se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Mantenimiento adaptativo.";
 choices[12][1] = "Mantenimiento preventivo.";
 choices[12][2] = "Mantenimiento evolutivo.";
 choices[12][3] = "Mantenimiento correctivo.";
 answers[12] = 1;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 6863. TIC A 2009";
 preguntaids[12] = 6863


//  Id pregunta: 6774 Año de creación de pregunta: 2010
 questions[13]= "14)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Eficiencia";
 choices[13][1] = "Eficacia";
 choices[13][2] = "Proceso";
 choices[13][3] = "Requisito";
 answers[13] = 0;
 units[13] = ['92'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 6774. Castilla La Mancha 2009";
 preguntaids[13] = 6774


//  Id pregunta: 6776 Año de creación de pregunta: 2010
 questions[14]= "15)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Gesti&oacute;n de la calidad";
 choices[14][1] = "Norma de la calidad";
 choices[14][2] = "Pol&iacute;tica de la calidad";
 choices[14][3] = "Direcci&oacute;n de la calidad";
 answers[14] = 2;
 units[14] = ['92'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6776. Castilla La Mancha 2009";
 preguntaids[14] = 6776


//  Id pregunta: 6914 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[15]= new Array();
 choices[15][0] = "Malcolm Baldrige, CMM, CMMI y ASQ.";
 choices[15][1] = "Malcolm Baldrige, AMD y CMMI.";
 choices[15][2] = "Malcolm Baldrige, CMM, CMMI y AMD.";
 choices[15][3] = "Malcolm Baldrige, CMM, CMMI y SPICE.";
 answers[15] = 3;
 units[15] = ['98'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 6914. ";
 preguntaids[15] = 6914


//  Id pregunta: 6979 Año de creación de pregunta: 2010
 questions[16]= "17)  Entre las metodolog&iacute;as &aacute;giles de desarrollo de software no se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Adaptive Software Development (ASD)";
 choices[16][1] = "Merisse";
 choices[16][2] = "EXtreme Programming (XP)";
 choices[16][3] = "Feature Driven Development (FDD)";
 answers[16] = 1;
 units[16] = ['84'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6979. TIC-B 2009 bloque desarrollo";
 preguntaids[16] = 6979


//  Id pregunta: 6956 Año de creación de pregunta: 2010
 questions[17]= "18)  Un requerimiento se define como una condici&oacute;n o necesidad de un usuario para resolver un problema o alcanzar un objetivo. Un requerimiento debe ser (se&ntilde;ale la correcta):";
 choices[17]= new Array();
 choices[17][0] = "Conciso, ambiguo, verificable";
 choices[17][1] = "Necesario, conciso, inconsistente";
 choices[17][2] = "Conciso, completo, verificable";
 choices[17][3] = "Completo, inconsistente, obvio";
 answers[17] = 2;
 units[17] = ['84'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6956. TIC-B 2009 bloque desarrollo";
 preguntaids[17] = 6956


//  Id pregunta: 6937 Año de creación de pregunta: 2010
 questions[18]= "19)  Indique la afirmaci&oacute;n verdadera";
 choices[18]= new Array();
 choices[18][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[18][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[18][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[18][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[18] = 0;
 units[18] = ['86'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6937. ";
 preguntaids[18] = 6937


//  Id pregunta: 6849 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;En cu&aacute;ntos 'niveles de madurez' se clasifican las organizaciones seg&uacute;n el modelo de capacidad y madurez CMM?";
 choices[19]= new Array();
 choices[19][0] = "4";
 choices[19][1] = "5";
 choices[19][2] = "3";
 choices[19][3] = "No existe tal concepto.";
 answers[19] = 1;
 units[19] = ['98'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6849. ";
 preguntaids[19] = 6849


//  Id pregunta: 7003 Año de creación de pregunta: 2010
 questions[20]= "21)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[20]= new Array();
 choices[20][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[20][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[20][2] = "Fijar el calendario de hitos y entregas";
 choices[20][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[20] = 3;
 units[20] = ['84'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 7003. TIC-B 2009 bloque desarrollo";
 preguntaids[20] = 7003


//  Id pregunta: 6737 Año de creación de pregunta: 2009
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?:";
 choices[21]= new Array();
 choices[21][0] = "Cubre distintos tipos de desarrollo: &quot;estructurado&quot; y &quot;orientado a objetos&quot;";
 choices[21][1] = "En su estructura se distinguen tres procesos principales";
 choices[21][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n";
 choices[21][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &quot;an&aacute;lisis&quot;, &quot;dise&ntilde;o&quot;, &quot;construcci&oacute;n&quot;, e &quot;implantaci&oacute;n y aceptaci&oacute;n&quot; del sistema";
 answers[21] = 3;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6737. MAP 2008 A1";
 preguntaids[21] = 6737


//  Id pregunta: 6988 Año de creación de pregunta: 2010
 questions[22]= "23)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que representa y externaliza el estado interno de un objeto sin violar la encapsulaci&oacute;n, de forma que &eacute;ste puede volver a dicho estado m&aacute;s tarde:";
 choices[22]= new Array();
 choices[22][0] = "Spider.";
 choices[22][1] = "State.";
 choices[22][2] = "Observer.";
 choices[22][3] = "Memento.";
 answers[22] = 3;
 units[22] = ['89'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 6988. TIC-B 2009 bloque desarrollo";
 preguntaids[22] = 6988


//  Id pregunta: 6865 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[23]= new Array();
 choices[23][0] = "Distribuci&oacute;n.";
 choices[23][1] = "Abstracci&oacute;n.";
 choices[23][2] = "Encapsulaci&oacute;n.";
 choices[23][3] = "Modularidad.";
 answers[23] = 0;
 units[23] = ['85'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 6865. TIC A 2009";
 preguntaids[23] = 6865


//  Id pregunta: 6967 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "Aferentes";
 choices[24][1] = "de Transformaci&oacute;n";
 choices[24][2] = "Diferentes";
 choices[24][3] = "Eferentes";
 answers[24] = 2;
 units[24] = ['85'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6967. TIC-B 2009 bloque desarrollo";
 preguntaids[24] = 6967


//  Id pregunta: 6860 Año de creación de pregunta: 2010
 questions[25]= "26)  En relaci&oacute;n con las metodolog&iacute;as &aacute;giles de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[25]= new Array();
 choices[25][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[25][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[25][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a &aacute;gil.";
 choices[25][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a &aacute;gil.";
 answers[25] = 0;
 units[25] = ['84'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6860. TIC A 2009";
 preguntaids[25] = 6860


//  Id pregunta: 6958 Año de creación de pregunta: 2010
 questions[26]= "27)  Relacionado con el An&aacute;lisis y Dise&ntilde;o Orientado a Objetos, &iquest;Cu&aacute;l de los siguientes patrones de dise&ntilde;o corresponde a la subclasificaci&oacute;n patrones de creaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "Adapter";
 choices[26][1] = "Bridge";
 choices[26][2] = "Singleton";
 choices[26][3] = "Composite";
 answers[26] = 2;
 units[26] = ['89'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6958. TIC-B 2009 bloque desarrollo";
 preguntaids[26] = 6958


//  Id pregunta: 6884 Año de creación de pregunta: 2010
 questions[27]= "28)  Con respecto a BPEL (Business Process Execution Language):";
 choices[27]= new Array();
 choices[27][0] = "Es un lenguaje coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[27][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[27][2] = "Fue creado por WfMC.";
 choices[27][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[27] = 1;
 units[27] = ['86'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6884. ";
 preguntaids[27] = 6884


//  Id pregunta: 6981 Año de creación de pregunta: 2010
 questions[28]= "29)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n de la Infraestructura";
 choices[28][1] = "Gesti&oacute;n de Soporte";
 choices[28][2] = "Gesti&oacute;n de Entrega";
 choices[28][3] = "Gesti&oacute;n de Aplicaciones";
 answers[28] = 0;
 units[28] = ['101'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 6981. TIC-B 2009 bloque desarrollo";
 preguntaids[28] = 6981


//  Id pregunta: 6901 Año de creación de pregunta: 2010
 questions[29]= "30)  WebDav es:";
 choices[29]= new Array();
 choices[29][0] = "Un est&aacute;ndar para la descripci&oacute;n de servicios web.";
 choices[29][1] = "Un protocolo para la edici&oacute;n distribuida de archivos.";
 choices[29][2] = "Un grupo de trabajo de la W3C para la definici&oacute;n de arquitecturas de servicios web.";
 choices[29][3] = "Una herramienta de CRM basada en software libre.";
 answers[29] = 1;
 units[29] = ['99'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6901. TIC A 2009";
 preguntaids[29] = 6901


//  Id pregunta: 6827 Año de creación de pregunta: 2010
 questions[30]= "31)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[30]= new Array();
 choices[30][0] = "Planificaci&oacute;n del alcance.";
 choices[30][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[30][2] = "Definici&oacute;n del alcance.";
 choices[30][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[30] = 3;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 6827. TIC A 2009";
 preguntaids[30] = 6827


//  Id pregunta: 6686 Año de creación de pregunta: 2009
 questions[31]= "32)  En el modelo Early Design de COCOMO II, el valor PM nominal se ajusta utilizando";
 choices[31]= new Array();
 choices[31][0] = "5 factores de escala";
 choices[31][1] = "7 factores de coste";
 choices[31][2] = "17 factores de coste";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['94'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6686. ";
 preguntaids[31] = 6686


//  Id pregunta: 6998 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[32]= new Array();
 choices[32][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[32][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[32][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[32][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[32] = 2;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6998. TIC-B 2009 bloque desarrollo";
 preguntaids[32] = 6998


//  Id pregunta: 6834 Año de creación de pregunta: 2010
 questions[33]= "34)  El modelo de capacidad y madurez (CMM, Capability Maturity Model) agrupa las &aacute;reas de proceso en 5 niveles de madurez, que son los siguientes:";
 choices[33]= new Array();
 choices[33][0] = "Inicial, repetible, definido, gestionado y optimizado.";
 choices[33][1] = "Inicial, repetible, eficaz, eficiente y optimizado.";
 choices[33][2] = "Inicial, definido, medido, adaptado y optimizado.";
 choices[33][3] = "Inicial, repetible, comprometido, gestionado y optimizado.";
 answers[33] = 0;
 units[33] = ['98'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 6834. TIC A 2009";
 preguntaids[33] = 6834


//  Id pregunta: 6970 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los est&aacute;ndares de documentaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Ayuda al entrenamiento del nuevo personal dentro y fuera de la organizaci&oacute;n de Sistemas";
 choices[34][1] = "Es &uacute;til para cualquier que tenga la responsabilidad del mantenimiento de los sistemas";
 choices[34][2] = "Ayuda a los analistas y dise&ntilde;adores de sistemas en el trabajo de integraci&oacute;n de sistemas";
 choices[34][3] = "El tiempo empleado en la documentaci&oacute;n se ve recompensado en al menos un 75% de ahorro en b&uacute;squedas de informaci&oacute;n para el mantenimiento del producto";
 answers[34] = 3;
 units[34] = ['99'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6970. TIC-B 2009 bloque desarrollo";
 preguntaids[34] = 6970


//  Id pregunta: 6997 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[35]= new Array();
 choices[35][0] = "La clase DataRow representa una fila de datos en un DataTable";
 choices[35][1] = "La clase DataRow representa una cach&eacute; de memoria interna de datos";
 choices[35][2] = "La clase DataRow representa una tabla de datos en memoria";
 choices[35][3] = "La clase DataRow representa el esquema de una columna en una DataTable";
 answers[35] = 0;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6997. TIC-B 2009 bloque desarrollo";
 preguntaids[35] = 6997


//  Id pregunta: 6955 Año de creación de pregunta: 2010
 questions[36]= "37)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[36]= new Array();
 choices[36][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[36][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[36][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[36][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n de bucles iterativos, probar el producto, reajustar especificacones";
 answers[36] = 0;
 units[36] = ['82'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6955. TIC-B 2009 bloque desarrollo";
 preguntaids[36] = 6955


//  Id pregunta: 6772 Año de creación de pregunta: 2009
 questions[37]= "38)  De entre las siguientes opciones, se&ntilde;ale la que no se corresponde con una metodolog&iacute;a de desarrollo &aacute;gil:";
 choices[37]= new Array();
 choices[37][0] = "Rational Rapid Development (RRD)";
 choices[37][1] = "Scrum";
 choices[37][2] = "Extreme Programming (XP)";
 choices[37][3] = "Open Unified Process (OpenUP)";
 answers[37] = 0;
 units[37] = ['84'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 6772. ";
 preguntaids[37] = 6772


//  Id pregunta: 6862 Año de creación de pregunta: 2010
 questions[38]= "39)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[38]= new Array();
 choices[38][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[38][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[38][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[38][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[38] = 3;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 6862. TIC A 2009";
 preguntaids[38] = 6862


//  Id pregunta: 6676 Año de creación de pregunta: 2009
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA, en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[39]= new Array();
 choices[39][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[39][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[39][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[39][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[39] = 1;
 units[39] = ['98'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6676. MAP 2008 A1";
 preguntaids[39] = 6676


//  Id pregunta: 6741 Año de creación de pregunta: 2009
 questions[40]= "41)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[40]= new Array();
 choices[40][0] = "De Marco";
 choices[40][1] = "Jackson";
 choices[40][2] = "Gane &amp; Sarson";
 choices[40][3] = "Yourdon/Constantine";
 answers[40] = 1;
 units[40] = ['84'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6741. MAP 2008 A1";
 preguntaids[40] = 6741


//  Id pregunta: 7000 Año de creación de pregunta: 2010
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[41]= new Array();
 choices[41][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[41][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[41][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[41][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[41] = 0;
 units[41] = ['92'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 7000. TIC-B 2009 bloque desarrollo";
 preguntaids[41] = 7000


//  Id pregunta: 6704 Año de creación de pregunta: 2009
 questions[42]= "43)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[42]= new Array();
 choices[42][0] = "Un objeto del que obtenemos referencias a otros";
 choices[42][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario";
 choices[42][2] = "Un objeto del que s&oacute;lo existe una instancia";
 choices[42][3] = "Una clase que no se puede instanciar";
 answers[42] = 2;
 units[42] = ['89'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 6704. MAP 2008 A1";
 preguntaids[42] = 6704


//  Id pregunta: 6954 Año de creación de pregunta: 2010
 questions[43]= "44)  Respecto al Diagrama de Secuencia, &iquest;cu&aacute;l de las siguientes opciones es correcta?";
 choices[43]= new Array();
 choices[43][0] = "Muestra los objetos participantes en la interacci&oacute;n y los mensajes que intercambian ordenados seg&uacute;n su secuencia en el tiempo.";
 choices[43][1] = "El eje horizontal representa el tiempo, y en el eje vertical se colocan los objetos y actores participantes en la interacci&oacute;n, sin un orden prefijado.";
 choices[43][2] = "Cada objeto o actor tiene una l&iacute;nea horizontal, y los mensajes se representan mediante etiquetas entre los distintos objetos.";
 choices[43][3] = "El tiempo fluye de abajo a arriba y de izquiera a derecha.";
 answers[43] = 0;
 units[43] = ['89'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6954. TIC-B 2009 bloque desarrollo";
 preguntaids[43] = 6954


//  Id pregunta: 6861 Año de creación de pregunta: 2010
 questions[44]= "45)  En relaci&oacute;n con la gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[44]= new Array();
 choices[44][0] = "Actualmente existen 3 grandes modelos de calidad total: Deming, Malcom Baldrige y EFQM, de amplia aplicaci&oacute;n en Estados Unidos, Jap&oacute;n y Europa respectivamente.";
 choices[44][1] = "El modelo EFQM consta de 9 criterios, de los cuales 5 son agentes y 4 son resultados.";
 choices[44][2] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, pol&iacute;tica y alianzas.";
 choices[44][3] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, estrategia y recursos.";
 answers[44] = 1;
 units[44] = ['98'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 6861. TIC A 2009";
 preguntaids[44] = 6861


//  Id pregunta: 6989 Año de creación de pregunta: 2010
 questions[45]= "46)  A qu&eacute; proceso principal de M&eacute;trica pertenece la tarea &quot;Determinaci&oacute;n del Acuerdo de Nivel de Servicio&quot;";
 choices[45]= new Array();
 choices[45][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[45][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[45][2] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[45][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[45] = 3;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6989. TIC-B 2009 bloque desarrollo";
 preguntaids[45] = 6989


//  Id pregunta: 6938 Año de creación de pregunta: 2010
 questions[46]= "47)  Entre las funciones de BPEL no se encuentra:";
 choices[46]= new Array();
 choices[46][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[46][1] = "Definir procesos de negocio.";
 choices[46][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[46][3] = "Orquestar servicios Web.";
 answers[46] = 0;
 units[46] = ['86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6938. ";
 preguntaids[46] = 6938


//  Id pregunta: 6839 Año de creación de pregunta: 2010
 questions[47]= "48)  NO figura entre los objetivos de las normas y procedimientos de seguridad:";
 choices[47]= new Array();
 choices[47][0] = "La adecuaci&oacute;n a aspectos de accesibilidad, usabilidad y utilizaci&oacute;n de lenguas cooficiales.";
 choices[47][1] = "La confidencialidad, disponibilidad e integridad de la informaci&oacute;n.";
 choices[47][2] = "La necesidad de controles de acceso.";
 choices[47][3] = "La adecuaci&oacute;n a normativa de la Agencia de Protecci&oacute;n de Datos.";
 answers[47] = 0;
 units[47] = ['87'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6839. TIC A 2009";
 preguntaids[47] = 6839


//  Id pregunta: 6756 Año de creación de pregunta: 2009
 questions[48]= "49)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[48]= new Array();
 choices[48][0] = "Beneficio Neto Anual";
 choices[48][1] = "Inversi&oacute;n Promedio";
 choices[48][2] = "Coste desarrollo anualizado";
 choices[48][3] = "Periodo de Amortizaci&oacute;n";
 answers[48] = 3;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6756. MAP 2008 A1";
 preguntaids[48] = 6756


//  Id pregunta: 6972 Año de creación de pregunta: 2010
 questions[49]= "50)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[49]= new Array();
 choices[49][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[49][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[49][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[49][3] = "Son elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales los procesos de control y flujos de control";
 answers[49] = 1;
 units[49] = ['86'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 6972. TIC-B 2009 bloque desarrollo";
 preguntaids[49] = 6972


//  Id pregunta: 6808 Año de creación de pregunta: 2010
 questions[50]= "51)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[50]= new Array();
 choices[50][0] = "La Subsecretar&iacute;a.";
 choices[50][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Digital.";
 choices[50][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[50][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[50] = 1;
 units[50] = ['83'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 6808. TIC A 2009";
 preguntaids[50] = 6808


//  Id pregunta: 6875 Año de creación de pregunta: 2010
 questions[51]= "52)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[51]= new Array();
 choices[51][0] = "Brainstorming.";
 choices[51][1] = "Casos de uso.";
 choices[51][2] = "M&eacute;todo Albrecht.";
 choices[51][3] = "Prototipado.";
 answers[51] = 2;
 units[51] = ['84'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 6875. TIC A 2009";
 preguntaids[51] = 6875


//  Id pregunta: 6815 Año de creación de pregunta: 2010
 questions[52]= "53)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[52]= new Array();
 choices[52][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[52][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[52][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[52][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[52] = 1;
 units[52] = ['84'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6815. TIC A 2009";
 preguntaids[52] = 6815


//  Id pregunta: 6886 Año de creación de pregunta: 2010
 questions[53]= "54)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[53][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[53][2] = "A y B son correctas.";
 choices[53][3] = "A y B son incorrectas.";
 answers[53] = 2;
 units[53] = ['86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 6886. ";
 preguntaids[53] = 6886


//  Id pregunta: 6879 Año de creación de pregunta: 2010
 questions[54]= "55)  Un diagrama de transici&oacute;n de estados:";
 choices[54]= new Array();
 choices[54][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[54][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[54][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[54][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[54] = 3;
 units[54] = ['85'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6879. TIC A 2009";
 preguntaids[54] = 6879


//  Id pregunta: 6962 Año de creación de pregunta: 2010
 questions[55]= "56)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[55]= new Array();
 choices[55][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[55][1] = "Estudio de la situaci&oacute;n actual";
 choices[55][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[55][3] = "Definici&oacute;n del Sistema";
 answers[55] = 0;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6962. TIC-B 2009 bloque desarrollo";
 preguntaids[55] = 6962


//  Id pregunta: 6939 Año de creación de pregunta: 2010
 questions[56]= "57)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[56]= new Array();
 choices[56][0] = "1";
 choices[56][1] = "2";
 choices[56][2] = "3";
 choices[56][3] = "4";
 answers[56] = 0;
 units[56] = ['86'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6939. ";
 preguntaids[56] = 6939


//  Id pregunta: 6964 Año de creación de pregunta: 2010
 questions[57]= "58)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[57]= new Array();
 choices[57][0] = "Diagrama de Componentes";
 choices[57][1] = "Diagrama de Descomposici&oacute;n";
 choices[57][2] = "Diagrama de Despliegue";
 choices[57][3] = "Diagrama de Estructura";
 answers[57] = 2;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6964. TIC-B 2009 bloque desarrollo";
 preguntaids[57] = 6964


//  Id pregunta: 6961 Año de creación de pregunta: 2010
 questions[58]= "59)  Respecto a los DFD: &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera?";
 choices[58]= new Array();
 choices[58][0] = "No es necesario que los nombres en los almacenes de datos y los de las entidades coincidan";
 choices[58][1] = "Cada almac&eacute;n de los DFD debe corresponder con una entidad, o una relaci&oacute;n o una combinaci&oacute;n de ambos";
 choices[58][2] = "En el caso de utilizar un &uacute;nico diccionario de datos las entradas deber&aacute;n coincidir";
 choices[58][3] = "Deben existir procesos en el DFD para crear y eliminar ocurrencias de cada una de las entidades del modelo de datos";
 answers[58] = 3;
 units[58] = ['86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6961. TIC-B 2009 bloque desarrollo";
 preguntaids[58] = 6961


//  Id pregunta: 6779 Año de creación de pregunta: 2010
 questions[59]= "60)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[59]= new Array();
 choices[59][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[59][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[59][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[59][3] = "El proceso y el procedimiento";
 answers[59] = 1;
 units[59] = ['92'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 6779. Castilla La Mancha 2009";
 preguntaids[59] = 6779


//  Id pregunta: 6837 Año de creación de pregunta: 2010
 questions[60]= "61)  Indicar cu&aacute;l de los siguientes NO es un m&eacute;todo ni un marco metodol&oacute;gico para estimar el esfuerzo de desarrollo en los proyectos:";
 choices[60]= new Array();
 choices[60][0] = "COCOMO II.";
 choices[60][1] = "FPA.";
 choices[60][2] = "ESTIM.";
 choices[60][3] = "SLIM.";
 answers[60] = 2;
 units[60] = ['94'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 6837. TIC A 2009";
 preguntaids[60] = 6837


//  Id pregunta: 6685 Año de creación de pregunta: 2009
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no corresponde a una t&eacute;cnica de estimaci&oacute;n del tama&ntilde;o de un sistema software?";
 choices[61]= new Array();
 choices[61][0] = "Puntos funci&oacute;n de Albrecht";
 choices[61][1] = "Use case points";
 choices[61][2] = "Puntos funci&oacute;n MarkII";
 choices[61][3] = "Puntos funci&oacute;n de Boehm";
 answers[61] = 3;
 units[61] = ['94'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6685. ";
 preguntaids[61] = 6685


//  Id pregunta: 6684 Año de creación de pregunta: 2009
 questions[62]= "63)  En el M&eacute;todo ALBRETCH de los puntos de funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[62]= new Array();
 choices[62][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[62][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[62][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[62][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[62] = 0;
 units[62] = ['94'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6684. ";
 preguntaids[62] = 6684


//  Id pregunta: 6976 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[63]= new Array();
 choices[63][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[63][1] = "En el caso de enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[63][2] = "Se pueden crear instancias de una clase abstracta";
 choices[63][3] = "Un enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[63] = 2;
 units[63] = ['85'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 6976. TIC-B 2009 bloque desarrollo";
 preguntaids[63] = 6976


//  Id pregunta: 6689 Año de creación de pregunta: 2009
 questions[64]= "65)  Con respecto a ITIL, el proceso &quot;Configuration Management&quot; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en qu&eacute; fase del ciclo de vida est&aacute; incluido?";
 choices[64]= new Array();
 choices[64][0] = "Dise&ntilde;o del Servicio";
 choices[64][1] = "Transici&oacute;n del Servicio";
 choices[64][2] = "Operaci&oacute;n del Servicio";
 choices[64][3] = "Mejora continua";
 answers[64] = 1;
 units[64] = ['101'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 6689. ";
 preguntaids[64] = 6689


//  Id pregunta: 6968 Año de creación de pregunta: 2010
 questions[65]= "66)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[65]= new Array();
 choices[65][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[65][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[65][2] = "Proyectos donde sea importante el factor riesgo";
 choices[65][3] = "El producto a desarrollar no es novedoso";
 answers[65] = 2;
 units[65] = ['82'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 6968. TIC-B 2009 bloque desarrollo";
 preguntaids[65] = 6968


//  Id pregunta: 6994 Año de creación de pregunta: 2010
 questions[66]= "67)  El modelo CMMI est&aacute; enfocado en tres &aacute;reas: &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[66]= new Array();
 choices[66][0] = "Desarrollo de servicios y productos - CMMI para el desarrollo (CMMI - DEV)";
 choices[66][1] = "Adquisici&oacute;n de productos y servicios - CMMI para la adquisici&oacute;n (CMMI - ACQ)";
 choices[66][2] = "Establecimiento de Servicios, Gesti&oacute;n y entrega - CMMI para los servicios (CMMI - SVC)";
 choices[66][3] = "Establecimiento de la calidad de servicios y productos - CMMI para la calidad (CMMI - QUA)";
 answers[66] = 3;
 units[66] = ['98'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 6994. TIC-B 2009 bloque desarrollo";
 preguntaids[66] = 6994


//  Id pregunta: 6969 Año de creación de pregunta: 2010
 questions[67]= "68)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[67]= new Array();
 choices[67][0] = "a y b son variables con valores indefinidos";
 choices[67][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[67][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[67][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[67] = 3;
 units[67] = ['94'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 6969. TIC-B 2009 bloque desarrollo";
 preguntaids[67] = 6969


//  Id pregunta: 6952 Año de creación de pregunta: 2010
 questions[68]= "69)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[68]= new Array();
 choices[68][0] = "Continua";
 choices[68][1] = "Dispersa";
 choices[68][2] = "en &Aacute;rbol";
 choices[68][3] = "Alternativa";
 answers[68] = 3;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6952. TIC-B 2009 bloque desarrollo";
 preguntaids[68] = 6952


//  Id pregunta: 6786 Año de creación de pregunta: 2010
 questions[69]= "70)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[69]= new Array();
 choices[69][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[69][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[69][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorando los detalles internos.";
 choices[69][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[69] = 2;
 units[69] = ['97'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6786. TIC A 2009";
 preguntaids[69] = 6786


//  Id pregunta: 6751 Año de creación de pregunta: 2009
 questions[70]= "71)  CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[70]= new Array();
 choices[70][0] = "Idoneidad, continuidad de negocio y certificaci&oacute;n internacional";
 choices[70][1] = "Confidencialidad, integridad y disponibilidad";
 choices[70][2] = "Criticidad, autenticaci&oacute;n y consistencia";
 choices[70][3] = "Convergencia, coherencia y salvaguarda";
 answers[70] = 1;
 units[70] = ['101'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6751. MAP 2008 A1";
 preguntaids[70] = 6751


//  Id pregunta: 7002 Año de creación de pregunta: 2010
 questions[71]= "72)  Un diccionario de datos proporciona un enfoque organizado para representar las caracter&iacute;sticas de cada objeto de datos y elemento de control. Adem&aacute;s:";
 choices[71]= new Array();
 choices[71][0] = "El diccionario de datos se puede tratar como una base de datos";
 choices[71][1] = "El formato de diccionario no var&iacute;a aunque se implemente en distintas herramientas";
 choices[71][2] = "Los flujos que partes o llegan a los almacenes definen la interfaz entre el sistema y el mundo exterior";
 choices[71][3] = "Los almacenes de datos representan la informaci&oacute;n din&aacute;mica del sistema";
 answers[71] = 0;
 units[71] = ['85'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 7002. TIC-B 2009 bloque desarrollo";
 preguntaids[71] = 7002


//  Id pregunta: 7005 Año de creación de pregunta: 2010
 questions[72]= "73)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[72]= new Array();
 choices[72][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[72][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[72][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[72][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[72] = 1;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 7005. TIC-B 2009 bloque desarrollo";
 preguntaids[72] = 7005


//  Id pregunta: 6838 Año de creación de pregunta: 2010
 questions[73]= "74)  El creador de la t&eacute;cnica de modelado de objetos (OMT) fue:";
 choices[73]= new Array();
 choices[73][0] = "Pressman.";
 choices[73][1] = "Rumbaugh.";
 choices[73][2] = "Grady Booch.";
 choices[73][3] = "Kent Beck.";
 answers[73] = 1;
 units[73] = ['84'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 6838. TIC A 2009";
 preguntaids[73] = 6838


//  Id pregunta: 6951 Año de creación de pregunta: 2010
 questions[74]= "75)  De acuerdo con M&eacute;trica v3, en la actividad &quot;Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n&quot; del Mantenimiento de Sistemas de Informaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de realizar las pruebas de regresi&oacute;n";
 choices[74][1] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de comenzar el cambio en desarrollo";
 choices[74][2] = "La aprobaci&oacute;n de la petici&oacute;n se realiza al finalizar las pruebas de regresi&oacute;n y despu&eacute;s de comprobar que todo lo que ha sido modificado, o puede verse afectado por el cambio, funciona correctamente";
 choices[74][3] = "La aprobaci&oacute;n de la petici&oacute;n no es necesaria si se ha comprobado que s&oacute;lo se han modificado los elementos que se ven afectados por el cambio y que se han realizado las pruebas de integraci&oacute;n y del sistema";
 answers[74] = 2;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 6951. TIC-B 2009 bloque desarrollo";
 preguntaids[74] = 6951


