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
//  Id pregunta: 10040 Año de creación de pregunta: 2015
 questions[0]= "1)  En relaci&oacute;n a las pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[0]= new Array();
 choices[0][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[0][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[0][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[0][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control y, despu&eacute;s, los m&oacute;dulos de bajo nivel. Los m&oacute;dulos intermedios se integran al final.";
 answers[0] = 3;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10040. Examen TIC A2 2014";
 preguntaids[0] = 10040


//  Id pregunta: 9991 Año de creación de pregunta: 2015
 questions[1]= "2)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "ART.";
 choices[1][1] = "Dalvik.";
 choices[1][2] = "Java VM.";
 choices[1][3] = "APK.";
 answers[1] = 1;
 units[1] = ['59'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9991. Examen TIC A2 2014";
 preguntaids[1] = 9991


//  Id pregunta: 9994 Año de creación de pregunta: 2015
 questions[2]= "3)  El algoritmo de Peterson corresponde a:";
 choices[2]= new Array();
 choices[2][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[2][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[2][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[2][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[2] = 3;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9994. Examen TIC A2 2014";
 preguntaids[2] = 9994


//  Id pregunta: 10035 Año de creación de pregunta: 2015
 questions[3]= "4)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[3]= new Array();
 choices[3][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[3][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[3][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[3][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[3] = 3;
 units[3] = ['85'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10035. Examen TIC A2 2014";
 preguntaids[3] = 10035


//  Id pregunta: 10023 Año de creación de pregunta: 2015
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[4]= new Array();
 choices[4][0] = "MERISE.";
 choices[4][1] = "SDM (Structured Development Method).";
 choices[4][2] = "RUP (Rational Unified Process).";
 choices[4][3] = "SCRUM.";
 answers[4] = 1;
 units[4] = ['84'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10023. Examen TIC A2 2014";
 preguntaids[4] = 10023


//  Id pregunta: 10034 Año de creación de pregunta: 2015
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[5]= new Array();
 choices[5][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[5][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[5][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[5][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[5] = 3;
 units[5] = ['60'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10034. Examen TIC A2 2014";
 preguntaids[5] = 10034


//  Id pregunta: 10050 Año de creación de pregunta: 2015
 questions[6]= "7)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[6]= new Array();
 choices[6][0] = "EntityConnection.";
 choices[6][1] = "SqlConnection.";
 choices[6][2] = "SqlCeConnection.";
 choices[6][3] = "OleOdbcConnection.";
 answers[6] = 3;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10050. Examen TIC A2 2014";
 preguntaids[6] = 10050


//  Id pregunta: 10012 Año de creación de pregunta: 2015
 questions[7]= "8)  Indique cu&aacute;l de los siguientes es un documento m&iacute;nimo reclamado por la ISO 22301 de gesti&oacute;n de la continuidad del negocio:";
 choices[7]= new Array();
 choices[7][0] = "Procedimiento para el control de la informaci&oacute;n documentada.";
 choices[7][1] = "Estructura de respuesta a incidentes.";
 choices[7][2] = "Los contratos y acuerdos de nivel de servicio con los proveedores.";
 choices[7][3] = "Formaci&oacute;n y plan de sensibilizaci&oacute;n.";
 answers[7] = 1;
 units[7] = ['36', '45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10012. Examen TIC A2 2014";
 preguntaids[7] = 10012


//  Id pregunta: 10015 Año de creación de pregunta: 2015
 questions[8]= "9)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[8]= new Array();
 choices[8][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[8][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[8][2] = "Libertad de distribuir copias.";
 choices[8][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[8] = 0;
 units[8] = ['66'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10015. Examen TIC A2 2014";
 preguntaids[8] = 10015


//  Id pregunta: 10047 Año de creación de pregunta: 2015
 questions[9]= "10)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[9]= new Array();
 choices[9][0] = "JSR 342.";
 choices[9][1] = "JSR 366.";
 choices[9][2] = "JSR 324.";
 choices[9][3] = "JSR 224.";
 answers[9] = 0;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10047. Examen TIC A2 2014";
 preguntaids[9] = 10047


//  Id pregunta: 10042 Año de creación de pregunta: 2015
 questions[10]= "11)  Se&ntilde;ale qu&eacute; software NO est&aacute; relacionado con las pruebas del software de aplicaciones web:";
 choices[10]= new Array();
 choices[10][0] = "Badboy.";
 choices[10][1] = "Selenium.";
 choices[10][2] = "Jmeter.";
 choices[10][3] = "Cherokee.";
 answers[10] = 3;
 units[10] = ['92'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10042. Examen TIC A2 2014";
 preguntaids[10] = 10042


//  Id pregunta: 10029 Año de creación de pregunta: 2015
 questions[11]= "12)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[11]= new Array();
 choices[11][0] = "Diagrama de secuencia.";
 choices[11][1] = "Diagrama de colaboraci&oacute;n.";
 choices[11][2] = "Diagrama de clases.";
 choices[11][3] = "Diagrama de Casos de Uso.";
 answers[11] = 3;
 units[11] = ['91', '85', '89'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 10029. Examen TIC A2 2014";
 preguntaids[11] = 10029


//  Id pregunta: 9993 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[12]= new Array();
 choices[12][0] = "ext3";
 choices[12][1] = "mini fs";
 choices[12][2] = "ReiserFS";
 choices[12][3] = "Reiser4";
 answers[12] = 1;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9993. Examen TIC A2 2014";
 preguntaids[12] = 9993


//  Id pregunta: 10041 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes normas define un est&aacute;ndar para pruebas de software?";
 choices[13]= new Array();
 choices[13][0] = "ISO 29781";
 choices[13][1] = "ISO 29621";
 choices[13][2] = "ISO 29382";
 choices[13][3] = "ISO 29119";
 answers[13] = 3;
 units[13] = ['92'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 10041. Examen TIC A2 2014";
 preguntaids[13] = 10041


//  Id pregunta: 9986 Año de creación de pregunta: 2015
 questions[14]= "15)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[14]= new Array();
 choices[14][0] = "Confidencialidad.";
 choices[14][1] = "Integridad.";
 choices[14][2] = "Autenticidad.";
 choices[14][3] = "Trazabilidad.";
 answers[14] = 3;
 units[14] = ['46'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 9986. Examen TIC A2 2014";
 preguntaids[14] = 9986


//  Id pregunta: 10026 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[15]= new Array();
 choices[15][0] = "Regla del 80-20.";
 choices[15][1] = "Regla del 30-40-30.";
 choices[15][2] = "Regla del 40-20-40.";
 choices[15][3] = "Regla del 20-60-20.";
 answers[15] = 2;
 units[15] = ['31', '94'];
 blocks[15] = ['B1', 'B3'];
 comments[15] = "Id Pregunta: 10026. Examen TIC A2 2014";
 preguntaids[15] = 10026


//  Id pregunta: 10010 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[16]= new Array();
 choices[16][0] = "Auditor&iacute;a.";
 choices[16][1] = "Acreditaci&oacute;n.";
 choices[16][2] = "Certificaci&oacute;n.";
 choices[16][3] = "Evaluaci&oacute;n.";
 answers[16] = 1;
 units[16] = ['45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 10010. Examen TIC A2 2014";
 preguntaids[16] = 10010


//  Id pregunta: 10001 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n utiliza las instrucciones begin/rescue/ensure/end para tratar las excepciones?";
 choices[17]= new Array();
 choices[17][0] = "Perl.";
 choices[17][1] = "Python.";
 choices[17][2] = "Ruby.";
 choices[17][3] = "PHP.";
 answers[17] = 2;
 units[17] = ['65'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10001. Examen TIC A2 2014";
 preguntaids[17] = 10001


//  Id pregunta: 9989 Año de creación de pregunta: 2015
 questions[18]= "19)  La velocidad del USB 3.0 es:";
 choices[18]= new Array();
 choices[18][0] = "15 veces superior a la del USB 2.0.";
 choices[18][1] = "Similar a la del USB 2.0.";
 choices[18][2] = "10 veces superior a la del USB 2.0.";
 choices[18][3] = "480 Mbps.";
 answers[18] = 2;
 units[18] = ['51'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9989. Examen TIC A2 2014";
 preguntaids[18] = 9989


//  Id pregunta: 10003 Año de creación de pregunta: 2015
 questions[19]= "20)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[19]= new Array();
 choices[19][0] = "WS-Security permite crear servicios web seguros.";
 choices[19][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[19][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[19][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[19] = 3;
 units[19] = ['55'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10003. Examen TIC A2 2014";
 preguntaids[19] = 10003


//  Id pregunta: 10032 Año de creación de pregunta: 2015
 questions[20]= "21)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[20]= new Array();
 choices[20][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[20][1] = "Cat&aacute;logo de productos a generar.";
 choices[20][2] = "Cat&aacute;logo de clases.";
 choices[20][3] = "Cat&aacute;logo de entidades.";
 answers[20] = 3;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 10032. Examen TIC A2 2014";
 preguntaids[20] = 10032


//  Id pregunta: 10030 Año de creación de pregunta: 2015
 questions[21]= "22)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[21]= new Array();
 choices[21][0] = "Serializable.";
 choices[21][1] = "Repeatable Read (lecturas repetibles).";
 choices[21][2] = "Read Committed (lecturas comprometidas).";
 choices[21][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[21] = 3;
 units[21] = ['60', '61'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10030. Examen TIC A2 2014";
 preguntaids[21] = 10030


//  Id pregunta: 9996 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Para qu&eacute; se utiliza el servicio SMB de Windows?";
 choices[22]= new Array();
 choices[22][0] = "Para configurar un proxy-inverso en la salida a Internet.";
 choices[22][1] = "Para realizar backups remotos y cronificados.";
 choices[22][2] = "Para compartir archivos e impresoras.";
 choices[22][3] = "Para configurar redes wifi.";
 answers[22] = 2;
 units[22] = ['58'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9996. Examen TIC A2 2014";
 preguntaids[22] = 9996


//  Id pregunta: 10018 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[23]= new Array();
 choices[23][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[23][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[23][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[23][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[23] = 1;
 units[23] = ['82'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10018. Examen TIC A2 2014";
 preguntaids[23] = 10018


//  Id pregunta: 10027 Año de creación de pregunta: 2015
 questions[24]= "25)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[24]= new Array();
 choices[24][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[24][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[24][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[24][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[24] = 2;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10027. Examen TIC A2 2014";
 preguntaids[24] = 10027


//  Id pregunta: 10022 Año de creación de pregunta: 2015
 questions[25]= "26)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[25]= new Array();
 choices[25][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[25][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[25][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[25][3] = "La tabla con los requisitos ya implementados.";
 answers[25] = 2;
 units[25] = ['84'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 10022. Examen TIC A2 2014";
 preguntaids[25] = 10022


//  Id pregunta: 10037 Año de creación de pregunta: 2015
 questions[26]= "27)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[26]= new Array();
 choices[26][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[26][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[26][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[26][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[26] = 2;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 10037. Examen TIC A2 2014";
 preguntaids[26] = 10037


//  Id pregunta: 10036 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el proceso de normalizaci&oacute;n del Modelo Relacional es cierta?";
 choices[27]= new Array();
 choices[27][0] = "Existen s&oacute;lo un total de 3 Formas Normales: 1FN, 2FN y 3FN.";
 choices[27][1] = "Una tabla est&aacute; en 2FN cuando se demuestra que existe dependencia funcional del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[27][2] = "Una tabla est&aacute; en 1FN cuando se demuestra que existe dependencia funcional completa del resto de columnas de la tabla con respecto a la clave primaria.";
 choices[27][3] = "Una tabla que est&aacute; en 1FN tiene el m&aacute;ximo grado de normalizaci&oacute;n y, por tanto, cumple tambi&eacute;n la Segunda y Tercera Forma Normal.";
 answers[27] = 1;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 10036. Examen TIC A2 2014";
 preguntaids[27] = 10036


//  Id pregunta: 10021 Año de creación de pregunta: 2015
 questions[28]= "29)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[28]= new Array();
 choices[28][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[28][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[28][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[28][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[28] = 2;
 units[28] = ['84'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 10021. Examen TIC A2 2014";
 preguntaids[28] = 10021


//  Id pregunta: 10039 Año de creación de pregunta: 2015
 questions[29]= "30)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[29]= new Array();
 choices[29][0] = "Catedr@.";
 choices[29][1] = "Dokeos.";
 choices[29][2] = "Moodle.";
 choices[29][3] = "Claroline.";
 answers[29] = 0;
 units[29] = ['70'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10039. Examen TIC A2 2014";
 preguntaids[29] = 10039


//  Id pregunta: 9980 Año de creación de pregunta: 2015
 questions[30]= "31)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[30]= new Array();
 choices[30][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[30][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[30][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[30][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[30] = 1;
 units[30] = ['35'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 9980. Examen TIC A2 2014";
 preguntaids[30] = 9980


//  Id pregunta: 10024 Año de creación de pregunta: 2015
 questions[31]= "32)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[31]= new Array();
 choices[31][0] = "Es siempre cero.";
 choices[31][1] = "Es igual a su tiempo early.";
 choices[31][2] = "Es mayor que su tiempo early.";
 choices[31][3] = "Es menor que su tiempo early.";
 answers[31] = 1;
 units[31] = ['31'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 10024. Examen TIC A2 2014";
 preguntaids[31] = 10024


//  Id pregunta: 10038 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Tipos Abstractos de Datos (TAD) es correcta?";
 choices[32]= new Array();
 choices[32][0] = "Los TAD describen datos simples abstractos en funci&oacute;n de las operaciones que pueden efectuar, dejando a un lado su implementaci&oacute;n.";
 choices[32][1] = "Las listas son TAD caracterizados por incluir elementos homog&eacute;neos relacionados linealmente, con un antecesor y un sucesor, a excepci&oacute;n del primer y &uacute;ltimo elemento, salvo en el caso de listas circulares.";
 choices[32][2] = "Los &aacute;rboles son TAD en los que cada nodo se caracteriza por su grado de entrada (n&uacute;mero de arcos que llegan al nodo) y su grado de salida (n&uacute;mero de arcos que salen del nodo). Existen &aacute;rboles dirigidos y no dirigidos.";
 choices[32][3] = "Dado un grafo, el orden del mismo es el n&uacute;mero mayor de arcos o aristas de sus nodos.";
 answers[32] = 1;
 units[32] = ['89'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 10038. Examen TIC A2 2014";
 preguntaids[32] = 10038


//  Id pregunta: 10028 Año de creación de pregunta: 2015
 questions[33]= "34)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[33]= new Array();
 choices[33][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[33][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[33][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[33][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[33] = 0;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 10028. Examen TIC A2 2014";
 preguntaids[33] = 10028


//  Id pregunta: 10020 Año de creación de pregunta: 2015
 questions[34]= "35)  Con respecto a la metodolog&iacute;a &aacute;gil Kanban, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[34]= new Array();
 choices[34][0] = "Las iteraciones deben ser de tiempo fijo siempre.";
 choices[34][1] = "No permite trabajar en m&uacute;ltiples productos simult&aacute;neamente.";
 choices[34][2] = "Prescribe los roles siguientes de modo obligatorio: due&ntilde;o del producto y equipo.";
 choices[34][3] = "Limita el n&uacute;mero de elementos al mismo tiempo en un estado del flujo de trabajo.";
 answers[34] = 3;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 10020. Examen TIC A2 2014";
 preguntaids[34] = 10020


//  Id pregunta: 10051 Año de creación de pregunta: 2015
 questions[35]= "36)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[35]= new Array();
 choices[35][0] = "Bajoo.";
 choices[35][1] = "Azure.";
 choices[35][2] = "Heroku.";
 choices[35][3] = "Adrive.";
 answers[35] = 1;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10051. Examen TIC A2 2014";
 preguntaids[35] = 10051


//  Id pregunta: 9990 Año de creación de pregunta: 2015
 questions[36]= "37)  Globus Toolkit es:";
 choices[36]= new Array();
 choices[36][0] = "Un framework de IBM que proporciona caracter&iacute;sticas para desarrollar, hacer debug y testear aplicaciones AJAX.";
 choices[36][1] = "Un conjunto de herramientas open source para construir grids computacionales.";
 choices[36][2] = "Un framework que contiene APIs y widgets para facilitar el desarrollo de aplicaciones Web que utilicen tecnolog&iacute;a AJAX y programaci&oacute;n paralela.";
 choices[36][3] = "Una librer&iacute;a Python, modular y extensible, que ofrece una API para desarrollar aplicaciones distribuidas.";
 answers[36] = 1;
 units[36] = ['49'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9990. Examen TIC A2 2014";
 preguntaids[36] = 9990


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[37]= "38)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[37]= new Array();
 choices[37][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[37][1] = "Cuando haya recibido al menos dos ACK.";
 choices[37][2] = "Cuando reciba cualquier ACK.";
 choices[37][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[37] = 2;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[37] = 10005


//  Id pregunta: 9999 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[38]= new Array();
 choices[38][0] = "192.168.30.0";
 choices[38][1] = "192.168.30.128";
 choices[38][2] = "192.168.30.255";
 choices[38][3] = "192.168.30.200";
 answers[38] = 1;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 9999. Examen TIC A2 2014";
 preguntaids[38] = 9999


//  Id pregunta: 9979 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[39]= new Array();
 choices[39][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[39][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[39][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[39][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[39] = 2;
 units[39] = ['78'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9979. Examen TIC A2 2014";
 preguntaids[39] = 9979


//  Id pregunta: 10000 Año de creación de pregunta: 2015
 questions[40]= "41)  El comando utilizado en el lenguaje de programaci&oacute;n Objective-C para imprimir mensajes en pantalla es:";
 choices[40]= new Array();
 choices[40][0] = "NSLog";
 choices[40][1] = "WRLog";
 choices[40][2] = "Writeln";
 choices[40][3] = "Printline";
 answers[40] = 0;
 units[40] = ['59'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 10000. Examen TIC A2 2014";
 preguntaids[40] = 10000


//  Id pregunta: 10002 Año de creación de pregunta: 2015
 questions[41]= "42)  Apache Cassandra es:";
 choices[41]= new Array();
 choices[41][0] = "Un servidor de comunicaciones.";
 choices[41][1] = "Una base de datos NoSQL distribuida.";
 choices[41][2] = "Un sistema de claves privadas.";
 choices[41][3] = "Un protocolo de comunicaciones.";
 answers[41] = 1;
 units[41] = ['60'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 10002. Examen TIC A2 2014";
 preguntaids[41] = 10002


//  Id pregunta: 10009 Año de creación de pregunta: 2015
 questions[42]= "43)  En relaci&oacute;n a OpenDocument (ODF), se&ntilde;ale la respuesta FALSA:";
 choices[42]= new Array();
 choices[42][0] = "Es un formato de archivo abierto y est&aacute;ndar para el almacenamiento de documentos tales como hojas de c&aacute;lculo, textos, gr&aacute;ficas y presentaciones.";
 choices[42][1] = "El tipo MIME para documentos texto de OpenDocument es: application/vnd.openxmlformats-officedocument.wordprocessingml.document.";
 choices[42][2] = "Est&aacute; basado en XML.";
 choices[42][3] = "Las extensiones de los archivos incluyen: odt para documentos de texto, ods para hojas de c&aacute;lculo, odp para presentaciones y odb para bases de datos.";
 answers[42] = 1;
 units[42] = ['66'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 10009. Examen TIC A2 2014";
 preguntaids[42] = 10009


//  Id pregunta: 9997 Año de creación de pregunta: 2015
 questions[43]= "44)  En Android, las aplicaciones se distribuyen en paquetes:";
 choices[43]= new Array();
 choices[43][0] = "yum";
 choices[43][1] = "apk";
 choices[43][2] = "ipa";
 choices[43][3] = "gpm";
 answers[43] = 1;
 units[43] = ['59'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9997. Examen TIC A2 2014";
 preguntaids[43] = 9997


//  Id pregunta: 10025 Año de creación de pregunta: 2015
 questions[44]= "45)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[44]= new Array();
 choices[44][0] = "Consultor.";
 choices[44][1] = "Analista.";
 choices[44][2] = "Programador.";
 choices[44][3] = "Jefe de Proyecto.";
 answers[44] = 0;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10025. Examen TIC A2 2014";
 preguntaids[44] = 10025


//  Id pregunta: 10013 Año de creación de pregunta: 2015
 questions[45]= "46)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[45]= new Array();
 choices[45][0] = "Es un lenguaje basado en XML.";
 choices[45][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[45][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[45][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[45] = 3;
 units[45] = ['74'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10013. Examen TIC A2 2014";
 preguntaids[45] = 10013


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


//  Id pregunta: 10031 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[47]= new Array();
 choices[47][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[47][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[47][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[47][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[47] = 0;
 units[47] = ['86'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 10031. Examen TIC A2 2014";
 preguntaids[47] = 10031


//  Id pregunta: 10007 Año de creación de pregunta: 2015
 questions[48]= "49)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[48]= new Array();
 choices[48][0] = "88";
 choices[48][1] = "42";
 choices[48][2] = "74";
 choices[48][3] = "105";
 answers[48] = 0;
 units[48] = ['120'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10007. Examen TIC A2 2014";
 preguntaids[48] = 10007


//  Id pregunta: 10011 Año de creación de pregunta: 2015
 questions[49]= "50)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[49]= new Array();
 choices[49][0] = "Sesiones de trabajo.";
 choices[49][1] = "Valoraciones Delphi.";
 choices[49][2] = "Histogramas.";
 choices[49][3] = "&Aacute;rboles de ataque.";
 answers[49] = 3;
 units[49] = ['45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 10011. Examen TIC A2 2014";
 preguntaids[49] = 10011


//  Id pregunta: 10048 Año de creación de pregunta: 2015
 questions[50]= "51)  Elija la respuesta correcta respecto Java EE 7:";
 choices[50]= new Array();
 choices[50][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[50][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[50][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[50][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[50] = 2;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10048. Examen TIC A2 2014";
 preguntaids[50] = 10048


//  Id pregunta: 9983 Año de creación de pregunta: 2015
 questions[51]= "52)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[51]= new Array();
 choices[51][0] = "6 meses.";
 choices[51][1] = "1 a&ntilde;o.";
 choices[51][2] = "2 a&ntilde;os.";
 choices[51][3] = "5 a&ntilde;os.";
 answers[51] = 1;
 units[51] = ['35'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 9983. Examen TIC A2 2014";
 preguntaids[51] = 9983


//  Id pregunta: 9988 Año de creación de pregunta: 2015
 questions[52]= "53)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[52][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[52][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[52][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[52] = 3;
 units[52] = ['47'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 9988. Examen TIC A2 2014";
 preguntaids[52] = 9988


//  Id pregunta: 10045 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[53]= new Array();
 choices[53][0] = "Diagrama de clases.";
 choices[53][1] = "Diagrama de objetos.";
 choices[53][2] = "Diagrama de despliegue.";
 choices[53][3] = "Diagrama de actividades.";
 answers[53] = 3;
 units[53] = ['85', '89'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 10045. Examen TIC A2 2014";
 preguntaids[53] = 10045


//  Id pregunta: 10008 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[54]= new Array();
 choices[54][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[54][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[54][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[54][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[54] = 0;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 10008. Examen TIC A2 2014";
 preguntaids[54] = 10008


//  Id pregunta: 10046 Año de creación de pregunta: 2015
 questions[55]= "56)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[55]= new Array();
 choices[55][0] = "Abstracci&oacute;n.";
 choices[55][1] = "Polimorfismo.";
 choices[55][2] = "Herencia.";
 choices[55][3] = "Encapsulamiento.";
 answers[55] = 3;
 units[55] = ['89'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 10046. Examen TIC A2 2014";
 preguntaids[55] = 10046


//  Id pregunta: 10017 Año de creación de pregunta: 2015
 questions[56]= "57)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[56]= new Array();
 choices[56][0] = "PDF";
 choices[56][1] = "EPUB";
 choices[56][2] = "RTF";
 choices[56][3] = "FLAC";
 answers[56] = 3;
 units[56] = ['66'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 10017. Examen TIC A2 2014";
 preguntaids[56] = 10017


//  Id pregunta: 9992 Año de creación de pregunta: 2015
 questions[57]= "58)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "TLB: Translation Lookaside Buffer.";
 choices[57][1] = "TTL: Translation Table Location.";
 choices[57][2] = "ATL: Address Translation Lookup.";
 choices[57][3] = "ATB: Address Table Buffer.";
 answers[57] = 0;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9992. Examen TIC A2 2014";
 preguntaids[57] = 9992


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[58]= "59)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[58]= new Array();
 choices[58][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[58][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[58][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[58][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[58] = 3;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[58] = 10052


//  Id pregunta: 10033 Año de creación de pregunta: 2015
 questions[59]= "60)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[59]= new Array();
 choices[59][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[59][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[59][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[59][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[59] = 1;
 units[59] = ['91', '86'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 10033. Examen TIC A2 2014";
 preguntaids[59] = 10033


//  Id pregunta: 9984 Año de creación de pregunta: 2015
 questions[60]= "61)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[60]= new Array();
 choices[60][0] = "36 meses.";
 choices[60][1] = "60 meses.";
 choices[60][2] = "30 meses.";
 choices[60][3] = "24 meses.";
 answers[60] = 0;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 9984. Examen TIC A2 2014";
 preguntaids[60] = 9984


//  Id pregunta: 9995 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes comandos Unix impide que el archivo de nombre &quot;miarchivo&quot; sea modificado y ejecutado por el grupo al que pertenece dicho archivo?";
 choices[61]= new Array();
 choices[61][0] = "chmod 766 miarchivo";
 choices[61][1] = "chmod a+xw miarchivo";
 choices[61][2] = "chmod 644 miarchivo";
 choices[61][3] = "chmod u=rwx go=wx miarchivo";
 answers[61] = 2;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9995. Examen TIC A2 2014";
 preguntaids[61] = 9995


//  Id pregunta: 9978 Año de creación de pregunta: 2015
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[62]= new Array();
 choices[62][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[62][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[62][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[62][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[62] = 0;
 units[62] = ['77'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9978. Examen TIC A2 2014";
 preguntaids[62] = 9978


//  Id pregunta: 10049 Año de creación de pregunta: 2015
 questions[63]= "64)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Java BluePrints.";
 choices[63][1] = "Java Specification Request.";
 choices[63][2] = "Java Community Process.";
 choices[63][3] = "Java Pattern Spec.";
 answers[63] = 0;
 units[63] = ['64'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 10049. Examen TIC A2 2014";
 preguntaids[63] = 10049


//  Id pregunta: 10043 Año de creación de pregunta: 2015
 questions[64]= "65)  Para poder realizar pruebas de caja blanca que realicen cobertura de c&oacute;digo, la herramienta que NO se deber&iacute;a usar es:";
 choices[64]= new Array();
 choices[64][0] = "EclEMMA.";
 choices[64][1] = "eCobertura.";
 choices[64][2] = "Jmeter.";
 choices[64][3] = "Java Code Coverage.";
 answers[64] = 2;
 units[64] = ['92'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 10043. Examen TIC A2 2014";
 preguntaids[64] = 10043


//  Id pregunta: 10014 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[65]= new Array();
 choices[65][0] = "Denegaci&oacute;n de servicio.";
 choices[65][1] = "Hombre intermedio.";
 choices[65][2] = "Fuerza Bruta.";
 choices[65][3] = "Ingenier&iacute;a social.";
 answers[65] = 0;
 units[65] = ['119'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 10014. Examen TIC A2 2014";
 preguntaids[65] = 10014


//  Id pregunta: 9981 Año de creación de pregunta: 2015
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[66]= new Array();
 choices[66][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[66][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[66][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[66][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[66] = 1;
 units[66] = ['35'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 9981. Examen TIC A2 2014";
 preguntaids[66] = 9981


//  Id pregunta: 10044 Año de creación de pregunta: 2015
 questions[67]= "68)  El tipo de prueba BigBang es de tipo:";
 choices[67]= new Array();
 choices[67][0] = "Prueba de sistema.";
 choices[67][1] = "Prueba de aceptaci&oacute;n.";
 choices[67][2] = "Prueba de rendimiento.";
 choices[67][3] = "Prueba de integraci&oacute;n.";
 answers[67] = 3;
 units[67] = ['92'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 10044. Examen TIC A2 2014";
 preguntaids[67] = 10044


//  Id pregunta: 10016 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[68]= new Array();
 choices[68][0] = "EUPL";
 choices[68][1] = "GPL";
 choices[68][2] = "LGPL";
 choices[68][3] = "BSD";
 answers[68] = 3;
 units[68] = ['66'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10016. Examen TIC A2 2014";
 preguntaids[68] = 10016


//  Id pregunta: 9982 Año de creación de pregunta: 2015
 questions[69]= "70)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[69]= new Array();
 choices[69][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[69][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[69][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[69][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[69] = 3;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 9982. Examen TIC A2 2014";
 preguntaids[69] = 9982


//  Id pregunta: 9987 Año de creación de pregunta: 2015
 questions[70]= "71)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[70]= new Array();
 choices[70][0] = "Garantiza la confidencialidad de un documento.";
 choices[70][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[70][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[70][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[70] = 3;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 9987. Examen TIC A2 2014";
 preguntaids[70] = 9987


//  Id pregunta: 9998 Año de creación de pregunta: 2015
 questions[71]= "72)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[71]= new Array();
 choices[71][0] = "SQLite.";
 choices[71][1] = "Oracle Pocket.";
 choices[71][2] = "SQL Server compact.";
 choices[71][3] = "MySQL micro edition.";
 answers[71] = 0;
 units[71] = ['60'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9998. Examen TIC A2 2014";
 preguntaids[71] = 9998


//  Id pregunta: 10006 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[72]= new Array();
 choices[72][0] = "Request.";
 choices[72][1] = "Invoke.";
 choices[72][2] = "Response.";
 choices[72][3] = "Confirmation.";
 answers[72] = 1;
 units[72] = ['105'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10006. Examen TIC A2 2014";
 preguntaids[72] = 10006


//  Id pregunta: 10004 Año de creación de pregunta: 2015
 questions[73]= "74)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a XML sem&aacute;ntica puede ser usada para la interoperabilidad e intercambio de mensajes electr&oacute;nicos de negocio, mensajes B2B:";
 choices[73]= new Array();
 choices[73][0] = "ecXML";
 choices[73][1] = "ebXML";
 choices[73][2] = "WSDL";
 choices[73][3] = "Xerces";
 answers[73] = 1;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 10004. Examen TIC A2 2014";
 preguntaids[73] = 10004


//  Id pregunta: 9985 Año de creación de pregunta: 2015
 questions[74]= "75)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[74]= new Array();
 choices[74][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[74][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[74][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[74][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[74] = 3;
 units[74] = ['7'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 9985. Examen TIC A2 2014";
 preguntaids[74] = 9985


