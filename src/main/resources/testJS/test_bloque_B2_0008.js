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
//  Id pregunta: 2567 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows?";
 choices[0]= new Array();
 choices[0][0] = "ASP.NET";
 choices[0][1] = "PHP";
 choices[0][2] = "Java EE (Servlets)";
 choices[0][3] = "Todas son v&aacute;lidas";
 answers[0] = 3;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2567. ";
 preguntaids[0] = 2567


//  Id pregunta: 2520 Año de creación de pregunta: 2004
 questions[1]= "2)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[1]= new Array();
 choices[1][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[1][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[1][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[1][3] = "Ninguna de las anteriores.";
 answers[1] = 1;
 units[1] = ['72'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2520. Similar a examen TIC SS A 2003";
 preguntaids[1] = 2520


//  Id pregunta: 2564 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Qu&eacute; significado tiene el concepto &ldquo;World Wide Grid&rdquo; (WWG)?:";
 choices[2]= new Array();
 choices[2][0] = "Compartici&oacute;n de informaci&oacute;n a trav&eacute;s de internet";
 choices[2][1] = "Compartici&oacute;n de datos e infraestructuras inform&aacute;ticas entre todas las disciplinas cient&iacute;ficas y todos los campos de la industria entre equipos dispersos";
 choices[2][2] = "La extensi&oacute;n de Internet a todos los rincones del mundo";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = 1;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2564. ";
 preguntaids[2] = 2564


//  Id pregunta: 2582 Año de creación de pregunta: 2002
 questions[3]= "4)  Arquitectura &ldquo;fault tolerant&rdquo; significa:";
 choices[3]= new Array();
 choices[3][0] = "Que el sistema tiene elementos redundantes activos";
 choices[3][1] = "Que el sistema es capaz de funcionar correctamente a&uacute;n en el caso de fallo de algunos elementos";
 choices[3][2] = "Que el sistema tiene elementos redundantes pasivos";
 choices[3][3] = "Todas las anteriores son ciertas";
 answers[3] = 1;
 units[3] = ['50'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2582. ";
 preguntaids[3] = 2582


//  Id pregunta: 2566 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; son los midlets?:";
 choices[4]= new Array();
 choices[4][0] = "Son aplicaciones Java para la capa de middleware";
 choices[4][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[4][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[4][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[4] = 3;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2566. ";
 preguntaids[4] = 2566


//  Id pregunta: 2594 Año de creación de pregunta: 2002
 questions[5]= "6)  Comparando la criptograf&iacute;a de clave secreta frente a la criptograf&iacute;a asim&eacute;trica. &iquest;C&uacute;al de los dos tipos de criptograf&iacute;a es m&aacute;s segura, suponiendo igual longitud de clave?:";
 choices[5]= new Array();
 choices[5][0] = "La de clave secreta";
 choices[5][1] = "La asim&eacute;trica";
 choices[5][2] = "Son igual de seguras";
 choices[5][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[5] = 0;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2594. ";
 preguntaids[5] = 2594


//  Id pregunta: 2598 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el &aacute;lgebra relacional?:";
 choices[6]= new Array();
 choices[6][0] = "El &aacute;lgebra relacional es un lenguaje procedimental";
 choices[6][1] = "Los operadores de selecci&oacute;n, proyecci&oacute;n, uni&oacute;n y diferencia forman un conjunto relacionalmente completo";
 choices[6][2] = "Todos los operadores de consulta son derivables de los operadores fundamentales";
 choices[6][3] = "El &lsquo;join&rsquo; es un operador de compuesto de selecci&oacute;n y proyecci&oacute;n";
 answers[6] = 0;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2598. ";
 preguntaids[6] = 2598


//  Id pregunta: 2548 Año de creación de pregunta: 2004
 questions[7]= "8)  Indique cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric MultiProcessing) y MPP (Massively Paralleling MultiProcessing) es falsa:";
 choices[7]= new Array();
 choices[7][0] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[7][1] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido en segmentos que se comuniquen entre s&iacute;";
 choices[7][2] = "MPP no sufre el cuello de botella que sufre SMP en el acceso a memoria";
 choices[7][3] = "Un cluster est&aacute; compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[7] = 0;
 units[7] = ['49'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2548. TAI 2004";
 preguntaids[7] = 2548


//  Id pregunta: 2589 Año de creación de pregunta: 2002
 questions[8]= "9)  Un programa shareware:";
 choices[8]= new Array();
 choices[8][0] = "Es software que podemos utilizar libremente";
 choices[8][1] = "Es software que podemos vender libremente";
 choices[8][2] = "Es software que podemos probar libremente";
 choices[8][3] = "No existe este concepto";
 answers[8] = 2;
 units[8] = ['66'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2589. ";
 preguntaids[8] = 2589


//  Id pregunta: 2558 Año de creación de pregunta: 2004
 questions[9]= "10)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos, en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[9]= new Array();
 choices[9][0] = "1FN";
 choices[9][1] = "2FN";
 choices[9][2] = "3FN";
 choices[9][3] = "Boyce-Cood";
 answers[9] = 1;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2558. Examen Seg-Social A 2004";
 preguntaids[9] = 2558


//  Id pregunta: 2529 Año de creación de pregunta: 2004
 questions[10]= "11)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[10]= new Array();
 choices[10][0] = "WebMin";
 choices[10][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[10][2] = "syslog";
 choices[10][3] = "Performance Monitor";
 answers[10] = 0;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2529. ";
 preguntaids[10] = 2529


//  Id pregunta: 2543 Año de creación de pregunta: 2004
 questions[11]= "12)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[11]= new Array();
 choices[11][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[11][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[11][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = 1;
 units[11] = ['49'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2543. ";
 preguntaids[11] = 2543


//  Id pregunta: 2581 Año de creación de pregunta: 2002
 questions[12]= "13)  Apache:";
 choices[12]= new Array();
 choices[12][0] = "Es un servidor web disponible para plataformas Windows";
 choices[12][1] = "Es una licencia para software libre";
 choices[12][2] = "Es el servidor web libre m&aacute;s utilizado en sistemas Unix/Linux";
 choices[12][3] = "Todas las respuestas anteriores son correctas";
 answers[12] = 3;
 units[12] = ['66'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2581. ";
 preguntaids[12] = 2581


//  Id pregunta: 2531 Año de creación de pregunta: 2004
 questions[13]= "14)  En Java, respecto a la herencia de clases ...";
 choices[13]= new Array();
 choices[13][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[13][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[13][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[13][3] = "Todas las anteriores son falsas";
 answers[13] = 3;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2531. ";
 preguntaids[13] = 2531


//  Id pregunta: 2565 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[14]= new Array();
 choices[14][0] = "Circuitos integrados especializados";
 choices[14][1] = "Advanced Set Instructions Complex";
 choices[14][2] = "Nada";
 choices[14][3] = "Procesadores generales";
 answers[14] = 0;
 units[14] = ['50'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2565. Application-Specific Integrated Circuit";
 preguntaids[14] = 2565


//  Id pregunta: 2533 Año de creación de pregunta: 2004
 questions[15]= "16)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[15]= new Array();
 choices[15][0] = "CryptoAPI";
 choices[15][1] = "PKCS#7";
 choices[15][2] = "PKCS#11";
 choices[15][3] = "JCE/JCA";
 answers[15] = 1;
 units[15] = ['78'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2533. ";
 preguntaids[15] = 2533


//  Id pregunta: 2597 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[16]= new Array();
 choices[16][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[16][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[16][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[16][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[16] = 0;
 units[16] = ['60'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2597. ";
 preguntaids[16] = 2597


//  Id pregunta: 2576 Año de creación de pregunta: 2002
 questions[17]= "18)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[17]= new Array();
 choices[17][0] = "Cumple con la segunda forma normal";
 choices[17][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[17][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[17][3] = "No cumple la segunda forma normal";
 answers[17] = 3;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 2576. ";
 preguntaids[17] = 2576


//  Id pregunta: 2535 Año de creación de pregunta: 2004
 questions[18]= "19)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[18]= new Array();
 choices[18][0] = "ODBC";
 choices[18][1] = "ADO";
 choices[18][2] = "OLE DB";
 choices[18][3] = "Cualquiera de los anteriores";
 answers[18] = 3;
 units[18] = ['63'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2535. ";
 preguntaids[18] = 2535


//  Id pregunta: 2545 Año de creación de pregunta: 2004
 questions[19]= "20)  &iquest;Qu&eacute; significado tienen las siguientes siglas COLD?";
 choices[19]= new Array();
 choices[19][0] = "Computer Output to laser Disk";
 choices[19][1] = "Computer on line disk";
 choices[19][2] = "Computer Optical Laser Disk";
 choices[19][3] = "ninguna de las anteriores";
 answers[19] = 0;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2545. ";
 preguntaids[19] = 2545


//  Id pregunta: 2546 Año de creación de pregunta: 2004
 questions[20]= "21)  &iquest;Qu&eacute; significan las siglas JNI?";
 choices[20]= new Array();
 choices[20][0] = "Interfaz para llamar m&eacute;todos nativos";
 choices[20][1] = "Sistema de directorio";
 choices[20][2] = "Sistema para datamining";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 0;
 units[20] = ['64'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2546. ";
 preguntaids[20] = 2546


//  Id pregunta: 2524 Año de creación de pregunta: 2004
 questions[21]= "22)  La criptograf&iacute;a sirve para codificar:";
 choices[21]= new Array();
 choices[21][0] = "Lenguaje manuscrito";
 choices[21][1] = "Lenguaje manuscrito y datos";
 choices[21][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[21][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[21] = 1;
 units[21] = ['76'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2524. Similar a examen TIC SS A 2003";
 preguntaids[21] = 2524


//  Id pregunta: 2508 Año de creación de pregunta: 2004
 questions[22]= "23)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[22]= new Array();
 choices[22][0] = "DXL (Document eXtended Language)";
 choices[22][1] = "DTD (Document Type Definition)";
 choices[22][2] = "DOM (Document Object Model)";
 choices[22][3] = "DML (Document Markup Language)";
 answers[22] = 1;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2508. Examen TIC MAP B 2004";
 preguntaids[22] = 2508


//  Id pregunta: 2578 Año de creación de pregunta: 2002
 questions[23]= "24)  Acerca de las memorias de lectura y escritura, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[23]= new Array();
 choices[23][0] = "Se basan en puntos de memoria de tipo biestable, que mantienen su estado siempre que no se interrumpa la alimentaci&oacute;n";
 choices[23][1] = "Las RAM din&aacute;micas son vol&aacute;tiles, requieren refresco, con un periodo del orden de unos pocos milisegundos";
 choices[23][2] = "Las RAM din&aacute;micas consumen m&aacute;s que las RAM est&aacute;ticas";
 choices[23][3] = "Las RAM est&aacute;ticas son mucho m&aacute;s econ&oacute;micas que las RAM din&aacute;micas";
 answers[23] = 3;
 units[23] = ['56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2578. ";
 preguntaids[23] = 2578


//  Id pregunta: 2563 Año de creación de pregunta: 2004
 questions[24]= "25)  En un sistema de memoria virtual, el &quot;bit de suciedad&quot; (dirty bit) se utiliza para:";
 choices[24]= new Array();
 choices[24][0] = "Saber si los datos siguen siendo v&aacute;lidos antes de que la CPU los utilice.";
 choices[24][1] = "Detectar corrupci&oacute;n de datos debida a fallos de hardware o a interferencias electromagn&eacute;ticas.";
 choices[24][2] = "Determinar si los datos se deben escribir en disco antes de ser reemplazados.";
 choices[24][3] = "Saber si los datos ya est&aacute;n disponibles en la memoria cache.";
 answers[24] = 2;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2563. ";
 preguntaids[24] = 2563


//  Id pregunta: 2551 Año de creación de pregunta: 2002
 questions[25]= "26)  En teor&iacute;a de colas, &iquest;qu&eacute; se entiende por tiempo de respuesta?:";
 choices[25]= new Array();
 choices[25][0] = "El tiempo que una tarea emplea en un dispositivo del sistema, ya sea us&aacute;ndolo o esperando utilizarlo";
 choices[25][1] = "El tiempo que una tarea emplea usando los componentes del sistema";
 choices[25][2] = "El tiempo que una tarea espera para poder usar un recurso que est&aacute; siendo utilizado por otra";
 choices[25][3] = "La cantidad  de tiempo extra empleado en esperas";
 answers[25] = 0;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2551. ";
 preguntaids[25] = 2551


//  Id pregunta: 2536 Año de creación de pregunta: 2004
 questions[26]= "27)  La orden chmod";
 choices[26]= new Array();
 choices[26][0] = "bloquea un archivo en windows";
 choices[26][1] = "cambia los permisos de un achivo en linux - unix";
 choices[26][2] = "crea un directorio modificable en unix";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 1;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2536. ";
 preguntaids[26] = 2536


//  Id pregunta: 2549 Año de creación de pregunta: 2004
 questions[27]= "28)  Los sistema multiagentes";
 choices[27]= new Array();
 choices[27][0] = "trabajan siempre asociados a arquitecturas de pizarra";
 choices[27][1] = "tienen un control centralizado por lo que no tienen autonom&iacute;a en los agentes";
 choices[27][2] = "cada uno de los agentes es capaz de decidir por si mismo";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 2;
 units[27] = ['67'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2549. ";
 preguntaids[27] = 2549


//  Id pregunta: 2556 Año de creación de pregunta: 2004
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos es de tipo asim&eacute;trico?";
 choices[28]= new Array();
 choices[28][0] = "Triple DES (TDES)";
 choices[28][1] = "Rinjdael (AES)";
 choices[28][2] = "Diffie-Hellman";
 choices[28][3] = "IDEA (International Data Encription Algorithm)";
 answers[28] = 2;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2556. Examen Seg-Social A 2004";
 preguntaids[28] = 2556


//  Id pregunta: 2541 Año de creación de pregunta: 2004
 questions[29]= "30)  Los tipos de tarjetas inteligentes son";
 choices[29]= new Array();
 choices[29][0] = "de acoplamiento";
 choices[29][1] = "de vecindad";
 choices[29][2] = "de proximidad";
 choices[29][3] = "todas las anteriores";
 answers[29] = 3;
 units[29] = ['78'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2541. ";
 preguntaids[29] = 2541


//  Id pregunta: 2522 Año de creación de pregunta: 2004
 questions[30]= "31)  Los algoritmos de cifrado que utilizaban los antiguos romanos eran de clave:";
 choices[30]= new Array();
 choices[30][0] = "sim&eacute;trica";
 choices[30][1] = "asim&eacute;trica";
 choices[30][2] = "diferencial";
 choices[30][3] = "clave sim&eacute;trica o asim&eacute;trica, dependiendo del algoritmo";
 answers[30] = 0;
 units[30] = ['76'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2522. Similar a examen TIC SS A 2003";
 preguntaids[30] = 2522


//  Id pregunta: 2519 Año de creación de pregunta: 2004
 questions[31]= "32)  Entre las caracter&iacute;sticas de un Data Warehouse se encuentra que es un sistema:";
 choices[31]= new Array();
 choices[31][0] = "Independiente del tiempo.";
 choices[31][1] = "Integrado.";
 choices[31][2] = "Vol&aacute;til.";
 choices[31][3] = "Ninguna de las anteriores.";
 answers[31] = 1;
 units[31] = ['72'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2519. Similar a examen TIC SS A 2003";
 preguntaids[31] = 2519


//  Id pregunta: 2507 Año de creación de pregunta: 2004
 questions[32]= "33)  En una base de datos las vistas";
 choices[32]= new Array();
 choices[32][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[32][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[32][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[32][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[32] = 1;
 units[32] = ['60'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2507. Examen TIC MAP B 2004";
 preguntaids[32] = 2507


//  Id pregunta: 2509 Año de creación de pregunta: 2004
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[33]= new Array();
 choices[33][0] = "RAID 1";
 choices[33][1] = "RAID 0";
 choices[33][2] = "RAID 2";
 choices[33][3] = "RAID 5";
 answers[33] = 0;
 units[33] = ['53'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2509. Examen TIC MAP B 2004";
 preguntaids[33] = 2509


//  Id pregunta: 2540 Año de creación de pregunta: 2004
 questions[34]= "35)  Con respecto a las tecnolog&iacute;as de desarrollo web:";
 choices[34]= new Array();
 choices[34][0] = "IIS act&uacute;a como servidor web de Microsoft";
 choices[34][1] = "No se puede acceder a una base de datos Oracle desde un entorno Microsoft";
 choices[34][2] = "Las p&aacute;ginas ASP suelen funcionar sobre servidores Apache";
 choices[34][3] = "SQL Server suele estar asociado a la tecnolog&iacute;a PHP";
 answers[34] = 0;
 units[34] = ['62'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2540. ";
 preguntaids[34] = 2540


//  Id pregunta: 2527 Año de creación de pregunta: 2004
 questions[35]= "36)  El lenguaje Java Script:";
 choices[35]= new Array();
 choices[35][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[35][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[35][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[35][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[35] = 1;
 units[35] = ['66'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2527. Examen TIC MAP B 2004";
 preguntaids[35] = 2527


//  Id pregunta: 2579 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes sistemas operativos no es un sistema multiusuario que permite a sus usuarios iniciar sesiones en ellos mediante terminales?";
 choices[36]= new Array();
 choices[36][0] = "Unix";
 choices[36][1] = "Z/OS";
 choices[36][2] = "Microsoft Windows";
 choices[36][3] = "Todas los sistemas anteriores lo permiten.";
 answers[36] = 3;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2579. ";
 preguntaids[36] = 2579


//  Id pregunta: 2518 Año de creación de pregunta: 2004
 questions[37]= "38)  En inteligencia artificial, los marcos";
 choices[37]= new Array();
 choices[37][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[37][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[37][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[37][3] = "Se representan mediante nodos y arcos";
 answers[37] = 0;
 units[37] = ['68'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2518. Similar a examen TIC SS A 2003";
 preguntaids[37] = 2518


//  Id pregunta: 2553 Año de creación de pregunta: 2002
 questions[38]= "39)  Indique una caracter&iacute;stica del software libre:";
 choices[38]= new Array();
 choices[38][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[38][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[38][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[38][3] = "Todas las respuestas son correctas";
 answers[38] = 3;
 units[38] = ['66'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2553. ";
 preguntaids[38] = 2553


//  Id pregunta: 2517 Año de creación de pregunta: 2004
 questions[39]= "40)  En la arquitectura cliente-servidor es falso que:";
 choices[39]= new Array();
 choices[39][0] = "Cliente y servidor tienen que estar obligatoriamente en distintas m&aacute;quinas";
 choices[39][1] = "Un servidor atiende a muchos clientes";
 choices[39][2] = "Hay m&aacute;s tr&aacute;fico de servidor a cliente que de cliente a servidor";
 choices[39][3] = "Todas las respuestas anteriores son verdaderas";
 answers[39] = 0;
 units[39] = ['55'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2517. Similar a examen TIC SS A 2003";
 preguntaids[39] = 2517


//  Id pregunta: 2538 Año de creación de pregunta: 2004
 questions[40]= "41)  En el entorno de la seguridad de los sistemas operativos UNIX y redes de ordenadores, se llama socket:";
 choices[40]= new Array();
 choices[40][0] = "A la combinaci&oacute;n de una direcci&oacute;n de m&aacute;quina y un puerto";
 choices[40][1] = "A la combinaci&oacute;n de una direcci&oacute;n m&aacute;quina, un puerto y un usuario autenticado de una aplicaci&oacute;n";
 choices[40][2] = "A la conexi&oacute;n entre la m&aacute;quina receptora y la emisora en una red con protocolos TCP/IP";
 choices[40][3] = "Es el protocolo (puerto 113, TCP) que utiliza un mecanismo para determinar nombres de usuarios en conexiones TCP. Trabaja conjuntamente con procesos del tipo &quot;identd&quot; y programas &quot;TCP Wrappers&quot;";
 answers[40] = 0;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2538. ";
 preguntaids[40] = 2538


//  Id pregunta: 2521 Año de creación de pregunta: 2004
 questions[41]= "42)  Las aplicaciones Java son comprobadas:";
 choices[41]= new Array();
 choices[41][0] = "en tiempo de compilaci&oacute;n";
 choices[41][1] = "en tiempo de ejecuci&oacute;n";
 choices[41][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[41][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[41] = 2;
 units[41] = ['64'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2521. Similar a examen TIC SS A 2003";
 preguntaids[41] = 2521


//  Id pregunta: 2592 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;C&oacute;mo se llama al m&oacute;dulo, del cual una &uacute;nica copia cargada en memoria puede ser utilizada simult&aacute;neamente por varios usuarios?:";
 choices[42]= new Array();
 choices[42][0] = "M&oacute;dulo concurrente";
 choices[42][1] = "M&oacute;dulo compartido";
 choices[42][2] = "M&oacute;dulo reentrante";
 choices[42][3] = "M&oacute;dulo reusable";
 answers[42] = 2;
 units[42] = ['56'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2592. ";
 preguntaids[42] = 2592


//  Id pregunta: 2554 Año de creación de pregunta: 2005
 questions[43]= "44)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[43]= new Array();
 choices[43][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[43][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[43][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[43][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[43] = 2;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2554. ";
 preguntaids[43] = 2554


//  Id pregunta: 2506 Año de creación de pregunta: 2004
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes conceptos se clasifica dentro de la tipolog&iacute;a de &quot;Estructuras de datos no lineales&quot;?";
 choices[44]= new Array();
 choices[44][0] = "Pilas";
 choices[44][1] = "Listas";
 choices[44][2] = "Colas";
 choices[44][3] = "&Aacute;rboles";
 answers[44] = 3;
 units[44] = ['60'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2506. Examen TIC MAP B 2004";
 preguntaids[44] = 2506


//  Id pregunta: 2550 Año de creación de pregunta: 2002
 questions[45]= "46)  En telecomunicaciones, EFT son las siglas de:";
 choices[45]= new Array();
 choices[45][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[45][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[45][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[45][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[45] = 1;
 units[45] = ['75'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2550. ";
 preguntaids[45] = 2550


//  Id pregunta: 2542 Año de creación de pregunta: 2009
 questions[46]= "47)  En los servicios de directorio";
 choices[46]= new Array();
 choices[46][0] = "varias entradas pueden compartir un DN";
 choices[46][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[46][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[46][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[46] = 2;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2542. ";
 preguntaids[46] = 2542


//  Id pregunta: 2577 Año de creación de pregunta: 2002
 questions[47]= "48)  Acerca de la memoria virtual, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[47]= new Array();
 choices[47][0] = "Se distingue el mapa de direcciones l&oacute;gicas o virtual y el mapa de direcciones f&iacute;sicas o reales. Las direcciones f&iacute;sicas y l&oacute;gicas son del mismo tama&ntilde;o";
 choices[47][1] = "Con paginaci&oacute;n se resuelven todos los problemas de fragmentaci&oacute;n de memoria";
 choices[47][2] = "Obliga a tener en memoria principal todo el contenido del programa durante la ejecuci&oacute;n";
 choices[47][3] = "Con memoria segmentada se complica la traducci&oacute;n de direcciones";
 answers[47] = 3;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2577. ";
 preguntaids[47] = 2577


//  Id pregunta: 2530 Año de creación de pregunta: 2004
 questions[48]= "49)  Indicar la afirmaci&oacute;n INCORRECTA respecto MS ASP.NET";
 choices[48]= new Array();
 choices[48][0] = "ASP.NET puede utilizar cualquier lenguaje de programaci&oacute;n soportado por .NET";
 choices[48][1] = "Es compatible con p&aacute;ginas ASP existentes";
 choices[48][2] = "Necesita el .NET Framework para su ejecuci&oacute;n";
 choices[48][3] = "Se puede utilizar con servidores web que no sean IIS, como Apache o nginx";
 answers[48] = 3;
 units[48] = ['63'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2530. ";
 preguntaids[48] = 2530


//  Id pregunta: 2511 Año de creación de pregunta: 2004
 questions[49]= "50)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[49]= new Array();
 choices[49][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[49][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[49][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[49][3] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[49] = 2;
 units[49] = ['60'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2511. Examen TIC MAP B 2004";
 preguntaids[49] = 2511


//  Id pregunta: 2593 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[50]= new Array();
 choices[50][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[50][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[50][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[50][3] = "Debido a las peculiares caracteristicas de Java, los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[50] = 2;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2593. ";
 preguntaids[50] = 2593


//  Id pregunta: 2537 Año de creación de pregunta: 2004
 questions[51]= "52)  SOAP (Simple Object Access protocol):";
 choices[51]= new Array();
 choices[51][0] = "En un protocolo de programaci&oacute;n orientado a la plataforma .net de Microsoft (COM)";
 choices[51][1] = "Es un protocolo de intercambio electr&oacute;nico de datos EDI ya en desuso y que se utiliz&oacute; en redes orientados a paquetes del tipo X.25";
 choices[51][2] = "Es un protocolo basado en XML que permite invocar m&eacute;todos, servicios, componentes y objetos sobre servidores remotos utilizando HTTP";
 choices[51][3] = "Es un protocolo de acceso a bases de datos orientadas a objetos con el cual Microsoft Corporation ha anunciado recientemente sque se incorporar&aacute; a la comunidad SW de fuentes abiertas";
 answers[51] = 2;
 units[51] = ['56'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2537. ";
 preguntaids[51] = 2537


//  Id pregunta: 2583 Año de creación de pregunta: 2002
 questions[52]= "53)  Asociados a una red sem&aacute;ntica hay 2 procedimientos que permiten proporcionar respuestas navegando por su estructura. Estos procedimientos son:";
 choices[52]= new Array();
 choices[52][0] = "Herencia e inferencia";
 choices[52][1] = "Herencia y emparejamiento";
 choices[52][2] = "Emparejamiento y equiparaci&oacute;n";
 choices[52][3] = "Equiparaci&oacute;n y herencia";
 answers[52] = 1;
 units[52] = ['67'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2583. ";
 preguntaids[52] = 2583


//  Id pregunta: 2571 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Recuerda los nombres de los inventores del lenguaje C?:";
 choices[53]= new Array();
 choices[53][0] = "Hewlett y Packard";
 choices[53][1] = "Ritchie y Kernighan";
 choices[53][2] = "Stalling y Black";
 choices[53][3] = "Bell Laboratories";
 answers[53] = 1;
 units[53] = ['57'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2571. ";
 preguntaids[53] = 2571


//  Id pregunta: 2574 Año de creación de pregunta: 2002
 questions[54]= "55)  A la estructura en disco que contiene la informaci&oacute;n de control de un fichero en un sistema de ficheros Unix se le denomina:";
 choices[54]= new Array();
 choices[54][0] = "I-nodo";
 choices[54][1] = "Cluster";
 choices[54][2] = "Bloque de control";
 choices[54][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[54] = 0;
 units[54] = ['57'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2574. ";
 preguntaids[54] = 2574


//  Id pregunta: 2575 Año de creación de pregunta: 2002
 questions[55]= "56)  A la tabla virtual que se deriva de una o varias tablas f&iacute;sicas y aparece como una ventana personalizada para el usuario, se la conoce por el nombre de:";
 choices[55]= new Array();
 choices[55][0] = "Subesquema de grupo";
 choices[55][1] = "Vista";
 choices[55][2] = "Apuntador de &iacute;ndices";
 choices[55][3] = "Modelo f&iacute;sico";
 answers[55] = 1;
 units[55] = ['60'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2575. ";
 preguntaids[55] = 2575


//  Id pregunta: 2561 Año de creación de pregunta: 2004
 questions[56]= "57)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[56]= new Array();
 choices[56][0] = "iSCSI";
 choices[56][1] = "sSCSI";
 choices[56][2] = "iFCP";
 choices[56][3] = "FCIP";
 answers[56] = 3;
 units[56] = ['53'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2561. Examen Seg-Social A 2004";
 preguntaids[56] = 2561


//  Id pregunta: 2552 Año de creación de pregunta: 2002
 questions[57]= "58)  En Unix o compatibles, la parte del sistema operativo que interactua con el usuario, aceptando comandos, interpretando los procedimientos, etc, se denomina gen&eacute;ricamente:";
 choices[57]= new Array();
 choices[57][0] = "Kernel";
 choices[57][1] = "Interfaz de usuario";
 choices[57][2] = "Shell";
 choices[57][3] = "Motif";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2552. ";
 preguntaids[57] = 2552


//  Id pregunta: 2562 Año de creación de pregunta: 2004
 questions[58]= "59)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[58]= new Array();
 choices[58][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[58][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[58][2] = "Podemos redistribuir todas las copias que queramos";
 choices[58][3] = "No se puede cobrar dinero por el software libre.";
 answers[58] = 3;
 units[58] = ['66'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2562. ";
 preguntaids[58] = 2562


//  Id pregunta: 2523 Año de creación de pregunta: 2004
 questions[59]= "60)  La ciencia que trata de descifrar mensajes cifrados sin conocer los c&oacute;digos se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Criptoan&aacute;lisis o an&aacute;lisis criptogr&aacute;fico";
 choices[59][1] = "Ingenier&iacute;a social";
 choices[59][2] = "Fuerza Bruta";
 choices[59][3] = "Criptograf&iacute;a";
 answers[59] = 0;
 units[59] = ['76'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2523. Similar a examen TIC SS A 2003";
 preguntaids[59] = 2523


//  Id pregunta: 2595 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[60]= new Array();
 choices[60][0] = "Join";
 choices[60][1] = "Selecci&oacute;n";
 choices[60][2] = "Diferencia";
 choices[60][3] = "Proyecci&oacute;n";
 answers[60] = 0;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2595. ";
 preguntaids[60] = 2595


//  Id pregunta: 2584 Año de creación de pregunta: 2002
 questions[61]= "62)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[61]= new Array();
 choices[61][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[61][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[61][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[61][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[61] = 3;
 units[61] = ['67'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2584. ";
 preguntaids[61] = 2584


//  Id pregunta: 2590 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar LDAP?:";
 choices[62]= new Array();
 choices[62][0] = "Compresi&oacute;n de datos";
 choices[62][1] = "Directorio electr&oacute;nico";
 choices[62][2] = "Certificados de clave p&uacute;blica";
 choices[62][3] = "Protocolo de transporte OSI";
 answers[62] = 1;
 units[62] = ['77'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2590. ";
 preguntaids[62] = 2590


//  Id pregunta: 2596 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a la ejecuci&oacute;n de programas en una m&aacute;quina?:";
 choices[63]= new Array();
 choices[63][0] = "Los programas de proceso forman el grueso del sistema operativo";
 choices[63][1] = "Los programas de control funcionan en modo usuario";
 choices[63][2] = "Los programas de control funcionan en modo kernel";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = 2;
 units[63] = ['56'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2596. ";
 preguntaids[63] = 2596


//  Id pregunta: 2534 Año de creación de pregunta: 2004
 questions[64]= "65)  De las siguientes afirmaciones referentes a los sistemas operativos, &iquest;cu&aacute;l es falsa?.";
 choices[64]= new Array();
 choices[64][0] = "El scheduler decide los candidatos a competir por los recursos";
 choices[64][1] = "El dispatcher decide que proceso se ejecuta";
 choices[64][2] = "Para prevenir el deadlock se puede usar el &quot;algoritmo del banquero&quot;.";
 choices[64][3] = "Ninguna de las anteriores es verdadera";
 answers[64] = 3;
 units[64] = ['56'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2534. A, B y C son ciertas, luego es falso que ninguna sea verdadera";
 preguntaids[64] = 2534


//  Id pregunta: 2525 Año de creación de pregunta: 2004
 questions[65]= "66)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[65]= new Array();
 choices[65][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[65][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[65][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[65][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[65] = 2;
 units[65] = ['76'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2525. Similar a examen TIC SS A 2003. Puede haber colisiones aunque con una probabilidad muy baja.";
 preguntaids[65] = 2525


//  Id pregunta: 2580 Año de creación de pregunta: 2002
 questions[66]= "67)  ALGOL, COBOL y FORTRAN son lenguajes de programaci&oacute;n de la d&eacute;cada de los:";
 choices[66]= new Array();
 choices[66][0] = "40s";
 choices[66][1] = "50s";
 choices[66][2] = "60s";
 choices[66][3] = "70s";
 answers[66] = 1;
 units[66] = ['54'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2580. ";
 preguntaids[66] = 2580


//  Id pregunta: 2539 Año de creación de pregunta: 2004
 questions[67]= "68)  Con respecto a la seguridad:";
 choices[67]= new Array();
 choices[67][0] = "PGP basa su modelo en la existencia de una entidad de certificacion";
 choices[67][1] = "Si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[67][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = 3;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2539. ";
 preguntaids[67] = 2539


//  Id pregunta: 2569 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[68]= new Array();
 choices[68][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[68][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[68][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles";
 choices[68][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[68] = 3;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2569. ";
 preguntaids[68] = 2569


//  Id pregunta: 2512 Año de creación de pregunta: 2004
 questions[69]= "70)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[69]= new Array();
 choices[69][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[69][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[69][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[69][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[69] = 3;
 units[69] = ['60'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2512. Examen TIC MAP B 2004";
 preguntaids[69] = 2512


//  Id pregunta: 2591 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[70]= new Array();
 choices[70][0] = "JavaScript";
 choices[70][1] = "Applet";
 choices[70][2] = "Servlet";
 choices[70][3] = "XML";
 answers[70] = 1;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2591. ";
 preguntaids[70] = 2591


//  Id pregunta: 2510 Año de creación de pregunta: 2004
 questions[71]= "72)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[71]= new Array();
 choices[71][0] = "Perceptron";
 choices[71][1] = "Adaline";
 choices[71][2] = "Art";
 choices[71][3] = "Madaline";
 answers[71] = 2;
 units[71] = ['68'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2510. Examen TIC MAP B 2004";
 preguntaids[71] = 2510


//  Id pregunta: 2570 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[72]= new Array();
 choices[72][0] = "Chat";
 choices[72][1] = "Correo electr&oacute;nico";
 choices[72][2] = "Peer to Peer";
 choices[72][3] = "B2C";
 answers[72] = 2;
 units[72] = ['66'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2570. ";
 preguntaids[72] = 2570


//  Id pregunta: 2532 Año de creación de pregunta: 2004
 questions[73]= "74)  Respecto a los 'web services', &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[73]= new Array();
 choices[73][0] = "Se describen mediante el lenguaje WSDL";
 choices[73][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[73][2] = "Pueden interaccionar clientes y servicios de distintas tecnolog&iacute;as";
 choices[73][3] = "Utilizan el protocolo SOAP";
 answers[73] = 1;
 units[73] = ['55'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2532. ";
 preguntaids[73] = 2532


//  Id pregunta: 2526 Año de creación de pregunta: 2004
 questions[74]= "75)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[74]= new Array();
 choices[74][0] = "Secuencia de registros de longitud fija";
 choices[74][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[74][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[74][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[74] = 1;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2526. Examen TIC MAP B 2004";
 preguntaids[74] = 2526


