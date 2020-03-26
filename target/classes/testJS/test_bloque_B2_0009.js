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
//  Id pregunta: 2617 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[0]= new Array();
 choices[0][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[0][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[0][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[0][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[0] = 0;
 units[0] = ['74'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 2617. Es Wireless Markup Language";
 preguntaids[0] = 2617


//  Id pregunta: 2656 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Es posible arrancar en GNU/Linux desde CD?:";
 choices[1]= new Array();
 choices[1][0] = "No, tiene que estar en disco duro obligatoriamente";
 choices[1][1] = "S&iacute;, en todos los casos";
 choices[1][2] = "S&iacute;, dependiendo de la versi&oacute;n de GNU/Linux";
 choices[1][3] = "No, aunque se podr&iacute;a parchear el arranque para que mirase el CD primero";
 answers[1] = 2;
 units[1] = ['57'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 2656. ";
 preguntaids[1] = 2656


//  Id pregunta: 2676 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Qu&eacute; es el UART?:";
 choices[2]= new Array();
 choices[2][0] = "Universal Asynchronous Receiver Transmitter. Es un microprocesador que act&uacute;a de interfaz entre el bus (paralelo) de la CPU y el puerto serie";
 choices[2][1] = "Universal Asynchronous Receiver Transmitter. Es un dispositivo que adapta terminales as&iacute;ncronos a una red X.25";
 choices[2][2] = "Universal Audio Receiver Transmitter. Es un microprocesador incluido en la tarjeta de sonido que act&uacute;a como receptor y transmisor de las se&ntilde;ales de audio";
 choices[2][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[2] = 0;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2676. ";
 preguntaids[2] = 2676


//  Id pregunta: 2645 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[3]= new Array();
 choices[3][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[3][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[3][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[3][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[3] = 0;
 units[3] = ['72'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2645. ";
 preguntaids[3] = 2645


//  Id pregunta: 2658 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Para qu&eacute; se usa el comando  tee  en Unix?:";
 choices[4]= new Array();
 choices[4][0] = "Se usa para guardar la salida de una orden en un fichero, adem&aacute;s de llevarla a la salida est&aacute;ndar";
 choices[4][1] = "Se utiliza para guardar o recuperar los archivos de una cinta magn&eacute;tica, un disco flexible o un fichero normal";
 choices[4][2] = "Se emplea para comprimir los datos de un fichero";
 choices[4][3] = "Se usa para visualizar los ficheros que se encuentran en una cola de impresi&oacute;n";
 answers[4] = 0;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2658. ";
 preguntaids[4] = 2658


//  Id pregunta: 2632 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes programas en Linux no es un editor de textos?";
 choices[5]= new Array();
 choices[5][0] = "vi";
 choices[5][1] = "emacs";
 choices[5][2] = "pine";
 choices[5][3] = "joe";
 answers[5] = 2;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2632. ";
 preguntaids[5] = 2632


//  Id pregunta: 2618 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[6]= new Array();
 choices[6][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[6][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[6][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diversos organismos";
 choices[6][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[6] = 0;
 units[6] = ['77'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2618. ";
 preguntaids[6] = 2618


//  Id pregunta: 2655 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[7]= new Array();
 choices[7][0] = "Segunda";
 choices[7][1] = "Tercera";
 choices[7][2] = "Cuarta";
 choices[7][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[7] = 2;
 units[7] = ['54'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2655. ";
 preguntaids[7] = 2655


//  Id pregunta: 2662 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Podr&iacute;a ordenar los siguientes tipos de memoria seg&uacute;n su coste, de mayor a menor?:";
 choices[8]= new Array();
 choices[8][0] = "Registros, Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Cinta magn&eacute;tica";
 choices[8][1] = "Registros, Cach&eacute;, Disco magn&eacute;tico, Memoria Principal, Cinta magn&eacute;tica";
 choices[8][2] = "Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Registros, Cinta magn&eacute;tica";
 choices[8][3] = "Todas son falsas";
 answers[8] = 0;
 units[8] = ['50'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2662. ";
 preguntaids[8] = 2662


//  Id pregunta: 2633 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes se considerar&aacute; siempre software de aplicaciones y no software de base?";
 choices[9]= new Array();
 choices[9][0] = "Sistemas operativos";
 choices[9][1] = "Software de comunicaciones";
 choices[9][2] = "Software ofim&aacute;tico";
 choices[9][3] = "Sistemas de gesti&oacute;n de datos";
 answers[9] = 2;
 units[9] = ['56'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2633. ";
 preguntaids[9] = 2633


//  Id pregunta: 2625 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes es un lenguaje espec&iacute;fico de la ingenier&iacute;a del conocimiento?:";
 choices[10]= new Array();
 choices[10][0] = "C++";
 choices[10][1] = "Java";
 choices[10][2] = "PROLOG";
 choices[10][3] = "PASCAL";
 answers[10] = 2;
 units[10] = ['68'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2625. ";
 preguntaids[10] = 2625


//  Id pregunta: 2628 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes modelos de miner&iacute;a de datos escoger&iacute;a para detectar un posible fraude?";
 choices[11]= new Array();
 choices[11][0] = "El modelo de Verificaci&oacute;n.";
 choices[11][1] = "El modelo de Descubrimiento.";
 choices[11][2] = "El modelo de Simulaci&oacute;n.";
 choices[11][3] = "El modelo Distribuido.";
 answers[11] = 1;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2628. ";
 preguntaids[11] = 2628


//  Id pregunta: 2613 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una operaci&oacute;n de la Unidad de Control?:";
 choices[12]= new Array();
 choices[12][0] = "Obtenci&oacute;n de la instrucci&oacute;n de memoria que indica el contador de secuencia e incremento del mismo";
 choices[12][1] = "Decodificaci&oacute;n de la instrucci&oacute;n obtenida e interpretaci&oacute;n de la misma";
 choices[12][2] = "Ejecuci&oacute;n de las operaciones aritm&eacute;ticas y l&oacute;gicas";
 choices[12][3] = "Control y resoluci&oacute;n de las situaciones conflictivas que se produzcan";
 answers[12] = 2;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 2613. ";
 preguntaids[12] = 2613


//  Id pregunta: 2670 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Qu&eacute; es 'slice &amp; dice'?";
 choices[13]= new Array();
 choices[13][0] = "Una utilidad de las hojas de c&aacute;lculo para seleccionar filas y columnas.";
 choices[13][1] = "Una t&eacute;cnica OLAP que permite obtener subconjuntos de las vistas multidimensionales.";
 choices[13][2] = "Una t&eacute;cnica de representaci&oacute;n gr&aacute;fica de un sistema de informaci&oacute;n geogr&aacute;fica de acuerdo al modelo r&aacute;ster.";
 choices[13][3] = "Una t&eacute;cnica para redistribuir los flujos convergentes en un sistema de workflow.";
 answers[13] = 1;
 units[13] = ['72'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2670. ";
 preguntaids[13] = 2670


//  Id pregunta: 2599 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el lenguaje SQL?:";
 choices[14]= new Array();
 choices[14][0] = "El SQL es un lenguaje de definici&oacute;n y manipulaci&oacute;n de datos";
 choices[14][1] = "Si una transacci&oacute;n finaliza con una sentencia COMMIT, los cambios son cancelados";
 choices[14][2] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9085 de 1987";
 choices[14][3] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9075 de 1987";
 answers[14] = 3;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2599. ";
 preguntaids[14] = 2599


//  Id pregunta: 2659 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Para qu&eacute; sirve el objeto BindingCollection de Visual Basic?";
 choices[15]= new Array();
 choices[15][0] = "Es falso que Visual Basic incluya dicho objeto.";
 choices[15][1] = "Es un recolector de memoria que libera la memoria que ha sido usada por objetos que ya no existen.";
 choices[15][2] = "Enlaza clases como or&iacute;genes de datos a controles orientados a datos.";
 choices[15][3] = "Todas las respuestas son falsas.";
 answers[15] = 2;
 units[15] = ['58'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2659. ";
 preguntaids[15] = 2659


//  Id pregunta: 2635 Año de creación de pregunta: 2002
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes sistemas operativos son implementaciones de POSIX (IEEE 1003.1)?:";
 choices[16]= new Array();
 choices[16][0] = "Microsoft Windows para Trabajo en Grupo 3.11";
 choices[16][1] = "MVS de IBM";
 choices[16][2] = "System 7 de Apple";
 choices[16][3] = "ATT UNIX SVR4";
 answers[16] = 3;
 units[16] = ['57'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 2635. ";
 preguntaids[16] = 2635


//  Id pregunta: 2640 Año de creación de pregunta: 2002
 questions[17]= "18)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[17]= new Array();
 choices[17][0] = "Exchange";
 choices[17][1] = "Sendmail";
 choices[17][2] = "Memo";
 choices[17][3] = "Groupwise";
 answers[17] = 1;
 units[17] = ['57', '116'];
 blocks[17] = ['B2', 'B4'];
 comments[17] = "Id Pregunta: 2640. ";
 preguntaids[17] = 2640


//  Id pregunta: 2643 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[18]= new Array();
 choices[18][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[18][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[18][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[18][3] = "Todas son falsas";
 answers[18] = 1;
 units[18] = ['57', '56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2643. ";
 preguntaids[18] = 2643


//  Id pregunta: 2611 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux?:";
 choices[19]= new Array();
 choices[19][0] = "Debian";
 choices[19][1] = "Gentoo Linux";
 choices[19][2] = "OpenBSD";
 choices[19][3] = "TurboLinux";
 answers[19] = 2;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 2611. ";
 preguntaids[19] = 2611


//  Id pregunta: 2642 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Cu&aacute;l es la diferencia b&aacute;sica entre C y C++?";
 choices[20]= new Array();
 choices[20][0] = "C++ es la versi&oacute;n de C estandarizada por ANSI (tambi&eacute;n se le conoce como ANSI-C).";
 choices[20][1] = "C++ es un superconjunto de instrucciones de C para soportar programaci&oacute;n orientada a objetos.";
 choices[20][2] = "C++ es la versi&oacute;n de C preparada por los laboratorios Bell de ATT que permite embeber sentencias SQL.";
 choices[20][3] = "C++ es una versi&oacute;n 4GL del C est&aacute;ndar (lenguaje de 4&ordf; generaci&oacute;n) mientras que C es un lenguaje de 3&ordf; generaci&oacute;n.";
 answers[20] = 1;
 units[20] = ['55'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2642. ";
 preguntaids[20] = 2642


//  Id pregunta: 2629 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[21]= new Array();
 choices[21][0] = "Juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[21][1] = "Lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[21][2] = "Algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[21][3] = "Todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[21] = 3;
 units[21] = ['67'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2629. ";
 preguntaids[21] = 2629


//  Id pregunta: 2638 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[22]= new Array();
 choices[22][0] = "DOKM";
 choices[22][1] = "DOM";
 choices[22][2] = "JDOC";
 choices[22][3] = "Todas son falsas";
 answers[22] = 1;
 units[22] = ['74'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2638. ";
 preguntaids[22] = 2638


//  Id pregunta: 2673 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Qu&eacute; es el pseudoc&oacute;digo?";
 choices[23]= new Array();
 choices[23][0] = "Un c&oacute;digo que tiene fallos.";
 choices[23][1] = "El c&oacute;digo antes de ser depurado.";
 choices[23][2] = "El c&oacute;digo de un programa que no se ha ejecutado nunca.";
 choices[23][3] = "Descripcion de alto nivel de un programa";
 answers[23] = 3;
 units[23] = ['50'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2673. ";
 preguntaids[23] = 2673


//  Id pregunta: 2637 Año de creación de pregunta: 2002
 questions[24]= "25)  &iquest;Cu&aacute;l es el API de Java dedicada al procesamiento de XML?:";
 choices[24]= new Array();
 choices[24][0] = "JXML";
 choices[24][1] = "JML";
 choices[24][2] = "JAXP";
 choices[24][3] = "Todas son falsas";
 answers[24] = 2;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2637. ";
 preguntaids[24] = 2637


//  Id pregunta: 2608 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes alternativas indica los tres tipos de informaci&oacute;n manejados por un Sistema de Informaci&oacute;n Geogr&aacute;fica (SIG) en el caso m&aacute;s general?:";
 choices[25]= new Array();
 choices[25][0] = "Topol&oacute;gica, vectorial y r&aacute;ster.";
 choices[25][1] = "Posicional, temporal y tem&aacute;tica.";
 choices[25][2] = "Topol&oacute;gica, tem&aacute;tica y posicional.";
 choices[25][3] = "Posicional, r&aacute;ster y topol&oacute;gica.";
 answers[25] = 2;
 units[25] = ['71'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2608. ";
 preguntaids[25] = 2608


//  Id pregunta: 2639 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;l es el significado de ASCII?:";
 choices[26]= new Array();
 choices[26][0] = "American System Code for Input Information";
 choices[26][1] = "Asynchonous System Code fot International Information";
 choices[26][2] = "American Standard Code for Input Information";
 choices[26][3] = "American Standard Code for Information Interchange";
 answers[26] = 3;
 units[26] = ['50'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2639. ";
 preguntaids[26] = 2639


//  Id pregunta: 2657 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Es posible averiguar el peso de un cuerpo a partir de una imagen o conjunto de im&aacute;genes?:";
 choices[27]= new Array();
 choices[27][0] = "No, ya que faltan magnitudes que no pueden obtenerse de una imagen.";
 choices[27][1] = "No, ya que aunque se dispongan de todos los datos el peso no se relaciona en nada con sus dimensiones.";
 choices[27][2] = "S&iacute;, mediante sencillos c&aacute;lculos aritm&eacute;ticos sobre los p&iacute;xeles, viendo c&oacute;mo var&iacute;a su tonalidad.";
 choices[27][3] = "S&iacute;, mediante t&eacute;cnicas de triangulaci&oacute;n y de c&aacute;lculo de tiempos de vuelo de se&ntilde;ales sonda se obtienen las dimensiones (por consiguiente el volumen), y mediante las im&aacute;genes de c&aacute;maras infrarrojas su densidad, obteniendo a partir de estas 2 magnitudes el peso.";
 answers[27] = 3;
 units[27] = ['80'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2657. ";
 preguntaids[27] = 2657


//  Id pregunta: 2602 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[28]= new Array();
 choices[28][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[28][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[28][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[28][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[28] = 2;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2602. ";
 preguntaids[28] = 2602


//  Id pregunta: 2634 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[29]= new Array();
 choices[29][0] = "RC-4";
 choices[29][1] = "IDEA";
 choices[29][2] = "Triple DES";
 choices[29][3] = "RSA";
 answers[29] = 3;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2634. ";
 preguntaids[29] = 2634


//  Id pregunta: 2614 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes no es una versi&oacute;n propietaria del sistema operativo Unix?:";
 choices[30]= new Array();
 choices[30][0] = "HP-UX";
 choices[30][1] = "Solaris";
 choices[30][2] = "IRIX";
 choices[30][3] = "Todas las anteriores lo son";
 answers[30] = 3;
 units[30] = ['57'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2614. ";
 preguntaids[30] = 2614


//  Id pregunta: 2615 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes no representan una caracter&iacute;stica de Unix?:";
 choices[31]= new Array();
 choices[31][0] = "Multiusuario y multitarea";
 choices[31][1] = "Sistema jer&aacute;rquico de ficheros";
 choices[31][2] = "Comando de int&eacute;rpretes flexible";
 choices[31][3] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 answers[31] = 3;
 units[31] = ['57'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2615. ";
 preguntaids[31] = 2615


//  Id pregunta: 2666 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Qu&eacute; arquitectura monoprocesador se caracteriza por ejecutar una instruccion sobre varios datos de manera simult&aacute;nea?:";
 choices[32]= new Array();
 choices[32][0] = "SIMD";
 choices[32][1] = "MIMD";
 choices[32][2] = "SISD";
 choices[32][3] = "MISD";
 answers[32] = 0;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2666. ";
 preguntaids[32] = 2666


//  Id pregunta: 2603 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[33]= new Array();
 choices[33][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[33][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[33][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[33][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[33] = 0;
 units[33] = ['76'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2603. ";
 preguntaids[33] = 2603


//  Id pregunta: 2627 Año de creación de pregunta: 2002
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[34]= new Array();
 choices[34][0] = "MIME";
 choices[34][1] = "LDAP";
 choices[34][2] = "SMNP";
 choices[34][3] = "BGP";
 answers[34] = 1;
 units[34] = ['77'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2627. ";
 preguntaids[34] = 2627


//  Id pregunta: 2610 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de una funci&oacute;n Hash?:";
 choices[35]= new Array();
 choices[35][0] = "Obtiene un resultado unidireccional e irreversible";
 choices[35][1] = "No hace falta una clave pues el texto cifrado depende exclusivamente del texto claro original";
 choices[35][2] = "Se trata de una funci&oacute;n libre de colisiones en sentido estricto";
 choices[35][3] = "La seguridad de la funci&oacute;n Hash radica en su car&aacute;cter bidireccional";
 answers[35] = 3;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2610. ";
 preguntaids[35] = 2610


//  Id pregunta: 2669 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[36]= new Array();
 choices[36][0] = "Agente de usuario del directorio (DUA)";
 choices[36][1] = "Agentes del sistema de directorio (DSA)";
 choices[36][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[36][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[36] = 3;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2669. ";
 preguntaids[36] = 2669


//  Id pregunta: 2616 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[37]= new Array();
 choices[37][0] = "Redes sem&aacute;nticas";
 choices[37][1] = "Diagramas";
 choices[37][2] = "Marcos";
 choices[37][3] = "Guiones";
 answers[37] = 1;
 units[37] = ['68'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 2616. ";
 preguntaids[37] = 2616


//  Id pregunta: 2641 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de hardware?:";
 choices[38]= new Array();
 choices[38][0] = "Componentes s&oacute;lidos y dispositivos de estado de un ordenador";
 choices[38][1] = "Conjunto de programas y datos que procesa el ordenador";
 choices[38][2] = "Componentes f&iacute;sicos y dispositivos de estado s&oacute;lido de un ordenador";
 choices[38][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[38] = 2;
 units[38] = ['50'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2641. ";
 preguntaids[38] = 2641


//  Id pregunta: 2607 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[39]= new Array();
 choices[39][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[39][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[39][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[39][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[39] = 0;
 units[39] = ['71'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2607. ";
 preguntaids[39] = 2607


//  Id pregunta: 2636 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l entre las siguientes ventajas de las reglas en inteligencia artificial se puede considerar tambi&eacute;n una desventaja?:";
 choices[40]= new Array();
 choices[40][0] = "Eficiencia (est&aacute; marcada la direcci&oacute;n de inferencia)";
 choices[40][1] = "Facilidad de representaci&oacute;n (es una forma f&aacute;cil de representar el conocimiento)";
 choices[40][2] = "Modularidad (cada regla es independiente, no hay orden ni referencias entre ellas)";
 choices[40][3] = "Flexibilidad (cada regla se puede a&ntilde;adir o quitar sin repercusiones importantes)";
 answers[40] = 0;
 units[40] = ['67'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2636. ";
 preguntaids[40] = 2636


//  Id pregunta: 2605 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[41]= new Array();
 choices[41][0] = "Los datos se agregan en conjuntos.";
 choices[41][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[41][2] = "Est&aacute;n orientados a procesos.";
 choices[41][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[41] = 0;
 units[41] = ['72'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2605. ";
 preguntaids[41] = 2605


//  Id pregunta: 2606 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ingenier&iacute;a del conocimiento es falsa?:";
 choices[42]= new Array();
 choices[42][0] = "S&oacute;lo trata problemas de tipo heur&iacute;stico";
 choices[42][1] = "No utiliza enfoques algor&iacute;tmicos";
 choices[42][2] = "Requiere una estructura eminentemente declarativa";
 choices[42][3] = "Los programas que generan son primordialmente procedimentales";
 answers[42] = 3;
 units[42] = ['68'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2606. ";
 preguntaids[42] = 2606


//  Id pregunta: 2646 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[43]= new Array();
 choices[43][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[43][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[43][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[43][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[43] = 0;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2646. ";
 preguntaids[43] = 2646


//  Id pregunta: 2671 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;Qu&eacute; es Apache?:";
 choices[44]= new Array();
 choices[44][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[44][1] = "Un servidor web propiedad de Microsoft";
 choices[44][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[44][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[44] = 3;
 units[44] = ['66'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2671. ";
 preguntaids[44] = 2671


//  Id pregunta: 2601 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al uso de mecanismos criptogr&aacute;ficos?:";
 choices[45]= new Array();
 choices[45][0] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la latencia de las comunicaciones";
 choices[45][1] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la confidencialidad";
 choices[45][2] = "El uso de mecanismos criptogr&aacute;ficos puede implementarse por software o por hardware";
 choices[45][3] = "El uso de mecanismos criptogr&aacute;ficos no puede proporcionar integridad en las comunicaciones";
 answers[45] = 3;
 units[45] = ['76'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2601. ";
 preguntaids[45] = 2601


//  Id pregunta: 2649 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[46]= new Array();
 choices[46][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[46][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[46][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[46][3] = "Todos las respuestas anteriores son correctas";
 answers[46] = 0;
 units[46] = ['54'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2649. ";
 preguntaids[46] = 2649


//  Id pregunta: 2675 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Qu&eacute; es el 'swapping'?:";
 choices[47]= new Array();
 choices[47][0] = "Un algoritmo para planificaci&oacute;n del uso de la CPU";
 choices[47][1] = "Un mecanismo para mover procesos de ejecuci&oacute;n desde/hacia la memoria principal a/desde disco respectivamente";
 choices[47][2] = "Un tipo especial de organizaci&oacute;n de los sistemas de ficheros";
 choices[47][3] = "El tiempo medio necesario para mover un programa desde disco a la memoria principal";
 answers[47] = 1;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2675. ";
 preguntaids[47] = 2675


//  Id pregunta: 2664 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Puede ejecutarse una aplicaci&oacute;n Windows al mismo tiempo por muchos usuarios, en una misma m&aacute;quina, pero con pantallas diferentes?:";
 choices[48]= new Array();
 choices[48][0] = "No, dado que un sistema de este tipo solo puede tener una consola, esa prestaci&oacute;n est&aacute; accesible en sistemas empresariales tipo Unix";
 choices[48][1] = "Si, dado que en un servidor windows empresarial pueden conectarse varias consolas diferentes";
 choices[48][2] = "Si, utilizando X-Windows";
 choices[48][3] = "Si, utilizando servicios de Remote Desktop";
 answers[48] = 3;
 units[48] = ['55'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2664. ";
 preguntaids[48] = 2664


//  Id pregunta: 2668 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[49]= new Array();
 choices[49][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[49][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[49][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[49][3] = "No hay diferencia; son la misma arquitectura";
 answers[49] = 0;
 units[49] = ['55'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2668. ";
 preguntaids[49] = 2668


//  Id pregunta: 2600 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[50]= new Array();
 choices[50][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[50][1] = "Es un sistema operativo compatible con Unix";
 choices[50][2] = "Es software libre";
 choices[50][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[50] = 0;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2600. ";
 preguntaids[50] = 2600


//  Id pregunta: 2619 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[51]= new Array();
 choices[51][0] = "De consulta e informe.";
 choices[51][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[51][2] = "De an&aacute;lisis predictivo.";
 choices[51][3] = "De inteligencia artificial.";
 answers[51] = 2;
 units[51] = ['72'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2619. ";
 preguntaids[51] = 2619


//  Id pregunta: 2623 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de la arquitectura basada en inteligencia artificial?:";
 choices[52]= new Array();
 choices[52][0] = "Base de conocimientos";
 choices[52][1] = "Sistema inferencial";
 choices[52][2] = "Motor inferencial";
 choices[52][3] = "Memoria de trabajo";
 answers[52] = 2;
 units[52] = ['68'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2623. ";
 preguntaids[52] = 2623


//  Id pregunta: 2622 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes ejemplos de tipos de aprendizaje en miner&iacute;a de datos es no supervisado?";
 choices[53]= new Array();
 choices[53][0] = "Modelado y control.";
 choices[53][1] = "Sistemas de predicci&oacute;n.";
 choices[53][2] = "Descubrimiento de patrones.";
 choices[53][3] = "&Aacute;rboles de predicci&oacute;n.";
 answers[53] = 2;
 units[53] = ['72'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2622. ";
 preguntaids[53] = 2622


//  Id pregunta: 2661 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[54]= new Array();
 choices[54][0] = "El motor de base de datos JET de Access";
 choices[54][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[54][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[54][3] = "El Ayudante de Office";
 answers[54] = 3;
 units[54] = ['58', '68'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2661. ";
 preguntaids[54] = 2661


//  Id pregunta: 2663 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Por qu&eacute; se dice que C es un lenguaje de nivel medio?";
 choices[55]= new Array();
 choices[55][0] = "porque su aprendizaje es de dificultad media respecto de otros m&aacute;s f&aacute;ciles o dif&iacute;ciles";
 choices[55][1] = "porque su funcionalidad es suficientemente buena aunque no es de los lenguajes que mayores funcionalidades presenta";
 choices[55][2] = "porque est&aacute; a medio camino entre la potencia y rapidez del lenguaje ensamblador y la funcionalidad del lenguaje natural";
 choices[55][3] = "porque sus programas tienen un tama&ntilde;o medio en comparaci&oacute;n con otros lenguajes de programas m&aacute;s simples y otros de programas muy complejos y largos";
 answers[55] = 2;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2663. ";
 preguntaids[55] = 2663


//  Id pregunta: 2654 Año de creación de pregunta: 2002
 questions[56]= "57)  &iquest;En qu&eacute; consiste el 'refresco' de una memoria din&aacute;mica?:";
 choices[56]= new Array();
 choices[56][0] = "En el proceso de optimizaci&oacute;n de la temperatura de trabajo de este tipo de memorias";
 choices[56][1] = "En la operaci&oacute;n de reescritura peri&oacute;dica que hay que realizar en ellas para que no pierdan la informaci&oacute;n almacenada";
 choices[56][2] = "En la operaci&oacute;n de acceso peri&oacute;dico que hay que realizar a este tipo de memorias, para repetir la &uacute;ltima operaci&oacute;n realizada";
 choices[56][3] = "El refresco no es propio de las memorias din&aacute;micas";
 answers[56] = 1;
 units[56] = ['50'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2654. ";
 preguntaids[56] = 2654


//  Id pregunta: 2674 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Qu&eacute; es el repositorio de Oracle Designer?:";
 choices[57]= new Array();
 choices[57][0] = "Un objeto para obtener listados";
 choices[57][1] = "Una base de datos donde se guardan las estructuras que se van creando";
 choices[57][2] = "Un formulario especial de licencias del Designer";
 choices[57][3] = "Una base de datos que almacena solo los usuarios con acceso al Designer";
 answers[57] = 1;
 units[57] = ['60'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2674. ";
 preguntaids[57] = 2674


//  Id pregunta: 2665 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[58]= new Array();
 choices[58][0] = "Si";
 choices[58][1] = "No, pero reglas y restricciones si";
 choices[58][2] = "No, pero reglas y marcos si";
 choices[58][3] = "No";
 answers[58] = 0;
 units[58] = ['68'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2665. ";
 preguntaids[58] = 2665


//  Id pregunta: 2672 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Qu&eacute; es el abandonware?:";
 choices[59]= new Array();
 choices[59][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[59][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[59][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[59][3] = "Nada de lo anterior es cierto";
 answers[59] = 1;
 units[59] = ['66'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2672. ";
 preguntaids[59] = 2672


//  Id pregunta: 2660 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Podr&iacute;a decir cu&aacute;l de los siguientes no es un sistema Unix?:";
 choices[60]= new Array();
 choices[60][0] = "AIX";
 choices[60][1] = "OpenVMS";
 choices[60][2] = "HP-UX";
 choices[60][3] = "Solaris";
 answers[60] = 1;
 units[60] = ['57'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2660. ";
 preguntaids[60] = 2660


//  Id pregunta: 2609 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal de un ordenador?:";
 choices[61]= new Array();
 choices[61][0] = "Volatilidad del contenido";
 choices[61][1] = "Tiempo de acceso peque&ntilde;o";
 choices[61][2] = "Direccionabilidad";
 choices[61][3] = "Acceso a trav&eacute;s de canal desde la unidad central de proceso";
 answers[61] = 3;
 units[61] = ['50'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 2609. ";
 preguntaids[61] = 2609


//  Id pregunta: 2631 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?";
 choices[62]= new Array();
 choices[62][0] = "Regla de la no subversi&oacute;n";
 choices[62][1] = "Independencia l&oacute;gica de los datos";
 choices[62][2] = "Actualizaci&oacute;n de vistas";
 choices[62][3] = "Consistencia de los datos";
 answers[62] = 3;
 units[62] = ['61'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2631. ";
 preguntaids[62] = 2631


//  Id pregunta: 2604 Año de creación de pregunta: 2002
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones se ajusta m&aacute;s a la definici&oacute;n de MIPS?:";
 choices[63]= new Array();
 choices[63][0] = "Expresa la capacidad de ejecuci&oacute;n de instrucciones de una m&aacute;quina";
 choices[63][1] = "Expresa la velocidad de ejecuci&oacute;n en miles de intrucciones por segundo";
 choices[63][2] = "Expresa la potencia de c&aacute;lculo cient&iacute;fico de un computador";
 choices[63][3] = "Expresa la potencia de c&aacute;lculo de generaci&oacute;n de gr&aacute;ficos";
 answers[63] = 0;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 2604. ";
 preguntaids[63] = 2604


//  Id pregunta: 2626 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes es un modelo de inteligencia artificial distribuida?:";
 choices[64]= new Array();
 choices[64][0] = "Modelo de actores";
 choices[64][1] = "Modelo de puntos de funci&oacute;n";
 choices[64][2] = "Modelo de regresi&oacute;n m&uacute;ltiple";
 choices[64][3] = "Modelo de Nashville";
 answers[64] = 0;
 units[64] = ['67'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2626. ";
 preguntaids[64] = 2626


//  Id pregunta: 2630 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje declarativo?";
 choices[65]= new Array();
 choices[65][0] = "Prolog";
 choices[65][1] = "LISP";
 choices[65][2] = "Clos";
 choices[65][3] = "Todos los lenguajes anteriores son declarativos";
 answers[65] = 3;
 units[65] = ['68'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2630. ";
 preguntaids[65] = 2630


//  Id pregunta: 2677 Año de creación de pregunta: 2002
 questions[66]= "67)  &iquest;Qu&eacute; es JDBC?:";
 choices[66]= new Array();
 choices[66][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[66][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[66][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[66][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[66] = 1;
 units[66] = ['60', '61', '64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2677. ";
 preguntaids[66] = 2677


//  Id pregunta: 2644 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l no es caracter&iacute;stica del puerto paralelo?:";
 choices[67]= new Array();
 choices[67][0] = "Transmite y recibe 8 bits a la vez";
 choices[67][1] = "Se define en el Nivel 2 de la ISO";
 choices[67][2] = "Es un puerto RS-232-C de 25 pines";
 choices[67][3] = "Tambi&eacute;n se le conoce en los PC&acute;s como printer port";
 answers[67] = 1;
 units[67] = ['50'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2644. ";
 preguntaids[67] = 2644


//  Id pregunta: 2621 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes dispositivos no tiene relaci&oacute;n con el almacenamiento de la informaci&oacute;n?:";
 choices[68]= new Array();
 choices[68][0] = "RAID";
 choices[68][1] = "OCR";
 choices[68][2] = "WORM";
 choices[68][3] = "DAT";
 answers[68] = 1;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2621. ";
 preguntaids[68] = 2621


//  Id pregunta: 2624 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes entornos UNIX no puede ser considerado como SVR4?:";
 choices[69]= new Array();
 choices[69][0] = "4.2 BSD";
 choices[69][1] = "Solaris 2.3";
 choices[69][2] = "Unixware";
 choices[69][3] = "HP-UX";
 answers[69] = 0;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2624. ";
 preguntaids[69] = 2624


//  Id pregunta: 2647 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[70]= new Array();
 choices[70][0] = "Conocimiento del sistema superior al del experto";
 choices[70][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[70][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[70][3] = "Todas las anteriores";
 answers[70] = 1;
 units[70] = ['68'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2647. ";
 preguntaids[70] = 2647


//  Id pregunta: 2653 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[71]= new Array();
 choices[71][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[71][1] = "En consolidar los datos por distintas trayectorias.";
 choices[71][2] = "En encontrar nuevas relaciones entre variables.";
 choices[71][3] = "Todas las respuestas anteriores son correctas.";
 answers[71] = 3;
 units[71] = ['72'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2653. ";
 preguntaids[71] = 2653


//  Id pregunta: 2650 Año de creación de pregunta: 2002
 questions[72]= "73)  &iquest;Cu&aacute;ntos s&iacute;mbolos diferentes pueden representarse en EBCDIC?";
 choices[72]= new Array();
 choices[72][0] = "128";
 choices[72][1] = "64";
 choices[72][2] = "256";
 choices[72][3] = "512";
 answers[72] = 2;
 units[72] = ['51'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 2650. ";
 preguntaids[72] = 2650


//  Id pregunta: 2620 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes conceptos no es caracter&iacute;stico de los sistemas expertos?:";
 choices[73]= new Array();
 choices[73][0] = "Base de conocimiento";
 choices[73][1] = "Encadenamiento de reglas";
 choices[73][2] = "Motor de inferencia";
 choices[73][3] = "Proceso algor&iacute;tmico";
 answers[73] = 3;
 units[73] = ['68'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 2620. ";
 preguntaids[73] = 2620


//  Id pregunta: 2652 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[74]= new Array();
 choices[74][0] = "Unicode";
 choices[74][1] = "ITU 396-4";
 choices[74][2] = "ANSI 328";
 choices[74][3] = "Ninguno de los anteriores";
 answers[74] = 0;
 units[74] = ['74'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2652. ";
 preguntaids[74] = 2652


