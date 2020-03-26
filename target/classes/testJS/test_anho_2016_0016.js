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
//  Id pregunta: 1145 Año de creación de pregunta: 2016
 questions[0]= "1)  En cuanto a las sesiones JAD (Joint Application Design), definidas seg&uacute;n M&eacute;trica V3, se&ntilde;ale la respuesta verdadera:";
 choices[0]= new Array();
 choices[0][0] = "Tienen como objetivo potenciar la participaci&oacute;n activa de la alta direcci&oacute;n.";
 choices[0][1] = "Uno de los perfiles implicados es el de Consultor.";
 choices[0][2] = "La informaci&oacute;n de salida depender&aacute; de la actividad del Plan de sistemas de Informaci&oacute;n.";
 choices[0][3] = "Se involucra a los usuarios principalmente en la especificaci&oacute;n de requisitos del sistema y en la validaci&oacute;n de prototipos.";
 answers[0] = 3;
 units[0] = ['91'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 1145. ";
 preguntaids[0] = 1145


//  Id pregunta: 1180 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a de servicios web se podr&iacute;a usar para enviar ficheros de gran tama&ntilde;o en un servicio Web, con tecnolog&iacute;a SOAP que optimiza en formato binario:";
 choices[1]= new Array();
 choices[1][0] = "REST-WS";
 choices[1][1] = "ATOM";
 choices[1][2] = "MTOM";
 choices[1][3] = "WSS";
 answers[1] = 2;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1180. ";
 preguntaids[1] = 1180


//  Id pregunta: 1186 Año de creación de pregunta: 2016
 questions[2]= "3)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[2]= new Array();
 choices[2][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[2][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[2][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[2][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[2] = 1;
 units[2] = ['93'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1186. ";
 preguntaids[2] = 1186


//  Id pregunta: 1164 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a las pruebas de integraci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Pueden ser de caja blanca o de caja negra.";
 choices[3][1] = "Uno de sus objetivos es comprobar que los cambios introducidos sobre un componente no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados.";
 choices[3][2] = "Dan una visi&oacute;n muy similar a su comportamiento en el entorno de producci&oacute;n.";
 choices[3][3] = "Sus tipos fundamentales son incremental y no incremental.";
 answers[3] = 3;
 units[3] = ['92'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 1164. ";
 preguntaids[3] = 1164


//  Id pregunta: 1126 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta FALSA, en relaci&oacute;n con el algoritmo de planificaci&oacute;n SRTF (Shortest Remaining Time First):";
 choices[4]= new Array();
 choices[4][0] = "Es una versi&oacute;n de SJF.";
 choices[4][1] = "Cada vez que entran trabajos se interrumpe el actual y se compara el tiempo restante de &eacute;ste con el de los entrantes.";
 choices[4][2] = "Si hay un trabajo nuevo m&aacute;s corto que lo que le falta al actual en CPU, echamos el actual y metemos el nuevo.";
 choices[4][3] = "Cada proceso tiene un tiempo l&iacute;mite de uso de CPU llamado quantum.";
 answers[4] = 3;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1126. ";
 preguntaids[4] = 1126


//  Id pregunta: 1165 Año de creación de pregunta: 2016
 questions[5]= "6)  En un diagrama de clases UML, si un m&eacute;todo va precedido del s&iacute;mbolo '-' (menos) quiere decir que s&oacute;lo es accesible:";
 choices[5]= new Array();
 choices[5][0] = "Desde dentro de la clase.";
 choices[5][1] = "Desde cualquier clase de cualquier paquete de clases.";
 choices[5][2] = "Desde clases del mismo paquete.";
 choices[5][3] = "Desde dentro de la clase o desde clases que hereden de ella.";
 answers[5] = 0;
 units[5] = ['85'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 1165. ";
 preguntaids[5] = 1165


//  Id pregunta: 1194 Año de creación de pregunta: 2016
 questions[6]= "7)  El comando presente en sistemas operativos Unix que lista el buffer de mensajes generados durante el arranque del sistema se llama:";
 choices[6]= new Array();
 choices[6][0] = "uptime";
 choices[6][1] = "messages";
 choices[6][2] = "dmesg";
 choices[6][3] = "logmsg";
 answers[6] = 2;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1194. ";
 preguntaids[6] = 1194


//  Id pregunta: 1133 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n con el modelo de proceso unificado de desarrollo software:";
 choices[7]= new Array();
 choices[7][0] = "Modelo de proceso inspirado en los modelos de ciclo de vida iterativos para el desarrollo de sistemas software.";
 choices[7][1] = "Los proyectos se organizan en cinco fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n, Transici&oacute;n y Entrega.";
 choices[7][2] = "Es un modelo centrado en la arquitectura.";
 choices[7][3] = "Est&aacute; dirigido por casos de uso.";
 answers[7] = 1;
 units[7] = ['82'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 1133. ";
 preguntaids[7] = 1133


//  Id pregunta: 1178 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la manera de proceder en el lenguaje PHP, para poder utilizar dentro de una funci&oacute;n una variable que se define globalmente en una p&aacute;gina:";
 choices[8]= new Array();
 choices[8][0] = "No se debe declarar expl&iacute;citamente, puesto que las variables globales son accesibles directamente desde cualquier funci&oacute;n definida en la misma p&aacute;gina.";
 choices[8][1] = "Se puede usar el array $GLOBALVars para acceder al contenido de la variable.";
 choices[8][2] = "Se podr&iacute;a declarar la variable como global al principio de la funci&oacute;n mediante el uso de la palabra reservada &ldquo;global&rdquo; seguido del nombre de la variable a utilizar.";
 choices[8][3] = "Se debe declarar la variable como &quot;static&quot;.";
 answers[8] = 2;
 units[8] = ['65'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1178. ";
 preguntaids[8] = 1178


//  Id pregunta: 1163 Año de creación de pregunta: 2016
 questions[9]= "10)  El tipo de prueba BigBang es de tipo:";
 choices[9]= new Array();
 choices[9][0] = "Prueba de sistema.";
 choices[9][1] = "Prueba de aceptaci&oacute;n.";
 choices[9][2] = "Prueba de rendimiento.";
 choices[9][3] = "Prueba de integraci&oacute;n.";
 answers[9] = 3;
 units[9] = ['92'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1163. ";
 preguntaids[9] = 1163


//  Id pregunta: 1147 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n M&eacute;trica v3, en un diagrama de flujo de datos DFD:";
 choices[10]= new Array();
 choices[10][0] = "Los almacenes de datos pueden relacionarse entre s&iacute;.";
 choices[10][1] = "Un almac&eacute;n aparecer&aacute; por primera vez en aqu&eacute;l nivel en que dos o m&aacute;s procesos accedan a &eacute;l.";
 choices[10][2] = "Un almac&eacute;n puede crear, transformar o destruir datos.";
 choices[10][3] = "Dos procesos deben relacionarse siempre a trav&eacute;s de una entidad externa.";
 answers[10] = 1;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 1147. ";
 preguntaids[10] = 1147


//  Id pregunta: 1160 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes informaciones sobre la fase de pruebas del software es correcta?";
 choices[11]= new Array();
 choices[11][0] = "Las pruebas de integraci&oacute;n bottom-up necesitan m&oacute;dulos auxiliares que sustituyan a los m&oacute;dulos que son llamados por otros de m&aacute;s alto nivel.";
 choices[11][1] = "Las pruebas de integraci&oacute;n top-down necesitan m&oacute;dulos conductores (drivers) que simulen las llamadas a los m&oacute;dulos que se est&aacute;n probando.";
 choices[11][2] = "Las pruebas funcionales o de caja negra permiten comprobar el correcto funcionamiento de los componentes del sistema analizando entradas y salidas y verificando exclusivamente el resultado.";
 choices[11][3] = "Las pruebas estructurales o de caja blanca permiten comprobar el correcto funcionamiento de los componentes del sistema analizando entradas y salidas y verificando exclusivamente el resultado.";
 answers[11] = 2;
 units[11] = ['92'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1160. ";
 preguntaids[11] = 1160


//  Id pregunta: 1169 Año de creación de pregunta: 2016
 questions[12]= "13)  El paquete Java SE 8 al que pertenece el interfaz List es:";
 choices[12]= new Array();
 choices[12][0] = "java.lang";
 choices[12][1] = "java.util";
 choices[12][2] = "java.collection";
 choices[12][3] = "List no es un interfaz Java, est&aacute; definido como clase abstracta.";
 answers[12] = 1;
 units[12] = ['64'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1169. ";
 preguntaids[12] = 1169


//  Id pregunta: 1197 Año de creación de pregunta: 2016
 questions[13]= "14)  De las siguientes tareas a efectuar sobre un servidor de aplicaciones, &iquest;cu&aacute;l se puede encuadrar dentro del mantenimiento preventivo?";
 choices[13]= new Array();
 choices[13][0] = "Limpieza peri&oacute;dica del polvo en la fuente de alimentaci&oacute;n.";
 choices[13][1] = "Sustituci&oacute;n de un disco duro defectuoso.";
 choices[13][2] = "Ampliaci&oacute;n de la RAM del equipo.";
 choices[13][3] = "Actualizaci&oacute;n de la versi&oacute;n del software servidor de aplicaciones.";
 answers[13] = 0;
 units[13] = ['50'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1197. ";
 preguntaids[13] = 1197


//  Id pregunta: 1155 Año de creación de pregunta: 2016
 questions[14]= "15)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[14]= new Array();
 choices[14][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[14][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[14][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[14][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[14] = 1;
 units[14] = ['86'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1155. ";
 preguntaids[14] = 1155


//  Id pregunta: 1166 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes diagramas NO pertenece a los diagramas de estructura UML 2?";
 choices[15]= new Array();
 choices[15][0] = "Diagrama de paquetes.";
 choices[15][1] = "Diagrama de clases.";
 choices[15][2] = "Diagrama de actividades.";
 choices[15][3] = "Diagrama de despliegue.";
 answers[15] = 2;
 units[15] = ['85'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 1166. ";
 preguntaids[15] = 1166


//  Id pregunta: 1146 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n se especifica en la metodolog&iacute;a M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes participantes NO interviene en la actividad EVS 3, de Definici&oacute;n de Requisitos de Sistema?";
 choices[16]= new Array();
 choices[16][0] = "Comit&eacute; de Direcci&oacute;n.";
 choices[16][1] = "Usuarios expertos.";
 choices[16][2] = "Jefe de Proyecto.";
 choices[16][3] = "Analistas.";
 answers[16] = 0;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 1146. ";
 preguntaids[16] = 1146


//  Id pregunta: 1125 Año de creación de pregunta: 2016
 questions[17]= "18)  El algoritmo de Peterson corresponde a:";
 choices[17]= new Array();
 choices[17][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[17][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[17][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[17][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[17] = 3;
 units[17] = ['56'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1125. ";
 preguntaids[17] = 1125


//  Id pregunta: 1182 Año de creación de pregunta: 2016
 questions[18]= "19)  El lenguaje de consulta que nos proporciona los medios para extraer y manipular informaci&oacute;n en documentos o, de cualquier fuente de datos XML, y que utiliza expresiones XPath para acceder a determinadas partes del documento XML se denomina:";
 choices[18]= new Array();
 choices[18][0] = "X-Ask";
 choices[18][1] = "XInclude";
 choices[18][2] = "XLink";
 choices[18][3] = "XQuery";
 answers[18] = 3;
 units[18] = ['74'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1182. ";
 preguntaids[18] = 1182


//  Id pregunta: 1141 Año de creación de pregunta: 2016
 questions[19]= "20)  Seleccione de los siguientes participantes de M&Eacute;TRICA v3 el que se NO se agrupa dentro del perfil de Analista:";
 choices[19]= new Array();
 choices[19][0] = "Equipo de Soporte T&eacute;cnico.";
 choices[19][1] = "Grupo de Aseguramiento de la Calidad.";
 choices[19][2] = "Administrador de Bases de Datos.";
 choices[19][3] = "T&eacute;cnico de Sistemas.";
 answers[19] = 3;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 1141. ";
 preguntaids[19] = 1141


//  Id pregunta: 1151 Año de creación de pregunta: 2016
 questions[20]= "21)  La arquitectura ANSI/SPARC, define los niveles de abstracci&oacute;n para un sistema de administraci&oacute;n de bases de datos. Indicar el nivel INCORRECTO:";
 choices[20]= new Array();
 choices[20][0] = "Nivel f&iacute;sico: define c&oacute;mo se almacenan los datos y los m&eacute;todos de acceso.";
 choices[20][1] = "Nivel conceptual: define c&oacute;mo se organiza la informaci&oacute;n dentro de la base de datos.";
 choices[20][2] = "Nivel contextual: define el formato de los campos.";
 choices[20][3] = "Nivel externo: define las vistas del usuario.";
 answers[20] = 2;
 units[20] = ['61'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1151. ";
 preguntaids[20] = 1151


//  Id pregunta: 1156 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes grupos de principios es propio de un buen dise&ntilde;o estructurado?";
 choices[21]= new Array();
 choices[21][0] = "Modularidad, dependencia funcional y principio de caja &quot;blanca&quot;.";
 choices[21][1] = "Modularidad, independencia funcional y principio de caja &quot;blanca&quot;.";
 choices[21][2] = "Modularidad, independencia funcional y principio de caja &quot;negra&quot;.";
 choices[21][3] = "Modularidad, dependencia funcional y principio de caja &quot;negra&quot;.";
 answers[21] = 2;
 units[21] = ['88'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 1156. ";
 preguntaids[21] = 1156


//  Id pregunta: 1177 Año de creación de pregunta: 2016
 questions[22]= "23)  En una aplicaci&oacute;n web que tiene un formulario en el que se solicita al usuario el NIF y se desea controlar que la letra del NIF introducida por el usuario sea la correcta, &iquest;se podr&iacute;a usar JavaScript para hacer ese control?";
 choices[22]= new Array();
 choices[22][0] = "No, se necesita acceso a la base de datos de NIFs del servidor.";
 choices[22][1] = "Si, es un control que se puede hacer de forma local sin acceder al servidor.";
 choices[22][2] = "No, se necesita un applet de Java para realizar esa operaci&oacute;n.";
 choices[22][3] = "Si, JavaScript permite hacer el c&aacute;lculo en el servidor mediante una petici&oacute;n HTTP, aunque no hacer el c&aacute;lculo localmente.";
 answers[22] = 1;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1177. ";
 preguntaids[22] = 1177


//  Id pregunta: 1179 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; tienen en com&uacute;n los lenguajes ASP, JSP y PHP?";
 choices[23]= new Array();
 choices[23][0] = "Los tres son lenguajes interpretados.";
 choices[23][1] = "Los tres son lenguajes que se ejecutan en el lado cliente.";
 choices[23][2] = "Los tres son lenguajes que se ejecutan en el lado servidor.";
 choices[23][3] = "ASP Y JSP son ejecutados en el lado servidor, mientras que PHP s&oacute;lo es ejecutado en el lado cliente.";
 answers[23] = 2;
 units[23] = ['103'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1179. ";
 preguntaids[23] = 1179


//  Id pregunta: 1185 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la familia de normas que tiene por objetivo la creaci&oacute;n de un marco de trabajo com&uacute;n para evaluar la calidad del producto software:";
 choices[24]= new Array();
 choices[24][0] = "ISO 25000";
 choices[24][1] = "ISO/IEC 20000-1";
 choices[24][2] = "ISO/IEC 27001";
 choices[24][3] = "IEC 15504 e ISO/IEC 12207";
 answers[24] = 0;
 units[24] = ['93'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 1185. ";
 preguntaids[24] = 1185


//  Id pregunta: 1148 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[25]= new Array();
 choices[25][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[25][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[25][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[25][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[25] = 1;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1148. ";
 preguntaids[25] = 1148


//  Id pregunta: 1137 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; interfaces define M&eacute;trica v3?";
 choices[26]= new Array();
 choices[26][0] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n del Mantenimiento y Gesti&oacute;n de Proyectos.";
 choices[26][1] = "Aseguramiento de la Calidad, Gesti&oacute;n del Capital Humano, Seguridad y Gesti&oacute;n de Proyectos.";
 choices[26][2] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 choices[26][3] = "Seguridad, Mejora Continua, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 answers[26] = 2;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 1137. ";
 preguntaids[26] = 1137


//  Id pregunta: 1175 Año de creación de pregunta: 2016
 questions[27]= "28)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[27]= new Array();
 choices[27][0] = "EntityConnection.";
 choices[27][1] = "SqlConnection.";
 choices[27][2] = "SqlCeConnection.";
 choices[27][3] = "OleOdbcConnection.";
 answers[27] = 3;
 units[27] = ['63'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1175. ";
 preguntaids[27] = 1175


//  Id pregunta: 1150 Año de creación de pregunta: 2016
 questions[28]= "29)  En una base de datos de coches hay una tabla con marcas de coches (c&oacute;digo_marca y nombre_marca) y otra con modelos (c&oacute;digo_marca, c&oacute;digo_modelo, nombre_modelo). Para que la base de datos mantenga la integridad referencial:";
 choices[28]= new Array();
 choices[28][0] = "Si borro una marca, antes tengo que borrar todas las ocurrencias de modelos de esa marca.";
 choices[28][1] = "Si borro un modelo, antes tengo que borrar la marca correspondiente.";
 choices[28][2] = "No puedo dar de alta ninguna marca si no hay antes alg&uacute;n modelo de la misma.";
 choices[28][3] = "Al modificar el nombre de una marca tengo que modificar antes el c&oacute;digo_marca en los modelos correspondientes.";
 answers[28] = 0;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1150. ";
 preguntaids[28] = 1150


//  Id pregunta: 1196 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; podr&iacute;a usar el administrador de una base de datos SQL Server para supervisar el uso de los recursos del sistema?";
 choices[29]= new Array();
 choices[29][0] = "Los comandos cpustat y cputrack.";
 choices[29][1] = "El procedimiento almacenado sp_startmonitor.";
 choices[29][2] = "El monitor de sistema.";
 choices[29][3] = "El Enterprise SyMON 2.0.";
 answers[29] = 2;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1196. ";
 preguntaids[29] = 1196


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[30]= "31)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[30]= new Array();
 choices[30][0] = "TPDU.";
 choices[30][1] = "Paquete.";
 choices[30][2] = "Trama.";
 choices[30][3] = "TCDU.";
 answers[30] = 0;
 units[30] = ['105'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1129. ";
 preguntaids[30] = 1129


//  Id pregunta: 1170 Año de creación de pregunta: 2016
 questions[31]= "32)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[31]= new Array();
 choices[31][0] = "Java BluePrints.";
 choices[31][1] = "Java Specification Request.";
 choices[31][2] = "Java Community Process.";
 choices[31][3] = "Java Pattern Spec.";
 answers[31] = 0;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1170. ";
 preguntaids[31] = 1170


//  Id pregunta: 1157 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre cohesi&oacute;n y acoplamiento es correcta?";
 choices[32]= new Array();
 choices[32][0] = "El acoplamiento mide la relaci&oacute;n entre los elementos de un m&oacute;dulo, buscando que sea m&aacute;ximo.";
 choices[32][1] = "La cohesi&oacute;n mide el grado de interdependencia entre m&oacute;dulos, buscando que sea m&iacute;nimo para independizarlos y garantizar su f&aacute;cil mantenibilidad.";
 choices[32][2] = "La cohesi&oacute;n mide la relaci&oacute;n entre los elementos de un m&oacute;dulo. Existen distintos tipos de cohesi&oacute;n: funcional, secuencial, temporal, etc.";
 choices[32][3] = "La cohesi&oacute;n mide la relaci&oacute;n entre los elementos de un m&oacute;dulo. Existen distintos tipos de cohesi&oacute;n: normal, externa, com&uacute;n, etc.";
 answers[32] = 2;
 units[32] = ['88'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1157. ";
 preguntaids[32] = 1157


//  Id pregunta: 1153 Año de creación de pregunta: 2016
 questions[33]= "34)  Elija la respuesta correcta con respecto a los grafos:";
 choices[33]= new Array();
 choices[33][0] = "Un &aacute;rbol es un grafo dirigido y ac&iacute;clico.";
 choices[33][1] = "Un grafo est&aacute; completamente conectado si existe como m&iacute;nimo un camino entre cualquier par de v&eacute;rtices distintos.";
 choices[33][2] = "En un grafo el grado interior de un v&eacute;rtice es el n&uacute;mero de aristas que llegan a &eacute;l.";
 choices[33][3] = "La lista de adyacencia es una lista donde las filas y las columnas hacen referencia a los v&eacute;rtices para almacenar en cada casilla la longitud entre cada par de v&eacute;rtices del grafo.";
 answers[33] = 2;
 units[33] = ['86'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 1153. ";
 preguntaids[33] = 1153


//  Id pregunta: 1143 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica seg&uacute;n M&eacute;trica v3 (si no que la define como pr&aacute;ctica):";
 choices[34]= new Array();
 choices[34][0] = "Optimizaci&oacute;n.";
 choices[34][1] = "C&aacute;lculo de accesos.";
 choices[34][2] = "Diagrama de extrapolaci&oacute;n.";
 choices[34][3] = "Reglas de transformaci&oacute;n.";
 answers[34] = 1;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1143. ";
 preguntaids[34] = 1143


//  Id pregunta: 1159 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes es considerada una prueba de caja negra?";
 choices[35]= new Array();
 choices[35][0] = "Prueba del camino b&aacute;sico.";
 choices[35][1] = "Prueba de bucles.";
 choices[35][2] = "Prueba de partici&oacute;n equivalente.";
 choices[35][3] = "Pruebas de flujo de datos.";
 answers[35] = 2;
 units[35] = ['92'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 1159. ";
 preguntaids[35] = 1159


//  Id pregunta: 1144 Año de creación de pregunta: 2016
 questions[36]= "37)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[36]= new Array();
 choices[36][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[36][1] = "Cat&aacute;logo de productos a generar.";
 choices[36][2] = "Cat&aacute;logo de clases.";
 choices[36][3] = "Cat&aacute;logo de entidades.";
 answers[36] = 3;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 1144. ";
 preguntaids[36] = 1144


//  Id pregunta: 1192 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una base de datos NoSQL basada en un modelo de almacenamiento de &laquo;clave-valor&raquo;:";
 choices[37]= new Array();
 choices[37][0] = "Cassandra.";
 choices[37][1] = "Dynamo.";
 choices[37][2] = "Radiant.";
 choices[37][3] = "Oracle NoSQL.";
 answers[37] = 2;
 units[37] = ['73'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1192. ";
 preguntaids[37] = 1192


//  Id pregunta: 1195 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[38]= new Array();
 choices[38][0] = "RFID";
 choices[38][1] = "RSYNC";
 choices[38][2] = "RMAN";
 choices[38][3] = "RMON";
 answers[38] = 2;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1195. ";
 preguntaids[38] = 1195


//  Id pregunta: 1136 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ala la respuesta INCORRECTA en relaci&oacute;n con el m&eacute;todo Delphi:";
 choices[39]= new Array();
 choices[39][0] = "Barry Boehm y John A. Farquhar originaron la variante del m&eacute;todo Delphi denominada de &quot;banda ancha&quot; (wideband).";
 choices[39][1] = "En el m&eacute;todo Delphi tradicional los expertos rellenan un impreso de manera an&oacute;nima, pueden hacer preguntas al coordinador pero no entre ellos.";
 choices[39][2] = "En la variaci&oacute;n &quot;banda ancha&quot; no es necesario que los participantes se re&uacute;nan con el coordinador.";
 choices[39][3] = "En el m&eacute;todo tradicional el coordinador ofrece a cada experto el valor medio de las opiniones recogidas y pide una nueva estimaci&oacute;n an&oacute;nima indicando las razones de las posibles modificaciones.";
 answers[39] = 2;
 units[39] = ['38'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 1136. ";
 preguntaids[39] = 1136


//  Id pregunta: 1131 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[40]= new Array();
 choices[40][0] = "192.168.30.0";
 choices[40][1] = "192.168.30.128";
 choices[40][2] = "192.168.30.255";
 choices[40][3] = "192.168.30.200";
 answers[40] = 1;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1131. ";
 preguntaids[40] = 1131


//  Id pregunta: 1168 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique cu&aacute;l de las siguientes NO est&aacute; relacionada con la persistencia para Java EE:";
 choices[41]= new Array();
 choices[41][0] = "JPA.";
 choices[41][1] = "Hibernate.";
 choices[41][2] = "JSON.";
 choices[41][3] = "iBATIS.";
 answers[41] = 2;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1168. ";
 preguntaids[41] = 1168


//  Id pregunta: 1132 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes respuestas incluye todas las actividades que se realizan en cada ciclo del modelo del ciclo de vida en espiral?";
 choices[42]= new Array();
 choices[42][0] = "Determinaci&oacute;n de objetivos, An&aacute;lisis de riesgos, Desarrollo y prueba y Planificaci&oacute;n.";
 choices[42][1] = "An&aacute;lisis, Dise&ntilde;o, Construcci&oacute;n y Validaci&oacute;n.";
 choices[42][2] = "Estudio de viabilidad, An&aacute;lisis de requisitos, Especificaci&oacute;n de requisitos, Desarrollo y Pruebas";
 choices[42][3] = "Educci&oacute;n de Requisitos, Generaci&oacute;n de Prototipos, Adaptaci&oacute;n de Prototipos y Desarrollo final.";
 answers[42] = 0;
 units[42] = ['82'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 1132. ";
 preguntaids[42] = 1132


//  Id pregunta: 1128 Año de creación de pregunta: 2016
 questions[43]= "44)  Dentro del protocolo TCP/IP, el comando arp -a:";
 choices[43]= new Array();
 choices[43][0] = "Muestra la tabla RARP con la relaci&oacute;n entre direcciones MAC e IP.";
 choices[43][1] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y MAC.";
 choices[43][2] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y puertos UDP.";
 choices[43][3] = "Muestra la tabla de direcciones IP con la relaci&oacute;n entre direcciones IP y puertos TCP.";
 answers[43] = 1;
 units[43] = ['109'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1128. ";
 preguntaids[43] = 1128


//  Id pregunta: 1184 Año de creación de pregunta: 2016
 questions[44]= "45)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[44]= new Array();
 choices[44][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[44][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[44][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[44][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[44] = 1;
 units[44] = ['93'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1184. ";
 preguntaids[44] = 1184


//  Id pregunta: 1173 Año de creación de pregunta: 2016
 questions[45]= "46)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[45]= new Array();
 choices[45][0] = "Bajoo.";
 choices[45][1] = "Azure.";
 choices[45][2] = "Heroku.";
 choices[45][3] = "Adrive.";
 answers[45] = 1;
 units[45] = ['57'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1173. ";
 preguntaids[45] = 1173


//  Id pregunta: 1193 Año de creación de pregunta: 2016
 questions[46]= "47)  El comando ping es el acr&oacute;nimo de:";
 choices[46]= new Array();
 choices[46][0] = "Packet Internet Group.";
 choices[46][1] = "Packet Internet Gangway.";
 choices[46][2] = "Packet Internet Gate.";
 choices[46][3] = "Packet Internet Groper.";
 answers[46] = 3;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1193. ";
 preguntaids[46] = 1193


//  Id pregunta: 1130 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique el n&uacute;mero de puerto que deber&iacute;a usarse s&iacute; se quiere configurar un servicio para usar el protocolo de configuraci&oacute;n din&aacute;mica de host DHCP para IPv6:";
 choices[47]= new Array();
 choices[47][0] = "58";
 choices[47][1] = "169";
 choices[47][2] = "389";
 choices[47][3] = "547";
 answers[47] = 3;
 units[47] = ['109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 1130. ";
 preguntaids[47] = 1130


//  Id pregunta: 1138 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;A qu&eacute; tipo de metodolog&iacute;as asignar&iacute;a SCRUM?";
 choices[48]= new Array();
 choices[48][0] = "Metodolog&iacute;as de Tiempo Real.";
 choices[48][1] = "Metodolog&iacute;as &Aacute;giles.";
 choices[48][2] = "Metodolog&iacute;as Orientadas a Objetos.";
 choices[48][3] = "Metodolog&iacute;as Estructuradas Orientadas a Datos Jer&aacute;rquicos.";
 answers[48] = 1;
 units[48] = ['84'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1138. ";
 preguntaids[48] = 1138


//  Id pregunta: 1174 Año de creación de pregunta: 2016
 questions[49]= "50)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[49]= new Array();
 choices[49][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[49][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[49][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[49][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[49] = 3;
 units[49] = ['63'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1174. ";
 preguntaids[49] = 1174


//  Id pregunta: 1187 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n WCAG 2.0, &iquest;cu&aacute;les son los 4 principios que forman los cimientos de la accesibilidad web?";
 choices[50]= new Array();
 choices[50][0] = "Percibible (perceivable), operable, comprensible (understandable) y robusto (robust).";
 choices[50][1] = "Percibible (perceivable), sencillo (straightforward), comprensible (understandable) y robusto (robust).";
 choices[50][2] = "Distinguible (distinguishable), sencillo (straightforward), comprensible (understandable) y robusto (robust).";
 choices[50][3] = "Distinguible (distinguishable), sencillo (straightforward), memorizable (memorable) y robusto (robust).";
 answers[50] = 0;
 units[50] = ['42'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 1187. ";
 preguntaids[50] = 1187


//  Id pregunta: 1188 Año de creación de pregunta: 2016
 questions[51]= "52)  Las normas WAI del W3C se utilizan para medir el grado de cumplimiento de determinadas pautas de:";
 choices[51]= new Array();
 choices[51][0] = "Accesibilidad.";
 choices[51][1] = "Usabilidad.";
 choices[51][2] = "Calidad.";
 choices[51][3] = "Seguridad.";
 answers[51] = 0;
 units[51] = ['42'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 1188. ";
 preguntaids[51] = 1188


//  Id pregunta: 1189 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[52]= new Array();
 choices[52][0] = "Operable.";
 choices[52][1] = "Perceptible.";
 choices[52][2] = "Robustez.";
 choices[52][3] = "Comprensible.";
 answers[52] = 2;
 units[52] = ['42'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 1189. ";
 preguntaids[52] = 1189


//  Id pregunta: 1149 Año de creación de pregunta: 2016
 questions[53]= "54)  En la t&eacute;cnica de DFDs, seg&uacute;n M&eacute;trica v3, se&ntilde;ale la respuesta INCORRECTA:";
 choices[53]= new Array();
 choices[53][0] = "El nivel o se llama diagrama de contexto.";
 choices[53][1] = "Los flujos de datos que comunican procesos con almacenes pueden ser de consulta, di&aacute;logo o de control.";
 choices[53][2] = "La descomposici&oacute;n por niveles se realiza de arriba abajo (top-down).";
 choices[53][3] = "Los diagramas deben ser consistentes.";
 answers[53] = 1;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 1149. ";
 preguntaids[53] = 1149


//  Id pregunta: 1190 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale qu&eacute; JSR de Java define la especificaci&oacute;n de Portlets versi&oacute;n 2.0:";
 choices[54]= new Array();
 choices[54][0] = "JSR 268.";
 choices[54][1] = "JSR 186.";
 choices[54][2] = "JSR 286.";
 choices[54][3] = "JSR 127.";
 answers[54] = 2;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1190. ";
 preguntaids[54] = 1190


//  Id pregunta: 1127 Año de creación de pregunta: 2016
 questions[55]= "56)  De entre los siguientes, &iquest;qui&eacute;n es el creador del lenguaje de programaci&oacute;n C?";
 choices[55]= new Array();
 choices[55][0] = "Linus Torvalds.";
 choices[55][1] = "Dennis Ritchie.";
 choices[55][2] = "Richard Stallman.";
 choices[55][3] = "Bill Gates.";
 answers[55] = 1;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1127. ";
 preguntaids[55] = 1127


//  Id pregunta: 1183 Año de creación de pregunta: 2016
 questions[56]= "57)  El nivel m&aacute;ximo de madurez en CMMI es el nivel 5, o nivel:";
 choices[56]= new Array();
 choices[56][0] = "Optimizado.";
 choices[56][1] = "Administrado cuantitativamente.";
 choices[56][2] = "Definido.";
 choices[56][3] = "Productivo.";
 answers[56] = 0;
 units[56] = ['93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 1183. ";
 preguntaids[56] = 1183


//  Id pregunta: 1198 Año de creación de pregunta: 2016
 questions[57]= "58)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[57]= new Array();
 choices[57][0] = "JOB";
 choices[57][1] = "COMMENT";
 choices[57][2] = "EXEC";
 choices[57][3] = "DD";
 answers[57] = 1;
 units[57] = ['49'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1198. ";
 preguntaids[57] = 1198


//  Id pregunta: 1162 Año de creación de pregunta: 2016
 questions[58]= "59)  En relaci&oacute;n a pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[58]= new Array();
 choices[58][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[58][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[58][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[58][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control. Despu&eacute;s, los m&oacute;dulos de bajo nivel. La integraci&oacute;n de los m&oacute;dulos de nivel intermedio se hace al final.";
 answers[58] = 3;
 units[58] = ['92'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 1162. ";
 preguntaids[58] = 1162


//  Id pregunta: 1161 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique cu&aacute;l de las siguientes afirmaciones sobre las actividades de prueba y su relaci&oacute;n con la metodolog&iacute;a M&eacute;trica v3 es correcta:";
 choices[59]= new Array();
 choices[59][0] = "La definici&oacute;n de los requisitos del entorno de pruebas se realiza durante la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI).";
 choices[59][1] = "La planificaci&oacute;n de las pruebas se realiza durante la fase de Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI).";
 choices[59][2] = "Durante la fase Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI) se lleva a cabo la ejecuci&oacute;n de las pruebas del sistema.";
 choices[59][3] = "Durante la fase de Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI) se lleva a cabo la ejecuci&oacute;n de las pruebas de aceptaci&oacute;n.";
 answers[59] = 2;
 units[59] = ['91'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 1161. ";
 preguntaids[59] = 1161


//  Id pregunta: 1158 Año de creación de pregunta: 2016
 questions[60]= "61)  Uno de los indicadores que hace patente una escasa calidad de un dise&ntilde;o software es el siguiente:";
 choices[60]= new Array();
 choices[60][0] = "Un alto acoplamiento entre sus m&oacute;dulos.";
 choices[60][1] = "Una alta cohesi&oacute;n entre los elementos de un m&oacute;dulo.";
 choices[60][2] = "No disponer de c&oacute;digo duplicado.";
 choices[60][3] = "No seguir un dise&ntilde;o en cascada.";
 answers[60] = 0;
 units[60] = ['88'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 1158. ";
 preguntaids[60] = 1158


//  Id pregunta: 1134 Año de creación de pregunta: 2016
 questions[61]= "62)  Los procesos de la estructura principal de M&eacute;trica v3 son:";
 choices[61]= new Array();
 choices[61][0] = "Planificaci&oacute;n, An&aacute;lisis, Construcci&oacute;n y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[61][1] = "An&aacute;lisis, Desarrollo y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[61][2] = "An&aacute;lisis, Desarrollo, Pruebas y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[61][3] = "Planificaci&oacute;n, Desarrollo y Mantenimiento de sistemas de informaci&oacute;n.";
 answers[61] = 3;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 1134. ";
 preguntaids[61] = 1134


//  Id pregunta: 1172 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; funci&oacute;n tiene la tecnolog&iacute;a Entity Framework de .Net?";
 choices[62]= new Array();
 choices[62][0] = "Realiza mapeos entre clases y bases de datos relacionales (ORM, Object-Relational Mapping).";
 choices[62][1] = "Permite realizar mapeos entre XML y clases (XSDS, XML Serializer-DeSerializer).";
 choices[62][2] = "Permite exponer objetos para que sean accedidos remotamente, como CORBA o DCOM.";
 choices[62][3] = "Realiza una adaptaci&oacute;n entre clases de .Net y otros lenguajes, permitiendo acceso transparente.";
 answers[62] = 0;
 units[62] = ['63'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1172. ";
 preguntaids[62] = 1172


//  Id pregunta: 1142 Año de creación de pregunta: 2016
 questions[63]= "64)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[63]= new Array();
 choices[63][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[63][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[63][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[63][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[63] = 0;
 units[63] = ['91'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1142. ";
 preguntaids[63] = 1142


//  Id pregunta: 1167 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a la tecnolog&iacute;a JPA (Java Persistence API).";
 choices[64]= new Array();
 choices[64][0] = "El fichero &quot;persistence.xml&quot; permite la configuraci&oacute;n de JPA.";
 choices[64][1] = "Existen dos m&eacute;todos para gestionar las transacciones denominadas &quot;RESOURCE_LOCAL&quot; y &quot;JTA&quot;.";
 choices[64][2] = "JPQL es un lenguaje de consulta orientado a objetos, independiente de la plataforma y definido como parte de la especificaci&oacute;n JPA.";
 choices[64][3] = "Todas son correctas.";
 answers[64] = 3;
 units[64] = ['64'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1167. ";
 preguntaids[64] = 1167


//  Id pregunta: 1171 Año de creación de pregunta: 2016
 questions[65]= "66)  En la plataforma Microsoft .NET, el encargado de transformar el c&oacute;digo intermedio a c&oacute;digo m&aacute;quina se denomina:";
 choices[65]= new Array();
 choices[65][0] = "ByteCode.";
 choices[65][1] = "Empaquetador COM.";
 choices[65][2] = "CIL.";
 choices[65][3] = "CLR.";
 answers[65] = 3;
 units[65] = ['63'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1171. ";
 preguntaids[65] = 1171


//  Id pregunta: 1152 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale en qu&eacute; nivel de aislamiento definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[66]= new Array();
 choices[66][0] = "Serializable.";
 choices[66][1] = "Repeatable Read (lecturas repetibles).";
 choices[66][2] = "Read Committed (lecturas comprometidas).";
 choices[66][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[66] = 3;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1152. ";
 preguntaids[66] = 1152


//  Id pregunta: 1140 Año de creación de pregunta: 2016
 questions[67]= "68)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[67]= new Array();
 choices[67][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[67][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[67][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[67][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[67] = 2;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 1140. ";
 preguntaids[67] = 1140


//  Id pregunta: 1181 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO se usa en el desarrollo de servicios web?";
 choices[68]= new Array();
 choices[68][0] = "AXIS";
 choices[68][1] = "JAX-WS";
 choices[68][2] = "CXE";
 choices[68][3] = "AXIS 2";
 answers[68] = 2;
 units[68] = ['55'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1181. ";
 preguntaids[68] = 1181


//  Id pregunta: 1191 Año de creación de pregunta: 2016
 questions[69]= "70)  La notaci&oacute;n UML (Lenguaje Modelado Unificado), se deriva de y unifica tres metodolog&iacute;as de an&aacute;lisis y dise&ntilde;o Orientada a Objetos, indicar la respuesta INCORRECTA:";
 choices[69]= new Array();
 choices[69][0] = "Metodolog&iacute;a de Grady Booch para la descripci&oacute;n de conjuntos de objetos y sus relaciones.";
 choices[69][1] = "Metodolog&iacute;a de Boyce-Codd (FNBC) para la descripci&oacute;n de campos y objetos.";
 choices[69][2] = "T&eacute;cnica de modelado orientada a objetos de James Rumbaugh (OMT: Object-Modeling Technique).";
 choices[69][3] = "Aproximaci&oacute;n de Ivar Jacobson (OOSE: Object- Oriented Software Engineering) mediante la metodolog&iacute;a de casos de uso.";
 answers[69] = 1;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 1191. ";
 preguntaids[69] = 1191


//  Id pregunta: 1154 Año de creación de pregunta: 2016
 questions[70]= "71)  El algoritmo de ordenaci&oacute;n que hace uso de un elemento pivote es:";
 choices[70]= new Array();
 choices[70][0] = "Bubblesort.";
 choices[70][1] = "Heapsort.";
 choices[70][2] = "Quicksort.";
 choices[70][3] = "ShellSort.";
 answers[70] = 2;
 units[70] = ['86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 1154. ";
 preguntaids[70] = 1154


//  Id pregunta: 1176 Año de creación de pregunta: 2016
 questions[71]= "72)  En un Servicio Web, qu&eacute; lenguaje de los siguientes especifica la sintaxis y los mecanismos de intercambio de mensajes:";
 choices[71]= new Array();
 choices[71][0] = "WSDL.";
 choices[71][1] = "SOAP.";
 choices[71][2] = "UDDI.";
 choices[71][3] = "WS-Security.";
 answers[71] = 0;
 units[71] = ['55'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1176. ";
 preguntaids[71] = 1176


//  Id pregunta: 1199 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[72]= new Array();
 choices[72][0] = "TortoiseCVS";
 choices[72][1] = "Subversive";
 choices[72][2] = "Sventon";
 choices[72][3] = "Subclipse";
 answers[72] = 0;
 units[72] = ['95'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1199. ";
 preguntaids[72] = 1199


//  Id pregunta: 1139 Año de creación de pregunta: 2016
 questions[73]= "74)  Cu&aacute;l de los siguientes NO es un interfaz de la metodolog&iacute;a M&eacute;trica 3:";
 choices[73]= new Array();
 choices[73][0] = "Planificaci&oacute;n del sistema de informaci&oacute;n.";
 choices[73][1] = "Aseguramiento de la calidad.";
 choices[73][2] = "Seguridad.";
 choices[73][3] = "Gesti&oacute;n de la configuraci&oacute;n.";
 answers[73] = 0;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1139. ";
 preguntaids[73] = 1139


//  Id pregunta: 1135 Año de creación de pregunta: 2016
 questions[74]= "75)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[74]= new Array();
 choices[74][0] = "Es siempre cero.";
 choices[74][1] = "Es igual a su tiempo early.";
 choices[74][2] = "Es mayor que su tiempo early.";
 choices[74][3] = "Es menor que su tiempo early.";
 answers[74] = 1;
 units[74] = ['33'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 1135. ";
 preguntaids[74] = 1135


