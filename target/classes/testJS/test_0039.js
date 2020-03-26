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
//  Id pregunta: 8888 Año de creación de pregunta: 2013
 questions[0]= "1)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[0]= new Array();
 choices[0][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[0][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[0][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[0][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[0] = 2;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8888. Examen AGE TIC A1 2011";
 preguntaids[0] = 8888


//  Id pregunta: 8644 Año de creación de pregunta: 2013
 questions[1]= "2)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[1]= new Array();
 choices[1][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[1][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[1][2] = "Si, en todos los casos";
 choices[1][3] = "Todas las anteriores son falsas";
 answers[1] = 2;
 units[1] = ['41'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8644. ";
 preguntaids[1] = 8644


//  Id pregunta: 4981 Año de creación de pregunta: 2002
 questions[2]= "3)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "suelen prestar servicios de tipo proxy";
 choices[2][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[2][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[2][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[2] = 0;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4981. ";
 preguntaids[2] = 4981


//  Id pregunta: 2864 Año de creación de pregunta: 2002
 questions[3]= "4)  En un sistema fuertemente acoplado (tightly coupled):";
 choices[3]= new Array();
 choices[3][0] = "Los procesadores solo pueden acceder a los recursos mas cercanos, que ellos controlan";
 choices[3][1] = "Los procesadores pueden acceder a todos los recursos del sistema, mediante paso de mensajes";
 choices[3][2] = "El acceso es posible directamente para todos los procesadores, a la misma velocidad";
 choices[3][3] = "El acceso es posible directamente para todos los procesadores, pero con variaciones de velocidad seg&uacute;n la memoria accedida";
 answers[3] = 2;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2864. ";
 preguntaids[3] = 2864


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[4]= "5)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[4]= new Array();
 choices[4][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[4][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[4][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[4][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[4] = 0;
 units[4] = ['4', '7', '8', '9'];
 blocks[4] = ['A1', 'A2'];
 comments[4] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[4] = 982


//  Id pregunta: 9401 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[5]= new Array();
 choices[5][0] = "ATSC";
 choices[5][1] = "ISDB-T";
 choices[5][2] = "DVB-T";
 choices[5][3] = "EDTVB";
 answers[5] = 2;
 units[5] = ['115'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9401. Examen TIC A2  2013";
 preguntaids[5] = 9401


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[6]= new Array();
 choices[6][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[6][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[6][2] = "Fomentar el despliegue de redes y servicios";
 choices[6][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[6] = 0;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 449. Agenda Digital para Espa&ntilde;a";
 preguntaids[6] = 449


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[7]= "8)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[7]= new Array();
 choices[7][0] = "Entradas (entities).";
 choices[7][1] = "Atributos (attribs).";
 choices[7][2] = "M&oacute;dulos (modules).";
 choices[7][3] = "Objetos (objects).";
 answers[7] = 0;
 units[7] = ['74'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 772. Junta de Extremadura A1 2015";
 preguntaids[7] = 772


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[8]= new Array();
 choices[8][0] = "En 2015";
 choices[8][1] = "En 2013";
 choices[8][2] = "En 2016";
 choices[8][3] = "En 2007";
 answers[8] = 1;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 445. Agenda Digital";
 preguntaids[8] = 445


//  Id pregunta: 7640 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[9]= new Array();
 choices[9][0] = "Estudio de informaci&oacute;n relevante.";
 choices[9][1] = "Definici&oacute;n de un Plan de Acci&oacute;n.";
 choices[9][2] = "Definici&oacute;n de un Plan de Riesgo.";
 choices[9][3] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 answers[9] = 2;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7640. Map 2006";
 preguntaids[9] = 7640


//  Id pregunta: 8934 Año de creación de pregunta: 2013
 questions[10]= "11)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[10]= new Array();
 choices[10][0] = "Verificaciones de integridad";
 choices[10][1] = "Verificaciones de consistencia";
 choices[10][2] = "Verificaciones de completitud";
 choices[10][3] = "Verificaciones de validez";
 answers[10] = 0;
 units[10] = ['84'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 8934. Seg&uacute;n M&eacute;trica v3 los requisitos han de ser v&aacute;lidos, consistentes y completos.";
 preguntaids[10] = 8934


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[11]= new Array();
 choices[11][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[11][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[11][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[11][3] = "El pago de subsidios a parados";
 answers[11] = 3;
 units[11] = ['15'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 421. Mercado laboral";
 preguntaids[11] = 421


//  Id pregunta: 9746 Año de creación de pregunta: 2014
 questions[12]= "13)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[12]= new Array();
 choices[12][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[12][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[12][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[12][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[12] = 2;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9746. ";
 preguntaids[12] = 9746


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[13]= "14)  En la realizaci&oacute;n de DFDs:";
 choices[13]= new Array();
 choices[13][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[13][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[13][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[13][3] = "Todas las respuestas anteriores son correctas";
 answers[13] = 3;
 units[13] = ['85', '86'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 3821. ";
 preguntaids[13] = 3821


//  Id pregunta: 4195 Año de creación de pregunta: 2006
 questions[14]= "15)  Referido al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones representa tipos de acoplamiento correctos?";
 choices[14]= new Array();
 choices[14][0] = "Directo, de datos simple, por estampado, de control, externo, com&uacute;n, por contenido.";
 choices[14][1] = "Directo, de datos compuestos, por estampado, de control, externo, com&uacute;n, por contenido.";
 choices[14][2] = "Directo, de datos simple, por estampado, de control, externo, com&uacute;n, por contenido, procedimental.";
 choices[14][3] = "Directo, de datos simple, por estampado, de control, externo, funcional, por contenido.";
 answers[14] = 0;
 units[14] = ['89'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 4195. ";
 preguntaids[14] = 4195


//  Id pregunta: 7929 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;C&oacute;mo se denomina el informe elaborado por el Observatorio de Administraci&oacute;n Electr&oacute;nica para analizar de manera espec&iacute;fica, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[15]= new Array();
 choices[15][0] = "Informe PRINCESA.";
 choices[15][1] = "Informe TECNIMAP.";
 choices[15][2] = "Informe IRIA.";
 choices[15][3] = "Informe REINA.";
 answers[15] = 3;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 7929. Examen TIC A1 2010";
 preguntaids[15] = 7929


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[16]= new Array();
 choices[16][0] = "El Tratado de Lisboa";
 choices[16][1] = "El Tratado de Amsterdam";
 choices[16][2] = "El Tratado de Niza";
 choices[16][3] = "El Acta &Uacute;nica Europea";
 answers[16] = 1;
 units[16] = ['15'];
 blocks[16] = ['A3'];
 comments[16] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[16] = 420


//  Id pregunta: 7539 Año de creación de pregunta: 2010
 questions[17]= "18)  El est&aacute;ndar de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es:";
 choices[17]= new Array();
 choices[17][0] = "X.600.";
 choices[17][1] = "Open LDAP.";
 choices[17][2] = "X.400.";
 choices[17][3] = "X.500.";
 answers[17] = 3;
 units[17] = ['105'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 7539. Map 2005";
 preguntaids[17] = 7539


//  Id pregunta: 1451 Año de creación de pregunta: 2016
 questions[18]= "19)  La resistencia, excusa o negativa a la actuaci&oacute;n inspectora de los &oacute;rganos facultados para llevarla a cabo con arreglo a la LSSI art&iacute;culo 38 constituye una infracci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Leve.";
 choices[18][1] = "Grave.";
 choices[18][2] = "Muy grave.";
 choices[18][3] = "No constituye infracci&oacute;n.";
 answers[18] = 1;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 1451. ";
 preguntaids[18] = 1451


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[19]= new Array();
 choices[19][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[19][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[19][2] = "c) Todas las respuestas son correctas.";
 choices[19][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[19] = 1;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 177. Uni&oacute;n Europea";
 preguntaids[19] = 177


//  Id pregunta: 3666 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes tareas no pertenece a la actividad 'Ejecuci&oacute;n de las pruebas del sistema'?:";
 choices[20]= new Array();
 choices[20][0] = "Preparaci&oacute;n del entorno de las pruebas del sistema";
 choices[20][1] = "Evaluaci&oacute;n del resultado de las pruebas del sistema";
 choices[20][2] = "Preparaci&oacute;n de pruebas de aceptaci&oacute;n del sistema";
 choices[20][3] = "Realizaci&oacute;n de las pruebas del sistema";
 answers[20] = 2;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3666. ";
 preguntaids[20] = 3666


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[21]= new Array();
 choices[21][0] = "Crecimiento sostenible";
 choices[21][1] = "Crecimiento inteligente";
 choices[21][2] = "Crecimiento digital";
 choices[21][3] = "Crecimiento integrador";
 answers[21] = 2;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 475. Europa 2020";
 preguntaids[21] = 475


//  Id pregunta: 1585 Año de creación de pregunta: 2016
 questions[22]= "23)  La t&eacute;cnica de Desarrollo Conjunto de Aplicaciones (JAD, Joint Application Development):";
 choices[22]= new Array();
 choices[22][0] = "Se aplica para identificar requisitos en el campo de los sistemas de informaci&oacute;n.";
 choices[22][1] = "Implica m&aacute;s a los ingenieros de requisitos y menos a los usuarios y clientes.";
 choices[22][2] = "Requiere m&aacute;s tiempo para contrastar las opiniones con los clientes.";
 choices[22][3] = "Implica la realizaci&oacute;n de entrevistas individuales para su posterior puesta en com&uacute;n.";
 answers[22] = 0;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 1585. ";
 preguntaids[22] = 1585


//  Id pregunta: 887 Año de creación de pregunta: 2016
 questions[23]= "24)  El est&aacute;ndar del ADSL2+ (ADSL2 Plus) es:";
 choices[23]= new Array();
 choices[23][0] = "ITU G.993.3";
 choices[23][1] = "ITU G.992.4";
 choices[23][2] = "ITU G.992.5";
 choices[23][3] = "ITU G.993.6";
 answers[23] = 2;
 units[23] = ['108'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 887. AGE A2 2015";
 preguntaids[23] = 887


//  Id pregunta: 9848 Año de creación de pregunta: 2015
 questions[24]= "25)  En Scrum, el prop&oacute;sito de la retrospectiva del Sprint es:";
 choices[24]= new Array();
 choices[24][0] = "Revisar el estado del producto que se ha desarrollado durante el Sprint.";
 choices[24][1] = "Realizar una mejora continua del proceso.";
 choices[24][2] = "Que el Scrum Master comunique al equipo lo que deben mejorar para el siguiente Sprint.";
 choices[24][3] = "Asignar las tareas del siguiente Sprint a los diferentes miembros del equipo.";
 answers[24] = 1;
 units[24] = ['84'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9848. ";
 preguntaids[24] = 9848


//  Id pregunta: 2206 Año de creación de pregunta: 2009
 questions[25]= "26)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[25]= new Array();
 choices[25][0] = "Ministerio de Justicia";
 choices[25][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[25][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[25][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[25] = 3;
 units[25] = ['35'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2206. ";
 preguntaids[25] = 2206


//  Id pregunta: 969 Año de creación de pregunta: 2016
 questions[26]= "27)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[26]= new Array();
 choices[26][0] = "el Gobierno de la Naci&oacute;n";
 choices[26][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[26][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[26][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[26] = 3;
 units[26] = ['4', '7', '8', '9'];
 blocks[26] = ['A1', 'A2'];
 comments[26] = "Id Pregunta: 969. Ley 40/2015";
 preguntaids[26] = 969


//  Id pregunta: 6561 Año de creación de pregunta: 2003
 questions[27]= "28)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[27]= new Array();
 choices[27][0] = "RDF (Resource Description Framework).";
 choices[27][1] = "OWL (Web Ontology Language).";
 choices[27][2] = "XML (Extensible Markup Language)";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 3;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 6561. ";
 preguntaids[27] = 6561


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[28]= "29)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[28]= new Array();
 choices[28][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[28][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[28][2] = "Absoluta frente a cualquier otro gasto.";
 choices[28][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[28] = 2;
 units[28] = ['11'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 327. Presupuestos generales";
 preguntaids[28] = 327


//  Id pregunta: 6395 Año de creación de pregunta: 2003
 questions[29]= "30)  Que aspecto debe considerarse a la hora de efectuar una planificaci&oacute;n estrat&eacute;gica";
 choices[29]= new Array();
 choices[29][0] = "La misi&oacute;n del negocio";
 choices[29][1] = "La situaci&oacute;n de los competidores";
 choices[29][2] = "Los hitos en el calendario de actuaci&oacute;n";
 choices[29][3] = "Deben considerarse los aspectos anteriores";
 answers[29] = 3;
 units[29] = ['83'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 6395. Examen 2006 JCYL";
 preguntaids[29] = 6395


//  Id pregunta: 5303 Año de creación de pregunta: 2006
 questions[30]= "31)  Las siglas NNTP corresponden a:";
 choices[30]= new Array();
 choices[30][0] = "Native News Transport Protocol";
 choices[30][1] = "Native Network Transport Protocol";
 choices[30][2] = "Network News Transport Protocol";
 choices[30][3] = "Todas las anteriores son falsas";
 answers[30] = 2;
 units[30] = ['103'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5303. ";
 preguntaids[30] = 5303


//  Id pregunta: 6148 Año de creación de pregunta: 2003
 questions[31]= "32)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[31]= new Array();
 choices[31][0] = "Entidad externa";
 choices[31][1] = "Proceso";
 choices[31][2] = "Funci&oacute;n";
 choices[31][3] = "Almac&eacute;n de datos";
 answers[31] = 2;
 units[31] = ['85', '86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6148. Examen TIC A1 MAP 2007";
 preguntaids[31] = 6148


//  Id pregunta: 9150 Año de creación de pregunta: 2014
 questions[32]= "33)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[32]= new Array();
 choices[32][0] = "chmod u+s /directorio/fichero";
 choices[32][1] = "chmog g+s /directorio";
 choices[32][2] = "chmod 177 /directorio";
 choices[32][3] = "chmod +t /directorio";
 answers[32] = 3;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9150. Examen TIC A2 2013";
 preguntaids[32] = 9150


//  Id pregunta: 4803 Año de creación de pregunta: 2002
 questions[33]= "34)  En el servicio de telefon&iacute;a celular se utiliza el concepto de celda indicando:";
 choices[33]= new Array();
 choices[33][0] = "Zona de cobertura del terminal";
 choices[33][1] = "Distancia m&aacute;xima del terminal a la estaci&oacute;n repetidora";
 choices[33][2] = "Distancia m&iacute;nima entre estaciones repetidoras";
 choices[33][3] = "Zona de cobertura de una estaci&oacute;n base";
 answers[33] = 3;
 units[33] = ['117'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4803. ";
 preguntaids[33] = 4803


//  Id pregunta: 2954 Año de creación de pregunta: 2002
 questions[34]= "35)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[34][1] = "Microtecnolog&iacute;a";
 choices[34][2] = "Microb&oacute;tica";
 choices[34][3] = "Nanotecnolog&iacute;a";
 answers[34] = 3;
 units[34] = ['52'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2954. ";
 preguntaids[34] = 2954


//  Id pregunta: 7861 Año de creación de pregunta: 2011
 questions[35]= "36)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticas generales del sistema) valen respectivamente 100 y 65:";
 choices[35]= new Array();
 choices[35][0] = "165";
 choices[35][1] = "120";
 choices[35][2] = "SVA no puede tener un valor superior a 50.";
 choices[35][3] = "130";
 answers[35] = 3;
 units[35] = ['94'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7861. Examen TIC A1 2010";
 preguntaids[35] = 7861


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[36]= "37)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[36]= new Array();
 choices[36][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[36][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[36][2] = "Ninguna es correcta.";
 choices[36][3] = "A y B son correctas.";
 answers[36] = 1;
 units[36] = ['14'];
 blocks[36] = ['A3'];
 comments[36] = "Id Pregunta: 391. Pol&iacute;ticas de igualdad";
 preguntaids[36] = 391


//  Id pregunta: 2920 Año de creación de pregunta: 2002
 questions[37]= "38)  Kerberos utiliza algoritmos de cifrado:";
 choices[37]= new Array();
 choices[37][0] = "No utiliza algoritmos de cifrado, porque no cifra nada";
 choices[37][1] = "Utiliza algoritmos de cifrado RSA";
 choices[37][2] = "Utiliza algoritmos de cifrado tipo DES";
 choices[37][3] = "Lo &uacute;nico que utiliza es firma electr&oacute;nica";
 answers[37] = 2;
 units[37] = ['76'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2920. ";
 preguntaids[37] = 2920


//  Id pregunta: 5779 Año de creación de pregunta: 2007
 questions[38]= "39)  En M&eacute;trica V3 NO es un tipo de las denominadas Pruebas del Sistema las:";
 choices[38]= new Array();
 choices[38][0] = "pruebas funcionales";
 choices[38][1] = "pruebas de facilidad de uso";
 choices[38][2] = "pruebas de verificaci&oacute;n";
 choices[38][3] = "pruebas de volumen";
 answers[38] = 2;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 5779. ";
 preguntaids[38] = 5779


//  Id pregunta: 7119 Año de creación de pregunta: 2010
 questions[39]= "40)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[39]= new Array();
 choices[39][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[39][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[39][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[39][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[39] = 2;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 7119. Art&iacute;culo 4 RD 1671/2009";
 preguntaids[39] = 7119


//  Id pregunta: 4322 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[40]= new Array();
 choices[40][0] = "Red";
 choices[40][1] = "Transporte";
 choices[40][2] = "Sesi&oacute;n";
 choices[40][3] = "Presentaci&oacute;n";
 answers[40] = 1;
 units[40] = ['105'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4322. Similar a examen TIC SS A 2003";
 preguntaids[40] = 4322


//  Id pregunta: 5067 Año de creación de pregunta: 2002
 questions[41]= "42)  S-HTTP:";
 choices[41]= new Array();
 choices[41][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[41][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[41][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[41][3] = "Es un protocolo del nivel de transporte";
 answers[41] = 1;
 units[41] = ['120'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5067. ";
 preguntaids[41] = 5067


//  Id pregunta: 2985 Año de creación de pregunta: 2002
 questions[42]= "43)  Los servlets:";
 choices[42]= new Array();
 choices[42][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[42][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[42][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[42][3] = "Todas las respuestas anteriores son correctas";
 answers[42] = 0;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2985. ";
 preguntaids[42] = 2985


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[43]= "44)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[43]= new Array();
 choices[43][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[43][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[43][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[43][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[43] = 0;
 units[43] = ['12'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 333. Modelo econ&oacute;mico";
 preguntaids[43] = 333


//  Id pregunta: 10927 Año de creación de pregunta: 2015
 questions[44]= "45)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[44]= new Array();
 choices[44][0] = "Segmentaci&oacute;n de la LAN";
 choices[44][1] = "Cambio de forma de conexi&oacute;n";
 choices[44][2] = "Cambio de troncal";
 choices[44][3] = "Cambio de Sistema de cableado estructurado";
 answers[44] = 0;
 units[44] = ['104'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10927. ";
 preguntaids[44] = 10927


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de estos servicios no es integrable con aplicaciones usuarias?";
 choices[45]= new Array();
 choices[45][0] = "SIR";
 choices[45][1] = "REC";
 choices[45][2] = "GEISER";
 choices[45][3] = "ORVE";
 answers[45] = 3;
 units[45] = ['47'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 628. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[45] = 628


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


//  Id pregunta: 6391 Año de creación de pregunta: 2003
 questions[47]= "48)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[47]= new Array();
 choices[47][0] = "Estudio de Viabilidad del Sistema";
 choices[47][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[47][2] = "Definici&oacute;n del Sistema";
 choices[47][3] = "Estudio del Sistema Actual";
 answers[47] = 0;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6391. Examen 2006 JCYL";
 preguntaids[47] = 6391


//  Id pregunta: 8787 Año de creación de pregunta: 2013
 questions[48]= "49)  La t&eacute;cnica de McCabe permite medir:";
 choices[48]= new Array();
 choices[48][0] = "La productividad del software";
 choices[48][1] = "La complejidad del software";
 choices[48][2] = "La fiabilidad del software";
 choices[48][3] = "Ninguna de las tres";
 answers[48] = 1;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 8787. ";
 preguntaids[48] = 8787


//  Id pregunta: 1019 Año de creación de pregunta: 2016
 questions[49]= "50)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado, la suplencia del Delegado del Gobierno corresponder&aacute; a:";
 choices[49]= new Array();
 choices[49][0] = "el Secretario General";
 choices[49][1] = "el Subdirector General";
 choices[49][2] = "el Secretario de Estado";
 choices[49][3] = "ninguna es correcta";
 answers[49] = 0;
 units[49] = ['4', '7', '8', '9'];
 blocks[49] = ['A1', 'A2'];
 comments[49] = "Id Pregunta: 1019. Ley 40/2015";
 preguntaids[49] = 1019


//  Id pregunta: 8461 Año de creación de pregunta: 2011
 questions[50]= "51)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[50]= new Array();
 choices[50][0] = "...gasto alguno para el afectado&rdquo;";
 choices[50][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[50][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[50][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[50] = 2;
 units[50] = ['35'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8461. ";
 preguntaids[50] = 8461


//  Id pregunta: 8744 Año de creación de pregunta: 2013
 questions[51]= "52)  &iquest;Cu&aacute;l es el dominio de CobiT m&aacute;s afectado de cara a la Continuidad del Negocio?";
 choices[51]= new Array();
 choices[51][0] = "Planificaci&oacute;n y Organizaci&oacute;n.";
 choices[51][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[51][2] = "Entrega y Soporte.";
 choices[51][3] = "Supervisi&oacute;n y Evaluaci&oacute;n.";
 answers[51] = 2;
 units[51] = ['101'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 8744. ";
 preguntaids[51] = 8744


//  Id pregunta: 8526 Año de creación de pregunta: 2013
 questions[52]= "53)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[52]= new Array();
 choices[52][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[52][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[52][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = 3;
 units[52] = ['10'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 8526. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";
 preguntaids[52] = 8526


//  Id pregunta: 4909 Año de creación de pregunta: 2002
 questions[53]= "54)  La prioridad de acceso en redes Token Ring:";
 choices[53]= new Array();
 choices[53][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[53][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[53][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[53][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[53] = 3;
 units[53] = ['112'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4909. ";
 preguntaids[53] = 4909


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[54]= "55)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[54]= new Array();
 choices[54][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[54][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[54][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[54][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[54] = 2;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 484. Sociedad de la informaci&oacute;n";
 preguntaids[54] = 484


//  Id pregunta: 7423 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[55]= new Array();
 choices[55][0] = "Sindicaci&oacute;n de contenidos";
 choices[55][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[55][2] = "P&aacute;ginas personales";
 choices[55][3] = "Directorios (taxonom&iacute;as)";
 answers[55] = 0;
 units[55] = ['124'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7423. Examen TIC B 2009";
 preguntaids[55] = 7423


//  Id pregunta: 2856 Año de creación de pregunta: 2002
 questions[56]= "57)  En un disco duro Winchester:";
 choices[56]= new Array();
 choices[56][0] = "Las cabezas tocan el disco en todo momento";
 choices[56][1] = "Las cabezas nunca tocan el disco";
 choices[56][2] = "Las cabezas tocan el disco para grabar";
 choices[56][3] = "Las cabezas solo tocan el disco para formatearlo a bajo nivel";
 answers[56] = 1;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2856. ";
 preguntaids[56] = 2856


//  Id pregunta: 2062 Año de creación de pregunta: 2002
 questions[57]= "58)  Al hablar de &quot;Metodolog&iacute;a de planificaci&oacute;n de capacidad&quot;, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[57]= new Array();
 choices[57][0] = "La metodolog&iacute;a Bench-Mark se usa para comparar distintos sistemas inform&aacute;ticos frente a una carga caracter&iacute;stica de una instalaci&oacute;n concreta que permite realizar mediciones en el ambiente real";
 choices[57][1] = "La metodolog&iacute;a de proyecci&oacute;n lineal se basa en leyes como las de Parkinson y Murphy";
 choices[57][2] = "La metodolog&iacute;a de proyecci&oacute;n lineal se puede aplicar para explicar fen&oacute;menos de comportamiento no lineal";
 choices[57][3] = "La metodolog&iacute;a Bench-Mark se basa en la utilizaci&oacute;n de programas para simular la realidad";
 answers[57] = 0;
 units[57] = ['29'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2062. ";
 preguntaids[57] = 2062


//  Id pregunta: 4551 Año de creación de pregunta: 2002
 questions[58]= "59)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[58]= new Array();
 choices[58][0] = "802.1";
 choices[58][1] = "802.2";
 choices[58][2] = "802.1";
 choices[58][3] = "802.12";
 answers[58] = 1;
 units[58] = ['109'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4551. ";
 preguntaids[58] = 4551


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[59]= "60)  Sobre el Plan Juncker:";
 choices[59]= new Array();
 choices[59][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[59][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[59][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[59][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[59] = 1;
 units[59] = ['5'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 104. Uni&oacute;n Europea";
 preguntaids[59] = 104


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[60]= "61)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[60][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[60][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[60][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[60] = 0;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 479. Sociedad de la informaci&oacute;n";
 preguntaids[60] = 479


//  Id pregunta: 8394 Año de creación de pregunta: 2011
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas:";
 choices[61]= new Array();
 choices[61][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[61][1] = "M&eacute;todo de TOPSIS";
 choices[61][2] = "M&eacute;todo Delphi";
 choices[61][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[61] = 2;
 units[61] = ['38'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 8394. ";
 preguntaids[61] = 8394


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[62]= "63)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[62]= new Array();
 choices[62][0] = "Presentar la moci&oacute;n de censura.";
 choices[62][1] = "Presidir las sesiones del Parlamento.";
 choices[62][2] = "Organizar la Secretar&iacute;a General.";
 choices[62][3] = "Preparar las actividades de las Comisiones.";
 answers[62] = 1;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 189. Uni&oacute;n Europea";
 preguntaids[62] = 189


//  Id pregunta: 8002 Año de creación de pregunta: 2011
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor?";
 choices[63]= new Array();
 choices[63][0] = "JavaScript";
 choices[63][1] = "Applets";
 choices[63][2] = "JSP";
 choices[63][3] = "VisualScript";
 answers[63] = 2;
 units[63] = ['62'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8002. Examen TIC A2 2010";
 preguntaids[63] = 8002


//  Id pregunta: 2615 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes no representan una caracter&iacute;stica de Unix?:";
 choices[64]= new Array();
 choices[64][0] = "Multiusuario y multitarea";
 choices[64][1] = "Sistema jer&aacute;rquico de ficheros";
 choices[64][2] = "Comando de int&eacute;rpretes flexible";
 choices[64][3] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 answers[64] = 3;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2615. ";
 preguntaids[64] = 2615


//  Id pregunta: 9050 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[65]= new Array();
 choices[65][0] = "CMM";
 choices[65][1] = "CMMI Escalonado";
 choices[65][2] = "CMMI Continuo";
 choices[65][3] = "Ninguno de los anteriores";
 answers[65] = 0;
 units[65] = ['92'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 9050. ";
 preguntaids[65] = 9050


//  Id pregunta: 1182 Año de creación de pregunta: 2016
 questions[66]= "67)  El lenguaje de consulta que nos proporciona los medios para extraer y manipular informaci&oacute;n en documentos o, de cualquier fuente de datos XML, y que utiliza expresiones XPath para acceder a determinadas partes del documento XML se denomina:";
 choices[66]= new Array();
 choices[66][0] = "X-Ask";
 choices[66][1] = "XInclude";
 choices[66][2] = "XLink";
 choices[66][3] = "XQuery";
 answers[66] = 3;
 units[66] = ['74'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1182. ";
 preguntaids[66] = 1182


//  Id pregunta: 6506 Año de creación de pregunta: 2003
 questions[67]= "68)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[67]= new Array();
 choices[67][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[67][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[67][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[67][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[67] = 3;
 units[67] = ['119'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 6506. ";
 preguntaids[67] = 6506


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[68]= "69)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[68]= new Array();
 choices[68][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[68][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[68][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[68][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[68] = 0;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[68] = 254


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[69]= new Array();
 choices[69][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[69] = 1;
 units[69] = ['14'];
 blocks[69] = ['A3'];
 comments[69] = "Id Pregunta: 355. Estado del Bienestar";
 preguntaids[69] = 355


//  Id pregunta: 1351 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[70]= new Array();
 choices[70][0] = "Alternativas textuales.";
 choices[70][1] = "Distinguible.";
 choices[70][2] = "Predecible.";
 choices[70][3] = "Compatible.";
 answers[70] = 2;
 units[70] = ['42'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 1351. ";
 preguntaids[70] = 1351


//  Id pregunta: 1655 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[71]= new Array();
 choices[71][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[71][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[71][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[71][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[71] = 3;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 1655. ";
 preguntaids[71] = 1655


//  Id pregunta: 8622 Año de creación de pregunta: 2013
 questions[72]= "73)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[72]= new Array();
 choices[72][0] = "Orden PRE/2971/2007";
 choices[72][1] = "Real Decreto 1496/2003";
 choices[72][2] = "Real Decreto 1619/2012";
 choices[72][3] = "Real Decreto 1783/2012";
 answers[72] = 2;
 units[72] = ['75'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8622. ";
 preguntaids[72] = 8622


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre todas las AP de forma segura y con conformidad legal?";
 choices[73]= new Array();
 choices[73][0] = "SIR";
 choices[73][1] = "REC";
 choices[73][2] = "GEISER";
 choices[73][3] = "ORVE";
 answers[73] = 0;
 units[73] = ['47'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 627. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[73] = 627


//  Id pregunta: 1421 Año de creación de pregunta: 2016
 questions[74]= "75)  Todos tienen derecho a sindicarse libremente. La ley podr&aacute; limitar o exceptuar el ejercicio de este derecho, seg&uacute;n el art&iacute;culo 28 de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[74]= new Array();
 choices[74][0] = "A las Fuerzas o Institutos armados.";
 choices[74][1] = "A los Cuerpos o Fuerzas armadas.";
 choices[74][2] = "A los Institutos sometidos a disciplina militar.";
 choices[74][3] = "A los funcionarios p&uacute;blicos.";
 answers[74] = 0;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 1421. ";
 preguntaids[74] = 1421


