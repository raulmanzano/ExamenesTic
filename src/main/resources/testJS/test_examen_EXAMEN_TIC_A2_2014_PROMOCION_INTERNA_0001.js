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
//  Id pregunta: 1108 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Esquema Nacional de Seguridad (ENS), Real Decreto 3/2010, en lo relativo a la auditor&iacute;a:";
 choices[0]= new Array();
 choices[0][0] = "Los sistemas de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, o inferior, no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema de informaci&oacute;n, o en quien este delegue.";
 choices[0][1] = "Los sistemas de informaci&oacute;n de categor&iacute;a MEDIA no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema de informaci&oacute;n, o en quien &eacute;ste delegue.";
 choices[0][2] = "Los sistemas de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, o inferior, no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada en cualquier caso por personal de seguridad ajeno al que administra el sistema de informaci&oacute;n.";
 choices[0][3] = "El ENS no considera suficiente una autoevaluaci&oacute;n en ning&uacute;n sistema de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, MEDIA o ALTA.";
 answers[0] = 0;
 units[0] = ['46'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 1108. ";
 preguntaids[0] = 1108


//  Id pregunta: 1122 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la respuesta correcta respecto a un sistema de archivos de UNIX System V:";
 choices[1]= new Array();
 choices[1][0] = "Posee una estructura relacional de archivos.";
 choices[1][1] = "En el sistema de archivos se encuentra el bloque de arranque. El superbloque, la lista de nodos y los bloques de datos se leen de la BIOS directamente.";
 choices[1][2] = "La lista de i-nodos se encuentra a continuaci&oacute;n del superbloque.";
 choices[1][3] = "Los dispositivos y perif&eacute;ricos no son archivos.";
 answers[1] = 2;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1122. ";
 preguntaids[1] = 1122


//  Id pregunta: 1165 Año de creación de pregunta: 2016
 questions[2]= "3)  En un diagrama de clases UML, si un m&eacute;todo va precedido del s&iacute;mbolo '-' (menos) quiere decir que s&oacute;lo es accesible:";
 choices[2]= new Array();
 choices[2][0] = "Desde dentro de la clase.";
 choices[2][1] = "Desde cualquier clase de cualquier paquete de clases.";
 choices[2][2] = "Desde clases del mismo paquete.";
 choices[2][3] = "Desde dentro de la clase o desde clases que hereden de ella.";
 answers[2] = 0;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1165. ";
 preguntaids[2] = 1165


//  Id pregunta: 1147 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n M&eacute;trica v3, en un diagrama de flujo de datos DFD:";
 choices[3]= new Array();
 choices[3][0] = "Los almacenes de datos pueden relacionarse entre s&iacute;.";
 choices[3][1] = "Un almac&eacute;n aparecer&aacute; por primera vez en aqu&eacute;l nivel en que dos o m&aacute;s procesos accedan a &eacute;l.";
 choices[3][2] = "Un almac&eacute;n puede crear, transformar o destruir datos.";
 choices[3][3] = "Dos procesos deben relacionarse siempre a trav&eacute;s de una entidad externa.";
 answers[3] = 1;
 units[3] = ['91'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 1147. ";
 preguntaids[3] = 1147


//  Id pregunta: 1145 Año de creación de pregunta: 2016
 questions[4]= "5)  En cuanto a las sesiones JAD (Joint Application Design), definidas seg&uacute;n M&eacute;trica V3, se&ntilde;ale la respuesta verdadera:";
 choices[4]= new Array();
 choices[4][0] = "Tienen como objetivo potenciar la participaci&oacute;n activa de la alta direcci&oacute;n.";
 choices[4][1] = "Uno de los perfiles implicados es el de Consultor.";
 choices[4][2] = "La informaci&oacute;n de salida depender&aacute; de la actividad del Plan de sistemas de Informaci&oacute;n.";
 choices[4][3] = "Se involucra a los usuarios principalmente en la especificaci&oacute;n de requisitos del sistema y en la validaci&oacute;n de prototipos.";
 answers[4] = 3;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 1145. ";
 preguntaids[4] = 1145


//  Id pregunta: 1128 Año de creación de pregunta: 2016
 questions[5]= "6)  Dentro del protocolo TCP/IP, el comando arp -a:";
 choices[5]= new Array();
 choices[5][0] = "Muestra la tabla RARP con la relaci&oacute;n entre direcciones MAC e IP.";
 choices[5][1] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y MAC.";
 choices[5][2] = "Muestra la tabla ARP con la relaci&oacute;n entre direcciones IP y puertos UDP.";
 choices[5][3] = "Muestra la tabla de direcciones IP con la relaci&oacute;n entre direcciones IP y puertos TCP.";
 answers[5] = 1;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 1128. ";
 preguntaids[5] = 1128


//  Id pregunta: 1117 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con el sistema de archivos distribuido Lustre:";
 choices[6]= new Array();
 choices[6][0] = "DSS (Distributed Storage Server).";
 choices[6][1] = "OST (Object Storage Target).";
 choices[6][2] = "OSS (Object Storage Server).";
 choices[6][3] = "MDS (MetaData Server).";
 answers[6] = 0;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1117. ";
 preguntaids[6] = 1117


//  Id pregunta: 1119 Año de creación de pregunta: 2016
 questions[7]= "8)  Comparando el sistema de archivos Ext4 frente a Ext3, se&ntilde;ale la opci&oacute;n correcta:";
 choices[7]= new Array();
 choices[7][0] = "Ext4 soporta sistemas de ficheros de hasta 1024 TB frente a los 16 TB de Ext3.";
 choices[7][1] = "La migraci&oacute;n de un sistema de ficheros Ext3 a uno Ext4 requiere reformatear el sistema de archivos afectado.";
 choices[7][2] = "Ext4 soporta ficheros de hasta 16 TB frente a los 2 TB de Ext3.";
 choices[7][3] = "Ext4 introduce la capacidad de journaling (registro por diario), no presente en Ext3.";
 answers[7] = 2;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1119. ";
 preguntaids[7] = 1119


//  Id pregunta: 1133 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n con el modelo de proceso unificado de desarrollo software:";
 choices[8]= new Array();
 choices[8][0] = "Modelo de proceso inspirado en los modelos de ciclo de vida iterativos para el desarrollo de sistemas software.";
 choices[8][1] = "Los proyectos se organizan en cinco fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n, Transici&oacute;n y Entrega.";
 choices[8][2] = "Es un modelo centrado en la arquitectura.";
 choices[8][3] = "Est&aacute; dirigido por casos de uso.";
 answers[8] = 1;
 units[8] = ['82'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 1133. ";
 preguntaids[8] = 1133


//  Id pregunta: 1143 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica seg&uacute;n M&eacute;trica v3 (si no que la define como pr&aacute;ctica):";
 choices[9]= new Array();
 choices[9][0] = "Optimizaci&oacute;n.";
 choices[9][1] = "C&aacute;lculo de accesos.";
 choices[9][2] = "Diagrama de extrapolaci&oacute;n.";
 choices[9][3] = "Reglas de transformaci&oacute;n.";
 answers[9] = 1;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1143. ";
 preguntaids[9] = 1143


//  Id pregunta: 1104 Año de creación de pregunta: 2016
 questions[10]= "11)  La prestaci&oacute;n de los servicios de validaci&oacute;n del DNI electr&oacute;nico se realiza en base a:";
 choices[10]= new Array();
 choices[10][0] = "Online Certificate Status Protocol (OCSP).";
 choices[10][1] = "Online Services Protocol (OSP).";
 choices[10][2] = "Services Status Protocol (SSP).";
 choices[10][3] = "Online Status Services Certificate (OSSC).";
 answers[10] = 0;
 units[10] = ['78'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1104. ";
 preguntaids[10] = 1104


//  Id pregunta: 1111 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es el nivel de resoluci&oacute;n m&iacute;nimo que establece la NTI de Digitalizaci&oacute;n de Documentos para im&aacute;genes electr&oacute;nicas?";
 choices[11]= new Array();
 choices[11][0] = "200 p&iacute;xeles por pulgada (ppp), para im&aacute;genes obtenidas en blanco/negro, y escala de grises, y de 300 ppp para im&aacute;genes en color.";
 choices[11][1] = "300 ppp, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[11][2] = "300 ppp, para im&aacute;genes obtenidas en blanco/negro, y escala de grises, y de 200 ppp para im&aacute;genes en color.";
 choices[11][3] = "200 ppp, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 answers[11] = 3;
 units[11] = ['44'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 1111. ";
 preguntaids[11] = 1111


//  Id pregunta: 1150 Año de creación de pregunta: 2016
 questions[12]= "13)  En una base de datos de coches hay una tabla con marcas de coches (c&oacute;digo_marca y nombre_marca) y otra con modelos (c&oacute;digo_marca, c&oacute;digo_modelo, nombre_modelo). Para que la base de datos mantenga la integridad referencial:";
 choices[12]= new Array();
 choices[12][0] = "Si borro una marca, antes tengo que borrar todas las ocurrencias de modelos de esa marca.";
 choices[12][1] = "Si borro un modelo, antes tengo que borrar la marca correspondiente.";
 choices[12][2] = "No puedo dar de alta ninguna marca si no hay antes alg&uacute;n modelo de la misma.";
 choices[12][3] = "Al modificar el nombre de una marca tengo que modificar antes el c&oacute;digo_marca en los modelos correspondientes.";
 answers[12] = 0;
 units[12] = ['61'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1150. ";
 preguntaids[12] = 1150


//  Id pregunta: 1120 Año de creación de pregunta: 2016
 questions[13]= "14)  El sistema operativo iOS presente en dispositivos Apple, cuenta con cuatro capas de abstracci&oacute;n, entre las que NO se encuentra:";
 choices[13]= new Array();
 choices[13][0] = "Capa n&uacute;cleo (Core OS).";
 choices[13][1] = "Capa de servicios principales.";
 choices[13][2] = "Capa Cocoa Touch.";
 choices[13][3] = "Capa de servicios de red.";
 answers[13] = 3;
 units[13] = ['59'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1120. ";
 preguntaids[13] = 1120


//  Id pregunta: 1152 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale en qu&eacute; nivel de aislamiento definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[14]= new Array();
 choices[14][0] = "Serializable.";
 choices[14][1] = "Repeatable Read (lecturas repetibles).";
 choices[14][2] = "Read Committed (lecturas comprometidas).";
 choices[14][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[14] = 3;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1152. ";
 preguntaids[14] = 1152


//  Id pregunta: 1146 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n se especifica en la metodolog&iacute;a M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes participantes NO interviene en la actividad EVS 3, de Definici&oacute;n de Requisitos de Sistema?";
 choices[15]= new Array();
 choices[15][0] = "Comit&eacute; de Direcci&oacute;n.";
 choices[15][1] = "Usuarios expertos.";
 choices[15][2] = "Jefe de Proyecto.";
 choices[15][3] = "Analistas.";
 answers[15] = 0;
 units[15] = ['91'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 1146. ";
 preguntaids[15] = 1146


//  Id pregunta: 1166 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes diagramas NO pertenece a los diagramas de estructura UML 2?";
 choices[16]= new Array();
 choices[16][0] = "Diagrama de paquetes.";
 choices[16][1] = "Diagrama de clases.";
 choices[16][2] = "Diagrama de actividades.";
 choices[16][3] = "Diagrama de despliegue.";
 answers[16] = 2;
 units[16] = ['85'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 1166. ";
 preguntaids[16] = 1166


//  Id pregunta: 1164 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a las pruebas de integraci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Pueden ser de caja blanca o de caja negra.";
 choices[17][1] = "Uno de sus objetivos es comprobar que los cambios introducidos sobre un componente no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados.";
 choices[17][2] = "Dan una visi&oacute;n muy similar a su comportamiento en el entorno de producci&oacute;n.";
 choices[17][3] = "Sus tipos fundamentales son incremental y no incremental.";
 answers[17] = 3;
 units[17] = ['92'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 1164. ";
 preguntaids[17] = 1164


//  Id pregunta: 1157 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre cohesi&oacute;n y acoplamiento es correcta?";
 choices[18]= new Array();
 choices[18][0] = "El acoplamiento mide la relaci&oacute;n entre los elementos de un m&oacute;dulo, buscando que sea m&aacute;ximo.";
 choices[18][1] = "La cohesi&oacute;n mide el grado de interdependencia entre m&oacute;dulos, buscando que sea m&iacute;nimo para independizarlos y garantizar su f&aacute;cil mantenibilidad.";
 choices[18][2] = "La cohesi&oacute;n mide la relaci&oacute;n entre los elementos de un m&oacute;dulo. Existen distintos tipos de cohesi&oacute;n: funcional, secuencial, temporal, etc.";
 choices[18][3] = "La cohesi&oacute;n mide la relaci&oacute;n entre los elementos de un m&oacute;dulo. Existen distintos tipos de cohesi&oacute;n: normal, externa, com&uacute;n, etc.";
 answers[18] = 2;
 units[18] = ['88'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 1157. ";
 preguntaids[18] = 1157


//  Id pregunta: 1163 Año de creación de pregunta: 2016
 questions[19]= "20)  El tipo de prueba BigBang es de tipo:";
 choices[19]= new Array();
 choices[19][0] = "Prueba de sistema.";
 choices[19][1] = "Prueba de aceptaci&oacute;n.";
 choices[19][2] = "Prueba de rendimiento.";
 choices[19][3] = "Prueba de integraci&oacute;n.";
 answers[19] = 3;
 units[19] = ['92'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 1163. ";
 preguntaids[19] = 1163


//  Id pregunta: 1121 Año de creación de pregunta: 2016
 questions[20]= "21)  En un sistema operativo, cuando hay suficiente memoria para ubicar un nuevo proceso, pero no se le puede asignar porque el espacio disponible no est&aacute; contiguo, se le denomina:";
 choices[20]= new Array();
 choices[20][0] = "Segmentaci&oacute;n.";
 choices[20][1] = "Paginaci&oacute;n.";
 choices[20][2] = "Fragmentaci&oacute;n externa.";
 choices[20][3] = "Fragmentaci&oacute;n interna.";
 answers[20] = 2;
 units[20] = ['56'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1121. ";
 preguntaids[20] = 1121


//  Id pregunta: 1114 Año de creación de pregunta: 2016
 questions[21]= "22)  El formato para la firma electr&oacute;nica de contenido, atendiendo a la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares, es:";
 choices[21]= new Array();
 choices[21][0] = "XAdES (XML Advanced Electronic Signatures), seg&uacute;n la especificaci&oacute;n t&eacute;cnica ETSI TS 101 903, versi&oacute;n 1.2.2 y 1.3.2.";
 choices[21][1] = "CAdES (CMS Advanced Electronic Signatures), seg&uacute;n la especificaci&oacute;n t&eacute;cnica ETSI TS 101 733, versi&oacute;n 1.6.3 y 1.7.4.";
 choices[21][2] = "PAdES (PDF Advanced Electronic Signatures), seg&uacute;n la especificaci&oacute;n t&eacute;cnica ETSI TS 102 778-3.";
 choices[21][3] = "Todas las anteriores.";
 answers[21] = 3;
 units[21] = ['44'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 1114. ";
 preguntaids[21] = 1114


//  Id pregunta: 1113 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera un principio espec&iacute;fico de la interoperabilidad, seg&uacute;n indica el Real Decreto 4/2010 en su art&iacute;culo 4:";
 choices[22]= new Array();
 choices[22][0] = "La interoperabilidad como cualidad integral.";
 choices[22][1] = "Reevaluaci&oacute;n peri&oacute;dica de la interoperabilidad.";
 choices[22][2] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[22][3] = "Enfoque de soluciones multilaterales.";
 answers[22] = 1;
 units[22] = ['43'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 1113. ";
 preguntaids[22] = 1113


//  Id pregunta: 1116 Año de creación de pregunta: 2016
 questions[23]= "24)  La arquitectura GRID est&aacute; compuesta por capas. La capa m&aacute;s baja y donde se encuentran los recursos computacionales y de almacenamiento que ser&aacute;n compartidos por los protocolos grid se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Fabric.";
 choices[23][1] = "Connectivity.";
 choices[23][2] = "Resource.";
 choices[23][3] = "Collective.";
 answers[23] = 0;
 units[23] = ['49'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1116. ";
 preguntaids[23] = 1116


//  Id pregunta: 1109 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la NTI de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos, el esquema de metadatos que incluye los metadatos m&iacute;nimos obligatorios, definidos en las NTI de documento electr&oacute;nico y expediente electr&oacute;nico, as&iacute; como otros metadatos complementarios pertinentes en una pol&iacute;tica de gesti&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos es:";
 choices[24]= new Array();
 choices[24][0] = "MARC 12.";
 choices[24][1] = "Dublin Core.";
 choices[24][2] = "e-EMGDE.";
 choices[24][3] = "e-MARC.";
 answers[24] = 2;
 units[24] = ['44'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 1109. ";
 preguntaids[24] = 1109


//  Id pregunta: 1126 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la respuesta FALSA, en relaci&oacute;n con el algoritmo de planificaci&oacute;n SRTF (Shortest Remaining Time First):";
 choices[25]= new Array();
 choices[25][0] = "Es una versi&oacute;n de SJF.";
 choices[25][1] = "Cada vez que entran trabajos se interrumpe el actual y se compara el tiempo restante de &eacute;ste con el de los entrantes.";
 choices[25][2] = "Si hay un trabajo nuevo m&aacute;s corto que lo que le falta al actual en CPU, echamos el actual y metemos el nuevo.";
 choices[25][3] = "Cada proceso tiene un tiempo l&iacute;mite de uso de CPU llamado quantum.";
 answers[25] = 3;
 units[25] = ['56'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1126. ";
 preguntaids[25] = 1126


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[26]= "27)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[26]= new Array();
 choices[26][0] = "TPDU.";
 choices[26][1] = "Paquete.";
 choices[26][2] = "Trama.";
 choices[26][3] = "TCDU.";
 answers[26] = 0;
 units[26] = ['105'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1129. ";
 preguntaids[26] = 1129


//  Id pregunta: 1106 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[27]= new Array();
 choices[27][0] = "6 meses.";
 choices[27][1] = "1 a&ntilde;o.";
 choices[27][2] = "2 a&ntilde;os.";
 choices[27][3] = "5 a&ntilde;os.";
 answers[27] = 1;
 units[27] = ['35'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 1106. ";
 preguntaids[27] = 1106


//  Id pregunta: 1118 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el gestor de vol&uacute;menes l&oacute;gicos de Linux LVM 2.0 (Logical Volume Manager Versi&oacute;n 2)?";
 choices[28]= new Array();
 choices[28][0] = "Un volumen l&oacute;gico (LV) puede pertenecer a distintos grupos de vol&uacute;menes l&oacute;gicos (LVG).";
 choices[28][1] = "Un disco f&iacute;sico solo puede pertenecer a un volumen f&iacute;sico (PV).";
 choices[28][2] = "Un grupo de LVG se puede formar a partir de varios PV.";
 choices[28][3] = "El n&uacute;mero de LV incluidos en un grupo de LVG debe ser siempre par.";
 answers[28] = 2;
 units[28] = ['57'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1118. ";
 preguntaids[28] = 1118


//  Id pregunta: 1149 Año de creación de pregunta: 2016
 questions[29]= "30)  En la t&eacute;cnica de DFDs, seg&uacute;n M&eacute;trica v3, se&ntilde;ale la respuesta INCORRECTA:";
 choices[29]= new Array();
 choices[29][0] = "El nivel o se llama diagrama de contexto.";
 choices[29][1] = "Los flujos de datos que comunican procesos con almacenes pueden ser de consulta, di&aacute;logo o de control.";
 choices[29][2] = "La descomposici&oacute;n por niveles se realiza de arriba abajo (top-down).";
 choices[29][3] = "Los diagramas deben ser consistentes.";
 answers[29] = 1;
 units[29] = ['91'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 1149. ";
 preguntaids[29] = 1149


//  Id pregunta: 1115 Año de creación de pregunta: 2016
 questions[30]= "31)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[30]= new Array();
 choices[30][0] = "ART.";
 choices[30][1] = "Dalvik.";
 choices[30][2] = "Java VM.";
 choices[30][3] = "APK.";
 answers[30] = 1;
 units[30] = ['59'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1115. ";
 preguntaids[30] = 1115


//  Id pregunta: 1144 Año de creación de pregunta: 2016
 questions[31]= "32)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[31]= new Array();
 choices[31][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[31][1] = "Cat&aacute;logo de productos a generar.";
 choices[31][2] = "Cat&aacute;logo de clases.";
 choices[31][3] = "Cat&aacute;logo de entidades.";
 answers[31] = 3;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1144. ";
 preguntaids[31] = 1144


//  Id pregunta: 1161 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones sobre las actividades de prueba y su relaci&oacute;n con la metodolog&iacute;a M&eacute;trica v3 es correcta:";
 choices[32]= new Array();
 choices[32][0] = "La definici&oacute;n de los requisitos del entorno de pruebas se realiza durante la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI).";
 choices[32][1] = "La planificaci&oacute;n de las pruebas se realiza durante la fase de Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI).";
 choices[32][2] = "Durante la fase Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI) se lleva a cabo la ejecuci&oacute;n de las pruebas del sistema.";
 choices[32][3] = "Durante la fase de Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI) se lleva a cabo la ejecuci&oacute;n de las pruebas de aceptaci&oacute;n.";
 answers[32] = 2;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1161. ";
 preguntaids[32] = 1161


//  Id pregunta: 1135 Año de creación de pregunta: 2016
 questions[33]= "34)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[33]= new Array();
 choices[33][0] = "Es siempre cero.";
 choices[33][1] = "Es igual a su tiempo early.";
 choices[33][2] = "Es mayor que su tiempo early.";
 choices[33][3] = "Es menor que su tiempo early.";
 answers[33] = 1;
 units[33] = ['33'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 1135. ";
 preguntaids[33] = 1135


//  Id pregunta: 1137 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; interfaces define M&eacute;trica v3?";
 choices[34]= new Array();
 choices[34][0] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n del Mantenimiento y Gesti&oacute;n de Proyectos.";
 choices[34][1] = "Aseguramiento de la Calidad, Gesti&oacute;n del Capital Humano, Seguridad y Gesti&oacute;n de Proyectos.";
 choices[34][2] = "Aseguramiento de la Calidad, Seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 choices[34][3] = "Seguridad, Mejora Continua, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos.";
 answers[34] = 2;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1137. ";
 preguntaids[34] = 1137


//  Id pregunta: 1167 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a la tecnolog&iacute;a JPA (Java Persistence API).";
 choices[35]= new Array();
 choices[35][0] = "El fichero &quot;persistence.xml&quot; permite la configuraci&oacute;n de JPA.";
 choices[35][1] = "Existen dos m&eacute;todos para gestionar las transacciones denominadas &quot;RESOURCE_LOCAL&quot; y &quot;JTA&quot;.";
 choices[35][2] = "JPQL es un lenguaje de consulta orientado a objetos, independiente de la plataforma y definido como parte de la especificaci&oacute;n JPA.";
 choices[35][3] = "Todas son correctas.";
 answers[35] = 3;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1167. ";
 preguntaids[35] = 1167


//  Id pregunta: 1139 Año de creación de pregunta: 2016
 questions[36]= "37)  Cu&aacute;l de los siguientes NO es un interfaz de la metodolog&iacute;a M&eacute;trica 3:";
 choices[36]= new Array();
 choices[36][0] = "Planificaci&oacute;n del sistema de informaci&oacute;n.";
 choices[36][1] = "Aseguramiento de la calidad.";
 choices[36][2] = "Seguridad.";
 choices[36][3] = "Gesti&oacute;n de la configuraci&oacute;n.";
 answers[36] = 0;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 1139. ";
 preguntaids[36] = 1139


//  Id pregunta: 1134 Año de creación de pregunta: 2016
 questions[37]= "38)  Los procesos de la estructura principal de M&eacute;trica v3 son:";
 choices[37]= new Array();
 choices[37][0] = "Planificaci&oacute;n, An&aacute;lisis, Construcci&oacute;n y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[37][1] = "An&aacute;lisis, Desarrollo y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[37][2] = "An&aacute;lisis, Desarrollo, Pruebas y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[37][3] = "Planificaci&oacute;n, Desarrollo y Mantenimiento de sistemas de informaci&oacute;n.";
 answers[37] = 3;
 units[37] = ['91'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1134. ";
 preguntaids[37] = 1134


//  Id pregunta: 1162 Año de creación de pregunta: 2016
 questions[38]= "39)  En relaci&oacute;n a pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[38]= new Array();
 choices[38][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[38][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[38][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[38][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control. Despu&eacute;s, los m&oacute;dulos de bajo nivel. La integraci&oacute;n de los m&oacute;dulos de nivel intermedio se hace al final.";
 answers[38] = 3;
 units[38] = ['92'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 1162. ";
 preguntaids[38] = 1162


//  Id pregunta: 1105 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[39]= new Array();
 choices[39][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[39][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[39][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[39][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[39] = 3;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 1105. ";
 preguntaids[39] = 1105


//  Id pregunta: 1154 Año de creación de pregunta: 2016
 questions[40]= "41)  El algoritmo de ordenaci&oacute;n que hace uso de un elemento pivote es:";
 choices[40]= new Array();
 choices[40][0] = "Bubblesort.";
 choices[40][1] = "Heapsort.";
 choices[40][2] = "Quicksort.";
 choices[40][3] = "ShellSort.";
 answers[40] = 2;
 units[40] = ['86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1154. ";
 preguntaids[40] = 1154


//  Id pregunta: 1173 Año de creación de pregunta: 2016
 questions[41]= "42)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[41]= new Array();
 choices[41][0] = "Bajoo.";
 choices[41][1] = "Azure.";
 choices[41][2] = "Heroku.";
 choices[41][3] = "Adrive.";
 answers[41] = 1;
 units[41] = ['57'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 1173. ";
 preguntaids[41] = 1173


//  Id pregunta: 1155 Año de creación de pregunta: 2016
 questions[42]= "43)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[42]= new Array();
 choices[42][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[42][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[42][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[42][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[42] = 1;
 units[42] = ['86'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 1155. ";
 preguntaids[42] = 1155


//  Id pregunta: 1158 Año de creación de pregunta: 2016
 questions[43]= "44)  Uno de los indicadores que hace patente una escasa calidad de un dise&ntilde;o software es el siguiente:";
 choices[43]= new Array();
 choices[43][0] = "Un alto acoplamiento entre sus m&oacute;dulos.";
 choices[43][1] = "Una alta cohesi&oacute;n entre los elementos de un m&oacute;dulo.";
 choices[43][2] = "No disponer de c&oacute;digo duplicado.";
 choices[43][3] = "No seguir un dise&ntilde;o en cascada.";
 answers[43] = 0;
 units[43] = ['88'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 1158. ";
 preguntaids[43] = 1158


//  Id pregunta: 1148 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[44]= new Array();
 choices[44][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[44][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[44][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[44][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[44] = 1;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1148. ";
 preguntaids[44] = 1148


//  Id pregunta: 1151 Año de creación de pregunta: 2016
 questions[45]= "46)  La arquitectura ANSI/SPARC, define los niveles de abstracci&oacute;n para un sistema de administraci&oacute;n de bases de datos. Indicar el nivel INCORRECTO:";
 choices[45]= new Array();
 choices[45][0] = "Nivel f&iacute;sico: define c&oacute;mo se almacenan los datos y los m&eacute;todos de acceso.";
 choices[45][1] = "Nivel conceptual: define c&oacute;mo se organiza la informaci&oacute;n dentro de la base de datos.";
 choices[45][2] = "Nivel contextual: define el formato de los campos.";
 choices[45][3] = "Nivel externo: define las vistas del usuario.";
 answers[45] = 2;
 units[45] = ['61'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1151. ";
 preguntaids[45] = 1151


//  Id pregunta: 1130 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique el n&uacute;mero de puerto que deber&iacute;a usarse s&iacute; se quiere configurar un servicio para usar el protocolo de configuraci&oacute;n din&aacute;mica de host DHCP para IPv6:";
 choices[46]= new Array();
 choices[46][0] = "58";
 choices[46][1] = "169";
 choices[46][2] = "389";
 choices[46][3] = "547";
 answers[46] = 3;
 units[46] = ['109'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1130. ";
 preguntaids[46] = 1130


//  Id pregunta: 1174 Año de creación de pregunta: 2016
 questions[47]= "48)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[47]= new Array();
 choices[47][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[47][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[47][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[47][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[47] = 3;
 units[47] = ['63'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1174. ";
 preguntaids[47] = 1174


//  Id pregunta: 1169 Año de creación de pregunta: 2016
 questions[48]= "49)  El paquete Java SE 8 al que pertenece el interfaz List es:";
 choices[48]= new Array();
 choices[48][0] = "java.lang";
 choices[48][1] = "java.util";
 choices[48][2] = "java.collection";
 choices[48][3] = "List no es un interfaz Java, est&aacute; definido como clase abstracta.";
 answers[48] = 1;
 units[48] = ['64'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1169. ";
 preguntaids[48] = 1169


//  Id pregunta: 1140 Año de creación de pregunta: 2016
 questions[49]= "50)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[49]= new Array();
 choices[49][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[49][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[49][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[49][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[49] = 2;
 units[49] = ['91'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 1140. ";
 preguntaids[49] = 1140


//  Id pregunta: 1123 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas permitir&iacute;a realizar un montaje de un CD-ROM en un sistema operativo Linux:";
 choices[50]= new Array();
 choices[50][0] = "setup -t device/cdrom/cab1";
 choices[50][1] = "install -t iso9660 /dev/hdb /mnt/cdrom";
 choices[50][2] = "mount -t iso9660 /dev/hdb /mnt/cdrom";
 choices[50][3] = "grep -t iso9660 /dev/hdb /mnt/cdrom";
 answers[50] = 2;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1123. ";
 preguntaids[50] = 1123


//  Id pregunta: 1136 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ala la respuesta INCORRECTA en relaci&oacute;n con el m&eacute;todo Delphi:";
 choices[51]= new Array();
 choices[51][0] = "Barry Boehm y John A. Farquhar originaron la variante del m&eacute;todo Delphi denominada de &quot;banda ancha&quot; (wideband).";
 choices[51][1] = "En el m&eacute;todo Delphi tradicional los expertos rellenan un impreso de manera an&oacute;nima, pueden hacer preguntas al coordinador pero no entre ellos.";
 choices[51][2] = "En la variaci&oacute;n &quot;banda ancha&quot; no es necesario que los participantes se re&uacute;nan con el coordinador.";
 choices[51][3] = "En el m&eacute;todo tradicional el coordinador ofrece a cada experto el valor medio de las opiniones recogidas y pide una nueva estimaci&oacute;n an&oacute;nima indicando las razones de las posibles modificaciones.";
 answers[51] = 2;
 units[51] = ['38'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 1136. ";
 preguntaids[51] = 1136


//  Id pregunta: 1102 Año de creación de pregunta: 2016
 questions[52]= "53)  La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio El electr&oacute;nico, en el art&iacute;culo 45 detalla la prescripci&oacute;n para las sanciones e infracciones. Se&ntilde;ale la respuesta correcta:";
 choices[52]= new Array();
 choices[52][0] = "Las infracciones muy graves prescribir&aacute;n a los 3 a&ntilde;os, las graves al a&ntilde;o y las leves a los 6 meses.";
 choices[52][1] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves a los seis meses.";
 choices[52][2] = "Las infracciones muy graves prescribir&aacute;n a los 5 a&ntilde;os, las graves a los 3 a&ntilde;os y las leves al a&ntilde;o.";
 choices[52][3] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves al a&ntilde;o.";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 1102. ";
 preguntaids[52] = 1102


//  Id pregunta: 1171 Año de creación de pregunta: 2016
 questions[53]= "54)  En la plataforma Microsoft .NET, el encargado de transformar el c&oacute;digo intermedio a c&oacute;digo m&aacute;quina se denomina:";
 choices[53]= new Array();
 choices[53][0] = "ByteCode.";
 choices[53][1] = "Empaquetador COM.";
 choices[53][2] = "CIL.";
 choices[53][3] = "CLR.";
 answers[53] = 3;
 units[53] = ['63'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1171. ";
 preguntaids[53] = 1171


//  Id pregunta: 1101 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique la afirmaci&oacute;n correcta respecto a XAdES-T:";
 choices[54]= new Array();
 choices[54][0] = "Contiene la forma b&aacute;sica de firma que cumple los requisitos legales de la Directiva para firma electr&oacute;nica avanzada, informaci&oacute;n sobre la pol&iacute;tica de firma (opcional) y a&ntilde;ade un campo de sellado de tiempo para proteger contra el repudio.";
 choices[54][1] = "Es la forma b&aacute;sica de firma a la que se la ha a&ntilde;adido informaci&oacute;n sobre la pol&iacute;tica de firma.";
 choices[54][2] = "A&ntilde;ade a la forma b&aacute;sica de firma la posibilidad de timestamping peri&oacute;dico de documentos archivados para prevenir que puedan ser comprometidos debido a la debilidad de la firma durante un periodo largo de almacenamiento.";
 choices[54][3] = "A&ntilde;ade sellos de tiempo a las referencias introducidas por XAdES-C para evitar que pueda verse comprometida en el futuro una cadena de certificados.";
 answers[54] = 0;
 units[54] = ['77'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1101. ";
 preguntaids[54] = 1101


//  Id pregunta: 1132 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes respuestas incluye todas las actividades que se realizan en cada ciclo del modelo del ciclo de vida en espiral?";
 choices[55]= new Array();
 choices[55][0] = "Determinaci&oacute;n de objetivos, An&aacute;lisis de riesgos, Desarrollo y prueba y Planificaci&oacute;n.";
 choices[55][1] = "An&aacute;lisis, Dise&ntilde;o, Construcci&oacute;n y Validaci&oacute;n.";
 choices[55][2] = "Estudio de viabilidad, An&aacute;lisis de requisitos, Especificaci&oacute;n de requisitos, Desarrollo y Pruebas";
 choices[55][3] = "Educci&oacute;n de Requisitos, Generaci&oacute;n de Prototipos, Adaptaci&oacute;n de Prototipos y Desarrollo final.";
 answers[55] = 0;
 units[55] = ['82'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1132. ";
 preguntaids[55] = 1132


//  Id pregunta: 1170 Año de creación de pregunta: 2016
 questions[56]= "57)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Java BluePrints.";
 choices[56][1] = "Java Specification Request.";
 choices[56][2] = "Java Community Process.";
 choices[56][3] = "Java Pattern Spec.";
 answers[56] = 0;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1170. ";
 preguntaids[56] = 1170


//  Id pregunta: 1160 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes informaciones sobre la fase de pruebas del software es correcta?";
 choices[57]= new Array();
 choices[57][0] = "Las pruebas de integraci&oacute;n bottom-up necesitan m&oacute;dulos auxiliares que sustituyan a los m&oacute;dulos que son llamados por otros de m&aacute;s alto nivel.";
 choices[57][1] = "Las pruebas de integraci&oacute;n top-down necesitan m&oacute;dulos conductores (drivers) que simulen las llamadas a los m&oacute;dulos que se est&aacute;n probando.";
 choices[57][2] = "Las pruebas funcionales o de caja negra permiten comprobar el correcto funcionamiento de los componentes del sistema analizando entradas y salidas y verificando exclusivamente el resultado.";
 choices[57][3] = "Las pruebas estructurales o de caja blanca permiten comprobar el correcto funcionamiento de los componentes del sistema analizando entradas y salidas y verificando exclusivamente el resultado.";
 answers[57] = 2;
 units[57] = ['92'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 1160. ";
 preguntaids[57] = 1160


//  Id pregunta: 1142 Año de creación de pregunta: 2016
 questions[58]= "59)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[58]= new Array();
 choices[58][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[58][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[58][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[58][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[58] = 0;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 1142. ";
 preguntaids[58] = 1142


//  Id pregunta: 1125 Año de creación de pregunta: 2016
 questions[59]= "60)  El algoritmo de Peterson corresponde a:";
 choices[59]= new Array();
 choices[59][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[59][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[59][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[59][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[59] = 3;
 units[59] = ['56'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 1125. ";
 preguntaids[59] = 1125


//  Id pregunta: 1127 Año de creación de pregunta: 2016
 questions[60]= "61)  De entre los siguientes, &iquest;qui&eacute;n es el creador del lenguaje de programaci&oacute;n C?";
 choices[60]= new Array();
 choices[60][0] = "Linus Torvalds.";
 choices[60][1] = "Dennis Ritchie.";
 choices[60][2] = "Richard Stallman.";
 choices[60][3] = "Bill Gates.";
 answers[60] = 1;
 units[60] = ['56'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1127. ";
 preguntaids[60] = 1127


//  Id pregunta: 1124 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una distribuci&oacute;n LINUX?";
 choices[61]= new Array();
 choices[61][0] = "Fedora.";
 choices[61][1] = "Mandriva.";
 choices[61][2] = "Solaris.";
 choices[61][3] = "Ubuntu.";
 answers[61] = 2;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1124. ";
 preguntaids[61] = 1124


//  Id pregunta: 1159 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es considerada una prueba de caja negra?";
 choices[62]= new Array();
 choices[62][0] = "Prueba del camino b&aacute;sico.";
 choices[62][1] = "Prueba de bucles.";
 choices[62][2] = "Prueba de partici&oacute;n equivalente.";
 choices[62][3] = "Pruebas de flujo de datos.";
 answers[62] = 2;
 units[62] = ['92'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 1159. ";
 preguntaids[62] = 1159


//  Id pregunta: 1153 Año de creación de pregunta: 2016
 questions[63]= "64)  Elija la respuesta correcta con respecto a los grafos:";
 choices[63]= new Array();
 choices[63][0] = "Un &aacute;rbol es un grafo dirigido y ac&iacute;clico.";
 choices[63][1] = "Un grafo est&aacute; completamente conectado si existe como m&iacute;nimo un camino entre cualquier par de v&eacute;rtices distintos.";
 choices[63][2] = "En un grafo el grado interior de un v&eacute;rtice es el n&uacute;mero de aristas que llegan a &eacute;l.";
 choices[63][3] = "La lista de adyacencia es una lista donde las filas y las columnas hacen referencia a los v&eacute;rtices para almacenar en cada casilla la longitud entre cada par de v&eacute;rtices del grafo.";
 answers[63] = 2;
 units[63] = ['86'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1153. ";
 preguntaids[63] = 1153


//  Id pregunta: 1156 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes grupos de principios es propio de un buen dise&ntilde;o estructurado?";
 choices[64]= new Array();
 choices[64][0] = "Modularidad, dependencia funcional y principio de caja &quot;blanca&quot;.";
 choices[64][1] = "Modularidad, independencia funcional y principio de caja &quot;blanca&quot;.";
 choices[64][2] = "Modularidad, independencia funcional y principio de caja &quot;negra&quot;.";
 choices[64][3] = "Modularidad, dependencia funcional y principio de caja &quot;negra&quot;.";
 answers[64] = 2;
 units[64] = ['88'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 1156. ";
 preguntaids[64] = 1156


//  Id pregunta: 1100 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; zona del chip del DNI electr&oacute;nico se encuentra el certificado x509 de componente?";
 choices[65]= new Array();
 choices[65][0] = "Zona de seguridad.";
 choices[65][1] = "Zona aut&oacute;noma.";
 choices[65][2] = "Zona privada.";
 choices[65][3] = "Zona p&uacute;blica.";
 answers[65] = 3;
 units[65] = ['77'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1100. ";
 preguntaids[65] = 1100


//  Id pregunta: 1131 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[66]= new Array();
 choices[66][0] = "192.168.30.0";
 choices[66][1] = "192.168.30.128";
 choices[66][2] = "192.168.30.255";
 choices[66][3] = "192.168.30.200";
 answers[66] = 1;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1131. ";
 preguntaids[66] = 1131


//  Id pregunta: 1103 Año de creación de pregunta: 2016
 questions[67]= "68)  En la Ley 34/2002, LSSICE, en el art&iacute;culo 41 se establecen las medidas de car&aacute;cter provisional que se pueden adoptar con el fin de asegurar la eficacia de la resoluci&oacute;n que se dicte en relaci&oacute;n con los procedimientos sancionadores iniciados por infracciones graves o muy graves. Se&ntilde;ale cu&aacute;l de las siguientes medidas NO se contempla:";
 choices[67]= new Array();
 choices[67][0] = "Suspensi&oacute;n temporal de la actividad del prestador de servicios y, en su caso, cierre provisional de sus establecimientos.";
 choices[67][1] = "Precinto, dep&oacute;sito o incautaci&oacute;n de registros, soportes y archivos inform&aacute;ticos y de documentos en general, as&iacute; como de aparatos y equipos inform&aacute;ticos de todo tipo.";
 choices[67][2] = "Intervenci&oacute;n provisional de los activos y bienes del prestador de servicios bajo resoluci&oacute;n judicial.";
 choices[67][3] = "Advertir al p&uacute;blico de la existencia de posibles conductas infractoras y de la incoaci&oacute;n del expediente sancionador de que se trate, as&iacute; como de las medidas adoptadas para el cese de dichas conductas.";
 answers[67] = 2;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 1103. ";
 preguntaids[67] = 1103


//  Id pregunta: 1138 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;A qu&eacute; tipo de metodolog&iacute;as asignar&iacute;a SCRUM?";
 choices[68]= new Array();
 choices[68][0] = "Metodolog&iacute;as de Tiempo Real.";
 choices[68][1] = "Metodolog&iacute;as &Aacute;giles.";
 choices[68][2] = "Metodolog&iacute;as Orientadas a Objetos.";
 choices[68][3] = "Metodolog&iacute;as Estructuradas Orientadas a Datos Jer&aacute;rquicos.";
 answers[68] = 1;
 units[68] = ['84'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 1138. ";
 preguntaids[68] = 1138


//  Id pregunta: 1112 Año de creación de pregunta: 2016
 questions[69]= "70)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[69]= new Array();
 choices[69][0] = "Confidencialidad.";
 choices[69][1] = "Integridad.";
 choices[69][2] = "Autenticidad.";
 choices[69][3] = "Trazabilidad.";
 answers[69] = 3;
 units[69] = ['46'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 1112. ";
 preguntaids[69] = 1112


//  Id pregunta: 1141 Año de creación de pregunta: 2016
 questions[70]= "71)  Seleccione de los siguientes participantes de M&Eacute;TRICA v3 el que se NO se agrupa dentro del perfil de Analista:";
 choices[70]= new Array();
 choices[70][0] = "Equipo de Soporte T&eacute;cnico.";
 choices[70][1] = "Grupo de Aseguramiento de la Calidad.";
 choices[70][2] = "Administrador de Bases de Datos.";
 choices[70][3] = "T&eacute;cnico de Sistemas.";
 answers[70] = 3;
 units[70] = ['91'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 1141. ";
 preguntaids[70] = 1141


//  Id pregunta: 1107 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n lo dispuesto en el Real Decreto 1720/2007, indique cu&aacute;l de los siguientes aspectos deber&aacute; contener adicionalmente el documento de seguridad si fueran de aplicaci&oacute;n a los ficheros, las medidas de seguridad de nivel medio o las medidas de seguridad de nivel alto:";
 choices[71]= new Array();
 choices[71][0] = "Los controles peri&oacute;dicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento de seguridad.";
 choices[71][1] = "Funciones y obligaciones del personal en relaci&oacute;n con el tratamiento de los datos de car&aacute;cter personal incluidos en los ficheros.";
 choices[71][2] = "Los procedimientos de realizaci&oacute;n de copias de respaldo y de recuperaci&oacute;n de los datos en los ficheros o tratamientos automatizados.";
 choices[71][3] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante las incidencias.";
 answers[71] = 0;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 1107. ";
 preguntaids[71] = 1107


//  Id pregunta: 1172 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; funci&oacute;n tiene la tecnolog&iacute;a Entity Framework de .Net?";
 choices[72]= new Array();
 choices[72][0] = "Realiza mapeos entre clases y bases de datos relacionales (ORM, Object-Relational Mapping).";
 choices[72][1] = "Permite realizar mapeos entre XML y clases (XSDS, XML Serializer-DeSerializer).";
 choices[72][2] = "Permite exponer objetos para que sean accedidos remotamente, como CORBA o DCOM.";
 choices[72][3] = "Realiza una adaptaci&oacute;n entre clases de .Net y otros lenguajes, permitiendo acceso transparente.";
 answers[72] = 0;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1172. ";
 preguntaids[72] = 1172


//  Id pregunta: 1168 Año de creación de pregunta: 2016
 questions[73]= "74)  Indique cu&aacute;l de las siguientes NO est&aacute; relacionada con la persistencia para Java EE:";
 choices[73]= new Array();
 choices[73][0] = "JPA.";
 choices[73][1] = "Hibernate.";
 choices[73][2] = "JSON.";
 choices[73][3] = "iBATIS.";
 answers[73] = 2;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1168. ";
 preguntaids[73] = 1168


//  Id pregunta: 1110 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale, de los siguientes est&aacute;ndares, cu&aacute;l NO est&aacute; recogido en la Norma T&eacute;cnica de Interoperabilidad NTI de Cat&aacute;logo de est&aacute;ndares en la categor&iacute;a de &quot;Formatos ficheros - Cartograf&iacute;a y sistemas de informaci&oacute;n geogr&aacute;fica&quot;:";
 choices[74]= new Array();
 choices[74][0] = "SVG";
 choices[74][1] = "WFS";
 choices[74][2] = "GML";
 choices[74][3] = "WMS";
 answers[74] = 0;
 units[74] = ['44'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 1110. ";
 preguntaids[74] = 1110


