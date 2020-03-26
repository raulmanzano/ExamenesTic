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
//  Id pregunta: 1094 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL):";
 choices[0]= new Array();
 choices[0][0] = "Permiten conocer el estado de un certificado en el instante de la consulta.";
 choices[0][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[0][2] = "Deben ser expedidas por las mismas Autoridades que emiten los certificados revocados.";
 choices[0][3] = "Pueden contener s&oacute;lo certificados revocados desde la expedici&oacute;n de una CRL b&aacute;sica, en cuyo caso se denominan delta CRL.";
 answers[0] = 3;
 units[0] = ['77'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1094. ";
 preguntaids[0] = 1094


//  Id pregunta: 1109 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la NTI de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos, el esquema de metadatos que incluye los metadatos m&iacute;nimos obligatorios, definidos en las NTI de documento electr&oacute;nico y expediente electr&oacute;nico, as&iacute; como otros metadatos complementarios pertinentes en una pol&iacute;tica de gesti&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos es:";
 choices[1]= new Array();
 choices[1][0] = "MARC 12.";
 choices[1][1] = "Dublin Core.";
 choices[1][2] = "e-EMGDE.";
 choices[1][3] = "e-MARC.";
 answers[1] = 2;
 units[1] = ['44'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 1109. ";
 preguntaids[1] = 1109


//  Id pregunta: 1056 Año de creación de pregunta: 2016
 questions[2]= "3)  Cu&aacute;l de los siguientes tipos de canales, en comunicaciones m&oacute;viles, permite la comunicaci&oacute;n directa m&oacute;vil a m&oacute;vil:";
 choices[2]= new Array();
 choices[2][0] = "Semid&uacute;plex.";
 choices[2][1] = "D&uacute;plex.";
 choices[2][2] = "S&iacute;mplex a una frecuencia.";
 choices[2][3] = "S&iacute;mplex a dos frecuencias.";
 answers[2] = 2;
 units[2] = ['117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1056. ";
 preguntaids[2] = 1056


//  Id pregunta: 1098 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a la tecnolog&iacute;a WIFI:";
 choices[3]= new Array();
 choices[3][0] = "Los equipos WIFI no necesitan adaptarse a ninguna normativa.";
 choices[3][1] = "Los ayuntamientos pueden comercializar WIFI siempre y cuando se hayan inscrito en el registro de operadores.";
 choices[3][2] = "Los operadores de telecomunicaciones tienen que pedir una licencia para la utilizaci&oacute;n de la banda WIFI, que les permite comercializar este servicio.";
 choices[3][3] = "Los equipos WIFI utilizan una banda de uso com&uacute;n.";
 answers[3] = 3;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1098. ";
 preguntaids[3] = 1098


//  Id pregunta: 1081 Año de creación de pregunta: 2016
 questions[4]= "5)  Entre los objetivos del dise&ntilde;o de BPEL NO se encuentra:";
 choices[4]= new Array();
 choices[4][0] = "Proveer sistemas de control jer&aacute;rquicos y de estilo gr&aacute;fico, que permitan que su uso sea lo m&aacute;s fusionado posible.";
 choices[4][1] = "Soportar un m&eacute;todo de identificaci&oacute;n de instancias de procesos que permita la definici&oacute;n de identificadores a nivel de mensajes de aplicaciones.";
 choices[4][2] = "Definir procesos de negocio utilizando un lenguaje basado en XML.";
 choices[4][3] = "Definir una interpretaci&oacute;n gr&aacute;fica de los procesos.";
 answers[4] = 3;
 units[4] = ['86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 1081. ";
 preguntaids[4] = 1081


//  Id pregunta: 1054 Año de creación de pregunta: 2016
 questions[5]= "6)  Las funciones resumen (hash) MD5 y SHA-1 tienen en com&uacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Que ambas admiten mensajes de entrada de longitud m&aacute;xima 264 Mbytes.";
 choices[5][1] = "Que ambas generan res&uacute;menes de 128 bits.";
 choices[5][2] = "Que ambas realizan relleno de bits (si procede) en el &uacute;ltimo bloque del mensaje.";
 choices[5][3] = "Que ambas realizan 80 iteraciones por bloque del mensaje.";
 answers[5] = 2;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1054. ";
 preguntaids[5] = 1054


//  Id pregunta: 1051 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el modelo de Mc Call, &iquest;cu&aacute;l de las siguientes NO es una medida directa aplicable a un atributo relativo a un producto?";
 choices[6]= new Array();
 choices[6][0] = "Estructuraci&oacute;n.";
 choices[6][1] = "Coste.";
 choices[6][2] = "Modularidad.";
 choices[6][3] = "Acoplamiento.";
 answers[6] = 2;
 units[6] = ['93'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1051. ";
 preguntaids[6] = 1051


//  Id pregunta: 1050 Año de creación de pregunta: 2016
 questions[7]= "8)  Los certificados de clave p&uacute;blica";
 choices[7]= new Array();
 choices[7][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[7][1] = "Tienen en torno a 1 Mbytes.";
 choices[7][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA.";
 choices[7][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[7] = 0;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1050. ";
 preguntaids[7] = 1050


//  Id pregunta: 1074 Año de creación de pregunta: 2016
 questions[8]= "9)  En el &aacute;mbito de la auditor&iacute;a de sistemas se denominan hallazgos a:";
 choices[8]= new Array();
 choices[8][0] = "Las tareas orientadas a comprobar que se cumplen determinados procesos de control o procedimientos establecidos.";
 choices[8][1] = "Los criterios, condiciones y efectos que permiten documentar los problemas encontrados";
 choices[8][2] = "Las tareas que permiten al equipo auditor entender el entorno de los sistemas a auditar.";
 choices[8][3] = "Los m&eacute;todos aplicados para conseguir el objetivo de la auditor&iacute;a.";
 answers[8] = 1;
 units[8] = ['36'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 1074. ";
 preguntaids[8] = 1074


//  Id pregunta: 1069 Año de creación de pregunta: 2016
 questions[9]= "10)  A los efectos previstos en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de datos de car&aacute;cter personal, se entiende por &quot;Procedimiento de disociaci&oacute;n&quot;:";
 choices[9]= new Array();
 choices[9][0] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga s&oacute;lo pueda asociarse a una determinada persona.";
 choices[9][1] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga s&oacute;lo pueda ser identificable por el interesado pero no por terceras personas.";
 choices[9][2] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga no pueda asociarse a persona identificada o identificable.";
 choices[9][3] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga se pueda tratar por el responsable del fichero para identificar a un grupo de personas con id&eacute;nticas caracter&iacute;sticas personales.";
 answers[9] = 2;
 units[9] = ['35'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 1069. ";
 preguntaids[9] = 1069


//  Id pregunta: 1073 Año de creación de pregunta: 2016
 questions[10]= "11)  Los cifradores de clave secreta:";
 choices[10]= new Array();
 choices[10][0] = "Pueden encadenarse (cifrado producto) produciendo un criptograma m&aacute;s robusto que el obtenido al aplicar un &uacute;nico cifrado.";
 choices[10][1] = "A igualdad de longitud de clave son m&aacute;s robustos que los de clave p&uacute;blica.";
 choices[10][2] = "Su seguridad recae en el secreto del dise&ntilde;o.";
 choices[10][3] = "Se usan en los sistemas operativos Windows XP y 7 para proteger las contrase&ntilde;as de los usuarios.";
 answers[10] = 1;
 units[10] = ['76'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 1073. ";
 preguntaids[10] = 1073


//  Id pregunta: 1079 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;C&oacute;mo se puede validar documentos en XML?";
 choices[11]= new Array();
 choices[11][0] = "Usando XSL Schema.";
 choices[11][1] = "Usando XSLT.";
 choices[11][2] = "Usando un Applet de validaci&oacute;n.";
 choices[11][3] = "Usando un DTD.";
 answers[11] = 3;
 units[11] = ['74'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1079. ";
 preguntaids[11] = 1079


//  Id pregunta: 1122 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la respuesta correcta respecto a un sistema de archivos de UNIX System V:";
 choices[12]= new Array();
 choices[12][0] = "Posee una estructura relacional de archivos.";
 choices[12][1] = "En el sistema de archivos se encuentra el bloque de arranque. El superbloque, la lista de nodos y los bloques de datos se leen de la BIOS directamente.";
 choices[12][2] = "La lista de i-nodos se encuentra a continuaci&oacute;n del superbloque.";
 choices[12][3] = "Los dispositivos y perif&eacute;ricos no son archivos.";
 answers[12] = 2;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 1122. ";
 preguntaids[12] = 1122


//  Id pregunta: 1080 Año de creación de pregunta: 2016
 questions[13]= "14)  En el contexto de los sistemas Datawarehouse y DataMart seleccione la frase correcta.";
 choices[13]= new Array();
 choices[13][0] = "El an&aacute;lisis dimensional de los datos corporativos mediante t&eacute;cnicas de OLAP no puede implementarse sobre bases de datos relacionales.";
 choices[13][1] = "Las bases de datos relacionales incorporan de manera estructural la jerarqu&iacute;a entre sucesivos niveles de una dimensi&oacute;n.";
 choices[13][2] = "Los modelos en copo de nieve utilizan tablas de hechos y tablas de dimensiones para el an&aacute;lisis de los datos corporativos.";
 choices[13][3] = "Los almacenes de datos departamentales (DataMart), a diferencia de los almacenes corporativos (Datawarehouse), no requieren procesos previos de ETL (extracci&oacute;n, transformaci&oacute;n y carga).";
 answers[13] = 2;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1080. ";
 preguntaids[13] = 1080


//  Id pregunta: 1093 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[14]= new Array();
 choices[14][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[14][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes.";
 choices[14][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[14][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta.";
 answers[14] = 1;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1093. ";
 preguntaids[14] = 1093


//  Id pregunta: 1061 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique la frase correcta acerca de los servicios web distribuidos.";
 choices[15]= new Array();
 choices[15][0] = "WSDL 1.1 define dos &uacute;nicos tipos de operaci&oacute;n, la unidireccional y la de petici&oacute;n-respuesta.";
 choices[15][1] = "Para describir las interfaces de los servicios web se utiliza WS-BPEL.";
 choices[15][2] = "Un usuario de un servicio registra &eacute;ste utilizando UDDI.";
 choices[15][3] = "SOAP es un protocolo para hacer llamadas a m&eacute;todos de objetos remotos.";
 answers[15] = 3;
 units[15] = ['55'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1061. ";
 preguntaids[15] = 1061


//  Id pregunta: 1113 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera un principio espec&iacute;fico de la interoperabilidad, seg&uacute;n indica el Real Decreto 4/2010 en su art&iacute;culo 4:";
 choices[16]= new Array();
 choices[16][0] = "La interoperabilidad como cualidad integral.";
 choices[16][1] = "Reevaluaci&oacute;n peri&oacute;dica de la interoperabilidad.";
 choices[16][2] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[16][3] = "Enfoque de soluciones multilaterales.";
 answers[16] = 1;
 units[16] = ['43'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 1113. ";
 preguntaids[16] = 1113


//  Id pregunta: 1091 Año de creación de pregunta: 2016
 questions[17]= "18)  Los certificados digitales:";
 choices[17]= new Array();
 choices[17][0] = "Basados en la recomendaci&oacute;n X.509 v.2 admiten extensiones, que pueden llevar una bandera de criticidad.";
 choices[17][1] = "Definidos en el programa PGP (Pretty Good Privacy) son compatibles con los X.509 v.3.";
 choices[17][2] = "De atributos vinculan al titular con su clave p&uacute;blica y sus atributos.";
 choices[17][3] = "Basados en la recomendaci&oacute;n X.509 v.3 pueden incorporar como extensiones los atributos que constan en un certificado de atributos.";
 answers[17] = 3;
 units[17] = ['77'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 1091. ";
 preguntaids[17] = 1091


//  Id pregunta: 1070 Año de creación de pregunta: 2016
 questions[18]= "19)  En el entorno de la firma electr&oacute;nica y la identidad electr&oacute;nica, STORK identifica:";
 choices[18]= new Array();
 choices[18][0] = "Un proyecto financiado por la Comisi&oacute;n Europea para establecer la interoperabilidad de las identidades electr&oacute;nicas de los Estados Miembros.";
 choices[18][1] = "A la PKI desplegada por la Comisi&oacute;n Europea para la futura carta de identidad electr&oacute;nica europea.";
 choices[18][2] = "La implementaci&oacute;n opensource realizada por la Comisi&oacute;n Europea de un cliente de firma electr&oacute;nica.";
 choices[18][3] = "El consorcio de fabricantes e industria Europea relacionado con la firma electr&oacute;nica e identidad electr&oacute;nica.";
 answers[18] = 0;
 units[18] = ['77'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 1070. ";
 preguntaids[18] = 1070


//  Id pregunta: 1084 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique la frase correcta acerca de los sistemas CRM,&rdquo;Customer relationship management&rdquo; y ERP &ldquo;Enterprise resource planning&rdquo;.";
 choices[19]= new Array();
 choices[19][0] = "La contabilidad financiera es un m&oacute;dulo caracter&iacute;stico de los sistemas CRM anal&iacute;ticos.";
 choices[19][1] = "El uso de t&eacute;cnicas de data mining en los CRM operacionales permite analizar tendencias en el comportamiento de los clientes.";
 choices[19][2] = "Los sistemas ERP son sistemas transaccionales que se implementan &uacute;nicamente sobre arquitecturas cliente servidor.";
 choices[19][3] = "Las parametrizaciones incorporadas en los ERP los hacen m&aacute;s flexibles pero impiden su actualizaci&oacute;n.";
 answers[19] = 1;
 units[19] = ['69'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1084. ";
 preguntaids[19] = 1084


//  Id pregunta: 1115 Año de creación de pregunta: 2016
 questions[20]= "21)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "ART.";
 choices[20][1] = "Dalvik.";
 choices[20][2] = "Java VM.";
 choices[20][3] = "APK.";
 answers[20] = 1;
 units[20] = ['59'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1115. ";
 preguntaids[20] = 1115


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[21]= "22)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[21]= new Array();
 choices[21][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[21][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[21][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[21][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[21] = 2;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 1062. ";
 preguntaids[21] = 1062


//  Id pregunta: 1121 Año de creación de pregunta: 2016
 questions[22]= "23)  En un sistema operativo, cuando hay suficiente memoria para ubicar un nuevo proceso, pero no se le puede asignar porque el espacio disponible no est&aacute; contiguo, se le denomina:";
 choices[22]= new Array();
 choices[22][0] = "Segmentaci&oacute;n.";
 choices[22][1] = "Paginaci&oacute;n.";
 choices[22][2] = "Fragmentaci&oacute;n externa.";
 choices[22][3] = "Fragmentaci&oacute;n interna.";
 answers[22] = 2;
 units[22] = ['56'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1121. ";
 preguntaids[22] = 1121


//  Id pregunta: 1118 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el gestor de vol&uacute;menes l&oacute;gicos de Linux LVM 2.0 (Logical Volume Manager Versi&oacute;n 2)?";
 choices[23]= new Array();
 choices[23][0] = "Un volumen l&oacute;gico (LV) puede pertenecer a distintos grupos de vol&uacute;menes l&oacute;gicos (LVG).";
 choices[23][1] = "Un disco f&iacute;sico solo puede pertenecer a un volumen f&iacute;sico (PV).";
 choices[23][2] = "Un grupo de LVG se puede formar a partir de varios PV.";
 choices[23][3] = "El n&uacute;mero de LV incluidos en un grupo de LVG debe ser siempre par.";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 1118. ";
 preguntaids[23] = 1118


//  Id pregunta: 1103 Año de creación de pregunta: 2016
 questions[24]= "25)  En la Ley 34/2002, LSSICE, en el art&iacute;culo 41 se establecen las medidas de car&aacute;cter provisional que se pueden adoptar con el fin de asegurar la eficacia de la resoluci&oacute;n que se dicte en relaci&oacute;n con los procedimientos sancionadores iniciados por infracciones graves o muy graves. Se&ntilde;ale cu&aacute;l de las siguientes medidas NO se contempla:";
 choices[24]= new Array();
 choices[24][0] = "Suspensi&oacute;n temporal de la actividad del prestador de servicios y, en su caso, cierre provisional de sus establecimientos.";
 choices[24][1] = "Precinto, dep&oacute;sito o incautaci&oacute;n de registros, soportes y archivos inform&aacute;ticos y de documentos en general, as&iacute; como de aparatos y equipos inform&aacute;ticos de todo tipo.";
 choices[24][2] = "Intervenci&oacute;n provisional de los activos y bienes del prestador de servicios bajo resoluci&oacute;n judicial.";
 choices[24][3] = "Advertir al p&uacute;blico de la existencia de posibles conductas infractoras y de la incoaci&oacute;n del expediente sancionador de que se trate, as&iacute; como de las medidas adoptadas para el cese de dichas conductas.";
 answers[24] = 2;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 1103. ";
 preguntaids[24] = 1103


//  Id pregunta: 1119 Año de creación de pregunta: 2016
 questions[25]= "26)  Comparando el sistema de archivos Ext4 frente a Ext3, se&ntilde;ale la opci&oacute;n correcta:";
 choices[25]= new Array();
 choices[25][0] = "Ext4 soporta sistemas de ficheros de hasta 1024 TB frente a los 16 TB de Ext3.";
 choices[25][1] = "La migraci&oacute;n de un sistema de ficheros Ext3 a uno Ext4 requiere reformatear el sistema de archivos afectado.";
 choices[25][2] = "Ext4 soporta ficheros de hasta 16 TB frente a los 2 TB de Ext3.";
 choices[25][3] = "Ext4 introduce la capacidad de journaling (registro por diario), no presente en Ext3.";
 answers[25] = 2;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1119. ";
 preguntaids[25] = 1119


//  Id pregunta: 1068 Año de creación de pregunta: 2016
 questions[26]= "27)  En cu&aacute;l de las siguientes combinaciones de topolog&iacute;as de red, un fallo en el cableado de red, impedir&aacute; el funcionamiento de toda ella:";
 choices[26]= new Array();
 choices[26][0] = "Topolog&iacute;a Estrella f&iacute;sica y Mallada l&oacute;gica.";
 choices[26][1] = "Topolog&iacute;a Anillo f&iacute;sica y Bus l&oacute;gica.";
 choices[26][2] = "Topolog&iacute;a Mallada f&iacute;sica y Anillo l&oacute;gica.";
 choices[26][3] = "Topolog&iacute;a Bus f&iacute;sica y Estrella l&oacute;gica.";
 answers[26] = 3;
 units[26] = ['104'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1068. ";
 preguntaids[26] = 1068


//  Id pregunta: 1075 Año de creación de pregunta: 2016
 questions[27]= "28)  Identifique la caracter&iacute;stica que NO forma parte de los principios de dise&ntilde;o SOA:";
 choices[27]= new Array();
 choices[27][0] = "Interconexi&oacute;n";
 choices[27][1] = ". Encapsulaci&oacute;n";
 choices[27][2] = ". Reutilizaci&oacute;n.";
 choices[27][3] = "Descubrimiento.";
 answers[27] = 0;
 units[27] = ['55'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1075. ";
 preguntaids[27] = 1075


//  Id pregunta: 1092 Año de creación de pregunta: 2016
 questions[28]= "29)  Cu&aacute;l de las siguientes afirmaciones relativa a las velocidades m&aacute;ximas est&aacute;ndar de transferencia en conexiones con dispositivos externos es correcta:";
 choices[28]= new Array();
 choices[28][0] = "En Firewire 1600 es 400 MB/s.";
 choices[28][1] = "En USB 1.0 es 1,5 MB/s.";
 choices[28][2] = "En Thunderbolt es 1800 MB/s.";
 choices[28][3] = "En USB 3.0 es 600 MB/s.";
 answers[28] = 3;
 units[28] = ['51'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1092. ";
 preguntaids[28] = 1092


//  Id pregunta: 1114 Año de creación de pregunta: 2016
 questions[29]= "30)  El formato para la firma electr&oacute;nica de contenido, atendiendo a la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares, es:";
 choices[29]= new Array();
 choices[29][0] = "XAdES (XML Advanced Electronic Signatures), seg&uacute;n la especificaci&oacute;n t&eacute;cnica ETSI TS 101 903, versi&oacute;n 1.2.2 y 1.3.2.";
 choices[29][1] = "CAdES (CMS Advanced Electronic Signatures), seg&uacute;n la especificaci&oacute;n t&eacute;cnica ETSI TS 101 733, versi&oacute;n 1.6.3 y 1.7.4.";
 choices[29][2] = "PAdES (PDF Advanced Electronic Signatures), seg&uacute;n la especificaci&oacute;n t&eacute;cnica ETSI TS 102 778-3.";
 choices[29][3] = "Todas las anteriores.";
 answers[29] = 3;
 units[29] = ['44'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 1114. ";
 preguntaids[29] = 1114


//  Id pregunta: 1059 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes conceptos introducidos por Symons fue una novedad en la m&eacute;trica Puntos de Funci&oacute;n MARK II respecto a la original de Albrecht?";
 choices[30]= new Array();
 choices[30][0] = "Fichero l&oacute;gico de Entrada.";
 choices[30][1] = "Entidad.";
 choices[30][2] = "Consultas Externas.";
 choices[30][3] = "Caracter&iacute;stica.";
 answers[30] = 1;
 units[30] = ['94'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1059. ";
 preguntaids[30] = 1059


//  Id pregunta: 1099 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la LOPD, las infracciones prescribir&aacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Las muy graves a los tres a&ntilde;os, las graves al a&ntilde;o y las leves a los seis meses";
 choices[31][1] = "Las muy graves a los dos a&ntilde;os, las graves al a&ntilde;o y las leves a los seis meses";
 choices[31][2] = "Las muy graves a los tres a&ntilde;os, las graves a los dos a&ntilde;os y las leves al a&ntilde;o.";
 choices[31][3] = "Las muy graves a los cuatro a&ntilde;os, las graves a los tres a&ntilde;os y las leves al a&ntilde;o.";
 answers[31] = 2;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 1099. ";
 preguntaids[31] = 1099


//  Id pregunta: 1120 Año de creación de pregunta: 2016
 questions[32]= "33)  El sistema operativo iOS presente en dispositivos Apple, cuenta con cuatro capas de abstracci&oacute;n, entre las que NO se encuentra:";
 choices[32]= new Array();
 choices[32][0] = "Capa n&uacute;cleo (Core OS).";
 choices[32][1] = "Capa de servicios principales.";
 choices[32][2] = "Capa Cocoa Touch.";
 choices[32][3] = "Capa de servicios de red.";
 answers[32] = 3;
 units[32] = ['59'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1120. ";
 preguntaids[32] = 1120


//  Id pregunta: 1096 Año de creación de pregunta: 2016
 questions[33]= "34)  Elija la frase correcta.";
 choices[33]= new Array();
 choices[33][0] = "Un Iphone de uso personal se conecta siempre al servidor de Internet de iOS, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[33][1] = "Un Samsung Galaxy de uso personal se conecta siempre al servidor de Internet de Android, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[33][2] = "Un Nokia 500 de uso personal se conecta siempre al servidor de Internet de Symbian, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[33][3] = "Una Blackberry de uso personal se conecta siempre al servidor de Internet de Blackberry, que act&uacute;a como un proveedor de acceso a Internet.";
 answers[33] = 3;
 units[33] = ['59'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1096. ";
 preguntaids[33] = 1096


//  Id pregunta: 1052 Año de creación de pregunta: 2016
 questions[34]= "35)  El entorno donde se ejecutan todas las aplicaciones .NET se llama:";
 choices[34]= new Array();
 choices[34][0] = "Swing";
 choices[34][1] = "ASP.NET";
 choices[34][2] = "ECLIPSE";
 choices[34][3] = "CLR";
 answers[34] = 3;
 units[34] = ['63'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1052. ";
 preguntaids[34] = 1052


//  Id pregunta: 1108 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Esquema Nacional de Seguridad (ENS), Real Decreto 3/2010, en lo relativo a la auditor&iacute;a:";
 choices[35]= new Array();
 choices[35][0] = "Los sistemas de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, o inferior, no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema de informaci&oacute;n, o en quien este delegue.";
 choices[35][1] = "Los sistemas de informaci&oacute;n de categor&iacute;a MEDIA no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema de informaci&oacute;n, o en quien &eacute;ste delegue.";
 choices[35][2] = "Los sistemas de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, o inferior, no necesitar&aacute;n realizar una auditor&iacute;a. Bastar&aacute; una autoevaluaci&oacute;n realizada en cualquier caso por personal de seguridad ajeno al que administra el sistema de informaci&oacute;n.";
 choices[35][3] = "El ENS no considera suficiente una autoevaluaci&oacute;n en ning&uacute;n sistema de informaci&oacute;n de categor&iacute;a B&Aacute;SICA, MEDIA o ALTA.";
 answers[35] = 0;
 units[35] = ['46'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 1108. ";
 preguntaids[35] = 1108


//  Id pregunta: 1082 Año de creación de pregunta: 2016
 questions[36]= "37)  El modelo de reproducci&oacute;n del color CMYK :";
 choices[36]= new Array();
 choices[36][0] = "Es el modelo utilizado por la mayor&iacute;a de esc&aacute;neres.";
 choices[36][1] = "Es un modelo de tipo sustractivo.";
 choices[36][2] = "Se basa en la combinaci&oacute;n de tres colores: rojo, verde y azul.";
 choices[36][3] = "Es el modelo utilizado por la mayor&iacute;a de monitores.";
 answers[36] = 1;
 units[36] = ['80'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1082. ";
 preguntaids[36] = 1082


//  Id pregunta: 1095 Año de creación de pregunta: 2016
 questions[37]= "38)  AJAX es:";
 choices[37]= new Array();
 choices[37][0] = "Un lenguaje de programaci&oacute;n basado en la codificaci&oacute;n de programas en XML.";
 choices[37][1] = "Una filosof&iacute;a o t&eacute;cnica de desarrollo de aplicaciones web que se apoya, entre otras tecnolog&iacute;as, en XML y JavaScript.";
 choices[37][2] = "Un servidor de aplicaciones Internet desarrollado en Java cuyas p&aacute;ginas web est&aacute;n escritas en XHTML.";
 choices[37][3] = "Una alternativa a SOAP en la descripci&oacute;n de webservices.";
 answers[37] = 1;
 units[37] = ['74'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1095. ";
 preguntaids[37] = 1095


//  Id pregunta: 1107 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n lo dispuesto en el Real Decreto 1720/2007, indique cu&aacute;l de los siguientes aspectos deber&aacute; contener adicionalmente el documento de seguridad si fueran de aplicaci&oacute;n a los ficheros, las medidas de seguridad de nivel medio o las medidas de seguridad de nivel alto:";
 choices[38]= new Array();
 choices[38][0] = "Los controles peri&oacute;dicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento de seguridad.";
 choices[38][1] = "Funciones y obligaciones del personal en relaci&oacute;n con el tratamiento de los datos de car&aacute;cter personal incluidos en los ficheros.";
 choices[38][2] = "Los procedimientos de realizaci&oacute;n de copias de respaldo y de recuperaci&oacute;n de los datos en los ficheros o tratamientos automatizados.";
 choices[38][3] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante las incidencias.";
 answers[38] = 0;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 1107. ";
 preguntaids[38] = 1107


//  Id pregunta: 1065 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows";
 choices[39]= new Array();
 choices[39][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits.";
 choices[39][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[39][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[39][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[39] = 3;
 units[39] = ['58'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1065. ";
 preguntaids[39] = 1065


//  Id pregunta: 1088 Año de creación de pregunta: 2016
 questions[40]= "41)  SCRUM es una metodolog&iacute;a:";
 choices[40]= new Array();
 choices[40][0] = "Cl&aacute;sica.";
 choices[40][1] = "&Aacute;gil.";
 choices[40][2] = "Orientada a Objetos.";
 choices[40][3] = "Din&aacute;mica.";
 answers[40] = 1;
 units[40] = ['84'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1088. ";
 preguntaids[40] = 1088


//  Id pregunta: 1083 Año de creación de pregunta: 2016
 questions[41]= "42)  La Red SARA:";
 choices[41]= new Array();
 choices[41][0] = "Constituye la intranet corporativa de la Administraci&oacute;n General del Estado y de sus Organismos Aut&oacute;nomos y Entidades P&uacute;blicas dependientes.";
 choices[41][1] = "Es la Agrupaci&oacute;n de Servidores de Actualizaci&oacute;n de Redes Administrativas.";
 choices[41][2] = "Tiene por objeto ser la red de comunicaciones que interconecta las redes de todas las Administraciones P&uacute;blicas.";
 choices[41][3] = "Agrupa los Registros Administrativos Est&aacute;ndarizados en el &aacute;mbito de las Estados pertenecientes a la Uni&oacute;n Europea.";
 answers[41] = 2;
 units[41] = ['47'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 1083. ";
 preguntaids[41] = 1083


//  Id pregunta: 1117 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con el sistema de archivos distribuido Lustre:";
 choices[42]= new Array();
 choices[42][0] = "DSS (Distributed Storage Server).";
 choices[42][1] = "OST (Object Storage Target).";
 choices[42][2] = "OSS (Object Storage Server).";
 choices[42][3] = "MDS (MetaData Server).";
 answers[42] = 0;
 units[42] = ['53'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1117. ";
 preguntaids[42] = 1117


//  Id pregunta: 1076 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO corresponde a uno de los tipos de uso establecidos para el dominio p&uacute;blico radioel&eacute;ctrico?";
 choices[43]= new Array();
 choices[43][0] = "Uso Com&uacute;n";
 choices[43][1] = "Uso Especial";
 choices[43][2] = "Uso General.";
 choices[43][3] = "Uso Privativo.";
 answers[43] = 2;
 units[43] = ['121'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 1076. ";
 preguntaids[43] = 1076


//  Id pregunta: 1085 Año de creación de pregunta: 2016
 questions[44]= "45)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:";
 choices[44]= new Array();
 choices[44][0] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[44][1] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[44][2] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[44][3] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[44] = 1;
 units[44] = ['43'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 1085. ";
 preguntaids[44] = 1085


//  Id pregunta: 1111 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es el nivel de resoluci&oacute;n m&iacute;nimo que establece la NTI de Digitalizaci&oacute;n de Documentos para im&aacute;genes electr&oacute;nicas?";
 choices[45]= new Array();
 choices[45][0] = "200 p&iacute;xeles por pulgada (ppp), para im&aacute;genes obtenidas en blanco/negro, y escala de grises, y de 300 ppp para im&aacute;genes en color.";
 choices[45][1] = "300 ppp, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[45][2] = "300 ppp, para im&aacute;genes obtenidas en blanco/negro, y escala de grises, y de 200 ppp para im&aacute;genes en color.";
 choices[45][3] = "200 ppp, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 answers[45] = 3;
 units[45] = ['44'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 1111. ";
 preguntaids[45] = 1111


//  Id pregunta: 1100 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;En qu&eacute; zona del chip del DNI electr&oacute;nico se encuentra el certificado x509 de componente?";
 choices[46]= new Array();
 choices[46][0] = "Zona de seguridad.";
 choices[46][1] = "Zona aut&oacute;noma.";
 choices[46][2] = "Zona privada.";
 choices[46][3] = "Zona p&uacute;blica.";
 answers[46] = 3;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1100. ";
 preguntaids[46] = 1100


//  Id pregunta: 1106 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[47]= new Array();
 choices[47][0] = "6 meses.";
 choices[47][1] = "1 a&ntilde;o.";
 choices[47][2] = "2 a&ntilde;os.";
 choices[47][3] = "5 a&ntilde;os.";
 answers[47] = 1;
 units[47] = ['35'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 1106. ";
 preguntaids[47] = 1106


//  Id pregunta: 1053 Año de creación de pregunta: 2016
 questions[48]= "49)  En el ejercicio del Derecho de oposici&oacute;n, el responsable del fichero resolver&aacute; sobre la solicitud de oposici&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "En el plazo m&aacute;ximo de quince d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 choices[48][1] = "En el plazo m&aacute;ximo de veinte d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 choices[48][2] = "En el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud.";
 choices[48][3] = "En el plazo m&aacute;ximo de diez d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 answers[48] = 3;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 1053. ";
 preguntaids[48] = 1053


//  Id pregunta: 1102 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio El electr&oacute;nico, en el art&iacute;culo 45 detalla la prescripci&oacute;n para las sanciones e infracciones. Se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "Las infracciones muy graves prescribir&aacute;n a los 3 a&ntilde;os, las graves al a&ntilde;o y las leves a los 6 meses.";
 choices[49][1] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves a los seis meses.";
 choices[49][2] = "Las infracciones muy graves prescribir&aacute;n a los 5 a&ntilde;os, las graves a los 3 a&ntilde;os y las leves al a&ntilde;o.";
 choices[49][3] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves al a&ntilde;o.";
 answers[49] = 3;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 1102. ";
 preguntaids[49] = 1102


//  Id pregunta: 1112 Año de creación de pregunta: 2016
 questions[50]= "51)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[50]= new Array();
 choices[50][0] = "Confidencialidad.";
 choices[50][1] = "Integridad.";
 choices[50][2] = "Autenticidad.";
 choices[50][3] = "Trazabilidad.";
 answers[50] = 3;
 units[50] = ['46'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 1112. ";
 preguntaids[50] = 1112


//  Id pregunta: 1086 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[51]= new Array();
 choices[51][0] = "UTP - Unshielded Twisted Pair.";
 choices[51][1] = "STP - Shielded Twisted Pair.";
 choices[51][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[51][3] = "FTP - Foiled Twisted Pair.";
 answers[51] = 2;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 1086. ";
 preguntaids[51] = 1086


//  Id pregunta: 1101 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique la afirmaci&oacute;n correcta respecto a XAdES-T:";
 choices[52]= new Array();
 choices[52][0] = "Contiene la forma b&aacute;sica de firma que cumple los requisitos legales de la Directiva para firma electr&oacute;nica avanzada, informaci&oacute;n sobre la pol&iacute;tica de firma (opcional) y a&ntilde;ade un campo de sellado de tiempo para proteger contra el repudio.";
 choices[52][1] = "Es la forma b&aacute;sica de firma a la que se la ha a&ntilde;adido informaci&oacute;n sobre la pol&iacute;tica de firma.";
 choices[52][2] = "A&ntilde;ade a la forma b&aacute;sica de firma la posibilidad de timestamping peri&oacute;dico de documentos archivados para prevenir que puedan ser comprometidos debido a la debilidad de la firma durante un periodo largo de almacenamiento.";
 choices[52][3] = "A&ntilde;ade sellos de tiempo a las referencias introducidas por XAdES-C para evitar que pueda verse comprometida en el futuro una cadena de certificados.";
 answers[52] = 0;
 units[52] = ['77'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1101. ";
 preguntaids[52] = 1101


//  Id pregunta: 1123 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas permitir&iacute;a realizar un montaje de un CD-ROM en un sistema operativo Linux:";
 choices[53]= new Array();
 choices[53][0] = "setup -t device/cdrom/cab1";
 choices[53][1] = "install -t iso9660 /dev/hdb /mnt/cdrom";
 choices[53][2] = "mount -t iso9660 /dev/hdb /mnt/cdrom";
 choices[53][3] = "grep -t iso9660 /dev/hdb /mnt/cdrom";
 answers[53] = 2;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1123. ";
 preguntaids[53] = 1123


//  Id pregunta: 1110 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale, de los siguientes est&aacute;ndares, cu&aacute;l NO est&aacute; recogido en la Norma T&eacute;cnica de Interoperabilidad NTI de Cat&aacute;logo de est&aacute;ndares en la categor&iacute;a de &quot;Formatos ficheros - Cartograf&iacute;a y sistemas de informaci&oacute;n geogr&aacute;fica&quot;:";
 choices[54]= new Array();
 choices[54][0] = "SVG";
 choices[54][1] = "WFS";
 choices[54][2] = "GML";
 choices[54][3] = "WMS";
 answers[54] = 0;
 units[54] = ['44'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 1110. ";
 preguntaids[54] = 1110


//  Id pregunta: 1077 Año de creación de pregunta: 2016
 questions[55]= "56)  La regla de &quot;Actualizaci&oacute;n de Vistas&quot; (Regla 6) de Codd establece que:";
 choices[55]= new Array();
 choices[55][0] = "Todas las vistas actualizadas deben actualizarse tambi&eacute;n en el cat&aacute;logo de datos.";
 choices[55][1] = "Todas las vistas que son te&oacute;ricamente actualizables se pueden actualizar por el sistema.";
 choices[55][2] = "La actualizaci&oacute;n de una vista se realiza manteniendo la integridad del conjunto de informaci&oacute;n del sistema.";
 choices[55][3] = "Todas las vistas que son actualizadas no requieren un cambio en su estructura l&oacute;gica.";
 answers[55] = 1;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1077. ";
 preguntaids[55] = 1077


//  Id pregunta: 1104 Año de creación de pregunta: 2016
 questions[56]= "57)  La prestaci&oacute;n de los servicios de validaci&oacute;n del DNI electr&oacute;nico se realiza en base a:";
 choices[56]= new Array();
 choices[56][0] = "Online Certificate Status Protocol (OCSP).";
 choices[56][1] = "Online Services Protocol (OSP).";
 choices[56][2] = "Services Status Protocol (SSP).";
 choices[56][3] = "Online Status Services Certificate (OSSC).";
 answers[56] = 0;
 units[56] = ['78'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1104. ";
 preguntaids[56] = 1104


//  Id pregunta: 1063 Año de creación de pregunta: 2016
 questions[57]= "58)  En el &aacute;mbito del modelo COCOMO, un proyecto de tipo empotrado:";
 choices[57]= new Array();
 choices[57][0] = "Es un proyecto relativamente peque&ntilde;o y sencillo, con poca innovaci&oacute;n tecnol&oacute;gica.";
 choices[57][1] = "Es un proyecto a ser incrustado en dispositivos m&oacute;viles, donde los recursos son escasos.";
 choices[57][2] = "Es un proyecto de nivel intermedio en tama&ntilde;o, complejidad y sofisticaci&oacute;n.";
 choices[57][3] = "Es un proyecto de un tama&ntilde;o y complejidad francamente elevado, donde los requisitos hardware y software son muy r&iacute;gidos.";
 answers[57] = 3;
 units[57] = ['94'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 1063. ";
 preguntaids[57] = 1063


//  Id pregunta: 1067 Año de creación de pregunta: 2016
 questions[58]= "59)  Las denominadas &quot;Pautas de accesibilidad al contenido en la web&quot; (WCAG 2.0), se organizan en cuatro principios b&aacute;sicos. A saber:";
 choices[58]= new Array();
 choices[58][0] = "Perceptible; Robusto; Amable y Comprensible.";
 choices[58][1] = "Operable; Adaptable; Comprensible y Maduro.";
 choices[58][2] = "Perceptible; Operable; Comprensible y Robusto.";
 choices[58][3] = "Operable; Amable; Maduro y Comprensible.";
 answers[58] = 2;
 units[58] = ['42'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 1067. ";
 preguntaids[58] = 1067


//  Id pregunta: 1072 Año de creación de pregunta: 2016
 questions[59]= "60)  La norma ISO 9004 hace referencia a:";
 choices[59]= new Array();
 choices[59][0] = "Recomendaciones para la mejora del desempe&ntilde;o en sistemas de gesti&oacute;n de la calidad.";
 choices[59][1] = "Gu&iacute;a relativa a las auditor&iacute;as de la gesti&oacute;n de la calidad y de la gesti&oacute;n medioambiental.";
 choices[59][2] = "Requisitos de los sistemas de gesti&oacute;n de la calidad.";
 choices[59][3] = "Fundamentos y vocabulario en el &aacute;mbito de los sistemas de gesti&oacute;n de calidad.";
 answers[59] = 0;
 units[59] = ['98'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 1072. ";
 preguntaids[59] = 1072


//  Id pregunta: 1064 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[60]= new Array();
 choices[60][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[60][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[60][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[60][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en dos cada canal.";
 answers[60] = 2;
 units[60] = ['117'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1064. ";
 preguntaids[60] = 1064


//  Id pregunta: 1055 Año de creación de pregunta: 2016
 questions[61]= "62)  Identificar que protocolo no est&aacute; dise&ntilde;ado espec&iacute;ficamente para la extensi&oacute;n de las SAN sobre protocolo IP:";
 choices[61]= new Array();
 choices[61][0] = "Iftp";
 choices[61][1] = "iSCSI";
 choices[61][2] = "FCIP";
 choices[61][3] = "iFCP";
 answers[61] = 0;
 units[61] = ['53'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1055. ";
 preguntaids[61] = 1055


//  Id pregunta: 1060 Año de creación de pregunta: 2016
 questions[62]= "63)  Seleccione la frase correcta acerca de los sistemas gestores de bases de datos y los modelos de datos que emplean.";
 choices[62]= new Array();
 choices[62][0] = "Independientemente del modelo de datos, la capacidad de un SGBD para manejar accesos concurrentes es imprescindible para la &quot;Consistencia&quot; del &quot;ACID test&quot;.";
 choices[62][1] = "El modelo de datos en red permite recuperar bloques de varios registros mediante el uso de punteros.";
 choices[62][2] = "El modelo jer&aacute;rquico es una variante de los modelos en red que elimina las relaciones N:M.";
 choices[62][3] = "El modelo relacional incorpora restricciones inherentes al mismo que se denominan restricciones sem&aacute;nticas.";
 answers[62] = 2;
 units[62] = ['60'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 1060. ";
 preguntaids[62] = 1060


//  Id pregunta: 1116 Año de creación de pregunta: 2016
 questions[63]= "64)  La arquitectura GRID est&aacute; compuesta por capas. La capa m&aacute;s baja y donde se encuentran los recursos computacionales y de almacenamiento que ser&aacute;n compartidos por los protocolos grid se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Fabric.";
 choices[63][1] = "Connectivity.";
 choices[63][2] = "Resource.";
 choices[63][3] = "Collective.";
 answers[63] = 0;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1116. ";
 preguntaids[63] = 1116


//  Id pregunta: 1124 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes NO es una distribuci&oacute;n LINUX?";
 choices[64]= new Array();
 choices[64][0] = "Fedora.";
 choices[64][1] = "Mandriva.";
 choices[64][2] = "Solaris.";
 choices[64][3] = "Ubuntu.";
 answers[64] = 2;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1124. ";
 preguntaids[64] = 1124


//  Id pregunta: 1087 Año de creación de pregunta: 2016
 questions[65]= "66)  Indicar cu&aacute;l de las siguientes NO es un tipo de georreferenciaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Directa";
 choices[65][1] = "Discreta.";
 choices[65][2] = "Indirecta.";
 choices[65][3] = "Posicional.";
 answers[65] = 3;
 units[65] = ['71'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1087. ";
 preguntaids[65] = 1087


//  Id pregunta: 1078 Año de creación de pregunta: 2016
 questions[66]= "67)  Referente a las radiaciones electromagn&eacute;ticas esp&uacute;reas emitidas por los equipos basados en tecnolog&iacute;as de la informaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "TEMPEST es el acr&oacute;nimo de Telecommunications Electronics Material Protected from Emanating Spurious Transmissions.";
 choices[66][1] = "En el &aacute;mbito del Ministerio de Defensa la certificaci&oacute;n TEMPEST es emitida por el CCN (Centro Criptol&oacute;gico Nacional).";
 choices[66][2] = "El nivel 3 de certificaci&oacute;n TEMPEST corresponde a equipos cuyas radiaciones son imperceptibles a distancias superiores a los 15 metros.";
 choices[66][3] = "Se pueden prevenir apantallando los equipos mediante una jaula de Faraday.";
 answers[66] = 1;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1078. ";
 preguntaids[66] = 1078


//  Id pregunta: 1090 Año de creación de pregunta: 2016
 questions[67]= "68)  De conformidad a lo previsto en el art&iacute;culo 22 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[67]= new Array();
 choices[67][0] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haberse recogido para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al r&eacute;gimen general de la Ley Org&aacute;nica citada.";
 choices[67][1] = "La recogida y tratamiento de datos de car&aacute;cter personal obtenidos durante una actuaci&oacute;n de las Fuerzas y Cuerpos de Seguridad podr&aacute;n incluirse, previa autorizaci&oacute;n del Consejo General del Poder Judicial, en todos los ficheros de titularidad p&uacute;blica.";
 choices[67][2] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad, ya sea con fines administrativos o policiales, se rigen por las previsiones contenidas en la Ley Org&aacute;nica 2/2006, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad del Estado.";
 choices[67][3] = "En ning&uacute;n caso pueden ser tratados los datos de car&aacute;cter personal creados por las Fuerzas y Cuerpos de Seguridad del Estado para fines administrativos.";
 answers[67] = 0;
 units[67] = ['35'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 1090. ";
 preguntaids[67] = 1090


//  Id pregunta: 1058 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale qu&eacute; afirmaci&oacute;n de las siguientes es cierta en relaci&oacute;n al Valor Actual Neto (VAN) y la Tasa Interna de Rentabilidad (TIR):";
 choices[68]= new Array();
 choices[68][0] = "Si el VAN es negativo, la TIR de la inversi&oacute;n es superior al coste del capital.";
 choices[68][1] = "En una inversi&oacute;n con VAN negativo, la TIR de la inversi&oacute;n es igual al coste del capital.";
 choices[68][2] = "Si el VAN positivo, la TIR de la inversi&oacute;n es inferior al coste del capital.";
 choices[68][3] = "En una inversi&oacute;n con VAN positivo, la TIR ser&aacute; superior al coste del capital.";
 answers[68] = 3;
 units[68] = ['40'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 1058. ";
 preguntaids[68] = 1058


//  Id pregunta: 1097 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n ITILv3, para qu&eacute; se utiliza el modelo RACI?";
 choices[69]= new Array();
 choices[69][0] = "Para documentar los roles y relaciones entre las partes interesadas en un proceso o actividad.";
 choices[69][1] = "Para definir los requisitos de un nuevo proceso o servicio.";
 choices[69][2] = "Para analizar el impacto en el negocio de una incidencia.";
 choices[69][3] = "Para crear un Cuadro de Mando Integral que muestre el estado completo de la gesti&oacute;n del servicio.";
 answers[69] = 0;
 units[69] = ['101'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 1097. ";
 preguntaids[69] = 1097


//  Id pregunta: 1071 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[70]= new Array();
 choices[70][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[70][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[70][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[70][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[70] = 3;
 units[70] = ['49'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1071. ";
 preguntaids[70] = 1071


//  Id pregunta: 1105 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[71]= new Array();
 choices[71][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[71][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[71][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[71][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[71] = 3;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 1105. ";
 preguntaids[71] = 1105


//  Id pregunta: 1066 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes sistemas proporciona la funcionalidad de Single Sign-On basada en tickets?";
 choices[72]= new Array();
 choices[72][0] = "KERBEROS.";
 choices[72][1] = "STORK.";
 choices[72][2] = "SAML.";
 choices[72][3] = "OPENID.";
 answers[72] = 0;
 units[72] = ['120'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 1066. ";
 preguntaids[72] = 1066


//  Id pregunta: 1057 Año de creación de pregunta: 2016
 questions[73]= "74)  El Texto Refundido de la Ley de la Protecci&oacute;n Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[73]= new Array();
 choices[73][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[73][1] = "50 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[73][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[73][3] = "50 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la personalidad del autor.";
 answers[73] = 2;
 units[73] = ['41'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 1057. ";
 preguntaids[73] = 1057


//  Id pregunta: 1089 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[74]= new Array();
 choices[74][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos.";
 choices[74][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[74][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[74][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[74] = 3;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1089. ";
 preguntaids[74] = 1089


