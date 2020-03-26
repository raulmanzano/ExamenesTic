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


//  Id pregunta: 8884 Año de creación de pregunta: 2013
 questions[1]= "2)  El diagrama de estructura de datos (DED):";
 choices[1]= new Array();
 choices[1][0] = "Representa el modelo l&oacute;gico de datos.";
 choices[1][1] = "Es &uacute;nico para cada sistema de informaci&oacute;n.";
 choices[1][2] = "Se conoce tambi&eacute;n como Diccionario de Datos.";
 choices[1][3] = "Define un conjunto de objetos que comparten una misma estructura y comportamiento com&uacute;n.";
 answers[1] = 0;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 8884. Examen AGE TIC A1 2011";
 preguntaids[1] = 8884


//  Id pregunta: 1098 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a la tecnolog&iacute;a WIFI:";
 choices[2]= new Array();
 choices[2][0] = "Los equipos WIFI no necesitan adaptarse a ninguna normativa.";
 choices[2][1] = "Los ayuntamientos pueden comercializar WIFI siempre y cuando se hayan inscrito en el registro de operadores.";
 choices[2][2] = "Los operadores de telecomunicaciones tienen que pedir una licencia para la utilizaci&oacute;n de la banda WIFI, que les permite comercializar este servicio.";
 choices[2][3] = "Los equipos WIFI utilizan una banda de uso com&uacute;n.";
 answers[2] = 3;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 1098. ";
 preguntaids[2] = 1098


