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
//  Id pregunta: 9267 Año de creación de pregunta: 2014
 questions[0]= "1)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[0]= new Array();
 choices[0][0] = "2, uno mayor y otro menor.";
 choices[0][1] = "3, mayor, mediano y menor.";
 choices[0][2] = "Ninguno.";
 choices[0][3] = "Depende del protocolo implementado.";
 answers[0] = 0;
 units[0] = ['105'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9267. ";
 preguntaids[0] = 9267


//  Id pregunta: 9220 Año de creación de pregunta: 2014
 questions[1]= "2)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[1]= new Array();
 choices[1][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[1][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[1][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[1][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[1] = 0;
 units[1] = ['121'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9220. Examen TIC A1 2013";
 preguntaids[1] = 9220


//  Id pregunta: 9236 Año de creación de pregunta: 2014
 questions[2]= "3)  Se&ntilde;ale la respuesta correcta relativa al modelo de ciclo de vida en espiral:";
 choices[2]= new Array();
 choices[2][0] = "La dimensi&oacute;n radial mide el grado de avance del proyecto en cada fase y la dimensi&oacute;n angular el coste.";
 choices[2][1] = "Cada ciclo consta de 5 actividades: Determinar objetivos, an&aacute;lisis del riesgo, estimar, planificar y desarrollo-pruebas.";
 choices[2][2] = "Fue propuesto inicialmente por Rutherford.";
 choices[2][3] = "En sistemas peque&ntilde;os es un modelo poco operativo y se desaconseja su uso. Exige de gran experiencia en an&aacute;lisis y resoluci&oacute;n de riesgos.";
 answers[2] = 3;
 units[2] = ['82'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 9236. Examen TIC A1 2013";
 preguntaids[2] = 9236


//  Id pregunta: 9255 Año de creación de pregunta: 2014
 questions[3]= "4)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[3]= new Array();
 choices[3][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[3][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[3][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[3][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[3] = 1;
 units[3] = ['60'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9255. Examen TIC A2 2013";
 preguntaids[3] = 9255


//  Id pregunta: 9281 Año de creación de pregunta: 2014
 questions[4]= "5)  Cu&aacute;l de las siguientes palabras y acr&oacute;nimos NO est&aacute; relacionado con Metodolog&iacute;as &Aacute;giles para el desarrollo de software:";
 choices[4]= new Array();
 choices[4][0] = "SCRUM";
 choices[4][1] = "XP";
 choices[4][2] = "DSDM";
 choices[4][3] = "AGILD";
 answers[4] = 3;
 units[4] = ['84'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 9281. Examen TIC A2 2013. Promocion interna";
 preguntaids[4] = 9281


//  Id pregunta: 9263 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[5]= new Array();
 choices[5][0] = "ACSE (Association Control Service Element).";
 choices[5][1] = "RTSE (Reliable Transfer Service Element).";
 choices[5][2] = "ROSE (Remote Operation Service Element).";
 choices[5][3] = "ATSE (Application Transfer Service Element).";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9263. ";
 preguntaids[5] = 9263


//  Id pregunta: 9240 Año de creación de pregunta: 2014
 questions[6]= "7)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[6]= new Array();
 choices[6][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[6][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[6][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[6][3] = "C&aacute;lculo del Esfuerzo.";
 answers[6] = 3;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 9240. Examen TIC A1 2013";
 preguntaids[6] = 9240


//  Id pregunta: 9284 Año de creación de pregunta: 2014
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[7]= new Array();
 choices[7][0] = "ISO/IEC 12207:2008";
 choices[7][1] = "ISO 9001:2008";
 choices[7][2] = "ISO 29393:2009";
 choices[7][3] = "ISO 31000:2009";
 answers[7] = 0;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 9284. Examen TIC A2 2013. Promocion interna";
 preguntaids[7] = 9284


//  Id pregunta: 9238 Año de creación de pregunta: 2014
 questions[8]= "9)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[8]= new Array();
 choices[8][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[8][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[8][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[8][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[8] = 2;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 9238. Examen TIC A1 2013";
 preguntaids[8] = 9238


//  Id pregunta: 9253 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes es un Sistema Gestor de Bases de Datos Orientado a Objetos?";
 choices[9]= new Array();
 choices[9][0] = "Microsoft SQL Server.";
 choices[9][1] = "Versant.";
 choices[9][2] = "MariaDB.";
 choices[9][3] = "MySQL.";
 answers[9] = 1;
 units[9] = ['60'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9253. Examen TIC A2 2013";
 preguntaids[9] = 9253


//  Id pregunta: 9288 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[10]= new Array();
 choices[10][0] = "Cuestionarios";
 choices[10][1] = "Casos de uso.";
 choices[10][2] = "Matriz de trazabilidad de requisitos.";
 choices[10][3] = "Prototipos";
 answers[10] = 2;
 units[10] = ['84'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 9288. Examen TIC A2 2013. Promocion interna";
 preguntaids[10] = 9288


//  Id pregunta: 9279 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[11]= new Array();
 choices[11][0] = "Jefe de Proyecto";
 choices[11][1] = "Consultor";
 choices[11][2] = "Analista";
 choices[11][3] = "Programador";
 answers[11] = 0;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9279. Examen TIC A2 2013. Promocion interna";
 preguntaids[11] = 9279


//  Id pregunta: 9252 Año de creación de pregunta: 2014
 questions[12]= "13)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[12]= new Array();
 choices[12][0] = "Total y exclusiva.";
 choices[12][1] = "Parcial y superpuesta.";
 choices[12][2] = "Parcial y exclusiva.";
 choices[12][3] = "Total y superpuesta.";
 answers[12] = 2;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9252. Examen TIC A2 2013";
 preguntaids[12] = 9252


//  Id pregunta: 9225 Año de creación de pregunta: 2014
 questions[13]= "14)  El protocolo SET (Secure Electronic Transaction)";
 choices[13]= new Array();
 choices[13][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[13][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[13][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[13][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[13] = 1;
 units[13] = ['75'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9225. Examen TIC A1 2013";
 preguntaids[13] = 9225


//  Id pregunta: 9285 Año de creación de pregunta: 2014
 questions[14]= "15)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[14]= new Array();
 choices[14][0] = "Especialista en Comunicaciones";
 choices[14][1] = "Usuarios expertos";
 choices[14][2] = "T&eacute;cnicos de Comunicaciones.";
 choices[14][3] = "Grupo de Aseguramiento de la Calidad";
 answers[14] = 3;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 9285. Examen TIC A2 2013. Promocion interna";
 preguntaids[14] = 9285


//  Id pregunta: 9254 Año de creación de pregunta: 2014
 questions[15]= "16)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[15]= new Array();
 choices[15][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[15][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[15][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[15][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[15] = 0;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 9254. Examen TIC A2 2013";
 preguntaids[15] = 9254


//  Id pregunta: 9290 Año de creación de pregunta: 2014
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[16]= new Array();
 choices[16][0] = "La persistencia";
 choices[16][1] = "Los procesos de transformaci&oacute;n.";
 choices[16][2] = "El flujo de la informaci&oacute;n.";
 choices[16][3] = "La herencia";
 answers[16] = 3;
 units[16] = ['85', '86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 9290. Examen TIC A2 2013. Promocion interna";
 preguntaids[16] = 9290


//  Id pregunta: 9278 Año de creación de pregunta: 2014
 questions[17]= "18)  El &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[17]= new Array();
 choices[17][0] = "Proceso poco documentado.";
 choices[17][1] = "Proceso de desarrollo por definir.";
 choices[17][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[17][3] = "Control cuantitativo de productos";
 answers[17] = 2;
 units[17] = ['92'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 9278. Examen TIC A2 2013. Promocion interna";
 preguntaids[17] = 9278


//  Id pregunta: 9262 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[18]= new Array();
 choices[18][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[18][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[18][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[18][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[18] = 2;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9262. ";
 preguntaids[18] = 9262


//  Id pregunta: 9276 Año de creación de pregunta: 2014
 questions[19]= "20)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[19]= new Array();
 choices[19][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta.";
 choices[19][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[19][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public.";
 choices[19][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto.";
 answers[19] = 0;
 units[19] = ['60'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9276. Examen TIC A2 2013. Promocion interna";
 preguntaids[19] = 9276


//  Id pregunta: 9249 Año de creación de pregunta: 2014
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de las siguientes NO es un tipo de conexi&oacute;n v&aacute;lida entre un proceso y un almac&eacute;n de datos de un DFD (diagrama de flujo de datos), seg&uacute;n M&eacute;trica v3:";
 choices[20]= new Array();
 choices[20][0] = "Flujo de consulta.";
 choices[20][1] = "Flujo de actualizaci&oacute;n.";
 choices[20][2] = "Flujo de di&aacute;logo.";
 choices[20][3] = "Flujo de sincronizaci&oacute;n.";
 answers[20] = 3;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 9249. Examen TIC A2 2013";
 preguntaids[20] = 9249


//  Id pregunta: 9259 Año de creación de pregunta: 2014
 questions[21]= "22)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[21]= new Array();
 choices[21][0] = "Sirve para limitar la vida de un paquete.";
 choices[21][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[21][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[21][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[21] = 2;
 units[21] = ['109'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 9259. ";
 preguntaids[21] = 9259


//  Id pregunta: 9239 Año de creación de pregunta: 2014
 questions[22]= "23)  En el modelo CMM (Capability Maturity Model) un grado mayor de madurez al nivel Repetible es:";
 choices[22]= new Array();
 choices[22][0] = "Optimizado";
 choices[22][1] = "Definido";
 choices[22][2] = "Gestionado";
 choices[22][3] = "Inicial";
 answers[22] = 1;
 units[22] = ['92'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 9239. Examen TIC A1 2013";
 preguntaids[22] = 9239


//  Id pregunta: 9256 Año de creación de pregunta: 2014
 questions[23]= "24)  En una transacci&oacute;n en un Sistema de Gesti&oacute;n de Bases de Datos (SGBD), &iquest;qu&eacute; se entiende por el punto de integridad?";
 choices[23]= new Array();
 choices[23][0] = "El momento despu&eacute;s en el que se inicia la transacci&oacute;n.";
 choices[23][1] = "El estado de la base de datos en el momento en que se inicia la transacci&oacute;n.";
 choices[23][2] = "Hacer un rollback en el caso de que haya un problema antes de completar la transacci&oacute;n.";
 choices[23][3] = "El retorno con la confirmaci&oacute;n de que la transacci&oacute;n se ha completado con &eacute;xito.";
 answers[23] = 1;
 units[23] = ['60'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9256. Examen TIC A2 2013";
 preguntaids[23] = 9256


//  Id pregunta: 9237 Año de creación de pregunta: 2014
 questions[24]= "25)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[24]= new Array();
 choices[24][0] = "Control.";
 choices[24][1] = "Transacci&oacute;n.";
 choices[24][2] = "Mecanismo.";
 choices[24][3] = "Entrada.";
 answers[24] = 1;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9237. Examen TIC A1 2013";
 preguntaids[24] = 9237


//  Id pregunta: 9283 Año de creación de pregunta: 2014
 questions[25]= "26)  &iquest;Qu&eacute; practicas, seg&uacute;n M&eacute;trica v3, tienen como objetivo potenciar la participaci&oacute;nactiva de la alta direcci&oacute;n como medio para obtener los mejores resultados en elmenor tiempo posible y con una mayor calidad de los productos?";
 choices[25]= new Array();
 choices[25][0] = "Sesiones JAD.";
 choices[25][1] = "Sesiones JRP.";
 choices[25][2] = "Entrevistas";
 choices[25][3] = "Reuniones";
 answers[25] = 1;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 9283. Examen TIC A2 2013. Promocion interna";
 preguntaids[25] = 9283


//  Id pregunta: 9275 Año de creación de pregunta: 2014
 questions[26]= "27)  El establecimiento obligatorio de un sistema de registro de entrada de soportes que permita conocer, entre otros datos, el tipo de documento, fecha y hora, emisor y la persona autorizada responsables de la recepci&oacute;n, es una medida de seguridad de protecci&oacute;n de datos de car&aacute;cter personal de nivel";
 choices[26]= new Array();
 choices[26][0] = "b&aacute;sico.";
 choices[26][1] = "medio.";
 choices[26][2] = "alto.";
 choices[26][3] = "de auditor&iacute;a.";
 answers[26] = 1;
 units[26] = ['35'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 9275. Examen TIC A1 2013";
 preguntaids[26] = 9275


//  Id pregunta: 9257 Año de creación de pregunta: 2014
 questions[27]= "28)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[27]= new Array();
 choices[27][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[27][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[27][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[27][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[27] = 2;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9257. Examen TIC A2 2013";
 preguntaids[27] = 9257


//  Id pregunta: 9231 Año de creación de pregunta: 2014
 questions[28]= "29)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[28]= new Array();
 choices[28][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[28][1] = "l&iacute;neas de texto.";
 choices[28][2] = "palabras de una l&iacute;nea de texto.";
 choices[28][3] = "letras de una palabra.";
 answers[28] = 3;
 units[28] = ['81'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 9231. Examen TIC A1 2013";
 preguntaids[28] = 9231


//  Id pregunta: 9277 Año de creación de pregunta: 2014
 questions[29]= "30)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[29]= new Array();
 choices[29][0] = "Codd";
 choices[29][1] = "Boehm";
 choices[29][2] = "Chen";
 choices[29][3] = "James Marti";
 answers[29] = 3;
 units[29] = ['82'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 9277. Examen TIC A2 2013. Promocion interna";
 preguntaids[29] = 9277


//  Id pregunta: 9294 Año de creación de pregunta: 2014
 questions[30]= "31)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[30]= new Array();
 choices[30][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[30][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[30][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[30][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[30] = 3;
 units[30] = ['63'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9294. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[30] = 9294


//  Id pregunta: 9292 Año de creación de pregunta: 2014
 questions[31]= "32)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[31]= new Array();
 choices[31][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[31][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[31][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[31][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[31] = 2;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 9292. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[31] = 9292


//  Id pregunta: 9280 Año de creación de pregunta: 2014
 questions[32]= "33)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[32]= new Array();
 choices[32][0] = "Cat&aacute;logo de clases.";
 choices[32][1] = "Cat&aacute;logo de entidades";
 choices[32][2] = "Cat&aacute;logo de miembros.";
 choices[32][3] = "Cat&aacute;logo de interfaces.";
 answers[32] = 0;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 9280. Examen TIC A2 2013. Promocion interna";
 preguntaids[32] = 9280


//  Id pregunta: 9264 Año de creación de pregunta: 2014
 questions[33]= "34)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[33]= new Array();
 choices[33][0] = "N3.";
 choices[33][1] = "N4.";
 choices[33][2] = "N6.";
 choices[33][3] = "N7.";
 answers[33] = 2;
 units[33] = ['105'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9264. ";
 preguntaids[33] = 9264


//  Id pregunta: 9224 Año de creación de pregunta: 2014
 questions[34]= "35)  De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, el plazo de duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica ser&aacute; de";
 choices[34]= new Array();
 choices[34][0] = "30 a&ntilde;os a partir de la divulgaci&oacute;n y 70 desde la fecha de su creaci&oacute;n.";
 choices[34][1] = "70 a&ntilde;os computados a partir del 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n.";
 choices[34][2] = "50 a&ntilde;os computados a partir de su creaci&oacute;n.";
 choices[34][3] = "70 a&ntilde;os computados a partir de la fecha de divulgaci&oacute;n.";
 answers[34] = 1;
 units[34] = ['41'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 9224. Examen TIC A1 2013";
 preguntaids[34] = 9224


//  Id pregunta: 9229 Año de creación de pregunta: 2014
 questions[35]= "36)  En el mapeo objeto-relacional (ORM) en el que el objeto de dominio gestiona su propia persistencia se implementa el patr&oacute;n";
 choices[35]= new Array();
 choices[35][0] = "repositorio (repository pattern).";
 choices[35][1] = "registro activo (active record).";
 choices[35][2] = "mapeador de datos (data mapper).";
 choices[35][3] = "objeto de transferencia de datos (DTO, data transfer object pattern).";
 answers[35] = 1;
 units[35] = ['89'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 9229. Examen TIC A1 2013";
 preguntaids[35] = 9229


//  Id pregunta: 9248 Año de creación de pregunta: 2014
 questions[36]= "37)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[36]= new Array();
 choices[36][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[36][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[36][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[36][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[36] = 1;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9248. Examen TIC A2 2013";
 preguntaids[36] = 9248


//  Id pregunta: 9235 Año de creación de pregunta: 2014
 questions[37]= "38)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[37]= new Array();
 choices[37][0] = "En cascada.";
 choices[37][1] = "Basado en prototipos.";
 choices[37][2] = "En espiral WINWIN.";
 choices[37][3] = "RAD.";
 answers[37] = 2;
 units[37] = ['82'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 9235. Examen TIC A1 2013";
 preguntaids[37] = 9235


//  Id pregunta: 9260 Año de creación de pregunta: 2014
 questions[38]= "39)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[38][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[38][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[38][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[38] = 3;
 units[38] = ['105'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9260. ";
 preguntaids[38] = 9260


//  Id pregunta: 9230 Año de creación de pregunta: 2014
 questions[39]= "40)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[39]= new Array();
 choices[39][0] = "384 kbps.";
 choices[39][1] = "115 kbps.";
 choices[39][2] = "2 Mbps.";
 choices[39][3] = "10 Mbps.";
 answers[39] = 0;
 units[39] = ['117'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9230. Examen TIC A1 2013";
 preguntaids[39] = 9230


//  Id pregunta: 9223 Año de creación de pregunta: 2014
 questions[40]= "41)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[40]= new Array();
 choices[40][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[40][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[40][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[40][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[40] = 1;
 units[40] = ['102'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9223. Examen TIC A1 2013";
 preguntaids[40] = 9223


//  Id pregunta: 9282 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[41]= new Array();
 choices[41][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales.";
 choices[41][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[41][2] = "Valoraci&oacute;n de Alternativas.";
 choices[41][3] = "Definici&oacute;n del sistema.";
 answers[41] = 0;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 9282. Examen TIC A2 2013. Promocion interna";
 preguntaids[41] = 9282


//  Id pregunta: 9268 Año de creación de pregunta: 2014
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[42]= new Array();
 choices[42][0] = "IHL.";
 choices[42][1] = "NF.";
 choices[42][2] = "TOS.";
 choices[42][3] = "OPCIONES.";
 answers[42] = 1;
 units[42] = ['109'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 9268. ";
 preguntaids[42] = 9268


//  Id pregunta: 9234 Año de creación de pregunta: 2014
 questions[43]= "44)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[43]= new Array();
 choices[43][0] = "Consultores.";
 choices[43][1] = "Expertos.";
 choices[43][2] = "Analistas.";
 choices[43][3] = "Jefes de Proyecto.";
 answers[43] = 0;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 9234. Examen TIC A1 2013";
 preguntaids[43] = 9234


//  Id pregunta: 9272 Año de creación de pregunta: 2014
 questions[44]= "45)  La taxonom&iacute;a de Flynn:";
 choices[44]= new Array();
 choices[44][0] = "se ha revisado recientemente para incluir los sistemas Big Data.";
 choices[44][1] = "es una clasificaci&oacute;n de computadores en funci&oacute;n de su arquitectura.";
 choices[44][2] = "es la base de la taxonom&iacute;a de Bloom.";
 choices[44][3] = "se propuso con motivo de los primeros PC de IBM.";
 answers[44] = 1;
 units[44] = ['49'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9272. Examen TIC A1 2013";
 preguntaids[44] = 9272


//  Id pregunta: 9243 Año de creación de pregunta: 2014
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[45]= new Array();
 choices[45][0] = "T&eacute;cnicas Matriciales.";
 choices[45][1] = "M&eacute;todo Albrecht.";
 choices[45][2] = "An&aacute;lisis de Impacto.";
 choices[45][3] = "Caminos de Acceso.";
 answers[45] = 0;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 9243. Examen TIC A2 2013";
 preguntaids[45] = 9243


//  Id pregunta: 9258 Año de creación de pregunta: 2014
 questions[46]= "47)  Respecto al protocolo HDLC, indique la falsa:";
 choices[46]= new Array();
 choices[46][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[46][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[46][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[46][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[46] = 0;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9258. ";
 preguntaids[46] = 9258


//  Id pregunta: 9296 Año de creación de pregunta: 2014
 questions[47]= "48)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[47]= new Array();
 choices[47][0] = "System Data Type (SDT)";
 choices[47][1] = "Common Type System (CTS)";
 choices[47][2] = "Common Data Integration (CDI)";
 choices[47][3] = "Data Type Core (DTC)";
 answers[47] = 1;
 units[47] = ['63'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9296. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[47] = 9296


//  Id pregunta: 9265 Año de creación de pregunta: 2014
 questions[48]= "49)  Indique la opci&oacute;n falsa:";
 choices[48]= new Array();
 choices[48][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[48][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[48][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[48][3] = "Todas son verdaderas.";
 answers[48] = 0;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 9265. ";
 preguntaids[48] = 9265


//  Id pregunta: 9245 Año de creación de pregunta: 2014
 questions[49]= "50)  El proceso mediante el cual los usuarios descubren, revelan, organizan y comprenden los requisitos que desean se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Validaci&oacute;n de los requisitos.";
 choices[49][1] = "Entrevista de especificaci&oacute;n de requisitos.";
 choices[49][2] = "Estudio de viabilidad de requisitos.";
 choices[49][3] = "Elicitaci&oacute;n de requisitos.";
 answers[49] = 3;
 units[49] = ['84'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 9245. Examen TIC A2 2013";
 preguntaids[49] = 9245


//  Id pregunta: 9233 Año de creación de pregunta: 2014
 questions[50]= "51)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[50]= new Array();
 choices[50][0] = "mensajes XML sobre protocolo SMTP.";
 choices[50][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[50][2] = "OData.(Open Data Protocol)";
 choices[50][3] = "BPMN (Business Process Message Notation).";
 answers[50] = 3;
 units[50] = ['50'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 9233. Examen TIC A1 2013";
 preguntaids[50] = 9233


//  Id pregunta: 9269 Año de creación de pregunta: 2014
 questions[51]= "52)  Se&ntilde;ale la respuesta INCORRECTA sobre patrones de dise&ntilde;o orientado a objetos.";
 choices[51]= new Array();
 choices[51][0] = "Facilitan el aprendizaje de las nuevas generaciones de dise&ntilde;adores condensando conocimiento ya existente.";
 choices[51][1] = "Imponen ciertas alternativas de dise&ntilde;o frente a otras.";
 choices[51][2] = "Permiten la creatividad inherente al proceso de dise&ntilde;o.";
 choices[51][3] = "Estandarizan el modo en que se realiza el dise&ntilde;o.";
 answers[51] = 1;
 units[51] = ['89'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 9269. Examen TIC A1 2013";
 preguntaids[51] = 9269


//  Id pregunta: 9274 Año de creación de pregunta: 2014
 questions[52]= "53)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "Direcci&oacute;n General.";
 choices[52][1] = "Subdirecci&oacute;n General.";
 choices[52][2] = "Subsecretar&iacute;a.";
 choices[52][3] = "Secretar&iacute;a de Estado.";
 answers[52] = 2;
 units[52] = ['47'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 9274. Examen TIC A1 2013";
 preguntaids[52] = 9274


//  Id pregunta: 9289 Año de creación de pregunta: 2014
 questions[53]= "54)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[53]= new Array();
 choices[53][0] = "Proceso-Proceso";
 choices[53][1] = "Proceso-Entidad Externa";
 choices[53][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos.";
 choices[53][3] = "Entidad Externa-Proceso";
 answers[53] = 2;
 units[53] = ['85', '86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 9289. Examen TIC A2 2013. Promocion interna";
 preguntaids[53] = 9289


//  Id pregunta: 9291 Año de creación de pregunta: 2014
 questions[54]= "55)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[54]= new Array();
 choices[54][0] = "InProc";
 choices[54][1] = "StateServer";
 choices[54][2] = "ClusterServer";
 choices[54][3] = "SqlServer";
 answers[54] = 2;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9291. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[54] = 9291


//  Id pregunta: 9222 Año de creación de pregunta: 2014
 questions[55]= "56)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[55]= new Array();
 choices[55][0] = "interoperabilidad t&eacute;cnica.";
 choices[55][1] = "interoperabilidad organizativa.";
 choices[55][2] = "gesti&oacute;n de riesgos.";
 choices[55][3] = "auditor&iacute;a de seguridad.";
 answers[55] = 0;
 units[55] = ['43'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 9222. Examen TIC A1 2013";
 preguntaids[55] = 9222


//  Id pregunta: 9241 Año de creación de pregunta: 2014
 questions[56]= "57)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[56]= new Array();
 choices[56][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[56][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[56][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[56][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de losServicios.";
 answers[56] = 2;
 units[56] = ['91'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 9241. Examen TIC A1 2013";
 preguntaids[56] = 9241


//  Id pregunta: 9232 Año de creación de pregunta: 2014
 questions[57]= "58)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[57]= new Array();
 choices[57][0] = "modelo de valor.";
 choices[57][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[57][2] = "mapa de riesgos.";
 choices[57][3] = "estado de riesgo.";
 answers[57] = 0;
 units[57] = ['45'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 9232. Examen TIC A1 2013";
 preguntaids[57] = 9232


//  Id pregunta: 9287 Año de creación de pregunta: 2014
 questions[58]= "59)  En un proyecto de desarrollo que utiliza la metodolog&iacute;a SCRUM, aquel rol que tiene la responsabilidad de eliminar los obst&aacute;culos que impidan el progreso del equipo se denomina:";
 choices[58]= new Array();
 choices[58][0] = "Product owner.";
 choices[58][1] = "Retail Cashier.";
 choices[58][2] = "ScrumMaster";
 choices[58][3] = "Development team member.";
 answers[58] = 2;
 units[58] = ['84'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 9287. Examen TIC A2 2013. Promocion interna";
 preguntaids[58] = 9287


//  Id pregunta: 9286 Año de creación de pregunta: 2014
 questions[59]= "60)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[59]= new Array();
 choices[59][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[59][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[59][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[59][3] = "EVS 1 - Establecimiento del Alcance del Sistema.";
 answers[59] = 2;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 9286. Examen TIC A2 2013. Promocion interna";
 preguntaids[59] = 9286


//  Id pregunta: 9219 Año de creación de pregunta: 2014
 questions[60]= "61)  La norma ISO 27002";
 choices[60]= new Array();
 choices[60][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[60][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[60][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[60][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[60] = 1;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9219. Examen TIC A1 2013";
 preguntaids[60] = 9219


//  Id pregunta: 9242 Año de creación de pregunta: 2014
 questions[61]= "62)  Entre los aspectos fundamentales de la Programaci&oacute;n Extrema NO se encuentra:";
 choices[61]= new Array();
 choices[61][0] = "Desarrollo iterativo e incremental.";
 choices[61][1] = "Basada en la planificaci&oacute;n previa.";
 choices[61][2] = "El cliente est&aacute; integrado en el proyecto.";
 choices[61][3] = "Simplicidad en el dise&ntilde;o para agilizar el desarrollo y facilitar el mantenimiento.";
 answers[61] = 1;
 units[61] = ['84'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 9242. Examen TIC A1 2013";
 preguntaids[61] = 9242


//  Id pregunta: 9273 Año de creación de pregunta: 2014
 questions[62]= "63)  El formato MP3:";
 choices[62]= new Array();
 choices[62][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[62][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[62][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[62][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[62] = 3;
 units[62] = ['122'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 9273. Examen TIC A1 2013";
 preguntaids[62] = 9273


//  Id pregunta: 9271 Año de creación de pregunta: 2014
 questions[63]= "64)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:";
 choices[63]= new Array();
 choices[63][0] = "el multiling&uuml;ismo.";
 choices[63][1] = "la accesibilidad.";
 choices[63][2] = "el procedimiento compartido.";
 choices[63][3] = "la subsidiaridad.";
 answers[63] = 2;
 units[63] = ['43'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 9271. Examen TIC A1 2013";
 preguntaids[63] = 9271


//  Id pregunta: 9221 Año de creación de pregunta: 2014
 questions[64]= "65)  En el &aacute;mbito del dise&ntilde;o de sistemas software, la inyecci&oacute;n de dependencias";
 choices[64]= new Array();
 choices[64][0] = "aumenta el acoplamiento entre los m&oacute;dulos.";
 choices[64][1] = "es una forma de implementar el patr&oacute;n de Inversi&oacute;n de Control.";
 choices[64][2] = "facilita la detecci&oacute;n de errores (debugging) en tiempo de ejecuci&oacute;n";
 choices[64][3] = "es un patr&oacute;n de ataque que introduce (&ldquo;inyecta&rdquo;) c&oacute;digo malicioso para cambiar el curso de ejecuci&oacute;n.";
 answers[64] = 1;
 units[64] = ['85', '86'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 9221. Examen TIC A1 2013";
 preguntaids[64] = 9221


//  Id pregunta: 9250 Año de creación de pregunta: 2014
 questions[65]= "66)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[65]= new Array();
 choices[65][0] = "S&iacute;, mediante un flujo de datos.";
 choices[65][1] = "S&iacute;, mediante un flujo de control.";
 choices[65][2] = "Si, mediante un proceso iterativo.";
 choices[65][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[65] = 1;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 9250. Examen TIC A2 2013";
 preguntaids[65] = 9250


//  Id pregunta: 9270 Año de creación de pregunta: 2014
 questions[66]= "67)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[66]= new Array();
 choices[66][0] = "Para mejorar la resistencia a las interferencias.";
 choices[66][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[66][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[66][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[66] = 0;
 units[66] = ['117'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9270. Examen TIC A1 2013";
 preguntaids[66] = 9270


//  Id pregunta: 9266 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[67]= new Array();
 choices[67][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[67][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[67][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[67][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[67] = 2;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9266. ";
 preguntaids[67] = 9266


//  Id pregunta: 9293 Año de creación de pregunta: 2014
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[68]= new Array();
 choices[68][0] = "DRILL";
 choices[68][1] = "POLL";
 choices[68][2] = "PIVOT";
 choices[68][3] = "SLICE &amp; DICE";
 answers[68] = 1;
 units[68] = ['72'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 9293. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[68] = 9293


//  Id pregunta: 9246 Año de creación de pregunta: 2014
 questions[69]= "70)  La relaci&oacute;n entre los requisitos, sus fuentes y el dise&ntilde;o del sistema se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Evaluaci&oacute;n de requisitos.";
 choices[69][1] = "Trazabilidad.";
 choices[69][2] = "Integridad de requisitos.";
 choices[69][3] = "Gesti&oacute;n de requisitos.";
 answers[69] = 1;
 units[69] = ['84'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 9246. Examen TIC A2 2013";
 preguntaids[69] = 9246


//  Id pregunta: 9261 Año de creación de pregunta: 2014
 questions[70]= "71)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[70]= new Array();
 choices[70][0] = "8192";
 choices[70][1] = "1024";
 choices[70][2] = "512";
 choices[70][3] = "2048";
 answers[70] = 0;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9261. ";
 preguntaids[70] = 9261


//  Id pregunta: 9295 Año de creación de pregunta: 2014
 questions[71]= "72)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[71]= new Array();
 choices[71][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[71][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[71][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[71][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[71] = 3;
 units[71] = ['72'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9295. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[71] = 9295


//  Id pregunta: 9251 Año de creación de pregunta: 2014
 questions[72]= "73)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[72]= new Array();
 choices[72][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[72][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[72][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[72][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[72] = 1;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 9251. Examen TIC A2 2013";
 preguntaids[72] = 9251


//  Id pregunta: 9244 Año de creación de pregunta: 2014
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[73]= new Array();
 choices[73][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[73][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[73][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[73][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[73] = 2;
 units[73] = ['84'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 9244. Examen TIC A2 2013";
 preguntaids[73] = 9244


//  Id pregunta: 9226 Año de creación de pregunta: 2014
 questions[74]= "75)  De entre los siguientes procedimientos de b&uacute;squeda, &iquest;cu&aacute;l utiliza un m&eacute;todo heur&iacute;stico?";
 choices[74]= new Array();
 choices[74][0] = "B&uacute;squeda primero el mejor.";
 choices[74][1] = "B&uacute;squeda bidireccional";
 choices[74][2] = "B&uacute;squeda primero en anchura";
 choices[74][3] = "B&uacute;squeda primero en profundidad";
 answers[74] = 0;
 units[74] = ['67'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 9226. Examen TIC A1 2013";
 preguntaids[74] = 9226


