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
//  Id pregunta: 3006 Año de creación de pregunta: 2002
 questions[0]= "1)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[0]= new Array();
 choices[0][0] = "Controles Java";
 choices[0][1] = "Applets";
 choices[0][2] = "Servlets";
 choices[0][3] = "Aplicaciones CGI";
 answers[0] = 1;
 units[0] = ['64', '65'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3006. ";
 preguntaids[0] = 3006


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[1]= "2)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[1]= new Array();
 choices[1][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[1][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[1][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[1][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[1] = 0;
 units[1] = ['65'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 721. Junta de Extremadura A1 2015";
 preguntaids[1] = 721


//  Id pregunta: 5283 Año de creación de pregunta: 2006
 questions[2]= "3)  Que es LAMP";
 choices[2]= new Array();
 choices[2][0] = "Una arquitectura web basada en software libre";
 choices[2][1] = "Una arquitectura web basada en j2ee";
 choices[2][2] = "Una arquitectura web basada en .Net";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 0;
 units[2] = ['65'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5283. ";
 preguntaids[2] = 5283


//  Id pregunta: 2973 Año de creación de pregunta: 2002
 questions[3]= "4)  Los applets de Java se ejecutan en el:";
 choices[3]= new Array();
 choices[3][0] = "Servidor web";
 choices[3][1] = "Cliente web";
 choices[3][2] = "Servidor de base de datos";
 choices[3][3] = "Servidor de webmail";
 answers[3] = 1;
 units[3] = ['64', '65'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2973. ";
 preguntaids[3] = 2973


//  Id pregunta: 1178 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la manera de proceder en el lenguaje PHP, para poder utilizar dentro de una funci&oacute;n una variable que se define globalmente en una p&aacute;gina:";
 choices[4]= new Array();
 choices[4][0] = "No se debe declarar expl&iacute;citamente, puesto que las variables globales son accesibles directamente desde cualquier funci&oacute;n definida en la misma p&aacute;gina.";
 choices[4][1] = "Se puede usar el array $GLOBALVars para acceder al contenido de la variable.";
 choices[4][2] = "Se podr&iacute;a declarar la variable como global al principio de la funci&oacute;n mediante el uso de la palabra reservada &ldquo;global&rdquo; seguido del nombre de la variable a utilizar.";
 choices[4][3] = "Se debe declarar la variable como &quot;static&quot;.";
 answers[4] = 2;
 units[4] = ['65'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1178. ";
 preguntaids[4] = 1178


//  Id pregunta: 6011 Año de creación de pregunta: 2003
 questions[5]= "6)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[5]= new Array();
 choices[5][0] = "Definen la estructura del documento XML.";
 choices[5][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[5][2] = "Siempre han de estar incluidos en el XML.";
 choices[5][3] = "Contienen elementos y atributos.";
 answers[5] = 0;
 units[5] = ['65'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6011. TIC B 2007";
 preguntaids[5] = 6011


//  Id pregunta: 5267 Año de creación de pregunta: 2006
 questions[6]= "7)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[6]= new Array();
 choices[6][0] = "Las relaciones con los clientes";
 choices[6][1] = "Las relaciones con los Empleados";
 choices[6][2] = "Las relaciones con clientes y empleados";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = 0;
 units[6] = ['65'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 5267. ";
 preguntaids[6] = 5267


//  Id pregunta: 2914 Año de creación de pregunta: 2002
 questions[7]= "8)  Java ME es:";
 choices[7]= new Array();
 choices[7][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[7][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[7][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[7][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[7] = 1;
 units[7] = ['64', '65'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2914. ";
 preguntaids[7] = 2914


//  Id pregunta: 2918 Año de creación de pregunta: 2002
 questions[8]= "9)  JDeveloper es:";
 choices[8]= new Array();
 choices[8][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[8][1] = "Una base de datos";
 choices[8][2] = "Un gestor de contenidos";
 choices[8][3] = "Un gestor de informes";
 answers[8] = 0;
 units[8] = ['64', '65'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2918. ";
 preguntaids[8] = 2918


//  Id pregunta: 2916 Año de creación de pregunta: 2002
 questions[9]= "10)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[9]= new Array();
 choices[9][0] = "Siemens";
 choices[9][1] = "Sun Microsystems";
 choices[9][2] = "General Electric";
 choices[9][3] = "IBM";
 answers[9] = 1;
 units[9] = ['64', '65'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2916. ";
 preguntaids[9] = 2916


//  Id pregunta: 2983 Año de creación de pregunta: 2002
 questions[10]= "11)  Los programas fuente Java:";
 choices[10]= new Array();
 choices[10][0] = "Se compilan siempre";
 choices[10][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[10][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[10][3] = "Hay partes compiladas y partes interpretadas";
 answers[10] = 0;
 units[10] = ['64', '65'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2983. Siempre se compilan a Bytecode.";
 preguntaids[10] = 2983


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l es la etiqueta de comienzo de un fichero PHP?";
 choices[11]= new Array();
 choices[11][0] = "&lt;php";
 choices[11][1] = "&lt;?php";
 choices[11][2] = "&lt;@";
 choices[11][3] = "&lt;!";
 answers[11] = 1;
 units[11] = ['65'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 720. AGE A2 2015";
 preguntaids[11] = 720


//  Id pregunta: 10001 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n utiliza las instrucciones begin/rescue/ensure/end para tratar las excepciones?";
 choices[12]= new Array();
 choices[12][0] = "Perl.";
 choices[12][1] = "Python.";
 choices[12][2] = "Ruby.";
 choices[12][3] = "PHP.";
 answers[12] = 2;
 units[12] = ['65'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 10001. Examen TIC A2 2014";
 preguntaids[12] = 10001


//  Id pregunta: 5284 Año de creación de pregunta: 2006
 questions[13]= "14)  Que es TRAM";
 choices[13]= new Array();
 choices[13][0] = "Una arquitectura web basada en software libre";
 choices[13][1] = "Una arquitectura web basada en j2ee";
 choices[13][2] = "Una arquitectura web basada en .Net";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = 3;
 units[13] = ['65'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 5284. ";
 preguntaids[13] = 5284


//  Id pregunta: 2915 Año de creación de pregunta: 2002
 questions[14]= "15)  Java ME:";
 choices[14]= new Array();
 choices[14][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[14][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[14][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[14][3] = "Todas las anteriores respuestas son falsas";
 answers[14] = 0;
 units[14] = ['64', '65'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2915. ";
 preguntaids[14] = 2915


//  Id pregunta: 2912 Año de creación de pregunta: 2002
 questions[15]= "16)  Indique una caracter&iacute;stica falsa de Java:";
 choices[15]= new Array();
 choices[15][0] = "Es interpretado y portable a distintas plataformas";
 choices[15][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[15][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[15][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[15] = 3;
 units[15] = ['64', '65'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2912. ";
 preguntaids[15] = 2912


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[16]= new Array();
 choices[16][0] = "Memcached";
 choices[16][1] = "OpCache";
 choices[16][2] = "WinCache Extension for PHP";
 choices[16][3] = "Alternative PHP Cache";
 answers[16] = 0;
 units[16] = ['65'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 719. AGE A1 2015";
 preguntaids[16] = 719


//  Id pregunta: 5266 Año de creación de pregunta: 2006
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de Nomina";
 choices[17][1] = "Gesti&oacute;n de RRHH";
 choices[17][2] = "Gesti&oacute;n de Contabilidad";
 choices[17][3] = "Gesti&oacute;n de Clientes";
 answers[17] = 3;
 units[17] = ['65'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 5266. ";
 preguntaids[17] = 5266


//  Id pregunta: 6710 Año de creación de pregunta: 2009
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[18]= new Array();
 choices[18][0] = "Software de gesti&oacute;n de incidencias";
 choices[18][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[18][2] = "Datawarehouse";
 choices[18][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[18] = 2;
 units[18] = ['65'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6710. MAP 2008 A1";
 preguntaids[18] = 6710


//  Id pregunta: 2883 Año de creación de pregunta: 2002
 questions[19]= "20)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[19]= new Array();
 choices[19][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[19][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[19][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[19][3] = "Todas las anteriores son ciertas";
 answers[19] = 1;
 units[19] = ['64', '65'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2883. ";
 preguntaids[19] = 2883