//  Id pregunta: 1067 Año de creación de pregunta: 2016
 questions[3]= "4)  Las denominadas &quot;Pautas de accesibilidad al contenido en la web&quot; (WCAG 2.0), se organizan en cuatro principios b&aacute;sicos. A saber:";
 choices[3]= new Array();
 choices[3][0] = "Perceptible; Robusto; Amable y Comprensible.";
 choices[3][1] = "Operable; Adaptable; Comprensible y Maduro.";
 choices[3][2] = "Perceptible; Operable; Comprensible y Robusto.";
 choices[3][3] = "Operable; Amable; Maduro y Comprensible.";
 answers[3] = 2;
 units[3] = ['42'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 1067. ";
 preguntaids[3] = 1067


//  Id pregunta: 1092 Año de creación de pregunta: 2016
 questions[4]= "5)  Cu&aacute;l de las siguientes afirmaciones relativa a las velocidades m&aacute;ximas est&aacute;ndar de transferencia en conexiones con dispositivos externos es correcta:";
 choices[4]= new Array();
 choices[4][0] = "En Firewire 1600 es 400 MB/s.";
 choices[4][1] = "En USB 1.0 es 1,5 MB/s.";
 choices[4][2] = "En Thunderbolt es 1800 MB/s.";
 choices[4][3] = "En USB 3.0 es 600 MB/s.";
 answers[4] = 3;
 units[4] = ['51'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1092. ";
 preguntaids[4] = 1092


//  Id pregunta: 8837 Año de creación de pregunta: 2013
 questions[5]= "6)  El servicio universal de telecomunicaciones es:";
 choices[5]= new Array();
 choices[5][0] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza en un &aacute;mbito compartido entre varios usuarios, con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[5][1] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[5][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a los usuarios con las rentas m&aacute;s bajas con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[5][3] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los centros de formaci&oacute;n con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada.";
 answers[5] = 1;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 8837. Examen TIC A1 2011";
 preguntaids[5] = 8837


//  Id pregunta: 8892 Año de creación de pregunta: 2013
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objetos?:";
 choices[6]= new Array();
 choices[6][0] = "UMTS.";
 choices[6][1] = "JINI.";
 choices[6][2] = "VORBIS.";
 choices[6][3] = "CLOS.";
 answers[6] = 1;
 units[6] = ['85'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 8892. Examen AGE TIC A1 2011";
 preguntaids[6] = 8892


//  Id pregunta: 1080 Año de creación de pregunta: 2016
 questions[7]= "8)  En el contexto de los sistemas Datawarehouse y DataMart seleccione la frase correcta.";
 choices[7]= new Array();
 choices[7][0] = "El an&aacute;lisis dimensional de los datos corporativos mediante t&eacute;cnicas de OLAP no puede implementarse sobre bases de datos relacionales.";
 choices[7][1] = "Las bases de datos relacionales incorporan de manera estructural la jerarqu&iacute;a entre sucesivos niveles de una dimensi&oacute;n.";
 choices[7][2] = "Los modelos en copo de nieve utilizan tablas de hechos y tablas de dimensiones para el an&aacute;lisis de los datos corporativos.";
 choices[7][3] = "Los almacenes de datos departamentales (DataMart), a diferencia de los almacenes corporativos (Datawarehouse), no requieren procesos previos de ETL (extracci&oacute;n, transformaci&oacute;n y carga).";
 answers[7] = 2;
 units[7] = ['72'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1080. ";
 preguntaids[7] = 1080


//  Id pregunta: 8888 Año de creación de pregunta: 2013
 questions[8]= "9)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[8]= new Array();
 choices[8][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[8][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[8][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[8][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[8] = 2;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 8888. Examen AGE TIC A1 2011";
 preguntaids[8] = 8888


//  Id pregunta: 1051 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el modelo de Mc Call, &iquest;cu&aacute;l de las siguientes NO es una medida directa aplicable a un atributo relativo a un producto?";
 choices[9]= new Array();
 choices[9][0] = "Estructuraci&oacute;n.";
 choices[9][1] = "Coste.";
 choices[9][2] = "Modularidad.";
 choices[9][3] = "Acoplamiento.";
 answers[9] = 2;
 units[9] = ['93'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1051. ";
 preguntaids[9] = 1051


//  Id pregunta: 8782 Año de creación de pregunta: 2013
 questions[10]= "11)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[10]= new Array();
 choices[10][0] = "Subsistema campus";
 choices[10][1] = "Subsistema horizontal";
 choices[10][2] = "Subsistema intermodal";
 choices[10][3] = "Subsistema troncal";
 answers[10] = 3;
 units[10] = ['104'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8782. Examen TIC A1 AGE 2011";
 preguntaids[10] = 8782


//  Id pregunta: 1073 Año de creación de pregunta: 2016
 questions[11]= "12)  Los cifradores de clave secreta:";
 choices[11]= new Array();
 choices[11][0] = "Pueden encadenarse (cifrado producto) produciendo un criptograma m&aacute;s robusto que el obtenido al aplicar un &uacute;nico cifrado.";
 choices[11][1] = "A igualdad de longitud de clave son m&aacute;s robustos que los de clave p&uacute;blica.";
 choices[11][2] = "Su seguridad recae en el secreto del dise&ntilde;o.";
 choices[11][3] = "Se usan en los sistemas operativos Windows XP y 7 para proteger las contrase&ntilde;as de los usuarios.";
 answers[11] = 1;
 units[11] = ['76'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 1073. ";
 preguntaids[11] = 1073


//  Id pregunta: 8881 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica de las transacciones?";
 choices[12]= new Array();
 choices[12][0] = "Concurrencia";
 choices[12][1] = "Durabilidad";
 choices[12][2] = "Aislamiento";
 choices[12][3] = "Atomicidad";
 answers[12] = 0;
 units[12] = ['60'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8881. Examen AGE TIC A1 2011";
 preguntaids[12] = 8881


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[13]= "14)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[13]= new Array();
 choices[13][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[13][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[13][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[13][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[13] = 2;
 units[13] = ['7'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 1062. ";
 preguntaids[13] = 1062


//  Id pregunta: 1050 Año de creación de pregunta: 2016
 questions[14]= "15)  Los certificados de clave p&uacute;blica";
 choices[14]= new Array();
 choices[14][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[14][1] = "Tienen en torno a 1 Mbytes.";
 choices[14][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA.";
 choices[14][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[14] = 0;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1050. ";
 preguntaids[14] = 1050


//  Id pregunta: 8586 Año de creación de pregunta: 2013
 questions[15]= "16)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[15]= new Array();
 choices[15][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[15][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[15][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[15][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[15] = 1;
 units[15] = ['49'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8586. Examen TIC-A1 2011";
 preguntaids[15] = 8586


//  Id pregunta: 1064 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[16]= new Array();
 choices[16][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[16][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[16][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[16][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en dos cada canal.";
 answers[16] = 2;
 units[16] = ['117'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1064. ";
 preguntaids[16] = 1064


//  Id pregunta: 1063 Año de creación de pregunta: 2016
 questions[17]= "18)  En el &aacute;mbito del modelo COCOMO, un proyecto de tipo empotrado:";
 choices[17]= new Array();
 choices[17][0] = "Es un proyecto relativamente peque&ntilde;o y sencillo, con poca innovaci&oacute;n tecnol&oacute;gica.";
 choices[17][1] = "Es un proyecto a ser incrustado en dispositivos m&oacute;viles, donde los recursos son escasos.";
 choices[17][2] = "Es un proyecto de nivel intermedio en tama&ntilde;o, complejidad y sofisticaci&oacute;n.";
 choices[17][3] = "Es un proyecto de un tama&ntilde;o y complejidad francamente elevado, donde los requisitos hardware y software son muy r&iacute;gidos.";
 answers[17] = 3;
 units[17] = ['94'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 1063. ";
 preguntaids[17] = 1063


//  Id pregunta: 1090 Año de creación de pregunta: 2016
 questions[18]= "19)  De conformidad a lo previsto en el art&iacute;culo 22 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[18]= new Array();
 choices[18][0] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haberse recogido para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al r&eacute;gimen general de la Ley Org&aacute;nica citada.";
 choices[18][1] = "La recogida y tratamiento de datos de car&aacute;cter personal obtenidos durante una actuaci&oacute;n de las Fuerzas y Cuerpos de Seguridad podr&aacute;n incluirse, previa autorizaci&oacute;n del Consejo General del Poder Judicial, en todos los ficheros de titularidad p&uacute;blica.";
 choices[18][2] = "Los ficheros creados por las Fuerzas y Cuerpos de Seguridad, ya sea con fines administrativos o policiales, se rigen por las previsiones contenidas en la Ley Org&aacute;nica 2/2006, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad del Estado.";
 choices[18][3] = "En ning&uacute;n caso pueden ser tratados los datos de car&aacute;cter personal creados por las Fuerzas y Cuerpos de Seguridad del Estado para fines administrativos.";
 answers[18] = 0;
 units[18] = ['35'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 1090. ";
 preguntaids[18] = 1090


//  Id pregunta: 1079 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;C&oacute;mo se puede validar documentos en XML?";
 choices[19]= new Array();
 choices[19][0] = "Usando XSL Schema.";
 choices[19][1] = "Usando XSLT.";
 choices[19][2] = "Usando un Applet de validaci&oacute;n.";
 choices[19][3] = "Usando un DTD.";
 answers[19] = 3;
 units[19] = ['74'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1079. ";
 preguntaids[19] = 1079


//  Id pregunta: 8672 Año de creación de pregunta: 2013
 questions[20]= "21)  &iquest;En qu&eacute; se parece CICS (Customer Information Control System) e IMS (Information Management System)?";
 choices[20]= new Array();
 choices[20][0] = "Ambos son sistemas transaccionales";
 choices[20][1] = "No tienen nada que ver";
 choices[20][2] = "Son protocolos de acceso a ficheros";
 choices[20][3] = "Son correctas A) y C)";
 answers[20] = 0;
 units[20] = ['54'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8672. Examen TIC A1 2011";
 preguntaids[20] = 8672


//  Id pregunta: 1046 Año de creación de pregunta: 2016
 questions[21]= "22)  En virtud del Derecho de Acceso a que se refiere el art&iacute;culo 15 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[21]= new Array();
 choices[21][0] = "El interesado, previo pago de la tasa correspondiente, tendr&aacute; derecho a obtener informaci&oacute;n sobre sus datos de car&aacute;cter personal sometidos a tratamiento.";
 choices[21][1] = "El interesado tendr&aacute; derecho a que se le faciliten gratuitamente las claves de acceso o c&oacute;digos para el acceso a sus datos de car&aacute;cter personal o profesional que est&eacute;n siendo tratados.";
 choices[21][2] = "El interesado tendr&aacute; derecho a obtener informaci&oacute;n gratuita de sus datos de car&aacute;cter personal sometidos a tratamiento, pero en ning&uacute;n caso de las comunicaciones que se prevean hacer de ellos.";
 choices[21][3] = "El derecho de acceso a que se refiere este art&iacute;culo s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a doce meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute;n ejercitarlo antes.";
 answers[21] = 3;
 units[21] = ['35'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 1046. ";
 preguntaids[21] = 1046


//  Id pregunta: 1076 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO corresponde a uno de los tipos de uso establecidos para el dominio p&uacute;blico radioel&eacute;ctrico?";
 choices[22]= new Array();
 choices[22][0] = "Uso Com&uacute;n";
 choices[22][1] = "Uso Especial";
 choices[22][2] = "Uso General.";
 choices[22][3] = "Uso Privativo.";
 answers[22] = 2;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1076. ";
 preguntaids[22] = 1076


//  Id pregunta: 1074 Año de creación de pregunta: 2016
 questions[23]= "24)  En el &aacute;mbito de la auditor&iacute;a de sistemas se denominan hallazgos a:";
 choices[23]= new Array();
 choices[23][0] = "Las tareas orientadas a comprobar que se cumplen determinados procesos de control o procedimientos establecidos.";
 choices[23][1] = "Los criterios, condiciones y efectos que permiten documentar los problemas encontrados";
 choices[23][2] = "Las tareas que permiten al equipo auditor entender el entorno de los sistemas a auditar.";
 choices[23][3] = "Los m&eacute;todos aplicados para conseguir el objetivo de la auditor&iacute;a.";
 answers[23] = 1;
 units[23] = ['36'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 1074. ";
 preguntaids[23] = 1074


//  Id pregunta: 1047 Año de creación de pregunta: 2016
 questions[24]= "25)  En relaci&oacute;n con los entornos de workflow indique la afirmaci&oacute;n correcta:";
 choices[24]= new Array();
 choices[24][0] = "A partir de la representaci&oacute;n de un proceso en notaci&oacute;n BPMN puede obtenerse su especificaci&oacute;n en BPEL y viceversa.";
 choices[24][1] = "WS-BPEL v 2.0 ya permite incorporar al modelado los procesos manuales.";
 choices[24][2] = "BPMN incluye tanto el modelado de la secuencia de actividades como los datos y mensajes intercambiados entre los participantes.";
 choices[24][3] = "XPDL y BPEL son implementaciones distintas de BPMN, XPDL basada en XML y BPEL en web services.";
 answers[24] = 2;
 units[24] = ['86'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 1047. ";
 preguntaids[24] = 1047


//  Id pregunta: 1060 Año de creación de pregunta: 2016
 questions[25]= "26)  Seleccione la frase correcta acerca de los sistemas gestores de bases de datos y los modelos de datos que emplean.";
 choices[25]= new Array();
 choices[25][0] = "Independientemente del modelo de datos, la capacidad de un SGBD para manejar accesos concurrentes es imprescindible para la &quot;Consistencia&quot; del &quot;ACID test&quot;.";
 choices[25][1] = "El modelo de datos en red permite recuperar bloques de varios registros mediante el uso de punteros.";
 choices[25][2] = "El modelo jer&aacute;rquico es una variante de los modelos en red que elimina las relaciones N:M.";
 choices[25][3] = "El modelo relacional incorpora restricciones inherentes al mismo que se denominan restricciones sem&aacute;nticas.";
 answers[25] = 2;
 units[25] = ['60'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1060. ";
 preguntaids[25] = 1060


//  Id pregunta: 1086 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[26]= new Array();
 choices[26][0] = "UTP - Unshielded Twisted Pair.";
 choices[26][1] = "STP - Shielded Twisted Pair.";
 choices[26][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[26][3] = "FTP - Foiled Twisted Pair.";
 answers[26] = 2;
 units[26] = ['104'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1086. ";
 preguntaids[26] = 1086


//  Id pregunta: 1095 Año de creación de pregunta: 2016
 questions[27]= "28)  AJAX es:";
 choices[27]= new Array();
 choices[27][0] = "Un lenguaje de programaci&oacute;n basado en la codificaci&oacute;n de programas en XML.";
 choices[27][1] = "Una filosof&iacute;a o t&eacute;cnica de desarrollo de aplicaciones web que se apoya, entre otras tecnolog&iacute;as, en XML y JavaScript.";
 choices[27][2] = "Un servidor de aplicaciones Internet desarrollado en Java cuyas p&aacute;ginas web est&aacute;n escritas en XHTML.";
 choices[27][3] = "Una alternativa a SOAP en la descripci&oacute;n de webservices.";
 answers[27] = 1;
 units[27] = ['74'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 1095. ";
 preguntaids[27] = 1095


//  Id pregunta: 1084 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la frase correcta acerca de los sistemas CRM,&rdquo;Customer relationship management&rdquo; y ERP &ldquo;Enterprise resource planning&rdquo;.";
 choices[28]= new Array();
 choices[28][0] = "La contabilidad financiera es un m&oacute;dulo caracter&iacute;stico de los sistemas CRM anal&iacute;ticos.";
 choices[28][1] = "El uso de t&eacute;cnicas de data mining en los CRM operacionales permite analizar tendencias en el comportamiento de los clientes.";
 choices[28][2] = "Los sistemas ERP son sistemas transaccionales que se implementan &uacute;nicamente sobre arquitecturas cliente servidor.";
 choices[28][3] = "Las parametrizaciones incorporadas en los ERP los hacen m&aacute;s flexibles pero impiden su actualizaci&oacute;n.";
 answers[28] = 1;
 units[28] = ['69'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1084. ";
 preguntaids[28] = 1084


//  Id pregunta: 8587 Año de creación de pregunta: 2013
 questions[29]= "30)  La arquitectura de un ordenador viene definida por";
 choices[29]= new Array();
 choices[29][0] = "El repertorio de instrucciones";
 choices[29][1] = "El tipo de direccionamientos";
 choices[29][2] = "El tipo de operandos";
 choices[29][3] = "Todas las anteriores";
 answers[29] = 3;
 units[29] = ['56'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8587. Examen TIC-A1 2011";
 preguntaids[29] = 8587


//  Id pregunta: 1089 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[30]= new Array();
 choices[30][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos.";
 choices[30][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[30][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[30][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[30] = 3;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1089. ";
 preguntaids[30] = 1089


//  Id pregunta: 8671 Año de creación de pregunta: 2013
 questions[31]= "32)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[31]= new Array();
 choices[31][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[31][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[31][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso, es equivalente a replicaci&oacute;n discreta.";
 choices[31][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[31] = 3;
 units[31] = ['53'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8671. Examen TIC A1 2011";
 preguntaids[31] = 8671


//  Id pregunta: 1072 Año de creación de pregunta: 2016
 questions[32]= "33)  La norma ISO 9004 hace referencia a:";
 choices[32]= new Array();
 choices[32][0] = "Recomendaciones para la mejora del desempe&ntilde;o en sistemas de gesti&oacute;n de la calidad.";
 choices[32][1] = "Gu&iacute;a relativa a las auditor&iacute;as de la gesti&oacute;n de la calidad y de la gesti&oacute;n medioambiental.";
 choices[32][2] = "Requisitos de los sistemas de gesti&oacute;n de la calidad.";
 choices[32][3] = "Fundamentos y vocabulario en el &aacute;mbito de los sistemas de gesti&oacute;n de calidad.";
 answers[32] = 0;
 units[32] = ['98'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 1072. ";
 preguntaids[32] = 1072


//  Id pregunta: 8585 Año de creación de pregunta: 2013
 questions[33]= "34)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[33]= new Array();
 choices[33][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[33][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[33][2] = "El balanceo de carga solo puede implementarse por software";
 choices[33][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[33] = 2;
 units[33] = ['50'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8585. Examen TIC-A1 2011";
 preguntaids[33] = 8585


//  Id pregunta: 8891 Año de creación de pregunta: 2013
 questions[34]= "35)  Se&ntilde;ale la frase correcta acerca de los diferentes modelos de representaci&oacute;n del conocimiento:";
 choices[34]= new Array();
 choices[34][0] = "En los procesos de inferencia en redes sem&aacute;nticas el uso de la herencia permite efectuar emparejamientos sin necesidad de un homomorfismo total entre la red pregunta y la red respuesta.";
 choices[34][1] = "La utilizaci&oacute;n de marcos como modo de representaci&oacute;n de conocimiento permite asociar a un concepto un conjunto de atributos est&aacute;ticos, cuya actualizaci&oacute;n o modificaci&oacute;n no forma parte del modelo.";
 choices[34][2] = "El algoritmo de extracci&oacute;n de la ra&iacute;z cuadrada de un n&uacute;mero es un ejemplo de representaci&oacute;n declarativa de conocimiento.";
 choices[34][3] = "En una red neuronal entrenada los pesos de los enlaces entre neuronas dependen solamente del algoritmo de entrenamiento empleado.";
 answers[34] = 0;
 units[34] = ['68'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8891. Examen AGE TIC A1 2011";
 preguntaids[34] = 8891


//  Id pregunta: 8890 Año de creación de pregunta: 2013
 questions[35]= "36)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Sobrecarga.";
 choices[35][1] = "Herencia.";
 choices[35][2] = "Extensibilidad.";
 choices[35][3] = "Polimorfismo.";
 answers[35] = 3;
 units[35] = ['85'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 8890. Examen AGE TIC A1 2011";
 preguntaids[35] = 8890


//  Id pregunta: 1075 Año de creación de pregunta: 2016
 questions[36]= "37)  Identifique la caracter&iacute;stica que NO forma parte de los principios de dise&ntilde;o SOA:";
 choices[36]= new Array();
 choices[36][0] = "Interconexi&oacute;n";
 choices[36][1] = ". Encapsulaci&oacute;n";
 choices[36][2] = ". Reutilizaci&oacute;n.";
 choices[36][3] = "Descubrimiento.";
 answers[36] = 0;
 units[36] = ['55'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 1075. ";
 preguntaids[36] = 1075


//  Id pregunta: 1081 Año de creación de pregunta: 2016
 questions[37]= "38)  Entre los objetivos del dise&ntilde;o de BPEL NO se encuentra:";
 choices[37]= new Array();
 choices[37][0] = "Proveer sistemas de control jer&aacute;rquicos y de estilo gr&aacute;fico, que permitan que su uso sea lo m&aacute;s fusionado posible.";
 choices[37][1] = "Soportar un m&eacute;todo de identificaci&oacute;n de instancias de procesos que permita la definici&oacute;n de identificadores a nivel de mensajes de aplicaciones.";
 choices[37][2] = "Definir procesos de negocio utilizando un lenguaje basado en XML.";
 choices[37][3] = "Definir una interpretaci&oacute;n gr&aacute;fica de los procesos.";
 answers[37] = 3;
 units[37] = ['86'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1081. ";
 preguntaids[37] = 1081


//  Id pregunta: 8886 Año de creación de pregunta: 2013
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del patr&oacute;n de dise&ntilde;o MVC (Modelo, Vista, Controlador):";
 choices[38]= new Array();
 choices[38][0] = "A pesar de su amplia difusi&oacute;n con las arquitecturas Web, naci&oacute; en la d&eacute;cada de los sesenta.";
 choices[38][1] = "Los componentes que se encargan de la l&oacute;gica de negocio forman parte del Modelo.";
 choices[38][2] = "La Vista variar&aacute; inevitablemente al variar el Modelo.";
 choices[38][3] = "El patr&oacute;n de dise&ntilde;o MVC es un modo de dividir la funcionalidad de un componente de forma ordenada.";
 answers[38] = 1;
 units[38] = ['85'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 8886. Examen AGE TIC A1 2011";
 preguntaids[38] = 8886


//  Id pregunta: 1097 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n ITILv3, para qu&eacute; se utiliza el modelo RACI?";
 choices[39]= new Array();
 choices[39][0] = "Para documentar los roles y relaciones entre las partes interesadas en un proceso o actividad.";
 choices[39][1] = "Para definir los requisitos de un nuevo proceso o servicio.";
 choices[39][2] = "Para analizar el impacto en el negocio de una incidencia.";
 choices[39][3] = "Para crear un Cuadro de Mando Integral que muestre el estado completo de la gesti&oacute;n del servicio.";
 answers[39] = 0;
 units[39] = ['101'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 1097. ";
 preguntaids[39] = 1097


//  Id pregunta: 1056 Año de creación de pregunta: 2016
 questions[40]= "41)  Cu&aacute;l de los siguientes tipos de canales, en comunicaciones m&oacute;viles, permite la comunicaci&oacute;n directa m&oacute;vil a m&oacute;vil:";
 choices[40]= new Array();
 choices[40][0] = "Semid&uacute;plex.";
 choices[40][1] = "D&uacute;plex.";
 choices[40][2] = "S&iacute;mplex a una frecuencia.";
 choices[40][3] = "S&iacute;mplex a dos frecuencias.";
 answers[40] = 2;
 units[40] = ['117'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1056. ";
 preguntaids[40] = 1056


//  Id pregunta: 1066 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes sistemas proporciona la funcionalidad de Single Sign-On basada en tickets?";
 choices[41]= new Array();
 choices[41][0] = "KERBEROS.";
 choices[41][1] = "STORK.";
 choices[41][2] = "SAML.";
 choices[41][3] = "OPENID.";
 answers[41] = 0;
 units[41] = ['120'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1066. ";
 preguntaids[41] = 1066


//  Id pregunta: 1068 Año de creación de pregunta: 2016
 questions[42]= "43)  En cu&aacute;l de las siguientes combinaciones de topolog&iacute;as de red, un fallo en el cableado de red, impedir&aacute; el funcionamiento de toda ella:";
 choices[42]= new Array();
 choices[42][0] = "Topolog&iacute;a Estrella f&iacute;sica y Mallada l&oacute;gica.";
 choices[42][1] = "Topolog&iacute;a Anillo f&iacute;sica y Bus l&oacute;gica.";
 choices[42][2] = "Topolog&iacute;a Mallada f&iacute;sica y Anillo l&oacute;gica.";
 choices[42][3] = "Topolog&iacute;a Bus f&iacute;sica y Estrella l&oacute;gica.";
 answers[42] = 3;
 units[42] = ['104'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 1068. ";
 preguntaids[42] = 1068


//  Id pregunta: 8882 Año de creación de pregunta: 2013
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as NO se considera &aacute;gil?";
 choices[43]= new Array();
 choices[43][0] = "M&eacute;l&eacute;";
 choices[43][1] = "OMT";
 choices[43][2] = "DAS (Desarrollo Adaptativo de Software)";
 choices[43][3] = "DCC (Desarrollo Conducido por Caracter&iacute;sticas)";
 answers[43] = 1;
 units[43] = ['84'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 8882. Examen AGE TIC A1 2011";
 preguntaids[43] = 8882


//  Id pregunta: 1082 Año de creación de pregunta: 2016
 questions[44]= "45)  El modelo de reproducci&oacute;n del color CMYK :";
 choices[44]= new Array();
 choices[44][0] = "Es el modelo utilizado por la mayor&iacute;a de esc&aacute;neres.";
 choices[44][1] = "Es un modelo de tipo sustractivo.";
 choices[44][2] = "Se basa en la combinaci&oacute;n de tres colores: rojo, verde y azul.";
 choices[44][3] = "Es el modelo utilizado por la mayor&iacute;a de monitores.";
 answers[44] = 1;
 units[44] = ['80'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1082. ";
 preguntaids[44] = 1082


//  Id pregunta: 8889 Año de creación de pregunta: 2013
 questions[45]= "46)  En relaci&oacute;n al proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n (ASI) de M&eacute;trica v.3, un producto de la actividad Establecimiento de Requisitos es:";
 choices[45]= new Array();
 choices[45][0] = "Modelo conceptual de datos.";
 choices[45][1] = "Modelo de casos de uso.";
 choices[45][2] = "Cat&aacute;logo de usuarios.";
 choices[45][3] = "Cat&aacute;logo de excepciones.";
 answers[45] = 1;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 8889. Examen AGE TIC A1 2011";
 preguntaids[45] = 8889


//  Id pregunta: 1057 Año de creación de pregunta: 2016
 questions[46]= "47)  El Texto Refundido de la Ley de la Protecci&oacute;n Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[46]= new Array();
 choices[46][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[46][1] = "50 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[46][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[46][3] = "50 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la personalidad del autor.";
 answers[46] = 2;
 units[46] = ['41'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 1057. ";
 preguntaids[46] = 1057


//  Id pregunta: 8838 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[47]= new Array();
 choices[47][0] = "Direcci&oacute;n IPv6 compatible con IPv4.";
 choices[47][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[47][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[47][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[47] = 2;
 units[47] = ['117', '109'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8838. Examen TIC A1 2011";
 preguntaids[47] = 8838


//  Id pregunta: 1099 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la LOPD, las infracciones prescribir&aacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Las muy graves a los tres a&ntilde;os, las graves al a&ntilde;o y las leves a los seis meses";
 choices[48][1] = "Las muy graves a los dos a&ntilde;os, las graves al a&ntilde;o y las leves a los seis meses";
 choices[48][2] = "Las muy graves a los tres a&ntilde;os, las graves a los dos a&ntilde;os y las leves al a&ntilde;o.";
 choices[48][3] = "Las muy graves a los cuatro a&ntilde;os, las graves a los tres a&ntilde;os y las leves al a&ntilde;o.";
 answers[48] = 2;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 1099. ";
 preguntaids[48] = 1099


//  Id pregunta: 1061 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique la frase correcta acerca de los servicios web distribuidos.";
 choices[49]= new Array();
 choices[49][0] = "WSDL 1.1 define dos &uacute;nicos tipos de operaci&oacute;n, la unidireccional y la de petici&oacute;n-respuesta.";
 choices[49][1] = "Para describir las interfaces de los servicios web se utiliza WS-BPEL.";
 choices[49][2] = "Un usuario de un servicio registra &eacute;ste utilizando UDDI.";
 choices[49][3] = "SOAP es un protocolo para hacer llamadas a m&eacute;todos de objetos remotos.";
 answers[49] = 3;
 units[49] = ['55'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 1061. ";
 preguntaids[49] = 1061


//  Id pregunta: 1071 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[50]= new Array();
 choices[50][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[50][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[50][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[50][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[50] = 3;
 units[50] = ['49'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1071. ";
 preguntaids[50] = 1071


//  Id pregunta: 1096 Año de creación de pregunta: 2016
 questions[51]= "52)  Elija la frase correcta.";
 choices[51]= new Array();
 choices[51][0] = "Un Iphone de uso personal se conecta siempre al servidor de Internet de iOS, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[51][1] = "Un Samsung Galaxy de uso personal se conecta siempre al servidor de Internet de Android, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[51][2] = "Un Nokia 500 de uso personal se conecta siempre al servidor de Internet de Symbian, que act&uacute;a como un proveedor de acceso a Internet.";
 choices[51][3] = "Una Blackberry de uso personal se conecta siempre al servidor de Internet de Blackberry, que act&uacute;a como un proveedor de acceso a Internet.";
 answers[51] = 3;
 units[51] = ['59'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 1096. ";
 preguntaids[51] = 1096


//  Id pregunta: 1048 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es una actividad del proceso de la Gesti&oacute;n de Activos y Configuraci&oacute;n del Servicio?";
 choices[52]= new Array();
 choices[52][0] = "Tener en cuenta todos los activos financieros de la Organizaci&oacute;n.";
 choices[52][1] = "Especificar los atributos relevantes para cada Elemento de Configuraci&oacute;n (CI).";
 choices[52][2] = "Construir modelos de servicio para justificar implementaciones ITIL.";
 choices[52][3] = "Implementar ITIL en la organizaci&oacute;n.";
 answers[52] = 1;
 units[52] = ['101'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 1048. ";
 preguntaids[52] = 1048


//  Id pregunta: 1093 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[53]= new Array();
 choices[53][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[53][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes.";
 choices[53][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[53][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta.";
 answers[53] = 1;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 1093. ";
 preguntaids[53] = 1093


//  Id pregunta: 1077 Año de creación de pregunta: 2016
 questions[54]= "55)  La regla de &quot;Actualizaci&oacute;n de Vistas&quot; (Regla 6) de Codd establece que:";
 choices[54]= new Array();
 choices[54][0] = "Todas las vistas actualizadas deben actualizarse tambi&eacute;n en el cat&aacute;logo de datos.";
 choices[54][1] = "Todas las vistas que son te&oacute;ricamente actualizables se pueden actualizar por el sistema.";
 choices[54][2] = "La actualizaci&oacute;n de una vista se realiza manteniendo la integridad del conjunto de informaci&oacute;n del sistema.";
 choices[54][3] = "Todas las vistas que son actualizadas no requieren un cambio en su estructura l&oacute;gica.";
 answers[54] = 1;
 units[54] = ['61'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 1077. ";
 preguntaids[54] = 1077


//  Id pregunta: 1085 Año de creación de pregunta: 2016
 questions[55]= "56)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:";
 choices[55]= new Array();
 choices[55][0] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[55][1] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[55][2] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[55][3] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[55] = 1;
 units[55] = ['43'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 1085. ";
 preguntaids[55] = 1085


//  Id pregunta: 1053 Año de creación de pregunta: 2016
 questions[56]= "57)  En el ejercicio del Derecho de oposici&oacute;n, el responsable del fichero resolver&aacute; sobre la solicitud de oposici&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "En el plazo m&aacute;ximo de quince d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 choices[56][1] = "En el plazo m&aacute;ximo de veinte d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 choices[56][2] = "En el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud.";
 choices[56][3] = "En el plazo m&aacute;ximo de diez d&iacute;as a contar desde la recepci&oacute;n de la solicitud.";
 answers[56] = 3;
 units[56] = ['35'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 1053. ";
 preguntaids[56] = 1053


//  Id pregunta: 8887 Año de creación de pregunta: 2013
 questions[57]= "58)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[57]= new Array();
 choices[57][0] = "Polimorfismo.";
 choices[57][1] = "Abstracci&oacute;n.";
 choices[57][2] = "Encapsulaci&oacute;n.";
 choices[57][3] = "Persistencia.";
 answers[57] = 2;
 units[57] = ['85'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 8887. Examen AGE TIC A1 2011";
 preguntaids[57] = 8887


//  Id pregunta: 1070 Año de creación de pregunta: 2016
 questions[58]= "59)  En el entorno de la firma electr&oacute;nica y la identidad electr&oacute;nica, STORK identifica:";
 choices[58]= new Array();
 choices[58][0] = "Un proyecto financiado por la Comisi&oacute;n Europea para establecer la interoperabilidad de las identidades electr&oacute;nicas de los Estados Miembros.";
 choices[58][1] = "A la PKI desplegada por la Comisi&oacute;n Europea para la futura carta de identidad electr&oacute;nica europea.";
 choices[58][2] = "La implementaci&oacute;n opensource realizada por la Comisi&oacute;n Europea de un cliente de firma electr&oacute;nica.";
 choices[58][3] = "El consorcio de fabricantes e industria Europea relacionado con la firma electr&oacute;nica e identidad electr&oacute;nica.";
 answers[58] = 0;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1070. ";
 preguntaids[58] = 1070


//  Id pregunta: 1058 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale qu&eacute; afirmaci&oacute;n de las siguientes es cierta en relaci&oacute;n al Valor Actual Neto (VAN) y la Tasa Interna de Rentabilidad (TIR):";
 choices[59]= new Array();
 choices[59][0] = "Si el VAN es negativo, la TIR de la inversi&oacute;n es superior al coste del capital.";
 choices[59][1] = "En una inversi&oacute;n con VAN negativo, la TIR de la inversi&oacute;n es igual al coste del capital.";
 choices[59][2] = "Si el VAN positivo, la TIR de la inversi&oacute;n es inferior al coste del capital.";
 choices[59][3] = "En una inversi&oacute;n con VAN positivo, la TIR ser&aacute; superior al coste del capital.";
 answers[59] = 3;
 units[59] = ['40'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 1058. ";
 preguntaids[59] = 1058


//  Id pregunta: 1055 Año de creación de pregunta: 2016
 questions[60]= "61)  Identificar que protocolo no est&aacute; dise&ntilde;ado espec&iacute;ficamente para la extensi&oacute;n de las SAN sobre protocolo IP:";
 choices[60]= new Array();
 choices[60][0] = "Iftp";
 choices[60][1] = "iSCSI";
 choices[60][2] = "FCIP";
 choices[60][3] = "iFCP";
 answers[60] = 0;
 units[60] = ['53'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1055. ";
 preguntaids[60] = 1055


//  Id pregunta: 8591 Año de creación de pregunta: 2013
 questions[61]= "62)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[61]= new Array();
 choices[61][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[61][1] = "Vincula a todos los componentes de la CPU";
 choices[61][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[61][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[61] = 0;
 units[61] = ['56'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8591. Examen TIC-A1 2011";
 preguntaids[61] = 8591


//  Id pregunta: 1083 Año de creación de pregunta: 2016
 questions[62]= "63)  La Red SARA:";
 choices[62]= new Array();
 choices[62][0] = "Constituye la intranet corporativa de la Administraci&oacute;n General del Estado y de sus Organismos Aut&oacute;nomos y Entidades P&uacute;blicas dependientes.";
 choices[62][1] = "Es la Agrupaci&oacute;n de Servidores de Actualizaci&oacute;n de Redes Administrativas.";
 choices[62][2] = "Tiene por objeto ser la red de comunicaciones que interconecta las redes de todas las Administraciones P&uacute;blicas.";
 choices[62][3] = "Agrupa los Registros Administrativos Est&aacute;ndarizados en el &aacute;mbito de las Estados pertenecientes a la Uni&oacute;n Europea.";
 answers[62] = 2;
 units[62] = ['47'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 1083. ";
 preguntaids[62] = 1083


//  Id pregunta: 1088 Año de creación de pregunta: 2016
 questions[63]= "64)  SCRUM es una metodolog&iacute;a:";
 choices[63]= new Array();
 choices[63][0] = "Cl&aacute;sica.";
 choices[63][1] = "&Aacute;gil.";
 choices[63][2] = "Orientada a Objetos.";
 choices[63][3] = "Din&aacute;mica.";
 answers[63] = 1;
 units[63] = ['84'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1088. ";
 preguntaids[63] = 1088


//  Id pregunta: 1069 Año de creación de pregunta: 2016
 questions[64]= "65)  A los efectos previstos en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de datos de car&aacute;cter personal, se entiende por &quot;Procedimiento de disociaci&oacute;n&quot;:";
 choices[64]= new Array();
 choices[64][0] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga s&oacute;lo pueda asociarse a una determinada persona.";
 choices[64][1] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga s&oacute;lo pueda ser identificable por el interesado pero no por terceras personas.";
 choices[64][2] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga no pueda asociarse a persona identificada o identificable.";
 choices[64][3] = "Todo tratamiento de datos personales de modo que la informaci&oacute;n que se obtenga se pueda tratar por el responsable del fichero para identificar a un grupo de personas con id&eacute;nticas caracter&iacute;sticas personales.";
 answers[64] = 2;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 1069. ";
 preguntaids[64] = 1069


//  Id pregunta: 1065 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows";
 choices[65]= new Array();
 choices[65][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits.";
 choices[65][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[65][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[65][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[65] = 3;
 units[65] = ['58'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1065. ";
 preguntaids[65] = 1065


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


//  Id pregunta: 1091 Año de creación de pregunta: 2016
 questions[67]= "68)  Los certificados digitales:";
 choices[67]= new Array();
 choices[67][0] = "Basados en la recomendaci&oacute;n X.509 v.2 admiten extensiones, que pueden llevar una bandera de criticidad.";
 choices[67][1] = "Definidos en el programa PGP (Pretty Good Privacy) son compatibles con los X.509 v.3.";
 choices[67][2] = "De atributos vinculan al titular con su clave p&uacute;blica y sus atributos.";
 choices[67][3] = "Basados en la recomendaci&oacute;n X.509 v.3 pueden incorporar como extensiones los atributos que constan en un certificado de atributos.";
 answers[67] = 3;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 1091. ";
 preguntaids[67] = 1091


//  Id pregunta: 1049 Año de creación de pregunta: 2016
 questions[68]= "69)  Cu&aacute;l de los siguientes NO es un algoritmo de funciones hash:";
 choices[68]= new Array();
 choices[68][0] = "SHA-256.";
 choices[68][1] = "BASH.";
 choices[68][2] = "WHIRLPOOL.";
 choices[68][3] = "HAVAL.";
 answers[68] = 1;
 units[68] = ['76'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1049. ";
 preguntaids[68] = 1049


//  Id pregunta: 8883 Año de creación de pregunta: 2013
 questions[69]= "70)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[69][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[69][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[69][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[69] = 3;
 units[69] = ['85', '86'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 8883. Examen AGE TIC A1 2011";
 preguntaids[69] = 8883


//  Id pregunta: 1087 Año de creación de pregunta: 2016
 questions[70]= "71)  Indicar cu&aacute;l de las siguientes NO es un tipo de georreferenciaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Directa";
 choices[70][1] = "Discreta.";
 choices[70][2] = "Indirecta.";
 choices[70][3] = "Posicional.";
 answers[70] = 3;
 units[70] = ['71'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1087. ";
 preguntaids[70] = 1087


//  Id pregunta: 1054 Año de creación de pregunta: 2016
 questions[71]= "72)  Las funciones resumen (hash) MD5 y SHA-1 tienen en com&uacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Que ambas admiten mensajes de entrada de longitud m&aacute;xima 264 Mbytes.";
 choices[71][1] = "Que ambas generan res&uacute;menes de 128 bits.";
 choices[71][2] = "Que ambas realizan relleno de bits (si procede) en el &uacute;ltimo bloque del mensaje.";
 choices[71][3] = "Que ambas realizan 80 iteraciones por bloque del mensaje.";
 answers[71] = 2;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1054. ";
 preguntaids[71] = 1054


//  Id pregunta: 1059 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes conceptos introducidos por Symons fue una novedad en la m&eacute;trica Puntos de Funci&oacute;n MARK II respecto a la original de Albrecht?";
 choices[72]= new Array();
 choices[72][0] = "Fichero l&oacute;gico de Entrada.";
 choices[72][1] = "Entidad.";
 choices[72][2] = "Consultas Externas.";
 choices[72][3] = "Caracter&iacute;stica.";
 answers[72] = 1;
 units[72] = ['94'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1059. ";
 preguntaids[72] = 1059


//  Id pregunta: 1052 Año de creación de pregunta: 2016
 questions[73]= "74)  El entorno donde se ejecutan todas las aplicaciones .NET se llama:";
 choices[73]= new Array();
 choices[73][0] = "Swing";
 choices[73][1] = "ASP.NET";
 choices[73][2] = "ECLIPSE";
 choices[73][3] = "CLR";
 answers[73] = 3;
 units[73] = ['63'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1052. ";
 preguntaids[73] = 1052


//  Id pregunta: 8885 Año de creación de pregunta: 2013
 questions[74]= "75)  &iquest;Qu&eacute; diagrama UML muestra el flujo de acciones en curso, no necesariamente at&oacute;micas, en relaci&oacute;n a la estructura de estados del sistema?";
 choices[74]= new Array();
 choices[74][0] = "Diagrama de secuencia.";
 choices[74][1] = "Diagrama de estados.";
 choices[74][2] = "Diagrama de actividad.";
 choices[74][3] = "Diagrama de colaboraci&oacute;n.";
 answers[74] = 2;
 units[74] = ['85'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 8885. Examen AGE TIC A1 2011";
 preguntaids[74] = 8885


