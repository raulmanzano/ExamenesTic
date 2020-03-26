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
//  Id pregunta: 8605 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;Qu&eacute; era Meego?";
 choices[0]= new Array();
 choices[0][0] = "la uni&oacute;n de los sistemas operativos Maemo y Moblin, con el que Intel y Google pretend&iacute;ann competir con el sistema iOs de Apple. Fue el inicio del sistema Android.";
 choices[0][1] = "Est&aacute; auspiciado por la Linux Foundation";
 choices[0][2] = "Una competencia al Android de Google.";
 choices[0][3] = "La B) y la C) son correctas.";
 answers[0] = 3;
 units[0] = ['59'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8605. ";
 preguntaids[0] = 8605


//  Id pregunta: 8417 Año de creación de pregunta: 2011
 questions[1]= "2)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[1]= new Array();
 choices[1][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[1][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[1][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[1][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[1] = 2;
 units[1] = ['67'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8417. Operador Ayto. Madrid 2010";
 preguntaids[1] = 8417


//  Id pregunta: 8584 Año de creación de pregunta: 2013
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[2]= new Array();
 choices[2][0] = "ISA";
 choices[2][1] = "HTI";
 choices[2][2] = "PCI";
 choices[2][3] = "AGP";
 answers[2] = 1;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8584. ";
 preguntaids[2] = 8584


//  Id pregunta: 8442 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[3]= new Array();
 choices[3][0] = "El sistema carece de memoria virtual";
 choices[3][1] = "El sistema no es multiprogramado";
 choices[3][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[3][3] = "Todas las anteriores son falsas";
 answers[3] = 2;
 units[3] = ['56'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8442. ";
 preguntaids[3] = 8442


//  Id pregunta: 8592 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;C&oacute;mo se pueden clasificar los perif&eacute;ricos seg&uacute;n su funci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "de entrada";
 choices[4][1] = "de salida";
 choices[4][2] = "Que realizan funciones de almacenamiento auxiliar";
 choices[4][3] = "Todas las anteriores";
 answers[4] = 3;
 units[4] = ['56'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8592. ";
 preguntaids[4] = 8592


//  Id pregunta: 8573 Año de creación de pregunta: 2013
 questions[5]= "6)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[5]= new Array();
 choices[5][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[5][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[5][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[5][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[5] = 3;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8573. ";
 preguntaids[5] = 8573


//  Id pregunta: 8518 Año de creación de pregunta: 2011
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[6]= new Array();
 choices[6][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[6][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[6][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[6][3] = "Todas son incorrectas";
 answers[6] = 2;
 units[6] = ['55'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 8518. ";
 preguntaids[6] = 8518


//  Id pregunta: 8513 Año de creación de pregunta: 2011
 questions[7]= "8)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[7]= new Array();
 choices[7][0] = "Xades-BES";
 choices[7][1] = "Xades-T";
 choices[7][2] = "Xades-C";
 choices[7][3] = "Xades-EPES";
 answers[7] = 2;
 units[7] = ['77'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8513. ";
 preguntaids[7] = 8513


//  Id pregunta: 8519 Año de creación de pregunta: 2011
 questions[8]= "9)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[8]= new Array();
 choices[8][0] = "Debian";
 choices[8][1] = "Ubuntu";
 choices[8][2] = "Red Hat";
 choices[8][3] = "Mono";
 answers[8] = 3;
 units[8] = ['57'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8519. ";
 preguntaids[8] = 8519


//  Id pregunta: 8598 Año de creación de pregunta: 2013
 questions[9]= "10)  &iquest;Cu&aacute;l es la respuesta incorrecta respecto al interfaz de disco duro SAS?";
 choices[9]= new Array();
 choices[9][0] = "SAS (Serial Attached SCSI) es una interfaz de transferencia de datos en serie, sucesora del SCSI paralelo.";
 choices[9][1] = "Proporciona una arquitectura punto a punto m&aacute;s simple y robusta que su antecesora paralela.";
 choices[9][2] = "Una de sus principales caracter&iacute;sticas es el aumento de la velocidad de transferencia al aumentar el n&uacute;mero de dispositivos conectados";
 choices[9][3] = "Todas son correctas.";
 answers[9] = 3;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8598. ";
 preguntaids[9] = 8598


//  Id pregunta: 8444 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Para qu&eacute; se utiliza el comando fdisk en Linux?:";
 choices[10]= new Array();
 choices[10][0] = "Para formatear una partici&oacute;n";
 choices[10][1] = "Para formatear un disco completo";
 choices[10][2] = "Para crear una partici&oacute;n";
 choices[10][3] = "Para crear i-nodos";
 answers[10] = 2;
 units[10] = ['57'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8444. ";
 preguntaids[10] = 8444


//  Id pregunta: 8601 Año de creación de pregunta: 2013
 questions[11]= "12)  &iquest;Por qu&eacute; la memorias flash de tipo es mucho m&aacute;s r&aacute;pida que las EEPROM convencionales?";
 choices[11]= new Array();
 choices[11][0] = "Es falso. Las memorias EEPROM convencionales son mucho m&aacute;s r&aacute;pidas";
 choices[11][1] = "Porque est&aacute;n fabricadas con puertas l&oacute;gicas AND y OR";
 choices[11][2] = "Porque permiten la lectura y escritura de m&uacute;ltiples posiciones de memoria en la misma operaci&oacute;n";
 choices[11][3] = "Porque borran bit a bit.";
 answers[11] = 2;
 units[11] = ['51'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8601. ";
 preguntaids[11] = 8601


//  Id pregunta: 8464 Año de creación de pregunta: 2011
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "XEN";
 choices[12][1] = "KVM";
 choices[12][2] = "UML";
 choices[12][3] = "Todas lo son";
 answers[12] = 3;
 units[12] = ['54'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8464. ";
 preguntaids[12] = 8464


//  Id pregunta: 8587 Año de creación de pregunta: 2013
 questions[13]= "14)  La arquitectura de un ordenador viene definida por";
 choices[13]= new Array();
 choices[13][0] = "El repertorio de instrucciones";
 choices[13][1] = "El tipo de direccionamientos";
 choices[13][2] = "El tipo de operandos";
 choices[13][3] = "Todas las anteriores";
 answers[13] = 3;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8587. Examen TIC-A1 2011";
 preguntaids[13] = 8587


//  Id pregunta: 8422 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[14]= new Array();
 choices[14][0] = "Drill-Across.";
 choices[14][1] = "Drill-In.";
 choices[14][2] = "Roll-Up.";
 choices[14][3] = "Rotaci&oacute;n.";
 answers[14] = 2;
 units[14] = ['72'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8422. Operador Ayto. Madrid 2010";
 preguntaids[14] = 8422


//  Id pregunta: 8447 Año de creación de pregunta: 2011
 questions[15]= "16)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "SHOE";
 choices[15][1] = "DAML + OIL";
 choices[15][2] = "WDML";
 choices[15][3] = "RDF";
 answers[15] = 2;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 8447. ";
 preguntaids[15] = 8447


//  Id pregunta: 8591 Año de creación de pregunta: 2013
 questions[16]= "17)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[16]= new Array();
 choices[16][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[16][1] = "Vincula a todos los componentes de la CPU";
 choices[16][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[16][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[16] = 0;
 units[16] = ['56'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8591. Examen TIC-A1 2011";
 preguntaids[16] = 8591


//  Id pregunta: 8577 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[17]= new Array();
 choices[17][0] = "Con CPU particionada";
 choices[17][1] = "Con m&uacute;ltiples ALUS";
 choices[17][2] = "Como A) y como B)";
 choices[17][3] = "Ninguna respuesta es correcta";
 answers[17] = 2;
 units[17] = ['49'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8577. ";
 preguntaids[17] = 8577


//  Id pregunta: 8468 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[18]= new Array();
 choices[18][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[18][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[18][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[18][3] = "Nada de lo anterior";
 answers[18] = 1;
 units[18] = ['58'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8468. ";
 preguntaids[18] = 8468


//  Id pregunta: 8463 Año de creación de pregunta: 2011
 questions[19]= "20)  Respecto al sistema operativo Android:";
 choices[19]= new Array();
 choices[19][0] = "Muchas de sus aplicaciones est&aacute;n escritas en Java";
 choices[19][1] = "No dispone de una m&aacute;quina virtual java";
 choices[19][2] = "Las respuestas a) y b) son ciertas";
 choices[19][3] = "Las respuestas a) y b) son falsas";
 answers[19] = 2;
 units[19] = ['59'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8463. ";
 preguntaids[19] = 8463


//  Id pregunta: 8602 Año de creación de pregunta: 2013
 questions[20]= "21)  &iquest;En qu&eacute; se diferencia la memoria flash de tipo NOR y la de tipo NAND?";
 choices[20]= new Array();
 choices[20][0] = "La de NAND es menos fiable";
 choices[20][1] = "La de tipo NOR tiene un coste mayor";
 choices[20][2] = "Las de tipo NAND s&oacute;lo permiten acceso secuencial (m&aacute;s orientado a dispositivos de almacenamiento masivo) frente a las memorias flash basadas en NOR que permiten lectura de acceso aleatorio.";
 choices[20][3] = "Todas son correctas.";
 answers[20] = 3;
 units[20] = ['51'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8602. ";
 preguntaids[20] = 8602


//  Id pregunta: 8467 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Qu&eacute; es procfs en Unix?";
 choices[21]= new Array();
 choices[21][0] = "Un sistema de ficheros especial con informaci&oacute;n sobre procesos y otros recursos del sistema";
 choices[21][1] = "&quot;La versi&oacute;n profesional del sistema de ficheros &quot;&quot;C&quot;&quot; (cfs)&quot;";
 choices[21][2] = "Un comando que devuelve informaci&oacute;n sobre los procesos relacionados con el sistema de ficheros";
 choices[21][3] = "Nada de lo anterior";
 answers[21] = 0;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8467. ";
 preguntaids[21] = 8467


//  Id pregunta: 8576 Año de creación de pregunta: 2013
 questions[22]= "23)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[22]= new Array();
 choices[22][0] = "As&iacute;ncrono";
 choices[22][1] = "Desacoplado";
 choices[22][2] = "S&iacute;ncrono";
 choices[22][3] = "Ninguna respuesta es correcta";
 answers[22] = 2;
 units[22] = ['49'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8576. ";
 preguntaids[22] = 8576


//  Id pregunta: 8588 Año de creación de pregunta: 2013
 questions[23]= "24)  &iquest;Qu&eacute; es Parallel Sysplex?";
 choices[23]= new Array();
 choices[23][0] = "La soluci&oacute;n de clustering de IBM para z/OS";
 choices[23][1] = "Un tipo de registro l&oacute;gico";
 choices[23][2] = "Una aplicaci&oacute;n que permite conocer el estado de procesos de un sistema operativo";
 choices[23][3] = "Una herramienta de virtualizaci&oacute;n";
 answers[23] = 0;
 units[23] = ['49'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8588. ";
 preguntaids[23] = 8588


//  Id pregunta: 8508 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[24]= new Array();
 choices[24][0] = "Postgres";
 choices[24][1] = "Hibernate";
 choices[24][2] = "TopLink";
 choices[24][3] = "Ibatis";
 answers[24] = 0;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8508. ";
 preguntaids[24] = 8508


//  Id pregunta: 8421 Año de creación de pregunta: 2011
 questions[25]= "26)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[25]= new Array();
 choices[25][0] = "los directorios de trabajo de los usuarios.";
 choices[25][1] = "los sistemas de archivos montados temporalmente.";
 choices[25][2] = "el c&oacute;digo fuente del kernel.";
 choices[25][3] = "los ficheros de los controladores de dispositivos";
 answers[25] = 0;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8421. Operador Ayto. Madrid 2010";
 preguntaids[25] = 8421


//  Id pregunta: 8597 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;Cu&aacute;les son las fases ordenadas correctamente de la ejecuci&oacute;n de instrucciones en un procesador?";
 choices[26]= new Array();
 choices[26][0] = "Decodificaci&oacute;n, Prefetch, fetch, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[26][1] = "Prefetch, decodificaci&oacute;n, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[26][2] = "Prefetch, fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 2;
 units[26] = ['56'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8597. ";
 preguntaids[26] = 8597


//  Id pregunta: 8515 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Qu&eacute; es en java una inner class?";
 choices[27]= new Array();
 choices[27][0] = "Es lo mismo que una clase abstracta";
 choices[27][1] = "Una clase declarada dentro de otra";
 choices[27][2] = "Una clase que no puede ser heredada";
 choices[27][3] = "Ninguno de los anteriores";
 answers[27] = 1;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 8515. ";
 preguntaids[27] = 8515


//  Id pregunta: 8452 Año de creación de pregunta: 2011
 questions[28]= "29)  En los Esquemas de copo de nieve:";
 choices[28]= new Array();
 choices[28][0] = "Existe redundancia.";
 choices[28][1] = "No se ahorra espacio.";
 choices[28][2] = "No existe una tabla de hechos central.";
 choices[28][3] = "Las tablas est&aacute;n normalizadas.";
 answers[28] = 3;
 units[28] = ['72'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 8452. ";
 preguntaids[28] = 8452


//  Id pregunta: 8450 Año de creación de pregunta: 2011
 questions[29]= "30)  Los pilares de CRM son:";
 choices[29]= new Array();
 choices[29][0] = "Estrategia, personas, servicios, tecnologias";
 choices[29][1] = "Estrategia, personas, gestion, tecnologias";
 choices[29][2] = "Estrategia, clientes, servicios, tecnologias";
 choices[29][3] = "Estrategias, personas, procesos, tecnologias";
 answers[29] = 3;
 units[29] = ['69'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8450. ";
 preguntaids[29] = 8450


//  Id pregunta: 8593 Año de creación de pregunta: 2013
 questions[30]= "31)  &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta respecto a BIOS?";
 choices[30]= new Array();
 choices[30][0] = "Es un software que se almacena en EPROM pero que no se puede considerar b&aacute;sico";
 choices[30][1] = "Se refresca cada vez que arranca el PC";
 choices[30][2] = "Es el primer software que se ejecuta en el proceso de arranque de una placa base";
 choices[30][3] = "No se puede reprogramar";
 answers[30] = 2;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 8593. ";
 preguntaids[30] = 8593


//  Id pregunta: 8449 Año de creación de pregunta: 2011
 questions[31]= "32)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[31]= new Array();
 choices[31][0] = "Compiere";
 choices[31][1] = "Siebel";
 choices[31][2] = "Epiphany";
 choices[31][3] = "Todas son soluciones comerciales";
 answers[31] = 0;
 units[31] = ['69'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8449. ";
 preguntaids[31] = 8449


//  Id pregunta: 8607 Año de creación de pregunta: 2013
 questions[32]= "33)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[32]= new Array();
 choices[32][0] = "VLE";
 choices[32][1] = "LSS";
 choices[32][2] = "LME";
 choices[32][3] = "ILS";
 answers[32] = 2;
 units[32] = ['70'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8607. ";
 preguntaids[32] = 8607


//  Id pregunta: 8572 Año de creación de pregunta: 2013
 questions[33]= "34)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[33]= new Array();
 choices[33][0] = "En 1950";
 choices[33][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[33][2] = "En 1980";
 choices[33][3] = "En la d&eacute;cada de los noventa.";
 answers[33] = 1;
 units[33] = ['49'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 8572. ";
 preguntaids[33] = 8572


//  Id pregunta: 8606 Año de creación de pregunta: 2013
 questions[34]= "35)  Respecto a los LMS, indique la respuesta FALSA:";
 choices[34]= new Array();
 choices[34][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[34][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[34][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[34][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[34] = 1;
 units[34] = ['70'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8606. ";
 preguntaids[34] = 8606


//  Id pregunta: 8423 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes archivos no utiliza el formato de archivo ZIP?";
 choices[35]= new Array();
 choices[35][0] = "WAR";
 choices[35][1] = "EAR";
 choices[35][2] = "JAR";
 choices[35][3] = "Todos los anteriores lo usan";
 answers[35] = 3;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8423. ";
 preguntaids[35] = 8423


//  Id pregunta: 8594 Año de creación de pregunta: 2013
 questions[36]= "37)  &iquest;Cu&aacute;l no es una funci&oacute;n l&oacute;gica que suele integrar cualquiera de los chipsets actuales?";
 choices[36]= new Array();
 choices[36][0] = "soporte para el microprocesador";
 choices[36][1] = "Controlador de memoria (MMU, Memory Management Unit)";
 choices[36][2] = "Reloj de Tiempo Real (RTC)";
 choices[36][3] = "Controlador de temperatura.";
 answers[36] = 3;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8594. ";
 preguntaids[36] = 8594


//  Id pregunta: 8578 Año de creación de pregunta: 2013
 questions[37]= "38)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[37]= new Array();
 choices[37][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[37][1] = "Datos de alcance global y local";
 choices[37][2] = "Datos de alcance externo e interno";
 choices[37][3] = "No existe la arquitectura MMC";
 answers[37] = 1;
 units[37] = ['49'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8578. ";
 preguntaids[37] = 8578


//  Id pregunta: 8466 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Qu&eacute; es Synaptic en el entorno Linux?";
 choices[38]= new Array();
 choices[38][0] = "Un editor de texto avanzado";
 choices[38][1] = "Un front-end del sistema de gesti&oacute;n de paquetes de software";
 choices[38][2] = "Un sistema de monitorizaci&oacute;n de recursos";
 choices[38][3] = "Un gestor de cuentas de usuario";
 answers[38] = 1;
 units[38] = ['57'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8466. ";
 preguntaids[38] = 8466


//  Id pregunta: 8446 Año de creación de pregunta: 2011
 questions[39]= "40)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[39]= new Array();
 choices[39][0] = "B&uacute;squeda Greedy";
 choices[39][1] = "B&uacute;squeda en profundidad iterativa";
 choices[39][2] = "Algoritmo A*";
 choices[39][3] = "Escalada por m&aacute;xima pendiente";
 answers[39] = 3;
 units[39] = ['67'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8446. ";
 preguntaids[39] = 8446


//  Id pregunta: 8469 Año de creación de pregunta: 2011
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes no es una edici&oacute;n de Windows 7?";
 choices[40]= new Array();
 choices[40][0] = "Starter";
 choices[40][1] = "Home Premium";
 choices[40][2] = "Ultimate";
 choices[40][3] = "Business";
 answers[40] = 3;
 units[40] = ['58'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 8469. ";
 preguntaids[40] = 8469


//  Id pregunta: 8470 Año de creación de pregunta: 2011
 questions[41]= "42)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[41]= new Array();
 choices[41][0] = "Organization for the Advancement of Structured Information Services";
 choices[41][1] = "Organization for the Advancement of Service Integration Standards";
 choices[41][2] = "Organization for the Advancement of Structured Information Standards";
 choices[41][3] = "Organization for the Application of Structured Information Standards";
 answers[41] = 2;
 units[41] = ['55'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8470. ";
 preguntaids[41] = 8470


//  Id pregunta: 8480 Año de creación de pregunta: 2011
 questions[42]= "43)  En un sistema de segmentaci&oacute;n, los segmentos que necesitan los programas pueden no estar residentes en la memoria principal. Esta situaci&oacute;n se indica haciendo uso del:";
 choices[42]= new Array();
 choices[42][0] = "Bit de segmentaci&oacute;n.";
 choices[42][1] = "Bit de ausencia.";
 choices[42][2] = "Bit de presencia.";
 choices[42][3] = "Bit de petici&oacute;n.";
 answers[42] = 2;
 units[42] = ['56'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8480. Examen UPM A2 2011";
 preguntaids[42] = 8480


//  Id pregunta: 8590 Año de creación de pregunta: 2013
 questions[43]= "44)  Indique la frase correcta acerca de las arquitecturas de microprocesadores";
 choices[43]= new Array();
 choices[43][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[43][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[43][2] = "La arquitectura RISC maneja instrucciones con forma to regular y complejos modos de direccionamiento";
 choices[43][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitues de palabra.";
 answers[43] = 3;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 8590. ";
 preguntaids[43] = 8590


//  Id pregunta: 8510 Año de creación de pregunta: 2011
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes algoritmos no es de clave sim&eacute;trica?";
 choices[44]= new Array();
 choices[44][0] = "AES";
 choices[44][1] = "DSA";
 choices[44][2] = "DES";
 choices[44][3] = "BlowFish";
 answers[44] = 1;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8510. ";
 preguntaids[44] = 8510


//  Id pregunta: 8441 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;A qui&eacute;n corresponde elaborar una lista de prestadores de servicios electr&oacute;nicos de confianza?";
 choices[45]= new Array();
 choices[45][0] = "Al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[45][1] = "Al Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[45][2] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[45][3] = "Ninguna de las anteriores es cierta";
 answers[45] = 0;
 units[45] = ['78'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8441. ";
 preguntaids[45] = 8441


//  Id pregunta: 8462 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Qu&eacute; pantallas t&aacute;ctiles pueden ser manejadas con guantes de lana?";
 choices[46]= new Array();
 choices[46][0] = "las resistivas";
 choices[46][1] = "las capacitivas";
 choices[46][2] = "ambas";
 choices[46][3] = "ninguna";
 answers[46] = 0;
 units[46] = ['51'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8462. ";
 preguntaids[46] = 8462


//  Id pregunta: 8574 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[47]= new Array();
 choices[47][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[47][1] = "S&oacute;lo concurrencia.";
 choices[47][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[47][3] = "No existe SISD";
 answers[47] = 0;
 units[47] = ['49'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 8574. ";
 preguntaids[47] = 8574


//  Id pregunta: 8448 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[48]= new Array();
 choices[48][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[48][1] = "Utiliza una estructura eminentemente procedural";
 choices[48][2] = "Utiliza una estructura eminentemente declarativa";
 choices[48][3] = "Resuelve problemas heur&iacute;sticos";
 answers[48] = 1;
 units[48] = ['68'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 8448. ";
 preguntaids[48] = 8448


//  Id pregunta: 8600 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;Qu&eacute; es FAMOS?";
 choices[49]= new Array();
 choices[49][0] = "Floating Gate Avalanche-Injection Metal Oxide Semiconductor";
 choices[49][1] = "Floating Avalanche-Injection Metal Oxide Semiconductor";
 choices[49][2] = "Floating Gate Avalanche-Injection Metal for Operating Systems";
 choices[49][3] = "FAMOS no existe";
 answers[49] = 0;
 units[49] = ['51'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8600. ";
 preguntaids[49] = 8600


//  Id pregunta: 8603 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;C&oacute;mo se clasifican los m&eacute;todos de grabaci&oacute;n en cinta magn&eacute;tica?";
 choices[50]= new Array();
 choices[50][0] = "Lineal, circular y transversal";
 choices[50][1] = "Circular, transversal y Helical";
 choices[50][2] = "Lineal, Transversal, Helical";
 choices[50][3] = "Transversal y Helical";
 answers[50] = 2;
 units[50] = ['53'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8603. ";
 preguntaids[50] = 8603


//  Id pregunta: 8451 Año de creación de pregunta: 2011
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de los siguientes no se corresponde con un est&aacute;ndar de Sistemas Geogr&aacute;ficos de Informaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "ISO 19115.";
 choices[51][1] = "ISO 19130.";
 choices[51][2] = "ISO 19139";
 choices[51][3] = "Todos son est&aacute;ndares de sistemas SIG.";
 answers[51] = 3;
 units[51] = ['71'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8451. ";
 preguntaids[51] = 8451


//  Id pregunta: 8586 Año de creación de pregunta: 2013
 questions[52]= "53)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[52]= new Array();
 choices[52][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[52][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[52][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[52][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[52] = 1;
 units[52] = ['49'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 8586. Examen TIC-A1 2011";
 preguntaids[52] = 8586


//  Id pregunta: 8454 Año de creación de pregunta: 2011
 questions[53]= "54)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[53]= new Array();
 choices[53][0] = "Lucifer";
 choices[53][1] = "Serpent";
 choices[53][2] = "Seal";
 choices[53][3] = "Shark";
 answers[53] = 2;
 units[53] = ['76'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8454. ";
 preguntaids[53] = 8454


//  Id pregunta: 8455 Año de creación de pregunta: 2011
 questions[54]= "55)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[54]= new Array();
 choices[54][0] = "Enveloped";
 choices[54][1] = "Detached";
 choices[54][2] = "Enveloping";
 choices[54][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[54] = 2;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8455. ";
 preguntaids[54] = 8455


//  Id pregunta: 8583 Año de creación de pregunta: 2013
 questions[55]= "56)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[55]= new Array();
 choices[55][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[55][1] = "Sistemas distribuidos en tiempo real";
 choices[55][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[55][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[55] = 3;
 units[55] = ['49'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8583. ";
 preguntaids[55] = 8583


//  Id pregunta: 8445 Año de creación de pregunta: 2011
 questions[56]= "57)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[56]= new Array();
 choices[56][0] = "page daemon";
 choices[56][1] = "swapper";
 choices[56][2] = "init";
 choices[56][3] = "sbin";
 answers[56] = 1;
 units[56] = ['57'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 8445. ";
 preguntaids[56] = 8445


//  Id pregunta: 8580 Año de creación de pregunta: 2013
 questions[57]= "58)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[57]= new Array();
 choices[57][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[57][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[57][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[57][3] = "Ninguna respuesta es correcta.";
 answers[57] = 1;
 units[57] = ['50'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 8580. ";
 preguntaids[57] = 8580


//  Id pregunta: 8571 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;Cu&aacute;l no es caracter&iacute;stica de los sistemas de mainframe o sistemas multiprocesor?";
 choices[58]= new Array();
 choices[58][0] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH o procesamiento sin interacci&oacute;n";
 choices[58][1] = "En los &uacute;ltimos a&ntilde;os han ca&iacute;do en desuso";
 choices[58][2] = "Se trata de soluciones altamente propietarias, concebidas para entornos cerrados, no heterog&eacute;neos.";
 choices[58][3] = "Existen muy pocos fabricantes en el mercado que desarrollen este tipo de sistemas";
 answers[58] = 1;
 units[58] = ['49'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8571. ";
 preguntaids[58] = 8571


//  Id pregunta: 8595 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[59]= new Array();
 choices[59][0] = "Una UART";
 choices[59][1] = "El controlador de puerto paralelo";
 choices[59][2] = "Reloj de tiempo real";
 choices[59][3] = "Todas las anteriores";
 answers[59] = 3;
 units[59] = ['56'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8595. ";
 preguntaids[59] = 8595


//  Id pregunta: 8471 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae?";
 choices[60]= new Array();
 choices[60][0] = "XMLDSig ENVELOPED";
 choices[60][1] = "XMLDSig ENVELOPING";
 choices[60][2] = "PADES-LTV";
 choices[60][3] = "PADES-EPES";
 answers[60] = 0;
 units[60] = ['75'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 8471. ";
 preguntaids[60] = 8471


//  Id pregunta: 8517 Año de creación de pregunta: 2011
 questions[61]= "62)  Sistema de Grid Computing";
 choices[61]= new Array();
 choices[61][0] = "Globus Toolkit";
 choices[61][1] = "Nimbus";
 choices[61][2] = "Eucaliptus";
 choices[61][3] = "Gluster";
 answers[61] = 0;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8517. ";
 preguntaids[61] = 8517


//  Id pregunta: 8443 Año de creación de pregunta: 2011
 questions[62]= "63)  El manejador de dispositivos es:";
 choices[62]= new Array();
 choices[62][0] = "Un p rograma de usuario final";
 choices[62][1] = "Hardware que controla un dispositivo";
 choices[62][2] = "Software que controla un dispositivo";
 choices[62][3] = "Todas las anteriores son ciertas";
 answers[62] = 2;
 units[62] = ['56'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8443. ";
 preguntaids[62] = 8443


//  Id pregunta: 8582 Año de creación de pregunta: 2013
 questions[63]= "64)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[63]= new Array();
 choices[63][0] = "Como una soluci&oacute;n de web 2.0";
 choices[63][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[63][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[63][3] = "Ninguna respuesta es correcta.";
 answers[63] = 1;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8582. ";
 preguntaids[63] = 8582


//  Id pregunta: 8419 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;C&oacute;mo se denominan las dos series de datos de uso civil emitidas continuamente por cada sat&eacute;lite del sistema GPS?";
 choices[64]= new Array();
 choices[64][0] = "Almanaque y efem&eacute;rides.";
 choices[64][1] = "Multipath y atenuaci&oacute;n.";
 choices[64][2] = "Triangulaci&oacute;n y correcci&oacute;n.";
 choices[64][3] = "Latitud y longitud.";
 answers[64] = 0;
 units[64] = ['71'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 8419. Operador Ayto. Madrid 2010";
 preguntaids[64] = 8419


//  Id pregunta: 8589 Año de creación de pregunta: 2013
 questions[65]= "66)  &iquest;Qu&eacute; se suelen considerar como ejemplo de mainframe?";
 choices[65]= new Array();
 choices[65][0] = "Z/OS de IBM";
 choices[65][1] = "Superdome de HP";
 choices[65][2] = "Todas las respuestas anteriores";
 choices[65][3] = "Ninguna respuesta es v&aacute;lida";
 answers[65] = 1;
 units[65] = ['49'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8589. ";
 preguntaids[65] = 8589


//  Id pregunta: 8596 Año de creación de pregunta: 2013
 questions[66]= "67)  &iquest;De qu&eacute; tipo de registro del procesador es el &quot;registro de instrucci&oacute;n&quot;?";
 choices[66]= new Array();
 choices[66][0] = "Opaco";
 choices[66][1] = "Transparente";
 choices[66][2] = "De control";
 choices[66][3] = "Ninguna respuesta es v&aacute;lida.";
 answers[66] = 1;
 units[66] = ['56'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8596. ";
 preguntaids[66] = 8596


//  Id pregunta: 8516 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[67]= new Array();
 choices[67][0] = "Apache Axis2";
 choices[67][1] = "Hibernate";
 choices[67][2] = "Struts";
 choices[67][3] = "TopLink";
 answers[67] = 0;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8516. ";
 preguntaids[67] = 8516


//  Id pregunta: 8599 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Cu&aacute;ntos cent&iacute;meros tiene el Blu-ray?";
 choices[68]= new Array();
 choices[68][0] = "12";
 choices[68][1] = "13";
 choices[68][2] = "11";
 choices[68][3] = "15";
 answers[68] = 0;
 units[68] = ['51'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8599. ";
 preguntaids[68] = 8599


//  Id pregunta: 8575 Año de creación de pregunta: 2013
 questions[69]= "70)  Se&ntilde;ale la respuesta falsa respecto a la segmentaci&oacute;n";
 choices[69]= new Array();
 choices[69][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[69][1] = "Incrementa la productividad de la CPU";
 choices[69][2] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n";
 choices[69][3] = "Todas las respuestas son correctas";
 answers[69] = 2;
 units[69] = ['49'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8575. ";
 preguntaids[69] = 8575


//  Id pregunta: 8604 Año de creación de pregunta: 2013
 questions[70]= "71)  &iquest;Qu&eacute; tipo de conexi&oacute;n inal&aacute;mbrica se suele distinguir en la conexi&oacute;n de los ratones al PC?";
 choices[70]= new Array();
 choices[70][0] = "Radio Frecuencia (banda de 5 Ghz), Infrarrojo, Bluetooth";
 choices[70][1] = "Radio Frecuencia (banda de 2,4 Ghz) e Infrarrojo.";
 choices[70][2] = "Radio Frecuencia (banda de 2,4 Ghz), Infrarrojo y Bluetooth.";
 choices[70][3] = "No se utilizan las conexiones inal&aacute;mbricas para los ratones al no considerarse suficientemente estables";
 answers[70] = 2;
 units[70] = ['51'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8604. ";
 preguntaids[70] = 8604


//  Id pregunta: 8579 Año de creación de pregunta: 2013
 questions[71]= "72)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[71]= new Array();
 choices[71][0] = "Fuertemente acoplados.";
 choices[71][1] = "Muy desacoplados";
 choices[71][2] = "Un procesador no depende de lo que hace otro";
 choices[71][3] = "Todas las respuestas con correctas";
 answers[71] = 0;
 units[71] = ['49'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 8579. ";
 preguntaids[71] = 8579


//  Id pregunta: 8581 Año de creación de pregunta: 2013
 questions[72]= "73)  &iquest;Qu&eacute; se necesita para funcionar en un sistema grid?";
 choices[72]= new Array();
 choices[72][0] = "Al menos un ordenador que act&uacute;e como un servidor y que gestione el funcionamiento de los otros sistemas implicados";
 choices[72][1] = "Un mainframe";
 choices[72][2] = "Al menos un sistema Microsoft";
 choices[72][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[72] = 0;
 units[72] = ['49'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8581. ";
 preguntaids[72] = 8581


//  Id pregunta: 8585 Año de creación de pregunta: 2013
 questions[73]= "74)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[73]= new Array();
 choices[73][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[73][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[73][2] = "El balanceo de carga solo puede implementarse por software";
 choices[73][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[73] = 2;
 units[73] = ['50'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8585. Examen TIC-A1 2011";
 preguntaids[73] = 8585


//  Id pregunta: 8465 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 10?";
 choices[74]= new Array();
 choices[74][0] = "Monol&iacute;tico";
 choices[74][1] = "Microkernel";
 choices[74][2] = "Nanokernel";
 choices[74][3] = "Hibrida";
 answers[74] = 3;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8465. ";
 preguntaids[74] = 8465


