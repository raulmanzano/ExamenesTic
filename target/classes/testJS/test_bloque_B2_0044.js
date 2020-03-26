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
//  Id pregunta: 10327 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[0]= new Array();
 choices[0][0] = "Business Process Management Initiative (BPMI)";
 choices[0][1] = "Object Management Group (OMG)";
 choices[0][2] = "OASIS";
 choices[0][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[0] = 3;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10327. ";
 preguntaids[0] = 10327


//  Id pregunta: 10148 Año de creación de pregunta: 2015
 questions[1]= "2)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[1]= new Array();
 choices[1][0] = "El n&uacute;mero de serie.";
 choices[1][1] = "La validez no antes de.";
 choices[1][2] = "El identificador &uacute;nico de emisor.";
 choices[1][3] = "El emisor.";
 answers[1] = 2;
 units[1] = ['77'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10148. Examen TIC A1 2014";
 preguntaids[1] = 10148


//  Id pregunta: 10323 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un servicio de Amazon de Cloud Computing?";
 choices[2]= new Array();
 choices[2][0] = "Amazon CloudWatch";
 choices[2][1] = "Amazon Elastic Compute Cloud";
 choices[2][2] = "Amazon AppFabric";
 choices[2][3] = "Amazon Simple Storage Service";
 answers[2] = 2;
 units[2] = ['52'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10323. ";
 preguntaids[2] = 10323


//  Id pregunta: 10227 Año de creación de pregunta: 2015
 questions[3]= "4)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[3]= new Array();
 choices[3][0] = "Scheduler";
 choices[3][1] = "Planificator";
 choices[3][2] = "High Planificator";
 choices[3][3] = "Dispatcher";
 answers[3] = 0;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 10227. ";
 preguntaids[3] = 10227


//  Id pregunta: 10283 Año de creación de pregunta: 2015
 questions[4]= "5)  Indique la afirmaci&oacute;n INCORRECTA sobre el algoritmo DES (Data Encryption Standard)";
 choices[4]= new Array();
 choices[4][0] = "Est&aacute; basado en las redes de Feistel";
 choices[4][1] = "Usa una clave de 56 bits";
 choices[4][2] = "Roto en 1997 mediante b&uacute;squeda exhaustiva";
 choices[4][3] = "Para hacerlo m&aacute;s robusto se utiliza el doble DES 2-DES";
 answers[4] = 3;
 units[4] = ['76'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10283. ";
 preguntaids[4] = 10283


//  Id pregunta: 10134 Año de creación de pregunta: 2015
 questions[5]= "6)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[5]= new Array();
 choices[5][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[5][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[5][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[5][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[5] = 0;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10134. Examen TIC A1 2014";
 preguntaids[5] = 10134


//  Id pregunta: 10176 Año de creación de pregunta: 2015
 questions[6]= "7)  LINQ (Language-Integrated Query) es:";
 choices[6]= new Array();
 choices[6][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[6][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[6][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[6][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[6] = 2;
 units[6] = ['63'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10176. Examen TIC A1 2014";
 preguntaids[6] = 10176


//  Id pregunta: 10126 Año de creación de pregunta: 2015
 questions[7]= "8)  En SQL Server, la cardinalidad m&aacute;xima de una tabla de hechos que es la tabla central de n tablas dimensionales es:";
 choices[7]= new Array();
 choices[7][0] = "La multiplicaci&oacute;n de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[7][1] = "La suma de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[7][2] = "La mayor de las cardinalidades presentes en las n tablas dimensionales.";
 choices[7][3] = "La mayor de las cardinalidades presentes en las n tablas dimensionales elevado a n.";
 answers[7] = 0;
 units[7] = ['60'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10126. Examen TIC A1 2014";
 preguntaids[7] = 10126


//  Id pregunta: 10240 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes NO es una soluci&oacute;n comercial de ERP?";
 choices[8]= new Array();
 choices[8][0] = "Microsoft Dynamics";
 choices[8][1] = "HP LoadRunner";
 choices[8][2] = "Oracle E-Business Suite";
 choices[8][3] = "SAP";
 answers[8] = 1;
 units[8] = ['69'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10240. Es una herramienta de testing/security. Dynamics es un CRM (m&oacute;dulo funcional de gesti&oacute;n comercial)";
 preguntaids[8] = 10240


//  Id pregunta: 10258 Año de creación de pregunta: 2015
 questions[9]= "10)  Respecto a la factura electr&oacute;nica:";
 choices[9]= new Array();
 choices[9][0] = "S&oacute;lo es obligatoria en el &aacute;mbito de la AGE";
 choices[9][1] = "Reglamentariamente pueden excluirse las de importe inferior a 5000&euro;";
 choices[9][2] = "No est&aacute;n obligadas las agrupaciones de inter&eacute;s econ&oacute;mico europeas";
 choices[9][3] = "Todas son correctas";
 answers[9] = 1;
 units[9] = ['75'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10258. ";
 preguntaids[9] = 10258


//  Id pregunta: 10094 Año de creación de pregunta: 2015
 questions[10]= "11)  El PUE (Power Usage effectiveness) es una m&eacute;trica que trata de determinar la eficiencia energ&eacute;tica de un Centro de Proceso de Datos, y se define como el resultado de dividir:";
 choices[10]= new Array();
 choices[10][0] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento TI (servidores, equipos de comunicaciones, almacenamiento y otros).";
 choices[10][1] = "La potencia total consumida por el CPD por la potencia usada en el equipamiento no TI (climatizaci&oacute;n, distribuci&oacute;n el&eacute;ctrica, iluminaci&oacute;n, etc).";
 choices[10][2] = "La potencia consumida por el equipamiento TI entre la consumida por el equipamiento no TI.";
 choices[10][3] = "La potencia total consumida por el CPD por la potencia consumida en el equipamiento de c&oacute;mputo (servidores), excluyendo equipos de comunicaciones y almacenamiento.";
 answers[10] = 0;
 units[10] = ['50'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10094. Examen TIC A2 2014";
 preguntaids[10] = 10094


//  Id pregunta: 10182 Año de creación de pregunta: 2015
 questions[11]= "12)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[11]= new Array();
 choices[11][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[11][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[11][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[11][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[11] = 0;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 10182. Examen TIC A1 2014";
 preguntaids[11] = 10182


//  Id pregunta: 10174 Año de creación de pregunta: 2015
 questions[12]= "13)  Respecto al algoritmo de cifrado RC5, se&ntilde;ale la respuesta correcta:";
 choices[12]= new Array();
 choices[12][0] = "Se trata de un algoritmo de cifrado asim&eacute;trico.";
 choices[12][1] = "No utiliza rotaciones dependientes de los datos para su proceso.";
 choices[12][2] = "Posee un n&uacute;mero fijo de rotaciones para su proceso.";
 choices[12][3] = "Posee tama&ntilde;o variable de clave.";
 answers[12] = 3;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10174. Examen TIC A1 2014";
 preguntaids[12] = 10174


//  Id pregunta: 10153 Año de creación de pregunta: 2015
 questions[13]= "14)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico 3.0 tienen una vigencia de:";
 choices[13]= new Array();
 choices[13][0] = "30 meses.";
 choices[13][1] = "48 meses.";
 choices[13][2] = "60 meses.";
 choices[13][3] = "36 meses.";
 answers[13] = 2;
 units[13] = ['78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 10153. Examen TIC A1 2014";
 preguntaids[13] = 10153


//  Id pregunta: 10245 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[14]= new Array();
 choices[14][0] = "SEND";
 choices[14][1] = "FACTURAE";
 choices[14][2] = "COMPRAE";
 choices[14][3] = "TESORO-E";
 answers[14] = 0;
 units[14] = ['75'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10245. ";
 preguntaids[14] = 10245


//  Id pregunta: 10286 Año de creación de pregunta: 2015
 questions[15]= "16)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[15]= new Array();
 choices[15][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[15][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[15][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[15][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta";
 answers[15] = 3;
 units[15] = ['49'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 10286. ";
 preguntaids[15] = 10286


//  Id pregunta: 10119 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes servicios transforma un texto original en un hipertexto con v&iacute;nculos geogr&aacute;ficos?:";
 choices[16]= new Array();
 choices[16][0] = "Coberturas en Web (WCS).";
 choices[16][1] = "Nom&eacute;nclator (Gazetteer).";
 choices[16][2] = "Cat&aacute;logo (CSW).";
 choices[16][3] = "Geoparser.";
 answers[16] = 3;
 units[16] = ['71'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10119. Examen TIC A1 2014";
 preguntaids[16] = 10119


//  Id pregunta: 10194 Año de creación de pregunta: 2015
 questions[17]= "18)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[17][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[17][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[17][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[17] = 0;
 units[17] = ['74'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10194. Examen TIC A1 2014";
 preguntaids[17] = 10194


//  Id pregunta: 10152 Año de creación de pregunta: 2015
 questions[18]= "19)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[18]= new Array();
 choices[18][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[18][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[18][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[18][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[18] = 2;
 units[18] = ['67'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10152. Examen TIC A1 2014";
 preguntaids[18] = 10152


//  Id pregunta: 10241 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la gesti&oacute;n de Sistemas de Informaci&oacute;n Geogr&aacute;fica?";
 choices[19]= new Array();
 choices[19][0] = "Es muy voluminosa";
 choices[19][1] = "Es borrosa";
 choices[19][2] = "Es din&aacute;mica";
 choices[19][3] = "Todas son caracter&iacute;sticas";
 answers[19] = 3;
 units[19] = ['71'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10241. ";
 preguntaids[19] = 10241


//  Id pregunta: 10322 Año de creación de pregunta: 2015
 questions[20]= "21)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[20]= new Array();
 choices[20][0] = "SISD";
 choices[20][1] = "SIMD";
 choices[20][2] = "MISD";
 choices[20][3] = "MIMD";
 answers[20] = 0;
 units[20] = ['49'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10322. ";
 preguntaids[20] = 10322


//  Id pregunta: 10324 Año de creación de pregunta: 2015
 questions[21]= "22)  Los riesgos del Cloud Computing, de acuerdo con el &uacute;ltimo informe del ENISA pueden clasificarse como:";
 choices[21]= new Array();
 choices[21][0] = "Riesgos pol&iacute;ticos y organizativos, riesgos t&eacute;cnicos y riesgos legales";
 choices[21][1] = "Riesgos propios, riesgos compartidos y riesgos derivados";
 choices[21][2] = "Riesgos de usuarios, de la plataforma y del servicio";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = 0;
 units[21] = ['52'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10324. ";
 preguntaids[21] = 10324


//  Id pregunta: 10236 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;C&oacute;mo se denomina a la restricci&oacute;n del Modelo L&oacute;gico Relacional por la que si en una relaci&oacute;n hay alguna clave ajena, sus valores deben coincidir con los valores de la clave primaria a la que hace referencia, o bien, deben ser completamente nulos?";
 choices[22]= new Array();
 choices[22][0] = "Aserci&oacute;n (ASSERTION)";
 choices[22][1] = "Verificaci&oacute;n (CHECK)";
 choices[22][2] = "Restricci&oacute;n de clave primaria";
 choices[22][3] = "Integridad referencial";
 answers[22] = 3;
 units[22] = ['61'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10236. ";
 preguntaids[22] = 10236


//  Id pregunta: 10239 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[23]= new Array();
 choices[23][0] = "Modelo-Vista-Controlador (MVC)";
 choices[23][1] = "Singleton";
 choices[23][2] = "Observer";
 choices[23][3] = "Facade";
 answers[23] = 0;
 units[23] = ['64'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10239. ";
 preguntaids[23] = 10239


//  Id pregunta: 10243 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l es la &uacute;ltima versi&oacute;n de HTTP a fecha Octubre 2016?";
 choices[24]= new Array();
 choices[24][0] = "1.1";
 choices[24][1] = "2";
 choices[24][2] = "1.3";
 choices[24][3] = "3";
 answers[24] = 1;
 units[24] = ['74'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10243. RFC 7540 sali&oacute; en octubre 2015";
 preguntaids[24] = 10243


//  Id pregunta: 10257 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes es un protocolo para el pago seguro en red?";
 choices[25]= new Array();
 choices[25][0] = "XMLDSig";
 choices[25][1] = "3D-Secure";
 choices[25][2] = "SSL";
 choices[25][3] = "SHA256";
 answers[25] = 1;
 units[25] = ['75'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 10257. ";
 preguntaids[25] = 10257


//  Id pregunta: 10248 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[26]= new Array();
 choices[26][0] = "30 meses";
 choices[26][1] = "4 a&ntilde;os";
 choices[26][2] = "5 a&ntilde;os";
 choices[26][3] = "10 a&ntilde;os";
 answers[26] = 2;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10248. El RD 414/2015 por el que se modifica el RD 1553/2005 los certificados pasan a tener tambi&eacute;n una validez de 5 a&ntilde;os.";
 preguntaids[26] = 10248


//  Id pregunta: 10237 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[27]= new Array();
 choices[27][0] = "5";
 choices[27][1] = "6";
 choices[27][2] = "7";
 choices[27][3] = "8";
 answers[27] = 3;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10237. Viene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";
 preguntaids[27] = 10237


//  Id pregunta: 10099 Año de creación de pregunta: 2015
 questions[28]= "29)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[28]= new Array();
 choices[28][0] = "Mediante claves sim&eacute;tricas.";
 choices[28][1] = "Mediante claves asim&eacute;tricas.";
 choices[28][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[28][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[28] = 0;
 units[28] = ['77', '78'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 10099. Examen TIC A2 2014";
 preguntaids[28] = 10099


//  Id pregunta: 10233 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[29]= new Array();
 choices[29][0] = "SQL-86";
 choices[29][1] = "SQL-89";
 choices[29][2] = "SQL-92";
 choices[29][3] = "SQL-1999";
 answers[29] = 1;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10233. ";
 preguntaids[29] = 10233


//  Id pregunta: 10226 Año de creación de pregunta: 2015
 questions[30]= "31)  &iquest;Qu&eacute; quiere decir que una operaci&oacute;n es idempotente?";
 choices[30]= new Array();
 choices[30][0] = "Que tiene prioridad sobre cualquier tipo de operaci&oacute;n";
 choices[30][1] = "Que cualquier operaci&oacute;n tiene m&aacute;s prioridad que ella";
 choices[30][2] = "Que el resultado de la misma var&iacute;a cada vez que se ejecuta";
 choices[30][3] = "Que el resultado de la misma no var&iacute;a con cada vez que se ejecuta";
 answers[30] = 3;
 units[30] = ['55'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10226. ";
 preguntaids[30] = 10226


//  Id pregunta: 10238 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[31]= new Array();
 choices[31][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[31][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[31][2] = "Los 2 respuestas anteriores son correctas";
 choices[31][3] = "Ninguna de las anteriores es correcta";
 answers[31] = 2;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10238. ";
 preguntaids[31] = 10238


//  Id pregunta: 10246 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l es un algoritmo de criptograf&iacute;a sim&eacute;trica de flujo?";
 choices[32]= new Array();
 choices[32][0] = "DES";
 choices[32][1] = "Blowfish";
 choices[32][2] = "SNOW";
 choices[32][3] = "IDEA";
 answers[32] = 2;
 units[32] = ['76'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 10246. El resto son algoritmos de bloque";
 preguntaids[32] = 10246


//  Id pregunta: 10244 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Qu&eacute; RFC contiene la especificaci&oacute;n de HTTP/2?";
 choices[33]= new Array();
 choices[33][0] = "6660";
 choices[33][1] = "6978";
 choices[33][2] = "7540";
 choices[33][3] = "8880";
 answers[33] = 2;
 units[33] = ['74'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10244. Sali&oacute; en octubre 2015 con importantes novedades";
 preguntaids[33] = 10244


//  Id pregunta: 10229 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[34]= new Array();
 choices[34][0] = "Durante el an&aacute;lisis";
 choices[34][1] = "Durante el dise&ntilde;o";
 choices[34][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[34][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[34] = 2;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 10229. ";
 preguntaids[34] = 10229


//  Id pregunta: 10173 Año de creación de pregunta: 2015
 questions[35]= "36)  En referencia al software &ldquo;Windows Mobile Device Center&rdquo;, se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "Es un software de sincronizaci&oacute;n precursor del ActiveSync.";
 choices[35][1] = "Ofrece un controlador de base incorporado a la interfaz de dispositivos en el explorador de Windows.";
 choices[35][2] = "Permite que un dispositivo m&oacute;vil se sincronice con un pc o un servidor que ejecute Microsoft Exchange Server.";
 choices[35][3] = "Es un programa de sincronizaci&oacute;n desarrollado para su uso con sistemas operativos Linux.";
 answers[35] = 2;
 units[35] = ['58'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10173. Examen TIC A1 2014";
 preguntaids[35] = 10173


//  Id pregunta: 10250 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[36]= new Array();
 choices[36][0] = "DIB";
 choices[36][1] = "DSA";
 choices[36][2] = "DUA";
 choices[36][3] = "DISP";
 answers[36] = 0;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10250. ";
 preguntaids[36] = 10250


//  Id pregunta: 10228 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;l es una biblioteca de render avanzado de controles de aplicaci&oacute;n en GNOME?";
 choices[37]= new Array();
 choices[37][0] = "Metacity";
 choices[37][1] = "Pango";
 choices[37][2] = "Cairo";
 choices[37][3] = "Gconf";
 answers[37] = 2;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10228. ";
 preguntaids[37] = 10228


//  Id pregunta: 10172 Año de creación de pregunta: 2015
 questions[38]= "39)  Respecto a JSON (JavaScript Object Notation - Notaci&oacute;n de Objetos de JavaScript), se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto solo entre aplicaciones JavaScript.";
 choices[38][1] = "Al igual que XML, permite el intercambio de datos en un formato de texto, tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[38][2] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[38][3] = "Al igual que XML, permite el intercambio de datos en un formato de texto, solo entre aplicaciones JavaScript.";
 answers[38] = 1;
 units[38] = ['62'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10172. Examen TIC A1 2014";
 preguntaids[38] = 10172


//  Id pregunta: 10326 Año de creación de pregunta: 2015
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un servidor de correo electr&oacute;nico?";
 choices[39]= new Array();
 choices[39][0] = "Sendmail";
 choices[39][1] = "Microsoft Exchange";
 choices[39][2] = "IBM Lotus Domino";
 choices[39][3] = "SMTP Websphere";
 answers[39] = 3;
 units[39] = ['54'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10326. IBM Websphere es un servidor de apps, y SMTP un protocolo";
 preguntaids[39] = 10326


//  Id pregunta: 10190 Año de creación de pregunta: 2015
 questions[40]= "41)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[40]= new Array();
 choices[40][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[40][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[40][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[40][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[40] = 2;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 10190. Examen TIC A1 2014";
 preguntaids[40] = 10190


//  Id pregunta: 10199 Año de creación de pregunta: 2015
 questions[41]= "42)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[41]= new Array();
 choices[41][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[41][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[41][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[41][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[41] = 3;
 units[41] = ['78'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 10199. Examen TIC A1 2014";
 preguntaids[41] = 10199


//  Id pregunta: 10285 Año de creación de pregunta: 2015
 questions[42]= "43)  Supongamos que sustituimos un procesador utilizado como servidor web por otro 10 veces m&aacute;s r&aacute;pido. Si el procesador inicial est&aacute; ocupado con c&aacute;lculos el 40% del tiempo y esperando por E/S el 60%, &iquest;qu&eacute; incremento global de velocidad se obtiene con la mejora?";
 choices[42]= new Array();
 choices[42][0] = "1.56";
 choices[42][1] = "10";
 choices[42][2] = "4";
 choices[42][3] = "6";
 answers[42] = 0;
 units[42] = ['49'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 10285. Ley de Amdahl";
 preguntaids[42] = 10285


//  Id pregunta: 10189 Año de creación de pregunta: 2015
 questions[43]= "44)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[43][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[43][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[43][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[43] = 3;
 units[43] = ['75'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 10189. Examen TIC A1 2014";
 preguntaids[43] = 10189


//  Id pregunta: 10136 Año de creación de pregunta: 2015
 questions[44]= "45)  Tener la funcionalidad &quot;Thin Provisioning&quot; en una cabina de almacenamiento conectada a una red SAN nos permite:";
 choices[44]= new Array();
 choices[44][0] = "Asignar menor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[44][1] = "Sobreasignar mayor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[44][2] = "Asignar mediante peque&ntilde;os incrementos los nuevos discos que se incorporen en caliente.";
 choices[44][3] = "Provisionar una capa de control para la virtualizaci&oacute;n del almacenamiento en cloud.";
 answers[44] = 1;
 units[44] = ['53'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10136. Examen TIC A1 2014";
 preguntaids[44] = 10136


//  Id pregunta: 10249 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[45]= new Array();
 choices[45][0] = ".PFX";
 choices[45][1] = ".DER";
 choices[45][2] = ".P7B";
 choices[45][3] = "Todos lo son";
 answers[45] = 3;
 units[45] = ['77'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10249. ";
 preguntaids[45] = 10249


//  Id pregunta: 10205 Año de creación de pregunta: 2015
 questions[46]= "47)  El 3 de Noviembre de 2014 se ha liberado una nueva versi&oacute;n del sistema operativo Android. Se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Android 4.3 Jelly Bean";
 choices[46][1] = "Android 5.0 Lollipop.";
 choices[46][2] = "Android 6.0 Marshmallow.";
 choices[46][3] = "Android 4.4 KitKat.";
 answers[46] = 1;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 10205. ";
 preguntaids[46] = 10205


//  Id pregunta: 10114 Año de creación de pregunta: 2015
 questions[47]= "48)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[47]= new Array();
 choices[47][0] = "6 Gbps.";
 choices[47][1] = "16 Gbps.";
 choices[47][2] = "8 Gbps.";
 choices[47][3] = "3 Gbps.";
 answers[47] = 1;
 units[47] = ['50', '51', '53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 10114. Examen TIC A2 2014";
 preguntaids[47] = 10114


//  Id pregunta: 10287 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[48]= new Array();
 choices[48][0] = "CUDA";
 choices[48][1] = "OpenCL";
 choices[48][2] = "OpenStack";
 choices[48][3] = "MPI";
 answers[48] = 2;
 units[48] = ['49'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10287. Openstack es una soluci&oacute;n open source para montar clouds";
 preguntaids[48] = 10287


//  Id pregunta: 10086 Año de creación de pregunta: 2015
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[49]= new Array();
 choices[49][0] = "OCSP";
 choices[49][1] = "CRL";
 choices[49][2] = "PKCS#10";
 choices[49][3] = "HTTPS";
 answers[49] = 0;
 units[49] = ['77', '78'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 10086. Examen TIC A2 2014";
 preguntaids[49] = 10086


//  Id pregunta: 10284 Año de creación de pregunta: 2015
 questions[50]= "51)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[50]= new Array();
 choices[50][0] = "Es un algoritmo de cifrado de bloques";
 choices[50][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[50][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[50][3] = "B y C son correctas";
 answers[50] = 3;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 10284. ";
 preguntaids[50] = 10284


//  Id pregunta: 10187 Año de creación de pregunta: 2015
 questions[51]= "52)  El tipo de infraestructura de cloud computing que permite mantener las aplicaciones cr&iacute;ticas dentro de una infraestructura controlada y hacer uso de otros servicios y aplicaciones compartidos por varios clientes se denomina:";
 choices[51]= new Array();
 choices[51][0] = "Nube privada";
 choices[51][1] = "Nube h&iacute;brida";
 choices[51][2] = "Nube p&uacute;blica";
 choices[51][3] = "Infraestructura como Servicio (IaaS)";
 answers[51] = 1;
 units[51] = ['52'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 10187. Examen TIC A1 2014";
 preguntaids[51] = 10187


//  Id pregunta: 10242 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Qu&eacute; Directiva establece las reglas generales para el establecimiento de una Infraestructura de Informaci&oacute;n Espacial en la Comunidad Europea basada en las Infraestructuras de los Estados miembros?";
 choices[52]= new Array();
 choices[52][0] = "INSPIRE";
 choices[52][1] = "SIGPAC";
 choices[52][2] = "SIC";
 choices[52][3] = "SIGMAPA";
 answers[52] = 0;
 units[52] = ['71'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 10242. Directiva INSIDE inspira creaci&oacute;n de la IDEE (Infraestructura Datos Espaciales Espa&ntilde;a)";
 preguntaids[52] = 10242


//  Id pregunta: 10143 Año de creación de pregunta: 2015
 questions[53]= "54)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[53]= new Array();
 choices[53][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[53][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[53][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[53][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[53] = 0;
 units[53] = ['73'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 10143. Examen TIC A1 2014";
 preguntaids[53] = 10143


//  Id pregunta: 10159 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[54]= new Array();
 choices[54][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[54][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[54][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[54][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[54] = 1;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 10159. Examen TIC A1 2014";
 preguntaids[54] = 10159


//  Id pregunta: 10325 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[55]= new Array();
 choices[55][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[55][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[55][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[55][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[55] = 0;
 units[55] = ['53'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 10325. ";
 preguntaids[55] = 10325


//  Id pregunta: 10232 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[56]= new Array();
 choices[56][0] = "Intersecci&oacute;n";
 choices[56][1] = "Uni&oacute;n";
 choices[56][2] = "Proyecci&oacute;n";
 choices[56][3] = "Diferencia";
 answers[56] = 0;
 units[56] = ['61'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 10232. ";
 preguntaids[56] = 10232


//  Id pregunta: 10282 Año de creación de pregunta: 2015
 questions[57]= "58)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[57]= new Array();
 choices[57][0] = "No, no se puede";
 choices[57][1] = "S&iacute;, la clave es k = m XOR c";
 choices[57][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[57][3] = "S&iacute;, la clave es k = m XOR m";
 answers[57] = 1;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10282. ";
 preguntaids[57] = 10282


//  Id pregunta: 10179 Año de creación de pregunta: 2015
 questions[58]= "59)  Respecto a los ficheros de firma electr&oacute;nica y los documentos firmados electr&oacute;nicamente, se&ntilde;ale la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "El documento firmado siempre va inclu&iacute;do en el fichero de firma, tanto en XAdES como en CAdES.";
 choices[58][1] = "En CAdES, el documento puede no incluirse en el fichero de firma. Estas firmas se llaman expl&iacute;citas.";
 choices[58][2] = "El documento firmado se incluye en el fichero de firma en XAdES, y no se puede incluir en CAdES.";
 choices[58][3] = "En XAdES, s&oacute;lo se puede firmar de forma impl&iacute;cita, en la que el documento no se incluye en el resultado de firma y solamente se incluye una referencia al lugar en el que se encuentra.";
 answers[58] = 1;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 10179. Examen TIC A1 2014";
 preguntaids[58] = 10179


//  Id pregunta: 10117 Año de creación de pregunta: 2015
 questions[59]= "60)  Apache Hadoop es un framework de software que implementa un sistema de ficheros que se inspir&oacute; en:";
 choices[59]= new Array();
 choices[59][0] = "HP Data File System.";
 choices[59][1] = "Google File System.";
 choices[59][2] = "Network File System.";
 choices[59][3] = "High Density File System.";
 answers[59] = 1;
 units[59] = ['73'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 10117. Examen TIC A1 2014";
 preguntaids[59] = 10117


//  Id pregunta: 10188 Año de creación de pregunta: 2015
 questions[60]= "61)  Respecto a los formatos de ficheros de im&aacute;genes, se&ntilde;ale la respuesta correcta:";
 choices[60]= new Array();
 choices[60][0] = "El formato de ficheros GIF utiliza un algoritmo de compresi&oacute;n sin p&eacute;rdidas hasta los 256 colores.";
 choices[60][1] = "El formato BMP es el formato t&iacute;pico usado por el sistema operativo Linux.";
 choices[60][2] = "Los archivos RAW son compatibles con los formatos TIFF y JPEG.";
 choices[60][3] = "El formato WMK es el m&aacute;s utilizado para los sistemas de grabaci&oacute;n de video.";
 answers[60] = 0;
 units[60] = ['62'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 10188. Examen TIC A1 2014";
 preguntaids[60] = 10188


//  Id pregunta: 10234 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[61]= new Array();
 choices[61][0] = "Oracle";
 choices[61][1] = "SQL Server";
 choices[61][2] = "PostgreSQL";
 choices[61][3] = "MySQL";
 answers[61] = 1;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 10234. SQL Server es la soluci&oacute;n de Microsoft";
 preguntaids[61] = 10234


//  Id pregunta: 10183 Año de creación de pregunta: 2015
 questions[62]= "63)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[62]= new Array();
 choices[62][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[62][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[62][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[62][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[62] = 1;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10183. Examen TIC A1 2014";
 preguntaids[62] = 10183


//  Id pregunta: 10235 Año de creación de pregunta: 2015
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[63]= new Array();
 choices[63][0] = "Fue creado por Peter Chen";
 choices[63][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[63][2] = "Las estructuras de datos son complejas";
 choices[63][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[63] = 1;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 10235. ";
 preguntaids[63] = 10235


//  Id pregunta: 10098 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[64]= new Array();
 choices[64][0] = "Modo ECB (Electronic CodeBook).";
 choices[64][1] = "Modo CBC (Cipher Block Chaining).";
 choices[64][2] = "Modo OFB (Output FeedBack).";
 choices[64][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[64] = 3;
 units[64] = ['77', '78'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 10098. Examen TIC A2 2014";
 preguntaids[64] = 10098


//  Id pregunta: 10102 Año de creación de pregunta: 2015
 questions[65]= "66)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[65]= new Array();
 choices[65][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[65][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[65][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[65][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[65] = 3;
 units[65] = ['62'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 10102. Examen TIC A2 2014";
 preguntaids[65] = 10102


//  Id pregunta: 10256 Año de creación de pregunta: 2015
 questions[66]= "67)  Se&ntilde;ale la respuesta FALSA sobre 3D-Secure";
 choices[66]= new Array();
 choices[66][0] = "Es un protocolo basado en XML";
 choices[66][1] = "Se utiliza para asegurar el pago con tarjeta en Internet";
 choices[66][2] = "Es susceptible de ataques &quot;man-in-the-middle&quot;";
 choices[66][3] = "Todas son correctas";
 answers[66] = 3;
 units[66] = ['75'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10256. ";
 preguntaids[66] = 10256


//  Id pregunta: 10166 Año de creación de pregunta: 2015
 questions[67]= "68)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[67]= new Array();
 choices[67][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[67][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[67][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[67][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[67] = 0;
 units[67] = ['78'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 10166. Examen TIC A1 2014";
 preguntaids[67] = 10166


//  Id pregunta: 10247 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[68]= new Array();
 choices[68][0] = "MD5";
 choices[68][1] = "SHA-1";
 choices[68][2] = "SHA-384";
 choices[68][3] = "WHIRLPOOL";
 answers[68] = 3;
 units[68] = ['76'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10247. WHIRLPOOL produce un Hash de 512 bits";
 preguntaids[68] = 10247


//  Id pregunta: 10231 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes NO es una regla de Codd?";
 choices[69]= new Array();
 choices[69][0] = "Regla del Acceso Garantizado";
 choices[69][1] = "Regla de Actualizaci&oacute;n de Vistas";
 choices[69][2] = "Independencia L&oacute;gica de Datos";
 choices[69][3] = "Regla de la Subversi&oacute;n";
 answers[69] = 3;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 10231. La Regla 12 es de la No Subversi&oacute;n";
 preguntaids[69] = 10231


//  Id pregunta: 10230 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "Modelo de Datos a Modelo est&aacute;tico";
 choices[70][1] = "Modelo de Objetos a Modelo funcional";
 choices[70][2] = "Modelo de Procesos a Modelo din&aacute;mico";
 choices[70][3] = "Modelo de Estados a Modelo funcional";
 answers[70] = 0;
 units[70] = ['60'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 10230. ";
 preguntaids[70] = 10230


//  Id pregunta: 10076 Año de creación de pregunta: 2015
 questions[71]= "72)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[71]= new Array();
 choices[71][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[71][1] = "RAID 0.";
 choices[71][2] = "RAID 1.";
 choices[71][3] = "RAID 5.";
 answers[71] = 1;
 units[71] = ['53'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 10076. Examen TIC A2 2014";
 preguntaids[71] = 10076


//  Id pregunta: 10225 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l es una plataforma pionera de software abierto que permite el desarrollo de clouds privados de infraestructuras como servicio (IaaS)?";
 choices[72]= new Array();
 choices[72][0] = "VMWARE";
 choices[72][1] = "EUCALYPTUS";
 choices[72][2] = "LYRIUS";
 choices[72][3] = "AMAPOLUS";
 answers[72] = 1;
 units[72] = ['52'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 10225. Adquirida en 2015 por HPE";
 preguntaids[72] = 10225


//  Id pregunta: 10195 Año de creación de pregunta: 2015
 questions[73]= "74)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[73][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[73][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[73][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[73] = 1;
 units[73] = ['62'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 10195. Examen TIC A1 2014";
 preguntaids[73] = 10195


//  Id pregunta: 10103 Año de creación de pregunta: 2015
 questions[74]= "75)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[74]= new Array();
 choices[74][0] = "OWL";
 choices[74][1] = "RQUERY";
 choices[74][2] = "JQUERY";
 choices[74][3] = "SPARQL";
 answers[74] = 3;
 units[74] = ['74'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10103. Examen TIC A2 2014";
 preguntaids[74] = 10103


