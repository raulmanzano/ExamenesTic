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
//  Id pregunta: 10276 Año de creación de pregunta: 2015
 questions[0]= "1)  Gesti&oacute;n T&eacute;cnica NO es responsable de&hellip;";
 choices[0]= new Array();
 choices[0][0] = "Mantener la infraestructura t&eacute;cnica";
 choices[0][1] = "Documentar y mantener las habilidades t&eacute;cnicas requeridas para el soporte y gesti&oacute;n de la infraestructura de TI";
 choices[0][2] = "Definir los Acuerdos de (OLA - Operations Level Agreement) para los equipos t&eacute;cnicos";
 choices[0][3] = "Diagnostico y recuperaci&oacute;n de fallos t&eacute;cnicos";
 answers[0] = 2;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10276. ";
 preguntaids[0] = 10276


//  Id pregunta: 10146 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;C&uacute;al de las siguientes opciones es un sistema de gesti&oacute;n de contenidos?";
 choices[1]= new Array();
 choices[1][0] = "MongoDB";
 choices[1][1] = "Redis";
 choices[1][2] = "Cassandra";
 choices[1][3] = "Drupal";
 answers[1] = 3;
 units[1] = ['99'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10146. Examen TIC A1 2014";
 preguntaids[1] = 10146


//  Id pregunta: 10279 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l es la principal raz&oacute;n para establecer una L&iacute;nea Base (Baseline)?";
 choices[2]= new Array();
 choices[2][0] = "Estandarizar la operaci&oacute;n";
 choices[2][1] = "Conocer el coste de los servicios proporcionados";
 choices[2][2] = "Para que los roles y responsabilidades sean claras";
 choices[2][3] = "Para comparaciones posteriores";
 answers[2] = 3;
 units[2] = ['101'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 10279. ";
 preguntaids[2] = 10279


//  Id pregunta: 10269 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;l es la secuencia de eventos CORRECTA para elegir una herramienta tecnol&oacute;gica?";
 choices[3]= new Array();
 choices[3][0] = "Seleccionar; Requerimientos; Criterios de Selecci&oacute;n, Evaluaci&oacute;n";
 choices[3][1] = "Criterios de Selecci&oacute;n; Requerimientos; Evaluaci&oacute;n; Seleccionar";
 choices[3][2] = "Requerimientos; Selecci&oacute;n de Criterios, Seleccionar, Evaluar";
 choices[3][3] = "Requerimientos; Selecci&oacute;n de Criterios; Evaluar; Seleccionar";
 answers[3] = 3;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10269. ";
 preguntaids[3] = 10269


//  Id pregunta: 10281 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes pasos NO corresponde al modelo de Mejora Continua del Servicio (CSI)?";
 choices[4]= new Array();
 choices[4][0] = "&iquest;Cual es la visi&oacute;n?";
 choices[4][1] = "&iquest;C&oacute;mo llegamos?";
 choices[4][2] = "&iquest;Hay presupuesto?";
 choices[4][3] = "&iquest; D&oacute;nde estamos ahora?";
 answers[4] = 2;
 units[4] = ['101'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10281. ";
 preguntaids[4] = 10281


//  Id pregunta: 10065 Año de creación de pregunta: 2015
 questions[5]= "6)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[5]= new Array();
 choices[5][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[5][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[5][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[5][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[5] = 1;
 units[5] = ['91', '85', '86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 10065. Examen TIC A2 2014";
 preguntaids[5] = 10065


//  Id pregunta: 10029 Año de creación de pregunta: 2015
 questions[6]= "7)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[6]= new Array();
 choices[6][0] = "Diagrama de secuencia.";
 choices[6][1] = "Diagrama de colaboraci&oacute;n.";
 choices[6][2] = "Diagrama de clases.";
 choices[6][3] = "Diagrama de Casos de Uso.";
 answers[6] = 3;
 units[6] = ['91', '85', '89'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 10029. Examen TIC A2 2014";
 preguntaids[6] = 10029


//  Id pregunta: 10043 Año de creación de pregunta: 2015
 questions[7]= "8)  Para poder realizar pruebas de caja blanca que realicen cobertura de c&oacute;digo, la herramienta que NO se deber&iacute;a usar es:";
 choices[7]= new Array();
 choices[7][0] = "EclEMMA.";
 choices[7][1] = "eCobertura.";
 choices[7][2] = "Jmeter.";
 choices[7][3] = "Java Code Coverage.";
 answers[7] = 2;
 units[7] = ['92'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10043. Examen TIC A2 2014";
 preguntaids[7] = 10043


//  Id pregunta: 10026 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[8]= new Array();
 choices[8][0] = "Regla del 80-20.";
 choices[8][1] = "Regla del 30-40-30.";
 choices[8][2] = "Regla del 40-20-40.";
 choices[8][3] = "Regla del 20-60-20.";
 answers[8] = 2;
 units[8] = ['31', '94'];
 blocks[8] = ['B1', 'B3'];
 comments[8] = "Id Pregunta: 10026. Examen TIC A2 2014";
 preguntaids[8] = 10026


//  Id pregunta: 10037 Año de creación de pregunta: 2015
 questions[9]= "10)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[9]= new Array();
 choices[9][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[9][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[9][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[9][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[9] = 2;
 units[9] = ['85'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10037. Examen TIC A2 2014";
 preguntaids[9] = 10037


//  Id pregunta: 10020 Año de creación de pregunta: 2015
 questions[10]= "11)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[10]= new Array();
 choices[10][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[10][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[10][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[10][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[10] = 3;
 units[10] = ['84'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10020. Examen TIC A2 2014";
 preguntaids[10] = 10020


//  Id pregunta: 10042 Año de creación de pregunta: 2015
 questions[11]= "12)  Se&ntilde;ale qu&eacute; software NO est&aacute; relacionado con las pruebas del software de aplicaciones web:";
 choices[11]= new Array();
 choices[11][0] = "Badboy.";
 choices[11][1] = "Selenium.";
 choices[11][2] = "Jmeter.";
 choices[11][3] = "Cherokee.";
 answers[11] = 3;
 units[11] = ['92'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10042. Examen TIC A2 2014";
 preguntaids[11] = 10042


//  Id pregunta: 10259 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l es la definici&oacute;n de servicio seg&uacute;n ITIL?";
 choices[12]= new Array();
 choices[12][0] = "Medio para entregar valor a los clientes, facilitando los resultados que estos quieren conseguir sin asumir costes o riesgos espec&iacute;ficos";
 choices[12][1] = "Subdivisi&oacute;n de una organizaci&oacute;n, que est&aacute; especializada en realizar un tipo concreto de trabajo y tiene la responsabilidad de obtener resultados concretos";
 choices[12][2] = "Conjunto estructurado de actividades dise&ntilde;ado para cumplir objetivo concreto.";
 choices[12][3] = "Conjunto de responsabilidades, actividades y autorizaciones concedidas a una persona o equipo.";
 answers[12] = 0;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10259. ";
 preguntaids[12] = 10259


//  Id pregunta: 10180 Año de creación de pregunta: 2015
 questions[13]= "14)  En M&eacute;trica 3, la utilizaci&oacute;n del modelo entidad relaci&oacute;n extendido se recomienda en los procesos de:";
 choices[13]= new Array();
 choices[13][0] = "An&aacute;lisis y Dise&ntilde;o.";
 choices[13][1] = "Solo en el An&aacute;lisis.";
 choices[13][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de Viabilidad y An&aacute;lisis.";
 choices[13][3] = "Solo en Planificaci&oacute;n de Sistemas de Informaci&oacute;n y Estudio de Viabilidad.";
 answers[13] = 2;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 10180. Examen TIC A1 2014";
 preguntaids[13] = 10180


//  Id pregunta: 10268 Año de creación de pregunta: 2015
 questions[14]= "15)  Hay 7 diferentes estrategias de externalizaci&oacute;n que una compa&ntilde;&iacute;a puede emplear, &iquest;cu&aacute;l es la forma m&aacute;s reciente de outsourcing?";
 choices[14]= new Array();
 choices[14][0] = "Outsourcing del Proceso de Conocimiento";
 choices[14][1] = "Asociaci&oacute;n o multi-sourcing";
 choices[14][2] = "Outsourcing de Procesos de Negocio (Business Process Outsourcing BPO)";
 choices[14][3] = "Provisi&oacute;n de Servicios de Aplicaci&oacute;n";
 answers[14] = 0;
 units[14] = ['101'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10268. ";
 preguntaids[14] = 10268


//  Id pregunta: 10036 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[15]= new Array();
 choices[15][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[15][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[15][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[15][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[15] = 1;
 units[15] = ['85'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 10036. Examen TIC A2 2014";
 preguntaids[15] = 10036


//  Id pregunta: 10263 Año de creación de pregunta: 2015
 questions[16]= "17)  Establecer pol&iacute;ticas y objetivos es la principal preocupaci&oacute;n de cu&aacute;l de los elementos del Ciclo de Vida del Servicio?";
 choices[16]= new Array();
 choices[16][0] = "Estrategia del Servicio";
 choices[16][1] = "Estrategia y Mejora Continua del Servicio";
 choices[16][2] = "Estrategia, Dise&ntilde;o y Transici&oacute;n del Servicio";
 choices[16][3] = "Estrategia, Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora Continua del Servicio";
 answers[16] = 0;
 units[16] = ['101'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 10263. ITIL v3";
 preguntaids[16] = 10263


//  Id pregunta: 10277 Año de creación de pregunta: 2015
 questions[17]= "18)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[17]= new Array();
 choices[17][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[17][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[17][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[17][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[17] = 0;
 units[17] = ['101'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 10277. ";
 preguntaids[17] = 10277


//  Id pregunta: 10266 Año de creación de pregunta: 2015
 questions[18]= "19)  El principal objetivo de la Gesti&oacute;n de la Disponibilidad es &hellip;";
 choices[18]= new Array();
 choices[18][0] = "Monitorizar e informar sobre la disponibilidad de los servicios y componentes";
 choices[18][1] = "Asegurar que los objetivos de los SLA&rsquo;s se consiguen";
 choices[18][2] = "Garantizar niveles de disponibilidad para servicios y componentes";
 choices[18][3] = "Asegurarse que la disponibilidad de los servicios, se consigue o excede seg&uacute;n las necesidades acordadas con el negocio";
 answers[18] = 3;
 units[18] = ['101'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10266. ITIL v3";
 preguntaids[18] = 10266


//  Id pregunta: 10064 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[19]= new Array();
 choices[19][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[19][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[19][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[19][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[19] = 1;
 units[19] = ['82', '84'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 10064. Examen TIC A2 2014";
 preguntaids[19] = 10064


//  Id pregunta: 10135 Año de creación de pregunta: 2015
 questions[20]= "21)  En el modelo EFQM, la &quot;Gesti&oacute;n y mejora de las relaciones con los clientes&quot; es un subcriterio correspondiente al criterio:";
 choices[20]= new Array();
 choices[20][0] = "Resultados en los clientes.";
 choices[20][1] = "Resultados clave.";
 choices[20][2] = "Alianzas y recursos.";
 choices[20][3] = "Procesos.";
 answers[20] = 3;
 units[20] = ['98'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10135. Examen TIC A1 2014";
 preguntaids[20] = 10135


//  Id pregunta: 10353 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[21]= new Array();
 choices[21][0] = "Nivel 0: Diagrama de Contexto";
 choices[21][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[21][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[21][3] = "Nivel 4: Diagrama de Procesos";
 answers[21] = 2;
 units[21] = ['85'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 10353. ";
 preguntaids[21] = 10353


//  Id pregunta: 10185 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;A qu&eacute; perfil corresponde en M&eacute;trica 3 la persona que asesora en los aspectos de seguridad y calidad relativos al producto y al proceso seguido para su obtenci&oacute;n, identifica y analiza los riesgos y determina las medidas de control oportunas?";
 choices[22]= new Array();
 choices[22][0] = "Perfil Consultor.";
 choices[22][1] = "Perfil Directivo.";
 choices[22][2] = "Perfil Analista.";
 choices[22][3] = "Perfil Jefe de Proyecto.";
 answers[22] = 3;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10185. Examen TIC A1 2014";
 preguntaids[22] = 10185


//  Id pregunta: 10027 Año de creación de pregunta: 2015
 questions[23]= "24)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[23]= new Array();
 choices[23][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[23][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[23][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[23][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[23] = 2;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10027. Examen TIC A2 2014";
 preguntaids[23] = 10027


//  Id pregunta: 10272 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[24]= new Array();
 choices[24][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[24][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[24][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[24][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[24] = 0;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10272. Acuerdos internos (OLA) se realizan entre grupos de una misma organizaci&oacute;n";
 preguntaids[24] = 10272


//  Id pregunta: 10046 Año de creación de pregunta: 2015
 questions[25]= "26)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[25]= new Array();
 choices[25][0] = "Abstracci&oacute;n.";
 choices[25][1] = "Polimorfismo.";
 choices[25][2] = "Herencia.";
 choices[25][3] = "Encapsulamiento.";
 answers[25] = 3;
 units[25] = ['89'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 10046. Examen TIC A2 2014";
 preguntaids[25] = 10046


//  Id pregunta: 10133 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Qu&eacute; nombre recibe, en el paradigma de orientaci&oacute;n a objetos, el principio de dise&ntilde;o que establece que las interfaces definidas deben tener una finalidad espec&iacute;fica?";
 choices[26]= new Array();
 choices[26][0] = "Principio abierto-cerrado.";
 choices[26][1] = "Principio de segregaci&oacute;n de interfaces.";
 choices[26][2] = "Principio de responsabilidad simple.";
 choices[26][3] = "Principio de sustituci&oacute;n.";
 answers[26] = 1;
 units[26] = ['89'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 10133. Examen TIC A1 2014";
 preguntaids[26] = 10133


//  Id pregunta: 10059 Año de creación de pregunta: 2015
 questions[27]= "28)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[27]= new Array();
 choices[27][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[27][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[27][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[27][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[27] = 1;
 units[27] = ['93'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10059. Examen TIC A2 2014";
 preguntaids[27] = 10059


//  Id pregunta: 10035 Año de creación de pregunta: 2015
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[28]= new Array();
 choices[28][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[28][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[28][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[28][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[28] = 3;
 units[28] = ['85'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10035. Examen TIC A2 2014";
 preguntaids[28] = 10035


//  Id pregunta: 10202 Año de creación de pregunta: 2015
 questions[29]= "30)  En el desarrollo orientado a objetos, dos casos de uso pueden estar relacionados mediante una relaci&oacute;n include, y reciben los nombres de caso base y caso de inclusi&oacute;n. Se&ntilde;ale la respuesta correcta:";
 choices[29]= new Array();
 choices[29][0] = "La ubicaci&oacute;n de la inclusi&oacute;n en el caso base es impl&iacute;cita. Es decir, es una sentencia expl&iacute;cita dentro de la secuencia de comportamiento del caso de uso base.";
 choices[29][1] = "El caso de uso de inclusi&oacute;n indica una secuencia adicional de comportamiento cuya ejecuci&oacute;n depende de una condici&oacute;n.";
 choices[29][2] = "El caso de uso de inclusi&oacute;n no puede acceder a atributos u operaciones del caso de uso base.";
 choices[29][3] = "Solo puede haber una relaci&oacute;n de inclusi&oacute;n para un caso de uso base.";
 answers[29] = 0;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10202. Examen TIC A1 2014";
 preguntaids[29] = 10202


//  Id pregunta: 10163 Año de creación de pregunta: 2015
 questions[30]= "31)  En dise&ntilde;o orientado a objetos se utiliza el patr&oacute;n Observador (en ingl&eacute;s, Observer), que define una dependencia uno a muchos entre un sujeto y varios observadores. Se&ntilde;ale la respuesta correcta:";
 choices[30]= new Array();
 choices[30][0] = "Cuando el sujeto se modifica, se notifica dicha modificaci&oacute;n. Los observadores se actualizar&aacute;n s&oacute;lo si se va a utilizar la informaci&oacute;n del sujeto.";
 choices[30][1] = "Establece cu&aacute;ntos observadores de un sujeto van a existir para poder notificarles cualquier cambio.";
 choices[30][2] = "La responsabilidad de actualizaci&oacute;n puede residir en los observadores tras la notificaci&oacute;n de cambio del sujeto.";
 choices[30][3] = "El sujeto nunca puede ser borrado.";
 answers[30] = 2;
 units[30] = ['89'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 10163. Examen TIC A1 2014";
 preguntaids[30] = 10163


//  Id pregunta: 10203 Año de creación de pregunta: 2015
 questions[31]= "32)  Se&ntilde;ale la respuesta correcta respecto al modelo de Desarrollo R&aacute;pido de Aplicaciones (RAD) para el desarrollo de nuevas aplicaciones:";
 choices[31]= new Array();
 choices[31][0] = "El RAD no es un modelo adecuado si la nueva aplicaci&oacute;n hace uso de tecnolog&iacute;as nuevas.";
 choices[31][1] = "Aunque un sistema no se pueda modularizar adecuadamente, la construcci&oacute;n de los componentes necesarios para RAD no ser&aacute; problem&aacute;tico.";
 choices[31][2] = "El RAD no es adecuado cuando el software nuevo no requiere un alto grado de interoperatividad con aplicaciones ya existentes.";
 choices[31][3] = "Es un modelo de proceso del desarrollo del software en espiral que enfatiza un ciclo de desarrollo extremadamente corto.";
 answers[31] = 0;
 units[31] = ['82'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10203. Examen TIC A1 2014";
 preguntaids[31] = 10203


//  Id pregunta: 10349 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[32]= new Array();
 choices[32][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[32][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[32][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[32][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[32] = 2;
 units[32] = ['82'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 10349. ";
 preguntaids[32] = 10349


//  Id pregunta: 10350 Año de creación de pregunta: 2015
 questions[33]= "34)  En un an&aacute;lisis DAFO previo a la definici&oacute;n de la estrategia de una organizaci&oacute;n, &iquest;qu&eacute; son las debilidades?";
 choices[33]= new Array();
 choices[33][0] = "Aspectos que limitan o reducen la capacidad de desarrollo efectivo de la estrategia de la organizaci&oacute;n y deben, por tanto, ser controladas y superadas.";
 choices[33][1] = "Todo aquello que pueda representar una posibilidad para mejorar la rentabilidad de la misma o aumentar la cifra de sus negocios.";
 choices[33][2] = "Toda fuerza del entorno que puede impedir la implantaci&oacute;n de una estrategia, o bien reducir su efectividad, o incrementar los riesgos de la misma,";
 choices[33][3] = "Todos aquellos aspectos de la organizaci&oacute;n que no son ventajas competitivas respecto a los competidores en un mismo mercado";
 answers[33] = 0;
 units[33] = ['83'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 10350. ";
 preguntaids[33] = 10350


//  Id pregunta: 10280 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest; Para que es usado el modelo RACI?";
 choices[34]= new Array();
 choices[34][0] = "Documentar los roles y las relaciones de las partes interesadas (stakeholders) en un proceso o actividad";
 choices[34][1] = "Definir requerimientos para un nuevo servicio o proceso";
 choices[34][2] = "Analizar el impacto en el negocio de una incidencia";
 choices[34][3] = "Crear un Cuadro de Mando que muestre el estado general de los servicios gestionados";
 answers[34] = 0;
 units[34] = ['101'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 10280. ";
 preguntaids[34] = 10280


//  Id pregunta: 10352 Año de creación de pregunta: 2015
 questions[35]= "36)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[35]= new Array();
 choices[35][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[35][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[35][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[35][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[35] = 3;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 10352. ";
 preguntaids[35] = 10352


//  Id pregunta: 10151 Año de creación de pregunta: 2015
 questions[36]= "37)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[36]= new Array();
 choices[36][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[36][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[36][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[36][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[36] = 1;
 units[36] = ['101'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10151. Examen TIC A1 2014";
 preguntaids[36] = 10151


//  Id pregunta: 10273 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Qu&eacute; representa el Modelo de Servicio en V?";
 choices[37]= new Array();
 choices[37][0] = "Una estrategia para la realizaci&oacute;n con &eacute;xito de todos los proyectos de gesti&oacute;n de servicios";
 choices[37][1] = "La ruta de acceso para la Entrega y Soporte del Servicio para una eficiente y eficaz utilizaci&oacute;n de los recursos";
 choices[37][2] = "Los niveles de pruebas requeridos para la entrega del servicio";
 choices[37][3] = "La perspectiva empresarial que tienen los Clientes y Usuarios de los servicios";
 answers[37] = 2;
 units[37] = ['101'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10273. ";
 preguntaids[37] = 10273


//  Id pregunta: 10255 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Qu&eacute; tipo de restricciones en el modelo de Entidad-Relaci&oacute;n hacen referencia al formato de escritura del atributo?";
 choices[38]= new Array();
 choices[38][0] = "Restricciones sem&aacute;nticas";
 choices[38][1] = "Restricciones sint&aacute;cticas";
 choices[38][2] = "Restricciones estructurales";
 choices[38][3] = "Restricciones de usuario";
 answers[38] = 1;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 10255. ";
 preguntaids[38] = 10255


//  Id pregunta: 10265 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes NO es una de las 4 Ps de la Estrategia seg&uacute;n ITIL?";
 choices[39]= new Array();
 choices[39][0] = "Perspectiva";
 choices[39][1] = "Posici&oacute;n";
 choices[39][2] = "Patr&oacute;n";
 choices[39][3] = "Todas son correctas";
 answers[39] = 3;
 units[39] = ['101'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 10265. perspective, position, plan and pattern";
 preguntaids[39] = 10265


//  Id pregunta: 10171 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica 3, el Plan de Sistemas de Informaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Incluye la evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos.";
 choices[40][1] = "La perspectiva del plan debe ser estrat&eacute;gica, operativa y tecnol&oacute;gica.";
 choices[40][2] = "El nivel de detalle con el que se har&aacute; el estudio de la situaci&oacute;n actual no depende de la existencia de documentaci&oacute;n.";
 choices[40][3] = "Para su elaboraci&oacute;n se estudian las necesidades de informaci&oacute;n de los procesos afectados con el fin de definir requisitos generales y obtener modelos conceptuales de informaci&oacute;n.";
 answers[40] = 3;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 10171. Examen TIC A1 2014";
 preguntaids[40] = 10171


//  Id pregunta: 10128 Año de creación de pregunta: 2015
 questions[41]= "42)  En el modelo CMMI, el &aacute;rea de proceso &quot;An&aacute;lisis causal y resoluci&oacute;n&quot; se encuentra en el nivel de madurez:";
 choices[41]= new Array();
 choices[41][0] = "Nivel 2 - Gestionado.";
 choices[41][1] = "Nivel 5 - Optimizaci&oacute;n.";
 choices[41][2] = "Nivel 4 - Gestionado cuantitativamente.";
 choices[41][3] = "Nivel 3 - Definido.";
 answers[41] = 1;
 units[41] = ['92'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 10128. Examen TIC A1 2014";
 preguntaids[41] = 10128


//  Id pregunta: 10274 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n ITIL, &iquest;Cu&aacute;l de estos NO es un tipo de cambio?";
 choices[42]= new Array();
 choices[42][0] = "Cambio est&aacute;ndar";
 choices[42][1] = "Cambio normal";
 choices[42][2] = "Cambio urgente";
 choices[42][3] = "Cambio de emergencia";
 answers[42] = 2;
 units[42] = ['101'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 10274. ";
 preguntaids[42] = 10274


//  Id pregunta: 10028 Año de creación de pregunta: 2015
 questions[43]= "44)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[43]= new Array();
 choices[43][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[43][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[43][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[43][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[43] = 0;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 10028. Examen TIC A2 2014";
 preguntaids[43] = 10028


//  Id pregunta: 10041 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes normas define un est&aacute;ndar para pruebas de software?";
 choices[44]= new Array();
 choices[44][0] = "ISO 29781";
 choices[44][1] = "ISO 29621";
 choices[44][2] = "ISO 29382";
 choices[44][3] = "ISO 29119";
 answers[44] = 3;
 units[44] = ['92'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10041. Examen TIC A2 2014";
 preguntaids[44] = 10041


//  Id pregunta: 10262 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cuales de las siguientes afirmaciones, son caracter&iacute;sticas para cada proceso?";
 choices[45]= new Array();
 choices[45][0] = "Medible, puntual, entrega un resultado y responde a un evento espec&iacute;fico";
 choices[45][1] = "Medible, puntual, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[45][2] = "Medible, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[45][3] = "Medible, puntual, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 answers[45] = 2;
 units[45] = ['101'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 10262. ITIL v3";
 preguntaids[45] = 10262


//  Id pregunta: 10019 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[46]= new Array();
 choices[46][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[46][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[46][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[46][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[46] = 2;
 units[46] = ['82'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 10019. Examen TIC A2 2014";
 preguntaids[46] = 10019


//  Id pregunta: 10140 Año de creación de pregunta: 2015
 questions[47]= "48)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[47][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[47][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[47][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[47] = 2;
 units[47] = ['86'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 10140. Examen TIC A1 2014";
 preguntaids[47] = 10140


//  Id pregunta: 10031 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[48]= new Array();
 choices[48][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[48][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[48][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[48][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[48] = 0;
 units[48] = ['86'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 10031. Examen TIC A2 2014";
 preguntaids[48] = 10031


//  Id pregunta: 10038 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Tipos Abstractos de Datos (TAD) es correcta?";
 choices[49]= new Array();
 choices[49][0] = "Los TAD describen datos simples abstractos en funci&oacute;n de las operaciones que pueden efectuar, dejando a un lado su implementaci&oacute;n.";
 choices[49][1] = "Las listas son TAD caracterizados por incluir elementos homog&eacute;neos relacionados linealmente, con un antecesor y un sucesor, a excepci&oacute;n del primer y &uacute;ltimo elemento, salvo en el caso de listas circulares.";
 choices[49][2] = "Los &aacute;rboles son TAD en los que cada nodo se caracteriza por su grado de entrada (n&uacute;mero de arcos que llegan al nodo) y su grado de salida (n&uacute;mero de arcos que salen del nodo). Existen &aacute;rboles dirigidos y no dirigidos.";
 choices[49][3] = "Dado un grafo, el orden del mismo es el n&uacute;mero mayor de arcos o aristas de sus nodos.";
 answers[49] = 1;
 units[49] = ['89'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 10038. Examen TIC A2 2014";
 preguntaids[49] = 10038


//  Id pregunta: 10260 Año de creación de pregunta: 2015
 questions[50]= "51)  De los siguientes t&iacute;tulos, &iquest;cual NO es uno libro del core de publicaciones de ITIL?";
 choices[50]= new Array();
 choices[50][0] = "Servicio de Optimizaci&oacute;n";
 choices[50][1] = "Transici&oacute;n del Servicio";
 choices[50][2] = "Dise&ntilde;o del Servicio";
 choices[50][3] = "Estrategia del Servicio";
 answers[50] = 0;
 units[50] = ['101'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10260. SDTO (Strategy, Design, Transition, Operation) + Mantenimiento";
 preguntaids[50] = 10260


//  Id pregunta: 10200 Año de creación de pregunta: 2015
 questions[51]= "52)  En el modelo Entidad/Relaci&oacute;n, y dada una jerarqu&iacute;a obligatoria disjunta, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 choices[51][1] = "Es necesario que toda ocurrencia del supertipo se encuentre en uno solo de los subtipos.";
 choices[51][2] = "Es necesario que toda ocurrencia del supertipo se encuentre en todos los subtipos.";
 choices[51][3] = "Es necesario que toda ocurrencia del supertipo se encuentre en al menos uno de los subtipos.";
 answers[51] = 1;
 units[51] = ['85'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10200. Examen TIC A1 2014";
 preguntaids[51] = 10200


//  Id pregunta: 10057 Año de creación de pregunta: 2015
 questions[52]= "53)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[52]= new Array();
 choices[52][0] = "En 6 niveles, desde el cero al cinco.";
 choices[52][1] = "En 5 niveles, desde el uno al cinco.";
 choices[52][2] = "En 6 niveles, desde el uno al seis.";
 choices[52][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[52] = 0;
 units[52] = ['93'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 10057. Examen TIC A2 2014";
 preguntaids[52] = 10057


//  Id pregunta: 10040 Año de creación de pregunta: 2015
 questions[53]= "54)  En relaci&oacute;n a las pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[53]= new Array();
 choices[53][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[53][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[53][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[53][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control y, despu&eacute;s, los m&oacute;dulos de bajo nivel. Los m&oacute;dulos intermedios se integran al final.";
 answers[53] = 3;
 units[53] = ['92'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 10040. Examen TIC A2 2014";
 preguntaids[53] = 10040


//  Id pregunta: 10267 Año de creación de pregunta: 2015
 questions[54]= "55)  La definici&oacute;n de requerimientos funcionales para un nuevo servicio es parte de:";
 choices[54]= new Array();
 choices[54][0] = "Operaci&oacute;n del Servicio: Gesti&oacute;n de Aplicaciones";
 choices[54][1] = "Estrategia del Servicio: Gesti&oacute;n de la Cartera de Servicios";
 choices[54][2] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de la Arquitectura Tecnol&oacute;gica";
 choices[54][3] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de Soluciones del Servicio";
 answers[54] = 3;
 units[54] = ['101'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 10267. ITIL v3";
 preguntaids[54] = 10267


//  Id pregunta: 10044 Año de creación de pregunta: 2015
 questions[55]= "56)  El tipo de prueba BigBang es de tipo:";
 choices[55]= new Array();
 choices[55][0] = "Prueba de sistema.";
 choices[55][1] = "Prueba de aceptaci&oacute;n.";
 choices[55][2] = "Prueba de rendimiento.";
 choices[55][3] = "Prueba de integraci&oacute;n.";
 answers[55] = 3;
 units[55] = ['92'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10044. Examen TIC A2 2014";
 preguntaids[55] = 10044


//  Id pregunta: 10351 Año de creación de pregunta: 2015
 questions[56]= "57)  A la hora de tomar requisitos para dise&ntilde;ar un sistema de informaci&oacute;n &iquest;Qu&eacute; informaci&oacute;n debe registrarse obligatoriamente de cada requisito?";
 choices[56]= new Array();
 choices[56][0] = "C&oacute;digo &uacute;nico";
 choices[56][1] = "Nombre descriptivo del requisito";
 choices[56][2] = "Descripci&oacute;n detallada del requisito";
 choices[56][3] = "Todos los anteriores";
 answers[56] = 3;
 units[56] = ['84'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 10351. ";
 preguntaids[56] = 10351


//  Id pregunta: 10058 Año de creación de pregunta: 2015
 questions[57]= "58)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[57]= new Array();
 choices[57][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[57][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[57][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[57][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[57] = 3;
 units[57] = ['94'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10058. Examen TIC A2 2014";
 preguntaids[57] = 10058


//  Id pregunta: 10264 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Cual de la siguientes afirmaciones es CORRECTA para TODOS los procesos?";
 choices[58]= new Array();
 choices[58][0] = "Definen actividades, roles, responsabilidades, funciones y m&eacute;tricas";
 choices[58][1] = "Crean valor para las partes interesadas (stakeholders)";
 choices[58][2] = "Se entrega por un Proveedor de Servicios como soporte a un Cliente";
 choices[58][3] = "Son unidades de las Organizaciones, responsables de resultados espec&iacute;ficos";
 answers[58] = 1;
 units[58] = ['101'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10264. ITIL v3";
 preguntaids[58] = 10264


//  Id pregunta: 10271 Año de creación de pregunta: 2015
 questions[59]= "60)  El Gestor del Nivel de Servicio tiene la responsabilidad de asegurarse 1que los objetivos del Proceso de Gesti&oacute;n del Nivel de Servicio sean cumplidos. El Gestor del Nivel de Servicio NO es responsable de &hellip;";
 choices[59]= new Array();
 choices[59][0] = "Negociar y cerrar los Acuerdos de Nivel Operacionales. (OLA -Operation Level Agreement)";
 choices[59][1] = "Asegurar que todos los servicios no operacionales sean registrados dentro del Cat&aacute;logo de Servicios";
 choices[59][2] = "Negociar y acordar los Acuerdos de Nivel de Servicio (SLA - Service Level Agreement)";
 choices[59][3] = "Ayudar a la creaci&oacute;n del Cat&aacute;logo de Servicios y a mantenerlo actualizado";
 answers[59] = 1;
 units[59] = ['101'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10271. ITIL v3";
 preguntaids[59] = 10271


//  Id pregunta: 10025 Año de creación de pregunta: 2015
 questions[60]= "61)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[60]= new Array();
 choices[60][0] = "Consultor.";
 choices[60][1] = "Analista.";
 choices[60][2] = "Programador.";
 choices[60][3] = "Jefe de Proyecto.";
 answers[60] = 0;
 units[60] = ['91'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 10025. Examen TIC A2 2014";
 preguntaids[60] = 10025


//  Id pregunta: 10270 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[61]= new Array();
 choices[61][0] = "Dise&ntilde;o de hardware y software";
 choices[61][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[61][2] = "Dise&ntilde;o de datos";
 choices[61][3] = "Todas ellas";
 answers[61] = 3;
 units[61] = ['101'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 10270. ITIL v3";
 preguntaids[61] = 10270


//  Id pregunta: 10032 Año de creación de pregunta: 2015
 questions[62]= "63)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[62]= new Array();
 choices[62][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[62][1] = "Cat&aacute;logo de productos a generar.";
 choices[62][2] = "Cat&aacute;logo de clases.";
 choices[62][3] = "Cat&aacute;logo de entidades.";
 answers[62] = 3;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 10032. Examen TIC A2 2014";
 preguntaids[62] = 10032


//  Id pregunta: 10175 Año de creación de pregunta: 2015
 questions[63]= "64)  Dentro del modelo de referencia COBIT 5 para la gesti&oacute;n de las TI de una organizaci&oacute;n, se definen:";
 choices[63]= new Array();
 choices[63][0] = "5 procesos de gobierno, que incluyen pr&aacute;cticas de Evaluaci&oacute;n, Orientaci&oacute;n y Supervisi&oacute;n.";
 choices[63][1] = "5 procesos de gobierno con cuatro &aacute;reas de dominio para la planificaci&oacute;n, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 choices[63][2] = "5 procesos de gobierno donde se gestiona la estrategia, la arquitectura empresarial, el portfolio, el presupuesto y los recursos humanos.";
 choices[63][3] = "4 procesos de gobierno con 5 &aacute;reas de dominio para la planificaci&oacute;n, dise&ntilde;o, construcci&oacute;n, ejecuci&oacute;n y supervisi&oacute;n.";
 answers[63] = 0;
 units[63] = ['101'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 10175. Examen TIC A1 2014";
 preguntaids[63] = 10175


//  Id pregunta: 10022 Año de creación de pregunta: 2015
 questions[64]= "65)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[64]= new Array();
 choices[64][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[64][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[64][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[64][3] = "La tabla con los requisitos ya implementados.";
 answers[64] = 2;
 units[64] = ['84'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 10022. Examen TIC A2 2014";
 preguntaids[64] = 10022


//  Id pregunta: 10168 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto al esquema l&oacute;gico REDER que se encuentra dentro del modelo EFQM?";
 choices[65]= new Array();
 choices[65][0] = "La Evaluaci&oacute;n y Revisi&oacute;n se ocupa de los logros que est&aacute; alcanzando una organizaci&oacute;n.";
 choices[65][1] = "Los Resultados se ocupan de c&oacute;mo una organizaci&oacute;n implanta sistem&aacute;ticamente el enfoque.";
 choices[65][2] = "El Enfoque abarca lo que una organizaci&oacute;n planifica hacer y las razones para ello.";
 choices[65][3] = "El Despliegue aborda lo que hace una organizaci&oacute;n para evaluar, revisar y mejorar el enfoque.";
 answers[65] = 2;
 units[65] = ['98'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 10168. Examen TIC A1 2014";
 preguntaids[65] = 10168


//  Id pregunta: 10278 Año de creación de pregunta: 2015
 questions[66]= "67)  Cu&aacute;l es la descripci&oacute;n correcta de operaci&oacute;n normal del servicio";
 choices[66]= new Array();
 choices[66][0] = "El servicio es operado de la manera usual, sin que ocurran incidencias";
 choices[66][1] = "El servicio es facilitado con todas las funcionalidades y rendimiento que el negocio desea";
 choices[66][2] = "El servicio es operado dentro de los limites definidos en los Acuerdos de Nivel de Servicio (Servicie Level Agreement &ndash; SLA)";
 choices[66][3] = "Todos los usuarios pueden registrarse en el servicio y utilizarlo";
 answers[66] = 2;
 units[66] = ['101'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 10278. ITIL v3";
 preguntaids[66] = 10278


//  Id pregunta: 10023 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[67]= new Array();
 choices[67][0] = "MERISE.";
 choices[67][1] = "SDM (Structured Development Method).";
 choices[67][2] = "RUP (Rational Unified Process).";
 choices[67][3] = "SCRUM.";
 answers[67] = 1;
 units[67] = ['84'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 10023. Examen TIC A2 2014";
 preguntaids[67] = 10023


//  Id pregunta: 10275 Año de creación de pregunta: 2015
 questions[68]= "69)  El objetivo del proceso de Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio es...";
 choices[68]= new Array();
 choices[68][0] = "Contabilizar todos los activos financieros de la organizaci&oacute;n";
 choices[68][1] = "Proveer de un modelo l&oacute;gico de infraestructura de TI, correlacionando losServicios TI y diferentes componentes IT necesarios para la entrega de los servicios";
 choices[68][2] = "Construir modelos de servicios para justificar la implementaci&oacute;n de ITIL";
 choices[68][3] = "Implementar ITIL a trav&eacute;s de la organizaci&oacute;n";
 answers[68] = 1;
 units[68] = ['101'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 10275. ";
 preguntaids[68] = 10275


//  Id pregunta: 10045 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de clases.";
 choices[69][1] = "Diagrama de objetos.";
 choices[69][2] = "Diagrama de despliegue.";
 choices[69][3] = "Diagrama de actividades.";
 answers[69] = 3;
 units[69] = ['85', '89'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 10045. Examen TIC A2 2014";
 preguntaids[69] = 10045


//  Id pregunta: 10060 Año de creación de pregunta: 2015
 questions[70]= "71)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[70]= new Array();
 choices[70][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[70][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[70][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[70][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[70] = 1;
 units[70] = ['93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 10060. Examen TIC A2 2014";
 preguntaids[70] = 10060


//  Id pregunta: 10021 Año de creación de pregunta: 2015
 questions[71]= "72)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[71]= new Array();
 choices[71][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[71][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[71][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[71][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[71] = 2;
 units[71] = ['84'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10021. Examen TIC A2 2014";
 preguntaids[71] = 10021


//  Id pregunta: 10033 Año de creación de pregunta: 2015
 questions[72]= "73)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[72]= new Array();
 choices[72][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[72][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[72][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[72][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[72] = 1;
 units[72] = ['91', '86'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 10033. Examen TIC A2 2014";
 preguntaids[72] = 10033


//  Id pregunta: 10122 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[73]= new Array();
 choices[73][0] = "RAD.";
 choices[73][1] = "OpenUP.";
 choices[73][2] = "SSADM.";
 choices[73][3] = "UP.";
 answers[73] = 1;
 units[73] = ['84'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 10122. Examen TIC A1 2014";
 preguntaids[73] = 10122


//  Id pregunta: 10261 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;Cual de las afirmaciones es CORRECTA acerca de las diferentes modalidades de demanda, generadas por los negocios de los clientes?";
 choices[74]= new Array();
 choices[74][0] = "Son impulsadas por las pautas de las actividades de los negocios";
 choices[74][1] = "Es imposible predecir como se comportan";
 choices[74][2] = "Es imposible influenciar en las pautas de la demanda";
 choices[74][3] = "Son impulsadas por el calendario de entregas generado por el proceso de Gesti&oacute;n de la Capacidad";
 answers[74] = 0;
 units[74] = ['101'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 10261. Es la estacionalidad de la demanda.";
 preguntaids[74] = 10261


